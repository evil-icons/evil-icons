$ ->
  $("[data-block='download']").change ->
    location.href = $(@).val()
    $(@).prop("selectedIndex", -1)
