(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{124:function(e,t,i){},82:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return Z})),i.d(t,"metadata",(function(){return ee})),i.d(t,"rightToc",(function(){return te})),i.d(t,"default",(function(){return ne}));var n=i(2),s=i(6),a=i(0),r=i.n(a),c=i(83);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function l(e,t){void 0===t&&(t=[]),Array.isArray(t)||(t=[t]),t.forEach((function(t){return!e.classList.contains(t)&&e.classList.add(t)}))}function d(e,t){void 0===t&&(t=[]),Array.isArray(t)||(t=[t]),t.forEach((function(t){return e.classList.contains(t)&&e.classList.remove(t)}))}function u(e,t,i,n){e.addEventListener(t,i,n)}function b(e,t,i){e.removeEventListener(t,i)}function p(e,t,i){return void 0===i&&(i=""),e.setAttribute(t,i),e}function m(e,t,i){return Object.keys(t).forEach((function(i){e.style[i]=t[i]})),i&&getComputedStyle(e),e}function f(e,t){if(t.lazyload){var i=t.lazyload,n={load:function(t){var n=e.env.element.$list[t];if(n){var s=[].slice.call(n.getElementsByClassName(i.elementClass)),a=[].slice.call(n.getElementsByClassName(i.preloaderClass));s.forEach((function(e){if(e.hasAttribute("data-src")){var t=e.getAttribute("data-src");l(e,[i.loadingClass]),d(e,[i.loadedClass]),e.src=t,e.onload=function(){return r(e)},e.onerror=function(){return r(e)}}}))}function r(e){e.removeAttribute("data-src"),l(e,[i.loadedClass]),d(e,[i.loadingClass]),e.onload=null,e.onerror=null,e.isLoaded=!0,s.every((function(e){return e.isLoaded}))&&a.forEach((function(e){e.parentElement.removeChild(e)}))}},loadRange:function(e,t){if(n.load(e),i.loadPrevNext&&t>=1)for(var s=1;s<=t;s++)n.load(e+s),n.load(e-s)}};e.on("before-init",(function(){t.lazyload=o({loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"},t.lazyload)})),i.loadOnTransitionStart?e.on("before-slide",(function(e,t,s){n.loadRange(s,i.loadPrevNextAmount)})):e.on("after-slide",(function(e){n.loadRange(e,i.loadPrevNextAmount)})),e.on("after-destroy",(function(){e.lazyload&&delete e.lazyload}))}}function g(e,t){var i={$pageList:[],$pagination:null};e.on("before-init",(function(){t.pagination&&(t.pagination=Object.assign({clickable:!1,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},t.pagination))})),e.on("after-init",(function(){if(t.pagination){var n=t.pagination,s=n.bulletClass,a=n.bulletActiveClass,r=e.env.element.$list,c="string"==typeof t.pagination.el?document.body.querySelector(t.pagination.el):t.pagination.el,o=[],d=document.createDocumentFragment(),u=r.length-Math.ceil(t.slidesPerView)+1;t.excludeElements.push(c),i.$pagination=c,i.$pageList=o;for(var b=0;b<u;b++){var p=document.createElement("div");l(p,b===e.state.index?[s,a]:s),o.push(p),d.appendChild(p)}c.appendChild(d),t.pagination.clickable&&c.addEventListener("click",(function(t){e.slideTo(o.indexOf(t.target)),t.stopPropagation()}))}})),e.on("after-destroy",(function(){t.pagination&&(i.$pagination.innerHTML="",i.$pageList=[],i.$pagination=null)})),e.on("after-slide",(function(e){var n=t.pagination.bulletActiveClass;i.$pageList&&i.$pageList.forEach((function(t,i){i===e?l(t,n):d(t,n)}))}))}var h="ArrowUp",v="ArrowRight",w="ArrowDown",O="ArrowLeft";function j(e){if(!e)return!1;var t=getComputedStyle(e);return!("hidden"===t.visibility||"none"===t.display)&&(!e.parentElement||1!==e.parentElement.nodeType||j(e.parentElement))}function y(e){var t=j(e),i=e.getBoundingClientRect();return i.top>=0&&i.bottom<=window.innerHeight&&i.left>=0&&i.right<=window.innerWidth&&t}function N(e,t){if(t.keyboard){var i=t.keyboard,n={enable:function(){i.enabled=!0},disable:function(){i.enabled=!1},onKeyDown:function(n){var s=n.key;i.onlyInViewport&&!y(e.env.element.$el)||!i.enabled||(t.isHorizontal?s===O?e.slideTo(e.state.index-1):s===v&&e.slideTo(e.state.index+1):s===w?e.slideTo(e.state.index-1):s===h&&e.slideTo(e.state.index+1))}};e.on("before-init",(function(){t.keyboard=o({enabled:!0,onlyInViewport:!0},t.keyboard),e.keyboard=n,u(window,"keydown",n.onKeyDown)})),e.on("after-destroy",(function(){n&&(b(window,"keydown",n.onKeyDown),delete e.keyboard)}))}}function x(e,t){var i={$el:null},n={wheeling:!1,wheelDelta:0,wheelingTimer:0},s=function(i){var s=t.isHorizontal?i.deltaX:i.deltaY,a=e.state.index;(Math.abs(s)-Math.abs(n.wheelDelta)>0||!n.wheeling)&&Math.abs(s)>=t.mousewheel.sensitivity&&e.slideTo(s>0?a-1:a+1),n.wheelDelta=s,clearTimeout(n.wheelingTimer),n.wheeling=!0,n.wheelingTimer=setTimeout((function(){n.wheeling=!1,n.wheelDelta=0,n.wheelingTimer=0}),t.mousewheel.interval),i.preventDefault(),i.stopPropagation()};e.on("before-init",(function(){t.mousewheel&&(t.mousewheel=Object.assign({invert:!1,sensitivity:1,interval:400},t.mousewheel))})),e.on("after-init",(function(){if(t.mousewheel){var n=e.env.element.$el;i.$el=n,u(n,"wheel",s)}})),e.on("after-destroy",(function(){t.mousewheel&&(delete i.$el,b(i.$el,"wheel",s))}))}var S={direction:"horizontal",touchRatio:1,touchAngle:45,longSwipesRatio:.5,initialSlide:0,loop:!1,freeMode:!1,mousewheel:!1,passiveListeners:!0,resistance:!0,resistanceRatio:.85,speed:300,longSwipesMs:300,spaceBetween:0,slidesPerView:1,centeredSlides:!1,slidePrevClass:"swiper-slide-prev",slideNextClass:"swiper-slide-next",slideActiveClass:"swiper-slide-active",slideClass:"swiper-slide",wrapperClass:"swiper-wrapper",touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchMoveStopPropagation:!1,excludeElements:[],injections:{translate:function(e,t,i,n){m(t.element.$wrapper,{transition:e.isStart?"none":"transform ease "+n+"ms",transform:i.isHorizontal?"translate3d("+e.transforms+"px, 0, 0)":"translate3d(0, "+e.transforms+"px, 0)"})}}};var C="before-init",z="after-init",T="before-slide",D="scroll",E="after-slide",P="before-destroy",k="after-destroy";var A=180/Math.PI;function M(){var e=[];return{getDuration:function(){var t=e[0],i=e[e.length-1];return t?i.time-t.time:0},getOffset:function(){var t=e[0],i=e[e.length-1];return t?{x:i.x-t.x,y:i.y-t.y}:{x:0,y:0}},getLogs:function(){return e},vector:function(){return function(e,t){var i=e[t],n=e[t-1]||i,s={x:i.x-n.x,y:i.y-n.y},a=i.time-n.time,r=s.x/a||0,c=s.y/a||0;return o({},s,{angle:Math.atan2(Math.abs(s.y),Math.abs(s.x))*A,velocityX:r,velocityY:c})}(e,e.length-1)},clear:function(){e=[]},push:function(t){e.push(o({time:Date.now()},t))}}}function $(){return performance?performance.now():Date.now()}function I(){var e,t,i,n,s=(i=requestAnimationFrame||webkitRequestAnimationFrame||setTimeout,n=cancelAnimationFrame||webkitCancelAnimationFrame||clearTimeout,{run:function(n){e=void 0===e?$():e,t=i((function(){var t=$(),i=t-e;e=t,n(i)}))},stop:function(){e=void 0,n(t)}});return{run:function e(t){s.run((function(i){e(t),t(i)}))},stop:function(){s.stop()}}}function L(e,t){var i=e.tracker,n=t.initStatus;i.clear(),n()}function H(e,t,i,n){var s=e.touchable,a=["INPUT","SELECT","OPTION","TEXTAREA","BUTTON","VIDEO"],r=function(e,t,i,n){var s=n.initLayout,a=n.initStatus,r=n.render,c=n.scrollPixel,o=n.slideTo,l=n.getOffsetSteps,d=I();return{preheat:function(e,t){var n=i.tracker;d.stop(),n.clear(),n.push(e),s(t),a(t),i.isStart=!0,r()},move:function(t){var n=i.tracker,s=e.touchRatio,a=e.touchAngle,o=e.isHorizontal;if(i.isStart&&!i.isScrolling){n.push(t);var l=n.vector(),d=n.getOffset();if(d.x||d.y)if(o&&l.angle<a||!o&&90-l.angle<a||i.isTouching){var u=l[o?"x":"y"]*s;i.isTouching=!0,c(u),r()}else i.isScrolling=!0,n.clear()}},stop:function(){var s=i.index,a=i.tracker,u=t.measure;if(i.isStart)if(i.isStart=!1,e.freeMode){var b=a.vector()[e.isHorizontal?"velocityX":"velocityY"];d.run((function(e){var t=b*e;b*=.98,Math.abs(t)<.01?(d.stop(),L(i,n)):(c(t),r(0))}))}else{var p=a.getDuration(),m=a.getOffset()[e.isHorizontal?"x":"y"],f=Math.ceil(Math.abs(m)/u.boxSize),g=l(m);p>e.longSwipesMs?o(s+g*(m>0?-1:1)):o(m>0?s-f:s+f),L(i,n)}}}}(i,e,t,n),c=r.preheat,o=r.move,l=r.stop;function d(e){var t=s?e.changedTouches[0]:e;return{x:t.pageX,y:t.pageY}}function p(t){for(var n=0;n<i.excludeElements.length;n++)if(i.excludeElements[n].contains(t.target))return;var s,r,o,l,u=e.element.$wrapper;(i.touchStartPreventDefault&&-1===a.indexOf(t.target.nodeName)||i.touchStartForcePreventDefault)&&!i.passiveListeners&&t.preventDefault(),c(d(t),(s=u,r=i.isHorizontal,o=getComputedStyle(s).transform.replace(/[a-z]|\(|\)|\s/g,"").split(",").map(parseFloat),l=[],16===o.length?l=o.slice(12,14):6===o.length&&(l=o.slice(4,6)),l[r?0:1]||0))}function m(e){i.touchMoveStopPropagation&&e.stopPropagation(),o(d(e)),t.isTouching&&e.preventDefault()}function f(){l()}return{attach:function(){var t=e.element.$el;s?(u(t,"touchstart",p,{passive:i.passiveListeners,capture:!1}),u(t,"touchmove",m),u(t,"touchend",f),u(t,"touchcancel",f)):(u(t,"mousedown",p),u(document,"mousemove",m),u(document,"mouseup",f))},detach:function(){var t=e.element.$el;b(t,"touchstart",p),b(t,"touchmove",m),b(t,"touchend",f),b(t,"touchcancel",f),b(t,"mousedown",p),b(document,"mousemove",m),b(document,"mouseup",f)}}}function R(e,t,i){var n=e.$list,s=t.viewSize,a=t.slideSize,r=t.boxSize,c=function(e){return e.loop?Math.ceil(e.slidesPerView):0}(i),o=c*r,l=-o+(i.centeredSlides?(s-a)/2:0);return{max:l,min:i.spaceBetween+(i.loop?a:s)+l-r*n.length,base:l,expand:c,buffer:o,minIndex:0,maxIndex:n.length-(i.centeredSlides||i.loop?1:Math.ceil(i.slidesPerView))}}function B(e,t){var i={};function n(e){var n=function(e,t){var i=t.$el,n=e.isHorizontal?i.offsetWidth:i.offsetHeight,s=(n-Math.ceil(e.slidesPerView-1)*e.spaceBetween)/e.slidesPerView;return{boxSize:s+e.spaceBetween,viewSize:n,slideSize:s}}(t,e),s=R(e,n,t),a=Boolean("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0||window.DocumentTouch&&document instanceof DocumentTouch);Object.assign(i,{touchable:a,element:e,measure:n,limitation:s})}return i.update=n,n(e),i}var F="data-shallow-slider",V="data-slider";function X(e,t){function i(){e.element.$wrapper.querySelectorAll("["+F+"]").forEach((function(t){return e.element.$wrapper.removeChild(t)}))}function n(){e.element.$list.forEach((function(e,t){return p(e,V,t)})),i(),function(){if(t.loop){var i=e.element,n=e.limitation,s=i.$list,a=i.$wrapper,r=n.expand,c=s.slice(-r).map((function(e){return e.cloneNode(!0)})),o=s.slice(0,r).map((function(e){return e.cloneNode(!0)}));c.forEach((function(e,t){a.appendChild(p(o[t],F)),a.insertBefore(p(c[t],F),s[0])}))}}()}function s(){var i,n=e.element,s=e.measure,a=n.$wrapper,r={display:"flex",willChange:"transform",flexDirection:t.isHorizontal?"row":"column"},c=((i={})[t.isHorizontal?"width":"height"]=s.slideSize+"px",i[t.isHorizontal?"margin-right":"margin-bottom"]=t.spaceBetween+"px",i);m(a,r),a.querySelectorAll("[data-slider]").forEach((function(e){return m(e,c)}))}return{init:function(){n(),s()},render:function(i,n,s,a){var r=e.element.$wrapper,c=void 0===n?t.speed:n;t.injections.translate(i,e,t,c),i.isStart||function(i){var n=e.element.$wrapper,s=i.index;n.querySelectorAll("[data-slider]").forEach((function(e){var i=~~e.getAttribute(V);d(e,[t.slidePrevClass,t.slideNextClass,t.slideActiveClass]),i===s&&l(e,t.slideActiveClass),i===s-1&&l(e,t.slidePrevClass),i===s+1&&l(e,t.slideNextClass)}))}(i),a&&getComputedStyle(r).transform,s&&setTimeout(s,c)},destroy:function(){var n=e.element,s=n.$list,a=n.$wrapper,r=t.isHorizontal?"margin-right":"margin-bottom";["display","will-change","flex-direction"].forEach((function(e){a.style.removeProperty(e)})),s.forEach((function(e){return e.style.removeProperty(r)})),i()},updateSize:s}}function q(e,t,i){var n=e-i.max,s=e-i.min;return n>0?n:s<0?s:0}function K(e,t){var i="string"==typeof e?document.body.querySelector(e):e,n=i.querySelector("."+t.wrapperClass),s=[].slice.call(i.getElementsByClassName(t.slideClass));return{$el:i,$wrapper:n,$list:s}}var Y=function e(t,i){var n,s=function(e){var t=o({},S,e);return o({},t,{isHorizontal:"horizontal"===t.direction})}(i),a=(n={},{on:function(e,t){n[e]?n[e].push(t):n[e]=[t]},off:function(e,t){if(n[e]){var i=n[e].indexOf(t);i>-1&&n[e].splice(i,1)}},emit:function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];n[e]&&n[e].forEach((function(e){return e.apply(void 0,i)}))},clear:function(){n={}}}),r=B(K(t,s),s),c={tracker:M(),index:0,startTransform:0,isStart:!1,isScrolling:!1,isTouching:!1,transforms:0,progress:0},l=a.on,d=a.off,u=a.emit,b={on:l,off:d,env:r,state:c,options:s};(s.plugins||e.plugins||[]).forEach((function(e){return e(b,s)})),u(C,b);var p=X(r,s),m=function(e,t,i,n,s){function a(t){var n=e.measure;return Math.ceil(Math.abs(t)/n.boxSize-i.longSwipesRatio)}function r(e,i,s){n.render(t,e,i,s)}function c(n){var a,r=e.limitation,c=r.min,l=r.max,d=l-c+(i.loop?e.measure.boxSize:0),u=d+1;t.transforms=n,i.loop?(a=(l-n)%u/d,t.progress=a<0?1+a:a>1?a-1:a):(a=(l-n)/d,t.progress=a<0?0:a>1?1:a),s.emit(D,o({},t))}function l(n,o){var l=e.measure,d=e.limitation,u=d.maxIndex-d.minIndex+1,b=i.loop?(n%u+u)%u:n>d.maxIndex?d.maxIndex:n<d.minIndex?d.minIndex:n,p=-b*l.boxSize+d.base;if(t.index===b&&0!==a(p-t.transforms)&&i.loop){var m=q(t.transforms,0,d);c(m>0?d.min-l.boxSize+m:d.max+l.boxSize+m),r(0,void 0,!0)}s.emit(T,t.index,t,b),t.index=b,c(p),r(o,(function(){s.emit(E,b,t)}))}return{update:function(){l(t.index,0),n.updateSize()},render:r,transform:c,slideTo:l,scrollPixel:function(n){var s=t.transforms,a=e.measure,r=e.limitation,o=Number(n.toExponential().split("e")[1]),l=o<=0?Math.pow(10,-(o-1)):1,d=s;if(i.resistance&&!i.loop&&(n>0&&s>=r.max?n-=Math.pow(n*l,i.resistanceRatio)/l:n<0&&s<=r.min&&(n+=Math.pow(-n*l,i.resistanceRatio)/l)),d+=n,i.loop){var u=t.tracker.vector(),b=i.isHorizontal?u.velocityX:u.velocityY,p=q(s,0,r);p&&function(e,t,i,n){return e>0&&t>n.max||e<0&&t<n.min}(b,s,0,r)&&(d=p>0?r.min-a.boxSize+p:r.max+a.boxSize+p)}c(d)},initStatus:function(e){void 0===e&&(e=0),t.startTransform=e,t.isStart=!1,t.isScrolling=!1,t.isTouching=!1},initLayout:function(e){c(e)},getOffsetSteps:a}}(r,c,s,p,a),f=H(r,c,s,m);var g=m.slideTo;return Object.assign(b,{update:function(){p.destroy(),r.update(K(t,s)),p.init(),m.update()},destroy:function(){u(P,b),f.detach(),p.destroy(),a.clear(),u(k,b)},slideTo:g,updateSize:function(){r.update(K(t,s)),m.update()}}),p.init(),f.attach(),g(s.initialSlide,0),u(z,b),b};Y.use=function(e){Y.plugins=e};var U=Y;i(124);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var i,n,s=function(e,t){if(null==e)return{};var i,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var J=a.createElement("g",null,a.createElement("path",{d:"M119.8.3L49 76.1h37l-21.3 53.4 70.8-75.8H98.3z",fill:"#ff0074"}));var G=function(e){var t=e.title,i=e.titleId,n=W(e,["title","titleId"]);return a.createElement("svg",_({viewBox:"0 0 184.4 129.8","aria-labelledby":i},n),t?a.createElement("title",{id:i},t):null,J)};function Q(e){const t=()=>e.demoID?r.a.createElement("a",{className:"edit-link",href:`https://stackblitz.com/edit/${e.demoID}?file=index.html`},r.a.createElement(G,{className:"edit-icon"}),"Edit in Stackblitz"):null,i=Object(a.createRef)();return Object(a.useEffect)((()=>{const t=U(i.current.children[0],{...e.option});return()=>t.destroy()})),r.a.createElement("div",{className:"demo-container"},r.a.createElement(t,null),r.a.createElement("div",{ref:i,className:"demo-block"},e.children))}console.log(g);var Z={id:"demo",title:"Demos"},ee={unversionedId:"demo",id:"version-2.0.0-alpha/demo",isDocsHomePage:!1,title:"Demos",description:"import {",source:"@site/versioned_docs/version-2.0.0-alpha/demo.md",slug:"/demo",permalink:"/docs/demo",editUrl:"https://github.com/joe223/tiny-swiper/blob/dev_2.0/packages/website/docs/versioned_docs/version-2.0.0-alpha/demo.md",version:"2.0.0-alpha",sidebar:"version-2.0.0-alpha/someSidebar",previous:{title:"APIs",permalink:"/docs/api"},next:{title:"Changelog",permalink:"/docs/changelog"}},te=[{value:"Basic",id:"basic",children:[{value:"Default Setup",id:"default-setup",children:[]},{value:"Loop mode",id:"loop-mode",children:[]},{value:"FreeMode",id:"freemode",children:[]},{value:"Vertical Slider",id:"vertical-slider",children:[]},{value:"Space Between Slides",id:"space-between-slides",children:[]},{value:"Speed Control",id:"speed-control",children:[]},{value:"Resistance Control",id:"resistance-control",children:[]}]},{value:"Plugins",id:"plugins",children:[{value:"Pagination",id:"pagination",children:[]},{value:"Lazyload",id:"lazyload",children:[]},{value:"Keyboard Control",id:"keyboard-control",children:[]},{value:"Mousewheel",id:"mousewheel",children:[]}]}],ie={rightToc:te};function ne(e){var t=e.components,i=Object(s.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},ie,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"basic"},"Basic"),Object(c.b)("h3",{id:"default-setup"},"Default Setup"),Object(c.b)(Q,{option:{},demoID:"tiny-swiper2-basic-demo",mdxType:"Demo"},Object(c.b)("div",{className:"swiper-container"},Object(c.b)("div",{className:"swiper-wrapper"},Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327273-74284900-3fc0-11eb-913a-69661b73ab5d.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327264-712d5880-3fc0-11eb-8f07-7d58264938c1.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327260-6f639500-3fc0-11eb-85fa-cfaa45ce054c.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png"}))))),Object(c.b)("h3",{id:"loop-mode"},"Loop mode"),Object(c.b)(Q,{option:{loop:!0},demoID:"tiny-swiper2-demo-loop-mode",mdxType:"Demo"},Object(c.b)("div",{className:"swiper-container"},Object(c.b)("div",{className:"swiper-wrapper"},Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327273-74284900-3fc0-11eb-913a-69661b73ab5d.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327264-712d5880-3fc0-11eb-8f07-7d58264938c1.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327260-6f639500-3fc0-11eb-85fa-cfaa45ce054c.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png"}))))),Object(c.b)("h3",{id:"freemode"},"FreeMode"),Object(c.b)(Q,{option:{freeMode:!0,loop:!0},demoID:"tiny-swiper2-demo-freemode",mdxType:"Demo"},Object(c.b)("div",{className:"swiper-container"},Object(c.b)("div",{className:"swiper-wrapper"},Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327273-74284900-3fc0-11eb-913a-69661b73ab5d.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327264-712d5880-3fc0-11eb-8f07-7d58264938c1.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327260-6f639500-3fc0-11eb-85fa-cfaa45ce054c.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png"}))))),Object(c.b)("h3",{id:"vertical-slider"},"Vertical Slider"),Object(c.b)(Q,{option:{direction:"vertical"},demoID:"tiny-swiper2-demo-vertical-slider",mdxType:"Demo"},Object(c.b)("div",{className:"swiper-container"},Object(c.b)("div",{className:"swiper-wrapper"},Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327273-74284900-3fc0-11eb-913a-69661b73ab5d.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327264-712d5880-3fc0-11eb-8f07-7d58264938c1.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327260-6f639500-3fc0-11eb-85fa-cfaa45ce054c.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png"}))))),Object(c.b)("h3",{id:"space-between-slides"},"Space Between Slides"),Object(c.b)(Q,{option:{spaceBetween:100},demoID:"tiny-swiper2-demo-space-between-slides",mdxType:"Demo"},Object(c.b)("div",{className:"swiper-container"},Object(c.b)("div",{className:"swiper-wrapper"},Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327273-74284900-3fc0-11eb-913a-69661b73ab5d.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327264-712d5880-3fc0-11eb-8f07-7d58264938c1.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327260-6f639500-3fc0-11eb-85fa-cfaa45ce054c.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png"}))))),Object(c.b)("h3",{id:"speed-control"},"Speed Control"),Object(c.b)(Q,{option:{speed:2e3},demoID:"tiny-swiper2-demo-speed-control",mdxType:"Demo"},Object(c.b)("div",{className:"swiper-container"},Object(c.b)("div",{className:"swiper-wrapper"},Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327273-74284900-3fc0-11eb-913a-69661b73ab5d.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327264-712d5880-3fc0-11eb-8f07-7d58264938c1.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327260-6f639500-3fc0-11eb-85fa-cfaa45ce054c.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png"}))))),Object(c.b)("h3",{id:"resistance-control"},"Resistance Control"),Object(c.b)("p",null,"With less resistanceRatio comes bigger resistance."),Object(c.b)(Q,{option:{resistance:!1},demoID:"tiny-swiper2-demo-resistance-control",mdxType:"Demo"},Object(c.b)("div",{className:"swiper-container"},Object(c.b)("div",{className:"swiper-wrapper"},Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327273-74284900-3fc0-11eb-913a-69661b73ab5d.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327264-712d5880-3fc0-11eb-8f07-7d58264938c1.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327260-6f639500-3fc0-11eb-85fa-cfaa45ce054c.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png"}))))),Object(c.b)("h2",{id:"plugins"},"Plugins"),Object(c.b)("h3",{id:"pagination"},"Pagination"),Object(c.b)("p",null,"You need to implement CSS code yourself."),Object(c.b)(Q,{option:{pagination:{el:".swiper-plugin-pagination",clickable:!0,bulletClass:"swiper-plugin-pagination__item",bulletActiveClass:"is-active"},plugins:[g]},demoID:"tiny-swiper2-demo-plugin-pagination",mdxType:"Demo"},Object(c.b)("div",{className:"swiper-container"},Object(c.b)("div",{className:"swiper-wrapper"},Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327273-74284900-3fc0-11eb-913a-69661b73ab5d.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327264-712d5880-3fc0-11eb-8f07-7d58264938c1.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327260-6f639500-3fc0-11eb-85fa-cfaa45ce054c.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png"}))),Object(c.b)("div",{className:"swiper-plugin-pagination"}))),Object(c.b)("h3",{id:"lazyload"},"Lazyload"),Object(c.b)(Q,{option:{lazyload:{loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"},plugins:[f]},demoID:"tiny-swiper2-demo-plugin-plugin-lazyload",mdxType:"Demo"},Object(c.b)("div",{className:"swiper-container"},Object(c.b)("div",{className:"swiper-wrapper"},Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{className:"swiper-lazy","data-src":"https://user-images.githubusercontent.com/10026019/102327273-74284900-3fc0-11eb-913a-69661b73ab5d.png"}),Object(c.b)("div",{className:"swiper-lazy-preloader"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{className:"swiper-lazy","data-src":"https://user-images.githubusercontent.com/10026019/102327264-712d5880-3fc0-11eb-8f07-7d58264938c1.png"}),Object(c.b)("div",{className:"swiper-lazy-preloader"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{className:"swiper-lazy","data-src":"https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png"}),Object(c.b)("div",{className:"swiper-lazy-preloader"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{className:"swiper-lazy","data-src":"https://user-images.githubusercontent.com/10026019/102327260-6f639500-3fc0-11eb-85fa-cfaa45ce054c.png"}),Object(c.b)("div",{className:"swiper-lazy-preloader"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{className:"swiper-lazy","data-src":"https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png"}),Object(c.b)("div",{className:"swiper-lazy-preloader"}))))),Object(c.b)("h3",{id:"keyboard-control"},"Keyboard Control"),Object(c.b)("p",null,"Using ",Object(c.b)("inlineCode",{parentName:"p"},"up")," ",Object(c.b)("inlineCode",{parentName:"p"},"right")," ",Object(c.b)("inlineCode",{parentName:"p"},"down")," ",Object(c.b)("inlineCode",{parentName:"p"},"left")," keys to control swiper instance."),Object(c.b)("p",null,"Keys ",Object(c.b)("inlineCode",{parentName:"p"},"up")," and ",Object(c.b)("inlineCode",{parentName:"p"},"down")," work only when ",Object(c.b)("inlineCode",{parentName:"p"},"direction: vertical"),", so do ",Object(c.b)("inlineCode",{parentName:"p"},"right")," and ",Object(c.b)("inlineCode",{parentName:"p"},"left"),"."),Object(c.b)(Q,{option:{keyboard:{enabled:!0},plugins:[N]},demoID:"tiny-swiper2-demo-plugin-plugin-keyboardcontrol",mdxType:"Demo"},Object(c.b)("div",{className:"swiper-container"},Object(c.b)("div",{className:"swiper-wrapper"},Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327273-74284900-3fc0-11eb-913a-69661b73ab5d.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327264-712d5880-3fc0-11eb-8f07-7d58264938c1.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327260-6f639500-3fc0-11eb-85fa-cfaa45ce054c.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png"}))),Object(c.b)("div",{className:"swiper-plugin-pagination"}))),Object(c.b)("h3",{id:"mousewheel"},"Mousewheel"),Object(c.b)(Q,{option:{mousewheel:{invert:!1,interval:100},plugins:[x]},demoID:"tiny-swiper2-demo-plugin-plugin-mousewheel",mdxType:"Demo"},Object(c.b)("div",{className:"swiper-container"},Object(c.b)("div",{className:"swiper-wrapper"},Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327273-74284900-3fc0-11eb-913a-69661b73ab5d.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327264-712d5880-3fc0-11eb-8f07-7d58264938c1.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327260-6f639500-3fc0-11eb-85fa-cfaa45ce054c.png"})),Object(c.b)("div",{className:"swiper-slide"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png"}))))))}ne.isMDXComponent=!0},83:function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return m}));var n=i(0),s=i.n(n);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,s=function(e,t){if(null==e)return{};var i,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var l=s.a.createContext({}),d=function(e){var t=s.a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):c(c({},t),e)),i},u=function(e){var t=d(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},p=s.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,r=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=d(i),p=n,m=u["".concat(r,".").concat(p)]||u[p]||b[p]||a;return i?s.a.createElement(m,c(c({ref:t},l),{},{components:i})):s.a.createElement(m,c({ref:t},l))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<a;l++)r[l]=i[l];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,i)}p.displayName="MDXCreateElement"}}]);