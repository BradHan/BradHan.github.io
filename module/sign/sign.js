
/**
 * Created by winsight on 2017/3/29.
 * @author carl
 * @Description 登入
 */

'use strict';


app.controller("signInCtrl", function ($scope, $http, $state, $stateParams, request, indexService) {

    $scope.signData = {
        user_name: '',
        password: ''
    };
    $scope.isShowLoading = false;
    $scope.isShowCheck = false;
    $scope.errorText = '';

    //登录按钮
    $scope.signInClick = function () {
        $scope.errorText = '';
        if ($scope.signData.user_name == '') {
            $scope.errorText = '请填写用户名';
            return
        }
        if ($scope.signData.password == '') {
            $scope.errorText = '请填写密码';
            return
        }

        $scope.isShowLoading = true;

        var reqData = angular.copy($scope.signData);
        reqData.password = $.md5(reqData.password);

        request.UserSignIn(reqData, function (res) {
            $scope.isShowLoading = false;
            if (res.success) {
                //获取用户登录信息

                // request.UserGetLoginInfo(null, function (res) {
                //     indexService.userInfoData = res;
                //     console.info('userInFoData',indexService.userInfoData);
                //     indexService.getEventCount();
                //     //检索监视器开启
                //     indexService.GetSettingStatus();
                // });
                $state.go('index.location' );
            } else {
                $scope.errorText = '用户名或密码错误';
            }
        }, {
            isShowLoading: false
        });
    };

    $scope.signInPress = function(event){
        if(event.keyCode == 13){
            $scope.signInClick();
        }
    };

    $scope.clearInClick = function () {
        $scope.signData.user_name = "";
        $scope.signData.password = ""
    }

});

app.controller("signOutCtrl", function ($scope, $http, $state, $stateParams, request, alarmService) {

    //获取当前登录用户信息
    request.UserGetLoginInfo(null, function (res) {
        if (res == null)
            $state.go('signIn');
        else
            $scope.userInfoData = res;
    });

    //退出按钮
    //$scope.signOutClick = function () {
    //    request.UserSignOut(null, function (res) {
    //        if (eval(res) == '1')
    //            $state.go('signIn');
    //    });
    //}
});