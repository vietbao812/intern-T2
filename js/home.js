let img = document.querySelector('.activity .container .activity-right img')
let imgLinks = document.querySelectorAll('.activity .container .activity-left .activity-bottom li')

$(document).on('click', '.header-bottom ul li', function() {
  $(this).addClass('active').siblings().removeClass('active')
})

$(document).ready(function(){
  $('.header-bars').click(function() {
    $('.header-bottom').toggleClass("active");
    $('.header-bars i').toggleClass("active");
  })
})


imgLinks.forEach(link => {
  link.onclick = () => {
    let src = link.getAttribute('data-src')
    img.src = src;
  }
})

$(document).on('click', '.activity-bottom li', function() {
  $(this).addClass('active').siblings().removeClass('active')
})

$(document).ready(function() {
  $('.banner').owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      nav: false,
      navText: ['<i class="fas fa-chevron-left prev"></i>', '<i class="fas fa-chevron-right next"></i>'],
      autoplay: true,
      autoplayTimeout: 5000,
    })
});

$(document).ready(function() {
  $('.partner-bottom').owlCarousel({
      items: 5,
      loop: true,
      dots: false,
      nav: true,
      margin: 0,
      navText: ['<i class="fas fa-arrow-circle-left"></i>', '<i class="fas fa-arrow-circle-right"></i>'],
      autoplay: false,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          items:1,
          nav:true
        },
        576:{
          items:1,
          nav:true
        },
        768:{
            items:2,
            nav:true
        },
        992: {
          items:3,
          nav:true,
        },
        1200:{
            items:4,
            nav:true,
            loop:true
        },
        1500: {
          items:5,
          nav:true,
          loop:true
        }
      }
    })
});