import React from "react";
import {GestureResponderEvent} from "react-native"
// This would be a pixel value. On unit that we will accept
export type BorderRadiusType = {
    selector: number,
    field: number,
    box: number,
}


export type ThemeType = {
    "base-100": string;
    "base-200": string;
    "base-300": string;
    "base-content": string;

    primary: string;
   "primary-content": string;


    secondary: string;
    "secondary-content": string;

    accent: string;
    "accent-content": string;

    neutral: string;
    "neutral-content": string;

    info: string;
    "info-content": string;

    success: string;
    "success-content": string;

    warning: string;
    "warning-content": string;

    error: string;
    "error-content": string;

    borderRadius: BorderRadiusType;
    borderThickness: number,
    badgeHeight: number,
    
}



export type ButtonProps = {
        className?: string;
        // This could be any here I don't know
        text?: string;
        onPress?: (e: GestureResponderEvent) => void;
        children?: React.ReactNode
}


export type CommonProps = {
    children?: React.ReactNode;
    className?: string;
}