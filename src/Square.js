const Square = ({ colorValue, hexValue, darkTxt }) => {
  return (
    <section
      className="square"
      style={({
        backgroundColor: colorValue,
        color: darkTxt ? "#000" : "#FFF"
      })}
    >
      <p>{colorValue ? colorValue : "No Color"}</p>
      <p>{hexValue ? hexValue : null}</p>


    </section>
  )
  
}
Square.defaultProps = {
colorValue: "Empty Color Value"
}

export default Square