angular.module('test').directive('helloWorld', function () {
    return {
        restrict: 'E',
        cellTemplate:'<strong>Hello World!</strong>'
    };
});
