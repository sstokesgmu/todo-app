import react from "react"

export default function Sidebar(){
    return (
        <section className="sideBar" style={Style()}>
            <h2>SideBar</h2>
        </section>
    );
}

function Style(){
    return {
        display: "flex",
        flexDirection: "column",
        padding: "1em 1em",
        width: "300px",
        height: "auto"
    }
}