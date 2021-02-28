function Clicker(props){
    return (
        <button onClick={props.clickAction}>{props.clickTitle}</button>
    )
}
export default Clicker;