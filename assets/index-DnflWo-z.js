var Ae=(f,u)=>()=>(u||f((u={exports:{}}).exports,u),u.exports);var Xe=Ae((Ke,B)=>{(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))F(g);new MutationObserver(g=>{for(const b of g)if(b.type==="childList")for(const A of b.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&F(A)}).observe(document,{childList:!0,subtree:!0});function T(g){const b={};return g.integrity&&(b.integrity=g.integrity),g.referrerPolicy&&(b.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?b.credentials="include":g.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function F(g){if(g.ep)return;g.ep=!0;const b=T(g);fetch(g.href,b)}})();var B={};(function f(u,T,F,g){var b=!!(u.Worker&&u.Blob&&u.Promise&&u.OffscreenCanvas&&u.OffscreenCanvasRenderingContext2D&&u.HTMLCanvasElement&&u.HTMLCanvasElement.prototype.transferControlToOffscreen&&u.URL&&u.URL.createObjectURL),A=typeof Path2D=="function"&&typeof DOMMatrix=="function",ae=function(){if(!u.OffscreenCanvas)return!1;var r=new OffscreenCanvas(1,1),e=r.getContext("2d");e.fillRect(0,0,1,1);var n=r.transferToImageBitmap();try{e.createPattern(n,"no-repeat")}catch{return!1}return!0}();function $(){}function W(r){var e=T.exports.Promise,n=e!==void 0?e:u.Promise;return typeof n=="function"?new n(r):(r($,$),null)}var D=function(r,e){return{transform:function(n){if(r)return n;if(e.has(n))return e.get(n);var a=new OffscreenCanvas(n.width,n.height),o=a.getContext("2d");return o.drawImage(n,0,0),e.set(n,a),a},clear:function(){e.clear()}}}(ae,new Map),H=function(){var r=Math.floor(16.666666666666668),e,n,a={},o=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(i){var l=Math.random();return a[l]=requestAnimationFrame(function t(s){o===s||o+r-1<s?(o=s,delete a[l],i()):a[l]=requestAnimationFrame(t)}),l},n=function(i){a[i]&&cancelAnimationFrame(a[i])}):(e=function(i){return setTimeout(i,r)},n=function(i){return clearTimeout(i)}),{frame:e,cancel:n}}(),oe=function(){var r,e,n={};function a(o){function i(l,t){o.postMessage({options:l||{},callback:t})}o.init=function(t){var s=t.transferControlToOffscreen();o.postMessage({canvas:s},[s])},o.fire=function(t,s,d){if(e)return i(t,null),e;var v=Math.random().toString(36).slice(2);return e=W(function(h){function m(M){M.data.callback===v&&(delete n[v],o.removeEventListener("message",m),e=null,D.clear(),d(),h())}o.addEventListener("message",m),i(t,v),n[v]=m.bind(null,{data:{callback:v}})}),e},o.reset=function(){o.postMessage({reset:!0});for(var t in n)n[t](),delete n[t]}}return function(){if(r)return r;if(!F&&b){var o=["var CONFETTI, SIZE = {}, module = {};","("+f.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([o])))}catch(i){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",i),null}a(r)}return r}}(),ie={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function le(r,e){return e?e(r):r}function se(r){return r!=null}function y(r,e,n){return le(r&&se(r[e])?r[e]:ie[e],n)}function ce(r){return r<0?0:Math.floor(r)}function ue(r,e){return Math.floor(Math.random()*(e-r))+r}function j(r){return parseInt(r,16)}function de(r){return r.map(he)}function he(r){var e=String(r).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:j(e.substring(0,2)),g:j(e.substring(2,4)),b:j(e.substring(4,6))}}function fe(r){var e=y(r,"origin",Object);return e.x=y(e,"x",Number),e.y=y(e,"y",Number),e}function ve(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function me(r){var e=r.getBoundingClientRect();r.width=e.width,r.height=e.height}function ge(r){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=r,e}function ye(r,e,n,a,o,i,l,t,s){r.save(),r.translate(e,n),r.rotate(i),r.scale(a,o),r.arc(0,0,1,l,t,s),r.restore()}function pe(r){var e=r.angle*(Math.PI/180),n=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-e+(.5*n-Math.random()*n),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar,flat:r.flat}}function Me(r,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var n=e.tick++/e.totalTicks,a=e.x+e.random*e.tiltCos,o=e.y+e.random*e.tiltSin,i=e.wobbleX+e.random*e.tiltCos,l=e.wobbleY+e.random*e.tiltSin;if(r.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",r.beginPath(),A&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))r.fill(we(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(i-a)*.1,Math.abs(l-o)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var t=Math.PI/10*e.wobble,s=Math.abs(i-a)*.1,d=Math.abs(l-o)*.1,v=e.shape.bitmap.width*e.scalar,h=e.shape.bitmap.height*e.scalar,m=new DOMMatrix([Math.cos(t)*s,Math.sin(t)*s,-Math.sin(t)*d,Math.cos(t)*d,e.x,e.y]);m.multiplySelf(new DOMMatrix(e.shape.matrix));var M=r.createPattern(D.transform(e.shape.bitmap),"no-repeat");M.setTransform(m),r.globalAlpha=1-n,r.fillStyle=M,r.fillRect(e.x-v/2,e.y-h/2,v,h),r.globalAlpha=1}else if(e.shape==="circle")r.ellipse?r.ellipse(e.x,e.y,Math.abs(i-a)*e.ovalScalar,Math.abs(l-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):ye(r,e.x,e.y,Math.abs(i-a)*e.ovalScalar,Math.abs(l-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var c=Math.PI/2*3,w=4*e.scalar,C=8*e.scalar,x=e.x,I=e.y,L=5,E=Math.PI/L;L--;)x=e.x+Math.cos(c)*C,I=e.y+Math.sin(c)*C,r.lineTo(x,I),c+=E,x=e.x+Math.cos(c)*w,I=e.y+Math.sin(c)*w,r.lineTo(x,I),c+=E;else r.moveTo(Math.floor(e.x),Math.floor(e.y)),r.lineTo(Math.floor(e.wobbleX),Math.floor(o)),r.lineTo(Math.floor(i),Math.floor(l)),r.lineTo(Math.floor(a),Math.floor(e.wobbleY));return r.closePath(),r.fill(),e.tick<e.totalTicks}function be(r,e,n,a,o){var i=e.slice(),l=r.getContext("2d"),t,s,d=W(function(v){function h(){t=s=null,l.clearRect(0,0,a.width,a.height),D.clear(),o(),v()}function m(){F&&!(a.width===g.width&&a.height===g.height)&&(a.width=r.width=g.width,a.height=r.height=g.height),!a.width&&!a.height&&(n(r),a.width=r.width,a.height=r.height),l.clearRect(0,0,a.width,a.height),i=i.filter(function(M){return Me(l,M)}),i.length?t=H.frame(m):h()}t=H.frame(m),s=h});return{addFettis:function(v){return i=i.concat(v),d},canvas:r,promise:d,reset:function(){t&&H.cancel(t),s&&s()}}}function K(r,e){var n=!r,a=!!y(e||{},"resize"),o=!1,i=y(e,"disableForReducedMotion",Boolean),l=b&&!!y(e||{},"useWorker"),t=l?oe():null,s=n?ve:me,d=r&&t?!!r.__confetti_initialized:!1,v=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,h;function m(c,w,C){for(var x=y(c,"particleCount",ce),I=y(c,"angle",Number),L=y(c,"spread",Number),E=y(c,"startVelocity",Number),Pe=y(c,"decay",Number),Te=y(c,"gravity",Number),Ee=y(c,"drift",Number),J=y(c,"colors",de),Se=y(c,"ticks",Number),Q=y(c,"shapes"),Ie=y(c,"scalar"),Oe=!!y(c,"flat"),Y=fe(c),ee=x,U=[],Fe=r.width*Y.x,Le=r.height*Y.y;ee--;)U.push(pe({x:Fe,y:Le,angle:I,spread:L,startVelocity:E,color:J[ee%J.length],shape:Q[ue(0,Q.length)],ticks:Se,decay:Pe,gravity:Te,drift:Ee,scalar:Ie,flat:Oe}));return h?h.addFettis(U):(h=be(r,U,s,w,C),h.promise)}function M(c){var w=i||y(c,"disableForReducedMotion",Boolean),C=y(c,"zIndex",Number);if(w&&v)return W(function(E){E()});n&&h?r=h.canvas:n&&!r&&(r=ge(C),document.body.appendChild(r)),a&&!d&&s(r);var x={width:r.width,height:r.height};t&&!d&&t.init(r),d=!0,t&&(r.__confetti_initialized=!0);function I(){if(t){var E={getBoundingClientRect:function(){if(!n)return r.getBoundingClientRect()}};s(E),t.postMessage({resize:{width:E.width,height:E.height}});return}x.width=x.height=null}function L(){h=null,a&&(o=!1,u.removeEventListener("resize",I)),n&&r&&(document.body.removeChild(r),r=null,d=!1)}return a&&!o&&(o=!0,u.addEventListener("resize",I,!1)),t?t.fire(c,x,L):m(c,x,L)}return M.reset=function(){t&&t.reset(),h&&h.reset()},M}var z;function G(){return z||(z=K(null,{useWorker:!0,resize:!0})),z}function we(r,e,n,a,o,i,l){var t=new Path2D(r),s=new Path2D;s.addPath(t,new DOMMatrix(e));var d=new Path2D;return d.addPath(s,new DOMMatrix([Math.cos(l)*o,Math.sin(l)*o,-Math.sin(l)*i,Math.cos(l)*i,n,a])),d}function Ce(r){if(!A)throw new Error("path confetti are not supported in this browser");var e,n;typeof r=="string"?e=r:(e=r.path,n=r.matrix);var a=new Path2D(e),o=document.createElement("canvas"),i=o.getContext("2d");if(!n){for(var l=1e3,t=l,s=l,d=0,v=0,h,m,M=0;M<l;M+=2)for(var c=0;c<l;c+=2)i.isPointInPath(a,M,c,"nonzero")&&(t=Math.min(t,M),s=Math.min(s,c),d=Math.max(d,M),v=Math.max(v,c));h=d-t,m=v-s;var w=10,C=Math.min(w/h,w/m);n=[C,0,0,C,-Math.round(h/2+t)*C,-Math.round(m/2+s)*C]}return{type:"path",path:e,matrix:n}}function xe(r){var e,n=1,a="#000000",o='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof r=="string"?e=r:(e=r.text,n="scalar"in r?r.scalar:n,o="fontFamily"in r?r.fontFamily:o,a="color"in r?r.color:a);var i=10*n,l=""+i+"px "+o,t=new OffscreenCanvas(i,i),s=t.getContext("2d");s.font=l;var d=s.measureText(e),v=Math.ceil(d.actualBoundingBoxRight+d.actualBoundingBoxLeft),h=Math.ceil(d.actualBoundingBoxAscent+d.actualBoundingBoxDescent),m=2,M=d.actualBoundingBoxLeft+m,c=d.actualBoundingBoxAscent+m;v+=m+m,h+=m+m,t=new OffscreenCanvas(v,h),s=t.getContext("2d"),s.font=l,s.fillStyle=a,s.fillText(e,M,c);var w=1/n;return{type:"bitmap",bitmap:t.transferToImageBitmap(),matrix:[w,0,0,w,-v*w/2,-h*w/2]}}T.exports=function(){return G().apply(this,arguments)},T.exports.reset=function(){G().reset()},T.exports.create=K,T.exports.shapeFromPath=Ce,T.exports.shapeFromText=xe})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),B,!1);const Be=B.exports;B.exports.create;const Re=document.querySelector(".gameBoard"),P=document.querySelectorAll(".cells"),S=document.querySelector(".currentPlayer"),O=document.querySelectorAll(".score"),re=document.querySelector(".playAgain"),ne=document.querySelector(".restart-button"),V=document.querySelector(".celebration"),Z=document.querySelector(".draw");if(P.length===0)throw new Error("Issue with querySelectorAll");if(O.length===0)throw new Error("Issue with scoreBoard");if(!Re||!S||!re||!ne||!V||!Z)throw new Error("Issue with selector");const _="X",X="O";let p="X",R=0,k=0,N=0;const ke={particleCount:250,spread:280,colors:["#ee2fbe2","#abe2de","#65ae3c"]},Ne=()=>{V.currentTime=0,V.play()},qe=()=>{Z.currentTime=0,Z.play()},We=()=>{p===X?(p=_,S.textContent="Player X to move"):p===_&&(p=X,S.textContent="Player O to move")},q=f=>{const u=f.currentTarget;console.log("current player"+p),u.textContent===""&&(u.textContent+=p),te()?(console.log(`Player ${p} has won`),De(),He(),je(),Be(ke),Ne()):We(),Ve()};P.forEach(f=>{f.addEventListener("click",q,{once:!0})});const De=()=>{S.textContent=`${p} HAS WON!`,S.style.fontSize="50px",S.style.fontFamily="Permanent Marker",S.style.textAlign="center"},He=()=>{p===_?(R++,O[0].innerHTML=R.toString()):p===X&&(k++,O[2].innerHTML=k.toString())};console.log(O);const je=()=>{P.forEach(f=>{f.removeEventListener("click",q)})},ze=()=>{P.forEach(f=>{f.textContent=""}),p=p,S.textContent=`${p} to move`,P.forEach(f=>{f.addEventListener("click",q,{once:!0})})};re.addEventListener("click",ze);const Ue=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]],te=()=>{for(let f of Ue){const[u,T,F]=f;if(P[u].textContent===p&&P[T].textContent===p&&P[F].textContent===p)return!0}return!1},Ve=()=>{Ze()&&!te()&&(console.log("its a draw"),S.textContent="Draw :(",N++,O[1].innerHTML=N.toString(),qe())},Ze=()=>{for(const f of P)if(f.textContent==="")return!1;return!0},_e=()=>{P.forEach(f=>{f.textContent=""}),p="X",S.textContent=`${p} to move`,R=0,k=0,N=0,O[0].innerHTML=R.toString(),O[1].innerHTML=k.toString(),O[2].innerHTML=N.toString(),P.forEach(f=>{f.addEventListener("click",q,{once:!0})})};ne.addEventListener("click",_e)});export default Xe();
