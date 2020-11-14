import { useRouter } from "next/router";

export default function Fruit(){
    const router = useRouter()

    function goToHome(){
        router.push("/")
    }

    function changeComponentHome(){
        router.replace("/")
    }

    return (
        <>
            <h1>Hello World!</h1>
            <p>Hello {router.query.name}, {router.query.subname}</p>
            <button onClick={goToHome}>Action</button>{" to Home"}
            <button onClick={changeComponentHome}>Replace</button>{" to Home"}
            {/* Component Link is better in SEO */}
        </>
    )
}

// /fruit/apple O
// /fruit/banana O
// /fruit/grapes O

// just /fruit X
// /fruit/apple/abc X more segments would not work