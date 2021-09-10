<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1  Marcación y líneas de referencia para patrones

    figure(data-aos="fade-in")      
      img(src='@/assets/curso/tema2/img01.png')
      .row
        .col-6
          div(style="background-color:white;position:relative;top:-169px; border-radius: 10px").p-4
            p.mb-0 En el estudio de la figura humana surgieron siluetas de acuerdo a la forma del cuerpo, éstas cuentan con características diferentes en cuanto a proporción y medida, sin embargo, las líneas de configuración geométrica para todos serán iguales encontrando líneas divisorias tanto en forma vertical como horizontal. 

    div.mb-4.py-5(:style="{'background-image': `url(${require('@/assets/curso/tema2/img03.png')})`}")
      SlyderA
        .row.justify-content-center
          .col-lg-10.tema2-div-slider.p-3
            div.BorTit.mb-2
              p.mb-0 <b>Figura</b>: Marcación líneas del cuerpo
            .row.justify-content-center
              .col-lg-5
                figure      
                  img(src='@/assets/curso/tema2/img02.png')
                  figcaption Nota. Tomado de plantilla Pretatemplate.com
              .col-lg-6
                p Estas medidas son llevadas también al cuerpo tanto en forma vertical en los largos, como horizontal en las circunferencias.

        .row.justify-content-center
          .col-lg-10.tema2-div-slider.p-3
            .row.justify-content-center
              .col-lg-6
                div.BorTit.mb-2
                  p.mb-0 <b>Figura</b>: Medida de Largo.             
                figure      
                      img(src='@/assets/curso/tema2/img04.png')
                      figcaption Nota. Elaboración propia en software Optitex           

        .row.justify-content-center
          .col-lg-10.tema2-div-slider.p-3
            div.BorTit.mb-2
              p.mb-0 <b>Figura</b>: Medida de contorno. 
            .row.justify-content-center
              .col-lg-5
                figure      
                  img(src='@/assets/curso/tema2/img05.png')
                  figcaption Nota. Elaboración propia en software Optitex
              .col-lg-5
                p Al encintar el gabarit estamos dividiendo el cuerpo en cuadrantes semejante al trazo en el papel de un patrón base, estas líneas determinan los puntos más importantes a la hora de elaborarlo sin embargo, aquí se traslada al volumen y con bolducs de color diferente a las líneas básicas desde las que se realizan los diseños, como señalar cortes.
        
    #t_2_1.titulo-segundo
      h2 2.1  Estudio de las proporciones y la figura humana. 
    
    .row.justify-content-center
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4
          .row.justify-content-center
            .col-lg-6
              p Las proporciones del cuerpo corresponden a la relación o equilibrio, entre la altura, el ancho y la profundidad de la figura. Estos cánones (sistema de medición de proporciones) han cambiado con el paso de los años, al igual que la concepción de la belleza son subjetivas, fluidas y cambiantes en la historia. Otra función de los cánones es establecer una unidad de medida para dividir el cuerpo en sesiones siendo estas más manejables y medibles; de ahí se trae el “Hombre de Vitruvio” de Leonardo Da Vinci el cual en dos posiciones superpuestas en un cuadrado y un círculo da idea de una medida proporcional. En la actualidad esta proporción está dada por la cabeza de la figura y se cree que tiene entre 7,5 y 8 cabezas de altura. Para el proceso de dividir el gabarit en cuadrantes o sesiones a continuación se determina las medidas para lograrlo.
            .col-lg-6
              figure      
                div.BorTit2.mb-2
                  p.mb-0 <b>Figura</b>: Vitruvio. 
                img(src='@/assets/curso/tema2/img06.png')

    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/img07.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Infografía - Infografía  Estudio de proporciones y figura humana
                  p.text-small Las proporciones del cuerpo corresponden a la relación o equilibrio.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
           

    #t_2_2.titulo-segundo
      h2 2.2   Encintado del gabarit

    .row.mb-5
      .col-lg-6
        p.mb-5 A continuación, se explica el paso a paso para el encintado del <i>gabarit</i>. Véamos.
        h3 Encintado del <i>gabarit</i>
        ul.lista-ul--color.ps-3
          li 
            i.fas.fa-child
            | Los pines deben ir cada 5 cm uno delante del otro.
          li 
            i.fas.fa-child
            | Al colocar el primer pin con el bolduc verificar que este se sostenga girando un poco el pin al introducirlo al maniquí.
          li 
            i.fas.fa-child
            | Todas las intersecciones donde pasan los bolduc se unen con alfileres.
          li 
            i.fas.fa-child
            | Si el bolduc queda levantado por la forma del gabarit se debe pinar.
          li 
            i.fas.fa-child
            | Los pines deben ir ordenados y simétricos a través de los bolduc.
          li 
            i.fas.fa-child
            | Los empalmes de bolduc deben ir en el mismo costado y dobladas las puntas de estos, sobrepuesta una sobre otra simétricamente.
          li 
            i.fas.fa-child
            | Los pines no pueden afectar la estructura del gabarit.
          li 
            i.fas.fa-child
            | El pin debe de estar introducido en su totalidad siguiendo esta la técnica adecuada.
          li 
            i.fas.fa-child
            | Verificar las medidas y que el encintado éste correcto de acuerdo a lo explicado y revisado a través del espejo.
      .col-lg-6
        figure                      
          img(src='@/assets/curso/tema2/img08.png')

    h3 Verificar las medidas y que el encintado éste correcto de acuerdo a lo explicado y revisado a través del espejo.
    p.mb-5 A continuación explicaremos el orden para encintar el <i>gabarit</i>, lo cual facilitará la práctica de este proceso.
    .tarjeta.tarjeta--gris.p-4.mb-5    
      LineaTiempoC.color-acento-botones(text-small)
        div(titulo="Líneas verticales").px-4
          .row.justify-content-center.mb-5
            .col-lg-7
              h3 Líneas verticales
              br
              p.mb-5 Para iniciar el encintado del gabarit es necesrio identificar las líneas que se deben marcar, de tal manera que el procedimiento a realizar sea limpio y cuente con la aplicación de la técnica requerida.
              .cajon.color-secundario.p-4.mb-4
                p.mb-0 Reconocer las líneas será fundamental. Es por ello que para iniciar este ejercicio asumiremos que las líneas se trazaran sobre un gabarit posicionado de lado.
            .col-lg-5
              figure                      
                img(src='@/assets/curso/tema2/img09.svg')

          div(:style="{'background-image': `url(${require('@/assets/curso/tema2/img12.svg')})`}")
            .row.justify-content-center.mb-5
              .col-lg-4
                p.mb-4 Teniendo claras las líneas iniciamos la explicación del proceso paso a paso.
                p.mb-0 Medir el ancho del delantero desde la punta de un hombro a la punta del otro y buscar su punto medio para fijar el punto de inicio, marcar este punto con un pin.
              .col-lg-8
                figure                      
                  img(src='@/assets/curso/tema2/img10.svg')

            .cajon.color-acento-contenido.p-4.mb-4
              .row
                .col-lg-1
                  figure                      
                    img(src='@/assets/curso/tema2/img11.svg')
                .col-lg-11
                  p.mb-0 Se debe estar seguro que la línea de centro del delantero del gabarit está en el centro. Los gabarit en su mayoría son elaborados manualmente y puede ser que la costura del centro del forro no coincida con el aplomo de mitad de cuerpo que se requiere; además el gabarit debe estar en posición totalmente vertical sin desnivel del piso donde se encuentre ya que esto también puede afectar el centro del mismo.

        .row(titulo="Centro frente" :style="{'background-image': `url(${require('@/assets/curso/tema2/img12.svg')})`}").px-4
          .col-lg-7
            p <b>Centro frente</b>: Se inicia a 1 cm de la costura del cuello, doblando el extremo de la cinta, aplicando la técnica correcta para pinar; se aploma amarrando una tijera y dejándola caer hacia el bajo del gabarit. Para la zona del abdomen se debe llevar con el dedo índice hacia el gabarit sin moverlo ni jalar y pinar allí para sostener.
          .col-lg-5
            figure                      
              img(src='@/assets/curso/tema2/img13.svg')

        .row.justify-content-start(titulo="Centro atrás" :style="{'background-image': `url(${require('@/assets/curso/tema2/img12.svg')})`}").px-4
          .col-lg-7
            p <b>Centro atrás</b>: se inicia a 1 cm de la costura del cuello, doblando el extremo de la cinta aplicando la técnica correcta para pinar, aplomar amarrando una tijera y dejar caer hacia el bajo como se hizo en el delantero, al igual en la cintura con la ayuda del dedo índice llevarlo hacia el gabarit si mover o estirar; pinar en este punto.
          .col-lg-3
            figure                      
              img(src='@/assets/curso/tema2/img14.svg')

        .row.justify-content-start(titulo="Costado" :style="{'background-image': `url(${require('@/assets/curso/tema2/img12.svg')})`}").px-4
          .col-lg-8
            p <b>Costado</b>: para la medida de los laterales se pinara un solo bolduc desde el hombro uniéndolo en la punta del acromion, luego medir a partir de la línea del centro delantero y de espalda la mitad de estos dos resultando la medida de costado. Marcarla con un pin para luego pegar allí el bolduc.
          .col-lg-1
            figure                      
              img(src='@/assets/curso/tema2/img15.svg')

        .row.justify-content-start(titulo="Líneas de bretel delanteras" :style="{'background-image': `url(${require('@/assets/curso/tema2/img12.svg')})`}").px-4
          .col-lg-8
            p <b>Líneas de bretel delanteras</b>: Se toma la mitad del hombro e iniciar doblando el extremo de la cinta y pinar tensando hasta el pívot (punto más alto del busto).  La medida para separación de busto es de 9,0 cm, tomados a partir de la línea centro frente. Tensar hasta la cintura aplicando 7,0 cm a partir de la línea de centro frente y pinar; aplicar la mitad entre línea centro frente y costado y pinar; tensar hasta la cadera y tomar la mitad entre línea centro frente y costado y pinar; tensar luego hasta el bajo doblando el extremo de la cinta, tomar la mitad entre línea centro frente y costado y pinar.
          .col-lg-2.px-4
            figure                      
              img(src='@/assets/curso/tema2/img16.svg')

        div(titulo="Líneas de bretel posteriores" :style="{'background-image': `url(${require('@/assets/curso/tema2/img12.svg')})`}").px-4
          p.mb-4 <b>Líneas de bretel posteriores</b>: Se realiza el mismo procedimiento que en el delantero pero hacia la espalda.          
          .row.justify-content-center
            .col-lg-2
                figure                      
                    img(src='@/assets/curso/tema2/img16.svg')

        div(titulo="Líneas horizontales" :style="{'background-image': `url(${require('@/assets/curso/tema2/img12.svg')})`}").px-4
          h4 Líneas horizontales 
          p.mb-4 <b>Contornos y anchos</b>
          p.mb-5 Para efectos de esta explicación tendremos como base la imagen de una figura humana en posición frontal y explicaremos las líneas que se encintarán. Veámos:
          .row.justify-content-center
            .col-lg-6
                figure                      
                    img(src='@/assets/curso/tema2/img17.svg')

        div(titulo="Cintura" :style="{'background-image': `url(${require('@/assets/curso/tema2/img12.svg')})`}").px-4
          p.mb-4 <b>Cintura</b>: en la parte más estrecha del gabarit, se debe tener cuidado que alrededor de este quede simétrica en todo su contorno.
          .row.justify-content-center
            .col-lg-2
                figure                      
                    img(src='@/assets/curso/tema2/img18.svg')
            
        div(titulo="Cadera" :style="{'background-image': `url(${require('@/assets/curso/tema2/img12.svg')})`}").px-4
          p.mb-4 <b>Cadera</b>: a 20 cm del bolduc de la cintura al igual que esta cuidar de que quede simétrica.
          .row.justify-content-center
            .col-lg-2
                figure                      
                    img(src='@/assets/curso/tema2/img19.svg')

        div(titulo="Cadera" :style="{'background-image': `url(${require('@/assets/curso/tema2/img12.svg')})`}").px-4
          p.mb-4 <b>Cadera</b>: a 20 cm del bolduc de la cintura al igual que esta cuidar de que quede simétrica.
          .row.justify-content-center
            .col-lg-2
                figure                      
                    img(src='@/assets/curso/tema2/img20.svg')

        div(titulo="Pecho" :style="{'background-image': `url(${require('@/assets/curso/tema2/img12.svg')})`}").px-4
          p.mb-4 <b>Pecho</b>: a 1” pulgada de la sisa- costado pasando por la parte más plana del pecho.
          .row.justify-content-center
            .col-lg-2
                figure                      
                    img(src='@/assets/curso/tema2/img21.svg')

        div(titulo="Línea submamario" :style="{'background-image': `url(${require('@/assets/curso/tema2/img12.svg')})`}").px-4
          p.mb-4 <b>Línea submamario</b>: a 9.0 cm del pívot hacia la cintura
          .row.justify-content-center
            .col-lg-2
                figure                      
                    img(src='@/assets/curso/tema2/img22.svg')

        div(titulo="Sisa" :style="{'background-image': `url(${require('@/assets/curso/tema2/img12.svg')})`}").px-4
          p.mb-4 <b>Sisa</b>: a 1 cm de la tapa del brazo; en la línea de profundidad de sisa marcar 1 pulgada. 
          .row.justify-content-center
            .col-lg-2.px-5
                figure.mb-4                      
                    img(src='@/assets/curso/tema2/img23.svg')
          .cajon.color-acento-contenido.p-4.mb-4
              .row
                .col-lg-1
                  figure                      
                    img(src='@/assets/curso/tema2/img11.svg')
                .col-lg-11
                  p.mb-0 Nota: en sisas y cuello la distancia entre pin y pin es de 1,5 cm por ser trayectorias mucho más pequeñas y por ser circunferencias para que el bolduc no quede levantado o sobresalga del gabarit.
                  p Hombro: a 1 cm del cuello y 1 cm de la tapa del brazo.
              .row.justify-content-center
                .col-lg-2.px-5
                    figure                      
                        img(src='@/assets/curso/tema2/img24.svg')

        div(titulo="Cuello" :style="{'background-image': `url(${require('@/assets/curso/tema2/img12.svg')})`}").px-4
          p.mb-4 <b>Cuello</b>: a 1 cm de la costura de cuello marcar todo el contorno.
          .row.justify-content-center
            .col-lg-2.px-5
                figure.mb-4                     
                    img(src='@/assets/curso/tema2/img25.svg')
          .cajon.color-acento-contenido.p-4.mb-4
              .row
                .col-lg-1
                  figure                      
                    img(src='@/assets/curso/tema2/img11.svg')
                .col-lg-11
                  p.mb-0 Nota: en sisas y cuello la distancia entre pin y pin es de 1,5 cm por ser trayectorias mucho más pequeñas y por ser circunferencias para que el bolduc no quede levantado o sobresalga del gabarit.
                  p Hombro: a 1 cm del cuello y 1 cm de la tapa del brazo.
              .row.justify-content-center
                .col-lg-2.px-5
                    figure                      
                        img(src='@/assets/curso/tema2/img26.svg')
          
</template>

<script>
export default {
  name: 'Tema2',
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
