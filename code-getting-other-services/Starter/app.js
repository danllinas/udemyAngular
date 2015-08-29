var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($log, $scope, $filter) {
    $scope.name = 'Daniel';
    $scope.formattedName = $filter('uppercase')($scope.name);
    
    $log.info($scope.name);
    $log.info($scope.formattedName); 
});

