<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-segundo
      h2 Prueba tu conocimiento
    .row.mb-5.justify-content-center.align-items-center
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0.mb-lg-5(data-aos="fade-right")
        .tarjeta.tarjeta--azul.h-100.d-flex.align-items-center
          figure.px-lg-4
            img.px-lg-5.py-lg-4(src="@/assets/curso/actividad-didactica1.svg", alt="Prueba tu conocimiento")
      .col-12.col-md-8.col-lg-9.mb-lg-5(data-aos="fade-left")
        .col-lg-6
          p.mb-4.mb-lg-5 Comprobar el nivel de conocimiento de los diferentes tipos de herramientas.
        .tarjeta.tarjeta--verde.p-2
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0.px-lg-2 Prueba tu conocimiento
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad1.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece


    .titulo-segundo
      h2 Área de trabajo
    .row.mb-5.justify-content-center.align-items-center
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta.tarjeta--azul.h-100.d-flex.align-items-center
          figure.px-lg-4
            img.px-lg-5.py-lg-5(src="@/assets/curso/actividad-didactica2.svg", alt="Área de trabajo")
      .col-12.col-md-8.col-lg-9(data-aos="fade-left")
        .col-lg-6
          p.mb-4.mb-lg-5 Comprobar el nivel de comprensión en la organización del área de trabajo.
        .tarjeta.tarjeta--verde.p-2
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0.px-lg-2 Área de trabajo
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad2.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece            

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass" scoped></style>
