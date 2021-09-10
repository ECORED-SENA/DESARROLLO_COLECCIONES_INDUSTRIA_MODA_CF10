<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1  Verificación, corrección, afinado y limpieza del patrón base

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="slide-left")   
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Cuando ya se tienen los patrones listos sobre el <i>gabarit</i> y debidamente marcados se procede a quitar todos los pines y a bajar el <i>toile</i> para afinar curvas verificar uniones, pinzas y medidas y para recortar los sobrantes de estos. Luego de haber realizado el proceso se monta de nuevo al maniquí verificando que estos si estén acordes a la figura y a lo modelado.
        br
        br
        p Estos patrones después de verificados se transfieren a papel o cartulina, o algunos otros solo lo dejaran tal cual en el <i>toile</i> y lo trabajan como patrón base. En lo siguiente se verá la forma de hacer la verificación de estos su corrección y afinado de los patrones realizados hasta el momento y la limpieza de los nuevos patrones base.
        br
        br
        p A continuación, se indicará el paso a paso para este proceso:
    
    div.tema3-div1(:style="{'background-image': `url(${require('@/assets/curso/tema3/img12.svg')})`}").p-5
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="1").justify-content-center
          .col-lg-11           
            h4 Verificación-corrección-afinado y limpieza del patrón base
            p.mb-0 Para el <b>corpiño</b> base se retira el <i>toile</i> del <i>gabarit</i> y se coloca de forma plana en una mesa sobre cartulina a la que, previamente se le dibujara la línea de centro frente, la línea de tórax máximo y línea de centro espalda.
            p.mb-4 El <i>toile</i>  y se ubicara allí haciendo coincidir las líneas, afinando todas las líneas rectas marcadas en el <i>toile</i> incluyendo pinzas, hombros y costado, y recortando el sobrante de tejido. 
            p.mb-5 Esta transferencia hacia la cartulina puede hacerse a través de papel calco y una rodaja.
            .row.justify-content-center                 
              .col-lg-6
                figure                      
                  img(src='@/assets/curso/tema4/img02.svg')
        .row(titulo="2").justify-content-center
          .col-lg-11           
            h4 Verificación-corrección-afinado y limpieza del patrón base            
            p.mb-5 Dibujar las pinzas con regla ubicando muy bien el centro de las pinzas, las de los <b>hombros</b> se cerrarán desde el <i>toile</i> y no estarán en el patrón final de cartulina.
            .row.justify-content-center                 
              .col-lg-6
                figure                      
                  img(src='@/assets/curso/tema4/img03.svg')
        .row(titulo="3").justify-content-center
          .col-lg-11           
            h4 Verificación-corrección-afinado y limpieza del patrón base       
            p.mb-0 Con la regla de curva francesa: afinar las <b>curvas de los escotes del delantero y posterior</b>, asegurarse que las líneas se tracen suavemente y al llegar a los centros frente estos estén en un ángulo de 90 grados.
            p.mb-5 Se procede a cerrar las pinzas de hombro y a trazar con línea recta desde la esquina de la unión cuello-hombro hasta el punto acromio en una línea continua.
            .row.justify-content-center                 
              .col-lg-11
                figure                      
                  img(src='@/assets/curso/tema4/img04.svg')
        .row(titulo="4").justify-content-center
          .col-lg-11           
            h4 Verificación-corrección-afinado y limpieza del patrón base       
            p.mb-0 De igual forma se hará con el bajo en la <b>cintura</b> cerrando las dos pinzas y afinando con una regla de curva de cadera desde el centro frente y espalda hasta el costado, con una línea continua suave.
            p.mb-5 Si se presenta algún error en los costados se reajusta bajando ¼ de pulgada y trazando de nuevo la línea.
            .row.justify-content-center                 
              .col-lg-6
                figure                      
                  img(src='@/assets/curso/tema4/img05.svg')
        .row(titulo="5").justify-content-center
          .col-lg-11           
            h4 Verificación-corrección-afinado y limpieza del patrón base
            p.mb-4 En el <b>punto acromio del hombro</b>: ubicar la curva francesa para trazar la nueva curva de sisa cuidando que en el centro de esta en el delantero entra ¼ de pulgada, y en el punto sisa costado se ampliará dando la medida del <i>drop</i> de 1 pulgada y de costura ½ pulgada. 
            ul.lista-ul--color.mb-5.px-3
              li 
                i.fas.fa-brain
                | Trazar el nuevo costado con línea recta y verificar que la medida y caída de esta sea igual en los <i>toile</i>. 
              li 
                i.fas.fa-brain
                | Agregar costuras y cortar el exceso de tejido.
            .row.justify-content-center                 
              .col-lg-9
                figure                      
                  img(src='@/assets/curso/tema4/img06.svg')
        .row(titulo="6").justify-content-center
          .col-lg-11           
            h4 Verificación-corrección-afinado y limpieza del patrón base
            p.mb-4 Medir los <b>contornos de sisa</b> del delantero y del posterior. Esta medida en la sisa delantera debe ser ½ pulgada más corta que la sisa de espalda; para corregirlas se dará forma quitando ¼ de pulgada en el medio de la sisa con curva suave y esa medida sacarla en la espalda y trazar de nuevo desde el punto acromio al costado.
            ul.lista-ul--color.mb-5.px-3
              li 
                i.fas.fa-brain
                | Medir al contrario, proceder a entrar en el posterior y a sacar la medida en el delantero hasta nivelarlas.
            .row.justify-content-center                 
              .col-lg-4
                figure                      
                  img(src='@/assets/curso/tema4/img07.svg')
        .row(titulo="7").justify-content-center
          .col-lg-11           
            h4 Verificación-corrección-afinado y limpieza del patrón base
            p.mb-4 Por ultimo se cierran las pinzas de hombro y de cintura, se unen los <i>toile</i> por los costados y los hombros con pines comprobando las distancias de estos, se marcan costuras y piquetes de unión. Se monta de nuevo en el <i>gabarit</i> para la verificación final.
            ul.lista-ul--color.mb-5.px-3
              li 
                i.fas.fa-brain
                | Luego se pasará en limpio a la cartulina calcando todas las líneas de construcción, piquetes y costura para el patrón final.
            .row.justify-content-center                 
              .col-lg-12
                figure                      
                  img(src='@/assets/curso/tema4/img08.svg')
        .row(titulo="8").justify-content-center
          .col-lg-11           
            h4 Verificación-corrección-afinado y limpieza del patrón base
            p.mb-4 Para el afinado de los cuellos se trabaja de igual forma, se toman los cuellos en una superficie plana donde estarán trazadas las líneas horizontales para coincidir con el tejido.  Se tranzan curvas con la regla curva francesa y con recta para marcado suave de las líneas de construcción, se marca costura y se retira el excedente de tejido. Comprobar nuevamente sobre el <i>gabarit</i> de nuevo el ajuste, precisión, forma y equilibrio quedando el <i>toile</i> suavemente puesto sobre él sin dejar espacios ni estirarse. 
            p.mb-5 Proceder luego a calcar sobre cartulina con piquetes y línea de construcción para terminado final.            
            .row.justify-content-center                 
              .col-lg-12
                figure                      
                  img(src='@/assets/curso/tema4/img09.svg')
        .row(titulo="9").justify-content-center
          .col-lg-11           
            h4 Verificación-corrección-afinado y limpieza del patrón base
            p.mb-5 Para el <b>cuello de solapa</b> se afinarán las líneas de la base de la chaqueta la igual que en el corpiño base con la ayuda de la regla curva francesa, y en la solapa con la curva de cadera para darle suavidad a la forma y que ajuste mejor al <i>gabarit</i>. Comprobar nuevamente sobre el <i>gabarit</i> de nuevo el ajuste, precisión, forma y equilibrio quedando el <i>toile</i> suavemente puesto sobre él sin dejar espacios ni estirarse y proceder a calcar sobre la cartulina según lo explicado.
            .row.justify-content-center                 
              .col-lg-5
                figure                      
                  img(src='@/assets/curso/tema4/img10.svg')
        .row(titulo="10").justify-content-center
          .col-lg-11           
            h4 Verificación-corrección-afinado y limpieza del patrón base
            p.mb-4 Para la <b>falda</b> se trazará en la cartulina la línea de centro frente y espalda ubicando los <i>toile</i> allí, luego trazar línea recta en centro de las pinzas de 5 y ½ pulgadas en el posterior y en el delantero de 3 ½ pulgadas. 
            p.mb-5 Unir los puntos de las pinzas con los piquetes formándolas en delantero y espalda.
            .row.justify-content-center                 
              .col-lg-10
                figure                      
                  img(src='@/assets/curso/tema4/img11.svg')
        .row(titulo="11").justify-content-center
          .col-lg-11           
            h4 Verificación-corrección-afinado y limpieza del patrón base            
            p.mb-5 Con pines <b>unir las pinzas</b> y con curva de cadera marcar de nuevo <b>la cintura</b> con línea suave continua, recortar el excedente de tejido y marcar de nuevo piquetes de construcción.
            .row.justify-content-center                 
              .col-lg-6
                figure                      
                  img(src='@/assets/curso/tema4/img12.svg')
        .row(titulo="12").justify-content-center
          .col-lg-11           
            h4 Verificación-corrección-afinado y limpieza del patrón base          
            p.mb-4 Después de afinadas y marcadas <b>las pinzas</b> se continua con el costado trazando la curva de <b>cadera</b> con regla para esto se cuida que ambas medidas coincidan al momento de unirlas y se rectifican las demás líneas de bajo y centro frente. 
            p.mb-5 Comprobar nuevamente sobre el <i>gabarit</i> de nuevo el ajuste, precisión, forma y equilibrio de la falda sobre este, quedando el <i>toile</i> suavemente puesto sobre él sin dejar espacios ni estirarse y proceder a calcar sobre la cartulina según lo explicado.
            .row.justify-content-center                 
              .col-lg-9
                figure                      
                  img(src='@/assets/curso/tema4/img13.svg')
        .row(titulo="13").justify-content-center
          .col-lg-11           
            h4 Verificación-corrección-afinado y limpieza del patrón base    
            p.mb-4 Para la verificación afinado y limpieza del <b>vestido</b> se procede de igual forma que con el corpiño base y la falda ya que este es la unión de ellos dos teniendo en cuenta las pinzas de ajuste. Se ampliará dando la medida del <i>drop</i> de 1 pulgada y de costura ½ pulgada, trazar el nuevo costado con línea recta y verificar que la medida y caída de esta sea igual en los <i>toile</i>. 
            p.mb-5 Agregar costuras y cortar el exceso de tejido, procediendo a calcar sobre la cartulina según lo explicado.
            .row.justify-content-center                 
              .col-lg-7
                figure                      
                  img(src='@/assets/curso/tema4/img14.svg')
        .row(titulo="14").justify-content-center
          .col-lg-11           
            h4 Verificación-corrección-afinado y limpieza del patrón base              
            p.mb-5 En la <b>manga</b> se trazará sobre la superficie plana con el <i>toile</i> doblado por la mitad las líneas verticales de copa, sisa, codo y muñeca a 90 grados del doblez de la tela y horizontales de línea central de apoyo y una de unión entra la curva de sisa y la línea vertical de esta, que servirán como apoyo de la regla francesa esta debe estar apuntalada en las 3 líneas como muestra el grafico para trazar la primera parte de la curva de la manga. 
            .row.justify-content-center                 
              .col-lg-8
                figure                      
                  img(src='@/assets/curso/tema4/img15.svg')
        .row(titulo="15").justify-content-center
          .col-lg-11           
            h4 Verificación-corrección-afinado y limpieza del patrón base              
            p.mb-4 Volteando la regla curva francesa se trazará el resto de la curva colocando la regla en la mitad del trazo anterior y terminando la línea de copa. 
            p.mb-5 Recortar el excedente de tejido con la <b>manga</b> todavía doblada.
            .row.justify-content-center                 
              .col-lg-12
                figure                      
                  img(src='@/assets/curso/tema4/img16.svg')
        .row(titulo="16").justify-content-center
          .col-lg-11           
            h4 Verificación-corrección-afinado y limpieza del patrón base              
            p.mb-4 Después de afinado el tejido se abrirá la <b>manga</b> y sobre la línea del codo y la línea central se procede a hacer un corte sin separar las piezas para <b>crear la pinza de caída de la manga</b> dando forma al codo y girar sobre la línea traslapando hasta que la abertura sea de ½ a 5/8 de pulgada según diseño. 
            ul.lista-ul--color.mb-5.px-3
              li 
                i.fas.fa-brain
                | Pegar un trozo de tejido o papel en la nueva pinza y recortar según la forma. 
              li 
                i.fas.fa-brain
                | Proceder a trazar la manga con líneas de costura piquetes de marcación.
            .row.justify-content-center                 
              .col-lg-9
                figure                      
                  img(src='@/assets/curso/tema4/img17.svg')
        .row(titulo="17").justify-content-center
          .col-lg-11           
            h4 Verificación-corrección-afinado y limpieza del patrón base                          
            p.mb-5 Colocar las <b>mangas encima e los corpiños delantero y posterior</b> comenzando en la esquina de sisa costado y con la ayuda de un punzón o lápiz iniciar el recorrido alrededor de la sisa coincidiendo los piquetes tanto en delantero como en el posterior y hasta llegar a la copa.
            .row.justify-content-center                 
              .col-lg-12
                figure                      
                  img(src='@/assets/curso/tema4/img18.svg')
        .row(titulo="18").justify-content-center
          .col-lg-11           
            h4 Verificación-corrección-afinado y limpieza del patrón base          
            .row.justify-content-center                 
              .col-lg-9    
                p.mb-4 Con la verificación del <b>pantalón</b> ocurre algo semejante que con los otros patrones ya que las líneas se afinaran de acuerdo a lo <b>trazado marcando piquetes y trazando las curvas con las reglas francesas para el tiro y de cadera para los costados</b>, manteniendo la línea de centro del tejido y haciendo coincidir los piquetes de rodilla en los costados.
                ul.lista-ul--color.mb-5.px-3
                  li 
                    i.fas.fa-brain
                    | Recortar el exceso de tejido y agregar márgenes de costura.
                  li 
                    i.fas.fa-brain
                    | Montar de nuevo las piezas al <i>gabarit</i> procurando la precisión de este y rectificando medidas.
                  li 
                    i.fas.fa-brain
                    | Proceder a calcar sobre la cartulina según lo explicado.
                .row.justify-content-center                 
                  .col-lg-3
                    figure                      
                      img(src='@/assets/curso/tema4/img19.svg')
              .col-lg-3.px-4
                figure                      
                  img(src='@/assets/curso/tema4/img20.svg')
        .row(titulo="19").justify-content-center
          .col-lg-11           
            h4 Verificación-corrección-afinado y limpieza del patrón base                          
            p.mb-4 En el afinado de los <i>toile</i> de las <b>pinzas</b> se realizarán los mismos pasos que en el básico de corpiño conservando las líneas de construcción piquetes de unión y aplomo de la tela según el diseño. 
            ul.lista-ul--color.mb-5.px-3
              li 
                i.fas.fa-brain
                | Trazar las sisa y escote con la regla curva francesa y verificando en el <i>gabarit</i> la precisión de este y rectificando medidas. 
              li 
                i.fas.fa-brain
                | Retirar la excedencia de tejido y añadiendo costuras.
            .row.justify-content-center                 
              .col-lg-10
                figure                      
                  img(src='@/assets/curso/tema4/img21.svg')
        .row(titulo="20").justify-content-center
          .col-lg-11           
            h4 Verificación-corrección-afinado y limpieza del patrón base    
            SlyderA
              .row.justify-content-center 
                .col-lg-4
                  figure                      
                    img(src='@/assets/curso/tema4/img22.svg')   
              .row.justify-content-center 
                .col-lg-4
                  figure                      
                    img(src='@/assets/curso/tema4/img23.svg')   
              .row.justify-content-center 
                .col-lg-4
                  figure                      
                    img(src='@/assets/curso/tema4/img24.svg')    
              .row.justify-content-center 
                .col-lg-4
                  figure                      
                    img(src='@/assets/curso/tema4/img25.svg')
              .row.justify-content-center 
                .col-lg-4
                  figure                      
                    img(src='@/assets/curso/tema4/img26.svg')
              .row.justify-content-center 
                .col-lg-4
                  figure                      
                    img(src='@/assets/curso/tema4/img27.svg')
              .row.justify-content-center 
                .col-lg-4
                  figure                      
                    img(src='@/assets/curso/tema4/img28.svg')
              .row.justify-content-center 
                .col-lg-4
                  figure                      
                    img(src='@/assets/curso/tema4/img29.svg')
              .row.justify-content-center 
                .col-lg-4
                  figure                      
                    img(src='@/assets/curso/tema4/img30.svg')
              .row.justify-content-center 
                .col-lg-4
                  figure                      
                    img(src='@/assets/curso/tema4/img31.svg')
              .row.justify-content-center 
                .col-lg-4
                  figure                      
                    img(src='@/assets/curso/tema4/img32.svg')                      
            

</template>

<script>
export default {
  name: 'Tema4',
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
