export interface CreatedBy {
  id: number;
  email: string;
  fullname: string;
  logo: string;
}

export interface Option {
  label: string;
  value: string;
}

export interface AttachmentType {
  id: number;
  object_id: number;
  attachment_file: string;
  attachment_type: string;
  content_type: number;
  creator: number;
}

export interface Topic {
  id: number;
  name: string;
}

export interface CompanyTag {
  id: number;
  name: string;
}

export interface Question {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  image: string | null;
  question_type: string;
  coins: number;
  mark_del: boolean;
  created_at: string;
  updated_at: string;
  tags: TagType[];
  solved_by: number;
  max_score: number;
  created_by: CreatedBy;
  attachments: AttachmentType[];
  language: Language[];
  input_format: string;
  output_format: string;
  constraints: string;
  topics: Topic[];
  company_tags: CompanyTag[];
  is_verified: boolean;
  question_validation: {
    organization: QuestionValidation[];
    contest: QuestionValidation[];
    public: QuestionValidation[];
  };
  testcases: TestCaseOutput[];
  options: SubmittedQuestionOptions[];
}

export interface DifficultyLevels {
  easy: number;
  medium: number;
  hard: number;
}

export interface QuestionTags {
  tag: (string | null)[];
  easy: number;
  medium: number;
  hard: number;
}

export interface QuestionSolveData {
  coding_question: QuestionTags;
  objective_question: QuestionTags;
  tags: (string | null)[];
}

export interface Tag {
  tags__name: string;
  tags__id: number;
  count: number;
}

export interface TestCase {
  id: number;
  input: string;
  expected_output: string;
}

export interface TestCaseOutput {
  id: number;
  input: string;
  expected_output: string;
  is_correct: boolean;
  output: string;
  is_locked: boolean;
  is_sample_testcase: boolean;
  explanation: string;
}

export interface QuestionSolution {
  predefined_code: string;
  language: Language;
  question: number;
}

export interface QuestionData {
  question: Question;
  sample_testcases: TestCaseOutput[];
  testcases: TestCaseOutput[];
  predefined_code: QuestionSolution[];
  total_run_testcases: number;
}

export interface CustomUser {
  id: number;
  email: string;
  fullname: string;
  logo: string | null;
}

export interface Participant {
  id: string;
  user_email: string;
  sharecoderoom: string;
  accesstype: string;
  user_type: string;
  mark_del: boolean;
  custom_user: CustomUser;
}

export interface ClientAccess {
  access_type: string;
  client_access_id: string;
  user_email: string;
}

export interface FileData {
  id: number;
  title: string;
  file: string;
  language: string;
  created_at: string;
  updated_at: string;
}

export interface LanguageOptionType {
  id: number;
  name: string;
  extension: string;
  language: any;
  defaultCode: string;
}

export interface IDEFileData {
  id: number;
  in: number;
  title: string;
  file: string;
  language: LanguageOptionType;
}

export interface ClientDetails {
  client_token: string;
  code_room_id: string;
  client_access_id: string;
  user_type: string;
  file_data: FileData;
}

export interface Skill {
  id: any;
  name: any;
}

export interface User {
  id: number;
  email: string;
  fullname: string;
  logo: string;
}

export interface UserAuthInfo {
  access_token: string;
  user_id: number;
  email: string;
  fullname: string;
  org_id: number | null;
  logo: string | null;
}

export interface Attachment {
  id: number;
  object_id: number;
  file_name: string;
  attachment_file: string;
  attachment_type: string;
  attachment_path: string;
  content_type: number;
  creator: number;
  attachment_field: number;
}

export interface UserData {
  id: number;
  skills: Skill[];
  user: User;
  logo: string | null;
  cover_img: string | null;
  gender: string | null;
  description: string | null;
  contact_no: string | null;
  city: string | null;
  state: string | null;
  country: Option;
  followers_count: 0;
  following_count: 0;
  job_title: null;
  total_coins: 0;
  created_at: string;
  test_given: number;
  attachments: Attachment[];
}

export interface ProjectTechStack {
  id: number;
  name: string;
}

export interface ProjectData {
  id: number;
  techstack: ProjectTechStack[];
  title: string;
  repo_link: string;
  host_link: string;
  description: string;
  img: string | null;
  start_at: string;
  end_at: string;
}

export interface UserDetailsType {
  is_my_profile: boolean;
  user_data: UserData;
  is_following: boolean;
}

export interface BatchData {
  id: string;
  batch_name: string;
  batch_duration: number;
  Labels: string[];
  start_date: string;
  end_date: string;
  mark_del: boolean;
  created_at: string;
  updated_at: string;
  org_id: number;
  created_by: number;
}

export interface BatchUser {
  id: string;
  user_id: CustomUser;
}

export interface ContactEmail {
  id: string;
  enquiry_no: string;
  fullname: string;
  email: string;
  message: string;
  subject: string;
  status: string;
  response: string;
  created_at: string;
  modified_at: string;
}

export interface FollowerFollowing {
  id: string;
  email: string;
  fullname: string;
  logo: string;
  job_title: string;
  is_following: boolean;
}

export interface ContestType {
  coding_coins: number;
  expired_at: string;
  id: number;
  mcq_coins: number;
  org_id: OrganizationData;
  start_at: string;
  test_code: string;
  test_duration: string;
  title: string;
  total_coins: number;
  coding_ques_count: number;
  mcq_ques_count: number;
}
export interface SubmissionDataType {
  id: number;
  submitted_at: string;
  status: string;
  coins: number;
  passed_testcases: number[];
  failed_testcases: number[];
  language: string;
  user_code: string;
}

export interface UserChartData {
  month: string;
  total_candidates: number;
}

export interface AssessmentChartData {
  month: string;
  total_candidates: number;
}

export interface AssessmentData {
  total_assessments: number;
  percentage_change: number;
}

export interface CandidatesData {
  total_enrolled_users: number;
  percentage_change: number;
}

export interface Assessment {
  test_title: string;
  enrolled_count: number;
  onboarded_count: number;
  passed_count: number;
  max_score: number;
  highest_score: number;
  passing_score: number;
  average_score: number;
}

export interface Country {
  label: string;
  currency_code: string;
  currency_name: string;
  value: string;
}

export interface Leaderboard {}

export interface CodeCollaborationState {
  content: string;
  user_email: string;
  client_access: string;
}

export interface TestEnrollment {
  id: number;
  user: User;
  is_attempted: boolean;
  enroll_status: string;
  start_time: string;
  enrolled_at: string;
  test: number;
}

export interface TestData {
  id: number;
  attachments: string[];
  title: string;
  description: string;
  test_rule: string;
  test_logo?: string | null;
  total_coding: number;
  total_mcq: number;
  total_coins: number;
  test_duration: number;
  start_at: string;
  expired_at: string;
  created_by: CreatedBy;
  org_id: OrganizationData;
  enrollment_status_counts: {
    ENROLLED: number;
    ATTEMPTED: number;
    COMPLETED: number;
    INVITED: number;
  };
  is_proctored: boolean;
  max_cheating_attempts: number;
  cheating_type: string[];
  coding_question: {
    easy: number;
    medium: number;
    hard: number;
  };
  objective_question: {
    easy: number;
    medium: number;
    hard: number;
  };
  total_enrollments: {
    completed: [{ id: number }];
    enrolled: [{ id: number }];
    attempted: [{ id: number }];
  };
}

export interface TestEnroll {
  id: number;
}

export interface TestDataType {
  test_data: TestData;
  test_enroll: TestEnroll;
}

export interface AssessmentUserResult {
  name: string;
  email: string;
  gender: string;
  logo: string;
  start_time: string;
  time_taken: string;
  beans: number;
  total_cheating: number;
  grade: string;
  status: string;
  percentage: number;
  percentile: number;
  is_invited: boolean;
}

export interface AssessmentQuestionSummary {
  id: number;
  title: string;
  type: string;
  difficulty: string;
  beans: number;
  correct_submissions: number;
  incorrect_submissions: number;
  partial_submissions: number;
  total_submissions: number;
  not_attempted_students: number;
}

export interface TestSubmissionEnrollData {
  id: number;
  user: User;
  is_attempted: boolean;
  enroll_status: string;
  start_time: string;
  enrolled_at: string;
  test: {
    id: number;
    org_id: OrganizationData;
    title: string;
    test_code: string;
    start_at: string;
    expired_at: string;
    total_coins: number;
  };
}

export interface EnrollmentStatusCounts {
  ENROLLED: number;
  COMPLETED: number;
  ATTEMPTED: number;
  ACCEPTED: number;
  REJECTED: number;
  REQUESTED: number;
}

export interface TestDetails {
  id: number;
  mcq_ques_count: number;
  coding_ques_count: number;
  enrollment_status_counts: EnrollmentStatusCounts;
  org_id: OrganizationData;
  title: string;
  coding_coins: number;
  mcq_coins: number;
  total_coins: number;
  test_code: string;
  test_logo?: string | null;
  test_duration: string;
  start_at: string;
  expired_at: string;
  enroll_status: string;
  mark_del: boolean;
}

export interface MyTestDataType {
  id: number;
  test: TestDetails;
  is_attempted: boolean;
  enroll_status: string;
  invitation_status: string;
  enrolled_at: string;
  user: number;
}

export interface TestStatusCounts {
  status_based_enrolled_test: number;
  status_based_attempted_test: number;
  status_based_completed_test: number;
  total_enroll_test_count: number;
  completed_test_count: number;
  invited_tests_count: number;
  upcoming_test_count: number;
  ongoing_test_count: number;
  passed_test_count: number;
  failed_test_ids: number;
  total_count: number;
}

export interface Prediction {
  bbox: [number, number, number, number]; // x, y, width, height
  class: string;
}

export interface CheatingAnalyticsData {
  analytics: {
    TAB: number;
    COPY: number;
    PASTE: number;
    AUDIO: number;
    VIDEO: number;
    SCREENSHOTS: number;
    PROHIBITEDOBJECT: number;
    LOOKINGAWAY: number;
    CELLPHONE: number;
    FACENOTVISIBLE: number;
    ANOTHERPERSON: number;
    OTHER: number;
  };
  total: number;
}

export interface InterviewCheatingAnalyticsData {
  analytics: {
    TAB: number;
    COPY: number;
    PASTE: number;
    AUDIO: number;
    VIDEO: number;
    SCREENSHOTS: number;
    PROHIBITEDOBJECT: number;
    LOOKINGAWAY: number;
    CELLPHONE: number;
    FACENOTVISIBLE: number;
    ANOTHERPERSON: number;
    OTHER: number;
  };
  total: number;
}

export interface CheatingIncident {
  id: number;
  description: string;
  attachment: string;
  object_id: number;
  cheating_type: string;
  mark_del: boolean;
  created_at: string;
  updated_at: string;
  user_id: User;
  content_type: string;
}

export interface SubmissionData {
  id: number;
  test_enroll_id: TestSubmissionEnrollData;
  mcq_question_submission_id: MCQSubmission[];
  coding_question_submission_id: CodingSubmission[];
  mcq_coins: number;
  coding_coins: number;
  coins: number;
  percentage: number;
  status: string;
  time_taken: number;
  cheating_count: number;
  question_status: {
    ATTEMPTED: number;
    CORRECT: number;
    INCORRECT: number;
    PARTIAL: number;
    UNATTEMPTED: number;
  };
}

export interface MCQSubmission {
  question_id: SubmittedQuestionDetails;
  question_type: string;
  submitted_by: number;
  coins: number;
  status: string;
  selected_options: UserSelectedOption[];
  submitted_at: string;
  options: SubmittedQuestionOptions[];
}

export interface SubmittedQuestionDetails {
  id: number;
  title: string;
  question_type: string;
  difficulty: string;
  tags: string[];
  solved_by: number;
  question_status: string;
  max_score: number;
  coins: number;
  mark_del: boolean;
  created_by: OrgUser;
}

export interface OrgUser {
  id: number;
  email: string;
  fullname: string;
  logo: string | null;
}

export interface UserSelectedOption {
  id: number;
  attachments: any[];
  text: string;
  is_correct: boolean;
  question: number;
}

export interface SubmittedQuestionOptions {
  id: number;
  attachments: any[];
  text: string;
  is_correct: boolean;
  question: number;
}

export interface CodingSubmission {
  id: number;
  question_id: CodingQuestionDetails;
  submitted_by: number;
  question_type: string;
  user_code: string;
  coins: number;
  status: string;
  passed_testcases: TestCase[];
  failed_testcases: TestCase[];
  language: string;
  submitted_at: string;
}

export interface CodingQuestionDetails {
  id: number;
  title: string;
  question_type: string;
  difficulty: string;
  tags: string[];
  attempted_by: number;
  topics: string[];
  coins: number;
  solved_by: number;
  question_status: string;
  max_score: number;
  created_by: OrgUser;
  mark_del: boolean;
}

export interface SubmittedQuestionTestCase {
  id: number;
  input: string;
  expected_output: string;
}

export interface InterviewData {
  created_by: number;
  id: number;
  description: string;
  job_role: string;
  expired_at: string;
  created_at: string;
  org_id: number;
  title: string;
  rules: string | null;
  start_at: string;
  duration: number;
  difficulty: string;
  interaction_type: string;
  updated_at: string | null;
  is_proctored: boolean;
  max_cheating_attempts: number;
  cheating_type: string[];
  interview_id: number;
  enrollment_status_counts: {
    SCHEDULED: number;
    ONGOING: number;
    COMPLETED: number;
    INVITED: number;
  };
}

export interface UserInterviewData {
  user_id: number;
  job_role: string;
  coding_score: number | null;
  start_time: string | null;
  Date_of_interview: string;
  type_of_interview: string;
  hi_id: number;
  id: number;
  resume_id: number;
  interview_score: number | null;
  end_time: string | null;
  status: string;
  interview_slot: number;
}

export interface Interviewee {
  id: number;
  name: string;
  email: string;
  resume: string;
  created_at: string;
  updated_at: string;
}

export interface InterviewInstructionData {
  org_id: OrganizationData;
  interviews: UserInterviewData;
  hiring_interview: InterviewData;
  interview_invitation: Interviewee;
}

export interface OrganizationData {
  id: number;
  org_name: string;
  org_domain: string;
  org_email: string;
  org_type: string;
  admin_mail: string;
  job_title: string;
  description: string;
  contact_no: string;
  logo?: string;
  country: { label: string; value: string };
  mark_del: boolean;
  created_at: string;
  updated_at: string;
}

export interface OrganizationListData {
  id: number;
  org_member_type: string;
  status: string;
  is_owner: boolean;
  is_admin: boolean;
  created_at: string;
  created_by: string | null;
  mark_del: boolean;
  org_id: OrganizationData;
}

export interface InterviewQuestionAnswer {
  query: string;
  isAnswer: boolean;
}

export interface InterviewFeedback {
  id: number;
  hi_id?: number;
  average_accuracy_score: number;
  average_confidence_score: number;
  AOI: string;
  highlights: string;
  created_at: string;
  interview_id: number;
  average_grade: number;
  average_clarity_score: number;
  session_summary: string;
  AOE: string;
  SOI: string;
  user_detail: UserDetail;
  start_at: string;
  time_taken: number;
  cheating_count: number;
  question_count: number;
  status: string;
}

export interface UserDetail {
  id: number;
  user_id: number;
  email: string;
  fullname: string;
  logo: string;
  contact_no: string;
  country: string | null;
  city: string | null;
  state: string | null;
  gender: string | null;
  skills: string[];
  total_coins: number;
  job_title: string | null;
}

export interface OverAllInterviewData {
  average_accuracy_score: number;
  id: number;
  average_confidence_score: number;
  AOI: string;
  highlights: string;
  created_at: string;
  average_grade: number;
  interview_id: number;
  average_clarity_score: number;
  session_summary: string;
  AOE: string;
  SOI: string;
}

export interface LeaderboardEntry {
  rank: number;
  total_coin: number;
  user: User;
  country: string | null;
  does_follow: boolean;
}

export interface InterviewDetails {
  id: number;
  title: string;
  org_id: number;
  rules: string;
  skillset: string[];
  job_role: string;
  interaction_type: string;
  expired_at: string;
  created_at: string;
  cheating_type: string[];
  max_cheating_attempts: number;
  created_by: number;
  description: string;
  difficulty: "FRESHER" | "EASY" | "INTERMEDIATE" | "EXPERIENCED";
  start_at: string;
  duration: number;
  updated_at: string | null;
  is_proctored: boolean;
}

export interface TagType {
  id: number;
  name: string;
}

export interface Language {
  id: number;
  name: string;
  extension: string;
}

export interface LocalLanguage {
  label: string;
  value: string;
  id: number;
}

export interface QuestionValidation {
  id: number;
  org_id: number;
  created_by: number;
  response_by: number | null;
  remark: string;
  status: string;
  visiblity_status: string;
  mark_del: boolean;
  content_type: number;
  object_id: number;
  question_type: string;
}

export interface SolutionAIReport {
  time_complexity: {
    value: string;
    explanation: string;
  };
  space_complexity: {
    value: string;
    explanation: string;
  };
  code_review: string;
  logic_review: string;
  quality_rating: number;
}

export interface Feedback {
  id: number;
  rating: number;
  user: User;
  category: string;
  feedback_note: string;
  mark_del: boolean;
  object_id: number;
  content_type: string;
  submitted_at: string;
  updated_at: string;
}

export interface RouteConfigType {
  path: string;
  permissions: (
    | string
    | {
        codename: string;
        level: number;
        feature: string;
      }
  )[];
}

export interface Permission {
  id: number;
  name: string;
  codename: string;
  scope: string;
  description: string | null;
  level: number;
  created_at: string;
  content_type_id: number;
  extserviceresource_id: number | null;
  feature: string;
}

export interface Role {
  id: number;
  name: string;
  description: string;
  role_permissions: { id: number; permission: Permission }[];
}

export interface TestCaseInterface {
  id: number;
  isExpanded: boolean;
  input: string;
  expected_output: string;
}

export interface TestCaseOutput {
  id: number;
  isExpanded: boolean;
  isCorrect: boolean;
  input: string;
  expected_output: string;
  output: string;
}

export interface PassFailCount {
  passed: number;
  failed: number;
  total: number;
}

export interface OrganizationMember {
  id: number;
  org_member_type: string;
  status: string;
  is_owner: boolean;
  is_admin: boolean;
  created_at: string;
  created_by: number;
  mark_del: boolean;
  user_id: User;
}

export interface InvitationMember {
  id: number;
  org_id: number;
  content_type: number;
  object_id: string;
  user_id: User;
  user_email: string;
  invitation_type: string;
  invitation_status: string;
  created_by: number;
  created_at: string;
  updated_at: string;
}

export interface RoleGroup {
  id: number;
  name: string;
  description: string;
  scope: string;
  is_editable: boolean;
  created_at: string;
  updated_at: string;
  org_id: number;
  parent_custom_role: number | null;
  created_by_org_member_id: number;
  created_by: number;
  feature: string;
}

export interface AssignedPermission {
  id: number;
  created_at: string;
  permission_id: Permission;
  created_by: number;
}

export interface AssignedRoleGroup {
  id: number;
  created_at: string;
  group_id: number;
  role_id: Permission;
  created_by: number;
}

export interface PricingFeature {
  feature: string;
  is_included: boolean;
  is_unlimited_usage: boolean;
}

export interface RazorpayPaymentResponse {
  razorpay_payment_id: string;
  razorpay_invoice_id: string;
  razorpay_invoice_status: "paid" | "pending" | "failed";
  razorpay_invoice_receipt: string | null;
  razorpay_signature: string;
  razorpay_order_id: string;
}

export interface EmployementPhase {
  id: number;
  duration: string;
  name: string;
  description: string;
  job_type: string;
  currency: string;
  salary: string;
  salary_type: string;
  created_at: string;
  updated_at: string;
  number: number;
}

export interface DriveStageVenue {
  id: number;
  name: string | null;
  line1: string;
  line2: string;
  landmark: string | null;
  city: string;
  state: string;
  country: string;
  postal_code: number;
  created_by: number;
  created_org: number;
}

export interface DriveStageType {
  id: number;
  name: string;
  description: string;
  number: number;
  type: string;
  venue_type: string;
  venue: DriveStageVenue | null;
  status: string;
  participated: number;
  qualified: number;
  disqualified: number;
  shortlisted: number;
  links: string[];
  rating_form: RatingForm[];
  related_obj_id: number | null;
  created_at: string;
  updated_at: string;
  start_at: string;
  duration: number;
  archived: boolean;
  drive_id: number;
  created_by: number;
  jd_id: number | null;
}

export interface RatingForm {
  id: number;
  name: string;
  type: string;
  value: string;
}

export interface DriveData {
  id: number;
  title: string;
  description: string;
  location: Address;
  minimum_cgpa: number;
  vacancy: string;
  job_type: string;
  status: string;
  type: string;
  created_at: string;
  updated_at: string;
  start_at: string;
  end_at: string;
  location_type: string;
  visibility: boolean;
  can_autoapply: boolean;
  archived: boolean;
  org_id: { id: number; org_name: string; logo: string };
  created_by: User;
  required_skills: Skill[];
  stage_count: number;
  applicants: number;
  apply_to: string | null;
  apply_from: string | null;
  total_stages: number;
  total_employment_phases: number;
  permissions: string[];
}

export interface OrgList {
  id: number | null;
  org_name: string;
  org_email: string | null;
  logo: string | null;
  is_verified: boolean | null;
}

export interface CollaboratorType {
  id: number;
  org_id: number;
  org_name: string;
  org_logo: string;
  email: string;
  status: string;
  invitee_type: string;
}

export interface DriveInvitation {
  id: number;
  drive: DriveData;
}

export interface JobListing {
  id: number;
  title: string;
  created_org: {
    id: number;
    org_name: string;
    org_email: string;
    logo: string | null;
    country: string;
  };
  location: {
    id: number;
    name: string | null;
    line1: string | null;
    line2: string | null;
    landmark: string | null;
    city: string;
    state: string;
    country: string;
    postal_code: number;
    created_by: number;
    created_org: number;
  };
  salary_type: "YEARLY" | "MONTHLY" | "HOURLY"; // Add more types if needed
  salary: number;
  status: "SCHEDULED" | "OPEN" | "CLOSED"; // Adjust according to other statuses
  experience_min: number;
  experience_max: number;
  required_skills: {
    id: number;
    name: string;
  }[];
  apply_from: any; // ISO Date String
  apply_to: any; // ISO Date String
  applied_on: string;
  applied_status: string | null;
  total_applicants: number;
  is_applied: boolean;
  is_bookmarked: boolean;
}

export interface Location {
  id: number;
  name: string | null;
  line1: string | null;
  line2: string | null;
  landmark: string | null;
  city: string;
  state: string;
  country: string;
  postal_code: number;
  created_by: number;
  created_org: number;
}

export interface JobDetails {
  id: number;
  status: "SCHEDULED" | "OPEN" | "CLOSED";
  gender_for: "ALL" | "MALE" | "FEMALE" | "OTHER";
  industry: string;
  department: string;
  role: string;
  salary_type: "HOURLY" | "MONTHLY" | "YEARLY";
  name: string;
  description: string;
  requirements: string;
  responsibilities: string;
  qualifications: string;
  benefits: string;
  salary: number;
  vacancies: number;
  job_type: string[];
  workplace_type: string[];
  total_stages: number;
  job_shift_timing: string;
  experience_min: number;
  experience_max: number;
  apply_from: string;
  apply_to: string;
  visibility: boolean;
  can_autoapply: boolean;
  mark_del: boolean;
  created_at: string;
  updated_at: string;
  drive: string | null;
  location: Location;
  created_by: number;
  created_org: number;
  required_skills: Skill[];
}

export interface SocialMediaAccount {
  name: string;
  url: string;
  created_at: string;
  updated_at: string;
}

export interface EducationData {
  score: { value: string; type: string };
  degree: string;
  end_at: string;
  skills: Skill[];
  location: string;
  start_at: string;
  institution: Company;
  is_pursuing: boolean;
  roll_number?: string | null;
  education_mode: string;
  field_of_study: string;
  education_level: string;
  institution_name: string;
}

export interface UserEducation {
  id: number;
  user_profile: number;
  education_data: EducationData;
  mark_del: boolean;
  created_at: string;
  updated_at: string;
}

export interface Company {
  id: number;
  name: string;
  address: string | null;
  branch: string | null;
  institution_type: string;
  is_verified: boolean;
  label: any[];
  attachment: Attachment;
  mark_del: boolean;
  created_at: string;
  updated_at: string;
}

export interface ExperienceData {
  end_at: string;
  job_type: string;
  location: string;
  start_at: string;
  is_present: boolean;
  description: string;
  designation: string;
  company_name: string;
  company: Company;
  location_type: string;
  skills: Skill[];
}

export interface UserExperience {
  id: number;
  user_profile: number;
  experience_data: ExperienceData;
  mark_del: boolean;
  created_at: string;
  updated_at: string;
}

export interface DriveCandidateList {
  resume: string;
  id: number;
  user_id: User;
  status: string;
}

export interface StageApplicants {
  id: number;
  compatibility: string | null;
  feedback: string | null;
  verdict: string;
  interview_link: string | null;
  interviewer_email: string | null;
  platform: string | null;
  archived: boolean;
  created_at: string;
  updated_at: string | null;
  drive_id: number;
  drive_applicant: UserDetail;
  stage_id: number;
  resume: string;
}

export interface ForumListMessages {
  id: number;
  content: string;
  attachments: string[];
  created_at: string;
  created_by: {
    id: number;
    fullname: string;
    logo: string;
    email: string;
  };
  reply_to: null | {
    id: number;
    content: string;
    deleted?: boolean;
  };
}

export type Filters = {
  jobs_posted_by: string;
  location: string;
  university_id: number;
  gender: string;
  min_date: string;
  max_date: string;
  job_type: string;
  skill: any;
  name: string;
  sort_by: string;
  page_view: string;
  work_mode: any;
  apply_status: boolean;
  experience_min: number;
  experience_max: number;
  salary_min: number;
  salary_max: number;
};

export interface RazorpayPaymentResponse {
  razorpay_payment_id: string;
  razorpay_invoice_id: string;
  razorpay_invoice_status: "paid" | "pending" | "failed";
  razorpay_invoice_receipt: string | null;
  razorpay_signature: string;
}

export interface Transaction {
  transaction_id: string;
  plan: number;
  currency: string;
  amount_to_pay: string;
  status: "PENDING" | "SUCCESS" | "FAILED";
  plan_name: string;
  created_at: string;
}

export interface TransactionDetails {
  id: number;
  coupons: CouponDetails[];
  transaction_id: string;
  rzp_invoice_id: string;
  total_amount: string;
  discount_amount: string | null;
  tax_amount: string;
  currency: string;
  amount_to_pay: string;
  status: "PENDING" | "SUCCESS" | "FAILED";
  created_at: string;
  updated_at: string;
  plan: number;
  invoice_link: string;
}

export interface CouponDetails {
  id: number;
  code: string;
  description: string;
  discount_type: "FIXED_AMOUNT" | "PERCENTAGE";
  discount_on: "CREDITS" | "TOTAL_AMOUNT";
  discount_value: number;
  max_usage: number;
  minimum_amount: number;
  maximum_amount: number;
  expiry: string;
  created_at: string;
  updated_at: string;
  created_by: number;
  status: "ACTIVE" | "EXPIRED" | "INACTIVE";
}

export interface CreditHistory {
  id: number;
  org_member_id: number | null;
  transaction_type: "CREDIT" | "DEBIT";
  credit_status: "COMPLETE" | "PENDING" | "FAILED";
  resource_name: string | null;
  reason: string;
  master_service_charge_id: number | null;
  created_at: string;
  entity_type: "USER" | "ORG" | "OTHER";
  entity_id: number;
  credit_type: "USER_CREDIT" | "OTHER_CREDIT";
  credits: number;
  feature_name: string | null;
  resource_id: number | null;
  instance_service_charge_id: number | null;
  updated_at: string;
}

export interface ActivePlan {
  id: number;
  entity_id: number;
  plan_id: number;
  end_date: string;
  created_at: string;
  entity_type: "ORGANIZATION" | "USER";
  start_date: string;
  status: "ACTIVE" | "EXPIRED" | "CANCELLED";
  updated_at: string;
  plan: Plan;
}

export interface SubscriptionData {
  credit_balance: number;
  active_plan: ActivePlan;
}

export interface Plan {
  price: number;
  duration_type: "MONTHLY" | "YEARLY";
  archived: boolean;
  type: "ORGANIZATION" | "USER";
  duration: number;
  description: string;
  created_at: string;
  credits: number;
  updated_at: string;
  discount: {
    discount_type: string;
    discount_value: number;
    credit_bonus: number;
    end_at: string;
  } | null;
  features: PricingFeature[];
  discount_validity: string | null;
  is_recurring: boolean;
  name: string;
  extra_credits: number | null;
  credit_rollover: boolean;
  id: number;
  is_unlimited: boolean;
  created_by: number;
  category: string;
}

export interface ReportOptions {
  id: number;
  reason_for: string;
  name: string;
  is_active: boolean;
  created_at: string;
}

export interface UserStageLink {
  id: number | null;
  drive_stage_applicant: number | null;
  link: string;
  start_at: string | null;
  duration: number | null;
  object_id: number | null;
  is_completed: boolean;
}

export interface StageDetails {
  duration: number | null;
  id: number;
  links: string[];
  name: string;
  number: number;
  start_time: string;
  status: string;
  type: string;
  venue: string | null;
  venue_type: string | null;
  description: string;
  user_link: UserStageLink;
}

export interface Message {
  timestamp: string | number | Date;
  [key: string]: any;
}

export interface GroupedMessages {
  [dateLabel: string]: Message[];
}

interface Sender {
  id: number;
  email: string;
  fullname: string;
}

interface ParentMessage {
  id: number;
  content: string;
  created_at: string;
  updated_at: string;
  mark_del: boolean;
  is_edited: boolean;
  forum: number;
  sender: Sender;
  parent: ParentMessage | null;
}

export interface DiscussionMessage {
  id: number;
  attachments: any[]; // You might want to create a more specific interface for attachments
  sender: Sender;
  content: string;
  created_at: string;
  updated_at: string;
  mark_del: boolean;
  is_edited: boolean;
  forum: number;
  parent: ParentMessage | null;
  is_sent_by_me: boolean;
  is_recruiter: boolean;
}

export interface DiscussionForumPermission {
  id: number;
  user: User;
  invited_by: OrgUser;
  participant_access: string;
  can_post: boolean;
  is_blocked: boolean;
  mark_del: boolean;
  invited_at: string;
  joined_at: string;
  forum: number;
}

export interface InterviewAnswer {
  id: number;
  question: string;
  answer: string;
  summary: string;
  submitted_at: string;
  start_at: string;
  accuracy: number;
  quality: number;
  delivery_clarity: number;
}

export interface QuestionOption {
  id: number;
  attachments: any[];
  text: string;
  is_correct: boolean;
  created_by: number;
  question: number;
}

export interface ObjectiveQuestionDetails {
  id: number;
  title: string;
  description: string;
  question_type: string;
  difficulty: string;
  tags: string[];
  solved_by: number;
  question_status: string;
  max_score: number;
  coins: number;
  mark_del: boolean;
}

export interface ObjectiveQuestionSubmission {
  id: number;
  question_id: ObjectiveQuestionDetails;
  question_type: string;
  submitted_by: number;
  coins: number;
  status: string;
  selected_options: QuestionOption[];
  submitted_at: string;
  options: QuestionOption[];
}

export interface CodingQuestionSubmission {
  id: number;
  question_id: Question;
  submitted_by: number;
  question_type: string;
  user_code: string;
  coins: number;
  status: string;
  passed_testcases: TestCase[];
  failed_testcases: TestCase[];
  total_testcases: TestCaseOutput[];
  language: string;
  submitted_at: string;
  is_ai_reviewed: boolean;
}

export interface Address {
  line1: string;
  line2: string;
  city: string;
  state: string;
  country: string;
  postal_code: number;
}

export interface ResumeDetails {
  id: number;
  type: string;
  resume: string;
  email: string | null;
  is_parsed: boolean;
  uploaded_by: number;
  mark_del: boolean;
  updated_at: string;
  display_name: string;
  name: string | null;
  parsed_data: string | null;
  source: string;
  uploaded_org: string | null;
  created_at: string;
  is_primary: boolean;
  resume_user_id: number;
}

export interface Criteria {
  id: number;
  name: string | undefined;
  value: string;
  type: string;
  can_edit: boolean;
}

export interface ForumParticipant {
  id: number;
  user: User;
  invited_by: User;
  participant_access: "MEMBER" | "ADMIN" | "OWNER";
  can_post: boolean;
  is_blocked: boolean;
  mark_del: boolean;
  invited_at: string;
  joined_at: string;
  forum: number;
}

export interface State {
  name: string;
  state_code: string;
}

export interface PayloadParams1 {
  params?: string;
  payload?: any;
  toast_status?: boolean;
}

export interface PayloadParams2 {
  params?: string;
  toast_status?: boolean;
}

export interface ReduxState<T = any> {
  status: boolean;
  loading: boolean;
  data: T | null;
  error: string | null;
}
