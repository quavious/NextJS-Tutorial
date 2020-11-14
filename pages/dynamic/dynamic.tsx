import {GetServerSideProps, GetStaticProps} from 'next'
import path from 'path'

// called always on every page request. 
// would be slower
export const getServerSideProps: GetServerSideProps = async context => {
    return {
        props: {
            myFavoriteNumber: Math.random(),
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