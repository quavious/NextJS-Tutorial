import {GetStaticPaths, GetStaticProps} from 'next'
import {useRouter} from 'next/router'

// Executed on server
// Only Standalone Page
export const getStaticProps: GetStaticProps = async context => {
    return {
        revalidate: 10, // Request to Server
        props: {
            myFavoriteNumber : Math.floor(Math.random() * 100),
        }
    }
}

// getStaticProps runs at build time, It does not run at runtime
// infinite times would be required in when a lot of dynamic pages are.
// defines which files staticprops run on.
// e.g localhost:3000/more/hello or /more/world
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{
            params: {name: 'hello'},
        }, {
            params: {name: "world"},
        }], // information which routes i run getStaticProps
        fallback: false,
        // when true, also run any other urls, but always run on server at runtime
        // when accessing any routes -> Next.js would add this to the paths array and
        // store it locally on the filesystem for faster rendering
        // not wait revalidate time in getStaticProps
    }
}

export default function DynamicPage(props){
    const router = useRouter()
    console.log(router.query)
    return (
        <>
            <h1>It is dynamic page.</h1>
            <p>{props.myFavoriteNumber}</p>
        </>
    )
}