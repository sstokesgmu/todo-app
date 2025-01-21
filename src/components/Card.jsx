import react, {useState} from "react"
import "./styles/Card.css"

export default function Card ({setup, data}) {
    const [completed,setCheckBox] = useState(false);
    const {titleValue, bodyValue, id} = data;

    const handler = () => {
       setCheckBox(!completed);
       console.log("Hello");
    }

    
    return (
        <section className="card-sidebar-light" onClick={()=>setup.callback({titleValue,bodyValue, id})}>
            <div>
                <h2>{titleValue}</h2>
                <p>{bodyValue}</p>
                <label>
                    Completed
                    <input type="checkbox" checked={completed} onChange={()=>handler()}/>
                </label>
                <button  onClick={()=>DeleteToDo(completed)}>Delete</button>
            </div>
        </section>
    );
}

function DeleteToDo(completed){
    if(completed === true)
        console.log("Deleting");
    else
        console.log("Cannot Delete")
}

function CreateContent(){}