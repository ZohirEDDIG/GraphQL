const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }

    type Review {
        id: ID!
        rating: String!
        content: String!
        game: Game!
        author: Author!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }

    type Query {
        games: [Game]
        game(gameId: ID!): Game
        reviews: [Review]
        review(reviewId: ID!): Review
        authors: [Author]
        author(authorId: ID!): Author
    }
`;

export default typeDefs;