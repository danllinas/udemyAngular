var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    $scope.name = "Danny"; 
    $scope.occupation = "Coder"; 
    
    $scope.getname = function() {
        return 'Daniel Llinas';
    }
    
    $scope.getname();
    
    console.log($scope); 
});