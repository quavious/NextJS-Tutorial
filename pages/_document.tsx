import Document, {Html, Head, Main, NextScript} from 'next/document'

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
                    <Main />
                </body>
                <NextScript />
            </Html>
        )
    } 
}