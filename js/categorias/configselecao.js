$(function() {
	simpleCart({

	    // array representing the format and columns of the cart, see
	    // the cart columns documentation
	    cartColumns: [
	        { attr: "name" , label: "Nome" },
	        { attr: "price" , label: "Preço", view: 'currency' },
	        { view: "decrement" , label: false },
	        { attr: "quantity" , label: "Qtd" },
	        { view: "increment" , label: false },
	        { attr: "total" , label: "SubTotal", view: 'currency' },
	        { view: "remove" , text: "Remover" , label: false }
	    ],

	    // "div" or "table" - builds the cart as a table or collection of divs
	    cartStyle: "div",

	    // how simpleCart should checkout, see the checkout reference for more info
	    checkout: {
	        type: "PayPal" ,
	        email: "checkout@tadinhos.com.br"
	    },

	    // set the currency, see the currency reference for more info
	    currency: "BRL",

	    // collection of arbitrary data you may want to store with the cart,
	    // such as customer info
	    data: {},

	    // set the cart langauge (may be used for checkout)
	    language: "english-us",

	    // array of item fields that will not be sent to checkout
	    excludeFromCheckout: [
	    	'qty',
	    	'thumb'
	    ],

	    // custom function to add shipping cost
		// Função que altera o frete para gratuito.
		shippingCustom: function(){ 
			if( simpleCart.total() >= 300 || simpleCart.quantity() == 0 ){
				 return 0;
			} else {
				 return 25;
			}
	   },


	    // flat rate shipping option
	    shippingFlatRate: null,

	    // added shipping based on this value multiplied by the cart quantity
	    shippingQuantityRate: null,

	    // added shipping based on this value multiplied by the cart subtotal
	    shippingTotalRate: null,

	    // tax rate applied to cart subtotal
	    taxRate: null,

	    // true if tax should be applied to shipping
	    taxShipping: false,

	    // event callbacks
	    beforeAdd               	: null,
	    afterAdd                	: null,
	    load                    	: null,
	    beforeSave              	: null,
	    afterSave               	: null,
	    update                  	: null,
	    ready                   	: null,
	    checkoutSuccess             : null,
	    checkoutFail                : null,
	    beforeCheckout              : null

	});

	simpleStore.init({

		// brand can be text or image URL
		brand : "SELEÇÕES",

		// numder of products per row (accepts 1, 2 or 3)
		numColumns : 3,

		// name of JSON file, located in directory root
		JSONFile : "selecao.json"

	});

});
