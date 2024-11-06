"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function t(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var e={exports:{}},n=t(e.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",o="hour",a="day",u="week",f="month",d="quarter",h="year",c="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},p=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+p(r,2,"0")+":"+p(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,o=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:h,w:u,d:a,D:c,h:o,m:s,s:i,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",M={};M[g]=y;var w=function(t){return t instanceof _},D=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();M[s]&&(i=s),n&&(M[s]=n,i=s);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var a=e.name;M[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},S=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=D,O.i=w,O.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function y(t){this.$L=D(t.locale,null,!0),this.parse(t)}var p=y.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return O},p.isValid=function(){return!(this.$d.toString()===l)},p.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return S(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<S(t)},p.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,r=!!O.u(e)||e,d=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,y=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case h:return r?l(1,0):l(31,11);case f:return r?l(1,y):l(0,y+1);case u:var g=this.$locale().weekStart||0,M=(m<g?m+7:m)-g;return l(r?p-M:p+(6-M),y);case a:case c:return $(v+"Hours",0);case o:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,u=O.p(t),d="set"+(this.$u?"UTC":""),l=(n={},n[a]=d+"Date",n[c]=d+"Date",n[f]=d+"Month",n[h]=d+"FullYear",n[o]=d+"Hours",n[s]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[u],$=u===a?this.$D+(e-this.$W):e;if(u===f||u===h){var m=this.clone().set(c,1);m.$d[l]($),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[O.p(t)]()},p.add=function(r,d){var c,l=this;r=Number(r);var $=O.p(d),m=function(t){var e=S(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return m(1);if($===u)return m(7);var y=(c={},c[s]=e,c[o]=n,c[i]=t,c)[$]||1,p=this.$d.getTime()+r*y;return O.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,o=this.$m,a=this.$M,u=n.weekdays,f=n.months,d=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},h=function(t){return O.s(s%12||12,t,"0")},c=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:O.s(this.$y,4,"0"),M:a+1,MM:O.s(a+1,2,"0"),MMM:d(n.monthsShort,a,f,3),MMMM:d(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,u,2),ddd:d(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:O.s(s,2,"0"),h:h(1),hh:h(2),a:c(s,o,!0),A:c(s,o,!1),m:String(o),mm:O.s(o,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(t,e){return e||$[t]||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,c,l){var $,m=O.p(c),y=S(r),p=(y.utcOffset()-this.utcOffset())*e,v=this-y,g=O.m(this,y);return g=($={},$[h]=g/12,$[f]=g,$[d]=g/3,$[u]=(v-p)/6048e5,$[a]=(v-p)/864e5,$[o]=v/n,$[s]=v/e,$[i]=v/t,$)[m]||v,l?g:O.a(g)},p.daysInMonth=function(){return this.endOf(f).$D},p.$locale=function(){return M[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},p.clone=function(){return O.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},y}(),b=_.prototype;return S.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",o],["$W",a],["$M",f],["$y",h],["$D",c]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,_,S),t.$i=!0),S},S.locale=D,S.isDayjs=w,S.unix=function(t){return S(1e3*t)},S.en=M[g],S.Ls=M,S.p={},S}()),r={exports:{}},i=t(r.exports=function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(t,e,n,i){return r.fromToBase(t,e,n,i)}n.en.relativeTime=i,r.fromToBase=function(e,r,s,o,a){for(var u,f,d,h=s.$locale().relativeTime||i,c=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],l=c.length,$=0;$<l;$+=1){var m=c[$];m.d&&(u=o?n(e).diff(s,m.d,!0):s.diff(e,m.d,!0));var y=(t.rounding||Math.round)(Math.abs(u));if(d=u>0,y<=m.r||!m.r){y<=1&&$>0&&(m=c[$-1]);var p=h[m.l];a&&(y=a(""+y)),f="string"==typeof p?p.replace("%d",y):p(y,r,m.l,d);break}}if(r)return f;var v=d?h.future:h.past;return"function"==typeof v?v(f):v.replace("%s",f)},r.to=function(t,e){return s(t,e,this,!0)},r.from=function(t,e){return s(t,e,this)};var o=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(o(this),t)},r.fromNow=function(t){return this.from(o(this),t)}});n.extend(i);const s=document.getElementById("button-for-api"),o=document.getElementById("title"),a=document.getElementById("image"),u=document.getElementById("date"),f=document.getElementById("released");s.addEventListener("click",(async()=>{const t=new URLSearchParams;t.append("email","n.petukhov@innopolis.university");const e=await fetch("https://fwd.innopolis.university/api/hw2?"+t.toString()).then((t=>t.json())),r=new URLSearchParams;r.append("id",e);const i=await fetch("https://fwd.innopolis.university/api/comic?"+r.toString()),s=await i.json(),{month:d,year:h,day:c,safe_title:l,img:$,alt:m}=s;o.textContent=l,u.textContent="Date: "+c+":"+d+":"+h,f.textContent="Released: "+n(new Date(h,d,c)).fromNow(),a.src=$,a.alt=m}));