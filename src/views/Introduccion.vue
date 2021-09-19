<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-4 En la técnica de patronaje se realizan trazados bidimensionales los cuales llevan a determinar una serie de trazos las cuales unidos entre sí conforman áreas del cuerpo con sus medidas creando el patrón base que al transformarse a través de cortes o de aplique permite el desarrollo de nuevas prendas.
        br 
        br
        p.mb-0 Es dentro de la técnica en donde el drapeado se convierte en un proceso vital para el desarrollo de la colección, es por ello que en este componente formativo se profundizará en la explicación de la técnica y el paso a paso para que las creaciones resultantes sean agradables, llamativas y únicas, en pocas palabras… llegó el momento de hacer creaciones de lujo. ¡Bienvenidos!

    .row.justify-content-center
      .col-lg-10
        figure
          .video            
            iframe(width="1280" height="720" src="https://www.youtube.com/embed/kzgBaXxvf9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      Separador
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
