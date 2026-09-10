(()=>{var Qm=Object.defineProperty;var jm=(r,t,e)=>t in r?Qm(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Ot=(r,t,e)=>jm(r,typeof t!="symbol"?t+"":t,e);function Ri(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Tf(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var In={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_s={duration:.5,overwrite:!1,delay:0},pc,on,Ee,Yn=1e8,Se=1/Yn,ic=Math.PI*2,tg=ic/4,eg=0,Ef=Math.sqrt,ng=Math.cos,ig=Math.sin,We=function(t){return typeof t=="string"},Le=function(t){return typeof t=="function"},Ii=function(t){return typeof t=="number"},ma=function(t){return typeof t=="undefined"},vi=function(t){return typeof t=="object"},Pn=function(t){return t!==!1},mc=function(){return typeof window!="undefined"},oa=function(t){return Le(t)||We(t)},Af=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},an=Array.isArray,rc=/(?:-?\.?\d|\.)+/gi,gc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Lr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Jl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_c=/[+-]=-?[.\d]+/,Cf=/[^,'"\[\]\s]+/gi,rg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ce,_i,sc,xc,Bn={},ha={},Rf,Pf=function(t){return(ha=Ir(t,Bn))&&ln},ga=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Mo=function(t,e){return!e&&console.warn(t)},If=function(t,e){return t&&(Bn[t]=e)&&ha&&(ha[t]=e)||Bn},So=function(){return 0},sg={suppressEvents:!0,isStart:!0,kill:!1},aa={suppressEvents:!0,kill:!1},og={suppressEvents:!0},vc={},ir=[],oc={},Lf,Cn={},Kl={},xf=30,la=[],yc="",Mc=function(t){var e=t[0],n,i;if(vi(e)||Le(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=la.length;i--&&!la[i].targetTest(e););n=la[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new wc(t[i],n)))||t.splice(i,1);return t},rr=function(t){return t._gsap||Mc(Zn(t))[0]._gsap},Sc=function(t,e,n){return(n=t[e])&&Le(n)?t[e]():ma(n)&&t.getAttribute&&t.getAttribute(e)||n},mn=function(t,e){return(t=t.split(",")).forEach(e)||t},De=function(t){return Math.round(t*1e5)/1e5||0},$e=function(t){return Math.round(t*1e7)/1e7||0},Dr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},ag=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ua=function(){var t=ir.length,e=ir.slice(0),n,i;for(oc={},ir.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Df=function(t,e,n,i){ir.length&&!on&&ua(),t.render(e,n,i||on&&e<0&&(t._initted||t._startAt)),ir.length&&!on&&ua()},Uf=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Cf).length<2?e:We(t)?t.trim():t},Nf=function(t){return t},$n=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},lg=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ir=function(t,e){for(var n in e)t[n]=e[n];return t},vf=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=vi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},fa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},xo=function(t){var e=t.parent||Ce,n=t.keyframes?lg(an(t.keyframes)):$n;if(Pn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},cg=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Of=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},_a=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},sr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Cr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},hg=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ac=function(t,e,n,i){return t._startAt&&(on?t._startAt.revert(aa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},ug=function r(t){return!t||t._ts&&r(t.parent)},yf=function(t){return t._repeat?xs(t._tTime,t=t.duration()+t._rDelay)*t:0},xs=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},da=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},xa=function(t){return t._end=$e(t._start+(t._tDur/Math.abs(t._ts||t._rts||Se)||0))},va=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=$e(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),xa(t),n._dirty||Cr(n,t)),t},Ff=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=da(t.rawTime(),e),(!e._dur||To(0,e.totalDuration(),n)-e._tTime>Se)&&e.render(n,!0)),Cr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Se}},xi=function(t,e,n,i){return e.parent&&sr(e),e._start=$e((Ii(n)?n:n||t!==Ce?qn(t,n,e):t._time)+e._delay),e._end=$e(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Of(t,e,"_first","_last",t._sort?"_start":0),lc(e)||(t._recent=e),i||Ff(t,e),t._ts<0&&va(t,t._tTime),t},Bf=function(t,e){return(Bn.ScrollTrigger||ga("scrollTrigger",e))&&Bn.ScrollTrigger.create(e,t)},zf=function(t,e,n,i,s){if(Ac(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!on&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Lf!==Rn.frame)return ir.push(t),t._lazy=[s,i],1},fg=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},lc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},dg=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&fg(t)&&!(!t._initted&&lc(t))||(t._ts<0||t._dp._ts<0)&&!lc(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=To(0,t._tDur,e),h=xs(l,a),t._yoyo&&h&1&&(o=1-o),h!==xs(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||on||i||t._zTime===Se||!e&&t._zTime){if(!t._initted&&zf(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?Se:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&ac(t,e,n,!0),t._onUpdate&&!n&&Fn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Fn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&sr(t,1),!n&&!on&&(Fn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},pg=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},vs=function(t,e,n,i){var s=t._repeat,o=$e(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:$e(o*(s+1)+t._rDelay*s):o,a>0&&!i&&va(t,t._tTime=t._tDur*a),t.parent&&xa(t),n||Cr(t.parent,t),t},Mf=function(t){return t instanceof en?Cr(t):vs(t,t._dur)},mg={_start:0,endTime:So,totalDuration:So},qn=function r(t,e,n){var i=t.labels,s=t._recent||mg,o=t.duration()>=Yn?s.endTime(!1):t._dur,a,l,c;return We(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(an(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},vo=function(t,e,n){var i=Ii(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Pn(l.vars.inherit)&&l.parent;o.immediateRender=Pn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Oe(e[0],o,e[s+1])},or=function(t,e){return t||t===0?e(t):e},To=function(t,e,n){return n<t?t:n>e?e:n},nn=function(t,e){return!We(t)||!(e=rg.exec(t))?"":e[1]},gg=function(t,e,n){return or(n,function(i){return To(t,e,i)})},cc=[].slice,kf=function(t,e){return t&&vi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&vi(t[0]))&&!t.nodeType&&t!==_i},_g=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return We(i)&&!e||kf(i,1)?(s=n).push.apply(s,Zn(i)):n.push(i)})||n},Zn=function(t,e,n){return Ee&&!e&&Ee.selector?Ee.selector(t):We(t)&&!n&&(sc||!ys())?cc.call((e||xc).querySelectorAll(t),0):an(t)?_g(t,n):kf(t)?cc.call(t,0):t?[t]:[]},hc=function(t){return t=Zn(t)[0]||Mo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Zn(e,n.querySelectorAll?n:n===t?Mo("Invalid scope")||xc.createElement("div"):t)}},Vf=function(t){return t.sort(function(){return .5-Math.random()})},Hf=function(t){if(Le(t))return t;var e=vi(t)?t:{each:t},n=Rr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return We(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,d,_){var g=(_||e).length,m=o[g],p,S,b,x,C,E,T,R,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,Yn])[1],!y){for(T=-Yn;T<(T=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=o[g]=[],p=l?Math.min(y,g)*h-.5:i%y,S=y===Yn?0:l?g*u/y-.5:i/y|0,T=0,R=Yn,E=0;E<g;E++)b=E%y-p,x=S-(E/y|0),m[E]=C=c?Math.abs(c==="y"?x:b):Ef(b*b+x*x),C>T&&(T=C),C<R&&(R=C);i==="random"&&Vf(m),m.max=T-R,m.min=R,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=nn(e.amount||e.each)||0,n=n&&g<0?Kf(n):n}return g=(m[f]-m.min)/m.max||0,$e(m.b+(n?n(g):g)*m.v)+m.u}},uc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=$e(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ii(n)?0:nn(n))}},Gf=function(t,e){var n=an(t),i,s;return!n&&vi(t)&&(i=n=t.radius||Yn,t.values?(t=Zn(t.values),(s=!Ii(t[0]))&&(i*=i)):t=uc(t.increment)),or(e,n?Le(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Yn,h=0,u=t.length,f,d;u--;)s?(f=t[u].x-a,d=t[u].y-l,f=f*f+d*d):f=Math.abs(t[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:o,s||h===o||Ii(o)?h:h+nn(o)}:uc(t))},Wf=function(t,e,n,i){return or(an(t)?!e:n===!0?!!(n=0):!i,function(){return an(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},xg=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},vg=function(t,e){return function(n){return t(parseFloat(n))+(e||nn(n))}},yg=function(t,e,n){return qf(t,e,0,1,n)},Xf=function(t,e,n){return or(n,function(i){return t[~~e(i)]})},Mg=function r(t,e,n){var i=e-t;return an(t)?Xf(t,r(0,t.length),e):or(n,function(s){return(i+(s-t)%i)%i+t})},Sg=function r(t,e,n){var i=e-t,s=i*2;return an(t)?Xf(t,r(0,t.length-1),e):or(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Ms=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?Cf:rc),n+=t.substr(e,i-e)+Wf(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},qf=function(t,e,n,i,s){var o=e-t,a=i-n;return or(s,function(l){return n+((l-t)/o*a||0)})},bg=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=We(t),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(an(t)&&!an(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(_){_*=u;var g=Math.min(f,~~_);return h[g](_-g)},n=e}else i||(t=Ir(an(t)?[]:{},t));if(!h){for(l in e)Tc.call(a,t,l,"get",e[l]);s=function(_){return Pc(_,a)||(o?t.p:t)}}}return or(n,s)},Sf=function(t,e,n){var i=t.labels,s=Yn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Fn=function(t,e,n){var i=t.vars,s=i[e],o=Ee,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&ir.length&&ua(),a&&(Ee=a),h=l?s.apply(c,l):s.call(c),Ee=o,h},go=function(t){return sr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!on),t.progress()<1&&Fn(t,"onInterrupt"),t},gs,Yf=[],Zf=function(t){if(t)if(t=!t.name&&t.default||t,mc()||t.headless){var e=t.name,n=Le(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:So,render:Pc,add:Tc,kill:zg,modifier:Bg,rawVars:0},o={targetTest:0,get:0,getSetter:ya,aliases:{},register:0};if(ys(),t!==i){if(Cn[e])return;$n(i,$n(fa(t,s),o)),Ir(i.prototype,Ir(s,fa(t,o))),Cn[i.prop=e]=i,t.targetTest&&(la.push(i),vc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}If(e,i),t.register&&t.register(ln,i,gn)}else Yf.push(t)},ye=255,_o={aqua:[0,ye,ye],lime:[0,ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ye],navy:[0,0,128],white:[ye,ye,ye],olive:[128,128,0],yellow:[ye,ye,0],orange:[ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ye,0,0],pink:[ye,192,203],cyan:[0,ye,ye],transparent:[ye,ye,ye,0]},Ql=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ye+.5|0},$f=function(t,e,n){var i=t?Ii(t)?[t>>16,t>>8&ye,t&ye]:0:_o.black,s,o,a,l,c,h,u,f,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),_o[t])i=_o[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ye,i&ye,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ye,t&ye]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(rc),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Ql(l+1/3,s,o),i[1]=Ql(l,s,o),i[2]=Ql(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(gc),n&&i.length<4&&(i[3]=1),i}else i=t.match(rc)||_o.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/ye,o=i[1]/ye,a=i[2]/ye,u=Math.max(s,o,a),f=Math.min(s,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(o-a)/d+(o<a?6:0):u===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Jf=function(t){var e=[],n=[],i=-1;return t.split(Pi).forEach(function(s){var o=s.match(Lr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},bf=function(t,e,n){var i="",s=(t+i).match(Pi),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=$f(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Jf(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Pi,"1").split(Lr),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Pi),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},Pi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in _o)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),wg=/hsl[a]?\(/,bc=function(t){var e=t.join(" "),n;if(Pi.lastIndex=0,Pi.test(e))return n=wg.test(e),t[1]=bf(t[1],n),t[0]=bf(t[0],n,Jf(t[1])),!0},bo,Rn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,f,d,_=function g(m){var p=r()-i,S=m===!0,b,x,C,E;if((p>t||p<0)&&(n+=p-e),i+=p,C=i-n,b=C-o,(b>0||S)&&(E=++u.frame,f=C-u.time*1e3,u.time=C=C/1e3,o+=b+(b>=s?4:s-b),x=1),S||(l=c(g)),x)for(d=0;d<a.length;d++)a[d](C,f,E,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Rf&&(!sc&&mc()&&(_i=sc=window,xc=_i.document||{},Bn.gsap=ln,(_i.gsapVersions||(_i.gsapVersions=[])).push(ln.version),Pf(ha||_i.GreenSockGlobals||!_i.gsap&&_i||{}),Yf.forEach(Zf)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},bo=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),bo=0,c=So},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,p,S){var b=p?function(x,C,E,T){m(x,C,E,T),u.remove(b)}:m;return u.remove(m),a[S?"unshift":"push"](b),ys(),b},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},u}(),ys=function(){return!bo&&Rn.wake()},ie={},Tg=/^[\d.\-M][\d.\-,\s]/,Eg=/["']/g,Ag=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Eg,"").trim():+c,i=l.substr(a+1).trim();return e},Cg=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Rg=function(t){var e=(t+"").split("("),n=ie[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Ag(e[1])]:Cg(t).split(",").map(Uf)):ie._CE&&Tg.test(t)?ie._CE("",t):n},Kf=function(t){return function(e){return 1-t(1-e)}},Qf=function r(t,e){for(var n=t._first,i;n;)n instanceof en?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Rr=function(t,e){return t&&(Le(t)?t:ie[t]||Rg(t))||e},Ur=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return mn(t,function(a){ie[a]=Bn[a]=s,ie[o=a.toLowerCase()]=n;for(var l in s)ie[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ie[a+"."+l]=s[l]}),s},jf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},jl=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/ic*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*ig((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:jf(a);return s=ic/s,l.config=function(c,h){return r(t,c,h)},l},tc=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:jf(n);return i.config=function(s){return r(t,s)},i};mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Ur(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ie.Linear.easeNone=ie.none=ie.Linear.easeIn;Ur("Elastic",jl("in"),jl("out"),jl());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Ur("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ur("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Ur("Circ",function(r){return-(Ef(1-r*r)-1)});Ur("Sine",function(r){return r===1?1:-ng(r*tg)+1});Ur("Back",tc("in"),tc("out"),tc());ie.SteppedEase=ie.steps=Bn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Se;return function(a){return((i*To(0,o,a)|0)+s)*n}}};_s.ease=ie["quad.out"];mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return yc+=r+","+r+"Params,"});var wc=function(t,e){this.id=eg++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Sc,this.set=e?e.getSetter:ya},wo=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,vs(this,+e.duration,1,1),this.data=e.data,Ee&&(this._ctx=Ee,Ee.data.push(this)),bo||Rn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,vs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ys(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(va(this,n),!s._dp||s.parent||Ff(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&xi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Se||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Df(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+yf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+yf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?xs(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Se?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?da(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Se?0:this._rts,this.totalTime(To(-Math.abs(this._delay),this._tDur,s),i!==!1),xa(this),hg(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ys(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Se&&(this._tTime-=Se)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&xi(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Pn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?da(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=og);var i=on;return on=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),on=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Mf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Mf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(qn(this,n),Pn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Pn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Se,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Se)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Le(n)?n:Nf,a=function(){var c=i.then;i.then=null,Le(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){go(this)},r}();$n(wo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Se,_prom:0,_ps:!1,_rts:1});var en=function(r){Tf(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Pn(n.sortChildren),Ce&&xi(n.parent||Ce,Ri(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Bf(Ri(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return vo(0,arguments,this),this},e.from=function(i,s,o){return vo(1,arguments,this),this},e.fromTo=function(i,s,o,a){return vo(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,xo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Oe(i,s,qn(this,o),1),this},e.call=function(i,s,o){return xi(this,Oe.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Oe(i,o,qn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,xo(o).immediateRender=Pn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,xo(a).immediateRender=Pn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:$e(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,m,p,S,b,x,C,E,T;if(this!==Ce&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,x=this._start,b=this._ts,p=!b,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=$e(h%m),h===l?(g=this._repeat,f=c):(g=~~(h/m),g&&g===h/m&&(f=c,g--),f>c&&(f=c)),C=xs(this._tTime,m),!a&&this._tTime&&C!==g&&this._tTime-C*m-this._dur<=0&&(C=g),E&&g&1&&(f=c-f,T=1),g!==C&&!this._lock){var R=E&&C&1,y=R===(E&&g&1);if(g<C&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(T?0:$e(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Fn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Qf(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=pg(this,$e(a),$e(f)),S&&(h-=f-(f=S._start))),this._tTime=h,this._time=f,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!g&&(Fn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){S=0,_&&(h+=this._zTime=-Se);break}}d=_}else{d=this._last;for(var v=i<0?i:f;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,o||on&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){S=0,_&&(h+=this._zTime=v?-Se:Se);break}}d=_}}if(S&&!s&&(this.pause(),S.render(f>=a?0:-Se)._zTime=f>=a?1:-1,this._ts))return this._start=x,xa(this),this.render(i,s,o);this._onUpdate&&!s&&Fn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&sr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Fn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Ii(s)||(s=qn(this,s,i)),!(i instanceof wo)){if(an(i))return i.forEach(function(a){return o.add(a,s)}),this;if(We(i))return this.addLabel(i,s);if(Le(i))i=Oe.delayedCall(0,i);else return this}return this!==i?xi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Yn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Oe?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return We(i)?this.removeLabel(i):Le(i)?this.killTweensOf(i):(_a(this,i),i===this._recent&&(this._recent=this._last),Cr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$e(Rn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=qn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Oe.delayedCall(0,s||So,o);return a.data="isPause",this._hasPause=1,xi(this,a,qn(this,i))},e.removePause=function(i){var s=this._first;for(i=qn(this,i);s;)s._start===i&&s.data==="isPause"&&sr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)nr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=Zn(i),l=this._first,c=Ii(s),h;l;)l instanceof Oe?ag(l._targets,a)&&(c?(!nr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=qn(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,_=Oe.to(o,$n({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Se,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&vs(_,m,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,u||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,$n({startAt:{time:qn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Sf(this,qn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Sf(this,qn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Se)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Cr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Cr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Yn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,xi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;vs(o,o===Ce&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ce._ts&&(Df(Ce,da(i,Ce)),Lf=Rn.frame),Rn.frame>=xf){xf+=In.autoSleep||120;var s=Ce._first;if((!s||!s._ts)&&In.autoSleep&&Rn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Rn.sleep()}}},t}(wo);$n(en.prototype,{_lock:0,_hasPause:0,_forcing:0});var Pg=function(t,e,n,i,s,o,a){var l=new gn(this._pt,t,e,0,1,Rc,null,s),c=0,h=0,u,f,d,_,g,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ms(i)),o&&(S=[n,i],o(S,t,e),n=S[0],i=S[1]),f=n.match(Jl)||[];u=Jl.exec(i);)_=u[0],g=i.substring(c,u.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Dr(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=Jl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(_c.test(i)||p)&&(l.e=0),this._pt=l,l},Tc=function(t,e,n,i,s,o,a,l,c,h){Le(i)&&(i=i(s||0,t,o));var u=t[e],f=n!=="get"?n:Le(u)?c?t[e.indexOf("set")||!Le(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,d=Le(u)?c?Ng:nd:Cc,_;if(We(i)&&(~i.indexOf("random(")&&(i=Ms(i)),i.charAt(1)==="="&&(_=Dr(f,i)+(nn(f)||0),(_||_===0)&&(i=_))),!h||f!==i||fc)return!isNaN(f*i)&&i!==""?(_=new gn(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?Fg:id,0,d),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!u&&!(e in t)&&ga(e,i),Pg.call(this,t,e,f,i,d,l||In.stringFilter,c))},Ig=function(t,e,n,i,s){if(Le(t)&&(t=yo(t,s,e,n,i)),!vi(t)||t.style&&t.nodeType||an(t)||Af(t))return We(t)?yo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=yo(t[a],s,e,n,i);return o},Ec=function(t,e,n,i,s,o){var a,l,c,h;if(Cn[t]&&(a=new Cn[t]).init(s,a.rawVars?e[t]:Ig(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new gn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==gs))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},nr,fc,Ac=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,S=p&&p.data==="nested"?p.vars.targets:m,b=t._overwrite==="auto"&&!pc,x=t.timeline,C,E,T,R,y,v,I,N,F,G,$,W,Z;if(x&&(!f||!s)&&(s="none"),t._ease=Rr(s,_s.ease),t._yEase=u?Kf(Rr(u===!0?s:u,_s.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!x&&!!i.runBackwards,!x||f&&!i.stagger){if(N=m[0]?rr(m[0]).harness:0,W=N&&i[N.prop],C=fa(i,vc),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!d?g.render(-1,!0):g.revert(h&&_?aa:sg),g._lazy=0),o){if(sr(t._startAt=Oe.set(m,$n({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Pn(l),startAt:null,delay:0,onUpdate:c&&function(){return Fn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(on||!a&&!d)&&t._startAt.revert(aa),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(a=!1),T=$n({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Pn(l),immediateRender:a,stagger:0,parent:p},C),W&&(T[N.prop]=W),sr(t._startAt=Oe.set(m,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(on?t._startAt.revert(aa):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Se,Se);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Pn(l)||l&&!_,E=0;E<m.length;E++){if(y=m[E],I=y._gsap||Mc(m)[E]._gsap,t._ptLookup[E]=G={},oc[I.id]&&ir.length&&ua(),$=S===m?E:S.indexOf(y),N&&(F=new N).init(y,W||C,t,$,S)!==!1&&(t._pt=R=new gn(t._pt,y,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(B){G[B]=R}),F.priority&&(v=1)),!N||W)for(T in C)Cn[T]&&(F=Ec(T,C,t,$,y,S))?F.priority&&(v=1):G[T]=R=Tc.call(t,y,T,"get",C[T],$,S,0,i.stringFilter);t._op&&t._op[E]&&t.kill(y,t._op[E]),b&&t._pt&&(nr=t,Ce.killTweensOf(y,G,t.globalTime(e)),Z=!t.parent,nr=0),t._pt&&l&&(oc[I.id]=1)}v&&Ic(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Z,f&&e<=0&&x.render(Yn,!0,!0)},Lg=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return fc=1,t.vars[e]="+=0",Ac(t,a),fc=0,l?Mo(e+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=De(n)+nn(u.e)),u.b&&(u.b=h.s+nn(u.b))},Dg=function(t,e){var n=t[0]?rr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Ir({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Ug=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(an(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},yo=function(t,e,n,i,s){return Le(t)?t.call(e,n,i,s):We(t)&&~t.indexOf("random(")?Ms(t):t},td=yc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ed={};mn(td+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ed[r]=1});var Oe=function(r){Tf(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:xo(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,S=i.parent||Ce,b=(an(n)||Af(n)?Ii(n[0]):"length"in i)?[n]:Zn(n),x,C,E,T,R,y,v,I;if(a._targets=b.length?Mc(b):Mo("GSAP target "+n+" not found. https://gsap.com",!In.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||oa(c)||oa(h)){if(i=a.vars,x=a.timeline=new en({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:b}),x.kill(),x.parent=x._dp=Ri(a),x._start=0,f||oa(c)||oa(h)){if(T=b.length,v=f&&Hf(f),vi(f))for(R in f)~td.indexOf(R)&&(I||(I={}),I[R]=f[R]);for(C=0;C<T;C++)E=fa(i,ed),E.stagger=0,p&&(E.yoyoEase=p),I&&Ir(E,I),y=b[C],E.duration=+yo(c,Ri(a),C,y,b),E.delay=(+yo(h,Ri(a),C,y,b)||0)-a._delay,!f&&T===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),x.to(y,E,v?v(C,y,b):0),x._ease=ie.none;x.duration()?c=h=0:a.timeline=0}else if(_){xo($n(x.vars.defaults,{ease:"none"})),x._ease=Rr(_.ease||i.ease||"none");var N=0,F,G,$;if(an(_))_.forEach(function(W){return x.to(b,W,">")}),x.duration();else{E={};for(R in _)R==="ease"||R==="easeEach"||Ug(R,_[R],E,_.easeEach);for(R in E)for(F=E[R].sort(function(W,Z){return W.t-Z.t}),N=0,C=0;C<F.length;C++)G=F[C],$={ease:G.e,duration:(G.t-(C?F[C-1].t:0))/100*c},$[R]=G.v,x.to(b,$,N),N+=$.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!pc&&(nr=Ri(a),Ce.killTweensOf(b),nr=0),xi(S,Ri(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!_&&a._start===$e(S._time)&&Pn(u)&&ug(Ri(a))&&S.data!=="nested")&&(a._tTime=-Se,a.render(Math.max(0,-h)||0)),m&&Bf(Ri(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Se&&!h?l:i<Se?0:i,f,d,_,g,m,p,S,b,x;if(!c)dg(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,b=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,o);if(f=$e(u%g),u===l?(_=this._repeat,f=c):(_=~~(u/g),_&&_===$e(u/g)&&(f=c,_--),f>c&&(f=c)),p=this._yoyo&&_&1,p&&(x=this._yEase,f=c-f),m=xs(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(b&&this._yEase&&Qf(b,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render($e(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(zf(this,h?i:f,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(x||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!a&&!s&&!_&&(Fn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;b&&b.render(i<0?i:b._dur*b._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&ac(this,i,s,o),Fn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Fn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&ac(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&sr(this,1),!s&&!(h&&!a)&&(u||a||p)&&(Fn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){bo||Rn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ac(this,c),h=this._ease(c/this._dur),Lg(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(va(this,0),this.parent||Of(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?go(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,nr&&nr.vars.overwrite!==!0)._first||go(this),this.parent&&o!==this.timeline.totalDuration()&&vs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Zn(i):a,c=this._ptLookup,h=this._pt,u,f,d,_,g,m,p;if((!s||s==="all")&&cg(a,l))return s==="all"&&(this._pt=0),go(this);for(u=this._op=this._op||[],s!=="all"&&(We(s)&&(g={},mn(s,function(S){return g[S]=1}),s=g),s=Dg(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(u[p]=s,_=f,d={}):(d=u[p]=u[p]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&_a(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&h&&go(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return vo(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return vo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ce.killTweensOf(i,s,o)},t}(wo);$n(Oe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});mn("staggerTo,staggerFrom,staggerFromTo",function(r){Oe[r]=function(){var t=new en,e=cc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Cc=function(t,e,n){return t[e]=n},nd=function(t,e,n){return t[e](n)},Ng=function(t,e,n,i){return t[e](i.fp,n)},Og=function(t,e,n){return t.setAttribute(e,n)},ya=function(t,e){return Le(t[e])?nd:ma(t[e])&&t.setAttribute?Og:Cc},id=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Fg=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Rc=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Pc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Bg=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},zg=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?_a(this,e,"_pt"):e.dep||(n=1),e=i;return!n},kg=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Ic=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},gn=function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||id,this.d=l||this,this.set=c||Cc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=kg,this.m=n,this.mt=s,this.tween=i},r}();mn(yc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return vc[r]=1});Bn.TweenMax=Bn.TweenLite=Oe;Bn.TimelineLite=Bn.TimelineMax=en;Ce=new en({sortChildren:!1,defaults:_s,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});In.stringFilter=bc;var Pr=[],ca={},Vg=[],wf=0,Hg=0,ec=function(t){return(ca[t]||Vg).map(function(e){return e()})},dc=function(){var t=Date.now(),e=[];t-wf>2&&(ec("matchMediaInit"),Pr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=_i.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),ec("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),wf=t,ec("matchMedia"))},rd=function(){function r(e,n){this.selector=n&&hc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Hg++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Le(n)&&(s=i,i=n,n=Le);var o=this,a=function(){var c=Ee,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=hc(s)),Ee=o,u=i.apply(o,arguments),Le(u)&&o._r.push(u),Ee=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Le?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ee;Ee=null,n(this),Ee=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Oe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof en?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Oe)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Pr.length;o--;)Pr[o].id===this.id&&Pr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),Gg=function(){function r(e){this.contexts=[],this.scope=e,Ee&&Ee.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){vi(n)||(n={matches:n});var o=new rd(0,s||this.scope),a=o.conditions={},l,c,h;Ee&&!o.selector&&(o.selector=Ee.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=_i.matchMedia(n[c]),l&&(Pr.indexOf(o)<0&&Pr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(dc):l.addEventListener("change",dc)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),pa={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Zf(i)})},timeline:function(t){return new en(t)},getTweensOf:function(t,e){return Ce.getTweensOf(t,e)},getProperty:function(t,e,n,i){We(t)&&(t=Zn(t)[0]);var s=rr(t||{}).get,o=n?Nf:Uf;return n==="native"&&(n=""),t&&(e?o((Cn[e]&&Cn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Cn[a]&&Cn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Zn(t),t.length>1){var i=t.map(function(h){return ln.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var o=Cn[e],a=rr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;gs._pt=0,u.init(t,n?h+n:h,gs,0,[t]),u.render(1,u),gs._pt&&Pc(1,gs)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=ln.to(t,Ir((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Ce.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Rr(t.ease,_s.ease)),vf(_s,t||{})},config:function(t){return vf(In,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Cn[a]&&!Bn[a]&&Mo(e+" effect requires "+a+" plugin.")}),Kl[e]=function(a,l,c){return n(Zn(a),$n(l||{},s),c)},o&&(en.prototype[e]=function(a,l,c){return this.add(Kl[e](a,vi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ie[t]=Rr(e)},parseEase:function(t,e){return arguments.length?Rr(t,e):ie},getById:function(t){return Ce.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new en(t),i,s;for(n.smoothChildTiming=Pn(t.smoothChildTiming),Ce.remove(n),n._dp=0,n._time=n._tTime=Ce._time,i=Ce._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Oe&&i.vars.onComplete===i._targets[0]))&&xi(n,i,i._start-i._delay),i=s;return xi(Ce,n,0),n},context:function(t,e){return t?new rd(t,e):Ee},matchMedia:function(t){return new Gg(t)},matchMediaRefresh:function(){return Pr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||dc()},addEventListener:function(t,e){var n=ca[t]||(ca[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ca[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Mg,wrapYoyo:Sg,distribute:Hf,random:Wf,snap:Gf,normalize:yg,getUnit:nn,clamp:gg,splitColor:$f,toArray:Zn,selector:hc,mapRange:qf,pipe:xg,unitize:vg,interpolate:bg,shuffle:Vf},install:Pf,effects:Kl,ticker:Rn,updateRoot:en.updateRoot,plugins:Cn,globalTimeline:Ce,core:{PropTween:gn,globals:If,Tween:Oe,Timeline:en,Animation:wo,getCache:rr,_removeLinkedListItem:_a,reverting:function(){return on},context:function(t){return t&&Ee&&(Ee.data.push(t),t._ctx=Ee),Ee},suppressOverwrites:function(t){return pc=t}}};mn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return pa[r]=Oe[r]});Rn.add(en.updateRoot);gs=pa.to({},{duration:0});var Wg=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Xg=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Wg(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},nc=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(We(s)&&(l={},mn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Xg(a,s)}}}},ln=pa.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)on?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},nc("roundProps",uc),nc("modifiers"),nc("snap",Gf))||pa;Oe.version=en.version=ln.version="3.12.5";Rf=1;mc()&&ys();var qg=ie.Power0,Yg=ie.Power1,Zg=ie.Power2,$g=ie.Power3,Jg=ie.Power4,Kg=ie.Linear,Qg=ie.Quad,jg=ie.Cubic,t_=ie.Quart,e_=ie.Quint,n_=ie.Strong,i_=ie.Elastic,r_=ie.Back,s_=ie.SteppedEase,o_=ie.Bounce,a_=ie.Sine,l_=ie.Expo,c_=ie.Circ;var sd,ar,bs,Bc,Br,h_,od,zc,u_=function(){return typeof window!="undefined"},Di={},Fr=180/Math.PI,ws=Math.PI/180,Ss=Math.atan2,ad=1e8,kc=/([A-Z])/g,f_=/(left|right|width|margin|padding|x)/i,d_=/[\s,\(]\S/,yi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Uc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},p_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},m_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},g_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},pd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},md=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},__=function(t,e,n){return t.style[e]=n},x_=function(t,e,n){return t.style.setProperty(e,n)},v_=function(t,e,n){return t._gsap[e]=n},y_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},M_=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},S_=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Re="transform",Ln=Re+"Origin",b_=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Di&&s){if(this.tfm=this.tfm||{},t!=="transform")t=yi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Li(i,a)}):this.tfm[t]=o.x?o[t]:Li(i,t),t===Ln&&(this.tfm.zOrigin=o.zOrigin);else return yi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Re)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ln,e,"")),t=Re}(s||e)&&this.props.push(t,e,s[t])},gd=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},w_=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(kc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=zc(),(!s||!s.isStart)&&!n[Re]&&(gd(n),i.zOrigin&&n[Ln]&&(n[Ln]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},_d=function(t,e){var n={target:t,props:[],revert:w_,save:b_};return t._gsap||ln.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},xd,Nc=function(t,e){var n=ar.createElementNS?ar.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ar.createElement(t);return n&&n.style?n:ar.createElement(t)},Mi=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(kc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Ts(e)||e,1)||""},ld="O,Moz,ms,Ms,Webkit".split(","),Ts=function(t,e,n){var i=e||Br,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(ld[o]+t in s););return o<0?null:(o===3?"ms":o>=0?ld[o]:"")+t},Oc=function(){u_()&&window.document&&(sd=window,ar=sd.document,bs=ar.documentElement,Br=Nc("div")||{style:{}},h_=Nc("div"),Re=Ts(Re),Ln=Re+"Origin",Br.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xd=!!Ts("perspective"),zc=ln.core.reverting,Bc=1)},Lc=function r(t){var e=Nc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(bs.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),bs.removeChild(e),this.style.cssText=s,o},cd=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},vd=function(t){var e;try{e=t.getBBox()}catch{e=Lc.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Lc||(e=Lc.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+cd(t,["x","cx","x1"])||0,y:+cd(t,["y","cy","y1"])||0,width:0,height:0}:e},yd=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&vd(t))},zr=function(t,e){if(e){var n=t.style,i;e in Di&&e!==Ln&&(e=Re),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(kc,"-$1").toLowerCase())):n.removeAttribute(e)}},lr=function(t,e,n,i,s,o){var a=new gn(t._pt,e,n,0,1,o?md:pd);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},hd={deg:1,rad:1,turn:1},T_={grid:1,flex:1},cr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Br.style,l=f_.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",_,g,m,p;if(i===o||!s||hd[i]||hd[o])return s;if(o!=="px"&&!f&&(s=r(t,e,n,"px")),p=t.getCTM&&yd(t),(d||o==="%")&&(Di[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],De(d?s/_*u:s/100*_);if(a[l?"width":"height"]=u+(f?o:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===ar||!g.appendChild)&&(g=ar.body),m=g._gsap,m&&d&&m.width&&l&&m.time===Rn.time&&!m.uncache)return De(s/m.width*u);if(d&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=u+i,_=t[h],S?t.style[e]=S:zr(t,e)}else(d||o==="%")&&!T_[Mi(g,"display")]&&(a.position=Mi(t,"position")),g===t&&(a.position="static"),g.appendChild(Br),_=Br[h],g.removeChild(Br),a.position="absolute";return l&&d&&(m=rr(g),m.time=Rn.time,m.width=g[h]),De(f?_*s/u:_&&s?u/_*s:0)},Li=function(t,e,n,i){var s;return Bc||Oc(),e in yi&&e!=="transform"&&(e=yi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Di[e]&&e!=="transform"?(s=Co(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Sa(Mi(t,Ln))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ma[e]&&Ma[e](t,e,n)||Mi(t,e)||Sc(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?cr(t,e,s,n)+n:s},E_=function(t,e,n,i){if(!n||n==="none"){var s=Ts(e,t,1),o=s&&Mi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Mi(t,"borderTopColor"))}var a=new gn(this._pt,t.style,e,0,1,Rc),l=0,c=0,h,u,f,d,_,g,m,p,S,b,x,C;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=t.style[e],t.style[e]=i,i=Mi(t,e)||i,g?t.style[e]=g:zr(t,e)),h=[n,i],bc(h),n=h[0],i=h[1],f=n.match(Lr)||[],C=i.match(Lr)||[],C.length){for(;u=Lr.exec(i);)m=u[0],S=i.substring(l,u.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),m.charAt(1)==="="&&(m=Dr(d,m)+x),p=parseFloat(m),b=m.substr((p+"").length),l=Lr.lastIndex-b.length,b||(b=b||In.units[e]||x,l===i.length&&(i+=b,a.e+=b)),x!==b&&(d=cr(t,e,g,b)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:p-d,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?md:pd;return _c.test(i)&&(a.e=0),this._pt=a,a},ud={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},A_=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=ud[n]||n,e[1]=ud[i]||i,e.join(" ")},C_=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Di[a]&&(l=1,a=a==="transformOrigin"?Ln:Re),zr(n,a);l&&(zr(n,Re),o&&(o.svg&&n.removeAttribute("transform"),Co(n,1),o.uncache=1,gd(i)))}},Ma={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new gn(t._pt,e,n,0,0,C_);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Ao=[1,0,0,1,0,0],Md={},Sd=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},fd=function(t){var e=Mi(t,Re);return Sd(e)?Ao:e.substr(7).match(gc).map(De)},Vc=function(t,e){var n=t._gsap||rr(t),i=t.style,s=fd(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ao:s):(s===Ao&&!t.offsetParent&&t!==bs&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,bs.appendChild(t)),s=fd(t),l?i.display=l:zr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):bs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Fc=function(t,e,n,i,s,o){var a=t._gsap,l=s||Vc(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],S=l[5],b=e.split(" "),x=parseFloat(b[0])||0,C=parseFloat(b[1])||0,E,T,R,y;n?l!==Ao&&(T=d*m-_*g)&&(R=x*(m/T)+C*(-g/T)+(g*S-m*p)/T,y=x*(-_/T)+C*(d/T)-(d*S-_*p)/T,x=R,C=y):(E=vd(t),x=E.x+(~b[0].indexOf("%")?x/100*E.width:x),C=E.y+(~(b[1]||b[0]).indexOf("%")?C/100*E.height:C)),i||i!==!1&&a.smooth?(p=x-c,S=C-h,a.xOffset=u+(p*d+S*g)-p,a.yOffset=f+(p*_+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=C,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Ln]="0px 0px",o&&(lr(o,a,"xOrigin",c,x),lr(o,a,"yOrigin",h,C),lr(o,a,"xOffset",u,a.xOffset),lr(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+C)},Co=function(t,e){var n=t._gsap||new wc(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Mi(t,Ln)||"0",h,u,f,d,_,g,m,p,S,b,x,C,E,T,R,y,v,I,N,F,G,$,W,Z,B,tt,P,lt,Lt,vt,X,et;return h=u=f=g=m=p=S=b=x=0,d=_=1,n.svg=!!(t.getCTM&&yd(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Re]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Re]!=="none"?l[Re]:"")),i.scale=i.rotate=i.translate="none"),T=Vc(t,n.svg),n.svg&&(n.uncache?(B=t.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",Z=""):Z=!e&&t.getAttribute("data-svg-origin"),Fc(t,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,T)),C=n.xOrigin||0,E=n.yOrigin||0,T!==Ao&&(I=T[0],N=T[1],F=T[2],G=T[3],h=$=T[4],u=W=T[5],T.length===6?(d=Math.sqrt(I*I+N*N),_=Math.sqrt(G*G+F*F),g=I||N?Ss(N,I)*Fr:0,S=F||G?Ss(F,G)*Fr+g:0,S&&(_*=Math.abs(Math.cos(S*ws))),n.svg&&(h-=C-(C*I+E*F),u-=E-(C*N+E*G))):(et=T[6],vt=T[7],P=T[8],lt=T[9],Lt=T[10],X=T[11],h=T[12],u=T[13],f=T[14],R=Ss(et,Lt),m=R*Fr,R&&(y=Math.cos(-R),v=Math.sin(-R),Z=$*y+P*v,B=W*y+lt*v,tt=et*y+Lt*v,P=$*-v+P*y,lt=W*-v+lt*y,Lt=et*-v+Lt*y,X=vt*-v+X*y,$=Z,W=B,et=tt),R=Ss(-F,Lt),p=R*Fr,R&&(y=Math.cos(-R),v=Math.sin(-R),Z=I*y-P*v,B=N*y-lt*v,tt=F*y-Lt*v,X=G*v+X*y,I=Z,N=B,F=tt),R=Ss(N,I),g=R*Fr,R&&(y=Math.cos(R),v=Math.sin(R),Z=I*y+N*v,B=$*y+W*v,N=N*y-I*v,W=W*y-$*v,I=Z,$=B),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=De(Math.sqrt(I*I+N*N+F*F)),_=De(Math.sqrt(W*W+et*et)),R=Ss($,W),S=Math.abs(R)>2e-4?R*Fr:0,x=X?1/(X<0?-X:X):0),n.svg&&(Z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Sd(Mi(t,Re)),Z&&t.setAttribute("transform",Z))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=De(d),n.scaleY=De(_),n.rotation=De(g)+a,n.rotationX=De(m)+a,n.rotationY=De(p)+a,n.skewX=S+a,n.skewY=b+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ln]=Sa(c)),n.xOffset=n.yOffset=0,n.force3D=In.force3D,n.renderTransform=n.svg?P_:xd?bd:R_,n.uncache=0,n},Sa=function(t){return(t=t.split(" "))[0]+" "+t[1]},Dc=function(t,e,n){var i=nn(e);return De(parseFloat(e)+parseFloat(cr(t,"x",n+"px",i)))+i},R_=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,bd(t,e)},Nr="0deg",Eo="0px",Or=") ",bd=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,b=n.zOrigin,x="",C=p==="auto"&&t&&t!==1||p===!0;if(b&&(u!==Nr||h!==Nr)){var E=parseFloat(h)*ws,T=Math.sin(E),R=Math.cos(E),y;E=parseFloat(u)*ws,y=Math.cos(E),o=Dc(S,o,T*y*-b),a=Dc(S,a,-Math.sin(E)*-b),l=Dc(S,l,R*y*-b+b)}m!==Eo&&(x+="perspective("+m+Or),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(C||o!==Eo||a!==Eo||l!==Eo)&&(x+=l!==Eo||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Or),c!==Nr&&(x+="rotate("+c+Or),h!==Nr&&(x+="rotateY("+h+Or),u!==Nr&&(x+="rotateX("+u+Or),(f!==Nr||d!==Nr)&&(x+="skew("+f+", "+d+Or),(_!==1||g!==1)&&(x+="scale("+_+", "+g+Or),S.style[Re]=x||"translate(0, 0)"},P_=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,b=parseFloat(o),x=parseFloat(a),C,E,T,R,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ws,c*=ws,C=Math.cos(l)*u,E=Math.sin(l)*u,T=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(h*=ws,y=Math.tan(c-h),y=Math.sqrt(1+y*y),T*=y,R*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),C*=y,E*=y)),C=De(C),E=De(E),T=De(T),R=De(R)):(C=u,R=f,E=T=0),(b&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(b=cr(d,"x",o,"px"),x=cr(d,"y",a,"px")),(_||g||m||p)&&(b=De(b+_-(_*C+g*T)+m),x=De(x+g-(_*E+g*R)+p)),(i||s)&&(y=d.getBBox(),b=De(b+i/100*y.width),x=De(x+s/100*y.height)),y="matrix("+C+","+E+","+T+","+R+","+b+","+x+")",d.setAttribute("transform",y),S&&(d.style[Re]=y)},I_=function(t,e,n,i,s){var o=360,a=We(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Fr:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*ad)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*ad)%o-~~(c/o)*o)),t._pt=f=new gn(t._pt,e,n,i,c,p_),f.e=h,f.u="deg",t._props.push(n),f},dd=function(t,e){for(var n in e)t[n]=e[n];return t},L_=function(t,e,n){var i=dd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Re]=e,a=Co(n,1),zr(n,Re),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Re],o[Re]=e,a=Co(n,1),o[Re]=c);for(l in Di)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=nn(c),_=nn(h),u=d!==_?cr(n,l,c,_):parseFloat(c),f=parseFloat(h),t._pt=new gn(t._pt,a,l,u,f-u,Uc),t._pt.u=_||0,t._props.push(l));dd(a,i)};mn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Ma[t>1?"border"+r:r]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(_){return Li(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,u)}});var Hc={name:"css",register:Oc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,f,d,_,g,m,p,S,b,x,C,E,T,R;Bc||Oc(),this.styles=this.styles||_d(t),R=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(Cn[g]&&Ec(g,e,n,i,t,s)))){if(d=typeof h,_=Ma[g],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Ms(h)),_)_(this,t,g,h,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Pi.lastIndex=0,Pi.test(c)||(m=nn(c),p=nn(h)),p?m!==p&&(c=cr(t,g,c,p)+p):m&&(h+=m),this.add(a,"setProperty",c,h,i,s,0,0,g),o.push(g),R.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],We(c)&&~c.indexOf("random(")&&(c=Ms(c)),nn(c+"")||c==="auto"||(c+=In.units[g]||nn(Li(t,g))||""),(c+"").charAt(1)==="="&&(c=Li(t,g))):c=Li(t,g),f=parseFloat(c),S=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),g in yi&&(g==="autoAlpha"&&(f===1&&Li(t,"visibility")==="hidden"&&u&&(f=0),R.push("visibility",0,a.visibility),lr(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=yi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),b=g in Di,b){if(this.styles.save(g),x||(C=t._gsap,C.renderTransform&&!e.parseTransform||Co(t,e.parseTransform),E=e.smoothOrigin!==!1&&C.smooth,x=this._pt=new gn(this._pt,a,Re,0,1,C.renderTransform,C,0,-1),x.dep=1),g==="scale")this._pt=new gn(this._pt,C,"scaleY",C.scaleY,(S?Dr(C.scaleY,S+u):u)-C.scaleY||0,Uc),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Ln,0,a[Ln]),h=A_(h),C.svg?Fc(t,h,0,E,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==C.zOrigin&&lr(this,C,"zOrigin",C.zOrigin,p),lr(this,a,g,Sa(c),Sa(h)));continue}else if(g==="svgOrigin"){Fc(t,h,1,E,0,this);continue}else if(g in Md){I_(this,C,g,f,S?Dr(f,S+h):h);continue}else if(g==="smoothOrigin"){lr(this,C,"smooth",C.smooth,h);continue}else if(g==="force3D"){C[g]=h;continue}else if(g==="transform"){L_(this,h,t);continue}}else g in a||(g=Ts(g)||g);if(b||(u||u===0)&&(f||f===0)&&!d_.test(h)&&g in a)m=(c+"").substr((f+"").length),u||(u=0),p=nn(h)||(g in In.units?In.units[g]:m),m!==p&&(f=cr(t,g,c,p)),this._pt=new gn(this._pt,b?C:a,g,f,(S?Dr(f,S+u):u)-f,!b&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?g_:Uc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=m_);else if(g in a)E_.call(this,t,g,c,S?S+h:h);else if(g in t)this.add(t,g,c||t[g],S?S+h:h,i,s);else if(g!=="parseTransform"){ga(g,h);continue}b||(g in a?R.push(g,0,a[g]):R.push(g,1,c||t[g])),o.push(g)}}T&&Ic(this)},render:function(t,e){if(e.tween._time||!zc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Li,aliases:yi,getSetter:function(t,e,n){var i=yi[e];return i&&i.indexOf(",")<0&&(e=i),e in Di&&e!==Ln&&(t._gsap.x||Li(t,"x"))?n&&od===n?e==="scale"?y_:v_:(od=n||{})&&(e==="scale"?M_:S_):t.style&&!ma(t.style[e])?__:~e.indexOf("-")?x_:ya(t,e)},core:{_removeProperty:zr,_getMatrix:Vc}};ln.utils.checkPrefix=Ts;ln.core.getStyleSaver=_d;(function(r,t,e,n){var i=mn(r+","+t+","+e,function(s){Di[s]=1});mn(t,function(s){In.units[s]="deg",Md[s]=1}),yi[i[13]]=r+","+t,mn(n,function(s){var o=s.split(":");yi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){In.units[r]="px"});ln.registerPlugin(Hc);var me=ln.registerPlugin(Hc)||ln,Jb=me.core.Tween;function wd(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function D_(r,t,e){return t&&wd(r.prototype,t),e&&wd(r,e),r}var rn,Ta,U_,zn,hr,ur,As,Ed,kr,Po,Ad,Ui,si,Cd,Rd=function(){return rn||typeof window!="undefined"&&(rn=window.gsap)&&rn.registerPlugin&&rn},Pd=1,Es=[],te=[],oi=[],Io=Date.now,Gc=function(t,e){return e},N_=function(){var t=Po.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,te),i.push.apply(i,oi),te=n,oi=i,Gc=function(o,a){return e[o](a)}},Oi=function(t,e){return~oi.indexOf(t)&&oi[oi.indexOf(t)+1][e]},Lo=function(t){return!!~Ad.indexOf(t)},xn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},_n=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ba="scrollLeft",wa="scrollTop",Wc=function(){return Ui&&Ui.isPressed||te.cache++},Ea=function(t,e){var n=function i(s){if(s||s===0){Pd&&(zn.history.scrollRestoration="manual");var o=Ui&&Ui.isPressed;s=i.v=Math.round(s)||(Ui&&Ui.iOS?1:0),t(s),i.cacheID=te.cache,o&&Gc("ss",s)}else(e||te.cache!==i.cacheID||Gc("ref"))&&(i.cacheID=te.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},cn={s:ba,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ea(function(r){return arguments.length?zn.scrollTo(r,ze.sc()):zn.pageXOffset||hr[ba]||ur[ba]||As[ba]||0})},ze={s:wa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:cn,sc:Ea(function(r){return arguments.length?zn.scrollTo(cn.sc(),r):zn.pageYOffset||hr[wa]||ur[wa]||As[wa]||0})},vn=function(t,e){return(e&&e._ctx&&e._ctx.selector||rn.utils.toArray)(t)[0]||(typeof t=="string"&&rn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Ni=function(t,e){var n=e.s,i=e.sc;Lo(t)&&(t=hr.scrollingElement||ur);var s=te.indexOf(t),o=i===ze.sc?1:2;!~s&&(s=te.push(t)-1),te[s+o]||xn(t,"scroll",Wc);var a=te[s+o],l=a||(te[s+o]=Ea(Oi(t,n),!0)||(Lo(t)?i:Ea(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=rn.getProperty(t,"scrollBehavior")==="smooth"),l},Aa=function(t,e,n){var i=t,s=t,o=Io(),a=o,l=e||50,c=Math.max(500,l*3),h=function(_,g){var m=Io();g||m-o>l?(s=i,i=_,a=o,o=m):n?i+=_:i=s+(_-s)/(m-a)*(o-a)},u=function(){s=i=n?0:i,a=o=0},f=function(_){var g=a,m=s,p=Io();return(_||_===0)&&_!==i&&h(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:h,reset:u,getVelocity:f}},Ro=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Td=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Id=function(){Po=rn.core.globals().ScrollTrigger,Po&&Po.core&&N_()},Ld=function(t){return rn=t||Rd(),!Ta&&rn&&typeof document!="undefined"&&document.body&&(zn=window,hr=document,ur=hr.documentElement,As=hr.body,Ad=[zn,hr,ur,As],U_=rn.utils.clamp,Cd=rn.core.context||function(){},kr="onpointerenter"in As?"pointer":"mouse",Ed=Ue.isTouch=zn.matchMedia&&zn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in zn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,si=Ue.eventTypes=("ontouchstart"in ur?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ur?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Pd=0},500),Id(),Ta=1),Ta};cn.op=ze;te.cache=0;var Ue=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Ta||Ld(rn)||console.warn("Please gsap.registerPlugin(Observer)"),Po||Id();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,b=n.onPress,x=n.onRelease,C=n.onRight,E=n.onLeft,T=n.onUp,R=n.onDown,y=n.onChangeX,v=n.onChangeY,I=n.onChange,N=n.onToggleX,F=n.onToggleY,G=n.onHover,$=n.onHoverEnd,W=n.onMove,Z=n.ignoreCheck,B=n.isNormalizer,tt=n.onGestureStart,P=n.onGestureEnd,lt=n.onWheel,Lt=n.onEnable,vt=n.onDisable,X=n.onClick,et=n.scrollSpeed,ht=n.capture,nt=n.allowClicks,wt=n.lockAxis,At=n.onLockAxis;this.target=a=vn(a)||ur,this.vars=n,d&&(d=rn.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,et=et||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(zn.getComputedStyle(As).lineHeight)||22);var Ht,Qt,Gt,Dt,D,_e,Bt,z=this,Tt=0,ne=0,Ct=n.passive||!h,A=Ni(a,cn),M=Ni(a,ze),H=A(),j=M(),Q=~o.indexOf("touch")&&!~o.indexOf("pointer")&&si[0]==="pointerdown",J=Lo(a),ft=a.ownerDocument||hr,at=[0,0,0],mt=[0,0,0],qt=0,it=function(){return qt=Io()},ot=function(Et,$t){return(z.event=Et)&&d&&~d.indexOf(Et.target)||$t&&Q&&Et.pointerType!=="touch"||Z&&Z(Et,$t)},Nt=function(){z._vx.reset(),z._vy.reset(),Qt.pause(),u&&u(z)},Ut=function(){var Et=z.deltaX=Td(at),$t=z.deltaY=Td(mt),gt=Math.abs(Et)>=i,Wt=Math.abs($t)>=i;I&&(gt||Wt)&&I(z,Et,$t,at,mt),gt&&(C&&z.deltaX>0&&C(z),E&&z.deltaX<0&&E(z),y&&y(z),N&&z.deltaX<0!=Tt<0&&N(z),Tt=z.deltaX,at[0]=at[1]=at[2]=0),Wt&&(R&&z.deltaY>0&&R(z),T&&z.deltaY<0&&T(z),v&&v(z),F&&z.deltaY<0!=ne<0&&F(z),ne=z.deltaY,mt[0]=mt[1]=mt[2]=0),(Dt||Gt)&&(W&&W(z),Gt&&(S(z),Gt=!1),Dt=!1),_e&&!(_e=!1)&&At&&At(z),D&&(lt(z),D=!1),Ht=0},yt=function(Et,$t,gt){at[gt]+=Et,mt[gt]+=$t,z._vx.update(Et),z._vy.update($t),c?Ht||(Ht=requestAnimationFrame(Ut)):Ut()},Zt=function(Et,$t){wt&&!Bt&&(z.axis=Bt=Math.abs(Et)>Math.abs($t)?"x":"y",_e=!0),Bt!=="y"&&(at[2]+=Et,z._vx.update(Et,!0)),Bt!=="x"&&(mt[2]+=$t,z._vy.update($t,!0)),c?Ht||(Ht=requestAnimationFrame(Ut)):Ut()},Ft=function(Et){if(!ot(Et,1)){Et=Ro(Et,h);var $t=Et.clientX,gt=Et.clientY,Wt=$t-z.x,Rt=gt-z.y,Vt=z.isDragging;z.x=$t,z.y=gt,(Vt||Math.abs(z.startX-$t)>=s||Math.abs(z.startY-gt)>=s)&&(S&&(Gt=!0),Vt||(z.isDragging=!0),Zt(Wt,Rt),Vt||m&&m(z))}},se=z.onPress=function(xt){ot(xt,1)||xt&&xt.button||(z.axis=Bt=null,Qt.pause(),z.isPressed=!0,xt=Ro(xt),Tt=ne=0,z.startX=z.x=xt.clientX,z.startY=z.y=xt.clientY,z._vx.reset(),z._vy.reset(),xn(B?a:ft,si[1],Ft,Ct,!0),z.deltaX=z.deltaY=0,b&&b(z))},L=z.onRelease=function(xt){if(!ot(xt,1)){_n(B?a:ft,si[1],Ft,!0);var Et=!isNaN(z.y-z.startY),$t=z.isDragging,gt=$t&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),Wt=Ro(xt);!gt&&Et&&(z._vx.reset(),z._vy.reset(),h&&nt&&rn.delayedCall(.08,function(){if(Io()-qt>300&&!xt.defaultPrevented){if(xt.target.click)xt.target.click();else if(ft.createEvent){var Rt=ft.createEvent("MouseEvents");Rt.initMouseEvent("click",!0,!0,zn,1,Wt.screenX,Wt.screenY,Wt.clientX,Wt.clientY,!1,!1,!1,!1,0,null),xt.target.dispatchEvent(Rt)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,u&&$t&&!B&&Qt.restart(!0),p&&$t&&p(z),x&&x(z,gt)}},ut=function(Et){return Et.touches&&Et.touches.length>1&&(z.isGesturing=!0)&&tt(Et,z.isDragging)},Y=function(){return(z.isGesturing=!1)||P(z)},K=function(Et){if(!ot(Et)){var $t=A(),gt=M();yt(($t-H)*et,(gt-j)*et,1),H=$t,j=gt,u&&Qt.restart(!0)}},ct=function(Et){if(!ot(Et)){Et=Ro(Et,h),lt&&(D=!0);var $t=(Et.deltaMode===1?l:Et.deltaMode===2?zn.innerHeight:1)*_;yt(Et.deltaX*$t,Et.deltaY*$t,0),u&&!B&&Qt.restart(!0)}},dt=function(Et){if(!ot(Et)){var $t=Et.clientX,gt=Et.clientY,Wt=$t-z.x,Rt=gt-z.y;z.x=$t,z.y=gt,Dt=!0,u&&Qt.restart(!0),(Wt||Rt)&&Zt(Wt,Rt)}},zt=function(Et){z.event=Et,G(z)},le=function(Et){z.event=Et,$(z)},Ie=function(Et){return ot(Et)||Ro(Et,h)&&X(z)};Qt=z._dc=rn.delayedCall(f||.25,Nt).pause(),z.deltaX=z.deltaY=0,z._vx=Aa(0,50,!0),z._vy=Aa(0,50,!0),z.scrollX=A,z.scrollY=M,z.isDragging=z.isGesturing=z.isPressed=!1,Cd(this),z.enable=function(xt){return z.isEnabled||(xn(J?ft:a,"scroll",Wc),o.indexOf("scroll")>=0&&xn(J?ft:a,"scroll",K,Ct,ht),o.indexOf("wheel")>=0&&xn(a,"wheel",ct,Ct,ht),(o.indexOf("touch")>=0&&Ed||o.indexOf("pointer")>=0)&&(xn(a,si[0],se,Ct,ht),xn(ft,si[2],L),xn(ft,si[3],L),nt&&xn(a,"click",it,!0,!0),X&&xn(a,"click",Ie),tt&&xn(ft,"gesturestart",ut),P&&xn(ft,"gestureend",Y),G&&xn(a,kr+"enter",zt),$&&xn(a,kr+"leave",le),W&&xn(a,kr+"move",dt)),z.isEnabled=!0,xt&&xt.type&&se(xt),Lt&&Lt(z)),z},z.disable=function(){z.isEnabled&&(Es.filter(function(xt){return xt!==z&&Lo(xt.target)}).length||_n(J?ft:a,"scroll",Wc),z.isPressed&&(z._vx.reset(),z._vy.reset(),_n(B?a:ft,si[1],Ft,!0)),_n(J?ft:a,"scroll",K,ht),_n(a,"wheel",ct,ht),_n(a,si[0],se,ht),_n(ft,si[2],L),_n(ft,si[3],L),_n(a,"click",it,!0),_n(a,"click",Ie),_n(ft,"gesturestart",ut),_n(ft,"gestureend",Y),_n(a,kr+"enter",zt),_n(a,kr+"leave",le),_n(a,kr+"move",dt),z.isEnabled=z.isPressed=z.isDragging=!1,vt&&vt(z))},z.kill=z.revert=function(){z.disable();var xt=Es.indexOf(z);xt>=0&&Es.splice(xt,1),Ui===z&&(Ui=0)},Es.push(z),B&&Lo(a)&&(Ui=z),z.enable(g)},D_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ue.version="3.12.5";Ue.create=function(r){return new Ue(r)};Ue.register=Ld;Ue.getAll=function(){return Es.slice()};Ue.getById=function(r){return Es.filter(function(t){return t.vars.id===r})[0]};Rd()&&rn.registerPlugin(Ue);var St,Ps,re,Pe,ai,Te,Jd,Ga,Xo,zo,Uo,Ca,hn,Ya,Qc,Mn,Dd,Ud,Is,Kd,Xc,Qd,yn,jc,jd,tp,fr,th,sh,Ls,oh,Wa,eh,qc,Ra=1,un=Date.now,Yc=un(),Qn=0,No=0,Nd=function(t,e,n){var i=Vn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Od=function(t,e){return e&&(!Vn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},O_=function r(){return No&&requestAnimationFrame(r)},Fd=function(){return Ya=1},Bd=function(){return Ya=0},Si=function(t){return t},Oo=function(t){return Math.round(t*1e5)/1e5||0},ep=function(){return typeof window!="undefined"},np=function(){return St||ep()&&(St=window.gsap)&&St.registerPlugin&&St},qr=function(t){return!!~Jd.indexOf(t)},ip=function(t){return(t==="Height"?oh:re["inner"+t])||ai["client"+t]||Te["client"+t]},rp=function(t){return Oi(t,"getBoundingClientRect")||(qr(t)?function(){return Ha.width=re.innerWidth,Ha.height=oh,Ha}:function(){return Fi(t)})},F_=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=Oi(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?ip(s):t["client"+s])||0}},B_=function(t,e){return!e||~oi.indexOf(t)?rp(t):function(){return Ha}},bi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Oi(t,n))?o()-rp(t)()[s]:qr(t)?(ai[n]||Te[n])-ip(i):t[n]-t["offset"+i])},Pa=function(t,e){for(var n=0;n<Is.length;n+=3)(!e||~e.indexOf(Is[n+1]))&&t(Is[n],Is[n+1],Is[n+2])},Vn=function(t){return typeof t=="string"},bn=function(t){return typeof t=="function"},Fo=function(t){return typeof t=="number"},Vr=function(t){return typeof t=="object"},Do=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Zc=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Cs=Math.abs,sp="left",op="top",ah="right",lh="bottom",Gr="width",Wr="height",ko="Right",Vo="Left",Ho="Top",Go="Bottom",ke="padding",Jn="margin",Us="Width",ch="Height",Xe="px",Kn=function(t){return re.getComputedStyle(t)},z_=function(t){var e=Kn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},zd=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Fi=function(t,e){var n=e&&Kn(t)[Qc]!=="matrix(1, 0, 0, 1, 0, 0)"&&St.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Xa=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},ap=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},k_=function(t){return function(e){return St.utils.snap(ap(t),e)}},hh=function(t){var e=St.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},V_=function(t){return function(e,n){return hh(ap(t))(e,n.direction)}},Ia=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Ke=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Je=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},La=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},kd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Da={toggleActions:"play",anticipatePin:0},qa={top:0,left:0,center:.5,bottom:1,right:1},Ba=function(t,e){if(Vn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in qa?qa[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Ua=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,u=s.fontSize,f=s.indent,d=s.fontWeight,_=Pe.createElement("div"),g=qr(n)||Oi(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=g?Te:n,S=t.indexOf("start")!==-1,b=S?c:h,x="border-color:"+b+";font-size:"+u+";color:"+b+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(x+=(i===ze?ah:lh)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=x,_.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],za(_,0,i,S),_},za=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Us]=1,s["border"+a+Us]=0,s[n.p]=e+"px",St.set(t,s)},ee=[],nh={},qo,Vd=function(){return un()-Qn>34&&(qo||(qo=requestAnimationFrame(Bi)))},Rs=function(){(!yn||!yn.isPressed||yn.startX>Te.clientWidth)&&(te.cache++,yn?qo||(qo=requestAnimationFrame(Bi)):Bi(),Qn||Zr("scrollStart"),Qn=un())},$c=function(){tp=re.innerWidth,jd=re.innerHeight},Bo=function(){te.cache++,!hn&&!Qd&&!Pe.fullscreenElement&&!Pe.webkitFullscreenElement&&(!jc||tp!==re.innerWidth||Math.abs(re.innerHeight-jd)>re.innerHeight*.25)&&Ga.restart(!0)},Yr={},H_=[],lp=function r(){return Je(It,"scrollEnd",r)||Hr(!0)},Zr=function(t){return Yr[t]&&Yr[t].map(function(e){return e()})||H_},kn=[],cp=function(t){for(var e=0;e<kn.length;e+=5)(!t||kn[e+4]&&kn[e+4].query===t)&&(kn[e].style.cssText=kn[e+1],kn[e].getBBox&&kn[e].setAttribute("transform",kn[e+2]||""),kn[e+3].uncache=1)},uh=function(t,e){var n;for(Mn=0;Mn<ee.length;Mn++)n=ee[Mn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Wa=!0,e&&cp(e),e||Zr("revert")},hp=function(t,e){te.cache++,(e||!Sn)&&te.forEach(function(n){return bn(n)&&n.cacheID++&&(n.rec=0)}),Vn(t)&&(re.history.scrollRestoration=sh=t)},Sn,Xr=0,Hd,G_=function(){if(Hd!==Xr){var t=Hd=Xr;requestAnimationFrame(function(){return t===Xr&&Hr(!0)})}},up=function(){Te.appendChild(Ls),oh=!yn&&Ls.offsetHeight||re.innerHeight,Te.removeChild(Ls)},Gd=function(t){return Xo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Hr=function(t,e){if(Qn&&!t&&!Wa){Ke(It,"scrollEnd",lp);return}up(),Sn=It.isRefreshing=!0,te.forEach(function(i){return bn(i)&&++i.cacheID&&(i.rec=i())});var n=Zr("refreshInit");Kd&&It.sort(),e||uh(),te.forEach(function(i){bn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ee.slice(0).forEach(function(i){return i.refresh()}),Wa=!1,ee.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),eh=1,Gd(!0),ee.forEach(function(i){var s=bi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Gd(!1),eh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),te.forEach(function(i){bn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),hp(sh,1),Ga.pause(),Xr++,Sn=2,Bi(2),ee.forEach(function(i){return bn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Sn=It.isRefreshing=!1,Zr("refresh")},ih=0,ka=1,Wo,Bi=function(t){if(t===2||!Sn&&!Wa){It.isUpdating=!0,Wo&&Wo.update(0);var e=ee.length,n=un(),i=n-Yc>=50,s=e&&ee[0].scroll();if(ka=ih>s?-1:1,Sn||(ih=s),i&&(Qn&&!Ya&&n-Qn>200&&(Qn=0,Zr("scrollEnd")),Uo=Yc,Yc=n),ka<0){for(Mn=e;Mn-- >0;)ee[Mn]&&ee[Mn].update(0,i);ka=1}else for(Mn=0;Mn<e;Mn++)ee[Mn]&&ee[Mn].update(0,i);It.isUpdating=!1}qo=0},rh=[sp,op,lh,ah,Jn+Go,Jn+ko,Jn+Ho,Jn+Vo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Va=rh.concat([Gr,Wr,"boxSizing","max"+Us,"max"+ch,"position",Jn,ke,ke+Ho,ke+ko,ke+Go,ke+Vo]),W_=function(t,e,n){Ds(n);var i=t._gsap;if(i.spacerIsNative)Ds(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Jc=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=rh.length,o=e.style,a=t.style,l;s--;)l=rh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[lh]=a[ah]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Gr]=Xa(t,cn)+Xe,o[Wr]=Xa(t,ze)+Xe,o[ke]=a[Jn]=a[op]=a[sp]="0",Ds(i),a[Gr]=a["max"+Us]=n[Gr],a[Wr]=a["max"+ch]=n[Wr],a[ke]=n[ke],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},X_=/([A-Z])/g,Ds=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||St.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(X_,"-$1").toLowerCase())}},Na=function(t){for(var e=Va.length,n=t.style,i=[],s=0;s<e;s++)i.push(Va[s],n[Va[s]]);return i.t=t,i},q_=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Ha={left:0,top:0},Wd=function(t,e,n,i,s,o,a,l,c,h,u,f,d,_){bn(t)&&(t=t(l)),Vn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Ba("0"+t.substr(3),n):0));var g=d?d.time():0,m,p,S;if(d&&d.seek(0),isNaN(t)||(t=+t),Fo(t))d&&(t=St.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),a&&za(a,n,i,!0);else{bn(e)&&(e=e(l));var b=(t||"0").split(" "),x,C,E,T;S=vn(e,l)||Te,x=Fi(S)||{},(!x||!x.left&&!x.top)&&Kn(S).display==="none"&&(T=S.style.display,S.style.display="block",x=Fi(S),T?S.style.display=T:S.style.removeProperty("display")),C=Ba(b[0],x[i.d]),E=Ba(b[1]||"0",n),t=x[i.p]-c[i.p]-h+C+s-E,a&&za(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(_&&(l[_]=t||-.001,t<0&&(t=0)),o){var R=t+n,y=o._isStart;m="scroll"+i.d2,za(o,R,i,y&&R>20||!y&&(u?Math.max(Te[m],ai[m]):o.parentNode[m])<=R+1),u&&(c=Fi(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Xe))}return d&&S&&(m=Fi(S),d.seek(f),p=Fi(S),d._caScrollDist=m[i.p]-p[i.p],t=t/d._caScrollDist*f),d&&d.seek(g),d?t:Math.round(t)},Y_=/(webkit|moz|length|cssText|inset)/i,Xd=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===Te){t._stOrig=s.cssText,a=Kn(t);for(o in a)!+o&&!Y_.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;St.core.getCache(t).uncache=1,e.appendChild(t)}},fp=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},Oa=function(t,e,n){var i={};i[e.p]="+="+n,St.set(t,i)},qd=function(t,e){var n=Ni(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,u){var f=o.tween,d=l.onComplete,_={};c=c||n();var g=fp(n,c,function(){f.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+h*f.ratio+u*f.ratio*f.ratio)},l.onUpdate=function(){te.cache++,o.tween&&Bi()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=St.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ke(t,"wheel",n.wheelHandler),It.isTouch&&Ke(t,"touchmove",n.wheelHandler),s},It=function(){function r(e,n){Ps||r.register(St)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),th(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!No){this.update=this.refresh=this.kill=Si;return}n=zd(Vn(n)||Fo(n)||n.nodeType?{trigger:n}:n,Da);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,u=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,S=s.onSnapComplete,b=s.once,x=s.snap,C=s.pinReparent,E=s.pinSpacer,T=s.containerAnimation,R=s.fastScrollEnd,y=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?cn:ze,I=!u&&u!==0,N=vn(n.scroller||re),F=St.core.getCache(N),G=qr(N),$=("pinType"in n?n.pinType:Oi(N,"pinType")||G&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Z=I&&n.toggleActions.split(" "),B="markers"in n?n.markers:Da.markers,tt=G?0:parseFloat(Kn(N)["border"+v.p2+Us])||0,P=this,lt=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Lt=F_(N,G,v),vt=B_(N,G),X=0,et=0,ht=0,nt=Ni(N,v),wt,At,Ht,Qt,Gt,Dt,D,_e,Bt,z,Tt,ne,Ct,A,M,H,j,Q,J,ft,at,mt,qt,it,ot,Nt,Ut,yt,Zt,Ft,se,L,ut,Y,K,ct,dt,zt,le;if(P._startClamp=P._endClamp=!1,P._dir=v,m*=45,P.scroller=N,P.scroll=T?T.time.bind(T):nt,Qt=nt(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(Kd=1,n.refreshPriority===-9999&&(Wo=P)),F.tweenScroll=F.tweenScroll||{top:qd(N,ze),left:qd(N,cn)},P.tweenTo=wt=F.tweenScroll[v.p],P.scrubDuration=function(gt){ut=Fo(gt)&&gt,ut?L?L.duration(gt):L=St.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ut,paused:!0,onComplete:function(){return p&&p(P)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(u),Ft=0,l||(l=i.vars.id)),x&&((!Vr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Te.style&&St.set(G?[Te,ai]:N,{scrollBehavior:"auto"}),te.forEach(function(gt){return bn(gt)&&gt.target===(G?Pe.scrollingElement||ai:N)&&(gt.smooth=!1)}),Ht=bn(x.snapTo)?x.snapTo:x.snapTo==="labels"?k_(i):x.snapTo==="labelsDirectional"?V_(i):x.directional!==!1?function(gt,Wt){return hh(x.snapTo)(gt,un()-et<500?0:Wt.direction)}:St.utils.snap(x.snapTo),Y=x.duration||{min:.1,max:2},Y=Vr(Y)?zo(Y.min,Y.max):zo(Y,Y),K=St.delayedCall(x.delay||ut/2||.1,function(){var gt=nt(),Wt=un()-et<500,Rt=wt.tween;if((Wt||Math.abs(P.getVelocity())<10)&&!Rt&&!Ya&&X!==gt){var Vt=(gt-Dt)/A,Ne=i&&!I?i.totalProgress():Vt,jt=Wt?0:(Ne-se)/(un()-Uo)*1e3||0,Me=St.utils.clamp(-Vt,1-Vt,Cs(jt/2)*jt/.185),Ge=Vt+(x.inertia===!1?0:Me),xe,ve,he=x,Nn=he.onStart,be=he.onInterrupt,pn=he.onComplete;if(xe=Ht(Ge,P),Fo(xe)||(xe=Ge),ve=Math.round(Dt+xe*A),gt<=D&&gt>=Dt&&ve!==gt){if(Rt&&!Rt._initted&&Rt.data<=Cs(ve-gt))return;x.inertia===!1&&(Me=xe-Vt),wt(ve,{duration:Y(Cs(Math.max(Cs(Ge-Ne),Cs(xe-Ne))*.185/jt/.05||0)),ease:x.ease||"power3",data:Cs(ve-gt),onInterrupt:function(){return K.restart(!0)&&be&&be(P)},onComplete:function(){P.update(),X=nt(),i&&(L?L.resetTo("totalProgress",xe,i._tTime/i._tDur):i.progress(xe)),Ft=se=i&&!I?i.totalProgress():P.progress,S&&S(P),pn&&pn(P)}},gt,Me*A,ve-gt-Me*A),Nn&&Nn(P,wt.tween)}}else P.isActive&&X!==gt&&K.restart(!0)}).pause()),l&&(nh[l]=P),f=P.trigger=vn(f||d!==!0&&d),le=f&&f._gsap&&f._gsap.stRevert,le&&(le=le(P)),d=d===!0?f:vn(d),Vn(a)&&(a={targets:f,className:a}),d&&(_===!1||_===Jn||(_=!_&&d.parentNode&&d.parentNode.style&&Kn(d.parentNode).display==="flex"?!1:ke),P.pin=d,At=St.core.getCache(d),At.spacer?M=At.pinState:(E&&(E=vn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),At.spacerIsNative=!!E,E&&(At.spacerState=Na(E))),At.spacer=Q=E||Pe.createElement("div"),Q.classList.add("pin-spacer"),l&&Q.classList.add("pin-spacer-"+l),At.pinState=M=Na(d)),n.force3D!==!1&&St.set(d,{force3D:!0}),P.spacer=Q=At.spacer,Zt=Kn(d),it=Zt[_+v.os2],ft=St.getProperty(d),at=St.quickSetter(d,v.a,Xe),Jc(d,Q,Zt),j=Na(d)),B){ne=Vr(B)?zd(B,kd):kd,z=Ua("scroller-start",l,N,v,ne,0),Tt=Ua("scroller-end",l,N,v,ne,0,z),J=z["offset"+v.op.d2];var Ie=vn(Oi(N,"content")||N);_e=this.markerStart=Ua("start",l,Ie,v,ne,J,0,T),Bt=this.markerEnd=Ua("end",l,Ie,v,ne,J,0,T),T&&(zt=St.quickSetter([_e,Bt],v.a,Xe)),!$&&!(oi.length&&Oi(N,"fixedMarkers")===!0)&&(z_(G?Te:N),St.set([z,Tt],{force3D:!0}),Nt=St.quickSetter(z,v.a,Xe),yt=St.quickSetter(Tt,v.a,Xe))}if(T){var xt=T.vars.onUpdate,Et=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){P.update(0,0,1),xt&&xt.apply(T,Et||[])})}if(P.previous=function(){return ee[ee.indexOf(P)-1]},P.next=function(){return ee[ee.indexOf(P)+1]},P.revert=function(gt,Wt){if(!Wt)return P.kill(!0);var Rt=gt!==!1||!P.enabled,Vt=hn;Rt!==P.isReverted&&(Rt&&(ct=Math.max(nt(),P.scroll.rec||0),ht=P.progress,dt=i&&i.progress()),_e&&[_e,Bt,z,Tt].forEach(function(Ne){return Ne.style.display=Rt?"none":"block"}),Rt&&(hn=P,P.update(Rt)),d&&(!C||!P.isActive)&&(Rt?W_(d,Q,M):Jc(d,Q,Kn(d),ot)),Rt||P.update(Rt),hn=Vt,P.isReverted=Rt)},P.refresh=function(gt,Wt,Rt,Vt){if(!((hn||!P.enabled)&&!Wt)){if(d&&gt&&Qn){Ke(r,"scrollEnd",lp);return}!Sn&&lt&&lt(P),hn=P,wt.tween&&!Rt&&(wt.tween.kill(),wt.tween=0),L&&L.pause(),g&&i&&i.revert({kill:!1}).invalidate(),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Ne=Lt(),jt=vt(),Me=T?T.duration():bi(N,v),Ge=A<=.01,xe=0,ve=Vt||0,he=Vr(Rt)?Rt.end:n.end,Nn=n.endTrigger||f,be=Vr(Rt)?Rt.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),pn=P.pinnedContainer=n.pinnedContainer&&vn(n.pinnedContainer,P),w=f&&Math.max(0,ee.indexOf(P))||0,U=w,k,V,O,rt,st,pt,Mt,kt,Xt,bt,Yt,ce,ue;for(B&&Vr(Rt)&&(ce=St.getProperty(z,v.p),ue=St.getProperty(Tt,v.p));U--;)pt=ee[U],pt.end||pt.refresh(0,1)||(hn=P),Mt=pt.pin,Mt&&(Mt===f||Mt===d||Mt===pn)&&!pt.isReverted&&(bt||(bt=[]),bt.unshift(pt),pt.revert(!0,!0)),pt!==ee[U]&&(w--,U--);for(bn(be)&&(be=be(P)),be=Nd(be,"start",P),Dt=Wd(be,f,Ne,v,nt(),_e,z,P,jt,tt,$,Me,T,P._startClamp&&"_startClamp")||(d?-.001:0),bn(he)&&(he=he(P)),Vn(he)&&!he.indexOf("+=")&&(~he.indexOf(" ")?he=(Vn(be)?be.split(" ")[0]:"")+he:(xe=Ba(he.substr(2),Ne),he=Vn(be)?be:(T?St.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Dt):Dt)+xe,Nn=f)),he=Nd(he,"end",P),D=Math.max(Dt,Wd(he||(Nn?"100% 0":Me),Nn,Ne,v,nt()+xe,Bt,Tt,P,jt,tt,$,Me,T,P._endClamp&&"_endClamp"))||-.001,xe=0,U=w;U--;)pt=ee[U],Mt=pt.pin,Mt&&pt.start-pt._pinPush<=Dt&&!T&&pt.end>0&&(k=pt.end-(P._startClamp?Math.max(0,pt.start):pt.start),(Mt===f&&pt.start-pt._pinPush<Dt||Mt===pn)&&isNaN(be)&&(xe+=k*(1-pt.progress)),Mt===d&&(ve+=k));if(Dt+=xe,D+=xe,P._startClamp&&(P._startClamp+=xe),P._endClamp&&!Sn&&(P._endClamp=D||-.001,D=Math.min(D,bi(N,v))),A=D-Dt||(Dt-=.01)&&.001,Ge&&(ht=St.utils.clamp(0,1,St.utils.normalize(Dt,D,ct))),P._pinPush=ve,_e&&xe&&(k={},k[v.a]="+="+xe,pn&&(k[v.p]="-="+nt()),St.set([_e,Bt],k)),d&&!(eh&&P.end>=bi(N,v)))k=Kn(d),rt=v===ze,O=nt(),mt=parseFloat(ft(v.a))+ve,!Me&&D>1&&(Yt=(G?Pe.scrollingElement||ai:N).style,Yt={style:Yt,value:Yt["overflow"+v.a.toUpperCase()]},G&&Kn(Te)["overflow"+v.a.toUpperCase()]!=="scroll"&&(Yt.style["overflow"+v.a.toUpperCase()]="scroll")),Jc(d,Q,k),j=Na(d),V=Fi(d,!0),kt=$&&Ni(N,rt?cn:ze)(),_?(ot=[_+v.os2,A+ve+Xe],ot.t=Q,U=_===ke?Xa(d,v)+A+ve:0,U&&(ot.push(v.d,U+Xe),Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=U+Xe)),Ds(ot),pn&&ee.forEach(function(Be){Be.pin===pn&&Be.vars.pinSpacing!==!1&&(Be._subPinOffset=!0)}),$&&nt(ct)):(U=Xa(d,v),U&&Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=U+Xe)),$&&(st={top:V.top+(rt?O-Dt:kt)+Xe,left:V.left+(rt?kt:O-Dt)+Xe,boxSizing:"border-box",position:"fixed"},st[Gr]=st["max"+Us]=Math.ceil(V.width)+Xe,st[Wr]=st["max"+ch]=Math.ceil(V.height)+Xe,st[Jn]=st[Jn+Ho]=st[Jn+ko]=st[Jn+Go]=st[Jn+Vo]="0",st[ke]=k[ke],st[ke+Ho]=k[ke+Ho],st[ke+ko]=k[ke+ko],st[ke+Go]=k[ke+Go],st[ke+Vo]=k[ke+Vo],H=q_(M,st,C),Sn&&nt(0)),i?(Xt=i._initted,Xc(1),i.render(i.duration(),!0,!0),qt=ft(v.a)-mt+A+ve,Ut=Math.abs(A-qt)>1,$&&Ut&&H.splice(H.length-2,2),i.render(0,!0,!0),Xt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Xc(0)):qt=A,Yt&&(Yt.value?Yt.style["overflow"+v.a.toUpperCase()]=Yt.value:Yt.style.removeProperty("overflow-"+v.a));else if(f&&nt()&&!T)for(V=f.parentNode;V&&V!==Te;)V._pinOffset&&(Dt-=V._pinOffset,D-=V._pinOffset),V=V.parentNode;bt&&bt.forEach(function(Be){return Be.revert(!1,!0)}),P.start=Dt,P.end=D,Qt=Gt=Sn?ct:nt(),!T&&!Sn&&(Qt<ct&&nt(ct),P.scroll.rec=0),P.revert(!1,!0),et=un(),K&&(X=-1,K.restart(!0)),hn=0,i&&I&&(i._initted||dt)&&i.progress()!==dt&&i.progress(dt||0,!0).render(i.time(),!0,!0),(Ge||ht!==P.progress||T||g)&&(i&&!I&&i.totalProgress(T&&Dt<-.001&&!ht?St.utils.normalize(Dt,D,0):ht,!0),P.progress=Ge||(Qt-Dt)/A===ht?0:ht),d&&_&&(Q._pinOffset=Math.round(P.progress*qt)),L&&L.invalidate(),isNaN(ce)||(ce-=St.getProperty(z,v.p),ue-=St.getProperty(Tt,v.p),Oa(z,v,ce),Oa(_e,v,ce-(Vt||0)),Oa(Tt,v,ue),Oa(Bt,v,ue-(Vt||0))),Ge&&!Sn&&P.update(),h&&!Sn&&!Ct&&(Ct=!0,h(P),Ct=!1)}},P.getVelocity=function(){return(nt()-Gt)/(un()-Uo)*1e3||0},P.endAnimation=function(){Do(P.callbackAnimation),i&&(L?L.progress(1):i.paused()?I||Do(i,P.direction<0,1):Do(i,i.reversed()))},P.labelToScroll=function(gt){return i&&i.labels&&(Dt||P.refresh()||Dt)+i.labels[gt]/i.duration()*A||0},P.getTrailing=function(gt){var Wt=ee.indexOf(P),Rt=P.direction>0?ee.slice(0,Wt).reverse():ee.slice(Wt+1);return(Vn(gt)?Rt.filter(function(Vt){return Vt.vars.preventOverlaps===gt}):Rt).filter(function(Vt){return P.direction>0?Vt.end<=Dt:Vt.start>=D})},P.update=function(gt,Wt,Rt){if(!(T&&!Rt&&!gt)){var Vt=Sn===!0?ct:P.scroll(),Ne=gt?0:(Vt-Dt)/A,jt=Ne<0?0:Ne>1?1:Ne||0,Me=P.progress,Ge,xe,ve,he,Nn,be,pn,w;if(Wt&&(Gt=Qt,Qt=T?nt():Vt,x&&(se=Ft,Ft=i&&!I?i.totalProgress():jt)),m&&d&&!hn&&!Ra&&Qn&&(!jt&&Dt<Vt+(Vt-Gt)/(un()-Uo)*m?jt=1e-4:jt===1&&D>Vt+(Vt-Gt)/(un()-Uo)*m&&(jt=.9999)),jt!==Me&&P.enabled){if(Ge=P.isActive=!!jt&&jt<1,xe=!!Me&&Me<1,be=Ge!==xe,Nn=be||!!jt!=!!Me,P.direction=jt>Me?1:-1,P.progress=jt,Nn&&!hn&&(ve=jt&&!Me?0:jt===1?1:Me===1?2:3,I&&(he=!be&&Z[ve+1]!=="none"&&Z[ve+1]||Z[ve],w=i&&(he==="complete"||he==="reset"||he in i))),y&&(be||w)&&(w||u||!i)&&(bn(y)?y(P):P.getTrailing(y).forEach(function(O){return O.endAnimation()})),I||(L&&!hn&&!Ra?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",jt,i._tTime/i._tDur):(L.vars.totalProgress=jt,L.invalidate().restart())):i&&i.totalProgress(jt,!!(hn&&(et||gt)))),d){if(gt&&_&&(Q.style[_+v.os2]=it),!$)at(Oo(mt+qt*jt));else if(Nn){if(pn=!gt&&jt>Me&&D+1>Vt&&Vt+1>=bi(N,v),C)if(!gt&&(Ge||pn)){var U=Fi(d,!0),k=Vt-Dt;Xd(d,Te,U.top+(v===ze?k:0)+Xe,U.left+(v===ze?0:k)+Xe)}else Xd(d,Q);Ds(Ge||pn?H:j),Ut&&jt<1&&Ge||at(mt+(jt===1&&!pn?qt:0))}}x&&!wt.tween&&!hn&&!Ra&&K.restart(!0),a&&(be||b&&jt&&(jt<1||!qc))&&Xo(a.targets).forEach(function(O){return O.classList[Ge||b?"add":"remove"](a.className)}),o&&!I&&!gt&&o(P),Nn&&!hn?(I&&(w&&(he==="complete"?i.pause().totalProgress(1):he==="reset"?i.restart(!0).pause():he==="restart"?i.restart(!0):i[he]()),o&&o(P)),(be||!qc)&&(c&&be&&Zc(P,c),W[ve]&&Zc(P,W[ve]),b&&(jt===1?P.kill(!1,1):W[ve]=0),be||(ve=jt===1?1:3,W[ve]&&Zc(P,W[ve]))),R&&!Ge&&Math.abs(P.getVelocity())>(Fo(R)?R:2500)&&(Do(P.callbackAnimation),L?L.progress(1):Do(i,he==="reverse"?1:!jt,1))):I&&o&&!hn&&o(P)}if(yt){var V=T?Vt/T.duration()*(T._caScrollDist||0):Vt;Nt(V+(z._isFlipped?1:0)),yt(V)}zt&&zt(-Vt/T.duration()*(T._caScrollDist||0))}},P.enable=function(gt,Wt){P.enabled||(P.enabled=!0,Ke(N,"resize",Bo),G||Ke(N,"scroll",Rs),lt&&Ke(r,"refreshInit",lt),gt!==!1&&(P.progress=ht=0,Qt=Gt=X=nt()),Wt!==!1&&P.refresh())},P.getTween=function(gt){return gt&&wt?wt.tween:L},P.setPositions=function(gt,Wt,Rt,Vt){if(T){var Ne=T.scrollTrigger,jt=T.duration(),Me=Ne.end-Ne.start;gt=Ne.start+Me*gt/jt,Wt=Ne.start+Me*Wt/jt}P.refresh(!1,!1,{start:Od(gt,Rt&&!!P._startClamp),end:Od(Wt,Rt&&!!P._endClamp)},Vt),P.update()},P.adjustPinSpacing=function(gt){if(ot&&gt){var Wt=ot.indexOf(v.d)+1;ot[Wt]=parseFloat(ot[Wt])+gt+Xe,ot[1]=parseFloat(ot[1])+gt+Xe,Ds(ot)}},P.disable=function(gt,Wt){if(P.enabled&&(gt!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,Wt||L&&L.pause(),ct=0,At&&(At.uncache=1),lt&&Je(r,"refreshInit",lt),K&&(K.pause(),wt.tween&&wt.tween.kill()&&(wt.tween=0)),!G)){for(var Rt=ee.length;Rt--;)if(ee[Rt].scroller===N&&ee[Rt]!==P)return;Je(N,"resize",Bo),G||Je(N,"scroll",Rs)}},P.kill=function(gt,Wt){P.disable(gt,Wt),L&&!Wt&&L.kill(),l&&delete nh[l];var Rt=ee.indexOf(P);Rt>=0&&ee.splice(Rt,1),Rt===Mn&&ka>0&&Mn--,Rt=0,ee.forEach(function(Vt){return Vt.scroller===P.scroller&&(Rt=1)}),Rt||Sn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,gt&&i.revert({kill:!1}),Wt||i.kill()),_e&&[_e,Bt,z,Tt].forEach(function(Vt){return Vt.parentNode&&Vt.parentNode.removeChild(Vt)}),Wo===P&&(Wo=0),d&&(At&&(At.uncache=1),Rt=0,ee.forEach(function(Vt){return Vt.pin===d&&Rt++}),Rt||(At.spacer=0)),n.onKill&&n.onKill(P)},ee.push(P),P.enable(!1,!1),le&&le(P),i&&i.add&&!A){var $t=P.update;P.update=function(){P.update=$t,Dt||D||P.refresh()},St.delayedCall(.01,P.update),A=.01,Dt=D=0}else P.refresh();d&&G_()},r.register=function(n){return Ps||(St=n||np(),ep()&&window.document&&r.enable(),Ps=No),Ps},r.defaults=function(n){if(n)for(var i in n)Da[i]=n[i];return Da},r.disable=function(n,i){No=0,ee.forEach(function(o){return o[i?"kill":"disable"](n)}),Je(re,"wheel",Rs),Je(Pe,"scroll",Rs),clearInterval(Ca),Je(Pe,"touchcancel",Si),Je(Te,"touchstart",Si),Ia(Je,Pe,"pointerdown,touchstart,mousedown",Fd),Ia(Je,Pe,"pointerup,touchend,mouseup",Bd),Ga.kill(),Pa(Je);for(var s=0;s<te.length;s+=3)La(Je,te[s],te[s+1]),La(Je,te[s],te[s+2])},r.enable=function(){if(re=window,Pe=document,ai=Pe.documentElement,Te=Pe.body,St&&(Xo=St.utils.toArray,zo=St.utils.clamp,th=St.core.context||Si,Xc=St.core.suppressOverwrites||Si,sh=re.history.scrollRestoration||"auto",ih=re.pageYOffset,St.core.globals("ScrollTrigger",r),Te)){No=1,Ls=document.createElement("div"),Ls.style.height="100vh",Ls.style.position="absolute",up(),O_(),Ue.register(St),r.isTouch=Ue.isTouch,fr=Ue.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),jc=Ue.isTouch===1,Ke(re,"wheel",Rs),Jd=[re,Pe,ai,Te],St.matchMedia?(r.matchMedia=function(l){var c=St.matchMedia(),h;for(h in l)c.add(h,l[h]);return c},St.addEventListener("matchMediaInit",function(){return uh()}),St.addEventListener("matchMediaRevert",function(){return cp()}),St.addEventListener("matchMedia",function(){Hr(0,1),Zr("matchMedia")}),St.matchMedia("(orientation: portrait)",function(){return $c(),$c})):console.warn("Requires GSAP 3.11.0 or later"),$c(),Ke(Pe,"scroll",Rs);var n=Te.style,i=n.borderTopStyle,s=St.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Fi(Te),ze.m=Math.round(o.top+ze.sc())||0,cn.m=Math.round(o.left+cn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Ca=setInterval(Vd,250),St.delayedCall(.5,function(){return Ra=0}),Ke(Pe,"touchcancel",Si),Ke(Te,"touchstart",Si),Ia(Ke,Pe,"pointerdown,touchstart,mousedown",Fd),Ia(Ke,Pe,"pointerup,touchend,mouseup",Bd),Qc=St.utils.checkPrefix("transform"),Va.push(Qc),Ps=un(),Ga=St.delayedCall(.2,Hr).pause(),Is=[Pe,"visibilitychange",function(){var l=re.innerWidth,c=re.innerHeight;Pe.hidden?(Dd=l,Ud=c):(Dd!==l||Ud!==c)&&Bo()},Pe,"DOMContentLoaded",Hr,re,"load",Hr,re,"resize",Bo],Pa(Ke),ee.forEach(function(l){return l.enable(0,1)}),a=0;a<te.length;a+=3)La(Je,te[a],te[a+1]),La(Je,te[a],te[a+2])}},r.config=function(n){"limitCallbacks"in n&&(qc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ca)||(Ca=i)&&setInterval(Vd,i),"ignoreMobileResize"in n&&(jc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Pa(Je)||Pa(Ke,n.autoRefreshEvents||"none"),Qd=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=vn(n),o=te.indexOf(s),a=qr(s);~o&&te.splice(o,a?6:2),i&&(a?oi.unshift(re,i,Te,i,ai,i):oi.unshift(s,i))},r.clearMatchMedia=function(n){ee.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Vn(n)?vn(n):n).getBoundingClientRect(),a=o[s?Gr:Wr]*i||0;return s?o.right-a>0&&o.left+a<re.innerWidth:o.bottom-a>0&&o.top+a<re.innerHeight},r.positionInViewport=function(n,i,s){Vn(n)&&(n=vn(n));var o=n.getBoundingClientRect(),a=o[s?Gr:Wr],l=i==null?a/2:i in qa?qa[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/re.innerWidth:(o.top+l)/re.innerHeight},r.killAll=function(n){if(ee.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Yr.killAll||[];Yr={},i.forEach(function(s){return s()})}},r}();It.version="3.12.5";It.saveStyles=function(r){return r?Xo(r).forEach(function(t){if(t&&t.style){var e=kn.indexOf(t);e>=0&&kn.splice(e,5),kn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),St.core.getCache(t),th())}}):kn};It.revert=function(r,t){return uh(!r,t)};It.create=function(r,t){return new It(r,t)};It.refresh=function(r){return r?Bo():(Ps||It.register())&&Hr(!0)};It.update=function(r){return++te.cache&&Bi(r===!0?2:0)};It.clearScrollMemory=hp;It.maxScroll=function(r,t){return bi(r,t?cn:ze)};It.getScrollFunc=function(r,t){return Ni(vn(r),t?cn:ze)};It.getById=function(r){return nh[r]};It.getAll=function(){return ee.filter(function(r){return r.vars.id!=="ScrollSmoother"})};It.isScrolling=function(){return!!Qn};It.snapDirectional=hh;It.addEventListener=function(r,t){var e=Yr[r]||(Yr[r]=[]);~e.indexOf(t)||e.push(t)};It.removeEventListener=function(r,t){var e=Yr[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};It.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var u=[],f=[],d=St.delayedCall(i,function(){h(u,f),u=[],f=[]}).pause();return function(_){u.length||d.restart(!0),u.push(_.trigger),f.push(_),s<=u.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&bn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return bn(s)&&(s=s(),Ke(It,"refresh",function(){return s=t.batchMax()})),Xo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(It.create(c))}),e};var Yd=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Kc=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ue.isTouch?" pinch-zoom":""):"none",t===ai&&r(Te,e)},Fa={auto:1,scroll:1},Z_=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||St.core.getCache(s),a=un(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Te&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Fa[(l=Kn(s)).overflowY]||Fa[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!qr(s)&&(Fa[(l=Kn(s)).overflowY]||Fa[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},dp=function(t,e,n,i){return Ue.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Z_,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ke(Pe,Ue.eventTypes[0],$d,!1,!0)},onDisable:function(){return Je(Pe,Ue.eventTypes[0],$d,!0)}})},$_=/(input|label|select|textarea)/i,Zd,$d=function(t){var e=$_.test(t.target.tagName);(e||Zd)&&(t._gsapAllow=!0,Zd=e)},J_=function(t){Vr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=vn(t.target)||ai,h=St.core.globals().ScrollSmoother,u=h&&h.get(),f=fr&&(t.content&&vn(t.content)||u&&t.content!==!1&&!u.smooth()&&u.content()),d=Ni(c,ze),_=Ni(c,cn),g=1,m=(Ue.isTouch&&re.visualViewport?re.visualViewport.scale*re.visualViewport.width:re.outerWidth)/re.innerWidth,p=0,S=bn(i)?function(){return i(a)}:function(){return i||2.8},b,x,C=dp(c,t.type,!0,s),E=function(){return x=!1},T=Si,R=Si,y=function(){l=bi(c,ze),R=zo(fr?1:0,l),n&&(T=zo(0,bi(c,cn))),b=Xr},v=function(){f._gsap.y=Oo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},I=function(){if(x){requestAnimationFrame(E);var B=Oo(a.deltaY/2),tt=R(d.v-B);if(f&&tt!==d.v+d.offset){d.offset=tt-d.v;var P=Oo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",d.cacheID=te.cache,Bi()}return!0}d.offset&&v(),x=!0},N,F,G,$,W=function(){y(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return f&&St.set(f,{y:"+=0"}),t.ignoreCheck=function(Z){return fr&&Z.type==="touchmove"&&I(Z)||g>1.05&&Z.type!=="touchstart"||a.isGesturing||Z.touches&&Z.touches.length>1},t.onPress=function(){x=!1;var Z=g;g=Oo((re.visualViewport&&re.visualViewport.scale||1)/m),N.pause(),Z!==g&&Kc(c,g>1.01?!0:n?!1:"x"),F=_(),G=d(),y(),b=Xr},t.onRelease=t.onGestureStart=function(Z,B){if(d.offset&&v(),!B)$.restart(!0);else{te.cache++;var tt=S(),P,lt;n&&(P=_(),lt=P+tt*.05*-Z.velocityX/.227,tt*=Yd(_,P,lt,bi(c,cn)),N.vars.scrollX=T(lt)),P=d(),lt=P+tt*.05*-Z.velocityY/.227,tt*=Yd(d,P,lt,bi(c,ze)),N.vars.scrollY=R(lt),N.invalidate().duration(tt).play(.01),(fr&&N.vars.scrollY>=l||P>=l-1)&&St.to({},{onUpdate:W,duration:tt})}o&&o(Z)},t.onWheel=function(){N._ts&&N.pause(),un()-p>1e3&&(b=0,p=un())},t.onChange=function(Z,B,tt,P,lt){if(Xr!==b&&y(),B&&n&&_(T(P[2]===B?F+(Z.startX-Z.x):_()+B-P[1])),tt){d.offset&&v();var Lt=lt[2]===tt,vt=Lt?G+Z.startY-Z.y:d()+tt-lt[1],X=R(vt);Lt&&vt!==X&&(G+=X-vt),d(X)}(tt||B)&&Bi()},t.onEnable=function(){Kc(c,n?!1:"x"),It.addEventListener("refresh",W),Ke(re,"resize",W),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),C.enable()},t.onDisable=function(){Kc(c,!0),Je(re,"resize",W),It.removeEventListener("refresh",W),C.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ue(t),a.iOS=fr,fr&&!d()&&d(1),fr&&St.ticker.add(Si),$=a._dc,N=St.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:fp(d,d(),function(){return N.pause()})},onUpdate:Bi,onComplete:$.vars.onComplete}),a};It.sort=function(r){return ee.sort(r||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};It.observe=function(r){return new Ue(r)};It.normalizeScroll=function(r){if(typeof r=="undefined")return yn;if(r===!0&&yn)return yn.enable();if(r===!1){yn&&yn.kill(),yn=r;return}var t=r instanceof Ue?r:J_(r);return yn&&yn.target===t.target&&yn.kill(),qr(t.target)&&(yn=t),t};It.core={_getVelocityProp:Aa,_inputObserver:dp,_scrollers:te,_proxies:oi,bridge:{ss:function(){Qn||Zr("scrollStart"),Qn=un()},ref:function(){return hn}}};np()&&St.registerPlugin(It);var K_="1.1.18";function mp(r,t,e){return Math.max(r,Math.min(t,e))}function Q_(r,t,e){return(1-e)*r+e*t}function j_(r,t,e,n){return Q_(r,t,1-Math.exp(-e*n))}function t0(r,t){return(r%t+t)%t}var e0=class{constructor(){Ot(this,"isRunning",!1);Ot(this,"value",0);Ot(this,"from",0);Ot(this,"to",0);Ot(this,"currentTime",0);Ot(this,"lerp");Ot(this,"duration");Ot(this,"easing");Ot(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let n=mp(0,this.currentTime/this.duration,1);t=n>=1;let i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=j_(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function n0(r,t){let e;return function(...n){let i=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(i,n)},t)}}var i0=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Ot(this,"width",0);Ot(this,"height",0);Ot(this,"scrollHeight",0);Ot(this,"scrollWidth",0);Ot(this,"debouncedResize");Ot(this,"wrapperResizeObserver");Ot(this,"contentResizeObserver");Ot(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ot(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ot(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=n0(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},gp=class{constructor(){Ot(this,"events",{})}emit(r,...t){var n;let e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){var e;return(e=this.events[r])!=null&&e.push(t)||(this.events[r]=[t]),()=>{var n;this.events[r]=(n=this.events[r])==null?void 0:n.filter(i=>t!==i)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},pp=100/6,dr={passive:!1},r0=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Ot(this,"touchStart",{x:0,y:0});Ot(this,"lastDelta",{x:0,y:0});Ot(this,"window",{width:0,height:0});Ot(this,"emitter",new gp);Ot(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Ot(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Ot(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Ot(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=n===1?pp:n===2?this.window.width:1,s=n===1?pp:n===2?this.window.height:1;t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Ot(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,dr),this.element.addEventListener("touchstart",this.onTouchStart,dr),this.element.addEventListener("touchmove",this.onTouchMove,dr),this.element.addEventListener("touchend",this.onTouchEnd,dr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,dr),this.element.removeEventListener("touchstart",this.onTouchStart,dr),this.element.removeEventListener("touchmove",this.onTouchMove,dr),this.element.removeEventListener("touchend",this.onTouchEnd,dr)}},_p=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:o=35,duration:a,easing:l=C=>Math.min(1,1.001-Math.pow(2,-10*C)),lerp:c=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:f="vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:S=!0,autoRaf:b=!1,__experimental__naiveDimensions:x=!1}={}){Ot(this,"_isScrolling",!1);Ot(this,"_isStopped",!1);Ot(this,"_isLocked",!1);Ot(this,"_preventNextNativeScrollEvent",!1);Ot(this,"_resetVelocityTimeout",null);Ot(this,"__rafID",null);Ot(this,"isTouching");Ot(this,"time",0);Ot(this,"userData",{});Ot(this,"lastVelocity",0);Ot(this,"velocity",0);Ot(this,"direction",0);Ot(this,"options");Ot(this,"targetScroll");Ot(this,"animatedScroll");Ot(this,"animate",new e0);Ot(this,"emitter",new gp);Ot(this,"dimensions");Ot(this,"virtualScroll");Ot(this,"onPointerDown",r=>{r.button===1&&this.reset()});Ot(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let h=this.options.prevent;if(c.find(m=>{var p,S,b;return m instanceof HTMLElement&&(typeof h=="function"&&(h==null?void 0:h(m))||((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent"))||i&&((S=m.hasAttribute)==null?void 0:S.call(m,"data-lenis-prevent-touch"))||s&&((b=m.hasAttribute)==null?void 0:b.call(m,"data-lenis-prevent-wheel")))}))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.preventDefault();let d=i&&this.options.syncTouch,g=i&&n.type==="touchend"&&Math.abs(f)>5;g&&(f=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ot(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ot(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=K_,(!r||r===document.documentElement||r===document.body)&&(r=window),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:u,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:m,virtualScroll:p,overscroll:S,autoRaf:b,__experimental__naiveDimensions:x},this.dimensions=new i0(r,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new r0(e,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}setScroll(r){this.isHorizontal?this.rootElement.scrollLeft=r:this.rootElement.scrollTop=r}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1)}stop(){this.isStopped||(this.reset(),this.isStopped=!0)}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:h=!0,userData:u}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let f;if(typeof r=="string"?f=document.querySelector(r):r instanceof HTMLElement&&(r!=null&&r.nodeType)&&(f=r),f){if(this.options.wrapper!==window){let _=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?_.left:_.top}let d=f.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=t,r=Math.round(r),this.options.infinite?h&&(this.targetScroll=this.animatedScroll=this.scroll):r=mp(0,r,this.limit),r===this.targetScroll){a==null||a(this),l==null||l(this);return}if(this.userData=u!=null?u:{},e){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={};return}h||(this.targetScroll=r),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),h&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),l==null||l(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?t0(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};var Qe=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,sn=null,Kr=document.documentElement,xp=!1,pr=!1,Hn=(r,t=document)=>t.querySelector(r),qe=(r,t=document)=>Array.from(t.querySelectorAll(r));function s0(r,t){let e;return(...n)=>{clearTimeout(e),e=setTimeout(()=>r(...n),t)}}function $r(r=1500){return!document.fonts||!document.fonts.ready?Promise.resolve():Promise.race([document.fonts.ready,new Promise(t=>setTimeout(t,r))])}function vp(){xp||(xp=!0,Kr.classList.add("pronto"),window.dispatchEvent(new CustomEvent("rocca:pronto")),It.refresh())}function o0(r){me.registerPlugin(It),It.config({ignoreMobileResize:!0}),!(Qe||r.lenis===!1)&&(sn=new _p({lerp:.1,smoothWheel:!0,wheelMultiplier:1,touchMultiplier:1.5}),sn.on("scroll",It.update),me.ticker.add(t=>sn.raf(t*1e3)),me.ticker.lagSmoothing(0),document.addEventListener("click",t=>{let e=t.target.closest('a[href^="#"]');if(!e||e.hasAttribute("data-sem-lenis"))return;let n=e.getAttribute("href");if(n==="#"||n.length<2)return;let i=document.querySelector(n);i&&(t.preventDefault(),pr&&Ns(),sn.scrollTo(i,{offset:0,duration:1.4,easing:s=>1-Math.pow(1-s,3)}))}))}function a0(){let r=Hn(".nav");if(!r)return;let t=()=>r.classList.toggle("nav--solida",(window.scrollY||0)>40);It.create({start:0,end:"max",onUpdate:t}),t();let e=0,n=()=>{e>0?Kr.setAttribute("data-tema","claro"):Kr.removeAttribute("data-tema")};qe('[data-tema="claro"]').forEach(i=>{It.create({trigger:i,start:"top 60px",end:"bottom 60px",onEnter:()=>{e++,n()},onEnterBack:()=>{e++,n()},onLeave:()=>{e=Math.max(0,e-1),n()},onLeaveBack:()=>{e=Math.max(0,e-1),n()}})})}var Jr,Dn,Za;function Mp(){if(!Dn||pr)return;pr=!0,Za=document.activeElement,Dn.classList.add("menu--aberto"),Dn.removeAttribute("inert"),Dn.setAttribute("aria-hidden","false"),Kr.classList.add("menu-aberto"),Jr.setAttribute("aria-expanded","true");let r=Hn(".nav__menu-txt",Jr);r&&(r.dataset.original=r.textContent,r.textContent="Fechar"),sn&&sn.stop();let t=Hn("a, button",Dn);setTimeout(()=>t&&t.focus({preventScroll:!0}),80)}function Ns(){if(!Dn||!pr)return;pr=!1,Dn.classList.remove("menu--aberto"),Dn.setAttribute("inert",""),Dn.setAttribute("aria-hidden","true"),Kr.classList.remove("menu-aberto"),Jr.setAttribute("aria-expanded","false");let r=Hn(".nav__menu-txt",Jr);r&&(r.textContent=r.dataset.original||"Menu"),sn&&sn.start(),Za&&Za.focus&&Za.focus({preventScroll:!0})}function l0(){Jr=Hn(".nav__menu"),Dn=Hn(".menu"),!(!Jr||!Dn)&&(Dn.setAttribute("inert",""),Jr.addEventListener("click",()=>pr?Ns():Mp()),document.addEventListener("keydown",r=>{r.key==="Escape"&&pr&&Ns()}),Dn.addEventListener("click",r=>{r.target.closest("a")&&Ns()}),qe("[data-fecha-menu]",Dn).forEach(r=>r.addEventListener("click",Ns)))}var c0={duration:1.1,ease:"power3.out",stagger:.08};function fh(r){return!r.closest("[data-hero]")}function yp(r){let t=Array.isArray(r)?r:[r];if(!t.length)return;if(t.forEach(i=>i.classList.add("revelado")),Qe){me.set(t,{clearProps:"all"});return}let e=t.filter(i=>i.dataset.reveal==="escala"),n=t.filter(i=>i.dataset.reveal!=="escala");n.length&&me.fromTo(n,{opacity:0,y:24},{opacity:1,y:0,...c0,overwrite:"auto"}),e.length&&me.fromTo(e,{opacity:0,scale:1.06},{opacity:1,scale:1,duration:1.4,ease:"power3.out",stagger:.08,overwrite:"auto"})}function h0(){let r=qe("[data-reveal]").filter(fh).filter(t=>!t.parentElement.hasAttribute("data-reveal-grupo"));Qe?r.forEach(t=>t.classList.add("revelado")):r.length&&It.batch(r,{start:"top 85%",once:!0,onEnter:t=>yp(t)}),qe("[data-reveal-grupo]").filter(fh).forEach(t=>{let e=Array.from(t.children);if(Qe){t.classList.add("revelado");return}It.create({trigger:t,start:"top 85%",once:!0,onEnter:()=>yp(e)})})}function u0(r){let t=[],e=!0,n=(i,s)=>{if(i.nodeType===Node.TEXT_NODE){i.nodeValue.split(/(\s+)/).forEach(a=>{if(a){if(/^\s+$/.test(a)){e=!0;return}t.push({texto:a,cadeia:s,espacoAntes:e,no:i}),e=!1}});return}if(i.nodeType===Node.ELEMENT_NODE){if(i.tagName==="BR"){e=!0,t.push({quebra:!0});return}Array.from(i.childNodes).forEach(o=>n(o,s.concat(i)))}};return Array.from(r.childNodes).forEach(i=>n(i,[])),t}function f0(r){let t=u0(r),e=new Map;return t.forEach(n=>{n.quebra||(e.has(n.no)||e.set(n.no,[]),e.get(n.no).push(n))}),e.forEach((n,i)=>{let s=document.createDocumentFragment(),o=i.nodeValue.split(/(\s+)/),a=0;o.forEach(l=>{if(!l)return;if(/^\s+$/.test(l)){s.append(" ");return}let c=document.createElement("span");c.className="palavra",c.textContent=l,n[a].span=c,a++,s.append(c)}),i.parentNode.replaceChild(s,i)}),t}function d0(r){let t=document.createElement("span");t.className="linha";let e=document.createElement("span");e.className="linha__in",t.append(e);let n=[],i=[];return r.forEach((s,o)=>{let a=e,l=[],c=!0;for(let h=0;h<s.cadeia.length;h++){if(c&&n[h]===s.cadeia[h]&&i[h])a=i[h];else{c=!1;let u=s.cadeia[h].cloneNode(!1);a.append(u),a=u}l[h]=a}o>0&&s.espacoAntes&&a.append(" "),a.append(s.texto),n=s.cadeia,i=l}),t}function dh(r){r.__splitOriginal||(r.__splitOriginal=r.innerHTML),r.innerHTML=r.__splitOriginal,r.classList.remove("split-pronto");let t=f0(r);if(!t.filter(l=>!l.quebra&&l.span).length)return r.classList.add("split-pronto"),[];let n=parseFloat(getComputedStyle(r).fontSize)*.5,i=[],s=null,o=null;return t.forEach(l=>{if(l.quebra){s=null;return}if(!l.span)return;let c=l.span.offsetTop;(!s||Math.abs(c-o)>n)&&(s=[],i.push(s),o=c),s.push(l)}),r.innerHTML="",i.map(l=>d0(l)).forEach(l=>r.append(l)),r.classList.add("split-pronto"),qe(".linha__in",r)}function p0(r,t=0){r.classList.add("revelado");let e=qe(".linha__in",r);return Qe||!e.length?(me.set(e,{clearProps:"transform"}),null):me.fromTo(e,{yPercent:110},{yPercent:0,duration:1.2,ease:"power3.out",stagger:.08,delay:t,overwrite:"auto"})}function m0(){let r=qe("[data-split-linhas]");if(!r.length)return;if(Qe){r.forEach(n=>n.classList.add("split-pronto","revelado"));return}let t=()=>{r.forEach(n=>{dh(n),n.classList.contains("revelado")&&me.set(qe(".linha__in",n),{yPercent:0})}),It.refresh()};t(),r.filter(fh).forEach(n=>{It.create({trigger:n,start:"top 85%",once:!0,onEnter:()=>p0(n)})});let e=window.innerWidth;window.addEventListener("resize",s0(()=>{window.innerWidth!==e&&(e=window.innerWidth,t())},200))}function g0(){Qe||qe("[data-parallax]").forEach(r=>{let t=parseFloat(r.dataset.parallax)||8,e=r.closest("[data-parallax-area]")||r.parentElement;me.fromTo(r,{yPercent:-t},{yPercent:t,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:!0}})})}function _0(){qe("[data-contador]").forEach(r=>{let t=parseFloat(r.dataset.contador);if(Number.isNaN(t))return;let e=r.dataset.casas&&parseInt(r.dataset.casas,10)||0,n=s=>s.toLocaleString("pt-BR",{minimumFractionDigits:e,maximumFractionDigits:e});if(Qe){r.textContent=n(t);return}let i={v:0};It.create({trigger:r,start:"top 85%",once:!0,onEnter:()=>me.to(i,{v:t,duration:1.6,ease:"power2.out",onUpdate:()=>{r.textContent=n(i.v)}})})})}function x0(){let r=Hn(".whats");if(!r)return;let t=Hn("[data-hero]");if(!t){r.classList.add("whats--visivel");return}It.create({trigger:t,start:"bottom 120px",onEnter:()=>r.classList.add("whats--visivel"),onLeaveBack:()=>r.classList.remove("whats--visivel")})}function v0(){qe(".form").forEach(r=>{r.addEventListener("submit",t=>{t.preventDefault();let e=qe("input, textarea",r),n=!0;if(e.forEach(s=>{s.classList.remove("invalido")}),e.forEach(s=>{s.checkValidity()||(n=!1,s.classList.add("invalido"))}),!n){r.reportValidity&&r.reportValidity();return}r.classList.add("form--enviado");let i=Hn(".form__sucesso",r);i&&i.focus({preventScroll:!0}),It.refresh()})})}function y0(){let r=e=>{if(!e||typeof e.showModal!="function")return;e.showModal(),sn&&sn.stop();let n=Hn("video",e);if(n){let i=n.play();i&&i.catch&&i.catch(()=>{})}},t=e=>{let n=Hn("video",e);n&&n.pause(),sn&&!pr&&sn.start()};document.addEventListener("click",e=>{let n=e.target.closest("[data-abre-lightbox]");if(n){e.preventDefault(),r(document.querySelector(n.dataset.abreLightbox));return}let i=e.target.closest("[data-fecha-lightbox]");if(i){let s=i.closest("dialog");s&&s.close()}}),qe("dialog.lightbox").forEach(e=>{e.addEventListener("close",()=>t(e)),e.addEventListener("click",n=>{n.target===e&&e.close()})})}function M0(r){let t=Hn(".preloader"),e=i=>document.readyState==="complete"?i():window.addEventListener("load",i,{once:!0});if(!t||r.preloader===!1||Qe){t&&t.remove(),e(()=>$r(1200).then(vp));return}let n=performance.now();sn&&sn.stop(),$r(800).then(()=>{let i=performance.now()-n,s=Math.max(0,700-i);me.to(t,{opacity:0,duration:.45,ease:"power2.out",delay:s/1e3,onComplete:()=>{t.remove(),sn&&sn.start(),vp()}})})}function $a(r=Hn("[data-hero]")){if(!r)return null;let t=qe("[data-reveal], [data-split-linhas]",r),e=qe("[data-reveal-grupo]",r);if(r.classList.add("hero-revelado"),Qe){t.forEach(o=>o.classList.add("revelado","split-pronto")),e.forEach(o=>o.classList.add("revelado"));let s=qe(".linha__in",r);return s.length&&me.set(s,{clearProps:"transform"}),null}let n=me.timeline({defaults:{ease:"power3.out"}}),i=0;return t.forEach(s=>{if(s.classList.add("revelado"),s.hasAttribute("data-split-linhas")){s.classList.contains("split-pronto")||dh(s);let o=qe(".linha__in",s);o.length?n.fromTo(o,{yPercent:110},{yPercent:0,duration:1.3,stagger:.1,overwrite:"auto"},i):n.fromTo(s,{opacity:0,y:24},{opacity:1,y:0,duration:1.1,overwrite:"auto"},i),i+=.35}else s.dataset.reveal==="escala"?(n.fromTo(s,{opacity:0,scale:1.06},{opacity:1,scale:1,duration:1.6,overwrite:"auto"},i),i+=.2):(n.fromTo(s,{opacity:0,y:24},{opacity:1,y:0,duration:1.1,overwrite:"auto"},i),i+=.18)}),e.forEach(s=>{let o=Array.from(s.children);o.forEach(a=>a.classList.add("revelado")),n.fromTo(o,{opacity:0,y:24},{opacity:1,y:0,duration:1.1,stagger:.08,overwrite:"auto"},i),i+=.2}),n}function S0(){let r=String(new Date().getFullYear());qe("[data-ano]").forEach(t=>{t.textContent=r})}function b0(){if(!("IntersectionObserver"in window))return;let r=qe("video[data-pausa-fora]");if(!r.length)return;let t=new IntersectionObserver(e=>{e.forEach(({target:n,isIntersecting:i})=>{if(i){let s=n.play();s&&s.catch&&s.catch(()=>{})}else n.pause()})},{threshold:.2});r.forEach(e=>t.observe(e))}function Sp(r={}){return Kr.classList.add("js"),Qe&&Kr.classList.add("movimento-reduzido"),o0(r),a0(),l0(),S0(),v0(),y0(),x0(),_0(),g0(),h0(),b0(),$r(1500).then(()=>{m0(),It.refresh()}),r.revelarHero!==!1&&window.addEventListener("rocca:pronto",()=>{$r(1500).then(()=>$a())},{once:!0}),M0(r),window.addEventListener("load",()=>It.refresh(),{once:!0}),{gsap:me,ScrollTrigger:It,lenis:sn,abrirMenu:Mp,fecharMenu:Ns,splitLinhas:dh,revelarHero:$a,esperarFontes:$r}}function bp(){document.querySelectorAll("[data-mosaico]").forEach(r=>{let t=Array.from(r.querySelectorAll(".mosaico__item"));if(!t.length||Qe)return;let e=t.map(i=>i.querySelector(".mosaico__moldura")),n=t.map(i=>i.querySelector("img"));me.set(t,{clipPath:"inset(8% 8% 8% 8%)",opacity:0}),me.set(n,{scale:1.3}),It.create({trigger:r,start:"top 78%",once:!0,onEnter:()=>{me.to(t,{clipPath:"inset(0% 0% 0% 0%)",opacity:1,duration:1.4,ease:"power3.out",stagger:.09,overwrite:"auto"}),me.to(n,{scale:1.12,duration:1.8,ease:"power3.out",stagger:.09,overwrite:"auto",clearProps:"scale"})}}),e.forEach((i,s)=>{let o=3+s%3*1.5;me.fromTo(i,{yPercent:-o},{yPercent:o,ease:"none",scrollTrigger:{trigger:t[s],start:"top bottom",end:"bottom top",scrub:!0}})})})}var rf="170";var w0=0,wp=1,T0=2;var Cm=1,E0=2,Wi=3,wr=0,Un=1,qi=2,Sr=0,js=1,Tp=2,Ep=3,Ap=4,A0=5,ss=100,C0=101,R0=102,P0=103,I0=104,L0=200,D0=201,U0=202,N0=203,Hh=204,Gh=205,O0=206,F0=207,B0=208,z0=209,k0=210,V0=211,H0=212,G0=213,W0=214,Wh=0,Xh=1,qh=2,io=3,Yh=4,Zh=5,$h=6,Jh=7,Rm=0,X0=1,q0=2,br=0,Y0=1,Z0=2,$0=3,J0=4,K0=5,Q0=6,j0=7;var Pm=300,ro=301,so=302,Kh=303,Qh=304,ql=306,jh=1e3,ls=1001,tu=1002,di=1003,tx=1004;var Ja=1005;var Ti=1006,ph=1007;var cs=1008;var Ki=1009,Im=1010,Lm=1011,na=1012,sf=1013,hs=1014,Yi=1015,sa=1016,of=1017,af=1018,oo=1020,Dm=35902,Um=1021,Nm=1022,ui=1023,Om=1024,Fm=1025,to=1026,ao=1027,Bm=1028,lf=1029,zm=1030,cf=1031;var hf=1033,yl=33776,Ml=33777,Sl=33778,bl=33779,eu=35840,nu=35841,iu=35842,ru=35843,su=36196,ou=37492,au=37496,lu=37808,cu=37809,hu=37810,uu=37811,fu=37812,du=37813,pu=37814,mu=37815,gu=37816,_u=37817,xu=37818,vu=37819,yu=37820,Mu=37821,wl=36492,Su=36494,bu=36495,km=36283,wu=36284,Tu=36285,Eu=36286;var Tl=2300,Au=2301,mh=2302,Cp=2400,Rp=2401,Pp=2402;var ex=3200,nx=3201;var ix=0,rx=1,Mr="",ti="srgb",ho="srgb-linear",Yl="linear",ge="srgb";var Os=7680;var Ip=519,sx=512,ox=513,ax=514,Vm=515,lx=516,cx=517,hx=518,ux=519,Lp=35044;var Dp="300 es",Zi=2e3,El=2001,Tr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Up=1234567,jo=Math.PI/180,ia=180/Math.PI;function uo(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function En(r,t,e){return Math.max(t,Math.min(e,r))}function uf(r,t){return(r%t+t)%t}function fx(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function dx(r,t,e){return r!==t?(e-r)/(t-r):0}function ta(r,t,e){return(1-e)*r+e*t}function px(r,t,e,n){return ta(r,t,1-Math.exp(-e*n))}function mx(r,t=1){return t-Math.abs(uf(r,t*2)-t)}function gx(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function _x(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function xx(r,t){return r+Math.floor(Math.random()*(t-r+1))}function vx(r,t){return r+Math.random()*(t-r)}function yx(r){return r*(.5-Math.random())}function Mx(r){r!==void 0&&(Up=r);let t=Up+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sx(r){return r*jo}function bx(r){return r*ia}function wx(r){return(r&r-1)===0&&r!==0}function Tx(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ex(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ax(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*_,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*_,a*c);break;case"ZYZ":r.set(l*_,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Js(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function wn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var ff={DEG2RAD:jo,RAD2DEG:ia,generateUUID:uo,clamp:En,euclideanModulo:uf,mapLinear:fx,inverseLerp:dx,lerp:ta,damp:px,pingpong:mx,smoothstep:gx,smootherstep:_x,randInt:xx,randFloat:vx,randFloatSpread:yx,seededRandom:Mx,degToRad:Sx,radToDeg:bx,isPowerOfTwo:wx,ceilPowerOfTwo:Tx,floorPowerOfTwo:Ex,setQuaternionFromProperEuler:Ax,normalize:wn,denormalize:Js},pe=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(En(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],S=i[1],b=i[4],x=i[7],C=i[2],E=i[5],T=i[8];return s[0]=o*g+a*S+l*C,s[3]=o*m+a*b+l*E,s[6]=o*p+a*x+l*T,s[1]=c*g+h*S+u*C,s[4]=c*m+h*b+u*E,s[7]=c*p+h*x+u*T,s[2]=f*g+d*S+_*C,s[5]=f*m+d*b+_*E,s[8]=f*p+d*x+_*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,_=e*u+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=f*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(gh.makeScale(t,e)),this}rotate(t){return this.premultiply(gh.makeRotation(-t)),this}translate(t,e){return this.premultiply(gh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},gh=new Jt;function Hm(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Al(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Cx(){let r=Al("canvas");return r.style.display="block",r}var Np={};function Ko(r){r in Np||(Np[r]=!0,console.warn(r))}function Rx(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Px(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ix(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ae={enabled:!0,workingColorSpace:ho,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ge&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ge&&(r.r=eo(r.r),r.g=eo(r.g),r.b=eo(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mr?Yl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function $i(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function eo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Op=[.64,.33,.3,.6,.15,.06],Fp=[.2126,.7152,.0722],Bp=[.3127,.329],zp=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kp=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[ho]:{primaries:Op,whitePoint:Bp,transfer:Yl,toXYZ:zp,fromXYZ:kp,luminanceCoefficients:Fp,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:Op,whitePoint:Bp,transfer:ge,toXYZ:zp,fromXYZ:kp,luminanceCoefficients:Fp,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}});var Fs,Cu=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fs===void 0&&(Fs=Al("canvas")),Fs.width=t.width,Fs.height=t.height;let n=Fs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Fs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Al("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=$i(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($i(e[n]/255)*255):e[n]=$i(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Lx=0,Cl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=uo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(_h(i[o].image)):s.push(_h(i[o]))}else s=_h(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function _h(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Cu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Dx=0,ei=class r extends Tr{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=ls,i=ls,s=Ti,o=cs,a=ui,l=Ki,c=r.DEFAULT_ANISOTROPY,h=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=uo(),this.name="",this.source=new Cl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jh:t.x=t.x-Math.floor(t.x);break;case ls:t.x=t.x<0?0:1;break;case tu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jh:t.y=t.y-Math.floor(t.y);break;case ls:t.y=t.y<0?0:1;break;case tu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=Pm;ei.DEFAULT_ANISOTROPY=1;var Fe=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,x=(d+1)/2,C=(p+1)/2,E=(h+f)/4,T=(u+g)/4,R=(_+m)/4;return b>x&&b>C?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=E/n,s=T/n):x>C?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=R/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=T/s,i=R/s),this.set(n,i,s,e),this}let S=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(u-g)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ru=class extends Tr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new ei(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Cl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qi=class extends Ru{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Rl=class extends ei{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=di,this.minFilter=di,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pu=class extends ei{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=di,this.minFilter=di,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Er=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==f||c!==d||h!==_){let m=1-a,p=l*f+c*d+h*_+u*g,S=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let C=Math.sqrt(b),E=Math.atan2(C,p*S);m=Math.sin(m*E)/C,a=Math.sin(a*E)/C}let x=a*S;if(l=l*m+f*x,c=c*m+d*x,h=h*m+_*x,u=u*m+g*x,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return t[e]=a*_+h*u+l*d-c*f,t[e+1]=l*_+h*f+c*u-a*d,t[e+2]=c*_+h*d+a*f-l*u,t[e+3]=h*_-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"YZX":this._x=f*h*u+c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u-f*d*_;break;case"XZY":this._x=f*h*u-c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(En(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xh.copy(this).projectOnVector(t),this.sub(xh)}reflect(t){return this.sub(xh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(En(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xh=new q,Vp=new Er,us=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,li):li.fromBufferAttribute(s,o),li.applyMatrix4(t.matrixWorld),this.expandByPoint(li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ka.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ka.copy(n.boundingBox)),Ka.applyMatrix4(t.matrixWorld),this.union(Ka)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,li),li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yo),Qa.subVectors(this.max,Yo),Bs.subVectors(t.a,Yo),zs.subVectors(t.b,Yo),ks.subVectors(t.c,Yo),mr.subVectors(zs,Bs),gr.subVectors(ks,zs),Qr.subVectors(Bs,ks);let e=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Qr.z,Qr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Qr.z,0,-Qr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Qr.y,Qr.x,0];return!vh(e,Bs,zs,ks,Qa)||(e=[1,0,0,0,1,0,0,0,1],!vh(e,Bs,zs,ks,Qa))?!1:(ja.crossVectors(mr,gr),e=[ja.x,ja.y,ja.z],vh(e,Bs,zs,ks,Qa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},zi=[new q,new q,new q,new q,new q,new q,new q,new q],li=new q,Ka=new us,Bs=new q,zs=new q,ks=new q,mr=new q,gr=new q,Qr=new q,Yo=new q,Qa=new q,ja=new q,jr=new q;function vh(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){jr.fromArray(r,s);let a=i.x*Math.abs(jr.x)+i.y*Math.abs(jr.y)+i.z*Math.abs(jr.z),l=t.dot(jr),c=e.dot(jr),h=n.dot(jr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ux=new us,Zo=new q,yh=new q,Ar=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ux.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zo.subVectors(t,this.center);let e=Zo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Zo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zo.copy(t.center).add(yh)),this.expandByPoint(Zo.copy(t.center).sub(yh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ki=new q,Mh=new q,tl=new q,_r=new q,Sh=new q,el=new q,bh=new q,Pl=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ki.copy(this.origin).addScaledVector(this.direction,e),ki.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Mh.copy(t).add(e).multiplyScalar(.5),tl.copy(e).sub(t).normalize(),_r.copy(this.origin).sub(Mh);let s=t.distanceTo(e)*.5,o=-this.direction.dot(tl),a=_r.dot(this.direction),l=-_r.dot(tl),c=_r.lengthSq(),h=Math.abs(1-o*o),u,f,d,_;if(h>0)if(u=o*l-a,f=o*a-l,_=s*h,u>=0)if(f>=-_)if(f<=_){let g=1/h;u*=g,f*=g,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Mh).addScaledVector(tl,f),d}intersectSphere(t,e){ki.subVectors(t.center,this.origin);let n=ki.dot(this.direction),i=ki.dot(ki)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ki)!==null}intersectTriangle(t,e,n,i,s){Sh.subVectors(e,t),el.subVectors(n,t),bh.crossVectors(Sh,el);let o=this.direction.dot(bh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_r.subVectors(this.origin,t);let l=a*this.direction.dot(el.crossVectors(_r,el));if(l<0)return null;let c=a*this.direction.dot(Sh.cross(_r));if(c<0||l+c>o)return null;let h=-a*_r.dot(bh);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},He=class r{constructor(t,e,n,i,s,o,a,l,c,h,u,f,d,_,g,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,f,d,_,g,m)}set(t,e,n,i,s,o,a,l,c,h,u,f,d,_,g,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Vs.setFromMatrixColumn(t,0).length(),s=1/Vs.setFromMatrixColumn(t,1).length(),o=1/Vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+_*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=_+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,_=c*h,g=c*u;e[0]=f+g*a,e[4]=_*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-_,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,_=c*h,g=c*u;e[0]=f-g*a,e[4]=-o*u,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=_*c-d,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=d*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-f*u,e[8]=_*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+_,e[10]=f-g*u}else if(t.order==="XZY"){let f=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=o*h,e[9]=d*u-_,e[2]=_*u-d,e[6]=a*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nx,t,Ox)}lookAt(t,e,n){let i=this.elements;return Gn.subVectors(t,e),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),xr.crossVectors(n,Gn),xr.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),xr.crossVectors(n,Gn)),xr.normalize(),nl.crossVectors(Gn,xr),i[0]=xr.x,i[4]=nl.x,i[8]=Gn.x,i[1]=xr.y,i[5]=nl.y,i[9]=Gn.y,i[2]=xr.z,i[6]=nl.z,i[10]=Gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],S=n[3],b=n[7],x=n[11],C=n[15],E=i[0],T=i[4],R=i[8],y=i[12],v=i[1],I=i[5],N=i[9],F=i[13],G=i[2],$=i[6],W=i[10],Z=i[14],B=i[3],tt=i[7],P=i[11],lt=i[15];return s[0]=o*E+a*v+l*G+c*B,s[4]=o*T+a*I+l*$+c*tt,s[8]=o*R+a*N+l*W+c*P,s[12]=o*y+a*F+l*Z+c*lt,s[1]=h*E+u*v+f*G+d*B,s[5]=h*T+u*I+f*$+d*tt,s[9]=h*R+u*N+f*W+d*P,s[13]=h*y+u*F+f*Z+d*lt,s[2]=_*E+g*v+m*G+p*B,s[6]=_*T+g*I+m*$+p*tt,s[10]=_*R+g*N+m*W+p*P,s[14]=_*y+g*F+m*Z+p*lt,s[3]=S*E+b*v+x*G+C*B,s[7]=S*T+b*I+x*$+C*tt,s[11]=S*R+b*N+x*W+C*P,s[15]=S*y+b*F+x*Z+C*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*d-n*l*d)+g*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*h-s*l*h)+m*(+e*c*u-e*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],S=u*m*c-g*f*c+g*l*d-a*m*d-u*l*p+a*f*p,b=_*f*c-h*m*c-_*l*d+o*m*d+h*l*p-o*f*p,x=h*g*c-_*u*c+_*a*d-o*g*d-h*a*p+o*u*p,C=_*u*l-h*g*l-_*a*f+o*g*f+h*a*m-o*u*m,E=e*S+n*b+i*x+s*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=S*T,t[1]=(g*f*s-u*m*s-g*i*d+n*m*d+u*i*p-n*f*p)*T,t[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*T,t[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*d-n*l*d)*T,t[4]=b*T,t[5]=(h*m*s-_*f*s+_*i*d-e*m*d-h*i*p+e*f*p)*T,t[6]=(_*l*s-o*m*s-_*i*c+e*m*c+o*i*p-e*l*p)*T,t[7]=(o*f*s-h*l*s+h*i*c-e*f*c-o*i*d+e*l*d)*T,t[8]=x*T,t[9]=(_*u*s-h*g*s-_*n*d+e*g*d+h*n*p-e*u*p)*T,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*p+e*a*p)*T,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*d-e*a*d)*T,t[12]=C*T,t[13]=(h*g*i-_*u*i+_*n*f-e*g*f-h*n*m+e*u*m)*T,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*m-e*a*m)*T,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*T,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,_=s*u,g=o*h,m=o*u,p=a*u,S=l*c,b=l*h,x=l*u,C=n.x,E=n.y,T=n.z;return i[0]=(1-(g+p))*C,i[1]=(d+x)*C,i[2]=(_-b)*C,i[3]=0,i[4]=(d-x)*E,i[5]=(1-(f+p))*E,i[6]=(m+S)*E,i[7]=0,i[8]=(_+b)*T,i[9]=(m-S)*T,i[10]=(1-(f+g))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Vs.set(i[0],i[1],i[2]).length(),o=Vs.set(i[4],i[5],i[6]).length(),a=Vs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ci.copy(this);let c=1/s,h=1/o,u=1/a;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=u,ci.elements[9]*=u,ci.elements[10]*=u,e.setFromRotationMatrix(ci),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Zi){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,_;if(a===Zi)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===El)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Zi){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),f=(e+t)*c,d=(n+i)*h,_,g;if(a===Zi)_=(o+s)*u,g=-2*u;else if(a===El)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Vs=new q,ci=new He,Nx=new q(0,0,0),Ox=new q(1,1,1),xr=new q,nl=new q,Gn=new q,Hp=new He,Gp=new Er,ji=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-En(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(En(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-En(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(En(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gp.setFromEuler(this),this.setFromQuaternion(Gp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ji.DEFAULT_ORDER="XYZ";var Il=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Fx=0,Wp=new q,Hs=new Er,Vi=new He,il=new q,$o=new q,Bx=new q,zx=new Er,Xp=new q(1,0,0),qp=new q(0,1,0),Yp=new q(0,0,1),Zp={type:"added"},kx={type:"removed"},Gs={type:"childadded",child:null},wh={type:"childremoved",child:null},ni=class r extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new q,e=new ji,n=new Er,i=new q(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new Jt}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(Xp,t)}rotateY(t){return this.rotateOnAxis(qp,t)}rotateZ(t){return this.rotateOnAxis(Yp,t)}translateOnAxis(t,e){return Wp.copy(t).applyQuaternion(this.quaternion),this.position.add(Wp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xp,t)}translateY(t){return this.translateOnAxis(qp,t)}translateZ(t){return this.translateOnAxis(Yp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?il.copy(t):il.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt($o,il,this.up):Vi.lookAt(il,$o,this.up),this.quaternion.setFromRotationMatrix(Vi),i&&(Vi.extractRotation(i.matrixWorld),Hs.setFromRotationMatrix(Vi),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zp),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kx),wh.child=t,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zp),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,t,Bx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,zx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ni.DEFAULT_UP=new q(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hi=new q,Hi=new q,Th=new q,Gi=new q,Ws=new q,Xs=new q,$p=new q,Eh=new q,Ah=new q,Ch=new q,Rh=new Fe,Ph=new Fe,Ih=new Fe,os=class r{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),hi.subVectors(t,e),i.cross(hi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){hi.subVectors(i,e),Hi.subVectors(n,e),Th.subVectors(t,e);let o=hi.dot(hi),a=hi.dot(Hi),l=hi.dot(Th),c=Hi.dot(Hi),h=Hi.dot(Th),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,_=(o*h-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gi.x),l.addScaledVector(o,Gi.y),l.addScaledVector(a,Gi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Rh.setScalar(0),Ph.setScalar(0),Ih.setScalar(0),Rh.fromBufferAttribute(t,e),Ph.fromBufferAttribute(t,n),Ih.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Rh,s.x),o.addScaledVector(Ph,s.y),o.addScaledVector(Ih,s.z),o}static isFrontFacing(t,e,n,i){return hi.subVectors(n,e),Hi.subVectors(t,e),hi.cross(Hi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),hi.cross(Hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;Ws.subVectors(i,n),Xs.subVectors(s,n),Eh.subVectors(t,n);let l=Ws.dot(Eh),c=Xs.dot(Eh);if(l<=0&&c<=0)return e.copy(n);Ah.subVectors(t,i);let h=Ws.dot(Ah),u=Xs.dot(Ah);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ws,o);Ch.subVectors(t,s);let d=Ws.dot(Ch),_=Xs.dot(Ch);if(_>=0&&d<=_)return e.copy(s);let g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Xs,a);let m=h*_-d*u;if(m<=0&&u-h>=0&&d-_>=0)return $p.subVectors(s,i),a=(u-h)/(u-h+(d-_)),e.copy(i).addScaledVector($p,a);let p=1/(m+g+f);return o=g*p,a=f*p,e.copy(n).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},rl={h:0,s:0,l:0};function Lh(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var oe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=uf(t,1),e=En(e,0,1),n=En(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Lh(o,s,t+1/3),this.g=Lh(o,s,t),this.b=Lh(o,s,t-1/3)}return ae.toWorkingColorSpace(this,i),this}setStyle(t,e=ti){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ti){let n=Gm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}copyLinearToSRGB(t){return this.r=eo(t.r),this.g=eo(t.g),this.b=eo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ti){return ae.fromWorkingColorSpace(dn.copy(this),t),Math.round(En(dn.r*255,0,255))*65536+Math.round(En(dn.g*255,0,255))*256+Math.round(En(dn.b*255,0,255))}getHexString(t=ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(dn.copy(this),e);let n=dn.r,i=dn.g,s=dn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(dn.copy(this),e),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=ti){ae.fromWorkingColorSpace(dn.copy(this),t);let e=dn.r,n=dn.g,i=dn.b;return t!==ti?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(vr),this.setHSL(vr.h+t,vr.s+e,vr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vr),t.getHSL(rl);let n=ta(vr.h,rl.h,e),i=ta(vr.s,rl.s,e),s=ta(vr.l,rl.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new oe;oe.NAMES=Gm;var Vx=0,fs=class extends Tr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=uo(),this.name="",this.blending=js,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=Gh,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(n.blending=this.blending),this.side!==wr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hh&&(n.blendSrc=this.blendSrc),this.blendDst!==Gh&&(n.blendDst=this.blendDst),this.blendEquation!==ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ip&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ll=class extends fs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=Rm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ve=new q,sl=new pe,tn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lp,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sl.fromBufferAttribute(this,e),sl.applyMatrix3(t),this.setXY(e,sl.x,sl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Js(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=wn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Js(e,this.array)),e}setX(t,e){return this.normalized&&(e=wn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Js(e,this.array)),e}setY(t,e){return this.normalized&&(e=wn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Js(e,this.array)),e}setZ(t,e){return this.normalized&&(e=wn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Js(e,this.array)),e}setW(t,e){return this.normalized&&(e=wn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=wn(e,this.array),n=wn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=wn(e,this.array),n=wn(n,this.array),i=wn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=wn(e,this.array),n=wn(n,this.array),i=wn(i,this.array),s=wn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lp&&(t.usage=this.usage),t}};var Dl=class extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ul=class extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ji=class extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Hx=0,jn=new He,Dh=new ni,qs=new q,Wn=new us,Jo=new us,je=new q,Ei=class r extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hm(t)?Ul:Dl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return jn.makeRotationFromQuaternion(t),this.applyMatrix4(jn),this}rotateX(t){return jn.makeRotationX(t),this.applyMatrix4(jn),this}rotateY(t){return jn.makeRotationY(t),this.applyMatrix4(jn),this}rotateZ(t){return jn.makeRotationZ(t),this.applyMatrix4(jn),this}translate(t,e,n){return jn.makeTranslation(t,e,n),this.applyMatrix4(jn),this}scale(t,e,n){return jn.makeScale(t,e,n),this.applyMatrix4(jn),this}lookAt(t){return Dh.lookAt(t),Dh.updateMatrix(),this.applyMatrix4(Dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ji(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Wn.setFromBufferAttribute(s),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Jo.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(Wn.min,Jo.min),Wn.expandByPoint(je),je.addVectors(Wn.max,Jo.max),Wn.expandByPoint(je)):(Wn.expandByPoint(Jo.min),Wn.expandByPoint(Jo.max))}Wn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)je.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(je));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)je.fromBufferAttribute(a,c),l&&(qs.fromBufferAttribute(t,c),je.add(qs)),i=Math.max(i,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new q,l[R]=new q;let c=new q,h=new q,u=new q,f=new pe,d=new pe,_=new pe,g=new q,m=new q;function p(R,y,v){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,v),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,y),_.fromBufferAttribute(s,v),h.sub(c),u.sub(c),d.sub(f),_.sub(f);let I=1/(d.x*_.y-_.x*d.y);isFinite(I)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(I),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(I),a[R].add(g),a[y].add(g),a[v].add(g),l[R].add(m),l[y].add(m),l[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,y=S.length;R<y;++R){let v=S[R],I=v.start,N=v.count;for(let F=I,G=I+N;F<G;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let b=new q,x=new q,C=new q,E=new q;function T(R){C.fromBufferAttribute(i,R),E.copy(C);let y=a[R];b.copy(y),b.sub(C.multiplyScalar(C.dot(y))).normalize(),x.crossVectors(E,y);let I=x.dot(l[R])<0?-1:1;o.setXYZW(R,b.x,b.y,b.z,I)}for(let R=0,y=S.length;R<y;++R){let v=S[R],I=v.start,N=v.count;for(let F=I,G=I+N;F<G;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new q,s=new q,o=new q,a=new q,l=new q,c=new q,h=new q,u=new q;if(t)for(let f=0,d=t.count;f<d;f+=3){let _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*h;for(let p=0;p<h;p++)f[_++]=c[d++]}return new tn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jp=new He,ts=new Pl,ol=new Ar,Kp=new q,al=new q,ll=new q,cl=new q,Uh=new q,hl=new q,Qp=new q,ul=new q,fi=class extends ni{constructor(t=new Ei,e=new Ll){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){hl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Uh.fromBufferAttribute(u,t),o?hl.addScaledVector(Uh,h):hl.addScaledVector(Uh.sub(e),h))}e.add(hl)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ol.copy(n.boundingSphere),ol.applyMatrix4(s),ts.copy(t.ray).recast(t.near),!(ol.containsPoint(ts.origin)===!1&&(ts.intersectSphere(ol,Kp)===null||ts.origin.distanceToSquared(Kp)>(t.far-t.near)**2))&&(Jp.copy(s).invert(),ts.copy(t.ray).applyMatrix4(Jp),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){let m=f[_],p=o[m.materialIndex],S=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,C=b;x<C;x+=3){let E=a.getX(x),T=a.getX(x+1),R=a.getX(x+2);i=fl(this,p,t,n,c,h,u,E,T,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){let S=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);i=fl(this,o,t,n,c,h,u,S,b,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){let m=f[_],p=o[m.materialIndex],S=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,C=b;x<C;x+=3){let E=x,T=x+1,R=x+2;i=fl(this,p,t,n,c,h,u,E,T,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){let S=m,b=m+1,x=m+2;i=fl(this,o,t,n,c,h,u,S,b,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Gx(r,t,e,n,i,s,o,a){let l;if(t.side===Un?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===wr,a),l===null)return null;ul.copy(a),ul.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(ul);return c<e.near||c>e.far?null:{distance:c,point:ul.clone(),object:r}}function fl(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,al),r.getVertexPosition(l,ll),r.getVertexPosition(c,cl);let h=Gx(r,t,e,n,al,ll,cl,Qp);if(h){let u=new q;os.getBarycoord(Qp,al,ll,cl,u),i&&(h.uv=os.getInterpolatedAttribute(i,a,l,c,u,new pe)),s&&(h.uv1=os.getInterpolatedAttribute(s,a,l,c,u,new pe)),o&&(h.normal=os.getInterpolatedAttribute(o,a,l,c,u,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new q,materialIndex:0};os.getNormal(al,ll,cl,f.normal),h.face=f,h.barycoord=u}return h}var ra=class r extends Ei{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ji(c,3)),this.setAttribute("normal",new Ji(h,3)),this.setAttribute("uv",new Ji(u,2));function _(g,m,p,S,b,x,C,E,T,R,y){let v=x/T,I=C/R,N=x/2,F=C/2,G=E/2,$=T+1,W=R+1,Z=0,B=0,tt=new q;for(let P=0;P<W;P++){let lt=P*I-F;for(let Lt=0;Lt<$;Lt++){let vt=Lt*v-N;tt[g]=vt*S,tt[m]=lt*b,tt[p]=G,c.push(tt.x,tt.y,tt.z),tt[g]=0,tt[m]=0,tt[p]=E>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(Lt/T),u.push(1-P/R),Z+=1}}for(let P=0;P<R;P++)for(let lt=0;lt<T;lt++){let Lt=f+lt+$*P,vt=f+lt+$*(P+1),X=f+(lt+1)+$*(P+1),et=f+(lt+1)+$*P;l.push(Lt,vt,et),l.push(vt,X,et),B+=6}a.addGroup(d,B,y),d+=B,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function lo(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Tn(r){let t={};for(let e=0;e<r.length;e++){let n=lo(r[e]);for(let i in n)t[i]=n[i]}return t}function Wx(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Wm(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var Xx={clone:lo,merge:Tn},qx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ii=class extends fs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qx,this.fragmentShader=Yx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lo(t.uniforms),this.uniformsGroups=Wx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Nl=class extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Zi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yr=new q,jp=new pe,tm=new pe,An=class extends Nl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yr.x,yr.y).multiplyScalar(-t/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yr.x,yr.y).multiplyScalar(-t/yr.z)}getViewSize(t,e){return this.getViewBounds(t,jp,tm),e.subVectors(tm,jp)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(jo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ys=-90,Zs=1,Iu=class extends ni{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new An(Ys,Zs,t,e);i.layers=this.layers,this.add(i);let s=new An(Ys,Zs,t,e);s.layers=this.layers,this.add(s);let o=new An(Ys,Zs,t,e);o.layers=this.layers,this.add(o);let a=new An(Ys,Zs,t,e);a.layers=this.layers,this.add(a);let l=new An(Ys,Zs,t,e);l.layers=this.layers,this.add(l);let c=new An(Ys,Zs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Zi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===El)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Ol=class extends ei{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ro,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Lu=class extends Qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ol(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ti}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ra(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:lo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:Sr});s.uniforms.tEquirect.value=e;let o=new fi(i,s),a=e.minFilter;return e.minFilter===cs&&(e.minFilter=Ti),new Iu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},Nh=new q,Zx=new q,$x=new Jt,Xi=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Nh.subVectors(n,e).cross(Zx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Nh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||$x.getNormalMatrix(t),i=this.coplanarPoint(Nh).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},es=new Ar,dl=new q,Fl=class{constructor(t=new Xi,e=new Xi,n=new Xi,i=new Xi,s=new Xi,o=new Xi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zi){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],_=i[9],g=i[10],m=i[11],p=i[12],S=i[13],b=i[14],x=i[15];if(n[0].setComponents(l-s,f-c,m-d,x-p).normalize(),n[1].setComponents(l+s,f+c,m+d,x+p).normalize(),n[2].setComponents(l+o,f+h,m+_,x+S).normalize(),n[3].setComponents(l-o,f-h,m-_,x-S).normalize(),n[4].setComponents(l-a,f-u,m-g,x-b).normalize(),e===Zi)n[5].setComponents(l+a,f+u,m+g,x+b).normalize();else if(e===El)n[5].setComponents(a,u,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(dl.x=i.normal.x>0?t.max.x:t.min.x,dl.y=i.normal.y>0?t.max.y:t.min.y,dl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(dl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xm(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Jx(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){let _=u[f],g=u[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){let g=u[d];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Bl=class r extends Ei{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let S=p*f-o;for(let b=0;b<c;b++){let x=b*u-s;_.push(x,-S,0),g.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let b=S+c*p,x=S+c*(p+1),C=S+1+c*(p+1),E=S+1+c*p;d.push(b,x,E),d.push(x,C,E)}this.setIndex(d),this.setAttribute("position",new Ji(_,3)),this.setAttribute("normal",new Ji(g,3)),this.setAttribute("uv",new Ji(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Kx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ev=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ov=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,av=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_v=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ev=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Av="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Iv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ov=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$v=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ty=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ey=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ny=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ry=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ay=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ly=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,my=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,My=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,by=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ty=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ey=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ay=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ry=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Py=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ly=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Dy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ny=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Oy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,By=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ky=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ky=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_M=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,MM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:Kx,alphahash_pars_fragment:Qx,alphamap_fragment:jx,alphamap_pars_fragment:tv,alphatest_fragment:ev,alphatest_pars_fragment:nv,aomap_fragment:iv,aomap_pars_fragment:rv,batching_pars_vertex:sv,batching_vertex:ov,begin_vertex:av,beginnormal_vertex:lv,bsdfs:cv,iridescence_fragment:hv,bumpmap_pars_fragment:uv,clipping_planes_fragment:fv,clipping_planes_pars_fragment:dv,clipping_planes_pars_vertex:pv,clipping_planes_vertex:mv,color_fragment:gv,color_pars_fragment:_v,color_pars_vertex:xv,color_vertex:vv,common:yv,cube_uv_reflection_fragment:Mv,defaultnormal_vertex:Sv,displacementmap_pars_vertex:bv,displacementmap_vertex:wv,emissivemap_fragment:Tv,emissivemap_pars_fragment:Ev,colorspace_fragment:Av,colorspace_pars_fragment:Cv,envmap_fragment:Rv,envmap_common_pars_fragment:Pv,envmap_pars_fragment:Iv,envmap_pars_vertex:Lv,envmap_physical_pars_fragment:Gv,envmap_vertex:Dv,fog_vertex:Uv,fog_pars_vertex:Nv,fog_fragment:Ov,fog_pars_fragment:Fv,gradientmap_pars_fragment:Bv,lightmap_pars_fragment:zv,lights_lambert_fragment:kv,lights_lambert_pars_fragment:Vv,lights_pars_begin:Hv,lights_toon_fragment:Wv,lights_toon_pars_fragment:Xv,lights_phong_fragment:qv,lights_phong_pars_fragment:Yv,lights_physical_fragment:Zv,lights_physical_pars_fragment:$v,lights_fragment_begin:Jv,lights_fragment_maps:Kv,lights_fragment_end:Qv,logdepthbuf_fragment:jv,logdepthbuf_pars_fragment:ty,logdepthbuf_pars_vertex:ey,logdepthbuf_vertex:ny,map_fragment:iy,map_pars_fragment:ry,map_particle_fragment:sy,map_particle_pars_fragment:oy,metalnessmap_fragment:ay,metalnessmap_pars_fragment:ly,morphinstance_vertex:cy,morphcolor_vertex:hy,morphnormal_vertex:uy,morphtarget_pars_vertex:fy,morphtarget_vertex:dy,normal_fragment_begin:py,normal_fragment_maps:my,normal_pars_fragment:gy,normal_pars_vertex:_y,normal_vertex:xy,normalmap_pars_fragment:vy,clearcoat_normal_fragment_begin:yy,clearcoat_normal_fragment_maps:My,clearcoat_pars_fragment:Sy,iridescence_pars_fragment:by,opaque_fragment:wy,packing:Ty,premultiplied_alpha_fragment:Ey,project_vertex:Ay,dithering_fragment:Cy,dithering_pars_fragment:Ry,roughnessmap_fragment:Py,roughnessmap_pars_fragment:Iy,shadowmap_pars_fragment:Ly,shadowmap_pars_vertex:Dy,shadowmap_vertex:Uy,shadowmask_pars_fragment:Ny,skinbase_vertex:Oy,skinning_pars_vertex:Fy,skinning_vertex:By,skinnormal_vertex:zy,specularmap_fragment:ky,specularmap_pars_fragment:Vy,tonemapping_fragment:Hy,tonemapping_pars_fragment:Gy,transmission_fragment:Wy,transmission_pars_fragment:Xy,uv_pars_fragment:qy,uv_pars_vertex:Yy,uv_vertex:Zy,worldpos_vertex:$y,background_vert:Jy,background_frag:Ky,backgroundCube_vert:Qy,backgroundCube_frag:jy,cube_vert:tM,cube_frag:eM,depth_vert:nM,depth_frag:iM,distanceRGBA_vert:rM,distanceRGBA_frag:sM,equirect_vert:oM,equirect_frag:aM,linedashed_vert:lM,linedashed_frag:cM,meshbasic_vert:hM,meshbasic_frag:uM,meshlambert_vert:fM,meshlambert_frag:dM,meshmatcap_vert:pM,meshmatcap_frag:mM,meshnormal_vert:gM,meshnormal_frag:_M,meshphong_vert:xM,meshphong_frag:vM,meshphysical_vert:yM,meshphysical_frag:MM,meshtoon_vert:SM,meshtoon_frag:bM,points_vert:wM,points_frag:TM,shadow_vert:EM,shadow_frag:AM,sprite_vert:CM,sprite_frag:RM},_t={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},wi={basic:{uniforms:Tn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Tn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new oe(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Tn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Tn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Tn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new oe(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Tn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Tn([_t.points,_t.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Tn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Tn([_t.common,_t.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Tn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Tn([_t.sprite,_t.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Tn([_t.common,_t.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Tn([_t.lights,_t.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};wi.physical={uniforms:Tn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var pl={r:0,b:0,g:0},ns=new ji,PM=new He;function IM(r,t,e,n,i,s,o){let a=new oe(0),l=s===!0?0:1,c,h,u=null,f=0,d=null;function _(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?e:t).get(b)),b}function g(S){let b=!1,x=_(S);x===null?p(a,l):x&&x.isColor&&(p(x,1),b=!0);let C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,b){let x=_(b);x&&(x.isCubeTexture||x.mapping===ql)?(h===void 0&&(h=new fi(new ra(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:lo(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ns.copy(b.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(PM.makeRotationFromEuler(ns)),h.material.toneMapped=ae.getTransfer(x.colorSpace)!==ge,(u!==x||f!==x.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new fi(new Bl(2,2),new ii({name:"BackgroundMaterial",uniforms:lo(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ae.getTransfer(x.colorSpace)!==ge,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,b){S.getRGB(pl,Wm(r)),n.buffers.color.setClear(pl.r,pl.g,pl.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(S,b=1){a.set(S),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:g,addToRenderList:m}}function LM(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(v,I,N,F,G){let $=!1,W=u(F,N,I);s!==W&&(s=W,c(s.object)),$=d(v,F,N,G),$&&_(v,F,N,G),G!==null&&t.update(G,r.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(v,I,N,F),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function u(v,I,N){let F=N.wireframe===!0,G=n[v.id];G===void 0&&(G={},n[v.id]=G);let $=G[I.id];$===void 0&&($={},G[I.id]=$);let W=$[F];return W===void 0&&(W=f(l()),$[F]=W),W}function f(v){let I=[],N=[],F=[];for(let G=0;G<e;G++)I[G]=0,N[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:F,object:v,attributes:{},index:null}}function d(v,I,N,F){let G=s.attributes,$=I.attributes,W=0,Z=N.getAttributes();for(let B in Z)if(Z[B].location>=0){let P=G[B],lt=$[B];if(lt===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(lt=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(lt=v.instanceColor)),P===void 0||P.attribute!==lt||lt&&P.data!==lt.data)return!0;W++}return s.attributesNum!==W||s.index!==F}function _(v,I,N,F){let G={},$=I.attributes,W=0,Z=N.getAttributes();for(let B in Z)if(Z[B].location>=0){let P=$[B];P===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(P=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(P=v.instanceColor));let lt={};lt.attribute=P,P&&P.data&&(lt.data=P.data),G[B]=lt,W++}s.attributes=G,s.attributesNum=W,s.index=F}function g(){let v=s.newAttributes;for(let I=0,N=v.length;I<N;I++)v[I]=0}function m(v){p(v,0)}function p(v,I){let N=s.newAttributes,F=s.enabledAttributes,G=s.attributeDivisors;N[v]=1,F[v]===0&&(r.enableVertexAttribArray(v),F[v]=1),G[v]!==I&&(r.vertexAttribDivisor(v,I),G[v]=I)}function S(){let v=s.newAttributes,I=s.enabledAttributes;for(let N=0,F=I.length;N<F;N++)I[N]!==v[N]&&(r.disableVertexAttribArray(N),I[N]=0)}function b(v,I,N,F,G,$,W){W===!0?r.vertexAttribIPointer(v,I,N,G,$):r.vertexAttribPointer(v,I,N,F,G,$)}function x(v,I,N,F){g();let G=F.attributes,$=N.getAttributes(),W=I.defaultAttributeValues;for(let Z in $){let B=$[Z];if(B.location>=0){let tt=G[Z];if(tt===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(tt=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(tt=v.instanceColor)),tt!==void 0){let P=tt.normalized,lt=tt.itemSize,Lt=t.get(tt);if(Lt===void 0)continue;let vt=Lt.buffer,X=Lt.type,et=Lt.bytesPerElement,ht=X===r.INT||X===r.UNSIGNED_INT||tt.gpuType===sf;if(tt.isInterleavedBufferAttribute){let nt=tt.data,wt=nt.stride,At=tt.offset;if(nt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<B.locationSize;Ht++)p(B.location+Ht,nt.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Ht=0;Ht<B.locationSize;Ht++)m(B.location+Ht);r.bindBuffer(r.ARRAY_BUFFER,vt);for(let Ht=0;Ht<B.locationSize;Ht++)b(B.location+Ht,lt/B.locationSize,X,P,wt*et,(At+lt/B.locationSize*Ht)*et,ht)}else{if(tt.isInstancedBufferAttribute){for(let nt=0;nt<B.locationSize;nt++)p(B.location+nt,tt.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let nt=0;nt<B.locationSize;nt++)m(B.location+nt);r.bindBuffer(r.ARRAY_BUFFER,vt);for(let nt=0;nt<B.locationSize;nt++)b(B.location+nt,lt/B.locationSize,X,P,lt*et,lt/B.locationSize*nt*et,ht)}}else if(W!==void 0){let P=W[Z];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(B.location,P);break;case 3:r.vertexAttrib3fv(B.location,P);break;case 4:r.vertexAttrib4fv(B.location,P);break;default:r.vertexAttrib1fv(B.location,P)}}}}S()}function C(){R();for(let v in n){let I=n[v];for(let N in I){let F=I[N];for(let G in F)h(F[G].object),delete F[G];delete I[N]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;let I=n[v.id];for(let N in I){let F=I[N];for(let G in F)h(F[G].object),delete F[G];delete I[N]}delete n[v.id]}function T(v){for(let I in n){let N=n[I];if(N[v.id]===void 0)continue;let F=N[v.id];for(let G in F)h(F[G].object),delete F[G];delete N[v.id]}}function R(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function DM(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*f[g];e.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function UM(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==ui&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let R=T===sa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ki&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Yi&&!R)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:C,maxSamples:E}}function NM(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Xi,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||_===null||_.length===0||s&&!m)s?h(null):c();else{let S=s?0:n,b=S*4,x=p.clippingState||null;l.value=x,x=h(_,f,b,d);for(let C=0;C!==b;++C)x[C]=e[C];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=d+g*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=d;b!==g;++b,x+=4)o.copy(u[b]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function OM(r){let t=new WeakMap;function e(o,a){return a===Kh?o.mapping=ro:a===Qh&&(o.mapping=so),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Kh||a===Qh)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Lu(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Du=class extends Nl{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ks=4,em=[.125,.215,.35,.446,.526,.582],as=20,Oh=new Du,nm=new oe,Fh=null,Bh=0,zh=0,kh=!1,rs=(1+Math.sqrt(5))/2,$s=1/rs,im=[new q(-rs,$s,0),new q(rs,$s,0),new q(-$s,0,rs),new q($s,0,rs),new q(0,rs,-$s),new q(0,rs,$s),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],zl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Fh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fh,Bh,zh),this._renderer.xr.enabled=kh,t.scissorTest=!1,ml(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ro||t.mapping===so?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:sa,format:ui,colorSpace:ho,depthBuffer:!1},i=rm(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rm(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FM(s)),this._blurMaterial=BM(s,t,e)}return i}_compileMaterial(t){let e=new fi(this._lodPlanes[0],t);this._renderer.compile(e,Oh)}_sceneToCubeUV(t,e,n,i){let a=new An(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(nm),h.toneMapping=br,h.autoClear=!1;let d=new Ll({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),_=new fi(new ra,d),g=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(nm),g=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let b=this._cubeSize;ml(i,S*b,p>2?b:0,b,b),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ro||t.mapping===so;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=om()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sm());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new fi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;ml(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Oh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=im[(i-s-1)%im.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new fi(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*as-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):as;m>as&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);let p=[],S=0;for(let T=0;T<as;++T){let R=T/g,y=Math.exp(-R*R/2);p.push(y),T===0?S+=y:T<m&&(S+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-n;let x=this._sizeLods[i],C=3*x*(i>b-Ks?i-b+Ks:0),E=4*(this._cubeSize-x);ml(e,C,E,3*x,2*x),l.setRenderTarget(e),l.render(u,Oh)}};function FM(r){let t=[],e=[],n=[],i=r,s=r-Ks+1+em.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ks?l=em[o-r+Ks-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,g=3,m=2,p=1,S=new Float32Array(g*_*d),b=new Float32Array(m*_*d),x=new Float32Array(p*_*d);for(let E=0;E<d;E++){let T=E%3*2/3-1,R=E>2?0:-1,y=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];S.set(y,g*_*E),b.set(f,m*_*E);let v=[E,E,E,E,E,E];x.set(v,p*_*E)}let C=new Ei;C.setAttribute("position",new tn(S,g)),C.setAttribute("uv",new tn(b,m)),C.setAttribute("faceIndex",new tn(x,p)),t.push(C),i>Ks&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function rm(r,t,e){let n=new Qi(r,t,e);return n.texture.mapping=ql,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ml(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function BM(r,t,e){let n=new Float32Array(as),i=new q(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function sm(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function om(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function df(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zM(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Kh||l===Qh,h=l===ro||l===so;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new zl(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new zl(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function kM(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ko("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function VM(r,t,e,n){let i={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);for(let _ in f.morphAttributes){let g=f.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}f.removeEventListener("dispose",o),delete i[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let _ in f)t.update(f[_],r.ARRAY_BUFFER);let d=u.morphAttributes;for(let _ in d){let g=d[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],r.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,_=u.attributes.position,g=0;if(d!==null){let S=d.array;g=d.version;for(let b=0,x=S.length;b<x;b+=3){let C=S[b+0],E=S[b+1],T=S[b+2];f.push(C,E,E,T,T,C)}}else if(_!==void 0){let S=_.array;g=_.version;for(let b=0,x=S.length/3-1;b<x;b+=3){let C=b+0,E=b+1,T=b+2;f.push(C,E,E,T,T,C)}}else return;let m=new(Hm(f)?Ul:Dl)(f,1);m.version=g;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function HM(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,f*o,_),e.update(d,n,_))}function h(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,n,1)}function u(f,d,_,g){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,g,0,_);let p=0;for(let S=0;S<_;S++)p+=d[S]*g[S];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function GM(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function WM(r,t,e){let n=new WeakMap,i=new Fe;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let y=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],b=0;d===!0&&(b=1),_===!0&&(b=2),g===!0&&(b=3);let x=a.attributes.position.count*b,C=1;x>t.maxTextureSize&&(C=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let E=new Float32Array(x*C*4*u),T=new Rl(E,x,C,u);T.type=Yi,T.needsUpdate=!0;let R=b*4;for(let v=0;v<u;v++){let I=m[v],N=p[v],F=S[v],G=x*C*4*v;for(let $=0;$<I.count;$++){let W=$*R;d===!0&&(i.fromBufferAttribute(I,$),E[G+W+0]=i.x,E[G+W+1]=i.y,E[G+W+2]=i.z,E[G+W+3]=0),_===!0&&(i.fromBufferAttribute(N,$),E[G+W+4]=i.x,E[G+W+5]=i.y,E[G+W+6]=i.z,E[G+W+7]=0),g===!0&&(i.fromBufferAttribute(F,$),E[G+W+8]=i.x,E[G+W+9]=i.y,E[G+W+10]=i.z,E[G+W+11]=F.itemSize===4?i.w:1)}}f={count:u,texture:T,size:new pe(x,C)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function XM(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var kl=class extends ei{constructor(t,e,n,i,s,o,a,l,c,h=to){if(h!==to&&h!==ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===to&&(n=hs),n===void 0&&h===ao&&(n=oo),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:di,this.minFilter=l!==void 0?l:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},qm=new ei,am=new kl(1,1),Ym=new Rl,Zm=new Pu,$m=new Ol,lm=[],cm=[],hm=new Float32Array(16),um=new Float32Array(9),fm=new Float32Array(4);function fo(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=lm[i];if(s===void 0&&(s=new Float32Array(i),lm[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ye(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ze(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Zl(r,t){let e=cm[t];e===void 0&&(e=new Int32Array(t),cm[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function qM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function YM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2fv(this.addr,t),Ze(e,t)}}function ZM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;r.uniform3fv(this.addr,t),Ze(e,t)}}function $M(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4fv(this.addr,t),Ze(e,t)}}function JM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;fm.set(n),r.uniformMatrix2fv(this.addr,!1,fm),Ze(e,n)}}function KM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;um.set(n),r.uniformMatrix3fv(this.addr,!1,um),Ze(e,n)}}function QM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;hm.set(n),r.uniformMatrix4fv(this.addr,!1,hm),Ze(e,n)}}function jM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function tS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2iv(this.addr,t),Ze(e,t)}}function eS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;r.uniform3iv(this.addr,t),Ze(e,t)}}function nS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4iv(this.addr,t),Ze(e,t)}}function iS(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function rS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2uiv(this.addr,t),Ze(e,t)}}function sS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;r.uniform3uiv(this.addr,t),Ze(e,t)}}function oS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4uiv(this.addr,t),Ze(e,t)}}function aS(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(am.compareFunction=Vm,s=am):s=qm,e.setTexture2D(t||s,i)}function lS(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Zm,i)}function cS(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||$m,i)}function hS(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ym,i)}function uS(r){switch(r){case 5126:return qM;case 35664:return YM;case 35665:return ZM;case 35666:return $M;case 35674:return JM;case 35675:return KM;case 35676:return QM;case 5124:case 35670:return jM;case 35667:case 35671:return tS;case 35668:case 35672:return eS;case 35669:case 35673:return nS;case 5125:return iS;case 36294:return rS;case 36295:return sS;case 36296:return oS;case 35678:case 36198:case 36298:case 36306:case 35682:return aS;case 35679:case 36299:case 36307:return lS;case 35680:case 36300:case 36308:case 36293:return cS;case 36289:case 36303:case 36311:case 36292:return hS}}function fS(r,t){r.uniform1fv(this.addr,t)}function dS(r,t){let e=fo(t,this.size,2);r.uniform2fv(this.addr,e)}function pS(r,t){let e=fo(t,this.size,3);r.uniform3fv(this.addr,e)}function mS(r,t){let e=fo(t,this.size,4);r.uniform4fv(this.addr,e)}function gS(r,t){let e=fo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function _S(r,t){let e=fo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function xS(r,t){let e=fo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function vS(r,t){r.uniform1iv(this.addr,t)}function yS(r,t){r.uniform2iv(this.addr,t)}function MS(r,t){r.uniform3iv(this.addr,t)}function SS(r,t){r.uniform4iv(this.addr,t)}function bS(r,t){r.uniform1uiv(this.addr,t)}function wS(r,t){r.uniform2uiv(this.addr,t)}function TS(r,t){r.uniform3uiv(this.addr,t)}function ES(r,t){r.uniform4uiv(this.addr,t)}function AS(r,t,e){let n=this.cache,i=t.length,s=Zl(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||qm,s[o])}function CS(r,t,e){let n=this.cache,i=t.length,s=Zl(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Zm,s[o])}function RS(r,t,e){let n=this.cache,i=t.length,s=Zl(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||$m,s[o])}function PS(r,t,e){let n=this.cache,i=t.length,s=Zl(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ym,s[o])}function IS(r){switch(r){case 5126:return fS;case 35664:return dS;case 35665:return pS;case 35666:return mS;case 35674:return gS;case 35675:return _S;case 35676:return xS;case 5124:case 35670:return vS;case 35667:case 35671:return yS;case 35668:case 35672:return MS;case 35669:case 35673:return SS;case 5125:return bS;case 36294:return wS;case 36295:return TS;case 36296:return ES;case 35678:case 36198:case 36298:case 36306:case 35682:return AS;case 35679:case 36299:case 36307:return CS;case 35680:case 36300:case 36308:case 36293:return RS;case 36289:case 36303:case 36311:case 36292:return PS}}var Uu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=uS(e.type)}},Nu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=IS(e.type)}},Ou=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},Vh=/(\w+)(\])?(\[|\.)?/g;function dm(r,t){r.seq.push(t),r.map[t.id]=t}function LS(r,t,e){let n=r.name,i=n.length;for(Vh.lastIndex=0;;){let s=Vh.exec(n),o=Vh.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){dm(e,c===void 0?new Uu(a,r,t):new Nu(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Ou(a),dm(e,u)),e=u}}}var no=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);LS(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function pm(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var DS=37297,US=0;function NS(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var mm=new Jt;function OS(r){ae._getMatrix(mm,ae.workingColorSpace,r);let t=`mat3( ${mm.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(r)){case Yl:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function gm(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+NS(r.getShaderSource(t),o)}else return i}function FS(r,t){let e=OS(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function BS(r,t){let e;switch(t){case Y0:e="Linear";break;case Z0:e="Reinhard";break;case $0:e="Cineon";break;case J0:e="ACESFilmic";break;case Q0:e="AgX";break;case j0:e="Neutral";break;case K0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var gl=new q;function zS(){ae.getLuminanceCoefficients(gl);let r=gl.x.toFixed(4),t=gl.y.toFixed(4),e=gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function VS(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function HS(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Qo(r){return r!==""}function _m(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xm(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var GS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fu(r){return r.replace(GS,XS)}var WS=new Map;function XS(r,t){let e=Kt[t];if(e===void 0){let n=WS.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Fu(e)}var qS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vm(r){return r.replace(qS,YS)}function YS(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ym(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ZS(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Cm?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===E0?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Wi&&(t="SHADOWMAP_TYPE_VSM"),t}function $S(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ro:case so:t="ENVMAP_TYPE_CUBE";break;case ql:t="ENVMAP_TYPE_CUBE_UV";break}return t}function JS(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case so:t="ENVMAP_MODE_REFRACTION";break}return t}function KS(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Rm:t="ENVMAP_BLENDING_MULTIPLY";break;case X0:t="ENVMAP_BLENDING_MIX";break;case q0:t="ENVMAP_BLENDING_ADD";break}return t}function QS(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function jS(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=ZS(e),c=$S(e),h=JS(e),u=KS(e),f=QS(e),d=kS(e),_=VS(s),g=i.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Qo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Qo).join(`
`),p.length>0&&(p+=`
`)):(m=[ym(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),p=[ym(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==br?"#define TONE_MAPPING":"",e.toneMapping!==br?Kt.tonemapping_pars_fragment:"",e.toneMapping!==br?BS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,FS("linearToOutputTexel",e.outputColorSpace),zS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qo).join(`
`)),o=Fu(o),o=_m(o,e),o=xm(o,e),a=Fu(a),a=_m(a,e),a=xm(a,e),o=vm(o),a=vm(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Dp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=S+m+o,x=S+p+a,C=pm(i,i.VERTEX_SHADER,b),E=pm(i,i.FRAGMENT_SHADER,x);i.attachShader(g,C),i.attachShader(g,E),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(I){if(r.debug.checkShaderErrors){let N=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(C).trim(),G=i.getShaderInfoLog(E).trim(),$=!0,W=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,C,E);else{let Z=gm(i,C,"vertex"),B=gm(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+Z+`
`+B)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||G==="")&&(W=!1);W&&(I.diagnostics={runnable:$,programLog:N,vertexShader:{log:F,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(C),i.deleteShader(E),R=new no(i,g),y=HS(i,g)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,DS)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=US++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=E,this}var tb=0,Bu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new zu(t),e.set(t,n)),n}},zu=class{constructor(t){this.id=tb++,this.code=t,this.usedTimes=0}};function eb(r,t,e,n,i,s,o){let a=new Il,l=new Bu,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,v,I,N,F){let G=N.fog,$=F.geometry,W=y.isMeshStandardMaterial?N.environment:null,Z=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),B=Z&&Z.mapping===ql?Z.image.height:null,tt=_[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let P=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,lt=P!==void 0?P.length:0,Lt=0;$.morphAttributes.position!==void 0&&(Lt=1),$.morphAttributes.normal!==void 0&&(Lt=2),$.morphAttributes.color!==void 0&&(Lt=3);let vt,X,et,ht;if(tt){let xt=wi[tt];vt=xt.vertexShader,X=xt.fragmentShader}else vt=y.vertexShader,X=y.fragmentShader,l.update(y),et=l.getVertexShaderID(y),ht=l.getFragmentShaderID(y);let nt=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),At=F.isInstancedMesh===!0,Ht=F.isBatchedMesh===!0,Qt=!!y.map,Gt=!!y.matcap,Dt=!!Z,D=!!y.aoMap,_e=!!y.lightMap,Bt=!!y.bumpMap,z=!!y.normalMap,Tt=!!y.displacementMap,ne=!!y.emissiveMap,Ct=!!y.metalnessMap,A=!!y.roughnessMap,M=y.anisotropy>0,H=y.clearcoat>0,j=y.dispersion>0,Q=y.iridescence>0,J=y.sheen>0,ft=y.transmission>0,at=M&&!!y.anisotropyMap,mt=H&&!!y.clearcoatMap,qt=H&&!!y.clearcoatNormalMap,it=H&&!!y.clearcoatRoughnessMap,ot=Q&&!!y.iridescenceMap,Nt=Q&&!!y.iridescenceThicknessMap,Ut=J&&!!y.sheenColorMap,yt=J&&!!y.sheenRoughnessMap,Zt=!!y.specularMap,Ft=!!y.specularColorMap,se=!!y.specularIntensityMap,L=ft&&!!y.transmissionMap,ut=ft&&!!y.thicknessMap,Y=!!y.gradientMap,K=!!y.alphaMap,ct=y.alphaTest>0,dt=!!y.alphaHash,zt=!!y.extensions,le=br;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(le=r.toneMapping);let Ie={shaderID:tt,shaderType:y.type,shaderName:y.name,vertexShader:vt,fragmentShader:X,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:ht,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ht,batchingColor:Ht&&F._colorsTexture!==null,instancing:At,instancingColor:At&&F.instanceColor!==null,instancingMorph:At&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:nt===null?r.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ho,alphaToCoverage:!!y.alphaToCoverage,map:Qt,matcap:Gt,envMap:Dt,envMapMode:Dt&&Z.mapping,envMapCubeUVHeight:B,aoMap:D,lightMap:_e,bumpMap:Bt,normalMap:z,displacementMap:f&&Tt,emissiveMap:ne,normalMapObjectSpace:z&&y.normalMapType===rx,normalMapTangentSpace:z&&y.normalMapType===ix,metalnessMap:Ct,roughnessMap:A,anisotropy:M,anisotropyMap:at,clearcoat:H,clearcoatMap:mt,clearcoatNormalMap:qt,clearcoatRoughnessMap:it,dispersion:j,iridescence:Q,iridescenceMap:ot,iridescenceThicknessMap:Nt,sheen:J,sheenColorMap:Ut,sheenRoughnessMap:yt,specularMap:Zt,specularColorMap:Ft,specularIntensityMap:se,transmission:ft,transmissionMap:L,thicknessMap:ut,gradientMap:Y,opaque:y.transparent===!1&&y.blending===js&&y.alphaToCoverage===!1,alphaMap:K,alphaTest:ct,alphaHash:dt,combine:y.combine,mapUv:Qt&&g(y.map.channel),aoMapUv:D&&g(y.aoMap.channel),lightMapUv:_e&&g(y.lightMap.channel),bumpMapUv:Bt&&g(y.bumpMap.channel),normalMapUv:z&&g(y.normalMap.channel),displacementMapUv:Tt&&g(y.displacementMap.channel),emissiveMapUv:ne&&g(y.emissiveMap.channel),metalnessMapUv:Ct&&g(y.metalnessMap.channel),roughnessMapUv:A&&g(y.roughnessMap.channel),anisotropyMapUv:at&&g(y.anisotropyMap.channel),clearcoatMapUv:mt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:qt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:yt&&g(y.sheenRoughnessMap.channel),specularMapUv:Zt&&g(y.specularMap.channel),specularColorMapUv:Ft&&g(y.specularColorMap.channel),specularIntensityMapUv:se&&g(y.specularIntensityMap.channel),transmissionMapUv:L&&g(y.transmissionMap.channel),thicknessMapUv:ut&&g(y.thicknessMap.channel),alphaMapUv:K&&g(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(z||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!$.attributes.uv&&(Qt||K),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:wt,skinning:F.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Lt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:le,decodeVideoTexture:Qt&&y.map.isVideoTexture===!0&&ae.getTransfer(y.map.colorSpace)===ge,decodeVideoTextureEmissive:ne&&y.emissiveMap.isVideoTexture===!0&&ae.getTransfer(y.emissiveMap.colorSpace)===ge,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===qi,flipSided:y.side===Un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:zt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&y.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function p(y){let v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)v.push(I),v.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(S(v,y),b(v,y),v.push(r.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function S(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function b(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){let v=_[y.type],I;if(v){let N=wi[v];I=Xx.clone(N.uniforms)}else I=y.uniforms;return I}function C(y,v){let I;for(let N=0,F=h.length;N<F;N++){let G=h[N];if(G.cacheKey===v){I=G,++I.usedTimes;break}}return I===void 0&&(I=new jS(r,v,y,s),h.push(I)),I}function E(y){if(--y.usedTimes===0){let v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function T(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:R}}function nb(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function ib(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Mm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Sm(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,_,g,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function a(u,f,d,_,g,m){let p=o(u,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,_,g,m){let p=o(u,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||ib),n.length>1&&n.sort(f||Mm),i.length>1&&i.sort(f||Mm)}function h(){for(let u=t,f=r.length;u<f;u++){let d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function rb(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new Sm,r.set(n,[o])):i>=s.length?(o=new Sm,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function sb(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new oe};break;case"SpotLight":e={position:new q,direction:new q,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new q,halfWidth:new q,halfHeight:new q};break}return r[t.id]=e,e}}}function ob(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var ab=0;function lb(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function cb(r){let t=new sb,e=ob(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);let i=new q,s=new He,o=new He;function a(c){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,S=0,b=0,x=0,C=0,E=0,T=0;c.sort(lb);for(let y=0,v=c.length;y<v;y++){let I=c[y],N=I.color,F=I.intensity,G=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=N.r*F,u+=N.g*F,f+=N.b*F;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],F);T++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Z=I.shadow,B=e.get(I);B.shadowIntensity=Z.intensity,B.shadowBias=Z.bias,B.shadowNormalBias=Z.normalBias,B.shadowRadius=Z.radius,B.shadowMapSize=Z.mapSize,n.directionalShadow[d]=B,n.directionalShadowMap[d]=$,n.directionalShadowMatrix[d]=I.shadow.matrix,S++}n.directional[d]=W,d++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(N).multiplyScalar(F),W.distance=G,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[g]=W;let Z=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,Z.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[g]=Z.matrix,I.castShadow){let B=e.get(I);B.shadowIntensity=Z.intensity,B.shadowBias=Z.bias,B.shadowNormalBias=Z.normalBias,B.shadowRadius=Z.radius,B.shadowMapSize=Z.mapSize,n.spotShadow[g]=B,n.spotShadowMap[g]=$,x++}g++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(N).multiplyScalar(F),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=W,m++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let Z=I.shadow,B=e.get(I);B.shadowIntensity=Z.intensity,B.shadowBias=Z.bias,B.shadowNormalBias=Z.normalBias,B.shadowRadius=Z.radius,B.shadowMapSize=Z.mapSize,B.shadowCameraNear=Z.camera.near,B.shadowCameraFar=Z.camera.far,n.pointShadow[_]=B,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=I.shadow.matrix,b++}n.point[_]=W,_++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(F),W.groundColor.copy(I.groundColor).multiplyScalar(F),n.hemi[p]=W,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let R=n.hash;(R.directionalLength!==d||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==S||R.numPointShadows!==b||R.numSpotShadows!==x||R.numSpotMaps!==C||R.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,R.directionalLength=d,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=S,R.numPointShadows=b,R.numSpotShadows=x,R.numSpotMaps=C,R.numLightProbes=T,n.version=ab++)}function l(c,h){let u=0,f=0,d=0,_=0,g=0,m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let b=c[p];if(b.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(b.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(b.isRectAreaLight){let x=n.rectArea[_];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function bm(r){let t=new cb(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function hb(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new bm(r),t.set(i,[a])):s>=o.length?(a=new bm(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ku=class extends fs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ex,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Vu=class extends fs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ub=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function db(r,t,e){let n=new Fl,i=new pe,s=new pe,o=new Fe,a=new ku({depthPacking:nx}),l=new Vu,c={},h=e.maxTextureSize,u={[wr]:Un,[Un]:wr,[qi]:qi},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:ub,fragmentShader:fb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let _=new Ei;_.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new fi(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cm;let p=this.type;this.render=function(E,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let y=r.getRenderTarget(),v=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),N=r.state;N.setBlending(Sr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let F=p!==Wi&&this.type===Wi,G=p===Wi&&this.type!==Wi;for(let $=0,W=E.length;$<W;$++){let Z=E[$],B=Z.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let tt=B.getFrameExtents();if(i.multiply(tt),s.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/tt.x),i.x=s.x*tt.x,B.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/tt.y),i.y=s.y*tt.y,B.mapSize.y=s.y)),B.map===null||F===!0||G===!0){let lt=this.type!==Wi?{minFilter:di,magFilter:di}:{};B.map!==null&&B.map.dispose(),B.map=new Qi(i.x,i.y,lt),B.map.texture.name=Z.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();let P=B.getViewportCount();for(let lt=0;lt<P;lt++){let Lt=B.getViewport(lt);o.set(s.x*Lt.x,s.y*Lt.y,s.x*Lt.z,s.y*Lt.w),N.viewport(o),B.updateMatrices(Z,lt),n=B.getFrustum(),x(T,R,B.camera,Z,this.type)}B.isPointLightShadow!==!0&&this.type===Wi&&S(B,R),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,v,I)};function S(E,T){let R=t.update(g);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Qi(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(T,null,R,f,g,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(T,null,R,d,g,null)}function b(E,T,R,y){let v=null,I=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)v=I;else if(v=R.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let N=v.uuid,F=T.uuid,G=c[N];G===void 0&&(G={},c[N]=G);let $=G[F];$===void 0&&($=v.clone(),G[F]=$,T.addEventListener("dispose",C)),v=$}if(v.visible=T.visible,v.wireframe=T.wireframe,y===Wi?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:u[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let N=r.properties.get(v);N.light=R}return v}function x(E,T,R,y,v){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Wi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let F=t.update(E),G=E.material;if(Array.isArray(G)){let $=F.groups;for(let W=0,Z=$.length;W<Z;W++){let B=$[W],tt=G[B.materialIndex];if(tt&&tt.visible){let P=b(E,tt,y,v);E.onBeforeShadow(r,E,T,R,F,P,B),r.renderBufferDirect(R,null,F,P,E,B),E.onAfterShadow(r,E,T,R,F,P,B)}}}else if(G.visible){let $=b(E,G,y,v);E.onBeforeShadow(r,E,T,R,F,$,null),r.renderBufferDirect(R,null,F,$,E,null),E.onAfterShadow(r,E,T,R,F,$,null)}}let N=E.children;for(let F=0,G=N.length;F<G;F++)x(N[F],T,R,y,v)}function C(E){E.target.removeEventListener("dispose",C);for(let R in c){let y=c[R],v=E.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}var pb={[Wh]:Xh,[qh]:$h,[Yh]:Jh,[io]:Zh,[Xh]:Wh,[$h]:qh,[Jh]:Yh,[Zh]:io};function mb(r,t){function e(){let L=!1,ut=new Fe,Y=null,K=new Fe(0,0,0,0);return{setMask:function(ct){Y!==ct&&!L&&(r.colorMask(ct,ct,ct,ct),Y=ct)},setLocked:function(ct){L=ct},setClear:function(ct,dt,zt,le,Ie){Ie===!0&&(ct*=le,dt*=le,zt*=le),ut.set(ct,dt,zt,le),K.equals(ut)===!1&&(r.clearColor(ct,dt,zt,le),K.copy(ut))},reset:function(){L=!1,Y=null,K.set(-1,0,0,0)}}}function n(){let L=!1,ut=!1,Y=null,K=null,ct=null;return{setReversed:function(dt){if(ut!==dt){let zt=t.get("EXT_clip_control");ut?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);let le=ct;ct=null,this.setClear(le)}ut=dt},getReversed:function(){return ut},setTest:function(dt){dt?nt(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(dt){Y!==dt&&!L&&(r.depthMask(dt),Y=dt)},setFunc:function(dt){if(ut&&(dt=pb[dt]),K!==dt){switch(dt){case Wh:r.depthFunc(r.NEVER);break;case Xh:r.depthFunc(r.ALWAYS);break;case qh:r.depthFunc(r.LESS);break;case io:r.depthFunc(r.LEQUAL);break;case Yh:r.depthFunc(r.EQUAL);break;case Zh:r.depthFunc(r.GEQUAL);break;case $h:r.depthFunc(r.GREATER);break;case Jh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=dt}},setLocked:function(dt){L=dt},setClear:function(dt){ct!==dt&&(ut&&(dt=1-dt),r.clearDepth(dt),ct=dt)},reset:function(){L=!1,Y=null,K=null,ct=null,ut=!1}}}function i(){let L=!1,ut=null,Y=null,K=null,ct=null,dt=null,zt=null,le=null,Ie=null;return{setTest:function(xt){L||(xt?nt(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function(xt){ut!==xt&&!L&&(r.stencilMask(xt),ut=xt)},setFunc:function(xt,Et,$t){(Y!==xt||K!==Et||ct!==$t)&&(r.stencilFunc(xt,Et,$t),Y=xt,K=Et,ct=$t)},setOp:function(xt,Et,$t){(dt!==xt||zt!==Et||le!==$t)&&(r.stencilOp(xt,Et,$t),dt=xt,zt=Et,le=$t)},setLocked:function(xt){L=xt},setClear:function(xt){Ie!==xt&&(r.clearStencil(xt),Ie=xt)},reset:function(){L=!1,ut=null,Y=null,K=null,ct=null,dt=null,zt=null,le=null,Ie=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,S=null,b=null,x=null,C=null,E=null,T=new oe(0,0,0),R=0,y=!1,v=null,I=null,N=null,F=null,G=null,$=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,Z=0,B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(B)[1]),W=Z>=1):B.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),W=Z>=2);let tt=null,P={},lt=r.getParameter(r.SCISSOR_BOX),Lt=r.getParameter(r.VIEWPORT),vt=new Fe().fromArray(lt),X=new Fe().fromArray(Lt);function et(L,ut,Y,K){let ct=new Uint8Array(4),dt=r.createTexture();r.bindTexture(L,dt),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let zt=0;zt<Y;zt++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ut,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,ct):r.texImage2D(ut+zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ct);return dt}let ht={};ht[r.TEXTURE_2D]=et(r.TEXTURE_2D,r.TEXTURE_2D,1),ht[r.TEXTURE_CUBE_MAP]=et(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[r.TEXTURE_2D_ARRAY]=et(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ht[r.TEXTURE_3D]=et(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(r.DEPTH_TEST),o.setFunc(io),Bt(!1),z(wp),nt(r.CULL_FACE),D(Sr);function nt(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function wt(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function At(L,ut){return u[L]!==ut?(r.bindFramebuffer(L,ut),u[L]=ut,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ut),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ut),!0):!1}function Ht(L,ut){let Y=d,K=!1;if(L){Y=f.get(ut),Y===void 0&&(Y=[],f.set(ut,Y));let ct=L.textures;if(Y.length!==ct.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,zt=ct.length;dt<zt;dt++)Y[dt]=r.COLOR_ATTACHMENT0+dt;Y.length=ct.length,K=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,K=!0);K&&r.drawBuffers(Y)}function Qt(L){return _!==L?(r.useProgram(L),_=L,!0):!1}let Gt={[ss]:r.FUNC_ADD,[C0]:r.FUNC_SUBTRACT,[R0]:r.FUNC_REVERSE_SUBTRACT};Gt[P0]=r.MIN,Gt[I0]=r.MAX;let Dt={[L0]:r.ZERO,[D0]:r.ONE,[U0]:r.SRC_COLOR,[Hh]:r.SRC_ALPHA,[k0]:r.SRC_ALPHA_SATURATE,[B0]:r.DST_COLOR,[O0]:r.DST_ALPHA,[N0]:r.ONE_MINUS_SRC_COLOR,[Gh]:r.ONE_MINUS_SRC_ALPHA,[z0]:r.ONE_MINUS_DST_COLOR,[F0]:r.ONE_MINUS_DST_ALPHA,[V0]:r.CONSTANT_COLOR,[H0]:r.ONE_MINUS_CONSTANT_COLOR,[G0]:r.CONSTANT_ALPHA,[W0]:r.ONE_MINUS_CONSTANT_ALPHA};function D(L,ut,Y,K,ct,dt,zt,le,Ie,xt){if(L===Sr){g===!0&&(wt(r.BLEND),g=!1);return}if(g===!1&&(nt(r.BLEND),g=!0),L!==A0){if(L!==m||xt!==y){if((p!==ss||x!==ss)&&(r.blendEquation(r.FUNC_ADD),p=ss,x=ss),xt)switch(L){case js:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Tp:r.blendFunc(r.ONE,r.ONE);break;case Ep:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ap:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case js:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Tp:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ep:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ap:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,b=null,C=null,E=null,T.set(0,0,0),R=0,m=L,y=xt}return}ct=ct||ut,dt=dt||Y,zt=zt||K,(ut!==p||ct!==x)&&(r.blendEquationSeparate(Gt[ut],Gt[ct]),p=ut,x=ct),(Y!==S||K!==b||dt!==C||zt!==E)&&(r.blendFuncSeparate(Dt[Y],Dt[K],Dt[dt],Dt[zt]),S=Y,b=K,C=dt,E=zt),(le.equals(T)===!1||Ie!==R)&&(r.blendColor(le.r,le.g,le.b,Ie),T.copy(le),R=Ie),m=L,y=!1}function _e(L,ut){L.side===qi?wt(r.CULL_FACE):nt(r.CULL_FACE);let Y=L.side===Un;ut&&(Y=!Y),Bt(Y),L.blending===js&&L.transparent===!1?D(Sr):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?nt(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(L){v!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),v=L)}function z(L){L!==w0?(nt(r.CULL_FACE),L!==I&&(L===wp?r.cullFace(r.BACK):L===T0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),I=L}function Tt(L){L!==N&&(W&&r.lineWidth(L),N=L)}function ne(L,ut,Y){L?(nt(r.POLYGON_OFFSET_FILL),(F!==ut||G!==Y)&&(r.polygonOffset(ut,Y),F=ut,G=Y)):wt(r.POLYGON_OFFSET_FILL)}function Ct(L){L?nt(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function A(L){L===void 0&&(L=r.TEXTURE0+$-1),tt!==L&&(r.activeTexture(L),tt=L)}function M(L,ut,Y){Y===void 0&&(tt===null?Y=r.TEXTURE0+$-1:Y=tt);let K=P[Y];K===void 0&&(K={type:void 0,texture:void 0},P[Y]=K),(K.type!==L||K.texture!==ut)&&(tt!==Y&&(r.activeTexture(Y),tt=Y),r.bindTexture(L,ut||ht[L]),K.type=L,K.texture=ut)}function H(){let L=P[tt];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ut(L){vt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),vt.copy(L))}function yt(L){X.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),X.copy(L))}function Zt(L,ut){let Y=c.get(ut);Y===void 0&&(Y=new WeakMap,c.set(ut,Y));let K=Y.get(L);K===void 0&&(K=r.getUniformBlockIndex(ut,L.name),Y.set(L,K))}function Ft(L,ut){let K=c.get(ut).get(L);l.get(ut)!==K&&(r.uniformBlockBinding(ut,K,L.__bindingPointIndex),l.set(ut,K))}function se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},tt=null,P={},u={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,S=null,b=null,x=null,C=null,E=null,T=new oe(0,0,0),R=0,y=!1,v=null,I=null,N=null,F=null,G=null,vt.set(0,0,r.canvas.width,r.canvas.height),X.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:nt,disable:wt,bindFramebuffer:At,drawBuffers:Ht,useProgram:Qt,setBlending:D,setMaterial:_e,setFlipSided:Bt,setCullFace:z,setLineWidth:Tt,setPolygonOffset:ne,setScissorTest:Ct,activeTexture:A,bindTexture:M,unbindTexture:H,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:ot,texImage3D:Nt,updateUBOMapping:Zt,uniformBlockBinding:Ft,texStorage2D:qt,texStorage3D:it,texSubImage2D:J,texSubImage3D:ft,compressedTexSubImage2D:at,compressedTexSubImage3D:mt,scissor:Ut,viewport:yt,reset:se}}function wm(r,t,e,n){let i=gb(n);switch(e){case Um:return r*t;case Om:return r*t;case Fm:return r*t*2;case Bm:return r*t/i.components*i.byteLength;case lf:return r*t/i.components*i.byteLength;case zm:return r*t*2/i.components*i.byteLength;case cf:return r*t*2/i.components*i.byteLength;case Nm:return r*t*3/i.components*i.byteLength;case ui:return r*t*4/i.components*i.byteLength;case hf:return r*t*4/i.components*i.byteLength;case yl:case Ml:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Sl:case bl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case nu:case ru:return Math.max(r,16)*Math.max(t,8)/4;case eu:case iu:return Math.max(r,8)*Math.max(t,8)/2;case su:case ou:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case au:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case lu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case cu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case hu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case uu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case fu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case du:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case pu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case mu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case gu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case _u:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case xu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case vu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case yu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Mu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case wl:case Su:case bu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case km:case wu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Tu:case Eu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gb(r){switch(r){case Ki:case Im:return{byteLength:1,components:1};case na:case Lm:case sa:return{byteLength:2,components:1};case of:case af:return{byteLength:2,components:4};case hs:case sf:case Yi:return{byteLength:4,components:1};case Dm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function _b(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return d?new OffscreenCanvas(A,M):Al("canvas")}function g(A,M,H){let j=1,Q=Ct(A);if((Q.width>H||Q.height>H)&&(j=H/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let J=Math.floor(j*Q.width),ft=Math.floor(j*Q.height);u===void 0&&(u=_(J,ft));let at=M?_(J,ft):u;return at.width=J,at.height=ft,at.getContext("2d").drawImage(A,0,0,J,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+J+"x"+ft+")."),at}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){r.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(A,M,H,j,Q=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=M;if(M===r.RED&&(H===r.FLOAT&&(J=r.R32F),H===r.HALF_FLOAT&&(J=r.R16F),H===r.UNSIGNED_BYTE&&(J=r.R8)),M===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.R8UI),H===r.UNSIGNED_SHORT&&(J=r.R16UI),H===r.UNSIGNED_INT&&(J=r.R32UI),H===r.BYTE&&(J=r.R8I),H===r.SHORT&&(J=r.R16I),H===r.INT&&(J=r.R32I)),M===r.RG&&(H===r.FLOAT&&(J=r.RG32F),H===r.HALF_FLOAT&&(J=r.RG16F),H===r.UNSIGNED_BYTE&&(J=r.RG8)),M===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.RG8UI),H===r.UNSIGNED_SHORT&&(J=r.RG16UI),H===r.UNSIGNED_INT&&(J=r.RG32UI),H===r.BYTE&&(J=r.RG8I),H===r.SHORT&&(J=r.RG16I),H===r.INT&&(J=r.RG32I)),M===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.RGB8UI),H===r.UNSIGNED_SHORT&&(J=r.RGB16UI),H===r.UNSIGNED_INT&&(J=r.RGB32UI),H===r.BYTE&&(J=r.RGB8I),H===r.SHORT&&(J=r.RGB16I),H===r.INT&&(J=r.RGB32I)),M===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),H===r.UNSIGNED_INT&&(J=r.RGBA32UI),H===r.BYTE&&(J=r.RGBA8I),H===r.SHORT&&(J=r.RGBA16I),H===r.INT&&(J=r.RGBA32I)),M===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),M===r.RGBA){let ft=Q?Yl:ae.getTransfer(j);H===r.FLOAT&&(J=r.RGBA32F),H===r.HALF_FLOAT&&(J=r.RGBA16F),H===r.UNSIGNED_BYTE&&(J=ft===ge?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(A,M){let H;return A?M===null||M===hs||M===oo?H=r.DEPTH24_STENCIL8:M===Yi?H=r.DEPTH32F_STENCIL8:M===na&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===hs||M===oo?H=r.DEPTH_COMPONENT24:M===Yi?H=r.DEPTH_COMPONENT32F:M===na&&(H=r.DEPTH_COMPONENT16),H}function C(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==di&&A.minFilter!==Ti?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function E(A){let M=A.target;M.removeEventListener("dispose",E),R(M),M.isVideoTexture&&h.delete(M)}function T(A){let M=A.target;M.removeEventListener("dispose",T),v(M)}function R(A){let M=n.get(A);if(M.__webglInit===void 0)return;let H=A.source,j=f.get(H);if(j){let Q=j[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(A),Object.keys(j).length===0&&f.delete(H)}n.remove(A)}function y(A){let M=n.get(A);r.deleteTexture(M.__webglTexture);let H=A.source,j=f.get(H);delete j[M.__cacheKey],o.memory.textures--}function v(A){let M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let Q=0;Q<M.__webglFramebuffer[j].length;Q++)r.deleteFramebuffer(M.__webglFramebuffer[j][Q]);else r.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)r.deleteFramebuffer(M.__webglFramebuffer[j]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let H=A.textures;for(let j=0,Q=H.length;j<Q;j++){let J=n.get(H[j]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(H[j])}n.remove(A)}let I=0;function N(){I=0}function F(){let A=I;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),I+=1,A}function G(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function $(A,M){let H=n.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){let j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(H,A,M);return}}e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+M)}function W(A,M){let H=n.get(A);if(A.version>0&&H.__version!==A.version){X(H,A,M);return}e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+M)}function Z(A,M){let H=n.get(A);if(A.version>0&&H.__version!==A.version){X(H,A,M);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+M)}function B(A,M){let H=n.get(A);if(A.version>0&&H.__version!==A.version){et(H,A,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+M)}let tt={[jh]:r.REPEAT,[ls]:r.CLAMP_TO_EDGE,[tu]:r.MIRRORED_REPEAT},P={[di]:r.NEAREST,[tx]:r.NEAREST_MIPMAP_NEAREST,[Ja]:r.NEAREST_MIPMAP_LINEAR,[Ti]:r.LINEAR,[ph]:r.LINEAR_MIPMAP_NEAREST,[cs]:r.LINEAR_MIPMAP_LINEAR},lt={[sx]:r.NEVER,[ux]:r.ALWAYS,[ox]:r.LESS,[Vm]:r.LEQUAL,[ax]:r.EQUAL,[hx]:r.GEQUAL,[lx]:r.GREATER,[cx]:r.NOTEQUAL};function Lt(A,M){if(M.type===Yi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ti||M.magFilter===ph||M.magFilter===Ja||M.magFilter===cs||M.minFilter===Ti||M.minFilter===ph||M.minFilter===Ja||M.minFilter===cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,tt[M.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,tt[M.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,tt[M.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,P[M.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,P[M.minFilter]),M.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,lt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===di||M.minFilter!==Ja&&M.minFilter!==cs||M.type===Yi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function vt(A,M){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",E));let j=M.source,Q=f.get(j);Q===void 0&&(Q={},f.set(j,Q));let J=G(M);if(J!==A.__cacheKey){Q[J]===void 0&&(Q[J]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Q[J].usedTimes++;let ft=Q[A.__cacheKey];ft!==void 0&&(Q[A.__cacheKey].usedTimes--,ft.usedTimes===0&&y(M)),A.__cacheKey=J,A.__webglTexture=Q[J].texture}return H}function X(A,M,H){let j=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=r.TEXTURE_3D);let Q=vt(A,M),J=M.source;e.bindTexture(j,A.__webglTexture,r.TEXTURE0+H);let ft=n.get(J);if(J.version!==ft.__version||Q===!0){e.activeTexture(r.TEXTURE0+H);let at=ae.getPrimaries(ae.workingColorSpace),mt=M.colorSpace===Mr?null:ae.getPrimaries(M.colorSpace),qt=M.colorSpace===Mr||at===mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let it=g(M.image,!1,i.maxTextureSize);it=ne(M,it);let ot=s.convert(M.format,M.colorSpace),Nt=s.convert(M.type),Ut=b(M.internalFormat,ot,Nt,M.colorSpace,M.isVideoTexture);Lt(j,M);let yt,Zt=M.mipmaps,Ft=M.isVideoTexture!==!0,se=ft.__version===void 0||Q===!0,L=J.dataReady,ut=C(M,it);if(M.isDepthTexture)Ut=x(M.format===ao,M.type),se&&(Ft?e.texStorage2D(r.TEXTURE_2D,1,Ut,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,Ut,it.width,it.height,0,ot,Nt,null));else if(M.isDataTexture)if(Zt.length>0){Ft&&se&&e.texStorage2D(r.TEXTURE_2D,ut,Ut,Zt[0].width,Zt[0].height);for(let Y=0,K=Zt.length;Y<K;Y++)yt=Zt[Y],Ft?L&&e.texSubImage2D(r.TEXTURE_2D,Y,0,0,yt.width,yt.height,ot,Nt,yt.data):e.texImage2D(r.TEXTURE_2D,Y,Ut,yt.width,yt.height,0,ot,Nt,yt.data);M.generateMipmaps=!1}else Ft?(se&&e.texStorage2D(r.TEXTURE_2D,ut,Ut,it.width,it.height),L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,it.width,it.height,ot,Nt,it.data)):e.texImage2D(r.TEXTURE_2D,0,Ut,it.width,it.height,0,ot,Nt,it.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ft&&se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,Ut,Zt[0].width,Zt[0].height,it.depth);for(let Y=0,K=Zt.length;Y<K;Y++)if(yt=Zt[Y],M.format!==ui)if(ot!==null)if(Ft){if(L)if(M.layerUpdates.size>0){let ct=wm(yt.width,yt.height,M.format,M.type);for(let dt of M.layerUpdates){let zt=yt.data.subarray(dt*ct/yt.data.BYTES_PER_ELEMENT,(dt+1)*ct/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,dt,yt.width,yt.height,1,ot,zt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,yt.width,yt.height,it.depth,ot,yt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,Ut,yt.width,yt.height,it.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,yt.width,yt.height,it.depth,ot,Nt,yt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Y,Ut,yt.width,yt.height,it.depth,0,ot,Nt,yt.data)}else{Ft&&se&&e.texStorage2D(r.TEXTURE_2D,ut,Ut,Zt[0].width,Zt[0].height);for(let Y=0,K=Zt.length;Y<K;Y++)yt=Zt[Y],M.format!==ui?ot!==null?Ft?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,yt.width,yt.height,ot,yt.data):e.compressedTexImage2D(r.TEXTURE_2D,Y,Ut,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?L&&e.texSubImage2D(r.TEXTURE_2D,Y,0,0,yt.width,yt.height,ot,Nt,yt.data):e.texImage2D(r.TEXTURE_2D,Y,Ut,yt.width,yt.height,0,ot,Nt,yt.data)}else if(M.isDataArrayTexture)if(Ft){if(se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,Ut,it.width,it.height,it.depth),L)if(M.layerUpdates.size>0){let Y=wm(it.width,it.height,M.format,M.type);for(let K of M.layerUpdates){let ct=it.data.subarray(K*Y/it.data.BYTES_PER_ELEMENT,(K+1)*Y/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,ot,Nt,ct)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ot,Nt,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ut,it.width,it.height,it.depth,0,ot,Nt,it.data);else if(M.isData3DTexture)Ft?(se&&e.texStorage3D(r.TEXTURE_3D,ut,Ut,it.width,it.height,it.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ot,Nt,it.data)):e.texImage3D(r.TEXTURE_3D,0,Ut,it.width,it.height,it.depth,0,ot,Nt,it.data);else if(M.isFramebufferTexture){if(se)if(Ft)e.texStorage2D(r.TEXTURE_2D,ut,Ut,it.width,it.height);else{let Y=it.width,K=it.height;for(let ct=0;ct<ut;ct++)e.texImage2D(r.TEXTURE_2D,ct,Ut,Y,K,0,ot,Nt,null),Y>>=1,K>>=1}}else if(Zt.length>0){if(Ft&&se){let Y=Ct(Zt[0]);e.texStorage2D(r.TEXTURE_2D,ut,Ut,Y.width,Y.height)}for(let Y=0,K=Zt.length;Y<K;Y++)yt=Zt[Y],Ft?L&&e.texSubImage2D(r.TEXTURE_2D,Y,0,0,ot,Nt,yt):e.texImage2D(r.TEXTURE_2D,Y,Ut,ot,Nt,yt);M.generateMipmaps=!1}else if(Ft){if(se){let Y=Ct(it);e.texStorage2D(r.TEXTURE_2D,ut,Ut,Y.width,Y.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ot,Nt,it)}else e.texImage2D(r.TEXTURE_2D,0,Ut,ot,Nt,it);m(M)&&p(j),ft.__version=J.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function et(A,M,H){if(M.image.length!==6)return;let j=vt(A,M),Q=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+H);let J=n.get(Q);if(Q.version!==J.__version||j===!0){e.activeTexture(r.TEXTURE0+H);let ft=ae.getPrimaries(ae.workingColorSpace),at=M.colorSpace===Mr?null:ae.getPrimaries(M.colorSpace),mt=M.colorSpace===Mr||ft===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let qt=M.isCompressedTexture||M.image[0].isCompressedTexture,it=M.image[0]&&M.image[0].isDataTexture,ot=[];for(let K=0;K<6;K++)!qt&&!it?ot[K]=g(M.image[K],!0,i.maxCubemapSize):ot[K]=it?M.image[K].image:M.image[K],ot[K]=ne(M,ot[K]);let Nt=ot[0],Ut=s.convert(M.format,M.colorSpace),yt=s.convert(M.type),Zt=b(M.internalFormat,Ut,yt,M.colorSpace),Ft=M.isVideoTexture!==!0,se=J.__version===void 0||j===!0,L=Q.dataReady,ut=C(M,Nt);Lt(r.TEXTURE_CUBE_MAP,M);let Y;if(qt){Ft&&se&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ut,Zt,Nt.width,Nt.height);for(let K=0;K<6;K++){Y=ot[K].mipmaps;for(let ct=0;ct<Y.length;ct++){let dt=Y[ct];M.format!==ui?Ut!==null?Ft?L&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,0,0,dt.width,dt.height,Ut,dt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,Zt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,0,0,dt.width,dt.height,Ut,yt,dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,Zt,dt.width,dt.height,0,Ut,yt,dt.data)}}}else{if(Y=M.mipmaps,Ft&&se){Y.length>0&&ut++;let K=Ct(ot[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ut,Zt,K.width,K.height)}for(let K=0;K<6;K++)if(it){Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ot[K].width,ot[K].height,Ut,yt,ot[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Zt,ot[K].width,ot[K].height,0,Ut,yt,ot[K].data);for(let ct=0;ct<Y.length;ct++){let zt=Y[ct].image[K].image;Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,0,0,zt.width,zt.height,Ut,yt,zt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,Zt,zt.width,zt.height,0,Ut,yt,zt.data)}}else{Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ut,yt,ot[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Zt,Ut,yt,ot[K]);for(let ct=0;ct<Y.length;ct++){let dt=Y[ct];Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,0,0,Ut,yt,dt.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,Zt,Ut,yt,dt.image[K])}}}m(M)&&p(r.TEXTURE_CUBE_MAP),J.__version=Q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ht(A,M,H,j,Q,J){let ft=s.convert(H.format,H.colorSpace),at=s.convert(H.type),mt=b(H.internalFormat,ft,at,H.colorSpace),qt=n.get(M),it=n.get(H);if(it.__renderTarget=M,!qt.__hasExternalTextures){let ot=Math.max(1,M.width>>J),Nt=Math.max(1,M.height>>J);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,J,mt,ot,Nt,M.depth,0,ft,at,null):e.texImage2D(Q,J,mt,ot,Nt,0,ft,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),z(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,Q,it.__webglTexture,0,Bt(M)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,Q,it.__webglTexture,J),e.bindFramebuffer(r.FRAMEBUFFER,null)}function nt(A,M,H){if(r.bindRenderbuffer(r.RENDERBUFFER,A),M.depthBuffer){let j=M.depthTexture,Q=j&&j.isDepthTexture?j.type:null,J=x(M.stencilBuffer,Q),ft=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=Bt(M);z(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,J,M.width,M.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,at,J,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,J,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ft,r.RENDERBUFFER,A)}else{let j=M.textures;for(let Q=0;Q<j.length;Q++){let J=j[Q],ft=s.convert(J.format,J.colorSpace),at=s.convert(J.type),mt=b(J.internalFormat,ft,at,J.colorSpace),qt=Bt(M);H&&z(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,mt,M.width,M.height):z(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt,mt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,mt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function wt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(M.depthTexture);j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);let Q=j.__webglTexture,J=Bt(M);if(M.depthTexture.format===to)z(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(M.depthTexture.format===ao)z(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function At(A){let M=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let j=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){let Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=j}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");wt(M.__webglFramebuffer,A)}else if(H){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=r.createRenderbuffer(),nt(M.__webglDepthbuffer[j],A,!1);else{let Q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,J)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),nt(M.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,Q)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ht(A,M,H){let j=n.get(A);M!==void 0&&ht(j.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&At(A)}function Qt(A){let M=A.texture,H=n.get(A),j=n.get(M);A.addEventListener("dispose",T);let Q=A.textures,J=A.isWebGLCubeRenderTarget===!0,ft=Q.length>1;if(ft||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=M.version,o.memory.textures++),J){H.__webglFramebuffer=[];for(let at=0;at<6;at++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[at]=[];for(let mt=0;mt<M.mipmaps.length;mt++)H.__webglFramebuffer[at][mt]=r.createFramebuffer()}else H.__webglFramebuffer[at]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let at=0;at<M.mipmaps.length;at++)H.__webglFramebuffer[at]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(ft)for(let at=0,mt=Q.length;at<mt;at++){let qt=n.get(Q[at]);qt.__webglTexture===void 0&&(qt.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&z(A)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let at=0;at<Q.length;at++){let mt=Q[at];H.__webglColorRenderbuffer[at]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[at]);let qt=s.convert(mt.format,mt.colorSpace),it=s.convert(mt.type),ot=b(mt.internalFormat,qt,it,mt.colorSpace,A.isXRRenderTarget===!0),Nt=Bt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt,ot,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,H.__webglColorRenderbuffer[at])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),nt(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Lt(r.TEXTURE_CUBE_MAP,M);for(let at=0;at<6;at++)if(M.mipmaps&&M.mipmaps.length>0)for(let mt=0;mt<M.mipmaps.length;mt++)ht(H.__webglFramebuffer[at][mt],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,mt);else ht(H.__webglFramebuffer[at],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(M)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let at=0,mt=Q.length;at<mt;at++){let qt=Q[at],it=n.get(qt);e.bindTexture(r.TEXTURE_2D,it.__webglTexture),Lt(r.TEXTURE_2D,qt),ht(H.__webglFramebuffer,A,qt,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,0),m(qt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(at=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,j.__webglTexture),Lt(at,M),M.mipmaps&&M.mipmaps.length>0)for(let mt=0;mt<M.mipmaps.length;mt++)ht(H.__webglFramebuffer[mt],A,M,r.COLOR_ATTACHMENT0,at,mt);else ht(H.__webglFramebuffer,A,M,r.COLOR_ATTACHMENT0,at,0);m(M)&&p(at),e.unbindTexture()}A.depthBuffer&&At(A)}function Gt(A){let M=A.textures;for(let H=0,j=M.length;H<j;H++){let Q=M[H];if(m(Q)){let J=S(A),ft=n.get(Q).__webglTexture;e.bindTexture(J,ft),p(J),e.unbindTexture()}}}let Dt=[],D=[];function _e(A){if(A.samples>0){if(z(A)===!1){let M=A.textures,H=A.width,j=A.height,Q=r.COLOR_BUFFER_BIT,J=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=n.get(A),at=M.length>1;if(at)for(let mt=0;mt<M.length;mt++)e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let mt=0;mt<M.length;mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),at){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);let qt=n.get(M[mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,qt,0)}r.blitFramebuffer(0,0,H,j,0,0,H,j,Q,r.NEAREST),l===!0&&(Dt.length=0,D.length=0,Dt.push(r.COLOR_ATTACHMENT0+mt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Dt.push(J),D.push(J),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),at)for(let mt=0;mt<M.length;mt++){e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);let qt=n.get(M[mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,qt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let M=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Bt(A){return Math.min(i.maxSamples,A.samples)}function z(A){let M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Tt(A){let M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function ne(A,M){let H=A.colorSpace,j=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==ho&&H!==Mr&&(ae.getTransfer(H)===ge?(j!==ui||Q!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function Ct(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=B,this.rebindTextures=Ht,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=z}function xb(r,t){function e(n,i=Mr){let s,o=ae.getTransfer(i);if(n===Ki)return r.UNSIGNED_BYTE;if(n===of)return r.UNSIGNED_SHORT_4_4_4_4;if(n===af)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Dm)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Im)return r.BYTE;if(n===Lm)return r.SHORT;if(n===na)return r.UNSIGNED_SHORT;if(n===sf)return r.INT;if(n===hs)return r.UNSIGNED_INT;if(n===Yi)return r.FLOAT;if(n===sa)return r.HALF_FLOAT;if(n===Um)return r.ALPHA;if(n===Nm)return r.RGB;if(n===ui)return r.RGBA;if(n===Om)return r.LUMINANCE;if(n===Fm)return r.LUMINANCE_ALPHA;if(n===to)return r.DEPTH_COMPONENT;if(n===ao)return r.DEPTH_STENCIL;if(n===Bm)return r.RED;if(n===lf)return r.RED_INTEGER;if(n===zm)return r.RG;if(n===cf)return r.RG_INTEGER;if(n===hf)return r.RGBA_INTEGER;if(n===yl||n===Ml||n===Sl||n===bl)if(o===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===yl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===yl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ml)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eu||n===nu||n===iu||n===ru)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===eu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===iu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ru)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===su||n===ou||n===au)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===su||n===ou)return o===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===au)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===lu||n===cu||n===hu||n===uu||n===fu||n===du||n===pu||n===mu||n===gu||n===_u||n===xu||n===vu||n===yu||n===Mu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===lu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===du)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_u)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wl||n===Su||n===bu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===wl)return o===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Su)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===km||n===wu||n===Tu||n===Eu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===wl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===wu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Eu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===oo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var Hu=class extends An{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Qs=class extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}},vb={type:"move"},ea=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vb)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Qs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},yb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Gu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new ei,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ii({vertexShader:yb,fragmentShader:Mb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fi(new Bl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wu=class extends Tr{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,_=null,g=new Gu,m=e.getContextAttributes(),p=null,S=null,b=[],x=[],C=new pe,E=null,T=new An;T.viewport=new Fe;let R=new An;R.viewport=new Fe;let y=[T,R],v=new Hu,I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=b[X];return et===void 0&&(et=new ea,b[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=b[X];return et===void 0&&(et=new ea,b[X]=et),et.getGripSpace()},this.getHand=function(X){let et=b[X];return et===void 0&&(et=new ea,b[X]=et),et.getHandSpace()};function F(X){let et=x.indexOf(X.inputSource);if(et===-1)return;let ht=b[et];ht!==void 0&&(ht.update(X.inputSource,X.frame,c||o),ht.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",$);for(let X=0;X<b.length;X++){let et=x[X];et!==null&&(x[X]=null,b[X].disconnect(et))}I=null,N=null,g.reset(),t.setRenderTarget(p),d=null,f=null,u=null,i=null,S=null,vt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",G),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){let et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Qi(d.framebufferWidth,d.framebufferHeight,{format:ui,type:Ki,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,ht=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?ao:to,ht=m.stencil?oo:hs);let wt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(wt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Qi(f.textureWidth,f.textureHeight,{format:ui,type:Ki,depthTexture:new kl(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),vt.setContext(i),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(X){for(let et=0;et<X.removed.length;et++){let ht=X.removed[et],nt=x.indexOf(ht);nt>=0&&(x[nt]=null,b[nt].disconnect(ht))}for(let et=0;et<X.added.length;et++){let ht=X.added[et],nt=x.indexOf(ht);if(nt===-1){for(let At=0;At<b.length;At++)if(At>=x.length){x.push(ht),nt=At;break}else if(x[At]===null){x[At]=ht,nt=At;break}if(nt===-1)break}let wt=b[nt];wt&&wt.connect(ht)}}let W=new q,Z=new q;function B(X,et,ht){W.setFromMatrixPosition(et.matrixWorld),Z.setFromMatrixPosition(ht.matrixWorld);let nt=W.distanceTo(Z),wt=et.projectionMatrix.elements,At=ht.projectionMatrix.elements,Ht=wt[14]/(wt[10]-1),Qt=wt[14]/(wt[10]+1),Gt=(wt[9]+1)/wt[5],Dt=(wt[9]-1)/wt[5],D=(wt[8]-1)/wt[0],_e=(At[8]+1)/At[0],Bt=Ht*D,z=Ht*_e,Tt=nt/(-D+_e),ne=Tt*-D;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ne),X.translateZ(Tt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),wt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let Ct=Ht+Tt,A=Qt+Tt,M=Bt-ne,H=z+(nt-ne),j=Gt*Qt/A*Ct,Q=Dt*Qt/A*Ct;X.projectionMatrix.makePerspective(M,H,j,Q,Ct,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function tt(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let et=X.near,ht=X.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(ht=g.depthFar)),v.near=R.near=T.near=et,v.far=R.far=T.far=ht,(I!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),I=v.near,N=v.far),T.layers.mask=X.layers.mask|2,R.layers.mask=X.layers.mask|4,v.layers.mask=T.layers.mask|R.layers.mask;let nt=X.parent,wt=v.cameras;tt(v,nt);for(let At=0;At<wt.length;At++)tt(wt[At],nt);wt.length===2?B(v,T,R):v.projectionMatrix.copy(T.projectionMatrix),P(X,v,nt)};function P(X,et,ht){ht===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(ht.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ia*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let lt=null;function Lt(X,et){if(h=et.getViewerPose(c||o),_=et,h!==null){let ht=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let nt=!1;ht.length!==v.cameras.length&&(v.cameras.length=0,nt=!0);for(let At=0;At<ht.length;At++){let Ht=ht[At],Qt=null;if(d!==null)Qt=d.getViewport(Ht);else{let Dt=u.getViewSubImage(f,Ht);Qt=Dt.viewport,At===0&&(t.setRenderTargetTextures(S,Dt.colorTexture,f.ignoreDepthValues?void 0:Dt.depthStencilTexture),t.setRenderTarget(S))}let Gt=y[At];Gt===void 0&&(Gt=new An,Gt.layers.enable(At),Gt.viewport=new Fe,y[At]=Gt),Gt.matrix.fromArray(Ht.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Ht.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),At===0&&(v.matrix.copy(Gt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),nt===!0&&v.cameras.push(Gt)}let wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")){let At=u.getDepthInformation(ht[0]);At&&At.isValid&&At.texture&&g.init(t,At,i.renderState)}}for(let ht=0;ht<b.length;ht++){let nt=x[ht],wt=b[ht];nt!==null&&wt!==void 0&&wt.update(nt,et,c||o)}lt&&lt(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}let vt=new Xm;vt.setAnimationLoop(Lt),this.setAnimationLoop=function(X){lt=X},this.dispose=function(){}}},is=new ji,Sb=new He;function bb(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Wm(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),b=S.envMap,x=S.envMapRotation;b&&(m.envMap.value=b,is.copy(x),is.x*=-1,is.y*=-1,is.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(Sb.makeRotationFromEuler(is)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wb(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){let x=b.program;n.uniformBlockBinding(S,x)}function c(S,b){let x=i[S.id];x===void 0&&(_(S),x=h(S),i[S.id]=x,S.addEventListener("dispose",m));let C=b.program;n.updateUBOMapping(S,C);let E=t.render.frame;s[S.id]!==E&&(f(S),s[S.id]=E)}function h(S){let b=u();S.__bindingPointIndex=b;let x=r.createBuffer(),C=S.__size,E=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,C,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let b=i[S.id],x=S.uniforms,C=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let E=0,T=x.length;E<T;E++){let R=Array.isArray(x[E])?x[E]:[x[E]];for(let y=0,v=R.length;y<v;y++){let I=R[y];if(d(I,E,y,C)===!0){let N=I.__offset,F=Array.isArray(I.value)?I.value:[I.value],G=0;for(let $=0;$<F.length;$++){let W=F[$],Z=g(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,N+G,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,G),G+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,b,x,C){let E=S.value,T=b+"_"+x;if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:C[T]=E.clone(),!0;{let R=C[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return C[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function _(S){let b=S.uniforms,x=0,C=16;for(let T=0,R=b.length;T<R;T++){let y=Array.isArray(b[T])?b[T]:[b[T]];for(let v=0,I=y.length;v<I;v++){let N=y[v],F=Array.isArray(N.value)?N.value:[N.value];for(let G=0,$=F.length;G<$;G++){let W=F[G],Z=g(W),B=x%C,tt=B%Z.boundary,P=B+tt;x+=tt,P!==0&&C-P<Z.storage&&(x+=C-P),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=Z.storage}}}let E=x%C;return E>0&&(x+=C-E),S.__size=x,S.__cache={},this}function g(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){let b=S.target;b.removeEventListener("dispose",m);let x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function p(){for(let S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var Vl=class{constructor(t={}){let{canvas:e=Cx(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let _=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,S=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this.toneMapping=br,this.toneMappingExposure=1;let x=this,C=!1,E=0,T=0,R=null,y=-1,v=null,I=new Fe,N=new Fe,F=null,G=new oe(0),$=0,W=e.width,Z=e.height,B=1,tt=null,P=null,lt=new Fe(0,0,W,Z),Lt=new Fe(0,0,W,Z),vt=!1,X=new Fl,et=!1,ht=!1,nt=new He,wt=new He,At=new q,Ht=new Fe,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function Dt(){return R===null?B:1}let D=n;function _e(w,U){return e.getContext(w,U)}try{let w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rf}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",dt,!1),D===null){let U="webgl2";if(D=_e(U,w),D===null)throw _e(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Bt,z,Tt,ne,Ct,A,M,H,j,Q,J,ft,at,mt,qt,it,ot,Nt,Ut,yt,Zt,Ft,se,L;function ut(){Bt=new kM(D),Bt.init(),Ft=new xb(D,Bt),z=new UM(D,Bt,t,Ft),Tt=new mb(D,Bt),z.reverseDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),ne=new GM(D),Ct=new nb,A=new _b(D,Bt,Tt,Ct,z,Ft,ne),M=new OM(x),H=new zM(x),j=new Jx(D),se=new LM(D,j),Q=new VM(D,j,ne,se),J=new XM(D,Q,j,ne),Ut=new WM(D,z,A),it=new NM(Ct),ft=new eb(x,M,H,Bt,z,se,it),at=new bb(x,Ct),mt=new rb,qt=new hb(Bt),Nt=new IM(x,M,H,Tt,J,d,l),ot=new db(x,J,z),L=new wb(D,ne,z,Tt),yt=new DM(D,Bt,ne),Zt=new HM(D,Bt,ne),ne.programs=ft.programs,x.capabilities=z,x.extensions=Bt,x.properties=Ct,x.renderLists=mt,x.shadowMap=ot,x.state=Tt,x.info=ne}ut();let Y=new Wu(x,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=Bt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Bt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(W,Z,!1))},this.getSize=function(w){return w.set(W,Z)},this.setSize=function(w,U,k=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,Z=U,e.width=Math.floor(w*B),e.height=Math.floor(U*B),k===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(W*B,Z*B).floor()},this.setDrawingBufferSize=function(w,U,k){W=w,Z=U,B=k,e.width=Math.floor(w*k),e.height=Math.floor(U*k),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(lt)},this.setViewport=function(w,U,k,V){w.isVector4?lt.set(w.x,w.y,w.z,w.w):lt.set(w,U,k,V),Tt.viewport(I.copy(lt).multiplyScalar(B).round())},this.getScissor=function(w){return w.copy(Lt)},this.setScissor=function(w,U,k,V){w.isVector4?Lt.set(w.x,w.y,w.z,w.w):Lt.set(w,U,k,V),Tt.scissor(N.copy(Lt).multiplyScalar(B).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(w){Tt.setScissorTest(vt=w)},this.setOpaqueSort=function(w){tt=w},this.setTransparentSort=function(w){P=w},this.getClearColor=function(w){return w.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(w=!0,U=!0,k=!0){let V=0;if(w){let O=!1;if(R!==null){let rt=R.texture.format;O=rt===hf||rt===cf||rt===lf}if(O){let rt=R.texture.type,st=rt===Ki||rt===hs||rt===na||rt===oo||rt===of||rt===af,pt=Nt.getClearColor(),Mt=Nt.getClearAlpha(),kt=pt.r,Xt=pt.g,bt=pt.b;st?(_[0]=kt,_[1]=Xt,_[2]=bt,_[3]=Mt,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=kt,g[1]=Xt,g[2]=bt,g[3]=Mt,D.clearBufferiv(D.COLOR,0,g))}else V|=D.COLOR_BUFFER_BIT}U&&(V|=D.DEPTH_BUFFER_BIT),k&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),mt.dispose(),qt.dispose(),Ct.dispose(),M.dispose(),H.dispose(),J.dispose(),se.dispose(),L.dispose(),ft.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",gt),Y.removeEventListener("sessionend",Wt),Rt.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let w=ne.autoReset,U=ot.enabled,k=ot.autoUpdate,V=ot.needsUpdate,O=ot.type;ut(),ne.autoReset=w,ot.enabled=U,ot.autoUpdate=k,ot.needsUpdate=V,ot.type=O}function dt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function zt(w){let U=w.target;U.removeEventListener("dispose",zt),le(U)}function le(w){Ie(w),Ct.remove(w)}function Ie(w){let U=Ct.get(w).programs;U!==void 0&&(U.forEach(function(k){ft.releaseProgram(k)}),w.isShaderMaterial&&ft.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,k,V,O,rt){U===null&&(U=Qt);let st=O.isMesh&&O.matrixWorld.determinant()<0,pt=Nn(w,U,k,V,O);Tt.setMaterial(V,st);let Mt=k.index,kt=1;if(V.wireframe===!0){if(Mt=Q.getWireframeAttribute(k),Mt===void 0)return;kt=2}let Xt=k.drawRange,bt=k.attributes.position,Yt=Xt.start*kt,ce=(Xt.start+Xt.count)*kt;rt!==null&&(Yt=Math.max(Yt,rt.start*kt),ce=Math.min(ce,(rt.start+rt.count)*kt)),Mt!==null?(Yt=Math.max(Yt,0),ce=Math.min(ce,Mt.count)):bt!=null&&(Yt=Math.max(Yt,0),ce=Math.min(ce,bt.count));let ue=ce-Yt;if(ue<0||ue===1/0)return;se.setup(O,V,pt,k,Mt);let Be,fe=yt;if(Mt!==null&&(Be=j.get(Mt),fe=Zt,fe.setIndex(Be)),O.isMesh)V.wireframe===!0?(Tt.setLineWidth(V.wireframeLinewidth*Dt()),fe.setMode(D.LINES)):fe.setMode(D.TRIANGLES);else if(O.isLine){let Pt=V.linewidth;Pt===void 0&&(Pt=1),Tt.setLineWidth(Pt*Dt()),O.isLineSegments?fe.setMode(D.LINES):O.isLineLoop?fe.setMode(D.LINE_LOOP):fe.setMode(D.LINE_STRIP)}else O.isPoints?fe.setMode(D.POINTS):O.isSprite&&fe.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)fe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))fe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Pt=O._multiDrawStarts,Ci=O._multiDrawCounts,de=O._multiDrawCount,ri=Mt?j.get(Mt).bytesPerElement:1,ms=Ct.get(V).currentProgram.getUniforms();for(let On=0;On<de;On++)ms.setValue(D,"_gl_DrawID",On),fe.render(Pt[On]/ri,Ci[On])}else if(O.isInstancedMesh)fe.renderInstances(Yt,ue,O.count);else if(k.isInstancedBufferGeometry){let Pt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ci=Math.min(k.instanceCount,Pt);fe.renderInstances(Yt,ue,Ci)}else fe.render(Yt,ue)};function xt(w,U,k){w.transparent===!0&&w.side===qi&&w.forceSinglePass===!1?(w.side=Un,w.needsUpdate=!0,xe(w,U,k),w.side=wr,w.needsUpdate=!0,xe(w,U,k),w.side=qi):xe(w,U,k)}this.compile=function(w,U,k=null){k===null&&(k=w),p=qt.get(k),p.init(U),b.push(p),k.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==k&&w.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let V=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let rt=O.material;if(rt)if(Array.isArray(rt))for(let st=0;st<rt.length;st++){let pt=rt[st];xt(pt,k,O),V.add(pt)}else xt(rt,k,O),V.add(rt)}),b.pop(),p=null,V},this.compileAsync=function(w,U,k=null){let V=this.compile(w,U,k);return new Promise(O=>{function rt(){if(V.forEach(function(st){Ct.get(st).currentProgram.isReady()&&V.delete(st)}),V.size===0){O(w);return}setTimeout(rt,10)}Bt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Et=null;function $t(w){Et&&Et(w)}function gt(){Rt.stop()}function Wt(){Rt.start()}let Rt=new Xm;Rt.setAnimationLoop($t),typeof self!="undefined"&&Rt.setContext(self),this.setAnimationLoop=function(w){Et=w,Y.setAnimationLoop(w),w===null?Rt.stop():Rt.start()},Y.addEventListener("sessionstart",gt),Y.addEventListener("sessionend",Wt),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,U,R),p=qt.get(w,b.length),p.init(U),b.push(p),wt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(wt),ht=this.localClippingEnabled,et=it.init(this.clippingPlanes,ht),m=mt.get(w,S.length),m.init(),S.push(m),Y.enabled===!0&&Y.isPresenting===!0){let rt=x.xr.getDepthSensingMesh();rt!==null&&Vt(rt,U,-1/0,x.sortObjects)}Vt(w,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(tt,P),Gt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Gt&&Nt.addToRenderList(m,w),this.info.render.frame++,et===!0&&it.beginShadows();let k=p.state.shadowsArray;ot.render(k,w,U),et===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,O=m.transmissive;if(p.setupLights(),U.isArrayCamera){let rt=U.cameras;if(O.length>0)for(let st=0,pt=rt.length;st<pt;st++){let Mt=rt[st];jt(V,O,w,Mt)}Gt&&Nt.render(w);for(let st=0,pt=rt.length;st<pt;st++){let Mt=rt[st];Ne(m,w,Mt,Mt.viewport)}}else O.length>0&&jt(V,O,w,U),Gt&&Nt.render(w),Ne(m,w,U);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(x,w,U),se.resetDefaultState(),y=-1,v=null,b.pop(),b.length>0?(p=b[b.length-1],et===!0&&it.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Vt(w,U,k,V){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){V&&Ht.setFromMatrixPosition(w.matrixWorld).applyMatrix4(wt);let st=J.update(w),pt=w.material;pt.visible&&m.push(w,st,pt,k,Ht.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){let st=J.update(w),pt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ht.copy(w.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),Ht.copy(st.boundingSphere.center)),Ht.applyMatrix4(w.matrixWorld).applyMatrix4(wt)),Array.isArray(pt)){let Mt=st.groups;for(let kt=0,Xt=Mt.length;kt<Xt;kt++){let bt=Mt[kt],Yt=pt[bt.materialIndex];Yt&&Yt.visible&&m.push(w,st,Yt,k,Ht.z,bt)}}else pt.visible&&m.push(w,st,pt,k,Ht.z,null)}}let rt=w.children;for(let st=0,pt=rt.length;st<pt;st++)Vt(rt[st],U,k,V)}function Ne(w,U,k,V){let O=w.opaque,rt=w.transmissive,st=w.transparent;p.setupLightsView(k),et===!0&&it.setGlobalState(x.clippingPlanes,k),V&&Tt.viewport(I.copy(V)),O.length>0&&Me(O,U,k),rt.length>0&&Me(rt,U,k),st.length>0&&Me(st,U,k),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function jt(w,U,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Qi(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?sa:Ki,minFilter:cs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));let rt=p.state.transmissionRenderTarget[V.id],st=V.viewport||I;rt.setSize(st.z,st.w);let pt=x.getRenderTarget();x.setRenderTarget(rt),x.getClearColor(G),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),Gt&&Nt.render(k);let Mt=x.toneMapping;x.toneMapping=br;let kt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),et===!0&&it.setGlobalState(x.clippingPlanes,V),Me(w,k,V),A.updateMultisampleRenderTarget(rt),A.updateRenderTargetMipmap(rt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let bt=0,Yt=U.length;bt<Yt;bt++){let ce=U[bt],ue=ce.object,Be=ce.geometry,fe=ce.material,Pt=ce.group;if(fe.side===qi&&ue.layers.test(V.layers)){let Ci=fe.side;fe.side=Un,fe.needsUpdate=!0,Ge(ue,k,V,Be,fe,Pt),fe.side=Ci,fe.needsUpdate=!0,Xt=!0}}Xt===!0&&(A.updateMultisampleRenderTarget(rt),A.updateRenderTargetMipmap(rt))}x.setRenderTarget(pt),x.setClearColor(G,$),kt!==void 0&&(V.viewport=kt),x.toneMapping=Mt}function Me(w,U,k){let V=U.isScene===!0?U.overrideMaterial:null;for(let O=0,rt=w.length;O<rt;O++){let st=w[O],pt=st.object,Mt=st.geometry,kt=V===null?st.material:V,Xt=st.group;pt.layers.test(k.layers)&&Ge(pt,U,k,Mt,kt,Xt)}}function Ge(w,U,k,V,O,rt){w.onBeforeRender(x,U,k,V,O,rt),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(x,U,k,V,w,rt),O.transparent===!0&&O.side===qi&&O.forceSinglePass===!1?(O.side=Un,O.needsUpdate=!0,x.renderBufferDirect(k,U,V,O,w,rt),O.side=wr,O.needsUpdate=!0,x.renderBufferDirect(k,U,V,O,w,rt),O.side=qi):x.renderBufferDirect(k,U,V,O,w,rt),w.onAfterRender(x,U,k,V,O,rt)}function xe(w,U,k){U.isScene!==!0&&(U=Qt);let V=Ct.get(w),O=p.state.lights,rt=p.state.shadowsArray,st=O.state.version,pt=ft.getParameters(w,O.state,rt,U,k),Mt=ft.getProgramCacheKey(pt),kt=V.programs;V.environment=w.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(w.isMeshStandardMaterial?H:M).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,kt===void 0&&(w.addEventListener("dispose",zt),kt=new Map,V.programs=kt);let Xt=kt.get(Mt);if(Xt!==void 0){if(V.currentProgram===Xt&&V.lightsStateVersion===st)return he(w,pt),Xt}else pt.uniforms=ft.getUniforms(w),w.onBeforeCompile(pt,x),Xt=ft.acquireProgram(pt,Mt),kt.set(Mt,Xt),V.uniforms=pt.uniforms;let bt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(bt.clippingPlanes=it.uniform),he(w,pt),V.needsLights=pn(w),V.lightsStateVersion=st,V.needsLights&&(bt.ambientLightColor.value=O.state.ambient,bt.lightProbe.value=O.state.probe,bt.directionalLights.value=O.state.directional,bt.directionalLightShadows.value=O.state.directionalShadow,bt.spotLights.value=O.state.spot,bt.spotLightShadows.value=O.state.spotShadow,bt.rectAreaLights.value=O.state.rectArea,bt.ltc_1.value=O.state.rectAreaLTC1,bt.ltc_2.value=O.state.rectAreaLTC2,bt.pointLights.value=O.state.point,bt.pointLightShadows.value=O.state.pointShadow,bt.hemisphereLights.value=O.state.hemi,bt.directionalShadowMap.value=O.state.directionalShadowMap,bt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,bt.spotShadowMap.value=O.state.spotShadowMap,bt.spotLightMatrix.value=O.state.spotLightMatrix,bt.spotLightMap.value=O.state.spotLightMap,bt.pointShadowMap.value=O.state.pointShadowMap,bt.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Xt,V.uniformsList=null,Xt}function ve(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=no.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function he(w,U){let k=Ct.get(w);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Nn(w,U,k,V,O){U.isScene!==!0&&(U=Qt),A.resetTextureUnits();let rt=U.fog,st=V.isMeshStandardMaterial?U.environment:null,pt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ho,Mt=(V.isMeshStandardMaterial?H:M).get(V.envMap||st),kt=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Xt=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),bt=!!k.morphAttributes.position,Yt=!!k.morphAttributes.normal,ce=!!k.morphAttributes.color,ue=br;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ue=x.toneMapping);let Be=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,fe=Be!==void 0?Be.length:0,Pt=Ct.get(V),Ci=p.state.lights;if(et===!0&&(ht===!0||w!==v)){let Xn=w===v&&V.id===y;it.setState(V,w,Xn)}let de=!1;V.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Ci.state.version||Pt.outputColorSpace!==pt||O.isBatchedMesh&&Pt.batching===!1||!O.isBatchedMesh&&Pt.batching===!0||O.isBatchedMesh&&Pt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Pt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Pt.instancing===!1||!O.isInstancedMesh&&Pt.instancing===!0||O.isSkinnedMesh&&Pt.skinning===!1||!O.isSkinnedMesh&&Pt.skinning===!0||O.isInstancedMesh&&Pt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Pt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Pt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Pt.instancingMorph===!1&&O.morphTexture!==null||Pt.envMap!==Mt||V.fog===!0&&Pt.fog!==rt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==it.numPlanes||Pt.numIntersection!==it.numIntersection)||Pt.vertexAlphas!==kt||Pt.vertexTangents!==Xt||Pt.morphTargets!==bt||Pt.morphNormals!==Yt||Pt.morphColors!==ce||Pt.toneMapping!==ue||Pt.morphTargetsCount!==fe)&&(de=!0):(de=!0,Pt.__version=V.version);let ri=Pt.currentProgram;de===!0&&(ri=xe(V,U,O));let ms=!1,On=!1,po=!1,we=ri.getUniforms(),gi=Pt.uniforms;if(Tt.useProgram(ri.program)&&(ms=!0,On=!0,po=!0),V.id!==y&&(y=V.id,On=!0),ms||v!==w){Tt.buffers.depth.getReversed()?(nt.copy(w.projectionMatrix),Px(nt),Ix(nt),we.setValue(D,"projectionMatrix",nt)):we.setValue(D,"projectionMatrix",w.projectionMatrix),we.setValue(D,"viewMatrix",w.matrixWorldInverse);let tr=we.map.cameraPosition;tr!==void 0&&tr.setValue(D,At.setFromMatrixPosition(w.matrixWorld)),z.logarithmicDepthBuffer&&we.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&we.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,On=!0,po=!0)}if(O.isSkinnedMesh){we.setOptional(D,O,"bindMatrix"),we.setOptional(D,O,"bindMatrixInverse");let Xn=O.skeleton;Xn&&(Xn.boneTexture===null&&Xn.computeBoneTexture(),we.setValue(D,"boneTexture",Xn.boneTexture,A))}O.isBatchedMesh&&(we.setOptional(D,O,"batchingTexture"),we.setValue(D,"batchingTexture",O._matricesTexture,A),we.setOptional(D,O,"batchingIdTexture"),we.setValue(D,"batchingIdTexture",O._indirectTexture,A),we.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&we.setValue(D,"batchingColorTexture",O._colorsTexture,A));let mo=k.morphAttributes;if((mo.position!==void 0||mo.normal!==void 0||mo.color!==void 0)&&Ut.update(O,k,ri),(On||Pt.receiveShadow!==O.receiveShadow)&&(Pt.receiveShadow=O.receiveShadow,we.setValue(D,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(gi.envMap.value=Mt,gi.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(gi.envMapIntensity.value=U.environmentIntensity),On&&(we.setValue(D,"toneMappingExposure",x.toneMappingExposure),Pt.needsLights&&be(gi,po),rt&&V.fog===!0&&at.refreshFogUniforms(gi,rt),at.refreshMaterialUniforms(gi,V,B,Z,p.state.transmissionRenderTarget[w.id]),no.upload(D,ve(Pt),gi,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(no.upload(D,ve(Pt),gi,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&we.setValue(D,"center",O.center),we.setValue(D,"modelViewMatrix",O.modelViewMatrix),we.setValue(D,"normalMatrix",O.normalMatrix),we.setValue(D,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Xn=V.uniformsGroups;for(let tr=0,er=Xn.length;tr<er;tr++){let _f=Xn[tr];L.update(_f,ri),L.bind(_f,ri)}}return ri}function be(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function pn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,U,k){Ct.get(w.texture).__webglTexture=U,Ct.get(w.depthTexture).__webglTexture=k;let V=Ct.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){let k=Ct.get(w);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,k=0){R=w,E=U,T=k;let V=!0,O=null,rt=!1,st=!1;if(w){let Mt=Ct.get(w);if(Mt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(Mt.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Mt.__hasExternalTextures)A.rebindTextures(w,Ct.get(w.texture).__webglTexture,Ct.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let bt=w.depthTexture;if(Mt.__boundDepthTexture!==bt){if(bt!==null&&Ct.has(bt)&&(w.width!==bt.image.width||w.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let kt=w.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(st=!0);let Xt=Ct.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xt[U])?O=Xt[U][k]:O=Xt[U],rt=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?O=Ct.get(w).__webglMultisampledFramebuffer:Array.isArray(Xt)?O=Xt[k]:O=Xt,I.copy(w.viewport),N.copy(w.scissor),F=w.scissorTest}else I.copy(lt).multiplyScalar(B).floor(),N.copy(Lt).multiplyScalar(B).floor(),F=vt;if(Tt.bindFramebuffer(D.FRAMEBUFFER,O)&&V&&Tt.drawBuffers(w,O),Tt.viewport(I),Tt.scissor(N),Tt.setScissorTest(F),rt){let Mt=Ct.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,k)}else if(st){let Mt=Ct.get(w.texture),kt=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.__webglTexture,k||0,kt)}y=-1},this.readRenderTargetPixels=function(w,U,k,V,O,rt,st){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Ct.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&st!==void 0&&(pt=pt[st]),pt){Tt.bindFramebuffer(D.FRAMEBUFFER,pt);try{let Mt=w.texture,kt=Mt.format,Xt=Mt.type;if(!z.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-V&&k>=0&&k<=w.height-O&&D.readPixels(U,k,V,O,Ft.convert(kt),Ft.convert(Xt),rt)}finally{let Mt=R!==null?Ct.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(w,U,k,V,O,rt,st){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Ct.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&st!==void 0&&(pt=pt[st]),pt){let Mt=w.texture,kt=Mt.format,Xt=Mt.type;if(!z.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-V&&k>=0&&k<=w.height-O){Tt.bindFramebuffer(D.FRAMEBUFFER,pt);let bt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,bt),D.bufferData(D.PIXEL_PACK_BUFFER,rt.byteLength,D.STREAM_READ),D.readPixels(U,k,V,O,Ft.convert(kt),Ft.convert(Xt),0);let Yt=R!==null?Ct.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,Yt);let ce=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Rx(D,ce,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,bt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,rt),D.deleteBuffer(bt),D.deleteSync(ce),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,k=0){w.isTexture!==!0&&(Ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);let V=Math.pow(2,-k),O=Math.floor(w.image.width*V),rt=Math.floor(w.image.height*V),st=U!==null?U.x:0,pt=U!==null?U.y:0;A.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,st,pt,O,rt),Tt.unbindTexture()},this.copyTextureToTexture=function(w,U,k=null,V=null,O=0){w.isTexture!==!0&&(Ko("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],U=arguments[2],O=arguments[3]||0,k=null);let rt,st,pt,Mt,kt,Xt,bt,Yt,ce,ue=w.isCompressedTexture?w.mipmaps[O]:w.image;k!==null?(rt=k.max.x-k.min.x,st=k.max.y-k.min.y,pt=k.isBox3?k.max.z-k.min.z:1,Mt=k.min.x,kt=k.min.y,Xt=k.isBox3?k.min.z:0):(rt=ue.width,st=ue.height,pt=ue.depth||1,Mt=0,kt=0,Xt=0),V!==null?(bt=V.x,Yt=V.y,ce=V.z):(bt=0,Yt=0,ce=0);let Be=Ft.convert(U.format),fe=Ft.convert(U.type),Pt;U.isData3DTexture?(A.setTexture3D(U,0),Pt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Pt=D.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Pt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let Ci=D.getParameter(D.UNPACK_ROW_LENGTH),de=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ri=D.getParameter(D.UNPACK_SKIP_PIXELS),ms=D.getParameter(D.UNPACK_SKIP_ROWS),On=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ue.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ue.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Mt),D.pixelStorei(D.UNPACK_SKIP_ROWS,kt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xt);let po=w.isDataArrayTexture||w.isData3DTexture,we=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let gi=Ct.get(w),mo=Ct.get(U),Xn=Ct.get(gi.__renderTarget),tr=Ct.get(mo.__renderTarget);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,Xn.__webglFramebuffer),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,tr.__webglFramebuffer);for(let er=0;er<pt;er++)po&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ct.get(w).__webglTexture,O,Xt+er),w.isDepthTexture?(we&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ct.get(U).__webglTexture,O,ce+er),D.blitFramebuffer(Mt,kt,rt,st,bt,Yt,rt,st,D.DEPTH_BUFFER_BIT,D.NEAREST)):we?D.copyTexSubImage3D(Pt,O,bt,Yt,ce+er,Mt,kt,rt,st):D.copyTexSubImage2D(Pt,O,bt,Yt,ce+er,Mt,kt,rt,st);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else we?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Pt,O,bt,Yt,ce,rt,st,pt,Be,fe,ue.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Pt,O,bt,Yt,ce,rt,st,pt,Be,ue.data):D.texSubImage3D(Pt,O,bt,Yt,ce,rt,st,pt,Be,fe,ue):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,bt,Yt,rt,st,Be,fe,ue.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,bt,Yt,ue.width,ue.height,Be,ue.data):D.texSubImage2D(D.TEXTURE_2D,O,bt,Yt,rt,st,Be,fe,ue);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ci),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,de),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ri),D.pixelStorei(D.UNPACK_SKIP_ROWS,ms),D.pixelStorei(D.UNPACK_SKIP_IMAGES,On),O===0&&U.generateMipmaps&&D.generateMipmap(Pt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(w,U,k=null,V=null,O=0){return w.isTexture!==!0&&(Ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,V=arguments[1]||null,w=arguments[2],U=arguments[3],O=arguments[4]||0),Ko('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,k,V,O)},this.initRenderTarget=function(w){Ct.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Tt.unbindTexture()},this.resetState=function(){E=0,T=0,R=null,Tt.reset(),se.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var Hl=class extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Xu=class extends fs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Tm=new He,qu=new Pl,_l=new Ar,xl=new q,Gl=class extends ni{constructor(t=new Ei,e=new Xu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_l.copy(n.boundingSphere),_l.applyMatrix4(i),_l.radius+=s,t.ray.intersectsSphere(_l)===!1)return;Tm.copy(i).invert(),qu.copy(t.ray).applyMatrix4(Tm);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){let m=c.getX(_);xl.fromBufferAttribute(u,m),Em(xl,m,l,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let _=f,g=d;_<g;_++)xl.fromBufferAttribute(u,_),Em(xl,_,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Em(r,t,e,n,i,s,o){let a=qu.distanceSqToPoint(r);if(a<e){let l=new q;qu.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}function vl(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Tb(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var co=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yu=class extends co{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cp,endingEnd:Cp}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rp:s=t,a=2*e-n;break;case Pp:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rp:o=t,l=2*n-e;break;case Pp:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-e)/(i-e),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,S=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,b=(-1-d)*m+(1.5+d)*g+.5*_,x=d*m-d*g;for(let C=0;C!==a;++C)s[C]=p*o[h+C]+S*o[c+C]+b*o[l+C]+x*o[u+C];return s}},Zu=class extends co{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},$u=class extends co{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},pi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vl(e,this.TimeBufferType),this.values=vl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:vl(t.times,Array),values:vl(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $u(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Zu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yu(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Tl:e=this.InterpolantFactoryMethodDiscrete;break;case Au:e=this.InterpolantFactoryMethodLinear;break;case mh:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tl;case this.InterpolantFactoryMethodLinear:return Au;case this.InterpolantFactoryMethodSmooth:return mh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Tb(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===mh,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let _=0;_!==n;++_){let g=e[u+_];if(g!==e[f+_]||g!==e[d+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=Au;var ds=class extends pi{constructor(t,e,n){super(t,e,n)}};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Tl;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Ju=class extends pi{};Ju.prototype.ValueTypeName="color";var Ku=class extends pi{};Ku.prototype.ValueTypeName="number";var Qu=class extends co{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Er.slerpFlat(s,0,o,c-a,o,c,l);return s}},Wl=class extends pi{InterpolantFactoryMethodLinear(t){return new Qu(this.times,this.values,this.getValueSize(),t)}};Wl.prototype.ValueTypeName="quaternion";Wl.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends pi{constructor(t,e,n){super(t,e,n)}};ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Tl;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var ju=class extends pi{};ju.prototype.ValueTypeName="vector";var tf=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],_=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null}}},Eb=new tf,ef=class{constructor(t){this.manager=t!==void 0?t:Eb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ef.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xl=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Am(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Am();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Am(){return performance.now()}var pf="\\[\\]\\.:\\/",Ab=new RegExp("["+pf+"]","g"),mf="[^"+pf+"]",Cb="[^"+pf.replace("\\.","")+"]",Rb=/((?:WC+[\/:])*)/.source.replace("WC",mf),Pb=/(WCOD+)?/.source.replace("WCOD",Cb),Ib=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mf),Lb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mf),Db=new RegExp("^"+Rb+Pb+Ib+Lb+"$"),Ub=["material","materials","bones","map"],nf=class{constructor(t,e,n){let i=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ab,"")}static parseTrackName(t){let e=Db.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Ub.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=nf;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pw=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rf}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rf);var Ob=`
attribute vec3 aInicio; attribute vec3 aDir; attribute float aSemente; attribute float aTamanho;
uniform float uPixelRatio, uAlpha, uConverge, uProgresso, uTempo, uEscala, uRaio, uForca;
uniform vec2 uMouse;
varying float vSemente; varying float vAlpha;
void main() {
  float s = aSemente;
  // Montagem: varre da esquerda para a direita, com sorteio por part\xEDcula,
  // e cada ponto chega numa espiral (gira ao redor do centro enquanto converge).
  float ordem = clamp(position.x / 20.0 + 0.5, 0.0, 1.0);
  float t = clamp(uConverge * 1.7 - ordem * 0.5 - s * 0.2, 0.0, 1.0);
  t = t * t * (3.0 - 2.0 * t);
  float ang = (1.0 - t) * 1.6; float ca = cos(ang), sa = sin(ang);
  vec3 ini = aInicio; ini.xy = vec2(ini.x * ca - ini.y * sa, ini.x * sa + ini.y * ca);
  vec3 p = mix(ini, position, t);
  // Vida pr\xF3pria: deriva org\xE2nica em duas oitavas; ~8% s\xE3o p\xF3 solto, com amplitude bem maior.
  float livre = step(0.92, fract(s * 13.7));
  float amp = mix(0.055, 0.9, livre) * t;
  p.xy += vec2(sin(uTempo * 0.9 + s * 40.0) + 0.5 * sin(uTempo * 1.7 + s * 91.0),
               cos(uTempo * 0.8 + s * 33.0) + 0.5 * cos(uTempo * 1.4 + s * 77.0)) * amp;
  p.z += sin(uTempo * 0.6 + s * 20.0) * 0.2 * t;
  // Mouse: \xE1rea grande, queda suave; as part\xEDculas abrem caminho e voltam.
  vec2 d = p.xy - uMouse; float dist = length(d);
  float f = 1.0 - smoothstep(0.0, uRaio, dist);
  p.xy += (d / max(dist, 0.001)) * f * f * uRaio * (0.32 + 0.36 * fract(s * 5.1)) * uForca * t;
  p += aDir * uProgresso * 10.0;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aTamanho * uPixelRatio * (uEscala / -mv.z) * mix(1.0, 1.4, livre);
  vSemente = s;
  vAlpha = uAlpha * (0.55 + 0.45 * fract(s * 7.31)) * (0.78 + 0.22 * sin(uTempo * 1.6 + s * 60.0)) * mix(1.0, 0.55, livre);
}`,Fb=`
precision mediump float; uniform vec3 uCorA, uCorB; varying float vSemente; varying float vAlpha;
void main() {
  float r = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.12, r) * vAlpha;
  if (a < 0.02) discard;
  gl_FragColor = vec4(mix(uCorA, uCorB, step(0.74, vSemente)), a);
}`;function Bb(r,t,e){let n='"Semplicita Pro", Jost, sans-serif',i=document.createElement("canvas").getContext("2d"),s=100,o=1;r.forEach(f=>{i.font=`${f.italico?"italic ":""}300 ${s}px ${n}`,o=Math.max(o,i.measureText(f.t).width)}),s=Math.floor(s*(t/o));let a=Math.round(s*1.08),l=t,c=a*r.length+Math.round(s*.2),h=document.createElement("canvas");h.width=l,h.height=c;let u=h.getContext("2d",{willReadFrequently:!0});return u.fillStyle="#fff",u.textBaseline="alphabetic",r.forEach((f,d)=>{u.font=`${f.italico?"italic ":""}300 ${s}px ${n}`,u.fillText(f.t,0,Math.round(s*.92)+d*a)}),zb(u,l,c,e)}function zb(r,t,e,n){let i=r.getImageData(0,0,t,e).data,s=[];for(let o=0;o<e;o++)for(let a=0;a<t;a++)i[(o*t+a)*4+3]>60&&s.push([(a-t/2+Math.random()-.5)/t,-(o-e/2+Math.random()-.5)/t]);if(s.length>n){let o=n/s.length;return s.filter(()=>Math.random()<o)}return s}function kb(r,t,e){let n=t/r.naturalWidth,i=Math.round(r.naturalWidth*n),s=Math.round(r.naturalHeight*n),o=document.createElement("canvas");o.width=i,o.height=s;let a=o.getContext("2d",{willReadFrequently:!0});a.drawImage(r,0,0,i,s);let l=a.getImageData(0,0,i,s).data,c=[];for(let h=0;h<s;h++)for(let u=0;u<i;u++)l[(h*i+u)*4+3]>60&&c.push([(u-i/2+Math.random()-.5)/i,-(h-s/2+Math.random()-.5)/i]);if(c.length>e){let h=e/c.length;return c.filter(()=>Math.random()<h)}return c}function Jm(r){let{hero:t,canvas:e,fallback:n,fonte:i}=r;if(!(()=>{try{let u=document.createElement("canvas");return!!(u.getContext("webgl2")||u.getContext("webgl"))}catch{return!1}})()||Qe)return e.hidden=!0,n&&(n.hidden=!1),null;let o={converge:0,progresso:0},a=!0,l=new Image;if(!r.texto){let u=new XMLSerializer().serializeToString(i).replace(' hidden=""',"");l.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(u)}let c=!1,h=()=>{if(c)return;c=!0;let u=window.innerWidth<900,[f,d]=u?r.amostra.mobile:r.amostra.desktop,_=r.texto?Bb(r.texto,f,d):kb(l,f,d),g=_.length,m=20,p=new Float32Array(g*3),S=new Float32Array(g*3),b=new Float32Array(g),x=new Float32Array(g),C=new Float32Array(g*3);for(let vt=0;vt<g;vt++){p[vt*3]=_[vt][0]*m,p[vt*3+1]=_[vt][1]*m,p[vt*3+2]=(Math.random()-.5)*.3,S[vt*3]=(Math.random()-.5)*m*1.7,S[vt*3+1]=(Math.random()-.5)*m*1,S[vt*3+2]=(Math.random()-.5)*8-2,b[vt]=Math.random(),x[vt]=.4+Math.random()*.45;let X=S[vt*3]-p[vt*3],et=S[vt*3+1]-p[vt*3+1]+4,ht=S[vt*3+2],nt=Math.hypot(X,et,ht)||1;C[vt*3]=X/nt,C[vt*3+1]=et/nt,C[vt*3+2]=ht/nt}let E=new Ei;E.setAttribute("position",new tn(p,3)),E.setAttribute("aInicio",new tn(S,3)),E.setAttribute("aDir",new tn(C,3)),E.setAttribute("aSemente",new tn(b,1)),E.setAttribute("aTamanho",new tn(x,1)),E.boundingSphere=new Ar(new q(0,0,0),m*3);let T=Math.min(devicePixelRatio||1,2),R={uPixelRatio:{value:T},uAlpha:{value:.6},uConverge:{value:0},uProgresso:{value:0},uTempo:{value:0},uEscala:{value:40},uRaio:{value:4},uForca:{value:0},uMouse:{value:new pe(1e6,1e6)},uCorA:{value:new oe("#F2E8D9")},uCorB:{value:new oe("#B8997D")}},y=new ii({vertexShader:Ob,fragmentShader:Fb,uniforms:R,transparent:!0,depthWrite:!1,depthTest:!1}),v=new Gl(E,y);v.frustumCulled=!1;let I=new Hl;I.add(v);let N=new Vl({canvas:e,alpha:!0,antialias:!1,powerPreference:"high-performance"});N.setPixelRatio(T);let F=new An(30,1,.1,200),G=1,$=1,W=()=>{let vt=t.clientWidth,X=t.clientHeight;N.setSize(vt,X,!1),F.aspect=vt/X;let et=vt<900?r.fracao.mobile:r.fracao.desktop,ht=m/et/2/(Math.tan(ff.degToRad(15))*F.aspect);F.position.set(0,0,ht),F.updateProjectionMatrix(),$=2*ht*Math.tan(ff.degToRad(15)),G=$*F.aspect;let nt=vt<900?r.centro.mobile:r.centro.desktop;v.position.x=G*nt[0],v.position.y=$*nt[1],R.uEscala.value=ht*(vt<900?1.35:1.5),R.uRaio.value=G*(vt<900?.22:.16)};W();let Z;addEventListener("resize",()=>{clearTimeout(Z),Z=setTimeout(W,200)});let B={x:0,y:0,forca:0},tt={x:0,y:0,forca:0},P=!1;t.addEventListener("pointermove",vt=>{let X=e.getBoundingClientRect();B.x=((vt.clientX-X.left)/X.width-.5)*G-v.position.x,B.y=-((vt.clientY-X.top)/X.height-.5)*$-v.position.y,P||(P=!0,tt.x=B.x,tt.y=B.y),B.forca=1}),t.addEventListener("pointerleave",()=>{P=!1,B.forca=0});let lt=new Xl,Lt=()=>{!a||document.hidden||(tt.x+=(B.x-tt.x)*.1,tt.y+=(B.y-tt.y)*.1,tt.forca+=(B.forca-tt.forca)*.08,R.uMouse.value.set(tt.x,tt.y),R.uForca.value=tt.forca,R.uTempo.value=lt.getElapsedTime(),R.uConverge.value=o.converge,R.uProgresso.value=o.progresso,R.uAlpha.value=(.35+.65*o.converge)*(1-o.progresso),N.render(I,F))};N.setAnimationLoop(Lt),me.to(o,{converge:1,duration:2.2,ease:"power2.inOut",delay:.15})};return r.texto?h():(l.onload=h,l.complete&&l.naturalWidth&&h()),{estado:o,setAtivo:u=>{a=u},setProgresso:u=>{o.progresso=u}}}Sp({lenis:!0,revelarHero:!1,preloader:!0});var mi=document.querySelector("[data-hero]"),$l=document.querySelector(".hero__canvas"),gf=document.querySelector(".hero__fallback"),yw=document.querySelector(".provas__canvas"),Mw=window.innerWidth<900||(navigator.hardwareConcurrency||8)<=4;function Vb(){$l&&($l.hidden=!0),gf&&(gf.hidden=!1),mi&&mi.classList.add("hero--estatico")}var Ai=null;function Km(){if(bp(),!Ai&&$l&&(Ai=Jm({hero:mi,canvas:$l,fallback:gf,fonte:document.getElementById("wordmark-fonte"),fracao:{desktop:.36,mobile:.8},centro:{desktop:[.22,.02],mobile:[0,.24]},amostra:{desktop:[1100,6e4],mobile:[700,25e3]}}),Ai||Vb()),Qe){mi.querySelectorAll("[data-reveal], [data-split-linhas]").forEach(r=>r.classList.add("revelado","split-pronto")),mi.querySelectorAll("[data-reveal-grupo]").forEach(r=>r.classList.add("revelado")),mi.classList.add("hero-revelado");return}$r(1500).then(()=>{me.delayedCall(Ai?.45:0,()=>$a())})}document.documentElement.classList.contains("pronto")?Km():window.addEventListener("rocca:pronto",Km,{once:!0});if(mi&&!Qe){let r=mi.querySelector(".hero__in"),t=mi.querySelector(".hero__rolar"),e=me.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:mi,start:"top top",end:"bottom top",scrub:!0,onUpdate:i=>{Ai&&Ai.setProgresso(i.progress)},onLeave:()=>{Ai&&Ai.setAtivo(!1)},onEnterBack:()=>{Ai&&Ai.setAtivo(!0)}}});r&&e.to(r,{opacity:0,y:-60,duration:.55},0),t&&e.to(t,{opacity:0,duration:.25},0);let n=mi.querySelector(".hero__veu");n&&e.to(n,{opacity:1,duration:.5},.5)}window.addEventListener("load",()=>It.refresh(),{once:!0});})();
