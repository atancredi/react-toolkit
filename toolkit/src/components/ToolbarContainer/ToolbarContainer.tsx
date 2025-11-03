"use client";

import type { CSSProperties, PropsWithChildren } from "react";
import "./ToolbarContainer.css";

export interface ToolbarLayoutProps extends PropsWithChildren {
    className?: string
}

const ToolbarLayout = ({children, className = ""}: ToolbarLayoutProps) => {

    return (
        <div className={"t-container "+className}>
            {children}
        </div>
    )
}

export interface ToolbarLayoutContainerProps extends PropsWithChildren {
    className?: string
    style?: CSSProperties
}

ToolbarLayout.Toolbar = ({children, className = "", style}: ToolbarLayoutContainerProps) => {

    return (
        <div className="t-toolbar-wrapper">
            <div className={"t-toolbar-container " + className} style={style}>
                {children}
            </div>
        </div>
    )
}

export interface ToolbarLayoutContentProps extends PropsWithChildren {
    className?: string
    style?: CSSProperties
}

ToolbarLayout.Content = ({children, className = "", style}: ToolbarLayoutContentProps) => {

    return (
        <div className="t-content-wrapper">
            <div className={"t-content-container " + className} style={style}>
                {children}
            </div>
        </div>
    )
}

export default ToolbarLayout;