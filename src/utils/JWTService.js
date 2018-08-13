import jwt from 'jsonwebtoken'
import { key } from '../config/pubkey'
  

export const verifyToken = (token, cb) => {
  cb(null, 'Hi')
  jwt.verify(token, key.value, { algorithms: ['RS256'] }, (err, decoded) => {
    err ? cb(err) : cb(null, decoded)
  })
}

export const getUserInfo = (token) => {
  let decode = jwt.decode(token)

  return {
    name: (decode.pName || decode.fName) || '',
    image: decode.imageURL || '',
    email: decode.email1 || '',
  }
}