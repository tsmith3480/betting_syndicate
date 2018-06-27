import jwt from 'jsonwebtoken'
import { key } from '../config/pubkey'
  

export function decodeToken(token, cb) {
  //cb(null, 'Hi')
  jwt.verify(token, key.value, { algorithms: ['RS256'] }, (err, decoded) => {
    err ? cb(err) : cb(null, decoded)
  })
}