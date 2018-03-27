  // dummy data for predictive search. This will be an ajax call later.

  var currencies = [
    { value: 'Afghan afghani', data: 'AFN' },
    { value: 'Albanian lek', data: 'ALL' },
    { value: 'Algerian dinar', data: 'DZD' },
    { value: 'European euro', data: 'EUR' },
    { value: 'Angolan kwanza', data: 'AOA' },
    { value: 'East Caribbean dollar', data: 'XCD' },
    { value: 'Vietnamese dong', data: 'VND' },
    { value: 'Yemeni rial', data: 'YER' },
    { value: 'Zambian kwacha', data: 'ZMK' },
    { value: 'Zimbabwean dollar', data: 'ZWD' },
  ];

  // setup autocomplete function pulling from array
  $('.search').autocomplete({
    lookup: currencies,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });

  //Carat and Size slider
  $( function() {
    $( '#slider-range_carat' ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 150, 350 ],
      slide: function( event, ui ) {
        $('#amount-min-carat').val(ui.values[ 0 ]);
        $('#amount-max-carat').val(ui.values[ 1 ]);
      }
    });
    var min_amount_carat = $('#slider-range_carat').slider('values', 0);
    var max_amount_carat = $('#slider-range_carat').slider('values', 1);
    var min_limit_carat = $('#slider-range_carat').slider('option', 'min');
    var max_limit_carat = $('#slider-range_carat').slider('option', 'max');
    $('#amount-min-carat').val(min_amount_carat);
    $('#amount-max-carat').val(max_amount_carat);
    $('#amount-max-carat').val($('#slider-range_carat').slider('values', 1));
    
    $("#amount-min-carat").keyup(function () {
      if (this.value < min_limit_carat) {
        min_amount_carat = min_limit_carat;
      } else {
        min_amount_carat = this.value;
      }
      $('#amount-min-carat').val(min_amount_carat);
      $("#slider-range_carat").slider('values', 0, min_amount_carat);
    });

    $("#amount-max-carat").keyup(function () {
      if (this.value > max_limit_carat) {
        max_amount_carat = max_limit_carat;
      } else {
        max_amount_carat = this.value;
      }
      $('#amount-max-carat').val(max_amount_carat);
      $("#slider-range_carat").slider('values', 1, max_amount_carat);
    });


  });

  // Price Slider
  $( function() {
    $( '#slider-range_price' ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 150, 350 ],
      slide: function( event, ui ) {
        $('#amount-min-price').val(ui.values[ 0 ]);
        $('#amount-max-price').val(ui.values[ 1 ]);
      }
    });
    var min_amount_price = $('#slider-range_price').slider('values', 0);
    var max_amount_price = $('#slider-range_price').slider('values', 1);
    var min_limit_price = $('#slider-range_price').slider('option', 'min');
    var max_limit_price = $('#slider-range_price').slider('option', 'max');
    $('#amount-min-price').val(min_amount_price);
    $('#amount-max-price').val(max_amount_price);
    $('#amount-max-price').val($('#slider-range_price').slider('values', 1));
    
    $("#amount-min-price").keyup(function () {
      if (this.value < min_limit_price) {
        min_amount_price = min_limit_price;
      } else {
        min_amount_price = this.value;
      }
      $('#amount-min-price').val(min_amount_price);
      $("#slider-range_price").slider('values', 0, min_amount_price);
    });

    $("#amount-max-price").keyup(function () {
      if (this.value > max_limit_price) {
        max_amount_price = max_limit_price;
      } else {
        max_amount_price = this.value;
      }
      $('#amount-max-price').val(max_amount_price);
      $("#slider-range_price").slider('values', 1, max_amount_carat);
    });
  });

  //Slider Buttons
  $('.button.carat').click(function() {
    if (!$(this).hasClass('selected')) {
      $('.button.carat').not(this).removeClass('selected'); // remove buttonactive from the others
      $(this).toggleClass('selected'); // toggle current clicked element
    }
  });

  //Home Page slider
  $('.homepage-slider').slick({
    dots: true,
    arrows: false,
    adaptiveHeight: true
  });

  //Home Page - mobile gem grid slider
  $('.GemGrid--mobile').slick({
    dots: false,
    arrows: true
  });

  //Home Page - mobile gem grid slider
  $('.ShoppingCart--mobile__slider').slick({
    dots: false,
    arrows: true
  });

  //Recent Events slider
  $('.RecentEvents--slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  // Individual Gem page

  // Recent Events - Click replaces the large image and title
  // grab the first image and title in the slider and make it the large image
  var first_image = $('.RecentEvents--slider div:nth-child(4) img').attr('src');
  var first_title = $('.RecentEvents--slider div:nth-child(4) img').attr('data-title');
  $('.RecentEvents--gem').append('<img src="' + first_image + '" alt="" />');
  $('.RecentEvents--gem_name').append(first_title);
  
  // replace the large image with whatever gem is clicked
  var new_image;
  var new_title;
  $(".RecentEvents--slider img").click(function() {
    new_image = $(this).attr('src');
    new_title = $(this).attr('data-title');
    // replace the image
    $('.RecentEvents--gem').empty().append('<img src="' + new_image + '" alt="' + new_title + '" />');
    // replace the title
    $('.RecentEvents--gem_name').empty().append(new_title);
  });  
  
  $('.GemImages--slider').on('init reInit', function(event, slick, currentSlide, nextSlide){
    // currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.slide_count').text(i + '/' + slick.slideCount);

    $('.slick-slide').click(function(){
      // update slide number
      var new_slide = ($(this).data('slick-index') + 1);
      $('.slide_count').empty().text(new_slide + '/' + slick.slideCount);
      // place new large image
      var image_url = $(this).find('img').attr('src');
      $('.GemImages--gem').empty().append('<img src="' + image_url + '" alt="" />');
    });
  });

  //Gem Page slider
  $('.GemImages--slider').slick({
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }
    ]
  });