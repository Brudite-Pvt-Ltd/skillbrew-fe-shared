"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageOptions = exports.themeOptions = exports.languageOptions = exports.languageMap = void 0;
// theme
const codemirror_theme_bespin_1 = require("@uiw/codemirror-theme-bespin");
const codemirror_theme_dracula_1 = require("@uiw/codemirror-theme-dracula");
const codemirror_theme_duotone_1 = require("@uiw/codemirror-theme-duotone");
const codemirror_theme_github_1 = require("@uiw/codemirror-theme-github");
const codemirror_theme_okaidia_1 = require("@uiw/codemirror-theme-okaidia");
const codemirror_theme_vscode_1 = require("@uiw/codemirror-theme-vscode");
const codemirror_theme_xcode_1 = require("@uiw/codemirror-theme-xcode");
exports.languageMap = {
    cpp: {
        id: 54,
        defaultCode: "#include <iostream>\n" +
            "using namespace std;\n\n" +
            "int main() {\n" +
            '\tcout << "Hello World!";\n' +
            "\treturn 0;\n" +
            "}",
    },
    java: {
        id: 62,
        defaultCode: `public class Main {
      public static void main(String[] args) {
        System.out.println("Hello World!");
      }
    }`,
    },
    py: {
        id: 71,
        defaultCode: `print("Hello World!")`,
    },
    js: {
        id: 63,
        defaultCode: `console.log("Hello World!");`,
    },
    c: {
        id: 50,
        defaultCode: "#include <stdio.h>\n\n" +
            "int main() {\n" +
            '\tprintf("Hello World!\\n");\n' +
            "\treturn 0;\n" +
            "}",
    },
    go: {
        id: 60,
        defaultCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello World!")\n}`,
    },
};
exports.languageOptions = [
    { id: 1, value: "py", label: "Python" },
    { id: 2, value: "java", label: "Java" },
    { id: 3, value: "cpp", label: "C++" },
    { id: 4, value: "js", label: "JavaScript" },
    { id: 5, value: "c", label: "C" },
    { id: 6, value: "go", label: "Go" },
];
exports.themeOptions = [
    { value: codemirror_theme_github_1.githubLight, label: "Github Light" },
    { value: codemirror_theme_github_1.githubDark, label: "Github Dark" },
    { value: codemirror_theme_bespin_1.bespin, label: "Bespin" },
    { value: codemirror_theme_duotone_1.duotoneDark, label: "DuotoneDark" },
    { value: codemirror_theme_duotone_1.duotoneLight, label: "DuotoneLight" },
    { value: codemirror_theme_dracula_1.dracula, label: "Dracula" },
    { value: codemirror_theme_xcode_1.xcodeDark, label: "Xcode Dark" },
    { value: codemirror_theme_xcode_1.xcodeLight, label: "Xcode Light" },
    { value: codemirror_theme_vscode_1.vscodeDark, label: "VScode Dark" },
    { value: codemirror_theme_okaidia_1.okaidia, label: "Okaidia" },
];
exports.packageOptions = [
    { value: "cpp", label: "New" },
    { value: "js", label: "Panda" },
    { value: "java", label: "Numpy" },
    { value: "py", label: "Python" },
    { value: "c", label: "C" },
    { value: "go", label: "Go" },
];
