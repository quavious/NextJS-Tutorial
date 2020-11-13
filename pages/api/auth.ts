import {NextApiRequest, NextApiResponse} from 'next'
import jwt from 'jsonwebtoken';

export default (req: NextApiRequest, res: NextApiResponse) => {
    
    const KEY = "kjflksjfljalfdsjflasjflfjslfj"

    if(!req.body) {
        res.statusCode = 404
        res.end('error')
        return
    }
    const {username, password} = req.body;
    res.json({
        token: jwt.sign({
            username,
            admin: username === 'admin' && password === 'admin'
        }, KEY)
    })
}