const SYSTEM_FAILURE = 'Internal server error!!!';

// middleware auth
const MIDDLEWARE_AUTH_CONSTANTS = {
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
const SUBSCRIBER_CONSTANTS = {
  SUBSCRIBER_NOT_FOUND: 'Subscriber url not found',
  SUBSCRIBER_EXISTS: 'Subscription already exists for this topic',
  SUBSCRIBER_ADDED: 'Subscriber added successfully'
};

// topic constants
const TOPIC_CONSTANTS = {
  TOPIC_NOT_FOUND: 'Topic not found',
  TOPIC_EXISTS: 'Topic exists',
  TOPIC_ADDED: 'Topic added successfully'
};

// publish constants
const PUBLISH_CONSTANTS = {
  PUBLISH_SUCCESS: 'Published successfully',
  SUBSCRIBER_NOT_FOUND: 'This topic has no availabe subscriber to publish to'
};

export {
  SYSTEM_FAILURE,
  MIDDLEWARE_AUTH_CONSTANTS,
  SUBSCRIBER_CONSTANTS,
  TOPIC_CONSTANTS,
  PUBLISH_CONSTANTS
};
