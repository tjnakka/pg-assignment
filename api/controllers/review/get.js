module.exports = async function getReviews(req, res) {
	let reviews = []

	reviews = await Review.find({
		book: req.query.id,
	})

	res.status(200).json(reviews)
}
