$ ->

  icons         = $(".icons .icon")
  iconsSection  = $(".icons")
  buttons       = $(".icons__btn")
  colors        = "red yellow green emerald blue purple"
  colorsArray   = colors.split(" ")
  colorInterval = 8000
  color         = 1


  # Hover transition fix

  $(".btn")
    .on "mouseenter", -> $(@).addClass("is-hovered")
    .on "mouseout",   -> setTimeout (=> $(@).removeClass("is-hovered")), 250


  # Icons size switch

  buttons.on "click", ->
    size = $(@).data("size")

    icons.removeClass "icon--s icon--m icon--l"
    icons.addClass    "icon--#{size}"

    iconsSection.removeClass "icons--s icons--m icons--l"
    iconsSection.addClass    "icons--#{size}"

    buttons.removeClass("is-active")
    $(@).addClass("is-active")


  # Color change

  changeColor = ->
    $("body")
      .removeClass(colors)
      .addClass(colorsArray[color])
    color = 0 if ++color == colorsArray.length

  setInterval(changeColor, colorInterval)


  # Retina hairlines support check

  if window.devicePixelRatio && devicePixelRatio >= 2
    testElem = $ "<div>",
      id: "testElem"
      css: { border: ".5px solid transparent" }

    $("body").append(testElem)
    $("html").addClass("hairlines") if testElem[0].offsetHeight == 1
    testElem.remove('#testElem')



# likes

$(window).load ->
  fb = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=858281727538787&version=v2.0"
  tw = "//platform.twitter.com/widgets.js"

  $('<script>', src: like).appendTo('body') for like in [fb, tw]







