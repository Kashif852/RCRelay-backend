  const products = [
    {
      id: 'ipd',
      sku: 'ipd', 
      name: 'Super iPad', 
      price: 549.99,
      description: 'Experience the latest in tablet technology with the Super iPad.',
      imageUrl: 'https://ik.imagekit.io/igwjlcyu8dw/ipad_lNV1IIeYmo.webp?updatedAt=1702560491615'
    },
    {
      id: 'mbp',
      sku: 'mbp', 
      name: 'MacBook Pro', 
      price: 1399.99,
      description: 'Unleash your creativity with the powerful MacBook Pro.',
      imageUrl: 'https://ik.imagekit.io/igwjlcyu8dw/macbook_EnuZfLy7n.webp?updatedAt=1702560491375'
    },
    {
      id: 'atv',
      name: 'Apple TV',
      sku: 'atv', 
      price: 109.50,
      description: 'Transform your television experience with the Apple TV.',
      imageUrl: 'https://ik.imagekit.io/igwjlcyu8dw/apple_tv_eDXgwHjBK.jpeg?updatedAt=1702560491538'
    },
    {
      id: 'vga',
      sku: 'vga', 
      price: 30.00,
      name: 'VGA Adapter',
      description: 'Connect seamlessly with the reliable VGA Adapter.',
      imageUrl: 'https://ik.imagekit.io/igwjlcyu8dw/vga_Bc4ocLWUk.webp?updatedAt=1702560491663'
    },
  ];
  // List all products
  const listProducts = () => {
    return products;
  };
  
  // Find a single product by SKU
  const findProductBySku = (sku) => {
    return products.find(product => product.sku === sku);
  };
  
  module.exports = {
    listProducts,
    findProductBySku
  };
  