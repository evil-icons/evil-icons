$(window).load ->
  fb = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=858281727538787&version=v2.0"
  tw = "//platform.twitter.com/widgets.js"

  $('<script>', src: like).appendTo('body') for like in [fb, tw]
