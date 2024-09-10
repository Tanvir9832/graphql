"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const schema_1 = require("./graphql/schema/schema");
const database_1 = require("./database/database");
const dotenv_1 = __importDefault(require("dotenv"));
// import { getAllUsers } from './controller/user.controller';
dotenv_1.default.config();
// Create an Express application
const port = 3000;
(0, database_1.connectDB)(process.env.mongoURL);
const server = new server_1.ApolloServer({
    typeDefs: schema_1.schema,
    resolvers: {
        Query: {
            hello: () => "Hello world"
        },
        // course : {
        //     instructor : async(course)=>{
        //         return await getUserById(course.id!);
        //     }
        // }
    }
});
(0, standalone_1.startStandaloneServer)(server, {
    listen: {
        port
    }
}).then(() => {
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
