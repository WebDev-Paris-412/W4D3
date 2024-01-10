import React, { useState } from "react"
import OneTravel from "./../OneTravel/OneTravel"
import Actions from "../Actions/Actions"
import AddPlanForm from "../AddPlanForm/AddPlanForm"
import JSONTravelList from "./../../assets/travel-plans.json"
import "./TravelList.css"

function TravelList() {
	const [travelPlans, setTravelPlans] = useState(JSONTravelList)
	const [showForm, setShowForm] = useState(false)
	const boundary = {
		low: 350,
		high: 1500,
	}

	function handleDelete(id) {
		const remainingTravels = travelPlans.filter((plan) => {
			return plan.id !== id
		})
		setTravelPlans(remainingTravels)
	}

	function addToTravels(plan) {
		setTravelPlans([plan, ...travelPlans])
	}

	function sortByPrice(direction) {
		const copy = structuredClone(travelPlans)
		copy.sort((planA, planB) => {
			if (direction === "ascending") {
				return planA.totalCost - planB.totalCost
			}
			return planB.totalCost - planA.totalCost
		})
		setTravelPlans(copy)
	}

	// function sortByPriceAscending() {
	// 	const copy = structuredClone(travelPlans)
	// 	copy.sort((planA, planB) => planA.totalCost - planB.totalCost)
	// 	setTravelPlans(copy)
	// }
	// function sortByPriceDescending() {
	// 	const copy = structuredClone(travelPlans)
	// 	copy.sort((planA, planB) => planB.totalCost - planA.totalCost)
	// 	setTravelPlans(copy)
	// }

	return (
		<div className="TravelList">
			<Actions
				sortByPrice={sortByPrice}
				setShowForm={setShowForm}
				// sortByPriceAscending={sortByPriceAscending}
				// sortByPriceDescending={sortByPriceDescending}
			/>

			{showForm && (
				<AddPlanForm addToTravels={addToTravels} setShowForm={setShowForm} />
			)}

			{travelPlans.map((plan) => (
				<OneTravel
					key={plan.id}
					plan={plan}
					boundary={boundary}
					handleDelete={handleDelete}
				/>
			))}
		</div>
	)
}

export default TravelList
