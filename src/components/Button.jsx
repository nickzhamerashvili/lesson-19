

function Button({description="Click me", color="green"}) {

    return (
        <button style={{color: color, fontSize: "16px", backgroundColor: "lightgray", width: "85px", height: "35px", borderRadius: "20px"}}>
            {description}   
        </button>
    )

}

export const value = 5;

export default Button