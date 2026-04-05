import{n as e}from"./chunk-BneVvdWh.js";import{O as t}from"./iframe-BmBPkr8y.js";import{t as n}from"./jsx-runtime-D16BNjX-.js";var r,i,a,o,s,c,l,u=e((()=>{r=`_wrapper_1ps0r_1`,i=`_disabled_1ps0r_9`,a=`_input_1ps0r_14`,o=`_box_1ps0r_21`,s=`_check_1ps0r_33`,c=`_label_1ps0r_53`,l={wrapper:r,disabled:i,input:a,box:o,check:s,label:c}}));function d({label:e,className:t,...n}){return(0,f.jsxs)(`label`,{className:`${l.wrapper} ${n.disabled?l.disabled:``} ${t||``}`,children:[(0,f.jsx)(`input`,{type:`checkbox`,className:l.input,...n}),(0,f.jsx)(`span`,{className:l.box,children:(0,f.jsx)(`svg`,{className:l.check,viewBox:`0 0 24 24`,width:`14`,height:`14`,children:(0,f.jsx)(`path`,{d:`M10 15.172l9.192-9.193 1.415 1.414L10 17.999l-6.364-6.364 1.414-1.414z`,fill:`currentColor`})})}),e&&(0,f.jsx)(`span`,{className:l.label,children:e})]})}var f,p=e((()=>{t(),u(),f=n(),d.__docgenInfo={description:``,methods:[],displayName:`Checkbox`,props:{label:{required:!1,tsType:{name:`string`},description:``}},composes:[`Omit`]}})),m,h,g,_,v,y,b,x;e((()=>{p(),m=n(),h={title:`Components/Checkbox`,component:d},g={args:{label:`Unchecked`}},_={args:{label:`Checked`,defaultChecked:!0}},v={args:{label:`Disabled`,disabled:!0}},y={args:{label:`Checked Disabled`,defaultChecked:!0,disabled:!0}},b={render:()=>(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,m.jsx)(d,{label:`Unchecked`}),(0,m.jsx)(d,{label:`Checked`,defaultChecked:!0}),(0,m.jsx)(d,{label:`Disabled`,disabled:!0}),(0,m.jsx)(d,{label:`Checked Disabled`,defaultChecked:!0,disabled:!0})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Unchecked'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Checked',
    defaultChecked: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Checked Disabled',
    defaultChecked: true,
    disabled: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Checked Disabled" defaultChecked disabled />
    </div>
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Checked`,`Disabled`,`CheckedDisabled`,`AllStates`]}))();export{b as AllStates,_ as Checked,y as CheckedDisabled,g as Default,v as Disabled,x as __namedExportsOrder,h as default};