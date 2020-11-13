import { NextApiRequest, NextApiResponse } from "next";

export default function(req: NextApiRequest, res: NextApiResponse){
    // it should not be the react Component (api is not pages)

    console.log('Request Body : ',req.cookies, req.query)
    //res.send("Something")
    res.setHeader("x-custom-header", 'i am korean')
    res.json({
        status: res.statusCode,
        number: Math.floor(Math.random() * 10)
    })
}