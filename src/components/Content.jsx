import react from "react"

export default function Content({children, type}) {
    return(
        <section style = {type ? createStyle(): createStyle2()}>
            {children}
        </section>
    );
}

function createStyle (){
    return {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
}


function createStyle2 (){
    return {
        backgroundColor: "pink"
    }
}