import styled from "styled-components";

declare module 'styled-compontnes' {    // 테마 정의
    export interface DefaultTheme {
        textColor: string;
        bgColor: string;
        btnColor: string;
    }
}