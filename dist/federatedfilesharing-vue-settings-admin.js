(()=>{"use strict";var e,r,n,o={50482:(e,r,n)=>{var o=n(85471),a=n(21777),i=n(53334),d=n(32981),s=n(85168),l=n(63814),c=n(56760),u=n(65043),h=n(32073),p=n(88837),v=(n(51257),n(96763));const f={name:"AdminSettings",components:{NcCheckboxRadioSwitch:h.A,NcSettingsSection:p.A},data:()=>({outgoingServer2serverShareEnabled:(0,d.C)("federatedfilesharing","outgoingServer2serverShareEnabled"),incomingServer2serverShareEnabled:(0,d.C)("federatedfilesharing","incomingServer2serverShareEnabled"),outgoingServer2serverGroupShareEnabled:(0,d.C)("federatedfilesharing","outgoingServer2serverGroupShareEnabled"),incomingServer2serverGroupShareEnabled:(0,d.C)("federatedfilesharing","incomingServer2serverGroupShareEnabled"),federatedGroupSharingSupported:(0,d.C)("federatedfilesharing","federatedGroupSharingSupported"),lookupServerEnabled:(0,d.C)("federatedfilesharing","lookupServerEnabled"),lookupServerUploadEnabled:(0,d.C)("federatedfilesharing","lookupServerUploadEnabled"),internalOnly:(0,d.C)("federatedfilesharing","internalOnly"),sharingFederatedDocUrl:(0,d.C)("federatedfilesharing","sharingFederatedDocUrl")}),methods:{async update(e,r){await(0,c.C)();const n=(0,l.KT)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"files_sharing",key:e}),o=r?"yes":"no";try{var a;const{data:e}=await u.Ay.post(n,{value:o});this.handleResponse({status:null===(a=e.ocs)||void 0===a||null===(a=a.meta)||void 0===a?void 0:a.status})}catch(e){this.handleResponse({errorMessage:t("federatedfilesharing","Unable to update federated files sharing config"),error:e})}},async handleResponse(e){let{status:r,errorMessage:t,error:n}=e;"ok"!==r&&((0,s.Qg)(t),v.error(t,n))}}},g=(0,n(14486).A)(f,(function(){var e=this,r=e._self._c;return r("NcSettingsSection",{attrs:{name:e.t("federatedfilesharing","Federated Cloud Sharing"),description:e.t("federatedfilesharing","Adjust how people can share between servers. This includes shares between people on this server as well if they are using federated sharing."),"doc-url":e.sharingFederatedDocUrl}},[r("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.outgoingServer2serverShareEnabled},on:{"update:checked":[function(r){e.outgoingServer2serverShareEnabled=r},function(r){return e.update("outgoing_server2server_share_enabled",e.outgoingServer2serverShareEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow people on this server to send shares to other servers (this option also allows WebDAV access to public shares)"))+"\n\t")]),e._v(" "),r("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.incomingServer2serverShareEnabled},on:{"update:checked":[function(r){e.incomingServer2serverShareEnabled=r},function(r){return e.update("incoming_server2server_share_enabled",e.incomingServer2serverShareEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow people on this server to receive shares from other servers"))+"\n\t")]),e._v(" "),e.federatedGroupSharingSupported?r("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.outgoingServer2serverGroupShareEnabled},on:{"update:checked":[function(r){e.outgoingServer2serverGroupShareEnabled=r},function(r){return e.update("outgoing_server2server_group_share_enabled",e.outgoingServer2serverGroupShareEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow people on this server to send shares to groups on other servers"))+"\n\t")]):e._e(),e._v(" "),e.federatedGroupSharingSupported?r("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.incomingServer2serverGroupShareEnabled},on:{"update:checked":[function(r){e.incomingServer2serverGroupShareEnabled=r},function(r){return e.update("incoming_server2server_group_share_enabled",e.incomingServer2serverGroupShareEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow people on this server to receive group shares from other servers"))+"\n\t")]):e._e(),e._v(" "),r("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.lookupServerEnabled},on:{"update:checked":[function(r){e.lookupServerEnabled=r},function(r){return e.update("lookupServerEnabled",e.lookupServerEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Search global and public address book for people"))+"\n\t")]),e._v(" "),r("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.lookupServerUploadEnabled},on:{"update:checked":[function(r){e.lookupServerUploadEnabled=r},function(r){return e.update("lookupServerUploadEnabled",e.lookupServerUploadEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow people to publish their data to a global and public address book"))+"\n\t")])],1)}),[],!1,null,null,null).exports;n.nc=btoa((0,a.do)()),o.Ay.mixin({methods:{t:i.Tl}}),(0,d.C)("federatedfilesharing","internalOnly",!1)||(new(o.Ay.extend(g))).$mount("#vue-admin-federated")}},a={};function i(e){var r=a[e];if(void 0!==r)return r.exports;var t=a[e]={id:e,loaded:!1,exports:{}};return o[e].call(t.exports,t,t.exports,i),t.loaded=!0,t.exports}i.m=o,e=[],i.O=(r,t,n,o)=>{if(!t){var a=1/0;for(c=0;c<e.length;c++){t=e[c][0],n=e[c][1],o=e[c][2];for(var d=!0,s=0;s<t.length;s++)(!1&o||a>=o)&&Object.keys(i.O).every((e=>i.O[e](t[s])))?t.splice(s--,1):(d=!1,o<a&&(a=o));if(d){e.splice(c--,1);var l=n();void 0!==l&&(r=l)}}return r}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[t,n,o]},i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+"-"+e+".js?v="+{4254:"5c2324570f66dff0c8a1",9480:"b0012270c3997bb4738b"}[e],i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},n="nextcloud:",i.l=(e,t,o,a)=>{if(r[e])r[e].push(t);else{var d,s;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var u=l[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+o){d=u;break}}d||(s=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.setAttribute("data-webpack",n+o),d.src=e),r[e]=[t];var h=(t,n)=>{d.onerror=d.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=h.bind(null,d.onerror),d.onload=h.bind(null,d.onload),s&&document.head.appendChild(d)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),i.j=5098,(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var r=i.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{i.b=document.baseURI||self.location.href;var e={5098:0};i.f.j=(r,t)=>{var n=i.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=i.p+i.u(r),d=new Error;i.l(a,(t=>{if(i.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}}),"chunk-"+r,r)}},i.O.j=r=>0===e[r];var r=(r,t)=>{var n,o,a=t[0],d=t[1],s=t[2],l=0;if(a.some((r=>0!==e[r]))){for(n in d)i.o(d,n)&&(i.m[n]=d[n]);if(s)var c=s(i)}for(r&&r(t);l<a.length;l++)o=a[l],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(c)},t=self.webpackChunknextcloud=self.webpackChunknextcloud||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),i.nc=void 0;var d=i.O(void 0,[4208],(()=>i(50482)));d=i.O(d)})();
//# sourceMappingURL=federatedfilesharing-vue-settings-admin.js.map?v=ffdfcf3d8f5029453700