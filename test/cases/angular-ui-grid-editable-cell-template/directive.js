angular.module('test').directive('helloWorld', function () {
    return {
        restrict: 'E',
        editableCellTemplate: 'template.html'
    };
});
