export default {
  global: {
    componenteFormativo: 'Diagnóstico de circuitos electrónicos',
    descripcionCurso:
      'En este componente formativo se tratan conceptos relacionados con las herramientas utilizadas en el diagnóstico de circuitos electrónicos, su uso adecuado, normas aplicadas y los insumos necesarios para emitir un concepto acertado del estado de un producto electrónico.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Entorno de trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Procedimientos de alistamiento del área de trabajo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Normas de seguridad y salud en el trabajo',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Condiciones técnicas, térmicas y atmosféricas que pueden influir según el tipo de equipo',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Procedimientos de aprovisionamiento y solicitud',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas y equipos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Clasificación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Características',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Insumos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Clasificación',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Almacenamiento',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
      referencia: 'ABC Pack. (s. f.). Espuma antiestática.',
      link: 'https://www.abc-pack.com/productos/espuma-antiestatica/',
    },
    {
      referencia:
        'Biegelmeier, G. (1986). Efectos de la corriente eléctrica en humanos y ganado. VDE.',
    },
    {
      referencia: 'Handskit. (s. f.). Handskit Soldering Iron Kit.',
      link: 'http://www.handskit.com/enproductslist.asp?id=675',
    },
    {
      referencia: 'National Instruments [NI]. (s. f.). NI ELVIS III.',
      link: 'https://www.ni.com/es-co/support/model.ni-elvis-iii.html',
    },
    {
      referencia:
        'Pallás, R. (2007). Instrumentos electrónicos básicos. Alfaomega.',
    },
    {
      referencia:
        'Real Academia Española. (2020). Definición de electrostático, ca.',
      link: 'https://dle.rae.es/electrost%C3%A1tico',
    },
    {
      referencia:
        'Renishaw. (2020). Ficha técnica. Advanced Diagnostic Tool ADTi-100.',
      link:
        'https://www.renishaw.es/media/pdf/en/49ad60e539354f58b85a10aabea009cb.pdf',
    },
    {
      referencia:
        'Resolución 181294 de 2008. [Ministerio de Minas y Energía]. Por la cual se modifica el Reglamento Técnico de Instalaciones Eléctricas - RETIE. Agosto 6 de 2008.',
      link:
        'https://normograma.info/ssppdd/docs/resolucion_minminas_181294_2008.htm',
    },
    {
      referencia:
        'Resolución 5018 de 2019. [Ministerio del Trabajo]. Por la cual se establecen lineamientos en Seguridad y Salud en el trabajo en los Procesos de Generación, Transmisión, Distribución y Comercialización de la Energía Eléctrica. Noviembre 20 de 2019.',
    },
    {
      referencia: 'Wikipedia. (2019). Energía específica.',
      link: 'https://es.wikipedia.org/wiki/Energ%C3%ADa_espec%C3%ADfica',
    },
  ],
  glosario: [
    {
      termino: 'Diagnóstico',
      significado:
        'Recoger y analizar datos para evaluar problemas de diversa naturaleza. (Real Academia Española, 2020)',
    },
    {
      termino: 'Electrostática',
      significado:
        'Rama de la física que estudia los sistemas de cuerpos electrizados en equilibrio. f. Electr. Redistribución de las cargas eléctricas en un conductor por la acción de un campo eléctrico exterior. (Real Academia Española, 2020)',
    },
    {
      termino: 'Energía específica',
      significado:
        'La energía específica es la energía por unidad de masa. Se utiliza para cuantificar, por ejemplo, el calor almacenado u otras propiedades termodinámicas de sustancias. (Wikipedia, 2019)',
    },
    {
      termino: 'Estaño',
      significado:
        'Elemento químico metálico, de número atómico 50, de color y brillo plateados, que se emplea para recubrir otros metales, en el envasado de alimentos y en soldaduras, y que, aleado con el cobre, forma el bronce. (Símb. Sn). (Real Academia Española, 2020)',
    },
    {
      termino: 'Multímetro',
      significado:
        'm. Electr. Instrumento que permite medir varias magnitudes eléctricas, como la intensidad, la tensión y la resistencia. (Real Academia Española, 2020)',
    },
    {
      termino: 'Osciloscopio',
      significado:
        'm. Electr. Aparato provisto de una pantalla y que sirve para representar en ella magnitudes físicas que varían rápidamente. (Real Academia Española, 2020)',
    },
  ],
  complementario: [
    {
      texto:
        'Resolución 5018 de 2019. [Ministerio del Trabajo]. Por la cual se establecen lineamientos en Seguridad y Salud en el trabajo en los Procesos de Generación, Transmisión, Distribución y Comercialización de la Energía Eléctrica. Noviembre 20 de 2019',
      tipo: 'Texto',
      link: 'https://safetya.co/normatividad/resolucion-5018-de-2019/',
    },
    {
      texto: 'Renishaw. (s. f.). Advanced Diagnostic Tools (ADT).',
      tipo: 'Hoja de datos',
      link: 'https://www.renishaw.es/es/advanced-diagnostic-tools-adt--38358',
    },
    {
      texto: 'National Instruments Corp.',
      tipo: 'Sitio web',
      link: 'https://www.ni.com/es-co/',
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
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Gewin Alfonso Fernández Cáceres',
        cargo: 'Instructor',
        centro: 'Centro Nacional Colombo Alemán <br>Regional Atlántico',
      },
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñador y evaluador instruccional',
        centro: 'Centro de Gestión Industrial <br>Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Gestión Industrial <br>Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Revisión y corrección de estilo',
        centro: 'Centro Agropecuario La Granja <br>Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
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
