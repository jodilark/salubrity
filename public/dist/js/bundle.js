'use strict';

angular.module('app', ['ui.router', 'ui.grid']).config(function ($stateProvider, $urlRouterProvider) {
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
        url: '/user_manage',
        controller: 'userManage'
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

angular.module('app').controller('userCreate', function ($scope, stateListSrv, postUserInfoSrv, userListSrv, deleteAllUsersSrv, dobSrv) {
    // =============== TESTS
    $scope.userCreateTest = 'userCreate controller is working correctly';
    $scope.stateListSrvTest = stateListSrv.serviceTest;
    $scope.postUserInfoSrvTest = postUserInfoSrv.serviceTest;
    $scope.userServiceTest = userListSrv.userServiceTest;
    $scope.deleteAllUsersServiceTest = deleteAllUsersSrv.deleteAllUsersServiceTest;
    $scope.dobServiceTest = dobSrv.dobServiceTest;

    // =============== VARIABLES


    // =============== GET STATES LIST
    $scope.states = function () {
        stateListSrv.getStatesList().then(function (response) {
            $scope.stateName = response.data;
        });
    };
    $scope.states

    // // =============== GET MONTHS LIST
    // $scope.getmonths = () => {
    //     $scope.months = dobSrv.monthsArr()
    //     // console.log(JSON.stringify($scope.months))
    // }
    // $scope.getmonths()
    // $scope.selectedMonth = null

    // =============== CLEAR FORM
    ();$scope.clearForm = function () {
        return document.getElementById("userCreateForm").reset

        // =============== SUBMIT USER FORM DATA
        ();
    };$scope.userInfo = {};
    $scope.submit = function () {
        var sName = $scope.stateObj.name;
        var exists = 0;
        // console.log(`exists before function ${exists}`)
        // ...................... checks to verify that the user doesn't already exist in the database.
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
                    $scope.clearForm();
                } else {
                    alert('User already exists!');
                }
            });
        };
        getUsers();
    };

    // =============== DELETE ALL USERS
    $scope.deleteUsers = function () {
        return deleteAllUsersSrv.deleteAllUsers();
    };

    // no code below this line
});
'use strict';

angular.module('app').controller('userManage', function ($scope, uiGridConstants, userListSrv, getUserColumnsSrv) {
    // ===============  TESTS
    $scope.userManageControllerTest = 'userManage Controller is ready to role!';
    $scope.getUserColumnsSrvServiceTest = getUserColumnsSrv.getUserColumnsSrvServiceTest;

    // ===============  COLUMNS AND DATA
    $scope.gridOptions = {
        enableFiltering: true,
        columnDefs: [],
        onRegisterApi: function onRegisterApi(gridApi) {
            $scope.grid1Api = gridApi;
        }
    };
    $scope.getUsers = function () {
        userListSrv.getCustomUserList().then(function (response) {
            $scope.gridOptions.data = response.data;
        });
    };
    $scope.getUsers();
});
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

angular.module('app').service('dobSrv', function ($http) {
    // =============== TESTS
    this.dobServiceTest = 'the dobSrv is connected';

    // =============== LISTS
    // ............... months
    this.monthsArr = function () {
        var monthObj = [{ name: 'January' }, { name: 'February' }, { name: 'March' }, { name: 'April' }, { name: 'May' }, { name: 'June' }, { name: 'July' }, { name: 'August' }, { name: 'September' }, { name: 'October' }, { name: 'November' }, { name: 'December' }];
        return monthObj;
    };
    // ............... days in the month

    this.setDayOptions = function (month, year) {
        var dayOptions = [1, 2, 3];
        var leapYears = [1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020];
        if (month === 'April' || month === 'June' || month === 'September' || month === 'November') {
            for (var i = 1; i < 31; i++) {
                dayOptions.push(i);
            }
            return dayOptions;
        } else if (month === 'February' && leapYears.indexOf(year) !== -1) {
            for (var _i = 1; _i < 30; _i++) {
                dayOptions.push(_i);
            }
            return dayOptions;
        } else if (month === 'February' && leapYears.indexOf(year) === -1) {
            for (var _i2 = 1; _i2 < 29; _i2++) {
                dayOptions.push(_i2);
            }
            return dayOptions;
        } else {
            for (var _i3 = 1; _i3 < 32; _i3++) {
                dayOptions.push(_i3);
            }
            return dayOptions;
        }
    };
    // ............... years available
    this.yearsArr = [1980, 1981, 1982];
    this.makeYearArray = function (numberOfYears) {
        var d = new Date();
        var n = d.getFullYear();
        var p = n - numberOfYears;
        for (var i = p; i <= n; i++) {
            yearsArr.push(i);
        }
        return yearsArr;
    };

    // no code below this line
});
"use strict";

var meViaFitbit = { "provider": "fitbit", "displayName": "Jodi P.", "id": "fitbit|4F89PY", "name": {}, "picture": "https://static0.fitbit.com/images/profile/defaultProfile_100_female.png", "locale": "en_US", "nickname": "Jodi P.", "gender": "FEMALE", "identities": [{ "provider": "fitbit", "user_id": "4F89PY", "connection": "fitbit", "isSocial": true }], "_json": { "picture": "https://static0.fitbit.com/images/profile/defaultProfile_100_female.png", "name": "Jodi P.", "age": 36, "avatar150": "https://static0.fitbit.com/images/profile/defaultProfile_150_female.png", "avatar640": "https://static0.fitbit.com/images/profile/defaultProfile_640_female.png", "averageDailySteps": 0, "clockTimeDisplayFormat": "12hour", "corporate": false, "corporateAdmin": false, "dateOfBirth": "1981-02-01", "displayNameSetting": "name", "distanceUnit": "en_US", "features": { "exerciseGoal": true }, "firstName": "Jodi", "foodsLocale": "en_US", "fullName": "Jodi Parker", "gender": "FEMALE", "glucoseUnit": "en_US", "height": 185.5, "heightUnit": "en_US", "lastName": "Parker", "locale": "en_US", "memberSince": "2016-03-16", "mfaEnabled": false, "offsetFromUTCMillis": -21600000, "startDayOfWeek": "SUNDAY", "strideLengthRunning": 98.9, "strideLengthRunningType": "manual", "strideLengthWalking": 76.60000000000001, "strideLengthWalkingType": "manual", "swimUnit": "en_US", "timezone": "America/Denver", "topBadges": [{ "badgeGradientEndColor": "FFDB01", "badgeGradientStartColor": "D99123", "badgeType": "DAILY_STEPS", "category": "Daily Steps", "cheers": [], "dateTime": "2016-07-18", "description": "25,000 steps in a day", "earnedMessage": "Congrats on earning your first Classics badge!", "encodedId": "228TLX", "image100px": "https://static0.fitbit.com/images/badges_new/100px/badge_daily_steps25k.png", "image125px": "https://static0.fitbit.com/images/badges_new/125px/badge_daily_steps25k.png", "image300px": "https://static0.fitbit.com/images/badges_new/300px/badge_daily_steps25k.png", "image50px": "https://static0.fitbit.com/images/badges_new/badge_daily_steps25k.png", "image75px": "https://static0.fitbit.com/images/badges_new/75px/badge_daily_steps25k.png", "marketingDescription": "You've walked 25,000 steps  And earned the Classics badge!", "mobileDescription": "With this impressive fitness feat, you've added a badge to your growing collection. Nice job, you stepping all-star!", "name": "Classics (25,000 steps in a day)", "shareImage640px": "https://static0.fitbit.com/images/badges_new/386px/shareLocalized/en_US/badge_daily_steps25k.png", "shareText": "I took 25,000 steps and earned the Classics badge! #Fitbit", "shortDescription": "25,000 steps", "shortName": "Classics", "timesAchieved": 2, "value": 25000 }, { "badgeGradientEndColor": "42C401", "badgeGradientStartColor": "007D3C", "badgeType": "LIFETIME_DISTANCE", "category": "Lifetime Distance", "cheers": [], "dateTime": "2016-10-01", "description": "500 lifetime miles", "earnedMessage": "Whoa! You've earned the Serengeti badge!", "encodedId": "22B8MG", "image100px": "https://static0.fitbit.com/images/badges_new/100px/badge_lifetime_miles500.png", "image125px": "https://static0.fitbit.com/images/badges_new/125px/badge_lifetime_miles500.png", "image300px": "https://static0.fitbit.com/images/badges_new/300px/badge_lifetime_miles500.png", "image50px": "https://static0.fitbit.com/images/badges_new/badge_lifetime_miles500.png", "image75px": "https://static0.fitbit.com/images/badges_new/75px/badge_lifetime_miles500.png", "marketingDescription": "By reaching 500 lifetime miles, you've earned the Serengeti badge!", "mobileDescription": "Impressive! You've walked distance of the Serengeti—one of the 7 Natural Wonders of the World.", "name": "Serengeti (500 lifetime miles)", "shareImage640px": "https://static0.fitbit.com/images/badges_new/386px/shareLocalized/en_US/badge_lifetime_miles500.png", "shareText": "I covered 500 miles with my #Fitbit and earned the Serengeti badge.", "shortDescription": "500 miles", "shortName": "Serengeti", "timesAchieved": 1, "unit": "MILES", "value": 500 }], "waterUnit": "en_US", "waterUnitName": "fl oz", "weight": 74.8, "weightUnit": "en_US", "clientID": "hQcU4t5VREA4rCBj8h3onZMNBSRA28sT", "updated_at": "2017-06-15T01:09:35.463Z", "user_id": "fitbit|4F89PY", "nickname": "Jodi P.", "identities": [{ "provider": "fitbit", "user_id": "4F89PY", "connection": "fitbit", "isSocial": true }], "created_at": "2017-06-12T19:14:09.561Z", "sub": "fitbit|4F89PY" }, "_raw": "{\"picture\":\"https://static0.fitbit.com/images/profile/defaultProfile_100_female.png\",\"name\":\"Jodi P.\",\"age\":36,\"avatar150\":\"https://static0.fitbit.com/images/profile/defaultProfile_150_female.png\",\"avatar640\":\"https://static0.fitbit.com/images/profile/defaultProfile_640_female.png\",\"averageDailySteps\":0,\"clockTimeDisplayFormat\":\"12hour\",\"corporate\":false,\"corporateAdmin\":false,\"dateOfBirth\":\"1981-02-01\",\"displayNameSetting\":\"name\",\"distanceUnit\":\"en_US\",\"features\":{\"exerciseGoal\":true},\"firstName\":\"Jodi\",\"foodsLocale\":\"en_US\",\"fullName\":\"Jodi Parker\",\"gender\":\"FEMALE\",\"glucoseUnit\":\"en_US\",\"height\":185.5,\"heightUnit\":\"en_US\",\"lastName\":\"Parker\",\"locale\":\"en_US\",\"memberSince\":\"2016-03-16\",\"mfaEnabled\":false,\"offsetFromUTCMillis\":-21600000,\"startDayOfWeek\":\"SUNDAY\",\"strideLengthRunning\":98.9,\"strideLengthRunningType\":\"manual\",\"strideLengthWalking\":76.60000000000001,\"strideLengthWalkingType\":\"manual\",\"swimUnit\":\"en_US\",\"timezone\":\"America/Denver\",\"topBadges\":[{\"badgeGradientEndColor\":\"FFDB01\",\"badgeGradientStartColor\":\"D99123\",\"badgeType\":\"DAILY_STEPS\",\"category\":\"Daily Steps\",\"cheers\":[],\"dateTime\":\"2016-07-18\",\"description\":\"25,000 steps in a day\",\"earnedMessage\":\"Congrats on earning your first Classics badge!\",\"encodedId\":\"228TLX\",\"image100px\":\"https://static0.fitbit.com/images/badges_new/100px/badge_daily_steps25k.png\",\"image125px\":\"https://static0.fitbit.com/images/badges_new/125px/badge_daily_steps25k.png\",\"image300px\":\"https://static0.fitbit.com/images/badges_new/300px/badge_daily_steps25k.png\",\"image50px\":\"https://static0.fitbit.com/images/badges_new/badge_daily_steps25k.png\",\"image75px\":\"https://static0.fitbit.com/images/badges_new/75px/badge_daily_steps25k.png\",\"marketingDescription\":\"You've walked 25,000 steps  And earned the Classics badge!\",\"mobileDescription\":\"With this impressive fitness feat, you've added a badge to your growing collection. Nice job, you stepping all-star!\",\"name\":\"Classics (25,000 steps in a day)\",\"shareImage640px\":\"https://static0.fitbit.com/images/badges_new/386px/shareLocalized/en_US/badge_daily_steps25k.png\",\"shareText\":\"I took 25,000 steps and earned the Classics badge! #Fitbit\",\"shortDescription\":\"25,000 steps\",\"shortName\":\"Classics\",\"timesAchieved\":2,\"value\":25000},{\"badgeGradientEndColor\":\"42C401\",\"badgeGradientStartColor\":\"007D3C\",\"badgeType\":\"LIFETIME_DISTANCE\",\"category\":\"Lifetime Distance\",\"cheers\":[],\"dateTime\":\"2016-10-01\",\"description\":\"500 lifetime miles\",\"earnedMessage\":\"Whoa! You've earned the Serengeti badge!\",\"encodedId\":\"22B8MG\",\"image100px\":\"https://static0.fitbit.com/images/badges_new/100px/badge_lifetime_miles500.png\",\"image125px\":\"https://static0.fitbit.com/images/badges_new/125px/badge_lifetime_miles500.png\",\"image300px\":\"https://static0.fitbit.com/images/badges_new/300px/badge_lifetime_miles500.png\",\"image50px\":\"https://static0.fitbit.com/images/badges_new/badge_lifetime_miles500.png\",\"image75px\":\"https://static0.fitbit.com/images/badges_new/75px/badge_lifetime_miles500.png\",\"marketingDescription\":\"By reaching 500 lifetime miles, you've earned the Serengeti badge!\",\"mobileDescription\":\"Impressive! You've walked distance of the Serengeti—one of the 7 Natural Wonders of the World.\",\"name\":\"Serengeti (500 lifetime miles)\",\"shareImage640px\":\"https://static0.fitbit.com/images/badges_new/386px/shareLocalized/en_US/badge_lifetime_miles500.png\",\"shareText\":\"I covered 500 miles with my #Fitbit and earned the Serengeti badge.\",\"shortDescription\":\"500 miles\",\"shortName\":\"Serengeti\",\"timesAchieved\":1,\"unit\":\"MILES\",\"value\":500}],\"waterUnit\":\"en_US\",\"waterUnitName\":\"fl oz\",\"weight\":74.8,\"weightUnit\":\"en_US\",\"clientID\":\"hQcU4t5VREA4rCBj8h3onZMNBSRA28sT\",\"updated_at\":\"2017-06-15T01:09:35.463Z\",\"user_id\":\"fitbit|4F89PY\",\"nickname\":\"Jodi P.\",\"identities\":[{\"provider\":\"fitbit\",\"user_id\":\"4F89PY\",\"connection\":\"fitbit\",\"isSocial\":true}],\"created_at\":\"2017-06-12T19:14:09.561Z\",\"sub\":\"fitbit|4F89PY\"}" };
'use strict';

angular.module('app').service('getUserColumnsSrv', function ($http) {
    // =============== TESTS
    this.getUserColumnsSrvServiceTest = 'the getUserColumnsSrv is connected';

    // =============== ENDPOINTS
    this.getColumnList = function () {
        return $http.get('http://localhost:3000/api/user/columns');
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
    this.getCustomUserList = function () {
        return $http.get('http://localhost:3000/api/users');
    };
});
//# sourceMappingURL=bundle.js.map
