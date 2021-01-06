'use strict';

//anime.min.js
  let bouncingBall = anime({
    targets: ['.header_title','.user_button_list','about_box','#about_title'],
    translateY: '3vh',
    duration: 800,
    direction: 'alternate',
    easing: 'easeInCubic',
    scaleX: {
      value: 1.1,
      duration: 500,
      delay: 400
    }
  });

//pageのtopに戻るbutton
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

//pf_messageにアニメーション付与
  var textWrapper = document.querySelector('#pf_message');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '#pf_message .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  });

