function Titler(props){
    return (
        <header>
            <h1>The current count is {props.count}</h1>
            <h2>No more than {props.occupantLimit}</h2>
        </header>
    )
}
export default Titler;