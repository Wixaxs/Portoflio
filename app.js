$(document).ready(function(){
        $('.project').on('mouseover', function () {
          $(this).addClass('blur');
        });
        $('.project').on('mouseleave', function () {
          $(this).removeClass('blur');
        });
})