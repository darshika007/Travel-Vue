export default {
    name: 'Travel',
    props: {
      // msg: String
    }
  }

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".sticky-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });