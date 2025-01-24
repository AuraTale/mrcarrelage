function j(l,y){for(var h=0;h<y.length;h++){const u=y[h];if(typeof u!="string"&&!Array.isArray(u)){for(const c in u)if(c!=="default"&&!(c in l)){const d=Object.getOwnPropertyDescriptor(u,c);d&&Object.defineProperty(l,c,d.get?d:{enumerable:!0,get:()=>u[c]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}function V(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var v={exports:{}},q=v.exports,E;function z(){return E||(E=1,function(l,y){(function(h,u){u(l,y)})(q,function(h,u){Object.defineProperty(u,"__esModule",{value:!0});var c,d;function m(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}var g=function(){function a(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(n,t,e){return t&&a(n.prototype,t),e&&a(n,e),n}}();function p(a,n){return n.indexOf(a)>=0}function O(a,n){for(var t in n)if(a[t]==null){var e=n[t];a[t]=e}return a}function N(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)}function M(a){var n=arguments.length<=1||arguments[1]===void 0?!1:arguments[1],t=arguments.length<=2||arguments[2]===void 0?!1:arguments[2],e=arguments.length<=3||arguments[3]===void 0?null:arguments[3],i=void 0;return document.createEvent!=null?(i=document.createEvent("CustomEvent"),i.initCustomEvent(a,n,t,e)):document.createEventObject!=null?(i=document.createEventObject(),i.eventType=a):i.eventName=a,i}function P(a,n){a.dispatchEvent!=null?a.dispatchEvent(n):n in(a!=null)?a[n]():"on"+n in(a!=null)&&a["on"+n]()}function f(a,n,t){a.addEventListener!=null?a.addEventListener(n,t,!1):a.attachEvent!=null?a.attachEvent("on"+n,t):a[n]=t}function b(a,n,t){a.removeEventListener!=null?a.removeEventListener(n,t,!1):a.detachEvent!=null?a.detachEvent("on"+n,t):delete a[n]}function _(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight}var H=window.WeakMap||window.MozWeakMap||function(){function a(){m(this,a),this.keys=[],this.values=[]}return g(a,[{key:"get",value:function(t){for(var e=0;e<this.keys.length;e++){var i=this.keys[e];if(i===t)return this.values[e]}}},{key:"set",value:function(t,e){for(var i=0;i<this.keys.length;i++){var r=this.keys[i];if(r===t)return this.values[i]=e,this}return this.keys.push(t),this.values.push(e),this}}]),a}(),S=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(d=c=function(){function a(){m(this,a),typeof console<"u"&&console!==null&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return g(a,[{key:"observe",value:function(){}}]),a}(),c.notSupported=!0,d),k=window.getComputedStyle||function(n){var t=/(\-([a-z]){1})/g;return{getPropertyValue:function(i){i==="float"&&(i="styleFloat"),t.test(i)&&i.replace(t,function(s,o){return o.toUpperCase()});var r=n.currentStyle;return(r!=null?r[i]:void 0)||null}}},T=function(){function a(){var n=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];m(this,a),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},this.animate=function(){return"requestAnimationFrame"in window?function(e){return window.requestAnimationFrame(e)}:function(e){return e()}}(),this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=O(n,this.defaults),n.scrollContainer!=null&&(this.config.scrollContainer=document.querySelector(n.scrollContainer)),this.animationNameCache=new H,this.wowEvent=M(this.config.boxClass)}return g(a,[{key:"init",value:function(){this.element=window.document.documentElement,p(document.readyState,["interactive","complete"])?this.start():f(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var t=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var e=0;e<this.boxes.length;e++){var i=this.boxes[e];this.applyStyle(i,!0)}if(this.disabled()||(f(this.config.scrollContainer||window,"scroll",this.scrollHandler),f(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live){var r=new S(function(s){for(var o=0;o<s.length;o++)for(var C=s[o],w=0;w<C.addedNodes.length;w++){var W=C.addedNodes[w];t.doSync(W)}});r.observe(document.body,{childList:!0,subtree:!0})}}},{key:"stop",value:function(){this.stopped=!0,b(this.config.scrollContainer||window,"scroll",this.scrollHandler),b(window,"resize",this.scrollHandler),this.interval!=null&&clearInterval(this.interval)}},{key:"sync",value:function(){S.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(t){if((typeof t>"u"||t===null)&&(t=this.element),t.nodeType===1){t=t.parentNode||t;for(var e=t.querySelectorAll("."+this.config.boxClass),i=0;i<e.length;i++){var r=e[i];p(r,this.all)||(this.boxes.push(r),this.all.push(r),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(r,!0),this.scrolled=!0)}}}},{key:"show",value:function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,this.config.callback!=null&&this.config.callback(t),P(t,this.wowEvent),f(t,"animationend",this.resetAnimation),f(t,"oanimationend",this.resetAnimation),f(t,"webkitAnimationEnd",this.resetAnimation),f(t,"MSAnimationEnd",this.resetAnimation),t}},{key:"applyStyle",value:function(t,e){var i=this,r=t.getAttribute("data-wow-duration"),s=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration");return this.animate(function(){return i.customStyle(t,e,r,s,o)})}},{key:"resetStyle",value:function(){for(var t=0;t<this.boxes.length;t++){var e=this.boxes[t];e.style.visibility="visible"}}},{key:"resetAnimation",value:function(t){if(t.type.toLowerCase().indexOf("animationend")>=0){var e=t.target||t.srcElement;e.className=e.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(t,e,i,r,s){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",i&&this.vendorSet(t.style,{animationDuration:i}),r&&this.vendorSet(t.style,{animationDelay:r}),s&&this.vendorSet(t.style,{animationIterationCount:s}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t}},{key:"vendorSet",value:function(t,e){for(var i in e)if(e.hasOwnProperty(i)){var r=e[i];t[""+i]=r;for(var s=0;s<this.vendors.length;s++){var o=this.vendors[s];t[""+o+i.charAt(0).toUpperCase()+i.substr(1)]=r}}}},{key:"vendorCSS",value:function(t,e){for(var i=k(t),r=i.getPropertyCSSValue(e),s=0;s<this.vendors.length;s++){var o=this.vendors[s];r=r||i.getPropertyCSSValue("-"+o+"-"+e)}return r}},{key:"animationName",value:function(t){var e=void 0;try{e=this.vendorCSS(t,"animation-name").cssText}catch{e=k(t).getPropertyValue("animation-name")}return e==="none"?"":e}},{key:"cacheAnimationName",value:function(t){return this.animationNameCache.set(t,this.animationName(t))}},{key:"cachedAnimationName",value:function(t){return this.animationNameCache.get(t)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var t=[],e=0;e<this.boxes.length;e++){var i=this.boxes[e];if(i){if(this.isVisible(i)){this.show(i);continue}t.push(i)}}this.boxes=t,!this.boxes.length&&!this.config.live&&this.stop()}}},{key:"offsetTop",value:function(t){for(;t.offsetTop===void 0;)t=t.parentNode;for(var e=t.offsetTop;t.offsetParent;)t=t.offsetParent,e+=t.offsetTop;return e}},{key:"isVisible",value:function(t){var e=t.getAttribute("data-wow-offset")||this.config.offset,i=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,r=i+Math.min(this.element.clientHeight,_())-e,s=this.offsetTop(t),o=s+t.clientHeight;return s<=r&&o>=i}},{key:"disabled",value:function(){return!this.config.mobile&&N(navigator.userAgent)}}]),a}();u.default=T,h.exports=u.default})}(v,v.exports)),v.exports}var A=z();const L=V(A),I=j({__proto__:null,default:L},[A]);export{I as w};
