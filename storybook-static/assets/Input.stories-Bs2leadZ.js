import{n as e}from"./chunk-BneVvdWh.js";import{O as t}from"./iframe-BmBPkr8y.js";import{t as n}from"./jsx-runtime-D16BNjX-.js";var r,i,a,o,s,c,l,u,d=e((()=>{r=`_wrapper_1r890_1`,i=`_label_1r890_8`,a=`_input_1r890_14`,o=`_error_1r890_42`,s=`_success_1r890_49`,c=`_helperError_1r890_56`,l=`_helperSuccess_1r890_61`,u={wrapper:r,label:i,input:a,error:o,success:s,helperError:c,helperSuccess:l}}));function f({label:e,error:t,success:n,state:r=`default`,className:i,...a}){let o=t?`error`:n?`success`:r;return(0,p.jsxs)(`div`,{className:`${u.wrapper} ${i||``}`,children:[e&&(0,p.jsx)(`label`,{className:u.label,children:e}),(0,p.jsx)(`input`,{className:`${u.input} ${u[o]}`,...a}),t&&(0,p.jsx)(`span`,{className:u.helperError,children:t}),n&&!t&&(0,p.jsx)(`span`,{className:u.helperSuccess,children:n})]})}var p,m=e((()=>{t(),d(),p=n(),f.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{label:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},success:{required:!1,tsType:{name:`string`},description:``},state:{required:!1,tsType:{name:`union`,raw:`'default' | 'error' | 'success'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'success'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}}},composes:[`InputHTMLAttributes`]}})),h,g,_,v,y,b,x,S,C;e((()=>{m(),h=n(),g={title:`Components/Input`,component:f},_={args:{label:`Label`,placeholder:`Placeholder text`}},v={args:{label:`Focused`,defaultValue:`Typing here...`}},y={args:{label:`Error`,defaultValue:`Invalid input`,error:`This field is required`}},b={args:{label:`Success`,defaultValue:`Valid input`,success:`Looks good!`}},x={args:{label:`Disabled`,placeholder:`Cannot edit`,disabled:!0}},S={render:()=>(0,h.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 300px)`,gap:24},children:[(0,h.jsx)(f,{label:`Default`,placeholder:`Placeholder text`}),(0,h.jsx)(f,{label:`With Value`,defaultValue:`Typing here...`}),(0,h.jsx)(f,{label:`Error`,defaultValue:`Invalid input`,error:`This field is required`}),(0,h.jsx)(f,{label:`Success`,defaultValue:`Valid input`,success:`Looks good!`}),(0,h.jsx)(f,{label:`Disabled`,placeholder:`Cannot edit`,disabled:!0})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder text'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Focused',
    defaultValue: 'Typing here...'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Error',
    defaultValue: 'Invalid input',
    error: 'This field is required'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Success',
    defaultValue: 'Valid input',
    success: 'Looks good!'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    placeholder: 'Cannot edit',
    disabled: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 300px)',
    gap: 24
  }}>
      <Input label="Default" placeholder="Placeholder text" />
      <Input label="With Value" defaultValue="Typing here..." />
      <Input label="Error" defaultValue="Invalid input" error="This field is required" />
      <Input label="Success" defaultValue="Valid input" success="Looks good!" />
      <Input label="Disabled" placeholder="Cannot edit" disabled />
    </div>
}`,...S.parameters?.docs?.source}}},C=[`Default`,`WithValue`,`Error`,`Success`,`Disabled`,`AllStates`]}))();export{S as AllStates,_ as Default,x as Disabled,y as Error,b as Success,v as WithValue,C as __namedExportsOrder,g as default};