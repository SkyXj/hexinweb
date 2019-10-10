var color_gray = "#999";
var color_green = "#43ce17";
var color_yellow = "#efdc31";
var color_orange = "#fa0";
var color_red = "#ff401a";
var color_brown = "#d20040";
var color_purple = "#9c0a4e";
function formatAQI(val) {
    var value = null;
    if (val <= 0) {
        value = '<span style="color:' + color_gray + '">' + val + "</span>"
    } else {
        if (val <= 50) {
            value = '<span style="color:' + color_green + '">' + val + "</span>"
        } else {
            if (val <= 100) {
                value = '<span style="color:' + color_yellow + '">' + val + "</span>"
            } else {
                if (val <= 150) {
                    value = '<span style="color:' + color_orange + '">' + val + "</span>"
                } else {
                    if (val <= 200) {
                        value = '<span style="color:' + color_red + '">' + val + "</span>"
                    } else {
                        if (val <= 300) {
                            value = '<span style="color:' + color_brown + '">' + val + "</span>"
                        } else {
                            value = '<span style="color:' + color_purple + '">' + val + "</span>"
                        }
                    }
                }
            }
        }
    }
    return value
}
function getAQILevel(val) {
    var value = null;
    var tip = null;
    if (val <= 0) {
        value = '<span style="color:' + color_gray + '">无</span>';
        tip = "当前无AQI数据"
    } else {
        if (val <= 50) {
            value = '<span style="color:' + color_green + '">优</span>';
            tip = "空气很好，可以外出活动，呼吸新鲜空气"
        } else {
            if (val <= 100) {
                value = '<span style="color:' + color_yellow + '">良</span>';
                tip = "可以正常在户外活动，易敏感人群应减少外出"
            } else {
                if (val <= 150) {
                    value = '<span style="color:' + color_orange + '">轻度污染</span>';
                    tip = "敏感人群症状易加剧，应避免高强度户外锻炼"
                } else {
                    if (val <= 200) {
                        value = '<span style="color:' + color_red + '">中度污染</span>';
                        tip = "应减少户外活动，外出时佩戴口罩，敏感人群尽量避免外出"
                    } else {
                        if (val <= 300) {
                            value = '<span style="color:' + color_brown + '">重度污染</span>';
                            tip = "应减少户外活动，外出时佩戴口罩，敏感人群应留在室内"
                        } else {
                            value = '<span style="color:' + color_purple + '">严重污染</span>';
                            tip = "应避免外出，敏感人群应留在室内，关好门窗"
                        }
                    }
                }
            }
        }
    }
    return {
        value: value,
        tip: tip
    }
}
function formatLevel(val, row) {
    return getLevel(row.aqi)
}
function getLevel(val) {
    var value = null;
    if (val <= 0) {
        value = "无"
    } else {
        if (val <= 50) {
            value = "优"
        } else {
            if (val <= 100) {
                value = "良"
            } else {
                if (val <= 150) {
                    value = "轻度污染"
                } else {
                    if (val <= 200) {
                        value = "中度污染"
                    } else {
                        if (val <= 300) {
                            value = "重度污染"
                        } else {
                            value = "严重污染"
                        }
                    }
                }
            }
        }
    }
    return value
}
function cellLevel(val, row, index) {
    var value = null;
    val = row.aqi;
    if (val <= 0) {
        value = "background-color:" + color_gray + ";color:black;"
    } else {
        if (val <= 50) {
            value = "background-color:" + color_green + ";color:black;"
        } else {
            if (val <= 100) {
                value = "background-color:" + color_yellow + ";color:black;"
            } else {
                if (val <= 150) {
                    value = "background-color:" + color_orange + ";color:black;"
                } else {
                    if (val <= 200) {
                        value = "background-color:" + color_red + ";color:white;"
                    } else {
                        if (val <= 300) {
                            value = "background-color:" + color_brown + ";color:white;"
                        } else {
                            value = "background-color:" + color_purple + ";color:white;"
                        }
                    }
                }
            }
        }
    }
    return value
}
function getColor(aqival) {
    var _color = null;
    var _quality = null;
    if (aqival <= 0) {
        _color = color_gray;
        _quality = "无"
    } else {
        if (aqival <= 50) {
            _color = color_green;
            _quality = "优"
        } else {
            if (aqival <= 100) {
                _color = color_yellow;
                _quality = "良"
            } else {
                if (aqival <= 150) {
                    _color = color_orange;
                    _quality = "轻度污染"
                } else {
                    if (aqival <= 200) {
                        _color = color_red;
                        _quality = "中度污染"
                    } else {
                        if (aqival <= 300) {
                            _color = color_brown;
                            _quality = "重度污染"
                        } else {
                            _color = color_purple;
                            _quality = "严重污染"
                        }
                    }
                }
            }
        }
    }
    return {
        color: _color,
        quality: _quality
    }
}
function getIcon(value) {
    var icon = null;
    if (value <= 0) {
        icon = "../resource/images/gray.png"
    } else {
        if (value <= 50) {
            icon = "../resource/images/green.png"
        } else {
            if (value <= 100) {
                icon = "../resource/images/yellow.png"
            } else {
                if (value <= 150) {
                    icon = "../resource/images/orange.png"
                } else {
                    if (value <= 200) {
                        icon = "../resource/images/red.png"
                    } else {
                        if (value <= 300) {
                            icon = "../resource/images/brown.png"
                        } else {
                            icon = "../resource/images/purple.png"
                        }
                    }
                }
            }
        }
    }
    return icon
}
function getIconByIndex(index) {
    switch (index) {
    case 0:
        icon = "../resource/images/gray.png";
        break;
    case 1:
        icon = "../resource/images/green.png";
        break;
    case 2:
        icon = "../resource/images/yellow.png";
        break;
    case 3:
        icon = "../resource/images/orange.png";
        break;
    case 4:
        icon = "../resource/images/red.png";
        break;
    case 5:
        icon = "../resource/images/brown.png";
        break;
    case 6:
        icon = "../resource/images/purple.png";
        break
    }
    return icon
}
function getColorByIndex(index) {
    switch (index) {
    case 0:
        color = "#999";
        break;
    case 1:
        color = "#43ce17";
        break;
    case 2:
        color = "#efdc31";
        break;
    case 3:
        color = "#fa0";
        break;
    case 4:
        color = "#ff401a";
        break;
    case 5:
        color = "#d20040";
        break;
    case 6:
        color = "#9c0a4e";
        break
    }
    return color
}
function getAQILevelIndex(aqi) {
    if (aqi == 0) {
        level = 0
    } else {
        if (aqi <= 200) {
            level = Math.ceil(aqi / 50);
            if (level < 0) {
                level = 1
            }
        } else {
            if (aqi < 300) {
                level = 5
            } else {
                level = 6
            }
        }
    }
    return level
}
function getPM25LevelIndex(pm2_5) {
    if (pm2_5 == 0) {
        level = 0
    } else {
        if (pm2_5 <= 35) {
            level = 1
        } else {
            if (pm2_5 <= 75) {
                level = 2
            } else {
                if (pm2_5 <= 115) {
                    level = 3
                } else {
                    if (pm2_5 < 150) {
                        level = 4
                    } else {
                        if (pm2_5 <= 250) {
                            level = 5
                        } else {
                            level = 6
                        }
                    }
                }
            }
        }
    }
    return level
}
function getPM10LevelIndex(pm10) {
    if (pm10 == 0) {
        level = 0
    } else {
        if (pm10 <= 50) {
            level = 1
        } else {
            if (pm10 <= 150) {
                level = 2
            } else {
                if (pm10 <= 250) {
                    level = 3
                } else {
                    if (pm10 < 350) {
                        level = 4
                    } else {
                        if (pm10 <= 420) {
                            level = 5
                        } else {
                            level = 6
                        }
                    }
                }
            }
        }
    }
    return level
}
function getSO2LevelIndex(so2) {
    if (so2 == 0) {
        level = 0
    } else {
        if (so2 <= 150) {
            level = 1
        } else {
            if (so2 <= 500) {
                level = 2
            } else {
                if (so2 <= 650) {
                    level = 3
                } else {
                    if (so2 < 800) {
                        level = 4
                    } else {
                        level = 5
                    }
                }
            }
        }
    }
    return level
}
function getNO2LevelIndex(no2) {
    if (no2 == 0) {
        level = 0
    } else {
        if (no2 <= 100) {
            level = 1
        } else {
            if (no2 <= 200) {
                level = 2
            } else {
                if (no2 <= 700) {
                    level = 3
                } else {
                    if (no2 < 1200) {
                        level = 4
                    } else {
                        if (no2 < 2340) {
                            level = 5
                        } else {
                            level = 6
                        }
                    }
                }
            }
        }
    }
    return level
}
function getO3LevelIndex(o3) {
    if (o3 == 0) {
        level = 0
    } else {
        if (o3 <= 160) {
            level = 1
        } else {
            if (o3 <= 200) {
                level = 2
            } else {
                if (o3 <= 300) {
                    level = 3
                } else {
                    if (o3 < 400) {
                        level = 4
                    } else {
                        if (o3 < 800) {
                            level = 5
                        } else {
                            level = 6
                        }
                    }
                }
            }
        }
    }
    return level
}
function getCOLevelIndex(co) {
    if (co == 0) {
        level = 0
    } else {
        if (co <= 5) {
            level = 1
        } else {
            if (co <= 10) {
                level = 2
            } else {
                if (co <= 35) {
                    level = 3
                } else {
                    if (co < 60) {
                        level = 4
                    } else {
                        if (co < 90) {
                            level = 5
                        } else {
                            level = 6
                        }
                    }
                }
            }
        }
    }
    return level
}
function getMap() {
    var map_ = new Object();
    map_.put = function(key, value) {
        map_[key + "_"] = value
    };
    map_.get = function(key) {
        return map_[key + "_"]
    };
    map_.remove = function(key) {
        delete map_[key + "_"]
    };
    map_.keyset = function() {
        var ret = "";
        for (var p in map_) {
            if (typeof p == "string" && p.substring(p.length - 1) == "_") {
                ret += ",";
                ret += p.substring(0, p.length - 1)
            }
        }
        if (ret == "") {
            return ret.split(",")
        } else {
            return ret.substring(1).split(",")
        }
    };
    return map_
}
String.prototype.getBytes = function() {
    var cArr = this.match(/[^\x00-\xff]/ig);
    return this.length + (cArr == null ? 0 : cArr.length)
};
String.prototype.cutBytes = function(strLen, replaceStr) {
    var str = this.toString();
    if (str.getBytes() <= strLen) {
        return str
    }
    var returnStr = "";
    var tempLen = 0;
    for (var i = 0; i < str.length; i++) {
        var tempChar = str[i].match(/[^\x00-\xff]/ig);
        returnStr += str[i];
        tempLen += tempChar == null ? 1 : 2;
        if (tempLen >= strLen) {
            return i + 1 < str.length ? returnStr + replaceStr: returnStr
        }
    }
    return ""
};
Date.prototype.pattern = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12,
        "H+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    var week = {
        "0": "\u65e5",
        "1": "\u4e00",
        "2": "\u4e8c",
        "3": "\u4e09",
        "4": "\u56db",
        "5": "\u4e94",
        "6": "\u516d"
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f": "\u5468") : "") + week[this.getDay() + ""])
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
        }
    }
    return fmt
};
function timeFormatter(date) {
    return date.pattern("yyyy-MM-dd HH:mm")
}
function dateFormatter(date) {
    return date.pattern("yyyy-MM-dd")
}
function myformatter(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    return y + "-" + (m < 10 ? ("0" + m) : m) + "-" + (d < 10 ? ("0" + d) : d)
}
function myparser(s) {
    if (!s) {
        return new Date()
    }
    var ss = (s.split("-"));
    var y = parseInt(ss[0], 10);
    var m = parseInt(ss[1], 10);
    var d = parseInt(ss[2], 10);
    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
        return new Date(y, m - 1, d)
    } else {
        return new Date()
    }
}
function myreplace(str, a, b) {
    var reg = new RegExp(a, "g");
    var newstr = str.replace(reg, b);
    return newstr
}
function inarray(obj, arr) {
    for (var i in arr) {
        if (arr[i] == obj) {
            return true
        }
    }
    return false
}
function converTimeFormat(time) {
    if (time != null) {
        time = time.replace("-", "/");
        time = time.replace("-", "/");
        return new Date(time)
    }
    return null
}
function calTimeDiff(time) {
    var time1 = converTimeFormat(time);
    var time2 = new Date();
    var timediff = (time2.getTime() - time1.getTime()) / 1000;
    return timediff
}
function showMessage(type, message) {
    if (type) {
        $("#img-logo").src = "../resource/images/sucess.png";
        msg = "<table><tr><td valign='middle'><img id='img-logo' src='../resource/images/sucess.png'/></td><td valign='middle'><div id='msgdiv' style='font-size:13px'>" + message + "</div></td></tr></table>"
    } else {
        msg = "<table><tr><td valign='middle'><img id='img-logo' src='../resource/images/failure.png'/></td><td valign='middle'><div id='msgdiv' style='font-size:13px'>" + message + "</div></td></tr></table>"
    }
    $.messager.show({
        title: "系统提示",
        msg: msg
    })
}
function showTip(id, message) {
    var v = document.getElementById(id);
    $("<div id='" + id + '_mask\' class="datagrid-mask" style="display:block"></div>').appendTo(v);
    var msg = $("<div id='" + id + '_mask_msg\' class="datagrid-mask-msg" style="display:block;left:50%"></div>').html(message).appendTo(v);
    msg.css("marginLeft", -msg.outerWidth() / 2)
}
function clearTip(id) {
    var idmask = id + "_mask";
    var idmaskmsg = id + "_mask_msg";
    $("#" + idmask).remove();
    $("#" + idmaskmsg).remove()
}
function dateFormatCheck(date) {
    var result = date.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (result == null) {
        return false
    }
    var d = new Date(result[1], result[3] - 1, result[4]);
    return (d.getFullYear() == result[1] && (d.getMonth() + 1) == result[3] && d.getDate() == result[4])
}
function formatValue(val, row) {
    if (val != null) {
        var subval = getFloatStr(val);
        return subval
    } else {
        return val
    }
}
function formattip(val, row) {
    var subval = val;
    if (val != null) {
        if (val.length > 20) {
            subval = val.substring(0, 20) + "..."
        }
        var content = '<p title="' + val + '" style="margin:0">' + subval + "</p>";
        return content
    }
}
var getFloatStr = function(num) {
    num += "";
    num = num.replace(/[^0-9|\.-]/g, "");
    if (/^0+/) {
        num = num.replace(/^0+/, "")
    }
    if (!/\./.test(num)) {
        num += ".00"
    }
    if (/^\./.test(num)) {
        num = "0" + num
    }
    num += "00";
    num = num.match(/-?\d+\.\d{2}/)[0];
    return num
};
// $.extend($.fn.combo.methods, {
//     activeTextArrow: function(jq) {
//         return jq.each(function() {
//             var textbox = $(this).combo("textbox");
//             var that = this;
//             var panel = $(this).combo("panel");
//             textbox.bind("click.mycombo",
//             function() {
//                 if (panel.is(":visible")) {
//                     $(that).combo("hidePanel")
//                 } else {
//                     $("div.combo-panel").panel("close");
//                     $(that).combo("showPanel")
//                 }
//             })
//         })
//     },
//     inactiveTextArrow: function(jq) {
//         return jq.each(function() {
//             var textbox = $(this).combo("textbox");
//             textbox.unbind("click.mycombo")
//         })
//     }
// });
function countCharacters(str) {
    var totalCount = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if ((c >= 1 && c <= 126) || (65376 <= c && c <= 65439)) {
            totalCount++
        } else {
            totalCount += 2
        }
    }
    return totalCount
}
function decrypt_result(data, key) {
    var b = new Base64();
    result = b.decode(data);
    return b.decode(result.substr(0, result.length - key.length))
}
function encrypt_parameter(param) {
    var b = new Base64();
    return b.encode(param)
}
function Base64() {
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    this.encode = function(input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64
            } else {
                if (isNaN(chr3)) {
                    enc4 = 64
                }
            }
            output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4)
        }
        return output
    };
    this.decode = function(input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2)
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3)
            }
        }
        output = _utf8_decode(output);
        return output
    };
    _utf8_encode = function(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c)
            } else {
                if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128)
                } else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128)
                }
            }
        }
        return utftext
    };
    _utf8_decode = function(utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++
            } else {
                if ((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i + 1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2
                } else {
                    c2 = utftext.charCodeAt(i + 1);
                    c3 = utftext.charCodeAt(i + 2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3
                }
            }
        }
        return string
    }
};