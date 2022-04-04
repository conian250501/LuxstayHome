//Body
const bodyApp = document.querySelector(".js-main");

//user
const user = document.querySelector(".js-navbar__user");
const userMore = document.querySelector(".js-navbar__user-more");

//languages
const languages = document.querySelector(".languages");
const languagesMore = document.querySelector(".js-languages__more");


//modal
const modalNavBar = document.querySelector('.js-modal__navbar');
const modalOverlay = document.querySelector('.js-modal__navbar-overlay');
const modalLanguages = document.querySelector('.js-modal__navbar-languages-more');

// Open User More
function openUser() {
  userMore.classList.toggle("active");
}

//Open languages
function openLanguages() {
  languagesMore.classList.toggle("active");
}

//open languagesModal
function openLanguagesModal() {
  modalLanguages.classList.toggle('active');
}

//open modalNavbar
function openNavBar() {
  modalNavBar.classList.toggle('active');
  modalOverlay.classList.add('active')
}

//remove all từ body
bodyApp.addEventListener("click", function () {
  userMore.classList.remove("active");
  languagesMore.classList.remove("active");
});


function closeNavBar() {
  modalNavBar.classList.remove('active');
  modalOverlay.classList.remove('active');
}

// loại trừ nút user
user.addEventListener("click", function (e) {
  event.stopPropagation();
});
userMore.addEventListener("click", function (e) {
  event.stopPropagation();
});

// loại trừ nút languages
languages.addEventListener("click", function (e) {
  event.stopPropagation();
});

languagesMore.addEventListener("click", function exclude() {
  event.stopPropagation();
});

// Click counter
let minus = document.querySelectorAll('.js-minus')
let plus = document.querySelectorAll('.js-plus')
let number = document.querySelectorAll('.js-number')
let userText = document.querySelector('.user-text');

let integer = 0;
const arrayUser = [];
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener('click', function () {
    integer++;
    number[i].innerHTML = integer;
    const textUser = userText.innerHTML = `${integer} Số khách`;
    arrayUser.push(textUser);
    console.log(arrayUser);
  })
}

for (let i = 0; i < minus.length; i++) {
  minus[[i]].addEventListener('click', function () {
    if (integer === 0) return
    integer--
    number[i].innerHTML = integer;
    userText.innerHTML = `${integer} Số khách`;
  })
}






//Slick Slider
$(document).ready(function () {
  $(".slider__list").slick({
    slidesToShow: 5, // hiển thị 5 phần tử
    slidesToScroll: 1, // mỗi lần lướt 1 phần tử
    infinite: false, // chạy liên tục
    Accessibility: true, // ấn nút chuyển slide
    //custom nút prev and next
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='right-icon bx bx-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='left-icon bx bx-chevron-right'></i></button>",

    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        arrows: false

      }
    }
    ]

  });
});

// discount slider
$(document).ready(function () {
  $(".discount__body").slick({
    slidesToShow: 3, // hiển thị 5 phần tử
    slidesToScroll: 1, // mỗi lần lướt 1 phần tử
    infinite: false, // chạy liên tục
    Accessibility: true, // ấn nút chuyển slide
    //custom nút prev and next
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='right-icon bx bx-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='left-icon bx bx-chevron-right'></i></button>",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: false
        }
      }
    ]

  });
});

$(document).ready(function () {
  $(".carousel__img-list").slick({
    slidesToShow: 1, // hiển thị 5 phần tử
    slidesToScroll: 1, // mỗi lần lướt 1 phần tử
    infinite: false, // chạy liên tục
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,


    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, // hiển thị 5 phần tử
          slidesToScroll: 1, // mỗi lần lướt 1 phần tử
          infinite: false, // chạy liên tục
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // hiển thị 5 phần tử
          slidesToScroll: 1, // mỗi lần lướt 1 phần tử
          infinite: false, // chạy liên tục
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      }
    ]

  });
});