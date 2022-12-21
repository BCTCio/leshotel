$(document).ready(function() {
  $.ajax({
      url: "header.html",
      dataType: "html"
  }).done(function(result) {
      $("#navigation").html(result);
      // activate nav link
        const pathName = location.pathname.split('.')[0].slice(1)
        switch (pathName) {
        case 'index':
            $('#index').addClass('active')
            break;
        case 'about':
            $('#about').addClass('active')
            break;
        case 'attractions':
            $('#attractions').addClass('active')
            break;
        case 'contact':
            $('#contact').addClass('active')
            break;
        case 'rooms':
            $('#rooms').addClass('active')
            break;
        default:
            $('#index').addClass('active')
        }
  });
  $.ajax({
    url: "footer.html",
    dataType: "html"
  }).done(function(result) {
      $("#footer").html(result);
  });
});