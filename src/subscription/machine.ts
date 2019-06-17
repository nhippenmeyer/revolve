import { Machine } from 'xstate';

export interface Context {} // eslint-disable-line @typescript-eslint/no-empty-interface

export interface StateSchema {
  states: {
    created: {};
    pending: {};
    trial: {};
    active: {};
    canceled: {};
    expired: {};
  };
}

export type Event =
  | { type: 'START_TRIAL' }
  | { type: 'ACTIVATE' }
  | { type: 'CANCEL' }
  | { type: 'EXPIRE' };

export default Machine<Context, StateSchema, Event>({
  id: 'subscription',
  initial: 'created',
  states: {
    created: {
      on: {
        START_TRIAL: 'trial',
        ACTIVATE: 'active',
      },
    },
    pending: {
      on: {
        ACTIVATE: 'active',
      },
    },
    trial: {
      on: {
        ACTIVATE: 'active',
      },
    },
    active: {
      on: {
        CANCEL: 'canceled',
        EXPIRE: 'expired',
      },
    },
    canceled: {
      type: 'final',
    },
    expired: {
      type: 'final',
    },
  },
});
