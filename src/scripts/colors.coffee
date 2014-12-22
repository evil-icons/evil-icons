$ ->
  colors        = "red yellow green emerald blue purple"
  colorsArray   = colors.split(" ")
  colorInterval = 8000
  color         = 1


  changeColor = ->
    $("body")
      .removeClass(colors)
      .addClass(colorsArray[color])
    color = 0 if ++color == colorsArray.length

  setInterval(changeColor, colorInterval)
