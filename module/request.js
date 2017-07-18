/**
 * Created by winsight on 2017/3/28.
 * @author carl
 * @Description 请求路径集合
 */
'use strict';

var request = angular.module('WinSightRequest', []);

//表格请求
request.service('tableUrl', function () {
    //定义错误类型
    this.type = {
        imei: '1.txt',
    };

    return this
});



//实体请求
request.factory("request", ['$http', 'winSightDialog',
        function($http, winSightDialog){

            //请求函数名定义及请求url
            var _config = {
                //主页
                wifiPositionsZtree:'/positions/ztree',


                //虚拟特征
                virtualQq :"/virtual/feature/source/search/qq",
                virtualWeixin :"/virtual/feature/source/search/weixin",
                virtualWeibo:"/virtual/feature/source/search/sinaweibo",
                virtualTaxi:"/virtual/feature/source/search/dididache",
                virtualImei:"/virtual/feature/source/search/imei",
                virtualImsi:"/virtual/feature/source/search/imsi",
                virtualPhone:"/virtual/feature/source/search/phone",
                virtualWifi: "/virtual/feature/source/search/wifi",
                virtualGsm:"/virtual/feature/source/search/gsm",
                posSourceAll:"/pos/source/all",//获取位置点
                virtualTrack : "/virtual/feature/source/history/page ",//历史轨迹
                //智能分析
                TagGetAllTag : "/tag/getCurrentPageTags", //获取全部标签
                virtualRegular : "/virtual/feature/source/regular/page",//作息规律

                //配置管理
                MonitoredPersonSearch : "/monitored/person/source/search",
                MonitoredPersonDelete : "/monitored/person/source/delete",
                MonitoredPersonAdd    : "/monitored/person/source/add",
                MonitoredPersonUpdate : "/monitored/person/source/update",

                MonitoredPlaceSearch : "/monitored/area/source/search",
                MonitoredPlaceDelete : "/monitored/area/source/delete",
                MonitoredPlaceAdd    : "/monitored/area/source/add",
                MonitoredPlaceUpdate : "/monitored/area/source/update",
                MonitoredPlaceBatchMonitor    : "/monitored/area/source/tomonitor",
                MonitoredPlaceBatchUnMonitor : "/monitored/area/source/outmonitor",

                //预警信息
                monitoredKeyAlarm:"/monitored/person/key/alarm/page",
                monitoredTempAlarm:"/monitored/person/temp/alarm/page",

                //综合搜索
                searchPersonPage:"/search/person/page",
                searchImPersonKeyPage:'/monitored/person/key/source/page',

                UserSignIn: '/getlogin/login'

            };

            //添加等待框
            var $loading = $("<div class='loading'><div class='loading-bg'></div></div>");
            $('body').append($loading);
            $loading.hide();
            var httpCount = 0;
            var errorDialog = null;
            function Ajax(url){
                //_data : 请求的数据
                //_callback : 回调函数
                //_config : {isShowLoading : true} 默认
                //_param : 请求类型，默认以json传递，如果为param，则传输数据为序列化

                this.req = function(_data, _callback, _config, _param){
                    var obj;
                    var def = {
                        isShowLoading : true
                    };
                    _config = angular.extend(def, _config || {});
                    //if(_type == 'param'){
                    //    if(_data)
                    //        _data = $.param(_data);
                    //    obj = {
                    //        data : _data ,
                    //        method : "post",
                    //        url : url,
                    //        headers : {
                    //            'Content-Type' :  "application/x-www-form-urlencoded; charset=utf-8"
                    //        }
                    //    }
                    //}
                    obj = {
                        data : _data,
                        method : "post",
                        url : url
                    };
                    httpCount += 1;
                    if(_config.isShowLoading == true){
                        $loading.show();
                    }
                    return $http(obj).then(function(res) {
                        httpCount -= 1;
                        if(httpCount == 0){
                            $loading.fadeOut(200);
                        }
                        if( res.data == '2' ){ //TODO
                            //console.log('未登录');
                            return;
                        }
                        console.log(res);
                        _callback && _callback(res.data, res.status, res.headers, res.config, res._param);
                    }).catch(function(){
                        httpCount -= 1;
                        if(httpCount == 0){
                            $loading.fadeOut(200);
                        }
                        errorDialog && errorDialog.close(false);
                        errorDialog = winSightDialog.alert('数据请求失败，请重试。');
                    })
                };
            }
            var pathName=window.document.location.pathname;
            var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
            var res = {};
            for(var s in _config)
            {
                var t = new Ajax( projectName + _config[s]);
                res[s] = t.req;
            }
            return res;
        }]
);