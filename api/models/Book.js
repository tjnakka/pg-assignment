/**
 * Book.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'book',
	attributes: {
		name: { type: 'string', required: true },
		description: { type: 'string' },
		author: { type: 'string', required: true },
		reviews: {
			collection: 'review',
			via: 'book',
		},
	},
}