!function(e){var t=1e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(t=5e3),e("body").hasClass("et-fb")&&(t=1e4),setTimeout(function(){e(".et_pb_button_module_wrapper .et_pb_button.freddie_button_you_andi ").each(function(){e(this).parent(".et_pb_button_module_wrapper").addClass("freddie_button_you_andi_parent");var t=e(this).text();e(this).html("<span>"+t+"</span>")}),e('<div class="arrow"><div class="line line_1"></div><div class="line line_2"></div></div>').appendTo(e(".et_pb_button_module_wrapper .et_pb_button.freddie_button_you_andi ")),e('  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"> <circle cx="17" cy="17" r="15.5" class="circle__background"/> <circle cx="17" cy="17" r="15.5" class="circle__progress"/> </svg>').appendTo(e(".et_pb_button_module_wrapper .et_pb_button.freddie_button_you_andi ")),(new TimelineLite).to(e(".et_pb_button_module_wrapper .et_pb_button.freddie_button_you_andi .circle_progress_top"),0,{rotationX:-180,transformOrigin:"center"},0),TweenMax.set(".freddie_button_you_andi .circle__progress",{drawSVG:0}),e(".et_pb_button_module_wrapper.freddie_button_you_andi_parent").on("click",function(){window.location.href=e(this).find("a.et_pb_button").attr("href")}),e(".et_pb_button_module_wrapper.freddie_button_you_andi_parent").hover(function(){this.tlYouAndiCircle=new TimelineLite,this.tlYouAndiCircle.fromTo(e(this).find(".circle__progress"),1.3,{drawSVG:"0%",rotation:0},{drawSVG:"0 100%",rotation:"360deg",transformOrigin:"center",ease:Power3.easeOut},0).to(e(this).find(".arrow"),.4,{right:1,ease:Power3.easeOut},0).to(e(this).find(".line"),.4,{width:2,rotation:0,ease:Power3.easeOut},0).to(e(this).find(".line"),.4,{width:8,ease:Power3.easeOut},.5).to(e(this).find(".line_1"),.4,{width:8,rotation:"45deg",ease:Power3.easeOut},.5).to(e(this).find(".line_2"),.4,{width:8,rotation:"-45deg",ease:Power3.easeOut},.5).to(e(this).find(".arrow"),0,{right:40,opacity:0,ease:Power3.easeOut},.4).to(e(this).find(".arrow"),.4,{right:19,opacity:1,ease:Power3.easeOut},.5),this.tlYouAndiCircle.play()},function(){this.tlYouAndiCircle.reverse()})},t)}(jQuery);