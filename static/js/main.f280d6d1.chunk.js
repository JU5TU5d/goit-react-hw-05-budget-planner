(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,n,t){e.exports=t(49)},48:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(8),u=t.n(o),c=t(12),i=t(6),l=t(22),s=t(26),p="SAVE_BUDGET",d="ADD_EXPENCE",b="REMOVE_EXPENSE",m=Object(i.combineReducers)({budget:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p:return n.payload.budget;default:return e}},expenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case d:return[r.expenseObject].concat(Object(s.a)(e));case b:return e.filter(function(e){return e.id!==r.id});default:return e}}}),f=Object(i.createStore)(m,Object(l.devToolsEnhancer)()),v=t(1),g=t(2),x=t(9),h=t(10),E=t(13),y=t(11),O=t(14);function j(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  width: 100%;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);return j=function(){return e},e}var S=g.a.form(j()),w=function(e){var n=e.onSubmit,t=void 0===n?function(){return null}:n,r=e.children;return a.a.createElement(S,{onSubmit:t},r)};function C(){var e=Object(v.a)(["\n  display: inline-block;\n  font-size: 20px;\n  color: #171718;\n  cursor: pointer;\n  ","\n"]);return C=function(){return e},e}var P=g.a.label(C(),function(e){return e.customStyles}),k=function(e){var n=e.children,t=e.customStyles;return a.a.createElement(P,{customStyles:t},n)};function D(){var e=Object(v.a)(["\n  color: #171718;\n  font: inherit;\n  font-size: 1.2rem;\n  padding: 16px;\n  border-radius: 4px;\n  border: 1px solid #bdbdbd;\n  width: 100%;\n  outline: 0;\n  &:focus {\n    border: 1px solid #2b32b2;\n  }\n"]);return D=function(){return e},e}var B=g.a.input(D()),N=function(e){var n=e.type,t=void 0===n?" text":n,r=e.value,o=void 0===r?"":r,u=e.onChange,c=void 0===u?function(){return null}:u,i=e.name,l=void 0===i?"":i;return a.a.createElement(B,{type:t,value:o,onChange:c,name:l})};function A(){var e=Object(v.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: #3f51b5;\n  border: 0;\n  outline: 0;\n  padding: 8px 24px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);\n  font: inherit;\n  text-transform: uppercase;\n  user-select: none;\n  transition: background-color 200ms ease-in-out;\n  &:hover {\n    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);\n    background-color: #303f9f;\n  }\n"]);return A=function(){return e},e}var z=g.a.button(A()),R=function(e){var n=e.type,t=void 0===n?"button":n,r=e.label,o=void 0===r?"":r,u=e.onClick,c=void 0===u?function(){return null}:u;return a.a.createElement(z,{type:t,onClick:c},o)},_=function(e){function n(){var e,t;Object(x.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(E.a)(this,(e=Object(y.a)(n)).call.apply(e,[this].concat(a)))).state={budget:0},t.handleChange=function(e){t.setState({budget:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSave(t.state.budget),t.setState({budget:0})},t}return Object(O.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){return a.a.createElement(w,{onSubmit:this.handleSubmit},a.a.createElement(k,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter your total budget",a.a.createElement(N,{type:"number",value:this.state.budget,onChange:this.handleChange})),a.a.createElement(R,{label:"Save",type:"submit"}))}}]),n}(r.Component),F=t(19),J=t(25),L=t.n(J);function T(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}var V=function(e){function n(){var e,t;Object(x.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(E.a)(this,(e=Object(y.a)(n)).call.apply(e,[this].concat(a)))).state={name:"",amount:0},t.handleChange=function(e){t.setState(Object(F.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSave(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?T(t,!0).forEach(function(n){Object(F.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},t.state,{id:L.a.generate()})),t.setState({name:"",amount:0})},t}return Object(O.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){return a.a.createElement(w,{onSubmit:this.handleSubmit},a.a.createElement(k,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter expense name",a.a.createElement(N,{type:"text",name:"name",value:this.state.name,onChange:this.handleChange})),a.a.createElement(k,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter expense amount",a.a.createElement(N,{type:"number",name:"amount",value:this.state.amount,onChange:this.handleChange})),a.a.createElement(R,{label:"Add",type:"submit"}))}}]),n}(r.Component);function X(){var e=Object(v.a)(["\n  border-collapse: collapse;\n  text-align: center;\n  width: 100%;\n  tr {\n    border-bottom: 1px solid #212121;\n  }\n  td,\n  th {\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n"]);return X=function(){return e},e}var G=g.a.table(X()),I=function(e){var n=e.items,t=void 0===n?[]:n,r=e.onRemove;return a.a.createElement(G,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Expense name"),a.a.createElement("th",null,"Expense amount"),a.a.createElement("th",null))),a.a.createElement("tbody",null,t.map(function(e){var n=e.id,t=e.name,o=e.amount;return a.a.createElement("tr",{key:n},a.a.createElement("td",null,t),a.a.createElement("td",null,o),a.a.createElement("td",null,a.a.createElement(R,{label:"Delete",onClick:function(){return r(n)}})))})))};function M(){var e=Object(v.a)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 48px;\n"]);return M=function(){return e},e}function U(){var e=Object(v.a)(["\n  margin-top: 0;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 24px;\n"]);return U=function(){return e},e}function $(){var e=Object(v.a)(["\n  text-align: center;\n  padding: 8px 24px;\n  color: ",";\n  user-select: none;\n"]);return $=function(){return e},e}var q=g.a.div($(),function(e){return e.isPositive?"#388E3C":"#D32F2F"}),H=g.a.p(U()),K=g.a.p(M()),Q=function(e){var n=e.label,t=e.value,r=e.isPositive;return a.a.createElement(q,{isPositive:r},a.a.createElement(H,null,n),a.a.createElement(K,null,t,"\xa0$"))};function W(){var e=Object(v.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return W=function(){return e},e}var Y=g.a.section(W()),Z=function(e){var n=e.budget,t=e.expenses,r=e.balance;return a.a.createElement(Y,null,a.a.createElement(Q,{label:"Budget",value:n,isPositive:!0}),a.a.createElement(Q,{label:"Expenses",value:t}),a.a.createElement(Q,{label:"Balance",value:r,isPositive:r>=0}))},ee=function(e){return Number(e.budget)},ne=function(e){return e.expenses},te=function(e){return ne(e).reduce(function(e,n){return e+Number(n.amount)},0)},re=function(e){var n=ee(e),t=te(e);return Number(n)-Number(t)},ae=function(e){return ne(e).length};function oe(){var e=Object(v.a)(["\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  align-items: flex-start;\n  grid-gap: 24px;\n  max-width: 960px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return oe=function(){return e},e}var ue=g.a.div(oe()),ce=Object(c.b)(function(e){return{budget:ee(e),totalExpenses:te(e),expenses:ne(e),balance:re(e),expensesLength:ae(e)}},function(e){return{saveBudget:function(n){return e(function(e){return{type:p,payload:{budget:e}}}(n))},addExpense:function(n){return e({type:d,payload:{expenseObject:n}})},removeExpence:function(n){return e(function(e){return{type:b,payload:{id:e}}}(n))}}})(function(e){var n=e.budget,t=e.expenses,r=e.balance,o=e.expensesLength,u=e.totalExpenses,c=e.saveBudget,i=e.addExpense,l=e.removeExpence;return a.a.createElement(ue,null,a.a.createElement(_,{onSave:c}),a.a.createElement(Z,{budget:n,expenses:u,balance:r}),a.a.createElement(V,{onSave:i}),o>0&&a.a.createElement(I,{items:t,onRemove:l}))});t(48);u.a.render(a.a.createElement(c.a,{store:f},a.a.createElement(ce,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.f280d6d1.chunk.js.map