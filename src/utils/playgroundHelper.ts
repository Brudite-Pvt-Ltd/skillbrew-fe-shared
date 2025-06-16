// theme
import { bespin } from "@uiw/codemirror-theme-bespin";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { duotoneDark, duotoneLight } from "@uiw/codemirror-theme-duotone";
import { githubDark, githubLight } from "@uiw/codemirror-theme-github";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { xcodeDark, xcodeLight } from "@uiw/codemirror-theme-xcode";

export const languageMap = {
  cpp: {
    id: 54,
    defaultCode:
      "#include <iostream>\n" +
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
    defaultCode:
      "#include <stdio.h>\n\n" +
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

type Language = "cpp" | "java" | "py" | "js" | "c" | "go";
export type LanguageMap = {
  [key in Language]: {
    id: number;
    defaultCode: string;
  };
};
export type LanguageOption = {
  id:number,
  value: Language;
  label: string;
};

export const languageOptions = [
  { id: 1, value: "py", label: "Python" },
  { id: 2, value: "java", label: "Java" },
  { id: 3, value: "cpp", label: "C++" },
  { id: 4, value: "js", label: "JavaScript" },
  { id: 5, value: "c", label: "C" },
  { id: 6, value: "go", label: "Go" },
];

export const themeOptions = [
  { value: githubLight, label: "Github Light" },
  { value: githubDark, label: "Github Dark" },
  { value: bespin, label: "Bespin" },
  { value: duotoneDark, label: "DuotoneDark" },
  { value: duotoneLight, label: "DuotoneLight" },
  { value: dracula, label: "Dracula" },
  { value: xcodeDark, label: "Xcode Dark" },
  { value: xcodeLight, label: "Xcode Light" },
  { value: vscodeDark, label: "VScode Dark" },
  { value: okaidia, label: "Okaidia" },
];

export const packageOptions = [
  { value: "cpp", label: "New" },
  { value: "js", label: "Panda" },
  { value: "java", label: "Numpy" },
  { value: "py", label: "Python" },
  { value: "c", label: "C" },
  { value: "go", label: "Go" },
];
