import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "background": "--color-dark",
        "font": "16px sans-serif"
    },
    "index": {
        "background": "--color-dark",
        "font": "16px sans-serif"
    },
    "artist-statement": {
        "background": "--color-dark",
        "font": "16px sans-serif"
    },
    "works": {
        "background": "--color-dark",
        "font": "16px sans-serif"
    },
    "about": {
        "background": "--color-dark",
        "font": "16px sans-serif"
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
