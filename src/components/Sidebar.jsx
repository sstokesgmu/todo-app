import react from "react"

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Card from "./Card";
export default function Sidebar(){
    return (
        <section className="sideBar" style={Style()}>
            <Header/>
            
            <Content>
                <Card/>
            </Content>
            
            <Footer/>
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