import dotenv from 'dotenv';
dotenv.config();

export default {
  environment: 'testing',
  appName: 'Pangaea Publisher',
  appDomain: process.env.TESTING_APP_DOMAIN,
  apiKey: process.env.API_KEY,
  dbConnString: process.env.TESTING_DB_CONN_STRING,
  port: process.env.TESTING_PORT,
  jwtAccessTokenPrivateKey: process.env.JWT_ACCESS_TOKEN_PRIVATE_KEY,
  jwtRefreshTokenPrivateKey: process.env.JWT_REFRESH_TOKEN_PRIVATE_KEY,
  requiresAuth: true,
  bcryptSalt: process.env.BCRYPT_SALT,
  mqConnUrl: process.env.MQ_CONN_URL
};
