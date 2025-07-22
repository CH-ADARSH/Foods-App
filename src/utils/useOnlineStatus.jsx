import { useEffect, useState } from "react";

//  CUSTOM HOOKS have there own useState and useEffect Hooks
const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=>{

        window.addEventListener("offline", () => {
            setOnlineStatus(false)
            
        });

        window.addEventListener("online", () => {
            
            setOnlineStatus(true)
        });

    },[])


    return onlineStatus;
}
 
export default useOnlineStatus;