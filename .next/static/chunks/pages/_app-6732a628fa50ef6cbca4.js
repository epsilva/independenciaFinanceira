_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{0:function(t,e,n){n("74v/"),t.exports=n("nOHt")},"74v/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("hUgY")}])},BsWD:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("a3WO");function o(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},ODXe:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("BsWD");function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},YFqc:function(t,e,n){t.exports=n("cTJO")},a3WO:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},cTJO:function(t,e,n){"use strict";var r=n("zoAU"),o=n("7KCV");e.__esModule=!0,e.default=void 0;var i,a=o(n("q1tI")),c=n("elyg"),s=(n("g/15"),n("nOHt")),u=new Map,l=window.IntersectionObserver,p={};var f=function(t,e){var n=i||(l?i=new l((function(t){t.forEach((function(t){if(u.has(t.target)){var e=u.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(i.unobserve(t.target),u.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(t),u.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}u.delete(t)}):function(){}};function d(t,e,n,r){(0,c.isLocalURL)(e)&&(t.prefetch(e,n,r).catch((function(t){0})),p[e+"%"+n]=!0)}var h=function(t){var e=!1!==t.prefetch,n=a.default.useState(),o=r(n,2),i=o[0],u=o[1],h=(0,s.useRouter)(),v=h&&h.pathname||"/",g=a.default.useMemo((function(){var e=(0,c.resolveHref)(v,t.href);return{href:e,as:t.as?(0,c.resolveHref)(v,t.as):e}}),[v,t.href,t.as]),b=g.href,m=g.as;a.default.useEffect((function(){if(e&&l&&i&&i.tagName&&(0,c.isLocalURL)(b)&&!p[b+"%"+m])return f(i,(function(){d(h,b,m)}))}),[e,i,b,m,h]);var x=t.children,y=t.replace,w=t.shallow,O=t.scroll;"string"===typeof x&&(x=a.default.createElement("a",null,x));var _=a.Children.only(x),j={ref:function(t){t&&u(t),_&&"object"===typeof _&&_.ref&&("function"===typeof _.ref?_.ref(t):"object"===typeof _.ref&&(_.ref.current=t))},onClick:function(t){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(t),t.defaultPrevented||function(t,e,n,r,o,i,a){("A"!==t.currentTarget.nodeName||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&(0,c.isLocalURL)(n))&&(t.preventDefault(),null==a&&(a=r.indexOf("#")<0),e[o?"replace":"push"](n,r,{shallow:i}).then((function(t){t&&a&&(window.scrollTo(0,0),document.body.focus())})))}(t,h,b,m,y,w,O)}};return e&&(j.onMouseEnter=function(t){(0,c.isLocalURL)(b)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(t),d(h,b,m,{priority:!0}))}),!t.passHref&&("a"!==_.type||"href"in _.props)||(j.href=(0,c.addBasePath)(m)),a.default.cloneElement(_,j)};e.default=h},hUgY:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("nOHt"),a=n("vOnD"),c=n("o0o1"),s=n.n(c),u=n("HaE+"),l=n("ck4X"),p=a.c.header.withConfig({displayName:"styles__HeaderContainer",componentId:"sc-14v2o85-0"})(["border-bottom:1px solid var(--divider);position:fixed;padding:0 20px;height:80px;display:flex;align-items:center;justify-content:space-between;top:0;width:100%;border-radius:0px;background:#4154b3;h3{margin-left:60px;color:#fff;}.date{color:var(--secondary);font-size:14px;text-transform:uppercase;}.avatar{background:var(--divider);border-radius:50%;position:absolute;bottom:12px;right:0;overflow:hidden;margin-right:20px;}.avatar,.avatar img{width:40px;height:40px;}.imagem{height:40px;margin-right:8px;svg{fill:#fff;width:40px;height:40px;}}"]),f=n("ODXe"),d=n("ZMKu"),h=n("wx14"),v=(a.c.div.withConfig({displayName:"styles__Container",componentId:"sc-9mwtiz-0"})([""]),a.c.div.withConfig({displayName:"styles__IconPaceHolder",componentId:"sc-9mwtiz-1"})(["width:40px;height:40px;border-radius:50%;flex:40px 0;margin-right:20px;"])),g=a.c.div.withConfig({displayName:"styles__TextPlaceHolder",componentId:"sc-9mwtiz-2"})(["border-radius:5px;width:100%;flex:1;color:#000;"]),b=Object(a.c)(d.a.li).withConfig({displayName:"styles__Li",componentId:"sc-9mwtiz-3"})(["list-style:none;margin-bottom:20px;display:flex;align-items:center;cursor:pointer;div.outline{position:absolute;top:-20px;left:-20px;right:-20px;bottom:-20px;border:10px solid white;border-radius:4px;}"]),m=Object(a.c)(d.a.nav).withConfig({displayName:"styles__Nav",componentId:"sc-9mwtiz-4"})(["position:",";top:0;left:0;bottom:0;width:300px;ul{position:",";display:",";}.background{position:inherit;top:0;left:0;bottom:0;width:300px;background:#fff;-webkit-box-shadow:0px 10px 13px -7px #000000,5px 5px 15px 5px rgba(0,0,0,0);box-shadow:0px 10px 13px -7px #000000,5px 5px 15px 5px rgba(0,0,0,0);}"],(function(t){return t.openNav?"inherit":"absolute"}),(function(t){return t.openNav?"absolute":"initial"}),(function(t){return t.openNav?"block":"none"})),x=Object(a.c)(d.a.ul).withConfig({displayName:"styles__Ul",componentId:"sc-9mwtiz-5"})(["padding:25px;top:100px;width:100%;"]),y=a.c.button.withConfig({displayName:"styles__Button",componentId:"sc-9mwtiz-6"})(["outline:none;border:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;cursor:pointer;position:absolute;top:18px;left:15px;width:50px;height:50px;border-radius:50%;background:transparent;"]),w=o.a.createElement,O=function(t){return w(d.a.path,Object(h.a)({fill:"transparent",strokeWidth:"3",stroke:"hsl(0, 0%, 18%)",strokeLinecap:"round"},t))},_=function(t){var e=t.toggle;return w(y,{onClick:e},w("svg",{width:"23",height:"23",viewBox:"0 0 23 23"},w(O,{variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),w(O,{d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}},transition:{duration:.1}}),w(O,{variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})))},j=n("YFqc"),C=n.n(j),k=o.a.createElement,E={open:{y:0,opacity:1,transition:{y:{stiffness:1e3,velocity:-100}}},closed:{y:50,opacity:0,transition:{y:{stiffness:1e3}}}},N=["#FF008C","#D309E1","#9C1AFF","#7700FF","#4400FF"],I=function(t){var e=t.menu,n={border:"2px solid ".concat(N[e.id])};return k(b,{variants:E,whileHover:{scale:1.1},whileTap:{scale:.95}},k(C.a,{href:e.rota},k(v,{style:n})),k(C.a,{href:e.rota},k(g,null,e.titulo)))},z=o.a.createElement,L={open:{transition:{staggerChildren:.07,delayChildren:.2}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}},M=function(t){var e=t.toggle;return z(x,{variants:L},P.map((function(t){return z("div",{onClick:e,key:t.id},z(I,{menu:t,key:t.id}))})))},P=[{id:1,rota:"/",titulo:"P\xe1gina Inicial"},{id:2,rota:"/formcalc",titulo:"Calculadoras"}],F=o.a.createElement,H={open:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return{clipPath:"circle(".concat(2*t+200,"px at 40px 40px)"),transition:{type:"spring",stiffness:20,restDelta:2}}},closed:{clipPath:"circle(30px at 40px 40px)",transition:{delay:.5,type:"spring",stiffness:400,damping:40}}},R=function(){var t=Object(d.b)(!1,!0),e=Object(f.a)(t,2),n=e[0],o=e[1],i=Object(r.useRef)(null),a=function(t){var e=Object(r.useRef)({width:0,height:0});return Object(r.useEffect)((function(){e.current.width=t.current.offsetWidth,e.current.height=t.current.offsetHeight}),[]),e.current}(i).height,c=Object(r.useState)({openNav:!1}),s=c[0],u=c[1];return Object(r.useEffect)((function(){n?u({openNav:n}):setTimeout((function(){u({openNav:n})}),1e3)}),[n]),F(m,{openNav:s.openNav,initial:!1,animate:n?"open":"closed",custom:a,ref:i},F(d.a.div,{className:"background",variants:H}),F(M,{toggle:function(){return o()}}),F(_,{toggle:function(){return o()}}))},T=n("vDqi"),D=n.n(T),A=o.a.createElement;var S=function(){var t=Object(r.useState)(),e=t[0],n=t[1];return Object(r.useEffect)((function(){function t(){return(t=Object(u.a)(s.a.mark((function t(){var e,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.get("https://api.github.com/users/epsilva");case 2:e=t.sent,r=e.data,n({avatar:r.avatar_url,url:r.html_url,name:r.name});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),A(p,null,A(o.a.Fragment,null,A(R,null),A("h3",null,"Ferramentas do Investidor")),A("a",{href:null===e||void 0===e?void 0:e.url,target:"_blank"},A(l.a,{size:"60",name:(null===e||void 0===e?void 0:e.name)||"Esdras Pinheiro",src:null===e||void 0===e?void 0:e.avatar,round:!0,initials:"2"})))};function U(){var t,e,n=(t=["\n  * {\n    margin: 0;\n    padding: 0 0 0 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background: ",";\n    color: ",";\n    font: 400 16px Roboto, sans-serif;\n    height: 100vh;\n    padding-top: 60px;\n\n    h1, h2, h3, h4, h5, h5, p {\n      color: #212529\n    }\n}\n\ninput {\n    display: block;\n    box-sizing: border-box;\n    width: 100%;\n    border-radius: 4px;\n    border: 1px solid #000;\n    padding: 10px 15px;\n    margin-bottom: 10px;\n    font-size: 14px;\n    position: relative;\n    background: #fff;\n  }\n  .inpt-error {\n      border: 2px solid red;\n  }\n\n  p {\n    color: #212529;\n    text-align: center;\n  }\n\n#root {\n    display: flex;\n    justify-content: center;\n  }\n\n  .sp-error {\n    color: red;\n  }\n"],e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}})));return U=function(){return n},n}var K=Object(a.b)(U(),(function(t){return t.theme.colors.background}),(function(t){return t.theme.colors.text})),W={colors:{background:"#fafafa",text:"#000",primary:"#8257e6"}},q=o.a.createElement;e.default=function(t){var e=t.Component,n=t.pageProps,o=Object(i.useRouter)();return Object(r.useEffect)((function(){var t=function(t){!function(t){window.gtag("config","G-REJ3VPCC3Q",{page_path:t})}(t)};return o.events.on("routeChangeComplete",t),function(){o.events.off("routeChangeComplete",t)}}),[o.events]),q(a.a,{theme:W},q(e,n),q(K,null),q(S,null))}},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))}},[[0,0,1,4,2,3,5,7,6]]]);