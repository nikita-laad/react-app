const Alert = (props) =>{
    const capitalize = (message)=>{
        const converMessageToLowerCase = message.toLowerCase();
        return  converMessageToLowerCase.charAt(0).toUpperCase() + converMessageToLowerCase.slice(1);
    }
    return(
        props.alert && <div className={`alert alert-${props.alert.type}" role="alert`}>
       {capitalize(props.alert.message)}
        </div>
    )
}
export default Alert;