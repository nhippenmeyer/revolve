import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
  const options = await getConnectionOptions(process.env.NODE_ENV);

  return createConnection({ ...options, name: 'default' });
};
