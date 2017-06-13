angular.module('app').controller('userCreate', function ($scope, stateListSrv, postUserInfoSrv) {
    // =============== TESTS
    $scope.userCreateTest = 'userCreate controller is working correctly'
    $scope.serviceTest = stateListSrv.serviceTest

    // =============== GET STATES LIST
    $scope.states = function () {
        stateListSrv.getStatesList().then(function (response) {
            $scope.stateName = response.data
        })
    }
    $scope.states()

    // =============== SUBMIT FORM DATA
    $scope.userInfo = {}
    $scope.submit = () => {
        var name = $scope.stateObj.name
        $scope.userInfo.state = name
        postUserInfoSrv.submitUserInfo($scope.userInfo)
    }


    // no code below this line
})