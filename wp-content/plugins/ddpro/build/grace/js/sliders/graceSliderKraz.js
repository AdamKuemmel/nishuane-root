jQuery(function(e){"use strict";e('<div class="scrollbar"> <div class="handle"> <div class="mousearea"></div> </div> </div>').insertAfter(e(".grace_kraz_slider .et_pb_slider ")),e(".grace_kraz_slider .et_pb_slider").each(function(){var i=e(this),s=(i.find(".et_pb_slide"),i.parent());i.sly({horizontal:1,itemNav:"basic",smart:1,activateOn:"click",mouseDragging:1,touchDragging:1,releaseSwing:1,startAt:0,scrollBar:s.find(".scrollbar"),scrollBy:1,activatePageOn:"click",speed:5e3,elasticBounds:1,easing:"easeOutExpo",dragHandle:1,dynamicHandle:1,clickBar:1})})}),function(e){var i=1500;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(i=5e3),e("body").hasClass("et-fb")&&(i=1e4),setTimeout(function(){0!==e("body:not(.et-fb) .grace_kraz_slider").length&&(e(".grace_kraz_slider .et_pb_slider").each(function(){e(this).width();var i=e(this).find(".et_pb_slide").width(),s=e(this).find(".et_pb_slide").css("margin-right");s=parseInt(s,10);var t=e(this).find(".et_pb_slide").length*(i+s);e(this).find(".et_pb_slide").outerWidth(i),e(this).find(".et_pb_slide").css("margin-right",s),e(this).find(".et_pb_slides").width(t+30),e(this).find(".et_pb_slides .et_pb_slide:first-child").addClass("active_slide")}),e(".grace_kraz_slider .et_pb_slider .et_pb_slide .et_pb_slide_image").tilt({glare:!0,maxGlare:.5,maxTilt:8}))},i)}(jQuery);
!function(t,e,i){"use strict";function n(e,D,q){function A(i){var n=kt.length;if(Pt.old=t.extend({},Pt),It=vt?0:yt[mt.horizontal?"width":"height"](),Ct=xt[mt.horizontal?"width":"height"](),bt=vt?e:wt[mt.horizontal?"outerWidth":"outerHeight"](),kt.length=0,Pt.start=0,Pt.end=E(bt-It,0),Ht){Ot.length,Et=wt.children(mt.itemSelector),Ot.length=0;var a,s=c(wt,mt.horizontal?"paddingLeft":"paddingTop"),r=c(wt,mt.horizontal?"paddingRight":"paddingBottom"),o="border-box"===t(Et).css("boxSizing"),l="none"!==Et.css("float"),d=0,h=Et.length-1;bt=0,Et.each(function(e,i){var n=t(i),o=i.getBoundingClientRect(),u=k(mt.horizontal?o.width||o.right-o.left:o.height||o.bottom-o.top),f=c(n,mt.horizontal?"marginLeft":"marginTop"),g=c(n,mt.horizontal?"marginRight":"marginBottom"),m=u+f+g,p=!f||!g,v={};v.el=i,v.size=p?u:m,v.half=v.size/2,v.start=bt+(p?f:0),v.center=v.start-k(It/2-v.size/2),v.end=v.start-It+v.size,e||(bt+=s),bt+=m,mt.horizontal||l||g&&f&&e>0&&(bt-=O(f,g)),e===h&&(v.end+=r,bt+=r,d=p?g:0),Ot.push(v),a=v}),wt[0].style[mt.horizontal?"width":"height"]=(o?bt:bt-s-r)+"px",bt-=d,Ot.length?(Pt.start=Ot[0][Xt?"center":"start"],Pt.end=Xt?a.center:bt>It?a.end:Pt.start):Pt.start=Pt.end=0}if(Pt.center=k(Pt.end/2+Pt.start/2),R(),Mt.length&&Ct>0&&(mt.dynamicHandle?(Bt=u(Bt=Pt.start===Pt.end?Ct:k(Ct*It/bt),mt.minHandleSize,Ct),Mt[0].style[mt.horizontal?"width":"height"]=Bt+"px"):Bt=Mt[mt.horizontal?"outerWidth":"outerHeight"](),Tt.end=Ct-Bt,ie||X()),!vt&&It>0){var f=Pt.start,g="";if(Ht)t.each(Ot,function(t,e){Xt?kt.push(e.center):e.start+e.size>f&&f<=Pt.end&&(f=e.start,kt.push(f),(f+=It)>Pt.end&&f<Pt.end+It&&kt.push(Pt.end))});else for(;f-It<Pt.end;)kt.push(f),f+=It;if(zt[0]&&n!==kt.length){for(var m=0;m<kt.length;m++)g+=mt.pageBuilder.call(pt,m);(St=zt.html(g).children()).eq(jt.activePage).addClass(mt.activeClass)}}if(jt.slideeSize=bt,jt.frameSize=It,jt.sbSize=Ct,jt.handleSize=Bt,Ht){i&&null!=mt.startAt&&(F(mt.startAt),pt[$t?"toCenter":"toStart"](mt.startAt));var p=Ot[jt.activeItem];Q($t&&p?p.center:u(Pt.dest,Pt.start,Pt.end))}else i?null!=mt.startAt&&Q(mt.startAt,1):Q(u(Pt.dest,Pt.start,Pt.end));ht("load")}function Q(t,e,i){if(Ht&&te.released&&!i){var n=L(t),a=t>Pt.start&&t<Pt.end;$t?(a&&(t=Ot[n.centerItem].center),Xt&&mt.activateMiddle&&F(n.centerItem)):a&&(t=Ot[n.firstItem].start)}te.init&&te.slidee&&mt.elasticBounds?t>Pt.end?t=Pt.end+(t-Pt.end)/6:t<Pt.start&&(t=Pt.start+(t-Pt.start)/6):t=u(t,Pt.start,Pt.end),Kt.start=+new Date,Kt.time=0,Kt.from=Pt.cur,Kt.to=t,Kt.delta=t-Pt.cur,Kt.tweesing=te.tweese||te.init&&!te.slidee,Kt.immediate=!Kt.tweesing&&(e||te.init&&te.slidee||!mt.speed),te.tweese=0,t!==Pt.dest&&(Pt.dest=t,ht("change"),ie||Y()),Z(),R(),U(),St[0]&&Jt.page!==jt.activePage&&(Jt.page=jt.activePage,St.removeClass(mt.activeClass).eq(jt.activePage).addClass(mt.activeClass),ht("activePage",Jt.page))}function Y(){if(pt.initialized){if(!ie)return ie=v(Y),void(te.released&&ht("moveStart"));Kt.immediate?Pt.cur=Kt.to:Kt.tweesing?(Kt.tweeseDelta=Kt.to-Pt.cur,T(Kt.tweeseDelta)<.1?Pt.cur=Kt.to:Pt.cur+=Kt.tweeseDelta*(te.released?mt.swingSpeed:mt.syncSpeed)):(Kt.time=O(+new Date-Kt.start,mt.speed),Pt.cur=Kt.from+Kt.delta*t.easing[mt.easing](Kt.time/mt.speed,Kt.time,0,1,mt.speed)),Kt.to===Pt.cur?(Pt.cur=Kt.to,te.tweese=ie=0):ie=v(Y),ht("move"),vt||(h?wt[0].style[h]=f+(mt.horizontal?"translateX":"translateY")+"("+-Pt.cur+"px)":wt[0].style[mt.horizontal?"left":"top"]=-k(Pt.cur)+"px"),!ie&&te.released&&ht("moveEnd"),X()}}function X(){Mt.length&&(Tt.cur=Pt.start===Pt.end?0:((te.init&&!te.slidee?Pt.dest:Pt.cur)-Pt.start)/(Pt.end-Pt.start)*Tt.end,Tt.cur=u(k(Tt.cur),Tt.start,Tt.end),Jt.hPos!==Tt.cur&&(Jt.hPos=Tt.cur,h?Mt[0].style[h]=f+(mt.horizontal?"translateX":"translateY")+"("+Tt.cur+"px)":Mt[0].style[mt.horizontal?"left":"top"]=Tt.cur+"px"))}function $(){_t.speed&&Pt.cur!==(_t.speed>0?Pt.end:Pt.start)||pt.stop(),se=te.init?v($):0,_t.now=+new Date,_t.pos=Pt.cur+(_t.now-_t.lastTime)/1e3*_t.speed,Q(te.init?_t.pos:k(_t.pos)),te.init||Pt.cur!==Pt.dest||ht("moveEnd"),_t.lastTime=_t.now}function H(t,e,n){if("boolean"===a(e)&&(n=e,e=i),e===i)Q(Pt[t],n);else{if($t&&"center"!==t)return;var s=pt.getPos(e);s&&Q(s[t],n,!$t)}}function N(t){return null!=t?l(t)?t>=0&&t<Ot.length?t:-1:Et.index(t):-1}function W(t){return N(l(t)&&0>t?t+Ot.length:t)}function F(t,e){var i=N(t);return!(!Ht||0>i)&&((Jt.active!==i||e)&&(Et.eq(jt.activeItem).removeClass(mt.activeClass),Et.eq(i).addClass(mt.activeClass),Jt.active=jt.activeItem=i,U(),ht("active",i)),i)}function L(t){t=u(l(t)?t:Pt.dest,Pt.start,Pt.end);var e={},i=Xt?0:It/2;if(!vt)for(var n=0,a=kt.length;a>n;n++){if(t>=Pt.end||n===kt.length-1){e.activePage=kt.length-1;break}if(t<=kt[n]+i){e.activePage=n;break}}if(Ht){for(var s=!1,r=!1,o=!1,c=0,d=Ot.length;d>c;c++)if(!1===s&&t<=Ot[c].start+Ot[c].half&&(s=c),!1===o&&t<=Ot[c].center+Ot[c].half&&(o=c),c===d-1||t<=Ot[c].end+Ot[c].half){r=c;break}e.firstItem=l(s)?s:0,e.centerItem=l(o)?o:e.firstItem,e.lastItem=l(r)?r:e.centerItem}return e}function R(e){t.extend(jt,L(e))}function U(){var t=Pt.dest<=Pt.start,e=Pt.dest>=Pt.end,i=(t?1:0)|(e?2:0);if(Jt.slideePosState!==i&&(Jt.slideePosState=i,Gt.is("button,input")&&Gt.prop("disabled",t),Vt.is("button,input")&&Vt.prop("disabled",e),Gt.add(Lt)[t?"addClass":"removeClass"](mt.disabledClass),Vt.add(Ft)[e?"addClass":"removeClass"](mt.disabledClass)),Jt.fwdbwdState!==i&&te.released&&(Jt.fwdbwdState=i,Lt.is("button,input")&&Lt.prop("disabled",t),Ft.is("button,input")&&Ft.prop("disabled",e)),Ht&&null!=jt.activeItem){var n=0===jt.activeItem,a=jt.activeItem>=Ot.length-1,s=(n?1:0)|(a?2:0);Jt.itemsButtonState!==s&&(Jt.itemsButtonState=s,Rt.is("button,input")&&Rt.prop("disabled",n),Ut.is("button,input")&&Ut.prop("disabled",a),Rt[n?"addClass":"removeClass"](mt.disabledClass),Ut[a?"addClass":"removeClass"](mt.disabledClass))}}function G(t,e,i){if(t=W(t),e=W(e),t>-1&&e>-1&&t!==e&&(!i||e!==t-1)&&(i||e!==t+1)){Et.eq(t)[i?"insertAfter":"insertBefore"](Ot[e].el);var n=e>t?t:i?e:e-1,a=t>e?t:i?e+1:e,s=t>e;null!=jt.activeItem&&(t===jt.activeItem?Jt.active=jt.activeItem=i?s?e+1:e:s?e:e-1:jt.activeItem>n&&jt.activeItem<a&&(Jt.active=jt.activeItem+=s?1:-1)),A()}}function V(t,e){for(var i=0,n=Zt[t].length;n>i;i++)if(Zt[t][i]===e)return i;return-1}function Z(){te.released&&!pt.isPaused&&pt.resume()}function J(t){return k(u(t,Tt.start,Tt.end)/Tt.end*(Pt.end-Pt.start))+Pt.start}function K(){te.history[0]=te.history[1],te.history[1]=te.history[2],te.history[2]=te.history[3],te.history[3]=te.delta}function _(t){te.released=0,te.source=t,te.slidee="slidee"===t}function tt(e){var i="touchstart"===e.type,n=e.data.source,a="slidee"===n;te.init||!i&&nt(e.target)||("handle"!==n||mt.dragHandle&&Tt.start!==Tt.end)&&(!a||(i?mt.touchDragging:mt.mouseDragging&&e.which<2))&&(i||s(e),_(n),te.init=0,te.$source=t(e.target),te.touch=i,te.pointer=i?e.originalEvent.touches[0]:e,te.initX=te.pointer.pageX,te.initY=te.pointer.pageY,te.initPos=a?Pt.cur:Tt.cur,te.start=+new Date,te.time=0,te.path=0,te.delta=0,te.locked=0,te.history=[0,0,0,0],te.pathToLock=a?i?30:10:0,y.on(i?b:I,et),pt.pause(1),(a?wt:Mt).addClass(mt.draggedClass),ht("moveStart"),a&&(ne=setInterval(K,10)))}function et(t){if(te.released="mouseup"===t.type||"touchend"===t.type,te.pointer=te.touch?t.originalEvent[te.released?"changedTouches":"touches"][0]:t,te.pathX=te.pointer.pageX-te.initX,te.pathY=te.pointer.pageY-te.initY,te.path=z(S(te.pathX,2)+S(te.pathY,2)),te.delta=mt.horizontal?te.pathX:te.pathY,te.released||!(te.path<1)){if(!te.init){if(te.path<mt.dragThreshold)return te.released?it():i;if(!(mt.horizontal?T(te.pathX)>T(te.pathY):T(te.pathX)<T(te.pathY)))return it();te.init=1}s(t),!te.locked&&te.path>te.pathToLock&&te.slidee&&(te.locked=1,te.$source.on(x,r)),te.released&&(it(),mt.releaseSwing&&te.slidee&&(te.swing=(te.delta-te.history[0])/40*300,te.delta+=te.swing,te.tweese=T(te.swing)>10)),Q(te.slidee?k(te.initPos-te.delta):J(te.initPos+te.delta))}}function it(){clearInterval(ne),te.released=!0,y.off(te.touch?b:I,et),(te.slidee?wt:Mt).removeClass(mt.draggedClass),setTimeout(function(){te.$source.off(x,r)}),Pt.cur===Pt.dest&&te.init&&ht("moveEnd"),pt.resume(1),te.init=0}function nt(e){return~t.inArray(e.nodeName,C)||t(e).is(mt.interactive)}function at(){pt.stop(),y.off("mouseup",at)}function st(t){switch(s(t),this){case Ft[0]:case Lt[0]:pt.moveBy(Ft.is(this)?mt.moveBy:-mt.moveBy),y.on("mouseup",at);break;case Rt[0]:pt.prev();break;case Ut[0]:pt.next();break;case Gt[0]:pt.prevPage();break;case Vt[0]:pt.nextPage()}}function rt(t){t.originalEvent[m]=pt;var e=+new Date;if(j+mt.scrollHijack>e&&Nt[0]!==document&&Nt[0]!==window)j=e;else if(mt.scrollBy&&Pt.start!==Pt.end){var i=function(t){return ee.curDelta=(mt.horizontal?t.deltaY||t.deltaX:t.deltaY)||-t.wheelDelta,ee.curDelta/=1===t.deltaMode?3:100,Ht?(g=+new Date,ee.last<g-ee.resetTime&&(ee.delta=0),ee.last=g,ee.delta+=ee.curDelta,T(ee.delta)<1?ee.finalDelta=0:(ee.finalDelta=k(ee.delta/1),ee.delta%=1),ee.finalDelta):ee.curDelta}(t.originalEvent);(mt.scrollTrap||i>0&&Pt.dest<Pt.end||0>i&&Pt.dest>Pt.start)&&s(t,1),pt.slideBy(mt.scrollBy*i)}}function ot(t){mt.clickBar&&t.target===xt[0]&&(s(t),Q(J((mt.horizontal?t.pageX-xt.offset().left:t.pageY-xt.offset().top)-Bt/2)))}function lt(t){if(mt.keyboardNavBy)switch(t.which){case mt.horizontal?37:38:s(t),pt["pages"===mt.keyboardNavBy?"prevPage":"prev"]();break;case mt.horizontal?39:40:s(t),pt["pages"===mt.keyboardNavBy?"nextPage":"next"]()}}function ct(t){return nt(this)?void(t.originalEvent[m+"ignore"]=!0):void(this.parentNode!==wt[0]||t.originalEvent[m+"ignore"]||pt.activate(this))}function ut(){this.parentNode===zt[0]&&pt.activatePage(St.index(this))}function dt(t){mt.pauseOnHover&&pt["mouseenter"===t.type?"pause":"resume"](2)}function ht(t,e){if(Zt[t]){for(gt=Zt[t].length,B.length=0,ft=0;gt>ft;ft++)B.push(Zt[t][ft]);for(ft=0;gt>ft;ft++)B[ft].call(pt,t,e)}}if(!(this instanceof n))return new n(e,D,q);var ft,gt,mt=t.extend({},n.defaults,D),pt=this,vt=l(e),yt=t(e),wt=mt.slidee?t(mt.slidee).eq(0):yt.children().eq(0),It=0,bt=0,Pt={start:0,center:0,end:0,cur:0,dest:0},xt=t(mt.scrollBar).eq(0),Mt=xt.children().eq(0),Ct=0,Bt=0,Tt={start:0,end:0,cur:0},zt=t(mt.pagesBar),St=0,kt=[],Et=0,Ot=[],jt={firstItem:0,lastItem:0,centerItem:0,activeItem:null,activePage:0},Dt=new d(yt[0]),qt=new d(wt[0]),At=new d(xt[0]),Qt=new d(Mt[0]),Yt="basic"===mt.itemNav,Xt="forceCentered"===mt.itemNav,$t="centered"===mt.itemNav||Xt,Ht=!vt&&(Yt||$t||Xt),Nt=mt.scrollSource?t(mt.scrollSource):yt,Wt=mt.dragSource?t(mt.dragSource):yt,Ft=t(mt.forward),Lt=t(mt.backward),Rt=t(mt.prev),Ut=t(mt.next),Gt=t(mt.prevPage),Vt=t(mt.nextPage),Zt={},Jt={},Kt={},_t={},te={released:1},ee={last:0,delta:0,resetTime:200},ie=0,ne=0,ae=0,se=0;vt||(e=yt[0]),pt.initialized=0,pt.frame=e,pt.slidee=wt[0],pt.pos=Pt,pt.rel=jt,pt.items=Ot,pt.pages=kt,pt.isPaused=0,pt.options=mt,pt.dragging=te,pt.reload=function(){A()},pt.getPos=function(t){if(Ht){var e=N(t);return-1!==e&&Ot[e]}var i=wt.find(t).eq(0);if(i[0]){var n=mt.horizontal?i.offset().left-wt.offset().left:i.offset().top-wt.offset().top,a=i[mt.horizontal?"outerWidth":"outerHeight"]();return{start:n,center:n-It/2+a/2,end:n-It+a,size:a}}return!1},pt.moveBy=function(t){_t.speed=t,!te.init&&_t.speed&&Pt.cur!==(_t.speed>0?Pt.end:Pt.start)&&(_t.lastTime=+new Date,_t.startPos=Pt.cur,_("button"),te.init=1,ht("moveStart"),p(se),$())},pt.stop=function(){"button"===te.source&&(te.init=0,te.released=1)},pt.prev=function(){pt.activate(null==jt.activeItem?0:jt.activeItem-1)},pt.next=function(){pt.activate(null==jt.activeItem?0:jt.activeItem+1)},pt.prevPage=function(){pt.activatePage(jt.activePage-1)},pt.nextPage=function(){pt.activatePage(jt.activePage+1)},pt.slideBy=function(t,e){t&&(Ht?pt[$t?"toCenter":"toStart"](u(($t?jt.centerItem:jt.firstItem)+mt.scrollBy*t,0,Ot.length)):Q(Pt.dest+t,e))},pt.slideTo=function(t,e){Q(t,e)},pt.toStart=function(t,e){H("start",t,e)},pt.toEnd=function(t,e){H("end",t,e)},pt.toCenter=function(t,e){H("center",t,e)},pt.getIndex=N,pt.activate=function(t,e){var i=F(t);mt.smart&&!1!==i&&($t?pt.toCenter(i,e):i>=jt.lastItem?pt.toStart(i,e):i<=jt.firstItem?pt.toEnd(i,e):Z())},pt.activatePage=function(t,e){l(t)&&Q(kt[u(t,0,kt.length-1)],e)},pt.resume=function(t){mt.cycleBy&&mt.cycleInterval&&("items"!==mt.cycleBy||Ot[0]&&null!=jt.activeItem)&&!(t<pt.isPaused)&&(pt.isPaused=0,ae?ae=clearTimeout(ae):ht("resume"),ae=setTimeout(function(){switch(ht("cycle"),mt.cycleBy){case"items":pt.activate(jt.activeItem>=Ot.length-1?0:jt.activeItem+1);break;case"pages":pt.activatePage(jt.activePage>=kt.length-1?0:jt.activePage+1)}},mt.cycleInterval))},pt.pause=function(t){t<pt.isPaused||(pt.isPaused=t||100,ae&&(ae=clearTimeout(ae),ht("pause")))},pt.toggle=function(){pt[ae?"pause":"resume"]()},pt.set=function(e,i){t.isPlainObject(e)?t.extend(mt,e):mt.hasOwnProperty(e)&&(mt[e]=i)},pt.add=function(e,i){var n=t(e);Ht?(null==i||!Ot[0]||i>=Ot.length?n.appendTo(wt):Ot.length&&n.insertBefore(Ot[i].el),null!=jt.activeItem&&i<=jt.activeItem&&(Jt.active=jt.activeItem+=n.length)):wt.append(n),A()},pt.remove=function(e){if(Ht){var i=W(e);if(i>-1){Et.eq(i).remove();var n=i===jt.activeItem;null!=jt.activeItem&&i<jt.activeItem&&(Jt.active=--jt.activeItem),A(),n&&(Jt.active=null,pt.activate(jt.activeItem))}}else t(e).remove(),A()},pt.moveAfter=function(t,e){G(t,e,1)},pt.moveBefore=function(t,e){G(t,e)},pt.on=function(t,e){if("object"===a(t))for(var i in t)t.hasOwnProperty(i)&&pt.on(i,t[i]);else if("function"===a(e))for(var n=t.split(" "),s=0,r=n.length;r>s;s++)Zt[n[s]]=Zt[n[s]]||[],-1===V(n[s],e)&&Zt[n[s]].push(e);else if("array"===a(e))for(var o=0,l=e.length;l>o;o++)pt.on(t,e[o])},pt.one=function(t,e){pt.on(t,function i(){e.apply(pt,arguments),pt.off(t,i)})},pt.off=function(t,e){if(e instanceof Array)for(var i=0,n=e.length;n>i;i++)pt.off(t,e[i]);else for(var a=t.split(" "),s=0,r=a.length;r>s;s++)if(Zt[a[s]]=Zt[a[s]]||[],null==e)Zt[a[s]].length=0;else{var o=V(a[s],e);-1!==o&&Zt[a[s]].splice(o,1)}},pt.destroy=function(){return n.removeInstance(e),Nt.add(Mt).add(xt).add(zt).add(Ft).add(Lt).add(Rt).add(Ut).add(Gt).add(Vt).off("."+m),y.off("keydown",lt),Rt.add(Ut).add(Gt).add(Vt).removeClass(mt.disabledClass),Et&&null!=jt.activeItem&&Et.eq(jt.activeItem).removeClass(mt.activeClass),zt.empty(),vt||(yt.off("."+m),Dt.restore(),qt.restore(),At.restore(),Qt.restore(),t.removeData(e,m)),Ot.length=kt.length=0,Jt={},pt.initialized=0,pt},pt.init=function(){if(!pt.initialized){if(n.getInstance(e))throw new Error("There is already a Sly instance on this element");n.storeInstance(e,pt),pt.on(q);var t=["overflow","position"],i=["position","webkitTransform","msTransform","transform","left","top","width","height"];Dt.save.apply(Dt,t),At.save.apply(At,t),qt.save.apply(qt,i),Qt.save.apply(Qt,i);var a=Mt;return vt||(a=a.add(wt),yt.css("overflow","hidden"),h||"static"!==yt.css("position")||yt.css("position","relative")),h?f&&a.css(h,f):("static"===xt.css("position")&&xt.css("position","relative"),a.css({position:"absolute"})),mt.forward&&Ft.on(M,st),mt.backward&&Lt.on(M,st),mt.prev&&Rt.on(x,st),mt.next&&Ut.on(x,st),mt.prevPage&&Gt.on(x,st),mt.nextPage&&Vt.on(x,st),Nt.on(P,rt),xt[0]&&xt.on(x,ot),Ht&&mt.activateOn&&yt.on(mt.activateOn+"."+m,"*",ct),zt[0]&&mt.activatePageOn&&zt.on(mt.activatePageOn+"."+m,"*",ut),Wt.on(w,{source:"slidee"},tt),Mt&&Mt.on(w,{source:"handle"},tt),y.on("keydown",lt),vt||(yt.on("mouseenter."+m+" mouseleave."+m,dt),yt.on("scroll."+m,o)),pt.initialized=1,A(!0),mt.cycleBy&&!vt&&pt[mt.startPaused?"pause":"resume"](),pt}}}function a(t){return null==t?String(t):"object"==typeof t||"function"==typeof t?Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase()||"object":typeof t}function s(t,e){t.preventDefault(),e&&t.stopPropagation()}function r(e){s(e,1),t(this).off(e.type,r)}function o(){this.scrollLeft=0,this.scrollTop=0}function l(t){return!isNaN(parseFloat(t))&&isFinite(t)}function c(t,e){return 0|k(String(t.css(e)).replace(/[^\-0-9.]/g,""))}function u(t,e,i){return e>t?e:t>i?i:t}function d(t){var e={style:{},save:function(){if(t&&t.nodeType){for(var i=0;i<arguments.length;i++)e.style[arguments[i]]=t.style[arguments[i]];return e}},restore:function(){if(t&&t.nodeType){for(var i in e.style)e.style.hasOwnProperty(i)&&(t.style[i]=e.style[i]);return e}}};return e}var h,f,g,m="sly",p=e.cancelAnimationFrame||e.cancelRequestAnimationFrame,v=e.requestAnimationFrame,y=t(document),w="touchstart."+m+" mousedown."+m,I="mousemove."+m+" mouseup."+m,b="touchmove."+m+" touchend."+m,P=(document.implementation.hasFeature("Event.wheel","3.0")?"wheel.":"mousewheel.")+m,x="click."+m,M="mousedown."+m,C=["INPUT","SELECT","BUTTON","TEXTAREA"],B=[],T=Math.abs,z=Math.sqrt,S=Math.pow,k=Math.round,E=Math.max,O=Math.min,j=0;y.on(P,function(t){var e=t.originalEvent[m],i=+new Date;(!e||e.options.scrollHijack<i-j)&&(j=i)}),n.getInstance=function(e){return t.data(e,m)},n.storeInstance=function(e,i){return t.data(e,m,i)},n.removeInstance=function(e){return t.removeData(e,m)},function(t){v=t.requestAnimationFrame||t.webkitRequestAnimationFrame||function(t){var i=(new Date).getTime(),n=Math.max(0,16-(i-e)),a=setTimeout(t,n);return e=i,a};var e=(new Date).getTime(),i=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.clearTimeout;p=function(e){i.call(t,e)}}(window),function(){function t(t){for(var n=0,a=e.length;a>n;n++){var s=e[n]?e[n]+t.charAt(0).toUpperCase()+t.slice(1):t;if(null!=i.style[s])return s}}var e=["","Webkit","Moz","ms","O"],i=document.createElement("div");h=t("transform"),f=t("perspective")?"translateZ(0) ":""}(),e.Sly=n,t.fn.sly=function(e,i){var s,r;return t.isPlainObject(e)||(("string"===a(e)||!1===e)&&(s=!1===e?"destroy":e,r=Array.prototype.slice.call(arguments,1)),e={}),this.each(function(t,a){var o=n.getInstance(a);o||s?o&&s&&o[s]&&o[s].apply(o,r):o=new n(a,e,i).init()})},n.defaults={slidee:null,horizontal:!1,itemNav:null,itemSelector:null,smart:!1,activateOn:null,activateMiddle:!1,scrollSource:null,scrollBy:0,scrollHijack:300,scrollTrap:!1,dragSource:null,mouseDragging:!1,touchDragging:!1,releaseSwing:!1,swingSpeed:.2,elasticBounds:!1,dragThreshold:3,interactive:null,scrollBar:null,dragHandle:!1,dynamicHandle:!1,minHandleSize:50,clickBar:!1,syncSpeed:.5,pagesBar:null,activatePageOn:null,pageBuilder:function(t){return"<li>"+(t+1)+"</li>"},forward:null,backward:null,prev:null,next:null,prevPage:null,nextPage:null,cycleBy:null,cycleInterval:5e3,pauseOnHover:!1,startPaused:!1,moveBy:300,speed:0,easing:"swing",startAt:null,keyboardNavBy:null,draggedClass:"dragged",activeClass:"active",disabledClass:"disabled"}}(jQuery,window),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=function(e,i){return void 0===i&&(i="undefined"!=typeof window?require("jquery"):require("jquery")(e)),t(i),i}:t(jQuery)}(function(t){return t.fn.tilt=function(e){const i=function(){this.ticking||(requestAnimationFrame(c.bind(this)),this.ticking=!0)},n=function(){void 0!==this.timeout&&clearTimeout(this.timeout),t(this).css({transition:`${this.settings.speed}ms ${this.settings.easing}`}),this.settings.glare&&this.glareElement.css({transition:`opacity ${this.settings.speed}ms ${this.settings.easing}`}),this.timeout=setTimeout(()=>{t(this).css({transition:""}),this.settings.glare&&this.glareElement.css({transition:""})},this.settings.speed)},a=function(e){this.ticking=!1,t(this).css({"will-change":"transform"}),n.call(this),t(this).trigger("tilt.mouseEnter")},s=function(e){return void 0===e&&(e={pageX:t(this).offset().left+t(this).outerWidth()/2,pageY:t(this).offset().top+t(this).outerHeight()/2}),{x:e.pageX,y:e.pageY}},r=function(t){this.mousePositions=s(t),i.call(this)},o=function(){n.call(this),this.reset=!0,i.call(this),t(this).trigger("tilt.mouseLeave")},l=function(){const e=t(this).outerWidth(),i=t(this).outerHeight(),n=t(this).offset().left,a=t(this).offset().top,s=(this.mousePositions.x-n)/e,r=(this.mousePositions.y-a)/i;return{tiltX:(this.settings.maxTilt/2-s*this.settings.maxTilt).toFixed(2),tiltY:(r*this.settings.maxTilt-this.settings.maxTilt/2).toFixed(2),percentageX:100*s,percentageY:100*r,angle:Math.atan2(this.mousePositions.x-(n+e/2),-(this.mousePositions.y-(a+i/2)))*(180/Math.PI)}},c=function(){if(this.transforms=l.call(this),this.reset)return this.reset=!1,t(this).css("transform",`perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg)`),void(this.settings.glare&&(this.glareElement.css("transform","rotate(180deg) translate(-50%, -50%)"),this.glareElement.css("opacity","0")));t(this).css("transform",`perspective(${this.settings.perspective}px) rotateX(${"x"===this.settings.disableAxis?0:this.transforms.tiltY}deg) rotateY(${"y"===this.settings.disableAxis?0:this.transforms.tiltX}deg) scale3d(${this.settings.scale},${this.settings.scale},${this.settings.scale})`),this.settings.glare&&(this.glareElement.css("transform",`rotate(${this.transforms.angle}deg) translate(-50%, -50%)`),this.glareElement.css("opacity",`${this.transforms.percentageY*this.settings.maxGlare/100}`)),t(this).trigger("change",[this.transforms]),this.ticking=!1},u=function(){this.glareElement.css({width:`${2*t(this).outerWidth()}`,height:`${2*t(this).outerWidth()}`})};return t.fn.tilt.destroy=function(){t(this).each(function(){t(this).find(".js-tilt-glare").remove(),t(this).css({"will-change":"",transform:""}),t(this).off("mousemove mouseenter mouseleave")})},t.fn.tilt.getValues=function(){const e=[];return t(this).each(function(){this.mousePositions=s.call(this),e.push(l.call(this))}),e},t.fn.tilt.reset=function(){t(this).each(function(){this.mousePositions=s.call(this),this.settings=t(this).data("settings"),o.call(this),setTimeout(()=>{this.reset=!1},this.settings.transition)})},this.each(function(){this.settings=t.extend({maxTilt:t(this).is("[data-tilt-max]")?t(this).data("tilt-max"):20,perspective:t(this).is("[data-tilt-perspective]")?t(this).data("tilt-perspective"):300,easing:t(this).is("[data-tilt-easing]")?t(this).data("tilt-easing"):"cubic-bezier(.03,.98,.52,.99)",scale:t(this).is("[data-tilt-scale]")?t(this).data("tilt-scale"):"1",speed:t(this).is("[data-tilt-speed]")?t(this).data("tilt-speed"):"400",transition:!t(this).is("[data-tilt-transition]")||t(this).data("tilt-transition"),disableAxis:t(this).is("[data-tilt-disable-axis]")?t(this).data("tilt-disable-axis"):null,axis:t(this).is("[data-tilt-axis]")?t(this).data("tilt-axis"):null,reset:!t(this).is("[data-tilt-reset]")||t(this).data("tilt-reset"),glare:!!t(this).is("[data-tilt-glare]")&&t(this).data("tilt-glare"),maxGlare:t(this).is("[data-tilt-maxglare]")?t(this).data("tilt-maxglare"):1},e),null!==this.settings.axis&&(console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"),this.settings.disableAxis=this.settings.axis),this.init=(()=>{t(this).data("settings",this.settings),this.settings.glare&&function(){const e=this.settings.glarePrerender;if(e||t(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'),this.glareElementWrapper=t(this).find(".js-tilt-glare"),this.glareElement=t(this).find(".js-tilt-glare-inner"),e)return;this.glareElementWrapper.css({position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}).css({overflow:"hidden","pointer-events":"none"}),this.glareElement.css({position:"absolute",top:"50%",left:"50%","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",width:`${2*t(this).outerWidth()}`,height:`${2*t(this).outerWidth()}`,transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"})}.call(this),function(){t(this).on("mousemove",r),t(this).on("mouseenter",a),this.settings.reset&&t(this).on("mouseleave",o),this.settings.glare&&t(window).on("resize",u.bind(this))}.call(this)}),this.init()})},t("[data-tilt]").tilt(),!0}),function(){for(var t,e=function(){},i="assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd table time timeEnd timeStamp trace warn".split(" "),n=i.length,a=window.console=window.console||{};n--;)a[t=i[n]]||(a[t]=e)}(),function(t){t.fn.loremImages=function(e,i,n){var a=t.extend({},t.fn.loremImages.defaults,n);return this.each(function(n,s){var r=t(s),o="";for(n=0;n<a.count;n++){var l=e+Math.round(Math.random()*a.randomWidth),c=i+Math.round(Math.random()*a.randomHeight);o+=a.itemBuilder.call(r,n,"//lorempixel.com/"+(a.grey?"g/":"")+l+"/"+c+"/"+(a.category?a.category+"/":"")+"?"+Math.round(1e3*Math.random()),l,c)}r.append(o)})},t.fn.loremImages.defaults={count:10,grey:0,randomWidth:0,randomHeight:0,category:0,itemBuilder:function(t,e){return'<img src="'+e+'" alt="Lorempixel">'}}}(jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,i,n,a){return jQuery.easing[jQuery.easing.def](t,e,i,n,a)},easeInQuad:function(t,e,i,n,a){return n*(e/=a)*e+i},easeOutQuad:function(t,e,i,n,a){return-n*(e/=a)*(e-2)+i},easeInOutQuad:function(t,e,i,n,a){return 1>(e/=a/2)?n/2*e*e+i:-n/2*(--e*(e-2)-1)+i},easeInCubic:function(t,e,i,n,a){return n*(e/=a)*e*e+i},easeOutCubic:function(t,e,i,n,a){return n*((e=e/a-1)*e*e+1)+i},easeInOutCubic:function(t,e,i,n,a){return 1>(e/=a/2)?n/2*e*e*e+i:n/2*((e-=2)*e*e+2)+i},easeInQuart:function(t,e,i,n,a){return n*(e/=a)*e*e*e+i},easeOutQuart:function(t,e,i,n,a){return-n*((e=e/a-1)*e*e*e-1)+i},easeInOutQuart:function(t,e,i,n,a){return 1>(e/=a/2)?n/2*e*e*e*e+i:-n/2*((e-=2)*e*e*e-2)+i},easeInQuint:function(t,e,i,n,a){return n*(e/=a)*e*e*e*e+i},easeOutQuint:function(t,e,i,n,a){return n*((e=e/a-1)*e*e*e*e+1)+i},easeInOutQuint:function(t,e,i,n,a){return 1>(e/=a/2)?n/2*e*e*e*e*e+i:n/2*((e-=2)*e*e*e*e+2)+i},easeInSine:function(t,e,i,n,a){return-n*Math.cos(e/a*(Math.PI/2))+n+i},easeOutSine:function(t,e,i,n,a){return n*Math.sin(e/a*(Math.PI/2))+i},easeInOutSine:function(t,e,i,n,a){return-n/2*(Math.cos(Math.PI*e/a)-1)+i},easeInExpo:function(t,e,i,n,a){return 0==e?i:n*Math.pow(2,10*(e/a-1))+i},easeOutExpo:function(t,e,i,n,a){return e==a?i+n:n*(1-Math.pow(2,-10*e/a))+i},easeInOutExpo:function(t,e,i,n,a){return 0==e?i:e==a?i+n:1>(e/=a/2)?n/2*Math.pow(2,10*(e-1))+i:n/2*(2-Math.pow(2,-10*--e))+i},easeInCirc:function(t,e,i,n,a){return-n*(Math.sqrt(1-(e/=a)*e)-1)+i},easeOutCirc:function(t,e,i,n,a){return n*Math.sqrt(1-(e=e/a-1)*e)+i},easeInOutCirc:function(t,e,i,n,a){return 1>(e/=a/2)?-n/2*(Math.sqrt(1-e*e)-1)+i:n/2*(Math.sqrt(1-(e-=2)*e)+1)+i},easeInElastic:function(t,e,i,n,a){t=1.70158;var s=0,r=n;return 0==e?i:1==(e/=a)?i+n:(s||(s=.3*a),r<Math.abs(n)?(r=n,t=s/4):t=s/(2*Math.PI)*Math.asin(n/r),-r*Math.pow(2,10*(e-=1))*Math.sin(2*(e*a-t)*Math.PI/s)+i)},easeOutElastic:function(t,e,i,n,a){t=1.70158;var s=0,r=n;return 0==e?i:1==(e/=a)?i+n:(s||(s=.3*a),r<Math.abs(n)?(r=n,t=s/4):t=s/(2*Math.PI)*Math.asin(n/r),r*Math.pow(2,-10*e)*Math.sin(2*(e*a-t)*Math.PI/s)+n+i)},easeInOutElastic:function(t,e,i,n,a){t=1.70158;var s=0,r=n;return 0==e?i:2==(e/=a/2)?i+n:(s||(s=.3*a*1.5),r<Math.abs(n)?(r=n,t=s/4):t=s/(2*Math.PI)*Math.asin(n/r),1>e?-.5*r*Math.pow(2,10*(e-=1))*Math.sin(2*(e*a-t)*Math.PI/s)+i:.5*r*Math.pow(2,-10*(e-=1))*Math.sin(2*(e*a-t)*Math.PI/s)+n+i)},easeInBack:function(t,e,i,n,a,s){return void 0==s&&(s=1.70158),n*(e/=a)*e*((s+1)*e-s)+i},easeOutBack:function(t,e,i,n,a,s){return void 0==s&&(s=1.70158),n*((e=e/a-1)*e*((s+1)*e+s)+1)+i},easeInOutBack:function(t,e,i,n,a,s){return void 0==s&&(s=1.70158),1>(e/=a/2)?n/2*e*e*((1+(s*=1.525))*e-s)+i:n/2*((e-=2)*e*((1+(s*=1.525))*e+s)+2)+i},easeInBounce:function(t,e,i,n,a){return n-jQuery.easing.easeOutBounce(t,a-e,0,n,a)+i},easeOutBounce:function(t,e,i,n,a){return(e/=a)<1/2.75?7.5625*n*e*e+i:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+i:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+i:n*(7.5625*(e-=2.625/2.75)*e+.984375)+i},easeInOutBounce:function(t,e,i,n,a){return e<a/2?.5*jQuery.easing.easeInBounce(t,2*e,0,n,a)+i:.5*jQuery.easing.easeOutBounce(t,2*e-a,0,n,a)+.5*n+i}}),function(t,e){var i,n=t.jQuery||t.Cowboy||(t.Cowboy={});n.throttle=i=function(t,i,a,s){var r,o=0;function l(){var n=this,l=+new Date-o,c=arguments;function u(){o=+new Date,a.apply(n,c)}s&&!r&&u(),r&&clearTimeout(r),s===e&&l>t?u():!0!==i&&(r=setTimeout(s?function(){r=e}:u,s===e?t-l:t))}return"boolean"!=typeof i&&(s=a,a=i,i=e),n.guid&&(l.guid=a.guid=a.guid||n.guid++),l},n.debounce=function(t,n,a){return a===e?i(t,n,!1):i(t,a,!1!==n)}}(this);