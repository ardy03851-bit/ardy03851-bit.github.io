import{n as e}from"./UhOa7N2_.js";import{St as t,Z as n,et as r,l as i,p as a,xt as o}from"./Dowrl10M.js";var s=`#D995A6`,c=.64,l={wood:`#A0652C`,woodStrong:`#7A4A1F`,woodLight:`#CF9F67`,ink:`#1F1A15`,paper:`#FFFCF7`,stage:`#F6F0E4`,grid:`#E5D9C3`,plaster:`#F8F6F2`,plasterHinge:`#ECE8E2`,plasterMark:`#8F8A82`,clay:`#C9BBAE`,clayHinge:`#B5A698`,clayMark:`#6F6257`,woodMark:`#5E4330`,sketchPaper:`#FFFFFF`,sketchInk:`#1A1714`,sketchPencil:`#8C8781`,sketchGrid:`#EEECE8`,sketchGridStrong:`#E2DFDA`},u={base:`#E9C496`,dark:`170, 116, 66`,light:`246, 232, 212`,pore:`138, 98, 64`},d={base:`#AD9065`,dark:`137, 105, 66`,light:`186, 155, 111`,pore:`109, 77, 38`};u.base,d.base;function f(n){if(typeof document>`u`)return null;let r=document.createElement(`canvas`);r.width=512,r.height=1024;let a=r.getContext(`2d`);if(!a)return null;let{width:s,height:c}=r,l=e(1337);a.fillStyle=n.base,a.fillRect(0,0,s,c),a.lineCap=`round`;let u=(e,t,n,r)=>{for(let i of[-s,0,s]){a.beginPath();for(let o=0;o<=c;o+=8){let s=e+i+Math.sin(o*n+r)*t;o===0?a.moveTo(s,o):a.lineTo(s,o)}a.stroke()}};for(let e=0;e<16;e++)a.strokeStyle=`rgba(${l()<.6?n.dark:n.light}, ${.03+l()*.04})`,a.lineWidth=10+l()*34,u(l()*s,3+l()*10,.002+l()*.004,l()*7);for(let e=0;e<240;e++)a.strokeStyle=`rgba(${l()<.6?n.dark:n.light}, ${.04+l()*.05})`,a.lineWidth=.4+l()*1.1,u(l()*s,1+l()*5,.003+l()*.008,l()*7);a.lineWidth=.7;for(let e=0;e<1400;e++){let e=l()*s,t=l()*c;a.strokeStyle=`rgba(${n.pore}, ${.06+l()*.1})`,a.beginPath(),a.moveTo(e,t),a.lineTo(e,t+2+l()*5),a.stroke()}let d=new i(r);return d.wrapS=o,d.wrapT=o,d.colorSpace=t,d.anisotropy=4,d}function p(e,t){let r=new n({color:e,side:1});return r.onBeforeCompile=e=>{e.uniforms.outlineThickness={value:t},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float outlineThickness;`).replace(`#include <begin_vertex>`,`vec3 transformed = position + normal * outlineThickness;`)},r.customProgramCacheKey=()=>`hull-${t}`,r}function m(e){let t=new r({color:`#FFFFFF`,roughness:.8,metalness:0});return t.onBeforeCompile=t=>{t.uniforms.woodMap={value:e},t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vWoodPos;
varying vec3 vWoodNormal;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
#ifdef USE_SKINNING
  vWoodPos = (bindMatrix * vec4(position, 1.0)).xyz;
  vWoodNormal = transpose(mat3(bindMatrixInverse)) * normal;
#else
  vWoodPos = position;
  vWoodNormal = normal;
#endif`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
uniform sampler2D woodMap;
varying vec3 vWoodPos;
varying vec3 vWoodNormal;`).replace(`#include <map_fragment>`,`vec3 woodW = pow(abs(normalize(vWoodNormal)), vec3(4.0));
woodW /= woodW.x + woodW.y + woodW.z;
vec3 woodP = vWoodPos * vec3(3.0, 1.5, 3.0);
diffuseColor *= texture2D(woodMap, woodP.zy) * woodW.x
  + texture2D(woodMap, woodP.xz) * woodW.y
  + texture2D(woodMap, woodP.xy) * woodW.z;`)},t.customProgramCacheKey=()=>`triplanar-wood`,t}function h(e){let t=e.clone(),n=e.onBeforeCompile,r=e.customProgramCacheKey();return t.onBeforeCompile=(t,r)=>{n.call(e,t,r),t.uniforms.selectionTint={value:new a(s)},t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
uniform vec3 selectionTint;`).replace(`#include <color_fragment>`,`#include <color_fragment>\ndiffuseColor.rgb = mix(diffuseColor.rgb, selectionTint, ${c});`)},t.customProgramCacheKey=()=>`${r}-selection-solid`,t}function g(e,t,n,r){return{body:e,hinge:t,selectedBody:h(e),selectedHinge:h(t),mark:n,hull:r}}function _(e=1){let t=f(u),i=f(d),a=new r({color:`#FFFFFF`,map:t,roughness:.8,metalness:0}),o=new r({color:`#FFFFFF`,map:i,roughness:.8,metalness:0}),c=new r({color:`#E8DCCB`,map:t,roughness:.85,metalness:0}),_=new r({color:l.plaster,roughness:.9,metalness:0}),v=new r({color:l.plasterHinge,roughness:.9,metalness:0}),y=new r({color:l.plasterMark,roughness:.9,metalness:0}),b=new r({color:l.clay,roughness:.95,metalness:0}),x=new r({color:l.clayHinge,roughness:.95,metalness:0}),S=new r({color:l.woodMark,roughness:.7,metalness:0}),C=new r({color:l.clayMark,roughness:.95,metalness:0}),w=t?m(t):new r({color:u.base,roughness:.8}),T=new n({color:l.paper}),E=new n({color:l.ink}),D=p(l.ink,.006*e),O=new n({color:l.sketchPaper,side:2,toneMapped:!1}),k=new n({color:l.sketchPencil,toneMapped:!1}),A={modes:{wooden:g(a,c,S,null),plaster:g(_,v,y,null),clay:g(b,x,C,null),outline:g(T,T,E,D),sketch:g(O,O,k,null),silhouette:g(E,E,E,null)},humanWood:w,warmBody:o,warmSelectedBody:h(o),selectedHull:p(s,.011*e),hoverHull:p(l.woodLight,.007*e),dispose(){let e=new Set;for(let t of Object.values(A.modes))for(let n of[t.body,t.hinge,t.selectedBody,t.selectedHinge,t.mark,t.hull])n&&e.add(n);e.add(A.humanWood),e.add(A.warmBody),e.add(A.warmSelectedBody),e.add(A.selectedHull),e.add(A.hoverHull);for(let t of e)t.dispose();t?.dispose(),i?.dispose()}};return A}function v(e,t){let n=e.skeleton.bones.map(e=>t(e.name)),r={value:new Float32Array(n.length)},i={value:new a(s)},o=new Map;return{setMaterial(t){let a=o.get(t);if(!a){a=t.clone();let e=t.onBeforeCompile,s=t.customProgramCacheKey();a.onBeforeCompile=(a,o)=>{e.call(t,a,o),a.uniforms.selectionBoneWeights=r,a.uniforms.selectionTint=i,a.vertexShader=a.vertexShader.replace(`#include <common>`,`#include <common>
uniform float selectionBoneWeights[${n.length}];
varying float vSelectionWeight;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vSelectionWeight = 0.0;
#ifdef USE_SKINNING
vSelectionWeight = dot(skinWeight, vec4(
  selectionBoneWeights[int(skinIndex.x)],
  selectionBoneWeights[int(skinIndex.y)],
  selectionBoneWeights[int(skinIndex.z)],
  selectionBoneWeights[int(skinIndex.w)]
));
#endif`),a.fragmentShader=a.fragmentShader.replace(`#include <common>`,`#include <common>
uniform vec3 selectionTint;
varying float vSelectionWeight;`).replace(`#include <color_fragment>`,`#include <color_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, selectionTint,
  ${c} * smoothstep(0.15, 0.85, vSelectionWeight));`)},a.customProgramCacheKey=()=>`${s}-skin-selection-${n.length}`,o.set(t,a)}e.material=a},setHighlight(e){for(let t=0;t<n.length;t++)r.value[t]=+(e!==null&&n[t]===e)},dispose(){for(let e of o.values())e.dispose();o.clear()}}}export{l as n,_ as r,v as t};
//# sourceMappingURL=68mDZWm6.js.map