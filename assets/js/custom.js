/* eslint-env jquery */

$('.filter a').click(function (e) {
  e.preventDefault();

  $('.filter li').removeClass('active');
  $(this).parent('li').addClass('active');

  var categoryToFilter = $(this).attr('data-filter');

  $('.project-item').each(function () {
    if ($(this).data('category') === categoryToFilter || categoryToFilter === 'all') {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});
