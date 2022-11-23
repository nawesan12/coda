import { getUserByEmail, getUserByUsername } from '@models/User';
import { email, username } from '@utils/regex';
import { comparePassword } from '@utils/unique';
import { sign } from 'jsonwebtoken'

export default async function handler(req, res) {
    const {identifier, password} = req.body

    let user = null

    if(identifier.match(email)) {
        user = await getUserByEmail(identifier)
    }   

    if(identifier.match(username)) {
        user = await getUserByUsername(identifier)
    }

    if(!user) {
        return res.status(400).json({ error: true, message: "User does not exist" })
    }

    if(!comparePassword(password, user.password)) {
        return res.status(400).json({ error: true, message: "Invalid password" })
    }

    delete user.password

    const token = sign({ user }, "narciso", { expiresIn: "2h" })

    //res.status(200).json({ status: "OK", user, token })
    res.status(200).setHeader("auth-data", token).redirect("/hifus")
}