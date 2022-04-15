module.exports = async function getBooks(req, res) {
	var books = await Book.find()
	res.status(200).json(books)
}
