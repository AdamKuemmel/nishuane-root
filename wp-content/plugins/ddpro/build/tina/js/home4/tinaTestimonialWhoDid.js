!function(e){var i=3e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(i=5e3),e("body").hasClass("et-fb")&&(i=1e4),setTimeout(function(){if(0!==e(".tina_who_did_testimonial").length){e(".tina_who_did_testimonial .et_pb_slider .et_pb_slide").each(function(){e(this).find("h2.et_pb_slide_title").insertBefore(e(this).find(".et_pb_button_wrapper"))});var i=1,t=e(".tina_who_did_testimonial .et_pb_slider .et_pb_slide").length;if(e('<div class="slider_number"><span class="slider_active_number">'+i+"</span><span>/</span><span>"+t+"</span></div>").insertBefore(e(".tina_who_did_testimonial .et_pb_slider .et-pb-slider-arrows")),e(".tina_who_did_testimonial .et_pb_slider .et_pb_slide:first-child").addClass("active_slide"),e(".tina_who_did_testimonial .et-pb-slider-arrows a.et-pb-arrow-next").on("click",function(i){var t=e(this);setTimeout(function(){0!==t.closest(".et_pb_slider").find(".et_pb_slide.active_slide").next().length?t.closest(".et_pb_slider").find(".et_pb_slide.active_slide").removeClass("active_slide").next(".et_pb_slide").addClass("active_slide"):(t.closest(".et_pb_slider").find(".et_pb_slide.active_slide").removeClass("active_slide"),t.closest(".et_pb_slider").find(".et_pb_slide:first-child").addClass("active_slide"))},200)}),e(".tina_who_did_testimonial .et-pb-slider-arrows a.et-pb-arrow-prev").on("click",function(i){var t=e(this);setTimeout(function(){0!==t.closest(".et_pb_slider").find(".et_pb_slide.active_slide").prev().length?t.closest(".et_pb_slider").find(".et_pb_slide.active_slide").removeClass("active_slide").prev(".et_pb_slide").addClass("active_slide"):(t.closest(".et_pb_slider").find(".et_pb_slide.active_slide").removeClass("active_slide"),t.closest(".et_pb_slider").find(".et_pb_slide:last-child").addClass("active_slide"))},200)}),e(".tina_who_did_testimonial .et-pb-slider-arrows a").on("click",function(t){t.preventDefault(),setTimeout(function(){var t=e(".tina_who_did_testimonial .et_pb_slide.active_slide").prevAll().length+i;e(".tina_who_did_testimonial .slider_number .slider_active_number").text(t)},200)}),e(".tina_who_did_testimonial .et_pb_slider .slider_number").prepend(e('  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><circle cx="17" cy="17" r="15.5" class="circle__progress"/> </svg>')),e(".tina_who_did_testimonial .et_pb_slider").hasClass("et_slider_auto")){e(this);var s,_="et_slider_speed_";function d(){(new TimelineLite).fromTo(e(".tina_who_did_testimonial .et_pb_slider .circle__progress"),70*slideTransition2/100,{drawSVG:"0%"},{drawSVG:"0 100%",ease:Linear.easeNone}),setTimeout(function(){0!==e(".tina_who_did_testimonial .et_pb_slider").find(".et_pb_slide.active_slide").next().length?e(".tina_who_did_testimonial .et_pb_slider").find(".et_pb_slide.active_slide").removeClass("active_slide").next(".et_pb_slide").addClass("active_slide"):(e(".tina_who_did_testimonial .et_pb_slider").find(".et_pb_slide.active_slide").removeClass("active_slide"),e(".tina_who_did_testimonial .et_pb_slider").find(".et_pb_slide:first-child").addClass("active_slide"));var t=e(".tina_who_did_testimonial .et_pb_slide.active_slide").prevAll().length+i;e(".tina_who_did_testimonial .slider_number .slider_active_number").text(t);(new TimelineLite).fromTo(e(".tina_who_did_testimonial .et_pb_slider .circle__progress"),30*slideTransition2/100,{drawSVG:"100%"},{drawSVG:"0 0%",ease:Linear.easeNone})},70*s/100)}e('[class^="et_slider_speed_"], [class*=" et_slider_speed_"]').each(function(){for(var i=e(this).attr("class").split(" "),t=0;t<i.length;t++)i[t].indexOf(_)>-1&&(s=i[t].slice(_.length,i[t].length))}),slideTransition2=s/1e3,TweenMax.set(".tina_who_did_testimonial .et_pb_slider .circle__progress",{drawSVG:"0%"}),(new TimelineLite).fromTo(e(".tina_who_did_testimonial .et_pb_slider .circle__progress"),70*slideTransition2/100,{drawSVG:"0%"},{drawSVG:"0 100%",ease:Linear.easeNone}),setTimeout(function(){0!==e(".tina_who_did_testimonial .et_pb_slider").find(".et_pb_slide.active_slide").next().length?e(".tina_who_did_testimonial .et_pb_slider").find(".et_pb_slide.active_slide").removeClass("active_slide").next(".et_pb_slide").addClass("active_slide"):(e(".tina_who_did_testimonial .et_pb_slider").find(".et_pb_slide.active_slide").removeClass("active_slide"),e(".tina_who_did_testimonial .et_pb_slider").find(".et_pb_slide:first-child").addClass("active_slide"));var t=e(".tina_who_did_testimonial .et_pb_slide.active_slide").prevAll().length+i;e(".tina_who_did_testimonial .slider_number .slider_active_number").text(t);(new TimelineLite).fromTo(e(".tina_who_did_testimonial .et_pb_slider .circle__progress"),30*slideTransition2/100,{drawSVG:"100%"},{drawSVG:"0 0%",ease:Linear.easeNone})},70*s/100);var l=setInterval(d,s);e(".tina_who_did_testimonial .et-pb-slider-arrows a").on("click",function(e){clearInterval(l),l=setInterval(d,s)})}else e(".tina_who_did_testimonial .et-pb-slider-arrows a").on("click",function(i){(new TimelineLite).fromTo(e(".tina_who_did_testimonial .et_pb_slider .circle__progress"),.4,{drawSVG:"100%"},{drawSVG:"0 0%",ease:Linear.easeNone}),setTimeout(function(){(new TimelineLite).fromTo(e(".tina_who_did_testimonial .et_pb_slider .circle__progress"),.4,{drawSVG:"0%"},{drawSVG:"0 100%",ease:Linear.easeNone})},400)})}},i)}(jQuery);