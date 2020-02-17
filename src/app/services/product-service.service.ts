import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  public productList: ProductI[] = [
    {
      name: 'Saco de invierno',
      image: 'assets/img/products/jacket.png',
      price: 69000,
      description: 'Elaborado con materiales de alta calidad, este cálido y suave saco.',
      category: 'Ropa',
      subcategory: 'Hombre'
    },
    {
      name: 'Maleta KANKEN',
      image: 'assets/img/products/backpack.png',
      price: 496900,
      description: 'Hecho de Vinylon F resistente a la suciedad y resistente al agua que se puede limpiar, el Kanken maneja todas las aventuras con facilidad.',
      category: 'Ropa',
      subcategory: ''
    },
    {
      name: 'Smart Watch Negro',
      image: 'assets/img/products/smartwatch.png',
      price: 39900,
      description: 'Vuelve tu vida más fácil con este reloj que no solo tiene las funciones de un reloj, además puedes utilizarlo como si fuera un celular.',
      category: 'Tecnología',
      subcategory: ''
    },
    {
      name: 'Audifonos BOSE XD-456',
      image: 'assets/img/products/headphones.png',
      price: 799000,
      description: 'Obtenga un sonido nítido y potente de nuestros primeros audífonos intrauditivos verdaderamente inalámbricos.',
      category: 'Tecnología',
      subcategory: ''
    },
    {
      name: 'Mueble Sofa',
      image: 'assets/img/products/sofa.png',
      price: 600000,
      description: 'Mueble de gama alta a bajo costo. Excelente para espacios pequeños. Fabricación en madera sajo tapizado en sintético, lonas y microfibras.',
      category: 'Muebles',
      subcategory: 'Sofas',
    },
    {
      name: 'Camisa Polo',
      image: 'assets/img/products/shirt.png',
      price: 45000,
      description: 'Polo para hombre. Hecho en material: 100% ALGODON/COTTON.',
      category: 'Ropa',
      subcategory: 'Hombre'
    },
    {
      name: 'Billetera de Cuero',
      image: 'assets/img/products/wallet.png',
      price: 58900,
      description: 'Esta billetera es 100% cuero, cuenta con sistema RFID, es sofisticada y elegante.',
      category: 'Ropa',
      subcategory: ''
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/pants.png',
      price: 71999,
      description: 'Jeans estilo elegante silueta semiajustada. Tiro normal. Desgaste marcado en tela.',
      category: 'Ropa',
      subcategory: 'Mujer'
    },
    {
      name: 'Equipo De Sonido Para Pc Tv',
      image: 'assets/img/products/electrodomesticos01.png',
      price: 219000,
      description: 'Disfruta de un sonido excepcional con el Sistema de Parlantes KWS 616 de 2.1 canales con tecnología Bluetooth®.',
      category: 'Electródomestico',
      subcategory: 'Equipos de sonido'
    },
    {
      name: 'Equipo Minicomponente',
      image: 'assets/img/products/electrodomesticos02.png',
      price: 499900,
      description: 'Equipo de sonido con 300 W de potencia para una experiencia de audio espectacular. Control desde el móvil con LG Bluetooth, USB dual para grabar y reproducir a la vez, lector de CD y Antena FM',
      category: 'Electródomestico',
      subcategory: 'Equipos de sonido'
    },
    {
      name: 'Nevera No Frost De 230lts',
      image: 'assets/img/products/electrodomesticos04.png',
      price: 10499000,
      description: 'Capacidad 230lts brutos. Gas R600. Clasificación energética tipo B. 2 parrillas cristal templado. Cajón de verduras con tapa. 1 anaquel para botellas. 1 anaquel completo en puerta. Luz LED',
      category: 'Electródomestico',
      subcategory: 'Neveras'
    },
    {
      name: 'Secadora De Ropa Compacta De 9 Libras De Capacidad',
      image: 'assets/img/products/electrodomesticos05.png',
      price: 2034990,
      description: 'Secadora de ropa compacta de 9 libras de capacidad. Secadora de ropa portátil de 2.6 pies cúbicos de carga frontal con ventana de visualización integrada en la bañera de acero inoxidable y panel de control inferior. Potencia de secado de 1400w',
      category: 'Electródomestico',
      subcategory: 'Lavadoras'
    },
    {
      name: 'Televisor Led 43 Full Hd Smart Tv Hdmi Usb',
      image: 'assets/img/products/electrodomesticos08.png',
      price: 1139900,
      description: 'Disfruta del Full HD en su máxima expresión. Clean View. Wide Color Enhancer. Calidad de imagen Full HD. Conecta y comparte contenidos',
      category: 'Electródomestico',
      subcategory: 'Televisores'
    },
    {
      name: 'Escritorio De Oficina Para Computadora En Madera',
      image: 'assets/img/products/muebles02.png',
      price: 219900,
      description: 'Mueble de gama alta a bajo costo. Excelente para espacios pequeños.',
      category: 'Muebles',
      subcategory: 'Escritorios'
    },
    {
      name: 'Escritorio En Madera Natural',
      image: 'assets/img/products/muebles03.png',
      price: 475000,
      description: 'Mueble de gama alta a bajo costo. Excelente para espacios pequeños.',
      category: 'Muebles',
      subcategory: 'Escritorios'
    },
    {
      name: 'Kit 4 Sillas Madera',
      image: 'assets/img/products/muebles04.png',
      price: 348900,
      description: 'Material del asiento: Polipropileno. Material de la base: Madera y acero. Altura: 82 cm. Altura del asiento: 42 cm. Ancho: 46 cm. Profundidad: 54 cm. Peso soportado: 110 kg.',
      category: 'Muebles',
      subcategory: 'sillas'
    },
    {
      name: 'Kit X2 Sillas',
      image: 'assets/img/products/muebles06.png',
      price: 269900,
      description: 'Material del asiento: Polipropileno. Material de la base: Madera y acero.',
      category: 'Muebles',
      subcategory: 'sillas'
    },
    {
      name: 'Comedor En Cedro 4 Puestos Elegante',
      image: 'assets/img/products/muebles07.png',
      price: 899000,
      description: 'Comedor de 4 puestos incluye. 4 sillas en cedro macizo pintado en el color de su elección. Tapizado en tela tela lisa en sintentico tipo cuero o tipo lona dependiendo de sus gustos',
      category: 'Muebles',
      subcategory: 'Comedores'
    },
    {
      name: 'Juego De Comedor Vidrio 6 Puestos',
      image: 'assets/img/products/muebles08.png',
      price: 498900,
      description: '6 Sillas para comedor cómoda de Estilo Moderno, liviana y cómodo. Este Kit De Comedor Para Tu Hogar Sin Duda La Mejor Opción Tanto En Calidad Como En Precio',
      category: 'Muebles',
      subcategory: 'Comedores'
    },
    {
      name: 'Comedor En Cedro 4 Puestos Elegante Blanco',
      image: 'assets/img/products/muebles09.png',
      price: 449990,
      description: 'Comedor de 4 puestos incluye. 4 sillas en cedro macizo pintado en el color de su elección. Tapizado en tela tela lisa en sintentico tipo cuero o tipo lona dependiendo de sus gustos',
      category: 'Muebles',
      subcategory: 'Comedores'
    },
    {
      name: 'Sala con Sofa y sillas abullonada Gris',
      image: 'assets/img/products/muebles10.png',
      price: 1599000,
      description: 'Mueble de gama alta a bajo costo. Excelente para espacios pequeños.',
      category: 'Muebles',
      subcategory: 'Juegos de salas'
    },
    {
      name: 'Sala con Sofa y sillas abullonada Negro',
      image: 'assets/img/products/muebles11.png',
      price: 1749999,
      description: 'Mueble de gama alta a bajo costo. Excelente para espacios pequeños.',
      category: 'Muebles',
      subcategory: 'Juegos de salas'
    },
    {
      name: 'Sillas abullonada Gris',
      image: 'assets/img/products/muebles12.png',
      price: 1399000,
      description: 'Mueble de gama alta a bajo costo. Excelente para espacios pequeños.',
      category: 'Muebles',
      subcategory: 'Juegos de salas'
    },
    {
      name: 'Sofa abullonada Gris',
      image: 'assets/img/products/muebles14.png',
      price: 1499000,
      description: 'Mueble de gama alta a bajo costo. Excelente para espacios pequeños.',
      category: 'Muebles',
      subcategory: 'Sofas'
    },
    {
      name: 'Sofa abullonada Azul',
      image: 'assets/img/products/muebles15.png',
      price: 999900,
      description: 'Mueble de gama alta a bajo costo. Excelente para espacios pequeños.',
      category: 'Muebles',
      subcategory: 'Sofas'
    },
    {
      name: 'Vestido niña Rosado',
      image: 'assets/img/products/ropa02.png',
      price: 69900,
      description: 'Vestido para niña Tennis, corto y estampado de flores.',
      category: 'Ropa',
      subcategory: 'Niños'
    },
    {
      name: 'Buzo Saco Blanco',
      image: 'assets/img/products/ropa03.png',
      price: 70000,
      description: 'Buzo elaborado en algodón perchado, de suave textura, estilo moderno.',
      category: 'Ropa',
      subcategory: 'Hombre'
    },
    {
      name: 'Hermosa Blusa Para Dama',
      image: 'assets/img/products/ropa04.png',
      price: 17000,
      description: 'Blusas para Dama tela 100% garantizado.',
      category: 'Ropa',
      subcategory: 'Mujer'
    },
    {
      name: 'Pantalón Juvenil Femenino',
      image: 'assets/img/products/ropa05.png',
      price: 39999,
      description: 'Pantalón Juvenil. Tiro Semidescaderado',
      category: 'Ropa',
      subcategory: 'Mujer'
    },
    {
      name: 'Consola Nintendo NES',
      image: 'assets/img/products/tecnologia01.png',
      price: 58900,
      description: 'Revive los clásicos en esta consola de la vieja escuela',
      category: 'Tecnología',
      subcategory: 'Consolas'
    },
    {
      name: 'Playstation 4 Pro 1TB + un control',
      image: 'assets/img/products/tecnologia02.png',
      price: 1799000,
      description: 'Es el modelo más potente de la consola de octava generación de Sony',
      category: 'Tecnología',
      subcategory: 'Consolas'
    },
    {
      name: 'Xbox One X. Garantia de 1 año',
      image: 'assets/img/products/tecnologia03.png',
      price: 1149900,
      description: 'Es el modelo más potente de la consola de Microsoft',
      category: 'Tecnología',
      subcategory: 'Consolas'
    },
    {
      name: 'The legend Of Zelda Breath Of The Wild. Nintendo Switch',
      image: 'assets/img/products/tecnologia04.png',
      price: 209900,
      description: 'El videojuego más grande en la historia de Nintendo. Una épica aventura que lleva la acción de esta veterana franquicia a un gigantesco mundo abierto que podemos explorar con total libertad.',
      category: 'Tecnología',
      subcategory: 'Juegos para consolas'
    },
    {
      name: 'Red Read Redemption 2 Ps4 Juego Playstation ',
      image: 'assets/img/products/tecnologia05.png',
      price: 289000,
      description: 'Desarrollado por los creadores de Grand Theft Auto V y Red Dead Redemption, Red Dead Redemption 2 es una historia épica de la vida en el corazón implacable de Estados Unidos. El vasto y atmosférico mundo del juego también proporcionará la base para una nueva experiencia de multijugador en línea. Desarrollador: Rockstar Studios',
      category: 'Tecnología',
      subcategory: 'Juegos para consolas'
    },
    {
      name: 'Crash Team Racing Juego Xbox One',
      image: 'assets/img/products/tecnologia06.png',
      price: 169900,
      description: 'Vuelve Crash Bandicoot, ¡y esta vez en el asiento de conductor! Prepárate para pisar el acelerador a fondo con la auténtica experiencia de Crash Team Racing',
      category: 'Tecnología',
      subcategory: 'Juegos para consolas'
    },
    {
      name: 'Celular Motorola Moto G7 Play Rom 32/2gb Bateria 3000 Mah',
      image: 'assets/img/products/tecnologia07.png',
      price: 436900,
      description: 'Contiene: Procesador: Snapdragon 632. RAM: 2GB, Pantalla: 5.7 pulgadas. INCLUYE CARGADOR Y CABLE USB.',
      category: 'Tecnología',
      subcategory: 'Celulares'
    },
    {
      name: 'Celular Huawei P30 Lite 128gb / 4ram',
      image: 'assets/img/products/tecnologia08.png',
      price: 859000,
      description: 'El diseño del Huawei P30 Lite se ha depurado bastante respecto a la generación anterior, reduciendo considerablemente el notch hasta dejarlo con forma de gota.',
      category: 'Tecnología',
      subcategory: 'Celulares'
    },
    {
      name: 'iPhone 11 Pro 256gb',
      image: 'assets/img/products/tecnologia09.png',
      price: 5249900,
      description: 'OS: iOS 13. Chipset: Apple A13 Bionic (7 nm+). CPU: Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder). GPU: Apple GPU (4-core graphics)',
      category: 'Tecnología',
      subcategory: 'Celulares'
    },
    {
      name: 'Zapato Deportivo Niño Tenis',
      image: 'assets/img/products/zapato01.png',
      price: 30000,
      description: 'Zapato Deportivo cómodo para hacer cualquier tipo de actividad.',
      category: 'Zapatos y Tenis',
      subcategory: 'Niños'
    },
    {
      name: 'Zapato Colegial Hebilla Mafalda Niña Rosa',
      image: 'assets/img/products/zapato02.png',
      price: 52900,
      description: 'ZAPATO COLEGIAL MAFALDA PARA NIÑA 100% CUERO.',
      category: 'Zapatos y Tenis',
      subcategory: 'Niños'
    },
    {
      name: 'Zapato Elegante 100% Cuero',
      image: 'assets/img/products/zapato04.png',
      price: 73000,
      description: 'Zapato formal para mujer, elaborados en puro cuero, suela de caucho, Nuestros productos son de fabricación nacional, en materiales de excelente calidad',
      category: 'Zapatos y Tenis',
      subcategory: 'Mujer'
    },
    {
      name: 'Zapato Elegante 100% Cuero',
      image: 'assets/img/products/zapato03.png',
      price: 58000,
      description: 'Zapato formal para hombre, elaborados en puro cuero, suela de caucho, Nuestros productos son de fabricación nacional, en materiales de excelente calidad',
      category: 'Zapatos y Tenis',
      subcategory: 'Hombre'
    },
    {
      name: 'Secadora 3V - Rosada',
      image: 'assets/img/products/Secador01.png',
      price: 70000,
      description: 'Tenis para Dama Talla 35 al 40',
      category: 'Electródomestico',
      subcategory: 'Secadoras'
    },
    {
      name: 'Secadora 4V - Rosada',
      image: 'assets/img/products/Secador02.png',
      price: 79000,
      description: 'Tenis para Dama Talla 35 al 40',
      category: 'Electródomestico',
      subcategory: 'Secadoras'
    },
    {
      name: 'Secadora 6V - Negra',
      image: 'assets/img/products/Secador03.png',
      price: 89599,
      description: 'Tenis para Dama Talla 35 al 40',
      category: 'Electródomestico',
      subcategory: 'Secadoras'
    }

  ];

  public productListByCategory: ProductI[] = [];
  public productListByCategorySub: ProductI[] = [];


  public offertWeekProductList: ProductI[] = [

  ];
  public recommendedProductList: ProductI[] = [

  ];

  public carList: ProductI[] = [];



  constructor() {
    this.offertWeekProductList.push(this.productList[0]);
    this.offertWeekProductList.push(this.productList[1]);
    this.offertWeekProductList.push(this.productList[2]);
    this.offertWeekProductList.push(this.productList[3]);
    this.recommendedProductList.push(this.productList[4]);
    this.recommendedProductList.push(this.productList[5]);
    this.recommendedProductList.push(this.productList[6]);
    this.recommendedProductList.push(this.productList[7]);
  }

  addCarList(product: ProductI) {
    this.carList.push(product);
  }
  getCarList = () => this.carList;
  getoffertWeekProductList = () => this.offertWeekProductList;
  getrecommendedProductList = () => this.recommendedProductList;
  getProductByCategoryList = () => this.productListByCategory;
  getProductByCategorySubList = () => this.productListByCategorySub;

  getProductByCategory = (category: string) => {
    this.productListByCategory = [];
    let productFind: ProductI;
    for (let product of this.productList) {

      if (product.category == category) {
        productFind = product;
        this.productListByCategory.push(productFind);

      } else {

      }
    }
    return productFind;
  };

  getProductByCategorySub = (category: string, subCategory: string) => {
    this.productListByCategorySub = [];
    let productFind: ProductI;
    for (let product of this.productList) {
      if (product.category == category && product.subcategory == subCategory) {
        productFind = product;
        this.productListByCategorySub.push(productFind);
        
      } else {
        
      }
    }
    return productFind;
  };

  getProductByName = (productName: string) => {
    let productFind: ProductI;
    for (let product of this.productList) {
      if (product.name == productName) {
        productFind = product;
        break;
      } else {
        productFind = null;
      }
    }
    return productFind;
  };

}

export interface ProductI {
  image: string;
  name: string;
  price: number;
  description: string;
  category: string;
  subcategory: string;
};
