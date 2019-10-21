import React from "react";
import { css as emoCSS } from "emotion";
import styled from "@emotion/styled";

const css = (...args) => ({ className: emoCSS(...args) });

const Item = styled("li")(
    {
        position: "relative",
        cursor: "pointer",
        display: "block",
        border: "none",
        height: "auto",
        textAlign: "left",
        borderTop: "none",
        lineHeight: "1em",
        color: "rgba(0,0,0,.87)",
        fontSize: "1rem",
        textTransform: "none",
        fontWeight: "400",
        boxShadow: "none",
        padding: ".8rem 1.1rem",
        whiteSpace: "normal",
        wordWrap: "normal",
        zIndex: 999
    },
    ({ isActive, isSelected }) => {
        const styles = [];
        if (isActive) {
            styles.push({
                color: "rgba(0,0,0,.95)",
                background: "rgba(0,0,0,.03)"
            });
        }
        if (isSelected) {
            styles.push({
                color: "rgba(0,0,0,.95)",
                fontWeight: "700"
            });
        }
        return styles;
    }
);
const Input = styled("input")(
    {
        width: "100%", // full width - icon width/2 - border
        fontSize: "14px",
        whiteSpace: "normal",
        minHeight: "2em",
        background: "#fff",
        display: "inline-block",
        padding: "6px 16px",
        boxShadow: "none",
        border: "solid 1px rgba(0, 48, 73, 0.2)",
        borderRadius: "16px"
    },
    ({ isOpen }) => (isOpen ? {} : null)
);

const BaseMenu = styled("ul")(
    {
        padding: 0,
        marginTop: 0,
        position: "absolute",
        backgroundColor: "white",
        width: "100%",
        maxHeight: "20rem",
        overflowY: "auto",
        overflowX: "hidden",
        outline: "0",
        transition: "opacity .1s ease",
        borderRadius: "0 0 .28571429rem .28571429rem",
        boxShadow: "0 2px 3px 0 rgba(34,36,38,.15)",
        borderColor: "rgba(0, 48, 73, 0.2)",
        borderTopWidth: "0",
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderStyle: "solid",
        zIndex: 999
    },
    ({ isOpen }) => ({
        border: isOpen ? null : "none"
    })
);

const Menu = React.forwardRef((props, ref) => <BaseMenu ref={ref} {...props} />);

const ControllerButton = styled("button")({
    backgroundColor: "transparent",
    border: "none",
    position: "absolute",
    right: 0,
    top: 0,
    cursor: "pointer",
    width: 47,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
});

function ArrowIcon({ isOpen }) {
    return (
        <svg
            viewBox="0 0 20 20"
            preserveAspectRatio="none"
            width={16}
            fill="transparent"
            stroke="#979797"
            strokeWidth="1.1px"
            transform={isOpen ? "rotate(180)" : undefined}
        >
            <path d="M1,6 L10,15 L19,6" />
        </svg>
    );
}

function XIcon() {
    return (
        <svg
            viewBox="0 0 20 20"
            preserveAspectRatio="none"
            width={12}
            fill="transparent"
            stroke="#979797"
            strokeWidth="1.1px"
        >
            <path d="M1,1 L19,19" />
            <path d="M19,1 L1,19" />
        </svg>
    );
}

const itemToString = (i) => (i ? i.name : "");

export { Menu, ControllerButton, Input, Item, ArrowIcon, XIcon, css, itemToString };
