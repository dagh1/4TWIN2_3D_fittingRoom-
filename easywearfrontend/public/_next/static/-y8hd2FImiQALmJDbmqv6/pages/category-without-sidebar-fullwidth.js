(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{WGHE:function(t,a,e){"use strict";var c=e("q1tI"),n=e.n(c),r=e("YFqc"),o=e.n(r),s=e("/MKj"),l=e("GGqY"),i=n.a.createElement;a.a=function(t){var a=t.id,e=Object(s.c)();return i(o.a,{href:"#"},i("a",{"data-tip":"Add to Compare","data-place":"left",onClick:function(t){t.preventDefault(),function(t){e({type:"ADD_TO_COMPARE",id:t}),l.c.success("Added to the compare list",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})}(a)}},i("i",{className:"fas fa-sync"})))}},kR1B:function(t,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category-without-sidebar-fullwidth",function(){return e("yeCS")}])},yeCS:function(t,a,e){"use strict";e.r(a);var c=e("1OyB"),n=e("vuIU"),r=e("JX7q"),o=e("Ji7U"),s=e("md7G"),l=e("foSv"),i=e("rePB"),u=e("wx14"),d=e("q1tI"),f=e.n(d),p=e("/MKj"),m=e("zCU4"),h=e("v6Hh"),v=e("rIQk"),b=e("tDAt"),O=e("YFqc"),j=e.n(O),y=e("7smD"),N=e("EsL0"),g=e("WGHE"),C=f.a.createElement;function w(t){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,c=Object(l.a)(t);if(a){var n=Object(l.a)(this).constructor;e=Reflect.construct(c,arguments,n)}else e=c.apply(this,arguments);return Object(s.a)(this,e)}}var D=function(t){Object(o.a)(e,t);var a=w(e);function e(){var t;Object(c.a)(this,e);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return t=a.call.apply(a,[this].concat(o)),Object(i.a)(Object(r.a)(t),"state",{modalOpen:!1,modalData:null}),Object(i.a)(Object(r.a)(t),"openModal",(function(){t.setState({modalOpen:!0})})),Object(i.a)(Object(r.a)(t),"closeModal",(function(){t.setState({modalOpen:!1})})),Object(i.a)(Object(r.a)(t),"compareButton",(function(a){return t.props.CompareProducts.filter((function(t){return t.id===a})).length>0?C(j.a,{href:"#"},C("a",{"data-tip":"Already Added","data-place":"left",onClick:function(t){t.preventDefault()},disabled:!0,className:"disabled"},C("i",{className:"fas fa-sync"}))):C(g.a,{id:a})})),Object(i.a)(Object(r.a)(t),"handleModalData",(function(a){t.setState({modalData:a})})),t}return Object(n.a)(e,[{key:"render",value:function(){var t=this,a=this.props.products,e=this.state.modalOpen;return C(f.a.Fragment,null,a.map((function(a,e){return C("div",{className:"col-lg-2 col-md-6 products-col-item",key:e},C("div",{className:"single-product-box"},C("div",{className:"product-image"},C(j.a,{href:"/product/[id]",as:"/product/".concat(a.id)},C("a",null,C("img",{src:a.image,alt:"image"}),C("img",{src:a.imageHover,alt:"image"}))),C("ul",null,C("li",null,C(j.a,{href:"#"},C("a",{"data-tip":"Quick View","data-place":"left",onClick:function(e){e.preventDefault(),t.openModal(),t.handleModalData(a)}},C("i",{className:"far fa-eye"})))),C("li",null,C(j.a,{href:"#"},C("a",{"data-tip":"Add to Wishlist","data-place":"left"},C("i",{className:"far fa-heart"})))),C("li",null,t.compareButton(a.id)))),C("div",{className:"product-content"},C("h3",null,C(j.a,{href:"/product/[id]",as:"/product/".concat(a.id)},C("a",null,a.title))),C("div",{className:"product-price"},C("span",{className:"new-price"},"$",a.price)),C("div",{className:"rating"},C("i",{className:"fas fa-star"}),C("i",{className:"fas fa-star"}),C("i",{className:"fas fa-star"}),C("i",{className:"fas fa-star"}),C("i",{className:"far fa-star"})),C(N.a,a))))})),e?C(y.a,{closeModal:this.closeModal,modalData:this.state.modalData}):"")}}]),e}(d.Component),k=f.a.createElement;function R(t){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,c=Object(l.a)(t);if(a){var n=Object(l.a)(this).constructor;e=Reflect.construct(c,arguments,n)}else e=c.apply(this,arguments);return Object(s.a)(this,e)}}var M=function(t){Object(o.a)(e,t);var a=R(e);function e(){var t;Object(c.a)(this,e);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return t=a.call.apply(a,[this].concat(o)),Object(i.a)(Object(r.a)(t),"state",{gridClass:"products-col-four"}),Object(i.a)(Object(r.a)(t),"handleGrid",(function(a){t.setState({gridClass:a})})),t}return Object(n.a)(e,[{key:"render",value:function(){var t=this.state.gridClass,a=this.props,e=a.products,c=a.CompareProducts;return k(f.a.Fragment,null,k(m.a,null),k(v.a,{title:"Men's"}),k("section",{className:"products-collections-area ptb-60"},k("div",{className:"container"},k("div",{className:"section-title"},k("h2",null,k("span",{className:"dot"})," Without Sidebar Full Width"))),k("div",{className:"container-fluid"},k("div",{className:"row"},k("div",{className:"col-lg-12 col-md-12"},k(b.a,{onClick:this.handleGrid}),k("div",{id:"products-filter",className:"products-collections-listing row ".concat(t)},k(D,{products:e,CompareProducts:c})))))),k(h.a,null))}}]),e}(d.Component);a.default=function(t){var a=Object(p.d)((function(t){return t.products})),e=Object(p.d)((function(t){return t.addedItemsToCompare}));return k(M,Object(u.a)({},t,{products:a,CompareProducts:e}))}}},[["kR1B",1,2,0,3,4,5,7,13]]]);