var md = window.markdownit()

$('.toolbar-fullscreen-btn').click(function (e) {
  $('.md-write-holder').append("<div id='markdown-previewer'></div>")

  $('#markdown-previewer').html(md.render($('#note-body').val()))
})

$('#note-body').on('input', function (e) {
  $('#markdown-previewer').html(md.render(this.value))
})

$('.zen-control-leave').click(function (e) {
  $('#markdown-previewer').remove()
})
