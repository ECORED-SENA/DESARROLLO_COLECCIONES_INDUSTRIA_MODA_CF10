export default {
  global: {
    componenteFormativo: 'Drapeado y sus técnicas',
    descripcionCurso:
      'El <i>moulage</i> o drapeado, es el nombre con el que se le conoce a la técnica de realizar diseños sobre un maniquí conocido como <i>gabarit</i>, encintando o demarcando con cintas (<i>bolduc</i>) el modelado de prendas o “patrón” en tela, en francés se utiliza el término <i>toile</i>; en donde, a través de un material llamado glasilla o percal -tela plana de algodón en crudo- se facilita la creación de modelos en forma artística generando nuevas formas de patronar para dar vida a nuevas creaciones.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos y características',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Marcación y líneas de referencia para patrones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estudio de las proporciones y la figura humana',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Encintado del <i>gabarit</i>',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Técnicas básicas de drapeado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Realización de básicos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Pinzas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Verificación, corrección, afinado y limpieza del patrón base',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Industrialización de patrones',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Escalado de patrones',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Tejidos para drapeados',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Elaboración y Desarrollos de propuestas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo: 'Manejo del tejido/drapeados más usuales ',
            hash: 't_8_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.2',
            titulo: 'Desarrollo de prototipos con volumens ',
            hash: 't_8_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Amaden-Crawford, C. (2012). The Art of Fashion Draping (2th ed.). Fairchild Books.',
    },
    {
      referencia:
        'Class, T. C. (2013, 28 noviembre). Contemporary Smocking Techniques. The Cutting Class. ',
      link: 'https://www.thecuttingclass.com/contemporary-smocking-techniques/',
    },
    {
      referencia:
        'Diccionario de tejidos | Términos y acepciones textiles | M-P. (2019, 23 julio). Ribes & Casals.  ',
      link: 'https://telas.com/glosario-textil-tipos-telas/de-la-m-a-la-p/',
    },
    {
      referencia: 'Gaviria, A. (2018). Escalado.',
    },
    {
      referencia:
        'Kiisel, K. (2013). Draping: The Complete Course (Pap/DVD ed.). Laurence King.',
    },
    {
      referencia:
        'Lo, D. C. (2011). Pattern Cutting (Illustrated ed.). Laurence King.',
    },
    {
      referencia:
        'M. (2020, 20 diciembre). TUTORIAL SOBRE LOS PLIEGUES. PATRONES DE COSTURA.  ',
      link:
        'https://menchuhiloyaguja.blogspot.com/2013/07/tutorial-de-pliegues-fuelles-faldas-de-camilla-cubrecanape.html',
    },
    {
      referencia:
        'Real Académia Española. (n.d.). DRAE | Diccionario de la lengua española | Edición del Tricentenario | RAE - ASALE. Retrieved July 6, 2020, from ',
      link: 'https://dle.rae.es/',
    },
    {
      referencia:
        'Shingo Sato draping technique. (2012, 22 junio). justskirtsanddresses. ',
      link:
        'http://justskirtsanddresses.blogspot.com/2012/06/shingo-sato-draping-technique.html',
    },
    {
      referencia:
        'Tiempo, R. E. L. (2012, 28 septiembre). Shingo Sato, el diseñador del nuevo patronaje. El Tiempo. ',
      link: 'https://www.eltiempo.com/archivo/documento/CMS-12264329',
    },
    {
      referencia: 'Vocabulario/ Glosario. (2007). academiasistemacyc. ',
      link: 'https://www.academiasistemacyc.com/vocabulario/glosario_menu.php',
    },
    {
      referencia:
        'Wikipedia. (n.d.). Wikipedia, la enciclopedia libre. Wikipedia. Retrieved July 6, 2020, from ',
      link: 'https://es.wikipedia.org/wiki/Drapeado',
    },
    {
      referencia:
        'Fundación MAPFRE. (2012). Lesiones en el hombro. Trauma 23(2012). ',
      link:
        'https://app.mapfre.com/fundacion/html/revistas/trauma/v23s1/contenido-6.html',
    },
  ],
  glosario: [
    {
      termino: 'Afinar',
      significado:
        'Realizar una corrección de líneas dándole a un patrón una forma propicia para cortarlo en tela. Terminar un patrón dándole una forma propicia. Hacer las correcciones necesarias al patrón y/o prenda para que tenga buena caída sobre la persona. Ajustar el forro a la medida de la tela de la prenda cuando este se ha cortado en bruto.  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Alforza',
      significado:
        'Doblez o pliegue cosido en la tela para darle forma a una prenda, para acortarla o con fines decorativos a través de pliegues muy pequeños ya sean triples, cuádruples y otros. Cosidos, con un área plana entre ellos.  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Amplitud',
      significado:
        'Es el volumen o vuelo que se aumenta al molde o patrón para llevar a cabo la transformación de un trazo. Ancho de tela mayor que las medidas reales de una prenda de vestir, para poder formar pliegues o fruncirla se señala la amplitud necesaria para los diferentes modelos con una clave.  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Antropometría',
      significado:
        'Parte de la antropología que estudia las proporciones y medidas del cuerpo humano: la antropometría es una técnica auxiliar de la paleontología. Entre otras cosas, estudio de las medidas generales del cuerpo humano.  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Ápice',
      significado:
        '1. m. Extremo superior o punta de algo. U. t. en sent. fig. (Españoa, s.f.)',
    },
    {
      termino: 'Asimétrico',
      significado:
        'Que no tiene dos partes exactamente iguales. Que no guarda simetría o que carece de ella: figura asimétrica.  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Bies',
      significado:
        'Trozo de tela cortado en sesgo (en diagonal) respecto al hilo, que se aplica a los bordes de prendas de vestir.  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Caída',
      significado:
        'Característica básica de cada tejido que se rige por la forma en que fue manufacturado y el peso de la fibra. Los materiales sintéticos con base plástica no caen tan bien como los de fibras naturales. Manera de plegarse o caer una tela, y que depende de su espesor, peso, y corte. La caída de una prenda de vestir depende de la tela con que se confecciona. Cuando se aprecia la calidad de la tela por el movimiento ondulante que produce su propio peso. Prenda con una apreciable estética en el corte.  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Canto',
      significado:
        'Extremo u orilla. Terminación de los patrones o plantillas o las piezas confeccionadas en torno suyo. Borde.  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Cowl',
      significado: 'Véase drapeado.  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Drapeado',
      significado:
        'Plegar artísticamente una tela con exactitud de la dirección del hilo de la tela al Sesgo. Tela recogida en la dirección del bies (con el hilo de la tela al sesgo) de un punto para constituir diversos pliegues. Para que los drapeados tengan la caída adecuada se deben cortar siempre al sesgo.  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Drop',
      significado:
        'Esta palabra se usa para distinguir la diferencia en centímetros entre prendas, respecto a dos de sus medidas más importantes, cuando una de estas medidas es constante y la otra es variable, por ejemplo, el pecho y la cadera. Este método es utilizado por firmas que producen grandes series de prendas, para cubrir al máximo la variedad de constituciones anatómicas  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Percal',
      significado:
        'Del persa “percala” (tela ligera). Tejido de algodón, algo parecido a la cretona, pero de mejor calidad, más fino y de mayor densidad, con ligamento tafetán blanqueado. Tejido en pieza o más generalmente estampado y aprestado con cierto brillo. Se usa para vestidos, camisas y otras aplicaciones.  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Fruncir',
      significado:
        'Plegar una tela en arrugas pequeñas y paralelas.  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Fuelle',
      significado:
        'Posición de dos pliegues encarados. Arruga del vestido.  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Godete',
      significado:
        'Es la ampliación que se le da a una prenda por medio de cortes adecuados que se hacen de abajo hacia arriba en el molde o patrón en diferentes partes de prendas de vestir como cuellos, holanes, mangas, faldas, etc. Vuelo producido por la amplitud de tela en el bajo de una prenda. Una de las formas de conseguirlo es haciendo cortes en el bajo en dirección ascendente e incrustar piezas con forma triangular.  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Gola',
      significado:
        'Adorno de encaje o tul, que era utilizado alrededor del cuello, ajustado y profusamente plegado.  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Patrón',
      significado:
        'Es el (molde) patrón de una prenda determinada, el cual guardamos y usamos cada vez que vamos a realizar una prenda de ese tipo, ya que reúne unas medidas, proporciones o forma, según nuestro gusto o configuración anatómica al uso. También conocido como molde.  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Patrón básico',
      significado:
        'Es el patrón base de las principales formas (talle, manga, falda, pantalón, pantaleta) que normalmente se hace de cartón, plástico u otro material (papel kraft o kraftcena) que se utiliza como guía o plantilla para poder hacer la transformación de una prenda particular, se guarda colgado para que no se deforme y se usa cada vez que vamos a realizar una transformación ya que reúne las medidas, proporciones y formas requeridas.  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Patrones a escala',
      significado:
        'Es un esquema de un patrón con menores y mayores dimensiones que el original y proporcionales a este.  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Piquete',
      significado:
        'Pequeño corte o señal hecha en los cantos de los patrones; los piquetes sirven para reconocer los patrones fácilmente, unir las piezas correctamente, como guía de montaje y confección. Cortes o marcas que se hacen sobre la tela para hacerla coincidir o hacer un señalamiento. Consejo: los cortes se hacen perpendiculares a la orilla para que no se deshilache la tela; también se le puede llamar "aplomo o muesca.  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Pivoteo',
      significado:
        'Extremo cilíndrico o puntiagudo de una pieza, donde se apoya o inserta otra, bien con carácter fijo o bien de manera que una de ellas pueda girar u oscilar con facilidad respecto de la otra. En materia de corte se utiliza para el cambio de pinza sin tener que hacer cortes.  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Pliegue',
      significado:
        'Doblez hecho para ceñir como pinza hueca. // Doblez hecho para dar amplitud como los usados en el plisado.  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Plisado',
      significado:
        'Un plegado permanente que puede ser aplicado a casi todos los géneros.  (Academiasistemacyc, s.f.)',
    },
    {
      termino: 'Punto acromion',
      significado:
        'El acromion articula con la clavícula por la articulación acromio-clavicular. El ángulo entre la escápula y la clavícula depende de la posición del brazo: cuando el hombro está en flexión el ángulo es de 50º, en reposo se encuentra a unos 60º y en extensión aumenta hasta los 70º. (Fundación MAPFRE)',
    },
    {
      termino: 'Vaciado-vaciar',
      significado:
        'Dar más cavidad a un escote o una sisa. (Academiasistemacyc, s.f.)',
    },
  ],
  complementario: [
    {
      texto:
        'Amaden-Crawford; C. (s.f.). The Art of Fashion Draping. Second Edition. Fairchlid publications; New York.',
      tipo: 'Libro',
      descarga: '/downloads/THE-ART-OF-FASHION-DRAPING.pdf',
    },
    {
      texto:
        'Castro, A. (2011). Estudio y experimentación del modelado de tela sobre maniquí. Universidad de Azuay. Cuenca; Ecuador.',
      tipo: 'Tesis',
      descarga:
        '/downloads/ESTUDIO-Y-EXPERIMENTACION-DEL-MODELADO-DE-TELA-SOBRE-MANIQUI.pdf',
    },
    {
      texto:
        'Chunman, D. L. (2011). Patronaje. Laurence King Publishing Ltd. Londres.',
      tipo: 'Libro',
      descarga: '/downloads/PATRONAJE.pdf',
    },
    {
      texto:
        'Fabric Manipulation Swirl Pattern. (2015, 28 mayo). [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/mz3laO56wwQ ',
    },
    {
      texto:
        'Fabric manipulation, how to Pleats Please. (2017, 16 noviembre). [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/-JCqkVA69GA ',
    },
    {
      texto:
        'Fabric Manipulation Techniques - Indigo & Violet Project. (2020, 12 julio). [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/mKt2PCrl2IQ ',
    },
    {
      texto:
        'How to use FABRIC MANIPULATION WITH PLEATING | 4 different techniques. (2020, 29 septiembre). [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/magtOtHpaWY ',
    },
    {
      texto:
        'Kiisel, K. (2013). Draping. Laurence King Publishing Ltd. Londres.',
      tipo: 'Libro',
      descarga: '/downloads/DRAPING-THE-COMPLETE-COURSE.pdf',
    },
    {
      texto:
        'Manjarres, G. S. (2018). Técnicas de manipulación textil. Universidad Francisco de Quito. ',
      tipo: 'Tesis',
      descarga: '/downloads/TECNICAS-DE-MANIPULACION-TEXTIL.pdf',
    },
    {
      texto:
        'Momita78. (2018, 23 octubre). Patronista Shingo Sato. Momita’s blog.',
      tipo: 'Página Web',
      link: 'https://momitablog.com/shingo-sato/ ',
    },
    {
      texto:
        'Orsini, E. [elaorsini]. (2020, 23 marzo). Ela Orsini ~ Fashion Designer [IGTV]. Ela Orsini ~ Fashion Designer.',
      tipo: 'IGTV Instagram',
      link: 'https://www.instagram.com/elaorsini/?hl=es ',
    },
    {
      texto:
        'SENATI-IPACE. (2003). Patronaje industrial en tejido plano para damas: el corpiño. Tercera edición.',
      tipo: 'Guía del participante / Documento académico',
      descarga: '/downloads/PATRONAJE.pdf',
    },
    {
      texto:
        'Техника полу зашитых складок. Chaqueta pliegues cosidos. (2018, 26 abril). [Vídeo]. YouTube. https://www.youtube.com/watch?v=gvHq4zmY0Oc&feature=youtu.be ',
      tipo: 'Video',
      link: 'https://youtu.be/gvHq4zmY0Oc ',
    },
    {
      texto:
        'TR Cutting School-Origami Workshop by Shingo Sato-Origami Petal. (2015, 18 junio). [Vídeo]. YouTube.',
      tipo: 'Video',
      link:
        'https://youtu.be/yk_YP4j6NVs?list=PLMNC3p5x0rZwssqJ36xAZQRMdx92KDRvP ',
    },
    {
      texto:
        'Лиф с твердой грудью. Torso con busto rígido. (2018, 14 abril). [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/KjtqBeBHi8A ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Marisol Osorio',
        cargo: 'Líder Sennova',
        centro:
          'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'María Luisa Yepes',
        cargo: 'Instructora',
        centro:
          'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'Fabio Andrés Gaviria Londoño',
        cargo: 'Instructor',
        centro:
          'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'Jhon Fernando Jaramillo Taborda',
        cargo: 'Investigador – Grupo de investigación INAMOD',
        centro:
          'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro para la comunicación de la Industria Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección y edición de estilo',
        centro:
          'Centro para la comunicación de la Industria Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Anllelo Andrés Reina Montañez',
        cargo: 'Diseño web',
        centro: 'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Edgar Mauricio Cortés García',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - gional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
