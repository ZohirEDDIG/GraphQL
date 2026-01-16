import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import typeDefs from './schema/typeDefs.js';
import resolvers from './schema/resolvers.js';

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = 4000;

await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log('Server ready at port', PORT);