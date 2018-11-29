(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{218:function(e,a,t){!function(e){"use strict";var a=function(){for(var e={},a=document.styleSheets,t="",r=a.length-1;r>-1;r--){for(var n=a[r].cssRules,l=n.length-1;l>-1;l--)if(".ie-custom-properties"===n[l].selectorText){t=n[l].cssText;break}if(t)break}return(t=t.substring(t.lastIndexOf("{")+1,t.lastIndexOf("}"))).split(";").forEach(function(a){if(a){var t=a.split(": ")[0],r=a.split(": ")[1];t&&r&&(e["--"+t.trim()]=r.trim())}}),e};e.deepObjectsMerge=function e(a,t){for(var r=Object.keys(t),n=0;n<r.length;n++){var l=r[n];t[l]instanceof Object&&Object.assign(t[l],e(a[l],t[l]))}return Object.assign(a||{},t),a},e.getColor=function(e,t){void 0===t&&(t=document.body);var r,n="--"+e;if(function(e){return e.match(/^--.*/i)}(n)&&Boolean(document.documentMode)&&document.documentMode>=10){var l=a();r=l[n]}else r=window.getComputedStyle(t,null).getPropertyValue(n).replace(/^\s/,"");return r||e},e.getStyle=function(e,t){var r;if(void 0===t&&(t=document.body),function(e){return e.match(/^--.*/i)}(e)&&Boolean(document.documentMode)&&document.documentMode>=10){var n=a();r=n[e]}else r=window.getComputedStyle(t,null).getPropertyValue(e).replace(/^\s/,"");return r},e.hexToRgb=function(e){if("undefined"===typeof e)throw new Error("Hex color is not defined");var a,t,r;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error(e+" is not a valid hex color");return 7===e.length?(a=parseInt(e.substring(1,3),16),t=parseInt(e.substring(3,5),16),r=parseInt(e.substring(5,7),16)):(a=parseInt(e.substring(1,2),16),t=parseInt(e.substring(2,3),16),r=parseInt(e.substring(3,5),16)),"rgba("+a+", "+t+", "+r+")"},e.hexToRgba=function(e,a){if(void 0===a&&(a=100),"undefined"===typeof e)throw new Error("Hex color is not defined");var t,r,n;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error(e+" is not a valid hex color");return 7===e.length?(t=parseInt(e.substring(1,3),16),r=parseInt(e.substring(3,5),16),n=parseInt(e.substring(5,7),16)):(t=parseInt(e.substring(1,2),16),r=parseInt(e.substring(2,3),16),n=parseInt(e.substring(3,5),16)),"rgba("+t+", "+r+", "+n+", "+a/100+")"},e.rgbToHex=function(e){if("undefined"===typeof e)throw new Error("Hex color is not defined");if("transparent"===e)return"#00000000";var a=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!a)throw new Error(e+" is not a valid rgb color");var t="0"+parseInt(a[1],10).toString(16),r="0"+parseInt(a[2],10).toString(16),n="0"+parseInt(a[3],10).toString(16);return"#"+t.slice(-2)+r.slice(-2)+n.slice(-2)},Object.defineProperty(e,"__esModule",{value:!0})}(a)},413:function(e,a,t){"use strict";t.r(a);var r=t(7),n=t(8),l=t(10),c=t(9),s=t(11),o=t(1),m=t.n(o),i=t(26),u=t.n(i),d=t(3),g=t.n(d),b=t(2),E=t(218),h=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(l.a)(this,Object(c.a)(a).call(this,e))).state={bgColor:"rgb(255, 255, 255)"},t}return Object(s.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=u.a.findDOMNode(this).parentNode.firstChild,a=window.getComputedStyle(e).getPropertyValue("background-color");this.setState({bgColor:a||this.state.bgColor})}},{key:"render",value:function(){return m.a.createElement("table",{className:"w-100"},m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",{className:"text-muted"},"HEX:"),m.a.createElement("td",{className:"font-weight-bold"},Object(E.rgbToHex)(this.state.bgColor))),m.a.createElement("tr",null,m.a.createElement("td",{className:"text-muted"},"RGB:"),m.a.createElement("td",{className:"font-weight-bold"},this.state.bgColor))))}}]),a}(o.Component),f=function(e){function a(){return Object(r.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this.props,a=e.className,t=e.children,r=g()(a,"theme-color w-75 rounded mb-3");return m.a.createElement(b.u,{xl:"2",md:"4",sm:"6",xs:"12",className:"mb-4"},m.a.createElement("div",{className:r,style:{paddingTop:"75%"}}),t,m.a.createElement(h,null))}}]),a}(o.Component),p=function(e){function a(){return Object(r.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-header"},m.a.createElement("i",{className:"icon-drop"})," Theme colors"),m.a.createElement("div",{className:"card-body"},m.a.createElement(b.hb,null,m.a.createElement(f,{className:"bg-primary"},m.a.createElement("h6",null,"Brand Primary Color")),m.a.createElement(f,{className:"bg-secondary"},m.a.createElement("h6",null,"Brand Secondary Color")),m.a.createElement(f,{className:"bg-success"},m.a.createElement("h6",null,"Brand Success Color")),m.a.createElement(f,{className:"bg-danger"},m.a.createElement("h6",null,"Brand Danger Color")),m.a.createElement(f,{className:"bg-warning"},m.a.createElement("h6",null,"Brand Warning Color")),m.a.createElement(f,{className:"bg-info"},m.a.createElement("h6",null,"Brand Info Color")),m.a.createElement(f,{className:"bg-light"},m.a.createElement("h6",null,"Brand Light Color")),m.a.createElement(f,{className:"bg-dark"},m.a.createElement("h6",null,"Brand Dark Color"))))),m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-header"},m.a.createElement("i",{className:"icon-drop"})," Grays"),m.a.createElement("div",{className:"card-body"},m.a.createElement(b.hb,{className:"mb-3"},m.a.createElement(f,{className:"bg-gray-100"},m.a.createElement("h6",null,"Gray 100 Color")),m.a.createElement(f,{className:"bg-gray-200"},m.a.createElement("h6",null,"Gray 200 Color")),m.a.createElement(f,{className:"bg-gray-300"},m.a.createElement("h6",null,"Gray 300 Color")),m.a.createElement(f,{className:"bg-gray-400"},m.a.createElement("h6",null,"Gray 400 Color")),m.a.createElement(f,{className:"bg-gray-500"},m.a.createElement("h6",null,"Gray 500 Color")),m.a.createElement(f,{className:"bg-gray-600"},m.a.createElement("h6",null,"Gray 600 Color")),m.a.createElement(f,{className:"bg-gray-700"},m.a.createElement("h6",null,"Gray 700 Color")),m.a.createElement(f,{className:"bg-gray-800"},m.a.createElement("h6",null,"Gray 800 Color")),m.a.createElement(f,{className:"bg-gray-900"},m.a.createElement("h6",null,"Gray 900 Color"))))),m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-header"},m.a.createElement("i",{className:"icon-drop"})," Additional colors"),m.a.createElement("div",{className:"card-body"},m.a.createElement(b.hb,null,m.a.createElement(f,{className:"bg-blue"},m.a.createElement("h6",null,"Blue Color")),m.a.createElement(f,{className:"bg-light-blue"},m.a.createElement("h6",null,"Light Blue Color")),m.a.createElement(f,{className:"bg-indigo"},m.a.createElement("h6",null,"Indigo Color")),m.a.createElement(f,{className:"bg-purple"},m.a.createElement("h6",null,"Purple Color")),m.a.createElement(f,{className:"bg-pink"},m.a.createElement("h6",null,"Pink Color")),m.a.createElement(f,{className:"bg-red"},m.a.createElement("h6",null,"Red Color")),m.a.createElement(f,{className:"bg-orange"},m.a.createElement("h6",null,"Orange Color")),m.a.createElement(f,{className:"bg-yellow"},m.a.createElement("h6",null,"Yellow Color")),m.a.createElement(f,{className:"bg-green"},m.a.createElement("h6",null,"Green Color")),m.a.createElement(f,{className:"bg-teal"},m.a.createElement("h6",null,"Teal Color")),m.a.createElement(f,{className:"bg-cyan"},m.a.createElement("h6",null,"Cyan Color"))))))}}]),a}(o.Component);a.default=p}}]);
//# sourceMappingURL=32.ee431618.chunk.js.map