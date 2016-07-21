angular.module('test').directive('helloWorld', function () {
    return {
        restrict: 'E',
        cellTemplate: 'template.html'
    };
});
