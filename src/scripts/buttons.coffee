$ ->

  # Hover transition fix
  $(".btn")
    .on "mouseenter", -> $(@).addClass("is-hovered")
    .on "mouseout",   -> setTimeout (=> $(@).removeClass("is-hovered")), 250
