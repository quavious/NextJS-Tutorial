import { useRouter } from "next/router"

export default function Foods(){
    const router = useRouter()

    console.log(router.query)

    return (
        <>
            <h1>Hello Food</h1>
        </>
    )
}