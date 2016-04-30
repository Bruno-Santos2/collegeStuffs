(function() {

var app = angular.module('store', []);
app.controller('StoreController', function(){
	this.products = gems;
});

var gems = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Some gems have a hidden qualities	beyond their luster, beyond their shine... Dodeca is one of those gems.',
		canPurchase: true,
		soldOut: false,
	},
	{
		name: 'Azurite',
		price: 2.95,
		description: 'Some gems have a hidden qualities	beyond their luster, beyond their shine... Azurite is one of those gems.',
		canPurchase: true,
		soldOut: false,
	},
	{
		name: 'BloodStone',
		price: 5.95,
		description: 'Some gems have a hidden qualities	beyond their luster, beyond their shine... BloodStone is one of those gems.',
		canPurchase: true,
		soldOut: false,
	},
	{
		name: 'Zircon',
		price: 3.95,
		description: 'Some gems have a hidden qualities	beyond their luster, beyond their shine... Zircon is one of those gems.',
		canPurchase: true,
		soldOut: false,
	}
];

})();