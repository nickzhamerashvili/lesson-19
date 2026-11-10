import "../App.css"

function Container ({children}) {

    console.log(children)
    if(children.length > 2) {
        return (
            <div>Dzaan bevri elementia, ar shemidzlia</div>
        ) 
    }

    return (
        <div className="pretty-container">
            {children}
        </div>
    )

}

export default Container