const productos = [
  // SKINCARE
  {
    id: 1,
    nombre: "Agua termal Hydromontoc",
    categoria: "Skincare",
    precio: 39900,
    descripcion: "Un producto refrescante para tu rutina facial.",
    imagen: "https://montoccosmetictools.com/cdn/shop/files/1_6914bc97-3eb0-483b-8d7c-0a8b57e5daf1.jpg?v=1792509031&width=1200",
    disponible: true
  },
  {
    id: 2,
    nombre: "Gel Facial Hidratante Hydromontoc",
    categoria: "Skincare",
    precio: 80000,
    descripcion: "Hidratante para complementar el cuidado del rostro.",
    imagen: "https://montoccosmetictools.com/cdn/shop/files/GelHydromontoc.jpg?v=1782493599&width=1200",
    disponible: true
  },
  
  {
    id: 3,
    nombre: "Sérum de Retinol Skin Renew",
    categoria: "Skincare",
    precio: 51000,
    descripcion: "Sérum de cuidado facial con retinol y bakuchiol.",
    imagen: "https://montoccosmetictools.com/cdn/shop/files/Retinol_3_d3f2d9ae-f630-4b30-972d-ae72b0feb0c1.jpg?v=1754337393&width=1200",
    disponible: true
  },
  
  {
    id: 4,
    nombre: "Desmaquillante Bifásico Milky Rose 160 ml",
    categoria: "Skincare",
    precio: 40000,
    descripcion: "Desmaquillante para tu rutina de limpieza.",
    imagen: "https://montoccosmetictools.com/cdn/shop/files/MILKY.png?v=1719610391&width=1200",
    disponible: true
  },
  {
    id: 5,
    nombre: "Tónico Facial Aghora Rosse 250 ml",
    categoria: "Skincare",
    precio: 42000,
    descripcion: "Tónico para complementar la limpieza facial.",
    imagen: "https://montoccosmetictools.com/cdn/shop/files/AgoraRoseNP.jpg?v=1767967427&width=1200",
    disponible: true
  },
  {
    id: 6,
    nombre: "Sérum Facial Vitamina C Hydromontoc",
    categoria: "Skincare",
    precio: 66900,
    descripcion: "Sérum para complementar el cuidado facial.",
    imagen: "https://montoccosmetictools.com/cdn/shop/files/df12fe32-caa2-4fdc-8a83-f223c9d1e5b6.jpg?v=1710178400&width=1200",
    disponible: true
  },
  {
    id: 7,
    nombre: "Jabón Facial Hydromontoc",
    categoria: "Skincare",
    precio: 63000,
    descripcion: "Producto de limpieza facial.",
    imagen: "https://montoccosmetictools.com/cdn/shop/files/b6b8465b-e498-4697-b79b-449384034727.jpg?v=1711053091&width=1200",
    disponible: true
  },
  {
    id: 8,
    nombre: "Contorno de Ojos Hydromontoc",
    categoria: "Skincare",
    precio: 63000,
    descripcion: "Producto para el cuidado del contorno de ojos.",
    imagen: "https://montoccosmetictools.com/cdn/shop/files/CONTORNO.jpg?v=1708435242&width=1200",
    disponible: true
  },
  {
    id: 9,
    nombre: "Soft Cotton Pads x 50 unidades",
    categoria: "Skincare",
    precio: 17000,
    descripcion: "Discos de algodón para tu rutina de cuidado.",
    imagen: "https://montoccosmetictools.com/cdn/shop/files/cotton_nueva_presentacion_50_UND.jpg?v=1750443885&width=1200 ",
    disponible: true
  },
  {
    id: 10,
    nombre: "Soft Cotton Pads x 200 unidades",
    categoria: "Skincare",
    precio: 25000,
    descripcion: "Paquete de discos de algodón.",
    imagen: "https://montoccosmetictools.com/cdn/shop/products/SOFT-COTTON-PADS-1.jpg?v=1705860520&width=1200",
    disponible: true
  },
  {
    id: 11,
    nombre: "Sunsoon Protector Solar SPF 50+",
    categoria: "Skincare",
    precio: 65900,
    descripcion: "Protector solar para el cuidado diario.",
    imagen: "https://montoccosmetictools.com/cdn/shop/files/Sunsoonproducto3_jpg.jpg?v=1773174622&width=1200",
    disponible: true
  },

  // MAQUILLAJE
  {
    id: 12,
    nombre: "Humide Healthy Foundation",
    categoria: "Maquillaje",
    precio: 61000,
    descripcion: "Base de maquillaje Montoc.",
    imagen: "https://montoccosmetictools.com/cdn/shop/files/Base_3.jpg?v=1770232779&width=1200",
    disponible: true
  },
  {
    id: 13,
    nombre: "Iluminador Light Set",
    categoria: "Maquillaje",
    precio: 44000,
    descripcion: "Iluminador para tu maquillaje.",
    imagen: "https://montoccosmetictools.com/cdn/shop/files/ILUMINADORES_GOLDEN.png?v=1768844498&width=1200",
    disponible: true
  },
  {
    id: 14,
    nombre: "Lip Gloss Juicy Lips",
    categoria: "Maquillaje",
    precio: 32000,
    descripcion: "Brillo labial con ácido hialurónico.",
    imagen: "https://montoccosmetictools.com/cdn/shop/files/205_61f76fab-ed73-4623-a67f-8452ed9075bd.jpg?v=1760454470&width=1200",
    disponible: true
  },
  {
    id: 15,
    nombre: "Polvo Suelto Soft Powder 10 g",
    categoria: "Maquillaje",
    precio: 37000,
    descripcion: "Polvo suelto traslúcido.",
    imagen: "https://montoccosmetictools.com/cdn/shop/files/10g_5cd0a50f-2e4f-409c-8834-2d57182c61ed.jpg?v=1789764494&width=1200",
    disponible: true
  },

  // ACCESORIOS
 
{
  id: 16,
  nombre: "Brocha Minimi Viajero",
  categoria: "Accesorios",
  precio: 25000,
  descripcion: "Brochas prácticas para llevar contigo.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/IMG_4187_JPG.jpg?v=1773256968&width=1200",
  disponible: true
},
{
  id: 17,
  nombre: "Tinte fijador de cejas Brow Set",
  categoria: "Maquillaje",
  precio: 39500,
  descripcion: "Producto para fijar y definir las cejas.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/Browtint_jpg.jpg?v=1781793947&width=1200",
  disponible: true
},
{
  id: 18,
  nombre: "Pestañina Rulash",
  categoria: "Maquillaje",
  precio: 33500,
  descripcion: "Máscara de pestañas para tu maquillaje.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/O1A0306ig.jpg?v=1790112418&width=1200",
  disponible: true
},
{
  id: 19,
  nombre: "Dúo Humide Corrector",
  categoria: "Maquillaje",
  precio: 61000,
  descripcion: "Dúo de maquillaje de la línea Humide.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/Duo_ecommerce_2_jpg.jpg?v=1780329557&width=1200",
  disponible: true
},
{
  id: 20,
  nombre: "Base Glow Filter Alta Cobertura",
  categoria: "Maquillaje",
  precio: 52000,
  descripcion: "Base de maquillaje con acabado luminoso.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/TONOS_BASES_jpg.jpg?v=1776693902&width=1200",
  disponible: true
},
{
  id: 21,
  nombre: "Prebase Luminosa Glow Filter",
  categoria: "Maquillaje",
  precio: 61000,
  descripcion: "Prebase para preparar el rostro.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/Glow_Filter_Montoc_Pre_base.jpg?v=1737551351&width=1200",
  disponible: true
},
{
  id: 22,
  nombre: "Corrector Serum Humide en Gel",
  categoria: "Maquillaje",
  precio: 43000,
  descripcion: "Corrector para complementar el maquillaje.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/Corrector_EMPAQUE.png?v=1764363173&width=1200",
  disponible: true
},
{
  id: 23,
  nombre: "Paleta Light Set Montoc",
  categoria: "Maquillaje",
  precio: 59800,
  descripcion: "Paleta de maquillaje para el rostro.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/Carlota-ecommerce-1_1_101209cc-e00c-4c14-b32c-9748a055f80b.jpg?v=1768413340&width=1200",
  disponible: true
},
{
  id: 24,
  nombre: "Paleta de Rubor Light Set 8T",
  categoria: "Maquillaje",
  precio: 60000,
  descripcion: "Paleta de rubores para distintos looks.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/PRODUCTO_9c5bd441-6723-4fcd-8506-3b97eb78f666.jpg?v=1745426760&width=1200",
  disponible: true
},
{
  id: 27,
  nombre: "Rubor Líquido Glow Filter",
  categoria: "Maquillaje",
  precio: 44000,
  descripcion: "Rubor líquido de acabado luminoso.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/RUBOR_TAMARINDO_jpg.jpg?v=1775668064&width=1200",
  disponible: true
},
{
  id: 25,
  nombre: "Pocket Blush 3.8 g",
  categoria: "Maquillaje",
  precio: 27000,
  descripcion: "Rubor compacto para llevar contigo.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/piur_ok.jpg?v=1717174930&width=1200",
  disponible: true
},
{
  id: 26,
  nombre: "Brow Wax Ultra",
  categoria: "Maquillaje",
  precio: 29500,
  descripcion: "Cera para fijar y definir las cejas.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/E-commerce.png?v=1724870144&width=1200",
  disponible: true
},
{
  id: 27,
  nombre: "Lápiz Retráctil para Cejas Humide",
  categoria: "Maquillaje",
  precio: 25000,
  descripcion: "Lápiz para definir las cejas.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/Lapiz_Humide_TONOS_96e20932-917d-4024-9cee-ec22eca9d508.png?v=1750339342&width=1200",
  disponible: true
},
{
  id: 28,
  nombre: "Pomada para Cejas Brow Effect Dark",
  categoria: "Maquillaje",
  precio: 29000,
  descripcion: "Pomada para dar definición a las cejas.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/LIGHT.jpg?v=1757016016&width=1200",
  disponible: true
},
{
  id: 29,
  nombre: "Fijador de Maquillaje Dixy Fix 80 ml",
  categoria: "Maquillaje",
  precio: 45000,
  descripcion: "Spray fijador para terminar tu maquillaje.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/EDITADA1.jpg?v=1710791509&width=1200",
  disponible: true
},
{
  id: 30,
  nombre: "Fijador de Maquillaje Dixy Fix 30 ml",
  categoria: "Maquillaje",
  precio: 29000,
  descripcion: "Fijador de maquillaje en tamaño pequeño.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/Captura.png?v=1750776525&width=1200",
  disponible: true
},
{
  id: 31,
  nombre: "Fijador de Maquillaje Dixy Fix 200 ml",
  categoria: "Maquillaje",
  precio: 79000,
  descripcion: "Fijador de maquillaje en tamaño grande.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/DixiFix.jpg?v=1767968627&width=1200",
  disponible: true
},
{
  id: 32,
  nombre: "Lápiz Delineador de Labios",
  categoria: "Maquillaje",
  precio: 15000,
  descripcion: "Lápiz para definir los labios.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/LapizMontoc2.jpg?v=1768417951&width=1200",
  disponible: true
},
{
  id: 33,
  nombre: "Lápiz Delineador de Ojos",
  categoria: "Maquillaje",
  precio: 13100,
  descripcion: "Lápiz para delinear los ojos.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/L_piz_Delineador_de_Ojos_Montoc.jpg?v=1738268036&width=1200",
  disponible: true
},
{
  id: 34,
  nombre: "Soft Powder 5 g Viajero",
  categoria: "Maquillaje",
  precio: 29400,
  descripcion: "Polvo suelto en tamaño viajero.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/Polvo_suelto_5g_2.jpg?v=1789742789&width=1200",
  disponible: true
},
{
  id: 35,
  nombre: "Humide Spiral Gloss",
  categoria: "Maquillaje",
  precio: 25900,
  descripcion: "Gloss labial de acabado brillante.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/4_1.jpg?v=1753906575&width=1200",
  disponible: true
},
{
  id: 36,
  nombre: "Lippie Cheeks",
  categoria: "Maquillaje",
  precio: 30000,
  descripcion: "Tinte en gel para labios y mejillas.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/LipieCheeksNp_jpg.jpg?v=1773940858&width=1200",
  disponible: true
},
{
  id: 37,
  nombre: "Humide Serum Blush",
  categoria: "Maquillaje",
  precio: 32000,
  descripcion: "Rubor líquido para un acabado fresco.",
  imagen: "https://montoccosmetictools.com/cdn/shop/files/ROUSE.webp?v=1730900386&width=1200",
  disponible: true
},
{
    id: 38,
    nombre: "Brocha para base B38",
    categoria: "Accesorios",
    precio: 24000,
    descripcion: "Brocha para aplicar y distribuir la base de maquillaje.",
    imagen: "https://montoccosmetictools.com/cdn/shop/products/Brocha-Base-B38.jpg?v=1705527155&width=1200",
    disponible: true
},
{
    id: 39,
    nombre: "Brocha para corrector B71",
    categoria: "Accesorios",
    precio: 13000,
    descripcion: "Brocha para aplicar corrector con precisión.",
    imagen: "https://montoccosmetictools.com/cdn/shop/files/B71.png?v=1750453478&width=1200",
    disponible: true
},
{
    id: 40,
    nombre: "Brocha para rubor B70",
    categoria: "Accesorios",
    precio: 18000,
    descripcion: "Brocha para aplicar y difuminar rubor y contorno.",
    imagen: "https://montoccosmetictools.com/cdn/shop/files/B70.png?v=1752173661&width=1200",
    disponible: true
},
{
    id: 41,
    nombre: "Brocha para iluminador B49",
    categoria: "Accesorios",
    precio: 16800,
    descripcion: "Brocha para aplicar iluminador con suavidad.",
    imagen: "https://montoccosmetictools.com/cdn/shop/products/116.jpg?v=1752865037&width=1200",
    disponible: true
}

];