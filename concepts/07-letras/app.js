(()=>{var Ym=Object.defineProperty;var qm=(r,t,e)=>t in r?Ym(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Ut=(r,t,e)=>qm(r,typeof t!="symbol"?t+"":t,e);var Oh="170";var Zm=0,pf=1,Jm=2;var xd=1,$m=2,Li=3,cr=0,An=1,Ui=2,ar=0,Is=1,mf=2,gf=3,_f=4,Km=5,Dr=100,Qm=101,jm=102,tg=103,eg=104,ng=200,ig=201,rg=202,sg=203,Mc=204,Sc=205,og=206,ag=207,lg=208,cg=209,hg=210,ug=211,fg=212,dg=213,pg=214,bc=0,wc=1,Tc=2,Ns=3,Ec=4,Ac=5,Cc=6,Rc=7,vd=0,mg=1,gg=2,lr=0,_g=1,xg=2,vg=3,yg=4,Mg=5,Sg=6,bg=7;var yd=300,Os=301,Fs=302,Pc=303,Ic=304,tl=306,Lc=1e3,Or=1001,Dc=1002,hi=1003,wg=1004;var ra=1005;var _i=1006,ql=1007;var Fr=1008;var zi=1009,Md=1010,Sd=1011,bo=1012,Fh=1013,Br=1014,Ni=1015,Eo=1016,Bh=1017,zh=1018,Bs=1020,bd=35902,wd=1021,Td=1022,li=1023,Ed=1024,Ad=1025,Ls=1026,zs=1027,Cd=1028,kh=1029,Rd=1030,Vh=1031;var Hh=1033,Ca=33776,Ra=33777,Pa=33778,Ia=33779,Uc=35840,Nc=35841,Oc=35842,Fc=35843,Bc=36196,zc=37492,kc=37496,Vc=37808,Hc=37809,Gc=37810,Wc=37811,Xc=37812,Yc=37813,qc=37814,Zc=37815,Jc=37816,$c=37817,Kc=37818,Qc=37819,jc=37820,th=37821,La=36492,eh=36494,nh=36495,Pd=36283,ih=36284,rh=36285,sh=36286;var Da=2300,oh=2301,Zl=2302,xf=2400,vf=2401,yf=2402;var Tg=3200,Eg=3201;var Ag=0,Cg=1,or="",qn="srgb",Hs="srgb-linear",el="linear",pe="srgb";var ps=7680;var Mf=519,Rg=512,Pg=513,Ig=514,Id=515,Lg=516,Dg=517,Ug=518,Ng=519,Sf=35044,Ld=35048;var bf="300 es",Oi=2e3,Ua=2001,hr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wf=1234567,yo=Math.PI/180,wo=180/Math.PI;function Gs(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[r&255]+rn[r>>8&255]+rn[r>>16&255]+rn[r>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function gn(r,t,e){return Math.max(t,Math.min(e,r))}function Gh(r,t){return(r%t+t)%t}function Og(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Fg(r,t,e){return r!==t?(e-r)/(t-r):0}function Mo(r,t,e){return(1-e)*r+e*t}function Bg(r,t,e,n){return Mo(r,t,1-Math.exp(-e*n))}function zg(r,t=1){return t-Math.abs(Gh(r,t*2)-t)}function kg(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Vg(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Hg(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Gg(r,t){return r+Math.random()*(t-r)}function Wg(r){return r*(.5-Math.random())}function Xg(r){r!==void 0&&(wf=r);let t=wf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yg(r){return r*yo}function qg(r){return r*wo}function Zg(r){return(r&r-1)===0&&r!==0}function Jg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function $g(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Kg(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Cs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function pn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Wh={DEG2RAD:yo,RAD2DEG:wo,generateUUID:Gs,clamp:gn,euclideanModulo:Gh,mapLinear:Og,inverseLerp:Fg,lerp:Mo,damp:Bg,pingpong:zg,smoothstep:kg,smootherstep:Vg,randInt:Hg,randFloat:Gg,randFloatSpread:Wg,seededRandom:Xg,degToRad:Yg,radToDeg:qg,isPowerOfTwo:Zg,ceilPowerOfTwo:Jg,floorPowerOfTwo:$g,setQuaternionFromProperEuler:Kg,normalize:pn,denormalize:Cs},xe=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(gn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],b=i[1],S=i[4],x=i[7],C=i[2],A=i[5],T=i[8];return s[0]=o*_+a*b+l*C,s[3]=o*m+a*S+l*A,s[6]=o*p+a*x+l*T,s[1]=c*_+h*b+u*C,s[4]=c*m+h*S+u*A,s[7]=c*p+h*x+u*T,s[2]=f*_+d*b+g*C,s[5]=f*m+d*S+g*A,s[8]=f*p+d*x+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Jl.makeScale(t,e)),this}rotate(t){return this.premultiply(Jl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Jl=new Kt;function Dd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Na(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Qg(){let r=Na("canvas");return r.style.display="block",r}var Tf={};function xo(r){r in Tf||(Tf[r]=!0,console.warn(r))}function jg(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function t_(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function e_(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ae={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(r.r=Fi(r.r),r.g=Fi(r.g),r.b=Fi(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(r.r=Ds(r.r),r.g=Ds(r.g),r.b=Ds(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===or?el:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Fi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ds(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Ef=[.64,.33,.3,.6,.15,.06],Af=[.2126,.7152,.0722],Cf=[.3127,.329],Rf=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pf=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[Hs]:{primaries:Ef,whitePoint:Cf,transfer:el,toXYZ:Rf,fromXYZ:Pf,luminanceCoefficients:Af,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:Ef,whitePoint:Cf,transfer:pe,toXYZ:Rf,fromXYZ:Pf,luminanceCoefficients:Af,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}});var ms,ah=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ms===void 0&&(ms=Na("canvas")),ms.width=t.width,ms.height=t.height;let n=ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Na("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Fi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fi(e[n]/255)*255):e[n]=Fi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},n_=0,Oa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=Gs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push($l(i[o].image)):s.push($l(i[o]))}else s=$l(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function $l(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?ah.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var i_=0,Zn=class r extends hr{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Or,i=Or,s=_i,o=Fr,a=li,l=zi,c=r.DEFAULT_ANISOTROPY,h=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=Gs(),this.name="",this.source=new Oa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lc:t.x=t.x-Math.floor(t.x);break;case Or:t.x=t.x<0?0:1;break;case Dc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lc:t.y=t.y-Math.floor(t.y);break;case Or:t.y=t.y<0?0:1;break;case Dc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=yd;Zn.DEFAULT_ANISOTROPY=1;var Ne=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,x=(d+1)/2,C=(p+1)/2,A=(h+f)/4,T=(u+_)/4,R=(g+m)/4;return S>x&&S>C?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=A/n,s=T/n):x>C?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=R/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=T/s,i=R/s),this.set(n,i,s,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},lh=class extends hr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Zn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Oa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ki=class extends lh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fa=class extends Zn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hi,this.minFilter=hi,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ch=class extends Zn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hi,this.minFilter=hi,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ur=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*_,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let C=Math.sqrt(S),A=Math.atan2(C,p*b);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}let x=a*b;if(l=l*m+f*x,c=c*m+d*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(gn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(If.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(If.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Kl.copy(this).projectOnVector(t),this.sub(Kl)}reflect(t){return this.sub(Kl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(gn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kl=new Y,If=new ur,zr=class{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,si):si.fromBufferAttribute(s,o),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox)),sa.applyMatrix4(t.matrixWorld),this.union(sa)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(po),oa.subVectors(this.max,po),gs.subVectors(t.a,po),_s.subVectors(t.b,po),xs.subVectors(t.c,po),tr.subVectors(_s,gs),er.subVectors(xs,_s),Er.subVectors(gs,xs);let e=[0,-tr.z,tr.y,0,-er.z,er.y,0,-Er.z,Er.y,tr.z,0,-tr.x,er.z,0,-er.x,Er.z,0,-Er.x,-tr.y,tr.x,0,-er.y,er.x,0,-Er.y,Er.x,0];return!Ql(e,gs,_s,xs,oa)||(e=[1,0,0,0,1,0,0,0,1],!Ql(e,gs,_s,xs,oa))?!1:(aa.crossVectors(tr,er),e=[aa.x,aa.y,aa.z],Ql(e,gs,_s,xs,oa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ai=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],si=new Y,sa=new zr,gs=new Y,_s=new Y,xs=new Y,tr=new Y,er=new Y,Er=new Y,po=new Y,oa=new Y,aa=new Y,Ar=new Y;function Ql(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ar.fromArray(r,s);let a=i.x*Math.abs(Ar.x)+i.y*Math.abs(Ar.y)+i.z*Math.abs(Ar.z),l=t.dot(Ar),c=e.dot(Ar),h=n.dot(Ar);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var r_=new zr,mo=new Y,jl=new Y,fr=class{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):r_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mo.subVectors(t,this.center);let e=mo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(mo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mo.copy(t.center).add(jl)),this.expandByPoint(mo.copy(t.center).sub(jl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ci=new Y,tc=new Y,la=new Y,nr=new Y,ec=new Y,ca=new Y,nc=new Y,Ba=class{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){tc.copy(t).add(e).multiplyScalar(.5),la.copy(e).sub(t).normalize(),nr.copy(this.origin).sub(tc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(la),a=nr.dot(this.direction),l=-nr.dot(la),c=nr.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(tc).addScaledVector(la,f),d}intersectSphere(t,e){Ci.subVectors(t.center,this.origin);let n=Ci.dot(this.direction),i=Ci.dot(Ci)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,n,i,s){ec.subVectors(e,t),ca.subVectors(n,t),nc.crossVectors(ec,ca);let o=this.direction.dot(nc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;nr.subVectors(this.origin,t);let l=a*this.direction.dot(ca.crossVectors(nr,ca));if(l<0)return null;let c=a*this.direction.dot(ec.cross(nr));if(c<0||l+c>o)return null;let h=-a*nr.dot(nc);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ke=class r{constructor(t,e,n,i,s,o,a,l,c,h,u,f,d,g,_,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,f,d,g,_,m)}set(t,e,n,i,s,o,a,l,c,h,u,f,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/vs.setFromMatrixColumn(t,0).length(),s=1/vs.setFromMatrixColumn(t,1).length(),o=1/vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(s_,t,o_)}lookAt(t,e,n){let i=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),ir.crossVectors(n,On),ir.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),ir.crossVectors(n,On)),ir.normalize(),ha.crossVectors(On,ir),i[0]=ir.x,i[4]=ha.x,i[8]=On.x,i[1]=ir.y,i[5]=ha.y,i[9]=On.y,i[2]=ir.z,i[6]=ha.z,i[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],S=n[7],x=n[11],C=n[15],A=i[0],T=i[4],R=i[8],y=i[12],v=i[1],I=i[5],N=i[9],F=i[13],X=i[2],J=i[6],H=i[10],q=i[14],V=i[3],nt=i[7],P=i[11],j=i[15];return s[0]=o*A+a*v+l*X+c*V,s[4]=o*T+a*I+l*J+c*nt,s[8]=o*R+a*N+l*H+c*P,s[12]=o*y+a*F+l*q+c*j,s[1]=h*A+u*v+f*X+d*V,s[5]=h*T+u*I+f*J+d*nt,s[9]=h*R+u*N+f*H+d*P,s[13]=h*y+u*F+f*q+d*j,s[2]=g*A+_*v+m*X+p*V,s[6]=g*T+_*I+m*J+p*nt,s[10]=g*R+_*N+m*H+p*P,s[14]=g*y+_*F+m*q+p*j,s[3]=b*A+S*v+x*X+C*V,s[7]=b*T+S*I+x*J+C*nt,s[11]=b*R+S*N+x*H+C*P,s[15]=b*y+S*F+x*q+C*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*h-s*l*h)+m*(+e*c*u-e*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,S=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,x=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,C=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,A=e*b+n*S+i*x+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return t[0]=b*T,t[1]=(_*f*s-u*m*s-_*i*d+n*m*d+u*i*p-n*f*p)*T,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*T,t[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*d-n*l*d)*T,t[4]=S*T,t[5]=(h*m*s-g*f*s+g*i*d-e*m*d-h*i*p+e*f*p)*T,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*p-e*l*p)*T,t[7]=(o*f*s-h*l*s+h*i*c-e*f*c-o*i*d+e*l*d)*T,t[8]=x*T,t[9]=(g*u*s-h*_*s-g*n*d+e*_*d+h*n*p-e*u*p)*T,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*p+e*a*p)*T,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*d-e*a*d)*T,t[12]=C*T,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*m+e*u*m)*T,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*T,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*T,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,g=s*u,_=o*h,m=o*u,p=a*u,b=l*c,S=l*h,x=l*u,C=n.x,A=n.y,T=n.z;return i[0]=(1-(_+p))*C,i[1]=(d+x)*C,i[2]=(g-S)*C,i[3]=0,i[4]=(d-x)*A,i[5]=(1-(f+p))*A,i[6]=(m+b)*A,i[7]=0,i[8]=(g+S)*T,i[9]=(m-b)*T,i[10]=(1-(f+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=vs.set(i[0],i[1],i[2]).length(),o=vs.set(i[4],i[5],i[6]).length(),a=vs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],oi.copy(this);let c=1/s,h=1/o,u=1/a;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,e.setFromRotationMatrix(oi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Oi){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,g;if(a===Oi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ua)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Oi){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),f=(e+t)*c,d=(n+i)*h,g,_;if(a===Oi)g=(o+s)*u,_=-2*u;else if(a===Ua)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},vs=new Y,oi=new ke,s_=new Y(0,0,0),o_=new Y(1,1,1),ir=new Y,ha=new Y,On=new Y,Lf=new ke,Df=new ur,Vi=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(gn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Df.setFromEuler(this),this.setFromQuaternion(Df,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vi.DEFAULT_ORDER="XYZ";var za=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},a_=0,Uf=new Y,ys=new ur,Ri=new ke,ua=new Y,go=new Y,l_=new Y,c_=new ur,Nf=new Y(1,0,0),Of=new Y(0,1,0),Ff=new Y(0,0,1),Bf={type:"added"},h_={type:"removed"},Ms={type:"childadded",child:null},ic={type:"childremoved",child:null},Jn=class r extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new Y,e=new Vi,n=new ur,i=new Y(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new Kt}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(Nf,t)}rotateY(t){return this.rotateOnAxis(Of,t)}rotateZ(t){return this.rotateOnAxis(Ff,t)}translateOnAxis(t,e){return Uf.copy(t).applyQuaternion(this.quaternion),this.position.add(Uf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nf,t)}translateY(t){return this.translateOnAxis(Of,t)}translateZ(t){return this.translateOnAxis(Ff,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ua.copy(t):ua.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(go,ua,this.up):Ri.lookAt(ua,go,this.up),this.quaternion.setFromRotationMatrix(Ri),i&&(Ri.extractRotation(i.matrixWorld),ys.setFromRotationMatrix(Ri),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bf),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(h_),ic.child=t,this.dispatchEvent(ic),ic.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bf),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,t,l_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,c_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Jn.DEFAULT_UP=new Y(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ai=new Y,Pi=new Y,rc=new Y,Ii=new Y,Ss=new Y,bs=new Y,zf=new Y,sc=new Y,oc=new Y,ac=new Y,lc=new Ne,cc=new Ne,hc=new Ne,Ur=class r{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ai.subVectors(t,e),i.cross(ai);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ai.subVectors(i,e),Pi.subVectors(n,e),rc.subVectors(t,e);let o=ai.dot(ai),a=ai.dot(Pi),l=ai.dot(rc),c=Pi.dot(Pi),h=Pi.dot(rc),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return lc.setScalar(0),cc.setScalar(0),hc.setScalar(0),lc.fromBufferAttribute(t,e),cc.fromBufferAttribute(t,n),hc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(lc,s.x),o.addScaledVector(cc,s.y),o.addScaledVector(hc,s.z),o}static isFrontFacing(t,e,n,i){return ai.subVectors(n,e),Pi.subVectors(t,e),ai.cross(Pi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ai.cross(Pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;Ss.subVectors(i,n),bs.subVectors(s,n),sc.subVectors(t,n);let l=Ss.dot(sc),c=bs.dot(sc);if(l<=0&&c<=0)return e.copy(n);oc.subVectors(t,i);let h=Ss.dot(oc),u=bs.dot(oc);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ss,o);ac.subVectors(t,s);let d=Ss.dot(ac),g=bs.dot(ac);if(g>=0&&d<=g)return e.copy(s);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(bs,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return zf.subVectors(s,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(zf,a);let p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(Ss,o).addScaledVector(bs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},fa={h:0,s:0,l:0};function uc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var oe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=Gh(t,1),e=gn(e,0,1),n=gn(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=uc(o,s,t+1/3),this.g=uc(o,s,t),this.b=uc(o,s,t-1/3)}return ae.toWorkingColorSpace(this,i),this}setStyle(t,e=qn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qn){let n=Ud[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}copyLinearToSRGB(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qn){return ae.fromWorkingColorSpace(sn.copy(this),t),Math.round(gn(sn.r*255,0,255))*65536+Math.round(gn(sn.g*255,0,255))*256+Math.round(gn(sn.b*255,0,255))}getHexString(t=qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(sn.copy(this),e);let n=sn.r,i=sn.g,s=sn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=qn){ae.fromWorkingColorSpace(sn.copy(this),t);let e=sn.r,n=sn.g,i=sn.b;return t!==qn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(rr),this.setHSL(rr.h+t,rr.s+e,rr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(rr),t.getHSL(fa);let n=Mo(rr.h,fa.h,e),i=Mo(rr.s,fa.s,e),s=Mo(rr.l,fa.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new oe;oe.NAMES=Ud;var u_=0,kr=class extends hr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Gs(),this.name="",this.blending=Is,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=Sc,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(n.blending=this.blending),this.side!==cr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mc&&(n.blendSrc=this.blendSrc),this.blendDst!==Sc&&(n.blendDst=this.blendDst),this.blendEquation!==Dr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ka=class extends kr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ze=new Y,da=new xe,on=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sf,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)da.fromBufferAttribute(this,e),da.applyMatrix3(t),this.setXY(e,da.x,da.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),i=pn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),i=pn(i,this.array),s=pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sf&&(t.usage=this.usage),t}};var Va=class extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ha=class extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Bi=class extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}},f_=0,Yn=new ke,fc=new Jn,ws=new Y,Fn=new zr,_o=new zr,Je=new Y,xi=class r extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dd(t)?Ha:Va)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Yn.makeRotationFromQuaternion(t),this.applyMatrix4(Yn),this}rotateX(t){return Yn.makeRotationX(t),this.applyMatrix4(Yn),this}rotateY(t){return Yn.makeRotationY(t),this.applyMatrix4(Yn),this}rotateZ(t){return Yn.makeRotationZ(t),this.applyMatrix4(Yn),this}translate(t,e,n){return Yn.makeTranslation(t,e,n),this.applyMatrix4(Yn),this}scale(t,e,n){return Yn.makeScale(t,e,n),this.applyMatrix4(Yn),this}lookAt(t){return fc.lookAt(t),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Bi(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];_o.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(Fn.min,_o.min),Fn.expandByPoint(Je),Je.addVectors(Fn.max,_o.max),Fn.expandByPoint(Je)):(Fn.expandByPoint(_o.min),Fn.expandByPoint(_o.max))}Fn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Je.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Je));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Je.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(t,c),Je.add(ws)),i=Math.max(i,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new Y,l[R]=new Y;let c=new Y,h=new Y,u=new Y,f=new xe,d=new xe,g=new xe,_=new Y,m=new Y;function p(R,y,v){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,v),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,y),g.fromBufferAttribute(s,v),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(I),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(I),a[R].add(_),a[y].add(_),a[v].add(_),l[R].add(m),l[y].add(m),l[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let R=0,y=b.length;R<y;++R){let v=b[R],I=v.start,N=v.count;for(let F=I,X=I+N;F<X;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let S=new Y,x=new Y,C=new Y,A=new Y;function T(R){C.fromBufferAttribute(i,R),A.copy(C);let y=a[R];S.copy(y),S.sub(C.multiplyScalar(C.dot(y))).normalize(),x.crossVectors(A,y);let I=x.dot(l[R])<0?-1:1;o.setXYZW(R,S.x,S.y,S.z,I)}for(let R=0,y=b.length;R<y;++R){let v=b[R],I=v.start,N=v.count;for(let F=I,X=I+N;F<X;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,h=new Y,u=new Y;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new on(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kf=new ke,Cr=new Ba,pa=new fr,Vf=new Y,ma=new Y,ga=new Y,_a=new Y,dc=new Y,xa=new Y,Hf=new Y,va=new Y,ci=class extends Jn{constructor(t=new xi,e=new ka){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){xa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(dc.fromBufferAttribute(u,t),o?xa.addScaledVector(dc,h):xa.addScaledVector(dc.sub(e),h))}e.add(xa)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),Cr.copy(t.ray).recast(t.near),!(pa.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(pa,Vf)===null||Cr.origin.distanceToSquared(Vf)>(t.far-t.near)**2))&&(kf.copy(s).invert(),Cr.copy(t.ray).applyMatrix4(kf),!(n.boundingBox!==null&&Cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Cr)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=b,C=S;x<C;x+=3){let A=a.getX(x),T=a.getX(x+1),R=a.getX(x+2);i=ya(this,p,t,n,c,h,u,A,T,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let b=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);i=ya(this,o,t,n,c,h,u,b,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=b,C=S;x<C;x+=3){let A=x,T=x+1,R=x+2;i=ya(this,p,t,n,c,h,u,A,T,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let b=m,S=m+1,x=m+2;i=ya(this,o,t,n,c,h,u,b,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function d_(r,t,e,n,i,s,o,a){let l;if(t.side===An?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===cr,a),l===null)return null;va.copy(a),va.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(va);return c<e.near||c>e.far?null:{distance:c,point:va.clone(),object:r}}function ya(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,ma),r.getVertexPosition(l,ga),r.getVertexPosition(c,_a);let h=d_(r,t,e,n,ma,ga,_a,Hf);if(h){let u=new Y;Ur.getBarycoord(Hf,ma,ga,_a,u),i&&(h.uv=Ur.getInterpolatedAttribute(i,a,l,c,u,new xe)),s&&(h.uv1=Ur.getInterpolatedAttribute(s,a,l,c,u,new xe)),o&&(h.normal=Ur.getInterpolatedAttribute(o,a,l,c,u,new Y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new Y,materialIndex:0};Ur.getNormal(ma,ga,_a,f.normal),h.face=f,h.barycoord=u}return h}var To=class r extends xi{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Bi(c,3)),this.setAttribute("normal",new Bi(h,3)),this.setAttribute("uv",new Bi(u,2));function g(_,m,p,b,S,x,C,A,T,R,y){let v=x/T,I=C/R,N=x/2,F=C/2,X=A/2,J=T+1,H=R+1,q=0,V=0,nt=new Y;for(let P=0;P<H;P++){let j=P*I-F;for(let St=0;St<J;St++){let Ot=St*v-N;nt[_]=Ot*b,nt[m]=j*S,nt[p]=X,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[p]=A>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(St/T),u.push(1-P/R),q+=1}}for(let P=0;P<R;P++)for(let j=0;j<T;j++){let St=f+j+J*P,Ot=f+j+J*(P+1),z=f+(j+1)+J*(P+1),et=f+(j+1)+J*P;l.push(St,Ot,et),l.push(Ot,z,et),V+=6}a.addGroup(d,V,y),d+=V,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ks(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function mn(r){let t={};for(let e=0;e<r.length;e++){let n=ks(r[e]);for(let i in n)t[i]=n[i]}return t}function p_(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Nd(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var m_={clone:ks,merge:mn},g_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,__=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends kr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g_,this.fragmentShader=__,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=p_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ga=class extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},sr=new Y,Gf=new xe,Wf=new xe,_n=class extends Ga{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(yo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(sr.x,sr.y).multiplyScalar(-t/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-t/sr.z)}getViewSize(t,e){return this.getViewBounds(t,Gf,Wf),e.subVectors(Wf,Gf)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(yo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ts=-90,Es=1,hh=class extends Jn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new _n(Ts,Es,t,e);i.layers=this.layers,this.add(i);let s=new _n(Ts,Es,t,e);s.layers=this.layers,this.add(s);let o=new _n(Ts,Es,t,e);o.layers=this.layers,this.add(o);let a=new _n(Ts,Es,t,e);a.layers=this.layers,this.add(a);let l=new _n(Ts,Es,t,e);l.layers=this.layers,this.add(l);let c=new _n(Ts,Es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Wa=class extends Zn{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Os,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},uh=class extends ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Wa(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_i}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new To(5,5,5),s=new $n({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:ar});s.uniforms.tEquirect.value=e;let o=new ci(i,s),a=e.minFilter;return e.minFilter===Fr&&(e.minFilter=_i),new hh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},pc=new Y,x_=new Y,v_=new Kt,Di=class{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=pc.subVectors(n,e).cross(x_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(pc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||v_.getNormalMatrix(t),i=this.coplanarPoint(pc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rr=new fr,Ma=new Y,Xa=class{constructor(t=new Di,e=new Di,n=new Di,i=new Di,s=new Di,o=new Di){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Oi){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],b=i[13],S=i[14],x=i[15];if(n[0].setComponents(l-s,f-c,m-d,x-p).normalize(),n[1].setComponents(l+s,f+c,m+d,x+p).normalize(),n[2].setComponents(l+o,f+h,m+g,x+b).normalize(),n[3].setComponents(l-o,f-h,m-g,x-b).normalize(),n[4].setComponents(l-a,f-u,m-_,x-S).normalize(),e===Oi)n[5].setComponents(l+a,f+u,m+_,x+S).normalize();else if(e===Ua)n[5].setComponents(a,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(t){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ma.x=i.normal.x>0?t.max.x:t.min.x,Ma.y=i.normal.y>0?t.max.y:t.min.y,Ma.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Od(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function y_(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Ya=class r extends xi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let b=p*f-o;for(let S=0;S<c;S++){let x=S*u-s;g.push(x,-b,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let S=b+c*p,x=b+c*(p+1),C=b+1+c*(p+1),A=b+1+c*p;d.push(S,x,A),d.push(x,C,A)}this.setIndex(d),this.setAttribute("position",new Bi(g,3)),this.setAttribute("normal",new Bi(_,3)),this.setAttribute("uv",new Bi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},M_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S_=`#ifdef USE_ALPHAHASH
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
#endif`,b_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A_=`#ifdef USE_AOMAP
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
#endif`,C_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R_=`#ifdef USE_BATCHING
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
#endif`,P_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,U_=`#ifdef USE_IRIDESCENCE
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
#endif`,N_=`#ifdef USE_BUMPMAP
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
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,W_=`#define PI 3.141592653589793
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
} // validated`,X_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Y_=`vec3 transformedNormal = objectNormal;
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
#endif`,q_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j_=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l0=`#ifdef USE_GRADIENTMAP
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
}`,c0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f0=`uniform bool receiveShadow;
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
#endif`,d0=`#ifdef USE_ENVMAP
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
#endif`,p0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x0=`PhysicalMaterial material;
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
#endif`,v0=`struct PhysicalMaterial {
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
}`,y0=`
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
#endif`,M0=`#if defined( RE_IndirectDiffuse )
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
#endif`,S0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,P0=`#if defined( USE_POINTS_UV )
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
#endif`,I0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,U0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`#ifdef USE_MORPHTARGETS
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
#endif`,F0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,z0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G0=`#ifdef USE_NORMALMAP
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
#endif`,W0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ex=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sx=`float getShadowMask() {
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
}`,ox=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ax=`#ifdef USE_SKINNING
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
#endif`,lx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cx=`#ifdef USE_SKINNING
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
#endif`,hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ux=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,px=`#ifdef USE_TRANSMISSION
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
#endif`,mx=`#ifdef USE_TRANSMISSION
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
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mx=`uniform sampler2D t2D;
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
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`#include <common>
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
}`,Ax=`#if DEPTH_PACKING == 3200
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
}`,Cx=`#define DISTANCE
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
}`,Rx=`#define DISTANCE
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
}`,Px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ix=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`uniform float scale;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Ux=`#include <common>
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
}`,Nx=`uniform vec3 diffuse;
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
}`,Ox=`#define LAMBERT
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
}`,Fx=`#define LAMBERT
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
}`,Bx=`#define MATCAP
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
}`,zx=`#define MATCAP
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
}`,kx=`#define NORMAL
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
}`,Vx=`#define NORMAL
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
}`,Hx=`#define PHONG
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
}`,Gx=`#define PHONG
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
}`,Wx=`#define STANDARD
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
}`,Xx=`#define STANDARD
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
}`,Yx=`#define TOON
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
}`,qx=`#define TOON
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
}`,Zx=`uniform float size;
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
}`,Jx=`uniform vec3 diffuse;
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
}`,$x=`#include <common>
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
}`,Kx=`uniform vec3 color;
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
}`,Qx=`uniform float rotation;
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
}`,jx=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:M_,alphahash_pars_fragment:S_,alphamap_fragment:b_,alphamap_pars_fragment:w_,alphatest_fragment:T_,alphatest_pars_fragment:E_,aomap_fragment:A_,aomap_pars_fragment:C_,batching_pars_vertex:R_,batching_vertex:P_,begin_vertex:I_,beginnormal_vertex:L_,bsdfs:D_,iridescence_fragment:U_,bumpmap_pars_fragment:N_,clipping_planes_fragment:O_,clipping_planes_pars_fragment:F_,clipping_planes_pars_vertex:B_,clipping_planes_vertex:z_,color_fragment:k_,color_pars_fragment:V_,color_pars_vertex:H_,color_vertex:G_,common:W_,cube_uv_reflection_fragment:X_,defaultnormal_vertex:Y_,displacementmap_pars_vertex:q_,displacementmap_vertex:Z_,emissivemap_fragment:J_,emissivemap_pars_fragment:$_,colorspace_fragment:K_,colorspace_pars_fragment:Q_,envmap_fragment:j_,envmap_common_pars_fragment:t0,envmap_pars_fragment:e0,envmap_pars_vertex:n0,envmap_physical_pars_fragment:d0,envmap_vertex:i0,fog_vertex:r0,fog_pars_vertex:s0,fog_fragment:o0,fog_pars_fragment:a0,gradientmap_pars_fragment:l0,lightmap_pars_fragment:c0,lights_lambert_fragment:h0,lights_lambert_pars_fragment:u0,lights_pars_begin:f0,lights_toon_fragment:p0,lights_toon_pars_fragment:m0,lights_phong_fragment:g0,lights_phong_pars_fragment:_0,lights_physical_fragment:x0,lights_physical_pars_fragment:v0,lights_fragment_begin:y0,lights_fragment_maps:M0,lights_fragment_end:S0,logdepthbuf_fragment:b0,logdepthbuf_pars_fragment:w0,logdepthbuf_pars_vertex:T0,logdepthbuf_vertex:E0,map_fragment:A0,map_pars_fragment:C0,map_particle_fragment:R0,map_particle_pars_fragment:P0,metalnessmap_fragment:I0,metalnessmap_pars_fragment:L0,morphinstance_vertex:D0,morphcolor_vertex:U0,morphnormal_vertex:N0,morphtarget_pars_vertex:O0,morphtarget_vertex:F0,normal_fragment_begin:B0,normal_fragment_maps:z0,normal_pars_fragment:k0,normal_pars_vertex:V0,normal_vertex:H0,normalmap_pars_fragment:G0,clearcoat_normal_fragment_begin:W0,clearcoat_normal_fragment_maps:X0,clearcoat_pars_fragment:Y0,iridescence_pars_fragment:q0,opaque_fragment:Z0,packing:J0,premultiplied_alpha_fragment:$0,project_vertex:K0,dithering_fragment:Q0,dithering_pars_fragment:j0,roughnessmap_fragment:tx,roughnessmap_pars_fragment:ex,shadowmap_pars_fragment:nx,shadowmap_pars_vertex:ix,shadowmap_vertex:rx,shadowmask_pars_fragment:sx,skinbase_vertex:ox,skinning_pars_vertex:ax,skinning_vertex:lx,skinnormal_vertex:cx,specularmap_fragment:hx,specularmap_pars_fragment:ux,tonemapping_fragment:fx,tonemapping_pars_fragment:dx,transmission_fragment:px,transmission_pars_fragment:mx,uv_pars_fragment:gx,uv_pars_vertex:_x,uv_vertex:xx,worldpos_vertex:vx,background_vert:yx,background_frag:Mx,backgroundCube_vert:Sx,backgroundCube_frag:bx,cube_vert:wx,cube_frag:Tx,depth_vert:Ex,depth_frag:Ax,distanceRGBA_vert:Cx,distanceRGBA_frag:Rx,equirect_vert:Px,equirect_frag:Ix,linedashed_vert:Lx,linedashed_frag:Dx,meshbasic_vert:Ux,meshbasic_frag:Nx,meshlambert_vert:Ox,meshlambert_frag:Fx,meshmatcap_vert:Bx,meshmatcap_frag:zx,meshnormal_vert:kx,meshnormal_frag:Vx,meshphong_vert:Hx,meshphong_frag:Gx,meshphysical_vert:Wx,meshphysical_frag:Xx,meshtoon_vert:Yx,meshtoon_frag:qx,points_vert:Zx,points_frag:Jx,shadow_vert:$x,shadow_frag:Kx,sprite_vert:Qx,sprite_frag:jx},_t={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},gi={basic:{uniforms:mn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:mn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new oe(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:mn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:mn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:mn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new oe(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:mn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:mn([_t.points,_t.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:mn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:mn([_t.common,_t.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:mn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:mn([_t.sprite,_t.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:mn([_t.common,_t.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:mn([_t.lights,_t.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};gi.physical={uniforms:mn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var Sa={r:0,b:0,g:0},Pr=new Vi,tv=new ke;function ev(r,t,e,n,i,s,o){let a=new oe(0),l=s===!0?0:1,c,h,u=null,f=0,d=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function _(b){let S=!1,x=g(b);x===null?p(a,l):x&&x.isColor&&(p(x,1),S=!0);let C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(b,S){let x=g(S);x&&(x.isCubeTexture||x.mapping===tl)?(h===void 0&&(h=new ci(new To(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:ks(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Pr.copy(S.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tv.makeRotationFromEuler(Pr)),h.material.toneMapped=ae.getTransfer(x.colorSpace)!==pe,(u!==x||f!==x.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=r.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ci(new Ya(2,2),new $n({name:"BackgroundMaterial",uniforms:ks(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ae.getTransfer(x.colorSpace)!==pe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(Sa,Nd(r)),n.buffers.color.setClear(Sa.r,Sa.g,Sa.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:_,addToRenderList:m}}function nv(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(v,I,N,F,X){let J=!1,H=u(F,N,I);s!==H&&(s=H,c(s.object)),J=d(v,F,N,X),J&&g(v,F,N,X),X!==null&&t.update(X,r.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,x(v,I,N,F),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function u(v,I,N){let F=N.wireframe===!0,X=n[v.id];X===void 0&&(X={},n[v.id]=X);let J=X[I.id];J===void 0&&(J={},X[I.id]=J);let H=J[F];return H===void 0&&(H=f(l()),J[F]=H),H}function f(v){let I=[],N=[],F=[];for(let X=0;X<e;X++)I[X]=0,N[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:F,object:v,attributes:{},index:null}}function d(v,I,N,F){let X=s.attributes,J=I.attributes,H=0,q=N.getAttributes();for(let V in q)if(q[V].location>=0){let P=X[V],j=J[V];if(j===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(j=v.instanceColor)),P===void 0||P.attribute!==j||j&&P.data!==j.data)return!0;H++}return s.attributesNum!==H||s.index!==F}function g(v,I,N,F){let X={},J=I.attributes,H=0,q=N.getAttributes();for(let V in q)if(q[V].location>=0){let P=J[V];P===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(P=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(P=v.instanceColor));let j={};j.attribute=P,P&&P.data&&(j.data=P.data),X[V]=j,H++}s.attributes=X,s.attributesNum=H,s.index=F}function _(){let v=s.newAttributes;for(let I=0,N=v.length;I<N;I++)v[I]=0}function m(v){p(v,0)}function p(v,I){let N=s.newAttributes,F=s.enabledAttributes,X=s.attributeDivisors;N[v]=1,F[v]===0&&(r.enableVertexAttribArray(v),F[v]=1),X[v]!==I&&(r.vertexAttribDivisor(v,I),X[v]=I)}function b(){let v=s.newAttributes,I=s.enabledAttributes;for(let N=0,F=I.length;N<F;N++)I[N]!==v[N]&&(r.disableVertexAttribArray(N),I[N]=0)}function S(v,I,N,F,X,J,H){H===!0?r.vertexAttribIPointer(v,I,N,X,J):r.vertexAttribPointer(v,I,N,F,X,J)}function x(v,I,N,F){_();let X=F.attributes,J=N.getAttributes(),H=I.defaultAttributeValues;for(let q in J){let V=J[q];if(V.location>=0){let nt=X[q];if(nt===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(nt=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(nt=v.instanceColor)),nt!==void 0){let P=nt.normalized,j=nt.itemSize,St=t.get(nt);if(St===void 0)continue;let Ot=St.buffer,z=St.type,et=St.bytesPerElement,at=z===r.INT||z===r.UNSIGNED_INT||nt.gpuType===Fh;if(nt.isInterleavedBufferAttribute){let it=nt.data,xt=it.stride,Et=nt.offset;if(it.isInstancedInterleavedBuffer){for(let Ft=0;Ft<V.locationSize;Ft++)p(V.location+Ft,it.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Ft=0;Ft<V.locationSize;Ft++)m(V.location+Ft);r.bindBuffer(r.ARRAY_BUFFER,Ot);for(let Ft=0;Ft<V.locationSize;Ft++)S(V.location+Ft,j/V.locationSize,z,P,xt*et,(Et+j/V.locationSize*Ft)*et,at)}else{if(nt.isInstancedBufferAttribute){for(let it=0;it<V.locationSize;it++)p(V.location+it,nt.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let it=0;it<V.locationSize;it++)m(V.location+it);r.bindBuffer(r.ARRAY_BUFFER,Ot);for(let it=0;it<V.locationSize;it++)S(V.location+it,j/V.locationSize,z,P,j*et,j/V.locationSize*it*et,at)}}else if(H!==void 0){let P=H[q];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(V.location,P);break;case 3:r.vertexAttrib3fv(V.location,P);break;case 4:r.vertexAttrib4fv(V.location,P);break;default:r.vertexAttrib1fv(V.location,P)}}}}b()}function C(){R();for(let v in n){let I=n[v];for(let N in I){let F=I[N];for(let X in F)h(F[X].object),delete F[X];delete I[N]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let I=n[v.id];for(let N in I){let F=I[N];for(let X in F)h(F[X].object),delete F[X];delete I[N]}delete n[v.id]}function T(v){for(let I in n){let N=n[I];if(N[v.id]===void 0)continue;let F=N[v.id];for(let X in F)h(F[X].object),delete F[X];delete N[v.id]}}function R(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function iv(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function rv(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==li&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let R=T===Eo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==zi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ni&&!R)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:C,maxSamples:A}}function sv(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Di,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{let b=s?0:n,S=b*4,x=p.clippingState||null;l.value=x,x=h(g,f,S,d);for(let C=0;C!==S;++C)x[C]=e[C];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=d;S!==_;++S,x+=4)o.copy(u[S]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function ov(r){let t=new WeakMap;function e(o,a){return a===Pc?o.mapping=Os:a===Ic&&(o.mapping=Fs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Pc||a===Ic)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new uh(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var fh=class extends Ga{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Rs=4,Xf=[.125,.215,.35,.446,.526,.582],Nr=20,mc=new fh,Yf=new oe,gc=null,_c=0,xc=0,vc=!1,Lr=(1+Math.sqrt(5))/2,As=1/Lr,qf=[new Y(-Lr,As,0),new Y(Lr,As,0),new Y(-As,0,Lr),new Y(As,0,Lr),new Y(0,Lr,-As),new Y(0,Lr,As),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],qa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){gc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(gc,_c,xc),this._renderer.xr.enabled=vc,t.scissorTest=!1,ba(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Os||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Eo,format:li,colorSpace:Hs,depthBuffer:!1},i=Zf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zf(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=av(s)),this._blurMaterial=lv(s,t,e)}return i}_compileMaterial(t){let e=new ci(this._lodPlanes[0],t);this._renderer.compile(e,mc)}_sceneToCubeUV(t,e,n,i){let a=new _n(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Yf),h.toneMapping=lr,h.autoClear=!1;let d=new ka({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),g=new ci(new To,d),_=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Yf),_=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let S=this._cubeSize;ba(i,b*S,p>2?S:0,S,S),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Os||t.mapping===Fs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$f()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jf());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new ci(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;ba(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,mc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=qf[(i-s-1)%qf.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ci(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Nr-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Nr;m>Nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nr}`);let p=[],b=0;for(let T=0;T<Nr;++T){let R=T/_,y=Math.exp(-R*R/2);p.push(y),T===0?b+=y:T<m&&(b+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;let x=this._sizeLods[i],C=3*x*(i>S-Rs?i-S+Rs:0),A=4*(this._cubeSize-x);ba(e,C,A,3*x,2*x),l.setRenderTarget(e),l.render(u,mc)}};function av(r){let t=[],e=[],n=[],i=r,s=r-Rs+1+Xf.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Rs?l=Xf[o-r+Rs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*d),S=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let A=0;A<d;A++){let T=A%3*2/3-1,R=A>2?0:-1,y=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];b.set(y,_*g*A),S.set(f,m*g*A);let v=[A,A,A,A,A,A];x.set(v,p*g*A)}let C=new xi;C.setAttribute("position",new on(b,_)),C.setAttribute("uv",new on(S,m)),C.setAttribute("faceIndex",new on(x,p)),t.push(C),i>Rs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zf(r,t,e){let n=new ki(r,t,e);return n.texture.mapping=tl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ba(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function lv(r,t,e){let n=new Float32Array(Nr),i=new Y(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Xh(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Jf(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xh(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function $f(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Xh(){return`

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
	`}function cv(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Pc||l===Ic,h=l===Os||l===Fs;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new qa(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new qa(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function hv(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&xo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function uv(r,t,e,n){let i={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],r.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let b=d.array;_=d.version;for(let S=0,x=b.length;S<x;S+=3){let C=b[S+0],A=b[S+1],T=b[S+2];f.push(C,A,A,T,T,C)}}else if(g!==void 0){let b=g.array;_=g.version;for(let S=0,x=b.length/3-1;S<x;S+=3){let C=S+0,A=S+1,T=S+2;f.push(C,A,A,T,T,C)}}else return;let m=new(Dd(f)?Ha:Va)(f,1);m.version=_;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function fv(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*_[b];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function dv(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function pv(r,t,e){let n=new WeakMap,i=new Ne;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let y=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],S=0;d===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let x=a.attributes.position.count*S,C=1;x>t.maxTextureSize&&(C=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let A=new Float32Array(x*C*4*u),T=new Fa(A,x,C,u);T.type=Ni,T.needsUpdate=!0;let R=S*4;for(let v=0;v<u;v++){let I=m[v],N=p[v],F=b[v],X=x*C*4*v;for(let J=0;J<I.count;J++){let H=J*R;d===!0&&(i.fromBufferAttribute(I,J),A[X+H+0]=i.x,A[X+H+1]=i.y,A[X+H+2]=i.z,A[X+H+3]=0),g===!0&&(i.fromBufferAttribute(N,J),A[X+H+4]=i.x,A[X+H+5]=i.y,A[X+H+6]=i.z,A[X+H+7]=0),_===!0&&(i.fromBufferAttribute(F,J),A[X+H+8]=i.x,A[X+H+9]=i.y,A[X+H+10]=i.z,A[X+H+11]=F.itemSize===4?i.w:1)}}f={count:u,texture:T,size:new xe(x,C)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function mv(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Za=class extends Zn{constructor(t,e,n,i,s,o,a,l,c,h=Ls){if(h!==Ls&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ls&&(n=Br),n===void 0&&h===zs&&(n=Bs),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:hi,this.minFilter=l!==void 0?l:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Fd=new Zn,Kf=new Za(1,1),Bd=new Fa,zd=new ch,kd=new Wa,Qf=[],jf=[],td=new Float32Array(16),ed=new Float32Array(9),nd=new Float32Array(4);function Ws(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Qf[i];if(s===void 0&&(s=new Float32Array(i),Qf[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function We(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Xe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function nl(r,t){let e=jf[t];e===void 0&&(e=new Int32Array(t),jf[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function gv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function _v(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2fv(this.addr,t),Xe(e,t)}}function xv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;r.uniform3fv(this.addr,t),Xe(e,t)}}function vv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4fv(this.addr,t),Xe(e,t)}}function yv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;nd.set(n),r.uniformMatrix2fv(this.addr,!1,nd),Xe(e,n)}}function Mv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;ed.set(n),r.uniformMatrix3fv(this.addr,!1,ed),Xe(e,n)}}function Sv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;td.set(n),r.uniformMatrix4fv(this.addr,!1,td),Xe(e,n)}}function bv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function wv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2iv(this.addr,t),Xe(e,t)}}function Tv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;r.uniform3iv(this.addr,t),Xe(e,t)}}function Ev(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4iv(this.addr,t),Xe(e,t)}}function Av(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Cv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2uiv(this.addr,t),Xe(e,t)}}function Rv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;r.uniform3uiv(this.addr,t),Xe(e,t)}}function Pv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4uiv(this.addr,t),Xe(e,t)}}function Iv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Kf.compareFunction=Id,s=Kf):s=Fd,e.setTexture2D(t||s,i)}function Lv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||zd,i)}function Dv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||kd,i)}function Uv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Bd,i)}function Nv(r){switch(r){case 5126:return gv;case 35664:return _v;case 35665:return xv;case 35666:return vv;case 35674:return yv;case 35675:return Mv;case 35676:return Sv;case 5124:case 35670:return bv;case 35667:case 35671:return wv;case 35668:case 35672:return Tv;case 35669:case 35673:return Ev;case 5125:return Av;case 36294:return Cv;case 36295:return Rv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Uv}}function Ov(r,t){r.uniform1fv(this.addr,t)}function Fv(r,t){let e=Ws(t,this.size,2);r.uniform2fv(this.addr,e)}function Bv(r,t){let e=Ws(t,this.size,3);r.uniform3fv(this.addr,e)}function zv(r,t){let e=Ws(t,this.size,4);r.uniform4fv(this.addr,e)}function kv(r,t){let e=Ws(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Vv(r,t){let e=Ws(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Hv(r,t){let e=Ws(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Gv(r,t){r.uniform1iv(this.addr,t)}function Wv(r,t){r.uniform2iv(this.addr,t)}function Xv(r,t){r.uniform3iv(this.addr,t)}function Yv(r,t){r.uniform4iv(this.addr,t)}function qv(r,t){r.uniform1uiv(this.addr,t)}function Zv(r,t){r.uniform2uiv(this.addr,t)}function Jv(r,t){r.uniform3uiv(this.addr,t)}function $v(r,t){r.uniform4uiv(this.addr,t)}function Kv(r,t,e){let n=this.cache,i=t.length,s=nl(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Fd,s[o])}function Qv(r,t,e){let n=this.cache,i=t.length,s=nl(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||zd,s[o])}function jv(r,t,e){let n=this.cache,i=t.length,s=nl(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||kd,s[o])}function ty(r,t,e){let n=this.cache,i=t.length,s=nl(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Bd,s[o])}function ey(r){switch(r){case 5126:return Ov;case 35664:return Fv;case 35665:return Bv;case 35666:return zv;case 35674:return kv;case 35675:return Vv;case 35676:return Hv;case 5124:case 35670:return Gv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return Yv;case 5125:return qv;case 36294:return Zv;case 36295:return Jv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return ty}}var dh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Nv(e.type)}},ph=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ey(e.type)}},mh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},yc=/(\w+)(\])?(\[|\.)?/g;function id(r,t){r.seq.push(t),r.map[t.id]=t}function ny(r,t,e){let n=r.name,i=n.length;for(yc.lastIndex=0;;){let s=yc.exec(n),o=yc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){id(e,c===void 0?new dh(a,r,t):new ph(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new mh(a),id(e,u)),e=u}}}var Us=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);ny(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function rd(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var iy=37297,ry=0;function sy(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var sd=new Kt;function oy(r){ae._getMatrix(sd,ae.workingColorSpace,r);let t=`mat3( ${sd.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(r)){case el:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function od(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+sy(r.getShaderSource(t),o)}else return i}function ay(r,t){let e=oy(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ly(r,t){let e;switch(t){case _g:e="Linear";break;case xg:e="Reinhard";break;case vg:e="Cineon";break;case yg:e="ACESFilmic";break;case Sg:e="AgX";break;case bg:e="Neutral";break;case Mg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var wa=new Y;function cy(){ae.getLuminanceCoefficients(wa);let r=wa.x.toFixed(4),t=wa.y.toFixed(4),e=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function uy(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fy(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function vo(r){return r!==""}function ad(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ld(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(r){return r.replace(dy,my)}var py=new Map;function my(r,t){let e=Qt[t];if(e===void 0){let n=py.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return gh(e)}var gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cd(r){return r.replace(gy,_y)}function _y(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function hd(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function xy(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===xd?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===$m?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Li&&(t="SHADOWMAP_TYPE_VSM"),t}function vy(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Os:case Fs:t="ENVMAP_TYPE_CUBE";break;case tl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yy(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Fs:t="ENVMAP_MODE_REFRACTION";break}return t}function My(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case vd:t="ENVMAP_BLENDING_MULTIPLY";break;case mg:t="ENVMAP_BLENDING_MIX";break;case gg:t="ENVMAP_BLENDING_ADD";break}return t}function Sy(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function by(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=xy(e),c=vy(e),h=yy(e),u=My(e),f=Sy(e),d=hy(e),g=uy(s),_=i.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vo).join(`
`),p.length>0&&(p+=`
`)):(m=[hd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),p=[hd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==lr?"#define TONE_MAPPING":"",e.toneMapping!==lr?Qt.tonemapping_pars_fragment:"",e.toneMapping!==lr?ly("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,ay("linearToOutputTexel",e.outputColorSpace),cy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vo).join(`
`)),o=gh(o),o=ad(o,e),o=ld(o,e),a=gh(a),a=ad(a,e),a=ld(a,e),o=cd(o),a=cd(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===bf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=b+m+o,x=b+p+a,C=rd(i,i.VERTEX_SHADER,S),A=rd(i,i.FRAGMENT_SHADER,x);i.attachShader(_,C),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(I){if(r.debug.checkShaderErrors){let N=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(C).trim(),X=i.getShaderInfoLog(A).trim(),J=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,A);else{let q=od(i,C,"vertex"),V=od(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+q+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||X==="")&&(H=!1);H&&(I.diagnostics={runnable:J,programLog:N,vertexShader:{log:F,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(C),i.deleteShader(A),R=new Us(i,_),y=fy(i,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,iy)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ry++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}var wy=0,_h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new xh(t),e.set(t,n)),n}},xh=class{constructor(t){this.id=wy++,this.code=t,this.usedTimes=0}};function Ty(r,t,e,n,i,s,o){let a=new za,l=new _h,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,v,I,N,F){let X=N.fog,J=F.geometry,H=y.isMeshStandardMaterial?N.environment:null,q=(y.isMeshStandardMaterial?e:t).get(y.envMap||H),V=q&&q.mapping===tl?q.image.height:null,nt=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let P=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,j=P!==void 0?P.length:0,St=0;J.morphAttributes.position!==void 0&&(St=1),J.morphAttributes.normal!==void 0&&(St=2),J.morphAttributes.color!==void 0&&(St=3);let Ot,z,et,at;if(nt){let vt=gi[nt];Ot=vt.vertexShader,z=vt.fragmentShader}else Ot=y.vertexShader,z=y.fragmentShader,l.update(y),et=l.getVertexShaderID(y),at=l.getFragmentShaderID(y);let it=r.getRenderTarget(),xt=r.state.buffers.depth.getReversed(),Et=F.isInstancedMesh===!0,Ft=F.isBatchedMesh===!0,Yt=!!y.map,zt=!!y.matcap,Ct=!!q,D=!!y.aoMap,me=!!y.lightMap,kt=!!y.bumpMap,B=!!y.normalMap,Tt=!!y.displacementMap,ne=!!y.emissiveMap,Rt=!!y.metalnessMap,E=!!y.roughnessMap,M=y.anisotropy>0,W=y.clearcoat>0,tt=y.dispersion>0,Q=y.iridescence>0,$=y.sheen>0,ft=y.transmission>0,ct=M&&!!y.anisotropyMap,mt=W&&!!y.clearcoatMap,qt=W&&!!y.clearcoatNormalMap,rt=W&&!!y.clearcoatRoughnessMap,lt=Q&&!!y.iridescenceMap,Dt=Q&&!!y.iridescenceThicknessMap,Lt=$&&!!y.sheenColorMap,yt=$&&!!y.sheenRoughnessMap,Jt=!!y.specularMap,Bt=!!y.specularColorMap,se=!!y.specularIntensityMap,L=ft&&!!y.transmissionMap,ut=ft&&!!y.thicknessMap,Z=!!y.gradientMap,K=!!y.alphaMap,ht=y.alphaTest>0,dt=!!y.alphaHash,Vt=!!y.extensions,le=lr;y.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(le=r.toneMapping);let Pe={shaderID:nt,shaderType:y.type,shaderName:y.name,vertexShader:Ot,fragmentShader:z,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:at,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ft,batchingColor:Ft&&F._colorsTexture!==null,instancing:Et,instancingColor:Et&&F.instanceColor!==null,instancingMorph:Et&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:it===null?r.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Hs,alphaToCoverage:!!y.alphaToCoverage,map:Yt,matcap:zt,envMap:Ct,envMapMode:Ct&&q.mapping,envMapCubeUVHeight:V,aoMap:D,lightMap:me,bumpMap:kt,normalMap:B,displacementMap:f&&Tt,emissiveMap:ne,normalMapObjectSpace:B&&y.normalMapType===Cg,normalMapTangentSpace:B&&y.normalMapType===Ag,metalnessMap:Rt,roughnessMap:E,anisotropy:M,anisotropyMap:ct,clearcoat:W,clearcoatMap:mt,clearcoatNormalMap:qt,clearcoatRoughnessMap:rt,dispersion:tt,iridescence:Q,iridescenceMap:lt,iridescenceThicknessMap:Dt,sheen:$,sheenColorMap:Lt,sheenRoughnessMap:yt,specularMap:Jt,specularColorMap:Bt,specularIntensityMap:se,transmission:ft,transmissionMap:L,thicknessMap:ut,gradientMap:Z,opaque:y.transparent===!1&&y.blending===Is&&y.alphaToCoverage===!1,alphaMap:K,alphaTest:ht,alphaHash:dt,combine:y.combine,mapUv:Yt&&_(y.map.channel),aoMapUv:D&&_(y.aoMap.channel),lightMapUv:me&&_(y.lightMap.channel),bumpMapUv:kt&&_(y.bumpMap.channel),normalMapUv:B&&_(y.normalMap.channel),displacementMapUv:Tt&&_(y.displacementMap.channel),emissiveMapUv:ne&&_(y.emissiveMap.channel),metalnessMapUv:Rt&&_(y.metalnessMap.channel),roughnessMapUv:E&&_(y.roughnessMap.channel),anisotropyMapUv:ct&&_(y.anisotropyMap.channel),clearcoatMapUv:mt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:qt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(y.sheenRoughnessMap.channel),specularMapUv:Jt&&_(y.specularMap.channel),specularColorMapUv:Bt&&_(y.specularColorMap.channel),specularIntensityMapUv:se&&_(y.specularIntensityMap.channel),transmissionMapUv:L&&_(y.transmissionMap.channel),thicknessMapUv:ut&&_(y.thicknessMap.channel),alphaMapUv:K&&_(y.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(B||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!J.attributes.uv&&(Yt||K),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:xt,skinning:F.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:St,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:le,decodeVideoTexture:Yt&&y.map.isVideoTexture===!0&&ae.getTransfer(y.map.colorSpace)===pe,decodeVideoTextureEmissive:ne&&y.emissiveMap.isVideoTexture===!0&&ae.getTransfer(y.emissiveMap.colorSpace)===pe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ui,flipSided:y.side===An,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Vt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&y.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function p(y){let v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)v.push(I),v.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(b(v,y),S(v,y),v.push(r.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function b(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function S(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){let v=g[y.type],I;if(v){let N=gi[v];I=m_.clone(N.uniforms)}else I=y.uniforms;return I}function C(y,v){let I;for(let N=0,F=h.length;N<F;N++){let X=h[N];if(X.cacheKey===v){I=X,++I.usedTimes;break}}return I===void 0&&(I=new by(r,v,y,s),h.push(I)),I}function A(y){if(--y.usedTimes===0){let v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function T(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:R}}function Ey(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Ay(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ud(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function fd(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,g,_,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Ay),n.length>1&&n.sort(f||ud),i.length>1&&i.sort(f||ud)}function h(){for(let u=t,f=r.length;u<f;u++){let d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Cy(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new fd,r.set(n,[o])):i>=s.length?(o=new fd,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Ry(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Y,color:new oe};break;case"SpotLight":e={position:new Y,direction:new Y,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[t.id]=e,e}}}function Py(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Iy=0;function Ly(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Dy(r){let t=new Ry,e=Py(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);let i=new Y,s=new ke,o=new ke;function a(c){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,b=0,S=0,x=0,C=0,A=0,T=0;c.sort(Ly);for(let y=0,v=c.length;y<v;y++){let I=c[y],N=I.color,F=I.intensity,X=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=N.r*F,u+=N.g*F,f+=N.b*F;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],F);T++}else if(I.isDirectionalLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let q=I.shadow,V=e.get(I);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=J,n.directionalShadowMatrix[d]=I.shadow.matrix,b++}n.directional[d]=H,d++}else if(I.isSpotLight){let H=t.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(N).multiplyScalar(F),H.distance=X,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[_]=H;let q=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,q.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[_]=q.matrix,I.castShadow){let V=e.get(I);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=J,x++}_++}else if(I.isRectAreaLight){let H=t.get(I);H.color.copy(N).multiplyScalar(F),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=H,m++}else if(I.isPointLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let q=I.shadow,V=e.get(I);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=I.shadow.matrix,S++}n.point[g]=H,g++}else if(I.isHemisphereLight){let H=t.get(I);H.skyColor.copy(I.color).multiplyScalar(F),H.groundColor.copy(I.groundColor).multiplyScalar(F),n.hemi[p]=H,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==b||R.numPointShadows!==S||R.numSpotShadows!==x||R.numSpotMaps!==C||R.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=b,R.numPointShadows=S,R.numSpotShadows=x,R.numSpotMaps=C,R.numLightProbes=T,n.version=Iy++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let S=c[p];if(S.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(S.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(S.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function dd(r){let t=new Dy(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Uy(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new dd(r),t.set(i,[a])):s>=o.length?(a=new dd(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var vh=class extends kr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Tg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yh=class extends kr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Oy=`uniform sampler2D shadow_pass;
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
}`;function Fy(r,t,e){let n=new Xa,i=new xe,s=new xe,o=new Ne,a=new vh({depthPacking:Eg}),l=new yh,c={},h=e.maxTextureSize,u={[cr]:An,[An]:cr,[Ui]:Ui},f=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:Ny,fragmentShader:Oy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new xi;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ci(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xd;let p=this.type;this.render=function(A,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let y=r.getRenderTarget(),v=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),N=r.state;N.setBlending(ar),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let F=p!==Li&&this.type===Li,X=p===Li&&this.type!==Li;for(let J=0,H=A.length;J<H;J++){let q=A[J],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let nt=V.getFrameExtents();if(i.multiply(nt),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/nt.x),i.x=s.x*nt.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/nt.y),i.y=s.y*nt.y,V.mapSize.y=s.y)),V.map===null||F===!0||X===!0){let j=this.type!==Li?{minFilter:hi,magFilter:hi}:{};V.map!==null&&V.map.dispose(),V.map=new ki(i.x,i.y,j),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();let P=V.getViewportCount();for(let j=0;j<P;j++){let St=V.getViewport(j);o.set(s.x*St.x,s.y*St.y,s.x*St.z,s.y*St.w),N.viewport(o),V.updateMatrices(q,j),n=V.getFrustum(),x(T,R,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===Li&&b(V,R),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,v,I)};function b(A,T){let R=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ki(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(T,null,R,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(T,null,R,d,_,null)}function S(A,T,R,y){let v=null,I=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)v=I;else if(v=R.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let N=v.uuid,F=T.uuid,X=c[N];X===void 0&&(X={},c[N]=X);let J=X[F];J===void 0&&(J=v.clone(),X[F]=J,T.addEventListener("dispose",C)),v=J}if(v.visible=T.visible,v.wireframe=T.wireframe,y===Li?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:u[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let N=r.properties.get(v);N.light=R}return v}function x(A,T,R,y,v){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Li)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let F=t.update(A),X=A.material;if(Array.isArray(X)){let J=F.groups;for(let H=0,q=J.length;H<q;H++){let V=J[H],nt=X[V.materialIndex];if(nt&&nt.visible){let P=S(A,nt,y,v);A.onBeforeShadow(r,A,T,R,F,P,V),r.renderBufferDirect(R,null,F,P,A,V),A.onAfterShadow(r,A,T,R,F,P,V)}}}else if(X.visible){let J=S(A,X,y,v);A.onBeforeShadow(r,A,T,R,F,J,null),r.renderBufferDirect(R,null,F,J,A,null),A.onAfterShadow(r,A,T,R,F,J,null)}}let N=A.children;for(let F=0,X=N.length;F<X;F++)x(N[F],T,R,y,v)}function C(A){A.target.removeEventListener("dispose",C);for(let R in c){let y=c[R],v=A.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}var By={[bc]:wc,[Tc]:Cc,[Ec]:Rc,[Ns]:Ac,[wc]:bc,[Cc]:Tc,[Rc]:Ec,[Ac]:Ns};function zy(r,t){function e(){let L=!1,ut=new Ne,Z=null,K=new Ne(0,0,0,0);return{setMask:function(ht){Z!==ht&&!L&&(r.colorMask(ht,ht,ht,ht),Z=ht)},setLocked:function(ht){L=ht},setClear:function(ht,dt,Vt,le,Pe){Pe===!0&&(ht*=le,dt*=le,Vt*=le),ut.set(ht,dt,Vt,le),K.equals(ut)===!1&&(r.clearColor(ht,dt,Vt,le),K.copy(ut))},reset:function(){L=!1,Z=null,K.set(-1,0,0,0)}}}function n(){let L=!1,ut=!1,Z=null,K=null,ht=null;return{setReversed:function(dt){if(ut!==dt){let Vt=t.get("EXT_clip_control");ut?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);let le=ht;ht=null,this.setClear(le)}ut=dt},getReversed:function(){return ut},setTest:function(dt){dt?it(r.DEPTH_TEST):xt(r.DEPTH_TEST)},setMask:function(dt){Z!==dt&&!L&&(r.depthMask(dt),Z=dt)},setFunc:function(dt){if(ut&&(dt=By[dt]),K!==dt){switch(dt){case bc:r.depthFunc(r.NEVER);break;case wc:r.depthFunc(r.ALWAYS);break;case Tc:r.depthFunc(r.LESS);break;case Ns:r.depthFunc(r.LEQUAL);break;case Ec:r.depthFunc(r.EQUAL);break;case Ac:r.depthFunc(r.GEQUAL);break;case Cc:r.depthFunc(r.GREATER);break;case Rc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=dt}},setLocked:function(dt){L=dt},setClear:function(dt){ht!==dt&&(ut&&(dt=1-dt),r.clearDepth(dt),ht=dt)},reset:function(){L=!1,Z=null,K=null,ht=null,ut=!1}}}function i(){let L=!1,ut=null,Z=null,K=null,ht=null,dt=null,Vt=null,le=null,Pe=null;return{setTest:function(vt){L||(vt?it(r.STENCIL_TEST):xt(r.STENCIL_TEST))},setMask:function(vt){ut!==vt&&!L&&(r.stencilMask(vt),ut=vt)},setFunc:function(vt,At,$t){(Z!==vt||K!==At||ht!==$t)&&(r.stencilFunc(vt,At,$t),Z=vt,K=At,ht=$t)},setOp:function(vt,At,$t){(dt!==vt||Vt!==At||le!==$t)&&(r.stencilOp(vt,At,$t),dt=vt,Vt=At,le=$t)},setLocked:function(vt){L=vt},setClear:function(vt){Pe!==vt&&(r.clearStencil(vt),Pe=vt)},reset:function(){L=!1,ut=null,Z=null,K=null,ht=null,dt=null,Vt=null,le=null,Pe=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,S=null,x=null,C=null,A=null,T=new oe(0,0,0),R=0,y=!1,v=null,I=null,N=null,F=null,X=null,J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,q=0,V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=q>=2);let nt=null,P={},j=r.getParameter(r.SCISSOR_BOX),St=r.getParameter(r.VIEWPORT),Ot=new Ne().fromArray(j),z=new Ne().fromArray(St);function et(L,ut,Z,K){let ht=new Uint8Array(4),dt=r.createTexture();r.bindTexture(L,dt),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Vt=0;Vt<Z;Vt++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ut,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,ht):r.texImage2D(ut+Vt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ht);return dt}let at={};at[r.TEXTURE_2D]=et(r.TEXTURE_2D,r.TEXTURE_2D,1),at[r.TEXTURE_CUBE_MAP]=et(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[r.TEXTURE_2D_ARRAY]=et(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),at[r.TEXTURE_3D]=et(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(r.DEPTH_TEST),o.setFunc(Ns),kt(!1),B(pf),it(r.CULL_FACE),D(ar);function it(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function xt(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function Et(L,ut){return u[L]!==ut?(r.bindFramebuffer(L,ut),u[L]=ut,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ut),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ut),!0):!1}function Ft(L,ut){let Z=d,K=!1;if(L){Z=f.get(ut),Z===void 0&&(Z=[],f.set(ut,Z));let ht=L.textures;if(Z.length!==ht.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,Vt=ht.length;dt<Vt;dt++)Z[dt]=r.COLOR_ATTACHMENT0+dt;Z.length=ht.length,K=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,K=!0);K&&r.drawBuffers(Z)}function Yt(L){return g!==L?(r.useProgram(L),g=L,!0):!1}let zt={[Dr]:r.FUNC_ADD,[Qm]:r.FUNC_SUBTRACT,[jm]:r.FUNC_REVERSE_SUBTRACT};zt[tg]=r.MIN,zt[eg]=r.MAX;let Ct={[ng]:r.ZERO,[ig]:r.ONE,[rg]:r.SRC_COLOR,[Mc]:r.SRC_ALPHA,[hg]:r.SRC_ALPHA_SATURATE,[lg]:r.DST_COLOR,[og]:r.DST_ALPHA,[sg]:r.ONE_MINUS_SRC_COLOR,[Sc]:r.ONE_MINUS_SRC_ALPHA,[cg]:r.ONE_MINUS_DST_COLOR,[ag]:r.ONE_MINUS_DST_ALPHA,[ug]:r.CONSTANT_COLOR,[fg]:r.ONE_MINUS_CONSTANT_COLOR,[dg]:r.CONSTANT_ALPHA,[pg]:r.ONE_MINUS_CONSTANT_ALPHA};function D(L,ut,Z,K,ht,dt,Vt,le,Pe,vt){if(L===ar){_===!0&&(xt(r.BLEND),_=!1);return}if(_===!1&&(it(r.BLEND),_=!0),L!==Km){if(L!==m||vt!==y){if((p!==Dr||x!==Dr)&&(r.blendEquation(r.FUNC_ADD),p=Dr,x=Dr),vt)switch(L){case Is:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mf:r.blendFunc(r.ONE,r.ONE);break;case gf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _f:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Is:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mf:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case gf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _f:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,S=null,C=null,A=null,T.set(0,0,0),R=0,m=L,y=vt}return}ht=ht||ut,dt=dt||Z,Vt=Vt||K,(ut!==p||ht!==x)&&(r.blendEquationSeparate(zt[ut],zt[ht]),p=ut,x=ht),(Z!==b||K!==S||dt!==C||Vt!==A)&&(r.blendFuncSeparate(Ct[Z],Ct[K],Ct[dt],Ct[Vt]),b=Z,S=K,C=dt,A=Vt),(le.equals(T)===!1||Pe!==R)&&(r.blendColor(le.r,le.g,le.b,Pe),T.copy(le),R=Pe),m=L,y=!1}function me(L,ut){L.side===Ui?xt(r.CULL_FACE):it(r.CULL_FACE);let Z=L.side===An;ut&&(Z=!Z),kt(Z),L.blending===Is&&L.transparent===!1?D(ar):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?it(r.SAMPLE_ALPHA_TO_COVERAGE):xt(r.SAMPLE_ALPHA_TO_COVERAGE)}function kt(L){v!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),v=L)}function B(L){L!==Zm?(it(r.CULL_FACE),L!==I&&(L===pf?r.cullFace(r.BACK):L===Jm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xt(r.CULL_FACE),I=L}function Tt(L){L!==N&&(H&&r.lineWidth(L),N=L)}function ne(L,ut,Z){L?(it(r.POLYGON_OFFSET_FILL),(F!==ut||X!==Z)&&(r.polygonOffset(ut,Z),F=ut,X=Z)):xt(r.POLYGON_OFFSET_FILL)}function Rt(L){L?it(r.SCISSOR_TEST):xt(r.SCISSOR_TEST)}function E(L){L===void 0&&(L=r.TEXTURE0+J-1),nt!==L&&(r.activeTexture(L),nt=L)}function M(L,ut,Z){Z===void 0&&(nt===null?Z=r.TEXTURE0+J-1:Z=nt);let K=P[Z];K===void 0&&(K={type:void 0,texture:void 0},P[Z]=K),(K.type!==L||K.texture!==ut)&&(nt!==Z&&(r.activeTexture(Z),nt=Z),r.bindTexture(L,ut||at[L]),K.type=L,K.texture=ut)}function W(){let L=P[nt];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function tt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(L){Ot.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Ot.copy(L))}function yt(L){z.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),z.copy(L))}function Jt(L,ut){let Z=c.get(ut);Z===void 0&&(Z=new WeakMap,c.set(ut,Z));let K=Z.get(L);K===void 0&&(K=r.getUniformBlockIndex(ut,L.name),Z.set(L,K))}function Bt(L,ut){let K=c.get(ut).get(L);l.get(ut)!==K&&(r.uniformBlockBinding(ut,K,L.__bindingPointIndex),l.set(ut,K))}function se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},nt=null,P={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,S=null,x=null,C=null,A=null,T=new oe(0,0,0),R=0,y=!1,v=null,I=null,N=null,F=null,X=null,Ot.set(0,0,r.canvas.width,r.canvas.height),z.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:it,disable:xt,bindFramebuffer:Et,drawBuffers:Ft,useProgram:Yt,setBlending:D,setMaterial:me,setFlipSided:kt,setCullFace:B,setLineWidth:Tt,setPolygonOffset:ne,setScissorTest:Rt,activeTexture:E,bindTexture:M,unbindTexture:W,compressedTexImage2D:tt,compressedTexImage3D:Q,texImage2D:lt,texImage3D:Dt,updateUBOMapping:Jt,uniformBlockBinding:Bt,texStorage2D:qt,texStorage3D:rt,texSubImage2D:$,texSubImage3D:ft,compressedTexSubImage2D:ct,compressedTexSubImage3D:mt,scissor:Lt,viewport:yt,reset:se}}function pd(r,t,e,n){let i=ky(n);switch(e){case wd:return r*t;case Ed:return r*t;case Ad:return r*t*2;case Cd:return r*t/i.components*i.byteLength;case kh:return r*t/i.components*i.byteLength;case Rd:return r*t*2/i.components*i.byteLength;case Vh:return r*t*2/i.components*i.byteLength;case Td:return r*t*3/i.components*i.byteLength;case li:return r*t*4/i.components*i.byteLength;case Hh:return r*t*4/i.components*i.byteLength;case Ca:case Ra:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Pa:case Ia:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nc:case Fc:return Math.max(r,16)*Math.max(t,8)/4;case Uc:case Oc:return Math.max(r,8)*Math.max(t,8)/2;case Bc:case zc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Vc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Gc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Xc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Yc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case qc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Zc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Jc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case $c:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Kc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Qc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case jc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case th:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case La:case eh:case nh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Pd:case ih:return Math.ceil(r/4)*Math.ceil(t/4)*8;case rh:case sh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ky(r){switch(r){case zi:case Md:return{byteLength:1,components:1};case bo:case Sd:case Eo:return{byteLength:2,components:1};case Bh:case zh:return{byteLength:2,components:4};case Br:case Fh:case Ni:return{byteLength:4,components:1};case bd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Vy(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return d?new OffscreenCanvas(E,M):Na("canvas")}function _(E,M,W){let tt=1,Q=Rt(E);if((Q.width>W||Q.height>W)&&(tt=W/Math.max(Q.width,Q.height)),tt<1)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap||typeof VideoFrame!="undefined"&&E instanceof VideoFrame){let $=Math.floor(tt*Q.width),ft=Math.floor(tt*Q.height);u===void 0&&(u=g($,ft));let ct=M?g($,ft):u;return ct.width=$,ct.height=ft,ct.getContext("2d").drawImage(E,0,0,$,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+ft+")."),ct}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){r.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?r.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(E,M,W,tt,Q=!1){if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=M;if(M===r.RED&&(W===r.FLOAT&&($=r.R32F),W===r.HALF_FLOAT&&($=r.R16F),W===r.UNSIGNED_BYTE&&($=r.R8)),M===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&($=r.R8UI),W===r.UNSIGNED_SHORT&&($=r.R16UI),W===r.UNSIGNED_INT&&($=r.R32UI),W===r.BYTE&&($=r.R8I),W===r.SHORT&&($=r.R16I),W===r.INT&&($=r.R32I)),M===r.RG&&(W===r.FLOAT&&($=r.RG32F),W===r.HALF_FLOAT&&($=r.RG16F),W===r.UNSIGNED_BYTE&&($=r.RG8)),M===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&($=r.RG8UI),W===r.UNSIGNED_SHORT&&($=r.RG16UI),W===r.UNSIGNED_INT&&($=r.RG32UI),W===r.BYTE&&($=r.RG8I),W===r.SHORT&&($=r.RG16I),W===r.INT&&($=r.RG32I)),M===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&($=r.RGB8UI),W===r.UNSIGNED_SHORT&&($=r.RGB16UI),W===r.UNSIGNED_INT&&($=r.RGB32UI),W===r.BYTE&&($=r.RGB8I),W===r.SHORT&&($=r.RGB16I),W===r.INT&&($=r.RGB32I)),M===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&($=r.RGBA8UI),W===r.UNSIGNED_SHORT&&($=r.RGBA16UI),W===r.UNSIGNED_INT&&($=r.RGBA32UI),W===r.BYTE&&($=r.RGBA8I),W===r.SHORT&&($=r.RGBA16I),W===r.INT&&($=r.RGBA32I)),M===r.RGB&&W===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),M===r.RGBA){let ft=Q?el:ae.getTransfer(tt);W===r.FLOAT&&($=r.RGBA32F),W===r.HALF_FLOAT&&($=r.RGBA16F),W===r.UNSIGNED_BYTE&&($=ft===pe?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(E,M){let W;return E?M===null||M===Br||M===Bs?W=r.DEPTH24_STENCIL8:M===Ni?W=r.DEPTH32F_STENCIL8:M===bo&&(W=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Br||M===Bs?W=r.DEPTH_COMPONENT24:M===Ni?W=r.DEPTH_COMPONENT32F:M===bo&&(W=r.DEPTH_COMPONENT16),W}function C(E,M){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==hi&&E.minFilter!==_i?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function A(E){let M=E.target;M.removeEventListener("dispose",A),R(M),M.isVideoTexture&&h.delete(M)}function T(E){let M=E.target;M.removeEventListener("dispose",T),v(M)}function R(E){let M=n.get(E);if(M.__webglInit===void 0)return;let W=E.source,tt=f.get(W);if(tt){let Q=tt[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(E),Object.keys(tt).length===0&&f.delete(W)}n.remove(E)}function y(E){let M=n.get(E);r.deleteTexture(M.__webglTexture);let W=E.source,tt=f.get(W);delete tt[M.__cacheKey],o.memory.textures--}function v(E){let M=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(M.__webglFramebuffer[tt]))for(let Q=0;Q<M.__webglFramebuffer[tt].length;Q++)r.deleteFramebuffer(M.__webglFramebuffer[tt][Q]);else r.deleteFramebuffer(M.__webglFramebuffer[tt]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[tt])}else{if(Array.isArray(M.__webglFramebuffer))for(let tt=0;tt<M.__webglFramebuffer.length;tt++)r.deleteFramebuffer(M.__webglFramebuffer[tt]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let tt=0;tt<M.__webglColorRenderbuffer.length;tt++)M.__webglColorRenderbuffer[tt]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[tt]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let W=E.textures;for(let tt=0,Q=W.length;tt<Q;tt++){let $=n.get(W[tt]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(W[tt])}n.remove(E)}let I=0;function N(){I=0}function F(){let E=I;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),I+=1,E}function X(E){let M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function J(E,M){let W=n.get(E);if(E.isVideoTexture&&Tt(E),E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){let tt=E.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(W,E,M);return}}e.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+M)}function H(E,M){let W=n.get(E);if(E.version>0&&W.__version!==E.version){z(W,E,M);return}e.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+M)}function q(E,M){let W=n.get(E);if(E.version>0&&W.__version!==E.version){z(W,E,M);return}e.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+M)}function V(E,M){let W=n.get(E);if(E.version>0&&W.__version!==E.version){et(W,E,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+M)}let nt={[Lc]:r.REPEAT,[Or]:r.CLAMP_TO_EDGE,[Dc]:r.MIRRORED_REPEAT},P={[hi]:r.NEAREST,[wg]:r.NEAREST_MIPMAP_NEAREST,[ra]:r.NEAREST_MIPMAP_LINEAR,[_i]:r.LINEAR,[ql]:r.LINEAR_MIPMAP_NEAREST,[Fr]:r.LINEAR_MIPMAP_LINEAR},j={[Rg]:r.NEVER,[Ng]:r.ALWAYS,[Pg]:r.LESS,[Id]:r.LEQUAL,[Ig]:r.EQUAL,[Ug]:r.GEQUAL,[Lg]:r.GREATER,[Dg]:r.NOTEQUAL};function St(E,M){if(M.type===Ni&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===_i||M.magFilter===ql||M.magFilter===ra||M.magFilter===Fr||M.minFilter===_i||M.minFilter===ql||M.minFilter===ra||M.minFilter===Fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(E,r.TEXTURE_WRAP_S,nt[M.wrapS]),r.texParameteri(E,r.TEXTURE_WRAP_T,nt[M.wrapT]),(E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY)&&r.texParameteri(E,r.TEXTURE_WRAP_R,nt[M.wrapR]),r.texParameteri(E,r.TEXTURE_MAG_FILTER,P[M.magFilter]),r.texParameteri(E,r.TEXTURE_MIN_FILTER,P[M.minFilter]),M.compareFunction&&(r.texParameteri(E,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(E,r.TEXTURE_COMPARE_FUNC,j[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===hi||M.minFilter!==ra&&M.minFilter!==Fr||M.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(E,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ot(E,M){let W=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",A));let tt=M.source,Q=f.get(tt);Q===void 0&&(Q={},f.set(tt,Q));let $=X(M);if($!==E.__cacheKey){Q[$]===void 0&&(Q[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),Q[$].usedTimes++;let ft=Q[E.__cacheKey];ft!==void 0&&(Q[E.__cacheKey].usedTimes--,ft.usedTimes===0&&y(M)),E.__cacheKey=$,E.__webglTexture=Q[$].texture}return W}function z(E,M,W){let tt=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(tt=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(tt=r.TEXTURE_3D);let Q=Ot(E,M),$=M.source;e.bindTexture(tt,E.__webglTexture,r.TEXTURE0+W);let ft=n.get($);if($.version!==ft.__version||Q===!0){e.activeTexture(r.TEXTURE0+W);let ct=ae.getPrimaries(ae.workingColorSpace),mt=M.colorSpace===or?null:ae.getPrimaries(M.colorSpace),qt=M.colorSpace===or||ct===mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let rt=_(M.image,!1,i.maxTextureSize);rt=ne(M,rt);let lt=s.convert(M.format,M.colorSpace),Dt=s.convert(M.type),Lt=S(M.internalFormat,lt,Dt,M.colorSpace,M.isVideoTexture);St(tt,M);let yt,Jt=M.mipmaps,Bt=M.isVideoTexture!==!0,se=ft.__version===void 0||Q===!0,L=$.dataReady,ut=C(M,rt);if(M.isDepthTexture)Lt=x(M.format===zs,M.type),se&&(Bt?e.texStorage2D(r.TEXTURE_2D,1,Lt,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,Lt,rt.width,rt.height,0,lt,Dt,null));else if(M.isDataTexture)if(Jt.length>0){Bt&&se&&e.texStorage2D(r.TEXTURE_2D,ut,Lt,Jt[0].width,Jt[0].height);for(let Z=0,K=Jt.length;Z<K;Z++)yt=Jt[Z],Bt?L&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,yt.width,yt.height,lt,Dt,yt.data):e.texImage2D(r.TEXTURE_2D,Z,Lt,yt.width,yt.height,0,lt,Dt,yt.data);M.generateMipmaps=!1}else Bt?(se&&e.texStorage2D(r.TEXTURE_2D,ut,Lt,rt.width,rt.height),L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt.width,rt.height,lt,Dt,rt.data)):e.texImage2D(r.TEXTURE_2D,0,Lt,rt.width,rt.height,0,lt,Dt,rt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Bt&&se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,Lt,Jt[0].width,Jt[0].height,rt.depth);for(let Z=0,K=Jt.length;Z<K;Z++)if(yt=Jt[Z],M.format!==li)if(lt!==null)if(Bt){if(L)if(M.layerUpdates.size>0){let ht=pd(yt.width,yt.height,M.format,M.type);for(let dt of M.layerUpdates){let Vt=yt.data.subarray(dt*ht/yt.data.BYTES_PER_ELEMENT,(dt+1)*ht/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,dt,yt.width,yt.height,1,lt,Vt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,yt.width,yt.height,rt.depth,lt,yt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,Lt,yt.width,yt.height,rt.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,yt.width,yt.height,rt.depth,lt,Dt,yt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Z,Lt,yt.width,yt.height,rt.depth,0,lt,Dt,yt.data)}else{Bt&&se&&e.texStorage2D(r.TEXTURE_2D,ut,Lt,Jt[0].width,Jt[0].height);for(let Z=0,K=Jt.length;Z<K;Z++)yt=Jt[Z],M.format!==li?lt!==null?Bt?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,yt.width,yt.height,lt,yt.data):e.compressedTexImage2D(r.TEXTURE_2D,Z,Lt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?L&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,yt.width,yt.height,lt,Dt,yt.data):e.texImage2D(r.TEXTURE_2D,Z,Lt,yt.width,yt.height,0,lt,Dt,yt.data)}else if(M.isDataArrayTexture)if(Bt){if(se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,Lt,rt.width,rt.height,rt.depth),L)if(M.layerUpdates.size>0){let Z=pd(rt.width,rt.height,M.format,M.type);for(let K of M.layerUpdates){let ht=rt.data.subarray(K*Z/rt.data.BYTES_PER_ELEMENT,(K+1)*Z/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,rt.width,rt.height,1,lt,Dt,ht)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,lt,Dt,rt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,rt.width,rt.height,rt.depth,0,lt,Dt,rt.data);else if(M.isData3DTexture)Bt?(se&&e.texStorage3D(r.TEXTURE_3D,ut,Lt,rt.width,rt.height,rt.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,lt,Dt,rt.data)):e.texImage3D(r.TEXTURE_3D,0,Lt,rt.width,rt.height,rt.depth,0,lt,Dt,rt.data);else if(M.isFramebufferTexture){if(se)if(Bt)e.texStorage2D(r.TEXTURE_2D,ut,Lt,rt.width,rt.height);else{let Z=rt.width,K=rt.height;for(let ht=0;ht<ut;ht++)e.texImage2D(r.TEXTURE_2D,ht,Lt,Z,K,0,lt,Dt,null),Z>>=1,K>>=1}}else if(Jt.length>0){if(Bt&&se){let Z=Rt(Jt[0]);e.texStorage2D(r.TEXTURE_2D,ut,Lt,Z.width,Z.height)}for(let Z=0,K=Jt.length;Z<K;Z++)yt=Jt[Z],Bt?L&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,lt,Dt,yt):e.texImage2D(r.TEXTURE_2D,Z,Lt,lt,Dt,yt);M.generateMipmaps=!1}else if(Bt){if(se){let Z=Rt(rt);e.texStorage2D(r.TEXTURE_2D,ut,Lt,Z.width,Z.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt,Dt,rt)}else e.texImage2D(r.TEXTURE_2D,0,Lt,lt,Dt,rt);m(M)&&p(tt),ft.__version=$.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function et(E,M,W){if(M.image.length!==6)return;let tt=Ot(E,M),Q=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,E.__webglTexture,r.TEXTURE0+W);let $=n.get(Q);if(Q.version!==$.__version||tt===!0){e.activeTexture(r.TEXTURE0+W);let ft=ae.getPrimaries(ae.workingColorSpace),ct=M.colorSpace===or?null:ae.getPrimaries(M.colorSpace),mt=M.colorSpace===or||ft===ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let qt=M.isCompressedTexture||M.image[0].isCompressedTexture,rt=M.image[0]&&M.image[0].isDataTexture,lt=[];for(let K=0;K<6;K++)!qt&&!rt?lt[K]=_(M.image[K],!0,i.maxCubemapSize):lt[K]=rt?M.image[K].image:M.image[K],lt[K]=ne(M,lt[K]);let Dt=lt[0],Lt=s.convert(M.format,M.colorSpace),yt=s.convert(M.type),Jt=S(M.internalFormat,Lt,yt,M.colorSpace),Bt=M.isVideoTexture!==!0,se=$.__version===void 0||tt===!0,L=Q.dataReady,ut=C(M,Dt);St(r.TEXTURE_CUBE_MAP,M);let Z;if(qt){Bt&&se&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ut,Jt,Dt.width,Dt.height);for(let K=0;K<6;K++){Z=lt[K].mipmaps;for(let ht=0;ht<Z.length;ht++){let dt=Z[ht];M.format!==li?Lt!==null?Bt?L&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,dt.width,dt.height,Lt,dt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,Jt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,dt.width,dt.height,Lt,yt,dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,Jt,dt.width,dt.height,0,Lt,yt,dt.data)}}}else{if(Z=M.mipmaps,Bt&&se){Z.length>0&&ut++;let K=Rt(lt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ut,Jt,K.width,K.height)}for(let K=0;K<6;K++)if(rt){Bt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,lt[K].width,lt[K].height,Lt,yt,lt[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Jt,lt[K].width,lt[K].height,0,Lt,yt,lt[K].data);for(let ht=0;ht<Z.length;ht++){let Vt=Z[ht].image[K].image;Bt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,Vt.width,Vt.height,Lt,yt,Vt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,Jt,Vt.width,Vt.height,0,Lt,yt,Vt.data)}}else{Bt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Lt,yt,lt[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Jt,Lt,yt,lt[K]);for(let ht=0;ht<Z.length;ht++){let dt=Z[ht];Bt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,Lt,yt,dt.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,Jt,Lt,yt,dt.image[K])}}}m(M)&&p(r.TEXTURE_CUBE_MAP),$.__version=Q.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function at(E,M,W,tt,Q,$){let ft=s.convert(W.format,W.colorSpace),ct=s.convert(W.type),mt=S(W.internalFormat,ft,ct,W.colorSpace),qt=n.get(M),rt=n.get(W);if(rt.__renderTarget=M,!qt.__hasExternalTextures){let lt=Math.max(1,M.width>>$),Dt=Math.max(1,M.height>>$);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,$,mt,lt,Dt,M.depth,0,ft,ct,null):e.texImage2D(Q,$,mt,lt,Dt,0,ft,ct,null)}e.bindFramebuffer(r.FRAMEBUFFER,E),B(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,tt,Q,rt.__webglTexture,0,kt(M)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,tt,Q,rt.__webglTexture,$),e.bindFramebuffer(r.FRAMEBUFFER,null)}function it(E,M,W){if(r.bindRenderbuffer(r.RENDERBUFFER,E),M.depthBuffer){let tt=M.depthTexture,Q=tt&&tt.isDepthTexture?tt.type:null,$=x(M.stencilBuffer,Q),ft=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=kt(M);B(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ct,$,M.width,M.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,ct,$,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,$,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ft,r.RENDERBUFFER,E)}else{let tt=M.textures;for(let Q=0;Q<tt.length;Q++){let $=tt[Q],ft=s.convert($.format,$.colorSpace),ct=s.convert($.type),mt=S($.internalFormat,ft,ct,$.colorSpace),qt=kt(M);W&&B(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,mt,M.width,M.height):B(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt,mt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,mt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xt(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let tt=n.get(M.depthTexture);tt.__renderTarget=M,(!tt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);let Q=tt.__webglTexture,$=kt(M);if(M.depthTexture.format===Ls)B(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(M.depthTexture.format===zs)B(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Et(E){let M=n.get(E),W=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){let tt=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),tt){let Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,tt.removeEventListener("dispose",Q)};tt.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=tt}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");xt(M.__webglFramebuffer,E)}else if(W){M.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[tt]),M.__webglDepthbuffer[tt]===void 0)M.__webglDepthbuffer[tt]=r.createRenderbuffer(),it(M.__webglDepthbuffer[tt],E,!1);else{let Q=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[tt];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,$)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),it(M.__webglDepthbuffer,E,!1);else{let tt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,Q)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ft(E,M,W){let tt=n.get(E);M!==void 0&&at(tt.__webglFramebuffer,E,E.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&Et(E)}function Yt(E){let M=E.texture,W=n.get(E),tt=n.get(M);E.addEventListener("dispose",T);let Q=E.textures,$=E.isWebGLCubeRenderTarget===!0,ft=Q.length>1;if(ft||(tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture()),tt.__version=M.version,o.memory.textures++),$){W.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[ct]=[];for(let mt=0;mt<M.mipmaps.length;mt++)W.__webglFramebuffer[ct][mt]=r.createFramebuffer()}else W.__webglFramebuffer[ct]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let ct=0;ct<M.mipmaps.length;ct++)W.__webglFramebuffer[ct]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(ft)for(let ct=0,mt=Q.length;ct<mt;ct++){let qt=n.get(Q[ct]);qt.__webglTexture===void 0&&(qt.__webglTexture=r.createTexture(),o.memory.textures++)}if(E.samples>0&&B(E)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ct=0;ct<Q.length;ct++){let mt=Q[ct];W.__webglColorRenderbuffer[ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[ct]);let qt=s.convert(mt.format,mt.colorSpace),rt=s.convert(mt.type),lt=S(mt.internalFormat,qt,rt,mt.colorSpace,E.isXRRenderTarget===!0),Dt=kt(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,lt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,W.__webglColorRenderbuffer[ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),it(W.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture),St(r.TEXTURE_CUBE_MAP,M);for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0)for(let mt=0;mt<M.mipmaps.length;mt++)at(W.__webglFramebuffer[ct][mt],E,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,mt);else at(W.__webglFramebuffer[ct],E,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(M)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let ct=0,mt=Q.length;ct<mt;ct++){let qt=Q[ct],rt=n.get(qt);e.bindTexture(r.TEXTURE_2D,rt.__webglTexture),St(r.TEXTURE_2D,qt),at(W.__webglFramebuffer,E,qt,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,0),m(qt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ct=r.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ct=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ct,tt.__webglTexture),St(ct,M),M.mipmaps&&M.mipmaps.length>0)for(let mt=0;mt<M.mipmaps.length;mt++)at(W.__webglFramebuffer[mt],E,M,r.COLOR_ATTACHMENT0,ct,mt);else at(W.__webglFramebuffer,E,M,r.COLOR_ATTACHMENT0,ct,0);m(M)&&p(ct),e.unbindTexture()}E.depthBuffer&&Et(E)}function zt(E){let M=E.textures;for(let W=0,tt=M.length;W<tt;W++){let Q=M[W];if(m(Q)){let $=b(E),ft=n.get(Q).__webglTexture;e.bindTexture($,ft),p($),e.unbindTexture()}}}let Ct=[],D=[];function me(E){if(E.samples>0){if(B(E)===!1){let M=E.textures,W=E.width,tt=E.height,Q=r.COLOR_BUFFER_BIT,$=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=n.get(E),ct=M.length>1;if(ct)for(let mt=0;mt<M.length;mt++)e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let mt=0;mt<M.length;mt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);let qt=n.get(M[mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,qt,0)}r.blitFramebuffer(0,0,W,tt,0,0,W,tt,Q,r.NEAREST),l===!0&&(Ct.length=0,D.length=0,Ct.push(r.COLOR_ATTACHMENT0+mt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ct.push($),D.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ct))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ct)for(let mt=0;mt<M.length;mt++){e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);let qt=n.get(M[mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,qt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let M=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function kt(E){return Math.min(i.maxSamples,E.samples)}function B(E){let M=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Tt(E){let M=o.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function ne(E,M){let W=E.colorSpace,tt=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||W!==Hs&&W!==or&&(ae.getTransfer(W)===pe?(tt!==li||Q!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function Rt(E){return typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame!="undefined"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=J,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=V,this.rebindTextures=Ft,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=at,this.useMultisampledRTT=B}function Hy(r,t){function e(n,i=or){let s,o=ae.getTransfer(i);if(n===zi)return r.UNSIGNED_BYTE;if(n===Bh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===zh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===bd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Md)return r.BYTE;if(n===Sd)return r.SHORT;if(n===bo)return r.UNSIGNED_SHORT;if(n===Fh)return r.INT;if(n===Br)return r.UNSIGNED_INT;if(n===Ni)return r.FLOAT;if(n===Eo)return r.HALF_FLOAT;if(n===wd)return r.ALPHA;if(n===Td)return r.RGB;if(n===li)return r.RGBA;if(n===Ed)return r.LUMINANCE;if(n===Ad)return r.LUMINANCE_ALPHA;if(n===Ls)return r.DEPTH_COMPONENT;if(n===zs)return r.DEPTH_STENCIL;if(n===Cd)return r.RED;if(n===kh)return r.RED_INTEGER;if(n===Rd)return r.RG;if(n===Vh)return r.RG_INTEGER;if(n===Hh)return r.RGBA_INTEGER;if(n===Ca||n===Ra||n===Pa||n===Ia)if(o===pe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ca)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ca)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ra)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ia)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uc||n===Nc||n===Oc||n===Fc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Uc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bc||n===zc||n===kc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Bc||n===zc)return o===pe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===kc)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vc||n===Hc||n===Gc||n===Wc||n===Xc||n===Yc||n===qc||n===Zc||n===Jc||n===$c||n===Kc||n===Qc||n===jc||n===th)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Vc)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hc)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gc)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wc)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xc)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yc)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qc)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zc)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jc)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$c)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kc)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qc)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jc)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===th)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===La||n===eh||n===nh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===La)return o===pe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===eh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pd||n===ih||n===rh||n===sh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===La)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ih)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var Mh=class extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ps=class extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gy={type:"move"},So=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ps;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Wy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xy=`
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

}`,Sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Zn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $n({vertexShader:Wy,fragmentShader:Xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ci(new Ya(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bh=class extends hr{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,_=new Sh,m=e.getContextAttributes(),p=null,b=null,S=[],x=[],C=new xe,A=null,T=new _n;T.viewport=new Ne;let R=new _n;R.viewport=new Ne;let y=[T,R],v=new Mh,I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let et=S[z];return et===void 0&&(et=new So,S[z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(z){let et=S[z];return et===void 0&&(et=new So,S[z]=et),et.getGripSpace()},this.getHand=function(z){let et=S[z];return et===void 0&&(et=new So,S[z]=et),et.getHandSpace()};function F(z){let et=x.indexOf(z.inputSource);if(et===-1)return;let at=S[et];at!==void 0&&(at.update(z.inputSource,z.frame,c||o),at.dispatchEvent({type:z.type,data:z.inputSource}))}function X(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",J);for(let z=0;z<S.length;z++){let et=x[z];et!==null&&(x[z]=null,S[z].disconnect(et))}I=null,N=null,_.reset(),t.setRenderTarget(p),d=null,f=null,u=null,i=null,b=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",X),i.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){let et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new ki(d.framebufferWidth,d.framebufferHeight,{format:li,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,at=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?zs:Ls,at=m.stencil?Bs:Br);let xt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(xt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new ki(f.textureWidth,f.textureHeight,{format:li,type:zi,depthTexture:new Za(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ot.setContext(i),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(z){for(let et=0;et<z.removed.length;et++){let at=z.removed[et],it=x.indexOf(at);it>=0&&(x[it]=null,S[it].disconnect(at))}for(let et=0;et<z.added.length;et++){let at=z.added[et],it=x.indexOf(at);if(it===-1){for(let Et=0;Et<S.length;Et++)if(Et>=x.length){x.push(at),it=Et;break}else if(x[Et]===null){x[Et]=at,it=Et;break}if(it===-1)break}let xt=S[it];xt&&xt.connect(at)}}let H=new Y,q=new Y;function V(z,et,at){H.setFromMatrixPosition(et.matrixWorld),q.setFromMatrixPosition(at.matrixWorld);let it=H.distanceTo(q),xt=et.projectionMatrix.elements,Et=at.projectionMatrix.elements,Ft=xt[14]/(xt[10]-1),Yt=xt[14]/(xt[10]+1),zt=(xt[9]+1)/xt[5],Ct=(xt[9]-1)/xt[5],D=(xt[8]-1)/xt[0],me=(Et[8]+1)/Et[0],kt=Ft*D,B=Ft*me,Tt=it/(-D+me),ne=Tt*-D;if(et.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ne),z.translateZ(Tt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),xt[10]===-1)z.projectionMatrix.copy(et.projectionMatrix),z.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let Rt=Ft+Tt,E=Yt+Tt,M=kt-ne,W=B+(it-ne),tt=zt*Yt/E*Rt,Q=Ct*Yt/E*Rt;z.projectionMatrix.makePerspective(M,W,tt,Q,Rt,E),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function nt(z,et){et===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(et.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;let et=z.near,at=z.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(at=_.depthFar)),v.near=R.near=T.near=et,v.far=R.far=T.far=at,(I!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),I=v.near,N=v.far),T.layers.mask=z.layers.mask|2,R.layers.mask=z.layers.mask|4,v.layers.mask=T.layers.mask|R.layers.mask;let it=z.parent,xt=v.cameras;nt(v,it);for(let Et=0;Et<xt.length;Et++)nt(xt[Et],it);xt.length===2?V(v,T,R):v.projectionMatrix.copy(T.projectionMatrix),P(z,v,it)};function P(z,et,at){at===null?z.matrix.copy(et.matrixWorld):(z.matrix.copy(at.matrixWorld),z.matrix.invert(),z.matrix.multiply(et.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(et.projectionMatrix),z.projectionMatrixInverse.copy(et.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=wo*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let j=null;function St(z,et){if(h=et.getViewerPose(c||o),g=et,h!==null){let at=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let it=!1;at.length!==v.cameras.length&&(v.cameras.length=0,it=!0);for(let Et=0;Et<at.length;Et++){let Ft=at[Et],Yt=null;if(d!==null)Yt=d.getViewport(Ft);else{let Ct=u.getViewSubImage(f,Ft);Yt=Ct.viewport,Et===0&&(t.setRenderTargetTextures(b,Ct.colorTexture,f.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(b))}let zt=y[Et];zt===void 0&&(zt=new _n,zt.layers.enable(Et),zt.viewport=new Ne,y[Et]=zt),zt.matrix.fromArray(Ft.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Ft.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Et===0&&(v.matrix.copy(zt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),it===!0&&v.cameras.push(zt)}let xt=i.enabledFeatures;if(xt&&xt.includes("depth-sensing")){let Et=u.getDepthInformation(at[0]);Et&&Et.isValid&&Et.texture&&_.init(t,Et,i.renderState)}}for(let at=0;at<S.length;at++){let it=x[at],xt=S[at];it!==null&&xt!==void 0&&xt.update(it,et,c||o)}j&&j(z,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}let Ot=new Od;Ot.setAnimationLoop(St),this.setAnimationLoop=function(z){j=z},this.dispose=function(){}}},Ir=new Vi,Yy=new ke;function qy(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Nd(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===An&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===An&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),S=b.envMap,x=b.envMapRotation;S&&(m.envMap.value=S,Ir.copy(x),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),m.envMapRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(Ir)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Zy(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){let x=S.program;n.uniformBlockBinding(b,x)}function c(b,S){let x=i[b.id];x===void 0&&(g(b),x=h(b),i[b.id]=x,b.addEventListener("dispose",m));let C=S.program;n.updateUBOMapping(b,C);let A=t.render.frame;s[b.id]!==A&&(f(b),s[b.id]=A)}function h(b){let S=u();b.__bindingPointIndex=S;let x=r.createBuffer(),C=b.__size,A=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,C,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,x),x}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let S=i[b.id],x=b.uniforms,C=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let A=0,T=x.length;A<T;A++){let R=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,v=R.length;y<v;y++){let I=R[y];if(d(I,A,y,C)===!0){let N=I.__offset,F=Array.isArray(I.value)?I.value:[I.value],X=0;for(let J=0;J<F.length;J++){let H=F[J],q=_(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,N+X,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,X),X+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(b,S,x,C){let A=b.value,T=S+"_"+x;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{let R=C[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return C[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(b){let S=b.uniforms,x=0,C=16;for(let T=0,R=S.length;T<R;T++){let y=Array.isArray(S[T])?S[T]:[S[T]];for(let v=0,I=y.length;v<I;v++){let N=y[v],F=Array.isArray(N.value)?N.value:[N.value];for(let X=0,J=F.length;X<J;X++){let H=F[X],q=_(H),V=x%C,nt=V%q.boundary,P=V+nt;x+=nt,P!==0&&C-P<q.storage&&(x+=C-P),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=q.storage}}}let A=x%C;return A>0&&(x+=C-A),b.__size=x,b.__cache={},this}function _(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){let S=b.target;S.removeEventListener("dispose",m);let x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(let b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var Ja=class{constructor(t={}){let{canvas:e=Qg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,b=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qn,this.toneMapping=lr,this.toneMappingExposure=1;let x=this,C=!1,A=0,T=0,R=null,y=-1,v=null,I=new Ne,N=new Ne,F=null,X=new oe(0),J=0,H=e.width,q=e.height,V=1,nt=null,P=null,j=new Ne(0,0,H,q),St=new Ne(0,0,H,q),Ot=!1,z=new Xa,et=!1,at=!1,it=new ke,xt=new ke,Et=new Y,Ft=new Ne,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},zt=!1;function Ct(){return R===null?V:1}let D=n;function me(w,U){return e.getContext(w,U)}try{let w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oh}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",dt,!1),D===null){let U="webgl2";if(D=me(U,w),D===null)throw me(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let kt,B,Tt,ne,Rt,E,M,W,tt,Q,$,ft,ct,mt,qt,rt,lt,Dt,Lt,yt,Jt,Bt,se,L;function ut(){kt=new hv(D),kt.init(),Bt=new Hy(D,kt),B=new rv(D,kt,t,Bt),Tt=new zy(D,kt),B.reverseDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),ne=new dv(D),Rt=new Ey,E=new Vy(D,kt,Tt,Rt,B,Bt,ne),M=new ov(x),W=new cv(x),tt=new y_(D),se=new nv(D,tt),Q=new uv(D,tt,ne,se),$=new mv(D,Q,tt,ne),Lt=new pv(D,B,E),rt=new sv(Rt),ft=new Ty(x,M,W,kt,B,se,rt),ct=new qy(x,Rt),mt=new Cy,qt=new Uy(kt),Dt=new ev(x,M,W,Tt,$,d,l),lt=new Fy(x,$,B),L=new Zy(D,ne,B,Tt),yt=new iv(D,kt,ne),Jt=new fv(D,kt,ne),ne.programs=ft.programs,x.capabilities=B,x.extensions=kt,x.properties=Rt,x.renderLists=mt,x.shadowMap=lt,x.state=Tt,x.info=ne}ut();let Z=new bh(x,D);this.xr=Z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=kt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=kt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(H,q,!1))},this.getSize=function(w){return w.set(H,q)},this.setSize=function(w,U,k=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,q=U,e.width=Math.floor(w*V),e.height=Math.floor(U*V),k===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(H*V,q*V).floor()},this.setDrawingBufferSize=function(w,U,k){H=w,q=U,V=k,e.width=Math.floor(w*k),e.height=Math.floor(U*k),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(j)},this.setViewport=function(w,U,k,G){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,U,k,G),Tt.viewport(I.copy(j).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(St)},this.setScissor=function(w,U,k,G){w.isVector4?St.set(w.x,w.y,w.z,w.w):St.set(w,U,k,G),Tt.scissor(N.copy(St).multiplyScalar(V).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(w){Tt.setScissorTest(Ot=w)},this.setOpaqueSort=function(w){nt=w},this.setTransparentSort=function(w){P=w},this.getClearColor=function(w){return w.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(w=!0,U=!0,k=!0){let G=0;if(w){let O=!1;if(R!==null){let st=R.texture.format;O=st===Hh||st===Vh||st===kh}if(O){let st=R.texture.type,ot=st===zi||st===Br||st===bo||st===Bs||st===Bh||st===zh,pt=Dt.getClearColor(),Mt=Dt.getClearAlpha(),Ht=pt.r,Xt=pt.g,wt=pt.b;ot?(g[0]=Ht,g[1]=Xt,g[2]=wt,g[3]=Mt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Ht,_[1]=Xt,_[2]=wt,_[3]=Mt,D.clearBufferiv(D.COLOR,0,_))}else G|=D.COLOR_BUFFER_BIT}U&&(G|=D.DEPTH_BUFFER_BIT),k&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),mt.dispose(),qt.dispose(),Rt.dispose(),M.dispose(),W.dispose(),$.dispose(),se.dispose(),L.dispose(),ft.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",gt),Z.removeEventListener("sessionend",Wt),Pt.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let w=ne.autoReset,U=lt.enabled,k=lt.autoUpdate,G=lt.needsUpdate,O=lt.type;ut(),ne.autoReset=w,lt.enabled=U,lt.autoUpdate=k,lt.needsUpdate=G,lt.type=O}function dt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Vt(w){let U=w.target;U.removeEventListener("dispose",Vt),le(U)}function le(w){Pe(w),Rt.remove(w)}function Pe(w){let U=Rt.get(w).programs;U!==void 0&&(U.forEach(function(k){ft.releaseProgram(k)}),w.isShaderMaterial&&ft.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,k,G,O,st){U===null&&(U=Yt);let ot=O.isMesh&&O.matrixWorld.determinant()<0,pt=Un(w,U,k,G,O);Tt.setMaterial(G,ot);let Mt=k.index,Ht=1;if(G.wireframe===!0){if(Mt=Q.getWireframeAttribute(k),Mt===void 0)return;Ht=2}let Xt=k.drawRange,wt=k.attributes.position,Zt=Xt.start*Ht,ce=(Xt.start+Xt.count)*Ht;st!==null&&(Zt=Math.max(Zt,st.start*Ht),ce=Math.min(ce,(st.start+st.count)*Ht)),Mt!==null?(Zt=Math.max(Zt,0),ce=Math.min(ce,Mt.count)):wt!=null&&(Zt=Math.max(Zt,0),ce=Math.min(ce,wt.count));let ue=ce-Zt;if(ue<0||ue===1/0)return;se.setup(O,G,pt,k,Mt);let Be,fe=yt;if(Mt!==null&&(Be=tt.get(Mt),fe=Jt,fe.setIndex(Be)),O.isMesh)G.wireframe===!0?(Tt.setLineWidth(G.wireframeLinewidth*Ct()),fe.setMode(D.LINES)):fe.setMode(D.TRIANGLES);else if(O.isLine){let It=G.linewidth;It===void 0&&(It=1),Tt.setLineWidth(It*Ct()),O.isLineSegments?fe.setMode(D.LINES):O.isLineLoop?fe.setMode(D.LINE_LOOP):fe.setMode(D.LINE_STRIP)}else O.isPoints?fe.setMode(D.POINTS):O.isSprite&&fe.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)fe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))fe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let It=O._multiDrawStarts,Ei=O._multiDrawCounts,de=O._multiDrawCount,ri=Mt?tt.get(Mt).bytesPerElement:1,ds=Rt.get(G).currentProgram.getUniforms();for(let Nn=0;Nn<de;Nn++)ds.setValue(D,"_gl_DrawID",Nn),fe.render(It[Nn]/ri,Ei[Nn])}else if(O.isInstancedMesh)fe.renderInstances(Zt,ue,O.count);else if(k.isInstancedBufferGeometry){let It=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ei=Math.min(k.instanceCount,It);fe.renderInstances(Zt,ue,Ei)}else fe.render(Zt,ue)};function vt(w,U,k){w.transparent===!0&&w.side===Ui&&w.forceSinglePass===!1?(w.side=An,w.needsUpdate=!0,ge(w,U,k),w.side=cr,w.needsUpdate=!0,ge(w,U,k),w.side=Ui):ge(w,U,k)}this.compile=function(w,U,k=null){k===null&&(k=w),p=qt.get(k),p.init(U),S.push(p),k.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==k&&w.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let G=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let st=O.material;if(st)if(Array.isArray(st))for(let ot=0;ot<st.length;ot++){let pt=st[ot];vt(pt,k,O),G.add(pt)}else vt(st,k,O),G.add(st)}),S.pop(),p=null,G},this.compileAsync=function(w,U,k=null){let G=this.compile(w,U,k);return new Promise(O=>{function st(){if(G.forEach(function(ot){Rt.get(ot).currentProgram.isReady()&&G.delete(ot)}),G.size===0){O(w);return}setTimeout(st,10)}kt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let At=null;function $t(w){At&&At(w)}function gt(){Pt.stop()}function Wt(){Pt.start()}let Pt=new Od;Pt.setAnimationLoop($t),typeof self!="undefined"&&Pt.setContext(self),this.setAnimationLoop=function(w){At=w,Z.setAnimationLoop(w),w===null?Pt.stop():Pt.start()},Z.addEventListener("sessionstart",gt),Z.addEventListener("sessionend",Wt),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(U),U=Z.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,U,R),p=qt.get(w,S.length),p.init(U),S.push(p),xt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),z.setFromProjectionMatrix(xt),at=this.localClippingEnabled,et=rt.init(this.clippingPlanes,at),m=mt.get(w,b.length),m.init(),b.push(m),Z.enabled===!0&&Z.isPresenting===!0){let st=x.xr.getDepthSensingMesh();st!==null&&Gt(st,U,-1/0,x.sortObjects)}Gt(w,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(nt,P),zt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,zt&&Dt.addToRenderList(m,w),this.info.render.frame++,et===!0&&rt.beginShadows();let k=p.state.shadowsArray;lt.render(k,w,U),et===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,O=m.transmissive;if(p.setupLights(),U.isArrayCamera){let st=U.cameras;if(O.length>0)for(let ot=0,pt=st.length;ot<pt;ot++){let Mt=st[ot];jt(G,O,w,Mt)}zt&&Dt.render(w);for(let ot=0,pt=st.length;ot<pt;ot++){let Mt=st[ot];Ue(m,w,Mt,Mt.viewport)}}else O.length>0&&jt(G,O,w,U),zt&&Dt.render(w),Ue(m,w,U);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(x,w,U),se.resetDefaultState(),y=-1,v=null,S.pop(),S.length>0?(p=S[S.length-1],et===!0&&rt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Gt(w,U,k,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||z.intersectsSprite(w)){G&&Ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xt);let ot=$.update(w),pt=w.material;pt.visible&&m.push(w,ot,pt,k,Ft.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||z.intersectsObject(w))){let ot=$.update(w),pt=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ft.copy(w.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Ft.copy(ot.boundingSphere.center)),Ft.applyMatrix4(w.matrixWorld).applyMatrix4(xt)),Array.isArray(pt)){let Mt=ot.groups;for(let Ht=0,Xt=Mt.length;Ht<Xt;Ht++){let wt=Mt[Ht],Zt=pt[wt.materialIndex];Zt&&Zt.visible&&m.push(w,ot,Zt,k,Ft.z,wt)}}else pt.visible&&m.push(w,ot,pt,k,Ft.z,null)}}let st=w.children;for(let ot=0,pt=st.length;ot<pt;ot++)Gt(st[ot],U,k,G)}function Ue(w,U,k,G){let O=w.opaque,st=w.transmissive,ot=w.transparent;p.setupLightsView(k),et===!0&&rt.setGlobalState(x.clippingPlanes,k),G&&Tt.viewport(I.copy(G)),O.length>0&&ye(O,U,k),st.length>0&&ye(st,U,k),ot.length>0&&ye(ot,U,k),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function jt(w,U,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new ki(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Eo:zi,minFilter:Fr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));let st=p.state.transmissionRenderTarget[G.id],ot=G.viewport||I;st.setSize(ot.z,ot.w);let pt=x.getRenderTarget();x.setRenderTarget(st),x.getClearColor(X),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),zt&&Dt.render(k);let Mt=x.toneMapping;x.toneMapping=lr;let Ht=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),et===!0&&rt.setGlobalState(x.clippingPlanes,G),ye(w,k,G),E.updateMultisampleRenderTarget(st),E.updateRenderTargetMipmap(st),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let wt=0,Zt=U.length;wt<Zt;wt++){let ce=U[wt],ue=ce.object,Be=ce.geometry,fe=ce.material,It=ce.group;if(fe.side===Ui&&ue.layers.test(G.layers)){let Ei=fe.side;fe.side=An,fe.needsUpdate=!0,Ge(ue,k,G,Be,fe,It),fe.side=Ei,fe.needsUpdate=!0,Xt=!0}}Xt===!0&&(E.updateMultisampleRenderTarget(st),E.updateRenderTargetMipmap(st))}x.setRenderTarget(pt),x.setClearColor(X,J),Ht!==void 0&&(G.viewport=Ht),x.toneMapping=Mt}function ye(w,U,k){let G=U.isScene===!0?U.overrideMaterial:null;for(let O=0,st=w.length;O<st;O++){let ot=w[O],pt=ot.object,Mt=ot.geometry,Ht=G===null?ot.material:G,Xt=ot.group;pt.layers.test(k.layers)&&Ge(pt,U,k,Mt,Ht,Xt)}}function Ge(w,U,k,G,O,st){w.onBeforeRender(x,U,k,G,O,st),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(x,U,k,G,w,st),O.transparent===!0&&O.side===Ui&&O.forceSinglePass===!1?(O.side=An,O.needsUpdate=!0,x.renderBufferDirect(k,U,G,O,w,st),O.side=cr,O.needsUpdate=!0,x.renderBufferDirect(k,U,G,O,w,st),O.side=Ui):x.renderBufferDirect(k,U,G,O,w,st),w.onAfterRender(x,U,k,G,O,st)}function ge(w,U,k){U.isScene!==!0&&(U=Yt);let G=Rt.get(w),O=p.state.lights,st=p.state.shadowsArray,ot=O.state.version,pt=ft.getParameters(w,O.state,st,U,k),Mt=ft.getProgramCacheKey(pt),Ht=G.programs;G.environment=w.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(w.isMeshStandardMaterial?W:M).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ht===void 0&&(w.addEventListener("dispose",Vt),Ht=new Map,G.programs=Ht);let Xt=Ht.get(Mt);if(Xt!==void 0){if(G.currentProgram===Xt&&G.lightsStateVersion===ot)return he(w,pt),Xt}else pt.uniforms=ft.getUniforms(w),w.onBeforeCompile(pt,x),Xt=ft.acquireProgram(pt,Mt),Ht.set(Mt,Xt),G.uniforms=pt.uniforms;let wt=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(wt.clippingPlanes=rt.uniform),he(w,pt),G.needsLights=dn(w),G.lightsStateVersion=ot,G.needsLights&&(wt.ambientLightColor.value=O.state.ambient,wt.lightProbe.value=O.state.probe,wt.directionalLights.value=O.state.directional,wt.directionalLightShadows.value=O.state.directionalShadow,wt.spotLights.value=O.state.spot,wt.spotLightShadows.value=O.state.spotShadow,wt.rectAreaLights.value=O.state.rectArea,wt.ltc_1.value=O.state.rectAreaLTC1,wt.ltc_2.value=O.state.rectAreaLTC2,wt.pointLights.value=O.state.point,wt.pointLightShadows.value=O.state.pointShadow,wt.hemisphereLights.value=O.state.hemi,wt.directionalShadowMap.value=O.state.directionalShadowMap,wt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,wt.spotShadowMap.value=O.state.spotShadowMap,wt.spotLightMatrix.value=O.state.spotLightMatrix,wt.spotLightMap.value=O.state.spotLightMap,wt.pointShadowMap.value=O.state.pointShadowMap,wt.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Xt,G.uniformsList=null,Xt}function _e(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=Us.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function he(w,U){let k=Rt.get(w);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Un(w,U,k,G,O){U.isScene!==!0&&(U=Yt),E.resetTextureUnits();let st=U.fog,ot=G.isMeshStandardMaterial?U.environment:null,pt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Hs,Mt=(G.isMeshStandardMaterial?W:M).get(G.envMap||ot),Ht=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Xt=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),wt=!!k.morphAttributes.position,Zt=!!k.morphAttributes.normal,ce=!!k.morphAttributes.color,ue=lr;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ue=x.toneMapping);let Be=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,fe=Be!==void 0?Be.length:0,It=Rt.get(G),Ei=p.state.lights;if(et===!0&&(at===!0||w!==v)){let Xn=w===v&&G.id===y;rt.setState(G,w,Xn)}let de=!1;G.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Ei.state.version||It.outputColorSpace!==pt||O.isBatchedMesh&&It.batching===!1||!O.isBatchedMesh&&It.batching===!0||O.isBatchedMesh&&It.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&It.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&It.instancing===!1||!O.isInstancedMesh&&It.instancing===!0||O.isSkinnedMesh&&It.skinning===!1||!O.isSkinnedMesh&&It.skinning===!0||O.isInstancedMesh&&It.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&It.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&It.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&It.instancingMorph===!1&&O.morphTexture!==null||It.envMap!==Mt||G.fog===!0&&It.fog!==st||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==rt.numPlanes||It.numIntersection!==rt.numIntersection)||It.vertexAlphas!==Ht||It.vertexTangents!==Xt||It.morphTargets!==wt||It.morphNormals!==Zt||It.morphColors!==ce||It.toneMapping!==ue||It.morphTargetsCount!==fe)&&(de=!0):(de=!0,It.__version=G.version);let ri=It.currentProgram;de===!0&&(ri=ge(G,U,O));let ds=!1,Nn=!1,uo=!1,be=ri.getUniforms(),mi=It.uniforms;if(Tt.useProgram(ri.program)&&(ds=!0,Nn=!0,uo=!0),G.id!==y&&(y=G.id,Nn=!0),ds||v!==w){Tt.buffers.depth.getReversed()?(it.copy(w.projectionMatrix),t_(it),e_(it),be.setValue(D,"projectionMatrix",it)):be.setValue(D,"projectionMatrix",w.projectionMatrix),be.setValue(D,"viewMatrix",w.matrixWorldInverse);let Qi=be.map.cameraPosition;Qi!==void 0&&Qi.setValue(D,Et.setFromMatrixPosition(w.matrixWorld)),B.logarithmicDepthBuffer&&be.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&be.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,Nn=!0,uo=!0)}if(O.isSkinnedMesh){be.setOptional(D,O,"bindMatrix"),be.setOptional(D,O,"bindMatrixInverse");let Xn=O.skeleton;Xn&&(Xn.boneTexture===null&&Xn.computeBoneTexture(),be.setValue(D,"boneTexture",Xn.boneTexture,E))}O.isBatchedMesh&&(be.setOptional(D,O,"batchingTexture"),be.setValue(D,"batchingTexture",O._matricesTexture,E),be.setOptional(D,O,"batchingIdTexture"),be.setValue(D,"batchingIdTexture",O._indirectTexture,E),be.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&be.setValue(D,"batchingColorTexture",O._colorsTexture,E));let fo=k.morphAttributes;if((fo.position!==void 0||fo.normal!==void 0||fo.color!==void 0)&&Lt.update(O,k,ri),(Nn||It.receiveShadow!==O.receiveShadow)&&(It.receiveShadow=O.receiveShadow,be.setValue(D,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(mi.envMap.value=Mt,mi.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(mi.envMapIntensity.value=U.environmentIntensity),Nn&&(be.setValue(D,"toneMappingExposure",x.toneMappingExposure),It.needsLights&&Se(mi,uo),st&&G.fog===!0&&ct.refreshFogUniforms(mi,st),ct.refreshMaterialUniforms(mi,G,V,q,p.state.transmissionRenderTarget[w.id]),Us.upload(D,_e(It),mi,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Us.upload(D,_e(It),mi,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&be.setValue(D,"center",O.center),be.setValue(D,"modelViewMatrix",O.modelViewMatrix),be.setValue(D,"normalMatrix",O.normalMatrix),be.setValue(D,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Xn=G.uniformsGroups;for(let Qi=0,ji=Xn.length;Qi<ji;Qi++){let df=Xn[Qi];L.update(df,ri),L.bind(df,ri)}}return ri}function Se(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function dn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,U,k){Rt.get(w.texture).__webglTexture=U,Rt.get(w.depthTexture).__webglTexture=k;let G=Rt.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){let k=Rt.get(w);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,k=0){R=w,A=U,T=k;let G=!0,O=null,st=!1,ot=!1;if(w){let Mt=Rt.get(w);if(Mt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(Mt.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(Mt.__hasExternalTextures)E.rebindTextures(w,Rt.get(w.texture).__webglTexture,Rt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let wt=w.depthTexture;if(Mt.__boundDepthTexture!==wt){if(wt!==null&&Rt.has(wt)&&(w.width!==wt.image.width||w.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}let Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(ot=!0);let Xt=Rt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xt[U])?O=Xt[U][k]:O=Xt[U],st=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?O=Rt.get(w).__webglMultisampledFramebuffer:Array.isArray(Xt)?O=Xt[k]:O=Xt,I.copy(w.viewport),N.copy(w.scissor),F=w.scissorTest}else I.copy(j).multiplyScalar(V).floor(),N.copy(St).multiplyScalar(V).floor(),F=Ot;if(Tt.bindFramebuffer(D.FRAMEBUFFER,O)&&G&&Tt.drawBuffers(w,O),Tt.viewport(I),Tt.scissor(N),Tt.setScissorTest(F),st){let Mt=Rt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,k)}else if(ot){let Mt=Rt.get(w.texture),Ht=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.__webglTexture,k||0,Ht)}y=-1},this.readRenderTargetPixels=function(w,U,k,G,O,st,ot){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ot!==void 0&&(pt=pt[ot]),pt){Tt.bindFramebuffer(D.FRAMEBUFFER,pt);try{let Mt=w.texture,Ht=Mt.format,Xt=Mt.type;if(!B.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&k>=0&&k<=w.height-O&&D.readPixels(U,k,G,O,Bt.convert(Ht),Bt.convert(Xt),st)}finally{let Mt=R!==null?Rt.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(w,U,k,G,O,st,ot){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ot!==void 0&&(pt=pt[ot]),pt){let Mt=w.texture,Ht=Mt.format,Xt=Mt.type;if(!B.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-G&&k>=0&&k<=w.height-O){Tt.bindFramebuffer(D.FRAMEBUFFER,pt);let wt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,wt),D.bufferData(D.PIXEL_PACK_BUFFER,st.byteLength,D.STREAM_READ),D.readPixels(U,k,G,O,Bt.convert(Ht),Bt.convert(Xt),0);let Zt=R!==null?Rt.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,Zt);let ce=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await jg(D,ce,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,wt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,st),D.deleteBuffer(wt),D.deleteSync(ce),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,k=0){w.isTexture!==!0&&(xo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);let G=Math.pow(2,-k),O=Math.floor(w.image.width*G),st=Math.floor(w.image.height*G),ot=U!==null?U.x:0,pt=U!==null?U.y:0;E.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,ot,pt,O,st),Tt.unbindTexture()},this.copyTextureToTexture=function(w,U,k=null,G=null,O=0){w.isTexture!==!0&&(xo("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],U=arguments[2],O=arguments[3]||0,k=null);let st,ot,pt,Mt,Ht,Xt,wt,Zt,ce,ue=w.isCompressedTexture?w.mipmaps[O]:w.image;k!==null?(st=k.max.x-k.min.x,ot=k.max.y-k.min.y,pt=k.isBox3?k.max.z-k.min.z:1,Mt=k.min.x,Ht=k.min.y,Xt=k.isBox3?k.min.z:0):(st=ue.width,ot=ue.height,pt=ue.depth||1,Mt=0,Ht=0,Xt=0),G!==null?(wt=G.x,Zt=G.y,ce=G.z):(wt=0,Zt=0,ce=0);let Be=Bt.convert(U.format),fe=Bt.convert(U.type),It;U.isData3DTexture?(E.setTexture3D(U,0),It=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),It=D.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),It=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let Ei=D.getParameter(D.UNPACK_ROW_LENGTH),de=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ri=D.getParameter(D.UNPACK_SKIP_PIXELS),ds=D.getParameter(D.UNPACK_SKIP_ROWS),Nn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ue.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ue.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Mt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ht),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xt);let uo=w.isDataArrayTexture||w.isData3DTexture,be=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let mi=Rt.get(w),fo=Rt.get(U),Xn=Rt.get(mi.__renderTarget),Qi=Rt.get(fo.__renderTarget);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,Xn.__webglFramebuffer),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let ji=0;ji<pt;ji++)uo&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Rt.get(w).__webglTexture,O,Xt+ji),w.isDepthTexture?(be&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Rt.get(U).__webglTexture,O,ce+ji),D.blitFramebuffer(Mt,Ht,st,ot,wt,Zt,st,ot,D.DEPTH_BUFFER_BIT,D.NEAREST)):be?D.copyTexSubImage3D(It,O,wt,Zt,ce+ji,Mt,Ht,st,ot):D.copyTexSubImage2D(It,O,wt,Zt,ce+ji,Mt,Ht,st,ot);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else be?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(It,O,wt,Zt,ce,st,ot,pt,Be,fe,ue.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(It,O,wt,Zt,ce,st,ot,pt,Be,ue.data):D.texSubImage3D(It,O,wt,Zt,ce,st,ot,pt,Be,fe,ue):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,wt,Zt,st,ot,Be,fe,ue.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,wt,Zt,ue.width,ue.height,Be,ue.data):D.texSubImage2D(D.TEXTURE_2D,O,wt,Zt,st,ot,Be,fe,ue);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ei),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,de),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ri),D.pixelStorei(D.UNPACK_SKIP_ROWS,ds),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Nn),O===0&&U.generateMipmaps&&D.generateMipmap(It),Tt.unbindTexture()},this.copyTextureToTexture3D=function(w,U,k=null,G=null,O=0){return w.isTexture!==!0&&(xo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,G=arguments[1]||null,w=arguments[2],U=arguments[3],O=arguments[4]||0),xo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,k,G,O)},this.initRenderTarget=function(w){Rt.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),Tt.unbindTexture()},this.resetState=function(){A=0,T=0,R=null,Tt.reset(),se.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var $a=class extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var wh=class extends kr{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},md=new ke,Th=new Ba,Ta=new fr,Ea=new Y,Ka=class extends Jn{constructor(t=new xi,e=new wh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(i),Ta.radius+=s,t.ray.intersectsSphere(Ta)===!1)return;md.copy(i).invert(),Th.copy(t.ray).applyMatrix4(md);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){let m=c.getX(g);Ea.fromBufferAttribute(u,m),gd(Ea,m,l,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Ea.fromBufferAttribute(u,g),gd(Ea,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function gd(r,t,e,n,i,s,o){let a=Th.distanceSqToPoint(r);if(a<e){let l=new Y;Th.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}function Aa(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Jy(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Vs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Eh=class extends Vs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xf,endingEnd:xf}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case vf:s=t,a=2*e-n;break;case yf:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vf:o=t,l=2*n-e;break;case yf:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,b=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,S=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let C=0;C!==a;++C)s[C]=p*o[h+C]+b*o[c+C]+S*o[l+C]+x*o[u+C];return s}},Ah=class extends Vs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},Ch=class extends Vs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ui=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Aa(e,this.TimeBufferType),this.values=Aa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Aa(t.times,Array),values:Aa(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ch(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ah(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Eh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Da:e=this.InterpolantFactoryMethodDiscrete;break;case oh:e=this.InterpolantFactoryMethodLinear;break;case Zl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Da;case this.InterpolantFactoryMethodLinear:return oh;case this.InterpolantFactoryMethodSmooth:return Zl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Jy(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Zl,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=oh;var Vr=class extends ui{constructor(t,e,n){super(t,e,n)}};Vr.prototype.ValueTypeName="bool";Vr.prototype.ValueBufferType=Array;Vr.prototype.DefaultInterpolation=Da;Vr.prototype.InterpolantFactoryMethodLinear=void 0;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Rh=class extends ui{};Rh.prototype.ValueTypeName="color";var Ph=class extends ui{};Ph.prototype.ValueTypeName="number";var Ih=class extends Vs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)ur.slerpFlat(s,0,o,c-a,o,c,l);return s}},Qa=class extends ui{InterpolantFactoryMethodLinear(t){return new Ih(this.times,this.values,this.getValueSize(),t)}};Qa.prototype.ValueTypeName="quaternion";Qa.prototype.InterpolantFactoryMethodSmooth=void 0;var Hr=class extends ui{constructor(t,e,n){super(t,e,n)}};Hr.prototype.ValueTypeName="string";Hr.prototype.ValueBufferType=Array;Hr.prototype.DefaultInterpolation=Da;Hr.prototype.InterpolantFactoryMethodLinear=void 0;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Lh=class extends ui{};Lh.prototype.ValueTypeName="vector";var Dh=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},$y=new Dh,Uh=class{constructor(t){this.manager=t!==void 0?t:$y,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Uh.DEFAULT_MATERIAL_NAME="__DEFAULT";var ja=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_d(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=_d();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function _d(){return performance.now()}var Yh="\\[\\]\\.:\\/",Ky=new RegExp("["+Yh+"]","g"),qh="[^"+Yh+"]",Qy="[^"+Yh.replace("\\.","")+"]",jy=/((?:WC+[\/:])*)/.source.replace("WC",qh),tM=/(WCOD+)?/.source.replace("WCOD",Qy),eM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qh),nM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qh),iM=new RegExp("^"+jy+tM+eM+nM+"$"),rM=["material","materials","bones","map"],Nh=class{constructor(t,e,n){let i=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Te=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ky,"")}static parseTrackName(t){let e=iM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);rM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=Nh;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Nb=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oh);function Hi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Zd(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var In={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ys={duration:.5,overwrite:!1,delay:0},fu,an,Ee,Qn=1e8,Me=1/Qn,eu=Math.PI*2,oM=eu/4,aM=0,Jd=Math.sqrt,lM=Math.cos,cM=Math.sin,Ye=function(t){return typeof t=="string"},Ie=function(t){return typeof t=="function"},Wi=function(t){return typeof t=="number"},fl=function(t){return typeof t=="undefined"},Mi=function(t){return typeof t=="object"},Pn=function(t){return t!==!1},du=function(){return typeof window!="undefined"},il=function(t){return Ie(t)||Ye(t)},$d=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ln=Array.isArray,nu=/(?:-?\.?\d|\.)+/gi,pu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,qr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Zh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,mu=/[+-]=-?[.\d]+/,Kd=/[^,'"\[\]\s]+/gi,hM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ae,vi,iu,gu,zn={},al={},Qd,jd=function(t){return(al=Yr(t,zn))&&cn},dl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Lo=function(t,e){return!e&&console.warn(t)},tp=function(t,e){return t&&(zn[t]=e)&&al&&(al[t]=e)||zn},Do=function(){return 0},uM={suppressEvents:!0,isStart:!0,kill:!1},rl={suppressEvents:!0,kill:!1},fM={suppressEvents:!0},_u={},pr=[],ru={},ep,Cn={},Jh={},Vd=30,sl=[],xu="",vu=function(t){var e=t[0],n,i;if(Mi(e)||Ie(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=sl.length;i--&&!sl[i].targetTest(e););n=sl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Su(t[i],n)))||t.splice(i,1);return t},mr=function(t){return t._gsap||vu(jn(t))[0]._gsap},yu=function(t,e,n){return(n=t[e])&&Ie(n)?t[e]():fl(n)&&t.getAttribute&&t.getAttribute(e)||n},xn=function(t,e){return(t=t.split(",")).forEach(e)||t},Le=function(t){return Math.round(t*1e5)/1e5||0},$e=function(t){return Math.round(t*1e7)/1e7||0},Zr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},dM=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ll=function(){var t=pr.length,e=pr.slice(0),n,i;for(ru={},pr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},np=function(t,e,n,i){pr.length&&!an&&ll(),t.render(e,n,i||an&&e<0&&(t._initted||t._startAt)),pr.length&&!an&&ll()},ip=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Kd).length<2?e:Ye(t)?t.trim():t},rp=function(t){return t},ti=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},pM=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Yr=function(t,e){for(var n in e)t[n]=e[n];return t},Hd=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Mi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},cl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ro=function(t){var e=t.parent||Ae,n=t.keyframes?pM(ln(t.keyframes)):ti;if(Pn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},mM=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},sp=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},pl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},gr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Gr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},gM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},su=function(t,e,n,i){return t._startAt&&(an?t._startAt.revert(rl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},_M=function r(t){return!t||t._ts&&r(t.parent)},Gd=function(t){return t._repeat?qs(t._tTime,t=t.duration()+t._rDelay)*t:0},qs=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},hl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ml=function(t){return t._end=$e(t._start+(t._tDur/Math.abs(t._ts||t._rts||Me)||0))},gl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=$e(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ml(t),n._dirty||Gr(n,t)),t},op=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=hl(t.rawTime(),e),(!e._dur||Oo(0,e.totalDuration(),n)-e._tTime>Me)&&e.render(n,!0)),Gr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Me}},yi=function(t,e,n,i){return e.parent&&gr(e),e._start=$e((Wi(n)?n:n||t!==Ae?Kn(t,n,e):t._time)+e._delay),e._end=$e(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),sp(t,e,"_first","_last",t._sort?"_start":0),ou(e)||(t._recent=e),i||op(t,e),t._ts<0&&gl(t,t._tTime),t},ap=function(t,e){return(zn.ScrollTrigger||dl("scrollTrigger",e))&&zn.ScrollTrigger.create(e,t)},lp=function(t,e,n,i,s){if(Tu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!an&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ep!==Rn.frame)return pr.push(t),t._lazy=[s,i],1},xM=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},ou=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},vM=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&xM(t)&&!(!t._initted&&ou(t))||(t._ts<0||t._dp._ts<0)&&!ou(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=Oo(0,t._tDur,e),h=qs(l,a),t._yoyo&&h&1&&(o=1-o),h!==qs(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||an||i||t._zTime===Me||!e&&t._zTime){if(!t._initted&&lp(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?Me:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&su(t,e,n,!0),t._onUpdate&&!n&&Bn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Bn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&gr(t,1),!n&&!an&&(Bn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},yM=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Zs=function(t,e,n,i){var s=t._repeat,o=$e(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:$e(o*(s+1)+t._rDelay*s):o,a>0&&!i&&gl(t,t._tTime=t._tDur*a),t.parent&&ml(t),n||Gr(t.parent,t),t},Wd=function(t){return t instanceof je?Gr(t):Zs(t,t._dur)},MM={_start:0,endTime:Do,totalDuration:Do},Kn=function r(t,e,n){var i=t.labels,s=t._recent||MM,o=t.duration()>=Qn?s.endTime(!1):t._dur,a,l,c;return Ye(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(ln(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Po=function(t,e,n){var i=Wi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Pn(l.vars.inherit)&&l.parent;o.immediateRender=Pn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Oe(e[0],o,e[s+1])},_r=function(t,e){return t||t===0?e(t):e},Oo=function(t,e,n){return n<t?t:n>e?e:n},tn=function(t,e){return!Ye(t)||!(e=hM.exec(t))?"":e[1]},SM=function(t,e,n){return _r(n,function(i){return Oo(t,e,i)})},au=[].slice,cp=function(t,e){return t&&Mi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Mi(t[0]))&&!t.nodeType&&t!==vi},bM=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ye(i)&&!e||cp(i,1)?(s=n).push.apply(s,jn(i)):n.push(i)})||n},jn=function(t,e,n){return Ee&&!e&&Ee.selector?Ee.selector(t):Ye(t)&&!n&&(iu||!Js())?au.call((e||gu).querySelectorAll(t),0):ln(t)?bM(t,n):cp(t)?au.call(t,0):t?[t]:[]},lu=function(t){return t=jn(t)[0]||Lo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return jn(e,n.querySelectorAll?n:n===t?Lo("Invalid scope")||gu.createElement("div"):t)}},hp=function(t){return t.sort(function(){return .5-Math.random()})},up=function(t){if(Ie(t))return t;var e=Mi(t)?t:{each:t},n=Wr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return Ye(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,d,g){var _=(g||e).length,m=o[_],p,b,S,x,C,A,T,R,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,Qn])[1],!y){for(T=-Qn;T<(T=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=o[_]=[],p=l?Math.min(y,_)*h-.5:i%y,b=y===Qn?0:l?_*u/y-.5:i/y|0,T=0,R=Qn,A=0;A<_;A++)S=A%y-p,x=b-(A/y|0),m[A]=C=c?Math.abs(c==="y"?x:S):Jd(S*S+x*x),C>T&&(T=C),C<R&&(R=C);i==="random"&&hp(m),m.max=T-R,m.min=R,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=tn(e.amount||e.each)||0,n=n&&_<0?yp(n):n}return _=(m[f]-m.min)/m.max||0,$e(m.b+(n?n(_):_)*m.v)+m.u}},cu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=$e(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Wi(n)?0:tn(n))}},fp=function(t,e){var n=ln(t),i,s;return!n&&Mi(t)&&(i=n=t.radius||Qn,t.values?(t=jn(t.values),(s=!Wi(t[0]))&&(i*=i)):t=cu(t.increment)),_r(e,n?Ie(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Qn,h=0,u=t.length,f,d;u--;)s?(f=t[u].x-a,d=t[u].y-l,f=f*f+d*d):f=Math.abs(t[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:o,s||h===o||Wi(o)?h:h+tn(o)}:cu(t))},dp=function(t,e,n,i){return _r(ln(t)?!e:n===!0?!!(n=0):!i,function(){return ln(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},wM=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},TM=function(t,e){return function(n){return t(parseFloat(n))+(e||tn(n))}},EM=function(t,e,n){return mp(t,e,0,1,n)},pp=function(t,e,n){return _r(n,function(i){return t[~~e(i)]})},AM=function r(t,e,n){var i=e-t;return ln(t)?pp(t,r(0,t.length),e):_r(n,function(s){return(i+(s-t)%i)%i+t})},CM=function r(t,e,n){var i=e-t,s=i*2;return ln(t)?pp(t,r(0,t.length-1),e):_r(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},$s=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?Kd:nu),n+=t.substr(e,i-e)+dp(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},mp=function(t,e,n,i,s){var o=e-t,a=i-n;return _r(s,function(l){return n+((l-t)/o*a||0)})},RM=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=Ye(t),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(ln(t)&&!ln(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(g){g*=u;var _=Math.min(f,~~g);return h[_](g-_)},n=e}else i||(t=Yr(ln(t)?[]:{},t));if(!h){for(l in e)bu.call(a,t,l,"get",e[l]);s=function(g){return Cu(g,a)||(o?t.p:t)}}}return _r(n,s)},Xd=function(t,e,n){var i=t.labels,s=Qn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Bn=function(t,e,n){var i=t.vars,s=i[e],o=Ee,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&pr.length&&ll(),a&&(Ee=a),h=l?s.apply(c,l):s.call(c),Ee=o,h},Ao=function(t){return gr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!an),t.progress()<1&&Bn(t,"onInterrupt"),t},Xs,gp=[],_p=function(t){if(t)if(t=!t.name&&t.default||t,du()||t.headless){var e=t.name,n=Ie(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Do,render:Cu,add:bu,kill:XM,modifier:WM,rawVars:0},o={targetTest:0,get:0,getSetter:_l,aliases:{},register:0};if(Js(),t!==i){if(Cn[e])return;ti(i,ti(cl(t,s),o)),Yr(i.prototype,Yr(s,cl(t,o))),Cn[i.prop=e]=i,t.targetTest&&(sl.push(i),_u[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}tp(e,i),t.register&&t.register(cn,i,vn)}else gp.push(t)},ve=255,Co={aqua:[0,ve,ve],lime:[0,ve,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ve],navy:[0,0,128],white:[ve,ve,ve],olive:[128,128,0],yellow:[ve,ve,0],orange:[ve,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ve,0,0],pink:[ve,192,203],cyan:[0,ve,ve],transparent:[ve,ve,ve,0]},$h=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ve+.5|0},xp=function(t,e,n){var i=t?Wi(t)?[t>>16,t>>8&ve,t&ve]:0:Co.black,s,o,a,l,c,h,u,f,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Co[t])i=Co[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ve,i&ve,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ve,t&ve]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(nu),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=$h(l+1/3,s,o),i[1]=$h(l,s,o),i[2]=$h(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(pu),n&&i.length<4&&(i[3]=1),i}else i=t.match(nu)||Co.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/ve,o=i[1]/ve,a=i[2]/ve,u=Math.max(s,o,a),f=Math.min(s,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(o-a)/d+(o<a?6:0):u===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},vp=function(t){var e=[],n=[],i=-1;return t.split(Gi).forEach(function(s){var o=s.match(qr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Yd=function(t,e,n){var i="",s=(t+i).match(Gi),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=xp(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=vp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Gi,"1").split(qr),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Gi),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},Gi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Co)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),PM=/hsl[a]?\(/,Mu=function(t){var e=t.join(" "),n;if(Gi.lastIndex=0,Gi.test(e))return n=PM.test(e),t[1]=Yd(t[1],n),t[0]=Yd(t[0],n,vp(t[1])),!0},Uo,Rn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,f,d,g=function _(m){var p=r()-i,b=m===!0,S,x,C,A;if((p>t||p<0)&&(n+=p-e),i+=p,C=i-n,S=C-o,(S>0||b)&&(A=++u.frame,f=C-u.time*1e3,u.time=C=C/1e3,o+=S+(S>=s?4:s-S),x=1),b||(l=c(_)),x)for(d=0;d<a.length;d++)a[d](C,f,A,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Qd&&(!iu&&du()&&(vi=iu=window,gu=vi.document||{},zn.gsap=cn,(vi.gsapVersions||(vi.gsapVersions=[])).push(cn.version),jd(al||vi.GreenSockGlobals||!vi.gsap&&vi||{}),gp.forEach(_p)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},Uo=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Uo=0,c=Do},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,p,b){var S=p?function(x,C,A,T){m(x,C,A,T),u.remove(S)}:m;return u.remove(m),a[b?"unshift":"push"](S),Js(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},u}(),Js=function(){return!Uo&&Rn.wake()},ie={},IM=/^[\d.\-M][\d.\-,\s]/,LM=/["']/g,DM=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(LM,"").trim():+c,i=l.substr(a+1).trim();return e},UM=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},NM=function(t){var e=(t+"").split("("),n=ie[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[DM(e[1])]:UM(t).split(",").map(ip)):ie._CE&&IM.test(t)?ie._CE("",t):n},yp=function(t){return function(e){return 1-t(1-e)}},Mp=function r(t,e){for(var n=t._first,i;n;)n instanceof je?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Wr=function(t,e){return t&&(Ie(t)?t:ie[t]||NM(t))||e},Jr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return xn(t,function(a){ie[a]=zn[a]=s,ie[o=a.toLowerCase()]=n;for(var l in s)ie[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ie[a+"."+l]=s[l]}),s},Sp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Kh=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/eu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*cM((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Sp(a);return s=eu/s,l.config=function(c,h){return r(t,c,h)},l},Qh=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Sp(n);return i.config=function(s){return r(t,s)},i};xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Jr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ie.Linear.easeNone=ie.none=ie.Linear.easeIn;Jr("Elastic",Kh("in"),Kh("out"),Kh());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Jr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Jr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Jr("Circ",function(r){return-(Jd(1-r*r)-1)});Jr("Sine",function(r){return r===1?1:-lM(r*oM)+1});Jr("Back",Qh("in"),Qh("out"),Qh());ie.SteppedEase=ie.steps=zn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Me;return function(a){return((i*Oo(0,o,a)|0)+s)*n}}};Ys.ease=ie["quad.out"];xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return xu+=r+","+r+"Params,"});var Su=function(t,e){this.id=aM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:yu,this.set=e?e.getSetter:_l},No=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Zs(this,+e.duration,1,1),this.data=e.data,Ee&&(this._ctx=Ee,Ee.data.push(this)),Uo||Rn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Zs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Js(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(gl(this,n),!s._dp||s.parent||op(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&yi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Me||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),np(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Gd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Gd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?qs(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Me?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?hl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Me?0:this._rts,this.totalTime(Oo(-Math.abs(this._delay),this._tDur,s),i!==!1),ml(this),gM(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Js(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Me&&(this._tTime-=Me)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&yi(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Pn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?hl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=fM);var i=an;return an=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),an=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Wd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Wd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Kn(this,n),Pn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Pn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Me:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Me,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Me)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Ie(n)?n:rp,a=function(){var c=i.then;i.then=null,Ie(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Ao(this)},r}();ti(No.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Me,_prom:0,_ps:!1,_rts:1});var je=function(r){Zd(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Pn(n.sortChildren),Ae&&yi(n.parent||Ae,Hi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ap(Hi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Po(0,arguments,this),this},e.from=function(i,s,o){return Po(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Po(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Ro(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Oe(i,s,Kn(this,o),1),this},e.call=function(i,s,o){return yi(this,Oe.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Oe(i,o,Kn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Ro(o).immediateRender=Pn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,Ro(a).immediateRender=Pn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:$e(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,b,S,x,C,A,T;if(this!==Ae&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,x=this._start,S=this._ts,p=!S,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=$e(h%m),h===l?(_=this._repeat,f=c):(_=~~(h/m),_&&_===h/m&&(f=c,_--),f>c&&(f=c)),C=qs(this._tTime,m),!a&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),A&&_&1&&(f=c-f,T=1),_!==C&&!this._lock){var R=A&&C&1,y=R===(A&&_&1);if(_<C&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(T?0:$e(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Bn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Mp(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=yM(this,$e(a),$e(f)),b&&(h-=f-(f=b._start))),this._tTime=h,this._time=f,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!_&&(Bn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){b=0,g&&(h+=this._zTime=-Me);break}}d=g}else{d=this._last;for(var v=i<0?i:f;d;){if(g=d._prev,(d._act||v<=d._end)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,o||an&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){b=0,g&&(h+=this._zTime=v?-Me:Me);break}}d=g}}if(b&&!s&&(this.pause(),b.render(f>=a?0:-Me)._zTime=f>=a?1:-1,this._ts))return this._start=x,ml(this),this.render(i,s,o);this._onUpdate&&!s&&Bn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&gr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Bn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Wi(s)||(s=Kn(this,s,i)),!(i instanceof No)){if(ln(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ye(i))return this.addLabel(i,s);if(Ie(i))i=Oe.delayedCall(0,i);else return this}return this!==i?yi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Qn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Oe?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Ye(i)?this.removeLabel(i):Ie(i)?this.killTweensOf(i):(pl(this,i),i===this._recent&&(this._recent=this._last),Gr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$e(Rn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Kn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Oe.delayedCall(0,s||Do,o);return a.data="isPause",this._hasPause=1,yi(this,a,Kn(this,i))},e.removePause=function(i){var s=this._first;for(i=Kn(this,i);s;)s._start===i&&s.data==="isPause"&&gr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)dr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=jn(i),l=this._first,c=Wi(s),h;l;)l instanceof Oe?dM(l._targets,a)&&(c?(!dr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Kn(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,g=Oe.to(o,ti({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Me,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Zs(g,m,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,u||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,ti({startAt:{time:Kn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Xd(this,Kn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Xd(this,Kn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Me)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Gr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Gr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Qn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,yi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Zs(o,o===Ae&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ae._ts&&(np(Ae,hl(i,Ae)),ep=Rn.frame),Rn.frame>=Vd){Vd+=In.autoSleep||120;var s=Ae._first;if((!s||!s._ts)&&In.autoSleep&&Rn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Rn.sleep()}}},t}(No);ti(je.prototype,{_lock:0,_hasPause:0,_forcing:0});var OM=function(t,e,n,i,s,o,a){var l=new vn(this._pt,t,e,0,1,Au,null,s),c=0,h=0,u,f,d,g,_,m,p,b;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=$s(i)),o&&(b=[n,i],o(b,t,e),n=b[0],i=b[1]),f=n.match(Zh)||[];u=Zh.exec(i);)g=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?Zr(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Zh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(mu.test(i)||p)&&(l.e=0),this._pt=l,l},bu=function(t,e,n,i,s,o,a,l,c,h){Ie(i)&&(i=i(s||0,t,o));var u=t[e],f=n!=="get"?n:Ie(u)?c?t[e.indexOf("set")||!Ie(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,d=Ie(u)?c?VM:Tp:Eu,g;if(Ye(i)&&(~i.indexOf("random(")&&(i=$s(i)),i.charAt(1)==="="&&(g=Zr(f,i)+(tn(f)||0),(g||g===0)&&(i=g))),!h||f!==i||hu)return!isNaN(f*i)&&i!==""?(g=new vn(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?GM:Ep,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!u&&!(e in t)&&dl(e,i),OM.call(this,t,e,f,i,d,l||In.stringFilter,c))},FM=function(t,e,n,i,s){if(Ie(t)&&(t=Io(t,s,e,n,i)),!Mi(t)||t.style&&t.nodeType||ln(t)||$d(t))return Ye(t)?Io(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Io(t[a],s,e,n,i);return o},wu=function(t,e,n,i,s,o){var a,l,c,h;if(Cn[t]&&(a=new Cn[t]).init(s,a.rawVars?e[t]:FM(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new vn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Xs))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},dr,hu,Tu=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,b=p&&p.data==="nested"?p.vars.targets:m,S=t._overwrite==="auto"&&!fu,x=t.timeline,C,A,T,R,y,v,I,N,F,X,J,H,q;if(x&&(!f||!s)&&(s="none"),t._ease=Wr(s,Ys.ease),t._yEase=u?yp(Wr(u===!0?s:u,Ys.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!x&&!!i.runBackwards,!x||f&&!i.stagger){if(N=m[0]?mr(m[0]).harness:0,H=N&&i[N.prop],C=cl(i,_u),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&g?rl:uM),_._lazy=0),o){if(gr(t._startAt=Oe.set(m,ti({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Pn(l),startAt:null,delay:0,onUpdate:c&&function(){return Bn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(an||!a&&!d)&&t._startAt.revert(rl),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),T=ti({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Pn(l),immediateRender:a,stagger:0,parent:p},C),H&&(T[N.prop]=H),gr(t._startAt=Oe.set(m,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(an?t._startAt.revert(rl):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Me,Me);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Pn(l)||l&&!g,A=0;A<m.length;A++){if(y=m[A],I=y._gsap||vu(m)[A]._gsap,t._ptLookup[A]=X={},ru[I.id]&&pr.length&&ll(),J=b===m?A:b.indexOf(y),N&&(F=new N).init(y,H||C,t,J,b)!==!1&&(t._pt=R=new vn(t._pt,y,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(V){X[V]=R}),F.priority&&(v=1)),!N||H)for(T in C)Cn[T]&&(F=wu(T,C,t,J,y,b))?F.priority&&(v=1):X[T]=R=bu.call(t,y,T,"get",C[T],J,b,0,i.stringFilter);t._op&&t._op[A]&&t.kill(y,t._op[A]),S&&t._pt&&(dr=t,Ae.killTweensOf(y,X,t.globalTime(e)),q=!t.parent,dr=0),t._pt&&l&&(ru[I.id]=1)}v&&Ru(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!q,f&&e<=0&&x.render(Qn,!0,!0)},BM=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return hu=1,t.vars[e]="+=0",Tu(t,a),hu=0,l?Lo(e+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Le(n)+tn(u.e)),u.b&&(u.b=h.s+tn(u.b))},zM=function(t,e){var n=t[0]?mr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Yr({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},kM=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(ln(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Io=function(t,e,n,i,s){return Ie(t)?t.call(e,n,i,s):Ye(t)&&~t.indexOf("random(")?$s(t):t},bp=xu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",wp={};xn(bp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return wp[r]=1});var Oe=function(r){Zd(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ro(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,b=i.parent||Ae,S=(ln(n)||$d(n)?Wi(n[0]):"length"in i)?[n]:jn(n),x,C,A,T,R,y,v,I;if(a._targets=S.length?vu(S):Lo("GSAP target "+n+" not found. https://gsap.com",!In.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||il(c)||il(h)){if(i=a.vars,x=a.timeline=new je({data:"nested",defaults:_||{},targets:b&&b.data==="nested"?b.vars.targets:S}),x.kill(),x.parent=x._dp=Hi(a),x._start=0,f||il(c)||il(h)){if(T=S.length,v=f&&up(f),Mi(f))for(R in f)~bp.indexOf(R)&&(I||(I={}),I[R]=f[R]);for(C=0;C<T;C++)A=cl(i,wp),A.stagger=0,p&&(A.yoyoEase=p),I&&Yr(A,I),y=S[C],A.duration=+Io(c,Hi(a),C,y,S),A.delay=(+Io(h,Hi(a),C,y,S)||0)-a._delay,!f&&T===1&&A.delay&&(a._delay=h=A.delay,a._start+=h,A.delay=0),x.to(y,A,v?v(C,y,S):0),x._ease=ie.none;x.duration()?c=h=0:a.timeline=0}else if(g){Ro(ti(x.vars.defaults,{ease:"none"})),x._ease=Wr(g.ease||i.ease||"none");var N=0,F,X,J;if(ln(g))g.forEach(function(H){return x.to(S,H,">")}),x.duration();else{A={};for(R in g)R==="ease"||R==="easeEach"||kM(R,g[R],A,g.easeEach);for(R in A)for(F=A[R].sort(function(H,q){return H.t-q.t}),N=0,C=0;C<F.length;C++)X=F[C],J={ease:X.e,duration:(X.t-(C?F[C-1].t:0))/100*c},J[R]=X.v,x.to(S,J,N),N+=J.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!fu&&(dr=Hi(a),Ae.killTweensOf(S),dr=0),yi(b,Hi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===$e(b._time)&&Pn(u)&&_M(Hi(a))&&b.data!=="nested")&&(a._tTime=-Me,a.render(Math.max(0,-h)||0)),m&&ap(Hi(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Me&&!h?l:i<Me?0:i,f,d,g,_,m,p,b,S,x;if(!c)vM(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(f=$e(u%_),u===l?(g=this._repeat,f=c):(g=~~(u/_),g&&g===$e(u/_)&&(f=c,g--),f>c&&(f=c)),p=this._yoyo&&g&1,p&&(x=this._yEase,f=c-f),m=qs(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(S&&this._yEase&&Mp(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render($e(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(lp(this,h?i:f,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(x||this._ease)(f/c),this._from&&(this.ratio=b=1-b),f&&!a&&!s&&!g&&(Bn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(b,d.d),d=d._next;S&&S.render(i<0?i:S._dur*S._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&su(this,i,s,o),Bn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Bn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&su(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&gr(this,1),!s&&!(h&&!a)&&(u||a||p)&&(Bn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Uo||Rn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Tu(this,c),h=this._ease(c/this._dur),BM(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(gl(this,0),this.parent||sp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ao(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,dr&&dr.vars.overwrite!==!0)._first||Ao(this),this.parent&&o!==this.timeline.totalDuration()&&Zs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?jn(i):a,c=this._ptLookup,h=this._pt,u,f,d,g,_,m,p;if((!s||s==="all")&&mM(a,l))return s==="all"&&(this._pt=0),Ao(this);for(u=this._op=this._op||[],s!=="all"&&(Ye(s)&&(_={},xn(s,function(b){return _[b]=1}),s=_),s=zM(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(u[p]=s,g=f,d={}):(d=u[p]=u[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&pl(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&Ao(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Po(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Po(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ae.killTweensOf(i,s,o)},t}(No);ti(Oe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xn("staggerTo,staggerFrom,staggerFromTo",function(r){Oe[r]=function(){var t=new je,e=au.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Eu=function(t,e,n){return t[e]=n},Tp=function(t,e,n){return t[e](n)},VM=function(t,e,n,i){return t[e](i.fp,n)},HM=function(t,e,n){return t.setAttribute(e,n)},_l=function(t,e){return Ie(t[e])?Tp:fl(t[e])&&t.setAttribute?HM:Eu},Ep=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},GM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Au=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Cu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},WM=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},XM=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?pl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},YM=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Ru=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},vn=function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Ep,this.d=l||this,this.set=c||Eu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=YM,this.m=n,this.mt=s,this.tween=i},r}();xn(xu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return _u[r]=1});zn.TweenMax=zn.TweenLite=Oe;zn.TimelineLite=zn.TimelineMax=je;Ae=new je({sortChildren:!1,defaults:Ys,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});In.stringFilter=Mu;var Xr=[],ol={},qM=[],qd=0,ZM=0,jh=function(t){return(ol[t]||qM).map(function(e){return e()})},uu=function(){var t=Date.now(),e=[];t-qd>2&&(jh("matchMediaInit"),Xr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=vi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),jh("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),qd=t,jh("matchMedia"))},Ap=function(){function r(e,n){this.selector=n&&lu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ZM++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ie(n)&&(s=i,i=n,n=Ie);var o=this,a=function(){var c=Ee,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=lu(s)),Ee=o,u=i.apply(o,arguments),Ie(u)&&o._r.push(u),Ee=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Ie?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ee;Ee=null,n(this),Ee=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Oe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof je?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Oe)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Xr.length;o--;)Xr[o].id===this.id&&Xr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),JM=function(){function r(e){this.contexts=[],this.scope=e,Ee&&Ee.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Mi(n)||(n={matches:n});var o=new Ap(0,s||this.scope),a=o.conditions={},l,c,h;Ee&&!o.selector&&(o.selector=Ee.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=vi.matchMedia(n[c]),l&&(Xr.indexOf(o)<0&&Xr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(uu):l.addEventListener("change",uu)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ul={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return _p(i)})},timeline:function(t){return new je(t)},getTweensOf:function(t,e){return Ae.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ye(t)&&(t=jn(t)[0]);var s=mr(t||{}).get,o=n?rp:ip;return n==="native"&&(n=""),t&&(e?o((Cn[e]&&Cn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Cn[a]&&Cn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=jn(t),t.length>1){var i=t.map(function(h){return cn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var o=Cn[e],a=mr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;Xs._pt=0,u.init(t,n?h+n:h,Xs,0,[t]),u.render(1,u),Xs._pt&&Cu(1,Xs)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=cn.to(t,Yr((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Ae.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Wr(t.ease,Ys.ease)),Hd(Ys,t||{})},config:function(t){return Hd(In,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Cn[a]&&!zn[a]&&Lo(e+" effect requires "+a+" plugin.")}),Jh[e]=function(a,l,c){return n(jn(a),ti(l||{},s),c)},o&&(je.prototype[e]=function(a,l,c){return this.add(Jh[e](a,Mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ie[t]=Wr(e)},parseEase:function(t,e){return arguments.length?Wr(t,e):ie},getById:function(t){return Ae.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new je(t),i,s;for(n.smoothChildTiming=Pn(t.smoothChildTiming),Ae.remove(n),n._dp=0,n._time=n._tTime=Ae._time,i=Ae._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Oe&&i.vars.onComplete===i._targets[0]))&&yi(n,i,i._start-i._delay),i=s;return yi(Ae,n,0),n},context:function(t,e){return t?new Ap(t,e):Ee},matchMedia:function(t){return new JM(t)},matchMediaRefresh:function(){return Xr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||uu()},addEventListener:function(t,e){var n=ol[t]||(ol[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ol[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:AM,wrapYoyo:CM,distribute:up,random:dp,snap:fp,normalize:EM,getUnit:tn,clamp:SM,splitColor:xp,toArray:jn,selector:lu,mapRange:mp,pipe:wM,unitize:TM,interpolate:RM,shuffle:hp},install:jd,effects:Jh,ticker:Rn,updateRoot:je.updateRoot,plugins:Cn,globalTimeline:Ae,core:{PropTween:vn,globals:tp,Tween:Oe,Timeline:je,Animation:No,getCache:mr,_removeLinkedListItem:pl,reverting:function(){return an},context:function(t){return t&&Ee&&(Ee.data.push(t),t._ctx=Ee),Ee},suppressOverwrites:function(t){return fu=t}}};xn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ul[r]=Oe[r]});Rn.add(je.updateRoot);Xs=ul.to({},{duration:0});var $M=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},KM=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=$M(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},tu=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ye(s)&&(l={},xn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}KM(a,s)}}}},cn=ul.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)an?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},tu("roundProps",cu),tu("modifiers"),tu("snap",fp))||ul;Oe.version=je.version=cn.version="3.12.5";Qd=1;du()&&Js();var QM=ie.Power0,jM=ie.Power1,tS=ie.Power2,eS=ie.Power3,nS=ie.Power4,iS=ie.Linear,rS=ie.Quad,sS=ie.Cubic,oS=ie.Quart,aS=ie.Quint,lS=ie.Strong,cS=ie.Elastic,hS=ie.Back,uS=ie.SteppedEase,fS=ie.Bounce,dS=ie.Sine,pS=ie.Expo,mS=ie.Circ;var Cp,xr,Qs,Ou,jr,gS,Rp,Fu,_S=function(){return typeof window!="undefined"},Yi={},Qr=180/Math.PI,js=Math.PI/180,Ks=Math.atan2,Pp=1e8,Bu=/([A-Z])/g,xS=/(left|right|width|margin|padding|x)/i,vS=/[\s,\(]\S/,Si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Lu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},yS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},MS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},SS=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Fp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Bp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},bS=function(t,e,n){return t.style[e]=n},wS=function(t,e,n){return t.style.setProperty(e,n)},TS=function(t,e,n){return t._gsap[e]=n},ES=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},AS=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},CS=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ce="transform",Ln=Ce+"Origin",RS=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Yi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Si[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Xi(i,a)}):this.tfm[t]=o.x?o[t]:Xi(i,t),t===Ln&&(this.tfm.zOrigin=o.zOrigin);else return Si.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Ce)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ln,e,"")),t=Ce}(s||e)&&this.props.push(t,e,s[t])},zp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},PS=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Bu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Fu(),(!s||!s.isStart)&&!n[Ce]&&(zp(n),i.zOrigin&&n[Ln]&&(n[Ln]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},kp=function(t,e){var n={target:t,props:[],revert:PS,save:RS};return t._gsap||cn.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Vp,Du=function(t,e){var n=xr.createElementNS?xr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):xr.createElement(t);return n&&n.style?n:xr.createElement(t)},bi=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Bu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,to(e)||e,1)||""},Ip="O,Moz,ms,Ms,Webkit".split(","),to=function(t,e,n){var i=e||jr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Ip[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Ip[o]:"")+t},Uu=function(){_S()&&window.document&&(Cp=window,xr=Cp.document,Qs=xr.documentElement,jr=Du("div")||{style:{}},gS=Du("div"),Ce=to(Ce),Ln=Ce+"Origin",jr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Vp=!!to("perspective"),Fu=cn.core.reverting,Ou=1)},Pu=function r(t){var e=Du("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(Qs.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Qs.removeChild(e),this.style.cssText=s,o},Lp=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Hp=function(t){var e;try{e=t.getBBox()}catch{e=Pu.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Pu||(e=Pu.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Lp(t,["x","cx","x1"])||0,y:+Lp(t,["y","cy","y1"])||0,width:0,height:0}:e},Gp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Hp(t))},ts=function(t,e){if(e){var n=t.style,i;e in Yi&&e!==Ln&&(e=Ce),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Bu,"-$1").toLowerCase())):n.removeAttribute(e)}},vr=function(t,e,n,i,s,o){var a=new vn(t._pt,e,n,0,1,o?Bp:Fp);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Dp={deg:1,rad:1,turn:1},IS={grid:1,flex:1},yr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=jr.style,l=xS.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||Dp[i]||Dp[o])return s;if(o!=="px"&&!f&&(s=r(t,e,n,"px")),p=t.getCTM&&Gp(t),(d||o==="%")&&(Yi[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[h],Le(d?s/g*u:s/100*g);if(a[l?"width":"height"]=u+(f?o:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===xr||!_.appendChild)&&(_=xr.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Rn.time&&!m.uncache)return Le(s/m.width*u);if(d&&(e==="height"||e==="width")){var b=t.style[e];t.style[e]=u+i,g=t[h],b?t.style[e]=b:ts(t,e)}else(d||o==="%")&&!IS[bi(_,"display")]&&(a.position=bi(t,"position")),_===t&&(a.position="static"),_.appendChild(jr),g=jr[h],_.removeChild(jr),a.position="absolute";return l&&d&&(m=mr(_),m.time=Rn.time,m.width=_[h]),Le(f?g*s/u:g&&s?u/g*s:0)},Xi=function(t,e,n,i){var s;return Ou||Uu(),e in Si&&e!=="transform"&&(e=Si[e],~e.indexOf(",")&&(e=e.split(",")[0])),Yi[e]&&e!=="transform"?(s=zo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:vl(bi(t,Ln))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=xl[e]&&xl[e](t,e,n)||bi(t,e)||yu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?yr(t,e,s,n)+n:s},LS=function(t,e,n,i){if(!n||n==="none"){var s=to(e,t,1),o=s&&bi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=bi(t,"borderTopColor"))}var a=new vn(this._pt,t.style,e,0,1,Au),l=0,c=0,h,u,f,d,g,_,m,p,b,S,x,C;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=t.style[e],t.style[e]=i,i=bi(t,e)||i,_?t.style[e]=_:ts(t,e)),h=[n,i],Mu(h),n=h[0],i=h[1],f=n.match(qr)||[],C=i.match(qr)||[],C.length){for(;u=qr.exec(i);)m=u[0],b=i.substring(l,u.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),m.charAt(1)==="="&&(m=Zr(d,m)+x),p=parseFloat(m),S=m.substr((p+"").length),l=qr.lastIndex-S.length,S||(S=S||In.units[e]||x,l===i.length&&(i+=S,a.e+=S)),x!==S&&(d=yr(t,e,_,S)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Bp:Fp;return mu.test(i)&&(a.e=0),this._pt=a,a},Up={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},DS=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Up[n]||n,e[1]=Up[i]||i,e.join(" ")},US=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Yi[a]&&(l=1,a=a==="transformOrigin"?Ln:Ce),ts(n,a);l&&(ts(n,Ce),o&&(o.svg&&n.removeAttribute("transform"),zo(n,1),o.uncache=1,zp(i)))}},xl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new vn(t._pt,e,n,0,0,US);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Bo=[1,0,0,1,0,0],Wp={},Xp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Np=function(t){var e=bi(t,Ce);return Xp(e)?Bo:e.substr(7).match(pu).map(Le)},zu=function(t,e){var n=t._gsap||mr(t),i=t.style,s=Np(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Bo:s):(s===Bo&&!t.offsetParent&&t!==Qs&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,Qs.appendChild(t)),s=Np(t),l?i.display=l:ts(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Qs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Nu=function(t,e,n,i,s,o){var a=t._gsap,l=s||zu(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],b=l[5],S=e.split(" "),x=parseFloat(S[0])||0,C=parseFloat(S[1])||0,A,T,R,y;n?l!==Bo&&(T=d*m-g*_)&&(R=x*(m/T)+C*(-_/T)+(_*b-m*p)/T,y=x*(-g/T)+C*(d/T)-(d*b-g*p)/T,x=R,C=y):(A=Hp(t),x=A.x+(~S[0].indexOf("%")?x/100*A.width:x),C=A.y+(~(S[1]||S[0]).indexOf("%")?C/100*A.height:C)),i||i!==!1&&a.smooth?(p=x-c,b=C-h,a.xOffset=u+(p*d+b*_)-p,a.yOffset=f+(p*g+b*m)-b):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=C,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Ln]="0px 0px",o&&(vr(o,a,"xOrigin",c,x),vr(o,a,"yOrigin",h,C),vr(o,a,"xOffset",u,a.xOffset),vr(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+C)},zo=function(t,e){var n=t._gsap||new Su(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=bi(t,Ln)||"0",h,u,f,d,g,_,m,p,b,S,x,C,A,T,R,y,v,I,N,F,X,J,H,q,V,nt,P,j,St,Ot,z,et;return h=u=f=_=m=p=b=S=x=0,d=g=1,n.svg=!!(t.getCTM&&Gp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ce]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ce]!=="none"?l[Ce]:"")),i.scale=i.rotate=i.translate="none"),T=zu(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",q=""):q=!e&&t.getAttribute("data-svg-origin"),Nu(t,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,T)),C=n.xOrigin||0,A=n.yOrigin||0,T!==Bo&&(I=T[0],N=T[1],F=T[2],X=T[3],h=J=T[4],u=H=T[5],T.length===6?(d=Math.sqrt(I*I+N*N),g=Math.sqrt(X*X+F*F),_=I||N?Ks(N,I)*Qr:0,b=F||X?Ks(F,X)*Qr+_:0,b&&(g*=Math.abs(Math.cos(b*js))),n.svg&&(h-=C-(C*I+A*F),u-=A-(C*N+A*X))):(et=T[6],Ot=T[7],P=T[8],j=T[9],St=T[10],z=T[11],h=T[12],u=T[13],f=T[14],R=Ks(et,St),m=R*Qr,R&&(y=Math.cos(-R),v=Math.sin(-R),q=J*y+P*v,V=H*y+j*v,nt=et*y+St*v,P=J*-v+P*y,j=H*-v+j*y,St=et*-v+St*y,z=Ot*-v+z*y,J=q,H=V,et=nt),R=Ks(-F,St),p=R*Qr,R&&(y=Math.cos(-R),v=Math.sin(-R),q=I*y-P*v,V=N*y-j*v,nt=F*y-St*v,z=X*v+z*y,I=q,N=V,F=nt),R=Ks(N,I),_=R*Qr,R&&(y=Math.cos(R),v=Math.sin(R),q=I*y+N*v,V=J*y+H*v,N=N*y-I*v,H=H*y-J*v,I=q,J=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Le(Math.sqrt(I*I+N*N+F*F)),g=Le(Math.sqrt(H*H+et*et)),R=Ks(J,H),b=Math.abs(R)>2e-4?R*Qr:0,x=z?1/(z<0?-z:z):0),n.svg&&(q=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Xp(bi(t,Ce)),q&&t.setAttribute("transform",q))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(d*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Le(d),n.scaleY=Le(g),n.rotation=Le(_)+a,n.rotationX=Le(m)+a,n.rotationY=Le(p)+a,n.skewX=b+a,n.skewY=S+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ln]=vl(c)),n.xOffset=n.yOffset=0,n.force3D=In.force3D,n.renderTransform=n.svg?OS:Vp?Yp:NS,n.uncache=0,n},vl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Iu=function(t,e,n){var i=tn(e);return Le(parseFloat(e)+parseFloat(yr(t,"x",n+"px",i)))+i},NS=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Yp(t,e)},$r="0deg",Fo="0px",Kr=") ",Yp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,b=n.target,S=n.zOrigin,x="",C=p==="auto"&&t&&t!==1||p===!0;if(S&&(u!==$r||h!==$r)){var A=parseFloat(h)*js,T=Math.sin(A),R=Math.cos(A),y;A=parseFloat(u)*js,y=Math.cos(A),o=Iu(b,o,T*y*-S),a=Iu(b,a,-Math.sin(A)*-S),l=Iu(b,l,R*y*-S+S)}m!==Fo&&(x+="perspective("+m+Kr),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(C||o!==Fo||a!==Fo||l!==Fo)&&(x+=l!==Fo||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Kr),c!==$r&&(x+="rotate("+c+Kr),h!==$r&&(x+="rotateY("+h+Kr),u!==$r&&(x+="rotateX("+u+Kr),(f!==$r||d!==$r)&&(x+="skew("+f+", "+d+Kr),(g!==1||_!==1)&&(x+="scale("+g+", "+_+Kr),b.style[Ce]=x||"translate(0, 0)"},OS=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,b=n.forceCSS,S=parseFloat(o),x=parseFloat(a),C,A,T,R,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=js,c*=js,C=Math.cos(l)*u,A=Math.sin(l)*u,T=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(h*=js,y=Math.tan(c-h),y=Math.sqrt(1+y*y),T*=y,R*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),C*=y,A*=y)),C=Le(C),A=Le(A),T=Le(T),R=Le(R)):(C=u,R=f,A=T=0),(S&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(S=yr(d,"x",o,"px"),x=yr(d,"y",a,"px")),(g||_||m||p)&&(S=Le(S+g-(g*C+_*T)+m),x=Le(x+_-(g*A+_*R)+p)),(i||s)&&(y=d.getBBox(),S=Le(S+i/100*y.width),x=Le(x+s/100*y.height)),y="matrix("+C+","+A+","+T+","+R+","+S+","+x+")",d.setAttribute("transform",y),b&&(d.style[Ce]=y)},FS=function(t,e,n,i,s){var o=360,a=Ye(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Qr:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Pp)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Pp)%o-~~(c/o)*o)),t._pt=f=new vn(t._pt,e,n,i,c,yS),f.e=h,f.u="deg",t._props.push(n),f},Op=function(t,e){for(var n in e)t[n]=e[n];return t},BS=function(t,e,n){var i=Op({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ce]=e,a=zo(n,1),ts(n,Ce),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ce],o[Ce]=e,a=zo(n,1),o[Ce]=c);for(l in Yi)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=tn(c),g=tn(h),u=d!==g?yr(n,l,c,g):parseFloat(c),f=parseFloat(h),t._pt=new vn(t._pt,a,l,u,f-u,Lu),t._pt.u=g||0,t._props.push(l));Op(a,i)};xn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});xl[t>1?"border"+r:r]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(g){return Xi(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,u)}});var ku={name:"css",register:Uu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,f,d,g,_,m,p,b,S,x,C,A,T,R;Ou||Uu(),this.styles=this.styles||kp(t),R=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Cn[_]&&wu(_,e,n,i,t,s)))){if(d=typeof h,g=xl[_],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=$s(h)),g)g(this,t,_,h,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Gi.lastIndex=0,Gi.test(c)||(m=tn(c),p=tn(h)),p?m!==p&&(c=yr(t,_,c,p)+p):m&&(h+=m),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Ye(c)&&~c.indexOf("random(")&&(c=$s(c)),tn(c+"")||c==="auto"||(c+=In.units[_]||tn(Xi(t,_))||""),(c+"").charAt(1)==="="&&(c=Xi(t,_))):c=Xi(t,_),f=parseFloat(c),b=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),u=parseFloat(h),_ in Si&&(_==="autoAlpha"&&(f===1&&Xi(t,"visibility")==="hidden"&&u&&(f=0),R.push("visibility",0,a.visibility),vr(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Si[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in Yi,S){if(this.styles.save(_),x||(C=t._gsap,C.renderTransform&&!e.parseTransform||zo(t,e.parseTransform),A=e.smoothOrigin!==!1&&C.smooth,x=this._pt=new vn(this._pt,a,Ce,0,1,C.renderTransform,C,0,-1),x.dep=1),_==="scale")this._pt=new vn(this._pt,C,"scaleY",C.scaleY,(b?Zr(C.scaleY,b+u):u)-C.scaleY||0,Lu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(Ln,0,a[Ln]),h=DS(h),C.svg?Nu(t,h,0,A,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==C.zOrigin&&vr(this,C,"zOrigin",C.zOrigin,p),vr(this,a,_,vl(c),vl(h)));continue}else if(_==="svgOrigin"){Nu(t,h,1,A,0,this);continue}else if(_ in Wp){FS(this,C,_,f,b?Zr(f,b+h):h);continue}else if(_==="smoothOrigin"){vr(this,C,"smooth",C.smooth,h);continue}else if(_==="force3D"){C[_]=h;continue}else if(_==="transform"){BS(this,h,t);continue}}else _ in a||(_=to(_)||_);if(S||(u||u===0)&&(f||f===0)&&!vS.test(h)&&_ in a)m=(c+"").substr((f+"").length),u||(u=0),p=tn(h)||(_ in In.units?In.units[_]:m),m!==p&&(f=yr(t,_,c,p)),this._pt=new vn(this._pt,S?C:a,_,f,(b?Zr(f,b+u):u)-f,!S&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?SS:Lu),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=MS);else if(_ in a)LS.call(this,t,_,c,b?b+h:h);else if(_ in t)this.add(t,_,c||t[_],b?b+h:h,i,s);else if(_!=="parseTransform"){dl(_,h);continue}S||(_ in a?R.push(_,0,a[_]):R.push(_,1,c||t[_])),o.push(_)}}T&&Ru(this)},render:function(t,e){if(e.tween._time||!Fu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Xi,aliases:Si,getSetter:function(t,e,n){var i=Si[e];return i&&i.indexOf(",")<0&&(e=i),e in Yi&&e!==Ln&&(t._gsap.x||Xi(t,"x"))?n&&Rp===n?e==="scale"?ES:TS:(Rp=n||{})&&(e==="scale"?AS:CS):t.style&&!fl(t.style[e])?bS:~e.indexOf("-")?wS:_l(t,e)},core:{_removeProperty:ts,_getMatrix:zu}};cn.utils.checkPrefix=to;cn.core.getStyleSaver=kp;(function(r,t,e,n){var i=xn(r+","+t+","+e,function(s){Yi[s]=1});xn(t,function(s){In.units[s]="deg",Wp[s]=1}),Si[i[13]]=r+","+t,xn(n,function(s){var o=s.split(":");Si[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){In.units[r]="px"});cn.registerPlugin(ku);var Fe=cn.registerPlugin(ku)||cn,Gb=Fe.core.Tween;function qp(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function zS(r,t,e){return t&&qp(r.prototype,t),e&&qp(r,e),r}var en,Sl,kS,kn,Mr,Sr,no,Jp,es,Vo,$p,qi,fi,Kp,Qp=function(){return en||typeof window!="undefined"&&(en=window.gsap)&&en.registerPlugin&&en},jp=1,eo=[],te=[],di=[],Ho=Date.now,Vu=function(t,e){return e},VS=function(){var t=Vo.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,te),i.push.apply(i,di),te=n,di=i,Vu=function(o,a){return e[o](a)}},Ji=function(t,e){return~di.indexOf(t)&&di[di.indexOf(t)+1][e]},Go=function(t){return!!~$p.indexOf(t)},Mn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},yn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},yl="scrollLeft",Ml="scrollTop",Hu=function(){return qi&&qi.isPressed||te.cache++},bl=function(t,e){var n=function i(s){if(s||s===0){jp&&(kn.history.scrollRestoration="manual");var o=qi&&qi.isPressed;s=i.v=Math.round(s)||(qi&&qi.iOS?1:0),t(s),i.cacheID=te.cache,o&&Vu("ss",s)}else(e||te.cache!==i.cacheID||Vu("ref"))&&(i.cacheID=te.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},hn={s:yl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:bl(function(r){return arguments.length?kn.scrollTo(r,Ve.sc()):kn.pageXOffset||Mr[yl]||Sr[yl]||no[yl]||0})},Ve={s:Ml,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:hn,sc:bl(function(r){return arguments.length?kn.scrollTo(hn.sc(),r):kn.pageYOffset||Mr[Ml]||Sr[Ml]||no[Ml]||0})},Sn=function(t,e){return(e&&e._ctx&&e._ctx.selector||en.utils.toArray)(t)[0]||(typeof t=="string"&&en.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Zi=function(t,e){var n=e.s,i=e.sc;Go(t)&&(t=Mr.scrollingElement||Sr);var s=te.indexOf(t),o=i===Ve.sc?1:2;!~s&&(s=te.push(t)-1),te[s+o]||Mn(t,"scroll",Hu);var a=te[s+o],l=a||(te[s+o]=bl(Ji(t,n),!0)||(Go(t)?i:bl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=en.getProperty(t,"scrollBehavior")==="smooth"),l},wl=function(t,e,n){var i=t,s=t,o=Ho(),a=o,l=e||50,c=Math.max(500,l*3),h=function(g,_){var m=Ho();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},u=function(){s=i=n?0:i,a=o=0},f=function(g){var _=a,m=s,p=Ho();return(g||g===0)&&g!==i&&h(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:h,reset:u,getVelocity:f}},ko=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Zp=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},tm=function(){Vo=en.core.globals().ScrollTrigger,Vo&&Vo.core&&VS()},em=function(t){return en=t||Qp(),!Sl&&en&&typeof document!="undefined"&&document.body&&(kn=window,Mr=document,Sr=Mr.documentElement,no=Mr.body,$p=[kn,Mr,Sr,no],kS=en.utils.clamp,Kp=en.core.context||function(){},es="onpointerenter"in no?"pointer":"mouse",Jp=De.isTouch=kn.matchMedia&&kn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in kn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,fi=De.eventTypes=("ontouchstart"in Sr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Sr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return jp=0},500),tm(),Sl=1),Sl};hn.op=Ve;te.cache=0;var De=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Sl||em(en)||console.warn("Please gsap.registerPlugin(Observer)"),Vo||tm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,b=n.onDrag,S=n.onPress,x=n.onRelease,C=n.onRight,A=n.onLeft,T=n.onUp,R=n.onDown,y=n.onChangeX,v=n.onChangeY,I=n.onChange,N=n.onToggleX,F=n.onToggleY,X=n.onHover,J=n.onHoverEnd,H=n.onMove,q=n.ignoreCheck,V=n.isNormalizer,nt=n.onGestureStart,P=n.onGestureEnd,j=n.onWheel,St=n.onEnable,Ot=n.onDisable,z=n.onClick,et=n.scrollSpeed,at=n.capture,it=n.allowClicks,xt=n.lockAxis,Et=n.onLockAxis;this.target=a=Sn(a)||Sr,this.vars=n,d&&(d=en.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,et=et||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(kn.getComputedStyle(no).lineHeight)||22);var Ft,Yt,zt,Ct,D,me,kt,B=this,Tt=0,ne=0,Rt=n.passive||!h,E=Zi(a,hn),M=Zi(a,Ve),W=E(),tt=M(),Q=~o.indexOf("touch")&&!~o.indexOf("pointer")&&fi[0]==="pointerdown",$=Go(a),ft=a.ownerDocument||Mr,ct=[0,0,0],mt=[0,0,0],qt=0,rt=function(){return qt=Ho()},lt=function(At,$t){return(B.event=At)&&d&&~d.indexOf(At.target)||$t&&Q&&At.pointerType!=="touch"||q&&q(At,$t)},Dt=function(){B._vx.reset(),B._vy.reset(),Yt.pause(),u&&u(B)},Lt=function(){var At=B.deltaX=Zp(ct),$t=B.deltaY=Zp(mt),gt=Math.abs(At)>=i,Wt=Math.abs($t)>=i;I&&(gt||Wt)&&I(B,At,$t,ct,mt),gt&&(C&&B.deltaX>0&&C(B),A&&B.deltaX<0&&A(B),y&&y(B),N&&B.deltaX<0!=Tt<0&&N(B),Tt=B.deltaX,ct[0]=ct[1]=ct[2]=0),Wt&&(R&&B.deltaY>0&&R(B),T&&B.deltaY<0&&T(B),v&&v(B),F&&B.deltaY<0!=ne<0&&F(B),ne=B.deltaY,mt[0]=mt[1]=mt[2]=0),(Ct||zt)&&(H&&H(B),zt&&(b(B),zt=!1),Ct=!1),me&&!(me=!1)&&Et&&Et(B),D&&(j(B),D=!1),Ft=0},yt=function(At,$t,gt){ct[gt]+=At,mt[gt]+=$t,B._vx.update(At),B._vy.update($t),c?Ft||(Ft=requestAnimationFrame(Lt)):Lt()},Jt=function(At,$t){xt&&!kt&&(B.axis=kt=Math.abs(At)>Math.abs($t)?"x":"y",me=!0),kt!=="y"&&(ct[2]+=At,B._vx.update(At,!0)),kt!=="x"&&(mt[2]+=$t,B._vy.update($t,!0)),c?Ft||(Ft=requestAnimationFrame(Lt)):Lt()},Bt=function(At){if(!lt(At,1)){At=ko(At,h);var $t=At.clientX,gt=At.clientY,Wt=$t-B.x,Pt=gt-B.y,Gt=B.isDragging;B.x=$t,B.y=gt,(Gt||Math.abs(B.startX-$t)>=s||Math.abs(B.startY-gt)>=s)&&(b&&(zt=!0),Gt||(B.isDragging=!0),Jt(Wt,Pt),Gt||m&&m(B))}},se=B.onPress=function(vt){lt(vt,1)||vt&&vt.button||(B.axis=kt=null,Yt.pause(),B.isPressed=!0,vt=ko(vt),Tt=ne=0,B.startX=B.x=vt.clientX,B.startY=B.y=vt.clientY,B._vx.reset(),B._vy.reset(),Mn(V?a:ft,fi[1],Bt,Rt,!0),B.deltaX=B.deltaY=0,S&&S(B))},L=B.onRelease=function(vt){if(!lt(vt,1)){yn(V?a:ft,fi[1],Bt,!0);var At=!isNaN(B.y-B.startY),$t=B.isDragging,gt=$t&&(Math.abs(B.x-B.startX)>3||Math.abs(B.y-B.startY)>3),Wt=ko(vt);!gt&&At&&(B._vx.reset(),B._vy.reset(),h&&it&&en.delayedCall(.08,function(){if(Ho()-qt>300&&!vt.defaultPrevented){if(vt.target.click)vt.target.click();else if(ft.createEvent){var Pt=ft.createEvent("MouseEvents");Pt.initMouseEvent("click",!0,!0,kn,1,Wt.screenX,Wt.screenY,Wt.clientX,Wt.clientY,!1,!1,!1,!1,0,null),vt.target.dispatchEvent(Pt)}}})),B.isDragging=B.isGesturing=B.isPressed=!1,u&&$t&&!V&&Yt.restart(!0),p&&$t&&p(B),x&&x(B,gt)}},ut=function(At){return At.touches&&At.touches.length>1&&(B.isGesturing=!0)&&nt(At,B.isDragging)},Z=function(){return(B.isGesturing=!1)||P(B)},K=function(At){if(!lt(At)){var $t=E(),gt=M();yt(($t-W)*et,(gt-tt)*et,1),W=$t,tt=gt,u&&Yt.restart(!0)}},ht=function(At){if(!lt(At)){At=ko(At,h),j&&(D=!0);var $t=(At.deltaMode===1?l:At.deltaMode===2?kn.innerHeight:1)*g;yt(At.deltaX*$t,At.deltaY*$t,0),u&&!V&&Yt.restart(!0)}},dt=function(At){if(!lt(At)){var $t=At.clientX,gt=At.clientY,Wt=$t-B.x,Pt=gt-B.y;B.x=$t,B.y=gt,Ct=!0,u&&Yt.restart(!0),(Wt||Pt)&&Jt(Wt,Pt)}},Vt=function(At){B.event=At,X(B)},le=function(At){B.event=At,J(B)},Pe=function(At){return lt(At)||ko(At,h)&&z(B)};Yt=B._dc=en.delayedCall(f||.25,Dt).pause(),B.deltaX=B.deltaY=0,B._vx=wl(0,50,!0),B._vy=wl(0,50,!0),B.scrollX=E,B.scrollY=M,B.isDragging=B.isGesturing=B.isPressed=!1,Kp(this),B.enable=function(vt){return B.isEnabled||(Mn($?ft:a,"scroll",Hu),o.indexOf("scroll")>=0&&Mn($?ft:a,"scroll",K,Rt,at),o.indexOf("wheel")>=0&&Mn(a,"wheel",ht,Rt,at),(o.indexOf("touch")>=0&&Jp||o.indexOf("pointer")>=0)&&(Mn(a,fi[0],se,Rt,at),Mn(ft,fi[2],L),Mn(ft,fi[3],L),it&&Mn(a,"click",rt,!0,!0),z&&Mn(a,"click",Pe),nt&&Mn(ft,"gesturestart",ut),P&&Mn(ft,"gestureend",Z),X&&Mn(a,es+"enter",Vt),J&&Mn(a,es+"leave",le),H&&Mn(a,es+"move",dt)),B.isEnabled=!0,vt&&vt.type&&se(vt),St&&St(B)),B},B.disable=function(){B.isEnabled&&(eo.filter(function(vt){return vt!==B&&Go(vt.target)}).length||yn($?ft:a,"scroll",Hu),B.isPressed&&(B._vx.reset(),B._vy.reset(),yn(V?a:ft,fi[1],Bt,!0)),yn($?ft:a,"scroll",K,at),yn(a,"wheel",ht,at),yn(a,fi[0],se,at),yn(ft,fi[2],L),yn(ft,fi[3],L),yn(a,"click",rt,!0),yn(a,"click",Pe),yn(ft,"gesturestart",ut),yn(ft,"gestureend",Z),yn(a,es+"enter",Vt),yn(a,es+"leave",le),yn(a,es+"move",dt),B.isEnabled=B.isPressed=B.isDragging=!1,Ot&&Ot(B))},B.kill=B.revert=function(){B.disable();var vt=eo.indexOf(B);vt>=0&&eo.splice(vt,1),qi===B&&(qi=0)},eo.push(B),V&&Go(a)&&(qi=B),B.enable(_)},zS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();De.version="3.12.5";De.create=function(r){return new De(r)};De.register=em;De.getAll=function(){return eo.slice()};De.getById=function(r){return eo.filter(function(t){return t.vars.id===r})[0]};Qp()&&en.registerPlugin(De);var bt,so,re,Re,pi,we,vm,kl,na,$o,Xo,Tl,un,Wl,$u,wn,nm,im,oo,ym,Gu,Mm,bn,Ku,Sm,bm,br,Qu,rf,ao,sf,Vl,ju,Wu,El=1,fn=Date.now,Xu=fn(),ii=0,Yo=0,rm=function(t,e,n){var i=Hn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},sm=function(t,e){return e&&(!Hn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},HS=function r(){return Yo&&requestAnimationFrame(r)},om=function(){return Wl=1},am=function(){return Wl=0},wi=function(t){return t},qo=function(t){return Math.round(t*1e5)/1e5||0},wm=function(){return typeof window!="undefined"},Tm=function(){return bt||wm()&&(bt=window.gsap)&&bt.registerPlugin&&bt},as=function(t){return!!~vm.indexOf(t)},Em=function(t){return(t==="Height"?sf:re["inner"+t])||pi["client"+t]||we["client"+t]},Am=function(t){return Ji(t,"getBoundingClientRect")||(as(t)?function(){return zl.width=re.innerWidth,zl.height=sf,zl}:function(){return $i(t)})},GS=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=Ji(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Em(s):t["client"+s])||0}},WS=function(t,e){return!e||~di.indexOf(t)?Am(t):function(){return zl}},Ti=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Ji(t,n))?o()-Am(t)()[s]:as(t)?(pi[n]||we[n])-Em(i):t[n]-t["offset"+i])},Al=function(t,e){for(var n=0;n<oo.length;n+=3)(!e||~e.indexOf(oo[n+1]))&&t(oo[n],oo[n+1],oo[n+2])},Hn=function(t){return typeof t=="string"},En=function(t){return typeof t=="function"},Zo=function(t){return typeof t=="number"},ns=function(t){return typeof t=="object"},Wo=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Yu=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},io=Math.abs,Cm="left",Rm="top",of="right",af="bottom",rs="width",ss="height",Ko="Right",Qo="Left",jo="Top",ta="Bottom",He="padding",ei="margin",co="Width",lf="Height",qe="px",ni=function(t){return re.getComputedStyle(t)},XS=function(t){var e=ni(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},lm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},$i=function(t,e){var n=e&&ni(t)[$u]!=="matrix(1, 0, 0, 1, 0, 0)"&&bt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Hl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Pm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},YS=function(t){return function(e){return bt.utils.snap(Pm(t),e)}},cf=function(t){var e=bt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},qS=function(t){return function(e,n){return cf(Pm(t))(e,n.direction)}},Cl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Qe=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Ke=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Rl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},cm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Pl={toggleActions:"play",anticipatePin:0},Gl={top:0,left:0,center:.5,bottom:1,right:1},Nl=function(t,e){if(Hn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Gl?Gl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Il=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,u=s.fontSize,f=s.indent,d=s.fontWeight,g=Re.createElement("div"),_=as(n)||Ji(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=_?we:n,b=t.indexOf("start")!==-1,S=b?c:h,x="border-color:"+S+";font-size:"+u+";color:"+S+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(x+=(i===Ve?of:af)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=b,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=x,g.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Ol(g,0,i,b),g},Ol=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+co]=1,s["border"+a+co]=0,s[n.p]=e+"px",bt.set(t,s)},ee=[],tf={},ia,hm=function(){return fn()-ii>34&&(ia||(ia=requestAnimationFrame(Ki)))},ro=function(){(!bn||!bn.isPressed||bn.startX>we.clientWidth)&&(te.cache++,bn?ia||(ia=requestAnimationFrame(Ki)):Ki(),ii||cs("scrollStart"),ii=fn())},qu=function(){bm=re.innerWidth,Sm=re.innerHeight},Jo=function(){te.cache++,!un&&!Mm&&!Re.fullscreenElement&&!Re.webkitFullscreenElement&&(!Ku||bm!==re.innerWidth||Math.abs(re.innerHeight-Sm)>re.innerHeight*.25)&&kl.restart(!0)},ls={},ZS=[],Im=function r(){return Ke(Nt,"scrollEnd",r)||is(!0)},cs=function(t){return ls[t]&&ls[t].map(function(e){return e()})||ZS},Vn=[],Lm=function(t){for(var e=0;e<Vn.length;e+=5)(!t||Vn[e+4]&&Vn[e+4].query===t)&&(Vn[e].style.cssText=Vn[e+1],Vn[e].getBBox&&Vn[e].setAttribute("transform",Vn[e+2]||""),Vn[e+3].uncache=1)},hf=function(t,e){var n;for(wn=0;wn<ee.length;wn++)n=ee[wn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Vl=!0,e&&Lm(e),e||cs("revert")},Dm=function(t,e){te.cache++,(e||!Tn)&&te.forEach(function(n){return En(n)&&n.cacheID++&&(n.rec=0)}),Hn(t)&&(re.history.scrollRestoration=rf=t)},Tn,os=0,um,JS=function(){if(um!==os){var t=um=os;requestAnimationFrame(function(){return t===os&&is(!0)})}},Um=function(){we.appendChild(ao),sf=!bn&&ao.offsetHeight||re.innerHeight,we.removeChild(ao)},fm=function(t){return na(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},is=function(t,e){if(ii&&!t&&!Vl){Qe(Nt,"scrollEnd",Im);return}Um(),Tn=Nt.isRefreshing=!0,te.forEach(function(i){return En(i)&&++i.cacheID&&(i.rec=i())});var n=cs("refreshInit");ym&&Nt.sort(),e||hf(),te.forEach(function(i){En(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ee.slice(0).forEach(function(i){return i.refresh()}),Vl=!1,ee.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),ju=1,fm(!0),ee.forEach(function(i){var s=Ti(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),fm(!1),ju=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),te.forEach(function(i){En(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Dm(rf,1),kl.pause(),os++,Tn=2,Ki(2),ee.forEach(function(i){return En(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Tn=Nt.isRefreshing=!1,cs("refresh")},ef=0,Fl=1,ea,Ki=function(t){if(t===2||!Tn&&!Vl){Nt.isUpdating=!0,ea&&ea.update(0);var e=ee.length,n=fn(),i=n-Xu>=50,s=e&&ee[0].scroll();if(Fl=ef>s?-1:1,Tn||(ef=s),i&&(ii&&!Wl&&n-ii>200&&(ii=0,cs("scrollEnd")),Xo=Xu,Xu=n),Fl<0){for(wn=e;wn-- >0;)ee[wn]&&ee[wn].update(0,i);Fl=1}else for(wn=0;wn<e;wn++)ee[wn]&&ee[wn].update(0,i);Nt.isUpdating=!1}ia=0},nf=[Cm,Rm,af,of,ei+ta,ei+Ko,ei+jo,ei+Qo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Bl=nf.concat([rs,ss,"boxSizing","max"+co,"max"+lf,"position",ei,He,He+jo,He+Ko,He+ta,He+Qo]),$S=function(t,e,n){lo(n);var i=t._gsap;if(i.spacerIsNative)lo(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Zu=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=nf.length,o=e.style,a=t.style,l;s--;)l=nf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[af]=a[of]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[rs]=Hl(t,hn)+qe,o[ss]=Hl(t,Ve)+qe,o[He]=a[ei]=a[Rm]=a[Cm]="0",lo(i),a[rs]=a["max"+co]=n[rs],a[ss]=a["max"+lf]=n[ss],a[He]=n[He],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},KS=/([A-Z])/g,lo=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||bt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(KS,"-$1").toLowerCase())}},Ll=function(t){for(var e=Bl.length,n=t.style,i=[],s=0;s<e;s++)i.push(Bl[s],n[Bl[s]]);return i.t=t,i},QS=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},zl={left:0,top:0},dm=function(t,e,n,i,s,o,a,l,c,h,u,f,d,g){En(t)&&(t=t(l)),Hn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Nl("0"+t.substr(3),n):0));var _=d?d.time():0,m,p,b;if(d&&d.seek(0),isNaN(t)||(t=+t),Zo(t))d&&(t=bt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),a&&Ol(a,n,i,!0);else{En(e)&&(e=e(l));var S=(t||"0").split(" "),x,C,A,T;b=Sn(e,l)||we,x=$i(b)||{},(!x||!x.left&&!x.top)&&ni(b).display==="none"&&(T=b.style.display,b.style.display="block",x=$i(b),T?b.style.display=T:b.style.removeProperty("display")),C=Nl(S[0],x[i.d]),A=Nl(S[1]||"0",n),t=x[i.p]-c[i.p]-h+C+s-A,a&&Ol(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var R=t+n,y=o._isStart;m="scroll"+i.d2,Ol(o,R,i,y&&R>20||!y&&(u?Math.max(we[m],pi[m]):o.parentNode[m])<=R+1),u&&(c=$i(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+qe))}return d&&b&&(m=$i(b),d.seek(f),p=$i(b),d._caScrollDist=m[i.p]-p[i.p],t=t/d._caScrollDist*f),d&&d.seek(_),d?t:Math.round(t)},jS=/(webkit|moz|length|cssText|inset)/i,pm=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===we){t._stOrig=s.cssText,a=ni(t);for(o in a)!+o&&!jS.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;bt.core.getCache(t).uncache=1,e.appendChild(t)}},Nm=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},Dl=function(t,e,n){var i={};i[e.p]="+="+n,bt.set(t,i)},mm=function(t,e){var n=Zi(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,u){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=Nm(n,c,function(){f.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*f.ratio+u*f.ratio*f.ratio)},l.onUpdate=function(){te.cache++,o.tween&&Ki()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=bt.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Qe(t,"wheel",n.wheelHandler),Nt.isTouch&&Qe(t,"touchmove",n.wheelHandler),s},Nt=function(){function r(e,n){so||r.register(bt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Qu(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Yo){this.update=this.refresh=this.kill=wi;return}n=lm(Hn(n)||Zo(n)||n.nodeType?{trigger:n}:n,Pl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,u=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,b=s.onSnapComplete,S=s.once,x=s.snap,C=s.pinReparent,A=s.pinSpacer,T=s.containerAnimation,R=s.fastScrollEnd,y=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?hn:Ve,I=!u&&u!==0,N=Sn(n.scroller||re),F=bt.core.getCache(N),X=as(N),J=("pinType"in n?n.pinType:Ji(N,"pinType")||X&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],q=I&&n.toggleActions.split(" "),V="markers"in n?n.markers:Pl.markers,nt=X?0:parseFloat(ni(N)["border"+v.p2+co])||0,P=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(P)},St=GS(N,X,v),Ot=WS(N,X),z=0,et=0,at=0,it=Zi(N,v),xt,Et,Ft,Yt,zt,Ct,D,me,kt,B,Tt,ne,Rt,E,M,W,tt,Q,$,ft,ct,mt,qt,rt,lt,Dt,Lt,yt,Jt,Bt,se,L,ut,Z,K,ht,dt,Vt,le;if(P._startClamp=P._endClamp=!1,P._dir=v,m*=45,P.scroller=N,P.scroll=T?T.time.bind(T):it,Yt=it(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(ym=1,n.refreshPriority===-9999&&(ea=P)),F.tweenScroll=F.tweenScroll||{top:mm(N,Ve),left:mm(N,hn)},P.tweenTo=xt=F.tweenScroll[v.p],P.scrubDuration=function(gt){ut=Zo(gt)&&gt,ut?L?L.duration(gt):L=bt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ut,paused:!0,onComplete:function(){return p&&p(P)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(u),Bt=0,l||(l=i.vars.id)),x&&((!ns(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in we.style&&bt.set(X?[we,pi]:N,{scrollBehavior:"auto"}),te.forEach(function(gt){return En(gt)&&gt.target===(X?Re.scrollingElement||pi:N)&&(gt.smooth=!1)}),Ft=En(x.snapTo)?x.snapTo:x.snapTo==="labels"?YS(i):x.snapTo==="labelsDirectional"?qS(i):x.directional!==!1?function(gt,Wt){return cf(x.snapTo)(gt,fn()-et<500?0:Wt.direction)}:bt.utils.snap(x.snapTo),Z=x.duration||{min:.1,max:2},Z=ns(Z)?$o(Z.min,Z.max):$o(Z,Z),K=bt.delayedCall(x.delay||ut/2||.1,function(){var gt=it(),Wt=fn()-et<500,Pt=xt.tween;if((Wt||Math.abs(P.getVelocity())<10)&&!Pt&&!Wl&&z!==gt){var Gt=(gt-Ct)/E,Ue=i&&!I?i.totalProgress():Gt,jt=Wt?0:(Ue-se)/(fn()-Xo)*1e3||0,ye=bt.utils.clamp(-Gt,1-Gt,io(jt/2)*jt/.185),Ge=Gt+(x.inertia===!1?0:ye),ge,_e,he=x,Un=he.onStart,Se=he.onInterrupt,dn=he.onComplete;if(ge=Ft(Ge,P),Zo(ge)||(ge=Ge),_e=Math.round(Ct+ge*E),gt<=D&&gt>=Ct&&_e!==gt){if(Pt&&!Pt._initted&&Pt.data<=io(_e-gt))return;x.inertia===!1&&(ye=ge-Gt),xt(_e,{duration:Z(io(Math.max(io(Ge-Ue),io(ge-Ue))*.185/jt/.05||0)),ease:x.ease||"power3",data:io(_e-gt),onInterrupt:function(){return K.restart(!0)&&Se&&Se(P)},onComplete:function(){P.update(),z=it(),i&&(L?L.resetTo("totalProgress",ge,i._tTime/i._tDur):i.progress(ge)),Bt=se=i&&!I?i.totalProgress():P.progress,b&&b(P),dn&&dn(P)}},gt,ye*E,_e-gt-ye*E),Un&&Un(P,xt.tween)}}else P.isActive&&z!==gt&&K.restart(!0)}).pause()),l&&(tf[l]=P),f=P.trigger=Sn(f||d!==!0&&d),le=f&&f._gsap&&f._gsap.stRevert,le&&(le=le(P)),d=d===!0?f:Sn(d),Hn(a)&&(a={targets:f,className:a}),d&&(g===!1||g===ei||(g=!g&&d.parentNode&&d.parentNode.style&&ni(d.parentNode).display==="flex"?!1:He),P.pin=d,Et=bt.core.getCache(d),Et.spacer?M=Et.pinState:(A&&(A=Sn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Et.spacerIsNative=!!A,A&&(Et.spacerState=Ll(A))),Et.spacer=Q=A||Re.createElement("div"),Q.classList.add("pin-spacer"),l&&Q.classList.add("pin-spacer-"+l),Et.pinState=M=Ll(d)),n.force3D!==!1&&bt.set(d,{force3D:!0}),P.spacer=Q=Et.spacer,Jt=ni(d),rt=Jt[g+v.os2],ft=bt.getProperty(d),ct=bt.quickSetter(d,v.a,qe),Zu(d,Q,Jt),tt=Ll(d)),V){ne=ns(V)?lm(V,cm):cm,B=Il("scroller-start",l,N,v,ne,0),Tt=Il("scroller-end",l,N,v,ne,0,B),$=B["offset"+v.op.d2];var Pe=Sn(Ji(N,"content")||N);me=this.markerStart=Il("start",l,Pe,v,ne,$,0,T),kt=this.markerEnd=Il("end",l,Pe,v,ne,$,0,T),T&&(Vt=bt.quickSetter([me,kt],v.a,qe)),!J&&!(di.length&&Ji(N,"fixedMarkers")===!0)&&(XS(X?we:N),bt.set([B,Tt],{force3D:!0}),Dt=bt.quickSetter(B,v.a,qe),yt=bt.quickSetter(Tt,v.a,qe))}if(T){var vt=T.vars.onUpdate,At=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){P.update(0,0,1),vt&&vt.apply(T,At||[])})}if(P.previous=function(){return ee[ee.indexOf(P)-1]},P.next=function(){return ee[ee.indexOf(P)+1]},P.revert=function(gt,Wt){if(!Wt)return P.kill(!0);var Pt=gt!==!1||!P.enabled,Gt=un;Pt!==P.isReverted&&(Pt&&(ht=Math.max(it(),P.scroll.rec||0),at=P.progress,dt=i&&i.progress()),me&&[me,kt,B,Tt].forEach(function(Ue){return Ue.style.display=Pt?"none":"block"}),Pt&&(un=P,P.update(Pt)),d&&(!C||!P.isActive)&&(Pt?$S(d,Q,M):Zu(d,Q,ni(d),lt)),Pt||P.update(Pt),un=Gt,P.isReverted=Pt)},P.refresh=function(gt,Wt,Pt,Gt){if(!((un||!P.enabled)&&!Wt)){if(d&&gt&&ii){Qe(r,"scrollEnd",Im);return}!Tn&&j&&j(P),un=P,xt.tween&&!Pt&&(xt.tween.kill(),xt.tween=0),L&&L.pause(),_&&i&&i.revert({kill:!1}).invalidate(),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Ue=St(),jt=Ot(),ye=T?T.duration():Ti(N,v),Ge=E<=.01,ge=0,_e=Gt||0,he=ns(Pt)?Pt.end:n.end,Un=n.endTrigger||f,Se=ns(Pt)?Pt.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),dn=P.pinnedContainer=n.pinnedContainer&&Sn(n.pinnedContainer,P),w=f&&Math.max(0,ee.indexOf(P))||0,U=w,k,G,O,st,ot,pt,Mt,Ht,Xt,wt,Zt,ce,ue;for(V&&ns(Pt)&&(ce=bt.getProperty(B,v.p),ue=bt.getProperty(Tt,v.p));U--;)pt=ee[U],pt.end||pt.refresh(0,1)||(un=P),Mt=pt.pin,Mt&&(Mt===f||Mt===d||Mt===dn)&&!pt.isReverted&&(wt||(wt=[]),wt.unshift(pt),pt.revert(!0,!0)),pt!==ee[U]&&(w--,U--);for(En(Se)&&(Se=Se(P)),Se=rm(Se,"start",P),Ct=dm(Se,f,Ue,v,it(),me,B,P,jt,nt,J,ye,T,P._startClamp&&"_startClamp")||(d?-.001:0),En(he)&&(he=he(P)),Hn(he)&&!he.indexOf("+=")&&(~he.indexOf(" ")?he=(Hn(Se)?Se.split(" ")[0]:"")+he:(ge=Nl(he.substr(2),Ue),he=Hn(Se)?Se:(T?bt.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Ct):Ct)+ge,Un=f)),he=rm(he,"end",P),D=Math.max(Ct,dm(he||(Un?"100% 0":ye),Un,Ue,v,it()+ge,kt,Tt,P,jt,nt,J,ye,T,P._endClamp&&"_endClamp"))||-.001,ge=0,U=w;U--;)pt=ee[U],Mt=pt.pin,Mt&&pt.start-pt._pinPush<=Ct&&!T&&pt.end>0&&(k=pt.end-(P._startClamp?Math.max(0,pt.start):pt.start),(Mt===f&&pt.start-pt._pinPush<Ct||Mt===dn)&&isNaN(Se)&&(ge+=k*(1-pt.progress)),Mt===d&&(_e+=k));if(Ct+=ge,D+=ge,P._startClamp&&(P._startClamp+=ge),P._endClamp&&!Tn&&(P._endClamp=D||-.001,D=Math.min(D,Ti(N,v))),E=D-Ct||(Ct-=.01)&&.001,Ge&&(at=bt.utils.clamp(0,1,bt.utils.normalize(Ct,D,ht))),P._pinPush=_e,me&&ge&&(k={},k[v.a]="+="+ge,dn&&(k[v.p]="-="+it()),bt.set([me,kt],k)),d&&!(ju&&P.end>=Ti(N,v)))k=ni(d),st=v===Ve,O=it(),mt=parseFloat(ft(v.a))+_e,!ye&&D>1&&(Zt=(X?Re.scrollingElement||pi:N).style,Zt={style:Zt,value:Zt["overflow"+v.a.toUpperCase()]},X&&ni(we)["overflow"+v.a.toUpperCase()]!=="scroll"&&(Zt.style["overflow"+v.a.toUpperCase()]="scroll")),Zu(d,Q,k),tt=Ll(d),G=$i(d,!0),Ht=J&&Zi(N,st?hn:Ve)(),g?(lt=[g+v.os2,E+_e+qe],lt.t=Q,U=g===He?Hl(d,v)+E+_e:0,U&&(lt.push(v.d,U+qe),Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=U+qe)),lo(lt),dn&&ee.forEach(function(Be){Be.pin===dn&&Be.vars.pinSpacing!==!1&&(Be._subPinOffset=!0)}),J&&it(ht)):(U=Hl(d,v),U&&Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=U+qe)),J&&(ot={top:G.top+(st?O-Ct:Ht)+qe,left:G.left+(st?Ht:O-Ct)+qe,boxSizing:"border-box",position:"fixed"},ot[rs]=ot["max"+co]=Math.ceil(G.width)+qe,ot[ss]=ot["max"+lf]=Math.ceil(G.height)+qe,ot[ei]=ot[ei+jo]=ot[ei+Ko]=ot[ei+ta]=ot[ei+Qo]="0",ot[He]=k[He],ot[He+jo]=k[He+jo],ot[He+Ko]=k[He+Ko],ot[He+ta]=k[He+ta],ot[He+Qo]=k[He+Qo],W=QS(M,ot,C),Tn&&it(0)),i?(Xt=i._initted,Gu(1),i.render(i.duration(),!0,!0),qt=ft(v.a)-mt+E+_e,Lt=Math.abs(E-qt)>1,J&&Lt&&W.splice(W.length-2,2),i.render(0,!0,!0),Xt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Gu(0)):qt=E,Zt&&(Zt.value?Zt.style["overflow"+v.a.toUpperCase()]=Zt.value:Zt.style.removeProperty("overflow-"+v.a));else if(f&&it()&&!T)for(G=f.parentNode;G&&G!==we;)G._pinOffset&&(Ct-=G._pinOffset,D-=G._pinOffset),G=G.parentNode;wt&&wt.forEach(function(Be){return Be.revert(!1,!0)}),P.start=Ct,P.end=D,Yt=zt=Tn?ht:it(),!T&&!Tn&&(Yt<ht&&it(ht),P.scroll.rec=0),P.revert(!1,!0),et=fn(),K&&(z=-1,K.restart(!0)),un=0,i&&I&&(i._initted||dt)&&i.progress()!==dt&&i.progress(dt||0,!0).render(i.time(),!0,!0),(Ge||at!==P.progress||T||_)&&(i&&!I&&i.totalProgress(T&&Ct<-.001&&!at?bt.utils.normalize(Ct,D,0):at,!0),P.progress=Ge||(Yt-Ct)/E===at?0:at),d&&g&&(Q._pinOffset=Math.round(P.progress*qt)),L&&L.invalidate(),isNaN(ce)||(ce-=bt.getProperty(B,v.p),ue-=bt.getProperty(Tt,v.p),Dl(B,v,ce),Dl(me,v,ce-(Gt||0)),Dl(Tt,v,ue),Dl(kt,v,ue-(Gt||0))),Ge&&!Tn&&P.update(),h&&!Tn&&!Rt&&(Rt=!0,h(P),Rt=!1)}},P.getVelocity=function(){return(it()-zt)/(fn()-Xo)*1e3||0},P.endAnimation=function(){Wo(P.callbackAnimation),i&&(L?L.progress(1):i.paused()?I||Wo(i,P.direction<0,1):Wo(i,i.reversed()))},P.labelToScroll=function(gt){return i&&i.labels&&(Ct||P.refresh()||Ct)+i.labels[gt]/i.duration()*E||0},P.getTrailing=function(gt){var Wt=ee.indexOf(P),Pt=P.direction>0?ee.slice(0,Wt).reverse():ee.slice(Wt+1);return(Hn(gt)?Pt.filter(function(Gt){return Gt.vars.preventOverlaps===gt}):Pt).filter(function(Gt){return P.direction>0?Gt.end<=Ct:Gt.start>=D})},P.update=function(gt,Wt,Pt){if(!(T&&!Pt&&!gt)){var Gt=Tn===!0?ht:P.scroll(),Ue=gt?0:(Gt-Ct)/E,jt=Ue<0?0:Ue>1?1:Ue||0,ye=P.progress,Ge,ge,_e,he,Un,Se,dn,w;if(Wt&&(zt=Yt,Yt=T?it():Gt,x&&(se=Bt,Bt=i&&!I?i.totalProgress():jt)),m&&d&&!un&&!El&&ii&&(!jt&&Ct<Gt+(Gt-zt)/(fn()-Xo)*m?jt=1e-4:jt===1&&D>Gt+(Gt-zt)/(fn()-Xo)*m&&(jt=.9999)),jt!==ye&&P.enabled){if(Ge=P.isActive=!!jt&&jt<1,ge=!!ye&&ye<1,Se=Ge!==ge,Un=Se||!!jt!=!!ye,P.direction=jt>ye?1:-1,P.progress=jt,Un&&!un&&(_e=jt&&!ye?0:jt===1?1:ye===1?2:3,I&&(he=!Se&&q[_e+1]!=="none"&&q[_e+1]||q[_e],w=i&&(he==="complete"||he==="reset"||he in i))),y&&(Se||w)&&(w||u||!i)&&(En(y)?y(P):P.getTrailing(y).forEach(function(O){return O.endAnimation()})),I||(L&&!un&&!El?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",jt,i._tTime/i._tDur):(L.vars.totalProgress=jt,L.invalidate().restart())):i&&i.totalProgress(jt,!!(un&&(et||gt)))),d){if(gt&&g&&(Q.style[g+v.os2]=rt),!J)ct(qo(mt+qt*jt));else if(Un){if(dn=!gt&&jt>ye&&D+1>Gt&&Gt+1>=Ti(N,v),C)if(!gt&&(Ge||dn)){var U=$i(d,!0),k=Gt-Ct;pm(d,we,U.top+(v===Ve?k:0)+qe,U.left+(v===Ve?0:k)+qe)}else pm(d,Q);lo(Ge||dn?W:tt),Lt&&jt<1&&Ge||ct(mt+(jt===1&&!dn?qt:0))}}x&&!xt.tween&&!un&&!El&&K.restart(!0),a&&(Se||S&&jt&&(jt<1||!Wu))&&na(a.targets).forEach(function(O){return O.classList[Ge||S?"add":"remove"](a.className)}),o&&!I&&!gt&&o(P),Un&&!un?(I&&(w&&(he==="complete"?i.pause().totalProgress(1):he==="reset"?i.restart(!0).pause():he==="restart"?i.restart(!0):i[he]()),o&&o(P)),(Se||!Wu)&&(c&&Se&&Yu(P,c),H[_e]&&Yu(P,H[_e]),S&&(jt===1?P.kill(!1,1):H[_e]=0),Se||(_e=jt===1?1:3,H[_e]&&Yu(P,H[_e]))),R&&!Ge&&Math.abs(P.getVelocity())>(Zo(R)?R:2500)&&(Wo(P.callbackAnimation),L?L.progress(1):Wo(i,he==="reverse"?1:!jt,1))):I&&o&&!un&&o(P)}if(yt){var G=T?Gt/T.duration()*(T._caScrollDist||0):Gt;Dt(G+(B._isFlipped?1:0)),yt(G)}Vt&&Vt(-Gt/T.duration()*(T._caScrollDist||0))}},P.enable=function(gt,Wt){P.enabled||(P.enabled=!0,Qe(N,"resize",Jo),X||Qe(N,"scroll",ro),j&&Qe(r,"refreshInit",j),gt!==!1&&(P.progress=at=0,Yt=zt=z=it()),Wt!==!1&&P.refresh())},P.getTween=function(gt){return gt&&xt?xt.tween:L},P.setPositions=function(gt,Wt,Pt,Gt){if(T){var Ue=T.scrollTrigger,jt=T.duration(),ye=Ue.end-Ue.start;gt=Ue.start+ye*gt/jt,Wt=Ue.start+ye*Wt/jt}P.refresh(!1,!1,{start:sm(gt,Pt&&!!P._startClamp),end:sm(Wt,Pt&&!!P._endClamp)},Gt),P.update()},P.adjustPinSpacing=function(gt){if(lt&&gt){var Wt=lt.indexOf(v.d)+1;lt[Wt]=parseFloat(lt[Wt])+gt+qe,lt[1]=parseFloat(lt[1])+gt+qe,lo(lt)}},P.disable=function(gt,Wt){if(P.enabled&&(gt!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,Wt||L&&L.pause(),ht=0,Et&&(Et.uncache=1),j&&Ke(r,"refreshInit",j),K&&(K.pause(),xt.tween&&xt.tween.kill()&&(xt.tween=0)),!X)){for(var Pt=ee.length;Pt--;)if(ee[Pt].scroller===N&&ee[Pt]!==P)return;Ke(N,"resize",Jo),X||Ke(N,"scroll",ro)}},P.kill=function(gt,Wt){P.disable(gt,Wt),L&&!Wt&&L.kill(),l&&delete tf[l];var Pt=ee.indexOf(P);Pt>=0&&ee.splice(Pt,1),Pt===wn&&Fl>0&&wn--,Pt=0,ee.forEach(function(Gt){return Gt.scroller===P.scroller&&(Pt=1)}),Pt||Tn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,gt&&i.revert({kill:!1}),Wt||i.kill()),me&&[me,kt,B,Tt].forEach(function(Gt){return Gt.parentNode&&Gt.parentNode.removeChild(Gt)}),ea===P&&(ea=0),d&&(Et&&(Et.uncache=1),Pt=0,ee.forEach(function(Gt){return Gt.pin===d&&Pt++}),Pt||(Et.spacer=0)),n.onKill&&n.onKill(P)},ee.push(P),P.enable(!1,!1),le&&le(P),i&&i.add&&!E){var $t=P.update;P.update=function(){P.update=$t,Ct||D||P.refresh()},bt.delayedCall(.01,P.update),E=.01,Ct=D=0}else P.refresh();d&&JS()},r.register=function(n){return so||(bt=n||Tm(),wm()&&window.document&&r.enable(),so=Yo),so},r.defaults=function(n){if(n)for(var i in n)Pl[i]=n[i];return Pl},r.disable=function(n,i){Yo=0,ee.forEach(function(o){return o[i?"kill":"disable"](n)}),Ke(re,"wheel",ro),Ke(Re,"scroll",ro),clearInterval(Tl),Ke(Re,"touchcancel",wi),Ke(we,"touchstart",wi),Cl(Ke,Re,"pointerdown,touchstart,mousedown",om),Cl(Ke,Re,"pointerup,touchend,mouseup",am),kl.kill(),Al(Ke);for(var s=0;s<te.length;s+=3)Rl(Ke,te[s],te[s+1]),Rl(Ke,te[s],te[s+2])},r.enable=function(){if(re=window,Re=document,pi=Re.documentElement,we=Re.body,bt&&(na=bt.utils.toArray,$o=bt.utils.clamp,Qu=bt.core.context||wi,Gu=bt.core.suppressOverwrites||wi,rf=re.history.scrollRestoration||"auto",ef=re.pageYOffset,bt.core.globals("ScrollTrigger",r),we)){Yo=1,ao=document.createElement("div"),ao.style.height="100vh",ao.style.position="absolute",Um(),HS(),De.register(bt),r.isTouch=De.isTouch,br=De.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ku=De.isTouch===1,Qe(re,"wheel",ro),vm=[re,Re,pi,we],bt.matchMedia?(r.matchMedia=function(l){var c=bt.matchMedia(),h;for(h in l)c.add(h,l[h]);return c},bt.addEventListener("matchMediaInit",function(){return hf()}),bt.addEventListener("matchMediaRevert",function(){return Lm()}),bt.addEventListener("matchMedia",function(){is(0,1),cs("matchMedia")}),bt.matchMedia("(orientation: portrait)",function(){return qu(),qu})):console.warn("Requires GSAP 3.11.0 or later"),qu(),Qe(Re,"scroll",ro);var n=we.style,i=n.borderTopStyle,s=bt.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=$i(we),Ve.m=Math.round(o.top+Ve.sc())||0,hn.m=Math.round(o.left+hn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Tl=setInterval(hm,250),bt.delayedCall(.5,function(){return El=0}),Qe(Re,"touchcancel",wi),Qe(we,"touchstart",wi),Cl(Qe,Re,"pointerdown,touchstart,mousedown",om),Cl(Qe,Re,"pointerup,touchend,mouseup",am),$u=bt.utils.checkPrefix("transform"),Bl.push($u),so=fn(),kl=bt.delayedCall(.2,is).pause(),oo=[Re,"visibilitychange",function(){var l=re.innerWidth,c=re.innerHeight;Re.hidden?(nm=l,im=c):(nm!==l||im!==c)&&Jo()},Re,"DOMContentLoaded",is,re,"load",is,re,"resize",Jo],Al(Qe),ee.forEach(function(l){return l.enable(0,1)}),a=0;a<te.length;a+=3)Rl(Ke,te[a],te[a+1]),Rl(Ke,te[a],te[a+2])}},r.config=function(n){"limitCallbacks"in n&&(Wu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Tl)||(Tl=i)&&setInterval(hm,i),"ignoreMobileResize"in n&&(Ku=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Al(Ke)||Al(Qe,n.autoRefreshEvents||"none"),Mm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Sn(n),o=te.indexOf(s),a=as(s);~o&&te.splice(o,a?6:2),i&&(a?di.unshift(re,i,we,i,pi,i):di.unshift(s,i))},r.clearMatchMedia=function(n){ee.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Hn(n)?Sn(n):n).getBoundingClientRect(),a=o[s?rs:ss]*i||0;return s?o.right-a>0&&o.left+a<re.innerWidth:o.bottom-a>0&&o.top+a<re.innerHeight},r.positionInViewport=function(n,i,s){Hn(n)&&(n=Sn(n));var o=n.getBoundingClientRect(),a=o[s?rs:ss],l=i==null?a/2:i in Gl?Gl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/re.innerWidth:(o.top+l)/re.innerHeight},r.killAll=function(n){if(ee.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ls.killAll||[];ls={},i.forEach(function(s){return s()})}},r}();Nt.version="3.12.5";Nt.saveStyles=function(r){return r?na(r).forEach(function(t){if(t&&t.style){var e=Vn.indexOf(t);e>=0&&Vn.splice(e,5),Vn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),bt.core.getCache(t),Qu())}}):Vn};Nt.revert=function(r,t){return hf(!r,t)};Nt.create=function(r,t){return new Nt(r,t)};Nt.refresh=function(r){return r?Jo():(so||Nt.register())&&is(!0)};Nt.update=function(r){return++te.cache&&Ki(r===!0?2:0)};Nt.clearScrollMemory=Dm;Nt.maxScroll=function(r,t){return Ti(r,t?hn:Ve)};Nt.getScrollFunc=function(r,t){return Zi(Sn(r),t?hn:Ve)};Nt.getById=function(r){return tf[r]};Nt.getAll=function(){return ee.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Nt.isScrolling=function(){return!!ii};Nt.snapDirectional=cf;Nt.addEventListener=function(r,t){var e=ls[r]||(ls[r]=[]);~e.indexOf(t)||e.push(t)};Nt.removeEventListener=function(r,t){var e=ls[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Nt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var u=[],f=[],d=bt.delayedCall(i,function(){h(u,f),u=[],f=[]}).pause();return function(g){u.length||d.restart(!0),u.push(g.trigger),f.push(g),s<=u.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&En(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return En(s)&&(s=s(),Qe(Nt,"refresh",function(){return s=t.batchMax()})),na(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Nt.create(c))}),e};var gm=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Ju=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(De.isTouch?" pinch-zoom":""):"none",t===pi&&r(we,e)},Ul={auto:1,scroll:1},tb=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||bt.core.getCache(s),a=fn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==we&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ul[(l=ni(s)).overflowY]||Ul[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!as(s)&&(Ul[(l=ni(s)).overflowY]||Ul[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Om=function(t,e,n,i){return De.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&tb,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Qe(Re,De.eventTypes[0],xm,!1,!0)},onDisable:function(){return Ke(Re,De.eventTypes[0],xm,!0)}})},eb=/(input|label|select|textarea)/i,_m,xm=function(t){var e=eb.test(t.target.tagName);(e||_m)&&(t._gsapAllow=!0,_m=e)},nb=function(t){ns(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Sn(t.target)||pi,h=bt.core.globals().ScrollSmoother,u=h&&h.get(),f=br&&(t.content&&Sn(t.content)||u&&t.content!==!1&&!u.smooth()&&u.content()),d=Zi(c,Ve),g=Zi(c,hn),_=1,m=(De.isTouch&&re.visualViewport?re.visualViewport.scale*re.visualViewport.width:re.outerWidth)/re.innerWidth,p=0,b=En(i)?function(){return i(a)}:function(){return i||2.8},S,x,C=Om(c,t.type,!0,s),A=function(){return x=!1},T=wi,R=wi,y=function(){l=Ti(c,Ve),R=$o(br?1:0,l),n&&(T=$o(0,Ti(c,hn))),S=os},v=function(){f._gsap.y=qo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},I=function(){if(x){requestAnimationFrame(A);var V=qo(a.deltaY/2),nt=R(d.v-V);if(f&&nt!==d.v+d.offset){d.offset=nt-d.v;var P=qo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",d.cacheID=te.cache,Ki()}return!0}d.offset&&v(),x=!0},N,F,X,J,H=function(){y(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return f&&bt.set(f,{y:"+=0"}),t.ignoreCheck=function(q){return br&&q.type==="touchmove"&&I(q)||_>1.05&&q.type!=="touchstart"||a.isGesturing||q.touches&&q.touches.length>1},t.onPress=function(){x=!1;var q=_;_=qo((re.visualViewport&&re.visualViewport.scale||1)/m),N.pause(),q!==_&&Ju(c,_>1.01?!0:n?!1:"x"),F=g(),X=d(),y(),S=os},t.onRelease=t.onGestureStart=function(q,V){if(d.offset&&v(),!V)J.restart(!0);else{te.cache++;var nt=b(),P,j;n&&(P=g(),j=P+nt*.05*-q.velocityX/.227,nt*=gm(g,P,j,Ti(c,hn)),N.vars.scrollX=T(j)),P=d(),j=P+nt*.05*-q.velocityY/.227,nt*=gm(d,P,j,Ti(c,Ve)),N.vars.scrollY=R(j),N.invalidate().duration(nt).play(.01),(br&&N.vars.scrollY>=l||P>=l-1)&&bt.to({},{onUpdate:H,duration:nt})}o&&o(q)},t.onWheel=function(){N._ts&&N.pause(),fn()-p>1e3&&(S=0,p=fn())},t.onChange=function(q,V,nt,P,j){if(os!==S&&y(),V&&n&&g(T(P[2]===V?F+(q.startX-q.x):g()+V-P[1])),nt){d.offset&&v();var St=j[2]===nt,Ot=St?X+q.startY-q.y:d()+nt-j[1],z=R(Ot);St&&Ot!==z&&(X+=z-Ot),d(z)}(nt||V)&&Ki()},t.onEnable=function(){Ju(c,n?!1:"x"),Nt.addEventListener("refresh",H),Qe(re,"resize",H),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),C.enable()},t.onDisable=function(){Ju(c,!0),Ke(re,"resize",H),Nt.removeEventListener("refresh",H),C.kill()},t.lockAxis=t.lockAxis!==!1,a=new De(t),a.iOS=br,br&&!d()&&d(1),br&&bt.ticker.add(wi),J=a._dc,N=bt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Nm(d,d(),function(){return N.pause()})},onUpdate:Ki,onComplete:J.vars.onComplete}),a};Nt.sort=function(r){return ee.sort(r||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};Nt.observe=function(r){return new De(r)};Nt.normalizeScroll=function(r){if(typeof r=="undefined")return bn;if(r===!0&&bn)return bn.enable();if(r===!1){bn&&bn.kill(),bn=r;return}var t=r instanceof De?r:nb(r);return bn&&bn.target===t.target&&bn.kill(),as(t.target)&&(bn=t),t};Nt.core={_getVelocityProp:wl,_inputObserver:Om,_scrollers:te,_proxies:di,bridge:{ss:function(){ii||cs("scrollStart"),ii=fn()},ref:function(){return un}}};Tm()&&bt.registerPlugin(Nt);var ib="1.1.18";function Bm(r,t,e){return Math.max(r,Math.min(t,e))}function rb(r,t,e){return(1-e)*r+e*t}function sb(r,t,e,n){return rb(r,t,1-Math.exp(-e*n))}function ob(r,t){return(r%t+t)%t}var ab=class{constructor(){Ut(this,"isRunning",!1);Ut(this,"value",0);Ut(this,"from",0);Ut(this,"to",0);Ut(this,"currentTime",0);Ut(this,"lerp");Ut(this,"duration");Ut(this,"easing");Ut(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let n=Bm(0,this.currentTime/this.duration,1);t=n>=1;let i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=sb(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function lb(r,t){let e;return function(...n){let i=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(i,n)},t)}}var cb=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Ut(this,"width",0);Ut(this,"height",0);Ut(this,"scrollHeight",0);Ut(this,"scrollWidth",0);Ut(this,"debouncedResize");Ut(this,"wrapperResizeObserver");Ut(this,"contentResizeObserver");Ut(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ut(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ut(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=lb(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},zm=class{constructor(){Ut(this,"events",{})}emit(r,...t){var n;let e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){var e;return(e=this.events[r])!=null&&e.push(t)||(this.events[r]=[t]),()=>{var n;this.events[r]=(n=this.events[r])==null?void 0:n.filter(i=>t!==i)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},Fm=100/6,wr={passive:!1},hb=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Ut(this,"touchStart",{x:0,y:0});Ut(this,"lastDelta",{x:0,y:0});Ut(this,"window",{width:0,height:0});Ut(this,"emitter",new zm);Ut(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Ut(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Ut(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Ut(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=n===1?Fm:n===2?this.window.width:1,s=n===1?Fm:n===2?this.window.height:1;t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Ut(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,wr),this.element.addEventListener("touchstart",this.onTouchStart,wr),this.element.addEventListener("touchmove",this.onTouchMove,wr),this.element.addEventListener("touchend",this.onTouchEnd,wr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,wr),this.element.removeEventListener("touchstart",this.onTouchStart,wr),this.element.removeEventListener("touchmove",this.onTouchMove,wr),this.element.removeEventListener("touchend",this.onTouchEnd,wr)}},km=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:o=35,duration:a,easing:l=C=>Math.min(1,1.001-Math.pow(2,-10*C)),lerp:c=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:f="vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:b=!0,autoRaf:S=!1,__experimental__naiveDimensions:x=!1}={}){Ut(this,"_isScrolling",!1);Ut(this,"_isStopped",!1);Ut(this,"_isLocked",!1);Ut(this,"_preventNextNativeScrollEvent",!1);Ut(this,"_resetVelocityTimeout",null);Ut(this,"__rafID",null);Ut(this,"isTouching");Ut(this,"time",0);Ut(this,"userData",{});Ut(this,"lastVelocity",0);Ut(this,"velocity",0);Ut(this,"direction",0);Ut(this,"options");Ut(this,"targetScroll");Ut(this,"animatedScroll");Ut(this,"animate",new ab);Ut(this,"emitter",new zm);Ut(this,"dimensions");Ut(this,"virtualScroll");Ut(this,"onPointerDown",r=>{r.button===1&&this.reset()});Ut(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let h=this.options.prevent;if(c.find(m=>{var p,b,S;return m instanceof HTMLElement&&(typeof h=="function"&&(h==null?void 0:h(m))||((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent"))||i&&((b=m.hasAttribute)==null?void 0:b.call(m,"data-lenis-prevent-touch"))||s&&((S=m.hasAttribute)==null?void 0:S.call(m,"data-lenis-prevent-wheel")))}))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.preventDefault();let d=i&&this.options.syncTouch,_=i&&n.type==="touchend"&&Math.abs(f)>5;_&&(f=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ut(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ut(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=ib,(!r||r===document.documentElement||r===document.body)&&(r=window),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:u,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:b,autoRaf:S,__experimental__naiveDimensions:x},this.dimensions=new cb(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new hb(e,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}setScroll(r){this.isHorizontal?this.rootElement.scrollLeft=r:this.rootElement.scrollTop=r}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1)}stop(){this.isStopped||(this.reset(),this.isStopped=!0)}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:h=!0,userData:u}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let f;if(typeof r=="string"?f=document.querySelector(r):r instanceof HTMLElement&&(r!=null&&r.nodeType)&&(f=r),f){if(this.options.wrapper!==window){let g=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?g.left:g.top}let d=f.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=t,r=Math.round(r),this.options.infinite?h&&(this.targetScroll=this.animatedScroll=this.scroll):r=Bm(0,r,this.limit),r===this.targetScroll){a==null||a(this),l==null||l(this);return}if(this.userData=u!=null?u:{},e){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={};return}h||(this.targetScroll=r),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),h&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),l==null||l(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?ob(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};var Gn=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,nn=null,fs=document.documentElement,Vm=!1,Tr=!1,Wn=(r,t=document)=>t.querySelector(r),Ze=(r,t=document)=>Array.from(t.querySelectorAll(r));function ub(r,t){let e;return(...n)=>{clearTimeout(e),e=setTimeout(()=>r(...n),t)}}function hs(r=1500){return!document.fonts||!document.fonts.ready?Promise.resolve():Promise.race([document.fonts.ready,new Promise(t=>setTimeout(t,r))])}function Hm(){Vm||(Vm=!0,fs.classList.add("pronto"),window.dispatchEvent(new CustomEvent("rocca:pronto")),Nt.refresh())}function fb(r){Fe.registerPlugin(Nt),!(Gn||r.lenis===!1)&&(nn=new km({lerp:.09,smoothWheel:!0}),nn.on("scroll",Nt.update),Fe.ticker.add(t=>nn.raf(t*1e3)),Fe.ticker.lagSmoothing(0),document.addEventListener("click",t=>{let e=t.target.closest('a[href^="#"]');if(!e||e.hasAttribute("data-sem-lenis"))return;let n=e.getAttribute("href");if(n==="#"||n.length<2)return;let i=document.querySelector(n);i&&(t.preventDefault(),Tr&&ho(),nn.scrollTo(i,{offset:0,duration:1.4,easing:s=>1-Math.pow(1-s,3)}))}))}function db(){let r=Wn(".nav");if(!r)return;let t=()=>r.classList.toggle("nav--solida",(window.scrollY||0)>40);Nt.create({start:0,end:"max",onUpdate:t}),t();let e=0,n=()=>{e>0?fs.setAttribute("data-tema","claro"):fs.removeAttribute("data-tema")};Ze('[data-tema="claro"]').forEach(i=>{Nt.create({trigger:i,start:"top 60px",end:"bottom 60px",onEnter:()=>{e++,n()},onEnterBack:()=>{e++,n()},onLeave:()=>{e=Math.max(0,e-1),n()},onLeaveBack:()=>{e=Math.max(0,e-1),n()}})})}var us,Dn,Xl;function Wm(){if(!Dn||Tr)return;Tr=!0,Xl=document.activeElement,Dn.classList.add("menu--aberto"),Dn.removeAttribute("inert"),Dn.setAttribute("aria-hidden","false"),fs.classList.add("menu-aberto"),us.setAttribute("aria-expanded","true");let r=Wn(".nav__menu-txt",us);r&&(r.dataset.original=r.textContent,r.textContent="Fechar"),nn&&nn.stop();let t=Wn("a, button",Dn);setTimeout(()=>t&&t.focus({preventScroll:!0}),80)}function ho(){if(!Dn||!Tr)return;Tr=!1,Dn.classList.remove("menu--aberto"),Dn.setAttribute("inert",""),Dn.setAttribute("aria-hidden","true"),fs.classList.remove("menu-aberto"),us.setAttribute("aria-expanded","false");let r=Wn(".nav__menu-txt",us);r&&(r.textContent=r.dataset.original||"Menu"),nn&&nn.start(),Xl&&Xl.focus&&Xl.focus({preventScroll:!0})}function pb(){us=Wn(".nav__menu"),Dn=Wn(".menu"),!(!us||!Dn)&&(Dn.setAttribute("inert",""),us.addEventListener("click",()=>Tr?ho():Wm()),document.addEventListener("keydown",r=>{r.key==="Escape"&&Tr&&ho()}),Dn.addEventListener("click",r=>{r.target.closest("a")&&ho()}),Ze("[data-fecha-menu]",Dn).forEach(r=>r.addEventListener("click",ho)))}var mb={duration:1.1,ease:"power3.out",stagger:.08};function uf(r){return!r.closest("[data-hero]")}function Gm(r){let t=Array.isArray(r)?r:[r];if(!t.length)return;if(t.forEach(i=>i.classList.add("revelado")),Gn){Fe.set(t,{clearProps:"all"});return}let e=t.filter(i=>i.dataset.reveal==="escala"),n=t.filter(i=>i.dataset.reveal!=="escala");n.length&&Fe.fromTo(n,{opacity:0,y:24},{opacity:1,y:0,...mb,overwrite:"auto"}),e.length&&Fe.fromTo(e,{opacity:0,scale:1.06},{opacity:1,scale:1,duration:1.4,ease:"power3.out",stagger:.08,overwrite:"auto"})}function gb(){let r=Ze("[data-reveal]").filter(uf).filter(t=>!t.parentElement.hasAttribute("data-reveal-grupo"));Gn?r.forEach(t=>t.classList.add("revelado")):r.length&&Nt.batch(r,{start:"top 85%",once:!0,onEnter:t=>Gm(t)}),Ze("[data-reveal-grupo]").filter(uf).forEach(t=>{let e=Array.from(t.children);if(Gn){t.classList.add("revelado");return}Nt.create({trigger:t,start:"top 85%",once:!0,onEnter:()=>Gm(e)})})}function _b(r){let t=[],e=!0,n=(i,s)=>{if(i.nodeType===Node.TEXT_NODE){i.nodeValue.split(/(\s+)/).forEach(a=>{if(a){if(/^\s+$/.test(a)){e=!0;return}t.push({texto:a,cadeia:s,espacoAntes:e,no:i}),e=!1}});return}if(i.nodeType===Node.ELEMENT_NODE){if(i.tagName==="BR"){e=!0,t.push({quebra:!0});return}Array.from(i.childNodes).forEach(o=>n(o,s.concat(i)))}};return Array.from(r.childNodes).forEach(i=>n(i,[])),t}function xb(r){let t=_b(r),e=new Map;return t.forEach(n=>{n.quebra||(e.has(n.no)||e.set(n.no,[]),e.get(n.no).push(n))}),e.forEach((n,i)=>{let s=document.createDocumentFragment(),o=i.nodeValue.split(/(\s+)/),a=0;o.forEach(l=>{if(!l)return;if(/^\s+$/.test(l)){s.append(" ");return}let c=document.createElement("span");c.className="palavra",c.textContent=l,n[a].span=c,a++,s.append(c)}),i.parentNode.replaceChild(s,i)}),t}function vb(r){let t=document.createElement("span");t.className="linha";let e=document.createElement("span");e.className="linha__in",t.append(e);let n=[],i=[];return r.forEach((s,o)=>{let a=e,l=[],c=!0;for(let h=0;h<s.cadeia.length;h++){if(c&&n[h]===s.cadeia[h]&&i[h])a=i[h];else{c=!1;let u=s.cadeia[h].cloneNode(!1);a.append(u),a=u}l[h]=a}o>0&&s.espacoAntes&&a.append(" "),a.append(s.texto),n=s.cadeia,i=l}),t}function ff(r){r.__splitOriginal||(r.__splitOriginal=r.innerHTML),r.innerHTML=r.__splitOriginal,r.classList.remove("split-pronto");let t=xb(r);if(!t.filter(l=>!l.quebra&&l.span).length)return r.classList.add("split-pronto"),[];let n=parseFloat(getComputedStyle(r).fontSize)*.5,i=[],s=null,o=null;return t.forEach(l=>{if(l.quebra){s=null;return}if(!l.span)return;let c=l.span.offsetTop;(!s||Math.abs(c-o)>n)&&(s=[],i.push(s),o=c),s.push(l)}),r.innerHTML="",i.map(l=>vb(l)).forEach(l=>r.append(l)),r.classList.add("split-pronto"),Ze(".linha__in",r)}function yb(r,t=0){r.classList.add("revelado");let e=Ze(".linha__in",r);return Gn||!e.length?(Fe.set(e,{clearProps:"transform"}),null):Fe.fromTo(e,{yPercent:110},{yPercent:0,duration:1.2,ease:"power3.out",stagger:.08,delay:t,overwrite:"auto"})}function Mb(){let r=Ze("[data-split-linhas]");if(!r.length)return;if(Gn){r.forEach(n=>n.classList.add("split-pronto","revelado"));return}let t=()=>{r.forEach(n=>{ff(n),n.classList.contains("revelado")&&Fe.set(Ze(".linha__in",n),{yPercent:0})}),Nt.refresh()};t(),r.filter(uf).forEach(n=>{Nt.create({trigger:n,start:"top 85%",once:!0,onEnter:()=>yb(n)})});let e=window.innerWidth;window.addEventListener("resize",ub(()=>{window.innerWidth!==e&&(e=window.innerWidth,t())},200))}function Sb(){Gn||Ze("[data-parallax]").forEach(r=>{let t=parseFloat(r.dataset.parallax)||8,e=r.closest("[data-parallax-area]")||r.parentElement;Fe.fromTo(r,{yPercent:-t},{yPercent:t,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:!0}})})}function bb(){Ze("[data-contador]").forEach(r=>{let t=parseFloat(r.dataset.contador);if(Number.isNaN(t))return;let e=r.dataset.casas&&parseInt(r.dataset.casas,10)||0,n=s=>s.toLocaleString("pt-BR",{minimumFractionDigits:e,maximumFractionDigits:e});if(Gn){r.textContent=n(t);return}let i={v:0};Nt.create({trigger:r,start:"top 85%",once:!0,onEnter:()=>Fe.to(i,{v:t,duration:1.6,ease:"power2.out",onUpdate:()=>{r.textContent=n(i.v)}})})})}function wb(){let r=Wn(".whats");if(!r)return;let t=Wn("[data-hero]");if(!t){r.classList.add("whats--visivel");return}Nt.create({trigger:t,start:"bottom 120px",onEnter:()=>r.classList.add("whats--visivel"),onLeaveBack:()=>r.classList.remove("whats--visivel")})}function Tb(){Ze(".form").forEach(r=>{r.addEventListener("submit",t=>{t.preventDefault();let e=Ze("input, textarea",r),n=!0;if(e.forEach(s=>{s.classList.remove("invalido")}),e.forEach(s=>{s.checkValidity()||(n=!1,s.classList.add("invalido"))}),!n){r.reportValidity&&r.reportValidity();return}r.classList.add("form--enviado");let i=Wn(".form__sucesso",r);i&&i.focus({preventScroll:!0}),Nt.refresh()})})}function Eb(){let r=e=>{if(!e||typeof e.showModal!="function")return;e.showModal(),nn&&nn.stop();let n=Wn("video",e);if(n){let i=n.play();i&&i.catch&&i.catch(()=>{})}},t=e=>{let n=Wn("video",e);n&&n.pause(),nn&&!Tr&&nn.start()};document.addEventListener("click",e=>{let n=e.target.closest("[data-abre-lightbox]");if(n){e.preventDefault(),r(document.querySelector(n.dataset.abreLightbox));return}let i=e.target.closest("[data-fecha-lightbox]");if(i){let s=i.closest("dialog");s&&s.close()}}),Ze("dialog.lightbox").forEach(e=>{e.addEventListener("close",()=>t(e)),e.addEventListener("click",n=>{n.target===e&&e.close()})})}function Ab(r){let t=Wn(".preloader"),e=i=>document.readyState==="complete"?i():window.addEventListener("load",i,{once:!0});if(!t||r.preloader===!1||Gn){t&&t.remove(),e(()=>hs(1200).then(Hm));return}let n=performance.now();nn&&nn.stop(),hs(800).then(()=>{let i=performance.now()-n,s=Math.max(0,700-i);Fe.to(t,{opacity:0,duration:.45,ease:"power2.out",delay:s/1e3,onComplete:()=>{t.remove(),nn&&nn.start(),Hm()}})})}function Yl(r=Wn("[data-hero]")){if(!r)return null;let t=Ze("[data-reveal], [data-split-linhas]",r),e=Ze("[data-reveal-grupo]",r);if(r.classList.add("hero-revelado"),Gn){t.forEach(o=>o.classList.add("revelado","split-pronto")),e.forEach(o=>o.classList.add("revelado"));let s=Ze(".linha__in",r);return s.length&&Fe.set(s,{clearProps:"transform"}),null}let n=Fe.timeline({defaults:{ease:"power3.out"}}),i=0;return t.forEach(s=>{if(s.classList.add("revelado"),s.hasAttribute("data-split-linhas")){s.classList.contains("split-pronto")||ff(s);let o=Ze(".linha__in",s);o.length?n.fromTo(o,{yPercent:110},{yPercent:0,duration:1.3,stagger:.1,overwrite:"auto"},i):n.fromTo(s,{opacity:0,y:24},{opacity:1,y:0,duration:1.1,overwrite:"auto"},i),i+=.35}else s.dataset.reveal==="escala"?(n.fromTo(s,{opacity:0,scale:1.06},{opacity:1,scale:1,duration:1.6,overwrite:"auto"},i),i+=.2):(n.fromTo(s,{opacity:0,y:24},{opacity:1,y:0,duration:1.1,overwrite:"auto"},i),i+=.18)}),e.forEach(s=>{let o=Array.from(s.children);o.forEach(a=>a.classList.add("revelado")),n.fromTo(o,{opacity:0,y:24},{opacity:1,y:0,duration:1.1,stagger:.08,overwrite:"auto"},i),i+=.2}),n}function Cb(){let r=String(new Date().getFullYear());Ze("[data-ano]").forEach(t=>{t.textContent=r})}function Rb(){if(!("IntersectionObserver"in window))return;let r=Ze("video[data-pausa-fora]");if(!r.length)return;let t=new IntersectionObserver(e=>{e.forEach(({target:n,isIntersecting:i})=>{if(i){let s=n.play();s&&s.catch&&s.catch(()=>{})}else n.pause()})},{threshold:.2});r.forEach(e=>t.observe(e))}function Xm(r={}){return fs.classList.add("js"),Gn&&fs.classList.add("movimento-reduzido"),fb(r),db(),pb(),Cb(),Tb(),Eb(),wb(),bb(),Sb(),gb(),Rb(),hs(1500).then(()=>{Mb(),Nt.refresh()}),r.revelarHero!==!1&&window.addEventListener("rocca:pronto",()=>{hs(1500).then(()=>Yl())},{once:!0}),Ab(r),window.addEventListener("load",()=>Nt.refresh(),{once:!0}),{gsap:Fe,ScrollTrigger:Nt,lenis:nn,abrirMenu:Wm,fecharMenu:ho,splitLinhas:ff,revelarHero:Yl,esperarFontes:hs}}Xm({lenis:!0,revelarHero:!1,preloader:!1});var Pb=`
attribute float aSemente; attribute float aTamanho;
uniform float uPixelRatio, uAlpha;
varying float vSemente; varying float vAlpha;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aTamanho * uPixelRatio * (64.0 / -mv.z);
  vSemente = aSemente; vAlpha = uAlpha;
}`,Ib=`
precision mediump float; uniform vec3 uCorA, uCorB; varying float vSemente; varying float vAlpha;
void main() {
  float r = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.18, r) * vAlpha;
  if (a < 0.02) discard;
  gl_FragColor = vec4(mix(uCorA, uCorB, step(0.72, vSemente)), a);
}`;function Lb(r,t,e){let n=t/r.naturalWidth,i=Math.round(r.naturalWidth*n),s=Math.round(r.naturalHeight*n),o=document.createElement("canvas");o.width=i,o.height=s;let a=o.getContext("2d",{willReadFrequently:!0});a.drawImage(r,0,0,i,s);let l=a.getImageData(0,0,i,s).data,c=[];for(let h=0;h<s;h+=e)for(let u=0;u<i;u+=e)l[(h*i+u)*4+3]>120&&c.push([(u-i/2)/i,-(h-s/2)/i]);return c}function Db(){let r=document.querySelector(".hero--letras"),t=r.querySelector(".letras__canvas"),e=r.querySelector(".letras__fallback");if(!(()=>{try{let c=document.createElement("canvas");return!!(c.getContext("webgl2")||c.getContext("webgl"))}catch{return!1}})()||Gn){t.hidden=!0,e.hidden=!1;return}let i=document.getElementById("wordmark-fonte"),s=new XMLSerializer().serializeToString(i).replace(' hidden=""',""),o=new Image;o.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(s);let a=!1,l=()=>{if(a)return;a=!0;let c=window.innerWidth<900,h=Lb(o,c?800:1500,2),u=h.length,f=20,d=new Float32Array(u*3),g=new Float32Array(u*3),_=new Float32Array(u*3),m=new Float32Array(u),p=new Float32Array(u),b=new Float32Array(u*3);for(let j=0;j<u;j++){d[j*3]=h[j][0]*f,d[j*3+1]=h[j][1]*f,d[j*3+2]=(Math.random()-.5)*.4;let St=f*(.7+Math.random()*.9),Ot=Math.random()*Math.PI*2,z=(Math.random()-.5)*Math.PI;g[j*3]=Math.cos(Ot)*Math.cos(z)*St,g[j*3+1]=Math.sin(z)*St*.6,g[j*3+2]=Math.sin(Ot)*Math.cos(z)*St*.4-3,m[j]=Math.random(),p[j]=.8+Math.random()*1.3;let et=g[j*3]-d[j*3],at=g[j*3+1]-d[j*3+1]+4,it=g[j*3+2],xt=Math.hypot(et,at,it)||1;b[j*3]=et/xt,b[j*3+1]=at/xt,b[j*3+2]=it/xt,_[j*3]=g[j*3],_[j*3+1]=g[j*3+1],_[j*3+2]=g[j*3+2]}let S=new xi,x=new on(_,3);x.setUsage(Ld),S.setAttribute("position",x),S.setAttribute("aSemente",new on(m,1)),S.setAttribute("aTamanho",new on(p,1)),S.boundingSphere=new fr(new Y(0,0,0),f*3);let C={uPixelRatio:{value:Math.min(devicePixelRatio,1.5)},uAlpha:{value:.6},uCorA:{value:new oe("#F2E8D9")},uCorB:{value:new oe("#B8997D")}},A=new $n({vertexShader:Pb,fragmentShader:Ib,uniforms:C,transparent:!0,depthWrite:!1,depthTest:!1}),T=new Ka(S,A);T.frustumCulled=!1;let R=new $a;R.add(T);let y=new Ja({canvas:t,alpha:!0,antialias:!1,powerPreference:"high-performance"});y.setPixelRatio(Math.min(devicePixelRatio,1.5));let v=new _n(30,1,.1,200),I=1,N=1,F=()=>{let j=r.clientWidth,St=r.clientHeight;y.setSize(j,St,!1),v.aspect=j/St;let Ot=j<900?.9:.74,z=f/Ot/2/(Math.tan(Wh.degToRad(15))*v.aspect);v.position.set(0,0,z),v.updateProjectionMatrix(),N=2*z*Math.tan(Wh.degToRad(15)),I=N*v.aspect,T.position.y=N*.08};F();let X;addEventListener("resize",()=>{clearTimeout(X),X=setTimeout(F,200)});let J={converge:0,progresso:0},H={x:1e6,y:1e6},q={x:1e6,y:1e6};r.addEventListener("pointermove",j=>{let St=t.getBoundingClientRect();H.x=((j.clientX-St.left)/St.width-.5)*I,H.y=-((j.clientY-St.top)/St.height-.5)*N-T.position.y}),r.addEventListener("pointerleave",()=>{H.x=1e6,H.y=1e6});let V=new ja,nt=!0,P=()=>{if(!nt||document.hidden)return;let j=V.getElapsedTime();q.x+=(H.x-q.x)*.12,q.y+=(H.y-q.y)*.12;let St=J.converge,Ot=J.progresso;for(let z=0;z<u;z++){let et=m[z],at=Math.min(1,Math.max(0,(St-et*.35)/.65));at=1-Math.pow(1-at,3);let it=g[z*3]+(d[z*3]-g[z*3])*at,xt=g[z*3+1]+(d[z*3+1]-g[z*3+1])*at,Et=g[z*3+2]+(d[z*3+2]-g[z*3+2])*at;it+=Math.sin(j*.8+et*40)*.03*at,xt+=Math.cos(j*.7+et*33)*.03*at;let Ft=it-q.x,Yt=xt-q.y,zt=Ft*Ft+Yt*Yt;if(zt<6.25){let Ct=Math.sqrt(zt)||.001,D=(1-Ct/2.5)*(1-Ct/2.5)*1.5*at;it+=Ft/Ct*D,xt+=Yt/Ct*D}Ot>0&&(it+=b[z*3]*Ot*9,xt+=b[z*3+1]*Ot*9,Et+=b[z*3+2]*Ot*9),_[z*3]=it,_[z*3+1]=xt,_[z*3+2]=Et}x.needsUpdate=!0,C.uAlpha.value=(.5+.5*St)*(1-Ot),y.render(R,v)};y.setAnimationLoop(P),Fe.to(J,{converge:1,duration:3.2,ease:"expo.out",delay:.2}),Fe.timeline({scrollTrigger:{trigger:r,start:"top top",end:"+=120%",pin:!0,scrub:.5,anticipatePin:1,onLeave:()=>{nt=!1},onEnterBack:()=>{nt=!0}}}).to(J,{progresso:1,ease:"none"},0).to(r.querySelectorAll(".hero__conteudo, .hero__dica"),{opacity:0,ease:"none",duration:.4},0)};o.onload=l,o.complete&&o.naturalWidth&&l()}window.addEventListener("rocca:pronto",()=>{hs(1500).then(()=>{Db(),Fe.delayedCall(.9,()=>Yl()),Nt.refresh()})},{once:!0});})();
