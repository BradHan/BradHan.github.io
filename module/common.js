/**
 * Created by winsight on 2014/7/17..
 * @author Silence
 * @Describe 公共函数
 */

'use strict';

//数值转换成数值字符串 NumberToArray(2345, false)
//isPositive = true : 输入2345，返回[2, 3, 4, 5]
//isPositive = false : 输入2345，返回[5, 4, 3, 2]
function NumToArray(value) {
    var m = 100000000;      //可处理的最大数值
    var array = [];
    var isPositive = arguments[1] != undefined ? arguments[1] : true;

    while (m >= 1) {
        var v = parseInt(value / m);
        value = value - v * m;
        m = m / 10;
        if (v == 0 && array[0] == null) {
            continue;
        }
        if (isPositive == true) {
            array.push(v);
        }
        else {
            array.unshift(v);
        }
    }
    return array;
}


//打印
function Log(str) {
    console.log(str);
}
function Warn(str) {
    console.warn(str);
}

function ArrayToString(array, key) {
    var str = "";
    for (var i in array) {
        if (key != null)
            str += array[i][key].toString();
        else
            str += array[i].toString();
        if (i < array.length - 1)
            str += ",";
    }
    return str;
}
function StringToArray(str) {
    if (str == null) {
        return [];
    }
    var arr = str.split(',');
    return arr;
}

//日期格式化
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};


//数组转成树
function getTree(data,pid) {
    var rst = [];
    for (var i = 0, len = data.length; i < len; i++) {
        var item = data[i];
        if (item.pId == pid) {
            rst.push(item);
        } else {
            var pId = item.pId;
            var elem = getParent(pId, rst);
            if (elem) {
                elem.children  ? elem.children .push(item) : (elem.children  = [item]);
            }
        }
    }
    function getParent(pId, elems) {
        if (!elems) {
            return;
        }
        for (var i = 0, len = elems.length; i < len; i++) {
            var elem = elems[i];
            if (elem.id == pId) {
                return elem;
            } else {
                return getParent(pId, elem.children);
            }
        }
    }
    return rst
}

