(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0Dlh":function(e,a){e.exports="/_next/static/images/bestseller-hover-img1-1e013e4744c822b140e193a7439fb3f6.jpg"},"0gkC":function(e,a,l){"use strict";var t=l("1OyB"),n=l("vuIU"),c=l("JX7q"),i=l("Ji7U"),s=l("md7G"),r=l("foSv"),o=l("rePB"),u=l("q1tI"),f=l.n(u),d=l("YFqc"),p=l.n(d),m=l("7smD"),h=l("EsL0"),v=l("WGHE"),N=f.a.createElement;function g(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,t=Object(r.a)(e);if(a){var n=Object(r.a)(this).constructor;l=Reflect.construct(t,arguments,n)}else l=t.apply(this,arguments);return Object(s.a)(this,l)}}var b=function(e){Object(i.a)(l,e);var a=g(l);function l(){var e;Object(t.a)(this,l);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return e=a.call.apply(a,[this].concat(i)),Object(o.a)(Object(c.a)(e),"state",{modalOpen:!1,modalData:null}),Object(o.a)(Object(c.a)(e),"openModal",(function(){e.setState({modalOpen:!0})})),Object(o.a)(Object(c.a)(e),"closeModal",(function(){e.setState({modalOpen:!1})})),Object(o.a)(Object(c.a)(e),"compareButton",(function(a){return e.props.CompareProducts.filter((function(e){return e.id===a})).length>0?N(p.a,{href:"#"},N("a",{"data-tip":"Already Added","data-place":"left",onClick:function(e){e.preventDefault()},disabled:!0,className:"disabled"},N("i",{className:"fas fa-sync"}))):N(v.a,{id:a})})),Object(o.a)(Object(c.a)(e),"handleModalData",(function(a){e.setState({modalData:a})})),e}return Object(n.a)(l,[{key:"render",value:function(){var e=this,a=this.props.products,l=this.state.modalOpen;return N(f.a.Fragment,null,a.map((function(a,l){return N("div",{className:"col-lg-4 col-sm-6 col-md-4 col-6 products-col-item",key:l},N("div",{className:"single-product-box"},N("div",{className:"product-image"},N(p.a,{href:"/product/[id]",as:"/product/".concat(a.id)},N("a",null,N("img",{src:a.image,alt:"image"}),N("img",{src:a.imageHover,alt:"image"}))),N("ul",null,N("li",null,N(p.a,{href:"#"},N("a",{"data-tip":"Quick View","data-place":"left",onClick:function(l){l.preventDefault(),e.openModal(),e.handleModalData(a)}},N("i",{className:"far fa-eye"})))),N("li",null,N(p.a,{href:"#"},N("a",{"data-tip":"Add to Wishlist","data-place":"left"},N("i",{className:"far fa-heart"})))),N("li",null,e.compareButton(a.id)))),N("div",{className:"product-content"},N("h3",null,N(p.a,{href:"/product/[id]",as:"/product/".concat(a.id)},N("a",null,a.title))),N("div",{className:"product-price"},N("span",{className:"new-price"},"$",a.price)),N("div",{className:"rating"},N("i",{className:"fas fa-star"}),N("i",{className:"fas fa-star"}),N("i",{className:"fas fa-star"}),N("i",{className:"fas fa-star"}),N("i",{className:"far fa-star"})),N(h.a,a))))})),l?N(m.a,{closeModal:this.closeModal,modalData:this.state.modalData}):"")}}]),l}(u.Component);a.a=b},"7smD":function(e,a,l){"use strict";var t=l("1OyB"),n=l("vuIU"),c=l("JX7q"),i=l("Ji7U"),s=l("md7G"),r=l("foSv"),o=l("rePB"),u=l("q1tI"),f=l.n(u),d=l("/MKj"),p=l("YFqc"),m=l.n(p),h=l("kNBj"),v=l("GGqY"),N=f.a.createElement;function g(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,t=Object(r.a)(e);if(a){var n=Object(r.a)(this).constructor;l=Reflect.construct(t,arguments,n)}else l=t.apply(this,arguments);return Object(s.a)(this,l)}}var b=function(e){Object(i.a)(l,e);var a=g(l);function l(){var e;Object(t.a)(this,l);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return e=a.call.apply(a,[this].concat(i)),Object(o.a)(Object(c.a)(e),"state",{qty:1,max:10,min:1}),Object(o.a)(Object(c.a)(e),"handleAddToCartFromView",(function(){e.props.addQuantityWithNumber(e.props.modalData.id,e.state.qty),v.c.success("Added to the cart",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),setTimeout((function(){e.props.closeModal()}),5e3)})),Object(o.a)(Object(c.a)(e),"IncrementItem",(function(){e.setState((function(e){return e.qty<10?{qty:e.qty+1}:null}))})),Object(o.a)(Object(c.a)(e),"DecreaseItem",(function(){e.setState((function(e){return e.qty>1?{qty:e.qty-1}:null}))})),e}return Object(n.a)(l,[{key:"render",value:function(){var e=this,a=this.props,l=a.closeModal,t=a.modalData;return N("div",{className:"modal fade productQuickView show",style:{paddingRight:"16px",display:"block"}},N(v.b,null),N("div",{className:"modal-dialog modal-dialog-centered",role:"document"},N("div",{className:"modal-content"},N("button",{type:"button",onClick:l,className:"close","data-dismiss":"modal","aria-label":"Close"},N("span",{"aria-hidden":"true"},N("i",{className:"fas fa-times"}))),N("div",{className:"row align-items-center"},N("div",{className:"col-lg-6 col-md-6"},N("div",{className:"productQuickView-image"},N("img",{src:t.image,alt:"image"}))),N("div",{className:"col-lg-6 col-md-6"},N("div",{className:"product-content"},N("h3",null,N(m.a,{href:"#"},N("a",null,t.title))),N("div",{className:"price"},N("span",{className:"new-price"},"$",t.price)),N("div",{className:"product-review"},N("div",{className:"rating"},N("i",{className:"fas fa-star"}),N("i",{className:"fas fa-star"}),N("i",{className:"fas fa-star"}),N("i",{className:"fas fa-star"}),N("i",{className:"fas fa-star-half-alt"})),N(m.a,{href:"#"},N("a",{className:"rating-count"},"3 reviews"))),N("ul",{className:"product-info"},N("li",null,N("span",null,"Vendor:")," ",N(m.a,{href:"#"},N("a",null,"Lereve"))),N("li",null,N("span",null,"Availability:")," ",N(m.a,{href:"#"},N("a",null,"In stock (7 items)"))),N("li",null,N("span",null,"Product Type:")," ",N(m.a,{href:"#"},N("a",null,"T-Shirt")))),N("div",{className:"product-color-switch"},N("h4",null,"Color:"),N("ul",null,N("li",null,N(m.a,{href:"#"},N("a",{title:"Black",className:"color-black"}))),N("li",null,N(m.a,{href:"#"},N("a",{title:"White",className:"color-white"}))),N("li",{className:"active"},N(m.a,{href:"#"},N("a",{title:"Green",className:"color-green"}))),N("li",null,N(m.a,{href:"#"},N("a",{title:"Yellow Green",className:"color-yellowgreen"}))),N("li",null,N(m.a,{href:"#"},N("a",{title:"Teal",className:"color-teal"}))))),N("div",{className:"product-size-wrapper"},N("h4",null,"Size:"),N("ul",null,N("li",null,N(m.a,{href:"#"},N("a",null,"XS"))),N("li",{className:"active"},N(m.a,{href:"#"},N("a",null,"S"))),N("li",null,N(m.a,{href:"#"},N("a",null,"M"))),N("li",null,N(m.a,{href:"#"},N("a",null,"XL"))),N("li",null,N(m.a,{href:"#"},N("a",null,"XXL"))))),N("div",{className:"product-add-to-cart"},N("div",{className:"input-counter"},N("span",{className:"minus-btn",onClick:this.DecreaseItem},N("i",{className:"fas fa-minus"})),N("input",{type:"text",value:this.state.qty,min:this.state.min,max:this.state.max,onChange:function(a){return e.setState({qty:a.target.value})}}),N("span",{className:"plus-btn",onClick:this.IncrementItem},N("i",{className:"fas fa-plus"}))),N("button",{type:"submit",className:"btn btn-primary",onClick:this.handleAddToCartFromView},N("i",{className:"fas fa-cart-plus"})," Add to Cart")),N(m.a,{href:"#"},N("a",{className:"view-full-info"},"View full info"))))))))}}]),l}(u.Component);a.a=Object(d.b)(null,(function(e){return{addQuantityWithNumber:function(a,l){e(Object(h.b)(a,l))}}}))(b)},"8N9c":function(e,a,l){"use strict";var t=l("1OyB"),n=l("vuIU"),c=l("JX7q"),i=l("Ji7U"),s=l("md7G"),r=l("foSv"),o=l("rePB"),u=l("q1tI"),f=l.n(u),d=l("YFqc"),p=l.n(d),m=f.a.createElement;function h(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,t=Object(r.a)(e);if(a){var n=Object(r.a)(this).constructor;l=Reflect.construct(t,arguments,n)}else l=t.apply(this,arguments);return Object(s.a)(this,l)}}var v=function(e){Object(i.a)(s,e);var a=h(s);function s(){var e;Object(t.a)(this,s);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return e=a.call.apply(a,[this].concat(n)),Object(o.a)(Object(c.a)(e),"state",{currentSelection:!1,collection:!1,brand:!1,size:!1,price:!1,color:!1,popular:!1}),Object(o.a)(Object(c.a)(e),"handleToggle",(function(a,l){a.preventDefault(),"currentSelection"==l?e.setState({currentSelection:!e.state.currentSelection}):"collection"==l?e.setState({collection:!e.state.collection}):"brand"==l?e.setState({brand:!e.state.brand}):"size"==l?e.setState({size:!e.state.size}):"price"==l?e.setState({price:!e.state.price}):"color"==l?e.setState({color:!e.state.color}):"popular"==l&&e.setState({popular:!e.state.popular})})),e}return Object(n.a)(s,[{key:"render",value:function(){var e=this,a=this.state,t=a.currentSelection,n=a.collection,c=a.brand,i=a.size,s=a.price,r=a.color,o=a.popular;return m("div",{className:"col-lg-".concat(this.props.col?this.props.col:"4"," col-md-12")},m("div",{className:"woocommerce-sidebar-area"},m("div",{className:"collapse-widget filter-list-widget ".concat(t?"":"open")},m("h3",{className:"collapse-widget-title ".concat(t?"":"active"),onClick:function(a){return e.handleToggle(a,"currentSelection")}},"Current Selection",m("i",{className:"fas fa-angle-up"})),m("div",{className:"selected-filters-wrap-list ".concat(t?"block":"none")},m("ul",null,m("li",null,m(p.a,{href:"#"},m("a",null,"44"))),m("li",null,m(p.a,{href:"#"},m("a",null,"XI"))),m("li",null,m(p.a,{href:"#"},m("a",null,"Clothing"))),m("li",null,m(p.a,{href:"#"},m("a",null,"Shoes"))),m("li",null,m(p.a,{href:"#"},m("a",null,"Accessories")))),m("div",{className:"delete-selected-filters"},m(p.a,{href:"#"},m("a",null,m("i",{className:"far fa-trash-alt"})," ",m("span",null,"Clear All")))))),m("div",{className:"collapse-widget collections-list-widget ".concat(n?"":"open")},m("h3",{className:"collapse-widget-title ".concat(n?"":"active"),onClick:function(a){return e.handleToggle(a,"collection")}},"Collections",m("i",{className:"fas fa-angle-up"})),m("ul",{className:"collections-list-row ".concat(n?"block":"none")},m("li",{className:"active"},m(p.a,{href:"#"},m("a",null,"Women\u2019s"))),m("li",null,m(p.a,{href:"#"},m("a",null,"Men"))),m("li",null,m(p.a,{href:"#"},m("a",null,"Clothing"))),m("li",null,m(p.a,{href:"#"},m("a",null,"Shoes"))),m("li",null,m(p.a,{href:"#"},m("a",null,"Accessories"))),m("li",null,m(p.a,{href:"#"},m("a",null,"Uncategorized"))))),m("div",{className:"collapse-widget brands-list-widget ".concat(c?"":"open")},m("h3",{className:"collapse-widget-title ".concat(c?"":"active"),onClick:function(a){return e.handleToggle(a,"brand")}},"Brands",m("i",{className:"fas fa-angle-up"})),m("ul",{className:"brands-list-row ".concat(c?"block":"none")},m("li",{className:"active"},m(p.a,{href:"#"},m("a",null,"Adidas"))),m("li",null,m(p.a,{href:"#"},m("a",null,"Nike"))),m("li",null,m(p.a,{href:"#"},m("a",null,"Reebok"))),m("li",null,m(p.a,{href:"#"},m("a",null,"Shoes"))),m("li",null,m(p.a,{href:"#"},m("a",null,"Ralph Lauren"))),m("li",null,m(p.a,{href:"#"},m("a",null,"Delpozo"))))),m("div",{className:"collapse-widget size-list-widget ".concat(i?"":"open")},m("h3",{className:"collapse-widget-title ".concat(i?"":"active"),onClick:function(a){return e.handleToggle(a,"size")}},"Size",m("i",{className:"fas fa-angle-up"})),m("ul",{className:"size-list-row ".concat(i?"block":"none")},m("li",null,m(p.a,{href:"#"},m("a",null,"20"))),m("li",null,m(p.a,{href:"#"},m("a",null,"24"))),m("li",null,m(p.a,{href:"#"},m("a",null,"36"))),m("li",null,m(p.a,{href:"#"},m("a",null,"30"))),m("li",{className:"active"},m(p.a,{href:"#"},m("a",null,"XS"))),m("li",null,m(p.a,{href:"#"},m("a",null,"S"))),m("li",null,m(p.a,{href:"#"},m("a",null,"M"))),m("li",null,m(p.a,{href:"#"},m("a",null,"L"))),m("li",null,m(p.a,{href:"#"},m("a",null,"L"))),m("li",null,m(p.a,{href:"#"},m("a",null,"XL"))))),m("div",{className:"collapse-widget price-list-widget ".concat(s?"":"open")},m("h3",{className:"collapse-widget-title ".concat(s?"":"active"),onClick:function(a){return e.handleToggle(a,"price")}},"Price",m("i",{className:"fas fa-angle-up"})),m("ul",{className:"price-list-row ".concat(s?"block":"none")},m("li",null,m(p.a,{href:"#"},m("a",null,"$10 - $100"))),m("li",{className:"active"},m(p.a,{href:"#"},m("a",null,"$100 - $200"))),m("li",null,m(p.a,{href:"#"},m("a",null,"$200 - $300"))),m("li",null,m(p.a,{href:"#"},m("a",null,"$300 - $400"))),m("li",null,m(p.a,{href:"#"},m("a",null,"$400 - $500"))),m("li",null,m(p.a,{href:"#"},m("a",null,"$500 - $600"))))),m("div",{className:"collapse-widget color-list-widget ".concat(r?"":"open")},m("h3",{className:"collapse-widget-title ".concat(r?"":"active"),onClick:function(a){return e.handleToggle(a,"color")}},"Color",m("i",{className:"fas fa-angle-up"})),m("ul",{className:"color-list-row ".concat(r?"block":"none")},m("li",null,m(p.a,{href:"#"},m("a",{title:"Black",className:"color-black"}))),m("li",null,m(p.a,{href:"#"},m("a",{title:"Red",className:"color-red"}))),m("li",null,m(p.a,{href:"#"},m("a",{title:"Yellow",className:"color-yellow"}))),m("li",null,m(p.a,{href:"#"},m("a",{title:"White",className:"color-white"}))),m("li",null,m(p.a,{href:"#"},m("a",{title:"Blue",className:"color-blue"}))),m("li",null,m(p.a,{href:"#"},m("a",{title:"Green",className:"color-green"}))),m("li",null,m(p.a,{href:"#"},m("a",{title:"Yellow Green",className:"color-yellowgreen"}))),m("li",null,m(p.a,{href:"#"},m("a",{title:"Pink",className:"color-pink"}))),m("li",null,m(p.a,{href:"#"},m("a",{title:"Violet",className:"color-violet"}))),m("li",null,m(p.a,{href:"#"},m("a",{title:"Blue Violet",className:"color-blueviolet"}))),m("li",null,m(p.a,{href:"#"},m("a",{title:"Lime",className:"color-lime"}))),m("li",null,m(p.a,{href:"#"},m("a",{title:"Plum",className:"color-plum"}))),m("li",null,m(p.a,{href:"#"},m("a",{title:"Teal",className:"color-teal"}))))),m("div",{className:"collapse-widget tag-list-widget ".concat(o?"":"open")},m("h3",{className:"collapse-widget-title ".concat(o?"":"active"),onClick:function(a){return e.handleToggle(a,"popular")}},"Popular Tags",m("i",{className:"fas fa-angle-up"})),m("ul",{className:"tags-list-row ".concat(o?"block":"none")},m("li",null,m(p.a,{href:"#"},m("a",null,"Vintage"))),m("li",null,m(p.a,{href:"#"},m("a",null,"Black"))),m("li",{className:"active"},m(p.a,{href:"#"},m("a",null,"Discount"))),m("li",null,m(p.a,{href:"#"},m("a",null,"Good"))),m("li",null,m(p.a,{href:"#"},m("a",null,"Jeans"))),m("li",null,m(p.a,{href:"#"},m("a",null,"Summer"))),m("li",null,m(p.a,{href:"#"},m("a",null,"Winter"))))),m("div",{className:"collapse-widget aside-products-widget"},m("h3",{className:"aside-widget-title"},"Popular Products"),m("div",{className:"aside-single-products"},m("div",{className:"products-image"},m(p.a,{href:"#"},m("a",null,m("img",{src:l("HDRl"),alt:"image"})))),m("div",{className:"products-content"},m("span",null,m(p.a,{href:"#"},m("a",null,"Men's"))),m("h3",null,m(p.a,{href:"#"},m("a",null,"Belted chino trousers polo"))),m("div",{className:"product-price"},m("span",{className:"new-price"},"$191.00"),m("span",{className:"old-price"},"$291.00")))),m("div",{className:"aside-single-products"},m("div",{className:"products-image"},m(p.a,{href:"#"},m("a",null,m("img",{src:l("5xpA"),alt:"image"})))),m("div",{className:"products-content"},m("span",null,m(p.a,{href:"#"},m("a",null,"Men's"))),m("h3",null,m(p.a,{href:"#"},m("a",null,"Belted chino trousers polo"))),m("div",{className:"product-price"},m("span",{className:"new-price"},"$191.00"),m("span",{className:"old-price"},"$291.00")))),m("div",{className:"aside-single-products"},m("div",{className:"products-image"},m(p.a,{href:"#"},m("a",null,m("img",{src:l("rGc4"),alt:"image"})))),m("div",{className:"products-content"},m("span",null,m(p.a,{href:"#"},m("a",null,"Men's"))),m("h3",null,m(p.a,{href:"#"},m("a",null,"Belted chino trousers polo"))),m("div",{className:"product-price"},m("span",{className:"new-price"},"$191.00"),m("span",{className:"old-price"},"$291.00"))))),m("div",{className:"collapse-widget aside-trending-widget"},m("div",{className:"aside-trending-products"},m("img",{src:l("0Dlh"),alt:"image"}),m("div",{className:"category"},m("h4",null,"Top Trending"),m("span",null,"Spring/Summer 2018 Collection")),m(p.a,{href:"#"},m("a",null))))))}}]),s}(u.Component);a.a=v},EsL0:function(e,a,l){"use strict";var t=l("q1tI"),n=l.n(t),c=l("YFqc"),i=l.n(c),s=l("/MKj"),r=l("GGqY"),o=n.a.createElement;a.a=function(e){var a=e.id,l=Object(s.c)();return o(i.a,{href:"#"},o("a",{className:"btn btn-light",onClick:function(e){e.preventDefault(),function(e){l({type:"ADD_TO_CART",id:e}),r.c.success("Added to the cart",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})}(a)}},"Add to Cart"))}},Glkl:function(e,a,l){"use strict";var t=l("1OyB"),n=l("vuIU"),c=l("JX7q"),i=l("Ji7U"),s=l("md7G"),r=l("foSv"),o=l("rePB"),u=l("q1tI"),f=l.n(u),d=l("YFqc"),p=l.n(d),m=f.a.createElement;function h(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,t=Object(r.a)(e);if(a){var n=Object(r.a)(this).constructor;l=Reflect.construct(t,arguments,n)}else l=t.apply(this,arguments);return Object(s.a)(this,l)}}var v=function(e){Object(i.a)(l,e);var a=h(l);function l(){var e;Object(t.a)(this,l);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return e=a.call.apply(a,[this].concat(i)),Object(o.a)(Object(c.a)(e),"handleGrid",(function(a,l){var t,n;for(e.props.onClick(l),n=document.getElementsByTagName("a"),t=0;t<n.length;t++)n[t].className=n[t].className.replace("active","");a.currentTarget.className+=" active"})),e}return Object(n.a)(l,[{key:"render",value:function(){var e=this;return m("div",{className:"products-filter-options"},m("div",{className:"row align-items-center"},m("div",{className:"col d-flex"},m("span",null,"View:"),m("div",{className:"view-list-row"},m("div",{className:"view-column"},m(p.a,{href:"#"},m("a",{className:"icon-view-two",onClick:function(a){a.preventDefault(),e.handleGrid(a,"products-col-two")}},m("span",null),m("span",null))),m(p.a,{href:"#"},m("a",{className:"icon-view-three active",onClick:function(a){a.preventDefault(),e.handleGrid(a,"")}},m("span",null),m("span",null),m("span",null))),m(p.a,{href:"#"},m("a",{className:"icon-view-four",onClick:function(a){a.preventDefault(),e.handleGrid(a,"products-col-four")}},m("span",null),m("span",null),m("span",null),m("span",null))),m(p.a,{href:"#"},m("a",{className:"view-grid-switch",onClick:function(a){a.preventDefault(),e.handleGrid(a,"products-row-view")}},m("span",null),m("span",null)))))),m("div",{className:"col d-flex justify-content-center"},m("p",null,"Showing 22 of 102 results")),m("div",{className:"col d-flex"},m("span",null,"Show:"),m("div",{className:"show-products-number"},m("select",null,m("option",{value:"1"},"22"),m("option",{value:"2"},"32"),m("option",{value:"3"},"42"),m("option",{value:"4"},"52"),m("option",{value:"5"},"62"))),m("span",null,"Sort:"),m("div",{className:"products-ordering-list"},m("select",null,m("option",{value:"1"},"Featured"),m("option",{value:"2"},"Best Selling"),m("option",{value:"3"},"Price Ascending"),m("option",{value:"4"},"Price Descending"),m("option",{value:"5"},"Date Ascending"),m("option",{value:"6"},"Date Descending"),m("option",{value:"7"},"Name Ascending"),m("option",{value:"8"},"Name Descending"))))))}}]),l}(u.Component);a.a=v},K2d6:function(e,a,l){"use strict";l.d(a,"d",(function(){return t})),l.d(a,"f",(function(){return n})),l.d(a,"i",(function(){return c})),l.d(a,"a",(function(){return i})),l.d(a,"c",(function(){return s})),l.d(a,"b",(function(){return r})),l.d(a,"h",(function(){return o})),l.d(a,"e",(function(){return u})),l.d(a,"g",(function(){return f}));var t="ADD_TO_CART",n="REMOVE_ITEM",c="SUB_QUANTITY",i="ADD_QUANTITY",s="ADD_SHIPPING",r="ADD_QUANTITY_WITH_NUMBER",o="RESET_CART",u="ADD_TO_COMPARE",f="REMOVE_ITEM_FROM_COMPARE"},WGHE:function(e,a,l){"use strict";var t=l("q1tI"),n=l.n(t),c=l("YFqc"),i=l.n(c),s=l("/MKj"),r=l("GGqY"),o=n.a.createElement;a.a=function(e){var a=e.id,l=Object(s.c)();return o(i.a,{href:"#"},o("a",{"data-tip":"Add to Compare","data-place":"left",onClick:function(e){e.preventDefault(),function(e){l({type:"ADD_TO_COMPARE",id:e}),r.c.success("Added to the compare list",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})}(a)}},o("i",{className:"fas fa-sync"})))}},kNBj:function(e,a,l){"use strict";l.d(a,"c",(function(){return n})),l.d(a,"e",(function(){return c})),l.d(a,"a",(function(){return i})),l.d(a,"b",(function(){return s})),l.d(a,"d",(function(){return r}));var t=l("K2d6"),n=function(e){return{type:t.f,id:e}},c=function(e){return{type:t.i,id:e}},i=function(e){return{type:t.a,id:e}},s=function(e,a){return{type:t.b,id:e,qty:a}},r=function(){return{type:t.h}}},meiv:function(e,a,l){"use strict";var t=l("1OyB"),n=l("vuIU"),c=l("Ji7U"),i=l("md7G"),s=l("foSv"),r=l("q1tI"),o=l.n(r).a.createElement;function u(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,t=Object(s.a)(e);if(a){var n=Object(s.a)(this).constructor;l=Reflect.construct(t,arguments,n)}else l=t.apply(this,arguments);return Object(i.a)(this,l)}}var f=function(e){Object(c.a)(l,e);var a=u(l);function l(){return Object(t.a)(this,l),a.apply(this,arguments)}return Object(n.a)(l,[{key:"render",value:function(){return o("section",{className:"facility-area"},o("div",{className:"container"},o("div",{className:"row"},o("div",{className:"col-lg-3 col-sm-6"},o("div",{className:"facility-box"},o("div",{className:"icon"},o("i",{className:"fas fa-plane"})),o("h3",null,"Free Shipping World Wide"))),o("div",{className:"col-lg-3 col-sm-6"},o("div",{className:"facility-box"},o("div",{className:"icon"},o("i",{className:"fas fa-money-check-alt"})),o("h3",null,"100% money back guarantee"))),o("div",{className:"col-lg-3 col-sm-6"},o("div",{className:"facility-box"},o("div",{className:"icon"},o("i",{className:"far fa-credit-card"})),o("h3",null,"Many payment gatways"))),o("div",{className:"col-lg-3 col-sm-6"},o("div",{className:"facility-box"},o("div",{className:"icon"},o("i",{className:"fas fa-headset"})),o("h3",null,"24/7 online support"))))))}}]),l}(r.Component);a.a=f},rIQk:function(e,a,l){"use strict";var t=l("1OyB"),n=l("vuIU"),c=l("Ji7U"),i=l("md7G"),s=l("foSv"),r=l("q1tI"),o=l.n(r),u=l("YFqc"),f=l.n(u),d=o.a.createElement;function p(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,t=Object(s.a)(e);if(a){var n=Object(s.a)(this).constructor;l=Reflect.construct(t,arguments,n)}else l=t.apply(this,arguments);return Object(i.a)(this,l)}}var m=function(e){Object(c.a)(l,e);var a=p(l);function l(){return Object(t.a)(this,l),a.apply(this,arguments)}return Object(n.a)(l,[{key:"render",value:function(){return d("div",{className:"page-title-area"},d("div",{className:"container"},d("ul",null,d("li",null,d(f.a,{href:"/"},d("a",null,"Home"))),d("li",null,this.props.title))))}}]),l}(r.Component);a.a=m}}]);