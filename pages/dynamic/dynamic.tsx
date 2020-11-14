import {GetStaticProps} from 'next'
import path from 'path'

// Executed on server
export const getStaticProps: GetStaticProps = async context => {

    const fs = require('fs')
    
    return {
        revalidate: 10, // Request to Server
        props: {
            myFavoriteNumber : Math.floor(Math.random() * 100),
            myText : fs.readFileSync(path.join(process.cwd(), 'public/robots.txt'), 'utf-8')
        }
    }
}

export default function DynamicPage(props){
    return (
        <>
            <h1>It is dynamic page.</h1>
            <p>{props.myFavoriteNumber}</p>
            <p>{props.myText}</p>
        </>
    )
}