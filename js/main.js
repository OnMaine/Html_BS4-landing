$(document).ready(function() {
  /* portfolio */
  $('.button[filter]').click(function() {
    if ($(this).attr('val') == 'off') {
      $('.button[filter]').attr('val', 'off').removeClass('focused');
      $(this).attr('val', 'on').addClass('focused');
      $('.filter > div').hide(300);
      $('.filter > div[filter=' + $(this).attr('filter') + ']').show(300);
      if ($(this).attr('filter') == 'all') {
        $('.button[filter]').attr('val', 'off').removeClass('focused');
        $(this).attr('val', 'on').addClass('focused');
        $('.filter > div').show(300);
      }
    }
  });

});

var btn = document.querySelectorAll('button');
for (var i = 0; i < btn.length; i++) {
  btn[i].style.outline = 'none';
}

/* drop-menu */
$('.menu-icon').click(function() {
  $('nav').slideToggle;
  $('ul.menu').css({
    'display': 'flex',
    'flex-direction': 'column'
  });
  if ($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
    $(this).html('<i class="fas fa-times"></i>');
  } else {
    $(this).html('<i class="fas fa-bars"></i>');
  }
});


//Navigation line
let marker = document.querySelector('#marker');
let item = document.querySelectorAll('nav a');

function indicator(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

item.forEach(link => {
  link.addEventListener('mouseover', (e)=>{
    indicator(e.target);
  })
});


// header text paralax
//
// let text = document.getElementById('text');
// window.addEventListener('scroll', function() {
//   let value = window.scrollY;
//   text.style.marginBottom = value * 2 + 'px' ;
// })
