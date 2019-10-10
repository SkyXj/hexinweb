// 画线
var points = [];
var lines = null;
var tempLines = null;
function startdrawLine() {
    map.on('click', onClick_line);    //点击地图
    map.on('dblclick', onDoubleClick_line);
    points = [];
    lines = new L.polyline(points);
    tempLines = new L.polyline(points);
}
//map.off(....) 关闭该事件
function onClick_line(e) {
    points.push([e.latlng.lat, e.latlng.lng])
    lines.addLatLng(e.latlng)
    map.addLayer(lines)
    map.addLayer(L.circle(e.latlng, { color: '#ff0000', fillColor: 'ff0000', fillOpacity: 1 }))
    map.on('mousemove', onMove_line)//双击地图

}
function onMove_line(e) {
    if (points.length > 0) {
        ls = [points[points.length - 1], [e.latlng.lat, e.latlng.lng]]
        tempLines.setLatLngs(ls)
        map.addLayer(tempLines)
    }
}

function onDoubleClick_line(e) {
    L.polyline(points).addTo(map)
    points = []
    lines = new L.polyline(points)
    //移除时间
    map.off('mousemove')
    map.off('click')
    map.off('dblclick')
}
//绘制多边形
// var points = [];
var lines = null;
var tempLines = null;
function startdrawPolygon() {
    map.on('click', onClick_Polygon);    //点击地图
    map.on('dblclick', onDoubleClick_Polygon);
    map.on('mousemove', onMove_Polygon)//双击地图
    points = [];
    lines = new L.polyline(points);
    tempLines = new L.polyline(points, { dashArray: 5 });
}
//map.off(....) 关闭该事件

function onClick_Polygon(e) {

    points.push([e.latlng.lat, e.latlng.lng])
    lines.addLatLng(e.latlng)
    map.addLayer(tempLines)
    map.addLayer(lines)
    map.addLayer(L.circle(e.latlng, { color: '#ff0000', fillColor: 'ff0000', fillOpacity: 1 }))

}
function onMove_Polygon(e) {
    if (points.length > 0) {
        ls = [points[points.length - 1], [e.latlng.lat, e.latlng.lng], points[0]]
        tempLines.setLatLngs(ls)
        // map.addLayer(tempLines)
    }
}

function onDoubleClick_Polygon(e) {
    L.polygon(points).addTo(map);
    points = [];
    //map.removeLayer(tempLines)
    //tempLines.remove()
    lines.remove();
    tempLines.remove();
    lines = new L.polyline([]);
    map.off('click');    //点击地图
    map.off('dblclick');
    map.off('mousemove')//双击地图
}



//绘制矩形
let rectangle;
let tmprec;
const latlngs = [];

function startdrawRectangle() {
    map.dragging.disable();
    map.on('mousedown', onClick_rectangle);    //点击地图
    map.on('mouseup', onDoubleClick_rectangle);
    rectangle;
    tmprec;
}

//map.off(....) 关闭该事件
function onClick_rectangle(e) {
    if (typeof tmprec != 'undefined') {
        tmprec.remove()
    }
    //左上角坐标
    latlngs[0] = [e.latlng.lat, e.latlng.lng]
    //开始绘制，监听鼠标移动事件
    map.on('mousemove', onMove_rectangle)

}
function onMove_rectangle(e) {
    latlngs[1] = [e.latlng.lat, e.latlng.lng]
    //删除临时矩形
    if (typeof tmprect != 'undefined') {
        tmprect.remove()
    }
    //添加临时矩形
    tmprect = L.rectangle(latlngs, { dashArray: 5 }).addTo(map)
}

function onDoubleClick_rectangle(e) {
    //矩形绘制完成，移除临时矩形，并停止监听鼠标移动事件
    tmprect.remove()
    map.off('mousemove')
    //右下角坐标
    latlngs[1] = [e.latlng.lat, e.latlng.lng]
    rectangle = L.rectangle(latlngs, {
        color: '#3300ff',
        fillOpacity: 0,
        weight: 2
    })
    rectangle.addTo(map)
    //调整view范围
    // map.fitBounds(latlngs)

    map.off('mousedown');    //点击地图
    map.off('mouseup');

    //开启添加移动
    map.dragging.enable();
}