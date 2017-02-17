main.component('newTable', {   
   templateUrl: '/js/components/new-table.template.html',
   controller: ['$scope', '$filter', '$http', function TableController($scope, $filter, $http) {
    
    
        $http.get('data/data-huge.json')
            .then(function(response) {
          $scope.tableDataHuge = response.data;
       
         $scope.getData = function () {
             
    return $filter('filter')($scope.tableDataHuge, $scope.search)
    
         };
        
    $scope.numberOfPages=function(){
      return Math.ceil($scope.getData().length/$scope.pageSize);                
    };
                  
       });   
    
        
       
    $scope.point = '';
    $scope.pointed = function(item) {
       $scope.point = item;
    };
    $scope.search = '';
    $scope.reverseSort = false;
    $scope.order = '[0]';
    $scope.currentPage = 0;
    $scope.pageSize = 51;
    
           
   }]
       
  
});

main.filter('startFrom', function() {
    return function(input, start) {
        
        start = +start; //parse to int
        var omg = input.slice(start);
        return omg;
        
    }
});
