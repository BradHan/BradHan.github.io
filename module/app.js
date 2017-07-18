/**
 * Created by winsight on 2015/3/30.
 * @author Silence
 * @Description 项目路由
 */
'use strict';



var app = angular.module('webApp',
    [
        'ui.router', 'angularFileUpload', 'WinSightRequest', 'WinSightDialog', 'WinSightGrid', 'WinSightTreeView', 'WinSightUiDirective', 'WinSightUiService', 'WinSightCollectionLogicDialog'
    ]);
/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootScope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams
 * @return {[type]}
 */
app.run(function ($rootScope, $state, $stateParams) {
});

/**
 * 配置路由。
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由。
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router。
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider
 * @return {[type]}
 */
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index/location');
    $stateProvider
        //登入
        .state('signIn', {
            url: '/signIn',
            views: {
                'indexView': {templateUrl: 'module/sign/sign-in.html'}
            }
        })
        //首页
        .state('index', {
            url: '/index',
            views: {
                'indexView': {templateUrl: 'module/index.html'}
            }
        })
        //主页
        .state('index.location', {
            url: '/location',
            views: {
                'contentView@index': {templateUrl: 'module/home/location.html'}
            }
        })
        //智能分析
        .state('index.analyze-history', {
            url: '/analyze-history',
            views: {
                'contentView@index': {templateUrl: 'module/analyze/analyze-history.html'}
            }
        })
        .state('index.analyze-rest', {
            url: '/aanalyze-rest',
            views: {
                'contentView@index': {templateUrl: 'module/analyze/analyze-rest.html'}
            }
        })
        .state('index.analyze-position', {
            url: '/analyze-position',
            views: {
                'contentView@index': {templateUrl: 'module/analyze/analyze-face.html'}
            }
        })
        .state('index.analyze-accompany', {
            url: '/analyze-accompany',
            views: {
                'contentView@index': {templateUrl: 'module/analyze/analyze-accompany.html'}
            }
        })
        .state('index.analyze-contrast', {
            url: '/analyze-contrast',
            views: {
                'contentView@index': {templateUrl: 'module/analyze/analyze-contrast.html'}
            }
        })
        .state('index.analyze-suspect', {
            url: '/analyze-suspect',
            views: {
                'contentView@index': {templateUrl: 'module/analyze/analyze-suspect.html'}
            }
        })
        .state('index.analyze-partner', {
            url: '/analyze-partner',
            views: {
                'contentView@index': {templateUrl: 'module/analyze/analyze-partner.html'}
            }
        })
        .state('index.analyze-flow', {
            url: '/analyze-flow',
            views: {
                'contentView@index': {templateUrl: 'module/analyze/analyze-flow.html'}
            }
        })
        .state('index.analyze-bayonet', {
            url: '/analyze-bayonet',
            views: {
                'contentView@index': {templateUrl: 'module/analyze/analyze-bayonet.html'}
            }
        })
        .state('index.analyze-video', {
            url: '/analyze-video',
            views: {
                'contentView@index': {templateUrl: 'module/analyze/analyze-video.html'}
            }
        })
        .state('index.analyze-face', {
            url: '/analyze-face',
            views: {
                'contentView@index': {templateUrl: 'module/analyze/analyze-face.html'}
            }
        })
        .state('index.analyze-cloud', {
            url: '/analyze-cloud',
            views: {
                'contentView@index': {templateUrl: 'module/analyze/analyze-cloud.html'}
            }
        })
        .state('index.analyze-important', {
            url: '/analyze-important',
            views: {
                'contentView@index': {templateUrl: 'module/analyze/analyze-important.html'}
            }
        })


        //搜索
        .state('index.search', {
            url: '/search',
            views: {
                'contentView@index': {templateUrl: 'module/search/search.html'}
            }
        })


        //虚拟特征
        .state('index.virtual-wifi', {
            url: '/virtual-wifi',
            views: {
                'contentView@index': {templateUrl: 'module/virtual/virtual-wifi.html'}
            }
        })
        .state('index.virtual-gsm', {
            url: '/virtual-gsm',
            views: {
                'contentView@index': {templateUrl: 'module/virtual/virtual-gsm.html'}
            }
        })
        .state('index.virtual-Bayonet', {
            url: '/virtual-Bayonet',
            views: {
                'contentView@index': {templateUrl: 'module/virtual/virtual-Bayonet.html'}
            }
        })

        .state('index.virtual-app', {
            url: '/virtual-app',
            views: {
                'contentView@index': {templateUrl: 'module/virtual/virtual-app.html'}
            }
        })

        .state('index.virtual-tel', {
            url: '/virtual-tel',
            views: {
                'contentView@index': {templateUrl: 'module/virtual/virtual-tel.html'}
            }
        })

        //预警消息
        .state('index.message-important', {
            url: '/message-important',
            views: {
                'contentView@index': {templateUrl: 'module/message/message-important.html'}
            }
        })
        .state('index.message-temporary', {
            url: '/message-temporary',
            views: {
                'contentView@index': {templateUrl: 'module/message/message-temporary.html'}
            }
        })
        .state('index.message-person', {
            url: '/message-person',
            views: {
                'contentView@index': {templateUrl: 'module/message/message-person.html'}
            }
        })
        .state('index.message-area', {
            url: '/message-area',
            views: {
                'contentView@index': {templateUrl: 'module/message/message-area.html'}
            }
        })

        //数据统计
        .state('index.statistic-gsm', {
            url: '/statistic-gsm',
            views: {
                'contentView@index': {templateUrl: 'module/statistic/statistic-gsm.html'}
            }
        })
        .state('index.statistic-equipment', {
            url: '/statistic-equipment',
            views: {
                'contentView@index': {templateUrl: 'module/statistic/statistic-equipment.html'}
            }
        })
        .state('index.statistic-wifi', {
            url: '/statistic-wifi',
            views: {
                'contentView@index': {templateUrl: 'module/statistic/statistic-wifi.html'}
            }
        })
        .state('index.statistic-bayonet', {
            url: '/statistic-bayonet',
            views: {
                'contentView@index': {templateUrl: 'module/statistic/statistic-bayonet.html'}
            }
        })
        .state('index.statistic-comprehensive', {
            url: '/statistic-comprehensive',
            views: {
                'contentView@index': {templateUrl: 'module/statistic/statistic-comprehensive.html'}
            }
        })

        //配置管理
        .state('index.config-person', {
            url: '/config-person',
            views: {
                'contentView@index': {templateUrl: 'module/config/config-person.html'}
            }
        })
        .state('index.config-area', {
            url: '/config-area',
            views: {
                'contentView@index': {templateUrl: 'module/config/config-area.html'}
            }
        })
        .state('index.config-important', {
            url: '/config-important',
            views: {
                'contentView@index': {templateUrl: 'module/config/config-important.html'}
            }
        })
        .state('index.config-temporary', {
            url: '/config-temporary',
            views: {
                'contentView@index': {templateUrl: 'module/config/config-temporary.html'}
            }
        })
    ;


});

