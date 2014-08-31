var IOHPEApp = angular.module('RBGIOHPEApp', [
    'ngRoute'
]);

IOHPEApp.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'tpl/today_list.html',
      controller: 'PXListCtrl'
    }).
    when('/:p_pxrid', {
      templateUrl: 'tpl/px_iohpe.html',
      controller: 'PXDetailCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
});

IOHPEApp.directive('scrollToBookmark', function() {
    return {
      link: function(scope, element, attrs) {
        var value = attrs.scrollToBookmark;
        element.click(function() {
          scope.$apply(function() {
            var selector = "[scroll-bookmark='"+ value +"']";
            var element = $(selector);
            if(element.length)
              window.scrollTo(0, element[0].offsetTop - 10);  // Don't want the top to be the exact element, -100 will go to the top for a little bit more
          });
        });
      }
    };
});