jQuery(function(t){"use strict";!function(){t('<div class="scrollbar"> <div class="handle"> <div class="mousearea"></div> </div> </div>').insertAfter(t(".tina_slider_you_take_V2 .et_pb_portfolio "));var e=t(".tina_slider_you_take_V2 .et_pb_portfolio"),i=(e.find(".type-project"),e.parent());e.sly({horizontal:1,itemNav:"basic",smart:1,activateOn:"click",mouseDragging:1,touchDragging:1,releaseSwing:1,startAt:0,scrollBar:i.find(".scrollbar"),scrollBy:1,activatePageOn:"click",speed:5e3,elasticBounds:1,easing:"easeOutExpo",dragHandle:1,dynamicHandle:1,clickBar:1})}()}),function(t){var e=1500;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(e=5e3),t("body").hasClass("et-fb")&&(e=1e4),setTimeout(function(){if(0!==t("body .tina_slider_you_take_V2").length){t(".tina_slider_you_take_V2 .et_pb_portfolio .type-project").on("click",function(){window.location.href=t(this).find(".et_pb_module_header a").attr("href")});t(".tina_slider_you_take_V2 .et_pb_portfolio").width();var e=t(".tina_slider_you_take_V2 .et_pb_portfolio .type-project").width(),i=t(".tina_slider_you_take_V2 .et_pb_portfolio .type-project").css("margin-right");i=parseInt(i,10);var a=t(".tina_slider_you_take_V2 .et_pb_portfolio .type-project").length*(e+i);t(".tina_slider_you_take_V2 .et_pb_portfolio .type-project").outerWidth(e),t(".tina_slider_you_take_V2 .et_pb_portfolio .type-project").css("margin-right",i),t(".tina_slider_you_take_V2 .et_pb_portfolio .et_pb_ajax_pagination_container").width(a+30),t(".tina_slider_you_take_V2 .et_pb_portfolio .type-project:first-child").addClass("active_slide"),t(".tina_slider_you_take_V2 .et_pb_social_media_follow").each(function(){t(this).find("li").each(function(){var e=t(this).find("a").attr("title").replace("Follow on","");t(this).find("a .et_pb_social_media_follow_network_name").text(e)})}),t(".tina_slider_you_take_V2 .et_pb_portfolio .type-project.has-post-thumbnail > a:first-child").tilt({glare:!0,maxGlare:.5,maxTilt:8})}},e)}(jQuery);