const menuItems = [
    {
      name: 'Nike Air Max 270',
      price: 150,
      imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/oeltgubvgt6lvxikfx1s/air-max-270-shoes-2V5C4p.png',
      description: 'Classic style with modern comfort. The Nike Air Max 270 combines heritage aesthetics with innovative cushioning technology for an iconic look and superior comfort on the streets.',
    },
    {
      name: 'Adidas Ultraboost',
      price: 180,
      imageUrl: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/785464701d5b499a8eee5a649cf9e1df_9366/ultraboost-light-shoes.jpg',
      description: 'Unmatched comfort for your run. The Adidas Ultraboost features responsive cushioning and a flexible knit upper, delivering a smooth and energized running experience with a sleek and modern design.',
    },
    {
      name: 'Puma RS-X',
      price: 120,
      imageUrl: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/369579/23/sv01/fnd/IND/fmt/png/RS-X-Reinvention-Unisex-Sneakers',
      description: 'Futuristic design with retro vibes. The Puma RS-X showcases a bold and futuristic design, inspired by the reinvention of classic styles, delivering a statement look with comfort for everyday wear.',
    },
    {
      name: 'Converse Chuck Taylor All Star',
      price: 55,
      imageUrl: 'https://apim.sportchek.ca/v1/product/api/v1/product/image/12470977f?baseStoreId=SC&lang=en_CA&subscription-key=c01ef3612328420c9f5cd9277e815a0e&imwidth=640',
      description: 'Timeless classic for every wardrobe. The Converse Chuck Taylor All Star is an iconic sneaker that transcends trends, offering timeless style and versatility for casual and fashion-forward looks.',
    },
    {
      name: 'Vans Old Skool',
      price: 65,
      imageUrl: 'https://images.vans.com/is/image/Vans/VN000D3H_Y28_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',
      description: 'Skate-inspired style for any occasion. The Vans Old Skool combines skateboarding heritage with street style, featuring a durable canvas and suede upper for a classic and comfortable aesthetic.',
    },
    {
      name: 'Reebok Classic Leather',
      price: 75,
      imageUrl: 'https://images.vegnonveg.com/resized/700X573/10352/classic-leather-whiteblackalways-yellow-white-653b6e2513de7.jpg',
      description: 'Heritage design with modern comfort. The Reebok Classic Leather pays homage to its heritage with a timeless design, while the EVA midsole provides lightweight cushioning for all-day comfort.',
    },
    {
      name: 'New Balance 990v5',
      price: 175,
      imageUrl: 'https://i8.amplience.net/i/jpl/sz_137280_a?v=1',
      description: 'Premium materials and superior comfort. The New Balance 990v5 is crafted with premium materials, offering a perfect blend of style and comfort for those who appreciate quality craftsmanship.',
    },
    {
      name: 'Under Armour HOVR Phantom 2',
      price: 130,
      imageUrl: 'https://underarmour.scene7.com/is/image/Underarmour/3024154-008_A?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=75&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688',
      description: 'Responsive cushioning for a smooth ride. The Under Armour HOVR Phantom 2 features HOVR technology for a zero-gravity feel, providing energy return and impact absorption for a comfortable run.',
    },
    {
      name: 'Salomon Speedcross 5',
      price: 140,
      imageUrl: 'https://images-cdn.ubuy.co.in/63605ac3692f506edf58a961-salomon-speedcross-5-trail-running-shoes.jpg',
      description: 'Trail-running excellence for any terrain. The Salomon Speedcross 5 is designed for rugged trails, offering aggressive traction and stability to conquer any terrain with confidence and comfort.',
    },
    {
      name: 'Brooks Ghost 14',
      price: 130,
      imageUrl: 'https://rukminim1.flixcart.com/image/850/1000/ksez24w0/shoe/h/x/x/11-1103691d056-brooks-black-blackened-pearl-blue-original-imag5zg4jpgabnzc.jpeg?q=90',
      description: 'Neutral running with a plush feel. The Brooks Ghost 14 provides a smooth and comfortable ride for neutral runners, featuring plush cushioning and a balanced feel for long-lasting comfort.',
    },
    {
      name: 'ASICS Gel-Kayano 27',
      price: 150,
      imageUrl: 'https://5.imimg.com/data5/ECOM/Default/2023/3/292754044/AY/DX/YW/105112946/4550329554907-1-500x500.jpg',
      description: 'Stability and comfort for long runs. The ASICS Gel-Kayano 27 offers stability and support for long-distance running, with GEL technology providing cushioning and shock absorption.',
    },
    {
      name: 'Skechers D Lites',
      price: 70,
      imageUrl: 'https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dwffebce7c/images/large/196311229077-5.jpg',
      description: 'Fashionable and comfortable chunky sneakers. The Skechers D Lites combine fashion and comfort with a chunky design and Air-Cooled Memory Foam insole, making them a trendy and comfortable choice.',
    },
    {
      name: 'Merrell Moab 2',
      price: 120,
      imageUrl: 'https://m.media-amazon.com/images/I/81dFNtV7PAL._AC_UY1000_.jpg',
      description: 'Durable hiking shoes for outdoor adventures. The Merrell Moab 2 is built for rugged trails, providing durability, support, and comfort for hikers and outdoor enthusiasts.',
    },
    {
      name: 'Hoka One One Clifton 8',
      price: 130,
      imageUrl: 'https://www.runningshoesguru.com/wp-content/uploads/2021/05/Hoka-One-One-Clifton-8-Lateral-Side1.jpg',
      description: 'Maximum cushioning with a lightweight feel. The Hoka One One Clifton 8 offers maximum cushioning with a lightweight construction, providing a smooth and responsive ride for runners seeking comfort.',
    },
    {
      name: 'Fila Disruptor II',
      price: 65,
      imageUrl: 'https://m.media-amazon.com/images/I/51lsOGewqQL._AC_UY1000_.jpg',
      description: 'Bold and chunky sneakers for a retro look. The Fila Disruptor II is a bold and iconic sneaker with a chunky silhouette, making a statement and adding a retro touch to your casual style.',
    },
    {
      name: 'Mizuno Wave Rider 25',
      price: 140,
      imageUrl: 'https://cdn.fleetfeet.com/assets/Wave-Rider-25-Masthead.jpg/dynamic:1-aspect:1.9047619047619-fit:cover-strategy:entropy/Wave-Rider-25-Masthead--1200.jpg',
      description: 'Smooth and responsive for the avid runner. The Mizuno Wave Rider 25 is designed for avid runners, delivering a smooth and responsive ride with Wave Plate technology and premium cushioning.',
    },
    {
      name: 'Nike React Element 55',
      price: 130,
      imageUrl: 'https://m.media-amazon.com/images/I/71zZBwaXI-L._AC_UY1000_.jpg',
      description: 'Modern design with lightweight comfort. The Nike React Element 55 features a modern design with React technology, offering lightweight comfort and a sleek aesthetic for everyday wear.',
    },
    {
      name: 'Brooks Adrenaline GTS 22',
      price: 130,
      imageUrl: 'https://rukminim2.flixcart.com/image/850/1000/l5h2xe80/shoe/g/l/j/8-5-1103661d023-brooks-oyester-india-ink-blue-original-imagg5ybukaruzwb.jpeg?q=90',
      description: 'Stability and support for the long run. The Brooks Adrenaline GTS 22 provides stability and support, making it an ideal choice for runners seeking a secure and comfortable fit for long-distance runs.',
    },
    {
      name: 'On Cloud X',
      price: 140,
      imageUrl: 'https://images.ctfassets.net/hnk2vsx53n6l/1HWVIyA2HvKMm2HiH6QsRE/0dc089c7a75630dd7bbdd2c49d24feab/aiqputyzjh1xk6vnvmah.png?fm=webp',
      description: 'Versatile and lightweight training shoes. The On Cloud X provides a responsive ride for dynamic workouts, featuring CloudTec cushioning and a breathable mesh upper for all-day comfort and support.',
    },
  ];
  
  export default menuItems;
  