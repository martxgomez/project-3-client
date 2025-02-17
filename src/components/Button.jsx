//STYLE
// import "./Button.css";

function Button({children}){
    //onClick={action?action:""}
    return(<>
        <button >{children}</button>
    </>)
}

export default Button;