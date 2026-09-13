import 'server-only';

const SERVER_ENV = {
  imagekit_secret_key: process.env.PRIVATE_KEY,
};

export default SERVER_ENV;
