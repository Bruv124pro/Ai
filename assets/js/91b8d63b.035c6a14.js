"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8750,8392,4982],{78478:(e,o,t)=>{t.d(o,{A:()=>d});t(96540);var n=t(92303),a=t(74848);function d(e){let{children:o,fallback:t}=e;return(0,n.A)()?(0,a.jsx)(a.Fragment,{children:o?.()}):t??null}},15817:(e,o,t)=>{t.r(o),t.d(o,{default:()=>d});var n=t(96540),a=t(74848);function d(e){let{chatComponents:o,setIsModalDisplayed:t,playgroundConfig:d}=e;const[l,r]=n.useState(!1),[c,s]=n.useState(!1),[i,u]=n.useState(!1);n.useEffect((()=>(m(),r(!0),window.addEventListener("keydown",p),()=>{window.removeEventListener("keydown",p)})),[]);const p=e=>{"Escape"===e.key?x():"Enter"===e.key&&g()},m=()=>{const e=o.find((e=>{const{connect:o}=e.ref.current.config;return o[Object.keys(o)[0]].key}));s(!!e)},g=()=>{const e=y();i&&h();const o=JSON.stringify(e,null,2),t=new Blob([o],{type:"application/json"}),n=URL.createObjectURL(t),a=document.createElement("a");a.href=n,a.download="deep-chat-playground.json",document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(n)},y=()=>{const e={...d,components:o.map((e=>e.ref.current.config))};return JSON.parse(JSON.stringify(e))},h=()=>{d.components.forEach((e=>{const{connect:o}=e,t=Object.keys(o)[0];o[t].key&&(o[t].key=f(o[t].key.length))}))},f=e=>{let o="";for(let t=0;t<e;t++)o+="-";return o},x=()=>{r(!1),setTimeout((()=>{t(!1)}),200)};return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"playground-service-modal-background "+(l?"playground-modal-fade-in-background":"playground-modal-fade-out-background"),onClick:x}),(0,a.jsxs)("div",{className:"playground-modal "+(l?"playground-modal-fade-in":"playground-modal-fade-out"),children:[(0,a.jsx)("b",{className:"playground-modal-title playground-header-modal-title",children:"Export Config"}),(0,a.jsx)("div",{className:"playground-header-modal-description",children:"Export your playground configuration to continue where you left of next time."}),c&&(0,a.jsxs)("div",{id:"playground-export-modal-checkbox-description",className:"playground-header-modal-description",children:[(0,a.jsx)("input",{type:"checkbox",id:"playground-export-modal-checkbox",checked:i,onChange:()=>{u(!i)}}),(0,a.jsx)("div",{children:"Redact API Keys"})]}),(0,a.jsxs)("div",{className:"playground-header-modal-buttons",children:[(0,a.jsx)("button",{className:"playground-modal-button playground-modal-close-button",onClick:x,children:"Close"}),(0,a.jsx)("button",{className:"playground-modal-button playground-modal-submit-button",onClick:g,children:"Export"})]})]})]})}},83432:(e,o,t)=>{t.r(o),t.d(o,{default:()=>r});var n=t(57725),a=t(15817),d=t(96540),l=t(74848);function r(e){let{chatComponents:o,playgroundConfig:t}=e;const[r,c]=d.useState(!1);return(0,l.jsxs)("div",{children:[r&&(0,l.jsx)(a.default,{setIsModalDisplayed:c,chatComponents:o,playgroundConfig:t}),(0,l.jsx)("div",{className:"playground-header-button",onClick:()=>c(!0),children:(0,l.jsx)(n.default,{text:"Export",children:(0,l.jsx)("img",{src:"img/import.svg",className:"playground-button playground-file-button"})})})]})}},57725:(e,o,t)=>{t.r(o),t.d(o,{default:()=>d});var n=t(78478),a=(t(96540),t(74848));function d(e){let{children:o,text:t}=e;return(0,a.jsx)(n.A,{children:()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(0,a.jsx)("a",{children:o}):(0,a.jsx)("a",{"data-tooltip-id":"chat-wrapper-configuration-tooltip","data-tooltip-place":"bottom","data-tooltip-offset":"7","data-tooltip-content":t,children:o})})}}}]);