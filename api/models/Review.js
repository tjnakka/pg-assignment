/**
 * Review.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'review',
	attributes: {
		body: { type: 'string', required: true },
		rating: { type: 'number', required: true, isIn: [1, 2, 3, 4, 5] },
		book: {
			model: 'book',
		},
	},
	customToJSON: function () {
		return {
			id: this.id,
			name: this.body,
			rating: this.rating,
		}
	},
}
