!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/static/build/",t(t.s="Rn5G")}({"/nAu":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.validEmail=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}},"0FpB":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=!1,i=null,a=null,r=!1,s=function(){return window.matchMedia("(max-width:768px)").matches},l=function(){var e=$("#editor-carousel .editor-carousel__container");e.animate({left:"-100%"},1e3,function(){o=!1;var n=$(e.children()[0]),t=n.clone();n.remove(),e.css("left","0"),e.append(t)})},d=function(){var e=$("#editor-carousel .editor-carousel__click--circle");e.animate({height:"100%",width:"100%",opacity:0},300,"swing",function(){e.css({height:0,width:0,opacity:1})})},c=function(){null===i&&(d(),l(),i=setInterval(function(){o||(o=!0,d(),l())},2e3))},u=function(){var e=$("#editor-carousel");if(!e.length)return!1;var n=$(window).scrollTop(),t=e.offset().top;return n+.5*a>t},f=function e(){u()&&(c(),$(window).off("scroll",e),r=!1)};n.default=function(){$("#editor-carousel").length&&($(window).on("resize orientationchange",function(){a=$(window).height(),s()?(clearInterval(i),i=null,$(window).off("scroll",f),r=!1):u()?(c(),$(window).off("scroll",f),r=!1):r||(r=!0,$(window).on("scroll",f))}),s()||(a=$(window).height(),u()?c():(r=!0,$(window).on("scroll",f))))}},"1/6i":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(t("ygKY")),i=t("/nAu"),a=t("ZwUd");n.default=function(){$(".subscribe-email").keyup(function(e){var n=$(e.target).closest(".subscribe-container");n.find(".subscribe-error").addClass("d-none"),n.find(".subscribe-success").addClass("d-none")}),$(".subscribe-button").click(function(e){var n=$(e.target).closest(".subscribe-container"),t=n.find(".subscribe-error"),o=n.find(".subscribe-success");t.addClass("d-none"),o.addClass("d-none");var a=n.find(".subscribe-email").val();(0,i.validEmail)(a)?$.post("/maillist/subscribe",{email:a},function(e){e.status?o.removeClass("d-none"):e.error&&t.html(e.error).removeClass("d-none")}):t.html("The email is not valid.").removeClass("d-none")}),o.default.init(),(0,a.isMobile)()?o.default.show(45):o.default.showOnBlur(25)}},"7rg0":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],o=!0,i=!1,a=void 0;try{for(var r,s=e[Symbol.iterator]();!(o=(r=s.next()).done)&&(t.push(r.value),!n||t.length!==n);o=!0);}catch(e){i=!0,a=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw a}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();n.gaEvent=function(e,n,t){if(window.ga&&window.ga.loaded){var i=window.ga.getAll(),a=o(i,1),r=a[0];r.send("event",e,n,t)}}},"Dap/":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.convertSecondsToMiliseconds=function(e){return 1e3*parseInt(e||0,10)}},Rn5G:function(e,n,t){"use strict";var o=c(t("n1e/")),i=c(t("bNJE")),a=c(t("1/6i")),r=c(t("SLjL")),s=c(t("0FpB")),l=c(t("zQ0m")),d=c(t("fwda"));function c(e){return e&&e.__esModule?e:{default:e}}$(document).ready(function(){(0,o.default)(),(0,i.default)(),(0,a.default)(),(0,r.default)(),(0,s.default)(),(0,l.default)(),(0,d.default)()})},SLjL:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(t("kqWQ"));var i=window.ANIMATION_TIME||750,a=window.AUTOPLAY_INTERVAL_TIME||5e3,r=!1,s=null,l=null,d=!1,c=function(e){if(void 0!==window.components_previews[e]){var n=window.components_previews[e];n.length>1?r=!0:(r=!1,null!==l&&clearInterval(l)),s=2!==n.length?100/n.length:100/3;var t="";n.forEach(function(e){t+=o.default.getCarouselItem(e,s)}),2===n.length&&(t+=o.default.getCarouselItem(n[0],s));var i=$("#components-carousel__inner");i.css({width:100*n.length+"%",transition:"",transform:r?"translateX(-"+s+"%)":""}),i.html(t)}},u=function(e,n){d=!0;var t=$("#components-carousel__inner");t.css("transition",i+"ms"),t.css("transform","translateX("+e+"%)"),setTimeout(function(){t.css("transition",""),n(),d=!1},i)},f=function(){u(-2*s,function(){var e=$("#components-carousel__inner"),n=e.children()[0],t=$(n).clone();n.remove(),e.append(t),e.css("transform","translateX(-"+s+"%)")})},v=function(){null!==l&&(clearInterval(l),l=null),r&&(l=setInterval(f,a))};n.default=function(){0!==$("#components-carousel-list").length&&(c("team"),v(),$("#components-carousel-list").change(function(e){var n=$(e.currentTarget).val();c(n),v()}),$("#components-carousel__next").click(function(e){e.preventDefault(),!d&&r&&(f(),v())}),$("#components-carousel__prev").click(function(e){e.preventDefault(),!d&&r&&(u(0,function(){var e=$("#components-carousel__inner"),n=e.children(),t=n[n.length-1],o=$(t).clone();t.remove(),e.prepend(o),e.css("transform","translateX(-"+s+"%)")}),v())}))}},ZwUd:function(e,n,t){"use strict";function o(){return/iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent)}Object.defineProperty(n,"__esModule",{value:!0}),n.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(window.navigator.userAgent)},n.isMobile=o,n.isAndroid=function(){return/Android/i.test(window.navigator.userAgent)},n.prepareMobileInterface=function(){if(o()){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")}}},bNJE:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("7rg0"),i=function(e){return e&&e.__esModule?e:{default:e}}(t("ygKY"));n.default=function(){if($("#payment-status-check").length){var e=$("#payment-status-check").data("checkout-sid");setInterval(function(){$.post("/payment_s/state",{checkout_sid:e},function(n){n.status&&(window.top.location="/login?checkout_sid="+e)})},4e3)}$(".buy-license").click(function(e){if(e.preventDefault(),i.default.blockNewsletter(),!$(e.currentTarget).hasClass("disabled")){var n=$("#terms-accept");if(!n.is(":checked"))return n.next("label").addClass("error"),n.parents(".field").find(".help.is-danger").removeClass("is-hidden"),void n.parents(".terms-container").find(".help").removeClass("hidden");n.next("label").removeClass("error"),n.parents(".field").find(".help.is-danger").addClass("is-hidden"),n.parents(".terms-container").find(".help").addClass("hidden");var t=$(".purchase__methods a.active").attr("data-method");t||(t="paypal");var a={email:$("#account-email").val(),password:$("#account-password").val(),terms:!0,billing:$("#billing-type input:checked").val(),reactivate:$("#account-reactivate").length};$(e.currentTarget).addClass("disabled").attr("disabled","disabled").addClass("opacity-50 cursor-not-allowed").find("img").removeClass("d-none").removeClass("is-hidden").removeClass("hidden");var r=null;r="paypal"===t?"lifetime"===a.billing?"/payment/init":"/subscription/init":"/payment_s/init",$.post(r,a,function(n){var i=!1;n.status&&(n.redirect||n.checkout_sid)?(i=!0,$("#modal-purchase").length?(0,o.gaEvent)("account","created","payment_editor"):(0,o.gaEvent)("account","created","payment_landing"),"paypal"===t?($("body").addClass("body--paypal-redirect"),window.top.location.href=n.redirect):Stripe(window.stripe_publishable_key).redirectToCheckout({sessionId:n.checkout_sid})):n.error&&function(e){var n=$("#account-form"),t=n.find(".form-group").eq(0);t.find(".alert").remove(),t.prepend('<div class="alert alert-danger">'+e+"</div>");var o=n.find(".card-content");o.find(".notification").remove(),$('<div class="notification is-danger">'+e+"</div>").insertBefore(o.find(".field").eq(0));var i=n.find(".alert-tailwind");i.empty(),i.html('<div class="px-4 py-3 text-red-700 font-semibold bg-red-100 border border-red-700 rounded mb-8">'+e+"</div>"),n.offset().top+20<$(window).scrollTop()&&$("html,body").animate({scrollTop:n.offset().top},750)}(n.error),i&&"paypal"!==t||$(e.currentTarget).removeClass("disabled").removeAttr("disabled").removeClass("opacity-50 cursor-not-allowed").find("img").addClass("d-none").addClass("is-hidden").addClass("hidden")})}}),$("#billing-type input").change(function(e){var n=$(e.currentTarget).val();"lifetime"===n?($(".copy-monthly").addClass("d-none").addClass("is-hidden").addClass("hidden").removeClass("btn-block"),$(".copy-lifetime").removeClass("d-none").removeClass("is-hidden").removeClass("hidden").addClass("btn-block"),$(".bonus-monthly").addClass("d-none").addClass("is-hidden").addClass("hidden"),$(".bonus-lifetime").removeClass("d-none").removeClass("is-hidden").removeClass("hidden")):"monthly"===n&&($(".copy-lifetime").addClass("d-none").addClass("is-hidden").addClass("hidden").removeClass("btn-block"),$(".copy-monthly").removeClass("d-none").removeClass("is-hidden").removeClass("hidden").addClass("btn-block"),$(".bonus-lifetime").addClass("d-none").addClass("is-hidden").addClass("hidden"),$(".bonus-monthly").removeClass("d-none").removeClass("is-hidden").removeClass("hidden"))}),$(".purchase__methods a").click(function(e){e.preventDefault(),$(".purchase__methods a").removeClass("active"),$(e.currentTarget).addClass("active")}),$("#payment-declined").on("click",".cancel-subscription",function(e){if(e.preventDefault(),window.confirm("Are you sure you want to revoke your subscription?")){var n=$(e.currentTarget).data("subscription-id");$.post("/payment_s/cancel",{subscription_id:n},function(e){e.status?alert("Your subscription has been canceled."):e.error&&alert(e.error)})}})}},fwda:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("7rg0");n.default=function(){$(".track-click").click(function(e){var n=$(e.currentTarget).data("label");(0,o.gaEvent)("editor","click",n)}),$(".outbound-link").click(function(e){var n=$(e.currentTarget).data("link");(0,o.gaEvent)("Outbound","click",n)}),$(".outbound-timeout-link").click(function(e){e.preventDefault();var n=$(e.currentTarget).data("link");(0,o.gaEvent)("Outbound","click",n),setTimeout(function(){window.top.location.href=$(e.currentTarget).attr("href")},250)})}},kqWQ:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default={getCarouselItem:function(e,n){return'\n        <div class="components-carousel--item" style="width: '+n+'%">\n            <div class="components-carousel--container">\n                <div class="components-carousel--container--img">\n                    <img class="components-carousel--shadow" src="'+e.preview+'" />\n                </div>\n            </div>\n        </div>'}}},mUD3:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getCookie=function(e){if(""!==document.cookie)for(var n=document.cookie.split(/; */),t=0;t<n.length;t+=1){var o=n[t].split("="),i=o[0],a=o[1];if(i===decodeURIComponent(e))return decodeURIComponent(a)}return null},n.setCookie=function(e,n,t,o,i,a){if(window.navigator.cookieEnabled){var r=encodeURIComponent(e),s=encodeURIComponent(n),l=r+"="+s;if("number"==typeof t){var d=new Date;d.setTime(d.getTime()+24*t*60*60*1e3),l+="; expires="+d.toGMTString()}o&&(l+="; path="+o),i&&(l+="; domain="+i),a&&(l+="; secure"),document.cookie=l}}},"n1e/":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default=function(){$("a[data-section]").click(function(e){var n=$(e.currentTarget).attr("data-section"),t=$("#"+n);t.length&&(e.preventDefault(),$("html,body").animate({scrollTop:t.offset().top-80},750),window.history.pushState?window.history.pushState(null,null,e.target.href):window.location.hash=n)}),$("#bs-menu-toogle a.nav-link:not(.nav-link-external)").click(function(){$("#bs-menu-nav .navbar-toggler").click()}),$(document).on("click touchstart",function(e){if(window.matchMedia("(max-width:768px)").matches){var n=$("#bs-menu-nav"),t=n.find("#bs-menu-toogle"),o=n.find(".navbar-toggler");t&&o&&t.hasClass("show")&&0===$(e.target).closest(n).length&&o.click()}}),$(".navbar-burger").click(function(){$(".navbar-burger").toggleClass("is-active"),$(".navbar-menu").toggleClass("is-active")}),$("#bulma-navbar-menu a.navbar-item:not(.nav-link-external)").click(function(){setTimeout(function(){$(".navbar-burger").toggleClass("is-active"),$(".navbar-menu").toggleClass("is-active")},200)}),$(".tailwind-burger").click(function(){$("nav").find(".submenu").toggleClass("hidden")}),$(".submenu a:not(.nav-link-external)").click(function(){setTimeout(function(){$("nav").find(".submenu").toggleClass("hidden")},200)});var e=null,n=!1;$(".tailwind-menu").length&&$(window).scroll(function(){e||(e=$(".tailwind-menu").eq(0)),window.scrollY>0&&!n?(e.removeClass("lg:shadow-none"),n=!0):0===window.scrollY&&n&&(e.addClass("lg:shadow-none"),n=!1)}),""!==window.location.search.hash&&$("html,body").animate({scrollTop:$(window).scrollTop()-80},0)}},ygKY:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("mUD3"),i=t("7rg0"),a=t("Dap/"),r=t("ZwUd"),s={container:null,init:function(){s.container=$("#bs-modal--newsletter")},blockNewsletter:function(){window.SHOW_NEWSLETTER=!1},shouldShow:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=window.SHOW_NEWSLETTER||!1;return!!(e||n&&!(0,o.getCookie)("seen_nltr"))},showOnBlur:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(s.shouldShow(n)){var t=(0,a.convertSecondsToMiliseconds)(e);setTimeout(function(){s.shouldShow(n)&&($(window).one("blur",function(){s.show(0,n)}),$(document).one("mouseleave",function(){s.show(0,n)}))},t)}},show:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(s.shouldShow(n)){var t=(0,a.convertSecondsToMiliseconds)(e);setTimeout(function(){s.shouldShow(n)&&((0,r.isAndroid)()&&s.container.find(".modal-content").addClass("rounded-0"),s.container.modal("show"),(0,i.gaEvent)("newsletter","show","react"),(0,o.setCookie)("seen_nltr",!0,30,"/"))},t)}}};n.default=s},zQ0m:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=null;n.default=function(){$("#search-bs-class").keyup(function(e){clearTimeout(o),o=setTimeout(function(){var n=$(e.currentTarget).val().toLowerCase().replace(".",""),t=n.length>0?"?search="+n:"",o=""+window.location.origin+window.location.pathname+t;if(window.history.pushState({},"",o),n.length<1)return $("#bs-classes .d-none").removeClass("d-none"),void $("#bs-classes .is-hidden").removeClass("is-hidden");$("#bs-classes a").each(function(e,t){if(-1===$(t).text().toLowerCase().indexOf(n)){$(t).addClass("d-none").addClass("is-hidden"),0===$(t).parent().children(":visible").length&&$(t).parent().parent().addClass("d-none");var o=$(t).parents(".card");0===o.find("a:visible").length&&o.addClass("is-hidden")}else $(t).parent().parent().removeClass("d-none"),$(t).removeClass("d-none").removeClass("is-hidden"),$(t).parents(".card").removeClass("is-hidden")})},250)}),$("#bs-classes .card .list-group").each(function(e,n){0===$(n).children(":visible").length&&$(n).parent().addClass("d-none")}),$("#bs-classes .menu-list").each(function(e,n){0===$(n).find("a:visible").length&&$(n).parents(".card").addClass("is-hidden")}),$(".bs-classes-copy").click(function(e){var n=$(e.currentTarget).parent().parent().find("code").text(),t=$('<textarea class="clipboard-input"></textarea>');$("body").append(t),t.text(n).select();var o=void 0;try{o=document.execCommand("copy")}catch(e){o=!1}o&&$(e.currentTarget).tooltip("enable").tooltip("show").tooltip("disable"),t.remove()})}}});