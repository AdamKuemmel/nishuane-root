!function(e){var a=1500;e("body").hasClass("et-fb")&&(a=1e4),setTimeout(function(){e(".diana_stately_blog .et_pb_post .post-meta").each(function(){var a=e(this).find("span.author")[0],n=e(this).find("span.published")[0],t=e(this).find('a[rel="category tag"]').toArray(),i=e(this).find(".published").text(),s="",l=i.replace(/\d+/g,""),b=parseInt(i);i&&(s+=(n='<span class="published"><span class="day"> '+i+"</span></span>")+('<span class="top_date"><span class="day">'+b+'</span><span class="month">'+l+"</span></span>"));a&&(i?(s=n+'<span class="line">|</span>',s+=a.outerHTML):s=a.outerHTML),0!==t.length&&(s+="<span class='categories'>"+(t=(t=e.map(t,function(e){return e.outerHTML})).join(", "))+"</span><span class='line'>/</span>"),e(this).html(s)}),e(".diana_stately_blog  .et_pb_post").each(function(){e(this).find(".post-meta").insertBefore(e(this).find("h2.entry-title")),e(this).find(".published").insertAfter(e(this).find(".entry-featured-image-url img"))}),e("#et-fb-app-frame").contents().find(".diana_stately_blog  .et_pb_post").each(function(){e("#et-fb-app-frame").contents().find(e(this)).find(".post-meta").insertBefore(e("#et-fb-app-frame").contents().find(e(this)).find("h2.entry-title")),e("#et-fb-app-frame").contents().find(e(this)).find(".published").insertAfter(e("#et-fb-app-frame").contents().find(e(this)).find(".entry-featured-image-url img"))})},a),setInterval(function(){e(".diana_stately_blog .et_pb_posts article").hasClass("done")||(e(".diana_stately_blog .et_pb_post .post-meta").each(function(){var a=e(this).find("span.author")[0],n=e(this).find("span.published")[0],t=e(this).find('a[rel="category tag"]').toArray(),i=e(this).find(".published").text(),s="",l=i.replace(/\d+/g,""),b=parseInt(i);i&&(s+=(n='<span class="published"><span class="day"> '+i+"</span></span>")+('<span class="top_date"><span class="day">'+b+'</span><span class="month">'+l+"</span></span>"));a&&(i?(s=n+'<span class="line">|</span>',s+=a.outerHTML):s=a.outerHTML),0!==t.length&&(s+="<span class='categories'>"+(t=(t=e.map(t,function(e){return e.outerHTML})).join(", "))+"</span><span class='line'>/</span>"),e(this).html(s)}),e(".diana_stately_blog .et_pb_post").each(function(){e(this).find(".post-meta").insertBefore(e(this).find("h2.entry-title")),e(this).find(".published").insertAfter(e(this).find(".entry-featured-image-url img"))}),e(".diana_stately_blog .et_pb_posts article").addClass("done"))},50),setTimeout(function(){if(e("body:not(.et-fb) .diana_baronial_blog").length>0){e('<div class="slider_outer_containe"></div>').insertBefore(e(".diana_baronial_blog .et_pb_slides")),e(".diana_baronial_blog .et_pb_slides").appendTo(e(".diana_baronial_blog .slider_outer_containe")),e(".diana_baronial_blog  .et_pb_slide .post-meta").each(function(){var a=e(this).find("span.author")[0],n=(e(this).find("span.published")[0],e(this).find(".published").text()),t="";a&&(t="By "+a.outerHTML+"/ "),n&&(t+='<span class="published"><span class="day"> '+n+"</span></span>"),e(this).html(t)});var a=1,n=1;(d=e(".diana_baronial_blog .et_pb_slide").length)<=9?d="0"+d:n="0"+n,e('<div class="slider_number"><span class="slider_active_number">'+n+'</span><span class="numers_line"><span class="numers_line_inner"></span></span><span>'+d+"</span></div>").insertBefore(e(".diana_baronial_blog .et_pb_slider .et-pb-slider-arrows"));var t=e(".diana_baronial_blog .slider_number .numers_line").width()/d;e(".diana_baronial_blog .slider_number .numers_line .numers_line_inner").width(t),e(".diana_baronial_blog  .et_pb_slide").each(function(){e(this).find(".post-meta").appendTo(e(this).find(".et_pb_slide_description .et_pb_slide_content "))}),e(".diana_baronial_blog .et_pb_slide:first-child").clone().removeClass("et-pb-active-slide").insertAfter(e(".diana_baronial_blog .et_pb_slide:last-child")),e(".diana_baronial_blog .et_pb_slide:nth-child(2)").clone().removeClass("et-pb-active-slide").insertAfter(e(".diana_baronial_blog .et_pb_slide:last-child"));var i=3;e(window).width()<="980"&&(i=2),e(window).width()<="767"&&(i=1);var s=e(".diana_baronial_blog .et_pb_slide").length,l=e(".diana_baronial_blog .et_pb_column_4_4").width();e(".diana_baronial_blog .et_pb_slide").css("cssText","width: "+l/i+"px !important;");var b=s*e(".diana_baronial_blog .et_pb_slide").outerWidth()+5;e(".diana_baronial_blog .et_pb_slides").css("cssText","width: "+b+"px !important;"),e(".diana_baronial_blog .et-pb-slider-arrows a").on("click",function(n){n.preventDefault(),setTimeout(function(){var n=e(".diana_baronial_blog .et_pb_column_4_4").width()/i,s=e(".diana_baronial_blog .et_pb_slide.et-pb-active-slide").prevAll().length,l=s*n;e(".diana_baronial_blog .et_pb_slides").css("transform","translate(-"+l+"px, 0)");var b=e(".diana_baronial_blog .et_pb_slide.et-pb-active-slide").prevAll().length+a;b<=9&&(b="0"+b),e(".diana_baronial_blog .slider_number .slider_active_number").text(b),e(".diana_baronial_blog .slider_number .numers_line .numers_line_inner").css("transform","translate("+t*s+"px,0)")},50)})}if(e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog").length>0){e('<div class="slider_outer_containe"></div>').insertBefore(e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .et_pb_slides")),e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .et_pb_slides").appendTo(e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .slider_outer_containe")),e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog  .et_pb_slide .post-meta").each(function(){var a=e(this).find("span.author")[0],n=(e(this).find("span.published")[0],e(this).find(".published").text()),t="";a&&(t="By "+a.outerHTML+"/ "),n&&(t+='<span class="published"><span class="day"> '+n+"</span></span>"),e("body.et-fb #et-fb-app-frame").contents().find(e(this)).html(t)});a=1;var d=e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .et_pb_slide").length;e('<div class="slider_number"><span class="slider_active_number">0'+a+'</span><span class="numers_line"><span class="numers_line_inner"></span></span><span>0'+d+"</span></div>").insertBefore(e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .et_pb_slider .et-pb-slider-arrows"));t=e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .slider_number .numers_line").width()/d;e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .slider_number .numers_line .numers_line_inner").width(t),e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog  .et_pb_slide").each(function(){e("body.et-fb #et-fb-app-frame").contents().find(e(this)).find(".post-meta").appendTo(e("body.et-fb #et-fb-app-frame").contents().find(e(this)).find(".et_pb_slide_description .et_pb_slide_content "))}),e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .et_pb_slide:first-child").clone().removeClass("et-pb-active-slide").insertAfter(e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .et_pb_slide:last-child")),e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .et_pb_slide:nth-child(2)").clone().removeClass("et-pb-active-slide").insertAfter(e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .et_pb_slide:last-child"));i=3;e(window).width()<="767"&&(i=1);s=e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .et_pb_slide").length,l=e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .et_pb_column_4_4").width();e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .et_pb_slide").css("cssText","width: "+l/i+"px !important;");b=s*e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .et_pb_slide").outerWidth();e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .et_pb_slides").css("cssText","width: "+b+"px !important;"),e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .et-pb-slider-arrows a").on("click",function(n){n.preventDefault(),setTimeout(function(){var n=e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .et_pb_column_4_4").width()/i,s=e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .et_pb_slide.et-pb-active-slide").prevAll().length,l=s*n;e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .et_pb_slides").css("transform","translate(-"+l+"px, 0)");var b=e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .et_pb_slide.et-pb-active-slide").prevAll().length+a;e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .slider_number .slider_active_number").text("0"+b),e("body.et-fb #et-fb-app-frame").contents().find(".diana_baronial_blog .slider_number .numers_line .numers_line_inner").css("transform","translate("+t*s+"px,0)")},50)})}},a)}(jQuery);