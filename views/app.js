var myApp = angular.module('myApp', []);
myApp.controller('mainController', function ($scope, $http) {
	$scope.formData = {};
	$scope.formData.text = '';

	$http.get('/api/todos')
	.then(function(res) {
		$scope.todos = res.data;
	},function (error){

	})

	$scope.createTodo = function() {
		$http.post('/api/todos', $scope.formData)
		.then(function(res) {
				$scope.formData = {};
				$scope.formData.text = '';
				$scope.todos = res.data;
				console.log(res.data);
			},function (error){

			})
	};

	$scope.deleteTodo = function(id) {
		$http.delete('/api/todos/' + id)
		.then(function(res) {
			$scope.todos = res.data;
		},function (error){

		})
	};

})
