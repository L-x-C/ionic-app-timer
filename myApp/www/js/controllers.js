angular.module('starter.controllers', [])

.controller('ToDoListCtrl', function($scope, $ionicModal) {
    $scope.toDoListItems = [{
        task: 'Scuba Diving',
        status: 'not done'
    }, {
        task: 'Climb Everest',
        status: 'not done'
    }];

    $ionicModal.fromTemplateUrl('modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function() {
        $scope.modal.show();
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
    };

    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });

    $scope.AddItem = function(data) {
        $scope.toDoListItems.push({
            task: data.newItem,
            status: 'not done'
        });

        data.newItem = ' ';
        $scope.closeModal();
    }
});
