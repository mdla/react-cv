(this["webpackJsonpmauro-cv"]=this["webpackJsonpmauro-cv"]||[]).push([[0],{10:function(e,a,t){e.exports=t(20)},15:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(8),r=t.n(l),o=(t(15),t(1)),s=t(2),c=t(4),m=t(3),u=t(6),d=(t(18),t(19),t(9)),p=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.description,n=this.props.data.address.city,l=this.props.data.social.map((function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("a",{href:e.url},i.a.createElement("i",{className:e.className})))}));return i.a.createElement("header",{id:"home"},i.a.createElement("nav",{id:"nav-wrap",className:"opaque"},i.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),i.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),i.a.createElement("ul",{id:"nav",className:"nav"},i.a.createElement("li",{className:"current"},i.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#about"},"Sobre Mi")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#resume"},"CV")))),i.a.createElement("div",{className:"row banner"},i.a.createElement("div",{className:"banner-text"},i.a.createElement("h1",{className:"responsive-headline"},"Me llamo ",e,"."),i.a.createElement("h3",null,"Soy de ",n," ",i.a.createElement("span",null,a),". ",t,"."),i.a.createElement("hr",null),i.a.createElement("ul",{className:"social"},l))),i.a.createElement("p",{className:"scrolldown"},i.a.createElement("a",{className:"smoothscroll",href:"#about"},i.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component),h=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("a",{href:e.url},i.a.createElement("i",{className:e.className})))}));return i.a.createElement("footer",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("ul",{className:"social-links"},e)),i.a.createElement("div",{id:"go-top"},i.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},i.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),E=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={path:null,alt:null},n}return Object(s.a)(t,[{key:"render",value:function(){return this.props?i.a.createElement("img",{className:"profile-pic",src:"/react-cv"+this.props.path,alt:this.props.alt}):i.a.createElement("span",null," Vacio ")}}]),t}(n.Component),g=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.name,a=this.props.data.image,t=this.props.data.bio,n=this.props.data.address.street,l=this.props.data.address.city,r=this.props.data.address.state,o=this.props.data.address.zip,s=this.props.data.phone,c=this.props.data.email;this.props.data.resumedownload}return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"three columns"},i.a.createElement(E,{path:a,alt:"Foto Mauro Dario Luna Ayala"})),i.a.createElement("div",{className:"nine columns main-col"},i.a.createElement("h2",null,"Sobre mi"),i.a.createElement("p",null,t),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"columns contact-details"},i.a.createElement("h2",null,"Contacto"),i.a.createElement("p",{className:"address"},i.a.createElement("span",null,e),i.a.createElement("br",null),i.a.createElement("span",null,n,i.a.createElement("br",null),l," ",r,", ",o),i.a.createElement("br",null),i.a.createElement("span",null,s),i.a.createElement("br",null),i.a.createElement("span",null,c))),i.a.createElement("div",{className:"columns download"},i.a.createElement("p",null))))))}}]),t}(n.Component),v=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,a=this.props.data.education.map((function(e){return i.a.createElement("div",{key:e.school},i.a.createElement("h3",null,e.school),i.a.createElement("p",{className:"info"},e.degree," ",i.a.createElement("span",null,"\u2022"),i.a.createElement("em",{className:"date"},e.graduated)),i.a.createElement("p",null,e.description))})),t=this.props.data.work.map((function(e){return i.a.createElement("div",{key:e.company},i.a.createElement("h3",null,e.company),i.a.createElement("p",{className:"info"},e.title,i.a.createElement("span",null,"\u2022")," ",i.a.createElement("em",{className:"date"},e.years)),i.a.createElement("p",null,e.description))})),n=this.props.data.skills.map((function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("em",null,e.name))})),l=this.props.data.courses.map((function(e){return i.a.createElement("div",null,i.a.createElement("h3",null,e.title),i.a.createElement("p",{className:"info"},e.description),i.a.createElement("p",null,e.description))}));return i.a.createElement("section",{id:"resume"},i.a.createElement("div",{className:"row education"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Educaci\xf3n"))),i.a.createElement("div",{className:"nine columns main-col"},i.a.createElement("div",{className:"row item"},i.a.createElement("div",{className:"twelve columns"},a)))),i.a.createElement("div",{className:"row work"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Trabajos"))),i.a.createElement("div",{className:"nine columns main-col"},t)),i.a.createElement("div",{className:"row skill"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Tecnolog\xedas"))),i.a.createElement("div",{className:"nine columns main-col"},i.a.createElement("p",null,e),i.a.createElement("div",{className:"bars"},i.a.createElement("ul",{className:"skills"},n)))),i.a.createElement("div",{className:"row work"},i.a.createElement("div",{id:"courses",className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Cursos"))),i.a.createElement("div",{className:"nine columns main-col"},l)))}}]),t}(n.Component),f=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={resumeData:{}},u.a.initialize("G-FBHLEHD374"),u.a.pageview(window.location.pathname),n}return Object(s.a)(t,[{key:"getResumeData",value:function(){this.setState({resumeData:d})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,{data:this.state.resumeData.main}),i.a.createElement(g,{data:this.state.resumeData.main}),i.a.createElement(v,{data:this.state.resumeData.resume}),i.a.createElement(h,{data:this.state.resumeData.main}))}}]),t}(n.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(i.a.createElement(f,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-cv",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-cv","/service-worker.js");N?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):y(e)}))}}()},9:function(e){e.exports=JSON.parse('{"main":{"name":"Mauro Dario Luna Ayala","occupation":"Desarrollador Fullstack","description":"Con experiencia en .NET. Buscando una posici\xf3n en la cual pueda trabajar en equipo y seguir capacit\xe1ndome en distintas tecnolog\xedas. No me molesta capacitarme en distintos stack tecnol\xf3gicos por lo contrario esta buenisimo.","image":"/images/profilepic.png","bio":"Quilme\xf1o desde muy chico ya sab\xeda que mi trabajo estar\xeda orientado a la inform\xe1tica. Con estudios secundarios en una escuela t\xe9cnica con orientaci\xf3n en Redes y posteriormente estudios universitarios en La Plata y en la UNAJ. Generalmente haciendo alg\xfan curso en Udemy.","contactmessage":"","email":"mauro.dario.luna.ayala@gmail.com","phone":"11-36179601","address":{"street":"","city":"Berazategui","state":"Buenos Aires","zip":"","country":"Argentina"},"website":"https://mdla.github.io/react-cv/","resumedownload":"/files/cv_mauro_dario_luna_ayala.pdf","social":[{"name":"linkedin","url":"https://ar.linkedin.com/in/mauro-dario-luna-ayala-14102534","className":"fa fa-linkedin"},{"name":"github","url":"https://github.com/mdla/","className":"fa fa-github"},{"name":"skype","url":"https://join.skype.com/invite/yoRh7Inmre5g","className":"fa fa-skype"}]},"resume":{"skillmessage":"Desarrollador Fullstack","education":[{"school":"Universidad de La Plata","degree":"Licenciatura en inform\xe1tica","graduated":"","description":""},{"school":"T\xe9cnica N\xb04 Berazategui","degree":"T\xe9cnico en Inform\xe1tica con Orientaci\xf3n en Redes","graduated":"Diciembre 2007","description":""}],"work":[{"company":"VR4 S.A","title":"Desarrollador Fullstack ","years":"Agosto 2019 - Presente","description":"Mantenimiento de aplicaciones AngularJS. Mantenimiento ASP.NET MVC. Desarrollador RPA utilizando la herramienta UiPath.","technologies":["WebApi","Angular","RPA-UiPath","SQL Server"]},{"company":"Capgemini","title":"Desarrollador Fullstack .NET","years":"Mayo 2018 - Septiembre 2018","description":"Mantenimiento de aplicaciones AngularJS. Mantenimiento servicios web API y WCF.","technologies":["WebApi","Angular","Oracle"]},{"company":"Sistemas Esco","title":"Desarrollador .NET","years":"Mayo 2018 - Septiembre 2018","description":"Mantenimiento de aplicaciones Asp.Net. Implementaci\xf3n de servicios WCF. T-Sql","technologies":["ASP.NET","WCF","WebApi","Angular","Sql Server","T-SQL"]},{"company":"Pragma Consultores","title":"Desarrollador .NET","years":"Marzo 2014 - Junio 2016","description":"Creaci\xf3n desde 0 y mantenimiento de sitios web ASP.NET. Implementaci\xf3n de servicios WCF. Creaci\xf3n de aplicaciones AngularJS para consumos de servicios WCF. Creaci\xf3n de aplicaciones mobile utilizando Phonegap o Ionic.","technologies":["ASP.NET","NHibernate","ionic","Cordova","Angular","Sql Server"]}],"courses":[{"title":"UiPath","description":"Level 1 Fundation - Training","image":"/images/courses/uipath.png","link":"https://mdla.github.io/react-cv/files/Certificacion Oficial - Mauro Dario Luna Ayala.pdf"},{"title":"NodeJS","description":"Conocimientos b\xe1sicos en NodeJS.","image":"/images/courses/node.png","link":"https://platzi.com/@maurolunaayala/curso/1151-nodejs/diploma/detalle/"},{"title":"JAVA SE","description":"Fundamentos JAVA SE","image":"/images/courses/java.png","link":"https://platzi.com/@maurolunaayala/curso/1236-java-avanzado/diploma/detalle/"},{"title":"JAVA EE","description":"Fundamentos JAVA EE","image":"/images/courses/java.png","link":"https://platzi.com/@maurolunaayala/curso/1110-jee/diploma/detalle/"},{"title":"Fundamentos AWS Cloud","description":"Introducci\xf3n a los servicios de Amazon","image":"/images/courses/amazon.png","link":"https://platzi.com/@maurolunaayala/curso/1323-aws-cloud/diploma/detalle/"},{"title":"Azure IaaS","description":"Introducci\xf3n a los servicios de Azure","image":"/images/courses/azure.png","link":"https://platzi.com/@maurolunaayala/curso/1156-azure/diploma/detalle/"},{"title":"Xamarin Forms","description":"Introducci\xf3n a Xamarin Forms","image":"/images/courses/xamarin","link":"https://platzi.com/@maurolunaayala/curso/1314-xamarin-forms/diploma/detalle/"},{"title":"Fundamentos Docker","description":"Manejo b\xe1sico de contenedores","image":"/images/courses/docker.png","link":"https://platzi.com/@maurolunaayala/curso/1432-docker/diploma/detalle/"},{"title":"Conocimientos en Android","description":"Introducci\xf3n a android. Actualmente estudiando flutter","image":"/images/courses/android.png","link":"https://platzi.com/@maurolunaayala/curso/1264-tecnico-android/diploma/detalle/"}],"skills":[{"name":".NET","comments":"Mantenimiento y desarrollo evolutivo","type":"Programing","items":["ASP.NET","WCF","WebApi","Entity Framework"],"level":"60%"},{"name":"Angular","comments":"Mantenimiento de aplicaciones de AngularJs y conocimientos del framework Angular 2+","type":"Programing","level":"55%"},{"name":"RPA","comments":"Desarrollo de RPA utilizando UiPath","type":"Programing","level":"55%"},{"name":"React","comments":"El sitio esta hecho con React.","type":"Programing","level":"60 %"},{"name":"CSS","comments":"Conocimiento b\xe1sicos. Como base siempre utilice algun framework.","type":"Programing","level":"40%"},{"name":"HTML5","type":"Programing","level":"40%"},{"name":"SQLServer","type":"Database","level":"40%"},{"name":"Oracle","type":"Database","level":"40%"}]},"testimonials":[{"image":"/images/fillippo.png","text":"Lorem","user":"Fillippo Marcano"},{"image":"/images/patricio.png","text":"Ipsum","user":"Patricio Cainzos"}]}')}},[[10,1,2]]]);
//# sourceMappingURL=main.a576b37f.chunk.js.map