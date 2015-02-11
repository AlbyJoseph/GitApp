angular.module('gitApp').controller('ListstarredCtrl',function($scope,searchService){

searchService.listStarred(function(data){
               $scope.listStar = data;
               console.log($scope.listStar);
       });

});