import{n as e}from"./chunk-BneVvdWh.js";import{O as t}from"./iframe-BmBPkr8y.js";import{t as n}from"./jsx-runtime-D16BNjX-.js";var r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b=e((()=>{r=`_badge_1mwio_1`,i=`_dot_1mwio_14`,a=`_solid_1mwio_21`,o=`_primary_1mwio_22`,s=`_accent_1mwio_23`,c=`_success_1mwio_24`,l=`_warning_1mwio_25`,u=`_error_1mwio_26`,d=`_info_1mwio_27`,f=`_subtle_1mwio_30`,p=`_outline_1mwio_39`,m=`_dot_default_1mwio_47`,h=`_dot_success_1mwio_48`,g=`_dot_warning_1mwio_49`,_=`_dot_error_1mwio_50`,v=`_dot_info_1mwio_51`,y={badge:r,dot:i,solid:a,default:`_default_1mwio_21`,primary:o,accent:s,success:c,warning:l,error:u,info:d,subtle:f,outline:p,dot_default:m,dot_success:h,dot_warning:g,dot_error:_,dot_info:v}}));function x({variant:e=`default`,style_type:t=`solid`,dot:n,children:r}){return(0,S.jsxs)(`span`,{className:`${y.badge} ${y[e]} ${y[t]}`,children:[n&&(0,S.jsx)(`span`,{className:`${y.dot} ${y[`dot_${e}`]}`}),r]})}var S,C=e((()=>{t(),b(),S=n(),x.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'primary' | 'accent' | 'success' | 'warning' | 'error' | 'info'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'primary'`},{name:`literal`,value:`'accent'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'info'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},style_type:{required:!1,tsType:{name:`union`,raw:`'solid' | 'subtle' | 'outline'`,elements:[{name:`literal`,value:`'solid'`},{name:`literal`,value:`'subtle'`},{name:`literal`,value:`'outline'`}]},description:``,defaultValue:{value:`'solid'`,computed:!1}},dot:{required:!1,tsType:{name:`boolean`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),w,T,E,D,O,k,A,j;e((()=>{C(),w=n(),T={title:`Components/Badge`,component:x,argTypes:{variant:{control:`select`,options:[`default`,`primary`,`accent`,`success`,`warning`,`error`,`info`]},style_type:{control:`select`,options:[`solid`,`subtle`,`outline`]}}},E={args:{children:`Badge`,variant:`primary`,style_type:`solid`}},D={args:{children:`Badge`,variant:`success`,style_type:`subtle`}},O={args:{children:`Badge`,variant:`error`,style_type:`outline`}},k={args:{children:`Active`,variant:`success`,style_type:`subtle`,dot:!0}},A={render:()=>(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,w.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,w.jsx)(`span`,{style:{width:50,fontSize:13,color:`#6F7285`},children:`Solid`}),[`default`,`primary`,`accent`,`success`,`warning`,`error`,`info`].map(e=>(0,w.jsx)(x,{variant:e,style_type:`solid`,children:e},e))]}),(0,w.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,w.jsx)(`span`,{style:{width:50,fontSize:13,color:`#6F7285`},children:`Subtle`}),[`default`,`primary`,`accent`,`success`,`warning`,`error`,`info`].map(e=>(0,w.jsx)(x,{variant:e,style_type:`subtle`,children:e},e))]}),(0,w.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,w.jsx)(`span`,{style:{width:50,fontSize:13,color:`#6F7285`},children:`Outline`}),[`default`,`success`,`warning`,`error`,`info`].map(e=>(0,w.jsx)(x,{variant:e,style_type:`outline`,children:e},e))]})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    variant: 'primary',
    style_type: 'solid'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    variant: 'success',
    style_type: 'subtle'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    variant: 'error',
    style_type: 'outline'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Active',
    variant: 'success',
    style_type: 'subtle',
    dot: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <div style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }}>
        <span style={{
        width: 50,
        fontSize: 13,
        color: '#6F7285'
      }}>Solid</span>
        {(['default', 'primary', 'accent', 'success', 'warning', 'error', 'info'] as const).map(v => <Badge key={v} variant={v} style_type="solid">{v}</Badge>)}
      </div>
      <div style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }}>
        <span style={{
        width: 50,
        fontSize: 13,
        color: '#6F7285'
      }}>Subtle</span>
        {(['default', 'primary', 'accent', 'success', 'warning', 'error', 'info'] as const).map(v => <Badge key={v} variant={v} style_type="subtle">{v}</Badge>)}
      </div>
      <div style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }}>
        <span style={{
        width: 50,
        fontSize: 13,
        color: '#6F7285'
      }}>Outline</span>
        {(['default', 'success', 'warning', 'error', 'info'] as const).map(v => <Badge key={v} variant={v} style_type="outline">{v}</Badge>)}
      </div>
    </div>
}`,...A.parameters?.docs?.source}}},j=[`Solid`,`Subtle`,`Outline`,`WithDot`,`AllVariants`]}))();export{A as AllVariants,O as Outline,E as Solid,D as Subtle,k as WithDot,j as __namedExportsOrder,T as default};