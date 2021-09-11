<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 8
      h1 Elaboración y Desarrollos de propuestas
    
    .row.justify-content-center.mb-5
      .col-lg-6
        .cajon-b.color-acento-contenido.p-3.mb-5
          p.mb-0 Para el desarrollo del drapeado se requiere de un buen sentido de la observación para manipular los tejidos con los que se va a diseñar y así descubrir todas las posibilidades creativas, técnicas y entender sus posibles limitaciones. Al crear se puede tener una idea clara de lo que se quiere, sin embargo, el resultado final podría no ser lo esperado; es por ello, que uno de los factores más importantes consiste en el manejo del tejido sobre el <i>gabarit </i> de forma correcta, para lo que será determinante tener seguridad de las características de la materia prima a utilizar, para lo cual es recomendable utilizar un tejido similar al que se va emplear en la confección del diseño final para que no surjan variaciones inesperadas en el resultado. Esto determina las formas y decisiones sobre el diseño que se va a crear. 
          br
          br
          p.mb-0 Ahora se verán algunas técnicas de tradición y contemporáneas s para lograr efectos sobre el <i>gabarit </i>.
      .col-lg-6
        .row.justify-content-center
          .col-lg-4
            div.BorTit.mb-2
              p.mb-0 <b>Figura</b>: <i>Propuestas.</i>
          figure.mb-5
            img(src='@/assets/curso/tema8/img01.png')

    #t_8_1.titulo-segundo
      h2 8.1  Estudio de las proporciones y la figura humana. 

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema8/img02.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La manipulación de tejidos se crea utilizando costuras a mano para crear áreas de tensión y liberación en la tela dando como resultado efectos muy esculturales que a veces pueden parecer mucho más complejos de lo que realmente son. Algunos de ellos se realizan donde se ha marcado el tejido con una cuadrícula que se ha unido a la parte posterior de la tela. Una vez que se forman las manipulaciones, estas se giran hacia arriba y fijarlas en su posición en una mesa acolchada o en una tabla de planchar. Luego, se deberá vaporizar suavemente la tela y dejar que se seque en su posición para ayudar a fijar la forma del tejido. Se verán algunos ejemplos y técnicas y manejo a continuación.

    div.tema8-div1.mb-5.py-5(:style="{'background-image': `url(${require('@/assets/curso/tema7/img02.svg')})`}").border      
      SlyderA
        .row.justify-content-center
          .col-lg-10.tema6-div-slider.p-3
            .tabla-a.color-acento-botones
              table
                thead
                  tr
                    th Uso
                    th Muestra
                    th Descripción de uso y técnicas                
                tbody
                  tr
                    td.text-center <b>Fruncidos</b>
                    td
                      br
                      br
                      br
                      figure
                        img(src='@/assets/curso/tema8/img03.png')  
                      br
                      br
                      br
                    td El fruncido vertical ceñido es una de las técnicas más dedicadas a manipulación en <i>gabarit </i> ya que la tela se plisa de forma delgada uno a uno de los pliegues de forma consistente y uniforme y al tiempo se fija a mano con aguja e hilo.
        .row.justify-content-center
          .col-lg-10.tema6-div-slider.p-3
            .tabla-a.color-acento-botones
              table
                thead
                  tr
                    th Uso
                    th Muestra
                    th Descripción de uso y técnicas                
                tbody
                  tr
                    td.text-center <b>Fruncidos</b>
                    td.px-5                    
                      br
                      br
                      figure
                        img(src='@/assets/curso/tema8/img04.png')  
                      br
                      br                      
                    td El fruncido tipo capitoné se realiza marcando la tela en cuadros y con esta cuadrícula se crea el patrón. Por medio de flechas o líneas describen dónde se cose una puntada para unir la tela o dónde se dejará el hilo flojo con esta técnica se trabajan rizados, <i>Lattice</i>, boxes, punto <i>smocking</i> y <i>tucking</i> o tintados.<br><br>Este trabajo se hace por el revés de la tela y el volumen o <i>smocking</i> se ve al derecho de está creando la forma. Cuando no se tiene el patrón y simplemente se produce la arruga a través de la aguja y el hilo recogiendo la tela tiene el nombre de encarrujados.

        .row.justify-content-center
          .col-lg-10.tema6-div-slider.p-3
            .tabla-a.color-acento-botones
              table.mb-5  
                thead
                  tr
                    th Uso
                    th Muestra
                    th Descripción de uso y técnicas                
                tbody
                  tr
                    td.text-center <b>Fruncidos</b>
                    td
                      figure
                        img(src='@/assets/curso/tema8/img05.png')  
                    td 
        .row.justify-content-center
          .col-lg-10.tema6-div-slider.p-3
            .tabla-a.color-acento-botones
              table.mb-5  
                thead
                  tr
                    th Uso
                    th Muestra
                    th Descripción de uso y técnicas                
                tbody
                  tr
                    td.text-center <b>Pliegues, plisados, tablas, dobleces alforzas, prenses</b>
                    td
                      br
                      br
                      br
                      figure
                        img(src='@/assets/curso/tema8/img06.png')  
                      br
                      br
                      br
                    td Otra de las manipulaciones del material son los pliegues, plisados, tablas, dobleces, alforzas y prenses donde el tejido se dobla del mismo ancho y con la misma proporción esto controla la amplitud del tejido en diferentes direcciones; algunos de ellos se hacen con proceso industrial de termo fijado a altas temperaturas con vapor y con un sistema de cuchillas y peines se moldea el material hasta su enfriamiento.<br>Otra forma de hacerlos es artesanal, en la que por medio de una cartulina gruesa se crea cada pliegue en forma de abanico y se sobrepone la tela formándolo para aplicar calor.<br>Existe también el proceso manual en la que encima del <i>gabarit </i> se forma cada uno de las formas y se pliega pinando y vaporizando sobre él para que no pierda la forma.

        .row.justify-content-center
          .col-lg-10.tema6-div-slider.p-3
            .tabla-a.color-acento-botones
              table.mb-5  
                thead
                  tr
                    th Uso
                    th Muestra
                    th Descripción de uso y técnicas                
                tbody
                  tr
                    td.text-center <b>Pliegues, plisados, tablas, dobleces alforzas, prenses</b>
                    td
                      br
                      br
                      br
                      br
                      br
                      br
                      figure
                        img(src='@/assets/curso/tema8/img07.png')  
                      br
                      br
                      br
                      br
                      br
                      br
                    td Los plisados planos se forman en un solo sentido, ya sea a la derecha o a la izquierda; para lograr el efecto se necesita medir en ancho y la distancia que debe haber en cada plisado asegurando que queden de la misma distancia, estos se pinan muy bien y se vaporizan para obtener la forma.
        .row.justify-content-center
          .col-lg-10.tema6-div-slider.p-3
            .tabla-a.color-acento-botones
              table.mb-5  
                thead
                  tr
                    th Uso
                    th Muestra
                    th Descripción de uso y técnicas                
                tbody
                  tr
                    td.text-center <b>Pliegues, plisados, tablas, dobleces alforzas, prenses</b>
                    td
                      figure
                        img(src='@/assets/curso/tema8/img08.png')  
                    td Las tablas o tablones pueden ir en ambas direcciones, en su separación y ancho, la forma plana de este sobresale en el material por el derecho del tejido y formando un prense o fuelle por el revés.
        .row.justify-content-center
          .col-lg-10.tema6-div-slider.p-3
            .tabla-a.color-acento-botones
              table.mb-5  
                thead
                  tr
                    th Uso
                    th Muestra
                    th Descripción de uso y técnicas                
                tbody
                  tr
                    td.text-center <b>Pliegues, plisados, tablas, dobleces alforzas, prenses</b>
                    td
                      br
                      br
                      br
                      br
                      br                    
                      figure
                        img(src='@/assets/curso/tema8/img09.png') 
                        figcaption Nota. Tomado de https://menchuhiloyaguja.blogspot.com/2013/07/tutorial-de-pliegues-fuelles-faldas-de-camilla-cubrecanape.html Nota. Elaboración propia para la marcación 
                      br
                      br
                      br                      
                      br
                      br
                    td Del plegado del tejido y de su dirección depende el nombre que se le da a este, como se ve en la ilustración. Los números indican el orden en que se tomara la tela para su manipulación y formar el volumen.
        .row.justify-content-center
          .col-lg-10.tema6-div-slider.p-3
            .tabla-a.color-acento-botones
              table.mb-5  
                thead
                  tr
                    th Uso
                    th Muestra
                    th Descripción de uso y técnicas                
                tbody
                  tr
                    td.text-center <b>Efectos al sesgo o Bies</b>
                    td
                      br
                      br                    
                      br
                      br
                      br
                      br
                      figure
                        img(src='@/assets/curso/tema8/img10.png')  
                      br
                      br
                      br
                      br
                      br                    
                      br
                    td Para esta técnica el tejido se corta en ángulo de 450, lo que ocasiona que el tejido al manipularse pueda generar una mejor caída, flexibilidad, y alguna elasticidad en su aplicación al <i>gabarit </i>. Esto también facilita que unir una pieza al bies y otra cortada al hilo se adhiera mejor una contra la otra logrando una mejor forma, si el caso es unir 2 tejidos que se encuentran en iguales condiciones estos no se pueden estirar ya que perderían su forma. De esta técnica de manejar el tejido se forman los cortes en espiral para formar ruches, faldas acampanadas, <i>peplum</i>, boleros y drapeados llamados estilo pañuelo.
        .row.justify-content-center
          .col-lg-10.tema6-div-slider.p-3
            .tabla-a.color-acento-botones
              table.mb-5  
                thead
                  tr
                    th Uso
                    th Muestra
                    th Descripción de uso y técnicas                
                tbody
                  tr
                    td.text-center <b>Origami en tela, TR y 3D</b>
                    td
                      br
                      br
                      br
                      br                      
                      br
                      figure
                        img(src='@/assets/curso/tema8/img11.png')  
                      br
                      br
                      br
                      br
                      br
                    td En la historia del diseño y de la confección han sido muchas las técnicas por las cuales se ha pasado siendo la del diseñador japonés Shingo Sato una revolución en la manera de construir las piezas, ya que su propuesta es la transformación de técnicas tradiciones en otras mucho más vanguardistas en las que aplica ‘Técnica TR’ o ‘Reconstrucción Transformacional’ donde propone la técnica de origami en tela, suprimiendo las líneas de costura en algunas de ellas y con cortes asimétricos logrando un gran manejo de volúmenes,  donde se presenta la 3ra dimensión combinándolo con drapeado y por su puesto con patronaje tradicional. 
        .row.justify-content-center
          .col-lg-10.tema6-div-slider.p-3
            .tabla-a.color-acento-botones
              table.mb-5  
                thead
                  tr
                    th Uso
                    th Muestra
                    th Descripción de uso y técnicas                
                tbody
                  tr
                    td.text-center <b>Origami en tela, TR y 3D</b>
                    td                      
                      figure
                        img(src='@/assets/curso/tema8/img12.png')  
                    td La arquitectura de la prenda pasa a transformarse en formas antes no pensadas de forma dimensional, dando la ilusión de movimiento combinándolo con cortes geométricos en color contraste cuestionando la parte tradicional del diseño y del patronaje.
        .row.justify-content-center
          .col-lg-10.tema6-div-slider.p-3
            .tabla-a.color-acento-botones
              table.mb-5  
                thead
                  tr
                    th Uso
                    th Muestra
                    th Descripción de uso y técnicas                
                tbody
                  tr
                    td.text-center <b>Origami en tela, TR y 3D</b>
                    td
                      figure
                        img(src='@/assets/curso/tema8/img13.png')  
                    td 
        .row.justify-content-center
          .col-lg-10.tema6-div-slider.p-3
            .tabla-a.color-acento-botones
              table.mb-5  
                thead
                  tr
                    th Uso
                    th Muestra
                    th Descripción de uso y técnicas                
                tbody
                  tr
                    td.text-center <b>Origami en tela, TR y 3D</b>
                    td
                      br
                      br
                      br
                      br
                      br
                      br
                      figure
                        img(src='@/assets/curso/tema8/img14.png')  
                      br
                      br
                      br
                      br
                      br
                      br
                    td 
    
    #t_8_2.titulo-segundo
      h2 8.2  Manejo del tejido/drapeados más usuales

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon-b.color-acento-contenido.p-3
          p.mb-0 Llegó la hora de poner a volar la imaginación y las manos y aunque ya en el mercado existen todo tipo de tejidos manipulados industrialmente desde prensados, plisados, arrugados y demás texturas posibles, la parte investigativa, experimental y laboriosa del modelado sobre <i>gabarit </i> da la especialidad al diseñador que con creatividad llegara a nuevas formas.

                       
    .row.justify-content-center.mb-5      
      .col-lg-10
        .row.justify-content-center.mb-5
          .col-lg-4
            div.BorTit2.mb-2
              p.mb-0 <b>Figura</b>:
              i Desarrollo de prototipos.
          figure
            img(src='@/assets/curso/tema8/img15.png')
        
        p A continuación, se explicará el paso a paso para construir el desarrollo de prototipos con volúmenes.

    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="<i>bustier</i> base para drapeados" :icono="require('@/assets/curso/tema8/img16.svg')")
        div.tema3-div1(:style="{'background-image': `url(${require('@/assets/curso/tema3/img12.svg')})`}").p-5
          LineaTiempoC.color-acento-botones(text-small)
            .row(titulo="1").justify-content-center
              .col-lg-11                
                p.mb-0 Esta base para su ejecución se dividirá en varias partes con la finalidad de afinar mucho más el cuerpo.
                p.mb-5 La primera parte es definir con <i>bolducs</i> la forma del escote en delantero y en el posterior y en algunos casos se unirá con pines a estas copas prehormadas para dar más forma al busto, y cuándo ya esté listo, en la segunda parte, estas mismas copas se unirán al <i>bustier</i>.
                .row.justify-content-center
                  .col-lg-5
                    figure                      
                      img(src='@/assets/curso/tema8/img18.png')   
            .row(titulo="2").justify-content-center
              .col-lg-11                                
                p.mb-5 Preparar el tejido de la misma forma que el corpiño con los 3 cm adelante en el centro frente sacando los hilos para fijar el aplomo, luego móntalo al <i>gabarit </i> pinando muy bien por centro frente y fijándolo también por la línea de bretel, recordar fijarlo también en la parte superior del escote con un pin.
                .row.justify-content-center
                  .col-lg-4
                    figure                      
                      img(src='@/assets/curso/tema8/img19.png')  
            .row(titulo="3").justify-content-center
              .col-lg-11                                
                p.mb-5 Se procede a cortar el excedente del tejido y a marcar con lápiz blando todas las líneas de construcción de este dejando una pulgada para la costura. 
                ul.lista-ul--color.ps-3.mb-5
                  li 
                    i.fas.fa-child
                    | Unir sobre la línea de bretel y con la parte central del <i>bustier</i> el costadillo el cual seguirá la marcación hecha con los bolduc, limpiar muy bien el tejido y sujetar muy bien con pines.  
                  li 
                    i.fas.fa-child
                    | Cuidar la forma haciendo el corte en la cintura para evitar arrugas lo mismo que en el centro del busto ya que allí se pueden presentar y no ajustar buen el tejido. 
                  li 
                    i.fas.fa-child
                    | Cortar excedentes de tejido y marcar líneas de construcción y piquetes de unión.
                .row.justify-content-center
                  .col-lg-6
                    figure                      
                      img(src='@/assets/curso/tema8/img20.png')   
            .row(titulo="4").justify-content-center
              .col-lg-11                                
                p.mb-5 Continuar con la espalda la cual puede ser en una sola pieza o hacer corte en la línea de bretel, igual que en el delantero con un corte en la cintura para afinar el tejido. 
                ul.lista-ul--color.ps-3.mb-5
                  li 
                    i.fas.fa-child
                    | Marcar todas las piezas  y quitar excesos de tejido.                  
                .row.justify-content-center
                  .col-lg-3
                    figure                      
                      img(src='@/assets/curso/tema8/img21.png')   
            .row(titulo="5").justify-content-center
              .col-lg-11                                
                p.mb-5 Bajar del maniquí las piezas para afinar curvas y líneas de estas y hacer cortes de tejido como muestra la ilustración para un mejor ajuste de este en el <i>gabarit </i>.                                
                .row.justify-content-center
                  .col-lg-7
                    figure                      
                      img(src='@/assets/curso/tema8/img22.png') 
            .row(titulo="6").justify-content-center
              .col-lg-11                                
                p.mb-5 Unir las piezas en maquina plana y luego aplicar sesgo tapa costura en el medio de estas para introducir varilla Ballena o <i>Rigelene</i> de acuerdo a la forma que se quiera dar.
                .row.justify-content-center
                  .col-lg-11
                    figure                      
                      img(src='@/assets/curso/tema8/img23.png') 
            .row(titulo="7").justify-content-center
              .col-lg-11                                
                p.mb-5 Montar de nuevo al maniquí para correcciones y afinado del <i>bustier</i>. Vaporizar encima del <i>gabarit </i> para un mejor ajuste y que el tejido se pegue completamente sin arrugas. 
                .row.justify-content-center.mb-4
                  .col-lg-2
                    figure                      
                      img(src='@/assets/curso/tema8/img24.png')   
                .row.justify-content-center
                  .col-lg-9
                    p.mb-0 Ya se tiene la forma lista para comenzar a drapear y crear formas sobre el con la ayuda de pines agujas e hilo. Además, vaporizar para formar las figuras y que este sea mucho más fácil de manipular. Se baja del <i>gabarit </i> y se une al <i>bustier</i> inicial dando terminación
                  .col-lg-3
                    figure                      
                      img(src='@/assets/curso/tema8/img25.png')  

      .py-4.py-md-5(titulo="Falda con volumen" :icono="require('@/assets/curso/tema8/img16.svg')")  
        div.tema3-div1(:style="{'background-image': `url(${require('@/assets/curso/tema3/img12.svg')})`}").p-5
          LineaTiempoC.color-acento-botones(text-small)
            .row(titulo="1").justify-content-center
              .col-lg-11                
                p.mb-4 La preparación del tejido para este diseño es el doble del que se viene trabajando para el básico de la falda ya que, en este el delantero y el posterior vienen unidos. 
                p.mb-5 Se comienza en el posterior donde se fijara el tejido en el centro atrás con pines firmemente haciendo coincidir la línea de cadera con la el tejido aplomándolo.
                .row.justify-content-center
                  .col-lg-3.px-4
                    figure                      
                      img(src='@/assets/curso/tema8/img26.png') 
            .row(titulo="2").justify-content-center
              .col-lg-11                
                p.mb-4 Siguiendo en el posterior sujetar el tejido con una cinta elástica alrededor de la cintura pinando en el costado en la línea de bretel delantera y en el centro frente.
                p.mb-5 Formar la pinza de ajuste del posterior y pinar muy bien.
                .row.justify-content-center
                  .col-lg-3.px-4
                    figure                      
                      img(src='@/assets/curso/tema8/img27.png')
            .row(titulo="3").justify-content-center
              .col-lg-11                                
                p.mb-5 Ahora se pasará a la parte delantera soltando el tejido por un momento y tomando la punta del tejido se subirá hasta la línea de tórax máximo sujetando con un pin usando como guía la línea de cadera, sin embargo, en este punto ya el tejido toma una forma sesgada y se debe dejar ventaja para crear el volumen. 
                .row.justify-content-center
                  .col-lg-3.px-4
                    figure                      
                      img(src='@/assets/curso/tema8/img28.png') 
            .row(titulo="4").justify-content-center
              .col-lg-11                                
                p.mb-4 De nuevo ate la cintura con la cinta elástica y comience a distribuir uniformemente el tejido, realice el número de pliegues deseados presionando suavemente hacia abajo el tejido para ayudar a arquear la tela al nivel de la cadera y formar el volumen.  
                p.mb-5 Pine muy bien y revise que el posterior no presente arrugas no deseadas limpiando el tejido.
                .row.justify-content-center
                  .col-lg-8
                    figure                      
                      img(src='@/assets/curso/tema8/img29.png') 
            .row(titulo="5").justify-content-center
              .col-lg-11                                                
                p.mb-5 Pinar muy bien cada pliegue y cortar el exceso de tejido, marcar todas las líneas clave y retirar del <i>gabarit </i> para afinar y verificar el <i>toile</i>. Luego de verificado y habiendo hecho las líneas de costura se sube de nuevo al <i>gabarit </i> para afinar la precisión y evaluar el modelo.
                .row.justify-content-center
                  .col-lg-8
                    figure                      
                      img(src='@/assets/curso/tema8/img30.png') 
      .py-4.py-md-5(titulo="Cuello y manga drapeada" :icono="require('@/assets/curso/tema8/img17.svg')")  
        div.tema3-div1(:style="{'background-image': `url(${require('@/assets/curso/tema3/img12.svg')})`}").p-5
          LineaTiempoC.color-acento-botones(text-small)
            .row(titulo="1").justify-content-center
              .col-lg-11                
                p.mb-4 Para lograr realizar un cuello drapeado lo primero será ubicar 3 pines en uno en cada hombro y el tercero en la línea de centro frente a la altura del escote deseado. 
                p.mb-5 Para este diseño el tejido se trabajará a 450 es decir, al sesgo o bies y con el tejido doble.
                .row.justify-content-center
                  .col-lg-4
                    figure                      
                      img(src='@/assets/curso/tema8/img31.png') 
            .row(titulo="2").justify-content-center
              .col-lg-11                                
                p.mb-5 Fijar el centro del tejido al borde el escote con un pin como muestra la imagen y fijar en los hombros formando el drapeado a cada lado cuidando el centro del tejido. 
                ul.lista-ul--color.ps-3.mb-5
                  li 
                    i.fas.fa-child
                    | Determinar el número de caídas deseadas en el escote.
                .row.justify-content-center
                  .col-lg-6
                    figure                      
                      img(src='@/assets/curso/tema8/img32.png')   
            .row(titulo="3").justify-content-center
              .col-lg-11                
                p.mb-5 Continúe con el modelado de la prenda en el maniquí limpiando, pinando y cortando el excedente de tejido hasta forma el <i>toile</i> delantero, para el posterior puede hacerse el mismo procedimiento o solamente construir una espalda base. 
                .row.justify-content-center
                  .col-lg-8
                    figure                      
                      img(src='@/assets/curso/tema8/img33.png') 
            .row(titulo="4").justify-content-center
              .col-lg-11                                
                p.mb-5 Para la sisa drapeada se procede de igual forma que en el cuello colocando pines en el hombro y en la sisa a la distancia que se quiera. 
                ul.lista-ul--color.ps-3.mb-5
                  li 
                    i.fas.fa-child
                    | Pinar la base del tejido en la sisa y luego sube para fijarlo en el hombro formando el drapeado. 
                  li 
                    i.fas.fa-child
                    | Hacer un corte en la cintura y acomodar los pliegues de este de acuerdo al diseño deseado.
                .row.justify-content-center
                  .col-lg-7
                    figure                      
                      img(src='@/assets/curso/tema8/img34.png') 
            .row(titulo="5").justify-content-center
              .col-lg-11                                
                p.mb-5 Este tejido cubre le delantero y el posterior a la vez cubriendo todo el frente y el posterior. Acomodar el tejido de acuerdo al diseño drapeando la sisa.                
                .row.justify-content-center
                  .col-lg-7
                    figure                      
                      img(src='@/assets/curso/tema8/img35.png')  
            .row(titulo="6").justify-content-center
              .col-lg-11                                
                p.mb-5 Realizar las operaciones de modelado en frente y posterior limpiando, pinando y cortando el excedente de tejido.
                ul.lista-ul--color.ps-3.mb-5
                  li 
                    i.fas.fa-child
                    | Hacer cortes en la cintura para afinar el tejido. 
                  li 
                    i.fas.fa-child
                    | Hacer otro corte en el centro frente y posterior y se crearan dos piezas iguales.
                  li 
                    i.fas.fa-child
                    | Marcar líneas de construcción y piquetes.
                .row.justify-content-center
                  .col-lg-5
                    figure                      
                      img(src='@/assets/curso/tema8/img36.png') 
</template>

<script>
export default {
  name: 'Tema8',
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
