import React from "react";

export default function Content({ children, type }) {
    return (
        <section className={type ? "content-row" : "content-column"}>
            {children}
        </section>
    );
}
