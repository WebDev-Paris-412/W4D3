import React from "react"
import Label from "../Label/Label"

function OneTravel({ plan, boundary, handleDelete }) {
	return (
		<article className="OneTravel">
			<div>
				<img src={plan.image} alt={plan.destination} />
			</div>
			<div className="content">
				<h2>
					{plan.destination} ({plan.days} Days)
				</h2>
				<p>{plan.description}</p>
				<p>
					<span>Price: </span>
					{plan.totalCost}
				</p>
				<p className="label-wrapper">
					{plan.totalCost <= boundary.low && <Label>Great Deal</Label>}
					{plan.totalCost > boundary.high ? (
						<Label variation={"premium"}>Premium</Label>
					) : (
						""
					)}
					{plan.allInclusive && (
						<Label variation={"all-inclusive"}>All Inclusive</Label>
					)}
					{/* <Label>Great Deal</Label> */}
				</p>
				<button onClick={() => handleDelete(plan.id)}>Delete</button>
			</div>
		</article>
	)
}

export default OneTravel
