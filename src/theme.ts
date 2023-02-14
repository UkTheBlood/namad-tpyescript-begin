// 테마 만들기

import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {   // type은 DefaultTheme
    bgColor: "white",
    textColor: "black",
    btnColor: "tomato",
};

export const darkTheme: DefaultTheme = {    // type은 DefaultTheme
    bgColor: "black",
    textColor: "white",
    btnColor: "teal",
};