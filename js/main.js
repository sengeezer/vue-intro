var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    desc: 'Not smelly at all',
    image: './images/vmSocks-green-onWhite.jpg',
    imageAlt: 'Green socks',
    inventory: 12,
    inStock: true,
    cartHasContent: false,
    onSale: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './images/vmSocks-green-onWhite.jpg',
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './images/vmSocks-blue-onWhite.jpg',
      }
    ],
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11],
    cart: 0,
    mwLink: 'http://vuejs.org',
  },
  methods: {
    addToCart() {
      this.cart++;
      this.cartHasContent = true;
    },
    removeFromCart() {
      this.cart--;

      if (this.cart === 0) {
        this.cartHasContent = false;
      }
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    }
  }
});
