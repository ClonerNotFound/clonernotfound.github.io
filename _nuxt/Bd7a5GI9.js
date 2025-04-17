import w from"./pOSlQrre.js";import{_ as N}from"./R5SQk0JW.js";import{r as d,g as j,c as r,o as c,a as e,d as g,t as a,j as k,n as v,b as x,w as M,F as b,k as h,l as f,m as I}from"./BIsUjrgM.js";const C=window.setInterval,T={class:"custom-border p-8"},V={class:"text-4xl font-mono mb-4"},A={class:"text-cyan-400"},F={class:"text-lg mb-6 font-mono"},B={class:"relative"},E={class:"flex gap-4"},L={__name:"Hero",setup($){const i=d(""),u=d(""),l=d(""),o=d(!0),n=d(0);j(()=>{C(()=>{o.value=!o.value},500),m("@clonernotfound",i,()=>{n.value=1,m("Fullstack разработчик",u,()=>{n.value=2,m("Специализация: Vue/Nuxt, C#",l)})})});function m(t,s,y=()=>{}){let p=0;const _=C(()=>{p<t.length?(s.value+=t.charAt(p),p++):(clearInterval(_),y())},50)}return(t,s)=>{const y=w,p=N;return c(),r("div",T,[e("h1",V,[s[0]||(s[0]=g(" Привет, я ")),e("span",A,a(i.value),1)]),e("p",F,[g(a(u.value),1),s[1]||(s[1]=e("br",null,null,-1)),e("span",B,[g(a(l.value)+" ",1),n.value>=2?(c(),r("span",{key:0,class:v(["text-cyan-400 absolute ml-0.5",{"opacity-0":!o.value}])},"|",2)):k("",!0)])]),e("div",E,[x(p,{to:"#contacts",class:"px-6 py-3 border border-cyan-400 hover:bg-cyan-400/10 transition flex items-center gap-2 font-mono"},{default:M(()=>[x(y,{name:"mdi:email-fast"}),s[2]||(s[2]=g(" Связаться со мной "))]),_:1})])])}}},S={class:"custom-border p-8 font-mono"},D={class:"flex items-center gap-3 mb-6"},P={class:"flex flex-wrap gap-2 mb-6"},R=["onClick"],q={class:"grid grid-cols-1 sm:grid-cols-2 gap-4"},z={class:"p-4 border border-gray-700 hover:border-cyan-400/30 transition rounded-lg group"},H={class:"flex items-center gap-3"},Q={class:"font-medium"},G={class:"ml-auto text-xs text-gray-500 font-mono"},J={class:"mt-3 flex items-center gap-1 text-xs"},K={class:"text-gray-500 ml-2"},O={class:"text-cyan-400"},U={class:"mt-2 text-xs text-gray-500 flex items-center gap-2"},W={class:"flex items-center gap-1"},X={class:"mt-6 pt-4 border-t border-gray-800 text-xs text-gray-500"},Y={class:"flex items-center gap-2"},Z={class:"text-cyan-400 ml-2"},ee={__name:"Skills",setup($){const i=[{name:"Vue",icon:"logos:vue",level:90,category:"Frontend"},{name:"Nuxt",icon:"logos:nuxt",level:90,category:"Frontend"},{name:"C#/.NET",icon:"logos:c-sharp",level:85,category:"Backend"},{name:"Node.js",icon:"logos:nodejs-icon",level:80,category:"Backend"},{name:"Tailwind",icon:"logos:tailwindcss-icon",level:95,category:"Frontend"},{name:"PostgreSQL",icon:"logos:postgresql",level:75,category:"Database"}],u=[...new Set(i.map(o=>o.category))],l=d("All");return(o,n)=>{const m=w;return c(),r("div",S,[e("div",D,[x(m,{name:"mdi:console-line",class:"text-2xl text-cyan-400"}),n[0]||(n[0]=e("h2",{class:"text-3xl text-cyan-400"},"skills.sh",-1)),n[1]||(n[1]=e("span",{class:"text-green-400 ml-auto"},"$",-1))]),e("div",P,[(c(!0),r(b,null,h(["All",...u],t=>(c(),r("button",{onClick:s=>l.value=t,class:v(["px-3 py-1 text-xs border rounded-full transition font-mono",{"border-cyan-400 text-cyan-400":f(l)===t,"border-gray-700 text-gray-400 hover:border-gray-600":f(l)!==t}])}," ./"+a(t.toLowerCase()),11,R))),256))]),e("div",q,[(c(!0),r(b,null,h(i.filter(t=>f(l)==="All"||t.category===f(l)),t=>(c(),r("div",z,[e("div",H,[x(m,{name:t.icon,class:"text-2xl flex-shrink-0"},null,8,["name"]),e("h3",Q,a(t.name),1),e("span",G,a(t.category),1)]),e("div",J,[n[2]||(n[2]=e("span",{class:"text-green-400"},"$",-1)),(c(),r(b,null,h(5,s=>e("span",{class:v(["transition",{"text-cyan-400":s<=Math.ceil(t.level/20),"text-gray-700":s>Math.ceil(t.level/20),"animate-pulse":s===Math.ceil(t.level/20)&&t.level>80}])},a(s<=Math.ceil(t.level/20)?"■":"□"),3)),64)),e("span",K,[g(" /"+a(["usr","var","lib","bin","dev"][Math.floor(Math.random()*5)])+"/ ",1),e("span",O,a(t.name.toLowerCase().replace("/","-")),1)])]),e("div",U,[e("span",W,[e("span",{class:v(["w-2 h-2 rounded-full",t.level>80?"bg-green-400":"bg-yellow-400"])},null,2),g(" "+a(t.level>80?"Active session":"Idle"),1)]),e("span",null,"// "+a(t.category)+" module",1)])]))),256))]),e("div",X,[e("div",Y,[n[3]||(n[3]=e("span",{class:"text-green-400"},"$",-1)),n[4]||(n[4]=e("span",null,"cat skills.sh | wc -l",-1)),e("span",Z,a(i.length)+" entries",1)])])])}}},te={class:"custom-border p-8 font-mono"},se={class:"space-y-2 mb-6 min-h-[120px]"},ne={key:0,class:"ml-2 inline-flex gap-1"},oe={key:1,class:"text-gray-500 text-xs opacity-0 group-hover:opacity-100 transition"},ae={key:0,class:"mt-4 p-3 bg-gray-800/50 border border-gray-700 rounded text-sm animate-fade-in"},le=["disabled"],re={__name:"Projects",setup($){const i=I(),u=[{cmd:"cd projects",desc:"переход в директорию проектов"},{cmd:"ls -la",desc:"получение списка проектов"},{cmd:"cat README.md",desc:"чтение описания"}],l=d(null),o=d(!1),n=d(!1),m=async()=>{if(!o.value){o.value=!0,n.value=!1;for(let t=0;t<u.length;t++)l.value=t,await new Promise(s=>setTimeout(s,300));n.value=!0,await new Promise(t=>setTimeout(t,1e3)),i.push("/projects")}};return(t,s)=>{const y=w;return c(),r("div",te,[s[3]||(s[3]=e("div",{class:"flex items-start gap-3 mb-4"},[e("span",{class:"text-green-400"},"$"),e("div",null,[e("h3",{class:"text-xl text-cyan-400"},"Проекты"),e("p",{class:"text-gray-400 text-sm"},"Доступные команды:")])],-1)),e("div",se,[(c(),r(b,null,h(u,(p,_)=>e("div",{key:_,class:v(["flex items-baseline gap-3 group",{"text-cyan-400":l.value===_&&o.value,"opacity-50":l.value!==null&&l.value!==_}])},[s[1]||(s[1]=e("span",{class:"text-green-400"},">",-1)),e("span",null,a(p.cmd),1),l.value===_&&o.value?(c(),r("span",ne,s[0]||(s[0]=[e("span",{class:"animate-bounce"},".",-1),e("span",{class:"animate-bounce delay-100"},".",-1),e("span",{class:"animate-bounce delay-200"},".",-1)]))):(c(),r("span",oe," // "+a(p.desc),1))],2)),64)),n.value?(c(),r("div",ae,s[2]||(s[2]=[e("p",{class:"text-green-400"},"$ Успешно! Перенаправляю...",-1),e("p",{class:"text-gray-300 mt-1"},"Найдено 3 активных проекта",-1)]))):k("",!0)]),e("button",{onClick:m,disabled:o.value,class:v(["inline-flex items-center gap-2 px-4 py-2 border transition",{"border-cyan-400 hover:bg-cyan-400/10":!o.value,"border-gray-600 text-gray-500 cursor-not-allowed":o.value}])},[x(y,{name:o.value?"svg-spinners:90-ring":"mdi:terminal",class:"text-lg"},null,8,["name"]),e("span",null,a(o.value?"Выполняется...":"Выполнить"),1)],10,le)])}}},ce={class:"min-h-screen bg-gray-950 text-gray-100 p-4"},ie={class:"max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"},de={class:"flex flex-col justify-center space-y-7 lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)]"},ue={class:"flex flex-col justify-center"},_e={__name:"index",setup($){return(i,u)=>(c(),r("div",ce,[e("div",ie,[e("div",de,[x(L),x(re)]),e("div",ue,[x(ee)])])]))}};export{_e as default};
