!function(t){var e=1e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(e=5e3),t("body").hasClass("et-fb")&&(e=1e4),setTimeout(function(){if(t(".freddie_body_langauge_content .et_pb_promo ").each(function(){t('<span class="button_circle"></span>').appendTo(t(this).find(".et_pb_button_wrapper .et_pb_button")),t('<span class="button_circle hover"></span>').appendTo(t(this).find(".et_pb_button_wrapper .et_pb_button"))}),0!==t(".freddie_doing_all_right_content #circle_text .et_pb_text_inner p").length){var e=t(".freddie_doing_all_right_content #circle_text .et_pb_text_inner p").text();t(".freddie_doing_all_right_content #circle_text .et_pb_text_inner").html(e);for(var n=new SplitText(".freddie_doing_all_right_content #circle_text .et_pb_text_inner",{type:"chars",charsClass:"char char++",position:"absolute"}),i=t(".freddie_doing_all_right_content .char"),_=0;_<i.length;_++)i[_].style.display="inline",i[_].style.width="100%",i[_].style.top=0,i[_].style.left=0;var r=new TimelineLite,s=(n.chars,document.getElementById("circle_text"));TweenLite.set(".freddie_doing_all_right_content #circle_text .et_pb_text_inner",{perspective:400});var o=350/(d=i.length);for(_=1;_<=d;_++)t(".freddie_doing_all_right_content #circle_text .et_pb_text_inner .char:nth-child("+_+")").css("transform","rotate("+o*_+"deg)");r.to(s,40,{rotation:"360",repeat:-1,ease:Linear.easeNone})}if(t(".freddie_cool_cat_content .et_pb_promo ").each(function(){t('<span class="button_circle"></span>').appendTo(t(this).find(".et_pb_button_wrapper .et_pb_button")),t('<span class="button_circle hover"></span>').appendTo(t(this).find(".et_pb_button_wrapper .et_pb_button"))}),t(".freddie_fun_it_content .et_pb_blurb").each(function(){t(this).find(".et_pb_main_blurb_image").prepend('<div class="image_overlay"></div>')}),t(".freddie_fun_it_content .et_pb_blurb").hover(function(){this.tl=new TimelineLite,this.tl.to(t(this).find("img"),1.5,{scale:1.03,rotationY:5,transformOrigin:"right",ease:Linear.easeNone},0).to(t(this).find(".et_pb_main_blurb_image"),.8,{rotationY:-8,x:-3,transformOrigin:"right",ease:Circ.easeOut},0),this.tl.play()},function(){this.tl.reverse()}),t(".freddie_fun_it_content .et_pb_column_4_4 .et_pb_button_module_wrapper .et_pb_button ").each(function(){t('<span class="button_circle"></span>').appendTo(t(this)),t('<span class="button_circle hover"></span>').appendTo(t(this))}),0!==t(".freddie_fun_it_content").length){new SplitText(".freddie_fun_it_content .et_pb_blurb_container h4",{type:"words,chars",charsClass:"char char++",position:"reletive"});if(0!==t(".freddie_fun_it_content .et_pb_blurb_description p").length)new SplitText(".freddie_fun_it_content .et_pb_blurb_description p",{type:"words,chars",charsClass:"char char++",position:"reletive"})}function a(){var e=t(window).scrollTop();if(t("body").hasClass("os-host"))e=t(".os-viewport").scrollTop();var n=t(window).height();0!==t(".freddie_fun_it_content").length&&t(".freddie_fun_it_content .et_pb_blurb").each(function(){var i=t(this).offset().top,_=t(this).outerHeight();t("body").hasClass("os-host")&&(i=t(".freddie_fun_it_content").position().top);var r=i,s=i+_/2;if(parseInt(e)+parseInt(n)>=r&&e<=s){t(this).addClass("visible");var o=t(this).find("h4.et_pb_module_header .char").toArray(),a=t(this).find(".et_pb_blurb_description .char").toArray(),c=new TimelineLite,d=new TimelineLite,l=new TimelineLite,p=new TimelineLite;c.to(t(this).find(".image_overlay"),1.5,{height:0,ease:Circ.easeOut},0),d.to(t(this),1.5,{opacity:1,x:0,y:0,ease:Circ.easeOut},0),l.staggerTo(o,1,{x:0,y:0,opacity:1,ease:Circ.easeOut},.1),p.staggerTo(a,.6,{x:0,y:0,opacity:1,ease:Circ.easeOut},.1)}})}function c(){var e=t(window).scrollTop(),n=t(window).height();0!==t(".freddie_innuendo_content").length&&t(".freddie_innuendo_content").each(function(){var i=t(this).offset().top,_=t(this).css("padding-top").replace("px",""),r=(t(this).outerHeight(),parseInt(i)+parseInt(_)),s=i;parseInt(e)+parseInt(n)>=r+500&&e<=s?(t(this).find(".freddie_innuendo_content_bg_image").addClass("visible"),t("this").addClass("visible")):(t(this).find(".freddie_innuendo_content_bg_image").removeClass("visible"),t(this).removeClass("visible"))})}if(t(window).scroll(function(){a()}),0!==t(".freddie_fun_it_content").length&&setTimeout(function(){if(t("body").hasClass("os-host"))OverlayScrollbars(t("body"),{callbacks:{onScroll:function(){a()}}})},5e3),c(),t(window).scroll(function(){c()}),t("body").hasClass("os-host"))OverlayScrollbars(t("body"),{callbacks:{onScroll:function(){c()}}});if(0!==t(".freddie_innuendo_content #circle_text .et_pb_text_inner p").length){e=t(".freddie_innuendo_content #circle_text .et_pb_text_inner p").text();t(".freddie_innuendo_content #circle_text .et_pb_text_inner").html(e);for(n=new SplitText(".freddie_innuendo_content #circle_text .et_pb_text_inner",{type:"chars",charsClass:"char char++",position:"absolute"}),i=t(".freddie_innuendo_content .char"),_=0;_<i.length;_++)i[_].style.display="inline",i[_].style.width="100%",i[_].style.top=0,i[_].style.left=0;r=new TimelineLite,n.chars,s=document.getElementById("circle_text");TweenLite.set(".freddie_innuendo_content #circle_text .et_pb_text_inner",{perspective:400});for(o=350/(d=i.length),_=1;_<=d;_++)t(".freddie_innuendo_content #circle_text .et_pb_text_inner .char:nth-child("+_+")").css("transform","rotate("+o*_+"deg)");r.to(s,40,{rotation:"360",repeat:-1,ease:Linear.easeNone})}if(0!==t(".freddie_scandal_content #circle_text .et_pb_text_inner p").length){e=t(".freddie_scandal_content #circle_text .et_pb_text_inner p").text();t(".freddie_scandal_content #circle_text .et_pb_text_inner").html(e);for(n=new SplitText(".freddie_scandal_content #circle_text .et_pb_text_inner",{type:"chars",charsClass:"char char++",position:"absolute"}),i=t(".freddie_scandal_content .char"),_=0;_<i.length;_++)i[_].style.display="inline",i[_].style.width="100%",i[_].style.top=0,i[_].style.left=0;r=new TimelineLite,n.chars,s=t(".freddie_scandal_content #circle_text");TweenLite.set(".freddie_scandal_content #circle_text .et_pb_text_inner",{perspective:400});var d;for(o=350/(d=i.length),_=1;_<=d;_++)t(".freddie_scandal_content #circle_text .et_pb_text_inner .char:nth-child("+_+")").css("transform","rotate("+o*_+"deg)");r.to(s,40,{rotation:"360",repeat:-1,ease:Linear.easeNone})}if(0!==t(".freddie_tutti_frutti_content ").length){t(".freddie_tutti_frutti_content .et_pb_posts .et_pb_post ").each(function(){t(this).find(".post-meta").insertBefore(t(this).find("h2.entry-title")),t('<span class="button_circle"></span>').appendTo(t(this).find(".more-link")),t('<span class="button_circle hover"></span>').appendTo(t(this).find(".more-link"))}),t(".freddie_tutti_frutti_content .et_pb_contact_form_container form button.et_pb_contact_submit").prepend(t('<div class="left"></div><div class="center"></div><div class="right"></div>'));var l=new TimelineLite;t(".freddie_tutti_frutti_content .et_pb_contact_form_container form button.et_pb_contact_submit").hover(function(){var e=t(this).find(".left"),n=t(this).find(".center"),i=t(this).find(".right");l.to(i,.4,{width:"100%",x:"25px"},0).to(n,.4,{width:"100%"},0).to(n,.1,{scaleX:0},.5).to(e,.1,{width:"100%",x:"25px"},.5)},function(){l.clear();var e=t(this).find(".left"),n=t(this).find(".center"),i=t(this).find(".right");(new TimelineLite).to(i,.1,{width:"50px",x:"-25px"},.3).to(n,.3,{scaleX:1},0).to(n,.1,{width:"0%"},.3).to(e,.3,{width:"50px",x:"-25px"},0)}),t(".freddie_tutti_frutti_content .freddie_tutti_frutti_content_left_text .et_pb_text ul li:first-child").addClass("active_item")}function p(){var e=t(window).height(),n=t(window).scrollTop();0!==t(".freddie_tutti_frutti_content ").length&&t(".freddie_tutti_frutti_content .et_pb_row:not(.freddie_tutti_frutti_content_left_text) .et_pb_module").each(function(){var i=t(this).offset().top;if(parseInt(i)<=parseInt(n)+parseInt(e)/2){var _=t(this).attr("id");_&&t(".freddie_tutti_frutti_content .freddie_tutti_frutti_content_left_text .et_pb_text ul li").each(function(){t(this).find("a").attr("href").replace(/\#/g,"")===_&&(t(".freddie_tutti_frutti_content .freddie_tutti_frutti_content_left_text .et_pb_text ul li").removeClass("active_item"),t(this).addClass("active_item"))})}})}if(p(),t(window).scroll(function(){p()}),t("body").hasClass("os-host"))OverlayScrollbars(t("body"),{callbacks:{onScroll:function(){p()}}});setTimeout(function(){if(0!==t(".freddie_artist_case_study_content").length){t("#page-container .freddie_artist_case_study_content .et_pb_slider .et-pb-slider-arrows").prepend(t('<span class="number">01</span>'));var e=t("#page-container .freddie_artist_case_study_content .et_pb_slider .et-pb-slider-arrows a.et-pb-arrow-prev span").text();t("#page-container .freddie_artist_case_study_content .et_pb_slider .et-pb-slider-arrows a.et-pb-arrow-prev span").text(e.replace("ious","")),t(".freddie_artist_case_study_content .et-pb-slider-arrows a").on("click",function(e){e.preventDefault(),setTimeout(function(){var e=t(".freddie_artist_case_study_content .et_pb_slider .et_pb_slides .et_pb_slide.et-pb-active-slide").prevAll(".et_pb_slide").length+1;e<10&&(e="0"+e),t(".freddie_artist_case_study_content .et-pb-slider-arrows span.number").text(e)},50)}),t(".freddie_artist_case_study_content .et_pb_audio_module .mejs-playpause-button").on("click",function(){t(".freddie_artist_case_study_content .et_pb_audio_module ").removeClass("played"),t(this).hasClass("mejs-play")?t(this).closest(".mejs-inner").closest(".et_pb_audio_module_content ").parent().addClass("played"):t(this).closest(".mejs-inner").closest(".et_pb_audio_module_content ").parent().removeClass("played")}),t(".freddie_artist_case_study_content .et_pb_slider").hasClass("et_slider_auto")&&setInterval(function(){var e=t(".freddie_artist_case_study_content .et_pb_slide.et-pb-active-slide").prevAll().length+1;e<=9?t(".freddie_artist_case_study_content .et-pb-slider-arrows span.number").text("0"+e):t(".freddie_artist_case_study_content .et-pb-slider-arrows span.number").text(e)},100)}},2e3)},e)}(jQuery);