import {useState} from 'react'
import axios from 'axios';
import jwt from 'jsonwebtoken';

export default function login(){

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [message, setMessage] = useState<string>("Not logged in")
    const [secret, setSecret] = useState<string>('')

    const submitLoginForm = async () => {
        const res = await axios.post('/api/auth', 
            {
                username: username,
                password: password,
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(resp => resp.data)
        const token = await res['token']

        if(token) {
            const json = jwt.decode(token) as { [key:string]: string}
            setMessage('Welcome! ' + json.username + ` and you are logged in now ${json.admin ? 'an admin' : 'not an admin'}`)

            const res = await axios.post('/api/secret', 
            {
                token: token,
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            ).then(resp => resp.data)
            if(res.secretAdminCode){
                setSecret(res.secretAdminCode)
            } else {
                setSecret("Nothing Available")
            }

        } else {
            setMessage("Nope")
        }
    }

    return (
        <div>
            <h1>{message}</h1>
            <h1>Secret : {secret}</h1>
            <form action="/api/auth" method="post">
                <input type="text" value={username} name="username" onChange={e => setUsername(e.target.value)}/>
                <hr/>
                <input type="password" value={password} name="password" onChange={e => setPassword(e.target.value)}/>
                <hr/>
                <button type="button" onClick={submitLoginForm}>Submit</button>
            </form>
        </div>
    )
}