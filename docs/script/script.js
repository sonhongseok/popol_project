$(function () {
  $('#top-bar').load('header.html');
  $('#footer').load('footer.html');
});

// 탭 메뉴
function TabBox__init() {
  $('.tab-box-1__head > .tab-box-1__item').click(function () {
    let $this = $(this);
    let thisIndex = $this.index();

    // console.log(`thisIndex : ${thisIndex}`);

    $this.siblings('.active').removeClass('active');
    $this.addClass('active');

    let $TabBox1 = $this.closest('.company__tab-box-1');
    let $TabBoxBody = $TabBox1.find('.tab-box-1__body');

    $TabBoxBody.find(' > li').removeClass('active');
    $TabBoxBody.find(' > li').eq(thisIndex).addClass('active');
  });
}

TabBox__init();

// JM 스와이퍼
function ArtistSwiperJm() {
  const swiper = new Swiper(".just-music .swiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".just-music .swiper-btn-box .swiper-button-next",
      prevEl: ".just-music .swiper-btn-box .swiper-button-prev",
    },
  });
}

// IM 스와이퍼
function ArtistSwiperIm() {
  const swiper = new Swiper(".indigo-music .swiper", {
    navigation: {
      nextEl: ".indigo-music .swiper-btn-box .swiper-button-next",
      prevEl: ".indigo-music .swiper-btn-box .swiper-button-prev",
    },
  });
}

// Wdp 스와이퍼
function ArtistSwiperWdp() {
  const swiper = new Swiper(".wedaplugg .swiper", {
    navigation: {
      nextEl: ".wedaplugg .swiper-btn-box .swiper-button-next",
      prevEl: ".wedaplugg .swiper-btn-box .swiper-button-prev",
    },
  });
}


// // Mf 스와이퍼
function ArtistSwiperMf() {
  const swiper = new Swiper(".mine-field .swiper", {
    navigation: {
      nextEl: ".mine-field .swiper-btn-box .swiper-button-next",
      prevEl: ".mine-field .swiper-btn-box .swiper-button-prev",
    },
  });
}

// sb 스와이퍼
function ArtistSwiperSb() {
  const swiper = new Swiper(".sugar-beats .swiper", {
    navigation: {
      nextEl: ".sugar-beats .swiper-btn-box .swiper-button-next",
      prevEl: ".sugar-beats .swiper-btn-box .swiper-button-prev",
    },
  });
}

ArtistSwiperJm();
ArtistSwiperIm();
ArtistSwiperWdp();
ArtistSwiperMf();
ArtistSwiperSb();

const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});