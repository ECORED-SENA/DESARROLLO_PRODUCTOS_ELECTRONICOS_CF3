(function(e){function a(a){for(var o,i,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==t[c]&&(o=!1)}o&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"d3680f3c","chunk-0206bfa0":"c8eca6b0","chunk-04b93936":"19962711","chunk-13a6037e":"e70b0d86","chunk-16015154":"528758fb","chunk-17977988":"e043ddd8","chunk-2c06842c":"49f97516","chunk-2d208d90":"b1951bef","chunk-2d21d0e2":"ec9deb6d","chunk-2d22c123":"26bf68ea","chunk-2e80bb9a":"b72b0393","chunk-3145fe0f":"16ac1e17","chunk-328f70dd":"607e3ec3","chunk-3807499c":"659230ca","chunk-3dc647fd":"474c5e0d","chunk-4cdd78c0":"30688809","chunk-4fde0a08":"df5970a3","chunk-515a8379":"3ba89bb5","chunk-53ccb27e":"3ec78acf","chunk-59974754":"2ae8accf","chunk-766a929b":"f2ca5b3f","chunk-839300a6":"d9344c31","chunk-c796899c":"040d5dbc","chunk-dbb9869e":"d34777af",comple:"5673f9ca",creditos:"75db24ed",glosario:"aaa14373",intro:"2f6fac89",referencias:"82f13264",tema1:"46206d5e",tema2:"80126014",tema3:"450fd8aa"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3dc647fd":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,"chunk-dbb9869e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1,tema1:1,tema2:1,tema3:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4fde0a08":"5d24a906","chunk-515a8379":"f5699731","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"25b41329","chunk-766a929b":"239be14b","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0","chunk-dbb9869e":"d035a47c",comple:"43f7cec7",creditos:"cdcc8562",glosario:"b2bc067c",intro:"3c116dfa",referencias:"659b3526",tema1:"a6e41149",tema2:"f4403cf1",tema3:"021afde8"}[e]+".css",t=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===o||d===t)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var o=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],f.parentNode.removeChild(f),n(r)},f.href=t;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=t[e]=[a,n]}));a.push(o[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(f);var n=t[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}t[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var f=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=n("2877"),l=Object(s["a"])(c,i,t,!1,null,null,null),d=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),f=n("8c4f"),m=n("ae58"),p=n("7e58");u["a"].use(f["a"]);var h=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Diagnóstico de circuitos electrónicos",descripcionCurso:"En este componente formativo se tratan conceptos relacionados con las herramientas utilizadas en el diagnóstico de circuitos electrónicos, su uso adecuado, normas aplicadas y los insumos necesarios para emitir un concepto acertado del estado de un producto electrónico.",imagenBannerPrincipal:n("bce2"),fondoBannerPrincipal:n("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Entorno de trabajo",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Procedimientos de alistamiento del área de trabajo",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Normas de seguridad y salud en el trabajo",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Condiciones técnicas, térmicas y atmosféricas que pueden influir según el tipo de equipo",hash:"t_1_3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Procedimientos de aprovisionamiento y solicitud",hash:"t_1_4"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Herramientas y equipos",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Tipos",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Clasificación",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Características",hash:"t_2_3"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Insumos",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Tipos",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Clasificación",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Almacenamiento",hash:"t_3_3"}]}],subMenu:[{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"ABC Pack. (s. f.). Espuma antiestática.",link:"https://www.abc-pack.com/productos/espuma-antiestatica/"},{referencia:"Biegelmeier, G. (1986). Efectos de la corriente eléctrica en humanos y ganado. VDE."},{referencia:"Handskit. (s. f.). Handskit Soldering Iron Kit.",link:"http://www.handskit.com/enproductslist.asp?id=675"},{referencia:"National Instruments [NI]. (s. f.). NI ELVIS III.",link:"https://www.ni.com/es-co/support/model.ni-elvis-iii.html"},{referencia:"Pallás, R. (2007). Instrumentos electrónicos básicos. Alfaomega."},{referencia:"Real Academia Española. (2020). Definición de electrostático, ca.",link:"https://dle.rae.es/electrost%C3%A1tico"},{referencia:"Renishaw. (2020). Ficha técnica. Advanced Diagnostic Tool ADTi-100.",link:"https://www.renishaw.es/media/pdf/en/49ad60e539354f58b85a10aabea009cb.pdf"},{referencia:"Resolución 181294 de 2008. [Ministerio de Minas y Energía]. Por la cual se modifica el Reglamento Técnico de Instalaciones Eléctricas - RETIE. Agosto 6 de 2008.",link:"https://normograma.info/ssppdd/docs/resolucion_minminas_181294_2008.htm"},{referencia:"Resolución 5018 de 2019. [Ministerio del Trabajo]. Por la cual se establecen lineamientos en Seguridad y Salud en el trabajo en los Procesos de Generación, Transmisión, Distribución y Comercialización de la Energía Eléctrica. Noviembre 20 de 2019."},{referencia:"Wikipedia. (2019). Energía específica.",link:"https://es.wikipedia.org/wiki/Energ%C3%ADa_espec%C3%ADfica"}],glosario:[{termino:"Diagnóstico",significado:"Recoger y analizar datos para evaluar problemas de diversa naturaleza. (Real Academia Española, 2020)"},{termino:"Electrostática",significado:"Rama de la física que estudia los sistemas de cuerpos electrizados en equilibrio. f. Electr. Redistribución de las cargas eléctricas en un conductor por la acción de un campo eléctrico exterior. (Real Academia Española, 2020)"},{termino:"Energía específica",significado:"La energía específica es la energía por unidad de masa. Se utiliza para cuantificar, por ejemplo, el calor almacenado u otras propiedades termodinámicas de sustancias. (Wikipedia, 2019)"},{termino:"Estaño",significado:"Elemento químico metálico, de número atómico 50, de color y brillo plateados, que se emplea para recubrir otros metales, en el envasado de alimentos y en soldaduras, y que, aleado con el cobre, forma el bronce. (Símb. Sn). (Real Academia Española, 2020)"},{termino:"Multímetro",significado:"m. Electr. Instrumento que permite medir varias magnitudes eléctricas, como la intensidad, la tensión y la resistencia. (Real Academia Española, 2020)"},{termino:"Osciloscopio",significado:"m. Electr. Aparato provisto de una pantalla y que sirve para representar en ella magnitudes físicas que varían rápidamente. (Real Academia Española, 2020)"}],complementario:[{texto:"Resolución 5018 de 2019. [Ministerio del Trabajo]. Por la cual se establecen lineamientos en Seguridad y Salud en el trabajo en los Procesos de Generación, Transmisión, Distribución y Comercialización de la Energía Eléctrica. Noviembre 20 de 2019",tipo:"Texto",link:"https://safetya.co/normatividad/resolucion-5018-de-2019/"},{texto:"Renishaw. (s. f.). Advanced Diagnostic Tools (ADT).",tipo:"Hoja de datos",link:"https://www.renishaw.es/es/advanced-diagnostic-tools-adt--38358"},{texto:"National Instruments Corp.",tipo:"Sitio web",link:"https://www.ni.com/es-co/"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Gewin Alfonso Fernández Cáceres",cargo:"Instructor",centro:"Centro Nacional Colombo Alemán <br>Regional Atlántico"},{nombre:"Miroslava González Hernández",cargo:"Diseñador y evaluador instruccional",centro:"Centro de Gestión Industrial <br>Regional Distrito Capital"},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Evaluador instruccional",centro:"Centro de Gestión Industrial <br>Regional Distrito Capital"},{nombre:"Darío González",cargo:"Revisión y corrección de estilo",centro:"Centro Agropecuario La Granja <br>Regional Tolima"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios <br>Regional Tolima"},{nombre:"Juan Carlos Tapias Rueda",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Andrea Paola Botello De la Rosa",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Yenny Patricia Ulloa Villamizar",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios <br>Regional Tolima"}]}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:b,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.1.0","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},bce2:function(e,a,n){e.exports=n.p+"img/banner-principal.4051b6fe.svg"},e6b0:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.56757be9.png"}});
//# sourceMappingURL=app.cd0b41a0.js.map