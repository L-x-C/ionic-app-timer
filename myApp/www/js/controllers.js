angular.module('starter.controllers', [])
	.controller('ToDoListCtrl', function($scope, $ionicModal, $interval) {
		$ionicModal.fromTemplateUrl('modal.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modal = modal;
		});

		$scope.data = {
			firstRound: 5,
			secondRound: 6,
			time: 5
		};

		$scope.start = true;

		$scope.openModal = function() {
			$scope.modal.show();
		};

		$scope.closeModal = function() {
			$scope.modal.hide();
		};

		$scope.$on('$destroy', function() {
			$scope.modal.remove();
		});

		$scope.startTimer = function() {
			var flag = true,
				ft = $scope.data.firstRound,
				st = $scope.data.secondRound;
			var firstRoundFn = function() {
				$scope.data.time = --ft;
				if ($scope.data.time <= 0) {
					flag = false;
					ft = $scope.data.firstRound;
				}

			};
			var secondRoundFn = function() {
				$scope.data.time = --st;
				if ($scope.data.time <= 0) {
					flag = true;
					st = $scope.data.secondRound;
				}
			};

			$scope.start = false;

			timer = $interval(function() {
				if (flag) {
					firstRoundFn();
				} else {
					secondRoundFn();
				}
			}, 1000);
		};

		$scope.stopTimer = function() {
			$interval.cancel(timer);
			$scope.start = true;
		}
	});
