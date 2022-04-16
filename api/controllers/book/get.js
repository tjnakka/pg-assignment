module.exports = async function getBooks(req, res) {
	let query = {}

	if (req.query?.id) {
		query = {
			id: req.query.id,
		}
	}

	let books = await Book.find(query).populate('reviews')
	res.status(200).json(books)
}
