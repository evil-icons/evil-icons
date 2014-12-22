$ ->
  # Retina hairlines support check

  if window.devicePixelRatio && devicePixelRatio >= 2
    testElem = $ "<div>",
      id: "testElem"
      css: { border: ".5px solid transparent" }

    $("body").append(testElem)
    $("html").addClass("hairlines") if testElem[0].offsetHeight == 1
    testElem.remove('#testElem')


  # ie
  if navigator.userAgent.indexOf('MSIE') != -1 || navigator.appVersion.indexOf('Trident/') > 0
    $("body").addClass('ie')
