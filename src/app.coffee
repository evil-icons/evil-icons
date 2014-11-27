$ ->

  icons   = $('.icons .icon')
  buttons = $('.icons__btn')
  colors  = '#2980b9 #1abc9c #2ecc71 #f1c40f #e74c3c #8e44ad'.split(' ')


  # Icons size switch

  buttons.on 'click', ->
    modifier = "icon--#{$(@).data('size')}"

    $('.icon').removeClass('icon--s icon--m icon--l');
    $('.icon').addClass(modifier);

    buttons.removeClass('is-active');
    $(@).addClass('is-active');

  color = 1
  setInterval ->
    icons.css('fill', colors[color])
    color = 0 if ++color == colors.length + 1
  , 8000



  # Retina hairlines support check

  if window.devicePixelRatio && devicePixelRatio >= 2
    testElem = $ "<div>",
      role: 'testElem'
      css: { border: ".5px solid transparent" }

    $('body').append(testElem)
    $("html").addClass("hairlines") if testElem[0].offsetHeight == 1
    testElem.remove('@testElem')
