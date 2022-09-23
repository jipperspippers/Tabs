import { ApolloServer } from 'apollo-server-express'
import {
    ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageLocalDefault,
  } from 'apollo-server-core';
import mongoose from 'mongoose'
import express from 'express'
import http from 'http'


import dotenv from "dotenv"
import typeDefs from "./typeDefs"
import resolvers from "./resolvers"



dotenv.config()
const DB_URI = String(process.env.DB_URI)
async function connectDB(){
    await mongoose.connect(DB_URI)
    console.log("Successful DB connection")
}

connectDB()
async function startApolloServer(){
    const app = express();
    const httpServer = http.createServer(app);
    console.log(String(typeDefs))
    console.log(String(resolvers))
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context:{}
    });
    await server.start();
    server.applyMiddleware({ app });
    await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000`);
}

startApolloServer()