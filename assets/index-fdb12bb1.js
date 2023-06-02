import{c as De,f as Ve,a as He,b as Ue,l as Ge,r as Ye,s as Ze}from"./index-48db5283.js";import{R as h,r as l,a as qe}from"./index-532c4ca3.js";import{_ as B}from"./extends-98964cd2.js";import{j as P}from"./jsx-runtime-6db5783a.js";var S="colors",w="sizes",p="space",be={gap:p,gridGap:p,columnGap:p,gridColumnGap:p,rowGap:p,gridRowGap:p,inset:p,insetBlock:p,insetBlockEnd:p,insetBlockStart:p,insetInline:p,insetInlineEnd:p,insetInlineStart:p,margin:p,marginTop:p,marginRight:p,marginBottom:p,marginLeft:p,marginBlock:p,marginBlockEnd:p,marginBlockStart:p,marginInline:p,marginInlineEnd:p,marginInlineStart:p,padding:p,paddingTop:p,paddingRight:p,paddingBottom:p,paddingLeft:p,paddingBlock:p,paddingBlockEnd:p,paddingBlockStart:p,paddingInline:p,paddingInlineEnd:p,paddingInlineStart:p,top:p,right:p,bottom:p,left:p,scrollMargin:p,scrollMarginTop:p,scrollMarginRight:p,scrollMarginBottom:p,scrollMarginLeft:p,scrollMarginX:p,scrollMarginY:p,scrollMarginBlock:p,scrollMarginBlockEnd:p,scrollMarginBlockStart:p,scrollMarginInline:p,scrollMarginInlineEnd:p,scrollMarginInlineStart:p,scrollPadding:p,scrollPaddingTop:p,scrollPaddingRight:p,scrollPaddingBottom:p,scrollPaddingLeft:p,scrollPaddingX:p,scrollPaddingY:p,scrollPaddingBlock:p,scrollPaddingBlockEnd:p,scrollPaddingBlockStart:p,scrollPaddingInline:p,scrollPaddingInlineEnd:p,scrollPaddingInlineStart:p,fontSize:"fontSizes",background:S,backgroundColor:S,backgroundImage:S,borderImage:S,border:S,borderBlock:S,borderBlockEnd:S,borderBlockStart:S,borderBottom:S,borderBottomColor:S,borderColor:S,borderInline:S,borderInlineEnd:S,borderInlineStart:S,borderLeft:S,borderLeftColor:S,borderRight:S,borderRightColor:S,borderTop:S,borderTopColor:S,caretColor:S,color:S,columnRuleColor:S,fill:S,outline:S,outlineColor:S,stroke:S,textDecorationColor:S,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:w,minBlockSize:w,maxBlockSize:w,inlineSize:w,minInlineSize:w,maxInlineSize:w,width:w,minWidth:w,maxWidth:w,height:w,minHeight:w,maxHeight:w,flexBasis:w,gridTemplateColumns:w,gridTemplateRows:w,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},Ke=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,H=()=>{const e=Object.create(null);return(t,n,...r)=>{const o=(i=>JSON.stringify(i,Ke))(t);return o in e?e[o]:e[o]=n(t,...r)}},L=Symbol.for("sxs.internal"),ie=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),le=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:Je}=Object.prototype,ne=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),Xe=/\s+(?![^()]*\))/,D=e=>t=>e(...typeof t=="string"?String(t).split(Xe):[t]),ce={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:D((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:D((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:D((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:D((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:D((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:D((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},te=/([\d.]+)([^]*)/,Qe=(e,t)=>e.length?e.reduce((n,r)=>(n.push(...t.map(o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(o)?`:is(${r})`:r):r+" "+o)),n),[]):t,et=(e,t)=>e in tt&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(n,r,o,i)=>r+(o==="stretch"?`-moz-available${i};${ne(e)}:${r}-webkit-fill-available`:`-moz-fit-content${i};${ne(e)}:${r}fit-content`)+i):String(t),tt={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},A=e=>e?e+"-":"",xe=(e,t,n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(r,o,i,c,a)=>c=="$"==!!i?r:(o||c=="--"?"calc(":"")+"var(--"+(c==="$"?A(t)+(a.includes("$")?"":A(n))+a.replace(/\$/g,"-"):a)+")"+(o||c=="--"?"*"+(o||"")+(i||"1")+")":"")),nt=/\s*,\s*(?![^()]*\))/,rt=Object.prototype.toString,V=(e,t,n,r,o)=>{let i,c,a;const s=(u,g,f)=>{let d,m;const $=v=>{for(d in v){const y=d.charCodeAt(0)===64,E=y&&Array.isArray(v[d])?v[d]:[v[d]];for(m of E){const C=/[A-Z]/.test(b=d)?b:b.replace(/-[^]/g,R=>R[1].toUpperCase()),U=typeof m=="object"&&m&&m.toString===rt&&(!r.utils[C]||!g.length);if(C in r.utils&&!U){const R=r.utils[C];if(R!==c){c=R,$(R(m)),c=null;continue}}else if(C in ce){const R=ce[C];if(R!==a){a=R,$(R(m)),a=null;continue}}if(y&&(x=d.slice(1)in r.media?"@media "+r.media[d.slice(1)]:d,d=x.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(R,I,j,N,z,M)=>{const F=te.test(I),Z=.0625*(F?-1:1),[q,se]=F?[N,I]:[I,N];return"("+(j[0]==="="?"":j[0]===">"===F?"max-":"min-")+q+":"+(j[0]!=="="&&j.length===1?se.replace(te,(Fe,Q,ee)=>Number(Q)+Z*(j===">"?1:-1)+ee):se)+(z?") and ("+(z[0]===">"?"min-":"max-")+q+":"+(z.length===1?M.replace(te,(Fe,Q,ee)=>Number(Q)+Z*(z===">"?-1:1)+ee):M):"")+")"})),U){const R=y?f.concat(d):[...f],I=y?[...g]:Qe(g,d.split(nt));i!==void 0&&o(de(...i)),i=void 0,s(m,I,R)}else i===void 0&&(i=[[],g,f]),d=y||d.charCodeAt(0)!==36?d:`--${A(r.prefix)}${d.slice(1).replace(/\$/g,"-")}`,m=U?m:typeof m=="number"?m&&C in ot?String(m)+"px":String(m):xe(et(C,m??""),r.prefix,r.themeMap[C]),i[0].push(`${y?`${d} `:`${ne(d)}:`}${m}`)}}var x,b};$(u),i!==void 0&&o(de(...i)),i=void 0};s(e,t,n)},de=(e,t,n)=>`${n.map(r=>`${r}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,ot={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},ue=e=>String.fromCharCode(e+(e>25?39:97)),W=e=>(t=>{let n,r="";for(n=Math.abs(t);n>52;n=n/52|0)r=ue(n%52)+r;return ue(n%52)+r})(((t,n)=>{let r=n.length;for(;r;)t=33*t^n.charCodeAt(--r);return t})(5381,JSON.stringify(e))>>>0),Y=["themed","global","styled","onevar","resonevar","allvar","inline"],it=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},at=e=>{let t;const n=()=>{const{cssRules:o}=t.sheet;return[].map.call(o,(i,c)=>{const{cssText:a}=i;let s="";if(a.startsWith("--sxs"))return"";if(o[c-1]&&(s=o[c-1].cssText).startsWith("--sxs")){if(!i.cssRules.length)return"";for(const u in t.rules)if(t.rules[u].group===i)return`--sxs{--sxs:${[...t.rules[u].cache].join(" ")}}${a}`;return i.cssRules.length?`${s}${a}`:""}return a}).join("")},r=()=>{if(t){const{rules:a,sheet:s}=t;if(!s.deleteRule){for(;Object(Object(s.cssRules)[0]).type===3;)s.cssRules.splice(0,1);s.cssRules=[]}for(const u in a)delete a[u]}const o=Object(e).styleSheets||[];for(const a of o)if(it(a)){for(let s=0,u=a.cssRules;u[s];++s){const g=Object(u[s]);if(g.type!==1)continue;const f=Object(u[s+1]);if(f.type!==4)continue;++s;const{cssText:d}=g;if(!d.startsWith("--sxs"))continue;const m=d.slice(14,-3).trim().split(/\s+/),$=Y[m[0]];$&&(t||(t={sheet:a,reset:r,rules:{},toString:n}),t.rules[$]={group:f,index:s,cache:new Set(m)})}if(t)break}if(!t){const a=(s,u)=>({type:u,cssRules:[],insertRule(g,f){this.cssRules.splice(f,0,a(g,{import:3,undefined:1}[(g.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return s==="@media{}"?`@media{${[].map.call(this.cssRules,g=>g.cssText).join("")}}`:s}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:a("","text/css"),rules:{},reset:r,toString:n}}const{sheet:i,rules:c}=t;for(let a=Y.length-1;a>=0;--a){const s=Y[a];if(!c[s]){const u=Y[a+1],g=c[u]?c[u].index:i.cssRules.length;i.insertRule("@media{}",g),i.insertRule(`--sxs{--sxs:${a}}`,g),c[s]={group:i.cssRules[g+1],index:g,cache:new Set([a])}}st(c[s])}};return r(),t},st=e=>{const t=e.group;let n=t.cssRules.length;e.apply=r=>{try{t.insertRule(r,n),++n}catch{}}},G=Symbol(),lt=H(),fe=(e,t)=>lt(e,()=>(...n)=>{let r={type:null,composers:new Set};for(const o of n)if(o!=null)if(o[L]){r.type==null&&(r.type=o[L].type);for(const i of o[L].composers)r.composers.add(i)}else o.constructor!==Object||o.$$typeof?r.type==null&&(r.type=o):r.composers.add(ct(o,e));return r.type==null&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),dt(e,r,t)}),ct=({variants:e,compoundVariants:t,defaultVariants:n,...r},o)=>{const i=`${A(o.prefix)}c-${W(r)}`,c=[],a=[],s=Object.create(null),u=[];for(const d in n)s[d]=String(n[d]);if(typeof e=="object"&&e)for(const d in e){g=s,f=d,Je.call(g,f)||(s[d]="undefined");const m=e[d];for(const $ in m){const v={[d]:String($)};String($)==="undefined"&&u.push(d);const x=m[$],b=[v,x,!le(x)];c.push(b)}}var g,f;if(typeof t=="object"&&t)for(const d of t){let{css:m,...$}=d;m=typeof m=="object"&&m||{};for(const x in $)$[x]=String($[x]);const v=[$,m,!le(m)];a.push(v)}return[i,r,c,a,s,u]},dt=(e,t,n)=>{const[r,o,i,c]=ut(t.composers),a=typeof t.type=="function"||t.type.$$typeof?(f=>{function d(){for(let m=0;m<d[G].length;m++){const[$,v]=d[G][m];f.rules[$].apply(v)}return d[G]=[],null}return d[G]=[],d.rules={},Y.forEach(m=>d.rules[m]={apply:$=>d[G].push([m,$])}),d})(n):null,s=(a||n).rules,u=`.${r}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,g=f=>{f=typeof f=="object"&&f||ft;const{css:d,...m}=f,$={};for(const b in i)if(delete m[b],b in f){let y=f[b];typeof y=="object"&&y?$[b]={"@initial":i[b],...y}:(y=String(y),$[b]=y!=="undefined"||c.has(b)?y:i[b])}else $[b]=i[b];const v=new Set([...o]);for(const[b,y,E,C]of t.composers){n.rules.styled.cache.has(b)||(n.rules.styled.cache.add(b),V(y,[`.${b}`],[],e,I=>{s.styled.apply(I)}));const U=pe(E,$,e.media),R=pe(C,$,e.media,!0);for(const I of U)if(I!==void 0)for(const[j,N,z]of I){const M=`${b}-${W(N)}-${j}`;v.add(M);const F=(z?n.rules.resonevar:n.rules.onevar).cache,Z=z?s.resonevar:s.onevar;F.has(M)||(F.add(M),V(N,[`.${M}`],[],e,q=>{Z.apply(q)}))}for(const I of R)if(I!==void 0)for(const[j,N]of I){const z=`${b}-${W(N)}-${j}`;v.add(z),n.rules.allvar.cache.has(z)||(n.rules.allvar.cache.add(z),V(N,[`.${z}`],[],e,M=>{s.allvar.apply(M)}))}}if(typeof d=="object"&&d){const b=`${r}-i${W(d)}-css`;v.add(b),n.rules.inline.cache.has(b)||(n.rules.inline.cache.add(b),V(d,[`.${b}`],[],e,y=>{s.inline.apply(y)}))}for(const b of String(f.className||"").trim().split(/\s+/))b&&v.add(b);const x=m.className=[...v].join(" ");return{type:t.type,className:x,selector:u,props:m,toString:()=>x,deferredInjector:a}};return ie(g,{className:r,selector:u,[L]:t,toString:()=>(n.rules.styled.cache.has(r)||g(),r)})},ut=e=>{let t="";const n=[],r={},o=[];for(const[i,,,,c,a]of e){t===""&&(t=i),n.push(i),o.push(...a);for(const s in c){const u=c[s];(r[s]===void 0||u!=="undefined"||a.includes(u))&&(r[s]=u)}}return[t,n,r,new Set(o)]},pe=(e,t,n,r)=>{const o=[];e:for(let[i,c,a]of e){if(a)continue;let s,u=0,g=!1;for(s in i){const f=i[s];let d=t[s];if(d!==f){if(typeof d!="object"||!d)continue e;{let m,$,v=0;for(const x in d){if(f===String(d[x])){if(x!=="@initial"){const b=x.slice(1);($=$||[]).push(b in n?n[b]:x.replace(/^@media ?/,"")),g=!0}u+=v,m=!0}++v}if($&&$.length&&(c={["@media "+$.join(", ")]:c}),!m)continue e}}}(o[u]=o[u]||[]).push([r?"cv":`${s}-${i[s]}`,c,g])}return o},ft={},pt=H(),mt=(e,t)=>pt(e,()=>(...n)=>{const r=()=>{for(let o of n){o=typeof o=="object"&&o||{};let i=W(o);if(!t.rules.global.cache.has(i)){if(t.rules.global.cache.add(i),"@import"in o){let c=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let a of[].concat(o["@import"]))a=a.includes('"')||a.includes("'")?a:`"${a}"`,t.sheet.insertRule(`@import ${a};`,c++);delete o["@import"]}V(o,[],[],e,c=>{t.rules.global.apply(c)})}}return""};return ie(r,{toString:r})}),gt=H(),ht=(e,t)=>gt(e,()=>n=>{const r=`${A(e.prefix)}k-${W(n)}`,o=()=>{if(!t.rules.global.cache.has(r)){t.rules.global.cache.add(r);const i=[];V(n,[],[],e,a=>i.push(a));const c=`@keyframes ${r}{${i.join("")}}`;t.rules.global.apply(c)}return r};return ie(o,{get name(){return o()},toString:o})}),$t=class{constructor(e,t,n,r){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=n==null?"":String(n),this.prefix=r==null?"":String(r)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+A(this.prefix)+A(this.scale)+this.token}toString(){return this.computedValue}},bt=H(),xt=(e,t)=>bt(e,()=>(n,r)=>{r=typeof n=="object"&&n||Object(r);const o=`.${n=(n=typeof n=="string"?n:"")||`${A(e.prefix)}t-${W(r)}`}`,i={},c=[];for(const s in r){i[s]={};for(const u in r[s]){const g=`--${A(e.prefix)}${s}-${u}`,f=xe(String(r[s][u]),e.prefix,s);i[s][u]=new $t(u,f,s,e.prefix),c.push(`${g}:${f}`)}}const a=()=>{if(c.length&&!t.rules.themed.cache.has(n)){t.rules.themed.cache.add(n);const s=`${r===e.theme?":root,":""}.${n}{${c.join(";")}}`;t.rules.themed.apply(s)}return n};return{...i,get className(){return a()},selector:o,toString:a}}),vt=H(),St=H(),yt=e=>{const t=(n=>{let r=!1;const o=vt(n,i=>{r=!0;const c="prefix"in(i=typeof i=="object"&&i||{})?String(i.prefix):"",a=typeof i.media=="object"&&i.media||{},s=typeof i.root=="object"?i.root||null:globalThis.document||null,u=typeof i.theme=="object"&&i.theme||{},g={prefix:c,media:a,theme:u,themeMap:typeof i.themeMap=="object"&&i.themeMap||{...be},utils:typeof i.utils=="object"&&i.utils||{}},f=at(s),d={css:fe(g,f),globalCss:mt(g,f),keyframes:ht(g,f),createTheme:xt(g,f),reset(){f.reset(),d.theme.toString()},theme:{},sheet:f,config:g,prefix:c,getCssText:f.toString,toString:f.toString};return String(d.theme=d.createTheme(u)),d});return r||o.reset(),o})(e);return t.styled=(({config:n,sheet:r})=>St(n,()=>{const o=fe(n,r);return(...i)=>{const c=o(...i),a=c[L].type,s=h.forwardRef((u,g)=>{const f=u&&u.as||a,{props:d,deferredInjector:m}=c(u);return delete d.as,d.ref=g,m?h.createElement(h.Fragment,null,h.createElement(f,d),h.createElement(m,null)):h.createElement(f,d)});return s.className=c.className,s.displayName=`Styled.${a.displayName||a.name||a}`,s.selector=c.selector,s.toString=()=>c.selector,s[L]=c[L],s}}))(t),t};function kt(e,t=[]){let n=[];function r(i,c){const a=l.createContext(c),s=n.length;n=[...n,c];function u(f){const{scope:d,children:m,...$}=f,v=(d==null?void 0:d[e][s])||a,x=l.useMemo(()=>$,Object.values($));return l.createElement(v.Provider,{value:x},m)}function g(f,d){const m=(d==null?void 0:d[e][s])||a,$=l.useContext(m);if($)return $;if(c!==void 0)return c;throw new Error(`\`${f}\` must be used within \`${i}\``)}return u.displayName=i+"Provider",[u,g]}const o=()=>{const i=n.map(c=>l.createContext(c));return function(a){const s=(a==null?void 0:a[e])||i;return l.useMemo(()=>({[`__scope${e}`]:{...a,[e]:s}}),[a,s])}};return o.scopeName=e,[r,Ct(o,...t)]}function Ct(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const c=r.reduce((a,{useScope:s,scopeName:u})=>{const f=s(i)[`__scope${u}`];return{...a,...f}},{});return l.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}function Et(e){const t=l.useRef(e);return l.useEffect(()=>{t.current=e}),l.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}const wt=globalThis!=null&&globalThis.document?l.useLayoutEffect:()=>{};function Rt(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Pt(...e){return t=>e.forEach(n=>Rt(n,t))}const ve=l.forwardRef((e,t)=>{const{children:n,...r}=e,o=l.Children.toArray(n),i=o.find(zt);if(i){const c=i.props.children,a=o.map(s=>s===i?l.Children.count(c)>1?l.Children.only(null):l.isValidElement(c)?c.props.children:null:s);return l.createElement(re,B({},r,{ref:t}),l.isValidElement(c)?l.cloneElement(c,void 0,a):null)}return l.createElement(re,B({},r,{ref:t}),n)});ve.displayName="Slot";const re=l.forwardRef((e,t)=>{const{children:n,...r}=e;return l.isValidElement(n)?l.cloneElement(n,{...Bt(r,n.props),ref:Pt(t,n.ref)}):l.Children.count(n)>1?l.Children.only(null):null});re.displayName="SlotClone";const It=({children:e})=>l.createElement(l.Fragment,null,e);function zt(e){return l.isValidElement(e)&&e.type===It}function Bt(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...a)=>{i(...a),o(...a)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}const jt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],ae=jt.reduce((e,t)=>{const n=l.forwardRef((r,o)=>{const{asChild:i,...c}=r,a=i?ve:t;return l.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),l.createElement(a,B({},c,{ref:o}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),Se="Avatar",[Mt,Xn]=kt(Se),[At,ye]=Mt(Se),Nt=l.forwardRef((e,t)=>{const{__scopeAvatar:n,...r}=e,[o,i]=l.useState("idle");return l.createElement(At,{scope:n,imageLoadingStatus:o,onImageLoadingStatusChange:i},l.createElement(ae.span,B({},r,{ref:t})))}),Lt="AvatarImage",Wt=l.forwardRef((e,t)=>{const{__scopeAvatar:n,src:r,onLoadingStatusChange:o=()=>{},...i}=e,c=ye(Lt,n),a=Ot(r),s=Et(u=>{o(u),c.onImageLoadingStatusChange(u)});return wt(()=>{a!=="idle"&&s(a)},[a,s]),a==="loaded"?l.createElement(ae.img,B({},i,{ref:t,src:r})):null}),Tt="AvatarFallback",_t=l.forwardRef((e,t)=>{const{__scopeAvatar:n,delayMs:r,...o}=e,i=ye(Tt,n),[c,a]=l.useState(r===void 0);return l.useEffect(()=>{if(r!==void 0){const s=window.setTimeout(()=>a(!0),r);return()=>window.clearTimeout(s)}},[r]),c&&i.imageLoadingStatus!=="loaded"?l.createElement(ae.span,B({},o,{ref:t})):null});function Ot(e){const[t,n]=l.useState("idle");return l.useEffect(()=>{if(!e){n("error");return}let r=!0;const o=new window.Image,i=c=>()=>{r&&n(c)};return n("loading"),o.onload=i("loaded"),o.onerror=i("error"),o.src=e,()=>{r=!1}},[e]),t}const Ft=Nt,Dt=Wt,Vt=_t;var Ht=l.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),ke=function(t,n,r){var o=r.get(t);return o?o(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function me(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var Ce=l.forwardRef(function(e,t){var n=e.alt,r=e.color,o=e.size,i=e.weight,c=e.mirrored,a=e.children,s=e.renderPath,u=me(e,["alt","color","size","weight","mirrored","children","renderPath"]),g=l.useContext(Ht),f=g.color,d=f===void 0?"currentColor":f,m=g.size,$=g.weight,v=$===void 0?"regular":$,x=g.mirrored,b=x===void 0?!1:x,y=me(g,["color","size","weight","mirrored"]);return h.createElement("svg",Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o??m,height:o??m,fill:r??d,viewBox:"0 0 256 256",transform:c||b?"scale(-1, 1)":void 0},y,u),!!n&&h.createElement("title",null,n),a,h.createElement("rect",{width:"256",height:"256",fill:"none"}),s(i??v,r??d))});Ce.displayName="IconBase";const Ee=Ce;var _=new Map;_.set("bold",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});_.set("duotone",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});_.set("fill",function(){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});_.set("light",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});_.set("thin",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});_.set("regular",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var Ut=function(t,n){return ke(t,n,_)},we=l.forwardRef(function(e,t){return h.createElement(Ee,Object.assign({ref:t},e,{renderPath:Ut}))});we.displayName="Check";const Gt=we;var O=new Map;O.set("bold",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});O.set("duotone",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});O.set("fill",function(){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});O.set("light",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});O.set("thin",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});O.set("regular",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var Yt=function(t,n){return ke(t,n,O)},Re=l.forwardRef(function(e,t){return h.createElement(Ee,Object.assign({ref:t},e,{renderPath:Yt}))});Re.displayName="User";const Zt=Re;function qt(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Pe(...e){return t=>e.forEach(n=>qt(n,t))}function Kt(...e){return l.useCallback(Pe(...e),e)}function Jt(e,t=[]){let n=[];function r(i,c){const a=l.createContext(c),s=n.length;n=[...n,c];function u(f){const{scope:d,children:m,...$}=f,v=(d==null?void 0:d[e][s])||a,x=l.useMemo(()=>$,Object.values($));return l.createElement(v.Provider,{value:x},m)}function g(f,d){const m=(d==null?void 0:d[e][s])||a,$=l.useContext(m);if($)return $;if(c!==void 0)return c;throw new Error(`\`${f}\` must be used within \`${i}\``)}return u.displayName=i+"Provider",[u,g]}const o=()=>{const i=n.map(c=>l.createContext(c));return function(a){const s=(a==null?void 0:a[e])||i;return l.useMemo(()=>({[`__scope${e}`]:{...a,[e]:s}}),[a,s])}};return o.scopeName=e,[r,Xt(o,...t)]}function Xt(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const c=r.reduce((a,{useScope:s,scopeName:u})=>{const f=s(i)[`__scope${u}`];return{...a,...f}},{});return l.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}function ge(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Ie(e){const t=l.useRef(e);return l.useEffect(()=>{t.current=e}),l.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Qt({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=en({defaultProp:t,onChange:n}),i=e!==void 0,c=i?e:r,a=Ie(n),s=l.useCallback(u=>{if(i){const f=typeof u=="function"?u(e):u;f!==e&&a(f)}else o(u)},[i,e,o,a]);return[c,s]}function en({defaultProp:e,onChange:t}){const n=l.useState(e),[r]=n,o=l.useRef(r),i=Ie(t);return l.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}function tn(e){const t=l.useRef({value:e,previous:e});return l.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}const nn=globalThis!=null&&globalThis.document?l.useLayoutEffect:()=>{};function rn(e){const[t,n]=l.useState(void 0);return nn(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let c,a;if("borderBoxSize"in i){const s=i.borderBoxSize,u=Array.isArray(s)?s[0]:s;c=u.inlineSize,a=u.blockSize}else c=e.offsetWidth,a=e.offsetHeight;n({width:c,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}function on(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function an(...e){return t=>e.forEach(n=>on(n,t))}function sn(...e){return l.useCallback(an(...e),e)}const he=globalThis!=null&&globalThis.document?l.useLayoutEffect:()=>{};function ln(e,t){return l.useReducer((n,r)=>{const o=t[n][r];return o??n},e)}const ze=e=>{const{present:t,children:n}=e,r=cn(t),o=typeof n=="function"?n({present:r.isPresent}):l.Children.only(n),i=sn(r.ref,o.ref);return typeof n=="function"||r.isPresent?l.cloneElement(o,{ref:i}):null};ze.displayName="Presence";function cn(e){const[t,n]=l.useState(),r=l.useRef({}),o=l.useRef(e),i=l.useRef("none"),c=e?"mounted":"unmounted",[a,s]=ln(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return l.useEffect(()=>{const u=K(r.current);i.current=a==="mounted"?u:"none"},[a]),he(()=>{const u=r.current,g=o.current;if(g!==e){const d=i.current,m=K(u);e?s("MOUNT"):m==="none"||(u==null?void 0:u.display)==="none"?s("UNMOUNT"):s(g&&d!==m?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,s]),he(()=>{if(t){const u=f=>{const m=K(r.current).includes(f.animationName);f.target===t&&m&&qe.flushSync(()=>s("ANIMATION_END"))},g=f=>{f.target===t&&(i.current=K(r.current))};return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else s("ANIMATION_END")},[t,s]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:l.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function K(e){return(e==null?void 0:e.animationName)||"none"}const Be=l.forwardRef((e,t)=>{const{children:n,...r}=e,o=l.Children.toArray(n),i=o.find(un);if(i){const c=i.props.children,a=o.map(s=>s===i?l.Children.count(c)>1?l.Children.only(null):l.isValidElement(c)?c.props.children:null:s);return l.createElement(oe,B({},r,{ref:t}),l.isValidElement(c)?l.cloneElement(c,void 0,a):null)}return l.createElement(oe,B({},r,{ref:t}),n)});Be.displayName="Slot";const oe=l.forwardRef((e,t)=>{const{children:n,...r}=e;return l.isValidElement(n)?l.cloneElement(n,{...fn(r,n.props),ref:t?Pe(t,n.ref):n.ref}):l.Children.count(n)>1?l.Children.only(null):null});oe.displayName="SlotClone";const dn=({children:e})=>l.createElement(l.Fragment,null,e);function un(e){return l.isValidElement(e)&&e.type===dn}function fn(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...a)=>{i(...a),o(...a)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}const pn=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],je=pn.reduce((e,t)=>{const n=l.forwardRef((r,o)=>{const{asChild:i,...c}=r,a=i?Be:t;return l.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),l.createElement(a,B({},c,{ref:o}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),Me="Checkbox",[mn,Qn]=Jt(Me),[gn,hn]=mn(Me),$n=l.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:r,checked:o,defaultChecked:i,required:c,disabled:a,value:s="on",onCheckedChange:u,...g}=e,[f,d]=l.useState(null),m=Kt(t,E=>d(E)),$=l.useRef(!1),v=f?!!f.closest("form"):!0,[x=!1,b]=Qt({prop:o,defaultProp:i,onChange:u}),y=l.useRef(x);return l.useEffect(()=>{const E=f==null?void 0:f.form;if(E){const C=()=>b(y.current);return E.addEventListener("reset",C),()=>E.removeEventListener("reset",C)}},[f,b]),l.createElement(gn,{scope:n,state:x,disabled:a},l.createElement(je.button,B({type:"button",role:"checkbox","aria-checked":T(x)?"mixed":x,"aria-required":c,"data-state":Ae(x),"data-disabled":a?"":void 0,disabled:a,value:s},g,{ref:m,onKeyDown:ge(e.onKeyDown,E=>{E.key==="Enter"&&E.preventDefault()}),onClick:ge(e.onClick,E=>{b(C=>T(C)?!0:!C),v&&($.current=E.isPropagationStopped(),$.current||E.stopPropagation())})})),v&&l.createElement(vn,{control:f,bubbles:!$.current,name:r,value:s,checked:x,required:c,disabled:a,style:{transform:"translateX(-100%)"}}))}),bn="CheckboxIndicator",xn=l.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...o}=e,i=hn(bn,n);return l.createElement(ze,{present:r||T(i.state)||i.state===!0},l.createElement(je.span,B({"data-state":Ae(i.state),"data-disabled":i.disabled?"":void 0},o,{ref:t,style:{pointerEvents:"none",...e.style}})))}),vn=e=>{const{control:t,checked:n,bubbles:r=!0,...o}=e,i=l.useRef(null),c=tn(n),a=rn(t);return l.useEffect(()=>{const s=i.current,u=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(u,"checked").set;if(c!==n&&f){const d=new Event("click",{bubbles:r});s.indeterminate=T(n),f.call(s,T(n)?!1:n),s.dispatchEvent(d)}},[c,n,r]),l.createElement("input",B({type:"checkbox","aria-hidden":!0,defaultChecked:T(n)?!1:n},o,{tabIndex:-1,ref:i,style:{...e.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function T(e){return e==="indeterminate"}function Ae(e){return T(e)?"indeterminate":e?"checked":"unchecked"}const Sn=$n,yn=xn;var kn=Object.defineProperty,Cn=Object.defineProperties,En=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,Ne=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,$e=(e,t,n)=>t in e?kn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,X=(e,t)=>{for(var n in t||(t={}))Ne.call(t,n)&&$e(e,n,t[n]);if(J)for(var n of J(t))Le.call(t,n)&&$e(e,n,t[n]);return e},We=(e,t)=>Cn(e,En(t)),wn=(e,t)=>{var n={};for(var r in e)Ne.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&J)for(var r of J(e))t.indexOf(r)<0&&Le.call(e,r)&&(n[r]=e[r]);return n},{styled:k,css:er,globalCss:tr,keyframes:Te,getCssText:nr,theme:rr,createTheme:or,config:ir}=yt({themeMap:We(X({},be),{height:"space",width:"space"}),theme:{colors:De,fontSizes:Ve,fontWeights:He,fonts:Ue,lineHeights:Ge,radii:Ye,space:Ze}}),Rn=k("div",{padding:"$6",borderRadius:"$md",backgroundColor:"$gray800",border:"1px solid $gray600"});Rn.displayName="Box";var _e=k("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray400",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});_e.displayName="Text";var Pn=k("h2",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray400",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},"2xl":{fontSize:"$5xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});Pn.displayName="Heading";var In=k(Ft,{borderRadius:"$full",display:"inline-block",width:"$16",height:"$16",overflow:"hidden"}),zn=k(Dt,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),Bn=k(Vt,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray600",color:"$gray400",svg:{width:"$6",height:"$6"}});function jn(e){return P.jsxs(In,{children:[P.jsx(zn,X({},e)),P.jsx(Bn,{delayMs:600,children:P.jsx(Zt,{})})]})}jn.displayName="Avatar";var Mn=k("button",{all:"unset",borderRadius:"$sm",fontSize:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:120,boxSizing:"border-box",padding:"0 $4",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",cursor:"pointer",svg:{width:"$4",height:"$4"},"&:disabled":{cursor:"not-allowed"},"&:focus":{boxShadow:"0 0 0 2px $colors$gray100"},variants:{variant:{primary:{color:"$white",background:"$ignite500","&:not(:disabled):hover":{background:"$ignite300"},"&:disabled":{backgroundColor:"$gray200"}},secondary:{color:"$ignite300",border:"2px solid $ignite500","&:not(:disabled):hover":{background:"$ignite500",color:"$white"},"&:disabled":{backgroundColor:"$gray200",borderColor:"$gray200"}},tertiary:{color:"$gray100","&:not(:disabled):hover":{background:"$white"},"&:disabled":{backgroundColor:"$gray600"}}},size:{sm:{height:38},md:{height:46}}},defaultVariants:{variant:"primary",size:"md"}});Mn.displayName="Button";var An=k("div",{backgroundColor:"$gray900",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"center",variants:{size:{sm:{padding:"$2 $3"},md:{padding:"$3 $4"}}},"&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"},defaultVariants:{size:"md"}}),Nn=k("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray400",fontWeight:"regular"}),Ln=k("input",{fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"regular",background:"transparent",border:0,width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&::placeholder":{color:"$gray400"}}),Oe=l.forwardRef((e,t)=>{var n=e,{prefix:r}=n,o=wn(n,["prefix"]);return P.jsxs(An,{children:[!!r&&P.jsx(Nn,{children:r}),P.jsx(Ln,X({ref:t},o))]})});Oe.displayName="TextInput";var Wn=k("textarea",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:0,borderColor:"$ignite300"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});Wn.displayName="TextArea";var Tn=k(Sn,{width:"$6",height:"$6",backgroundColor:"$gray900",borderRadius:"$xs",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid $gray900",'&[data-state="checked"]':{backgroundColor:"$ignite300"},'&:focus, &[data-state="checked"]':{border:"2px solid $ignite300"}}),_n=Te({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),On=Te({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),Fn=k(yn,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${_n} 200ms ease-out`},'&[data-state="unchecked"]':{animation:`${On} 200ms ease-out`}});function Dn(e){return P.jsx(Tn,We(X({},e),{children:P.jsx(Fn,{asChild:!0,children:P.jsx(Gt,{weight:"bold"})})}))}Dn.displayName="Checkbox";var Vn=k("div",{}),Hn=k(_e,{color:"$gray200",defaultVariants:{size:"xs"}}),Un=k("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gap:"$2",marginTop:"$1"}),Gn=k("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{backgroundColor:"$gray100"}}}});function Yn({size:e,currentStep:t=1}){return P.jsxs(Vn,{children:[P.jsxs(Hn,{children:["Passo ",t," de ",e]}),P.jsx(Un,{css:{"--steps-size":e},children:Array.from({length:e},(n,r)=>r+1).map(n=>P.jsx(Gn,{active:t>=n},n))})]})}Yn.displayName="MultiStep";Oe.__docgenInfo={description:"",methods:[],displayName:"TextInput"};export{jn as A,Rn as B,Dn as C,Pn as H,Ee as I,Yn as M,_e as T,Wn as a,Oe as b,Mn as c,ke as r};
//# sourceMappingURL=index-fdb12bb1.js.map