angular.module('gitApp').controller('SearchcontrollerCtrl',function($scope,searchService){
$scope.executeSearch = function executeSearch() {
        searchService.authentication(function(data){
               $scope.userDetails = data;        
               searchService.searchRepos($scope.query, function (error, data) {
               if (!error) {
                   $scope.repos = data.items;                      
            
          $scope.repos.forEach(function(repo){
          console.log(repo.full_name); 
          repo.star = "Star" ;
          repo.watch = "Watch";
            searchService.checkstar(repo.full_name,function (data,status,error) {
                                  $scope.status = status; 
                                  console.log($scope.status);                                                                 
                                   if($scope.status === 204) {
                                          repo.star = "Unstar";                                           
                                     }
                              
                         });
            searchService.checkwatch(repo.full_name,function (data,status,error) {
                                  $scope.status = status; 
                                  console.log($scope.status);                                                                 
                                   if($scope.status === 204) {
                                          repo.watch = "Unwatch";                                           
                                     }
                              
                         });
                 });

             }

           });           
               
       });


       };
               $scope.starfun = function starfun(repo){
                       if(repo.star === "Star"){
               searchService.starfun(repo.full_name,function(status){
                       console.log(status);
                       repo.star = "Unstar" ;
               });
       }else{
               searchService.unstarfun(repo.full_name,function(status){
                       console.log(status);
                       repo.star = "Star" ;
               
               });
       }
};
$scope.watchfun = function watchfun(repo){
                       if(repo.watch === "Watch"){
               searchService.watchfun(repo.full_name,function(status){
                       console.log(status);
                       repo.watch = "Unwatch" ;
               });
       }else{
               searchService.unwatchfun(repo.full_name,function(status){
                       console.log(status);
                       repo.watch = "Watch" ;
               
               });
       }
};

});