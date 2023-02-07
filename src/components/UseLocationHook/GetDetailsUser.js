//passing data using UseLocation hook

import{ useLocation } from "react-router-dom";
export function GetDetailsUser(){

    const location = useLocation();
    
    return(
        <div>
            {/* {location.pathname} */}
            <p>Your FirstName--------------{location.state.firstName}</p>
            <p>Your LastName--------------{location.state.firstName} </p>
        </div>
    )
}