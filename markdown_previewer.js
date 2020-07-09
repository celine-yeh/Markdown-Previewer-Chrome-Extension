$('.toolbar-fullscreen-btn').click(function (e) {
  $('.js-md-preview-button').click()
  $('.md-preview-holder').addClass('preview-fullscreen')
  $('.md-write-holder').addClass('show')
  $('zen-backdrop div-dropzone-wrapper').addClass('fullscreen')
})