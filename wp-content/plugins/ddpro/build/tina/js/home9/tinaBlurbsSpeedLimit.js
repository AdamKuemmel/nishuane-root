!function(e){var i=1e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(i=5e3),e("body").hasClass("et-fb")&&(i=1e4),setTimeout(function(){0!==e(".tina_blurbs_speed_limit ").length&&e(".tina_blurbs_speed_limit .et_pb_blurb ").each(function(){e(this).find(".et_pb_main_blurb_image").insertAfter(e(this).find(".et_pb_blurb_container"))})},i)}(jQuery);