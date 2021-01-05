'use strict';


  let bouncingBall = anime({
    targets: ['.header_title','.user_button_list'],
    translateY: '3vh',
    duration: 800,
    direction: 'alternate',
    easing: 'easeInCubic',
    scaleX: {
      value: 1.1,
      duration: 150,
      delay: 400
    }
  });


  $(function () {
    let pagetop = $('#page_top');
    pagetop.hide();

//ボタンは非表示をデフォルト

    $(window).scroll(function () {
	    if ($(this).scrollTop() > 150) {
	      pagetop.fadeIn();

//TOPの位置から150pxスクロールするとボタンをフェードイン

	    } else {
	      pagetop.fadeOut();
	    }
    });
    pagetop.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 100);
        return false;
      });
  });
