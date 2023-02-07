
//Data going from child to parent
export function Child(props){
    let data="Child Data" 
    return(
        <div>
            <h3>Child Component data from here</h3>
            <button onClick={()=>props.alert(data)}>Click Here</button>
        </div>
    )
}