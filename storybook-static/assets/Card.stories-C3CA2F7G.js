import{n as e}from"./chunk-BneVvdWh.js";import{O as t}from"./iframe-BmBPkr8y.js";import{t as n}from"./jsx-runtime-D16BNjX-.js";import{n as r,t as i}from"./Button-Bae0_9BF.js";var a,o,s,c,l,u,d,f,p,m=e((()=>{a=`_card_46rpy_1`,o=`_image_46rpy_9`,s=`_content_46rpy_22`,c=`_title_46rpy_29`,l=`_subtitle_46rpy_36`,u=`_body_46rpy_43`,d=`_divider_46rpy_49`,f=`_actions_46rpy_54`,p={card:a,image:o,content:s,title:c,subtitle:l,body:u,divider:d,actions:f}}));function h({title:e,subtitle:t,children:n,image:r,actions:i}){return(0,g.jsxs)(`div`,{className:p.card,children:[r&&(0,g.jsx)(`div`,{className:p.image,children:(0,g.jsx)(`img`,{src:r,alt:e})}),(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{className:p.title,children:e}),t&&(0,g.jsx)(`p`,{className:p.subtitle,children:t}),n&&(0,g.jsx)(`div`,{className:p.body,children:n})]}),i&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`div`,{className:p.divider}),(0,g.jsx)(`div`,{className:p.actions,children:i})]})]})}var g,_=e((()=>{t(),m(),g=n(),h.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{title:{required:!0,tsType:{name:`string`},description:``},subtitle:{required:!1,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},image:{required:!1,tsType:{name:`string`},description:``},actions:{required:!1,tsType:{name:`ReactNode`},description:``}}}})),v=e((()=>{r()})),y,b,x,S,C,w;e((()=>{_(),v(),y=n(),b={title:`Components/Card`,component:h,decorators:[e=>(0,y.jsx)(`div`,{style:{maxWidth:360},children:(0,y.jsx)(e,{})})]},x={args:{title:`Basic Card`,subtitle:`Subtitle text`,children:`Simple card with a title, subtitle and body text. Great for displaying content.`}},S={args:{title:`Action Card`,subtitle:`With buttons`,children:`Card with action buttons in the footer.`,actions:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i,{size:`sm`,children:`Action`}),(0,y.jsx)(i,{size:`sm`,variant:`ghost`,children:`Cancel`})]})}},C={decorators:[e=>(0,y.jsx)(`div`,{style:{maxWidth:240},children:(0,y.jsx)(e,{})})],args:{title:`Compact`,children:`Smaller card variant.`}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Basic Card',
    subtitle: 'Subtitle text',
    children: 'Simple card with a title, subtitle and body text. Great for displaying content.'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Action Card',
    subtitle: 'With buttons',
    children: 'Card with action buttons in the footer.',
    actions: <>
        <Button size="sm">Action</Button>
        <Button size="sm" variant="ghost">Cancel</Button>
      </>
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    maxWidth: 240
  }}><Story /></div>],
  args: {
    title: 'Compact',
    children: 'Smaller card variant.'
  }
}`,...C.parameters?.docs?.source}}},w=[`Basic`,`WithActions`,`Compact`]}))();export{x as Basic,C as Compact,S as WithActions,w as __namedExportsOrder,b as default};