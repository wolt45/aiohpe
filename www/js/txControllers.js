var IOHPControllers = angular.module('txControllers', []);


IOHPEApp.controller('PXListCtrl', function ($scope, $http){
  //$http.get('http://192.168.0.100/atoday/api/apiSQLi.px_data.html').success(function(data) {
  $http.get('http://192.168.0.100/atodayset/get_server_px.php').success(function(data) {  
    $scope.px_APIlist = data;
  });
});

/*
IOHPEApp.service('dataService', function($http) {
delete $http.defaults.headers.common['X-Requested-With'];
this.getData = function(callbackFunc) {
    $http({
        method: 'GET',
        //url: 'http://localhost/atoday/api/apiSQLi.px_data.html',
        url: 'http://localhost/atodayset/get_server_px.php',
        params: 'limit=10, sort_by=pxname:desc',
        headers: 'Content-Type: application/json'
     }).success(function(data){
        // With the data succesfully returned, call our callback
        
        callbackFunc(data);
    }).error(function(){
        alert("error");
    });
 }
});

IOHPEApp.controller('PXListCtrl', function($scope, dataService) {
    //$scope.data = null;
    dataService.getData(function(dataResponse) {
        //alert("success!!!");
        $scope.px_APIlist = dataResponse;
    });
});
*/












IOHPEApp.controller('PXDetailCtrl', function ($scope, $routeParams, $http){
  $scope.PxRID = $routeParams.p_pxrid;

	//alert ($scope.pxrid);

  $http.get('http://192.168.0.100/atodayset/get_server_px.php').success(function(data) {
    $scope.px_APIitem = data.filter(function(entry){
    	//return entry.pxname === $scope.pxname;
    	return Number(entry.PxRID) === Number($scope.PxRID);  
    })[0];
  });
});