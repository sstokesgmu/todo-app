import react,{useState, useRef} from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Card from "./Card";

import "./styles/Editor.css"

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
    
    const selectCard = (obj) => {
        console.log(obj)
        setEditingId(obj.id)
        setTitleValue(obj.titleValue);
        setBodyValue(obj.bodyValue);
    };

    const deleteCard = (id) => {
        setCards((prevCards) => 
            prevCards.filter((card) => card.id !== id))
    }

    return (
        <section className="editor">
               <Header/>
                <Content type={false}>
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
                            setup={{ clickable: true, selectCallback: selectCard,
                                deleteCallback: deleteCard }}
                            data={{ titleValue: card.titleValue, bodyValue: card.bodyValue,id:card.id}}
                        />
                    )).reverse()}
                </Content>              
                {/* <Footer/> */}
        </section>
    );
}

