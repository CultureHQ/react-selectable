!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("react-dom"));else if("function"==typeof define&&define.amd)define(["react","react-dom"],t);else{var n="object"==typeof exports?t(require("react"),require("react-dom")):t(e.React,e.ReactDOM);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=12)}([function(e,t,n){"use strict";function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(f===setTimeout)return setTimeout(e,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function u(e){if(p===clearTimeout)return clearTimeout(e);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function a(){b&&y&&(b=!1,y.length?h=y.concat(h):v=-1,h.length&&c())}function c(){if(!b){var e=i(a);b=!0;for(var t=h.length;t;){for(y=h,h=[];++v<t;)y&&y[v].run();v=-1,t=h.length}y=null,b=!1,u(e)}}function l(e,t){this.fun=e,this.array=t}function s(){}var f,p,d=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(e){f=r}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(e){p=o}}();var y,h=[],b=!1,v=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new l(e,t)),1!==h.length||b||i(c)},l.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=s,d.addListener=s,d.once=s,d.off=s,d.removeListener=s,d.removeAllListeners=s,d.emit=s,d.prependListener=s,d.prependOnceListener=s,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";(function(t){function n(e,t,n,o,i,u,a,c){if(r(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,o,i,u,a,c],f=0;l=new Error(t.replace(/%s/g,function(){return s[f++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}var r=function(e){};"production"!==t.env.NODE_ENV&&(r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=n}).call(t,n(0))},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if("function"!=typeof t)throw new Error("isNodeIn second parameter must be a function");for(var n=e;n;){if(t(n))return!0;n=n.parentNode}return!1};t.default=r},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";(function(t){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};if("production"!==t.env.NODE_ENV){var o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,i=function(e){return"object"===(void 0===e?"undefined":r(e))&&null!==e&&e.$$typeof===o};e.exports=n(14)(i,!0)}else e.exports=n(17)()}).call(t,n(0))},function(e,t,n){"use strict";(function(t){var r=n(1),o=r;if("production"!==t.env.NODE_ENV){var i=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(e){}};o=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];i.apply(void 0,[t].concat(r))}}}e.exports=o}).call(t,n(0))},function(e,t){(function(t){e.exports=t}).call(t,{})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=function(e,t){return(0,o.default)(e,function(e){return e===t})};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.getBoundingClientRect();return{top:t.top+document.body.scrollTop,left:t.left+document.body.scrollLeft,offsetWidth:e.offsetWidth,offsetHeight:e.offsetHeight}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.nodeInRoot=t.isNodeIn=t.createSelectable=t.SelectableGroup=void 0;var o=n(13),i=r(o),u=n(22),a=r(u),c=n(4),l=r(c),s=n(10),f=r(s);t.SelectableGroup=i.default,t.createSelectable=a.default,t.isNodeIn=l.default,t.nodeInRoot=f.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),l=r(c),s=n(6),f=n(7),p=r(f),d=n(18),y=r(d),h=n(10),b=r(h),v=n(4),m=r(v),g=n(11),_=r(g),w=n(19),x=r(w),O=n(20),S=r(O),j=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isBoxSelecting:!1,boxWidth:0,boxHeight:0},n._mouseDownData=null,n._rect=null,n._registry=[],n._openSelector=n._openSelector.bind(n),n._mouseDown=n._mouseDown.bind(n),n._mouseUp=n._mouseUp.bind(n),n._selectElements=n._selectElements.bind(n),n._registerSelectable=n._registerSelectable.bind(n),n._unregisterSelectable=n._unregisterSelectable.bind(n),n._throttledSelect=(0,S.default)(n._selectElements,50),n}return u(t,e),a(t,[{key:"getChildContext",value:function(){return{selectable:{register:this._registerSelectable,unregister:this._unregisterSelectable}}}},{key:"componentDidMount",value:function(){this._applyMousedown(this.props.enabled),this._rect=this._getInitialCoordinates()}},{key:"componentWillUnmount",value:function(){this._applyMousedown(!1)}},{key:"componentWillReceiveProps",value:function(e){e.enabled!==this.props.enabled&&this._applyMousedown(e.enabled)}},{key:"_registerSelectable",value:function(e,t){this._registry.push({key:e,domNode:t})}},{key:"_unregisterSelectable",value:function(e){this._registry=this._registry.filter(function(t){return t.key!==e})}},{key:"_applyMousedown",value:function(e){var t=e?"addEventListener":"removeEventListener";(0,s.findDOMNode)(this)[t]("mousedown",this._mouseDown)}},{key:"_openSelector",value:function(e){var t=Math.abs(this._mouseDownData.initialW-e.pageX+this._rect.x),n=Math.abs(this._mouseDownData.initialH-e.pageY+this._rect.y);this.setState({isBoxSelecting:!0,boxWidth:t,boxHeight:n,boxLeft:Math.min(e.pageX-this._rect.x,this._mouseDownData.initialW),boxTop:Math.min(e.pageY-this._rect.y,this._mouseDownData.initialH)}),this._throttledSelect(e)}},{key:"_getInitialCoordinates",value:function(){if(this.props.fixedPosition)return{x:0,y:0};var e=window.getComputedStyle(document.body),t=e.getPropertyValue("margin-top"),n=e.getPropertyValue("margin-left"),r=parseInt(n.slice(0,n.length-2),10),o=parseInt(t.slice(0,t.length-2),10),i=document.body.getBoundingClientRect(),u=(0,s.findDOMNode)(this).getBoundingClientRect();return{x:Math.round(u.left-i.left+r),y:Math.round(u.top-i.top+o)}}},{key:"_mouseDown",value:function(e){var t=this.props,n=t.onBeginSelection,r=t.preventDefault;if(!(0,m.default)(e.target,function(e){return!!e.draggable})&&("function"!=typeof n||!1!==n(e))){var o=(0,s.findDOMNode)(this),i=void 0;window.addEventListener("mouseup",this._mouseUp),console.log({eventTarget:e.target,node:o}),3!==e.which&&2!==e.button&&((0,b.default)(e.target,o)||(i=(0,_.default)(o),(0,x.default)({top:i.top,left:i.left,bottom:i.offsetHeight,right:i.offsetWidth},{top:e.pageY-this._rect.y,left:e.pageX-this._rect.x,offsetWidth:0,offsetHeight:0})))&&(this._rect=this._getInitialCoordinates(),this._mouseDownData={boxLeft:e.pageX-this._rect.x,boxTop:e.pageY-this._rect.y,initialW:e.pageX-this._rect.x,initialH:e.pageY-this._rect.y},r&&e.preventDefault(),window.addEventListener("mousemove",this._openSelector))}}},{key:"_mouseUp",value:function(e){var t=this.props.onNonItemClick,n=this.state.isBoxSelecting;e.stopPropagation(),window.removeEventListener("mousemove",this._openSelector),window.removeEventListener("mouseup",this._mouseUp),this._mouseDownData&&(t&&!n&&(this._registry.some(function(t){var n=t.domNode;return(0,b.default)(e.target,n)})||t(e)),this._selectElements(e,!0),this._mouseDownData=null,this.setState({isBoxSelecting:!1,boxWidth:0,boxHeight:0}))}},{key:"_selectElements",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.props,r=n.tolerance,o=n.onSelection,i=n.onEndSelection,u=[],a=(0,s.findDOMNode)(this.refs.selectbox);console.log({currentItems:u,registry:this._registry,_selectbox:a}),a&&(this._registry.forEach(function(e){e.domNode&&(0,x.default)(a,e.domNode,r)&&!u.includes(e.key)&&(u.push(e.key),console.log({currentItems:u}))}),t?"function"==typeof i&&i(u,e):"function"==typeof o&&o(u,e))}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.enabled,r=e.fixedPosition,o=e.className,i=e.selectingClassName,u=this.state,a=u.isBoxSelecting,c=u.boxLeft,s=u.boxTop,f=u.boxWidth,p=u.boxHeight,d=this.props.component;if(!n)return l.default.createElement(d,{className:o},t);var h={left:c,top:s,width:f,height:p,zIndex:9e3,position:r?"fixed":"absolute",cursor:"default"},b={backgroundColor:"transparent",border:"1px dashed #999",width:"100%",height:"100%",float:"left"},v={position:"relative",overflow:"visible"};return l.default.createElement(d,{className:(0,y.default)(o,a?i:null),style:v},a?l.default.createElement("div",{style:h,ref:"selectbox"},l.default.createElement("span",{style:b})):null,t)}}]),t}(c.Component);j.propTypes={children:p.default.node,onBeginSelection:p.default.func,onEndSelection:p.default.func,onSelection:p.default.func,component:p.default.node,tolerance:p.default.number,fixedPosition:p.default.bool,preventDefault:p.default.bool,onNonItemClick:p.default.func,enabled:p.default.bool,className:p.default.string,selectingClassName:p.default.string},j.defaultProps={component:"div",tolerance:0,fixedPosition:!1,preventDefault:!0,enabled:!0},j.childContextTypes={selectable:p.default.object},t.default=j},function(e,t,n){"use strict";(function(t){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(1),i=n(2),u=n(8),a=n(15),c=n(3),l=n(16);e.exports=function(e,n){function s(e){var t=e&&(N&&e[N]||e[P]);if("function"==typeof t)return t}function f(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function p(e){this.message=e,this.stack=""}function d(e){function r(r,l,s,f,d,y,h){if(f=f||k,y=y||s,h!==c)if(n)i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var b=f+":"+s;!o[b]&&a<3&&(u(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",y,f),o[b]=!0,a++)}return null==l[s]?r?new p(null===l[s]?"The "+d+" `"+y+"` is marked as required in `"+f+"`, but its value is `null`.":"The "+d+" `"+y+"` is marked as required in `"+f+"`, but its value is `undefined`."):null:e(l,s,f,d,y)}if("production"!==t.env.NODE_ENV)var o={},a=0;var l=r.bind(null,!1);return l.isRequired=r.bind(null,!0),l}function y(e){function t(t,n,r,o,i,u){var a=t[n];if(S(a)!==e)return new p("Invalid "+o+" `"+i+"` of type `"+j(a)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return d(t)}function h(e){function t(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u)){return new p("Invalid "+o+" `"+i+"` of type `"+S(u)+"` supplied to `"+r+"`, expected an array.")}for(var a=0;a<u.length;a++){var l=e(u,a,r,o,i+"["+a+"]",c);if(l instanceof Error)return l}return null}return d(t)}function b(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var u=e.name||k;return new p("Invalid "+o+" `"+i+"` of type `"+T(t[n])+"` supplied to `"+r+"`, expected instance of `"+u+"`.")}return null}return d(t)}function v(e){function n(t,n,r,o,i){for(var u=t[n],a=0;a<e.length;a++)if(f(u,e[a]))return null;return new p("Invalid "+o+" `"+i+"` of value `"+u+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?d(n):("production"!==t.env.NODE_ENV&&u(!1,"Invalid argument supplied to oneOf, expected an instance of array."),o.thatReturnsNull)}function m(e){function t(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],a=S(u);if("object"!==a)return new p("Invalid "+o+" `"+i+"` of type `"+a+"` supplied to `"+r+"`, expected an object.");for(var l in u)if(u.hasOwnProperty(l)){var s=e(u,l,r,o,i+"."+l,c);if(s instanceof Error)return s}return null}return d(t)}function g(e){function n(t,n,r,o,i){for(var u=0;u<e.length;u++){if(null==(0,e[u])(t,n,r,o,i,c))return null}return new p("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&u(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),o.thatReturnsNull;for(var r=0;r<e.length;r++){var i=e[r];if("function"!=typeof i)return u(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",E(i),r),o.thatReturnsNull}return d(n)}function _(e){function t(t,n,r,o,i){var u=t[n],a=S(u);if("object"!==a)return new p("Invalid "+o+" `"+i+"` of type `"+a+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var s=e[l];if(s){var f=s(u,l,r,o,i+"."+l,c);if(f)return f}}return null}return d(t)}function w(e){function t(t,n,r,o,i){var u=t[n],l=S(u);if("object"!==l)return new p("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");var s=a({},t[n],e);for(var f in s){var d=e[f];if(!d)return new p("Invalid "+o+" `"+i+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=d(u,f,r,o,i+"."+f,c);if(y)return y}return null}return d(t)}function x(t){switch(void 0===t?"undefined":r(t)){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(x);if(null===t||e(t))return!0;var n=s(t);if(!n)return!1;var o,i=n.call(t);if(n!==t.entries){for(;!(o=i.next()).done;)if(!x(o.value))return!1}else for(;!(o=i.next()).done;){var u=o.value;if(u&&!x(u[1]))return!1}return!0;default:return!1}}function O(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function S(e){var t=void 0===e?"undefined":r(e);return Array.isArray(e)?"array":e instanceof RegExp?"object":O(t,e)?"symbol":t}function j(e){if(void 0===e||null===e)return""+e;var t=S(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function E(e){var t=j(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function T(e){return e.constructor&&e.constructor.name?e.constructor.name:k}var N="function"==typeof Symbol&&Symbol.iterator,P="@@iterator",k="<<anonymous>>",D={array:y("array"),bool:y("boolean"),func:y("function"),number:y("number"),object:y("object"),string:y("string"),symbol:y("symbol"),any:function(){return d(o.thatReturnsNull)}(),arrayOf:h,element:function(){function t(t,n,r,o,i){var u=t[n];if(!e(u)){return new p("Invalid "+o+" `"+i+"` of type `"+S(u)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return d(t)}(),instanceOf:b,node:function(){function e(e,t,n,r,o){return x(e[t])?null:new p("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return d(e)}(),objectOf:m,oneOf:v,oneOfType:g,shape:_,exact:w};return p.prototype=Error.prototype,D.checkPropTypes=l,D.PropTypes=D,D}}).call(t,n(0))},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,c=r(e),l=1;l<arguments.length;l++){n=Object(arguments[l]);for(var s in n)i.call(n,s)&&(c[s]=n[s]);if(o){a=o(n);for(var f=0;f<a.length;f++)u.call(n,a[f])&&(c[a[f]]=n[a[f]])}}return c}},function(e,t,n){"use strict";(function(t){function r(e,n,r,l,s){if("production"!==t.env.NODE_ENV)for(var f in e)if(e.hasOwnProperty(f)){var p;try{i("function"==typeof e[f],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",l||"React class",r,f,o(e[f])),p=e[f](n,f,l,r,null,a)}catch(e){p=e}if(u(!p||p instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",l||"React class",r,f,void 0===p?"undefined":o(p)),p instanceof Error&&!(p.message in c)){c[p.message]=!0;var d=s?s():"";u(!1,"Failed %s type: %s%s",r,p.message,null!=d?d:"")}}}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};if("production"!==t.env.NODE_ENV)var i=n(2),u=n(8),a=n(3),c={};e.exports=r}).call(t,n(0))},function(e,t,n){"use strict";var r=n(1),o=n(2),i=n(3);e.exports=function(){function e(e,t,n,r,u,a){a!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";var r,o,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(){function u(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=void 0===n?"undefined":i(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var o=u.apply(null,n);o&&e.push(o)}else if("object"===r)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}var a={}.hasOwnProperty;void 0!==e&&e.exports?(u.default=u,e.exports=u):"object"===i(n(9))&&n(9)?(r=[],void 0!==(o=function(){return u}.apply(t,r))&&(e.exports=o)):window.classNames=u}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=function(e,t,n,r,o,i,u,a,c){return!(e+i-c<n||e+c>n+a||t+o-c<r||t+c>r+u)};t.default=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=e instanceof HTMLElement?(0,o.default)(e):e,u=t instanceof HTMLElement?(0,o.default)(t):t;return i(r.top,r.left,u.top,u.left,r.offsetWidth,r.offsetHeight,u.offsetWidth,u.offsetHeight,n)}},function(e,t,n){"use strict";(function(t){function n(e,t,n){function r(t){var n=h,r=b;return h=b=void 0,w=t,m=e.apply(r,n)}function i(e){return w=e,g=setTimeout(s,t),j?r(e):m}function u(e){var n=e-_,r=e-w,o=t-n;return E?O(o,v-r):o}function c(e){var n=e-_,r=e-w;return void 0===_||n>=t||n<0||E&&r>=v}function s(){var e=S();if(c(e))return f(e);g=setTimeout(s,u(e))}function f(e){return g=void 0,T&&h?r(e):(h=b=void 0,m)}function p(){void 0!==g&&clearTimeout(g),w=0,h=_=b=g=void 0}function d(){return void 0===g?m:f(S())}function y(){var e=S(),n=c(e);if(h=arguments,b=this,_=e,n){if(void 0===g)return i(_);if(E)return g=setTimeout(s,t),r(_)}return void 0===g&&(g=setTimeout(s,t)),m}var h,b,v,m,g,_,w=0,j=!1,E=!1,T=!0;if("function"!=typeof e)throw new TypeError(l);return t=a(t)||0,o(n)&&(j=!!n.leading,E="maxWait"in n,v=E?x(a(n.maxWait)||0,t):v,T="trailing"in n?!!n.trailing:T),y.cancel=p,y.flush=d,y}function r(e,t,r){var i=!0,u=!0;if("function"!=typeof e)throw new TypeError(l);return o(r)&&(i="leading"in r?!!r.leading:i,u="trailing"in r?!!r.trailing:u),n(e,t,{leading:i,maxWait:t,trailing:u})}function o(e){var t=void 0===e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==(void 0===e?"undefined":c(e))}function u(e){return"symbol"==(void 0===e?"undefined":c(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(u(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var n=y.test(e);return n||h.test(e)?b(e.slice(2),n?2:8):d.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l="Expected a function",s=NaN,f="[object Symbol]",p=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,h=/^0o[0-7]+$/i,b=parseInt,v="object"==(void 0===t?"undefined":c(t))&&t&&t.Object===Object&&t,m="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,g=v||m||Function("return this")(),_=Object.prototype,w=_.toString,x=Math.max,O=Math.min,S=function(){return g.Date.now()};e.exports=r}).call(t,n(21))},function(e,t,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(r=window)}e.exports=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),l=r(c),s=n(6),f=n(7),p=r(f),d=function(e){var t=function(t){function n(){return o(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,t),a(n,[{key:"componentDidMount",value:function(){this.context.selectable.register(this.props.selectableKey,(0,s.findDOMNode)(this))}},{key:"componentWillUnmount",value:function(){this.context.selectable.unregister(this.props.selectableKey)}},{key:"render",value:function(){return console.log(this.props.containerStyle),l.default.createElement("div",{id:"selectableItem-"+this.props.selectableKey,style:this.props.containerStyle},l.default.createElement(e,this.props,this.props.children))}}]),n}(l.default.Component);return t.contextTypes={selectable:p.default.object},t.propTypes={children:p.default.node,selectableKey:p.default.any.isRequired,style:p.default.object},t};t.default=d}])});