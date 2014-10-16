<!doctype html>
<html lang="en" ng-app="trees">
<head>
	<meta charset="UTF-8">
	<title>Xmas Trees</title>
	<script src="bower_components/angular/angular.js"></script>
	<script src="bower_components/angular-slider/slider.js"></script>
	<link href="bower_components/angular-slider/slider.css" />
	<script src="js/trees.js"></script>
	<style>
		@import url(//fonts.googleapis.com/css?family=Lato:700);
		input[type="range"] {
			-webkit-transform: rotate(-90deg);
		}
	</style>
</head>
<body>
	<div id="pricebox" ng-controller="PriceController">
		<input type="range" min="3" max="7" step="2" ng-model="size">
		<h2>Size: {{size}} foot</h2>
		<hr>
		<h3>Extras:</h3>
		<input type="checkbox" ng-model="lights">Lights and shit...
		<input type="checkbox" ng-model="stand">Christmas Tree Stand
		<hr>
		<h2>Price: £{{subtotal()}}</h2>
	</div>
</body>
</html>
