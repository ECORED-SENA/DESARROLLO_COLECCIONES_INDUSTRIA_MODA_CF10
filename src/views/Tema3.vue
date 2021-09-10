<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1  Técnicas básicas de drapeado

    div(:style="{'background-image': `url(${require('@/assets/curso/tema3/img01.png')})`}").mb-5
        .row.justify-content-start
          .col-lg-5.p-5
            br
            br
            br
            br
            p Para realizar un patrón existen diferentes técnicas y maneras de hacerlo, el más conocido y usado para el modelado sobre <i>gabarit</i> es el método francés el cual todavía se enseña en las escuelas de alta costura. Este método implica el uso del modelo a vestir replicando una a una sus medidas y fijando con alfileres la tela para dar forma a dicho patrón y hacerlo a la medida.
            br
            br
            br
            br

    #t_3_1.titulo-segundo
      h2 3.1  Realización de básicos

    .row.justify-content-center
      .col-lg-6.d-flex
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-5 Para la realización de los básicos, lo primero es la preparación de la glasilla en cada uno de los modelos, para esto se tomará la medida de ancho y de largo dando la forma de un rectángulo, se plancha con vapor la tela para no tener arrugas que generen otro tipo de proceso y se hace horizontal y verticalmente, no en diagonal ya que el tejido con el calor y el vapor pueden estirarse.         
          figure      
                div.BorTit.mb-2
                  p.mb-0 <b>Figura</b>: <i>Toile</i>.
                img(src='@/assets/curso/tema3/img02.png')
      .col-lg-6.d-flex
        .cajon.color-secundario.p-4.mb-4
          p.mb-5 En la siguiente figura se muestra la forma en que se debe planchar la glasilla en el proceso de preparación este insumo para el trabajo con los básicos.
          div.BorTit.mb-2
            p.mb-0 <b>Figura</b>:<i>Preparación Glasilla.</i>
          .row.justify-content-center
              .col-lg-8.d-flex
                figure                      
                    img(src='@/assets/curso/tema3/img03.png')
                    figcaption Nota. Tomado de Kiisel, Karolin_Draping_The_Complet_Course

    p.mb-5 A continuación, explicaremos el paso a paso para construir los básicos. Veamos:
    
    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="Básico de corpiño" :icono="require('@/assets/curso/tema3/img04.svg')")
        div.tema3-div1(:style="{'background-image': `url(${require('@/assets/curso/tema3/img12.svg')})`}").p-5
          LineaTiempoC.color-acento-botones(text-small)
            .row(titulo="1.1").justify-content-center
              .col-lg-11
                h3 Básico de corpiño
                p.mb-4 A los 3 cm del borde u orillo de esta se sacarán dos o 3 hilos de la urdimbre de la tela para establecer el hilo de esta luego marcar 28cm (11”) para marcar la línea de tórax máximo.
                .row.justify-content-center
                  .col-lg-4
                    figure                      
                      img(src='@/assets/curso/tema3/img10.svg')                
            .row(titulo="1.2").justify-content-center
              .col-lg-11                                   
                p.mb-5 Montar la pieza delantera en el <i>gabarit</i>, colocando la intersección formada por las dos líneas realizadas en el puente del tórax máximo, cuidando que quede sobrante de tela para el cuello en la línea que marca cuello-centro frente colocar pines para ajustarlo, de afuera hacia adentro y así hasta el final de la tela y dos pines en el <i>pivot</i> (punto más alto del busto) cruzados para sostener el tejido. Cortar el exceso del cuello 2.5 cm arriba del <i>bolduc</i> de cuello.
                  figure                      
                    img(src='@/assets/curso/tema3/img11.svg')
            .row(titulo="2").justify-content-center
              .col-lg-11                                   
                p.mb-4 Con la mano suavemente llevar el tejido al hombro, limpiar arrugas y pinar sin estirar hasta el punto acromio, cortando el sobrante y realizando cortes para un mejor ajuste.
                .row.justify-content-center
                  .col-lg-4
                    figure                      
                      img(src='@/assets/curso/tema3/img13.svg') 
            .row(titulo="3").justify-content-center
              .col-lg-11                                   
                p.mb-4 Pasamos ahora a la cintura donde se limpiará con la mano hasta la primera línea <i>bretel</i> y se formará la primera pinza de ajuste, pinandola. En la cintura queda el tejido al hilo sin estirar y pinar hasta llegar al costado.
                .row.justify-content-center
                  .col-lg-4
                    figure                      
                      img(src='@/assets/curso/tema3/img14.svg')  
            .row(titulo="4").justify-content-center
              .col-lg-11                                   
                p.mb-4 Se continúa con el hombro cortando para formar la sisa y de allí el tejido sobrante baja para formar la pinza de costado. En algunos tejidos se presenta un sobrante en el hombro, el cual, se debe corregir con una pinza de ajuste que luego en el patrón final desparecerá. Pinar muy bien en el costado limpiando con la mano el sobrante del tejido y pinando para ajustar. Luego de cortar sobrantes se procede a marcar líneas de construcción, pinzas y piquetes con el lápiz blando.
                .row.justify-content-center
                  .col-lg-4
                    figure                      
                      img(src='@/assets/curso/tema3/img15.svg')  
            .row(titulo="5").justify-content-center
              .col-lg-11                                   
                p.mb-4 Para el <i>toile</i> de la parte posterior se procede igual que para el delantero, el tejido se prepara de la misma forma: con los 3 cm de ventaja y se pinará en el centro atrás de la misma forma.
                .row.justify-content-center
                  .col-lg-4
                    figure                      
                      img(src='@/assets/curso/tema3/img16.svg') 
            .row(titulo="6").justify-content-center
              .col-lg-11                                   
                p.mb-4 De la misma forma se harán cortes para formar el cuello pinando y sosteniendo sin estirar el tejido y se creara una pinza de ajuste para que el tejido no quede levantado por la forma del hombro. La medida es de ½ pulgada de ancho por 3 pulgadas de largo.
                .row.justify-content-center
                  .col-lg-8
                    figure                      
                      img(src='@/assets/curso/tema3/img17.svg')     
            .row(titulo="7").justify-content-center
              .col-lg-11                                   
                p.mb-4 Limpiar desde el centro frente haca el costado formando la pinza en la línea de <i>bretel</i> al igual que en el delantero.
                .row.justify-content-center
                  .col-lg-4
                    figure                      
                      img(src='@/assets/curso/tema3/img18.svg') 
            .row(titulo="8").justify-content-center
              .col-lg-11                                   
                p.mb-4 Pinar y realizar los cortes en sisa y costado limpiando el sobrante de tejido. Marcar con el lápiz blando líneas de construcción, pinzas y piquetes. Asegurar que coincidan el delantero y el posterior en largos de costado y sisa.
                .row.justify-content-center
                  .col-lg-4
                    figure                      
                      img(src='@/assets/curso/tema3/img19.svg') 
            
      .py-4.py-md-5(titulo="Básico de cuellos" :icono="require('@/assets/curso/tema3/img05.svg')")
        div.tema3-div1(:style="{'background-image': `url(${require('@/assets/curso/tema3/img12.svg')})`}").p-5
          LineaTiempoC.color-acento-botones(text-small)
            .row(titulo="1.1").justify-content-center
              .col-lg-11
                h3 Básico de cuellos
                h3.text-center Cuello Básico con ala y banda incorporada
                p.mb-4 A los 3 cm del borde u orillo de esta se sacarán dos o 3 hilos de la urdimbre de la tela para establecer el aplomo y hacer el doblez para iniciar, luego se marcan dos líneas iniciando a 2 cm del borde de la tela y con separación de una pulgada para ubicar en el <i>gabarit</i> y seguir la línea del tejido.
                .row.justify-content-center
                  .col-lg-5
                    figure                      
                      img(src='@/assets/curso/tema3/img20.svg')                
            .row(titulo="1.2").justify-content-center
              .col-lg-11                                   
                p.mb-4 Para iniciar se sujeta con pines la glasilla en el centro atrás del cuello y hasta un poco más abajo del <i>bolduc</i> del cuello de allí se comienza a realizar cortes hasta antes de la primera línea trazado de forma regular y se fijan, no sin antes limpiar y estar seguro de que no quedan arrugas. Se continua hasta el <i>bolduc</i> de hombro fijando con pines muy bien. 
                p.mb-5 En ese punto por la forma del tejido se podrá hacer un tipo de corte mas amplio para el que tejido ceda y poder continuar realizando lo mismo hasta el escote delantero. 
                .row.justify-content-center
                  .col-lg-10
                    figure                      
                      img(src='@/assets/curso/tema3/img21.svg') 
            .row(titulo="2").justify-content-center
              .col-lg-11                                                   
                p Doblar el tejido en el centro atrás alineándolo muy bien y pinando este para asegurar el soporte del cuello y que no se caiga o se corra de su centro, quedando perpendicular al doblez sobre sí mismo dando el ancho deseado del cuello.
                p.mb-5 Este doblez se continua hasta la parte delantera formando el ala del cuello, no sin antes fijar el ancho de lo que será la banda de 2.5 a 3 cm y luego sobre este terminar el doblez.
                .row.justify-content-center
                  .col-lg-8
                    figure                      
                      img(src='@/assets/curso/tema3/img22.svg') 
            .row(titulo="3").justify-content-center
              .col-lg-11                                                   
                p.mb-4 Luego de pinar muy bien, en el hombro realizar un corte un poco más grande al igual que se hizo cuando se estaba pinando el tejido para que el doblez caiga perfectamente al llegar al delantero y en el punto de centro frente dibujar la punta del cuello sobre el doblez.
                p.mb-5 Será importante levantar el tejido y rectificar nuevamente lo dibujado.                
                    figure                      
                      img(src='@/assets/curso/tema3/img23.svg') 
            .row(titulo="4").justify-content-center
              .col-lg-11                                                   
                p.mb-4 Retire el cuello del <i>gabarit</i> con cuidado y luego rectifique las curvas y líneas hechas, añada ¼ de pulgada alrededor de este como margen de costura y recorte el exceso de tejido. 
                p.mb-5 Comprobar nuevamente sobre el <i>gabarit</i> de nuevo el ajuste, precisión, forma y equilibrio quedando el <i>toile</i> suavemente puesto sobre él sin dejar espacios ni estirarse.
                .row.justify-content-center
                  .col-lg-8
                    figure                      
                      img(src='@/assets/curso/tema3/img24.svg') 
            .row(titulo="5").justify-content-center
              .col-lg-11 
                h3 Cuello Nerú, Mandarín, Militar o Mao                                                  
                p.mb-5 Este tipo de cuello se construye de la misma forma que todos los modelos con la variante en su ancho, y terminación ya que esta puede ser redonda o cuadrada y en el centro frente tener separación o tener monte para ojal y botón. En cuanto a la preparación del tejido se hace de la misma forma, 3 cm del borde u orillo de esta se sacarán dos o 3 hilos de la urdimbre de la tela para establecer el aplomo y hacer el doblez para iniciar, luego se marcan dos líneas iniciando a 2 cm del borde de la tela y con separación de una pulgada para ubicar en el <i>gabarit</i> y seguir la línea del tejido.
                .row.justify-content-center
                  .col-lg-5
                    figure                      
                      img(src='@/assets/curso/tema3/img25.svg') 
            .row(titulo="6").justify-content-center
              .col-lg-11                 
                p.mb-5 Iniciar sujetando con pines la glasilla en el centro atrás del cuello y hasta un poco más abajo del <i>bolduc</i> del cuello sobre la línea trazada de allí se comienza a realizar cortes hasta antes de este de forma regular y se fijan, no sin antes limpiar y sin que queden arrugas, se continua hasta el <i>bolduc</i> de hombro fijando con pines muy bien.                 
                .row.justify-content-center
                  .col-lg-10
                    .cajon.color-acento-contenido.p-4.mb-4
                      .row.justify-content-center
                        .col-lg-1
                          figure                      
                            img(src='@/assets/curso/tema2/img11.svg')
                        .col-lg-11
                          p.mb-0 En ese punto por la forma del tejido se podrá hacer un tipo de corte más amplio para que el tejido ceda y poder continuar realizando lo mismo hasta el escote delantero cuidando que la línea trazada y el <i>bolduc</i> coincidan.
                .row.justify-content-center
                  .col-lg-9
                    figure                      
                      img(src='@/assets/curso/tema3/img26.svg') 
            .row(titulo="7").justify-content-center
              .col-lg-11                                                                
                p.mb-4 Luego de pinar muy bien, en el hombro realizar un corte un poco más grande para que ajuste perfectamente al llegar al delantero y en el punto de centro frente dibujar la curva del cuello de acuerdo al diseño que se quiera y del ancho de forma paralela desde el centro atrás al centro frente.
                p.mb-5 Retire el cuello del <i>gabarit</i> con cuidado y luego rectifique las curvas y líneas hechas, añada ¼ de pulgada alrededor de este como margen de costura y recorte el exceso de tejido. Comprobar nuevamente sobre el <i>gabarit</i> de nuevo el ajuste, precisión, forma y equilibrio quedando el <i>toile</i> suavemente puesto sobre él sin dejar espacios ni estirarse.
                .row.justify-content-center
                  .col-lg-9
                    figure                      
                      img(src='@/assets/curso/tema3/img27.svg') 
            .row(titulo="8").justify-content-center
              .col-lg-11      
                h4 Cuello con solapa                                                                          
                .row.justify-content-center
                  .col-lg-8
                    p.mb-4 La principal característica de estos cuellos es que la solapa y la parte superior del cuello están unidos en una sola pieza en el cuello Smoking el cuello que cubre el posterior hace independiente con corte en la solapa. La longitud y ancho de la solapa también varían de acuerdo al diseño. En el posterior el soporte de este puede ser un poco mas alto en la curva que da la vista hacia afuera.
                    p.mb-5 Para la preparación de la glasilla se trazaran las siguientes líneas del centro frente hacia adentro 10 cm para el quiebre, y en forma horizontal una línea a los 28 cm para marcar el tórax máximo y otra a los 43 cm para la cintura. En el cuello debe sobrar tejido para poder formar cuello posterior.
                  .col-lg-4
                    figure                      
                      img(src='@/assets/curso/tema3/img28.svg') 
            .row(titulo="9").justify-content-center
              .col-lg-11      
                p.mb-5 Fijar el tejido la línea de los 10 cm sobre el ápice del centro frente y pinar muy bien hasta el bajo; luego continuar fijándolo en los dos <i>pivot</i>.                                                               
                .row.px-4.justify-content-center                 
                  .col-lg-3
                    figure                      
                      img(src='@/assets/curso/tema3/img29.svg') 
            .row(titulo="10").justify-content-center
              .col-lg-11      
                p.mb-5 Realizar una pinza de costado para que el tejido quede aplomado sobre la línea de tórax máximo y pinar.
                .row.justify-content-center                 
                  .col-lg-3
                    figure                      
                      img(src='@/assets/curso/tema3/img30.svg') 
            .row(titulo="11").justify-content-center
              .col-lg-11      
                p.mb-5 Realizar un corte en el hombro desde el punto acromio hasta una pulgada antes del <i>bolduc</i> del cuello y pinar limpiando el tejido.
                .row.justify-content-center                 
                  .col-lg-3
                    figure                      
                      img(src='@/assets/curso/tema3/img31.svg') 
            .row(titulo="12").justify-content-center
              .col-lg-11      
                p Continuar fijando el tejido en el costado para luego marcar lo que será la profundidad de escote con un pin en el centro frente llamado punto de quiebre. Realizar un corte en el punto marcado de fin de escote desde el borde exterior de la tela hasta este, doblar la solapa hasta el punto hombro-cuello y haciendo un giro hacia la parte posterior. 
                p.mb-5 Pinar sin causar arrugas o recogidos en el punto cuello-escote fijándolo. Pinar en el centro atrás del cuello sin arrugar, luego poner pines formando el ancho del cuello deseado.
                .row.justify-content-center                 
                  .col-lg-7
                    figure                      
                      img(src='@/assets/curso/tema3/img32.svg') 
            .row(titulo="13").justify-content-center
              .col-lg-11                      
                p.mb-5 Se procede a dibujar el borde del cuello comenzando en el punto de quiebre, terminar de dibujar en el centro de la parte posterior del cuello. Recortar el exceso de tela dejando los márgenes de costura. 
                .row.justify-content-center                 
                  .col-lg-3
                    figure                      
                      img(src='@/assets/curso/tema3/img33.svg') 
            .row(titulo="14").justify-content-center
              .col-lg-11                      
                p.mb-5 Levantar el tejido y rectificar nuevamente lo dibujado en la curva y pinar en la línea de quiebre para luego marcar desde el centro frente hasta el cuello la línea de doblez de este.
                .row.justify-content-center                 
                  .col-lg-3
                    figure                      
                      img(src='@/assets/curso/tema3/img34.svg') 
            .row(titulo="15").justify-content-center
              .col-lg-11                      
                p.mb-5 Marcar todas las líneas principales del frente y realiza un corte en el área de la cintura para limpiar mucho mejor el tejido. Retirar el tejido sobrante y dejar ventajas de costura.
                .row.justify-content-center                 
                  .col-lg-6
                    figure                      
                      img(src='@/assets/curso/tema3/img35.svg') 
            .row(titulo="16").justify-content-center
              .col-lg-11                      
                p Retirar el delantero del <i>gabarit</i> con cuidado y luego rectificar las curvas y líneas hechas, verificar que si este añadido el ¼ de pulgada alrededor de este como margen de costura y recortar el exceso de tejido. 
                p.mb-5 Comprobar nuevamente sobre el  <i>gabarit</i> de nuevo el ajuste, precisión, forma y equilibrio quedando el <i>toile</i> suavemente puesto sobre él sin dejar espacios ni estirarse. El cuello debe ajustarse suavemente alrededor del escote y la solapa al área del vestido o chaqueta.
                .row.justify-content-center                 
                  .col-lg-5
                    figure                      
                      img(src='@/assets/curso/tema3/img36.svg')             
      .py-4.py-md-5(titulo="Básico de falda" :icono="require('@/assets/curso/tema3/img06.svg')")
        div.tema3-div1(:style="{'background-image': `url(${require('@/assets/curso/tema3/img12.svg')})`}").p-5
          LineaTiempoC.color-acento-botones(text-small)
            .row(titulo="1").justify-content-center
              .col-lg-11                      
                p.mb-4 <b>Básico de falda</b>
                p.mb-5 La preparación de la glasilla al igual que en el corpiño, se toma la medida de ancho y de largo dando la forma de un rectángulo, se plancha con vapor la tela para no tener arrugas.
                .row.justify-content-center                 
                  .col-lg-8
                    figure                      
                      img(src='@/assets/curso/tema3/img37.svg')     
            .row(titulo="2").justify-content-center
              .col-lg-11                                      
                p.mb-5 Montar la pieza delantera de la falda en el <i>gabarit</i>, colocando la intersección formada por las dos líneas realizadas en el puente de la cadera, cuidando que quede sobrante de tela para la cintura en la línea que marca centro delantero-cintura colocar pines para ajustarlo, de afuera hacia adentro y así sucesivamente hasta el final del ruedo.
                .row.justify-content-center                 
                  .col-lg-3
                    figure                      
                      img(src='@/assets/curso/tema3/img38.svg')   
            .row(titulo="3").justify-content-center
              .col-lg-11                                      
                p.mb-5 Limpiar con la mano y pinar en la línea de cadera sin estirar el tejido, para luego pinar desde ese punto hacia el ruedo, por el costado. Cortar el sobrante de tela.
                .row.justify-content-center                 
                  .col-lg-3.px-4
                    figure                      
                      img(src='@/assets/curso/tema3/img39.svg') 
            .row(titulo="4").justify-content-center
              .col-lg-11                                      
                p.mb-5 De la línea de cadera hacia la cintura se va limpiando llevando el sobrante de tela hacia la línea de <i>bretel</i>. Para formar allí la pinza que pueden ser una o dos dependiendo del diseño.
                .row.justify-content-center                 
                  .col-lg-5
                    figure                      
                      img(src='@/assets/curso/tema3/img40.svg')     
            .row(titulo="5").justify-content-center
              .col-lg-11                                      
                p.mb-5 Cortar el sobrante de tela limpiando con la mano muy bien y ajustando pines donde se requiera. Marcar con el lápiz blando líneas de construcción, pinzas y piquetes de esta.
                .row.justify-content-center                 
                  .col-lg-2
                    figure                      
                      img(src='@/assets/curso/tema3/img41.svg') 
            .row(titulo="6").justify-content-center
              .col-lg-11                                      
                p.mb-5 La ejecución del <i>toile</i> del posterior procede igual que para el delantero, el tejido se prepara de la misma forma con los 3 cm de ventaja y se pinará en el centro atrás de la misma forma de la cintura al ruedo.
                .row.justify-content-center                 
                  .col-lg-3.px-3
                    figure                      
                      img(src='@/assets/curso/tema3/img42.svg')  
            .row(titulo="7").justify-content-center
              .col-lg-11                                      
                p.mb-5 En la línea de cadera limpiar el tejido hacia el costado pinando muy bien esta parte.
                .row.justify-content-center                 
                  .col-lg-3.px-4
                    figure                      
                      img(src='@/assets/curso/tema3/img43.svg')   
            .row(titulo="8").justify-content-center
              .col-lg-11                                      
                p.mb-5 Luego se procede a pinar el tejido de la línea de cadera hacia el ruedo limpiando el tejido si estirar ni producir arrugas, recordando que en esta parte la pieza quedar un poco mas suelta por la parte baja del derrier.
                .row.justify-content-center                 
                  .col-lg-3.px-4
                    figure                      
                      img(src='@/assets/curso/tema3/img44.svg') 
            .row(titulo="9").justify-content-center
              .col-lg-11                                      
                p.mb-5 Desde la línea de cadera hacia la cintura se limpia el tejido pinando y llevando el sobrante hacia la cintura para conformar según diseño una o dos pinzas en él y cortar el sobrante de tela.
                .row.justify-content-center                 
                  .col-lg-3.px-4
                    figure                      
                      img(src='@/assets/curso/tema3/img45.svg')     
            .row(titulo="10").justify-content-center
              .col-lg-11                                      
                p.mb-5 Marca las líneas de construcción, pinzas y piquetes, y cortar sobrantes de tela. Cuidar que los costados estén alineados en cintura y bajo.
                .row.justify-content-center                 
                  .col-lg-3.px-5
                    figure                      
                      img(src='@/assets/curso/tema3/img46.svg') 

      .py-4.py-md-5(titulo="Básico de vestido" :icono="require('@/assets/curso/tema3/img07.svg')")
        div.tema3-div1(:style="{'background-image': `url(${require('@/assets/curso/tema3/img12.svg')})`}").p-5
          LineaTiempoC.color-acento-botones(text-small)
            .row(titulo="1").justify-content-center
              .col-lg-11            
                h4 Básico de vestido                          
                p.mb-5 El tejido para el vestido será la suma del corpiño y de la falda más una ventaja para el ruedo, se prepara de igual forma que en los anteriores, planchando muy bien y marcando los 3 cm sobre la urdimbre y las líneas de tórax máximo y cintura.
                .row.justify-content-center                 
                  .col-lg-5
                    figure                      
                      img(src='@/assets/curso/tema3/img47.svg') 
            .row(titulo="2").justify-content-center
              .col-lg-11                                                    
                p.mb-5 Fijar a lo largo de la línea de centro frente la glasilla con pines de afuera hacia adentro hasta el final del ruedo, limpiar en el área del tórax máximo hacia el costado colocando pines cruzados en el <i>pivot</i> para sostener el tejido.
                .row.justify-content-center                 
                  .col-lg-3.px-5
                    figure                      
                      img(src='@/assets/curso/tema3/img48.svg') 
            .row(titulo="3").justify-content-center
              .col-lg-11                                                    
                p.mb-5 Después de asegurar bien el tejido se procede a cortar el sobrante de tela en el cuello pinando a 2,5 cm del <i>bolduc</i> del cuello.
                .row.justify-content-center                 
                  .col-lg-3.px-5
                    figure                      
                      img(src='@/assets/curso/tema3/img49.svg') 
            .row(titulo="4").justify-content-center
              .col-lg-11                                                    
                p.mb-4 Con la mano y suavemente llevar el tejido al hombro limpiar arrugas y pinar sin estirar hasta el punto acromio, cortando el sobrante y realizando cortes para un mejor ajuste. 
                p.mb-4 Si el tejido lo pide, realizar pinzas de ajuste que luego desaparecerán en el tolie final.
                p.mb-5 Luego de esto pinar limpiando suavemente la línea de cadera hasta el costado.
                .row.justify-content-center                 
                  .col-lg-3.px-5
                    figure                      
                      img(src='@/assets/curso/tema3/img50.svg') 
            .row(titulo="5").justify-content-center
              .col-lg-11                                                    
                p.mb-4 Continuar con la sisa pinando y cortando el sobrante de la tela; ya en el costado pinar de manera que el sobrante quede en la línea de <i>bretel</i> para configura una o dos pinzas de acuerdo al diseño y que ajustaran la prenda en la cintura. Pinar con cuidado la pinza afinando el tejido alrededor sin arrugas. 
                p.mb-5 Se procede a marcar líneas de construcción y pinzas con el lápiz blando.
                .row.justify-content-center                 
                  .col-lg-2.px-4
                    figure                      
                      img(src='@/assets/curso/tema3/img51.svg') 
            .row(titulo="6").justify-content-center
              .col-lg-11                                                                    
                p.mb-5 Para la realización del <i>toile</i> posterior se pina el centro atrás igual que en el delantero. También se pinarán las líneas de pecho y de cadera limpiando con cuidado el material hacia el costado.
                .row.justify-content-center                 
                  .col-lg-5
                    figure                      
                      img(src='@/assets/curso/tema3/img52.svg') 
            .row(titulo="7").justify-content-center
              .col-lg-11                                                                    
                p.mb-5 Se cortará la tela sobrante en el cuello pinando y dando forma cuidadosamente.
                .row.justify-content-center                 
                  .col-lg-3.px-5
                    figure                      
                      img(src='@/assets/curso/tema3/img53.svg') 
            .row(titulo="8").justify-content-center
              .col-lg-11                                                                    
                p.mb-0 Se termina de conformar el posterior pinando de igual forma al delantero en el costado para después formar la pinza en el <i>bolduc</i> del <i>bretel</i> posterior. Pinar muy bien la pinza limpiando a los lados sin generar arrugas. 
                p.mb-5 Marcar todas las líneas de construcción, pinzas y piquetes, revisando costados del delantero y del posterior.
                .row.justify-content-center                 
                  .col-lg-4
                    figure                      
                      img(src='@/assets/curso/tema3/img54.svg') 
      .py-4.py-md-5(titulo="Básico de la Manga" :icono="require('@/assets/curso/tema3/img08.svg')")
        div.tema3-div1(:style="{'background-image': `url(${require('@/assets/curso/tema3/img12.svg')})`}").p-5
          LineaTiempoC.color-acento-botones(text-small)
            .row(titulo="1.1").justify-content-center
              .col-lg-11                                                                    
                h4 Básico de la Manga
                p.mb-5 Para iniciar la creación del <i>toile</i> de la manga se debe unir al <i>gabarit</i> la forma del brazo, fijándolo muy bien con pines.
                .row.justify-content-center                 
                  .col-lg-3.px-5
                    figure                      
                      img(src='@/assets/curso/tema3/img55.svg') 
            .row(titulo="1.2").justify-content-center
              .col-lg-11                                                                                   
                p.mb-5 La preparación de la glasilla al igual que para las otras prendas, se toma la medida de ancho y de largo dando la forma de un rectángulo, se plancha con vapor la tela para no tener arrugas y luego se marcará la medida del largo de la manga (A), la altura de corona o copa (B) y del codo (C).
                .row.justify-content-center                 
                  .col-lg-12
                    figure                      
                      img(src='@/assets/curso/tema3/img56.svg') 
            .row(titulo="3").justify-content-center
              .col-lg-11                                                                                   
                p.mb-5 Después de pinar la manga en el <i>gabarit</i> se procede a colocar los <i>bolduc</i> que serán la línea de sisa, (B) la de codo (C) y el centro de la manga (A).
                .row.justify-content-center                 
                  .col-lg-3.px-3
                    figure                      
                      img(src='@/assets/curso/tema3/img57.svg') 
            .row(titulo="4").justify-content-center
              .col-lg-11                                                                                                 
                .row.justify-content-center      
                  .col-lg-7    
                    .cajon.color-acento-contenido.p-4.mb-4
                      .row
                        .col-lg-1
                          figure                      
                            img(src='@/assets/curso/tema2/img11.svg')
                        .col-lg-11
                          p.mb-0 Aunque el trazo de la manga puede quedar más preciso haciéndolo en patronaje plano según indicaciones de largo de esta y amplitud de medida de sisas, este se puede montar al <i>gabarit</i> para verificar ancho, contorno de sisas, caída y la alineación del tejido. 
                    p.mb-0 Se fijan con pines coincidiendo las líneas de centro, sisa y codo de los <i>bolduc</i> y del material por toda la línea central fijando el tejido muy bien. Luego de estar ubicados se procede a pinar y recortar el excedente de material alrededor del brazo comenzado desde la muñeca hasta la sisa dejando ventajas de costura y de corte de una pulgada.
                  .col-lg-5
                    figure                      
                      img(src='@/assets/curso/tema3/img58.svg') 
            .row(titulo="5").justify-content-center
              .col-lg-11                                                                                   
                p.mb-5 Posteriormente de recortar el material sobrante se continúa modelando la sisa pinando debajo del brazo y recortando el sobrante haciendo cortes para ajustarla a la medida de esta.
                .row.justify-content-center                 
                  .col-lg-9
                    figure                      
                      img(src='@/assets/curso/tema3/img59.svg') 
            .row(titulo="6").justify-content-center
              .col-lg-11                                                                                   
                p.mb-5 Ya teniendo las sisas inferiores listas se comienza a pinar la copa de la manga dando forma a esta, en caso de que tenga mucha excedencia de tejido se recogerá con puntadas a mano, hasta ajustarla. 
                .row.justify-content-center                 
                  .col-lg-7
                    figure                      
                      img(src='@/assets/curso/tema3/img60.svg') 
      .py-4.py-md-5(titulo="Básico de Pantalón" :icono="require('@/assets/curso/tema3/img09.svg')")
         div.tema3-div1(:style="{'background-image': `url(${require('@/assets/curso/tema3/img12.svg')})`}").p-5
          LineaTiempoC.color-acento-botones(text-small)
            .row(titulo="1").justify-content-center
              .col-lg-11             
                h4 Básico de Pantalón     
                .row
                  .col-lg-9
                    p.mb-4 Para la realización de este básico es necesario un <i>gabarit</i> de pierna y marcar con <i>bolduc</i> adicional la parte central de la pierna que sería el aplomo de la misma. 
                    p.mb-5 La preparación del material es igual a los anteriores y las medidas a marcar serán para el delantero se marcarán 10 cm y para el posterior 15 cm, al igual que las líneas de altura de cadera y la medida de tiro.
                    .row.justify-content-center 
                      .col-lg-5
                        figure                      
                          img(src='@/assets/curso/tema3/img62.svg') 
                  .col-lg-3.px-5
                    figure                      
                      img(src='@/assets/curso/tema3/img61.svg') 
            .row(titulo="2").justify-content-center
              .col-lg-11                                                                                   
                p.mb-5 Fijar en el <i>gabarit</i> con pines la glasilla de la altura de la cadera limpiando suavemente y sobre el <i>bolduc</i> del aplomo sin causar arrugas.
                .row.justify-content-center                 
                  .col-lg-2
                    figure                      
                      img(src='@/assets/curso/tema3/img63.svg') 
            .row(titulo="3").justify-content-center
              .col-lg-11                                                                                   
                p.mb-5 Lo siguiente es alisar la tela hacia la cintura y crear allí los prenses, pliegues a número de pinzas deseadas, y pinar bien cada uno de ellos. Si se quiere más amplitud esta se agregará a la glasilla en el ancho de esta. 
                .row.justify-content-center                 
                  .col-lg-12
                    figure                      
                      img(src='@/assets/curso/tema3/img64.svg')
            .row(titulo="4").justify-content-center
              .col-lg-11                                                                                   
                p.mb-5 Realizar un corte a la altura del tiro y pinar, luego para insertar la glasilla a la entrepierna realizando pequeños cortes para que el tejido se adapte a la forma de la entrepierna sin formar arrugas.
                .row.justify-content-center                 
                  .col-lg-5.px-5
                    figure                      
                      img(src='@/assets/curso/tema3/img65.svg')
            .row(titulo="5").justify-content-center
              .col-lg-11                                                                                   
                p.mb-0 En el costado llevar el sobrante de hilo sin halar ni arrugar e ir pinando de la línea de cadera al bajo y luego de nuevo de esta línea a la cintura para terminar la forma del pantalón. 
                p.mb-5 Cortar el sobrante de tela y marcar todas las líneas, pinzas y piquetes con el lápiz blando.
                .row.justify-content-center                 
                  .col-lg-2.px-4
                    figure                      
                      img(src='@/assets/curso/tema3/img66.svg')
            .row(titulo="6").justify-content-center
              .col-lg-11                                                                                                   
                .row.justify-content-center  
                  .col-lg-7         
                    p.mb-4 La consecución del <i>toile</i> posterior es similar al delantero con la diferencia que en el tiro y por el volumen de la cadera se dará mucha más amplitud para cubrir hasta la entrepierna, en la cintura se formaran como máximo 2 pinzas para no generar volúmenes extras. 
                    p.mb-5 Este se pina de igual forma que en el delantero en el costado y se unirá con este para formar las dos piezas sin escalas ni sobrantes. Marcar muy bien todas las líneas de construcción y pinzas con el lápiz blando.
                  .col-lg-4
                    figure                      
                      img(src='@/assets/curso/tema3/img67.svg')
                  .col-lg-1

    #t_3_2.titulo-segundo
      h2 3.2  Pinzas    

    .row.justify-content-center  
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-out")   
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img68.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Las pinzas son recogidos que se permiten plegar la tela para darle forma a la prenda y lograr que esta se adapte a la figura humana para la cual se realiza la confección.
            br
            br
            p En patronaje, las pinzas son de dos tipos: 
            br
            br
            p <b>Pinza compuesta</b>:  cuando se crea corte en la pieza y esta se divide en 2 o más partes
            br
            br
            p <b>Pinza simple</b>:  cuando no se separa la pieza, pero se retira el excedente de glasilla.

    .row.justify-content-center
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4
          .row.justify-content-center
            .col-lg-3
              div.BorTit.mb-2
                p.mb-0 <b>Figura</b>: <i>Tipos de Pinza.</i>
          figure.mb-5                     
            img(src='@/assets/curso/tema3/img69.svg')
            figcaption Nota. Elaboración propia en software Illustrator
          .row.justify-content-center
            .col-lg-11
              p A continuación, se detalla el paso a paso para patronar estos dos tipos de pinzas con las respectivas derivaciones de cada una de ellas. 

    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="Pinza compuesta" :icono="require('@/assets/curso/tema3/img70.svg')")
        div.tema3-div1(:style="{'background-image': `url(${require('@/assets/curso/tema3/img12.svg')})`}").p-5
          LineaTiempoC.color-acento-botones(text-small)
            .row(titulo="1").justify-content-center
              .col-lg-11             
                h3 Pinza compuesta                                                                      
                p.mb-5 Este tipo de pinza se caracteriza por la separación de las piezas en paneles individuales unidos por un corte donde están ubicadas las pinzas y creando un ajuste al cuerpo preciso, ya que estas pinzas desaparecen para darle paso al corte.
                .row.justify-content-center                 
                  .col-lg-11
                    figure                      
                      img(src='@/assets/curso/tema3/img71.svg')
            .row(titulo="2").justify-content-center
              .col-lg-11             
                h3 Corte princesa                                                                      
                p.mb-5 Este tipo de pinza se caracteriza por la separación de las piezas en paneles individuales unidos por un corte donde están ubicadas las pinzas y creando un ajuste al cuerpo preciso, ya que estas pinzas desaparecen para darle paso al corte.
                .row.justify-content-center                 
                  .col-lg-9
                    figure                      
                      img(src='@/assets/curso/tema3/img72.svg')
            .row(titulo="3").justify-content-center
              .col-lg-11                             
                p.mb-4 Montar la pieza delantera en el <i>gabarit</i>, colocando la intersección formada por las dos líneas realizadas en el puente del tórax máximo, cuidando que quede sobrante de tela para el cuello en la línea que marca cuello-centro frente colocar pines para ajustarlo, de afuera hacia adentro y así hasta el final de la tela y dos pines en el <i>pivot</i> (punto más alto del busto) cruzados para sostener el tejido. 
                p.mb-5 Cortar el exceso del cuello 2.5 cm arriba del <i>bolduc</i> de cuello. Medir el ancho desde el centro frente hasta 4 pulgadas demás allá del ápice de la línea de <i>bretel</i> cortar a esta medida el tejido, reservando el sobrante para el panel del costado.
                .row.justify-content-center                 
                  .col-lg-3
                    figure                      
                      img(src='@/assets/curso/tema3/img73.svg')
            .row(titulo="4").justify-content-center
              .col-lg-11                             
                p.mb-4 Cerciorarse que los pines del <i>pivot</i> este bien sujetos con el tejido alineado. Proceder a cortar el sobrante en el cuello haciendo corte hasta llegar al <i>bolduc</i> para limpiar y pinar sin que queden arrugas. 
                p.mb-5 Siguiendo luego en la línea de hombro pinando, cortando el sobrante, limpiando el tejido y dejando la ventaja de costura.
                .row.justify-content-center                 
                  .col-lg-3
                    figure                      
                      img(src='@/assets/curso/tema3/img74.svg')
            .row(titulo="5").justify-content-center
              .col-lg-11                                             
                p.mb-5 Se pina limpiando el tejido desde el centro frente en la cintura hasta línea de <i>bretel</i> y seguimos por esta misma línea hasta llegar al hombro. Marcar todas las líneas clave del panel frontal y costuras a 2 pulgadas.
                .row.justify-content-center                 
                  .col-lg-5
                    figure                      
                      img(src='@/assets/curso/tema3/img75.svg')
            .row(titulo="6").justify-content-center
              .col-lg-11                                             
                p.mb-5 Con la otra parte del tejido se cubre el costado del <i>gabarit</i> haciendo coincidir la línea de tórax máximo y pinando sobre la línea de <i>bretel</i> en el <i>pivot</i>, en el costado y en la cintura haciendo un corte para que el tejido se ajuste, luego con el tejido del panel del centro frente sobre la línea de <i>bretel</i> se une a la del costado. 
                .row.justify-content-center                 
                  .col-lg-5
                    figure                      
                      img(src='@/assets/curso/tema3/img76.svg')
            .row(titulo="7").justify-content-center
              .col-lg-11                                             
                p.mb-5 Marcar las líneas claves de costado, sisa, hombro, cintura y en la línea de <i>bretel</i> en el cruce de la línea princesa que coincidas las líneas de los dos paneles.
                .row.justify-content-center                 
                  .col-lg-3.px-4
                    figure                      
                      img(src='@/assets/curso/tema3/img77.svg')

            .row(titulo="8").justify-content-center
              .col-lg-11        
                h4 Corte princesa posterior                                     
                p.mb-5 Se realiza el mismo ejercicio anterior, pero para el posterior: uniendo el tejido al centro espalda con pines y luego hasta la línea de <i>bretel</i> pinando hasta el nivel del omoplato y al igual que el delantero agregar 4 pulgadas. Se procede a cortar el sobrante en el cuello haciendo corte hasta llegar al <i>bolduc</i> para limpiar y pinar sin que queden arrugas. Siguiendo luego en la línea de hombro pinando, cortando el sobrante, limpiando el tejido y dejando la ventaja de costura.
                .row.justify-content-center                 
                  .col-lg-12
                    figure                      
                      img(src='@/assets/curso/tema3/img78.svg')
            .row(titulo="9").justify-content-center
              .col-lg-11                                                
                p.mb-5 Se marcan las líneas del corte princesa en cuello, hombro, línea de <i>bretel</i> y cintura.
                .row.justify-content-center                 
                  .col-lg-3
                    figure                      
                      img(src='@/assets/curso/tema3/img79.svg')
            .row(titulo="10").justify-content-center
              .col-lg-11                                                
                p.mb-5 Con la otra parte del tejido se cubre el costado del posterior del <i>gabarit</i> haciendo coincidir la línea de omoplato y pinando sobre la línea de <i>bretel</i>, en el costado y en la cintura haciendo un corte para que el tejido se ajuste, luego con el tejido del panel de centro atrás sobre la línea de <i>bretel</i> se une a la del costado. 
                .row.justify-content-center                 
                  .col-lg-7
                    figure                      
                      img(src='@/assets/curso/tema3/img80.svg')
            .row(titulo="11").justify-content-center
              .col-lg-11                                                
                p.mb-5 Marcar las líneas claves de costado, sisa, hombro, cintura y en la línea de <i>bretel</i> en el cruce de la línea princesa que coincidas las líneas de los dos paneles del posterior y en el costado con el delantero.
                .row.justify-content-center                 
                  .col-lg-5
                    figure                      
                      img(src='@/assets/curso/tema3/img81.svg')
            .row(titulo="12").justify-content-center
              .col-lg-11                                                
                p.mb-5 Este mismo corte desde la línea de <i>bretel</i>, pero llevado a la mitad de la sisa se llama “Corte frances” y se realiza haciendo los mismos pasos del anterior sin embargo en el delantero en la línea del <i>pivot</i> este no se lleva hasta el hombro si no hasta la mitad de la sisa creando un costadillo más pequeño.
                .row.justify-content-center                 
                  .col-lg-4.px-5
                    figure                      
                      img(src='@/assets/curso/tema3/img82.svg')
      .py-4.py-md-5(titulo="Pinza simple" :icono="require('@/assets/curso/tema3/img70.svg')")
        div.tema3-div1(:style="{'background-image': `url(${require('@/assets/curso/tema3/img12.svg')})`}").p-5
          LineaTiempoC.color-acento-botones(text-small)
            .row(titulo="1.1").justify-content-center
              .col-lg-11           
                h4 Pinza Simple                                       
                p.mb-5 Como explicamos anteriormente este tipo de pinza se presenta cuando no se separan las piezas en paneles, pero al momento de realizarla se retira el excedente de glasilla girando las pinzas al lugar deseado y uniendo estas para crear el efecto de corte y ajustando la prenda al cuerpo.
                .row.justify-content-center                 
                  .col-lg-11
                    figure                      
                      img(src='@/assets/curso/tema3/img83.svg')
            .row(titulo="1.2").justify-content-center
              .col-lg-11                                                                         
                .row.justify-content-center  
                  .col-lg-8        
                    p.mb-5 Para estas pinzas el material se prepara igual que el corpiño base delantero, a los 3 cm del borde u orillo de esta se sacarán dos o 3 hilos de la urdimbre de la tela para establecer el hilo de esta luego marcar 28 cm (11”) para marcar la línea de tórax máximo. 
                    .cajon.color-acento-contenido.p-4.mb-4
                      .row
                        .col-lg-1
                          figure                      
                            img(src='@/assets/curso/tema2/img11.svg')
                        .col-lg-11
                          p.mb-0 Se debe estar seguro que la línea de centro del delantero del <i>gabarit</i> está en el centro. Los <i>gabarit</i> en su mayoría son elaborados manualmente y puede ser que la costura del centro del forro no coincida con el aplomo de mitad de cuerpo que se requiere; además el <i>gabarit</i> debe estar en posición totalmente vertical sin desnivel del piso donde se encuentre ya que esto también puede afectar el centro del mismo.      
                  .col-lg-4
                    figure                      
                      img(src='@/assets/curso/tema3/img84.svg')
            .row(titulo="2").justify-content-center
              .col-lg-11           
                h4 Pinza en Costado     
                p.mb-5 Ubicar la pieza delantera del tejido en el <i>gabarit</i>, colocando la intersección formada por las dos líneas realizadas en el puente del tórax máximo, cuidando que quede sobrante de tela para el cuello en la línea que marca cuello-centro frente colocar pines para ajustarlo, de afuera hacia adentro y así hasta el final de la tela y dos pines en el <i>pivot</i> (punto más alto del busto) cruzados para sostener el tejido y lograr formar la pinza.                                                   
                .row.justify-content-center                 
                  .col-lg-7
                    figure                      
                      img(src='@/assets/curso/tema3/img86.svg')
            .row(titulo="3").justify-content-center
              .col-lg-11                          
                .row.justify-content-center    
                  .col-lg-8       
                    p.mb-5 Cortar el exceso del tejido del cuello 2.5 cm arriba del <i>bolduc</i> de cuello. Con la mano suavemente llevar el tejido al hombro limpiar arrugas y pinar sin estirar hasta el punto acromio, cortando el sobrante y realizando cortes para un mejor ajuste. Desde allí se comienza a bajar el tejido, se continúa cortando para formar la sisa y el tejido sobrante baja para formar la pinza, pasando ahora a la cintura donde se limpiará con la mano hasta la primera línea <i>bretel</i> y se continuará llevando el tejido hasta formar pinza de ajuste en el costado pinandola.       
                    .cajon.color-acento-contenido.p-4.mb-4
                      .row
                        .col-lg-2.px-4
                          figure                      
                            img(src='@/assets/curso/tema2/img11.svg')
                        .col-lg-10
                          p.mb-0 En la cintura queda el tejido al hilo sin estirar y pinar hasta llegar al costado
                  .col-lg-3
                    figure                      
                      img(src='@/assets/curso/tema3/img87.svg')
                  .col-lg-1
            .row(titulo="4").justify-content-center
              .col-lg-11                          
                .row.justify-content-center    
                  .col-lg-8       
                    p.mb-5 En algunos tejidos se presenta un sobrante en el hombro el cual se debe corregir con una pinza de ajuste que luego en el patrón final no estará. Pinar muy bien en el costado limpiando con la mano el sobrante del tejido siempre hacia abajo y pinando para ajustar. Luego de cortar sobrantes se procede a marcar líneas de construcción, pinzas y piquetes con el lápiz blando.
                    .cajon.color-acento-contenido.p-4.mb-4
                      .row
                        .col-lg-2.px-4
                          figure                      
                            img(src='@/assets/curso/tema2/img11.svg')
                        .col-lg-10
                          p.mb-0 La altura de la pinza en el costado depende del diseño a realizar.
                  .col-lg-3
                    figure                      
                      img(src='@/assets/curso/tema3/img88.svg')
                  .col-lg-1
            .row(titulo="5").justify-content-center
              .col-lg-11           
                h4 Pinza al centro    
                p.mb-5 Se procede a ubicar la pieza delantera del tejido en el <i>gabarit</i>, colocando la intersección formada por las dos líneas realizadas en el puente del tórax máximo, cuidando que quede sobrante de tela para el cuello en la línea que marca cuello-centro frente colocar pines para ajustarlo, de afuera hacia adentro y así hasta el final de la tela y dos pines en el <i>pivot</i> (punto más alto del busto) cruzados para sostener el tejido y formar la pinza. 
                .row.justify-content-center                 
                  .col-lg-6
                    figure                      
                      img(src='@/assets/curso/tema3/img89.svg')
            .row(titulo="6").justify-content-center
              .col-lg-11                             
                p.mb-5 Cortar el exceso del tejido del cuello 2.5 cm arriba del <i>bolduc</i> de cuello. Con la mano suavemente llevar el tejido al hombro limpiar arrugas y pinar sin estirar hasta el punto acromio, cortando el sobrante y realizando cortes para un mejor ajuste. Desde allí se comienza a bajar el tejido, se continúa cortando para formar la sisa y el tejido sobrante baja como muestra la flecha para formar la pinza, pasando ahora a la cintura donde se limpiará con la mano hasta la primera línea <i>bretel</i> pinando y se continuará llevando el tejido hasta formar pinza de ajuste en el centro pinando muy bien. 
                .row.justify-content-center                 
                  .col-lg-6
                    .cajon.color-acento-contenido.p-4.mb-4
                      .row
                        .col-lg-2.px-3
                          figure                      
                            img(src='@/assets/curso/tema2/img11.svg')
                        .col-lg-10
                          p.mb-0 En la cintura queda el tejido al hilo sin estirar.
                    figure.px-4                      
                      img(src='@/assets/curso/tema3/img90.svg')
            .row(titulo="7").justify-content-center
              .col-lg-11                         
                p.mb-5 Después de cortar sobrantes se procede a marcar líneas de construcción, pinzas y piquetes con el lápiz blando.
                .row.justify-content-center                 
                  .col-lg-3
                    figure                      
                      img(src='@/assets/curso/tema3/img91.svg')
            .row(titulo="8").justify-content-center
              .col-lg-11                         
                p.mb-5 Al igual que en la pinza al centro, se ubica la pieza delantera del tejido en el <i>gabarit</i>, colocando la intersección formada por las dos líneas realizadas en el puente del tórax máximo, cuidando que quede sobrante de tela para el cuello en la línea que marca cuello-centro frente colocar pines para ajustarlo, de afuera hacia adentro y así hasta el final de la tela y dos pines en el <i>pivot</i> (punto más alto del busto) cruzados para sostener el tejido. 
                .row.justify-content-center                 
                  .col-lg-7
                    figure                      
                      img(src='@/assets/curso/tema3/img92.svg')
            .row(titulo="9").justify-content-center
              .col-lg-11                          
                .row.justify-content-center    
                  .col-lg-8       
                    p.mb-5 Cortar el exceso del tejido del cuello 2.5 cm arriba del <i>bolduc</i> de cuello. Con la mano suavemente llevar el tejido al hombro limpiar arrugas y pinar sin estirar hasta el punto acromio, cortando el sobrante y realizando cortes para un mejor ajuste. Se continúa cortando para formar la sisa y el tejido sobrante baja como muestra la flecha para formar la pinza en el <i>bolduc</i> del <i>bretel</i>, pasando ahora a la cintura donde se limpiará con la mano hasta esta línea pinando y se continuará llevando el tejido hasta formar pinza de ajuste en el centro del <i>bretel</i> pinando muy bien.
                    .cajon.color-acento-contenido.p-4.mb-4
                      .row
                        .col-lg-2.px-4
                          figure                      
                            img(src='@/assets/curso/tema2/img11.svg')
                        .col-lg-10
                          p.mb-0 Recordar que en la cintura queda el tejido al hilo sin estirar ni girar.
                  .col-lg-3
                    figure                      
                      img(src='@/assets/curso/tema3/img93.svg')
                  .col-lg-1
            .row(titulo="10").justify-content-center
              .col-lg-11                         
                p.mb-5 Cortar sobrantes alrededor y hecho esto se marcan líneas de construcción, pinzas y piquetes con el lápiz blando.
                .row.justify-content-center                 
                  .col-lg-3
                    figure                      
                      img(src='@/assets/curso/tema3/img94.svg')
      .py-4.py-md-5(titulo="Pinzas fantasía" :icono="require('@/assets/curso/tema3/img70.svg')")
        div.tema3-div1(:style="{'background-image': `url(${require('@/assets/curso/tema3/img12.svg')})`}").p-5
          LineaTiempoC.color-acento-botones(text-small)
            .row(titulo="1").justify-content-center
              .col-lg-11           
                h4 Pinzas fantasía    
                p <b><i>¡Son una derivación de la pinza simple!</i></b>
                p.mb-0 Se forman manipulando la excedencia de la glasilla sin cortarla y con el excedente se forman recogidos o volúmenes aprovechando el excedente de glasilla.
                p.mb-4 Los puntos marcados en los delanteros son los <i>pivot</i> del <i>gabarit</i> y de ahí parte el corte o recogido que en su mayoría pasa por encima de él, logrando el efecto de “<i>pivot</i>eo”.
                p.mb-4 Algunos ejemplos de ellas se verán a continuación:
                p.mb-5 Con este tipo de pinzas se utilizan las dos técnicas de modelaje tradicional o sobre el cuerpo como es el <i>moulage</i> y el drapeado donde la técnica de montaje sobre el maniquí lo conforma pliegues en la tela para darle mayor volumen y caída.
                .row.justify-content-center                 
                  .col-lg-6
                    figure                      
                      img(src='@/assets/curso/tema3/img95.svg')
            .row(titulo="2").justify-content-center
              .col-lg-11    
                .row.justify-content-center     
                  .col-lg-3.px-4 
                    figure                      
                      img(src='@/assets/curso/tema3/img96.svg')
                  .col-lg-9 
                      p.mb-4 Siguiendo el modelado en las pinzas anteriores se ubica la pieza delantera del tejido en el <i>gabarit</i>, colocando la intersección formada por las dos líneas realizadas en el puente del tórax máximo, cuidando que quede sobrante de tela para el cuello en la línea que marca cuello-centro frente colocar pines para ajustarlo, de afuera hacia adentro y así hasta el final de la tela y dos pines en el <i>pivot</i> (punto más alto del busto) cruzados para sostener el tejido. 
                      .cajon.color-acento-contenido.p-4.mb-4
                        .row
                          .col-lg-2.px-4
                            figure                      
                              img(src='@/assets/curso/tema2/img11.svg')
                          .col-lg-10
                            p.mb-0 En este es muy importante ese sobrante en el cuello ya que con el construiremos parte del recogido.
                .row.justify-content-center    
                  .col-lg-2                           
                    figure                      
                      img(src='@/assets/curso/tema3/img97.svg')
            .row(titulo="3").justify-content-center
              .col-lg-11    
                .row.justify-content-center     
                  .col-lg-6
                    .cajon.color-acento-contenido.p-4.mb-4
                        .row
                          .col-lg-2.px-4
                            figure                      
                              img(src='@/assets/curso/tema2/img11.svg')
                          .col-lg-10
                            p.mb-0 Aquí el modelado comenzara al contrario de las otras pinzas ya que se necesita que la excedencia pase a los hombros haciendo giro del tejido.  
                    p.mb-4 Con la mano suavemente llevar el tejido al cuello, cortar el exceso del tejido 2.5 cm arriba del <i>bolduc</i> de cuello y pinar muy bien en la unión cuello hombro limpiar arrugas y pinar sin estirar cortando el sobrante. 
                    p.mb-4 Se pasa ahora a la cintura donde se limpiará con la mano pinando y se continuará llevando el tejido al costado y realizando cortes para un mejor ajuste. Se continúa cortando para formar la sisa y el tejido sobrante se reúne en el hombro para formar el recogido en el, hasta formar pliegues de ajuste en el pinando muy bien. 
                    p.mb-4 Cortar sobrantes alrededor y hecho esto se marcan líneas de construcción, pinzas y piquetes con el lápiz blando.
                  .col-lg-6
                    figure                      
                      img(src='@/assets/curso/tema3/img98.svg')
            .row(titulo="4").justify-content-center
              .col-lg-11    
                h4 Recogido en Centro
                p.mb-5 Ubicar la pieza delantera del tejido en el <i>gabarit</i>, colocando la intersección formada por las dos líneas realizadas en el puente del tórax máximo, cuidando que quede sobrante de tela para el cuello en la línea que marca cuello-centro frente colocar pines para ajustarlo, de afuera hacia adentro y así hasta el final de la tela y dos pines en el <i>pivot</i> cruzados para sostener el tejido. 
                .row.justify-content-center     
                  .col-lg-6
                    figure                      
                      img(src='@/assets/curso/tema3/img99.svg')
            .row(titulo="5").justify-content-center
              .col-lg-11                    
                p.mb-4 Macar con <i>bolduc</i> lo que será la nueva línea de sisa y el escote. Con la mano suavemente llevar el tejido al cuello, cortar el exceso del tejido 2.5 cm arriba del <i>bolduc</i> de cuello y pinar muy bien en la unión cuello hombro limpiar arrugas y pinar sin estirar cortando el sobrante. se continúa cortando para formar la nueva sisa a una pulgada del <i>bolduc</i> y el tejido sobrante baja completamente haciendo el giro, en el costado se une con pines y se corta sobrantes al igual que en la cintura. 
                p.mb-0 Al llevar todo el tejido al frente se comienza a acomodar haciendo las arrugas o pliegues. 
                p.mb-4 Se corta por la nueva línea de escote dejando la ventaja de costura. 
                p.mb-5 Cortar sobrantes alrededor y se marcan líneas de construcción, pinzas y piquetes con el lápiz blando.
                .row.justify-content-center     
                  .col-lg-6
                    figure                      
                      img(src='@/assets/curso/tema3/img100.svg')

</template>

<script>
export default {
  name: 'Tema3',
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
