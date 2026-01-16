import db from '../db/db.js';

const resolvers = {
	Query: {
		games() {
            return db.games;
        },

        game(_, args) { // Accepts three arguments (parent, args, context)
            return db.games.find((g) => g.id === args.gameId);
        },

		authors() {
            return db.authors;
        },

        author(_, args) {
            return db.authors.find((a) => a.id === args.authorId);
        },

		reviews() {
            return db.reviews;
        },

        review(_, args) {
            return db.reviews.find((r) => r.id === args.reviewId);
        },
	},

    Game: {
        reviews(parent) {
            return db.reviews.filter((r) => r.gameId === parent.id);
        }
    },

    Author: {
        reviews(parent) {
            return db.reviews.filter((r) => r.authorId === parent.id);
        }
    },

    Review: {
        game(parent) {
            return db.games.find((g) => g.id === parent.gameId);
        },

        author(parent) {
            return db.authors.find((a) => a.id === parent.authorId);
        }
    },

    Mutation: {
        addGame(_, args) {
            const game = { id: JSON.stringify(db.games.length), ...args.game };

            db.games.push(game);
            return game;
        },

        updateGame(_, args) {
            db.games = db.games.map((g) => {
                if (g.id === args.gameId) {
                    g = { ...g, ...args.updates }
                }

                return g;
            })

            return db.games.find((g) => g.id === args.gameId);
        },

        deleteGame(_, args) {
            return db.games.filter((g) => g.id !== args.gameId);
        }
    }
};

export default resolvers;                            