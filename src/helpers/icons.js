import {library} from "@fortawesome/fontawesome-svg-core";

import {
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faMinusSquare, 
    faSpinner,
    faPenFancy,
    faIdCard,
    faPhoneSquareAlt,
    faMapMarkerAlt,} 
from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(
        faTrash, 
        faSignOutAlt, 
        faEdit, 
        faMinusSquare, 
        faSpinner, 
        faPenFancy,
        faIdCard,
        faPhoneSquareAlt,
        faMapMarkerAlt)
}

export default Icons;