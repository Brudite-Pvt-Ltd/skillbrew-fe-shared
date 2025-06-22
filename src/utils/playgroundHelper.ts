// theme
import { bespin } from "@uiw/codemirror-theme-bespin";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { duotoneDark, duotoneLight } from "@uiw/codemirror-theme-duotone";
import { githubDark, githubLight } from "@uiw/codemirror-theme-github";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { xcodeDark, xcodeLight } from "@uiw/codemirror-theme-xcode";
import { cpp } from "@codemirror/lang-cpp";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { javascript } from "@codemirror/lang-javascript";
import { go } from "@codemirror/lang-go";

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
    language: cpp,
  },
  java: {
    id: 62,
    defaultCode: `public class Main {
      public static void main(String[] args) {
        System.out.println("Hello World!");
      }
    }`,
    language: java,
  },
  py: {
    id: 71,
    defaultCode: `print("Hello World!")`,
    language: python,
  },
  js: {
    id: 63,
    defaultCode: `console.log("Hello World!");`,
    language: javascript,
  },
  c: {
    id: 50,
    defaultCode:
      "#include <stdio.h>\n\n" +
      "int main() {\n" +
      '\tprintf("Hello World!\\n");\n' +
      "\treturn 0;\n" +
      "}",
    language: cpp,
  },
  go: {
    id: 60,
    defaultCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello World!")\n}`,
    language: go,
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
  id: number;
  value: Language;
  label: string;
};

export const languageOptions = [
  {
    id: 1,
    extension: "py",
    name: "Python",
    language: python,
    defaultCode: `print("Hello World!")`,
  },
  {
    id: 2,
    extension: "java",
    name: "Java",
    language: java,
    defaultCode: `public class Main {
      public static void main(String[] args) {
        System.out.println("Hello World!");
      }
    }`,
  },
  {
    id: 3,
    extension: "cpp",
    name: "C++",
    language: cpp,
    defaultCode:
      "#include <iostream>\n" +
      "using namespace std;\n\n" +
      "int main() {\n" +
      '\tcout << "Hello World!";\n' +
      "\treturn 0;\n" +
      "}",
  },
  {
    id: 4,
    extension: "js",
    name: "JavaScript",
    language: javascript,
    defaultCode: `console.log("Hello World!");`,
  },
  {
    id: 5,
    extension: "c",
    name: "C",
    language: cpp,
    defaultCode:
      "#include <stdio.h>\n\n" +
      "int main() {\n" +
      '\tprintf("Hello World!\\n");\n' +
      "\treturn 0;\n" +
      "}",
  },
  {
    id: 6,
    extension: "go",
    name: "Go",
    language: go,
    defaultCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello World!")\n}`,
  },
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
