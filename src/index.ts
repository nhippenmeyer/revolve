import 'reflect-metadata';
import logger from './logger';
import db from './db';

import './env';

const main = async (): Promise<void> => {
  try {
    await db();
  } catch (error) {
    logger.error(error);
  }
};

main();
