const SYSTEM_FAILURE: string = 'Internal server error!!!';

// middleware auth
const MIDDLEWARE_AUTH_CONSTANTS: object = {
  INVALID_API_KEY: 'Invalid API key',
  ACCESS_DENIED: 'Access denied. No authorization token provided',
  RESOURCE_FORBIDDEN: "You don't have access to the request resource.",
  INVALID_AUTH_TOKEN: 'Invalid token'
};

// auth contants
// const AUTH_CONSTANTS: object = {
//   INVALID_OPERATOR: "Invalid API key"
// };

// subscriber constants
const SUBSCRIBER_CONSTANTS: any = {
  SUBSCRIBER_NOT_FOUND: 'Subscriber url not found'
};

export { SYSTEM_FAILURE, MIDDLEWARE_AUTH_CONSTANTS, SUBSCRIBER_CONSTANTS };
