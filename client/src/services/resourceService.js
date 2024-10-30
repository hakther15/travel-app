const allResources = [
    // add objects to represent your custom application resources here
    {
      productId: 1,
      productSku: "BOOK-24",
      name: "Travel Tips and Tricks Guidebook",
      description: "Learn the secrets to stress-free traveling!",
      price: 19.99,
      imageName: "BOOK-24.jpeg",
      quantity: 1
    },
    {
      productId: 2,
      productSku: "LTAG-32",
      name: "Luggage Tag - set of 2",
      description: "Unique and fun tags for your exciting travels",
      price: 6.99,
      imageName: "LTAG-32.jpeg",
      quantity: 1
    },
    {
      productId: 3,
      productSku: "SMAP-15",
      name: "Scratch Map",
      description: "Keep track of all the places you go!",
      price: 12.99,
      imageName: "SMAP-15.jpeg",
      quantity: 1
    },
    {
      productId: 4,
      productSku: "PLSH-63",
      name: "Globe Plush Pillow",
      description: "Soft and cozy - and a pillow!",
      price: 15.99,
      imageName: "PLSH-63.jpeg",
      quantity: 1
    },
    {
      productId: 5,
      productSku: "TMBL-09",
      name: "Travel Tumbler",
      description: "Keep your drinks cold or hot when you travel",
      price: 29.99,
      imageName: "TMBL-09.jpeg",
      quantity: 1
    }
  ];
  
  const resourceService = {
    getResources() {
      return allResources;
    }
  };
  
  export { resourceService };