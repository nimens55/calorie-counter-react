(this["webpackJsonpcalorie-counter"]=this["webpackJsonpcalorie-counter"]||[]).push([[0],[,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var c=i(1),a=i.n(c),s=i(6),n=i.n(s),l=(i(11),i(12),i(13),i(3)),r=i(2),d=i(4),j=Object(c.createContext)(),h=(i(14),i(0)),m=function(){var e=Object(c.useContext)(j),t=e.calculationOfCalories,i=e.resetCalculation,a={gender:"male",age:null,height:null,weight:null,activity:"min"},s=Object(c.useState)(a),n=Object(d.a)(s,2),m=n[0],u=n[1],o=function(e){u(Object(r.a)(Object(r.a)({},m),{},Object(l.a)({},e.target.name,e.target.value)))},b=m.age&&m.height&&m.weight,O=m.age||m.height||m.weight;return Object(h.jsxs)("form",{className:"counter__form form",name:"counter",onSubmit:function(e){return e.preventDefault()},children:[Object(h.jsxs)("div",{className:"form__item",children:[Object(h.jsx)("h2",{className:"heading",children:"\u041f\u043e\u043b"}),Object(h.jsxs)("ul",{className:"switcher",children:[Object(h.jsxs)("li",{className:"switcher__item",children:[Object(h.jsx)("input",{id:"gender-male",name:"gender",value:"male",type:"radio",onChange:o,checked:"male"===m.gender,required:!0}),Object(h.jsx)("label",{htmlFor:"gender-male",children:"\u041c\u0443\u0436\u0447\u0438\u043d\u0430"})]}),Object(h.jsxs)("li",{className:"switcher__item",children:[Object(h.jsx)("input",{id:"gender-female",name:"gender",value:"female",type:"radio",onChange:o,checked:"female"===m.gender,required:!0}),Object(h.jsx)("label",{htmlFor:"gender-female",children:"\u0416\u0435\u043d\u0449\u0438\u043d\u0430"})]})]})]}),Object(h.jsxs)("fieldset",{className:"form__item form__parameters",name:"parameters",children:[Object(h.jsx)("legend",{className:"visually-hidden",children:"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),Object(h.jsxs)("div",{className:"inputs-group",children:[Object(h.jsxs)("div",{className:"input",children:[Object(h.jsxs)("div",{className:"input__heading",children:[Object(h.jsx)("label",{className:"heading",htmlFor:"age",children:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442"}),Object(h.jsx)("span",{className:"input__heading-unit",children:"\u043b\u0435\u0442"})]}),Object(h.jsx)("div",{className:"input__wrapper",children:Object(h.jsx)("input",{type:"text",id:"age",name:"age",placeholder:"0",value:m.age?m.age:"",inputMode:"decimal",maxLength:"3",onChange:o,required:!0})})]}),Object(h.jsxs)("div",{className:"input",children:[Object(h.jsxs)("div",{className:"input__heading",children:[Object(h.jsx)("label",{className:"heading",htmlFor:"height",children:"\u0420\u043e\u0441\u0442"}),Object(h.jsx)("span",{className:"input__heading-unit",children:"\u0441\u043c"})]}),Object(h.jsx)("div",{className:"input__wrapper",children:Object(h.jsx)("input",{type:"text",id:"height",name:"height",placeholder:"0",value:m.height?m.height:"",inputMode:"decimal",maxLength:"3",onChange:o,required:!0})})]}),Object(h.jsxs)("div",{className:"input",children:[Object(h.jsxs)("div",{className:"input__heading",children:[Object(h.jsx)("label",{className:"heading",htmlFor:"weight",children:"\u0412\u0435\u0441"}),Object(h.jsx)("span",{className:"input__heading-unit",children:"\u043a\u0433"})]}),Object(h.jsx)("div",{className:"input__wrapper",children:Object(h.jsx)("input",{type:"text",id:"weight",name:"weight",placeholder:"0",value:m.weight?m.weight:"",inputMode:"decimal",maxLength:"3",onChange:o,required:!0})})]})]})]}),Object(h.jsxs)("fieldset",{className:"form__item",children:[Object(h.jsx)("legend",{className:"heading",children:"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"}),Object(h.jsxs)("ul",{className:"radios-group",children:[Object(h.jsxs)("li",{className:"radio",children:[Object(h.jsxs)("div",{className:"radio__wrapper",children:[Object(h.jsx)("input",{id:"activity-minimal",name:"activity",value:"min",type:"radio",onChange:o,checked:"min"===m.activity,required:!0}),Object(h.jsx)("label",{htmlFor:"activity-minimal",children:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f"})]}),Object(h.jsx)("p",{className:"radio__description",children:"\u0421\u0438\u0434\u044f\u0447\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430 \u0438 \u043d\u0435\u0442 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043d\u0430\u0433\u0440\u0443\u0437\u043e\u043a"})]}),Object(h.jsxs)("li",{className:"radio",children:[Object(h.jsxs)("div",{className:"radio__wrapper",children:[Object(h.jsx)("input",{id:"activity-low",name:"activity",value:"low",type:"radio",onChange:o,checked:"low"===m.activity,required:!0}),Object(h.jsx)("label",{htmlFor:"activity-low",children:"\u041d\u0438\u0437\u043a\u0430\u044f"})]}),Object(h.jsx)("p",{className:"radio__description",children:"\u0420\u0435\u0434\u043a\u0438\u0435, \u043d\u0435\u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438, \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0432 \u0431\u044b\u0442\u0443"})]}),Object(h.jsxs)("li",{className:"radio",children:[Object(h.jsxs)("div",{className:"radio__wrapper",children:[Object(h.jsx)("input",{id:"activity-medium",name:"activity",value:"medium",type:"radio",onChange:o,checked:"medium"===m.activity,required:!0}),Object(h.jsx)("label",{htmlFor:"activity-medium",children:"\u0421\u0440\u0435\u0434\u043d\u044f\u044f"})]}),Object(h.jsx)("p",{className:"radio__description",children:"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438 3-5 \u0440\u0430\u0437 \u0432 \u043d\u0435\u0434\u0435\u043b\u044e"})]}),Object(h.jsxs)("li",{className:"radio",children:[Object(h.jsxs)("div",{className:"radio__wrapper",children:[Object(h.jsx)("input",{id:"activity-high",name:"activity",value:"high",type:"radio",onChange:o,checked:"high"===m.activity,required:!0}),Object(h.jsx)("label",{htmlFor:"activity-high",children:"\u0412\u044b\u0441\u043e\u043a\u0430\u044f"})]}),Object(h.jsx)("p",{className:"radio__description",children:"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438 6-7 \u0440\u0430\u0437 \u0432 \u043d\u0435\u0434\u0435\u043b\u044e"})]}),Object(h.jsxs)("li",{className:"radio",children:[Object(h.jsxs)("div",{className:"radio__wrapper",children:[Object(h.jsx)("input",{id:"activity-maximal",name:"activity",value:"max",type:"radio",onChange:o,checked:"max"===m.activity,required:!0}),Object(h.jsx)("label",{htmlFor:"activity-maximal",children:"\u041e\u0447\u0435\u043d\u044c \u0432\u044b\u0441\u043e\u043a\u0430\u044f"})]}),Object(h.jsx)("p",{className:"radio__description",children:"\u0411\u043e\u043b\u044c\u0448\u0435 6 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a \u0432 \u043d\u0435\u0434\u0435\u043b\u044e \u0438 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430"})]})]})]}),Object(h.jsxs)("div",{className:"form__submit",children:[Object(h.jsx)("button",{className:"form__submit-button button",name:"submit",type:"submit",onClick:function(){return t(m)},disabled:null===b,children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c"}),Object(h.jsxs)("button",{className:"form__reset-button",name:"reset",type:"reset",onClick:function(e){e.preventDefault(),i(),u(a)},disabled:null===O,children:[Object(h.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FD3636",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z"})}),Object(h.jsx)("span",{children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043f\u043e\u043b\u044f \u0438 \u0440\u0430\u0441\u0447\u0451\u0442"})]})]})]})},u=(i(16),function(){var e=Object(c.useContext)(j).globalState;return Object(h.jsxs)("section",{className:e.isResult?"counter__result":"counter__result counter__result--hidden",children:[Object(h.jsx)("h2",{className:"heading",children:"\u0412\u0430\u0448\u0430 \u043d\u043e\u0440\u043c\u0430 \u043a\u0430\u043b\u043e\u0440\u0438\u0439"}),Object(h.jsxs)("ul",{className:"counter__result-list",children:[Object(h.jsxs)("li",{className:"counter__result-item",children:[Object(h.jsxs)("h3",{children:[Object(h.jsx)("span",{id:"calories-norm",children:e.result.retention})," \u043a\u043a\u0430\u043b"]}),Object(h.jsx)("p",{children:"\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u0432\u0435\u0441\u0430"})]}),Object(h.jsxs)("li",{className:"counter__result-item",children:[Object(h.jsxs)("h3",{children:[Object(h.jsx)("span",{id:"calories-minimal",children:e.result.decrease})," \u043a\u043a\u0430\u043b"]}),Object(h.jsx)("p",{children:"\u0441\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0432\u0435\u0441\u0430"})]}),Object(h.jsxs)("li",{className:"counter__result-item",children:[Object(h.jsxs)("h3",{children:[Object(h.jsx)("span",{id:"calories-maximal",children:e.result.increase})," \u043a\u043a\u0430\u043b"]}),Object(h.jsx)("p",{children:"\u043d\u0430\u0431\u043e\u0440 \u0432\u0435\u0441\u0430"})]})]})]})});var o=function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("article",{className:"counter",children:[Object(h.jsx)("h1",{className:"counter__heading heading-main",children:"\u0421\u0447\u0451\u0442\u0447\u0438\u043a \u043a\u0430\u043b\u043e\u0440\u0438\u0439"}),Object(h.jsx)(m,{}),Object(h.jsx)(u,{})]})})},b=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,18)).then((function(t){var i=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,n=t.getTTFB;i(e),c(e),a(e),s(e),n(e)}))},O=function(e,t){switch(t.type){case"SPEND_CALCULATION":return Object(r.a)(Object(r.a)({},e),{},{result:t.payload,isResult:!0});case"RESET_CALCULATION":return Object(r.a)({},t.payload);default:return e}},x=function(e){var t=e.children,i={result:{},isResult:!1},a=Object(c.useReducer)(O,i),s=Object(d.a)(a,2),n=s[0],l=s[1];return Object(h.jsx)(j.Provider,{value:{globalState:n,calculationOfCalories:function(e){var t,i={},c={min:1.2,low:1.375,medium:1.55,high:1.725,max:1.9};"male"===e.gender?t=(10*+e.weight+6.25*+e.height-5*+e.age+5)*c[e.activity]:"female"===e.gender&&(t=(10*+e.weight+6.25*+e.height-5*+e.age-161)*c[e.activity]),i.retention=Math.round(t),i.increase=Math.round(1.15*t),i.decrease=Math.round(.75*t),l({type:"SPEND_CALCULATION",payload:i})},resetCalculation:function(){l({type:"RESET_CALCULATION",payload:i})}},children:t})};n.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(x,{children:Object(h.jsx)(o,{})})}),document.getElementById("root")),b()}],[[17,1,2]]]);
//# sourceMappingURL=main.9cbe6a4d.chunk.js.map