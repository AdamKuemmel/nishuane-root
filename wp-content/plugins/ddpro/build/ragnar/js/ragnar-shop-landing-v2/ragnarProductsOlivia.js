!function(t){var a=1e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(a=5e3),t("body").hasClass("et-fb")&&(a=1e4),setTimeout(function(){if(0!==t(".ragnar_products_olivia").length){var a=window.location.href;t("#page-container .ragnar_products_olivia .et_pb_shop li.product").each(function(){for(var i,e=t(this).attr("class").split(" "),s=0;s<e.length;s++)if(e[s].indexOf("post-")>-1){i=e[s].slice("post-".length,e[s].length);break}t('<a class="add_to_cart" href="'+a+"/?add-to-cart="+i+'"></a>').appendTo(t(this).find(".price")),t(this).find(".et_overlay").appendTo(t(this).find(".price")),t(this).hasClass("sale")&&t(this).find(".price del").insertAfter(t(this).find(".onsale"));var r=t(this).find(".et_shop_image img").attr("src"),o=t(this).find(".et_shop_image img").attr("srcset");o=(r=r.replace(/-([0-9][0-9][0-9]x[0-9][0-9])\w+/g,"")).replace(/-([0-9][0-9][0-9]x[0-9][0-9])\w+/g,""),t(this).find(".et_shop_image img").attr("src",r),t(this).find(".et_shop_image img").attr("srcset",o)}),t('<div class="product_filter"><ul><li class="active_menu_item" postClass="all">All Work</li></ul></div>').insertBefore(".ragnar_products_olivia .et_pb_shop");var i="product_cat-",e=[];t("#page-container .ragnar_products_olivia li.product").each(function(){for(var a=t(this).attr("class").split(" "),s=0;s<a.length;s++)a[s].indexOf(i)>-1&&(t(this).attr("id",a[s].slice(i.length,a[s].length)),e.push(a[s].slice(i.length,a[s].length)))}),e=function(t){for(var a={},i=0;i<t.length;i++)a[t[i]]=!0;var e=[];for(var s in a)e.push(s);return e}(e);for(var s=0;s<e.length;s++)t('<li postClass="'+e[s]+'">'+e[s]+"</li>").appendTo(t("#page-container .ragnar_products_olivia .product_filter ul"));t('#page-container .ragnar_products_olivia .product_filter li[postclass="all"]').addClass("active_menu_item"),t("#page-container .ragnar_products_olivia .product_filter li").on("click",function(){t("#page-container .ragnar_products_olivia li.type-product").css("transition-delay","0.4s"),t("#page-container .ragnar_products_olivia .product_filter li").removeClass("active_menu_item"),t(this).addClass("active_menu_item");var a=t(this).attr("postclass");if(t(".ragnar_products_olivia ul.products").addClass("filter_clicked"),t(".ragnar_products_olivia .et_pb_posts").addClass("load_posts"),"all"===a)setTimeout(function(){t("#page-container .ragnar_products_olivia li.type-product").removeClass("deactive_post"),t("#page-container .ragnar_products_olivia li.type-product").addClass("active_post");for(var a=0,i=0;i<=t("#page-container .ragnar_products_olivia li.type-product").length;i++)t("#page-container .ragnar_products_olivia li.type-product:nth-child("+i+")").css("transition-delay",a+"s"),a+=.05},500);else{var i=0;t("#page-container .ragnar_products_olivia li.type-product").each(function(){if(t(this).hasClass("product_cat-"+a)){var e=t(this);setTimeout(function(){e.removeClass("deactive_post"),e.addClass("active_post"),e.css("transition-delay",i+"s"),i+=.05},300)}else{e=t(this);setTimeout(function(){e.removeClass("active_post"),e.addClass("deactive_post")},300)}})}setTimeout(function(){t(".ragnar_products_olivia ul.products").removeClass("filter_clicked"),t(".ragnar_products_olivia .et_pb_posts").removeClass("load_posts")},700)})}},a)}(jQuery);