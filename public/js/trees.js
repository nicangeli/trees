var app = angular.module('trees', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
});

app.controller('PriceController', ['$scope', function($scope) {
	$scope.size = 5;
	$scope.lights = false;
	$scope.stand = false;
	
	var prices = {
		'tree': {
			3: 24.99,
			5: 30.00,
			7: 39.99
		},
		'lights': 10.00,
		'stand': 10.00
	};

	var images = {
		'standard' : {
			'3': 'img/small.png',
			'5': 'img/medium.png',
			'7': 'img/large.png'
		},
		'lights' : {
			'3': 'img/small_lights.png',
			'5': 'img/medium_lights.png',
			'7': 'img/large_lights.png'
		}
	};


	$scope.subtotal = function() {
		var price = prices.tree[$scope.size];
		if($scope.lights) {
			price += prices['lights'];
		}
		if($scope.stand) {
			price += prices['stand'];
		}
		return price;
	};

	$scope.treeimage = function() {
		if($scope.lights) {
			return images.lights[$scope.size];
		} else {
			return images.standard[$scope.size];
		}
		
	};

}])