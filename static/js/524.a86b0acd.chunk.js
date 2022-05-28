/*! For license information please see 524.a86b0acd.chunk.js.LICENSE.txt */
(self.webpackChunkthe_accounter_task=self.webpackChunkthe_accounter_task||[]).push([[524],{5524:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return y}});var t=r(8152),a=r(1694),s=r.n(a),c=r(2791),i=r(1813);var u="CurrencyItem_container__AjAMr",o="CurrencyItem_input__LAObU",l="CurrencyItem_checkmark__bq5-p",d="CurrencyItem_flag__qlxNZ",f="CurrencyItem_text__GnIFm",p=r(184);function h(e){var n=e.currency,r=e.selected,t=e.className,a=e.onChange;return(0,p.jsxs)("label",{className:s()(t,u),children:[(0,p.jsx)("input",{type:"radio",onChange:a,checked:r,className:o}),(0,p.jsx)("span",{className:l}),(0,p.jsx)("img",{src:n.flag,alt:n.code,className:d}),(0,p.jsxs)("span",{className:f,children:[n.code," - ",n.name]})]})}var C=r(8683);function m(e){return(0,p.jsx)("svg",(0,C.Z)((0,C.Z)({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:(0,p.jsx)("path",{d:"M19.7663 18.5889L14.7962 13.6188C16.1506 11.9623 16.8165 9.84866 16.6562 7.71497C16.4959 5.58128 15.5216 3.59083 13.9349 2.15534C12.3482 0.719841 10.2704 -0.0508742 8.13136 0.00260835C5.99233 0.0560909 3.95568 0.929679 2.44268 2.44268C0.929679 3.95568 0.0560909 5.99232 0.00260835 8.13136C-0.0508742 10.2704 0.719841 12.3482 2.15534 13.9349C3.59083 15.5216 5.58128 16.4959 7.71497 16.6562C9.84866 16.8165 11.9623 16.1506 13.6188 14.7962L18.5889 19.7663C18.7459 19.9179 18.9563 20.0019 19.1746 20C19.3929 19.9981 19.6017 19.9105 19.7561 19.7561C19.9105 19.6017 19.9981 19.3929 20 19.1746C20.0019 18.9563 19.9179 18.7459 19.7663 18.5889ZM8.35314 15.0143C7.03568 15.0143 5.74781 14.6237 4.65238 13.8917C3.55695 13.1598 2.70317 12.1194 2.199 10.9023C1.69483 9.6851 1.56292 8.34575 1.81994 7.05361C2.07697 5.76146 2.71138 4.57455 3.64297 3.64297C4.57455 2.71138 5.76146 2.07697 7.05361 1.81994C8.34575 1.56292 9.6851 1.69483 10.9023 2.199C12.1194 2.70317 13.1598 3.55695 13.8917 4.65238C14.6237 5.74781 15.0143 7.03568 15.0143 8.35314C15.0124 10.1192 14.3099 11.8123 13.0611 13.0611C11.8123 14.3099 10.1192 15.0124 8.35314 15.0143Z",fill:"#2D3748"})}))}var _={container:"CurrencyList_container__Kxj25",searchWrapper:"CurrencyList_searchWrapper__rfUbm",searchInput:"CurrencyList_searchInput__9kWDx",list:"CurrencyList_list__mpBax",loading:"CurrencyList_loading__z0LZo"};function v(e){var n=e.className,r=e.companyId,a=(0,c.useMemo)((function(){return new i.Z}),[]),u=function(e){var n=(0,c.useState)(),r=(0,t.Z)(n,2),a=r[0],s=r[1],i=(0,c.useState)(!1),u=(0,t.Z)(i,2),o=u[0],l=u[1],d=(0,c.useState)(),f=(0,t.Z)(d,2),p=f[0],h=f[1];return(0,c.useEffect)((function(){var n=e;s(void 0),l(!0),h(void 0),e.then((function(r){n===e&&(s(r),h(void 0))})).catch((function(r){n===e&&(h(r),s(void 0))})).finally((function(){n===e&&l(!1)}))}),[e]),{data:a,loading:o,error:p}}((0,c.useMemo)((function(){return a.cancelAndReuse("unmounting or companyId changed"),a.getCurrencyList(r)}),[a,r])),o=u.data,l=u.loading,d=(0,c.useState)(0),f=(0,t.Z)(d,2),C=f[0],v=f[1],g=(0,c.useState)(""),x=(0,t.Z)(g,2),y=x[0],j=x[1];return(0,c.useEffect)((function(){v(0)}),[a,r]),(0,p.jsxs)("div",{className:s()(n,_.container),children:[(0,p.jsxs)("div",{className:_.searchWrapper,children:[(0,p.jsx)(m,{className:_.searchIcon}),(0,p.jsx)("input",{type:"text",value:y,onChange:function(e){j(e.target.value)},placeholder:"Search",className:_.searchInput})]}),(0,p.jsxs)("div",{className:_.list,children:[l&&(0,p.jsx)("div",{className:_.loading,children:"loading..."}),null===o||void 0===o?void 0:o.filter((function(e){var n=y.toLowerCase();return e.name.toLowerCase().includes(n)||e.code.includes(n)})).map((function(e,n){return(0,p.jsx)(h,{radioGroup:"currencies",currency:e,selected:n===C,onChange:function(){v(n)}},e.id)}))]})]})}var g=r(4831),x="Home_container__QBVPH";function y(){var e=(0,g.i)((function(e){return e.user.user.company}));return(0,p.jsx)("div",{className:x,children:(0,p.jsx)(v,{companyId:e})})}},1694:function(e,n){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var c=a.apply(null,r);c&&e.push(c)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var i in r)t.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=524.a86b0acd.chunk.js.map