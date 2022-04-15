module.exports = async function getBooks(req, res) {
	let books = []

	if (req.query?.id) {
		books = await Book.find({
			id: req.query.id,
		})
	} else {
		books = await Book.find()
	}

	res.status(200).json(books)
}
