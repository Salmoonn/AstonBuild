(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[676],{5593:function(e,s,i){"use strict";i(2791);s.Z=i.p+"static/media/globe.0a4626b448baf1e34ef426936fbf9f69.svg"},9257:function(e,s,i){"use strict";i.d(s,{z:function(){return d}});var a=i(1087),n=i(2007),r=i.n(n);i(2791);var t=i.p+"static/media/eye.3d7686704ab6f4de9112e0d4ed0508ef.svg";var c=i.p+"static/media/rocketLaunch.abc521e929f5438f708ce844c55a604c.svg",o=i(7314),l=i(184),d=function(e){var s,i=e.src,n=e.text,r=e.visible;switch(e.svg){case"rocketLaunch":s=c;break;case"arrowRight":s=o.Z;break;default:s=t}return(0,l.jsx)(a.rU,{to:"/"+i,className:r,children:(0,l.jsxs)("div",{className:"button smart",children:[(0,l.jsx)("img",{src:s,alt:"svg"}),(0,l.jsx)("div",{className:"work-sans",children:n})]})})};d.prototype={src:r().string,text:r().string,visible:r().string,svg:r().string}},8102:function(e,s,i){"use strict";i.d(s,{Z:function(){return u}});var a=i(1413),n=i(9439),r=i(2791),t=i(9101),c=i(7689),o=i(1087),l=i(5046),d=i(7374),m=i(184),u=function(e){var s,i=e.item,u=i.id,v=i.creator,h=(0,c.s0)(),f=(0,t.useSelector)((function(e){return e.auth.profile})),x=!(null===f||void 0===f||null===(s=f.favorites)||void 0===s||!s.find((function(e){return e.id===u}))),p=(0,r.useState)(!1),j=(0,n.Z)(p,2),g=j[0],N=j[1],b=(0,d.k)(),y=b.toggleFavorites,w=b.isLoading,T=(0,l.F3)(u),k=(0,l.Zq)(v);return(0,m.jsx)(o.rU,{to:"/i/"+u,children:(0,m.jsxs)("div",{className:"card smart",onMouseEnter:function(){return N(!0)},onMouseLeave:function(){return N(!1)},children:[v!==(null===f||void 0===f?void 0:f.login)?(0,m.jsx)("svg",{className:"card-heart",viewBox:"0 0 24 24",style:(0,a.Z)((0,a.Z)((0,a.Z)({},x?{fill:"#a259ff"}:{fill:"none"}),g?{visibility:"visible"}:{visibility:"hidden"}),w?{cursor:"not-allowed"}:{}),onClick:function(e){e.preventDefault(),w||(f?y(u):h("/login"))},children:(0,m.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}):null,(0,m.jsx)("img",{className:"card-image",src:T,alt:"card"}),(0,m.jsxs)("div",{className:"card-body",children:[(0,m.jsxs)("div",{className:"card-info",children:[(0,m.jsx)("div",{className:"work-sans h5",children:i.name}),(0,m.jsxs)("div",{className:"card-creator",children:[(0,m.jsx)("img",{className:"card-creator-avatar",src:k,alt:"avatar creator"}),(0,m.jsx)("p",{className:"space-mono",children:i.creator})]})]}),(0,m.jsxs)("div",{className:"card-footer",children:[(0,m.jsxs)("div",{className:"card-price",children:[(0,m.jsx)("div",{className:"caption-space",children:"Price"}),(0,m.jsx)("div",{className:"base-body-space card-price-body",children:i.price})]}),(0,m.jsxs)("div",{className:"card-bid",children:[(0,m.jsx)("div",{className:"caption-space",children:"Highest Bid"}),(0,m.jsx)("div",{className:"base-body-space card-price-body",children:i.highestBid})]})]})]})]})})}},7374:function(e,s,i){"use strict";i.d(s,{k:function(){return l}});var a=i(9439),n=i(9101),r=i(5745),t=i(6059),c=i(1466).h.injectEndpoints({endpoints:function(e){return{getFavorites:e.query({query:function(){return{url:r.Z.FAVORITES.GET_FAVORITES,credentials:"include"}},providesTags:["favorites"],transformResponse:t.w7}),toggleFavorites:e.mutation({query:function(e){return{url:r.Z.FAVORITES.TOGGLE_FAVORITES,method:"POST",body:{itemId:e},credentials:"include"}},transformResponse:t.y0,invalidatesTags:["favorites"]})}}}),o=i(6032),l=function(){var e=(0,n.useDispatch)(),s=c.useToggleFavoritesMutation(),i=(0,a.Z)(s,2),r=i[0];return{toggleFavorites:function(s){r(s).unwrap().then((function(s){return e((0,o.RG)(s))}))},isLoading:i[1].isLoading}}},5676:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return w}});var a=i(2791),n=i(7689),r=i(5046),t=i(5593),c=i(1087),o=i(9439),l=i(184),d=function(){var e=(new Date).setHours(0,0,0,0)+864e5,s=(0,a.useState)(new Date(e-+new Date)),i=(0,o.Z)(s,2),n=i[0],r=i[1];return(0,a.useEffect)((function(){var s=setInterval((function(){return r(new Date(e-+new Date))}),1e3);return clearInterval(s)}),[]),(0,l.jsxs)("div",{className:"timer",children:[(0,l.jsx)("div",{className:"caption-space",children:"Auction end in:"}),(0,l.jsxs)("div",{className:"timer-body",children:[(0,l.jsxs)("div",{className:"timer-time",children:[(0,l.jsx)("div",{className:"space-mono h3",children:n.getUTCHours()}),(0,l.jsx)("div",{className:"caption-space",children:"Hours"})]}),(0,l.jsx)("div",{className:"space-mono h4",children:":"}),(0,l.jsxs)("div",{className:"timer-time",children:[(0,l.jsx)("div",{className:"space-mono h3",children:n.getMinutes()}),(0,l.jsx)("div",{className:"caption-space",children:"Minutes"})]}),(0,l.jsx)("div",{className:"space-mono h4",children:":"}),(0,l.jsxs)("div",{className:"timer-time",children:[(0,l.jsx)("div",{className:"space-mono h3",children:n.getSeconds()}),(0,l.jsx)("div",{className:"caption-space",children:"Seconds"})]})]}),(0,l.jsx)("button",{className:"timer-button work-sans",style:{cursor:"not-allowed"},children:"Place Bid"})]})},m=i(2586),u=function(e){var s=e.isAddToFavorites,i=e.toggleFavorites,a=e.isLoading,r=(0,n.s0)(),t=(0,m.n)();return(0,l.jsx)("button",{style:a?{cursor:"not-allowed"}:{},className:"item-info-other-addToFavorites smart work-sans "+(s?"isAddToFavorites":""),onClick:function(){t?i():r("/login")},children:s?"In Favorites":"Add To Favorites"})},v=i(7374),h=i(883),f=function(e){var s,i=e.item,a=i.name,n=i.creator,o=i.description,m=i.tags,f=i.id,x=i.minted,p=(0,h.x)(),j=!(null===p||void 0===p||null===(s=p.favorites)||void 0===s||!s.find((function(e){return e.id===f}))),g=(0,r.Zq)(n),N=(0,v.k)(),b=N.toggleFavorites,y=N.isLoading,w=new Date(x),T=function(){return(null===p||void 0===p?void 0:p.login)!==n?(0,l.jsx)(u,{isLoading:y,isAddToFavorites:j,toggleFavorites:function(){return b(f)}}):null};return(0,l.jsxs)("div",{className:"item-info wrapper",children:[(0,l.jsxs)("div",{className:"item-info-body column",children:[(0,l.jsxs)("div",{className:"item-info-headline column",children:[(0,l.jsx)("div",{className:"h2 work-sans",children:a}),(0,l.jsxs)("div",{className:"item-minted work-sans",children:["Minted On ",w.toDateString()]})]}),(0,l.jsxs)("div",{className:"item-info-additional column",children:[(0,l.jsxs)("div",{className:"item-info-created column",children:[(0,l.jsxs)("div",{className:"item-info-other only-mobile column",children:[T(),(0,l.jsx)(d,{})]}),(0,l.jsx)("div",{className:"title",children:"Created By"}),(0,l.jsx)(c.rU,{to:"/"+n,children:(0,l.jsxs)("div",{className:"item-info-created-creater",children:[(0,l.jsx)("img",{src:g,className:"item-creator-avatar",alt:"avatar creator"}),(0,l.jsx)("div",{className:"work-sans",children:n})]})})]}),(0,l.jsxs)("div",{className:"item-info-description column",children:[(0,l.jsx)("div",{className:"title",children:"Description"}),(0,l.jsx)("div",{className:"text work-sans",children:o||"no description"})]}),(0,l.jsxs)("div",{className:"item-info-details column",children:[(0,l.jsx)("div",{className:"title",children:"Details"}),(0,l.jsxs)("div",{className:"item-info-details column",children:[(0,l.jsxs)("div",{className:"item-detail",children:[(0,l.jsx)("img",{src:t.Z,alt:"globe",className:"item-details-icon"}),(0,l.jsx)("div",{className:"work-sans",children:"View on Etherscan"})]}),(0,l.jsxs)("div",{className:"item-detail",children:[(0,l.jsx)("img",{src:t.Z,alt:"globe",className:"item-details-icon"}),(0,l.jsx)("div",{className:"work-sans",children:"View Original"})]})]})]}),(0,l.jsxs)("div",{className:"item-info-tags column",children:[(0,l.jsx)("div",{className:"item-info-tags-title work-sans",children:"Tags"}),(0,l.jsx)("div",{className:"item-tags work-sans",children:m?m.map((function(e,s){return(0,l.jsx)("div",{style:{cursor:"not-allowed"},children:(0,l.jsx)("div",{className:"item-tag work-sans",children:e.toLocaleUpperCase()})},s)})):"Not tags"})]})]})]}),(0,l.jsxs)("div",{className:"item-info-other not-mobile column",children:[T(),(0,l.jsx)(d,{})]})]})},x=i(8102),p=i(9257),j=function(e,s){return(0,l.jsx)(p.z,{src:s,svg:"arrowRight",text:"Go To Artist Page",visible:e})},g=function(e){var s=e.items,i=e.creator;return(0,l.jsxs)("div",{className:"item-page-more wrapper column",children:[(0,l.jsxs)("div",{className:"item-page-more-headline",children:[(0,l.jsx)("div",{className:"title work-sans",children:"More From This Artist"}),j("not-mobile",i)]}),(0,l.jsx)("div",{className:"item-page-more-body work-sans",children:s?s.map((function(e){return(0,l.jsx)(x.Z,{item:e},e.id)})):"Not more items"}),j("only-mobile",i)]})},N=i(5745),b=i(6059),y=i(1466).h.injectEndpoints({endpoints:function(e){return{getItem:e.query({query:function(e){return{url:N.Z.ITEM.GET_ITEM,params:{id:e}}},transformResponse:b.Nb}),getMoreItems:e.query({query:function(e){return{url:N.Z.ITEM.GET_MORE_ITEMS,params:{id:e}}},transformResponse:function(e){return e?(0,b.w7)(e):null}})}}}),w=function(){var e=(0,n.UO)().id,s=y.useGetItemQuery(e||""),i=s.data,t=s.isLoading,c=y.useGetMoreItemsQuery(e||"").data;(0,a.useEffect)((function(){window.scrollTo(0,0)}),[e]);var o=e?(0,r.F3)(e):"";return t?(0,l.jsx)("h4",{className:"work-sans",children:"Loading..."}):i?(0,l.jsxs)("div",{className:"item-page",children:[(0,l.jsx)("div",{className:"item-cover",children:(0,l.jsx)("img",{src:o,alt:"banner"})}),(0,l.jsx)(f,{item:i}),(0,l.jsx)(g,{items:c,creator:i.creator})]}):(0,l.jsx)("h4",{className:"work-sans",children:"Not item"})}},888:function(e,s,i){"use strict";var a=i(9047);function n(){}function r(){}r.resetWarningCache=n,e.exports=function(){function e(e,s,i,n,r,t){if(t!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function s(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:s,element:e,elementType:e,instanceOf:s,node:e,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:r,resetWarningCache:n};return i.PropTypes=i,i}},2007:function(e,s,i){e.exports=i(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=676.20bba85c.chunk.js.map