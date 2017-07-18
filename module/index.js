/**
 * Created by winsight on 2017/3/28.
 * @author carl
 * @Description 项目头部
 */
app.controller('indexCtrl', function ($rootScope, $scope, $state, $sce, $compile,$timeout, request, indexService, webSocket, winSightDialog) {

    //webSocket.init();

    //获取当前登陆状态 如果未登陆，则跳转到登录页面
    //request.UserGetLoginInfo(null, function (res) {
    //    if (res == null)
    //        $state.go('signIn');
    //    else {
    //        indexService.userInfoData = res;
    //        alarmService.initList();
    //    }
    //});

    //退出登入
    $scope.signOutClick = function () {
        request.UserSignOut(null, function (res) {
            if (eval(res) == '1')
                $state.go('signIn');
        });
    };

    $scope.isClickable = true;
    //菜单展开折叠
    $scope.itemClick = function (element) {
        // var w =angular.element(element.currentTarget).parent().parent();
        var p = angular.element(element.currentTarget).parent();

        if ($scope.isClickable) {
            if (p.hasClass('slide-down')) {
                p.removeClass('slide-down').addClass('slide-up').find('.menu-second').slideDown();
                //p.addClass('slide-up');
                //p.find('.menu-second').slideDown();

            } else {
                p.addClass('slide-down').removeClass('slide-up').find('.menu-second').slideUp();
                //p.removeClass('slide-up');
                //p.find('.menu-second').slideUp();
            }
            $scope.isClickable = false;
            $timeout(function () { $scope.isClickable = true; }, 500, true);
        }
    };



});


//主页面全局变量定义 并挂在到$rootScope上
app.service('indexService', function ($rootScope, request) {
    $rootScope.indexData = this;

    var that = this;

    //预警数目初始化及获取
    this.eventCount = {
        all: '500',
        temporary: '125',
        important: '150',
        area: '120',
        person: '80'
    };

    //变量声明
    this.userInfoData = {}; //用户信息

});