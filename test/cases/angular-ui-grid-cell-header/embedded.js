angular.module('test').directive('helloWorld', function () {
    return {
        restrict: 'E',
        headerCellTemplate:'<strong>Hello World!</strong>'
    };
});
