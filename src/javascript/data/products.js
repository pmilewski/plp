const products = [
  {
    categories: ['Wellingtons'],
    colorName: 'Domino',
    name: 'Citrus Punch Wellington',
    imageUrl1: 'https://static.wixstatic.com/media/5457e5_e5943e357cdf48e09a4a939f5daac3b1~mv2_d_3456_4352_s_4_2.jpg/v1/fill/w_389,h_490,q_85,usm_0.66_1.00_0.01/5457e5_e5943e357cdf48e09a4a939f5daac3b1~mv2_d_3456_4352_s_4_2.jpg',
    imageUrl2: 'https://static.wixstatic.com/media/5457e5_8aa2161810e6440ab7eae120bf5b8598~mv2_d_3456_3536_s_4_2.jpg/v1/fill/w_479,h_490,q_85,usm_0.66_1.00_0.01/5457e5_8aa2161810e6440ab7eae120bf5b8598~mv2_d_3456_3536_s_4_2.jpg'
  },

  {
    categories: ['Wellingtons'],
    colorName: 'Scuba',
    name: 'Geometric Wellington',
    imageUrl1: 'https://static.wixstatic.com/media/5457e5_0ec39c97e31f498ca11cd6735308760b~mv2_d_3456_4048_s_4_2.jpg/v1/fill/w_418,h_490,q_85,usm_0.66_1.00_0.01/5457e5_0ec39c97e31f498ca11cd6735308760b~mv2_d_3456_4048_s_4_2.jpg',
    imageUrl2: 'https://static.wixstatic.com/media/5457e5_a011ac7193ab47f9be3fee3131102343~mv2_d_3456_4608_s_4_2.jpg/v1/fill/w_368,h_490,q_85,usm_0.66_1.00_0.01/5457e5_a011ac7193ab47f9be3fee3131102343~mv2_d_3456_4608_s_4_2.jpg'
  },

  {
    categories: ['Wellingtons'],
    colorName: 'Derby',
    name: 'Cosmic Wizard Wellington',
    imageUrl1: 'https://static.wixstatic.com/media/5457e5_90deaedd656648a88644bed0ad501a54~mv2_d_3456_4608_s_4_2.jpg/v1/fill/w_368,h_490,q_85,usm_0.66_1.00_0.01/5457e5_90deaedd656648a88644bed0ad501a54~mv2_d_3456_4608_s_4_2.jpg',
    imageUrl2: 'https://static.wixstatic.com/media/5457e5_422983c96e7e43619473cee25f730d23~mv2_d_3456_3888_s_4_2.jpg/v1/fill/w_436,h_490,q_85,usm_0.66_1.00_0.01/5457e5_422983c96e7e43619473cee25f730d23~mv2_d_3456_3888_s_4_2.jpg'
  },

  {
    categories: ['Wellingtons'],
    colorName: 'Flamingo',
    name: 'Strawberry Fields Wellington',
    imageUrl1: 'https://static.wixstatic.com/media/5457e5_12e8a8c033bf4730b2b93f8e51b9e7e7~mv2_d_3456_3888_s_4_2.jpg/v1/fill/w_436,h_490,q_85,usm_0.66_1.00_0.01/5457e5_12e8a8c033bf4730b2b93f8e51b9e7e7~mv2_d_3456_3888_s_4_2.jpg',
    imageUrl2: 'https://static.wixstatic.com/media/5457e5_39676d33a6d54d8781f39b840c004466~mv2_d_3456_4016_s_4_2.jpg/v1/fill/w_422,h_490,q_85,usm_0.66_1.00_0.01/5457e5_39676d33a6d54d8781f39b840c004466~mv2_d_3456_4016_s_4_2.jpg'
  },

  {
    categories: ['Wellingtons'],
    colorName: 'Roulette',
    name: 'Le Bon Temps Wellington',
    imageUrl1: 'https://static.wixstatic.com/media/5457e5_f72f4ffda7bb43f9ba9e23a9e6c615cf~mv2_d_3456_3856_s_4_2.jpg/v1/fill/w_439,h_490,q_85,usm_0.66_1.00_0.01/5457e5_f72f4ffda7bb43f9ba9e23a9e6c615cf~mv2_d_3456_3856_s_4_2.jpg',
    imageUrl2: 'https://static.wixstatic.com/media/5457e5_2adb6ed97e64411f827e75fc72d9b622~mv2_d_3456_3904_s_4_2.jpg/v1/fill/w_434,h_490,q_85,usm_0.66_1.00_0.01/5457e5_2adb6ed97e64411f827e75fc72d9b622~mv2_d_3456_3904_s_4_2.jpg'
  },

  {
    categories: ['Wellingtons'],
    colorName: 'Scout',
    name: 'Illusionist Wellington',
    imageUrl1: 'https://static.wixstatic.com/media/5457e5_1d5331c11d2a43f096e4d4db6f661e8d~mv2_d_3152_3504_s_4_2.jpg/v1/fill/w_441,h_490,q_85,usm_0.66_1.00_0.01/5457e5_1d5331c11d2a43f096e4d4db6f661e8d~mv2_d_3152_3504_s_4_2.jpg',
    imageUrl2: 'https://static.wixstatic.com/media/5457e5_8d775dc0bf7f4555ba3ff0dbb4b80997~mv2_d_3456_4112_s_4_2.jpg/v1/fill/w_412,h_490,q_85,usm_0.66_1.00_0.01/5457e5_8d775dc0bf7f4555ba3ff0dbb4b80997~mv2_d_3456_4112_s_4_2.jpg'
  },

  {
    categories: ['Riding Hat/Stovepipe'],
    colorName: 'Jetty',
    name: 'Pineapple Flower Power',
    imageUrl1: 'https://static.wixstatic.com/media/5457e5_b607161f1ebe434893aa7f35bac4a784~mv2_d_3864_3012_s_4_2.jpg/v1/fill/w_490,h_382,q_85,usm_0.66_1.00_0.01/5457e5_b607161f1ebe434893aa7f35bac4a784~mv2_d_3864_3012_s_4_2.jpg',
    imageUrl2: 'https://static.wixstatic.com/media/5457e5_74b8ea4dd2b6475788b90a58acfacdb0~mv2_d_3456_3616_s_4_2.jpg/v1/fill/w_468,h_490,q_85,usm_0.66_1.00_0.01/5457e5_74b8ea4dd2b6475788b90a58acfacdb0~mv2_d_3456_3616_s_4_2.jpg'
  },

  {
    categories: ['Top Hat on Lean', 'Trilby & Fedora'],
    colorName: 'Mallard',
    name: 'Lemon Paisley Swirl Top Hat on Lean',
    imageUrl1: 'https://static.wixstatic.com/media/5457e5_13a11312dbf54d739f82f9e7085aaa0b~mv2_d_3456_3408_s_4_2.jpg/v1/fill/w_490,h_483,q_85,usm_0.66_1.00_0.01/5457e5_13a11312dbf54d739f82f9e7085aaa0b~mv2_d_3456_3408_s_4_2.jpg',
    imageUrl2: 'https://static.wixstatic.com/media/5457e5_94824d34ab5f493299797bd5b8bfbf5e~mv2_d_3456_3536_s_4_2.jpg/v1/fill/w_479,h_490,q_85,usm_0.66_1.00_0.01/5457e5_94824d34ab5f493299797bd5b8bfbf5e~mv2_d_3456_3536_s_4_2.jpg'
  },

  {
    categories: ['Top Hat on Lean', 'Trilby & Fedora'],
    colorName: 'Bebop',
    name: 'The Fabric of Space-Time, Top Hat on Lean',
    imageUrl1: 'https://static.wixstatic.com/media/5457e5_3d152e731c81438fb20824b7b1fc0f03~mv2_d_3456_2960_s_4_2.jpg/v1/fill/w_490,h_420,q_85,usm_0.66_1.00_0.01/5457e5_3d152e731c81438fb20824b7b1fc0f03~mv2_d_3456_2960_s_4_2.jpg',
    imageUrl2: 'https://static.wixstatic.com/media/5457e5_9b1f7493a2794f84a03d2339ce57b795~mv2_d_3456_2992_s_4_2.jpg/v1/fill/w_490,h_424,q_85,usm_0.66_1.00_0.01/5457e5_9b1f7493a2794f84a03d2339ce57b795~mv2_d_3456_2992_s_4_2.jpg'
  },

  {
    categories: ['Top Hat on Lean', 'Trilby & Fedora'],
    colorName: 'Domino',
    name: 'Sapphire Spark Top Hat on Lean',
    imageUrl1: 'https://static.wixstatic.com/media/5457e5_ac98f3b7128649ca86dd90aff2863811~mv2_d_3456_3008_s_4_2.jpg/v1/fill/w_490,h_426,q_85,usm_0.66_1.00_0.01/5457e5_ac98f3b7128649ca86dd90aff2863811~mv2_d_3456_3008_s_4_2.jpg',
    imageUrl2: 'https://static.wixstatic.com/media/5457e5_da921fba5e00420e85c03a3d8cac0041~mv2_d_3456_3056_s_4_2.jpg/v1/fill/w_490,h_433,q_85,usm_0.66_1.00_0.01/5457e5_da921fba5e00420e85c03a3d8cac0041~mv2_d_3456_3056_s_4_2.jpg'
  },

  {
    categories: ['Top Hat on Lean', 'Trilby & Fedora'],
    colorName: 'Bebop',
    name: 'Flowers and Flamingos Top Hat on Lean',
    imageUrl1: 'https://static.wixstatic.com/media/5457e5_8159a823793b43458729508b486f0f65~mv2_d_3432_2952_s_4_2.jpg/v1/fill/w_490,h_421,q_85,usm_0.66_1.00_0.01/5457e5_8159a823793b43458729508b486f0f65~mv2_d_3432_2952_s_4_2.jpg',
    imageUrl2: 'https://static.wixstatic.com/media/5457e5_e809b66e87934e4c980918ea8a30ba28~mv2_d_3248_4016_s_4_2.jpg/v1/fill/w_396,h_490,q_85,usm_0.66_1.00_0.01/5457e5_e809b66e87934e4c980918ea8a30ba28~mv2_d_3248_4016_s_4_2.jpg'
  },

  {
    categories: ['Top Hat on Lean', 'Trilby & Fedora'],
    colorName: 'Domino',
    name: 'Saturnalia Top Hat on Lean',
    imageUrl1: 'https://static.wixstatic.com/media/5457e5_d651eb16c70c488aae4215ab9724a484~mv2_d_4308_3456_s_4_2.jpg/v1/fill/w_490,h_393,q_85,usm_0.66_1.00_0.01/5457e5_d651eb16c70c488aae4215ab9724a484~mv2_d_4308_3456_s_4_2.jpg',
    imageUrl2: 'https://static.wixstatic.com/media/5457e5_0b4d767a0ce34078b980a7a49a21c522~mv2_d_4332_3072_s_4_2.jpg/v1/fill/w_490,h_347,q_85,usm_0.66_1.00_0.01/5457e5_0b4d767a0ce34078b980a7a49a21c522~mv2_d_4332_3072_s_4_2.jpg'
  },

  {
    categories: ['Top Hat on Lean', 'Trilby & Fedora'],
    colorName: 'Roulette',
    name: 'Purple Petal Top Hat on Lean',
    imageUrl1: 'https://static.wixstatic.com/media/5457e5_e62f8302eaae4f578b7c6bed6cecb845~mv2_d_3948_2832_s_4_2.jpg/v1/fill/w_490,h_351,q_85,usm_0.66_1.00_0.01/5457e5_e62f8302eaae4f578b7c6bed6cecb845~mv2_d_3948_2832_s_4_2.jpg',
    imageUrl2: 'https://static.wixstatic.com/media/5457e5_fa434f27140545c6a39de8085b911f9c~mv2_d_3456_3088_s_4_2.jpg/v1/fill/w_490,h_438,q_85,usm_0.66_1.00_0.01/5457e5_fa434f27140545c6a39de8085b911f9c~mv2_d_3456_3088_s_4_2.jpg'
  },

  {
    categories: ['Top Hat on Lean', 'Trilby & Fedora'],
    colorName: 'Domino',
    name: 'Bokeh Top Hat on Lean',
    imageUrl1: 'https://static.wixstatic.com/media/5457e5_58fcab77a4ab4df5a81d0f6bc2331cad~mv2_d_3456_3744_s_4_2.jpg/v1/fill/w_452,h_490,q_85,usm_0.66_1.00_0.01/5457e5_58fcab77a4ab4df5a81d0f6bc2331cad~mv2_d_3456_3744_s_4_2.jpg',
    imageUrl2: 'https://static.wixstatic.com/media/5457e5_0279e3c3d4424c40b74a986811e67254~mv2_d_3240_2736_s_4_2.jpg/v1/fill/w_490,h_414,q_85,usm_0.66_1.00_0.01/5457e5_0279e3c3d4424c40b74a986811e67254~mv2_d_3240_2736_s_4_2.jpg'
  },

  {
    categories: ['Derby/Bowler'],
    colorName: 'Roulette',
    name: 'All Seeing Eye Bowler',
    imageUrl1: 'https://static.wixstatic.com/media/5457e5_e38e98e74c9f4b3a9534d7a113c38e32~mv2_d_3456_3008_s_4_2.jpg/v1/fill/w_490,h_426,q_85,usm_0.66_1.00_0.01/5457e5_e38e98e74c9f4b3a9534d7a113c38e32~mv2_d_3456_3008_s_4_2.jpg',
    imageUrl2: 'https://static.wixstatic.com/media/5457e5_5538f6b7c1e547049917a03eec40afe5~mv2_d_3456_2560_s_4_2.jpg/v1/fill/w_490,h_363,q_85,usm_0.66_1.00_0.01/5457e5_5538f6b7c1e547049917a03eec40afe5~mv2_d_3456_2560_s_4_2.jpg'
  }
];

export default products;
