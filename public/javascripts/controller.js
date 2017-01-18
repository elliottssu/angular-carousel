angular.module('ctrlModule', [])
	.controller('testCtrl', function ($scope, $http) {
	    $scope.imgs = [
			"https://contestimg.wish.com/api/webimage/5810997858bda0247cbf7559-orignal.jpg",
			"https://contestimg.wish.com/api/webimage/5810997858bda0247cbf7559-1-orignal.jpg",
			"https://contestimg.wish.com/api/webimage/5810997858bda0247cbf7559-2-orignal.jpg",
			"https://contestimg.wish.com/api/webimage/5810997858bda0247cbf7559-3-orignal.jpg"
		];
		$scope.imgIndex = 0;
		$scope.selImg = function (type) {
			if (type = '+') {
				if($scope.imgIndex < $scope.imgs.length - 1){
				  $scope.imgIndex++;
				}else{
				  $scope.imgIndex = 0;
				}

			} else{
				if($scope.imgIndex > 0){
				  $scope.imgIndex--;
				}else{
				  $scope.imgIndex = $scope.imgs.length - 1;
				}
			}
		}
	})
