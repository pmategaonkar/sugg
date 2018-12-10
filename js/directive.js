angular.module('Flicker.directive',[])
.directive("hi", function () {
    return {
        restrict: 'E',
        replace: false,
        tempalte: '<div>< div fusioncharts id = "my-chart-id" width="700" height="400" type="column2d" dataSource="{{myDataSource}}" ></div></div>'
    }
});
