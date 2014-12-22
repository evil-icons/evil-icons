$ ->
  $("[data-block='download']").change ->
    location.href = $(@).val()
