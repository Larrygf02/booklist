import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './graphql/schema';

const app = express();
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}))
app.listen(4000, () => {
    console.log('Now Listening to port 4000');
})

