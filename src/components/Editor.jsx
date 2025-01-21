import react,{useState, useRef} from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Card from "./Card";

export default function Editor() {
    const [cards, setCards] = useState([]);
    const [titleValue, setTitleValue] = useState("");
    const [bodyValue, setBodyValue] = useState("");
    const [editingId, setEditingId] = useState(null);

    let id = null;
    //State
    const createCard = ({titleValue, bodyValue}) => {
        if (editingId === null) {
            //Creating a new Card
            console.log("Creating a new card");
            setCards ((prevCards) => [
                ... prevCards,
                {
                    titleValue,
                    bodyValue,
                    id: Date.now(),
                },
            ]);
        } else {
            //Updating an existing card
            console.log("Updating existing card")
            setCards((prevCards) => 
                prevCards.map((card) => 
                    card.id === editingId ? {... card,titleValue,bodyValue} 
                    : card
                )
            );
            setEditingId(null);
        }
          
    };
    
    const handleCallback = (obj) => {
        console.log(obj)
        setEditingId(obj.id)
        setTitleValue(obj.titleValue);
        setBodyValue(obj.bodyValue);
    };

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
                            createCard({titleValue, bodyValue})
                            setTitleValue("");
                            setBodyValue("");
                        }}>Submit</button>
                    </section>
                </Content>
                <Content type={true}>
                     {cards.map((card) => (
                        <Card
                            key={card.id}
                            setup={{ clickable: true, callback: handleCallback }}
                            data={{ titleValue: card.titleValue, bodyValue: card.bodyValue,id:card.id}}
                        />
                    ))}
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