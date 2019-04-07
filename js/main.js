var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    desc: 'Not smelly at all',
    image: './images/vmSocks-green-onWhite.jpg',
    imageAlt: 'Green socks',
    inventory: 12,
    onSale: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green'
      },
      {
        variantId: 2235,
        variantColor: 'blue'
      }
    ],
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11],
    mwLink: 'http://vuejs.org'
  }
});
