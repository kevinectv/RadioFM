/*! For license information please see afe.36641c4d0e34013cd762.js.LICENSE.txt */
(self.webpackChunkfrontend_js=self.webpackChunkfrontend_js||[]).push([[576],{676:(t,e,n)=>{"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}n.d(e,{Z:()=>i})},610:(t,e,n)=>{"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:()=>i})},991:(t,e,n)=>{"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}n.d(e,{Z:()=>o})},156:(t,e,n)=>{"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Z:()=>i})},699:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var i=n(961);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=n){var i,o,r=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(i=n.next()).done)&&(r.push(i.value),!e||r.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return r}}(t,e)||(0,i.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},329:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var i=n(676),o=n(961);function r(t){return function(t){if(Array.isArray(t))return(0,i.Z)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,o.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},484:(t,e,n)=>{"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,{Z:()=>i})},961:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var i=n(676);function o(t,e){if(t){if("string"==typeof t)return(0,i.Z)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,i.Z)(t,e):void 0}}},92:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var i=n(610),o=n(991),r=n(156),a=n(609),s=n.n(a),c=function(){function t(){(0,i.Z)(this,t)}return(0,o.Z)(t,null,[{key:"setupGlobals",value:function(){window.gm.env={getViewport:this.getViewport}}},{key:"init",value:function(){this.title=document.title,this.touchSupport="ontouchstart"in document.documentElement,this.$win=s()(window),this.$html=s()("html"),this.$html.addClass(this.touchSupport?"touch":"no-touch").addClass("js")}},{key:"getViewport",value:function(){var t=window,e="inner";return"innerWidth"in window||(e="client",t=document.documentElement||document.body),{width:t[e+"Width"],height:t[e+"Height"]}}}]),t}();(0,r.Z)(c,"title",""),(0,r.Z)(c,"touchSupport",!1),(0,r.Z)(c,"$win",void 0),(0,r.Z)(c,"$html",void 0)},887:(t,e,n)=>{"use strict";n.d(e,{Z:()=>f});var i=n(329),o=n(610),r=n(991),a=n(156),s=n(609),c=n.n(s),l=n(92),u=n(699),d=function(){function t(){(0,o.Z)(this,t)}return(0,r.Z)(t,null,[{key:"request",value:function(t){c().ajax({dataType:"script",cache:!0,url:"https://aka-cdn-ns.adtech.de/dt/common/DAC.js"}).done((function(){ADTECH.config.page={protocol:"https",params:{loc:"100",target:"_blank"}};for(var e=0,n=Object.entries(t);e<n.length;e++){var i=(0,u.Z)(n[e],2),o=i[0],r=i[1];o=parseInt(o),ADTECH.config.placements[o]=r,ADTECH.enqueueAd(o)}ADTECH.executeQueue()}))}}]),t}(),h=function(){function t(){(0,o.Z)(this,t)}return(0,r.Z)(t,null,[{key:"request",value:function(){c().ajax({dataType:"script",cache:!0,url:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}).done((function(){c()(".adsbygoogle").each((function(){(adsbygoogle=window.adsbygoogle||[]).push({})}))}))}}]),t}(),p=function(){function t(){(0,o.Z)(this,t)}return(0,r.Z)(t,null,[{key:"request",value:function(t){var e=Object.values(t);c().ajax({dataType:"script",cache:!0,url:"//www.googletagservices.com/tag/js/gpt.js"}).done((function(){var t=window.googletag||{};t.cmd=t.cmd||[],e.forEach((function(e){var n=e.dfp_slot_id,i=e.dfp_sizes;e.hasOwnProperty("dfp_mapping")?t.cmd.push((function(){var o=t.sizeMapping();e.dfp_mapping.forEach((function(t){o=o.addSize(t.vp,t.sizes)})),o=o.build(),t.defineSlot(n,i,e.tagid).defineSizeMapping(o).addService(t.pubads())})):t.cmd.push((function(){t.defineSlot(n,i,e.tagid).addService(t.pubads())}))})),t.cmd.push((function(){t.pubads().enableSingleRequest(),t.pubads().setCentering(!0),t.pubads().collapseEmptyDivs(),t.enableServices()})),e.forEach((function(e){t.cmd.push((function(){t.display(e.tagid)}))}))}))}}]),t}(),f=function(){function t(){(0,o.Z)(this,t)}return(0,r.Z)(t,null,[{key:"init",value:function(){var t=this;if(window.gm.hasOwnProperty("properties")){window.gm.advertising={};var e=c()("body"),n=0;c()(".gm-adpos").each((function(e,i){var o=c()(i);o.attr("data-previewid")?t.previewItems[o.attr("data-posid")]=o.attr("data-previewid"):(t.requestItems[n]=o.attr("data-posid"),n++)}));var i=c()(".js-takeover-wrap");if(0!==i.length&&!this.takeoverActive&&l.Z.$win.width()>i.outerWidth()&&(e.attr("data-takeover-previewid")?this.previewItems.to=e.attr("data-takeover-previewid"):(this.requestItems[n]="to",n++)),e.attr("data-css-previewid")){var o=e.attr("data-css-previewid");""!=o&&"none"!=o&&(this.previewItems.cs=o)}else this.requestItems[n]="cs",n++;if(e.data("fetch-rp-preroll")&&(this.requestItems.preroll=["rp","pv","ri"]),!c().isEmptyObject(this.requestItems)||!c().isEmptyObject(this.previewItems)){var r={s:window.gm.properties.site_id,path_no_tll:window.gm.properties.page_path_no_tll,pos:this.requestItems,preview:this.previewItems};window.gm.properties.hasOwnProperty("location_id")&&(r.loc=window.gm.properties.location_id),c().ajax({url:"//ads.aiir.net/pageads",cache:!1,dataType:"jsonp",data:r,success:function(e){return t.requestCallback(e)}})}}}},{key:"requestCallback",value:function(t){var e=this;if(t.ads){var o=[].concat((0,i.Z)(Object.values(this.requestItems)),(0,i.Z)(Object.keys(this.previewItems))),r={},a=!1,s={};o.forEach((function(i){if(t.ads[i]){var o=t.ads[i];switch(o.type){case"to":e.takeoverActive=!0,Promise.all([n.e(87),n.e(480)]).then(n.bind(n,831)).then((function(t){t.default.init(o)}));break;case"at":r[o.placement]={server:"adserver."+o.domain,network:o.network},o.hasOwnProperty("responsive")&&(r[o.placement].responsive=o.responsive);break;case"ga":a=!0;break;case"dc":o.tagid="adpos-"+i,s[i]=o}e.renderAd(i,o)}else"to"!==i&&"cs"!==i&&c()("#adpos-"+i).remove()})),c().isEmptyObject(r)||d.request(r),a&&h.request(),c().isEmptyObject(s)||p.request(s),c()(document).trigger("advertisingresponse",t.ads),c()(window.gm.advertising).trigger("response",t.ads)}}},{key:"renderAd",value:function(t,e){switch(e.type){case"im":c()("#adpos-"+t).html(e.html);break;case"ht":if(e.disableIframe){document.getElementById("adpos-"+t).innerHTML=e.html;break}var n=document.createElement("iframe");n.setAttribute("style","border:0;width:100%;height:"+e.height+"px;max-width:"+e.width+"px;"),n.setAttribute("scrolling","no"),n.setAttribute("allowtransparency","true"),document.getElementById("adpos-"+t).appendChild(n);var i=n.contentWindow||n.contentDocument;i.document&&(i=i.document);var o='<!doctype html>\n<html style="-webkit-text-size-adjust:none;">\n<head><meta charset="utf-8"></head>\n<body style="margin:0; padding:0; background:transparent; -webkit-touch-callout:none; -webkit-user-select:none;">\n'.concat(e.html,"\n</body></html>");i.open(),i.write(o),i.close();break;case"cs":var r=document.createElement("style");r.type="text/css",r.innerHTML=e.css,document.getElementsByTagName("head")[0].appendChild(r);break;case"fl":c()("#adpos-"+t).html('<div id="swfAd'+t+'">'+e.htmlad+"</div>"),c().ajax({dataType:"script",cache:!0,url:"//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js"}).done((function(){swfobject.embedSWF(e.swfurl,"swfAd"+t,e.width,e.height,"9.0.0",!1,{clickURL:e.clickurl},{wmode:"transparent"})}));break;case"at":c()("#adpos-"+t).html('<div id="'+e.placement+'"></div>');break;case"ga":document.getElementById("adpos-"+t).innerHTML=e.html}}}]),t}();(0,a.Z)(f,"requestItems",{}),(0,a.Z)(f,"previewItems",{}),(0,a.Z)(f,"takeoverActive",!1)},687:(t,e,n)=>{"use strict";var i=n(92),o=n(610),r=n(991),a=n(609),s=n.n(a),c=function(){function t(){(0,o.Z)(this,t)}return(0,r.Z)(t,null,[{key:"bind",value:function(t){var e=s()(".gm-photos:not([data-photo-album-initialised])",t||document);0!==e.length&&this.load().then((function(t){return t.bind(e)})).catch((function(t){return console.error(t)}))}},{key:"load",value:function(){return Promise.all([n.e(295),n.e(87),n.e(544)]).then(n.bind(n,93)).then((function(t){return t.default}))}},{key:"setAlbumImages",value:function(t,e){this.load().then((function(n){return n.setAlbumImages(t,e)})).catch((function(t){return console.error(t)}))}}]),t}(),l=function(){function t(){(0,o.Z)(this,t)}return(0,r.Z)(t,null,[{key:"bind",value:function(){s()("#iNav li h2 a").on("mouseover focus",(function(){s()(this).parent().parent().addClass("active")})).on("mouseout blur",(function(){s()(this).parent().parent().removeClass("active")})),s()("#iNav li div.subNav a").on("focus",(function(){s()(this).parent().parent().parent().parent().addClass("active")})).on("blur",(function(){s()(this).parent().parent().parent().parent().removeClass("active")})),s()("#iNav li div.subNav").on("mouseover",(function(){s()(this).parent().addClass("active")})).on("mouseout",(function(){s()(this).parent().removeClass("active")}))}}]),t}(),u=n(699),d=n(156),h={1:300,2:500,3:700,4:900,5:1100,6:1300,7:1500,8:1700},p=function(){function t(e){(0,o.Z)(this,t),(0,d.Z)(this,"$cont",void 0),(0,d.Z)(this,"$parent",void 0),(0,d.Z)(this,"parentWidth",0),(0,d.Z)(this,"imgHeight",null),(0,d.Z)(this,"fixNumPerRow",null),(0,d.Z)(this,"gridThreshold",600),(0,d.Z)(this,"mode",0),(0,d.Z)(this,"numPerRow",0),(0,d.Z)(this,"gridMode",!1),(0,d.Z)(this,"lazyLoad",!1),this.$cont=e,this.$parent=e.parent(),e.data("mode")&&(this.mode=e.data("mode")),e.data("lazy-load")&&(this.lazyLoad=e.data("lazy-load"),this.lazyLoad&&!t.pageLazyLoading&&(t.pageLazyLoading=!0,s()(window).on("scroll.scroll-secs",(function(){return t.scrollPage()})))),0!=this.mode&&2!=this.mode||(e.data("img-height")&&(this.imgHeight=e.data("img-height")),e.data("per-row")&&(this.fixNumPerRow=e.data("per-row")),e.data("grid-threshold")&&(this.gridThreshold=e.data("grid-threshold")),this.draw(),this.lazyLoad&&this.loadImages())}return(0,r.Z)(t,[{key:"draw",value:function(){if(this.parentWidth=this.$parent.width(),this.parentWidth>=this.gridThreshold&&0==this.mode||2==this.mode){this.gridMode||this.enterGridMode();var t=this.numPerRow;if(this.fixNumPerRow)this.numPerRow=this.fixNumPerRow;else for(var e=0,n=Object.entries(h);e<n.length;e++){var i=(0,u.Z)(n[e],2),o=i[0],r=i[1];if(this.numPerRow=o,this.parentWidth<r)break}this.numPerRow!=t&&(t&&this.$cont.removeClass("per-row-"+t).children("li").removeClass("first-in-row"),this.$cont.addClass("per-row-"+this.numPerRow),this.$cont.children("li:first-child").addClass("first-in-row"),this.$cont.children("li:nth-child("+this.numPerRow+"n+1)").addClass("first-in-row"),this.imgHeight&&this.$cont.find(".gm-sec-img").css("height",this.imgHeight))}else this.gridMode&&this.leaveGridMode()}},{key:"enterGridMode",value:function(){this.$cont.addClass("grid"),this.gridMode=!0}},{key:"leaveGridMode",value:function(){this.$cont.removeClass("grid per-row-"+this.numPerRow).children("li").removeClass("first-in-row"),this.$cont.find(".gm-sec-img").css("height","auto"),this.gridMode=!1,this.numPerRow=0}},{key:"loadImages",value:function(){var t=i.Z.$win.scrollTop(),e=t+i.Z.$win.height()+100;this.$cont.find(".gm-sec-img:not(.loaded-img)").each((function(){var n=s()(this),i=n.offset().top,o=i+n.outerHeight();(i<e&&i>=t||o>t&&o<e)&&(n.addClass("loaded-img"),n.data("src")&&n.attr("src",n.data("src")))}))}}],[{key:"bind",value:function(t){var e=this;s()(".gm-sec",t||document).each((function(t,n){var i=new e(s()(n));e.insts.push(i),i.$cont.data("sec-inst",i)})),i.Z.$win.on("resize.redraw-sec",(function(){return e.resize()}))}},{key:"resize",value:function(){this.insts.forEach((function(t){0!=t.mode&&2!=t.mode||t.draw()}))}},{key:"scrollPage",value:function(){var t=this;clearTimeout(this.scrollSettleTimer),this.scrollSettleTimer=setTimeout((function(){t.insts.forEach((function(t){t.lazyLoad&&t.loadImages()}))}),250)}}]),t}();(0,d.Z)(p,"insts",[]),(0,d.Z)(p,"pageLazyLoading",!1),(0,d.Z)(p,"scrollSettleTimer",null);var f=function(){function t(e){(0,o.Z)(this,t),(0,d.Z)(this,"$cont",void 0),(0,d.Z)(this,"$parent",void 0),(0,d.Z)(this,"parentWidth",0),(0,d.Z)(this,"fullThreshold",600),this.$cont=e,this.$parent=e.parent(),this.$cont.data("full-threshold")&&(this.fullThreshold=this.$cont.data("full-threshold")),this.draw(),this.$cont.find("li > span").on("click",(function(t){t.preventDefault();var e=s()(t.currentTarget).parent();e.hasClass("on")||e.addClass("on").siblings(".on").removeClass("on")}))}return(0,r.Z)(t,[{key:"draw",value:function(){this.parentWidth=this.$parent.width(),this.parentWidth>=this.fullThreshold?this.$cont.addClass("full-text"):this.$cont.removeClass("full-text")}}],[{key:"bind",value:function(t){var e=this;s()(".gm-tabs",t||document).each((function(t,n){var i=new e(s()(n));e.insts.push(i),i.$cont.data("tabs-inst",i)})),i.Z.$win.on("resize.redraw-tabs",(function(){return e.resize()}))}},{key:"resize",value:function(){this.insts.forEach((function(t){return t.draw()}))}}]),t}();(0,d.Z)(f,"insts",[]);var m=function(){function t(){(0,o.Z)(this,t)}return(0,r.Z)(t,null,[{key:"bind",value:function(){i.Z.touchSupport&&s()(".gm-actions").on("click",".dropdown > span",(function(){s()(this).parent().toggleClass("show")}))}}]),t}(),v=function(){function t(){(0,o.Z)(this,t)}return(0,r.Z)(t,null,[{key:"bind",value:function(t){var e=s()(".gm-form:not([data-form-initialised])",t||document);0!==e.length&&this.load().then((function(t){return t.bind(e)})).catch((function(t){return console.error(t)}))}},{key:"load",value:function(){return n.e(680).then(n.bind(n,150)).then((function(t){return t.default}))}},{key:"bindChecks",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.load().then((function(t){return t.bindChecks.apply(t,e)})).catch((function(t){return console.error(t)}))}},{key:"setLocalStrings",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.load().then((function(t){return t.setLocalStrings.apply(t,e)})).catch((function(t){return console.error(t)}))}}]),t}(),g=function(){function t(e){var n=this;(0,o.Z)(this,t),(0,d.Z)(this,"$coms",void 0),(0,d.Z)(this,"siteId",void 0),(0,d.Z)(this,"originSiteId",void 0),(0,d.Z)(this,"relCat",void 0),(0,d.Z)(this,"relId",void 0),(0,d.Z)(this,"$comsCont",void 0),(0,d.Z)(this,"$reportCont",void 0),(0,d.Z)(this,"$addComCont",void 0),(0,d.Z)(this,"$commentForm",void 0),(0,d.Z)(this,"$commentText",void 0),(0,d.Z)(this,"$commentCount",void 0),this.$coms=e,this.siteId=e.data("site-id"),this.originSiteId=e.data("origin-site-id"),this.relCat=e.data("rel-cat"),this.relId=e.data("rel-id"),this.$comsCont=e.find(".comments-cont"),this.$reportCont=e.find(".report-cont"),this.$addComCont=e.find(".add-comment-cont"),this.$commentForm=e.find(".comment-form"),this.$commentText=this.$commentForm.find('[name="comComment"]'),this.$commentCount=this.$commentForm.find(".comment-count"),e.on("click",".paginator a",(function(t){t.preventDefault();var e=s()(t.currentTarget).attr("href");return e=e.substring(1),s().get("/_comments",{originSiteId:n.originSiteId,relCat:n.relCat,relId:n.relId,pagenum:e},(function(t){n.$comsCont.html(t)}),"html"),!1})).on("click","a.report-comment",(function(t){t.preventDefault();var e=s()(t.currentTarget).closest(".comment-item").data("comid");return s().get("/_comments/report",{originSiteId:n.originSiteId,relCat:n.relCat,relId:n.relId,comId:e},(function(t){n.$reportCont.html(t),v.bind(".gm-comments .report-cont")}),"html"),!1})).on("validsubmit",".comment-form",(function(t){var e=s()(t.currentTarget).find(":input").serializeObject(),i=Object.assign({},e,{originSiteId:n.originSiteId,relCat:n.relCat,relId:n.relId});s().post("/_comments/add",i,(function(t){t.success?n.$addComCont.html(t.message):alert(t.message)}),"json")})).on("validsubmit",".report-form",(function(t){var e=s()(t.currentTarget).find(":input").serializeObject();console.dir(e);var i=Object.assign({},e,{originSiteId:n.originSiteId,relCat:n.relCat,relId:n.relId});s().post("/_comments/report/submit",i,(function(t){t.success?n.$reportCont.html(t.message):alert(t.message)}),"json")})).on("click",".cancel-report",(function(t){t.preventDefault(),n.$reportCont.html("")})),s().get("/_comments",{originSiteId:this.originSiteId,relCat:this.relCat,relId:this.relId,pagenum:"1"},(function(t){n.$comsCont.html(t)}),"html"),this.$commentText.length>0&&(this.updateCount(),this.$commentText.on("keyup",(function(){return n.updateCount()})))}return(0,r.Z)(t,[{key:"updateCount",value:function(){var t=450-this.$commentText.val().length;this.$commentCount.hasClass("safe")||this.$commentCount.hasClass("over")?t<0&&this.$commentCount.hasClass("safe")?this.$commentCount.removeClass("safe").addClass("over"):t>=0&&this.$commentCount.hasClass("over")&&this.$commentCount.removeClass("over").addClass("safe"):t<0?this.$commentCount.addClass("over"):this.$commentCount.addClass("safe"),this.$commentCount.text(t)}}],[{key:"bind",value:function(t){var e=this;s()(".gm-comments",t||document).each((function(t,n){var i=new e(s()(n));s()(n).data("inst",i)}))}}]),t}(),w=function(){function t(e){var n=this;(0,o.Z)(this,t),(0,d.Z)(this,"$cont",void 0),(0,d.Z)(this,"pollId",void 0),(0,d.Z)(this,"recaptchaWidgetId",null),(0,d.Z)(this,"sendVote",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e={id:n.pollId,vote:n.votedOption};t&&(e["g-recaptcha-response"]=t),s().post("/_poll_ajax",e,(function(t){n.$cont.html(t)}))})),this.$cont=e,this.pollId=e.data("id");var i=e.data("recaptcha-site-key"),r=e.data("recaptcha-version");if(s().get("/_poll_ajax",{id:this.pollId},(function(t){n.$cont.html(t)})),"v3"===r)s().getScript("https://www.google.com/recaptcha/api.js?render=".concat(i));else if("v2-invisible"===r){var a=s()('<div class="g-recaptcha" />');this.$cont.after(a);var c=a.get(0),l="recaptcha_onload_callback_poll_".concat(this.pollId);window[l]=function(){n.recaptchaWidgetId=window.grecaptcha.render(c,{sitekey:i,size:"invisible",callback:function(t){return n.sendVote(t)}})},s().getScript("https://www.google.com/recaptcha/api.js?render=explicit&onload=".concat(l))}e.on("click",".poll-option a",(function(t){t.preventDefault(),n.votedOption=s()(t.currentTarget).data("opt"),"v3"!==r?"v2-invisible"!==r||null===n.recaptchaWidgetId?n.sendVote():window.grecaptcha.execute(n.recaptchaWidgetId):window.grecaptcha.ready((function(){window.grecaptcha.execute(i,{action:"submit"}).then((function(t){n.sendVote(t)}))}))}))}return(0,r.Z)(t,null,[{key:"bind",value:function(t){var e=this;s()(".gm-poll, .aiir-poll",t||document).each((function(t,n){var i=new e(s()(n));e.insts.push(i),i.$cont.data("poll-inst",i)}))}}]),t}();(0,d.Z)(w,"insts",[]);var b=n(484),y=function(){function t(){(0,o.Z)(this,t)}return(0,r.Z)(t,null,[{key:"bind",value:function(){var t=this,e=s()(".preview-button");0!==e.length&&e.on("click",(function(e){e.preventDefault(),t.setup();var n=s()(e.currentTarget);n.hasClass("playing")?t.stop(n):t.play(n)}))}},{key:"setup",value:function(){0===s()(".preview-player").length&&(s()("body").append('<div class="preview-player"></div>'),this.$previewPlayer=s()(".preview-player"))}},{key:"play",value:function(t){var e=this;this.stop(s()(".preview-button.playing"));var n=new Audio("");n.id="preview-player",n.src=t.attr("href"),n.preload=!0,n.addEventListener("ended",(function(){e.stop(s()(".preview-button.playing"))})),n.play(),this.$previewPlayer.html(n).addClass("playing"),t.addClass("playing")}},{key:"stop",value:function(t){if(!this.$previewPlayer.hasClass("playing"))return!1;var e=this.$previewPlayer.children("audio");"object"===(0,b.Z)(e)&&(e[0].pause(),t.removeClass("playing"),this.$previewPlayer.removeClass("playing"))}}]),t}();(0,d.Z)(y,"$previewPlayer",void 0);var k=function(){function t(){(0,o.Z)(this,t)}return(0,r.Z)(t,null,[{key:"bind",value:function(){var t=s()(".js-event-dates"),e=s()(".event-dates.extra-event-dates");0!==t.length&&t.on("click",(function(t){t.preventDefault(),e.slideToggle()}))}}]),t}(),Z=n(808),C=n.n(Z),$=n(609),I=function(){function t(){(0,o.Z)(this,t)}return(0,r.Z)(t,null,[{key:"setOpts",value:function(t){this.opts=t}},{key:"bind",value:function(){if(this.opts.enabled&&!C().get("cookie_policy")){C().set("cookie_policy","1",{expires:365,domain:this.opts.domain});var t=$('<div class="afe-cookie-banner"></div>');t.append("".concat(this.opts.text,' <a href="').concat(this.opts.url,'">').concat(this.opts.btn,"</a>"));var e=$('<button type="button" class="afe-cookie-banner__btn">'.concat(this.opts.dismiss,"</button>"));t.append(e),e.on("click",(function(){t.fadeOut(200,(function(){t.remove()}))})),$("body").append(t)}}}]),t}();(0,d.Z)(I,"opts",{enabled:!1});var S=n(609),j=function(){function t(){(0,o.Z)(this,t)}return(0,r.Z)(t,null,[{key:"bind",value:function(t){var e=this;S(".js-share-twitter-dialog",t||document).on("click",(function(t){var n=S(t.currentTarget).attr("href");return e.openSocialDialog(n,550,300),!1})),S(".js-share-facebook-dialog",t||document).on("click",(function(t){var n=S(t.currentTarget).attr("href");return e.openSocialDialog(n,550,250),!1})),S(".js-share-facebook-send-dialog",t||document).on("click",(function(t){var n=S(t.currentTarget).attr("href");return e.openSocialDialog(n,645,580),!1}))}},{key:"openSocialDialog",value:function(t,e,n){window.open(t,"_blank","toolbar=yes,scrollbars=yes,resizable=no,fullscreen=no,top=50,left=50,width="+e+",height="+n)}}]),t}(),T=n(329),x=function(){function t(){(0,o.Z)(this,t)}return(0,r.Z)(t,null,[{key:"bind",value:function(t){s()(".aiir-media-player",t||document).each((function(t,e){var n=s()(e),i=n.find("video")[0],o=n.find("audio")[0],r=i||o,a=["playpause","current","duration","volume","audioposter","podcastrequest"];!0===n.data("disable-scrubbing")||(a=[].concat((0,T.Z)(a),["skipback","jumpforward","progress"])),new window.MediaElementPlayer(r,{stretching:"responsive",jumpForwardInterval:20,skipBackInterval:20,alwaysShowControls:!0,features:a,pluginPath:"../build/",success:function(t){}})}))}}]),t}(),A=function(){function t(){(0,o.Z)(this,t)}return(0,r.Z)(t,null,[{key:"bind",value:function(t){if(0!==s()(".aiir-podcasts",t||document).length){var e=this.getOS();s()(".js-podcast-sub-opt:not(.js-podcast-sub-opt--"+e+")").hide()}}},{key:"getOS",value:function(){var t=navigator.userAgent;return/android/i.test(t)?"android":/iPad|iPhone|iPod/.test(t)?"ios":"desktop"}}]),t}(),_=function(){function t(e){var n=this;(0,o.Z)(this,t),(0,d.Z)(this,"$el",void 0),(0,d.Z)(this,"limit",void 0),(0,d.Z)(this,"criticalThreshold",void 0),(0,d.Z)(this,"$countCont",void 0),this.$el=s()(e),this.limit=this.$el.data("afe-character-limit"),this.criticalThreshold=.1*this.limit,this.criticalThreshold>20&&(this.criticalThreshold=20),this.criticalThreshold<5&&(this.criticalThreshold=5),this.$countCont=s()('<div class="afe-character-count" />'),this.$el.after(this.$countCont),this.$el.on("keyup",(function(){var t=n.$el.val(),e=t.length;e>=n.limit?(n.$el.val(t.substring(0,n.limit)),n.updateInformativeText(0)):n.updateInformativeText(n.limit-e)}));var i=this.limit-this.$el.val().length;this.updateInformativeText(i)}return(0,r.Z)(t,[{key:"updateInformativeText",value:function(t){this.$countCont.text(t),t<=this.criticalThreshold?this.$countCont.addClass("is-critical"):this.$countCont.removeClass("is-critical")}}],[{key:"bind",value:function(t){var e=this;s()("[data-afe-character-limit]",t||document).each((function(t,n){new e(n)}))}}]),t}(),E=function(){function t(){(0,o.Z)(this,t)}return(0,r.Z)(t,null,[{key:"setupGlobals",value:function(){window.AFE.Photos={setAlbumImages:function(){return c.setAlbumImages.apply(c,arguments)}},window.AFE.Form={bindChecks:function(){return v.bindChecks.apply(v,arguments)},setLocalStrings:function(){return v.setLocalStrings.apply(v,arguments)}},window.AFE.CookieBanner={setOpts:function(){return I.setOpts.apply(I,arguments)}}}},{key:"init",value:function(){c.bind(),l.bind(),p.bind(),f.bind(),m.bind(),v.bind(),g.bind(),w.bind(),y.bind(),k.bind(),I.bind(),j.bind(),x.bind(),A.bind(),_.bind()}}]),t}(),O=n(887);function P(t,e){FB.getLoginStatus((function(n){if("connected"==n.status){var i=t+"?access_token="+n.authResponse.accessToken+"&expires="+n.authResponse.expiresIn+"&fbuid="+n.authResponse.userID;void 0!==e&&(i+="&redirect="+e),window.location.href=i}}))}window.RecaptchaOptions={theme:"clean"},window.gm=window.gm||{},window.AFE=window.AFE||{},E.setupGlobals(),i.Z.setupGlobals(),document.addEventListener("DOMContentLoaded",(function(){window.gm.fblogin={checkLoginState:P},window.AFE.fblogin={checkLoginState:P},s()("[data-popup-size]").on("click",(function(){var t=s()(this).attr("data-popup-size");if(!t)return!0;var e=s()(this).attr("href"),n=t.split("x"),i=(0,u.Z)(n,2),o=i[0],r=i[1];return window.open(e,"aiir_popup","toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=".concat(o,",height=").concat(r,",left=50,top=50")),!1})),s()(".js-launch-live-player").on("click",(function(){return window.open(this.href,"aiir_live_player","toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=800,height=560,left=50,top=50"),!1})),s()(".js-launch-radioplayer, a.rpLaunch").on("click",(function(){var t,e,n,i,o=380,r=700,a=null===(t=window)||void 0===t||null===(e=t.gm)||void 0===e||null===(n=e.properties)||void 0===n||null===(i=n.radioplayer)||void 0===i?void 0:i.window_size;return a&&2===a.length&&(o=a[0],r=a[1]),window.open(this.href,"aiir_radioplayer","toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=".concat(o,",height=").concat(r,",left=50,top=50")),!1})),s().fn.serializeObject=function(){var t={},e=this.serializeArray();return s().each(e,(function(){void 0!==t[this.name]?(t[this.name].push||(t[this.name]=[t[this.name]]),t[this.name].push(this.value||"")):t[this.name]=this.value||""})),t},i.Z.init(),E.init(),O.Z.init()}))},808:(t,e,n)=>{var i,o,r;void 0===(o="function"==typeof(i=r=function(){function t(){for(var t=0,e={};t<arguments.length;t++){var n=arguments[t];for(var i in n)e[i]=n[i]}return e}function e(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(i){function o(){}function r(e,n,r){if("undefined"!=typeof document){"number"==typeof(r=t({path:"/"},o.defaults,r)).expires&&(r.expires=new Date(1*new Date+864e5*r.expires)),r.expires=r.expires?r.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(t){}n=i.write?i.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var s="";for(var c in r)r[c]&&(s+="; "+c,!0!==r[c]&&(s+="="+r[c].split(";")[0]));return document.cookie=e+"="+n+s}}function a(t,n){if("undefined"!=typeof document){for(var o={},r=document.cookie?document.cookie.split("; "):[],a=0;a<r.length;a++){var s=r[a].split("="),c=s.slice(1).join("=");n||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var l=e(s[0]);if(c=(i.read||i)(c,l)||e(c),n)try{c=JSON.parse(c)}catch(t){}if(o[l]=c,t===l)break}catch(t){}}return t?o[t]:o}}return o.set=r,o.get=function(t){return a(t,!1)},o.getJSON=function(t){return a(t,!0)},o.remove=function(e,n){r(e,"",t(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))})?i.call(e,n,e,t):i)||(t.exports=o),t.exports=r()},609:t=>{"use strict";t.exports=jQuery}},t=>{"use strict";t(t.s=687)}]);
//# sourceMappingURL=afe.36641c4d0e34013cd762.js.map