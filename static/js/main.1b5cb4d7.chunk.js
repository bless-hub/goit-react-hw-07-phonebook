(this.webpackJsonphw7=this.webpackJsonphw7||[]).push([[0],{10:function(t,e,n){t.exports={form:"ContactForm_form__345QV",label:"ContactForm_label__1qVmS",input:"ContactForm_input__2Xyve",button:"ContactForm_button__3UF0V"}},13:function(t,e,n){t.exports={list:"ContactList_list__240Y-",item:"ContactList_item__1lzAQ",button:"ContactList_button__3rqWw"}},25:function(t,e,n){t.exports={input:"Filter_input__27QT8",inputHeader:"Filter_inputHeader__1mcPk"}},37:function(t,e,n){t.exports={section:"container_section__3F4iW"}},39:function(t,e,n){t.exports={enter:"fade_enter__1Vm_6",enterActive:"fade_enterActive__2PNbM",exit:"fade_exit__2yuEX",exitActive:"fade_exitActive__1Ppsz"}},40:function(t,e,n){t.exports={appear:"Logo_appear__2208k",appearActive:"Logo_appearActive__3UacC"}},41:function(t,e,n){t.exports={appear:"Fadefilter_appear__1wpwA",appearActive:"Fadefilter_appearActive__3004e"}},74:function(t,e,n){},75:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),r=n(9),o=n.n(r),s=n(7),i=n(15),u=n(16),l=n(19),b=n(18),d=n(37),h=n.n(d);function j(t){var e=t.children;return Object(c.jsx)("section",{className:h.a.section,children:e})}var f=n(13),m=n.n(f),p=n(38),O=n(2),C=Object(O.b)("contact/addRequest"),v=Object(O.b)("contact/addSucces"),_=Object(O.b)("contact/addErr"),x=Object(O.b)("contact/fetchRequest"),g=Object(O.b)("contact/fetchSucces"),y=Object(O.b)("contact/fetchErr"),F=Object(O.b)("contact/removeRequest"),S=Object(O.b)("contact/removeSucces"),N=Object(O.b)("contact/removeErr"),k={changeFilter:Object(O.b)("contact/changeFilter"),addContactsRequest:C,addContactsSucces:v,addContactsErr:_,fetchContactsRequest:x,fetchContactsSucces:g,fetchContactsErr:y,removeContactRequest:F,removeContactSucces:S,removeContactErr:N},w=n(20),E=n.n(w),q={addContact:function(t){var e=t.name,n=t.number;return function(t){t(k.addContactsRequest()),E.a.post("http://localhost:2000/contacts",{name:e,number:n}).then((function(e){t(k.addContactsSucces(e.data))})).catch((function(e){return t(k.addContactsErr(e))}))}},fetchContacts:function(){return function(t){t(k.fetchContactsRequest()),E.a.get("http://localhost:2000/contacts").then((function(e){var n=e.data;return t(k.fetchContactsSucces(n))})).catch((function(e){return t(k.fetchContactsErr(e))}))}},removeContact:function(t){return function(e){e(k.removeContactRequest),E.a.delete("http://localhost:2000/contacts/".concat(t)).then((function(){return e(k.removeContactSucces(t))})).catch((function(t){return e(k.removeContactErr(t))}))}}},A=function(t){return t.tasks.filter},R=function(t){return t.tasks.items},L=A,D=function(t){var e=R(t),n=A(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},P=function(t,e){return R(t).find((function(t){return t.id===e}))};var B=Object(s.b)((function(t,e){var n=P(t,e.id);return Object(p.a)({},n)}),(function(t,e){return{removeContact:function(){return t(q.removeContact(e.id))}}}))((function(t){var e=t.name,n=t.number,a=t.removeContact,r=t.id;return Object(c.jsxs)("li",{className:m.a.item,children:[e," ",n,Object(c.jsx)("button",{type:"button",className:m.a.button,onClick:a,children:"Delete Contact"})]},r)})),M=n(77),V=n(76),H=n(39),Q=n.n(H),T=Object(s.b)((function(t){return{contacts:D(t)}}))((function(t){var e=t.contacts;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(M.a,{component:"ul",className:m.a.list,children:e.map((function(t){return Object(c.jsx)(V.a,{timeout:250,classNames:Q.a,children:Object(c.jsx)(B,{id:t.id})},t.id)}))})})})),z=n(8),J=n(10),U=n.n(J),W=n(40),X=n.n(W),I=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(z.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault(),t.props.addContact(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(V.a,{in:!0,appear:!0,timeout:5e3,unmountOnExit:!0,classNames:X.a,children:Object(c.jsx)("h1",{children:"PhoneBook"})}),Object(c.jsxs)("form",{className:U.a.form,onSubmit:this.handleSubmit,children:[Object(c.jsxs)("label",{className:U.a.label,children:["Name",Object(c.jsx)("input",{className:U.a.input,type:"text",name:"name",value:e,onChange:this.handleChange})]}),Object(c.jsxs)("label",{className:U.a.label,children:["Number",Object(c.jsx)("input",{className:U.a.input,type:"text",name:"number",value:n,onChange:this.handleChange})]}),Object(c.jsx)("button",{className:U.a.button,type:"submit",children:"Add Contact"})]})]})}}]),n}(a.Component),Y={addContact:q.addContact},G=Object(s.b)(null,Y)(I),K=n(25),Z=n.n(K),$=n(41),tt=n.n($),et={onChangeFilter:k.changeFilter},nt=Object(s.b)((function(t){return{value:L(t),contacts:t.tasks.items}}),et)((function(t){var e=t.contacts,n=t.value,a=t.onChangeFilter;return Object(c.jsx)(c.Fragment,{children:e.length>1&&Object(c.jsx)(V.a,{in:e.length>1,timeout:250,appear:!0,unmountOnExit:!0,classNames:tt.a,children:Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:Z.a.inputHeader,children:"Find contact by name"}),Object(c.jsx)("input",{className:Z.a.input,type:"text",value:n,placeholder:"find contact",onChange:function(t){return a(t.target.value)}})]})})})})),ct=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onfetchContacts()}},{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j,{title:"PhoneBook",children:Object(c.jsx)(G,{})}),Object(c.jsxs)(j,{children:[Object(c.jsx)(nt,{}),Object(c.jsx)(T,{})]})]})}}]),n}(a.Component),at={onfetchContacts:q.fetchContacts},rt=Object(s.b)(null,at)(ct),ot=n(42),st=n(6),it=n(26),ut=n.n(it);n(73);ut.a.options={closeButton:!0,debug:!1,newestOnTop:!0,progressBar:!0,positionClass:"toast-top-right",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"3000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};var lt,bt=function(){return ut.a.error("Contact already exists")},dt=Object(O.c)([],(lt={},Object(z.a)(lt,k.fetchContactsSucces,(function(t,e){return e.payload})),Object(z.a)(lt,k.addContactsSucces,(function(t,e){var n=e.payload;if(!t.find((function(t){return t.name===n.name})))return[].concat(Object(ot.a)(t),[e.payload]);bt()})),Object(z.a)(lt,k.removeContactSucces,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),lt)),ht=Object(O.c)("",Object(z.a)({},k.changeFilter,(function(t,e){return e.payload}))),jt=Object(st.c)({items:dt,filter:ht}),ft=Object(O.a)({reducer:{tasks:jt}});n(74);o.a.render(Object(c.jsx)(s.a,{store:ft,children:Object(c.jsx)(rt,{})}),document.querySelector("#root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.1b5cb4d7.chunk.js.map