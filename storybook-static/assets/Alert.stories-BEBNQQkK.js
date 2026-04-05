import{a as e,n as t}from"./chunk-BneVvdWh.js";import{O as n}from"./iframe-BmBPkr8y.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";var i,a,o,s,c,l,u,d,f,p,m,h,g=t((()=>{i=`_alert_1u4p9_1`,a=`_bar_1u4p9_11`,o=`_icon_1u4p9_19`,s=`_content_1u4p9_26`,c=`_title_1u4p9_33`,l=`_message_1u4p9_40`,u=`_close_1u4p9_46`,d=`_info_1u4p9_61`,f=`_success_1u4p9_68`,p=`_warning_1u4p9_75`,m=`_error_1u4p9_82`,h={alert:i,bar:a,icon:o,content:s,title:c,message:l,close:u,info:d,success:f,warning:p,error:m}}));function _({variant:e=`info`,title:t,children:n,dismissible:r=!0,onDismiss:i}){let[a,o]=(0,v.useState)(!0);return a?(0,y.jsxs)(`div`,{className:`${h.alert} ${h[e]}`,children:[(0,y.jsx)(`div`,{className:h.bar}),(0,y.jsx)(`span`,{className:h.icon,children:{info:`ℹ`,success:`✓`,warning:`⚠`,error:`✕`}[e]}),(0,y.jsxs)(`div`,{className:h.content,children:[(0,y.jsx)(`p`,{className:h.title,children:t}),n&&(0,y.jsx)(`p`,{className:h.message,children:n})]}),r&&(0,y.jsx)(`button`,{className:h.close,onClick:()=>{o(!1),i?.()},"aria-label":`Dismiss`,children:`✕`})]}):null}var v,y,b=t((()=>{v=e(n(),1),g(),y=r(),_.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'warning' | 'error'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`}]},description:``,defaultValue:{value:`'info'`,computed:!1}},title:{required:!0,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},dismissible:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},onDismiss:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),x,S,C,w,T,E,D,O;t((()=>{b(),x=r(),S={title:`Components/Alert`,component:_,decorators:[e=>(0,x.jsx)(`div`,{style:{maxWidth:700},children:(0,x.jsx)(e,{})})],argTypes:{variant:{control:`select`,options:[`info`,`success`,`warning`,`error`]}}},C={args:{variant:`info`,title:`Information`,children:`This is an informational alert for general notices.`}},w={args:{variant:`success`,title:`Success`,children:`Action completed successfully.`}},T={args:{variant:`warning`,title:`Warning`,children:`Please review your input.`}},E={args:{variant:`error`,title:`Error`,children:`Something went wrong.`}},D={render:()=>(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,x.jsx)(_,{variant:`info`,title:`Information`,children:`This is an informational alert for general notices.`}),(0,x.jsx)(_,{variant:`success`,title:`Success`,children:`Action completed successfully. Changes have been saved.`}),(0,x.jsx)(_,{variant:`warning`,title:`Warning`,children:`Please review your input. Some fields may need attention.`}),(0,x.jsx)(_,{variant:`error`,title:`Error`,children:`Something went wrong. Please try again or contact support.`})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational alert for general notices.'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Success',
    children: 'Action completed successfully.'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'Please review your input.'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Error',
    children: 'Something went wrong.'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Alert variant="info" title="Information">This is an informational alert for general notices.</Alert>
      <Alert variant="success" title="Success">Action completed successfully. Changes have been saved.</Alert>
      <Alert variant="warning" title="Warning">Please review your input. Some fields may need attention.</Alert>
      <Alert variant="error" title="Error">Something went wrong. Please try again or contact support.</Alert>
    </div>
}`,...D.parameters?.docs?.source}}},O=[`Info`,`Success`,`Warning`,`Error`,`AllVariants`]}))();export{D as AllVariants,E as Error,C as Info,w as Success,T as Warning,O as __namedExportsOrder,S as default};