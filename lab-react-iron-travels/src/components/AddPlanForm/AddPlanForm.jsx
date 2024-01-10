import React, { useState } from "react"

function AddPlanForm({ addToTravels, setShowForm }) {
	/**
	 * We need
	 * destination
	 * image
	 * days
	 * allInclusive
	 * totalCost
	 * description
	 */
	const [destination, setDestination] = useState("")
	const [image, setImage] = useState("")
	const [days, setDays] = useState(1)
	const [allInclusive, setAllInclusive] = useState(false)
	const [totalCost, setTotalCost] = useState(1)
	const [description, setDescription] = useState("")

	const [errors, setErrors] = useState([])

	function handleSubmit(event) {
		event.preventDefault()
		setErrors([])
		const letsgo = checkInputs()
		if (!letsgo) {
			// Do something
			// setTimeout(() => {
			// 	setErrors([])
			// }, 3000)
			return
		}
		const plan = {
			id: crypto.randomUUID(),
			destination,
			image,
			days,
			allInclusive,
			totalCost,
			description,
		}
		addToTravels(plan)
		resetFields()
		setShowForm(false)
	}

	function checkInputs() {
		let valid = true
		if (typeof destination !== "string" || destination === "") {
			setErrors((current) => [...current, "Destination is required"])
			valid = false
		}
		if (typeof image !== "string" || image === "") {
			setErrors((current) => [...current, "Image is required"])

			valid = false
		}
		if (typeof days !== "number" || days <= 0) {
			setErrors((current) => [...current, "Days is required"])

			valid = false
		}
		if (typeof allInclusive !== "boolean") {
			setErrors((current) => [...current, "allInclusive is required"])

			valid = false
		}
		if (typeof totalCost !== "number" || totalCost <= 100) {
			setErrors((current) => [...current, "totalCost is required"])

			valid = false
		}
		if (typeof description !== "string" || description === "") {
			setErrors((current) => [...current, "description is required"])

			valid = false
		}
		return valid
	}

	function resetFields() {
		setDestination("")
		setImage("")
		setDays(1)
		setAllInclusive(false)
		setTotalCost(1)
		setDescription("")
	}
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="destination">Destination: </label>
				<input
					type="text"
					id="destination"
					value={destination}
					onChange={(event) => setDestination(event.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="image">Image: </label>
				<input
					type="text"
					id="image"
					value={image}
					onChange={(e) => setImage(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="days">Number of days: </label>
				<input
					type="number"
					id="days"
					min={1}
					value={days}
					onChange={(e) => setDays(e.target.valueAsNumber)}
				/>
			</div>
			<div>
				<label htmlFor="allInclusive">All inclusive: </label>
				<input
					type="checkbox"
					id="allInclusive"
					checked={allInclusive}
					onChange={(e) => setAllInclusive(e.target.checked)}
				/>
			</div>
			<div>
				<label htmlFor="totalCost">Total cost: </label>
				<input
					type="number"
					id="totalCost"
					min={1}
					placeholder="€"
					value={totalCost}
					onChange={(e) => setTotalCost(e.target.valueAsNumber)}
				/>
			</div>
			<div>
				<label htmlFor="description">Description: </label>
				<textarea
					id="description"
					cols={30}
					rows={5}
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<button>Create Plan</button>

			{errors.length > 0 && errors.map((error) => <p>{error}</p>)}
		</form>
	)
}

export default AddPlanForm
