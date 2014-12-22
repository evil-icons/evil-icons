$ ->

  icons         = $(".icons .icon")
  iconsSection  = $(".icons")
  buttons       = $(".icons__btn")


  # Icons size switch

  buttons.on "click", ->
    size = $(@).data("size")

    icons.removeClass "icon--s icon--m icon--l"
    icons.addClass    "icon--#{size}"

    iconsSection.removeClass "icons--s icons--m icons--l"
    iconsSection.addClass    "icons--#{size}"

    buttons.removeClass("is-active")
    $(@).addClass("is-active")
