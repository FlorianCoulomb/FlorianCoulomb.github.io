$( document ).ready(function() {
      $('.cta-open').on('click', function() {
        $('.toggle-form-mobile, .formwrapmobile, .toggle-bg').addClass('active');
        $('.icon-close').addClass('open');
    });
	 $('.icon-close').on('click', function() {
        $('.toggle-form-mobile, .formwrapmobile, .toggle-bg').removeClass('active');
        $('.icon-close').removeClass('open');
    });
});