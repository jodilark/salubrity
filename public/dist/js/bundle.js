'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/', "");
    $stateProvider.state('home', {
        templateUrl: '../views/home.html',
        url: '/'
    }).state('hcp_home', {
        templateUrl: '../views/landing_page_hcp.html',
        url: '/hcp_home'
    }).state('user_home', {
        templateUrl: '../views/landing_page_user.html',
        url: '/user_home'
    }).state('global_search', {
        templateUrl: '../views/global_search_results.html',
        url: '/global_search'
    }).state('settings', {
        templateUrl: '../views/settings.html',
        url: '/settings'
    }).state('test_create', {
        templateUrl: '../views/test_create.html',
        url: '/test_create'
    }).state('test_manage', {
        templateUrl: '../views/test_manage.html',
        url: '/test_manage'
    }).state('user_create', {
        templateUrl: '../views/user_create.html',
        url: '/user_create',
        controller: 'userCreate'
    }).state('user_manage', {
        templateUrl: '../views/user_manage.html',
        url: '/user_manage'
    });
});
"use strict";
"use strict";
"use strict";
'use strict';

angular.module('app').controller('mainCtrl', function ($scope) {
    // ...tests
    $scope.controllerTest = 'Controller Engaged!!!';
});
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
'use strict';

angular.module('app').controller('userCreate', function ($scope, stateListSrv, postUserInfoSrv, userListSrv, deleteAllUsersSrv) {
    // =============== TESTS
    $scope.userCreateTest = 'userCreate controller is working correctly';
    $scope.stateListSrvTest = stateListSrv.serviceTest;
    $scope.postUserInfoSrvTest = postUserInfoSrv.serviceTest;
    $scope.userServiceTest = userListSrv.userServiceTest;
    $scope.deleteAllUsersServiceTest = deleteAllUsersSrv.deleteAllUsersServiceTest;

    // =============== VARIABLES


    // =============== GET STATES LIST
    $scope.states = function () {
        stateListSrv.getStatesList().then(function (response) {
            $scope.stateName = response.data;
        });
    };
    $scope.states

    // =============== GET User LIST
    // $scope.users = function () {
    //     userListSrv.getUserList().then((response) => {
    //         $scope.users = response.data
    //         console.log(JSON.stringify($scope.users))
    //     })
    // }
    // $scope.users()

    // =============== SUBMIT USER FORM DATA
    ();$scope.userInfo = {};
    $scope.submit = function () {
        var sName = $scope.stateObj.name;
        var exists = 0;
        // console.log(`exists before function ${exists}`)
        var getUsers = function getUsers() {
            userListSrv.getUserList().then(function (response) {
                $scope.users = response.data;
                // console.log(JSON.stringify($scope.users))
                for (var i = 0; i < $scope.users.length; i++) {
                    // console.log("what the fuck!")
                    // console.log(`db email ${$scope.users[i].email}`)
                    if ($scope.users[i].email === $scope.userInfo.email && $scope.users[i].first_name === $scope.userInfo.firstName) {
                        exists = 1;
                        break;
                    }
                }
                // console.log(`exists inside after function ${exists}`)
                for (var _i = 0; _i < $scope.stateName.length; _i++) {
                    if ($scope.stateName[_i].name === sName) {
                        $scope.userInfo.state_id = $scope.stateName[_i].id;
                    }
                }
                if (exists === 0) {
                    // console.log(`userInfo object that will be sent is ${JSON.stringify($scope.userInfo)}`)
                    postUserInfoSrv.submitUserInfo($scope.userInfo);
                    alert('User has been created.');
                } else {
                    alert('User already exists!');
                }
            });
        };
        getUsers();
    };

    // =============== Delete all users
    $scope.deleteUsers = function () {
        return deleteAllUsersSrv.deleteAllUsers();
    };

    // no code below this line
});
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
'use strict';

angular.module('app').service('deleteAllUsersSrv', function ($http) {
    // =============== TESTS
    this.deleteAllUsersServiceTest = 'the deleteAllUsersSrv is connected';

    // =============== ENDPOINTS
    this.deleteAllUsers = function () {
        $http({
            url: 'http://localhost:3000/api/user',
            method: 'DELETE'
        }).then(function (httpResponse) {
            console.log('response:', JSON.stringify(httpResponse));
        });
    };
});
'use strict';

angular.module('app').service('postUserInfoSrv', function ($http) {
    // =============== TESTS
    this.serviceTest = 'the postUserInfoSrv is connected';

    // =============== ENDPOINTS
    this.submitUserInfo = function (data) {
        // console.log(`clicked submit and got ${JSON.stringify(data)}`)
        $http({
            url: 'http://localhost:3000/api/user',
            method: 'POST',
            data: data
        }).then(function (httpResponse) {
            console.log('response:', JSON.stringify(httpResponse));
        });
    };
});
'use strict';

angular.module('app').service('stateListSrv', function ($http) {
    // =============== TESTS
    this.serviceTest = 'the stateListSrv is connected';

    // =============== ENDPOINTS
    this.getStatesList = function () {
        return $http.get('http://localhost:3000/api/states');
    };
});
'use strict';

angular.module('app').service('userListSrv', function ($http) {
    // =============== TESTS
    this.userServiceTest = 'the userListSrv is connected';

    // =============== ENDPOINTS
    this.getUserList = function () {
        return $http.get('http://localhost:3000/api/user');
    };
});
//# sourceMappingURL=bundle.js.map
