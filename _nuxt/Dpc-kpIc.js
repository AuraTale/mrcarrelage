import{G as n,o as s,c as e,a as o,F as p,A as d,B as _,s as u,b as m,w as f,t as l}from"./B-CHVdMF.js";const g=""+new URL("work-scribble.DCIBgaFj.svg",import.meta.url).href,h={class:"projects-area",id:"portfolio"},v={class:"container-fluid"},k={class:"row g-4 portfolio-grid"},y=["onClick"],w={class:"portfolio-box"},C=["src"],x={class:"portfolio-category"},B={class:"portfolio-caption"},A={__name:"PortfolioArea",props:{handleImagePopup:{type:Function},portfolio_data:{type:Array}},setup(r){return(b,a)=>{const c=n("router-link");return s(),e("div",h,[a[0]||(a[0]=o("div",{class:"custom-icon"},[o("img",{src:g,alt:"custom"})],-1)),o("div",v,[o("div",k,[(s(!0),e(p,null,d(r.portfolio_data,(t,i)=>(s(),e("div",{key:i,class:_(`col-md-6 col-xl-${t.col} portfolio-item category-1`)},[o("a",{style:{cursor:"pointer"},onClick:u(j=>r.handleImagePopup(i),["prevent"]),class:"work-popup"},[o("div",w,[m(c,{to:`/single-project${t.id}`},{default:f(()=>[o("img",{src:t.image,alt:"","data-rjs":"2"},null,8,C),o("span",x,l(t.category),1),o("div",B,[o("h1",null,l(t.title),1)])]),_:2},1032,["to"])])],8,y)],2))),128))])])])}}};export{A as _};
