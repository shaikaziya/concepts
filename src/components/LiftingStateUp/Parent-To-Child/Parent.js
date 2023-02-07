
//Data going from parent to child


import {Child} from "./Child"

export function Parent(){

    let data="Parent data" 
    return(
        <div>
            <h1>Parent to Child </h1>
            <Child name={data}></Child>


        </div>
    )

}