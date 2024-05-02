export const tests = {
  test1: {
    urlQueryParam: "test1",
    urlQueryParamNextTest: "test2",
    activeIndex: 0,
    type: "input",
    question:
      "Encuentra la ubicación de estos dos ornamentos y especifica el nombre del lugar o monumento donde se encuentran.",
    image: true,
    imagePath: "/images/tests/test1.png",
    answer: "Conde Pedro Ansurez",
    place: "Plaza Mayor",
    imageInfoPath: "/images/info/test1.png",
    textInfo:
      "El Conde Ansúrez, figura histórica destacada en la historia de España, emerge como un símbolo de valentía, astucia y lealtad en los turbulentos tiempos de la Reconquista. Su legado se enraíza en la Castilla medieval, donde su influencia política y militar marcó un hito en la consolidación del reino. Nacido en el siglo X en la región de León, Pedro Ansúrez, más conocido como el Conde Ansúrez, se erigió como un líder indiscutible durante una época caracterizada por las luchas entre cristianos y musulmanes por el control de la península ibérica. Hombre de gran inteligencia y destreza militar, Ansúrez dedicó su vida a defender y expandir los territorios cristianos frente al avance musulmán. Uno de los momentos más destacados en la vida del Conde Ansúrez fue su participación en la batalla de Simancas en el año 939, donde las fuerzas cristianas lideradas por él lograron una victoria crucial sobre el califato de Córdoba. Esta batalla no solo consolidó su posición como un líder militar respetado, sino que también contribuyó significativamente a la expansión del reino de León.",
    imagePhone: "images/phone/phoneL1.png",
    index: "primer",
    pucelano: {
      clue1: {
        text: "No mires en las fachadas.",
        imagen: false,
        imagePath: "./",
      },
      clue2: {
        text: "Lo importante está en el interior.",
        imagen: false,
        imagePath: "",
      },
      clue3: {
        text: "Es un conde.",
        imagen: false,
        imagePath: "",
      },
      answer: {
        text: "Conde Pedro Ansurez",
        imagen: false,
        imagePath: "",
      },
    },
  },
  test2: {
    urlQueryParam: "test2",
    urlQueryParamNextTest: "test3",
    activeIndex: 1,
    type: "input",
    question:
      "¿Cuál era el nombre de esta calle antes del gran incendio de 1561? ",
    image: true,
    imagePath: "/images/tests/test2.jpg",
    answer: "Calle Costanilla",
    place: "Calle de la Platería",
    imageInfoPath: "/images/info/test3.png",
    textInfo:
      "El Conde Ansúrez, figura histórica destacada en la historia de España, emerge como un símbolo de valentía, astucia y lealtad en los turbulentos tiempos de la Reconquista. Su legado se enraíza en la Castilla medieval, donde su influencia política y militar marcó un hito en la consolidación del reino. Nacido en el siglo X en la región de León, Pedro Ansúrez, más conocido como el Conde Ansúrez, se erigió como un líder indiscutible durante una época caracterizada por las luchas entre cristianos y musulmanes por el control de la península ibérica. Hombre de gran inteligencia y destreza militar, Ansúrez dedicó su vida a defender y expandir los territorios cristianos frente al avance musulmán. Uno de los momentos más destacados en la vida del Conde Ansúrez fue su participación en la batalla de Simancas en el año 939, donde las fuerzas cristianas lideradas por él lograron una victoria crucial sobre el califato de Córdoba. Esta batalla no solo consolidó su posición como un líder militar respetado, sino que también contribuyó significativamente a la expansión del reino de León.",
    imagePhone: "/images/phone/phoneI.png",
    index: "segundo",
    pucelano: {
      clue1: {
        text: "Fíjate en el suelo.",
        imagen: false,
        imagePath: "",
      },
      clue2: {
        text: "Dirígete junto al portal 1A.",
        imagen: false,
        imagePath: "",
      },
      clue3: {
        text: "",
        imagen: true,
        imagePath: "/images/clues/test1.png",
      },
      answer: {
        text: "Calle Costanilla",
        imagen: false,
        imagePath: "",
      },
    },
  },

  test3: {
    urlQueryParam: "test3",
    urlQueryParamNextTest: "test4",
    activeIndex: 2,
    type: "code",
    question: "Introduce la clave:",
    image: true,
    imagePath: "/images/tests/test3.png",
    answer: "56-8",
    place: "Plaza del Viejo Coso",
    imageInfoPath: "/images/ingo/test3.png",
    textInfo:
      "El Conde Ansúrez, figura histórica destacada en la historia de España, emerge como un símbolo de valentía, astucia y lealtad en los turbulentos tiempos de la Reconquista. Su legado se enraíza en la Castilla medieval, donde su influencia política y militar marcó un hito en la consolidación del reino. Nacido en el siglo X en la región de León, Pedro Ansúrez, más conocido como el Conde Ansúrez, se erigió como un líder indiscutible durante una época caracterizada por las luchas entre cristianos y musulmanes por el control de la península ibérica. Hombre de gran inteligencia y destreza militar, Ansúrez dedicó su vida a defender y expandir los territorios cristianos frente al avance musulmán. Uno de los momentos más destacados en la vida del Conde Ansúrez fue su participación en la batalla de Simancas en el año 939, donde las fuerzas cristianas lideradas por él lograron una victoria crucial sobre el califato de Córdoba. Esta batalla no solo consolidó su posición como un líder militar respetado, sino que también contribuyó significativamente a la expansión del reino de León.",
    imagePhone: "/images/phone/phoneL2.png",
    index: "tercer",
    pucelano: {
      clue1: {
        text: "Soy una estructura curva que se utiliza para soportar peso y distribuir cargas de manera uniforme. ",
        imagen: false,
        imagePath: "./",
      },
      clue2: {
        text: "Me pueden empujar o tirar.",
        imagen: false,
        imagePath: "",
      },
      clue3: {
        text: "Cada lado del octógono contiene 7.",
        imagen: false,
        imagePath: "",
      },
      answer: {
        text: "56-8 ",
        imagen: false,
        imagePath: "",
      },
    },
  },
  test4: {
    urlQueryParam: "test4",
    urlQueryParamNextTest: "test5",
    activeIndex: 3,
    type: "date",
    question: "Localiza una fecha en la fachada de la Iglesia de San Pablo ",
    image: true,
    imagePath: "/images/tests/test4.jpg",
    answer: "07-12-1600",
    place: "Iglesia de San Pablo",
    imageInfoPath: "/images/info/test4.jpg",
    textInfo:
      "El Conde Ansúrez, figura histórica destacada en la historia de España, emerge como un símbolo de valentía, astucia y lealtad en los turbulentos tiempos de la Reconquista. Su legado se enraíza en la Castilla medieval, donde su influencia política y militar marcó un hito en la consolidación del reino. Nacido en el siglo X en la región de León, Pedro Ansúrez, más conocido como el Conde Ansúrez, se erigió como un líder indiscutible durante una época caracterizada por las luchas entre cristianos y musulmanes por el control de la península ibérica. Hombre de gran inteligencia y destreza militar, Ansúrez dedicó su vida a defender y expandir los territorios cristianos frente al avance musulmán. Uno de los momentos más destacados en la vida del Conde Ansúrez fue su participación en la batalla de Simancas en el año 939, donde las fuerzas cristianas lideradas por él lograron una victoria crucial sobre el califato de Córdoba. Esta batalla no solo consolidó su posición como un líder militar respetado, sino que también contribuyó significativamente a la expansión del reino de León.",
    imagePhone: "/images/phone/phoneO.png",
    index: "cuarto",
    pucelano: {
      clue1: {
        text: "Bajo los escudos.",
        imagen: false,
        imagePath: "./",
      },
      clue2: {
        text: "Bajo el escudo derecho.",
        imagen: false,
        imagePath: "",
      },
      clue3: {
        text: "VII. EID. DECEMB M.D.C",
        imagen: false,
        imagePath: "",
      },
      answer: {
        text: "07-12-1600",
        imagen: false,
        imagePath: "",
      },
    },
  },
  test5: {
    urlQueryParam: "test5",
    urlQueryParamNextTest: "test6",
    activeIndex: 4,
    type: "input",
    question:
      "¿Qué flor se encuentra en la fachada del Museo Nacional de Escultura?",
    image: true,
    imagePath: "/images/tests/test5.jpg",
    answer: "Flor de Lis",
    place: "Museo Nacional de Escultura",
    imageInfoPath: "/images/juego/test1.png",
    textInfo:
      "El Conde Ansúrez, figura histórica destacada en la historia de España, emerge como un símbolo de valentía, astucia y lealtad en los turbulentos tiempos de la Reconquista. Su legado se enraíza en la Castilla medieval, donde su influencia política y militar marcó un hito en la consolidación del reino. Nacido en el siglo X en la región de León, Pedro Ansúrez, más conocido como el Conde Ansúrez, se erigió como un líder indiscutible durante una época caracterizada por las luchas entre cristianos y musulmanes por el control de la península ibérica. Hombre de gran inteligencia y destreza militar, Ansúrez dedicó su vida a defender y expandir los territorios cristianos frente al avance musulmán. Uno de los momentos más destacados en la vida del Conde Ansúrez fue su participación en la batalla de Simancas en el año 939, donde las fuerzas cristianas lideradas por él lograron una victoria crucial sobre el califato de Córdoba. Esta batalla no solo consolidó su posición como un líder militar respetado, sino que también contribuyó significativamente a la expansión del reino de León.",
    imagePhone: "/images/phone/phoneA1.png",
    index: "quinto",
    pucelano: {
      clue1: {
        text: "Representa nobleza, poder, monarquía.",
        imagen: false,
        imagePath: "./",
      },
      clue2: {
        text: "Se encuentra numerosas veces.",
        imagen: false,
        imagePath: "",
      },
      clue3: {
        text: "",
        imagen: true,
        imagePath: "/images/clues/test5.png",
      },
      answer: {
        text: "Flor de Lis",
        imagen: false,
        imagePath: "",
      },
    },
  },
  test6: {
    urlQueryParam: "test6",
    urlQueryParamNextTest: "test7",
    activeIndex: 5,
    type: "input",
    question: "Descifra el código:",
    image: true,
    imagePath: "/images/tests/test6.png",
    answer: "5731",
    place: "Casa José Zorrilla",
    imageInfoPath: "/images/info/test6.png",
    textInfo:
      "El Conde Ansúrez, figura histórica destacada en la historia de España, emerge como un símbolo de valentía, astucia y lealtad en los turbulentos tiempos de la Reconquista. Su legado se enraíza en la Castilla medieval, donde su influencia política y militar marcó un hito en la consolidación del reino. Nacido en el siglo X en la región de León, Pedro Ansúrez, más conocido como el Conde Ansúrez, se erigió como un líder indiscutible durante una época caracterizada por las luchas entre cristianos y musulmanes por el control de la península ibérica. Hombre de gran inteligencia y destreza militar, Ansúrez dedicó su vida a defender y expandir los territorios cristianos frente al avance musulmán. Uno de los momentos más destacados en la vida del Conde Ansúrez fue su participación en la batalla de Simancas en el año 939, donde las fuerzas cristianas lideradas por él lograron una victoria crucial sobre el califato de Córdoba. Esta batalla no solo consolidó su posición como un líder militar respetado, sino que también contribuyó significativamente a la expansión del reino de León.",
    imagePhone: "/images/phone/phoneD1.png",
    index: "sexto",
    pucelano: {
      clue1: {
        text: "Juega con las fechas que no se muestran.",
        imagen: false,
        imagePath: "./",
      },
      clue2: {
        text: "dia nacimiento + año nacimiento + estancias + compra + monumento.",
        imagen: false,
        imagePath: "",
      },
      clue3: {
        text: "Suma todos los números, menos los romanos.",
        imagen: false,
        imagePath: "",
      },
      answer: {
        text: "5731.",
        imagen: false,
        imagePath: "",
      },
    },
  },
  test7: {
    urlQueryParam: "test7",
    urlQueryParamNextTest: "test8",
    activeIndex: 6,
    type: "input",
    question: "Me quiere, no me quiere…",
    image: true,
    imagePath: "/images/tests/test7.jpg",
    answer: "No me quiere",
    place: "Iglesia la Antigua",
    imageInfoPath: "/images/info/test7.png",
    textInfo:
      "El Conde Ansúrez, figura histórica destacada en la historia de España, emerge como un símbolo de valentía, astucia y lealtad en los turbulentos tiempos de la Reconquista. Su legado se enraíza en la Castilla medieval, donde su influencia política y militar marcó un hito en la consolidación del reino. Nacido en el siglo X en la región de León, Pedro Ansúrez, más conocido como el Conde Ansúrez, se erigió como un líder indiscutible durante una época caracterizada por las luchas entre cristianos y musulmanes por el control de la península ibérica. Hombre de gran inteligencia y destreza militar, Ansúrez dedicó su vida a defender y expandir los territorios cristianos frente al avance musulmán. Uno de los momentos más destacados en la vida del Conde Ansúrez fue su participación en la batalla de Simancas en el año 939, donde las fuerzas cristianas lideradas por él lograron una victoria crucial sobre el califato de Córdoba. Esta batalla no solo consolidó su posición como un líder militar respetado, sino que también contribuyó significativamente a la expansión del reino de León.",
    imagePhone: "/images/phone/phoneA2.png",
    index: "septimo",
    pucelano: {
      clue1: {
        text: "Comienza por me quiere.",
        imagen: false,
        imagePath: "",
      },
      clue2: {
        text: "Busca la flor más representativa.",
        imagen: false,
        imagePath: "",
      },
      clue3: {
        text: "",
        imagen: true,
        imagePath: "/images/clues/test7.png",
      },
      answer: {
        text: "No me quiere",
        imagen: false,
        imagePath: "",
      },
    },
  },

  test8: {
    urlQueryParam: "test8",
    urlQueryParamNextTest: "test9",
    activeIndex: 7,
    type: "input",
    question: "Descifrar la frase oculta: ",
    image: true,
    imagePath: "/images/tests/test8.png",
    answer: "Duque salió del Pisuerga de recrear",
    place: "Casa Miguel de Cervantes",
    imageInfoPath: "/images/info/test8.png",
    textInfo:
      "El Conde Ansúrez, figura histórica destacada en la historia de España, emerge como un símbolo de valentía, astucia y lealtad en los turbulentos tiempos de la Reconquista. Su legado se enraíza en la Castilla medieval, donde su influencia política y militar marcó un hito en la consolidación del reino. Nacido en el siglo X en la región de León, Pedro Ansúrez, más conocido como el Conde Ansúrez, se erigió como un líder indiscutible durante una época caracterizada por las luchas entre cristianos y musulmanes por el control de la península ibérica. Hombre de gran inteligencia y destreza militar, Ansúrez dedicó su vida a defender y expandir los territorios cristianos frente al avance musulmán. Uno de los momentos más destacados en la vida del Conde Ansúrez fue su participación en la batalla de Simancas en el año 939, donde las fuerzas cristianas lideradas por él lograron una victoria crucial sobre el califato de Córdoba. Esta batalla no solo consolidó su posición como un líder militar respetado, sino que también contribuyó significativamente a la expansión del reino de León.",
    imagePhone: "/images/phone/phoneL1.png",
    index: "octavo",
    pucelano: {
      clue1: {
        text: "Admira el camino que hacia Cervantes al salir de Casa dirección la Plaza Zorrilla.",
        imagen: false,
        imagePath: "./",
      },
      clue2: {
        text: "Cada placa corresponde a una palabra.",
        imagen: false,
        imagePath: "",
      },
      clue3: {
        text: "El número es la posición de la palabra en cada una de las frases.",
        imagen: false,
        imagePath: "",
      },
      answer: {
        text: "Duque salió del Pisuerga de recrear",
        imagen: false,
        imagePath: "",
      },
    },
  },
  test9: {
    urlQueryParam: "test9",
    urlQueryParamNextTest: "test10",
    activeIndex: 8,
    type: "input",
    question: "Indica el número de la orden militar que no está presente",
    image: true,
    imagePath: "/images/tests/test9.png",
    answer: "4",
    place: "Academia de Caballería",
    imageInfoPath: "/images/info/test9.png",
    textInfo:
      "El Conde Ansúrez, figura histórica destacada en la historia de España, emerge como un símbolo de valentía, astucia y lealtad en los turbulentos tiempos de la Reconquista. Su legado se enraíza en la Castilla medieval, donde su influencia política y militar marcó un hito en la consolidación del reino. Nacido en el siglo X en la región de León, Pedro Ansúrez, más conocido como el Conde Ansúrez, se erigió como un líder indiscutible durante una época caracterizada por las luchas entre cristianos y musulmanes por el control de la península ibérica. Hombre de gran inteligencia y destreza militar, Ansúrez dedicó su vida a defender y expandir los territorios cristianos frente al avance musulmán. Uno de los momentos más destacados en la vida del Conde Ansúrez fue su participación en la batalla de Simancas en el año 939, donde las fuerzas cristianas lideradas por él lograron una victoria crucial sobre el califato de Córdoba. Esta batalla no solo consolidó su posición como un líder militar respetado, sino que también contribuyó significativamente a la expansión del reino de León.",
    imagePhone: "/images/phone/phoneD2.png",
    index: "noveno",
    pucelano: {
      clue1: {
        text: "Fíjate en las fachadas del entorno.",
        imagen: false,
        imagePath: "./",
      },
      clue2: {
        text: "Alguna de las órdenes está repetida.",
        imagen: false,
        imagePath: "",
      },
      clue3: {
        text: "Fíjate en los escudos de caballería.",
        imagen: false,
        imagePath: "",
      },
      answer: {
        text: "4",
        imagen: false,
        imagePath: "",
      },
    },
  },
  test10: {
    urlQueryParam: "test10",
    urlQueryParamNextTest: "",
    activeIndex: 9,
    type: "input",
    question: "Aquí murió...",
    image: true,
    imagePath: "/images/tests/test10.jpg",
    answer: "Cristobal Colón",
    place: "Plaza Mayor",
    imageInfoPath: "/images/info/test10.jpg",
    textInfo:
      "El Conde Ansúrez, figura histórica destacada en la historia de España, emerge como un símbolo de valentía, astucia y lealtad en los turbulentos tiempos de la Reconquista. Su legado se enraíza en la Castilla medieval, donde su influencia política y militar marcó un hito en la consolidación del reino. Nacido en el siglo X en la región de León, Pedro Ansúrez, más conocido como el Conde Ansúrez, se erigió como un líder indiscutible durante una época caracterizada por las luchas entre cristianos y musulmanes por el control de la península ibérica. Hombre de gran inteligencia y destreza militar, Ansúrez dedicó su vida a defender y expandir los territorios cristianos frente al avance musulmán. Uno de los momentos más destacados en la vida del Conde Ansúrez fue su participación en la batalla de Simancas en el año 939, donde las fuerzas cristianas lideradas por él lograron una victoria crucial sobre el califato de Córdoba. Esta batalla no solo consolidó su posición como un líder militar respetado, sino que también contribuyó significativamente a la expansión del reino de León.",
    imagePhone: "/images/phone/phoneV.png",
    index: "décimo",
    pucelano: {
      clue1: {
        text: "Manten la vista en el suelo.",
        imagen: false,
        imagePath: "./",
      },
      clue2: {
        text: "",
        imagen: true,
        imagePath: "/images/clues/test10.png",
      },
      clue3: {
        text: "Juanto al Teatro Zorilla.",
        imagen: false,
        imagePath: "",
      },
      answer: {
        text: "Cristobal Colón",
        imagen: false,
        imagePath: "",
      },
    },
  },
};
