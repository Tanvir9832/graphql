import express from 'express';
import { ApolloServer } from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import { schema } from './graphql/schema/schema';
import { connectDB } from './database/database';

import dotenv from 'dotenv';
import { getUserById } from './controller/user.controller';
// import { getAllUsers } from './controller/user.controller';

dotenv.config();


// Create an Express application
const port = 3000;


connectDB(process.env.mongoURL as string);


const server = new ApolloServer({
    typeDefs : schema,
    resolvers : {
        Query : {
            hello : ()=>"Hello world"
        }
        ,
        // course : {
        //     instructor : async(course)=>{
        //         return await getUserById(course.id!);
        //     }
        // }
    }

})

startStandaloneServer(server,{
    listen : {
        port
    }
}).then(()=>{
    console.log("server is running on port " + port);
}).catch(err => console.log(err.message + "HIIIII"));

// const app = express();

// // Set the port number for the server
// const port = 3000;

// // Define a route for the root path ('/')
// app.get('/', (req, res) => {
//   // Send a response to the client
//   res.json({
//     message : 'Hello, TypeScript + Node.js + Express! And here is the updated version'
//   });
// });

// // Start the server and listen on the specified port
// app.listen(port, () => {
//   // Log a message when the server is successfully running
//   console.log(`Servers is running on and http://localhost:${port}`);
// });