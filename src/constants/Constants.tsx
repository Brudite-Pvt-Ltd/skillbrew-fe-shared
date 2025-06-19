import { ReduxState } from "../utils/Types";

export const CODE = {
  OK_CODE: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST_CODE: 400,
  NOT_FOUND: 404,
  UNAUTHORIZED_CODE: 403,
  VALIDATION_CODE: 422,
  INTERNAL_SERVER_ERROR: 500,
  EXPIRE_ACCESSTOKEN_CODE: 401,
  CONFLICT: 409,
  TIMEOUT: 408,
  UNPROCESSABLE_CONTENT: 422,
};

export const VALIDATION_MESSAGE = {
  CATCH_ERROR: "Something went wrong. Please try again.",
  NO_SPACE_ALLOWED: "No space allowed.",
  EMAIL_REQUIRED: "Enter email address.",
  VALID_EMAIL: "Please enter a valid email address.",
  EMAIL_MAX: "Email must be at most 150 characters.",
  ROLL_NAME_REQUIRED: "Enter role name.",
  ROLL_NAME_MAX: "Role name must be at most 25 characters.",
  ROLL_NAME_VALID: "The role name must contain alpha characters only.",
  ROLE_ID_REQUIRED: "Please choose a role.",
  TITLE_REQUIRED: "Enter ambience title.",
  TITLE_MAX: "Title must be at most 50 characters.",
  TITLE_VALID: "The title must contain alpha & numeric characters only.",
  JOB_TITLE_REQUIRED: "Enter your designation.",
  JOB_TITLE_MAX: "Designation must be at most 50 characters.",
  JOB_TITLE_VALID: "Designation must contain alpha & numeric characters only.",
  FILE_REQUIRED: "Please choose a audio file & accept only mp3.",
  ICON_REQUIRED: "Please choose a icon & accept only jpeg png jpg files.",
  FULL_NAME_REQUIRED: "Enter full name.",
  FULL_NAME_MIN: "Full name must have at least 2 characters.",
  FULL_NAME_MAX: "Full name must be at most 50 characters.",
  USER_NAME_MAX: "User name must be at most 50 characters.",
  USER_NAME_MIN: "User name must have at least 3 characters.",
  GUEST_NAME_MAX: "Guest name must be at most 50 characters.",
  FULL_NAME_VALID: "The full name must contain alpha characters only.",
  FIRST_NAME_MIN: "First name must have at least 2 characters.",
  FIRST_NAME_MAX: "First name must be at most 50 characters.",
  LAST_NAME_REQUIRED: "Enter last name.",
  LAST_NAME_MIN: "Last name must have at least 2 characters.",
  LAST_NAME_MAX: "Last name must be at most 25 characters.",
  LAST_NAME_VALID: "The last name must contain alpha characters only.",
  COMPANY_NAME_REQUIRED: "Enter Company Name.",
  COMPANY_TYPE_REQUIRED: "You must select the type of Organization.",
  COMPANY_NAME_VALID: "The company name must contain alpha characters only.",
  COMPANY_NAME_MAX: "Company name must be at most 50 characters.",
  COMPANY_NAME_MIN: "Company name must have at least 3 characters.",

  COUNTRY_CODE_REQUIRED: "Enter country code.",
  MOBILE_NUMBER_REQUIRED: "Enter mobile number.",
  PHONE_NUMBER_VALID: "Please enter a valid mobile number.",
  MOBILE_NUMBER_DIGIT: "Mobile number must be 10 digit.",
  MOBILE_NUMBER_MIN: "Mobile number must be between 8 to 16 digit.",
  MOBILE_NUMBER_MAX: "Mobile number must be between 8 to 16 digit.",
  PAN_CARD_NUMBER_REQUIRED: "Enter Pan card number.",
  DRUG_LICENSE_REQUIRED: "Select Drug License.",
  PAN_CARD_NUMBER_VALID: "Please enter a valid Pan Card Number.",
  GST_NUMBER_REQUIRED: "Enter GST number.",
  GST_NUMBER_VALID: "Please enter a valid GST Number.",
  TERMS_CONDITIONS_REQUIRED: "Terms & Conditions is required.",

  PASSWORD_VALID:
    "Password must have uppercase, lowercase, special character and number.",
  PASSWORD_UPPER_CASE:
    "Password must have uppercase, lowercase, special character and number.",
  PASSWORD_SPECIAL_CASE:
    "Password must have uppercase, lowercase, special character and number.",
  PASSWORD_NUMBER_CASE:
    "Password must have uppercase, lowercase, special character and number.",

  PASSWORD_REQUIRED: "Please Enter Password.",
  PASSWORD_MIN_CHAR: "Password must have at least 8 characters.",
  PASSWORD_MAX_CHAR: "Password must be at most 16 characters.",

  OTP_REQUIRED: "Please Enter OTP.",
  OTP_MIN_CHAR: "OTP must have at least 6 characters.",
  OTP_MAX_CHAR: "OTP must be at most 6 characters.",

  CONFIRM_PASSWORD_REQUIRED: "Please Enter Confirm Password.",
  CONFIRM_PASSWORD_MIN_CHAR:
    "Confirm password must have at least 8 characters.",
  CONFIRM_PASSWORD_MAX_CHAR: "Confirm password must be at most 16 characters.",
  CONFIRM_PASSWORD_VALID:
    "Password must have uppercase, lowercase, special character and number.",

  OLD_PASSWORD_REQUIRED: "Please enter old password.",
  OLD_PASSWORD_MIN_CHAR: "Old password must have at least 8 characters.",
  OLD_PASSWORD_MAX_CHAR: "Old password must be at most 16 characters.",

  NEW_PASSWORD_REQUIRED: "Please enter new password.",
  NEW_PASSWORD_MIN_CHAR: "Password must be atleast 8 characters.",
  NEW_PASSWORD_MAX_CHAR: "Password must be at most 32 characters.",

  CONFIRM_NEW_PASSWORD_REQUIRED: "Please enter confirm password.",
  CONFIRM_NEW_PASSWORD_MIN_CHAR:
    "Confirm password must have atleast 8 characters.",
  CONFIRM_NEW_PASSWORD_MAX_CHAR:
    "Confirm password must be at most 32 characters.",
  PASSWORD_CPWD_NOT_MATCHED: "Password doesn't match.",
  PASSWORD_OLD_NOT_SAME: "Old password and new password should not be same",

  ADDRESS_NAME_REQUIRED: "Enter Name.",
  ADDRESS_NAME_MAX: "Name must be at most 25 characters",
  ADDRESS_NAME_VALID: "The name must contain alpha characters only.",
  ADDRESS_COMPANY_NAME_REQUIRED: "Enter Company Name.",
  ADDRESS_SHOP_NUMBER_REQUIRED: "Enter Shop Number.",
  ADDRESS_BUILDING_NAME_REQUIRED: "Enter Building Name.",
  ADDRESS_STREET_NUMBER_REQUIRED: "Enter Street Number.",
  ADDRESS_ADDRESS_LINE_ONE_REQUIRED: "Enter Address Line - 1.",
  ADDRESS_ADDRESS_LINE_TWO_REQUIRED: "Enter Address Line - 2.",
  ADDRESS_STATE_REQUIRED: "Enter State.",
  ADDRESS_TOWN_CITY_DISTRICT_REQUIRED: "Enter Town / City / District.",
  ADDRESS_PIN_CODE_REQUIRED: "Enter Pin Code.",
  ADDRESS_PIN_CODE_VALID: "Please enter a valid pin code.",
  ADDRESS_PIN_CODE_DIGIT: "Pin code must be 6 digit.",
  ADDRESS_PIN_CODE_MIN: "Pin code must be at least 6 digit.",
  ADDRESS_PIN_CODE_MAX: "Pin code must be at most 6 digit.",

  ADDRESS_DELETE_TITLE: "Are you sure?",
  ADDRESS_DELETE_TEXT: "Are you sure you want to delete this item?",

  REMOVE_PROFILE_IMAGE: "Are you sure you want to remove profile?",

  DURATION_MIN: "Duration should be at least 15 days.",

  DOCUMEMNT_UNSUPPORTED: "Unsupported file format.",
  USER_UNSUPPORTED: "Unsupported file format.",

  LOGOUT_MODEL_TITLE: "Are you sure?",
  LOGOUT_MODEL_TEXT: "Are you sure you want to logout?",

  ANY_CHOOSE: "Choose",
  ANY_REQUIRED: "Please Enter ",
  ANY_SELECT: "Please Select ",
  ANY_MAX: " must be at most 25 characters.",
  ANY_VALID: " must contain alpha characters only.",

  ARE_YOU_SURE: "Are you sure?",
  ARE_YOU_DELETE_ANY: "Are you sure you want to delete this.",
  ARE_YOU_VERIFY_EMAIL: "Are you sure you want to verify email for this user?",
  PROFILE_SIZE: "Image Size not more than 1MB",

  QUESTION_TITLE_REQUIRED: "Please Enter Question Title.",
  QUESTION_TITLE_MAX: "Question title must be at most 150 characters.",
  QUESTION_TITLE_MIN: "Question title must be at least 3 characters.",

  OPTION_REQUIRED: "Please Enter Option.",
  OPTION_MAX: "Option must be at most 1000 characters.",
  OPTION_MIN: "Option must be at least 2 characters.",

  QUESTION_DESCRIPTION_REQUIRED: "Please Enter Question Description.",
  QUESTION_DESCRIPTION_MAX:
    "Question description must be at most 1000 characters.",
  QUESTION_DESCRIPTION_MIN:
    "Question description must be at least 5 characters.",

  CONSTRAINT_REQUIRED: "Please Enter Constraint.",
  CONSTRAINT_MAX:
    "Constraint must be at most 1000 characters and in different line.",

  EXPLANATION_REQUIRED: "Please Enter Explanation.",
  EXPLANATION_MAX: "Explanation must be at most 1000 characters.",

  INPUT_REQUIRED: "Please Enter Input.",
  INPUT_MAX: "Input must be at most 1000 characters.",

  MESSAGE_REQUIRED: "Please Enter Message.",
  MESSAGE_MAX: "Message should not exceed 1000 characters.",
  MESSAGE_MIN: "Message must be at least 25 characters.",

  INPUT_FORMAT_REQUIRED: "Please Enter Input Format.",
  INPUT_FORMAT_MAX: "Input Format must be at most 1000 characters.",

  OUTPUT_FORMAT_REQUIRED: "Please Enter Output Format.",
  OUTPUT_FORMAT_MAX: "Output Format must be at most 1000 characters.",

  OUTPUT_REQUIRED: "Please Enter Output.",
  OUTPUT_MAX: "Output must be at most 1000 characters.",

  SOLUTION_REQUIRED: "Please Enter Solution.",

  SUBJECT_REQUIRED: "Please Enter Subject.",
  SUBJECT_MAX: "Subject should not exceed 100 characters.",
  SUBJECT_MIN: "Subject must be at least 8 characters.",

  TEST_CASE_REQUIRED: "Please Enter Test Case",

  TAG_REQUIRED: "Please Enter Some Tags Here.",

  LINKEDIN_REQUIRED: "Please Enter Linked Link.",
  GITHUB_REQUIRED: "Please Enter Linked Link.",

  TEST_TITLE_REQUIRED: "Please Enter Test Title.",
  TEST_TITLE_MAX: "Test title must be at most 50 characters.",
  TEST_TITLE_MIN: "Test title must be at least 5 characters.",

  PROJECT_NAME_REQUIRED: "Please Enter Project name.",
  PROJECT_NAME_MAX: "Project name must be at most 150 characters.",
  PROJECT_NAME_MIN: "Project name must be at least 1 characters.",

  PROJECT_DESCRIPTION_REQUIRED: "Please Enter Project description.",
  PROJECT_DESCRIPTION_MAX:
    "Project description must be at most 500 characters.",
  PROJECT_DESCRIPTION_MIN:
    "Project description must be at least 50 characters.",
  PROFILE_DESCRIPTION_REQUIRED: "Please Enter Bio.",
  PROFILE_DESCRIPTION_MAX: "About must be at most 500 characters.",
  PROFILE_DESCRIPTION_MIN: "About must be at least 5 characters.",
  VALID_LINK: "Enter valid link.",
  DATE_BEFORE_CURRENT_INVALID:
    "Date must not be greater than the current date.",
  END_DATE_BEFORE_START:
    "Please ensure the end date is not before the start date.",

  DESCRIPTION_REQUIRED: "Please Enter description.",
  DESCRIPTION_MAX: "Description must be at most 1000 characters.",
  DESCRIPTION_MIN: "Description must be at least 50 characters.",

  RESUME_REQUIRED: "Resume is required",
  RESUME_FILE_TYPE:
    "This file type is not supported, make sure you've uploaded .PDF/.DOC/.DOCX format only",
  RESUME_MAX_FILE_SIZE:
    "Your uploaded file is exceeding the required file size",

  CSV_FILE_REQUIRED: "CSV/Excel File is required",
  CSV_FILE_MAX_SIZE: "Your uploaded file is exceeding the required file size",
  CSV_FILE_TYPE:
    "This file type is not supported, make sure you've uploaded .CSV/.XLXS/.XLS format only",

  DRIVE_TITLE_REQUIRED: "Title is required.",
  DRIVE_TITLE_MIN: "Title must be at least 3 characters.",
  DRIVE_TITLE_MAX: "Title cannot exceed 150 characters.",
  LOCATION_REQUIRED: "Location is required.",
  LOCATION_TYPE_REQUIRED: "Location type is required.",
  LOCATION_MAX: "Location cannot exceed 150 characters.",
  DRIVE_TYPE_REQUIRED: "Drive type is required.",
  VISIBILITY_REQUIRED: "Visibility is required.",
  STATUS_REQUIRED: "Status is required.",
  REQUIRED_SKILLS_REQUIRED: "At least one skill is required.",
  TOTAL_STAGES_REQUIRED: "Total stages are required.",
  TOTAL_STAGES_POSITIVE: "Total stages must be a positive number.",
  MINIMUM_CGPA_REQUIRED: "Minimum CGPA is required.",
  MINIMUM_CGPA_POSITIVE: "Minimum CGPA must be a positive number.",
  MINIMUM_CGPA_RANGE: "Minimum CGPA must be between 0 and 10.",
  MINIMUM_CGPA_DECIMAL: "Minimum CGPA can be most 2 decimal places.",
  JOB_TYPE_REQUIRED: "Job type is required.",
  VACANCY_REQUIRED: "Vacancy is required.",
  VACANCY_POSITIVE: "Vacancy must be a positive number.",
  START_AT_REQUIRED: "Start date and time are required.",
  END_AT_REQUIRED: "End date and time are required.",
  END_AT_AFTER_START: "End date must be after the start date.",
  PHASE_DESCRIPTION_REQUIRED: "Description is required.",
  PHASE_DESCRIPTION_MIN: "Description must be at least 10 characters long.",
  PHASE_DESCRIPTION_MAX: "Description must not exceed 500 characters.",
  DURATION_REQUIRED: "Duration is required.",
  DURATION_POSITIVE: "Duration must be a positive number.",
  MINIMUM_DURATION: "Duration must be at least 5 minutes.",
  SALARY_REQUIRED: "Salary is required.",
};

export const isUserLoginToken = "isUserLoginToken";

export const initialState: ReduxState = {
  status: false,
  loading: false,
  data: null,
  error: null,
};
