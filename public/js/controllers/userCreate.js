angular.module('app').controller('userCreate', function ($scope, stateListSrv, postUserInfoSrv, userListSrv, deleteAllUsersSrv, dobSrv) {
    // =============== TESTS
    $scope.userCreateTest = 'userCreate controller is working correctly'
    $scope.stateListSrvTest = stateListSrv.serviceTest
    $scope.postUserInfoSrvTest = postUserInfoSrv.serviceTest
    $scope.userServiceTest = userListSrv.userServiceTest
    $scope.deleteAllUsersServiceTest = deleteAllUsersSrv.deleteAllUsersServiceTest
    $scope.dobServiceTest = dobSrv.dobServiceTest

    // =============== VARIABLES


    // =============== GET STATES LIST
    $scope.states = () => {
        stateListSrv.getStatesList().then((response) => {
            $scope.stateName = response.data
        })
    }
    $scope.states()

    // // =============== GET MONTHS LIST
    // $scope.getmonths = () => {
    //     $scope.months = dobSrv.monthsArr()
    //     // console.log(JSON.stringify($scope.months))
    // }
    // $scope.getmonths()
    // $scope.selectedMonth = null

    // =============== CLEAR FORM
    $scope.clearForm = () => document.getElementById("userCreateForm").reset()

    // =============== SUBMIT USER FORM DATA
    $scope.userInfo = {}
    $scope.submit = () => {
        var sName = $scope.stateObj.name
        var exists = 0
        // console.log(`exists before function ${exists}`)
        // ...................... checks to verify that the user doesn't already exist in the database.
        var getUsers = () => {
            userListSrv.getUserList().then((response) => {
                $scope.users = response.data
                // console.log(JSON.stringify($scope.users))
                for (let i = 0; i < $scope.users.length; i++) {
                    // console.log("what the fuck!")
                    // console.log(`db email ${$scope.users[i].email}`)
                    if ($scope.users[i].email === $scope.userInfo.email && $scope.users[i].first_name === $scope.userInfo.firstName) {
                        exists = 1
                        break;
                    }
                }
                // console.log(`exists inside after function ${exists}`)
                for (let i = 0; i < $scope.stateName.length; i++) {
                    if ($scope.stateName[i].name === sName) {
                        $scope.userInfo.state_id = $scope.stateName[i].id
                    }
                }
                if (exists === 0) {
                    // console.log(`userInfo object that will be sent is ${JSON.stringify($scope.userInfo)}`)
                    postUserInfoSrv.submitUserInfo($scope.userInfo)
                    alert(`User has been created.`)
                    $scope.clearForm()
                }
                else {
                    alert(`User already exists!`)
                }
            })
        }
        getUsers()
    }

    // =============== DELETE ALL USERS
    $scope.deleteUsers = function () { return deleteAllUsersSrv.deleteAllUsers() }



    // no code below this line
})