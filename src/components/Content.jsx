import React from "react";
import "./styles/Content.css"; // Import the CSS file

export default function Content({ children, type }) {
    return (
        <section className={type ? "content-row" : "content-column"}>
            {children}
        </section>
    );
}
