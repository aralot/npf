(function(){var h=void 0,i=!0,m=null,n=!1;function o(){return function(){}}var q,r=this;
function s(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function aa(a){var b=s(a);return"array"==b||"object"==b&&"number"==typeof a.length}function t(a){return"string"==typeof a}function v(a){return a[ba]||(a[ba]=++ca)}var ba="closure_uid_"+(1E9*Math.random()>>>0),ca=0,da=Date.now||function(){return+new Date};function x(a,b){var c=a.split("."),d=r;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&b!==h?d[e]=b:d=d[e]?d[e]:d[e]={}}
function y(a,b){function c(){}c.prototype=b.prototype;a.u=b.prototype;a.prototype=new c};var z,A,B,C;function ea(){return r.navigator?r.navigator.userAgent:m}C=B=A=z=n;var D;if(D=ea()){var fa=r.navigator;z=0==D.indexOf("Opera");A=!z&&-1!=D.indexOf("MSIE");B=!z&&-1!=D.indexOf("WebKit");C=!z&&!B&&"Gecko"==fa.product}var ga=z,E=A,F=C,G=B,ha=r.navigator,ia=-1!=(ha&&ha.platform||"").indexOf("Mac");function ja(){var a=r.document;return a?a.documentMode:h}var H;
a:{var I="",J;if(ga&&r.opera)var ka=r.opera.version,I="function"==typeof ka?ka():ka;else if(F?J=/rv\:([^\);]+)(\)|;)/:E?J=/MSIE\s+([^\);]+)(\)|;)/:G&&(J=/WebKit\/(\S+)/),J)var la=J.exec(ea()),I=la?la[1]:"";if(E){var ma=ja();if(ma>parseFloat(I)){H=String(ma);break a}}H=I}var na={};
function K(a){var b;if(!(b=na[a])){b=0;for(var c=String(H).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",l=d[f]||"",k=RegExp("(\\d*)(\\D*)","g"),u=RegExp("(\\d*)(\\D*)","g");do{var j=k.exec(g)||["","",""],p=u.exec(l)||["","",""];if(0==j[0].length&&0==p[0].length)break;b=((0==j[1].length?0:parseInt(j[1],10))<(0==p[1].length?0:parseInt(p[1],10))?-1:(0==j[1].length?0:parseInt(j[1],
10))>(0==p[1].length?0:parseInt(p[1],10))?1:0)||((0==j[2].length)<(0==p[2].length)?-1:(0==j[2].length)>(0==p[2].length)?1:0)||(j[2]<p[2]?-1:j[2]>p[2]?1:0)}while(0==b)}b=na[a]=0<=b}return b}var oa=r.document,pa=!oa||!E?h:ja()||("CSS1Compat"==oa.compatMode?parseInt(H,10):5);function L(){0!=qa&&(this.ba=Error().stack,ra[v(this)]=this)}var qa=0,ra={};L.prototype.p=n;L.prototype.R=function(){return this.p};L.prototype.k=function(){if(!this.p&&(this.p=i,this.d(),0!=qa)){var a=v(this);delete ra[a]}};L.prototype.d=function(){if(this.J)for(;this.J.length;)this.J.shift()()};function M(a,b){this.type=a;this.currentTarget=this.target=b}q=M.prototype;q.d=o();q.k=o();q.h=n;q.defaultPrevented=n;q.n=i;q.preventDefault=function(){this.defaultPrevented=i;this.n=n};var sa=0;function ta(){}q=ta.prototype;q.key=0;q.g=n;q.i=n;q.l=function(a,b,c,d,e,f){if("function"==s(a))this.H=i;else if(a&&a.handleEvent&&"function"==s(a.handleEvent))this.H=n;else throw Error("Invalid listener argument");this.e=a;this.L=b;this.src=c;this.type=d;this.capture=!!e;this.s=f;this.i=n;this.key=++sa;this.g=n};q.handleEvent=function(a){return this.H?this.e.call(this.s||this.src,a):this.e.handleEvent.call(this.e,a)};var ua="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function va(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ua.length;f++)c=ua[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var wa;if(!(wa=!E))wa=E&&9<=pa;var xa=wa,ya=E&&!K("9");!G||K("528");F&&K("1.9b")||E&&K("8")||ga&&K("9.5")||G&&K("528");F&&!K("8")||E&&K("9");var N=Array.prototype,za=N.indexOf?function(a,b,c){return N.indexOf.call(a,b,c)}:function(a,b,c){c=c==m?0:0>c?Math.max(0,a.length+c):c;if(t(a))return!t(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Aa=N.forEach?function(a,b,c){N.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};function Ba(a){Ba[" "](a);return a}Ba[" "]=o();function O(a,b){a&&this.l(a,b)}y(O,M);q=O.prototype;q.target=m;q.relatedTarget=m;q.offsetX=0;q.offsetY=0;q.clientX=0;q.clientY=0;q.screenX=0;q.screenY=0;q.button=0;q.keyCode=0;q.charCode=0;q.ctrlKey=n;q.altKey=n;q.shiftKey=n;q.metaKey=n;q.U=n;q.D=m;
q.l=function(a,b){var c=this.type=a.type;M.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(F){var e;a:{try{Ba(d.nodeName);e=i;break a}catch(f){}e=n}e||(d=m)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=G||a.offsetX!==h?a.offsetX:a.layerX;this.offsetY=G||a.offsetY!==h?a.offsetY:a.layerY;this.clientX=a.clientX!==h?a.clientX:a.pageX;this.clientY=a.clientY!==h?a.clientY:a.pageY;this.screenX=a.screenX||
0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.U=ia?a.metaKey:a.ctrlKey;this.state=a.state;this.D=a;a.defaultPrevented&&this.preventDefault();delete this.h};
q.preventDefault=function(){O.u.preventDefault.call(this);var a=this.D;if(a.preventDefault)a.preventDefault();else if(a.returnValue=n,ya)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};q.d=o();var P={},Q={},R={},S={};
function Ca(a,b,c,d,e){if("array"==s(b))for(var f=0;f<b.length;f++)Ca(a,b[f],c,d,e);else{a:{if(!b)throw Error("Invalid event type");var d=!!d,g=Q;b in g||(g[b]={a:0,c:0});g=g[b];d in g||(g[d]={a:0,c:0},g.a++);var g=g[d],f=v(a),l;g.c++;if(g[f]){l=g[f];for(var k=0;k<l.length;k++)if(g=l[k],g.e==c&&g.s==e){if(g.g)break;l[k].i=n;a=l[k];break a}}else l=g[f]=[],g.a++;var u=Da,j=xa?function(a){return u.call(j.src,j.e,a)}:function(a){a=u.call(j.src,j.e,a);if(!a)return a},k=j,g=new ta;g.l(c,k,a,b,d,e);g.i=
n;k.src=a;k.e=g;l.push(g);R[f]||(R[f]=[]);R[f].push(g);a.addEventListener?(a==r||!a.z)&&a.addEventListener(b,k,d):a.attachEvent(b in S?S[b]:S[b]="on"+b,k);a=g}P[a.key]=a}}function Ea(a,b,c,d,e){if("array"==s(b))for(var f=0;f<b.length;f++)Ea(a,b[f],c,d,e);else{d=!!d;a:{f=Q;if(b in f&&(f=f[b],d in f&&(f=f[d],a=v(a),f[a]))){a=f[a];break a}a=m}if(a)for(f=0;f<a.length;f++)if(a[f].e==c&&a[f].capture==d&&a[f].s==e){T(a[f].key);break}}}
function T(a){var b=P[a];if(b&&!b.g){var c=b.src,d=b.type,e=b.L,f=b.capture;c.removeEventListener?(c==r||!c.z)&&c.removeEventListener(d,e,f):c.detachEvent&&c.detachEvent(d in S?S[d]:S[d]="on"+d,e);c=v(c);if(R[c]){var e=R[c],g=za(e,b);0<=g&&N.splice.call(e,g,1);0==e.length&&delete R[c]}b.g=i;if(b=Q[d][f][c])b.I=i,Fa(d,f,c,b);delete P[a]}}
function Fa(a,b,c,d){if(!d.m&&d.I){for(var e=0,f=0;e<d.length;e++)d[e].g?d[e].L.src=m:(e!=f&&(d[f]=d[e]),f++);d.length=f;d.I=n;0==f&&(delete Q[a][b][c],Q[a][b].a--,0==Q[a][b].a&&(delete Q[a][b],Q[a].a--),0==Q[a].a&&delete Q[a])}}function U(a,b,c,d,e){var f=1,b=v(b);if(a[b]){var g=--a.c,l=a[b];l.m?l.m++:l.m=1;try{for(var k=l.length,u=0;u<k;u++){var j=l[u];j&&!j.g&&(f&=Ga(j,e)!==n)}}finally{a.c=Math.max(g,a.c),l.m--,Fa(c,d,b,l)}}return Boolean(f)}
function Ga(a,b){a.i&&T(a.key);return a.handleEvent(b)}
function Da(a,b){if(a.g)return i;var c=a.type,d=Q;if(!(c in d))return i;var d=d[c],e,f;if(!xa){var g;if(!(g=b))a:{g=["window","event"];for(var l=r;e=g.shift();)if(l[e]!=m)l=l[e];else{g=m;break a}g=l}e=g;g=i in d;l=n in d;if(g){if(0>e.keyCode||e.returnValue!=h)return i;a:{var k=n;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(u){k=i}if(k||e.returnValue==h)e.returnValue=i}}k=new O;k.l(e,this);e=i;try{if(g){for(var j=[],p=k.currentTarget;p;p=p.parentNode)j.push(p);f=d[i];f.c=f.a;for(var w=j.length-1;!k.h&&
0<=w&&f.c;w--)k.currentTarget=j[w],e&=U(f,j[w],c,i,k);if(l){f=d[n];f.c=f.a;for(w=0;!k.h&&w<j.length&&f.c;w++)k.currentTarget=j[w],e&=U(f,j[w],c,n,k)}}else e=Ga(a,k)}finally{j&&(j.length=0)}return e}c=new O(b,this);return e=Ga(a,c)};var V="StopIteration"in r?r.StopIteration:Error("StopIteration");function W(){}W.prototype.next=function(){throw V;};W.prototype.o=function(){return this};function Ha(a){if(a instanceof W)return a;if("function"==typeof a.o)return a.o(n);if(aa(a)){var b=0,c=new W;c.next=function(){for(;;){if(b>=a.length)throw V;if(b in a)return a[b++];b++}};return c}throw Error("Not implemented");};function X(a,b){this.f={};this.b=[];var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){var e;if(a instanceof X){d=Ia(a);Ja(a);e=[];for(c=0;c<a.b.length;c++)e.push(a.f[a.b[c]])}else{var c=[],f=0;for(d in a)c[f++]=d;d=c;c=[];f=0;for(e in a)c[f++]=a[e];e=c}for(c=0;c<d.length;c++)this.set(d[c],e[c])}}q=X.prototype;q.a=0;q.v=0;function Ia(a){Ja(a);return a.b.concat()}
function Ja(a){if(a.a!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.f,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.a!=a.b.length){for(var e={},c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}q.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.f,a)?this.f[a]:b};q.set=function(a,b){Object.prototype.hasOwnProperty.call(this.f,a)||(this.a++,this.b.push(a),this.v++);this.f[a]=b};
q.o=function(a){Ja(this);var b=0,c=this.b,d=this.f,e=this.v,f=this,g=new W;g.next=function(){for(;;){if(e!=f.v)throw Error("The map has changed since the iterator was created");if(b>=c.length)throw V;var g=c[b++];return a?g:d[g]}};return g};function Y(a,b){L.call(this);this.S=b;this.r=[];if(a>this.S)throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");for(var c=0;c<a;c++)this.r.push(this.j())}y(Y,L);q=Y.prototype;q.w=m;q.B=m;q.j=function(){return this.w?this.w():{}};q.A=function(a){if(this.B)this.B(a);else{var b=typeof a;if("object"==b&&a!=m||"function"==b)if("function"==s(a.k))a.k();else for(var c in a)delete a[c]}};q.d=function(){Y.u.d.call(this);for(var a=this.r;a.length;)this.A(a.pop());delete this.r};function Ka(){this.F=[];this.K=new X;this.Z=this.$=this.aa=this.V=0;this.M=new X;this.P=this.Y=0;this.T=1;this.Q=new Y(0,4E3);this.Q.j=function(){return new La};this.W=new Y(0,50);this.W.j=function(){return new Ma};var a=this;this.G=new Y(0,2E3);this.G.j=function(){return String(a.T++)};this.G.A=o();this.ca=3}function Ma(){this.N=this.time=this.count=0}
Ma.prototype.toString=function(){var a=[];a.push(this.type," ",this.count," (",Math.round(10*this.time)/10," ms)");this.N&&a.push(" [VarAlloc = ",this.N,"]");return a.join("")};function La(){}function Na(a,b,c,d){var e=[];-1==c?e.push("    "):e.push(Oa(a.C-c));e.push(" ",Pa(a.C-b));0==a.q?e.push(" Start        "):1==a.q?(e.push(" Done "),e.push(Oa(a.ea-a.startTime)," ms ")):e.push(" Comment      ");e.push(d,a);0<a.X&&e.push("[VarAlloc ",a.X,"] ");return e.join("")}
La.prototype.toString=function(){return this.type==m?this.O:"["+this.type+"] "+this.O};
Ka.prototype.toString=function(){for(var a=[],b=-1,c=[],d=0;d<this.F.length;d++){var e=this.F[d];1==e.q&&c.pop();a.push(" ",Na(e,this.V,b,c.join("")));b=e.C;a.push("\n");0==e.q&&c.push("|  ")}if(0!=this.K.a){var f=da();a.push(" Unstopped timers:\n");d=this.K;b=function(b){a.push("  ",b," (",f-b.startTime," ms, started at ",Pa(b.startTime),")\n")};if(aa(d))try{Aa(d,b,h)}catch(g){if(g!==V)throw g;}else{d=Ha(d);try{for(;;)b.call(h,d.next())}catch(l){if(l!==V)throw l;}}}b=Ia(this.M);for(d=0;d<b.length;d++)c=
this.M.get(b[d]),1<c.count&&a.push(" TOTAL ",c,"\n");a.push("Total tracers created ",this.Y,"\n","Total comments created ",this.P,"\n","Overhead start: ",this.aa," ms\n","Overhead end: ",this.$," ms\n","Overhead comment: ",this.Z," ms\n");return a.join("")};function Oa(a){var a=Math.round(a),b="";1E3>a&&(b=" ");100>a&&(b="  ");10>a&&(b="   ");return b+a}function Pa(a){a=Math.round(a);return String(100+a/1E3%60).substring(1,3)+"."+String(1E3+a%1E3).substring(1,4)}new Ka;function Z(){L.call(this)}y(Z,L);q=Z.prototype;q.z=i;q.t=m;q.addEventListener=function(a,b,c,d){Ca(this,a,b,c,d)};q.removeEventListener=function(a,b,c,d){Ea(this,a,b,c,d)};
q.dispatchEvent=function(a){var b=a.type||a,c=Q;if(b in c){if(t(a))a=new M(a,this);else if(a instanceof M)a.target=a.target||this;else{var d=a,a=new M(b,this);va(a,d)}var d=1,e,c=c[b],b=i in c,f;if(b){e=[];for(f=this;f;f=f.t)e.push(f);f=c[i];f.c=f.a;for(var g=e.length-1;!a.h&&0<=g&&f.c;g--)a.currentTarget=e[g],d&=U(f,e[g],a.type,i,a)&&a.n!=n}if(n in c)if(f=c[n],f.c=f.a,b)for(g=0;!a.h&&g<e.length&&f.c;g++)a.currentTarget=e[g],d&=U(f,e[g],a.type,n,a)&&a.n!=n;else for(e=this;!a.h&&e&&f.c;e=e.t)a.currentTarget=
e,d&=U(f,e,a.type,n,a)&&a.n!=n;a=Boolean(d)}else a=i;return a};q.d=function(){Z.u.d.call(this);var a=0;if(this!=m){var b=v(this);if(R[b])for(var b=R[b],c=b.length-1;0<=c;c--)T(b[c].key),a++}else for(c in b=function(b,c){T(c);a++},P)b.call(h,0,c);this.t=m};function $(){L.call(this)}y($,Z);x("NpfEventDispatcher",$);x("NpfEventDispatcher.prototype.addListener",$.prototype.addEventListener);x("NpfEventDispatcher.prototype.removeListener",$.prototype.removeEventListener);x("NpfEventDispatcher.prototype.removeAll",$.prototype.da);x("NpfEventDispatcher.prototype.dispatch",$.prototype.dispatchEvent);x("NpfEventDispatcher.prototype.dispose",$.prototype.k);x("NpfEventDispatcher.prototype.disposeInternal",$.prototype.d);
x("NpfEventDispatcher.prototype.isDisposed",$.prototype.R);x("NpfEvent",M);x("NpfEvent.prototype.type",M.prototype.type);x("NpfEvent.prototype.taget",M.prototype.target);x("NpfEvent.prototype.currentTarget",M.prototype.currentTarget);})();
