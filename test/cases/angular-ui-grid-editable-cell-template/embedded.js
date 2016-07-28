angular.module('test').directive('helloWorld', function () {
    return {
        restrict: 'E',
        editableCellTemplate:'<strong>Hello World!</strong>'
    };
});
