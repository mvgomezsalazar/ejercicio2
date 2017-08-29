angular.module('mpApp.controllers', [])

/* Driver controller */
.controller('demoController', function($scope) {
    
    $scope.dev =    {};

    $scope.setModel = function(){
        $scope.dev = {
            name: 'Victor Orozco',
            email: 'vorozco@nabenik.com'
        }
    }
})
.controller('pockemonController', function($scope, $log, $http) {
    
    $scope.getPockemon = function(){
        $scope.pockemonTypes = [];		
		$scope.name="";
		$scope.weight="";
		$scope.height="";
		$scope.experience="";
        
        var url="http://pokeapi.co/api/v2/pokemon/"+$scope.nombre+"/";		
        
        $http({method:'GET',
            url:url})
                .then(function success(response){
                    $scope.name = response.data.name;
					$scope.weight = response.data.weight;
					$scope.height = response.data.height;
					$scope.experience = response.data.base_experience;
					$scope.pockemonTypes= response.data.types;
                    $log.warn("Name " + response.data.name);            
					$log.warn("Weight " + response.data.weight);            
					$log.warn("Height " + response.data.height);            
					$log.warn("Experience " + response.data.base_experience);            
					$log.warn("Types " + response.data.types);            
                }, function error(response){
                    $scope.pockemonFacts = [];
                });
         
        $scope.dev = {};
    }

});


