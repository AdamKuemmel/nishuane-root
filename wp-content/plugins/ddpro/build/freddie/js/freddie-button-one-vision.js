!function(e){var t=1e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(t=5e3),e("body").hasClass("et-fb")&&(t=1e4),setTimeout(function(){e(".et_pb_button_module_wrapper .et_pb_button.freddie_button_one_vision  ").each(function(){var t=e(this).text();e(this).html("<span>"+t+"</span>")}),e(".et_pb_button_module_wrapper .et_pb_button.freddie_button_one_vision  ").prepend(e('  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"> <circle cx="17" cy="17" r="15.5" class="circle__progress"/> </svg>')),TweenMax.set(".freddie_button_one_vision  .circle__progress",{drawSVG:0}),e(".et_pb_button_module_wrapper .et_pb_button.freddie_button_one_vision  ").hover(function(){this.tlCircle=new TimelineLite,this.tlCircle.fromTo(e(this).find(".circle__progress"),.5,{drawSVG:"0%"},{drawSVG:"0 100%",ease:Linear.easeNone},0).to(e(this).find("span"),.5,{rotation:360,transformOrigin:"center",ease:Linear.easeNone},0),this.tlCircle.play()},function(){this.tlCircle.reverse()})},t)}(jQuery);