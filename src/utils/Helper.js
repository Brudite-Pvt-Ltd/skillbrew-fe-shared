"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTimeInSeconds = exports.getCodeExtensionWithLanguage = exports.getCodeLanguageWithExtension = exports.exitFullScreen = exports.makeFullScreen = exports.editorConfiguration = exports.getWordWithinLimit = exports.capitalizeFirstLetter = exports.getCapitalizeFirstLetter = exports.updateValuesById = exports.allHaveAccessTypeEditor = exports.extractIds = exports.searchValue = exports.searchNumber = exports.findDifferenceData = exports.getSubmissionIdUsingQuestionId = exports.checkSubmissionIdExists = exports.checkQuestionIdExists = exports.deleteAlert = exports.formatDate = exports.dateWithDayInMachineFormat = exports.addDaysToDate = exports.formatdesiredTime = exports.changeTimeIntoMinutes = exports.changeTimeIntoSeconds = exports.changeTimeLocalMachineFormat = exports.formatDesiredDate = exports.changeTimeFormatInLocal = exports.generateUTCDateOnly = exports.generateUTCTime = exports.getCurrentDate = exports.getCurrentDateTime = exports.deleteCookie = exports.getCookie = exports.setCookie = exports.getFromLocalStorage = exports.removeFromLocalStorage = exports.saveToLocalStorage = exports.getFirstLetter = exports.isEmpty = exports.isNotEmpty = exports.paginationQuery = exports.getplayerSecondLastURL = exports.getSecondLastURL = exports.getLastURL = exports.decodeJwtToken = exports.admindecodeID = exports.decodeID = exports.encodeID = exports.renderFormData = void 0;
exports.getAppliedFiltersCount = exports.daysPassed = exports.renderStars = exports.calculatePrice = exports.formatDateShort = exports.currencySymbols = exports.getIdsFromObjects = exports.isNumberInArray = exports.toggleIdInArray = exports.countNonEmptyKeys = exports.captureImageFromWebcam = exports.launchConfetti = exports.findCommonElements = exports.cleanPercentage = exports.uploadToS3 = exports.dateInUTCToISO8601 = exports.countPassedTestCases = exports.changeCodingLanguageKeys = exports.getLanguageIds = exports.downloadFile = exports.convertTimeToUTC = exports.testTypeCheck = exports.findIsCorrect = exports.findById = exports.captureScreenAsBlob = exports.startVoiceDetection = exports.drawRect = exports.formatTimeInHMSFormat = exports.formatDateTime = exports.dateDropdownData = exports.getMonthName = exports.decodeURL = exports.encodeURLWithHyphen = exports.encodeURL = exports.getFirstWord = exports.calculateTotalPages = exports.getStrokeValue = exports.calculateProfileCompleteness = exports.terminateIfNumber = exports.testCaseCount = exports.copyCode = exports.createAndDownloadZip = exports.getRandomIdNumber = exports.formatTimeDuration = exports.formatDuration = exports.calculateRemainingTime = exports.checkPositiveValueInArray = exports.findIndexById = exports.getArrayOfIdFromArrayOfObject = exports.roundOfNumber = void 0;
exports.formatToLac = exports.convertMonthsToYearsMonths = exports.convertMinutesToHoursMinutes = exports.findObjectByKey = exports.formatToMinSec = exports.getFileIconClass = exports.groupMessagesByDate = exports.renderStrings = void 0;
exports.careerFormatDate = careerFormatDate;
exports.validateResumeFile = validateResumeFile;
exports.validatePdf = validatePdf;
exports.validateSpreadsheet = validateSpreadsheet;
exports.getFormattedCurrentDateInUTCFormat = getFormattedCurrentDateInUTCFormat;
exports.synthesizeSpeech = synthesizeSpeech;
const crypto_js_1 = __importDefault(require("crypto-js"));
const sweetalert2_1 = __importDefault(require("sweetalert2"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const html2canvas_1 = __importDefault(require("html2canvas"));
const canvas_confetti_1 = __importDefault(require("canvas-confetti"));
const Config_1 = require("@/Config/Config");
const sdk = __importStar(require("microsoft-cognitiveservices-speech-sdk"));
const renderFormData = (values) => {
    let formData = new FormData();
    Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
    });
    return formData;
};
exports.renderFormData = renderFormData;
const secretKey = (_a = process.env.NEXT_PUBLIC_secretKey) !== null && _a !== void 0 ? _a : "";
const secretKey2 = (_b = process.env.NEXT_PUBLIC_secretKey2) !== null && _b !== void 0 ? _b : "";
const secretKey3 = (_c = process.env.NEXT_PUBLIC_secretKey3) !== null && _c !== void 0 ? _c : "";
const secretKey4 = (_d = process.env.NEXT_PUBLIC_secretKey4) !== null && _d !== void 0 ? _d : "";
const secretKey5 = (_e = process.env.NEXT_PUBLIC_secretKey5) !== null && _e !== void 0 ? _e : "";
const encodeID = (id) => {
    if (id != null) {
        const encryptedData = crypto_js_1.default.AES.encrypt(id.toString(), secretKey).toString();
        const encryptedData2 = crypto_js_1.default.AES.encrypt(encryptedData.toString(), secretKey2).toString();
        const encryptedData3 = crypto_js_1.default.AES.encrypt(encryptedData2.toString(), secretKey3).toString();
        const encryptedData4 = crypto_js_1.default.AES.encrypt(encryptedData3.toString(), secretKey4).toString();
        const encryptedDataMain = crypto_js_1.default.AES.encrypt(encryptedData4.toString(), secretKey5).toString();
        return encryptedDataMain === null || encryptedDataMain === void 0 ? void 0 : encryptedDataMain.replaceAll("/", "Pai");
    }
    else {
        return id;
    }
};
exports.encodeID = encodeID;
const decodeID = (id) => {
    if (id != null) {
        const replaceddata = id === null || id === void 0 ? void 0 : id.replaceAll("Pai", "/");
        const decryptedData = crypto_js_1.default.AES.decrypt(replaceddata.toString(), secretKey5).toString(crypto_js_1.default.enc.Utf8);
        const decryptedData1 = crypto_js_1.default.AES.decrypt(decryptedData.toString(), secretKey4).toString(crypto_js_1.default.enc.Utf8);
        const decryptedData2 = crypto_js_1.default.AES.decrypt(decryptedData1.toString(), secretKey3).toString(crypto_js_1.default.enc.Utf8);
        const decryptedData3 = crypto_js_1.default.AES.decrypt(decryptedData2.toString(), secretKey2).toString(crypto_js_1.default.enc.Utf8);
        const decryptedDataMain = crypto_js_1.default.AES.decrypt(decryptedData3.toString(), secretKey).toString(crypto_js_1.default.enc.Utf8);
        return decryptedDataMain;
    }
    else {
        return id;
    }
};
exports.decodeID = decodeID;
const admindecodeID = (id) => {
    if (id != null) {
        const replaceddata = id === null || id === void 0 ? void 0 : id.replaceAll("Pai", "/");
        const decryptedData = crypto_js_1.default.AES.decrypt(replaceddata.toString(), secretKey5).toString(crypto_js_1.default.enc.Utf8);
        const decryptedData1 = crypto_js_1.default.AES.decrypt(decryptedData.toString(), secretKey4).toString(crypto_js_1.default.enc.Utf8);
        return decryptedData1;
    }
    else {
        return id;
    }
};
exports.admindecodeID = admindecodeID;
const decodeJwtToken = (token) => {
    try {
        const decoded = jsonwebtoken_1.default.decode(token);
        return decoded;
    }
    catch (err) {
        return null;
    }
};
exports.decodeJwtToken = decodeJwtToken;
const getLastURL = (location) => {
    var _a;
    let lastURL = (_a = location === null || location === void 0 ? void 0 : location.pathname) === null || _a === void 0 ? void 0 : _a.split("/").pop();
    return lastURL;
};
exports.getLastURL = getLastURL;
const getSecondLastURL = (location) => {
    var _a;
    let lastURL = (_a = location === null || location === void 0 ? void 0 : location.pathname) === null || _a === void 0 ? void 0 : _a.split("/")[2];
    return lastURL;
};
exports.getSecondLastURL = getSecondLastURL;
const getplayerSecondLastURL = (location) => {
    var _a;
    let lastURL = (_a = location === null || location === void 0 ? void 0 : location.pathname) === null || _a === void 0 ? void 0 : _a.split("/")[1];
    return lastURL;
};
exports.getplayerSecondLastURL = getplayerSecondLastURL;
const paginationQuery = (limit, page, search) => {
    let query;
    let newpage = "";
    if (search != "") {
        newpage = 1;
    }
    else {
        newpage = page;
    }
    query = {
        page_size: limit,
        page: newpage,
        search: (search === null || search === void 0 ? void 0 : search.length) > 2 ? search : "",
        status: true,
    };
    return query;
};
exports.paginationQuery = paginationQuery;
const isNotEmpty = (data) => {
    if (data !== "" && data !== null && data !== undefined) {
        return true;
    }
    else {
        return false;
    }
};
exports.isNotEmpty = isNotEmpty;
const isEmpty = (data) => {
    if (data == " " && data == null && data == undefined && data == 0) {
        return true;
    }
    else {
        return false;
    }
};
exports.isEmpty = isEmpty;
const getFirstLetter = (data) => {
    if (typeof data === "string" && data !== "") {
        const firstLetter = data.charAt(0);
        return firstLetter;
    }
};
exports.getFirstLetter = getFirstLetter;
const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
};
exports.saveToLocalStorage = saveToLocalStorage;
const removeFromLocalStorage = (key) => {
    if (typeof window !== "undefined") {
        localStorage.removeItem(key);
    }
};
exports.removeFromLocalStorage = removeFromLocalStorage;
const getFromLocalStorage = (key) => {
    if (typeof window !== "undefined") {
        let value = localStorage.getItem(key);
        return value;
    }
};
exports.getFromLocalStorage = getFromLocalStorage;
const setCookie = (name, value, path = "/", days = 365) => {
    let expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; Path=${path}; SameSite="Lax"; Secure:"True";`;
};
exports.setCookie = setCookie;
const getCookie = (name) => {
    function escape(s) {
        return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, "\\$1");
    }
    let match = document.cookie.match(RegExp("(?:^|;\\s*)" + escape(name) + "=([^;]*)"));
    return match ? match[1] : null;
};
exports.getCookie = getCookie;
const deleteCookie = (name, path = "/", domain = "") => {
    const expires = `expires=${new Date(0).toUTCString()}`;
    const cookie = `${name}=; path=${path}; ${expires};`;
    const domainCookie = domain ? `${cookie} domain=.${domain};` : cookie;
    document.cookie = domainCookie;
    document.cookie = cookie;
};
exports.deleteCookie = deleteCookie;
const getCurrentDateTime = () => {
    let currentDate = new Date().toJSON();
    return currentDate;
};
exports.getCurrentDateTime = getCurrentDateTime;
const getCurrentDate = () => {
    let currentDate = new Date().toJSON().slice(0, 10);
    return currentDate;
};
exports.getCurrentDate = getCurrentDate;
const generateUTCTime = (localTime) => {
    const utcTimeValue = new Date(localTime).toISOString();
    return utcTimeValue; //output: 2024-10-01T12:30:00Z
};
exports.generateUTCTime = generateUTCTime;
const generateUTCDateOnly = (localTime) => {
    let utcTimeValue = "";
    if (localTime) {
        const date = new Date(localTime);
        utcTimeValue = date.toISOString();
    }
    return utcTimeValue.split("T")[0]; //output: 2024-10-01
};
exports.generateUTCDateOnly = generateUTCDateOnly;
const changeTimeFormatInLocal = (utcDateTime) => {
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
exports.changeTimeFormatInLocal = changeTimeFormatInLocal;
const formatDesiredDate = (isoString) => {
    if (!isoString) {
        return "";
    }
    const date = new Date(isoString);
    if (isNaN(date.getTime())) {
        return "";
    }
    // Define options for formatting the date
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    // Format the date according to the options
    return date.toLocaleDateString("en-US", options);
};
exports.formatDesiredDate = formatDesiredDate;
const changeTimeLocalMachineFormat = (utcDateTime) => {
    if (!utcDateTime) {
        return "";
    }
    else {
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
exports.changeTimeLocalMachineFormat = changeTimeLocalMachineFormat;
const changeTimeIntoSeconds = (timeString) => {
    if (timeString) {
        const [hours, minutes, seconds] = timeString.split(":").map(Number);
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        return totalSeconds;
    }
};
exports.changeTimeIntoSeconds = changeTimeIntoSeconds;
const changeTimeIntoMinutes = (timeString) => {
    if (typeof timeString !== "string")
        return 0;
    const parts = timeString.split(":").map(Number);
    const hours = parts[0] || 0;
    const minutes = parts[1] || 0;
    return hours * 60 + minutes;
};
exports.changeTimeIntoMinutes = changeTimeIntoMinutes;
const formatdesiredTime = (timeString) => {
    var _a;
    const [hours, minutes, seconds] = (_a = timeString === null || timeString === void 0 ? void 0 : timeString.split(":")) === null || _a === void 0 ? void 0 : _a.map(Number);
    let formattedTime = "";
    if (hours > 0) {
        formattedTime += `${hours} Hour${hours > 1 ? "s" : ""} `;
    }
    formattedTime += `${minutes} min${minutes !== 1 ? "s" : ""}`;
    return formattedTime;
};
exports.formatdesiredTime = formatdesiredTime;
const addDaysToDate = (startDate, duration) => {
    if (!startDate)
        return "";
    const [year, month, day] = startDate.split("-").map(Number);
    const startDateObject = new Date(year, month - 1, day);
    const newDateObject = new Date(startDateObject.getTime() + duration * 24 * 60 * 60 * 1000);
    const newYear = newDateObject.getFullYear();
    const newMonth = (newDateObject.getMonth() + 1).toString().padStart(2, "0");
    const newDay = newDateObject.getDate().toString().padStart(2, "0");
    return `${newYear}-${newMonth}-${newDay}`;
};
exports.addDaysToDate = addDaysToDate;
const dateWithDayInMachineFormat = (date) => {
    const newDate = new Date(date).toUTCString().slice(0, 16);
    return newDate; //output: Tue, 16 Jul 2024
};
exports.dateWithDayInMachineFormat = dateWithDayInMachineFormat;
const formatDate = (dateString) => {
    // "2024-04-30" to "30 Apr 2024"
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
    if (dateString) {
        const [year, month, day] = dateString.split("-");
        const monthName = months[parseInt(month, 10) - 1];
        return `${parseInt(day, 10)} ${monthName} ${year}`;
    }
    return "";
};
exports.formatDate = formatDate;
const deleteAlert = () => {
    sweetalert2_1.default.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
            return true;
        }
        else {
            return false;
        }
    });
    return false;
};
exports.deleteAlert = deleteAlert;
const checkQuestionIdExists = (array, id, type) => {
    return array.some((question) => (question === null || question === void 0 ? void 0 : question.question_id) === id && (question === null || question === void 0 ? void 0 : question.question_type) === type);
};
exports.checkQuestionIdExists = checkQuestionIdExists;
const checkSubmissionIdExists = (array, id) => {
    return array === null || array === void 0 ? void 0 : array.some((value) => (value === null || value === void 0 ? void 0 : value.id) === id);
};
exports.checkSubmissionIdExists = checkSubmissionIdExists;
const getSubmissionIdUsingQuestionId = (array, id) => {
    const result = array.find((item) => item.question_id === id);
    return result ? result.id : null;
};
exports.getSubmissionIdUsingQuestionId = getSubmissionIdUsingQuestionId;
const findDifferenceData = (arr1, arr2) => {
    const onlyInArr1 = arr1 === null || arr1 === void 0 ? void 0 : arr1.filter((item1) => !(arr2 === null || arr2 === void 0 ? void 0 : arr2.some((item2) => (item1 === null || item1 === void 0 ? void 0 : item1.id) === (item2 === null || item2 === void 0 ? void 0 : item2.id))));
    const onlyInArr2 = arr2 === null || arr2 === void 0 ? void 0 : arr2.filter((item2) => !(arr1 === null || arr1 === void 0 ? void 0 : arr1.some((item1) => (item1 === null || item1 === void 0 ? void 0 : item1.id) === (item2 === null || item2 === void 0 ? void 0 : item2.id))));
    return [...onlyInArr1, ...onlyInArr2];
};
exports.findDifferenceData = findDifferenceData;
const searchNumber = (arr, target) => {
    if (arr) {
        return arr.includes(target);
    }
    else {
        return false;
    }
};
exports.searchNumber = searchNumber;
const searchValue = (arr, target) => {
    if (arr) {
        return arr.includes(target);
    }
    else {
        return false;
    }
};
exports.searchValue = searchValue;
const extractIds = (arr, idKey = "id") => {
    return arr.map((obj) => obj[idKey]);
};
exports.extractIds = extractIds;
const allHaveAccessTypeEditor = (arr, key = "accesstype", value = "EDITOR") => {
    return arr.every((obj) => obj[key] === value);
};
exports.allHaveAccessTypeEditor = allHaveAccessTypeEditor;
const updateValuesById = (arr, idList, key, newValue, idKey) => {
    return arr.map((obj) => {
        if (idList.includes(obj[idKey])) {
            return Object.assign(Object.assign({}, obj), { [key]: newValue });
        }
        return obj;
    });
};
exports.updateValuesById = updateValuesById;
const getCapitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase();
};
exports.getCapitalizeFirstLetter = getCapitalizeFirstLetter;
const capitalizeFirstLetter = (string) => {
    if (string) {
        return ((string === null || string === void 0 ? void 0 : string.charAt(0).toUpperCase()) +
            (string === null || string === void 0 ? void 0 : string.slice(1, string.length).toLowerCase()));
    }
};
exports.capitalizeFirstLetter = capitalizeFirstLetter;
const getWordWithinLimit = (name, limit = 15) => {
    var _a;
    return (_a = name === null || name === void 0 ? void 0 : name.split(" ")) === null || _a === void 0 ? void 0 : _a.reduce((result, word) => {
        const currentLength = (result === null || result === void 0 ? void 0 : result.length) + (result ? 1 : 0);
        return currentLength + (word === null || word === void 0 ? void 0 : word.length) <= limit
            ? result + (result ? " " : "") + word
            : result || ((word === null || word === void 0 ? void 0 : word.length) <= limit ? word : word === null || word === void 0 ? void 0 : word.slice(0, limit));
    }, "");
};
exports.getWordWithinLimit = getWordWithinLimit;
exports.editorConfiguration = {
    toolbar: {
        items: [
            "heading",
            "|",
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
const makeFullScreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
        element.requestFullscreen().catch((error) => {
            console.error("Error attempting to enable full-screen mode:", error);
        });
    }
};
exports.makeFullScreen = makeFullScreen;
const exitFullScreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
};
exports.exitFullScreen = exitFullScreen;
const getCodeLanguageWithExtension = (language) => {
    if (language == "py") {
        return "Python";
    }
    else if (language == "java") {
        return "Java";
    }
    else if (language == "cpp") {
        return "C++";
    }
    else if (language == "js") {
        return "JavaScript";
    }
    else if (language == "go") {
        return "Go";
    }
    else if (language == "c") {
        return "C";
    }
    else {
        return "";
    }
};
exports.getCodeLanguageWithExtension = getCodeLanguageWithExtension;
const getCodeExtensionWithLanguage = (language) => {
    if (language == "Python") {
        return "py";
    }
    else if (language == "Java") {
        return "java";
    }
    else if (language == "C++") {
        return "cpp";
    }
    else if (language == "JavaScript") {
        return "js";
    }
    else if (language == "Go") {
        return "go";
    }
    else if (language == "C") {
        return "c";
    }
    else {
        return "";
    }
};
exports.getCodeExtensionWithLanguage = getCodeExtensionWithLanguage;
const formatTimeInSeconds = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};
exports.formatTimeInSeconds = formatTimeInSeconds;
const roundOfNumber = (number) => {
    const roundedNumber = Math === null || Math === void 0 ? void 0 : Math.round(number); // Round to the nearest whole number
    return roundedNumber;
};
exports.roundOfNumber = roundOfNumber;
const getArrayOfIdFromArrayOfObject = (arrayOfObject) => {
    const arrayOfIds = arrayOfObject === null || arrayOfObject === void 0 ? void 0 : arrayOfObject.map((obj) => obj === null || obj === void 0 ? void 0 : obj.id);
    return arrayOfIds;
};
exports.getArrayOfIdFromArrayOfObject = getArrayOfIdFromArrayOfObject;
const findIndexById = (id, array) => {
    return array === null || array === void 0 ? void 0 : array.findIndex((item) => item.id === id);
};
exports.findIndexById = findIndexById;
const checkPositiveValueInArray = (arr) => {
    for (let value of arr) {
        if (value > 0) {
            return true;
        }
    }
    return false;
};
exports.checkPositiveValueInArray = checkPositiveValueInArray;
const calculateRemainingTime = (startTime) => {
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
exports.calculateRemainingTime = calculateRemainingTime;
const formatDuration = (duration) => {
    // Parse the duration string
    const [days, time] = duration.split(" ");
    const [hours, minutes, seconds] = time.split(":").map(Number);
    // Convert days to hours and add to total hours
    const totalHours = Number(days) * 24 + hours;
    // Format the output
    const formattedHours = totalHours > 0 ? `${totalHours} Hour${totalHours > 1 ? "s" : ""}` : "";
    const formattedMinutes = minutes > 0 ? `${minutes} Min${minutes > 1 ? "s" : ""}` : "";
    // Combine formatted parts
    return [formattedHours, formattedMinutes].filter(Boolean).join(" ");
};
exports.formatDuration = formatDuration;
const formatTimeDuration = (duration) => {
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
    if (hours > 0)
        parts.push(`${hours} hour${hours > 1 ? "s" : ""}`);
    if (minutes > 0)
        parts.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
    if (seconds > 0)
        parts.push(`${seconds} second${seconds > 1 ? "s" : ""}`);
    return parts.join(", ");
};
exports.formatTimeDuration = formatTimeDuration;
const getRandomIdNumber = () => {
    const crypto = window.crypto;
    let array = new Uint32Array(1);
    const id = crypto.getRandomValues(array)[0];
    return id;
};
exports.getRandomIdNumber = getRandomIdNumber;
const createAndDownloadZip = (currentCode, currentTitle, currentLanguage) => {
    const blob = new Blob([currentCode], { type: "text/plain" });
    const link = document.createElement("a");
    link.download = `${currentTitle}.${currentLanguage}`;
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
exports.createAndDownloadZip = createAndDownloadZip;
const copyCode = (code, setIsCopy) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield navigator.clipboard.writeText(code);
        setIsCopy(true);
        setTimeout(() => {
            setIsCopy(false);
        }, 500);
    }
    catch (error) {
        console.error("Unable to copy text to clipboard:", error);
    }
});
exports.copyCode = copyCode;
const testCaseCount = (testCaseArray) => {
    var _a;
    let passedTestCase = 0;
    let failedTestCase = 0;
    let totalTestCase = 0;
    for (let i = 0; i < (testCaseArray === null || testCaseArray === void 0 ? void 0 : testCaseArray.length); i++) {
        if ((_a = testCaseArray[i]) === null || _a === void 0 ? void 0 : _a.is_correct) {
            passedTestCase += 1;
        }
        else {
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
exports.testCaseCount = testCaseCount;
const terminateIfNumber = (str) => {
    const regex = /^\d+\./;
    if (regex.test(str)) {
        return str.replace(regex, "");
    }
    return str;
};
exports.terminateIfNumber = terminateIfNumber;
const calculateProfileCompleteness = (data, projectData, social, education, experience) => {
    var _a;
    let filledFields = 0;
    const { user_data } = data;
    const { user, skills } = user_data;
    const fieldsToCheck = [
        user === null || user === void 0 ? void 0 : user.email,
        user === null || user === void 0 ? void 0 : user.fullname,
        user_data === null || user_data === void 0 ? void 0 : user_data.logo,
        user_data === null || user_data === void 0 ? void 0 : user_data.cover_img,
        user_data === null || user_data === void 0 ? void 0 : user_data.gender,
        user_data === null || user_data === void 0 ? void 0 : user_data.description,
        user_data === null || user_data === void 0 ? void 0 : user_data.contact_no,
        user_data === null || user_data === void 0 ? void 0 : user_data.city,
        user_data === null || user_data === void 0 ? void 0 : user_data.job_title,
        user_data === null || user_data === void 0 ? void 0 : user_data.state,
        user_data === null || user_data === void 0 ? void 0 : user_data.country,
        (skills === null || skills === void 0 ? void 0 : skills.length) > 0 && ((_a = skills[0]) === null || _a === void 0 ? void 0 : _a.name),
        projectData.length > 0,
        education.length > 0,
        experience.length > 0,
        social.some((acc) => acc === null || acc === void 0 ? void 0 : acc.url),
    ];
    filledFields = fieldsToCheck.filter(Boolean).length;
    const totalFields = fieldsToCheck.length;
    return Math.min(Math.round((filledFields / totalFields) * 100), 100);
};
exports.calculateProfileCompleteness = calculateProfileCompleteness;
const getStrokeValue = (percentage) => {
    const maxStroke = 360;
    const minStroke = 150;
    return maxStroke - ((maxStroke - minStroke) * percentage) / 100;
};
exports.getStrokeValue = getStrokeValue;
const calculateTotalPages = (totalRows, rowsPerPage) => {
    if (rowsPerPage) {
        return Math.ceil(totalRows / rowsPerPage);
    }
    else {
        return 0;
    }
};
exports.calculateTotalPages = calculateTotalPages;
const getFirstWord = (input) => {
    const words = input.trim().split(" ");
    return words[0];
};
exports.getFirstWord = getFirstWord;
const encodeURL = (title) => {
    let result = title.replace(/ /g, "-");
    return encodeURIComponent(result);
};
exports.encodeURL = encodeURL;
const encodeURLWithHyphen = (title) => {
    let result = title.replace(/ /g, "-").toLowerCase();
    return encodeURIComponent(result);
};
exports.encodeURLWithHyphen = encodeURLWithHyphen;
const decodeURL = (value) => {
    return decodeURIComponent(value);
};
exports.decodeURL = decodeURL;
function careerFormatDate(dateString) {
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
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`; //output format: regional/local (e.g.: 16/07/2024)
}
function validateResumeFile(file) {
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
function validatePdf(file) {
    const maxSizeInBytes = 5 * 1024 * 1024;
    // List of allowed MIME types
    const allowedMimeTypes = ["application/pdf"];
    // Check if file type is in the allowed MIME types
    const isValidMimeType = allowedMimeTypes.includes(file.type);
    // Check if file size is less than or equal to 5 MB
    const isValidSize = file.size <= maxSizeInBytes;
    return isValidMimeType && isValidSize;
}
function validateSpreadsheet(file) {
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
const getMonthName = (monthString) => {
    const date = new Date(monthString); // Create a Date object from the month string
    const options = { month: "long" }; // Define formatting options
    return date.toLocaleString("en-US", options); // Format the date to a string
};
exports.getMonthName = getMonthName;
exports.dateDropdownData = [
    {
        title: "This Month",
        id: new Date().getMonth() + 1,
    },
    {
        title: "Previous Month",
        id: new Date().getMonth(),
    },
];
const formatDateTime = (dateString) => {
    const date = new Date(dateString); //input: 2024-07-16T21:38
    // Options for date formatting
    const dateOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    const timeOptions = {
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
exports.formatDateTime = formatDateTime;
const formatTimeInHMSFormat = (timeString) => {
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
exports.formatTimeInHMSFormat = formatTimeInHMSFormat;
const drawRect = (detections, ctx) => {
    detections.forEach((prediction) => {
        const [x, y, width, height] = prediction.bbox;
        const text = prediction.class;
        const crypto = window.crypto || window.msCrypto;
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
exports.drawRect = drawRect;
// utils/voiceDetection.ts
const startVoiceDetection = (onVoiceDetected, onRecordingComplete) => {
    if (!("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
        console.error("Speech Recognition API not supported.");
        return;
    }
    const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    let mediaRecorder = null;
    let audioChunks = [];
    let isRecording = false;
    recognition.onstart = () => { };
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
    recognition.onerror = (event) => {
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
exports.startVoiceDetection = startVoiceDetection;
const captureScreenAsBlob = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const element = document.body;
        const canvas = yield (0, html2canvas_1.default)(element, {
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
                }
                else {
                    reject(new Error("Unable to capture screenshot as Blob."));
                }
            }, "image/png");
        });
    }
    catch (error) {
        console.error("Error capturing screenshot:", error);
        return null;
    }
});
exports.captureScreenAsBlob = captureScreenAsBlob;
const findById = (value, id) => {
    if (value === null || value === void 0 ? void 0 : value.length) {
        return (value === null || value === void 0 ? void 0 : value.find((item) => (item === null || item === void 0 ? void 0 : item.id) === id)) || null;
    }
};
exports.findById = findById;
const findIsCorrect = (value, id) => {
    if (value === null || value === void 0 ? void 0 : value.length) {
        return value === null || value === void 0 ? void 0 : value.find((item) => (item === null || item === void 0 ? void 0 : item.id) === id && (item === null || item === void 0 ? void 0 : item.is_correct));
    }
};
exports.findIsCorrect = findIsCorrect;
const testTypeCheck = (start_at, expired_at, current_time) => {
    if (start_at && expired_at) {
        const startTime = new Date(start_at);
        const expiryTime = new Date(expired_at);
        if (!current_time) {
            return "DRAFT";
        }
        const currentTime = new Date(current_time);
        if (expiryTime > currentTime && currentTime > startTime) {
            return "LIVE";
        }
        else if (currentTime < startTime) {
            return "UPCOMING";
        }
        else if (currentTime > expiryTime) {
            return "COMPLETED";
        }
        else {
            return "DRAFT";
        }
    }
    else {
        return "DRAFT";
    }
};
exports.testTypeCheck = testTypeCheck;
const convertTimeToUTC = (timeString) => {
    if (timeString) {
        // Split by ":" and handle cases where seconds might be missing
        const timeParts = timeString.split(":");
        // If seconds are missing, assume 0 seconds
        if (timeParts.length === 2) {
            timeParts.push("00"); // Add "00" for seconds if missing
        }
        const [hours, minutes, seconds] = timeParts.map(Number);
        // Validate input
        if (hours === undefined ||
            minutes === undefined ||
            seconds === undefined ||
            hours < 0 ||
            hours >= 24 ||
            minutes < 0 ||
            minutes >= 60 ||
            seconds < 0 ||
            seconds >= 60) {
            return null; // Return null to indicate invalid time format
        }
        // Create a UTC Date object with the given time
        const utcDate = new Date(Date.UTC(1970, 0, 1, hours, minutes, seconds));
        // Convert to local time
        const localDate = new Date(utcDate.toLocaleString("en-US", {
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }));
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
exports.convertTimeToUTC = convertTimeToUTC;
function getFormattedCurrentDateInUTCFormat() {
    const currentDate = new Date();
    // Format as YYYY-MM-DD
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}
const downloadFile = (url) => {
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
exports.downloadFile = downloadFile;
const getLanguageIds = (languages) => {
    return languages === null || languages === void 0 ? void 0 : languages.map((language) => language === null || language === void 0 ? void 0 : language.id);
};
exports.getLanguageIds = getLanguageIds;
const changeCodingLanguageKeys = (array) => {
    return array.map((item) => ({
        label: item.name,
        value: item.extension,
        id: item.id,
    }));
};
exports.changeCodingLanguageKeys = changeCodingLanguageKeys;
const countPassedTestCases = (testCases) => {
    var _a;
    return (_a = testCases === null || testCases === void 0 ? void 0 : testCases.filter((testCase) => testCase === null || testCase === void 0 ? void 0 : testCase.is_correct)) === null || _a === void 0 ? void 0 : _a.length;
};
exports.countPassedTestCases = countPassedTestCases;
const dateInUTCToISO8601 = (date) => {
    if (date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero if needed
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`; //returns yyyy-MM-dd
    }
    return "";
};
exports.dateInUTCToISO8601 = dateInUTCToISO8601;
const uploadToS3 = (s3URL, fields, files) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const formData = new FormData();
        for (const [key, value] of Object.entries(fields)) {
            formData.append(key, value);
        }
        formData.append("file", files);
        const response = yield fetch(s3URL, {
            method: "POST",
            body: formData,
        });
        // if (response.ok) {
        //   return true;
        // } else {
        //   console.error(`Upload failed with status: ${response?.status}`);
        //   return false;
        // }
        return response.ok;
    }
    catch (error) {
        console.error("Error uploading to S3:", error);
        return false;
    }
});
exports.uploadToS3 = uploadToS3;
const cleanPercentage = (percentage) => {
    const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
    const isTooHigh = percentage > 100;
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};
exports.cleanPercentage = cleanPercentage;
const findCommonElements = (arr1, arr2) => {
    const ids = new Set(arr2.map((skill) => skill));
    return arr1.filter((skill) => ids.has(skill.id));
};
exports.findCommonElements = findCommonElements;
const launchConfetti = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;
    (function frame() {
        (0, canvas_confetti_1.default)({
            particleCount: 10,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.6 },
            startVelocity: 40,
        });
        (0, canvas_confetti_1.default)({
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
exports.launchConfetti = launchConfetti;
const captureImageFromWebcam = () => __awaiter(void 0, void 0, void 0, function* () {
    const stream = yield navigator.mediaDevices.getUserMedia({ video: true });
    const video = document.createElement("video");
    video.srcObject = stream;
    yield new Promise((resolve) => {
        video.onloadedmetadata = () => resolve();
    });
    video.play();
    yield new Promise((resolve) => setTimeout(resolve, 500));
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
    }
    stream.getTracks().forEach((track) => track.stop());
    return new Promise((resolve) => {
        canvas.toBlob((blob) => {
            if (blob) {
                // Convert Blob to File with filename and type
                const file = new File([blob], `capture_${Date.now()}.jpg`, {
                    type: "image/jpeg",
                });
                resolve(file);
            }
            else {
                resolve(null);
            }
        }, "image/jpeg", 1);
    });
});
exports.captureImageFromWebcam = captureImageFromWebcam;
const countNonEmptyKeys = (obj) => {
    return Object.values(obj).filter((value) => {
        if (Array.isArray(value))
            return value.length > 0; // Arrays: Check length
        if (typeof value === "string")
            return value.trim() !== ""; // Strings: Check non-empty
        return value !== null && value !== undefined && value !== 0; // Exclude null, undefined, and 0
    }).length;
};
exports.countNonEmptyKeys = countNonEmptyKeys;
const toggleIdInArray = (arr, id) => {
    return (arr === null || arr === void 0 ? void 0 : arr.includes(id)) ? arr === null || arr === void 0 ? void 0 : arr.filter((item) => item !== id) : [...arr, id];
};
exports.toggleIdInArray = toggleIdInArray;
const isNumberInArray = (arr, id) => {
    return arr === null || arr === void 0 ? void 0 : arr.includes(id);
};
exports.isNumberInArray = isNumberInArray;
const getIdsFromObjects = (arr, key) => {
    var _a;
    return (_a = arr === null || arr === void 0 ? void 0 : arr.map((item) => item[key])) === null || _a === void 0 ? void 0 : _a.filter((id) => id !== undefined);
};
exports.getIdsFromObjects = getIdsFromObjects;
exports.currencySymbols = {
    INR: "&#8377;",
    USD: "&#36;",
    EUR: "&#8364;",
    AED: "&#x62f;&#x2e;&#x625;",
};
const formatDateShort = (utcDateString) => {
    const date = new Date(utcDateString);
    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    });
    //input - UTC time format 2024-09-09T00:00:00Z
    //output - Sep 09, 2024
};
exports.formatDateShort = formatDateShort;
const calculatePrice = (originalPrice, discountPercentage) => {
    if (!discountPercentage ||
        discountPercentage <= 0 ||
        discountPercentage > 100) {
        return originalPrice;
    }
    const discountAmount = (originalPrice * discountPercentage) / 100;
    return parseFloat((originalPrice - discountAmount).toFixed(2));
};
exports.calculatePrice = calculatePrice;
function synthesizeSpeech() {
    return __awaiter(this, arguments, void 0, function* (text = "", interviewer) {
        if (!Config_1.AZURE_SPEECH_KEY || !Config_1.AZURE_SPEECH_REGION) {
            throw new Error("Azure Speech Service subscription key and region are required.");
        }
        let isSynthesizing = false;
        // Check if another synthesis is ongoing
        if (isSynthesizing) {
            console.warn("Speech synthesis already in progress. Skipping...");
            return null; // Avoid starting a new synthesis
        }
        isSynthesizing = true; // Acquire lock
        const speechConfig = sdk.SpeechConfig.fromSubscription(Config_1.AZURE_SPEECH_KEY, Config_1.AZURE_SPEECH_REGION);
        speechConfig.speechSynthesisVoiceName = `${interviewer === "Hridesh" ? `en-IN-RehaanNeural` : `en-IN-NeerjaNeural`}`;
        const audioOutputStream = sdk.AudioOutputStream.createPullStream();
        const audioConfig = sdk.AudioConfig.fromStreamOutput(audioOutputStream);
        const speechSynthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
        const visemes = [];
        speechSynthesizer.visemeReceived = function (s, e) {
            visemes.push([e.audioOffset / 10000, e.visemeId]);
        };
        try {
            const audioStream = yield new Promise((resolve, reject) => {
                speechSynthesizer.speakTextAsync(text, (result) => {
                    if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
                        // const { audioData } = result;
                        const audioData = result.audioData;
                        speechSynthesizer.close();
                        const blob = new Blob([audioData], { type: "audio/wav" });
                        resolve(blob);
                    }
                }, (error) => {
                    console.error("Synthesis error:", error);
                    speechSynthesizer.close();
                    reject(error);
                });
            });
            return { audioStream, visemes };
        }
        catch (error) {
            console.error("Error during synthesis:", error);
            throw error;
        }
        finally {
            isSynthesizing = false; // Release lock
        }
    });
}
const renderStars = (rating) => {
    const totalStars = 5;
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
        // If the current star index is less than or equal to the integer part of the rating, it's fully filled
        if (i <= Math.floor(rating)) {
            stars.push(<svg xmlns="http://www.w3.org/2000/svg" className="star-mob-view" width="33" height="33" viewBox="0 0 33 33" fill="none">
          <path d="M14.8678 3.90369C15.0176 3.64655 15.2323 3.4332 15.4903 3.28491C15.7483 3.13663 16.0407 3.05859 16.3384 3.05859C16.636 3.05859 16.9284 3.13663 17.1864 3.28491C17.4445 3.4332 17.6591 3.64655 17.809 3.90369L21.6148 10.437L29.0059 12.0383C29.2967 12.1015 29.5658 12.2397 29.7864 12.4393C30.007 12.6389 30.1715 12.8929 30.2634 13.1759C30.3553 13.4588 30.3714 13.7609 30.3101 14.0521C30.2488 14.3432 30.1123 14.6132 29.9142 14.8352L24.876 20.4738L25.6385 27.997C25.6686 28.2933 25.6205 28.5922 25.4989 28.864C25.3773 29.1358 25.1865 29.371 24.9456 29.546C24.7047 29.721 24.4221 29.8298 24.1261 29.8614C23.83 29.8931 23.5308 29.8465 23.2583 29.7263L16.3384 26.6762L9.41837 29.7263C9.14592 29.8465 8.84673 29.8931 8.55065 29.8614C8.25458 29.8298 7.97198 29.721 7.73109 29.546C7.49019 29.371 7.29943 29.1358 7.17784 28.864C7.05625 28.5922 7.00809 28.2933 7.03817 27.997L7.80071 20.4738L2.76254 14.8365C2.56405 14.6146 2.42724 14.3445 2.36577 14.0532C2.3043 13.7619 2.32033 13.4595 2.41224 13.1763C2.50416 12.8931 2.66875 12.639 2.88959 12.4393C3.11043 12.2396 3.37979 12.1013 3.67077 12.0383L11.0619 10.437L14.8678 3.90369Z" fill="#FFC700"/>
        </svg>);
        }
        // If the current star is the fractional star (e.g., 3.5), fill it proportionally
        else if (i === Math.ceil(rating)) {
            const percentageFill = (rating - Math.floor(rating)) * 100; // Calculate percentage of fill for the fractional star
            stars.push(<svg key={i} xmlns="http://www.w3.org/2000/svg" className="star-mob-view" width="33" height="33" viewBox="0 0 33 33" fill="none" stroke="gray" strokeWidth="1">
          {/* Background of the star */}
          <path d="M14.8678 3.90369C15.0176 3.64655 15.2323 3.4332 15.4903 3.28491C15.7483 3.13663 16.0407 3.05859 16.3384 3.05859C16.636 3.05859 16.9284 3.13663 17.1864 3.28491C17.4445 3.4332 17.6591 3.64655 17.809 3.90369L21.6148 10.437L29.0059 12.0383C29.2967 12.1015 29.5658 12.2397 29.7864 12.4393C30.007 12.6389 30.1715 12.8929 30.2634 13.1759C30.3553 13.4588 30.3714 13.7609 30.3101 14.0521C30.2488 14.3432 30.1123 14.6132 29.9142 14.8352L24.876 20.4738L25.6385 27.997C25.6686 28.2933 25.6205 28.5922 25.4989 28.864C25.3773 29.1358 25.1865 29.371 24.9456 29.546C24.7047 29.721 24.4221 29.8298 24.1261 29.8614C23.83 29.8931 23.5308 29.8465 23.2583 29.7263L16.3384 26.6762L9.41837 29.7263C9.14592 29.8465 8.84673 29.8931 8.55065 29.8614C8.25458 29.8298 7.97198 29.721 7.73109 29.546C7.49019 29.371 7.29943 29.1358 7.17784 28.864C7.05625 28.5922 7.00809 28.2933 7.03817 27.997L7.80071 20.4738L2.76254 14.8365C2.56405 14.6146 2.42724 14.3445 2.36577 14.0532C2.3043 13.7619 2.32033 13.4595 2.41224 13.1763C2.50416 12.8931 2.66875 12.639 2.88959 12.4393C3.11043 12.2396 3.37979 12.1013 3.67077 12.0383L11.0619 10.437L14.8678 3.90369Z" fill="white"/>

          {/* Clip the yellow fill to the percentage */}
          <clipPath id={`clip-${i}`}>
            <rect x="0" y="0" width={`${percentageFill}%`} height="100%"/>
          </clipPath>
          <path d="M14.8678 3.90369C15.0176 3.64655 15.2323 3.4332 15.4903 3.28491C15.7483 3.13663 16.0407 3.05859 16.3384 3.05859C16.636 3.05859 16.9284 3.13663 17.1864 3.28491C17.4445 3.4332 17.6591 3.64655 17.809 3.90369L21.6148 10.437L29.0059 12.0383C29.2967 12.1015 29.5658 12.2397 29.7864 12.4393C30.007 12.6389 30.1715 12.8929 30.2634 13.1759C30.3553 13.4588 30.3714 13.7609 30.3101 14.0521C30.2488 14.3432 30.1123 14.6132 29.9142 14.8352L24.876 20.4738L25.6385 27.997C25.6686 28.2933 25.6205 28.5922 25.4989 28.864C25.3773 29.1358 25.1865 29.371 24.9456 29.546C24.7047 29.721 24.4221 29.8298 24.1261 29.8614C23.83 29.8931 23.5308 29.8465 23.2583 29.7263L16.3384 26.6762L9.41837 29.7263C9.14592 29.8465 8.84673 29.8931 8.55065 29.8614C8.25458 29.8298 7.97198 29.721 7.73109 29.546C7.49019 29.371 7.29943 29.1358 7.17784 28.864C7.05625 28.5922 7.00809 28.2933 7.03817 27.997L7.80071 20.4738L2.76254 14.8365C2.56405 14.6146 2.42724 14.3445 2.36577 14.0532C2.3043 13.7619 2.32033 13.4595 2.41224 13.1763C2.50416 12.8931 2.66875 12.639 2.88959 12.4393C3.11043 12.2396 3.37979 12.1013 3.67077 12.0383L11.0619 10.437L14.8678 3.90369Z" fill="#FFC700" clipPath={`url(#clip-${i})`}/>
        </svg>);
        }
        // Otherwise, leave the star empty
        else {
            stars.push(<svg key={i} xmlns="http://www.w3.org/2000/svg" className="star-mob-view" width="33" height="33" viewBox="0 0 33 33" fill="none" stroke="gray" strokeWidth="1">
          <path d="M14.8678 3.90369C15.0176 3.64655 15.2323 3.4332 15.4903 3.28491C15.7483 3.13663 16.0407 3.05859 16.3384 3.05859C16.636 3.05859 16.9284 3.13663 17.1864 3.28491C17.4445 3.4332 17.6591 3.64655 17.809 3.90369L21.6148 10.437L29.0059 12.0383C29.2967 12.1015 29.5658 12.2397 29.7864 12.4393C30.007 12.6389 30.1715 12.8929 30.2634 13.1759C30.3553 13.4588 30.3714 13.7609 30.3101 14.0521C30.2488 14.3432 30.1123 14.6132 29.9142 14.8352L24.876 20.4738L25.6385 27.997C25.6686 28.2933 25.6205 28.5922 25.4989 28.864C25.3773 29.1358 25.1865 29.371 24.9456 29.546C24.7047 29.721 24.4221 29.8298 24.1261 29.8614C23.83 29.8931 23.5308 29.8465 23.2583 29.7263L16.3384 26.6762L9.41837 29.7263C9.14592 29.8465 8.84673 29.8931 8.55065 29.8614C8.25458 29.8298 7.97198 29.721 7.73109 29.546C7.49019 29.371 7.29943 29.1358 7.17784 28.864C7.05625 28.5922 7.00809 28.2933 7.03817 27.997L7.80071 20.4738L2.76254 14.8365C2.56405 14.6146 2.42724 14.3445 2.36577 14.0532C2.3043 13.7619 2.32033 13.4595 2.41224 13.1763C2.50416 12.8931 2.66875 12.639 2.88959 12.4393C3.11043 12.2396 3.37979 12.1013 3.67077 12.0383L11.0619 10.437L14.8678 3.90369Z" fill="white"/>
        </svg>);
        }
    }
    return stars;
};
exports.renderStars = renderStars;
const daysPassed = (dateString) => {
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
exports.daysPassed = daysPassed;
const getAppliedFiltersCount = (filters, initial) => {
    const applied = {};
    Object.entries(filters).forEach(([key, value]) => {
        if (key === "sort_by" || key === "page_view")
            return;
        const defaultValue = initial[key];
        const isArray = Array.isArray(value);
        const isMeaningfulArray = isArray && value.length > 0;
        const isEmptyString = typeof value === "string" && value.trim() === "";
        const isDefaultValue = value === defaultValue;
        if ((key === "gender" && value === "all") ||
            (key === "jobs_posted_by" && value === "all"))
            return;
        if (isArray) {
            if (isMeaningfulArray) {
                applied[key] = value;
            }
        }
        else if (!isEmptyString && !isDefaultValue) {
            applied[key] = value;
        }
    });
    return applied;
};
exports.getAppliedFiltersCount = getAppliedFiltersCount;
const renderStrings = (strings) => {
    return Array.isArray(strings) && strings.length > 1
        ? strings.join(", ")
        : strings[0] || "";
};
exports.renderStrings = renderStrings;
const groupMessagesByDate = (content) => {
    const grouped = {};
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    content.forEach((message) => {
        const msgDate = new Date(message.created_at);
        const dateKey = msgDate.toDateString();
        if (dateKey === today.toDateString()) {
            grouped["Today"] = grouped["Today"] || [];
            grouped["Today"].push(message);
        }
        else if (dateKey === yesterday.toDateString()) {
            grouped["Yesterday"] = grouped["Yesterday"] || [];
            grouped["Yesterday"].push(message);
        }
        else {
            grouped[dateKey] = grouped[dateKey] || [];
            grouped[dateKey].push(message);
        }
    });
    // Sort messages within each group by created_at
    for (const date in grouped) {
        grouped[date].sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
    }
    return grouped;
};
exports.groupMessagesByDate = groupMessagesByDate;
const getFileIconClass = (fileName) => {
    var _a;
    const ext = (_a = fileName.split(".").pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
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
exports.getFileIconClass = getFileIconClass;
const formatToMinSec = (totalSeconds) => {
    const total = Number(totalSeconds);
    if (isNaN(total) || total < 0) {
        return "00:00";
    }
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const paddedSeconds = String(seconds).padStart(2, "0");
    return `${minutes}:${paddedSeconds}`;
};
exports.formatToMinSec = formatToMinSec;
const findObjectByKey = (array, key, value) => {
    if (array === null || array === void 0 ? void 0 : array.length) {
        return array === null || array === void 0 ? void 0 : array.find((item) => (item === null || item === void 0 ? void 0 : item[key]) === value);
    }
};
exports.findObjectByKey = findObjectByKey;
const convertMinutesToHoursMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return { hours, minutes };
};
exports.convertMinutesToHoursMinutes = convertMinutesToHoursMinutes;
const convertMonthsToYearsMonths = (totalMonths) => {
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return { years, months };
};
exports.convertMonthsToYearsMonths = convertMonthsToYearsMonths;
const formatToLac = (num) => {
    const lacValue = num / 1e5;
    const formatted = lacValue.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return `${formatted} Lac`;
};
exports.formatToLac = formatToLac;
