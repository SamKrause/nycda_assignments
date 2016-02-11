$(document).ready(function(){


  $('#lightbox-link').click(function(e){
    var link_element = $(e.currentTarget);
    var imageURL = link_element.data('img');

    var image = $('#lightbox-img');
    image.attr('src', imageURL);
    imageCenter(image);

    $('#outer-box').show();
  });

  $('#outer-box').click(function(){
    $('#outer-box').hide();
  });
});

function imageCenter(image){
  image.load(function(){
    var pageHeight = $(window).height();
    var imgHeight = image.height();
    var margin_offset = (pageHeight - imgHeight) / 2;
    image.parent().css('margin-top', margin_offset);
  });
};

