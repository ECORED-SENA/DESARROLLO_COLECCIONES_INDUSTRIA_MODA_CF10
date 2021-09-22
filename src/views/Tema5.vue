<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1  Industrialización de patrones

    div(style="background-color: #F2D7E3").p-5.mb-5 
      .row.justify-content-center                 
        .col-lg-7
          p.mb-4 La codificación de los patrones donde se utilizan símbolos y señalización es conocido como industrialización de patrones. Esta identificación se realiza en cada patrón con convenciones y simbología propia, donde se da toda la información del patrón, entre la cual se encuentran: el nombre de la pieza y del diseño, la talla, el número de veces a cortar para cada prenda (si este pertenece a un grupo de piezas se marcará cada una con un consecutivo para su identificación), el código o referencia del patrón, los materiales en los que se debe elaborar la prenda, la fecha de elaboración del patrón, la firma del patronista y el más importante de todos el hilo de la tela el cual dará el sentido de colocación del patrón sobre la tela a la hora de cortarlo; esto es, el sentido: si es horizontal, vertical o al sesgo o bies. 
          p.mb-0 Además de los símbolos las marcaciones incluyen muescas o piquetes, la ubicación de ojales y botones, los puntos internos de ubicación de recogidos, o de otras piezas que van en conjunto como bolsillos o apliques.
        .col-lg-5
          figure                      
            img(src='@/assets/curso/tema5/img01.svg')

    .row
      .col-lg-6.d-flex       
          .cajon.color-acento-contenido.p-4.mb-4
            div.BorTit.mb-2
              h4.mb-0 Figura 8 
              p.mb-0 Industrialización de patrones.
            .row.justify-content-center    
              .col-lg-7
                figure                      
                  img(src='@/assets/curso/tema5/img02.png')
                  figcaption.mt-2 Nota. Tomado de Trazo, corte y confección de la falda clásica (SENA, 2014).
      .col-lg-6.d-flex      
        .cajon.color-secundario.p-4.mb-4
          p.mb-5 Toda la información que facilite la ágil interpretación y codificación del patrón se debe incluir, ya que ningún detalle se puede pasar por alto, debido a que la finalidad es que toda persona que tome el <i>toile</i> lo pueda interpretar desde su desarrollo hasta llevar al corte y confección de este.
          div.BorTit.mb-2
            h4.mb-0 Figura 9 
            p.mb-0 Industrialización de patrones.
          .row.justify-content-center    
            .col-lg-6
              figure                      
                img(src='@/assets/curso/tema5/img03.png')
                figcaption.mt-2 Nota. Tomado de docplayer.es
          
          


</template>

<script>
export default {
  name: 'Tema5',
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
