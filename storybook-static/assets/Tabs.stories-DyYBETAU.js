import{a as e,n as t}from"./chunk-BneVvdWh.js";import{O as n}from"./iframe-BmBPkr8y.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";var i,a,o,s,c,l,u,d,f=t((()=>{i=`_tabs_12hdl_1`,a=`_tab_12hdl_1`,o=`_underline_12hdl_15`,s=`_active_12hdl_30`,c=`_indicator_12hdl_35`,l=`_pill_12hdl_47`,u=`_boxed_12hdl_69`,d={tabs:i,tab:a,underline:o,active:s,indicator:c,pill:l,boxed:u}}));function p({items:e,defaultValue:t,variant:n=`underline`,onChange:r}){let[i,a]=(0,m.useState)(t||e[0]?.value),o=e=>{a(e),r?.(e)};return(0,h.jsx)(`div`,{className:`${d.tabs} ${d[n]}`,children:e.map(e=>(0,h.jsxs)(`button`,{className:`${d.tab} ${i===e.value?d.active:``}`,onClick:()=>o(e.value),children:[e.label,n===`underline`&&(0,h.jsx)(`span`,{className:d.indicator})]},e.value))})}var m,h,g=t((()=>{m=e(n(),1),f(),h=r(),p.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`TabItem`}],raw:`TabItem[]`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'underline' | 'pill' | 'boxed'`,elements:[{name:`literal`,value:`'underline'`},{name:`literal`,value:`'pill'`},{name:`literal`,value:`'boxed'`}]},description:``,defaultValue:{value:`'underline'`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``}}}})),_,v,y,b,x,S,C,w;t((()=>{g(),_=r(),v=[{label:`Dashboard`,value:`dashboard`},{label:`Analytics`,value:`analytics`},{label:`Settings`,value:`settings`},{label:`Users`,value:`users`}],y={title:`Components/Tabs`,component:p,args:{items:v},argTypes:{variant:{control:`select`,options:[`underline`,`pill`,`boxed`]}}},b={args:{variant:`underline`}},x={args:{variant:`pill`}},S={args:{variant:`boxed`}},C={render:()=>(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`p`,{style:{fontSize:13,color:`#6F7285`,marginBottom:8},children:`Underline`}),(0,_.jsx)(p,{items:v,variant:`underline`})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`p`,{style:{fontSize:13,color:`#6F7285`,marginBottom:8},children:`Pill`}),(0,_.jsx)(p,{items:v,variant:`pill`})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`p`,{style:{fontSize:13,color:`#6F7285`,marginBottom:8},children:`Boxed`}),(0,_.jsx)(p,{items:v,variant:`boxed`})]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'underline'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pill'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'boxed'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <div>
        <p style={{
        fontSize: 13,
        color: '#6F7285',
        marginBottom: 8
      }}>Underline</p>
        <Tabs items={items} variant="underline" />
      </div>
      <div>
        <p style={{
        fontSize: 13,
        color: '#6F7285',
        marginBottom: 8
      }}>Pill</p>
        <Tabs items={items} variant="pill" />
      </div>
      <div>
        <p style={{
        fontSize: 13,
        color: '#6F7285',
        marginBottom: 8
      }}>Boxed</p>
        <Tabs items={items} variant="boxed" />
      </div>
    </div>
}`,...C.parameters?.docs?.source}}},w=[`Underline`,`Pill`,`Boxed`,`AllVariants`]}))();export{C as AllVariants,S as Boxed,x as Pill,b as Underline,w as __namedExportsOrder,y as default};