import Document, {Html, Head, Main, NextScript} from 'next/document'
import Link from 'next/link'

export default class CustomDocument extends Document {
    render(){
        // Only Server
        console.log("Hello from _document tsx")
        return (
            <Html>
                <Head>
                    <meta property="custom" content="yolo"/>
                </Head>
                <body>
                    <Link href="/">Go to Home</Link>
                    <Main />
                </body>
                <NextScript />
            </Html>
        )
    } 
}