import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './graphql/schema';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { verify } from 'jsonwebtoken';
const app = express();
//allow cross-origin requests
app.use(cors())

mongoose.connect('mongodb://localhost/booklist', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log('Connected to database');
})

app.use(cookieParser())
app.use((req, _, next) => {
    const refreshToken = req.cookies['refresh-token']
    const accessToken = req.cookies['access-token']
    if (!refreshToken && !accessToken) {
        return next()
    }
    try {        
        const data = verify(accessToken, 'SECRET')
        req.userId = data.userId
        return next()
    } catch {}
    if (!refreshToken) {
        return next()
    }
    
})
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}))
app.listen(4000, () => {
    console.log('Now Listening to port 4000');
})

