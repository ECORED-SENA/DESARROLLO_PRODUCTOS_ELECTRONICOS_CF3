<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Entorno de trabajo

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema1.png", alt="Entorno de trabajo")   
  
    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        .bloque-texto-x
          .bloque-texto-x__img
          .bloque-texto-x__contenido
            .bloque-texto-x__texto.p-4
              p El entorno de trabajo es un aspecto muy importante a tener en cuenta cuando de hacer un buen diagnóstico se trata. Se deben considerar los posibles accidentes y enfermedades laborales que se puedan presentar, es el primer paso para evitarlos, de ahí la necesidad de aplicar las normas de seguridad y salud en el trabajo.
      
    Separador  

    // 1.1
    #t_1_1.titulo-segundo(data-aos="fade-right")
      .h2 1.1.  Procedimientos de alistamiento del área de trabajo

    p.mb-5(data-aos="fade") Cuando se analiza el entorno de trabajo, es necesario pensar en lo que no se puede ver, ya que diversos aspectos pueden causar un accidente. La siguiente figura presenta algunos de estos puntos a considerar.  

    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.mb-0
            strong Figura 1. 
            | Aspectos que pueden causar un accidente



    Separador  


    // 1.2
    #t_1_2.titulo-segundo(data-aos="fade-right")
      .h2 1.2.  Normas de seguridad y salud en el trabajo

    .row.align-items-center
      .col-lg-5.mb-4(data-aos="fade-right")
        h4 La Resolución 5018 de 2019 expide los lineamientos de seguridad y salud en el trabajo para las actividades ejecutadas en los procesos de transformación de energía.
      .col-lg-7.mb-4(data-aos="fade-left")
        p Cuando se trabaja con equipos electrónicos, definitivamente, el mayor riesgo es sufrir una descarga eléctrica; dependiendo de la corriente recibida, esta descarga puede ser perjudicial para el cuerpo humano. A continuación, se presentan algunas normas de seguridad. Se invita a revisarlas.

    .row.justify-content-center.bg-color1.p-lg-5.p-1.mb-4
      .col-lg-8.col-12
        ImagenInfografica.color-acento-contenido

          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1-2-figura1.svg', alt='Normas de seguridad y salud en el trabajo')

          .tarjeta.color-acento-contenido.p-3(x="-2%" y="74%")
            p Es obligatorio utilizar 
              strong zapatos dieléctricos. 
              | Estos evitan el contacto directo con la tierra, ya que a través de ella se genera la descarga eléctrica. En algunos casos, deben estar acompañados del uso de 
              strong guantes aislantes y gafas 
              | que protejan en caso de producirse una chispa. 

          .tarjeta.color-acento-contenido.p-3(x="85%" y="8%")
            p No se deben llevar objetos de metal mientras se trabaja con electricidad: cadenas, relojes o anillos pueden ocasionar un cortocircuito o producir un arco eléctrico. El metal es un excelente conductor de la electricidad, por lo que, en caso de contacto, se produce una descarga muy peligrosa. Es necesario utilizar 
              strong ropa ajustada 
              | para evitar contactos y caídas.

          .tarjeta.color-acento-contenido.p-3(x="69%" y="34%")
            p Los equipos se deben trabajar, preferiblemente, sin suministro de energía. 
              strong Hay que evitar trabajar con electricidad en lugares húmedos o cerca de líquidos. 
              | Analizar el circuito, las conexiones, composición y las características del equipo antes de comenzar a trabajar, de esta manera se mide el peligro y se establecen las normas de seguridad.

          .tarjeta.color-acento-contenido.p-3(x="67%" y="96%")
            p Cuando se trabaja con la fuente de poder del equipo, en lo posible, se entra en contacto con los circuitos utilizando 
              strong una sola mano, 
              | ya que, si se utilizan las dos y se recibe una descarga, la corriente eléctrica pasa de una mano a la otra, afectando el corazón.

          .tarjeta.color-acento-contenido.p-3(x="18%" y="8%")
            p Las herramientas se deben usar de manera responsable. En la actualidad, existe todo tipo de materiales auxiliares. Sin embargo, en ocasiones se utilizan herramientas para fines para los que no están diseñadas. Se debe 
              strong utilizar un equipo completo de herramientas y sin correr riesgos.

          .tarjeta.color-acento-contenido.p-3(x="96%" y="73%")
            p En los talleres donde se trabaja con electricidad, es importante que se sigan, cumplan y respeten algunas normas de seguridad básicas para prevenir riesgos y accidentes. Estas son medidas que se deben seguir para  proteger la salud, mejorar la seguridad en los procesos productivos y anticipar accidentes o disminuir los riesgos laborales, minimizando peligros. Se recomienda siempre 
              strong usar equipos o herramientas adecuadas de protección personal o individual, 
              | como gafas, casco, botas, overol y guantes especiales, de acuerdo con la actividad que se desarrolle. Igualmente, la seguridad y la salud laboral son primordiales antes, durante y al finalizar cualquier práctica laboral o académica. Por tanto, se deben usar las herramientas pertinentes, de forma segura, en el taller o laboratorio.

    .row.align-items-center
      .col-lg-7.mb-4(data-aos="fade-right")
        p Ahora bien, en los talleres donde se trabaja con electricidad, es importante que se sigan, cumplan y respeten algunas normas de seguridad básicas para prevenir riesgos y accidentes. Estas son medidas que se deben seguir para proteger la salud, mejorar la seguridad en los procesos productivos y anticipar accidentes o disminuir los riesgos laborales minimizando peligros. 
        p Se recomienda 
          strong usar siempre equipos o herramientas adecuadas de protección personal o individual, como gafas, casco, botas, overol y guantes especiales, de acuerdo con la actividad que se desarrolle. 
          | Igualmente, la seguridad y la salud laboral son primordiales antes, durante y al finalizar cualquier práctica laboral o académica. Por tanto, se deben usar las herramientas pertinentes, de forma segura, en el taller o laboratorio.
      .col-lg-5.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1-2-img1.jpg", alt="Imagen decorativa")  

    p.mb-5(data-aos="fade") Entre estas normas básicas, se tienen las siguientes:

    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.mb-0
            strong Figura 2. 
            | Normas básicas

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped>
.bloque-texto-x
  display: flex
  &__img
    flex: 1 0 50%
    background-image: url(../assets/curso/tema1-imagen.jpg)
    background-size: cover
  &__contenido
    background-color: $color-primario
    padding: 40px
    flex: 1 0 50%
  &__texto
    margin-left: -30%
    background-color: $white

  @media (max-width: $bp-max-md)
    flex-wrap: wrap
    &__img, &__contenido
      flex: 1 0 100%
    &__img
      padding-top: 62%
    &__contenido
      padding: 30px
    &__texto
      margin-left: 0
</style>
