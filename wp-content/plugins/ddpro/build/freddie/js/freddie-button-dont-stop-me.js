!function(e){var t=1e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(t=5e3),e("body").hasClass("et-fb")&&(t=1e4),setTimeout(function(){e(".et_pb_button_module_wrapper .et_pb_button.freddie_button_dont_stop_me ").each(function(){var t=e(this).text();e(this).html("<span>"+t+"</span>");var i=e(this).css("background-image").replace("url(","").replace(")","").replace(/\"/gi,"");e(this).css("cssText","background-image: none !important"),e(this).prepend(e('<div class="circle_and_icon"><div class="button_circle"></div><div class="button_icon"><img src="'+i+'"></div></div>'))}),e(".et_pb_button_module_wrapper .et_pb_button.freddie_button_dont_stop_me ").hover(function(){(new TimelineLite).to(e(this).find(".button_circle"),1,{scale:1.9,ease:Elastic.easeOut},0).to(e(this).find(".button_icon"),.3,{scale:1,ease:Linear.easeNone},.2).to(e(this).find("span"),1,{x:10,ease:Elastic.easeOut},0)},function(){(new TimelineLite).to(e(this).find(".button_circle"),1,{scale:.5,ease:Elastic.easeOut},.2).to(e(this).find(".button_icon"),.3,{scale:0,ease:Linear.easeNone},0).to(e(this).find("span"),1,{x:0,ease:Elastic.easeOut},.2)})},t)}(jQuery);