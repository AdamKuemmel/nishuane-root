!function(t){if(t(".freddie_all_girls_post_title .et_pb_title_meta_container").length>0){let _=t(".freddie_all_girls_post_title .et_pb_title_meta_container .author").html(),i=t(".freddie_all_girls_post_title  .et_pb_title_meta_container .published").html();if(t('.freddie_all_girls_post_title  .et_pb_title_meta_container > a[rel="category tag"]').length>0){var e="";t('.freddie_all_girls_post_title  .et_pb_title_meta_container > a[rel="category tag"]').each(function(){e=e+t(this)[0].outerHTML+", "})}""!==e&&void 0!==e&&(e=e.slice(0,-2));let l=t(".freddie_all_girls_post_title  .et_pb_title_meta_container .comments-number").text();l=l.split(" ")[0];let a=t(".freddie_all_girls_post_title  .et_pb_title_meta_container .comments-number").html(),n=t(".freddie_all_girls_post_title  .et_pb_title_meta_container").text();n='<span class="meta">'+(n=n.split(" ")[1])+"</span>",newMeta=void 0!==e?n+" "+_+" <span class='meta divided'>|</span> "+e+"  <span class='meta divided'>|</span>"+i:n+" "+_+" <span class='meta divided'>|</span> "+i,void 0!==a&&(a="<dvi class='comments'>"+a+"</div>"),void 0!==a&&(newMeta+=a),t(".et_pb_title_meta_container").html(newMeta)}function _(){var e=t(".freddie_all_girls_post_title .et_pb_title_featured_container").height(),_=-e/2+53,i=e/2-103;t(".freddie_all_girls_post_title .et_pb_title_featured_container").css("margin-bottom",_+"px"),t(".freddie_all_girls_post_content_section").css("padding-top",i+"px")}_(),t(window).resize(function(){t(window).width()>980?_():t(".freddie_all_girls_post_title .et_pb_title_featured_container").parents(".et_pb_section").css("margin-bottom","0")})}(jQuery);