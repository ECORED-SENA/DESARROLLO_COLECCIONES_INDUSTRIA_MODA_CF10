<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1  Fundamentos y características

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")   
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-4 El modelado de prendas de vestir sobre maniquí también llamado moulage es la técnica por la que se realizan directamente sobre el maniquí llamado gabarit o sobre la persona, vestuario en tres dimensiones moldeándolos sobre dicho cuerpo y creando su forma teniendo en cuenta que este es asimétrico, pero siguiendo una serie de proporciones. Aquí las tablas de medidas se constituyen a partir de la edad, medidas principales tanto en horizontal como en vertical y en la talla dada en el maniquí.
        br 
        br
        p.mb-0 La característica del drapeado consiste en la creación de piezas manipulando la tela donde un área se sostiene y liberando en la otra parte, las creaciones se hacen a partir de dobleces, recogidos, fruncidos o arrugados. Es la técnica por excelencia del diseñador que quiere ver su obra en un prototipo exacto antes de la prenda final.

    p.mb-5 Veamos los insumos y materiales que se requerirán para iniciar a trabajar esta técnica indispensable para el desarrollo de la colección.

    h3 Materiales, insumos, herramientas y aplicaciones para drapeado

    p.mb-5 Para poder llevar a cabo el proceso de drapeado, es indispensable contar con varias herramientas que nos facilitarán el quehacer, veámos:

    SlyderB.mb-5(:datos="datosSlyder")

    Separador
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'El gabarit',
        texto:
          'El principal elemento es el maniquí o gabarit debe ser enguatado y recubierto de tela llamada Percal, para que los pines o alfileres se puedan fijar bien; sin brazos y sin la forma de la hombrera, el brazo se añade independiente a este y a necesidad según diseño.<br><br>Los gabarit en su parte inferior cambian de acuerdo al diseño de la prenda, sea falda o pantalón, y su base está hecha en madera o metal permitiendo el apoyo, lo cual da firmeza a la hora de manipular el material sobre él.<br><br>Los gabarit vienen en sus formas en femenino, masculino e infantil. Estos se adaptan rellenándolo a la medida de la persona o en alta costura con medidas estandarizadas. ',
        imagen: require('@/assets/curso/tema1/img03.png'),
      },
      {
        titulo: 'Gasilla',
        texto:
          'El segundo elemento es la tela llamada “Glasilla”, comercialmente llamada etamina, liencillo o dacrón, siendo la mejor para este el liencillo 100% algodón crudo y aprestado, al cual se le da un tratamiento especial ya que debe ir cortada al hilo sin estiramiento en los orillos.',
        imagen: require('@/assets/curso/tema1/img04.png'),
      },
      {
        titulo: 'Pines o alfileres niquelados',
        texto:
          'También se requiere de pines o alfileres niquelados de 3.4cms de longitud, deben ser de acero ya que pueden oxidarse y/o doblarse. Estos se utilizarán para sujetar las diferentes capas de tela entre sí, de tal manera que sea posible fijarla al maniquí.',
        imagen: require('@/assets/curso/tema1/img05.png'),
      },
      {
        titulo: 'Bolduc',
        texto:
          'Para realizar la marcación o delimitación del gabarit se necesita el Bolduc, que es una cinta de raso de 0,5 cm o 0.8 cm de ancho, de colores vivos. Estas son fijadas al gabarit con los pines. permite visualizar las líneas principales de construcción del patrón o prototipo por transparencia de la glasilla. Desde hace poco también se está utilizando una cinta de color llamada maskin tape, de igual medida de ancho que suple el trabajo de los bolduc en las líneas divisorias.',
        imagen: require('@/assets/curso/tema1/img06.png'),
      },
      {
        titulo: 'Cinta métrica',
        texto:
          'Para poder realizar la marcación es importante la cinta métrica, con centímetros y pulgadas ya que las medidas serán tomadas con ambas.',
        imagen: require('@/assets/curso/tema1/img07.png'),
      },
      {
        titulo: 'Lápiz blando',
        texto:
          'Para marcar, se utilizarán lápices de colores punta blanda vidriograf preferiblemente rojo, por su textura suave que desliza suavemente por la glasilla marcando todo lo necesario para el prototipo.',
        imagen: require('@/assets/curso/tema1/img08.png'),
      },
      {
        titulo: 'Alfiletero',
        texto:
          'Para practicidad del manejo de los pines se utiliza un alfiletero en pulsera o anillo, este es una almohadilla en el cual se van dejando los pines para irlos utilizando en el gabarit.',
        imagen: require('@/assets/curso/tema1/img09.png'),
      },
      {
        titulo: 'Otros utensilios y herramientas',
        texto:
          'Se necesitan los mismos utensilios y herramientas que para trabajar patronaje plano, como son: reglas de patronaje, cartulina, tijera para cortar papel, tijera para cortar tela, mesa y plancha (dentro de lo posible, plancha a vapor) y una tela de algodón mojado de 40X40 cm para planchar costuras, agujas de mano e hilos, cinta de enmascarar, las tijeras para tela deben ser manejables y livianas con una punta muy fina para hacer piquetes.<br><br>Se tendrá a mano un espejo de preferencia de cuerpo entero, que nos ayudará a garantizar que las líneas hechas con los bolducs estén rectas',
        imagen: require('@/assets/curso/tema1/img10.png'),
      },
    ],
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
