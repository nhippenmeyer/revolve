import { interpret } from 'xstate';
import logger from '../logger';
import machine from './machine';

const service = interpret(machine).onTransition((state): void => {
  logger.info('Subscription transitioned', { value: state.value });
  return;
});

export default service;
