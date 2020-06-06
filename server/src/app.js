import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './graphql/schema';
import mongoose from 'mongoose';
import cors from 'cors';

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
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}))
app.listen(4000, () => {
    console.log('Now Listening to port 4000');
})

