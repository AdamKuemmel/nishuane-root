!function(e){var i=1500;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(i=5e3),e("body").hasClass("et-fb")&&(i=1e4),setTimeout(function(){if(0!==e(".grace_merope_slider").length){var i=170;e(window).width()<=1650&&(i=50),e(".grace_merope_slider").each(function(){var s=e(this),t=e(this).find(".et_pb_slide").length,a="0";t>=10&&(a=""),e('<div class="slider_number"><span class="slider_active_number">01</span>/<span>'+a+t+"</span></div>").insertAfter(e(this).find(".et_pb_slider .et-pb-slider-arrows")),setTimeout(function(){e('<div class="slide_images"></div>').insertBefore(s.find(".et_pb_slides"));var t=1;s.find(".et_pb_slide").each(function(){e(this).attr("value","slide-"+t),e(this).find(".et_pb_slide_image").attr("value","slide-"+t).appendTo(s.find(".slide_images")),t++}),s.find(".slide_images .et_pb_slide_image:last-child").clone().removeAttr("value").insertBefore(s.find(".slide_images .et_pb_slide_image:first-child")),s.find('.slide_images .et_pb_slide_image[value="slide-1"]').clone().removeAttr("value").insertAfter(s.find(".slide_images .et_pb_slide_image:last-child")),s.find('.slide_images .et_pb_slide_image[value="slide-1"]').addClass("active_image");var a=s.find(".slide_images .et_pb_slide_image").length,_=s.find(".et_pb_column_4_4 ").width(),d=a*i;s.find(".slide_images .et_pb_slide_image").css("cssText","width: "+Math.floor(_)+"px !important;");var l=a*s.find(".slide_images .et_pb_slide_image").outerWidth();s.find(".slide_images").css("transform","translate(-"+(_+i)+"px, 0)"),l+=d,s.find(".slide_images").css({width:l+"px"}),e(".grace_merope_slider").css("opacity",1)},0)}),e(".grace_merope_slider .et_pb_slider .slide_images .et_pb_slide_image img").each(function(){e(this).attr("height","auto"),e(this).attr("sizes",""),e(this).attr("srcset",""),e(this).removeAttr("loading")}),e(".grace_merope_slider .et-pb-slider-arrows a").on("click",function(s){var t=e(this);s.preventDefault(),setTimeout(function(){var e=t.closest(".et_pb_slider").find(".et_pb_slide.et-pb-active-slide").prevAll().length+1,s="0";e>=10&&(s=""),t.closest(".et_pb_slider").find(".slider_number .slider_active_number").text(s+e);var a=t.closest(".et_pb_slider").find(".et_pb_slide.et-pb-active-slide").attr("value");t.closest(".et_pb_slider").find(".slide_images .et_pb_slide_image").removeClass("active_image"),t.closest(".et_pb_slider").find('.slide_images .et_pb_slide_image[value="'+a+'"]').addClass("active_image");var _=t.closest(".et_pb_slider").find(".slide_images .et_pb_slide_image").outerWidth()+i,d=t.closest(".et_pb_slider").find(".slide_images .et_pb_slide_image.active_image").prevAll().length*_;t.closest(".et_pb_slider").find(".slide_images").css("transform","translate(-"+d+"px, 0)")},200)}),setInterval(function(){e(".grace_merope_slider").each(function(){var s=e(this).find(".et_pb_slide.et-pb-active-slide").prevAll().length+1,t="0";s>=10&&(t=""),e(this).find(".slider_number .slider_active_number").text(t+s);var a=e(this).find(".et_pb_slide.et-pb-active-slide").attr("value");e(this).find(".slide_images .et_pb_slide_image").removeClass("active_image"),e(this).find('.slide_images .et_pb_slide_image[value="'+a+'"]').addClass("active_image");var _=e(this).find(".slide_images .et_pb_slide_image").outerWidth()+i,d=e(this).find(".slide_images .et_pb_slide_image.active_image").prevAll().length*_;e(this).find(".slide_images").css("transform","translate(-"+d+"px, 0)")}),e(".grace_merope_slider .et_pb_slider .slide_images .et_pb_slide_image img").each(function(){e(this).attr("height","auto"),e(this).attr("sizes",""),e(this).attr("srcset",""),e(this).removeAttr("loading")})},50)}},i)}(jQuery);