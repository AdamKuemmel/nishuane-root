!function(t){var e=2e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(e=1e4),t("body").hasClass("et-fb")&&(e=1e4),setTimeout(function(){0!==t(".grace_blog_sol").length&&t(".grace_blog_sol article.et_pb_post").each(function(){var e=t(this).find("img").attr("src"),i=t(this).find("img").attr("srcset");i=(e=e.replace(/-([0-9][0-9][0-9]x[0-9][0-9])\w+/g,"")).replace(/-([0-9][0-9][0-9]x[0-9][0-9])\w+/g,""),t(this).find("img").attr("src",e),t(this).find("img").attr("srcset",i)})},e)}(jQuery);