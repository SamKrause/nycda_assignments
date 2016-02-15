$(document).ready(function(){


  $('#user-link').click(function(e){
    var link_element = $(e.currentTarget);

    $('#outer-box').show();
  });

  $('#submit').click(function(){
    var userName = $('#name-input').val();
    $('#user-name').text(userName);
    $('#outer-box').hide();
    $('#user-link').text('Click Here to Change Names!');
  });

  $('#cancel').click(function(){
    $('#outer-box').hide();
  });

});

