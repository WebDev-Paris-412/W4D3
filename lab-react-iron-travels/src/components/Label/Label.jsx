import "./Label.css"

function Label({ children, variation }) {
	return <span className={`Label ${variation && variation}`}>{children}</span>
}
export default Label
