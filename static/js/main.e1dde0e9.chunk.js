(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),i=n(2),r=n.n(i),c=n(6),s=n(3),m=n(4),u=n(7),o=n(5),d=n(8),h=(n(15),function(e){var t=e.title,n=e.index,l=e.handleClickedItem;return a.a.createElement("li",null,a.a.createElement("a",{href:"#",onClick:function(e){return l(e,n)}},n,". ",t))}),f=function(e){var t=e.listOfElements,n=e.handleClickedItem;if(null!==t){var l=t.map(function(e){return a.a.createElement(h,{key:e.id,index:e.id,title:e.title,handleClickedItem:n})});return a.a.createElement("div",{className:"firstColumn"},a.a.createElement("div",{className:"textContainer"},a.a.createElement("h1",null,"Welcome back!")),a.a.createElement("ul",{className:"list"},l))}return null},E=function(e){var t=e.thumbnailUrl;return null!==t?a.a.createElement("div",{className:"secondColumn"},a.a.createElement("div",{className:"box"},"z",a.a.createElement("div",{className:"overlay"},a.a.createElement("img",{src:t,alt:"thumbnail"})))):a.a.createElement("div",{className:"secondColumn"})},v=function(e){function t(){var e,n;Object(s.a)(this,t);for(var l=arguments.length,a=new Array(l),i=0;i<l;i++)a[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(a)))).state={listOfElements:null,thumbnailUrl:null},n.handleClickedItem=function(e,t){e.preventDefault();var l=n.state.listOfElements.filter(function(e){return e.id===t})[0];n.setState({thumbnailUrl:l.thumbnailUrl})},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/photos?_page=1&_limit=12").then(function(e){return e.json()}).then(function(t){e.setState({listOfElements:Object(c.a)(t)})})}},{key:"render",value:function(){return a.a.createElement("div",{className:"app"},a.a.createElement(f,{listOfElements:this.state.listOfElements,handleClickedItem:this.handleClickedItem}),a.a.createElement(E,{thumbnailUrl:this.state.thumbnailUrl}))}}]),t}(l.Component);r.a.render(a.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.e1dde0e9.chunk.js.map