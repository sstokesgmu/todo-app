import react, {useState} from "react"

export default function Card ({setup, data}) {
    const [completed,setCheckBox] = useState(false);
    const {titleValue, bodyValue, id} = data;
   
    return (
        <div className="card-sidebar-light" onClick={(e)=> {
            console.log(e.ta)
            if (e.target === e.currentTarget)
                setup.selectCallback({titleValue, bodyValue, id});
        }}>
             <h2>{titleValue}</h2>
                <p>{bodyValue}</p>
                <label>
                    Completed
                    <input type="checkbox" checked={completed} onChange={(e) => {
                        e.stopPropagation()
                        setCheckBox(!completed);
                    }}/>
                </label>
                <button onClick={(e) => {
                    if(completed)
                    {
                        e.stopPropagation()
                        setup.deleteCallback(id);
                    }
                    else {
                        alert("You can only delete if the task is completed")
                    }
                }}>Delete</button>
        </div>
    );
}

function DeleteToDo(completed){
    if(completed === true)
        console.log("Deleting");
    else
        console.log("Cannot Delete")
}

