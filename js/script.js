// init Isotope
var $products = $('.all-products').isotope({
  // options
  originLeft: false

});
// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');
  $products.isotope({ filter: filterValue });
});




// تهيئة Isotope
var $products = $('.all-products').isotope({
  itemSelector: '.product-card',
  layoutMode: 'fitRows',
  originLeft: false
});

// تشغيل الفلترة عند الكتابة في حقل البحث
$('#searchInput').on('keyup', function () {
  filterProducts();
});

// تشغيل الفلترة عند تغيير التصنيف
$('#categoryFilter').on('change', function () {
  filterProducts();
});

// تشغيل الفلترة عند تغيير خيار العلامة التجارية أو المعالج
$('input[name="brand"]').on('change', function () {
  filterProducts();
});

// دالة الفلترة الرئيسية
function filterProducts() {
  var searchValue = $('#searchInput').val().toLowerCase();       // البحث
  var categoryValue = $('#categoryFilter').val();                // التصنيف
  var brandValue = $('input[name="brand"]:checked').val();       // العلامة التجارية أو المعالج

  $products.isotope({
    filter: function () {
      var name = $(this).data('name').toLowerCase();             // اسم المنتج
      var categoryMatch = categoryValue === "" || $(this).hasClass(categoryValue);
      var brandMatch = !brandValue || $(this).hasClass(brandValue);
      var searchMatch = name.includes(searchValue);

      return categoryMatch && brandMatch && searchMatch;
    }
  });
}




const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    // 1024: {
    //   slidesPerView: 5,
    //   spaceBetween: 50,
    // },
  }
});