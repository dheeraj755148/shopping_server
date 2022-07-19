const products = [
  {
    id: "17",
    category: "Jeans",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/17.png",
    title: {
      mainTitle: "Levis jeans",
      subTitle: "Comfy, streetchy pants for men",
    },
    description: `
        Designed in charcoal grey colour and cut with a relaxed silhouette, these washed jeans from Camla are made for all-day comfort. These cotton spandex jeans will ensure a comfy fit. Just pair these jeans with a T-shirt and sneakers.`,
    price: {
      oldPrice: 4000,
      newPrice: 2500,
    },
    size: ["S", "M", "L"],
    tagline: "Go in style",
  },
  {
    id: "20",
    category: "Shoes",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/20.png",
    title: {
      mainTitle: "Nike shoes",
      subTitle: "Shoes for style",
    },
    description: `
        A pair of black casual shoes with central lace-ups, Leather upper, Cushioned footbed, Textured outsole with patterned grooves`,
    price: {
      oldPrice: 8000,
      newPrice: 6500,
    },
    tagline: "Go in style",
  },
  {
    id: "39",
    category: "Shirts",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/39.png",
    title: {
      mainTitle: "Roadstars shirts",
      subTitle: "Shirts of great value",
    },
    size: ["S", "L", "XL"],

    description: `
        Black and grey checked casual shirt, has a spread collar, a full button placket, long sleeves with roll-up tabs, a patch pocket, a curved hem`,
    price: {
      oldPrice: 1500,
      newPrice: 850,
    },
    tagline: "Go in style",
  },
  {
    id: "157",
    category: "Shirts",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/157.png",
    title: {
      mainTitle: "Roadstars shirts",
      subTitle: "Shirts of great value",
    },
    size: ["S", "M", "L"],

    description: `
        Red and black checked casual shirt, has a spread collar, a full button placket, long sleeves with roll-up tabs, a patch pocket, a curved hem`,
    price: {
      oldPrice: 1800,
      newPrice: 1000,
    },
    tagline: "Go in style",
  },
  {
    id: "183",
    category: "Jeans",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/183.png",
    title: {
      mainTitle: "Levis jeans",
      subTitle: "Comfy, streetchy pants for men",
    },
    description: `
        Designed in charcoal grey colour and cut with a relaxed silhouette, these washed jeans from Camla are made for all-day comfort. These cotton spandex jeans will ensure a comfy fit. Just pair these jeans with a T-shirt and sneakers.`,
    price: {
      oldPrice: 3500,
      newPrice: 3000,
    },
    size: ["S", "XL"],

    tagline: "Go in style",
  },
  {
    id: "235",
    category: "Shoes",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/235.png",
    title: {
      mainTitle: "Nike shoes",
      subTitle: "Shoes for style",
    },
    description: `
        A pair of black casual shoes with central lace-ups, Leather upper, Cushioned footbed, Textured outsole with patterned grooves`,
    price: {
      oldPrice: 10000,
      newPrice: 6500,
    },
    tagline: "Go in style",
  },
  {
    id: "237",
    category: "Shoes",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/237.png",
    title: {
      mainTitle: "Puma shoes",
      subTitle: "Shoes for style",
    },
    description: `
        A pair of black casual shoes with central lace-ups, Leather upper, Cushioned footbed, Textured outsole with patterned grooves`,
    price: {
      oldPrice: 6500,
      newPrice: 4500,
    },
    tagline: "Go in style",
  },
  {
    id: "315",
    category: "Shirts",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/315.png",
    title: {
      mainTitle: "Raymonds shirts",
      subTitle: "Shirts of great value",
    },
    description: `
        Red and black checked casual shirt, has a spread collar, a full button placket, long sleeves with roll-up tabs, a patch pocket, a curved hem`,
    price: {
      oldPrice: 2500,
      newPrice: 2000,
    },
    size: ["S", "L", "XL"],

    tagline: "Go in style",
  },
  {
    id: "325",
    category: "Jeans",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/325.png",
    title: {
      mainTitle: "Levis jeans",
      subTitle: "Comfy, streetchy pants for men",
    },
    description: `
        Designed in greenish color and cut with a relaxed silhouette, these washed jeans from Camla are made for all-day comfort. These cotton spandex jeans will ensure a comfy fit. Just pair these jeans with a T-shirt and sneakers.`,
    price: {
      oldPrice: 4500,
      newPrice: 4000,
    },
    tagline: "Go in style",
    size: ["S", "M"],
  },
  {
    id: "348",
    category: "Shoes",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/348.png",
    title: {
      mainTitle: "Arrow shoes",
      subTitle: "Shoes for style",
    },
    description: `
        A pair of black casual shoes with central lace-ups, Leather upper, Cushioned footbed, Textured outsole with patterned grooves`,
    price: {
      oldPrice: 8000,
      newPrice: 5000,
    },
    tagline: "Go in style",
  },
  {
    id: "420",
    category: "Shoes",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/420.png",
    title: {
      mainTitle: "Redtape shoes",
      subTitle: "Shoes for style",
    },
    description: `
        A pair of black casual shoes with blue strips central lace-ups, Leather upper, Cushioned footbed, Textured outsole with patterned grooves`,
    price: {
      oldPrice: 2500,
      newPrice: 1750,
    },
    tagline: "Go in style",
  },
  {
    id: "490",
    category: "Shirts",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/490.png",
    title: {
      mainTitle: "Roadstar shirts",
      subTitle: "Shirts of great value",
    },
    size: ["S", "M", "L", "XL"],

    description: `
        Red and black checked casual shirt, has a spread collar, a full button placket, long sleeves with roll-up tabs, a patch pocket, a curved hem`,
    price: {
      oldPrice: 1500,
      newPrice: 1250,
    },
    tagline: "Go in style",
  },
  {
    id: "514",
    category: "Jeans",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/514.png",
    title: {
      mainTitle: "Roadstar jeans",
      subTitle: "Comfy, streetchy pants for men",
    },
    description: `
        Designed in greenish color and cut with a relaxed silhouette, these washed jeans from Camla are made for all-day comfort. These cotton spandex jeans will ensure a comfy fit. Just pair these jeans with a T-shirt and sneakers.`,
    price: {
      oldPrice: 6000,
      newPrice: 4000,
    },
    size: ["S", "XL"],

    tagline: "Go in style",
  },
  {
    id: "543",
    category: "Shoes",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/543.png",
    title: {
      mainTitle: "Redtape shoes",
      subTitle: "Shoes for style",
    },
    description: `
        A pair of green casual shoes with orange strips central lace-ups, Leather upper, Cushioned footbed, Textured outsole with patterned grooves`,
    price: {
      oldPrice: 4000,
      newPrice: 3000,
    },
    tagline: "Go in style",
  },
  {
    id: "592",
    category: "Shirts",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/592.png",
    title: {
      mainTitle: "Roadstar T-shirts",
      subTitle: "Shirts of great value",
    },
    description: `
        Blue casual shirt, has a spread collar, a full button placket, long sleeves with roll-up tabs, a patch pocket, a curved hem`,
    price: {
      oldPrice: 3500,
      newPrice: 2500,
    },
    tagline: "Go in style",
    size: ["S", "M", "XL"],
  },
  {
    id: "608",
    category: "Shirts",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/608.png",
    title: {
      mainTitle: "Kelvin shirts",
      subTitle: "Shirts of great value",
    },
    description: `
        White shirt, has a spread collar, a full button placket, long sleeves with roll-up tabs, a patch pocket, a curved hem`,
    price: {
      oldPrice: 4000,
      newPrice: 2500,
    },
    tagline: "Go in style",
    size: ["S", "L"],
  },
  {
    id: "630",
    category: "Shirts",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/630.png",
    title: {
      mainTitle: "Roadstar shirts",
      subTitle: "Shirts of great value",
    },
    description: `
        Black casual shirt, has a spread collar, a full button placket, long sleeves with roll-up tabs, a patch pocket, a curved hem`,
    price: {
      oldPrice: 2500,
      newPrice: 1500,
    },
    tagline: "Go in style",
    size: ["XS", "S", "M"],
  },
  {
    id: "679",
    category: "Jeans",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/679.png",
    title: {
      mainTitle: "Roadstar jeans",
      subTitle: "Comfy, streetchy pants for men",
    },
    description: `
        Designed in bluish color and cut with a relaxed silhouette, these washed jeans from Camla are made for all-day comfort. These cotton spandex jeans will ensure a comfy fit. Just pair these jeans with a T-shirt and sneakers.`,
    price: {
      oldPrice: 6000,
      newPrice: 4500,
    },
    tagline: "Go in style",
    size: ["S", "XL"],
  },
  {
    id: "682",
    category: "Jeans",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/682.png",
    title: {
      mainTitle: "Roadstar jeans",
      subTitle: "Comfy, streetchy pants for men",
    },
    description: `
        Black color and cut with a relaxed silhouette, these washed jeans from Camla are made for all-day comfort. These cotton spandex jeans will ensure a comfy fit. Just pair these jeans with a T-shirt and sneakers.`,
    price: {
      oldPrice: 6000,
      newPrice: 4500,
    },
    tagline: "Go in style",
    size: ["S", "M"],
  },
  {
    id: "744",
    category: "Shirts",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/744.png",
    title: {
      mainTitle: "Roadcore shirts",
      subTitle: "Shirts of great value",
    },
    description: `
        Black shirt, has a spread collar, a full button placket, long sleeves with roll-up tabs, a patch pocket, a curved hem`,
    price: {
      oldPrice: 2000,
      newPrice: 1500,
    },
    tagline: "Go in style",
    size: ["S", "L", "XL"],
  },
  {
    id: "753",
    category: "Shoes",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/753.png",
    title: {
      mainTitle: "H&H shoes",
      subTitle: "Shoes for style",
    },
    description: `
        A pair of green casual shoes with orange strips central lace-ups, Leather upper, Cushioned footbed, Textured outsole with patterned grooves`,
    price: {
      oldPrice: 6000,
      newPrice: 5000,
    },
    tagline: "Go in style",
  },
  {
    id: "840",
    category: "Shoes",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/840.png",
    title: {
      mainTitle: "HRX shoes",
      subTitle: "Shoes for style",
    },
    description: `
        A pair of green casual shoes with orange strips central lace-ups, Leather upper, Cushioned footbed, Textured outsole with patterned grooves`,
    price: {
      oldPrice: 6500,
      newPrice: 5000,
    },
    tagline: "Go in style",
  },
  {
    id: "975",
    category: "Shoes",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/975.png",
    title: {
      mainTitle: "Sketcher shoes",
      subTitle: "Shoes for style",
    },
    description: `
        A pair of blue casual shoes with white central lace-ups, Leather upper, Cushioned footbed, Textured outsole with patterned grooves`,
    price: {
      oldPrice: 7000,
      newPrice: 6500,
    },
    tagline: "Go in style",
  },
  {
    id: "983",
    category: "Shoes",
    imageUrl:
      "https://raw.githubusercontent.com/dheeraj755148/mern-project/main/983.png",
    title: {
      mainTitle: "HRX shoes",
      subTitle: "Shoes for style",
    },
    description: `
        A pair of white casual shoes with central lace-ups, Leather upper, Cushioned footbed, Textured outsole with patterned grooves`,
    price: {
      oldPrice: 4500,
      newPrice: 3000,
    },
    tagline: "Go in style",
  },
];

module.exports = products;
