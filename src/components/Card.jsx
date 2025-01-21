import react, {useState} from "react"
import "./styles/Card.css"

export default function Card ({setup, data}) {
    const [completed,setCheckBox] = useState(false);

    const handler = () => {
       setCheckBox(!completed);
       console.log("Hello");
    }

    
    return (
        <section className="card-sidebar-light" onClick={()=>setup.callback({})}>
            <div>
                <h2>Title</h2>
                <p>This is the todo for monday 1/20/2025</p>
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