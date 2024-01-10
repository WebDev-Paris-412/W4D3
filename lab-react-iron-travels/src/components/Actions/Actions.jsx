import React from "react"
import "./Actions.css"

function Actions({ sortByPrice, setShowForm }) {
	return (
		<div className="Actions">
			<fieldset>
				<legend>Actions</legend>
				<button onClick={() => sortByPrice("ascending")}>
					Sort by price (Ascending)
				</button>
				<button onClick={() => sortByPrice("descending")}>
					Sort by price (Descending)
				</button>
				<button onClick={() => setShowForm((currentState) => !currentState)}>
					Add a plan
				</button>
			</fieldset>
		</div>
	)
}

export default Actions
