$ ->

  # Hover transition fix
  $(".btn")
    .on "mouseenter", -> $(@).addClass("is-hovered")
    .on "mouseout",   -> setTimeout (=> $(@).removeClass("is-hovered")), 250


  $("[data-block='download']").on "change", ->
    href = $(@).val()
    $(@).prop("selectedIndex", -1)

    [..., file] = href.split("/")
    ga("send", "event", "button", "click", file)

    setTimeout (-> location.href = href), 100


  $("[data-block='readme']").on "click", ->
    ga("send", "event", "button", "click", "readme")

  $("[data-block='em']").on "click", ->
    ga("send", "event", "button", "click", "Evil Martians")

  $("[data-block='avatar']").on "click", ->
    name = $(@).data("name")
    ga("send", "event", "button", "click", name)
