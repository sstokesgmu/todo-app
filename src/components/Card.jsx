import react, {useId} from "react"
import "./styles/Card.css"

export default function Card ({data}) {
    const inputId = useId()
    return (
        <section className="card-sidebar-light">
            <div>
                <h2>Title</h2>
                <p>This is the todo for monday 1/20/2025</p>
                <label htmlFor={inputId}>Completed</label>
                <input id={inputId} type="checkbox"></input>
            </div>
        </section>
    );
}

function CreateContent(){}