import {library} from "@fortawesome/fontawesome-svg-core";

import {faTrash, 
    faSignOutAlt, 
    faEdit, 
    faMinusSquare, 
    faSpinner,
    faPenFancy} 
from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(
        faTrash, 
        faSignOutAlt, 
        faEdit, 
        faMinusSquare, 
        faSpinner, 
        faPenFancy)
}

export default Icons;