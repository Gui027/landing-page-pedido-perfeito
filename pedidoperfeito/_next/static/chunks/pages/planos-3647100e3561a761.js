(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6644],{34694:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/planos",function(){return i(6558)}])},22149:function(e,t,i){"use strict";i.d(t,{s:function(){return s}});var l=i(85893);i(67294);let s=e=>{let{top:t,bottom:i,left:s,right:r}=e;return(0,l.jsx)("div",{style:{position:"absolute",top:t,bottom:i,left:s,right:r},className:"w-72 2xl:w-96 h-72 2xl:h-96 bg-primary-200 rounded-full blur-3xl bg-opacity-40 z-0"})}},83889:function(e,t,i){"use strict";i.d(t,{z:function(){return n}});var l=i(85893),s=i(28516),r=i(41664),a=i.n(r);function n(e){let{children:t,isTypeBorder:i=!1,href:r="/"}=e,{buttonClickEvent:n}=function(){let{trackMixPanel:e}=(0,s.U)();return{buttonClickEvent:t=>{let{title:i,url:l}=t;e({eventName:"buttonClick",properties:{title:i,url:l}})}}}();return(0,l.jsx)(a(),{href:r,className:"".concat(i?"border-2 border-primary-500 text-primary-500 font-semibold py-2 px-6 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300":"bg-primary-500 hover:bg-primary-700 transition-all duration-300 text-white font-semibold py-2 px-6 rounded-full"),onClick:()=>{if(i){let e=document.getElementById("kodagptBtnIcon");e&&e.click()}else n({title:(null==t?void 0:t.toString())||"Button",url:r})},children:t})}},28033:function(e,t,i){"use strict";i.d(t,{H:function(){return m}});var l=i(85893),s=i(67294),r=i(1451),a=i(37106),n=i(70231),o=i(5434),d=i(66653),c=i(60155),u=i(83889),x=i(22149),p=i(35738),f=i(56387);function m(){let{t:e}=(0,p.$)("advantages"),{language:t}=(0,f.Z)(),i=[{title:e("trust"),description:e("trustText"),icon:(0,l.jsx)(r.k3v,{size:60})},{title:e("efficiency"),description:e("efficiencyText"),icon:(0,l.jsx)(c.aoQ,{size:60})},{title:e("profitability"),description:e("profitabilityText"),icon:(0,l.jsx)(n.HOL,{size:60})},{title:e("insights"),description:e("insightsText"),icon:(0,l.jsx)(o.YgO,{size:60})},{title:e("productivity"),description:e("productivityText"),icon:(0,l.jsx)(d.U2N,{size:60})},{title:e("constancy"),description:e("constancyText"),icon:(0,l.jsx)(a.sEp,{size:60})}],[m,h]=(0,s.useState)(null);return(0,s.useEffect)(()=>{h(i[0])},[t]),(0,l.jsx)("main",{className:"w-full flex items-center justify-center relative bg-neutral-50 py-28 font-poppins",children:(0,l.jsxs)("article",{className:"flex flex-col-reverse lg:flex-row w-full max-w-7xl gap-4 lg:gap-28 px-5 sm:px-10",children:[(0,l.jsxs)("div",{className:"md:w-1/2 h-full flex flex-col items-center lg:items-start",children:[(0,l.jsx)("h1",{className:"text-4xl font-bold mb-4 hidden lg:flex",children:e("title")}),(0,l.jsx)("p",{className:"mb-10 text-center lg:text-left",children:null==m?void 0:m.description}),(0,l.jsx)(u.z,{href:"/login",children:e("getNowButton")})]}),(0,l.jsx)("div",{className:"flex overflow-x-auto snap-mandatory snap-x lg:overflow-hidden lg:grid grid-cols-3 gap-3 z-20",children:i.map(e=>(0,l.jsx)("div",{className:"snap-start cursor-pointer min-w-[160px] border border-primary-100 w-40 h-40 flex items-center justify-center rounded-lg ".concat((null==m?void 0:m.title)===e.title?"bg-primary-500 text-primary-50":"bg-white text-neutral-700"),onClick:()=>h(e),children:(0,l.jsxs)("div",{className:"flex flex-col items-center text-center gap-2",children:[e.icon,(0,l.jsx)("h2",{className:"text-base font-bold",children:e.title})]})},e.title))}),(0,l.jsx)("h1",{className:"text-4xl font-bold mb-4 flex lg:hidden text-center",children:e("title")}),(0,l.jsx)(x.s,{top:"0px",right:"0px"})]})})}},39019:function(e,t,i){"use strict";i.d(t,{n:function(){return x}});var l=i(85893),s=i(67294),r=i(11163),a=i(89583),n=i(66653),o=i(35738);function d(e){let{plan:t,isMonthly:i}=e,s="Pro"===t.name,d="Gr\xe1tis"===t.name,c="B\xe1sico"===t.name,u="Enterprise"===t.name,{t:x}=(0,o.$)("pricing"),p=function(e,t){let i=t("plans");return i[e]||{}}(t.name,x),f=(0,r.useRouter)(),m=d?"bg-primary-300":c?"bg-primary-500":s?"bg-primary-700":u?"bg-primary-900":void 0,h=()=>u||d||i?null:(0,l.jsx)("span",{className:"text-primary-500 bg-white text-sm font-medium py-1 px-3 rounded-full ml-auto",children:"16% OFF"});return(0,l.jsxs)("div",{className:"relative snap-start flex-grow min-w-fit flex flex-col w-full items-start pb-6 font-poppins rounded-lg text-center bg-white",children:[(0,l.jsx)(()=>(0,l.jsxs)("div",{className:"".concat(m," text-white rounded-t-lg w-full text-lg py-3 px-5 mb-6 flex  relative"),children:[p.name,(0,l.jsx)(h,{})]}),{}),(0,l.jsx)(()=>u?(0,l.jsx)("div",{className:"mt-2 mb-4 flex px-5",children:(0,l.jsx)("p",{className:"text-neutral-700 font-bold text-2xl mt-auto",children:p.contact})}):d?(0,l.jsxs)("div",{className:"mb-4 flex text-neutral-700 font-bold px-5",children:[(0,l.jsx)("p",{className:"text-xl mt-auto mr-1",children:x("money")}),(0,l.jsx)("p",{className:"text-4xl",children:t.price}),(0,l.jsx)("p",{className:"text-lg mt-auto",children:",00"})]}):(0,l.jsxs)("div",{className:"mb-4 flex text-neutral-700 font-bold px-5",children:[(0,l.jsx)("p",{className:"text-xl mt-auto mr-1",children:x("money")}),(0,l.jsx)("p",{className:"text-4xl",children:i?t.price:t.priceYearly}),(0,l.jsx)("p",{className:"text-lg mt-auto",children:",90"}),(0,l.jsxs)("p",{className:"font-light text-base ml-1 mt-auto",children:[" ",i?x("montly"):x("year")]})]}),{}),(0,l.jsx)("ul",{className:"my-4 text-gray-600 gap-4 flex flex-col items-start text-left w-full px-5",children:p.features.map((e,t)=>(0,l.jsxs)("li",{className:"flex items-start gap-2",children:[e.included?(0,l.jsx)(a.FJM,{className:"text-neutral-700 min-w-fit",size:18}):(0,l.jsx)(n.rXq,{className:"text-error-500 min-w-fit opacity-80",size:18}),(0,l.jsx)("p",{className:"text-sm ".concat(e.included?"":"opacity-80"),children:e.feature})]},t))}),(0,l.jsx)("div",{className:"w-full px-5 mt-auto",children:(0,l.jsx)("button",{onClick:()=>f.push("/login"),className:"".concat(m," text-white mt-4 w-full hover:bg-opacity-90 rounded-full px-8 py-2 transition-colors duration-300"),children:x("subscription")})})]})}let c=[{name:"Gr\xe1tis",price:"0",priceYearly:"0",features:[{feature:"50 mensagens por m\xeas",included:!0},{feature:"2 chatbots",included:!0},{feature:"500.000 caracteres por chatbot",included:!0},{feature:"Adicione websites ilimitados",included:!0},{feature:"Upload multiplos arquivos",included:!0},{feature:"Analytics",included:!0},{feature:"Op\xe7\xe3o para usar o GPT-4",included:!1},{feature:"+120 modelos de IA dispon\xedveis",included:!1},{feature:"Integra\xe7\xe3o com WhatsApp",included:!1},{feature:"Acesso a API",included:!1},{feature:"E-mail e chat suporte",included:!1},{feature:"Remover o 'Feito por KodaGPT'",included:!1},{feature:"Use seus pr\xf3prios dom\xednios personalizados",included:!1}]},{name:"B\xe1sico",price:"89",priceYearly:"890",features:[{feature:"2.000 mensagens por m\xeas",included:!0},{feature:"10 chatbots",included:!0},{feature:"2.000.000 de caracteres por chatbot",included:!0},{feature:"Adicione websites ilimitados",included:!0},{feature:"Upload multiplos arquivos",included:!0},{feature:"Analytics",included:!0},{feature:"Op\xe7\xe3o para usar o GPT-4",included:!1},{feature:"+120 modelos de IA dispon\xedveis",included:!1},{feature:"Remover o 'Feito por KodaGPT'",included:!1},{feature:"Acesso a API",included:!1},{feature:"E-mail e chat suporte",included:!1},{feature:"Remover o 'Feito por KodaGPT'",included:!1},{feature:"Use seus pr\xf3prios dom\xednios personalizados",included:!1}]},{name:"Pro",price:"389",priceYearly:"3.890",features:[{feature:"10.000 mensagens por m\xeas",included:!0},{feature:"15 chatbots",included:!0},{feature:"20.000.000 de caracteres por chatbot",included:!0},{feature:"Adicione websites ilimitados",included:!0},{feature:"Upload multiplos arquivos",included:!0},{feature:"Analytics",included:!0},{feature:"Op\xe7\xe3o para usar o GPT-4",included:!0},{feature:"+120 modelos de IA dispon\xedveis",included:!0},{feature:"Integra\xe7\xe3o com WhatsApp",included:!0},{feature:"Acesso a API",included:!0},{feature:"E-mail e chat suporte",included:!0},{feature:"Remover o 'Feito por KodaGPT'",included:!1},{feature:"Use seus pr\xf3prios dom\xednios personalizados",included:!1}]},{name:"Enterprise",price:"-",priceYearly:"-",features:[{feature:"> 15.000 mensagens por m\xeas",included:!0},{feature:"> 20 chatbots",included:!0},{feature:"> 40.000.000 de caracteres por chatbot",included:!0},{feature:"Adicione websites ilimitados",included:!0},{feature:"Upload multiplos arquivos",included:!0},{feature:"Analytics",included:!0},{feature:"Op\xe7\xe3o para usar o GPT-4",included:!0},{feature:"+120 modelos de IA dispon\xedveis",included:!0},{feature:"Integra\xe7\xe3o com WhatsApp",included:!0},{feature:"Acesso a API",included:!0},{feature:"E-mail e chat suporte",included:!0},{feature:"Remover o 'Feito por KodaGPT'",included:!0},{feature:"Use seus pr\xf3prios dom\xednios personalizados",included:!0}]}];var u=i(22149);function x(){let[e,t]=(0,s.useState)(!0),i="bg-primary-500 text-white px-4 py-2 rounded-xl sm:rounded-full",r="bg-white text-neutral-700 px-4 py-2 rounded-xl sm:rounded-full hover:bg-primary-100",{t:a}=(0,o.$)("pricing");return(0,l.jsxs)("main",{className:"w-full flex items-center justify-center relative bg-neutral-50 py-10 font-poppins",children:[(0,l.jsx)(u.s,{top:"-20px",left:"-100px"}),(0,l.jsxs)("article",{className:"flex flex-col items-center w-full max-w-7xl px-5 sm:px-10 z-20",children:[(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between w-full",children:[(0,l.jsx)("h2",{className:"text-4xl font-bold text-neutral-700",children:a("title")}),(0,l.jsxs)("div",{className:"flex justify-center flex-col mt-3 md:mt-0 sm:flex-row gap-3 p-2 bg-white border border-primary-100 rounded-2xl sm:rounded-full font-poppins",children:[(0,l.jsx)("button",{className:e?i:r,onClick:()=>t(!e),children:a("planTypeMonth")}),(0,l.jsx)("button",{className:e?r:i,onClick:()=>t(!e),children:a("planTypeYear")})]})]}),(0,l.jsx)("div",{className:"flex lg:grid grid-cols-4 gap-4 mt-10 overflow-x-auto lg:overflow-x-hidden snap-mandatory snap-x w-full",children:c.map((t,i)=>(0,l.jsx)(d,{plan:t,isMonthly:e},i))})]})]})}},6558:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}});var l=i(85893),s=i(28033),r=i(39019),a=i(72440),n=i(56502),o=i(20907);function d(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.$,{title:"Planos"}),(0,l.jsx)(n.h,{}),(0,l.jsxs)("div",{className:"flex flex-col  w-full items-center justify-center pt-14",children:[(0,l.jsx)(r.n,{}),(0,l.jsx)(s.H,{}),(0,l.jsx)(a.$,{})]})]})}}},function(e){e.O(0,[1228,5445,3874,2013,955,8907,260,1778,9570,3777,3061,7071,8609,9774,2888,179],function(){return e(e.s=34694)}),_N_E=e.O()}]);