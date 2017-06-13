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

angular.module('app').controller('userCreate', function ($scope, stateListSrv, postUserInfoSrv) {
    // =============== TESTS
    $scope.userCreateTest = 'userCreate controller is working correctly';
    $scope.serviceTest = stateListSrv.serviceTest;

    // =============== GET STATES LIST
    $scope.states = function () {
        stateListSrv.getStatesList().then(function (response) {
            $scope.stateName = response.data;
        });
    };
    $scope.states

    // =============== SUBMIT FORM DATA
    ();$scope.userInfo = {};
    $scope.submit = function () {
        var name = $scope.stateObj.name;
        $scope.userInfo.state = name;
        postUserInfoSrv.submitUserInfo($scope.userInfo);
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

angular.module('app').service('postUserInfoSrv', function ($http) {
    // =============== TESTS
    this.serviceTest = 'the postUserInfoSrv is connected';

    // =============== ENDPOINTS
    this.submitUserInfo = function (data) {
        console.log('clicked submit and got ' + JSON.stringify(data));
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
//# sourceMappingURL=bundle.js.map
