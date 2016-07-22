angular.module('test').directive('helloWorld', function () {
    return {
        restrict: 'E',
        headerCellTemplate: 'template.html'
    };
});
