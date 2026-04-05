import{n as e}from"./chunk-BneVvdWh.js";import{O as t}from"./iframe-BmBPkr8y.js";import{t as n}from"./jsx-runtime-D16BNjX-.js";var r,i,a,o,s,c,l,u,d,f,p=e((()=>{r=`_group_13dxi_1`,i=`_item_13dxi_9`,a=`_clickable_13dxi_21`,o=`_active_13dxi_29`,s=`_avatar_13dxi_33`,c=`_content_13dxi_46`,l=`_title_13dxi_53`,u=`_description_13dxi_69`,d=`_trailing_13dxi_74`,f={group:r,item:i,clickable:a,active:o,avatar:s,content:c,title:l,description:u,trailing:d}}));function m({title:e,description:t,avatar:n,trailing:r,active:i=!1,onClick:a}){return(0,g.jsxs)(`div`,{className:`${f.item} ${i?f.active:``} ${a?f.clickable:``}`,onClick:a,children:[n&&(0,g.jsx)(`div`,{className:f.avatar,style:{background:n.color||`var(--color-accent)`},children:n.initial}),(0,g.jsxs)(`div`,{className:f.content,children:[(0,g.jsx)(`span`,{className:f.title,children:e}),t&&(0,g.jsx)(`span`,{className:f.description,children:t})]}),r&&(0,g.jsx)(`div`,{className:f.trailing,children:r})]})}function h({children:e}){return(0,g.jsx)(`div`,{className:f.group,children:e})}var g,_=e((()=>{t(),p(),g=n(),m.__docgenInfo={description:``,methods:[],displayName:`ListItem`,props:{title:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},avatar:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ initial: string; color?: string }`,signature:{properties:[{key:`initial`,value:{name:`string`,required:!0}},{key:`color`,value:{name:`string`,required:!1}}]}},description:``},trailing:{required:!1,tsType:{name:`ReactNode`},description:``},active:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}},h.__docgenInfo={description:``,methods:[],displayName:`ListGroup`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),v,y,b,x,S,C;e((()=>{_(),v=n(),y={title:`Components/ListItem`,component:m,decorators:[e=>(0,v.jsx)(`div`,{style:{maxWidth:480},children:(0,v.jsx)(e,{})})]},b={render:()=>(0,v.jsxs)(h,{children:[(0,v.jsx)(m,{title:`Dashboard`}),(0,v.jsx)(m,{title:`Analytics`,active:!0}),(0,v.jsx)(m,{title:`Settings`}),(0,v.jsx)(m,{title:`Profile`})]})},x={render:()=>(0,v.jsxs)(h,{children:[(0,v.jsx)(m,{title:`Notifications`,description:`Manage your notification preferences`,trailing:`›`}),(0,v.jsx)(m,{title:`Privacy`,description:`Control your privacy and security`,trailing:`›`}),(0,v.jsx)(m,{title:`Appearance`,description:`Customize the look and feel`,trailing:`›`})]})},S={render:()=>(0,v.jsxs)(h,{children:[(0,v.jsx)(m,{title:`Alice Kim`,description:`Designer`,avatar:{initial:`A`,color:`#A79DBF`}}),(0,v.jsx)(m,{title:`Bob Park`,description:`Developer`,avatar:{initial:`B`,color:`#5A8EC4`}}),(0,v.jsx)(m,{title:`Carol Lee`,description:`PM`,avatar:{initial:`C`,color:`#5B9A6B`}})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ListGroup>
      <ListItem title="Dashboard" />
      <ListItem title="Analytics" active />
      <ListItem title="Settings" />
      <ListItem title="Profile" />
    </ListGroup>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ListGroup>
      <ListItem title="Notifications" description="Manage your notification preferences" trailing="›" />
      <ListItem title="Privacy" description="Control your privacy and security" trailing="›" />
      <ListItem title="Appearance" description="Customize the look and feel" trailing="›" />
    </ListGroup>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <ListGroup>
      <ListItem title="Alice Kim" description="Designer" avatar={{
      initial: 'A',
      color: '#A79DBF'
    }} />
      <ListItem title="Bob Park" description="Developer" avatar={{
      initial: 'B',
      color: '#5A8EC4'
    }} />
      <ListItem title="Carol Lee" description="PM" avatar={{
      initial: 'C',
      color: '#5B9A6B'
    }} />
    </ListGroup>
}`,...S.parameters?.docs?.source}}},C=[`Simple`,`WithDescription`,`WithAvatar`]}))();export{b as Simple,S as WithAvatar,x as WithDescription,C as __namedExportsOrder,y as default};