import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import {
  UserDetailsType,
  ProjectData,
  Skill,
  Prediction,
  Language,
  LocalLanguage,
  TestCaseOutput,
  SocialMediaAccount,
  UserExperience,
  UserEducation,
  JobFilters,
} from "./Types";
import html2canvas from "html2canvas";
import confetti from "canvas-confetti";
import * as sdk from "microsoft-cognitiveservices-speech-sdk";

export const renderFormData = (values: any) => {
  let formData = new FormData();
  Object.keys(values).forEach((key) => {
    formData.append(key, values[key]);
  });
  return formData;
};

const secretKey = process.env.NEXT_PUBLIC_secretKey ?? "";
const secretKey2 = process.env.NEXT_PUBLIC_secretKey2 ?? "";
const secretKey3 = process.env.NEXT_PUBLIC_secretKey3 ?? "";
const secretKey4 = process.env.NEXT_PUBLIC_secretKey4 ?? "";
const secretKey5 = process.env.NEXT_PUBLIC_secretKey5 ?? "";

export const encodeID = (id: any) => {
  if (id != null) {
    const encryptedData = CryptoJS.AES.encrypt(
      id.toString(),
      secretKey
    ).toString();
    const encryptedData2 = CryptoJS.AES.encrypt(
      encryptedData.toString(),
      secretKey2
    ).toString();
    const encryptedData3 = CryptoJS.AES.encrypt(
      encryptedData2.toString(),
      secretKey3
    ).toString();
    const encryptedData4 = CryptoJS.AES.encrypt(
      encryptedData3.toString(),
      secretKey4
    ).toString();
    const encryptedDataMain = CryptoJS.AES.encrypt(
      encryptedData4.toString(),
      secretKey5
    ).toString();
    return encryptedDataMain?.replaceAll("/", "Pai");
  } else {
    return id;
  }
};

export const decodeID = (id: any) => {
  if (id != null) {
    const replaceddata: any = id?.replaceAll("Pai", "/");
    const decryptedData = CryptoJS.AES.decrypt(
      replaceddata.toString(),
      secretKey5
    ).toString(CryptoJS.enc.Utf8);
    const decryptedData1 = CryptoJS.AES.decrypt(
      decryptedData.toString(),
      secretKey4
    ).toString(CryptoJS.enc.Utf8);
    const decryptedData2 = CryptoJS.AES.decrypt(
      decryptedData1.toString(),
      secretKey3
    ).toString(CryptoJS.enc.Utf8);
    const decryptedData3 = CryptoJS.AES.decrypt(
      decryptedData2.toString(),
      secretKey2
    ).toString(CryptoJS.enc.Utf8);
    const decryptedDataMain = CryptoJS.AES.decrypt(
      decryptedData3.toString(),
      secretKey
    ).toString(CryptoJS.enc.Utf8);
    return decryptedDataMain;
  } else {
    return id;
  }
};

export const admindecodeID = (id: any) => {
  if (id != null) {
    const replaceddata: any = id?.replaceAll("Pai", "/");
    const decryptedData = CryptoJS.AES.decrypt(
      replaceddata.toString(),
      secretKey5
    ).toString(CryptoJS.enc.Utf8);
    const decryptedData1 = CryptoJS.AES.decrypt(
      decryptedData.toString(),
      secretKey4
    ).toString(CryptoJS.enc.Utf8);
    return decryptedData1;
  } else {
    return id;
  }
};

export const decodeJwtToken = (token: any) => {
  try {
    const decoded = jwt.decode(token);
    return decoded;
  } catch (err) {
    return null;
  }
};

export const getLastURL = (location: any) => {
  let lastURL = location?.pathname?.split("/").pop();
  return lastURL;
};

export const getSecondLastURL = (location: any) => {
  let lastURL = location?.pathname?.split("/")[2];
  return lastURL;
};

export const getplayerSecondLastURL = (location: any) => {
  let lastURL = location?.pathname?.split("/")[1];
  return lastURL;
};

export const paginationQuery = (limit: any, page: any, search: any) => {
  let query: any;
  let newpage: any = "";
  if (search != "") {
    newpage = 1;
  } else {
    newpage = page;
  }

  query = {
    page_size: limit,
    page: newpage,
    search: search?.length > 2 ? search : "",
    status: true,
  };

  return query;
};

export const isNotEmpty = (data: any) => {
  if (data !== "" && data !== null && data !== undefined) {
    return true;
  } else {
    return false;
  }
};

export const isEmpty = (data: any) => {
  if (data == " " && data == null && data == undefined && data == 0) {
    return true;
  } else {
    return false;
  }
};

export const getFirstLetter = (data: any) => {
  if (typeof data === "string" && data !== "") {
    const firstLetter = data.charAt(0);
    return firstLetter;
  }
};

export const saveToLocalStorage = (key: any, value: any) => {
  localStorage.setItem(key, value);
};

export const removeFromLocalStorage = (key: any) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

export const getFromLocalStorage = (key: any) => {
  if (typeof window !== "undefined") {
    let value = localStorage.getItem(key);
    return value;
  }
};

export const setCookie = (
  name: string,
  value: string,
  path: string = "/",
  days: number = 365
) => {
  let expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; Path=${path}; SameSite="Lax"; Secure:"True";`;
};

export const getCookie = (name: any) => {
  function escape(s: any) {
    return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, "\\$1");
  }
  let match = document.cookie.match(
    RegExp("(?:^|;\\s*)" + escape(name) + "=([^;]*)")
  );
  return match ? match[1] : null;
};

export const deleteCookie = (
  name: string,
  path: string = "/",
  domain: string = ""
) => {
  const expires = `expires=${new Date(0).toUTCString()}`;
  const cookie = `${name}=; path=${path}; ${expires};`;
  const domainCookie = domain ? `${cookie} domain=.${domain};` : cookie;
  document.cookie = domainCookie;
  document.cookie = cookie;
};

export const getCurrentDateTime = () => {
  let currentDate = new Date().toJSON();
  return currentDate;
};

export const getLocalCurrentDateTime = () => {
  const currentDate = new Date();

  // Get current year, month, day, hours, and minutes
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so +1
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");

  // Combine everything in the desired format
  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;

  return formattedDate;
};

export const getCurrentDate = () => {
  let currentDate = new Date().toJSON().slice(0, 10);
  return currentDate;
};

export const generateUTCTime = (localTime: string) => {
  const utcTimeValue = new Date(localTime).toISOString();
  return utcTimeValue; //output: 2024-10-01T12:30:00Z
};

export const generateUTCDateOnly = (localTime: string) => {
  let utcTimeValue = "";
  if (localTime) {
    const date = new Date(localTime);
    utcTimeValue = date.toISOString();
  }
  return utcTimeValue.split("T")[0]; //output: 2024-10-01
};

export const changeTimeFormatInLocal = (utcDateTime: any) => {
  if (utcDateTime) {
    const utcTime = new Date(utcDateTime); //input: 2024-07-16T15:35:48.713432Z
    const localTimeAMPM = utcTime.toLocaleString(undefined, {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      hour12: true,
    });
    return localTimeAMPM;
  } //output: 7/16/2024, 9:38:10 PM
  return "NA";
};
export const formatDesiredDate = (isoString: string): string => {
  if (!isoString) {
    return "";
  }

  const date = new Date(isoString);

  if (isNaN(date.getTime())) {
    return "";
  }

  // Define options for formatting the date
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Format the date according to the options
  return date.toLocaleDateString("en-US", options);
};

export const changeTimeLocalMachineFormat = (utcDateTime: any) => {
  if (!utcDateTime) {
    return "";
  } else {
    const createdDate = utcDateTime
      ? new Date(utcDateTime).toLocaleString("en-GB", { hour12: false })
      : ""; //input: 2024-07-16T15:35:48.713432Z
    const [datePart, timePart] = createdDate.split(", ");
    const [day, month, year] = datePart.split("/");
    const time = timePart.slice(0, -3);
    const isoDateString = `${year}-${month}-${day}T${time}`;
    return isoDateString; //output: 2024-07-16T21:38
  }
};

export const changeTimeIntoSeconds = (timeString: any) => {
  if (timeString) {
    const [hours, minutes, seconds] = timeString?.split(":")?.map(Number);
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    return totalSeconds;
  }
};

export const changeTimeIntoMinutes = (timeString: any) => {
  if (typeof timeString !== "string") return 0;
  const parts = timeString?.split(":")?.map(Number);
  const hours = parts[0] || 0;
  const minutes = parts[1] || 0;
  return hours * 60 + minutes;
};

export const formatdesiredTime = (timeString: any) => {
  const [hours, minutes, seconds] = timeString?.split(":")?.map(Number);

  let formattedTime = "";

  if (hours > 0) {
    formattedTime += `${hours} Hour${hours > 1 ? "s" : ""} `;
  }
  formattedTime += `${minutes} min${minutes !== 1 ? "s" : ""}`;

  return formattedTime;
};

export const addDaysToDate = (startDate: any, duration: any) => {
  if (!startDate) return "";

  const [year, month, day] = startDate.split("-").map(Number);
  const startDateObject = new Date(year, month - 1, day);

  const newDateObject = new Date(
    startDateObject.getTime() + duration * 24 * 60 * 60 * 1000
  );
  const newYear = newDateObject.getFullYear();
  const newMonth = (newDateObject.getMonth() + 1).toString().padStart(2, "0");
  const newDay = newDateObject.getDate().toString().padStart(2, "0");

  return `${newYear}-${newMonth}-${newDay}`;
};

export const dateWithDayInMachineFormat = (date: string) => {
  const newDate = new Date(date).toUTCString().slice(0, 16);
  return newDate; //output: Tue, 16 Jul 2024
};

export const formatDate = (dateString: string): string => {
  // "2024-04-30" to "30 Apr 2024"
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (dateString) {
    const [year, month, day] = dateString.split("-");
    const monthName: string = months[parseInt(month, 10) - 1];
    return `${parseInt(day, 10)} ${monthName} ${year}`;
  }
  return "";
};

export const checkQuestionIdExists = (array: any, id: any, type: any) => {
  return array.some(
    (question: any) =>
      question?.question_id === id && question?.question_type === type
  );
};

export const checkSubmissionIdExists = (array: any, id: any) => {
  return array?.some((value: any) => value?.id === id);
};

export const getSubmissionIdUsingQuestionId = (array: any, id: any) => {
  const result = array.find((item: any) => item.question_id === id);
  return result ? result.id : null;
};

export const findDifferenceData = (arr1: Skill[], arr2: Skill[]): Skill[] => {
  const onlyInArr1: Skill[] = arr1?.filter(
    (item1) => !arr2?.some((item2) => item1?.id === item2?.id)
  );
  const onlyInArr2: Skill[] = arr2?.filter(
    (item2) => !arr1?.some((item1) => item1?.id === item2?.id)
  );
  return [...onlyInArr1, ...onlyInArr2];
};

export const searchNumber = (arr: number[], target: number) => {
  if (arr) {
    return arr?.includes(target);
  } else {
    return false;
  }
};

export const searchValue = (arr: any, target: any) => {
  if (arr) {
    return arr?.includes(target);
  } else {
    return false;
  }
};

export const extractIds = (arr: any, idKey = "id") => {
  return arr?.map((obj: any) => obj[idKey]);
};

export const allHaveAccessTypeEditor = (
  arr: any,
  key = "accesstype",
  value = "EDITOR"
) => {
  return arr?.every((obj: any) => obj[key] === value);
};

export const updateValuesById = (
  arr: any,
  idList: any,
  key: any,
  newValue: any,
  idKey: "id"
) => {
  return arr.map((obj: any) => {
    if (idList?.includes(obj[idKey])) {
      return { ...obj, [key]: newValue };
    }
    return obj;
  });
};

export const getCapitalizeFirstLetter = (str: string) => {
  return str?.charAt(0)?.toUpperCase();
};

export const capitalizeFirstLetter = (string: string) => {
  if (string) {
    return (
      string?.charAt(0).toUpperCase() +
      string?.slice(1, string.length).toLowerCase()
    );
  }
};

export const getWordWithinLimit = (
  name: string,
  limit: number = 15
): string => {
  return name?.split(" ")?.reduce((result, word) => {
    const currentLength = result?.length + (result ? 1 : 0);
    return currentLength + word?.length <= limit
      ? result + (result ? " " : "") + word
      : result || (word?.length <= limit ? word : word?.slice(0, limit));
  }, "");
};

export const editorConfiguration = {
  toolbar: {
    items: [
      // "heading",
      // "|",
      "bold",
      "italic",
      "link",
      "code",
      "|",
      "bulletedList",
      "numberedList",
      "|",
      "subscript",
      "superscript",
      "|",
      "undo",
      "redo",
    ],
  },
  links: {
    toolbar: ["linkPreview", "|", "editLink", "linkProperties", "unlink"],
  },
};

export const makeFullScreen = () => {
  const element = document.documentElement;
  if (element.requestFullscreen) {
    element.requestFullscreen().catch((error) => {
      console.error("Error attempting to enable full-screen mode:", error);
    });
  }
};

export const exitFullScreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
};

export const getCodeLanguageWithExtension = (language: string) => {
  if (language == "py") {
    return "Python";
  } else if (language == "java") {
    return "Java";
  } else if (language == "cpp") {
    return "C++";
  } else if (language == "js") {
    return "JavaScript";
  } else if (language == "go") {
    return "Go";
  } else if (language == "c") {
    return "C";
  } else {
    return "";
  }
};

export const getCodeExtensionWithLanguage = (language: string) => {
  if (language == "Python") {
    return "py";
  } else if (language == "Java") {
    return "java";
  } else if (language == "C++") {
    return "cpp";
  } else if (language == "JavaScript") {
    return "js";
  } else if (language == "Go") {
    return "go";
  } else if (language == "C") {
    return "c";
  } else {
    return "";
  }
};

export const formatTimeInSeconds = (timeInSeconds: any) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
};

export const roundOfNumber = (number: any) => {
  const roundedNumber = Math?.round(number); // Round to the nearest whole number
  return roundedNumber;
};

export const getArrayOfIdFromArrayOfObject = (arrayOfObject: any) => {
  const arrayOfIds = arrayOfObject?.map((obj: any) => obj?.id);
  return arrayOfIds;
};

export const findIndexById = (id: any, array: any) => {
  return array?.findIndex((item: any) => item.id === id);
};

export const checkPositiveValueInArray = (arr: any) => {
  for (let value of arr) {
    if (value > 0) {
      return true;
    }
  }
  return false;
};

export const calculateRemainingTime = (startTime: any) => {
  if (!startTime) {
    return null;
  }

  const startTimestamp = new Date(startTime).getTime();
  const currentTimestamp = new Date().getTime();
  let remainingTime = startTimestamp - currentTimestamp;

  if (remainingTime <= 0) {
    return "Test has already started";
  }

  const millisecondsPerSecond = 1000;
  const millisecondsPerMinute = millisecondsPerSecond * 60;
  const millisecondsPerHour = millisecondsPerMinute * 60;
  const millisecondsPerDay = millisecondsPerHour * 24;

  const days = Math.floor(remainingTime / millisecondsPerDay);
  remainingTime %= millisecondsPerDay;
  const hours = Math.floor(remainingTime / millisecondsPerHour);
  remainingTime %= millisecondsPerHour;
  const minutes = Math.floor(remainingTime / millisecondsPerMinute);
  remainingTime %= millisecondsPerMinute;
  const seconds = Math.floor(remainingTime / millisecondsPerSecond);
  return `${days} Days, ${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

export const formatDuration = (duration: any) => {
  // Parse the duration string
  const [days, time] = duration.split(" ");
  const [hours, minutes, seconds] = time.split(":").map(Number);

  // Convert days to hours and add to total hours
  const totalHours = Number(days) * 24 + hours;

  // Format the output
  const formattedHours =
    totalHours > 0 ? `${totalHours} Hour${totalHours > 1 ? "s" : ""}` : "";
  const formattedMinutes =
    minutes > 0 ? `${minutes} Min${minutes > 1 ? "s" : ""}` : "";

  // Combine formatted parts
  return [formattedHours, formattedMinutes].filter(Boolean).join(" ");
};

export const formatTimeDuration = (duration: string) => {
  /**
   * Formats a duration string (HH:MM:SS) into a human-readable format.
   *
   * Input format:
   * - A string in the format "HH:MM:SS", where:
   *   - HH: hours (e.g., "00" for 0 hours)
   *   - MM: minutes (e.g., "30" for 30 minutes)
   *   - SS: seconds (e.g., "45" for 45 seconds)
   *
   * Output format:
   * - A human-readable string, such as:
   *   - "30 minutes"
   *   - "1 hour, 15 minutes, 45 seconds"
   *   - "10 seconds"
   *   - "0 seconds" (for input "00:00:00")
   *
   * @param {string} duration - The input duration string in HH:MM:SS format.
   * @returns {string} - The formatted human-readable duration string.
   */

  const [hours, minutes, seconds] = duration.split(":").map(Number);

  if (hours === 0 && minutes === 0 && seconds === 0) {
    return "0 seconds";
  }

  const parts = [];
  if (hours > 0) parts.push(`${hours} hour${hours > 1 ? "s" : ""}`);
  if (minutes > 0) parts.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
  if (seconds > 0) parts.push(`${seconds} second${seconds > 1 ? "s" : ""}`);

  return parts.join(", ");
};

export const getRandomIdNumber = () => {
  const crypto = window.crypto;
  let array = new Uint32Array(1);
  const id = crypto.getRandomValues(array)[0];
  return id;
};

export const createAndDownloadZip = (
  currentCode: string,
  currentTitle: string,
  currentLanguage: string
) => {
  const blob = new Blob([currentCode], { type: "text/plain" });
  const link = document.createElement("a");
  link.download = `${currentTitle}.${currentLanguage}`;
  link.href = window.URL.createObjectURL(blob);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const copyCode = async (code: string, setIsCopy: any) => {
  try {
    await navigator.clipboard.writeText(code);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 500);
  } catch (error) {
    console.error("Unable to copy text to clipboard:", error);
  }
};

export const testCaseCount = (testCaseArray: any) => {
  let passedTestCase = 0;
  let failedTestCase = 0;
  let totalTestCase = 0;
  for (let i = 0; i < testCaseArray?.length; i++) {
    if (testCaseArray[i]?.is_correct) {
      passedTestCase += 1;
    } else {
      failedTestCase += 1;
    }
    totalTestCase = passedTestCase + failedTestCase;
  }
  return {
    passed: passedTestCase,
    failed: failedTestCase,
    total: totalTestCase,
  };
};

export const terminateIfNumber = (str: string) => {
  const regex = /^\d+\./;
  if (regex.test(str)) {
    return str.replace(regex, "");
  }
  return str;
};

export const calculateProfileCompleteness = (
  data: UserDetailsType,
  projectData: ProjectData[],
  social: SocialMediaAccount[],
  education: UserEducation[],
  experience: UserExperience[]
): number => {
  let filledFields = 0;

  const { user_data } = data;
  const { user, skills } = user_data;

  const fieldsToCheck = [
    user?.email,
    user?.fullname,
    user_data?.logo,
    user_data?.cover_img,
    user_data?.gender,
    user_data?.description,
    user_data?.contact_no,
    user_data?.city,
    user_data?.job_title,
    user_data?.state,
    user_data?.country,
    skills?.length > 0 && skills[0]?.name,
    projectData?.length > 0,
    education?.length > 0,
    experience?.length > 0,
    social?.some((acc) => acc?.url),
  ];

  filledFields = fieldsToCheck?.filter(Boolean)?.length;
  const totalFields = fieldsToCheck?.length;

  return Math?.min(Math?.round((filledFields / totalFields) * 100), 100);
};

export const getStrokeValue = (percentage: number): number => {
  const maxStroke = 360;
  const minStroke = 150;
  return maxStroke - ((maxStroke - minStroke) * percentage) / 100;
};

export const calculateTotalPages = (
  totalRows: number,
  rowsPerPage: number
): number => {
  if (rowsPerPage) {
    return Math?.ceil(totalRows / rowsPerPage);
  } else {
    return 0;
  }
};

export const getFirstWord = (input: string): string => {
  const words: string[] = input?.trim().split(" ");
  return words[0];
};

export const encodeURL = (title: string) => {
  let result = title?.replace(/ /g, "-");
  return encodeURIComponent(result);
};

export const encodeURLWithHyphen = (title: string) => {
  let result = title?.replace(/ /g, "-")?.toLowerCase();
  return encodeURIComponent(result);
};

export const decodeURL = (value: string): string => {
  return decodeURIComponent(value);
};

export function careerFormatDate(dateString: any) {
  const date = new Date(dateString); //input format: ISO 8601 timestamp (e.g.: 2024-07-16T15:35:48.713432Z)

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = String(date?.getUTCDate())?.padStart(2, "0");
  const month = months[date?.getUTCMonth()];
  const year = date?.getUTCFullYear();

  return `${day}/${month}/${year}`; //output format: regional/local (e.g.: 16/07/2024)
}

export function validateResumeFile(file: any) {
  const maxSizeInBytes = 5 * 1024 * 1024;

  const allowedMimeTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const isValidMimeType = allowedMimeTypes.includes(file.type);

  const isValidSize = file.size <= maxSizeInBytes;

  return isValidMimeType && isValidSize;
}

export function validatePdf(file: any) {
  const maxSizeInBytes = 5 * 1024 * 1024;

  // List of allowed MIME types
  const allowedMimeTypes = ["application/pdf"];

  // Check if file type is in the allowed MIME types
  const isValidMimeType = allowedMimeTypes.includes(file.type);

  // Check if file size is less than or equal to 5 MB
  const isValidSize = file.size <= maxSizeInBytes;

  return isValidMimeType && isValidSize;
}

export function validateSpreadsheet(file: any) {
  const maxSizeInBytes = 1024 * 1024; // 1 MB

  const allowedMimeTypes = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-excel",
    "text/csv",
  ];

  const isValidMimeType = allowedMimeTypes.includes(file.type);
  const isValidSize = file.size <= maxSizeInBytes;
  return isValidMimeType && isValidSize;
}

export const getMonthName = (monthString: string): string => {
  const date = new Date(monthString); // Create a Date object from the month string
  const options: Intl.DateTimeFormatOptions = { month: "long" }; // Define formatting options
  return date.toLocaleString("en-US", options); // Format the date to a string
};

export const dateDropdownData = [
  {
    title: "This Month",
    id: new Date().getMonth() + 1,
  },
  {
    title: "Previous Month",
    id: new Date().getMonth(),
  },
];

export const formatDateTime = (dateString: string) => {
  const date = new Date(dateString); //input: 2024-07-16T21:38

  // Options for date formatting
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  // Formatting the date and time
  const dateFormatted = date.toLocaleDateString("en-US", dateOptions);
  const timeFormatted = date.toLocaleTimeString("en-US", timeOptions);

  return {
    date: dateFormatted, //output: 16 July 2024
    time: timeFormatted, //output: 09:38 AM
  };
};

export const formatTimeInHMSFormat = (timeString: string) => {
  //input: 00:10:00
  const [hours, minutes, seconds] = timeString.split(":").map(Number);

  const timeParts = [];

  if (hours > 0) {
    timeParts.push(`${hours} hour${hours !== 1 ? "s" : ""}`);
  }
  if (minutes > 0) {
    timeParts.push(`${minutes} minute${minutes !== 1 ? "s" : ""}`);
  }
  if (seconds > 0) {
    timeParts.push(`${seconds} second${seconds !== 1 ? "s" : ""}`);
  }

  // Join the parts or return '0 seconds' if all are zero
  return timeParts.length > 0 ? timeParts.join(" ") : "0 seconds";
  //output: 10 minutes
};

export const drawRect = (
  detections: Prediction[],
  ctx: CanvasRenderingContext2D
) => {
  detections.forEach((prediction) => {
    const [x, y, width, height] = prediction.bbox;
    const text = prediction.class;
    const crypto: any = window?.crypto || (window as any).msCrypto;
    let array = new Uint32Array(1);
    crypto.getRandomValues(array);
    const color = Math.floor(crypto * 16777215).toString(16);
    ctx.strokeStyle = "#" + color;
    ctx.font = "18px Arial";

    ctx.beginPath();
    ctx.fillStyle = "#" + color;
    ctx.fillText(text, x, y > 10 ? y - 10 : 10);
    ctx.rect(x, y, width, height);
    ctx.stroke();
  });
};

// utils/voiceDetection.ts
// Add type declarations for SpeechRecognition and webkitSpeechRecognition
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export const startVoiceDetection = (
  onVoiceDetected: () => void,
  onRecordingComplete: (audioBlob: Blob) => void
): (() => void) | undefined => {
  if (!("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
    console.error("Speech Recognition API not supported.");
    return;
  }

  const recognition = new (window.SpeechRecognition ||
    (window as any).webkitSpeechRecognition)();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";

  let mediaRecorder: MediaRecorder | null = null;
  let audioChunks: Blob[] = [];
  let isRecording = false;

  recognition.onstart = () => {};

  recognition.onresult = () => {
    if (!isRecording) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          mediaRecorder = new MediaRecorder(stream);

          mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
              audioChunks.push(event.data);
            }
          };

          mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
            onRecordingComplete(audioBlob);
            audioChunks = [];
          };

          mediaRecorder.start();
          isRecording = true;
          onVoiceDetected();

          setTimeout(() => {
            if (mediaRecorder && mediaRecorder.state === "recording") {
              mediaRecorder.stop();
              isRecording = false;
            }
          }, 10000);
        })
        .catch((error) => {
          console.error("Error accessing microphone:", error);
        });
    }
  };

  recognition.onerror = (event: any) => {
    console.error("Speech recognition error:", event.error);
    if (event.error === "no-speech") {
    }
  };

  recognition.onend = () => {
    recognition.start();
  };

  recognition.start();
  return () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
    }
  };
};

export const captureScreenAsBlob = async (): Promise<Blob | null> => {
  try {
    const element = document.body;
    const canvas = await html2canvas(element, {
      useCORS: true,
      allowTaint: true,
      logging: true,
      windowWidth: document.documentElement.scrollWidth,
      windowHeight: document.documentElement.scrollHeight,
    });

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("Unable to capture screenshot as Blob."));
        }
      }, "image/png");
    });
  } catch (error) {
    console.error("Error capturing screenshot:", error);
    return null;
  }
};

export const findById = (value: any, id: any) => {
  if (value?.length) {
    return value?.find((item: any) => item?.id === id) || null;
  }
};

export const findIsCorrect = (value: any, id: any) => {
  if (value?.length) {
    return value?.find((item: any) => item?.id === id && item?.is_correct);
  }
};

export const testTypeCheck = (
  start_at: string,
  expired_at: string,
  current_time: string
): string => {
  if (start_at && expired_at) {
    const startTime = new Date(start_at);
    const expiryTime = new Date(expired_at);

    if (!current_time) {
      return "DRAFT";
    }

    const currentTime = new Date(current_time);

    if (expiryTime > currentTime && currentTime > startTime) {
      return "LIVE";
    } else if (currentTime < startTime) {
      return "UPCOMING";
    } else if (currentTime > expiryTime) {
      return "COMPLETED";
    } else {
      return "DRAFT";
    }
  } else {
    return "DRAFT";
  }
};

export const convertTimeToUTC = (timeString: string) => {
  if (timeString) {
    // Split by ":" and handle cases where seconds might be missing
    const timeParts = timeString?.split(":");

    // If seconds are missing, assume 0 seconds
    if (timeParts.length === 2) {
      timeParts.push("00"); // Add "00" for seconds if missing
    }

    const [hours, minutes, seconds] = timeParts.map(Number);

    // Validate input
    if (
      hours === undefined ||
      minutes === undefined ||
      seconds === undefined ||
      hours < 0 ||
      hours >= 24 ||
      minutes < 0 ||
      minutes >= 60 ||
      seconds < 0 ||
      seconds >= 60
    ) {
      return null; // Return null to indicate invalid time format
    }

    // Create a UTC Date object with the given time
    const utcDate = new Date(Date.UTC(1970, 0, 1, hours, minutes, seconds));

    // Convert to local time
    const localDate = new Date(
      utcDate.toLocaleString("en-US", {
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      })
    );

    // Format the local time as HH:MM AM/PM
    const formatter = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const localTimeHHMMAMPM = formatter.format(localDate);

    return localTimeHHMMAMPM;
  }
};

export function getFormattedCurrentDateInUTCFormat() {
  const currentDate = new Date();

  // Format as YYYY-MM-DD
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(currentDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export const downloadFile = (url: string) => {
  if (!url) {
    console.error("URL is required to download the file.");
    return;
  }

  // Remove quotes if present
  const sanitizedUrl = url.replace(/['"]+/g, "");

  // Create a temporary anchor element to trigger the download
  const anchor = document.createElement("a");
  anchor.href = sanitizedUrl;
  anchor.download = ""; // Optional: specify filename if needed
  anchor.target = "_blank"; // Ensures the link opens safely
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};

export const getLanguageIds = (languages: Language[]): number[] => {
  return languages?.map((language) => language?.id);
};

export const changeCodingLanguageKeys = (
  array: Language[]
): LocalLanguage[] => {
  return array.map((item) => ({
    label: item.name,
    value: item.extension,
    id: item.id,
  }));
};

export const countPassedTestCases = (testCases: TestCaseOutput[]): number => {
  return testCases?.filter((testCase) => testCase?.is_correct)?.length;
};

export const dateInUTCToISO8601 = (date: Date | null): string => {
  if (date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero if needed
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`; //returns yyyy-MM-dd
  }
  return "";
};

export const uploadToS3 = async (
  s3URL: string,
  fields: Record<string, any>,
  files: File
): Promise<boolean> => {
  try {
    const formData = new FormData();

    for (const [key, value] of Object?.entries(fields)) {
      formData.append(key, value);
    }

    formData?.append("file", files);

    const response = await fetch(s3URL, {
      method: "POST",
      body: formData,
    });
    return response.ok;
  } catch (error) {
    console.error("Error uploading to S3:", error);
    return false;
  }
};

export const cleanPercentage = (percentage: number) => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
  const isTooHigh = percentage > 100;
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

export const findCommonElements = (arr1: Skill[], arr2: Skill[]): Skill[] => {
  const ids = new Set(arr2.map((skill) => skill));
  return arr1.filter((skill) => ids.has(skill.id));
};

export const launchConfetti = () => {
  const duration = 3 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 10,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.6 },
      startVelocity: 40,
    });

    confetti({
      particleCount: 10,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.6 },
      startVelocity: 40,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

export function launchConfettiOnBoard(target: HTMLDivElement, duration = 3000) {
  const canvas = document.createElement("canvas");
  canvas.style.position = "absolute";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";

  if (target) {
    target.style.position = "relative";
    target.appendChild(canvas);
  } else {
    document.body.appendChild(canvas);
  }

  const myConfetti = confetti.create(canvas, { resize: true, useWorker: true });

  myConfetti({
    particleCount: 150,
    spread: 70,
    origin: { x: 0, y: 0.6 },
  });

  myConfetti({
    particleCount: 150,
    spread: 70,
    origin: { x: 1, y: 0.6 },
  });

  setTimeout(() => {
    canvas.remove();
  }, duration);
}

export const captureImageFromWebcam = async (): Promise<File | null> => {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  const video = document.createElement("video");
  video.srcObject = stream;

  await new Promise<void>((resolve) => {
    video.onloadedmetadata = () => resolve();
  });

  video.play();
  await new Promise((resolve) => setTimeout(resolve, 500));

  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const context = canvas.getContext("2d");

  if (context) {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  }

  stream.getTracks().forEach((track) => track.stop());

  return new Promise((resolve) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          // Convert Blob to File with filename and type
          const file = new File([blob], `capture_${Date.now()}.jpg`, {
            type: "image/jpeg",
          });
          resolve(file);
        } else {
          resolve(null);
        }
      },
      "image/jpeg",
      1
    );
  });
};

export const countNonEmptyKeys = (obj: Record<string, any>): number => {
  return Object.values(obj).filter((value) => {
    if (Array.isArray(value)) return value.length > 0; // Arrays: Check length
    if (typeof value === "string") return value.trim() !== ""; // Strings: Check non-empty
    return value !== null && value !== undefined && value !== 0; // Exclude null, undefined, and 0
  }).length;
};

export const toggleIdInArray = (arr: string[], id: string): string[] => {
  return arr?.includes(id) ? arr?.filter((item) => item !== id) : [...arr, id];
};

export const isNumberInArray = (arr: string[], id: string): boolean => {
  return arr?.includes(id);
};

export const getIdsFromObjects = <T extends Record<string, any>>(
  arr: T[],
  key: string
): number[] => {
  return arr?.map((item) => item[key])?.filter((id) => id !== undefined);
};

export const currencySymbols: Record<string, string> = {
  INR: "&#8377;",
  USD: "&#36;",
  EUR: "&#8364;",
  AED: "&#x62f;&#x2e;&#x625;",
};

export const formatDateShort = (utcDateString: string) => {
  const date = new Date(utcDateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  //input - UTC time format 2024-09-09T00:00:00Z
  //output - Sep 09, 2024
};

export const calculatePrice = (
  originalPrice: number,
  discountPercentage: number | null
): number => {
  if (
    !discountPercentage ||
    discountPercentage <= 0 ||
    discountPercentage > 100
  ) {
    return originalPrice;
  }
  const discountAmount = (originalPrice * discountPercentage) / 100;
  return parseFloat((originalPrice - discountAmount).toFixed(2));
};

export async function synthesizeSpeech(
  text = "",
  interviewer: string,
  AZURE_SPEECH_KEY: string,
  AZURE_SPEECH_REGION: string
) {
  if (!AZURE_SPEECH_KEY || !AZURE_SPEECH_REGION) {
    throw new Error(
      "Azure Speech Service subscription key and region are required."
    );
  }
  let isSynthesizing = false;
  // Check if another synthesis is ongoing
  if (isSynthesizing) {
    console.warn("Speech synthesis already in progress. Skipping...");
    return null; // Avoid starting a new synthesis
  }

  isSynthesizing = true; // Acquire lock

  const speechConfig = sdk.SpeechConfig.fromSubscription(
    AZURE_SPEECH_KEY,
    AZURE_SPEECH_REGION
  );

  speechConfig.speechSynthesisVoiceName = `${
    interviewer === "Hridesh" ? `en-IN-RehaanNeural` : `en-IN-NeerjaNeural`
  }`;

  const audioOutputStream = sdk.AudioOutputStream.createPullStream();

  const audioConfig = sdk.AudioConfig.fromStreamOutput(audioOutputStream);

  const speechSynthesizer = new sdk.SpeechSynthesizer(
    speechConfig,
    audioConfig
  );
  const visemes: any[] = [];

  speechSynthesizer.visemeReceived = function (s, e) {
    visemes.push([e.audioOffset / 10000, e.visemeId]);
  };

  try {
    const audioStream = await new Promise((resolve, reject) => {
      speechSynthesizer.speakTextAsync(
        text,
        (result) => {
          if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
            // const { audioData } = result;
            const audioData = result.audioData;
            speechSynthesizer.close();

            const blob = new Blob([audioData], { type: "audio/wav" });
            resolve(blob);
          }
        },
        (error) => {
          console.error("Synthesis error:", error);
          speechSynthesizer.close();
          reject(error);
        }
      );
    });
    return { audioStream, visemes };
  } catch (error) {
    console.error("Error during synthesis:", error);
    throw error;
  } finally {
    isSynthesizing = false; // Release lock
  }
}

export const daysPassed = (dateString: string): number => {
  // Ensure the input is a valid date string
  const inputDate = new Date(dateString);

  if (isNaN(inputDate.getTime())) {
    throw new Error("Invalid date format");
  }

  // Get today's date and set the time to midnight to ignore hours, minutes, and seconds
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Calculate the difference in time
  const timeDifference = today.getTime() - inputDate.getTime();

  // Convert time difference to days
  const millisecondsInOneDay = 1000 * 60 * 60 * 24;
  const daysDifference = timeDifference / millisecondsInOneDay;

  return Math.floor(daysDifference);
};

export const getAppliedFiltersCount = (
  filters: JobFilters,
  initial: JobFilters
): number => {
  let count = 0;
  let salaryFilterApplied = false;
  Object.entries(filters).forEach(([key, value]) => {
    if (key === "sort_by" || key === "page_view") return;
    const defaultValue = initial[key as keyof JobFilters];
    const isArray = Array.isArray(value);
    const isMeaningfulArray = isArray && value.length > 0;
    const isEmptyString = typeof value === "string" && value.trim() === "";
    const isDefaultValue = value === defaultValue;
    if (
      (key === "jobs_posted_by" && value === "all") ||
      key === "name" ||
      key === "location" ||
      key === "page"
    ) {
      return;
    }
    if (key === "salary_min" || key === "salary_max") {
      const min = filters.salary_min;
      const max = filters.salary_max;
      const minDefault = initial.salary_min;
      const maxDefault = initial.salary_max;
      if (!salaryFilterApplied && (min !== minDefault || max !== maxDefault)) {
        count += 1;
        salaryFilterApplied = true;
      }
      return;
    }
    if (isArray) {
      if (isMeaningfulArray) {
        count += 1;
      }
    } else if (!isEmptyString && !isDefaultValue) {
      count += 1;
    }
  });
  return count;
};

export const renderStrings = (strings: string[]) => {
  return Array.isArray(strings) && strings.length > 1
    ? strings.join(", ")
    : strings[0] || "";
};

export const groupMessagesByDate = (content: any[]): any => {
  const grouped: any = {};
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  content.forEach((message: any) => {
    const msgDate = new Date(message.created_at);
    const dateKey = msgDate.toDateString();

    if (dateKey === today.toDateString()) {
      grouped["Today"] = grouped["Today"] || [];
      grouped["Today"].push(message);
    } else if (dateKey === yesterday.toDateString()) {
      grouped["Yesterday"] = grouped["Yesterday"] || [];
      grouped["Yesterday"].push(message);
    } else {
      grouped[dateKey] = grouped[dateKey] || [];
      grouped[dateKey].push(message);
    }
  });

  // Sort messages within each group by created_at
  for (const date in grouped) {
    grouped[date].sort(
      (a: any, b: any) =>
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    );
  }

  return grouped;
};

export const getFileIconClass = (fileName: string) => {
  const ext = fileName.split(".").pop()?.toLowerCase();
  switch (ext) {
    case "pdf":
      return "fa-file-pdf-o";
    case "doc":
    case "docx":
      return "fa-file-word-o";
    case "xls":
    case "xlsx":
      return "fa-file-excel-o";
    case "ppt":
    case "pptx":
      return "fa-file-powerpoint-o";
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
    case "svg":
      return "fa-file-image-o";
    case "mp4":
    case "mov":
    case "avi":
      return "fa-file-video-o";
    case "mp3":
    case "wav":
      return "fa-file-audio-o";
    case "zip":
    case "rar":
    case "7z":
      return "fa-file-archive-o";
    default:
      return "fa-file-o";
  }
};

export const formatToMinSec = (totalSeconds: any) => {
  const total = Number(totalSeconds);
  if (isNaN(total) || total < 0) {
    return "00:00";
  }
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const paddedSeconds = String(seconds).padStart(2, "0");
  return `${minutes}:${paddedSeconds}`;
};

export const findObjectByKey = (array: any, key: any, value: any) => {
  if (array?.length) {
    return array?.find((item: any) => item?.[key] === value);
  }
};

export const convertMinutesToHoursMinutes = (
  totalMinutes: number
): { hours: number; minutes: number } => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return { hours, minutes };
};

export const convertMonthsToYearsMonths = (
  totalMonths: number
): { years: number; months: number } => {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return { years, months };
};

export const formatSalary = (num: number | null | undefined): string => {
  if (typeof num !== "number" || isNaN(num)) return "";
  if (num >= 100000) {
    const lpa = num / 1e5;
    const formatted = lpa.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return `₹${formatted} LPA`;
  } else {
    const formatted = num.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return `₹${formatted}`;
  }
};

export const handleAmountInput =
  (fieldName: string, setValue: any) => (e: any) => {
    const raw = e.target.value?.replace(/,/g, "").replace(/\D/g, "");
    if (!raw) {
      setValue(fieldName, null);
      e.target.value = "";
      return;
    }
    const formatted = Number(raw)?.toLocaleString("en-IN");
    e.target.value = formatted;
    setValue(fieldName, raw, { shouldValidate: true });
  };

export const handleAmountHTMLInput = (input: string) => {
  const raw = input.replace(/,/g, "").replace(/\D/g, "");
  if (!raw) return "";
  return Number(raw).toLocaleString("en-IN");
};

export const getLabelFromOptions = (
  value: string,
  options: { label: string; value: string }[]
) => {
  return options?.find((option) => option?.value === value)?.label || "";
};

export const getISOWeekNumber = (date: Date): number => {
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(
    ((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
  );
  return weekNo;
};

export const truncateFileName = (filename: string, maxLength = 30) => {
  if (filename.length <= maxLength) return filename;
  const ext = filename.split(".").pop();
  if (ext) {
    const nameWithoutExt = filename?.slice(
      0,
      filename.length - ext?.length - 1
    );
    const start = nameWithoutExt.slice(0, 10);
    const end = nameWithoutExt.slice(-10);
    return `${start}...${end}.${ext}`;
  }
};

export const getSearchResultText = (
  name: string,
  location: string,
  count: number
) => {
  if (!name && !location) return "";

  let text = `${count} Search result for`;
  if (name)
    text += ` "${
      name?.length > 40 ? name?.slice(0, 40).concat("....") : name
    }"`;
  if (name && location) text += " in";
  if (location)
    text += ` "${
      location?.length > 40 ? location?.slice(0, 40).concat("....") : location
    }"`;

  return text;
};

export const getProgressColor = (value: number, total: number): string => {
  if (total <= 0) return "#d3d3d3";
  const percentage = (value / total) * 100;
  if (percentage <= 40) {
    return "#CD2929";
  } else if (percentage <= 70) {
    return "#CCCC00";
  } else {
    return "#54B763";
  }
};

export const selectStyles = {
  borderRadius: "8px",
  color: "#222222",

  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
  },

  "& .MuiOutlinedInput-input": {
    padding: "12px 12px 9px 12px",
  },

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#D1D1D1",
  },

  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#D1D1D1 !important",
  },

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#D1D1D1",
  },

  "& .MuiSelect-icon": {
    position: "relative",
    right: "20px",
    color: "#B0B0B0",
  },

  "& .MuiSelect-icon > svg": {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
    right: "10px",
  },
};

export const autocompleteStyles = {
  borderRadius: "8px",
  color: "#222222",

  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
  },

  "& .MuiOutlinedInput-root.MuiInputBase-sizeSmall .MuiAutocomplete-input": {
    padding: "5.5px 4px 3.5px 5px",
  },

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#D1D1D1",
  },

  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#D1D1D1 !important",
  },

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#D1D1D1",
  },
};

export const splitBySearch = (
  text: string,
  query: string
): { part: string; match: boolean }[] => {
  if (!query) return [{ part: text, match: false }];

  const regex = new RegExp(`(${query})`, "ig"); // global, case-insensitive
  const parts = text.split(regex);

  return parts.filter(Boolean).map((part) => ({
    part,
    match: part.toLowerCase() === query.toLowerCase(),
  }));
};
