module.exports = async function addReview(req, res) {
	let addReview = await Review.create({
		body: req.body['body'],
		rating: req.body['rating'],
		book: req.body['id'],
	}).fetch()

	res.status(200).json(addReview)
}
