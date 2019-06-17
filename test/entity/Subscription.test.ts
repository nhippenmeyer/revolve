import 'reflect-metadata';
import { Connection } from 'typeorm';
import Subscription from '../../src/entity/Subscription';
import db from '../../src/db';

describe('Subscription', (): void => {
  let subscription: Subscription;
  let connection: Connection;

  beforeAll(
    async (): Promise<void> => {
      connection = await db();
    },
  );

  afterAll(
    async (): Promise<void> => {
      await connection.close();
    },
  );

  beforeEach((): void => {
    subscription = new Subscription();
  });

  test('initial state', (): void => {
    expect(subscription.state()).toEqual('created');
  });

  describe('persisting', (): void => {
    beforeEach(
      async (): Promise<void> => {
        await subscription.save();
      },
    );

    test('creates a new record', async (): Promise<void> => {
      const records = await Subscription.find();
      expect(records).toHaveLength(1);
    });
  });
});
