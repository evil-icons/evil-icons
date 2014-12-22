$ ->

  # Hover transition fix
  $(".btn")
    .on "mouseenter", -> $(@).addClass("is-hovered")
    .on "mouseout",   -> setTimeout (=> $(@).removeClass("is-hovered")), 250



  $("[data-block='download']").on "change", ->
    val = $(@).val()
    $(@).prop("selectedIndex", -1)
    ga("send", "event", "button", "click", val)
    setTimeout (-> location.href = val), 100



  $("[data-block='readme']").on "click", ->
    ga("send", "event", "button", "click", "readme")


  $("[data-block='em']").on "click", ->
    ga("send", "event", "button", "click", "Evil Martians")

