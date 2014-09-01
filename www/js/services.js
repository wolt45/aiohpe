// IOHPEApp.module('RBGIOHPEApp.dataService',[]).factory('Movie',function($resource){
//     return $resource('http://movieapp-13434.onmodulus.net/api/movies/:id',{id:'@_id'},{
//         update: {
//             method: 'PUT'
//         }
//     });
// }).service('popupService',function($window){
//     this.showPopup=function(message){
//         return $window.confirm(message);
//     }
// });


IOHPEApp.service('dataService', function($http) {
delete $http.defaults.headers.common['X-Requested-With'];
this.getData = function(callbackFunc) {
    $http({
        method: 'GET',
        //url: 'http://localhost/atoday/api/apiSQLi.px_data.html',
        url: 'http://192.168.0.100/atodayset/get_server_px.php',
        params: 'limit=50000, sort_by=pxname:desc',
        headers: 'Content-Type: application/json'
     }).success(function(data){
        // With the data succesfully returned, call our callback
        
        callbackFunc(data);
    }).error(function(){
        alert("Error connecting to server!");
    });
 }
});