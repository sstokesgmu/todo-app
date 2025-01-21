import react from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Card from "./Card";

export default function Editor() {
    return (
        <section className="editor" style={Style()}>
               <Header/>
                <Content type={false}>
                    <h2>Form</h2>
                </Content>
                <Content type={true}>
                    <Card/>
                    <Card/>
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
        flexGrow: "1",
        backgroundColor: "red"
    }
}