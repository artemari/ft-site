gvjs_WQ.prototype.xo=gvjs_W(149,function(a,b){return b-a});gvjs_XQ.prototype.xo=gvjs_W(148,function(a,b){return this.JK.xo(a,b)});gvjs_0Q.prototype.xo=gvjs_W(147,function(a,b){return this.ue.yo(a,b)});gvjs_5Q.prototype.xo=gvjs_W(146,function(a,b){return this.zH.yo(a,b)});gvjs_WQ.prototype.yo=gvjs_W(145,function(a,b){return this.xo(this.scale(a),this.scale(b))});gvjs_XQ.prototype.yo=gvjs_W(144,function(a,b){return this.Hy.xo(a,b)});
gvjs_0Q.prototype.yo=gvjs_W(143,function(a,b){return this.ue.xo(a,b)});gvjs_5Q.prototype.yo=gvjs_W(142,function(a,b){return this.RT.yo(a,b)});function gvjs_MW(a){this.m=a.options;this.BX=a.hn;this.Ch=a.eK;this.fO=a.axes.domain;this.c4=a.axes.target;this.z$=null!=a.y$?a.y$:1;this.Toa=null!=a.Soa?a.Soa:gvjs__;this.dw=this.layout()}gvjs_MW.prototype.Vy=function(){var a=[];gvjs_v(this.dw,function(b){gvjs_Re(a,b.F.list)});gvjs_Ve(a,function(b,c){return b.stack===c.stack?-gvjs_We(b.so,c.so):gvjs_We(b.stack,c.stack)});return a};
gvjs_MW.prototype.iI=function(){var a=[];gvjs_v(this.dw,function(b){gvjs_s(b.groups,function(c,d){null!=c&&gvjs_s(c.Zn,function(e,f){gvjs_Re(a,gvjs_t(e.Nb.sk,function(g,h){var k=g.shape.data();return g.shape.clone().data({value:k,id:gvjs_MK(gvjs_MK(gvjs_MK(gvjs_MK(gvjs_DQ(g.definition.sourceColumn,g.definition.eF),gvjs_QP,g.definition.hj),gvjs_Ap,d),gvjs_1w,f),gvjs_RP,h+1)})}));gvjs_Re(a,gvjs_t(e.Nb.Rz,function(g,h){var k=g.shape.data();return g.shape.clone().data({value:k,id:gvjs_MK(gvjs_MK(gvjs_MK(gvjs_MK(gvjs_DQ(g.definition.sourceColumn,
g.definition.eF),gvjs_QP,g.definition.hj),gvjs_Ap,d),gvjs_1w,f),gvjs_RP,-h-1)})}))},this)},this)},this);return a};function gvjs_Bka(a,b){if(1>=a)return[b];var c=0*(b.end-b.start),d=c/(a-1);c=(b.end-b.start-c)/a;var e=[];b=b.start;for(var f=0;f<a;f++)e.push(new gvjs_B(b,b+c)),b+=c+d;return e}
function gvjs_Cka(a,b,c,d){var e={range:b,definition:c,Zn:[]},f=gvjs_Bka(c.Zn.length,b);gvjs_s(c.Zn,function(g,h){var k={definition:g,range:f[h],height:{sk:0,Rz:0},Nb:{sk:[],Rz:[]}};e.Zn.push(k);gvjs_s(g.Nb,function(l,m){l.sourceColumn in d.index?d.list[d.index[l.sourceColumn]].Nb.push(l):(d.index[l.sourceColumn]=d.list.length,d.list.push({color:null,column:l.sourceColumn,stack:h,so:m,Nb:[l]}),d.O3=Math.max(d.O3,h+1),d.GV=Math.max(d.GV,m+1));m=this.c4[l.oL];var n=m.scale,p=n.scale(n.BC());n=k.range.start;
var q=k.height.sk+p,r=k.range.end-k.range.start,t=l.value;if(isNaN(t)||null==t)m=null;else{t-=p;var u=t+k.height.sk;0<=t?k.height.sk+=t:(q=-k.height.Rz+p,u=-k.height.Rz+t+p,k.height.Rz-=t);l.Zt=r/2+k.range.start;l.lDa=u;gvjs_MK(gvjs_DQ(l.sourceColumn,l.eF),gvjs_QP,l.hj);p=new gvjs_A(q,n+r,q+t,n);p.top>p.bottom&&(u=p.top,p.top=p.bottom,p.bottom=u);null===m.range?m.range=new gvjs_B(p.top,p.bottom):(gvjs_bQ(m.range,p.top),gvjs_bQ(m.range,p.bottom));m=(new gvjs_aQ(n,q,r,t)).setData(l)}m&&(0<=gvjs_F(gvjs_3q(m),
gvjs_8c)?k.Nb.sk:k.Nb.Rz).push({definition:l,shape:m})},this)},a);return e}
function gvjs_Dka(a,b){var c={};if(gvjs_Ie(a,function(q){return 0===q.groups.length}))return{};gvjs_s(a,function(q,r){gvjs_s(q.groups,function(t){c[t.hj]=r})});var d={},e={},f;for(f in b){var g=b[f],h=g.scale;g=gvjs_t(g.columns,function(q){return a[c[q]]});var k={nCa:h.Ii(),type:g[0].type,scale:h,Zf:{},groups:[]};e[f]=k;k.type in d||(d[k.type]=f);if(h.Ii())for(var l=0;;l++){var m={Zn:[]},n=gvjs_t(g,function(q){return q.groups[l]});if(!gvjs_He(n,function(q){return null!=q}))break;gvjs_s(n,function(q){q.Sg&&
null==m.Sg&&(m.Sg=q.Sg);gvjs_Re(m.Zn,q.Zn)});k.groups.push(m)}else{var p=[];gvjs_s(g,function(q){gvjs_s(q.groups,function(r){var t=gvjs_Bz(p,r,function(u,v){return h.yo(u.Sg,v.Sg)});0>t?gvjs_hq(p,{Sg:r.Sg,Zf:gvjs_w(r.Zf),Zn:gvjs_Qe(r.Zn)},-(t+1)):gvjs_Re(p[t].Zn,r.Zn)})});k.groups=p}}return e}
function gvjs_Eka(a,b,c,d){var e=a.fO[c],f=e.scale;f.Ii()||gvjs_Ve(b.groups,function(r,t){r=r.ha?r.Sg:f.scale(r.Sg);t=t.ha?t.Sg:f.scale(t.Sg);return gvjs_We(r,t)});var g=Infinity,h=null;gvjs_s(b.groups,function(r){f.Ii()&&(r.Sg=f.add(r.Sg),r.ha=!0);r=r.ha?r.Sg:f.scale(r.Sg);if(null!=r){if(null!==h){var t=r-h;0<t&&t<g&&(g=t)}h=r}});isFinite(g)||(g=1);var k={list:[],index:{},O3:0,GV:0};c=gvjs_t(b.groups,function(r){var t=r.ha?r.Sg:f.scale(r.Sg);if(null!=t){var u=g,v=t;t+=u;switch(this.Toa){case gvjs__:v-=
u/2,t-=u/2}u=(t-v)/2;v+=(1-this.z$)*u;t-=(1-this.z$)*u;v=new gvjs_B(v,t);null===e.range?e.range=v.clone():(u=e.range,u.start=Math.min(u.start,v.start),u.end=Math.max(u.end,v.end));return gvjs_Cka(this,v,r,k)}},a);for(var l=0,m=k.O3;l<m;l++)for(var n=0,p=k.GV;n<p;n++)a.Ch.Eu(String(l),String(n));var q=a.Ch.td();gvjs_s(k.list,function(r,t){var u=gvjs_Oh(gvjs_D(this.m,gvjs_Qw+(t+d)+".color",q.Jq(r.stack,r.so))).hex;r.color=u;gvjs_s(r.Nb,function(v){v.color=u})},a);return{definition:b,F:k,groups:c}}
gvjs_MW.prototype.layout=function(){var a=gvjs_Dka(this.BX,this.fO),b=0;return gvjs_Kz(a,function(c,d){c=gvjs_Eka(this,c,d,b);b+=c.F.list.length;return c},this)};function gvjs_NW(a,b,c,d){gvjs_LR.call(this,a,b,c,d)}gvjs_r(gvjs_NW,gvjs_LR);gvjs_NW.prototype.Ei=function(){return gvjs_D(this.options,gvjs_ot,gvjs_V,gvjs_KR)===gvjs_0?gvjs_V:gvjs_0};
gvjs_NW.prototype.Bma=function(a,b,c,d){function e(n,p){return f?p:n}var f=gvjs_E(this.options,"stacked",!1),g=this.qb,h=a[String(c.hj)],k=g.getValue(d,c.hj);this.Ei();var l=e([0],c.F);a=e(c.F,[0]);var m=[];gvjs_s(a,function(n){var p=[],q={};gvjs_s(l,function(r){r=(f?r:n).Ks;var t=g.getValue(d,r),u=b[r],v=u.scale,w=u.name;w in q||(p.push({Nb:[]}),q[w]=p.length-1);w=p[q[w]].Nb;v.Ii()&&null!=t&&(0===gvjs__Q(v).length&&v.add("",!0),v.add(t,!0));w.push({hj:c.hj,sourceColumn:r,eF:d,gO:h.name,oL:u.name,
Sg:k,tDa:t,color:null,value:u.scale.scale(t),ha:!0})});gvjs_s(p,function(r){m.push(r)})});return{hj:c.hj,Sg:k,Zf:c.Zf,Zn:m}};gvjs_NW.prototype.Ama=function(a,b,c){return{type:this.qb.Y(c.hj),Zf:c.Zf,groups:gvjs_t(gvjs_Dz(this.qb.ca()),gvjs_q(this.Bma,this,a,b,c))}};
gvjs_NW.prototype.DY=function(a,b,c){gvjs_v(a,function(m){m.expand=!1});gvjs_v(b,function(m){m.expand=!0});var d=this.Ei()===gvjs_V,e=d&&gvjs_He(gvjs_9e(b),function(m){return b[m].Ck===gvjs_px}),f=d&&gvjs_He(gvjs_9e(b),function(m){return b[m].Ck===gvjs_wt}),g={},h;for(h in b)gvjs_s(b[h].columns,function(m){g[m]={name:h,scale:b[h].scale}});var k={};for(h in a)gvjs_s(a[h].columns,function(m){k[m]={name:h,scale:a[h].scale}});var l=gvjs_t(this.QN.hn,gvjs_q(this.Ama,this,k,g));return new gvjs_MW({options:this.options,
hn:l,axes:{domain:a,target:b},eK:c,y$:gvjs_Iy(this.options,"groupSize"),LCa:!d||e,MCa:!d||f})};function gvjs_OW(a,b){gvjs_OR.call(this,a,b)}gvjs_r(gvjs_OW,gvjs_OR);gvjs_=gvjs_OW.prototype;gvjs_.Qp=function(a){a.style(gvjs_Xp,0).style(gvjs_Yp,1).style(gvjs_Vp,.4).style(gvjs_Wp,2);return a};gvjs_.qr=function(a){a.style(gvjs_Xp,null).style(gvjs_Yp,null).style(gvjs_Vp,null).style(gvjs_Wp,null);return a};gvjs_.lT=function(a){var b=a.data().value.color;this.Qp(a).style(gvjs_np,b)};gvjs_.cT=function(a){var b=a.data().value.color;this.Qp(a).style(gvjs_np,gvjs_PR(b,this.KP,this.IB))};
gvjs_.ZS=function(a){var b=a.data().value.color;this.qr(a).style(gvjs_np,gvjs_QR(b,this.Xea,this.IB))};gvjs_.iT=function(a){var b=a.data().value.color;this.qr(a).style(gvjs_np,b)};function gvjs_PW(a){gvjs_WK.call(this,a)}gvjs_r(gvjs_PW,gvjs_WK);gvjs_=gvjs_PW.prototype;gvjs_.Eq=function(){return null};gvjs_.Mf=function(){return gvjs_NR};gvjs_.iq=function(a,b,c,d){a=new gvjs_HQ(this,a,b,c,d);a.gu([gvjs_jt,gvjs_Uu,gvjs_Cw,gvjs_4P,gvjs_YP,gvjs_Hs,gvjs_Gs,gvjs_Sd]);return a};gvjs_.Bo=function(a,b){return new gvjs_OW(a,b)};gvjs_.$m=function(a,b,c,d){return new gvjs_NW(a,b,c,d)};
gvjs_.Gs=function(a){return[new gvjs_PQ([new gvjs_KK(gvjs_es)]),new gvjs_RQ([new gvjs_KK(gvjs_OP),new gvjs_KK(gvjs_PP)],gvjs_D(a,gvjs_Kw)===gvjs_Zp),new gvjs_QQ([new gvjs_KK(gvjs_es),new gvjs_KK(gvjs_OP),new gvjs_KK(gvjs_PP),new gvjs_KK(gvjs_UP)]),new gvjs_TQ([new gvjs_KK(gvjs_OP)])]};gvjs_.mH=function(a,b){null==this.Be?this.Be=new gvjs_vQ(this.container,a,b,[gvjs_ws,gvjs_SP]):this.Be.update(a,b)};gvjs_o(gvjs_2b,gvjs_PW,void 0);gvjs_PW.convertOptions=function(a){var b=new gvjs_ji([a]);a=gvjs_7R(a);b=b.mb(gvjs_7v);null!=b&&(a.bars=b===gvjs_V?gvjs_0:gvjs_V);return a};gvjs_PW.prototype.draw=gvjs_PW.prototype.draw;gvjs_PW.prototype.clearChart=gvjs_PW.prototype.Lb;gvjs_PW.prototype.getSelection=gvjs_PW.prototype.getSelection;gvjs_PW.prototype.setSelection=gvjs_PW.prototype.setSelection;
