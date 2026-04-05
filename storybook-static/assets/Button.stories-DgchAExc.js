import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{n,t as r}from"./Button-Bae0_9BF.js";var i,a,o,s,c,l,u,d,f,p,m;e((()=>{n(),i=t(),a={title:`Components/Button`,component:r,argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`accent`,`ghost`,`danger`]},size:{control:`select`,options:[`sm`,`md`,`lg`]}}},o={args:{children:`Button`,variant:`primary`}},s={args:{children:`Button`,variant:`secondary`}},c={args:{children:`Button`,variant:`accent`}},l={args:{children:`Button`,variant:`ghost`}},u={args:{children:`Button`,variant:`danger`}},d={args:{children:`Button`,variant:`primary`,disabled:!0}},f={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,i.jsx)(r,{size:`sm`,children:`Small`}),(0,i.jsx)(r,{size:`md`,children:`Medium`}),(0,i.jsx)(r,{size:`lg`,children:`Large`})]})},p={render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[`primary`,`secondary`,`accent`,`ghost`,`danger`].map(e=>(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,i.jsx)(`span`,{style:{width:80,fontSize:13,color:`#6F7285`},children:e}),(0,i.jsx)(r,{variant:e,children:`Default`}),(0,i.jsx)(r,{variant:e,disabled:!0,children:`Disabled`})]},e))})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'primary'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'secondary'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'accent'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'ghost'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'danger'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'primary',
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 12
  }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      {(['primary', 'secondary', 'accent', 'ghost', 'danger'] as const).map(v => <div key={v} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }}>
          <span style={{
        width: 80,
        fontSize: 13,
        color: '#6F7285'
      }}>{v}</span>
          <Button variant={v}>Default</Button>
          <Button variant={v} disabled>Disabled</Button>
        </div>)}
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Primary`,`Secondary`,`Accent`,`Ghost`,`Danger`,`Disabled`,`Sizes`,`AllVariants`]}))();export{c as Accent,p as AllVariants,u as Danger,d as Disabled,l as Ghost,o as Primary,s as Secondary,f as Sizes,m as __namedExportsOrder,a as default};