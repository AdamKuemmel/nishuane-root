!function(e){var t=0;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(t=5e3),e("body").hasClass("et-fb")&&(t=1e4),setTimeout(function(){if(e(".freddie_hammer_to_fall_testimonals .et_pb_blurb").each(function(){e(this).find(".et_pb_main_blurb_image").prepend('<div class="image_overlay"></div>')}),0!==e(".freddie_hammer_to_fall_testimonals").length){new SplitText(".freddie_hammer_to_fall_testimonals .et_pb_blurb_container h4",{type:"words,chars",charsClass:"char char++",position:"reletive"});function t(){var t=e(window).scrollTop(),i=e(window).height();e(".freddie_hammer_to_fall_testimonals .et_pb_blurb").each(function(){var s=e(this).offset().top,r=e(this).css("padding-top").replace("px",""),a=e(this).outerHeight(),_=parseInt(s)+parseInt(r),o=s+a/2;if(parseInt(t)+parseInt(i)>=_+210&&t<=o){e(this).addClass("visible");var n=e(this).find("h4.et_pb_module_header .char").toArray(),l=new TimelineLite,p=new TimelineLite,d=new TimelineLite;new TimelineLite;l.to(e(this).find(".image_overlay"),1.5,{height:0,ease:Circ.easeOut},0),p.to(e(this),2,{opacity:1,x:0,y:0,ease:Circ.easeOut},0),d.staggerTo(n,1,{x:0,y:0,opacity:1,ease:Circ.easeOut},.03)}}),e(".freddie_hammer_to_fall_testimonals .et_pb_testimonial").each(function(){var s=e(this).offset().top,r=e(this).css("padding-top").replace("px",""),a=e(this).outerHeight(),_=parseInt(s)+parseInt(r),o=s+a/2;parseInt(t)+parseInt(i)>=_+210&&t<=o&&(e(this).addClass("visible"),(new TimelineLite).to(e(this).find(".et_pb_testimonial_portrait"),1,{opacity:1,x:0,y:0,ease:Circ.easeOut},0).to(e(this),1.5,{opacity:1,x:0,y:0,ease:Circ.easeOut},0))})}if(e(window).scroll(function(){t()}),e("body").hasClass("os-host"))OverlayScrollbars(e("body"),{callbacks:{onScroll:function(){t()}}})}0!==e(".freddie_close_to_pleasure_testimonials").length&&(e(".freddie_close_to_pleasure_testimonials .et_pb_promo ").each(function(){e('<span class="button_circle"></span>').appendTo(e(this).find(".et_pb_button_wrapper .et_pb_button")),e('<span class="button_circle hover"></span>').appendTo(e(this).find(".et_pb_button_wrapper .et_pb_button"))}),setTimeout(function(){var t=0,i=e(".freddie_close_to_pleasure_testimonials .et_pb_promo").outerHeight();e(".freddie_close_to_pleasure_testimonials .first_col .et_pb_testimonial").each(function(){t+=e(this).outerHeight()}),i>t&&e(".freddie_close_to_pleasure_testimonials .first_col .et_pb_testimonial:first-child").css("margin-bottom",i-t);var s=0;e(".freddie_close_to_pleasure_testimonials .last_col .et_pb_testimonial").each(function(){s+=e(this).outerHeight()}),i>s&&e(".freddie_close_to_pleasure_testimonials .last_col .et_pb_testimonial:first-child").css("margin-bottom",i-s)},1500)),0!==e(".freddie_frutti_testimonial").length&&setTimeout(function(){var t=e(".freddie_frutti_testimonial .et_pb_promo ").outerHeight()-4;e("#page-container .freddie_frutti_testimonial .et_pb_slider .et_pb_slide .et_pb_slide_description").css("margin-top",t+"px"),e("#page-container .freddie_frutti_testimonial .et_pb_slider .et_pb_slide ").each(function(){e(this).find("h2.et_pb_slide_title").insertAfter(e(this).find(".et_pb_slide_content"))}),e("#page-container .freddie_frutti_testimonial .et_pb_slider .et-pb-slider-arrows").prepend(e('<span class="number">01</span>'));var i=e("#page-container .freddie_frutti_testimonial .et_pb_slider .et-pb-slider-arrows a.et-pb-arrow-prev span").text();e("#page-container .freddie_frutti_testimonial .et_pb_slider .et-pb-slider-arrows a.et-pb-arrow-prev span").text(i.replace("ious","")),e(".freddie_frutti_testimonial .et-pb-slider-arrows a").on("click",function(t){t.preventDefault(),setTimeout(function(){var t=e(".freddie_frutti_testimonial .et_pb_slider .et_pb_slides .et_pb_slide.et-pb-active-slide").prevAll(".et_pb_slide").length+1;t<10&&(t="0"+t),e(".freddie_frutti_testimonial .et-pb-slider-arrows span.number").text(t)},50)}),e(".freddie_frutti_testimonial .et_pb_slider").hasClass("et_slider_auto")&&setInterval(function(){var t=e(".freddie_frutti_testimonial .et_pb_slide.et-pb-active-slide").prevAll().length+1;t<=9?e(".freddie_frutti_testimonial .et-pb-slider-arrows span.number").text("0"+t):e(".freddie_frutti_testimonial .et-pb-slider-arrows span.number").text(t)},100)},2e3)},t)}(jQuery);