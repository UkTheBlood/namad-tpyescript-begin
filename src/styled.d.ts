import styled from "styled-components";

declare module 'styled-compontnes' {
    export interface DefaultTheme {
        textColor: string;
        bgColor: string;
        btnColor: string;
    }
}