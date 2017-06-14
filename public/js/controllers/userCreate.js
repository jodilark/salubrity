angular.module('app').controller('userCreate', function ($scope, stateListSrv, postUserInfoSrv) {
    // =============== TESTS
    $scope.userCreateTest = 'userCreate controller is working correctly'
    $scope.stateListSrvTest = stateListSrv.serviceTest
    $scope.postUserInfoSrvTest = postUserInfoSrv.serviceTest

    // =============== VARIABLES


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
        var sName = $scope.stateObj.name
        for (let i = 0; i < $scope.stateName.length; i++) {
            if ($scope.stateName[i].name === sName) {
                $scope.userInfo.state_id = $scope.stateName[i].id
            }
        }
        console.log(`userInfo object that will be sent is ${JSON.stringify($scope.userInfo)}`)
        postUserInfoSrv.submitUserInfo($scope.userInfo)
    }


    // no code below this line
})