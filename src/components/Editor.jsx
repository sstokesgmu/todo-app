import react,{useState, forwardRef} from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Card from "./Card";

export default function Editor() {
    const [titleValue, setTitleValue] = useState("");
    const [bodyValue, setBodyValue] = useState("");
    const listSection = useRef(null);
    //State

    

    return (
        <section className="editor" style={Style()}>
               <Header/>
                <Content type={false}>
                    <h1>Create a new Todo</h1>
                    <section>
                        <input 
                            placeholder = "Enter Title" 
                            value={titleValue}
                            onChange={(e) => setTitleValue(e.target.value)}
                        />
                        <textarea 
                            placeholder="Write Todo Here" 
                            value={bodyValue}
                            onChange={(e) => setBodyValue(e.target.value)}    
                        />
                        <button onClick={() => {
                            createCard({event, titleValue, bodyValue, hello :listSection.current})
                            setTitleValue("");
                            setBodyValue("");
                        }}>Submit</button>
                    </section>
                    <section>

                    </section>
                </Content>
                <Content type={true} ref={listSection}>
                    <Card 
                        setup={{clickable:true, callback:handleCallback}}
                    />
                </Content>
                
                <Footer/>
        </section>
    );
}

function handleCallback(obj) {
    console.log("Hello from callback");
}

function createCard(event){
   console.log(event)
    
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