import { verify, decode } from 'jsonwebtoken'

export const verifyToken = (token) => {
    const decoded = verify(token, "narciso")
    return decoded
}

export const decodeToken = (token) => {
    const decoded = decode(token)
    return decoded
}