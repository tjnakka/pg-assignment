module.exports = async function getBooks(req, res) {
	let query = {},
		booksOnPage = 5

	if (req.query?.id) {
		query = {
			...query,
			id: req.query.id,
		}
	}

	if (req.query?.page) {
		query = {
			...query,
			limit: booksOnPage,
			skip: booksOnPage * (req.query.page - 1),
		}
	}

	let books = await Book.find(query).populate('reviews')
	res.status(200).json(books)
}
