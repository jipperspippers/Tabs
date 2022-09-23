import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'
import express from 'express'
import http from 'http'


import dotenv from "dotenv"
import typeDefs from "./typeDefs"
import resolvers from "./resolvers"


dotenv.config()

async function startApolloServer(){
    const app = express();
    const httpServer = http.createServer(app);

    await mongoose.connect(`${process.env.DB_URI}`)
    const server = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers
    })
    const url = `http://localhost:${process.env.PORT}`
    await server.start();
    server.applyMiddleware({ app });
    await new Promise<void>(resolve => httpServer.listen({ port: process.env.PORT }, resolve));
    console.log(`🚀 Server ready at ${url}`);
}

startApolloServer()