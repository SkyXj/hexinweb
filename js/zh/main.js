// 查询条件
var station="";
var startTime="";
var endTime="";
var yz="";

function getZhJson() {
    $.get('../../../data/zh.json', function (data) {
        //hotmap(data);
        // runpoint(data);
        // 绘制走航轨迹
        drawLine(data);
    }, 'json')
}
getZhJson();
// function drawLine(){
//     var points=[]
//     var lines=new L.polyline(points)
// }

function drawLine(data) {

    //添加点
    var options = {
        // highlight: 'permanent',
        highlight: 'temporary',
        draggable: true,
        color: 'green',
        weight:9,
        opacity:0.5
    };

    var points = [];
    let i=0;
    data.forEach(element => {
        if(i%400==0){
            var temp = [];
        temp.push(element[2]);
        temp.push(element[1]);
        points.push(temp);
        
        var marker = L.marker([element[2], element[1]], options).addTo(map);
        var draggable = new L.Draggable(marker);
        draggable.enable();
        }
        i++;
    });
    var polyline=L.polyline(points, { color: 'green',weight:8,opacity:0.5 }).addTo(this.map);
    polyline.on("click",function(e){
        alert(e.latlng.toString());
    });
    map.fitBounds(polyline.getBounds());
}

function runpoint(data) {
    var carIcon = L.icon({
        iconUrl: '../../plugins/leaflet/images/marker-icon-2x.png',
        iconSize: [25.1, 25],
    });
    var points = [];
    data.forEach(element => {
        var temp = [];
        temp.push(element[2]);
        temp.push(element[1]);
        points.push(temp);
    });
    L.motion.polyline(points, {
        color: 'red'
    }, {
        auto: true,
        duration: 1000,
        easing: L.Motion.Ease.easeInOutQuart
    }, {
        removeOnEnd: false,
        icon: carIcon
    }).addTo(map);

    // var speed=1000;
    // L.motion.polyline(points,
    //     {
    //         color: "red",
    //         fill: false,
    //         fillOpacity: 0
    //     },
    //     {
    //         auto: true
    //     },
    //     {
    //         removeOnEnd: true,
    //         icon: L.icon({
    //             iconUrl: "../../plugins/leaflet/images/marker-icon-2x.png",
    //             iconSize: [24, 24],
    //             iconAnchor: [10, 3]
    //         })
    //     })
    //     .motionSpeed(speed)
    //     .addTo(map);
}

function runpoint2() {
    var bikeIcon = L.icon({
        iconUrl: '../../plugins/leaflet/images/marker-bike-green-shadowed.png',
        iconSize: [25, 39],
        iconAnchor: [12, 39],
        shadowUrl: null
    });
    $.get('../../../data/zh.json', function (data) {
        //hotmap(data);
        var points = [];
        data.forEach(element => {
            var temp = [];
            temp.push(element[2]);
            temp.push(element[1]);
            points.push(temp);
        });
        var line = L.polyline(points);
        var options = {
            icon: bikeIcon,
            autoStart: true
        };
        var animatedMarker = L.animatedMarker(line.getLatLngs(),options);
        map.addLayer(animatedMarker);
    }, 'json')
}

var heatmapLayer=null;

function hotmapcreate(){
    $.get('../../../data/zh.json', function (data) {
        if(heatmapLayer==null){
            hotmap(data);
        }else{
            cancel();
        }
    }, 'json')
}

function hotmap(data) {
    var testData={
        max: 0,
        data:[]
    };
    data.forEach(element => {
        var temp = {};
        temp.lat=element[2];
        temp.lng=element[1];
        if(element[3]>testData.max){
            testData.max=element[3];
        }
        temp.count=element[3];
        testData.data.push(temp);
    });


    // //数据
    // var testData = {
    //     max: 1000,
    //     data: [
    //         { lat: 23.11054166666667, lng: 113.4305016666667, count: 3 },
    //         { lat: 23.11949333333334 + 0.01, lng: 113.432565 + 0.01, count: 1 },
    //         { lat: 23.11949333333334 + 0.2, lng: 113.432565 + 0.02, count: 9 },
    //         { lat: 23.11949333333334 + 0.012, lng: 113.432565 + 0.07, count: 8 },
    //         { lat: 23.11949333333334 + 0.09, lng: 113.432565 + 0.06, count: 7 },
    //         { lat: 23.11949333333334 + 0.08, lng: 113.432565 + 0.05, count: 6 },
    //         { lat: 23.11949333333334 + 0.07, lng: 113.432565 + 0.04, count: 5 },
    //         { lat: 23.11949333333334 + 0.06, lng: 113.432565 + 0.03, count: 4 },
    //         { lat: 23.11949333333334 + 0.05, lng: 113.432565 + 0.02, count: 3 },
    //         { lat: 23.11949333333334 + 0.04, lng: 113.432565 + 0.02, count: 2 }
    //     ]
    // };
    //配置
    var cfg = {
        "radius": 0.002,
        "maxOpacity": 0.9,
        "scaleRadius": true,
        "useLocalExtrema": true,
        latField: 'lat',
        lngField: 'lng',
        valueField: 'count'
    };
    heatmapLayer = new HeatmapOverlay(cfg);
    // //图层
    // var baseLayer = L.tileLayer(
    //   'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //       attribution: '...'
    //       maxZoom: 18,
    //   }
    // );

    // L.layerGroup([heatmapLayer]);
    // map.addLayer(heatmapLayer);
    // var map = new L.Map('map', {
    //     center: new L.LatLng(25.6586, -80.3568),
    //     zoom: 4,
    //     layers: [baseLayer, heatmapLayer]
    // });
    map.addLayer(heatmapLayer);
    heatmapLayer.setData(testData);
}
// hotmap();
function cancel(){
    // if(!heatmapLayer){
    //     map.addLayer(heatmapLayer);
    // }else{
        
    // }
    if(map.hasLayer(heatmapLayer)){
        map.removeLayer(heatmapLayer);
    }else{
        map.addLayer(heatmapLayer);
    }
    
}
function addPoint() {
    var options = {
        // highlight: 'permanent',
        highlight: 'temporary',
        draggable: true
    };
    var marker = L.marker([lat, lon], options).addTo(map);
    

    // marker.on('click', function (e) {
    //     var popup = L.popup();
    // popup
    //     .setLatLng(e.latlng)
    //     .setContent("You clicked the map at " + e.latlng.toString())
    //     .openOn(map);
    // })

    var draggable = new L.Draggable(marker);
    draggable.enable();
    // map.addLayer(marker);
}
function addFlashPoint() {
    //初始化动画图层
    var animatorVector = new SuperMap.Layer.AnimatorVector("Vector Layer", {}, {
        speed: 0.2,
        startTime: 0,
        endTime: 100
    });
    map.addLayers([animatorVector]); //添加图层
    animatorVector.addFeatures(
        [
            new SuperMap.Feature.Vector(
                new SuperMap.Geometry.Point(2325.144, -2619.2997),//添加第一个时间节点的位置
                {
                    //如果自定义了featureidName与timeName的值，这里就需要填写相应的值
                    FEATUREID: "point",//设置要素的id
                    TIME: 1            //第一个时间节点
                }
            ),
            new SuperMap.Feature.Vector(
                new SuperMap.Geometry.Point(2295.2035, -2654.0703),//添加第二个时间节点的位置
                {
                    FEATUREID: "point",
                    TIME: 2
                }
            )
            //然后按照时间节点依次添加要素
        ]
    );

}

function addCircle(){
    var options={
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.50,
        radius: 2000,

    };
    var circle=L.circle([lat, lon], options).addTo(map);
    circle.on('click', function (e) {
        console.log(e);
        alert('我是Marker，被点了。');
    })

    
}

function addCircleMaker(){
    var options={
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.50,
        radius: 20,

    };
    var circleMarker=L.circleMarker([lat+0.01, lon+0.01], options).addTo(map);
    // circleMarker.on('click', function (e) {
    //     console.log(e);
    //     alert('我是Marker，被点了。');
    // })

}
function clickMap(){
    map.on('mousedown', function (e) {
        alert(e.latlng);
    });

    //添加事件
    map.on('click contextmenu', function(e) {
        alert(e.latlng.lng);
      });
    //   移除事件
      map.off('click contextmenu');
    //   添加一次性事件
      map.once('click', function(e) {
        alert(e.latlng.lng);
      });
      //激发事件
      map.fire('click', {
        latlng: latlngPoint,
        layerPoint: map.latLngToLayerPoint(latlngPoint),
        containerPoint: map.latLngToContainerPoint(latlngPoint)
     });
    //  检查是否有事件
     alert(map.listens('click'));
}

function slideLeft(){
    // $("#left").slideToggle();
    var wd=$("#left").width();
    $("#left").animate({ "left": (0-wd)+"px" }, 500);
    $("#leftslideup").delay(0).animate({left:'0'});
}
function slideRight(){
    var wd=$("#left").width();
    $("#left").animate({ "left": '0' }, 500);
    $("#leftslideup").delay(0).animate({left:'-50px'});
}


function drawRadar(){
    var myIcon = L.divIcon({
        html: '<canvas id="can" width=300 height=300></canvas>',
        //className: 'css_animation',
        iconSize: 10,
        bgPos: [lat, lon]
    });

    // L.marker([lat, lon]).addTo(map);

    L.marker([lat, lon], { icon: myIcon }).addTo(map);
    // var canvas = $('#can');//定义变量获取画布dom
    var c = can.getContext('2d');//设置绘图环境2d
    c.lineWidth = 4;//设置线宽
    c.strokeStyle = "rgba(0,200,0, 0.7)";   //设置边颜色
    c.fillStyle = "rgba(0,200,0, 0.7)";     //扇形
    c.moveTo(130, 130);
    c.arc(130, 130, 130, Math.PI * 1.25, Math.PI * 1.5, false);
    c.moveTo(130, 130);
    c.arc(130, 130, 130, Math.PI * 1.25, Math.PI * 1.5, false);
    c.fill()
    c.beginPath();
    c.lineWidth = 3;
    c.strokeStyle = "rgba(217, 242, 245, 0.5)";
    var waitTime = 1;
    var waitInterval = setInterval(() => {   // 让扇形转动
        waitTime++;
        $('#can').css("transform", "rotate(" + waitTime + "deg)");
    }, 10)
}