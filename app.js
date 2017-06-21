//------------------------------------
// DOCUMENT ready
//------------------------------------

jQuery(document).ready(function() {
  $('.js-like').on('click', function(event){
    event.preventDefault();
    $(this).text("Liked").closest('.news-item').addClass('is-liked');
  });
  $('.story-link').on('click', function(event) {
    $(this).closest('.subheader').find('.js-form').slideToggle();
  });
});
