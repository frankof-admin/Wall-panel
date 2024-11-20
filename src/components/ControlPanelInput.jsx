import { dimensionChangeHandler } from "../utils"

export default function ControlPanelInput({ id, label, dimension, name, dimensionKey, setFunc }) {
  return (
  <div className="menu-input-wrapper">
    <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={dimension?.[dimensionKey]}
        onChange={(e) => dimensionChangeHandler(e, dimension, dimensionKey, setFunc)}
        name={name}
        type="number"
      />
  </div>
  )
}
