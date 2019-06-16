import './env';

import 'reflect-metadata';
import { createConnection } from 'typeorm';
import Subscription from './entities/Subscription';
import logger from './logger';

const main = async (): Promise<void> => {
  try {
    await createConnection();

    logger.info('Inserting a new subscription into the database...');
    const subscription = new Subscription();
    await subscription.save();

    const subsriptions = await Subscription.find();
    logger.info('Loaded subsriptions: ', subsriptions);
  } catch (error) {
    logger.error(error);
  }
};

main();
