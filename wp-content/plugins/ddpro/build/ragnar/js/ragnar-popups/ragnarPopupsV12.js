!function(e){var p=1e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(p=1e4),e("body").hasClass("et-fb")&&(p=1e4),setTimeout(function(){if(0!==e(".ragnar_popups_12").length){e("body:not(.et-fb) .ragnar_pop_up_12").on("click",function(p){p.preventDefault(),e("body:not(.et-fb) .ragnar_popups_12").css("display","flex").hide().fadeIn(),e("body:not(.et-fb) .ragnar_popups_12").addClass("opened_popup")}),e(".ragnar_popups_12 .et_pb_column .et_pb_button_module_wrapper .close_icon ").on("click",function(p){p.preventDefault(),e("body:not(.et-fb) .ragnar_popups_12").hide("slow"),e("body:not(.et-fb) .ragnar_popups_12").removeClass("opened_popup")});var p=e(".ragnar_popups_12 p.et_pb_newsletter_field:not(.et_pb_signup_custom_field)").length;e(".ragnar_popups_12 p.et_pb_newsletter_field:not(.et_pb_signup_custom_field)").addClass("form_field fields_count_"+p),p>1&&(e(".ragnar_popups_12 p.et_pb_newsletter_button_wrap").addClass("full_width_button"),e(".ragnar_popups_12 .et_pb_newsletter_fields").addClass("more_fields"))}},p)}(jQuery);