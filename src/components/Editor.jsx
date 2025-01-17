import react from "react";

export default function Editor() {
    return (
        <section className="editor" style={Style()}>
            <h2>Editor</h2>
        </section>
    );
}

function Style(){
    return {
        display: "flex",
        flexDirection: "column",
        padding: "1em 1em",
        flexGrow: "1",
        backgroundColor: "red"
    }
}