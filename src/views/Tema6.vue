<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1  Escalado de patrones
    
    .row.mb-4.justify-content-center    
      .col-lg-10
        div.py-5(:style="{'background-image': `url(${require('@/assets/curso/tema6/img01.png')})`}")
          .row.justify-content-end  
            .col-lg-5
              br
              br
              p.text-end(style="color:white") La gradación o escalado es la técnica que permite, a partir de un modelo dado llamado patrón base, trazar patrones de tallas superiores e inferiores a éste, siendo los patrones resultantes idénticos al base, pero de tallas y medidas diferentes.  Para el escalado de las piezas en modelado sobre gabarit no se diferencia del escalado convencional plano ya que se utiliza la misma técnica estando al tanto de cuanto crece o decrece entre ellos los incrementos del cuadro de tallas.
              br
              br
            .col-lg-1

    div.tema6-div1.mb-4.py-5(:style="{'background-image': `url(${require('@/assets/curso/tema6/img02.png')})`}")
      SlyderA
        .row.justify-content-center
          .col-lg-10.tema6-div-slider.p-3
            .row.justify-content-center
              .col-lg-3
                div.BorTit.mb-2
                  p.mb-0 <b>Figura</b>: Escalado.
            .row.justify-content-center
              .col-lg-12
                figure.mb-5      
                  img(src='@/assets/curso/tema6/img03.png')
                  figcaption Nota.  Elaboración propia Software Optitex
        .row.justify-content-center
          .col-lg-10.tema6-div-slider.p-3
            .row.justify-content-center
              .col-lg-7.d-flex.align-items-center
                p El escalado parte de unos ejes, que, para las prendas superiores, serán las líneas de centro del frente y el centro espalda como ejes verticales, y como eje horizontal se emplea la línea o altura de sisa. El eje se comporta como centro del escalado, manteniéndose inmóvil.  
              .col-lg-4
                div.BorTit.mb-2
                  p.mb-0 <b>Figura</b>: Escalado.
                figure.mb-5 
                  img(src='@/assets/curso/tema6/img04.png')
                  figcaption Nota.  Tomado de Escalado (A. Gaviria, 2018)
              .col-lg-1
        .row.justify-content-center
          .col-lg-10.tema6-div-slider.p-3
            .row.justify-content-center
              .col-lg-7.d-flex.align-items-center
                p En las partes inferiores (pantalones) el eje vertical se ubica en la línea de aplome y el eje horizontal a la altura de cadera o tiro; creciendo y decreciendo horizontalmente hacia los costados, tiro y entrepierna y verticalmente hacia la cintura y la bota.
              .col-lg-3
                div.BorTit.mb-2
                  p.mb-0 <b>Figura</b>: Escalado.
                figure.mb-5 
                  img(src='@/assets/curso/tema6/img05.png')
                  figcaption Nota.  Tomado de Escalado (A. Gaviria, 2018)
              .col-lg-1
        .row.justify-content-center
          .col-lg-10.tema6-div-slider.p-3
            .row.justify-content-center
              .col-lg-7.d-flex.align-items-center
                p Para escalar es muy importante tener en cuenta estos ejes y sobre estos trazar un plano cartesiano en cada punto a escalar, para luego aplicar la medida (según incrementos en tabla de medidas) hacia afuera (en tallas mayores) y hacia adentro (en tallas menores), manteniendo las proporciones y curvas del patrón base o inicial.
              .col-lg-4
                div.BorTit.mb-2
                  p.mb-0 <b>Figura</b>: Escalado - posición de las escuadras para trazar los planos cartesianos en puntos de prendas superiores
                figure.mb-5.px-4 
                  img(src='@/assets/curso/tema6/img06.png')
                  figcaption Nota.  Tomado de Escalado (A. Gaviria, 2018)
        .row.justify-content-center
          .col-lg-10.tema6-div-slider.p-3
            .row.justify-content-center              
              .col-lg-6
                div.BorTit.mb-2
                  p.mb-0 <b>Figura</b>: Escalado - posición de las escuadras para trazar los planos cartesianos en puntos de prendas superiores
            .row.justify-content-center              
              .col-lg-3                
                figure.mb-5 
                  img(src='@/assets/curso/tema6/img07.png')
                  figcaption Nota.  Tomado de Escalado (A. Gaviria, 2018)
        .row.justify-content-center
          .col-lg-10.tema6-div-slider.p-3
            .row.justify-content-center
              .col-lg-7.d-flex.align-items-center
                p Enseguida se presenta un ejemplo en el que se explica gráficamente el escalado del punto de hombro por sisa (hombro x sisa), con unos valores de 0.84 cm en X y 0.76 cm en Y (los cuales dependen de cada punto y de la tabla de medidas con la que se trabaje), como se aprecia en la figura:
              .col-lg-4
                div.BorTit.mb-2
                  p.mb-0 <b>Figura</b>: Escalado - ejemplo de escalado del punto hombro por sisa
                figure.mb-5.px-4 
                  img(src='@/assets/curso/tema6/img08.png')
                  figcaption Nota.  Tomado de Escalado (A. Gaviria, 2018)

    .bloque-texto-d.color-acento-contenido.p-4(style="border-top: 2px solid #FF4A69")
        .bloque-texto-d__texto.mb-2
          i.fas.fa-quote-left(style="color:#F56D85")
          h3.text-regular Como se observa en la figura anterior, se marcó el plano cartesiano sobre el punto y en cada uno de los ejes la medida correspondiente (0.84 cm en X y 0.76 cm en Y), para luego prolongar paralelamente estas líneas formando una retícula o cuadrícula, en la que se identifican cada uno de los puntos de cruces de las tallas. Teniendo como referencias cada uno de estos puntos se traza cada talla utilizando el molde base. 
          i.fas.fa-quote-right(style="color:#F56D85")
        .bloque-texto-d__autor 
          p <b>(Carrera de Diseño y Gestión en Moda, 2015; A. Gaviria, 2018)</b>          
             
</template>

<script>
export default {
  name: 'Tema6',
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

<style lang="sass" scoped></style>
