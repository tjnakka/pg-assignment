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
		description: { type: 'string', columnType: 'longtext' },
		author: { type: 'string', required: true },
		reviews: {
			collection: 'review',
			via: 'book',
		},
	},
	customToJSON: function () {
		return {
			id: this.id,
			name: this.name,
			description: this.description,
			author: this.author,
			review_count: this?.reviews.length,
		}
	},
}
