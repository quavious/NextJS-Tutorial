import { useEffect } from "react"

export default function newpage(){
    // Only Client
    useEffect(() => {
        console.log("New Page")
    }, [])
    return <h1 className="content">This is the new page.</h1>
}