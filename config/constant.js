const SYSTEM_FAILURE = "Internal server error!!!";


// middleware auth
const MIDDLEWARE_AUTH_CONSTANTS = {
  ACCESS_DENIED: "Access denied. No authorization token provided",
  RESOURCE_FORBIDDEN: "You don't have access to the request resource.",
  INVALID_AUTH_TOKEN: "Invalid token",
};


//
const AUTH_CONSTANTS = {
  INVALID_OPERATOR: "Invalid Operator Id",
  INVALID_CREDENTIALS: "Invalid email or password",
  INVALID_PASSWORD: "You have entered incorrect old password. Please try again with valid password.",
  INACTIVE_ACCOUNT: "Account is not active. please contact admin",
  INVALID_EMAIL: "The email provided is not registered. Please sign up to continue.",
  PASSWORD_CHANGE_SUCCESS: "Password changed succesfully",
  MOBILE_REQUIRED: '"mobile" is required',
};



const VERSION_CONSTANT = {
  SUBMIT_SUCCESS: "Version details added successfully",
  NO_UPDATE: "You are on latest version",
  VERSION_MANDATORY: "Query parameter v is mandatory",
  APPTYPE_MANDATORY: "Query parameter appType is mandatory",
};


// admins.js
const ADMIN_CONSTANTS = {
  INVALID_EMAIL: "Invalid username/password.",
  BLOCKED_ACCOUNT: "Your account is blocked. Please contact admin.",
  NOTIFICATION_SUCCESS: "Notificaiton submitted successfully",
  DUPLICATE_MANAGER: "Manager with given email already exists.",
  MANAGER_SUBMIT_SUCCESS: "Manager added successfully",
  MANAGER_DELETE_SUCCESS: "Manager updated successfully",
  MANAGER_UPDATE_SUCCESS: "Manager deleted successfully",
  INVALID_MANAGER: "No manager with given Id found.",
};


const ROLE_CONSTANTS = {
  SUBMIT_SUCCESS: "Role added successfully",
  UPDATE_SUCCESS: "Role updated successfully",
  DELETE_SUCCESS: "Role deleted successfully",
};


const USER_CONSTANTS = {
  INVALID_USER: "User with given id not found",
  UPDATE_SUCCESS: "Update successfull!",
  SUBMIT_SUCCESS: "User added successfully",
  EMAIL_ALREADY_EXISTS: "Email already registered",
  PHONE_ALREADY_EXISTS: "Phone number already registered",
  MOBILE_EMAIL_ALREADY_EXISTS: "Mobile and Email both already registered",
  ALL_CHECKS_VALID: "All check are valid",
  VERIFICATION_SUCCESS: "Verification success. Please log in.",
  VERIFICATION_FAILURE: "We were unable to find a valid token. Your token may have expired.",
  USER_ALREADY_VERIFIED: "This user has already been verified.",
  VERIFICATION_EMAIL_SENT: "Please confirm yourself by clicking on verify user button sent to your email",
  RESET_PASSWORD_EMAIL_SENT: "A reset email has been sent to your email",
  PASSWORD_MISMATCH: "Passwords do not match",
  NOT_YET_VERIFIED: "Your account has not been verified.",
  PASSWORD_CHANGE_SUCCESS: "Password reset successfully!"
};








const _SYSTEM_FAILURE = SYSTEM_FAILURE;
export { _SYSTEM_FAILURE as SYSTEM_FAILURE };
const _AUTH_CONSTANTS = AUTH_CONSTANTS;
export { _AUTH_CONSTANTS as AUTH_CONSTANTS };
const _MIDDLEWARE_AUTH_CONSTANTS = MIDDLEWARE_AUTH_CONSTANTS;
export { _MIDDLEWARE_AUTH_CONSTANTS as MIDDLEWARE_AUTH_CONSTANTS };
const _ADMIN_CONSTANTS = ADMIN_CONSTANTS;
export { _ADMIN_CONSTANTS as ADMIN_CONSTANTS };
const _VERSION_CONSTANT = VERSION_CONSTANT;
export { _VERSION_CONSTANT as VERSION_CONSTANT };
const _ROLE_CONSTANTS = ROLE_CONSTANTS;
export { _ROLE_CONSTANTS as ROLE_CONSTANTS };
const _USER_CONSTANTS = USER_CONSTANTS;
export { _USER_CONSTANTS as USER_CONSTANTS };

