import colorNames from 'colornames' //translate color name to hex


const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  darkTxt,
  setDarkTxt
  }) => {
  return (
    <form
      className="form-input"
      onSubmit={(e) => {
        e.preventDefault()
    }}
    >
      <label
        htmlFor="Color Name"
      >Color :</label>
      <input
        value={colorValue}
        required
        placeholder="Add Color.."
        onChange={(e) => {
          setColorValue(e.target.value)
          setHexValue(colorNames(e.target.value))
        }}
        type="text" />
      <button
        type='checkbox'
        onClick={() => setDarkTxt(!darkTxt)}
      >Toggle txt clr</button>
    </form>
  )
}
export default Input