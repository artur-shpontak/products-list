(this["webpackJsonpproducts-list"]=this["webpackJsonpproducts-list"]||[]).push([[0],{92:function(e,t,a){},93:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);for(var n=a(0),c=a(11),i=a.n(c),r=(a(92),a(15)),o=(a(93),a(127)),s=a(129),l=a(130),d=a(131),j=a(78),b=a(145),u=a(132),m=a(67),h=a.n(m),O=a(125),x=Object(O.a)((function(e){return{menuButton:{marginRight:e.spacing(1)},title:{flexGrow:1}}})),g=a(3),p=function(){var e=x();return Object(g.jsx)(o.a,{position:"fixed",children:Object(g.jsx)(s.a,{fixed:!0,children:Object(g.jsxs)(l.a,{children:[Object(g.jsx)(d.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(g.jsx)(h.a,{})}),Object(g.jsx)(j.a,{variant:"h6",className:e.title,children:"Products list"}),Object(g.jsx)(b.a,{mr:3,children:Object(g.jsx)(u.a,{color:"inherit",variant:"outlined",children:"Log in"})}),Object(g.jsx)(u.a,{color:"secondary",variant:"contained",children:"Sign up"})]})})})},v=a(75),f=a(18),y=a(77),C=a(137),w=a(138),N=a(139),P=a(140),S=a(141),k=a(147),F=a(133),q=a(134),B=a(135),I=a(136),z=a(69),W=a.n(z),L=a(68),R=a.n(L),U=a(70),A=a.n(U),G=Object(O.a)((function(e){return{mainFeaturesPost:{position:"relative",color:e.palette.common.white,marginBottom:e.spacing(4),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},mainFeaturesPostContent:{position:"relative",padding:e.spacing(6),marginTop:e.spacing(6)},cardMedia:{paddingTop:"55%"},cardContent:{flexGrow:1},cardGrid:{marginTop:e.spacing(4)}}})),T=a(50),M=a(144),D=function(e){var t=e.open,a=e.handleClose,c=e.handleSubmit,i=e.isNewItem,o=void 0!==i&&i,s=e.initialProduct,l=void 0===s?{name:"",description:"",imageUrl:"",height:"",width:"",quantity:"",weight:""}:s,d=Object(n.useState)(!o),j=Object(r.a)(d,2),b=j[0],m=j[1],h=Object(n.useState)(l),O=Object(r.a)(h,2),x=O[0],p=O[1],v=function(){m(!b)},y=function(e){var t=e.target,a=t.name,n=t.value;p(Object(f.a)(Object(f.a)({},x),{},Object(T.a)({},a,n)))};return Object(g.jsxs)(k.a,{open:t,onClose:a,"aria-labelledby":"form-dialog-title-add",children:[Object(g.jsx)(F.a,{id:"add-dialog-title",children:o?"Add product":l.name}),Object(g.jsxs)(q.a,{children:[Object(g.jsx)(B.a,{children:o?"Add new product":"Product"}),Object(g.jsx)(M.a,{autoFocus:!0,margin:"dense",name:"name",label:"Name",type:"text",fullWidth:!0,value:x.name,disabled:b,onChange:y}),Object(g.jsx)(M.a,{margin:"dense",name:"description",label:"Description",type:"text",fullWidth:!0,multiline:!0,value:x.description,disabled:b,onChange:y}),Object(g.jsx)(M.a,{margin:"dense",name:"imageUrl",label:"Image Url",type:"text",fullWidth:!0,value:x.imageUrl,disabled:b,onChange:y}),Object(g.jsx)(M.a,{margin:"dense",name:"height",label:"Height",type:"number",value:x.height,disabled:b,onChange:y}),Object(g.jsx)(M.a,{margin:"dense",name:"width",label:"Width",type:"number",value:x.width,disabled:b,onChange:y}),Object(g.jsx)("br",{}),Object(g.jsx)(M.a,{margin:"dense",id:"quantity",name:"quantity",label:"Quantity",type:"number",value:x.quantity,disabled:b,onChange:y}),Object(g.jsx)("br",{}),Object(g.jsx)(M.a,{margin:"dense",name:"weight",label:"Weight",type:"number",value:x.weight,disabled:b,onChange:y})]}),Object(g.jsxs)(I.a,{children:[Object(g.jsx)(u.a,{size:"small",color:"primary",onClick:b?v:function(){c(x),o?(p(l),a()):v()},children:b?"Edit":"Save"}),Object(g.jsx)(u.a,{size:"small",onClick:b?a:v,color:"secondary",children:b?"Close":"Cancel"})]})]})},E={name:"Product name",description:"Product description",imageUrl:"https://source.unsplash.com/random",height:"200",width:"200",quantity:"4",weight:"200"},J=Array(8),Q=0;Q<J.length;Q++)J[Q]=Object(f.a)(Object(f.a)({},E),{},{id:Q+1});var H=function(e){var t=e.setNewId,a=G(),c=Object(n.useState)(J),i=Object(r.a)(c,2),o=i[0],l=i[1],d=Object(n.useState)(!1),b=Object(r.a)(d,2),m=b[0],h=b[1],O=Object(n.useState)(!1),x=Object(r.a)(O,2),p=x[0],z=x[1],L=Object(n.useState)(!1),U=Object(r.a)(L,2),T=U[0],M=U[1],E=function(){z(!0)},Q=function(){z(!1)},H=function(e){console.log(e);var t=o.findIndex((function(t){return t.id===e.id}));o[t]=Object(f.a)({},e)},V=Object(n.useCallback)((function(e){var t=o.filter((function(t){return t.id!==e}));console.log(e,t),X()}),[o]),K=function(){M(!0)},X=function(){M(!1)};return Object(g.jsxs)("main",{children:[Object(g.jsx)(y.a,{className:a.mainFeaturesPost,style:{backgroundImage:"url(https://source.unsplash.com/random)"},children:Object(g.jsxs)(s.a,{fixed:!0,children:[Object(g.jsx)("div",{className:a.overlay}),Object(g.jsx)(C.a,{container:!0,children:Object(g.jsx)(C.a,{item:!0,md:6,children:Object(g.jsxs)("div",{className:a.mainFeaturesPostContent,children:[Object(g.jsx)(j.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0,children:"Products list"}),Object(g.jsx)(j.a,{component:"h5",color:"inherit",paragraph:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),Object(g.jsx)(u.a,{variant:"contained",color:"secondary",children:"Learn more"})]})})})]})}),Object(g.jsx)("div",{className:a.mainContent,children:Object(g.jsxs)(s.a,{maxWidth:"sm",children:[Object(g.jsx)(j.a,{variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Products list"}),Object(g.jsx)("div",{className:a.mainButtons,children:Object(g.jsxs)(C.a,{container:!0,spacing:3,justify:"center",children:[Object(g.jsxs)(C.a,{item:!0,children:[Object(g.jsx)(u.a,{variant:"contained",color:"primary",onClick:function(){h(!0)},children:"Add product"}),Object(g.jsx)(D,{open:m,handleClose:function(){h(!1)},handleSubmit:function(e){l([].concat(Object(v.a)(o),[Object(f.a)(Object(f.a)({},e),{},{id:t()})]))},isNewItem:!0})]}),Object(g.jsx)(C.a,{item:!0,children:Object(g.jsx)(u.a,{variant:"outlined",color:"primary",children:"Learn More"})})]})})]})}),Object(g.jsx)(s.a,{className:a.cardGrid,maxWidth:"md",children:Object(g.jsx)(C.a,{container:!0,spacing:4,children:o.map((function(e){return Object(g.jsx)(C.a,{item:!0,xs:12,sm:6,md:4,children:Object(g.jsxs)(w.a,{className:a.card,children:[Object(g.jsx)(N.a,{className:a.cardMedia,image:"https://source.unsplash.com/random",title:"Image title"}),Object(g.jsxs)(P.a,{className:a.cardContent,children:[Object(g.jsx)(j.a,{variant:"h5",gutterBottom:!0,children:e.name}),Object(g.jsxs)(j.a,{children:[e.description,Object(g.jsx)("br",{}),"Quantity: ",e.quantity,Object(g.jsx)("br",{}),"Size: ".concat(e.width,"x").concat(e.height,"cm"),Object(g.jsx)("br",{}),"Weight: ".concat(e.weight,"g")]})]}),Object(g.jsxs)(S.a,{children:[Object(g.jsx)(u.a,{size:"small",color:"primary",onClick:E,children:"View"}),Object(g.jsx)(D,{open:p,handleClose:Q,handleSubmit:H,initialProduct:e}),Object(g.jsx)(u.a,{size:"small",color:"secondary",onClick:K,children:"Remove"}),Object(g.jsxs)(k.a,{open:T,onClose:X,"aria-labelledby":"form-dialog-title",children:[Object(g.jsx)(F.a,{id:"remove-dialog-title",children:"Remove product"}),Object(g.jsx)(q.a,{children:Object(g.jsx)(B.a,{children:"Are you sure you want to remove the product?"})}),Object(g.jsxs)(I.a,{children:[Object(g.jsx)(u.a,{size:"small",color:"secondary",onClick:function(){return V(e.id)},children:"Remove"}),Object(g.jsx)(u.a,{size:"small",onClick:X,color:"primary",children:"Cancel"})]})]}),Object(g.jsx)(R.a,{}),Object(g.jsx)(W.a,{}),Object(g.jsx)(A.a,{})]})]})},e.id)}))})})]})},V=a(142),K=a(143),X=a(74),Y=a.n(X),Z=a(71),$=a.n(Z),_=a(72),ee=a.n(_),te=a(73),ae=a.n(te),ne=Object(O.a)({root:{flexGrow:1}}),ce=function(){var e=ne(),t=Object(n.useState)("recents"),a=Object(r.a)(t,2),c=a[0],i=a[1],o=Object(n.useCallback)((function(e,t){i(t)}),[]);return Object(g.jsxs)("footer",{children:[Object(g.jsx)(j.a,{variant:"h6",align:"center",gutterBottom:!0,children:"Footer"}),Object(g.jsxs)(V.a,{value:c,onChange:o,className:e.root,children:[Object(g.jsx)(K.a,{label:"Recents",value:"recents",icon:Object(g.jsx)($.a,{})}),Object(g.jsx)(K.a,{label:"Favorites",value:"favorites",icon:Object(g.jsx)(ee.a,{})}),Object(g.jsx)(K.a,{label:"Nearby",value:"nearby",icon:Object(g.jsx)(ae.a,{})}),Object(g.jsx)(K.a,{label:"Folder",value:"folder",icon:Object(g.jsx)(Y.a,{})})]}),Object(g.jsx)(j.a,{align:"center",color:"textSecondary",component:"p",subtitle:1,children:"Products list"})]})},ie=function(){var e=Object(n.useState)(9),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(p,{}),Object(g.jsx)(H,{setNewId:function(){return c(a+1),a}}),Object(g.jsx)(ce,{})]})},re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,150)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};i.a.render(Object(g.jsx)(ie,{}),document.getElementById("root")),re()}},[[99,1,2]]]);
//# sourceMappingURL=main.bb57d20f.chunk.js.map