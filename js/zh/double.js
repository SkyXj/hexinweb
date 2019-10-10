/**  
 * 天地图内容  
 */
var normalm = L.tileLayer.chinaProvider('TianDiTu.Normal.Map', {
    maxZoom: 18,
    minZoom: 5
}),
    normala = L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion', {
        maxZoom: 18,
        minZoom: 5
    }),
    imgm = L.tileLayer.chinaProvider('TianDiTu.Satellite.Map', {
        maxZoom: 18,
        minZoom: 5
    }),
    imga = L.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion', {
        maxZoom: 18,
        minZoom: 5
    });

var normal = L.layerGroup([normalm, normala]),
    image = L.layerGroup([imgm, imga]);


/**  
 * 天地图内容  
 */
var normalmR = L.tileLayer.chinaProvider('TianDiTu.Normal.Map', {
    maxZoom: 18,
    minZoom: 5
}),
    normalaR = L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion', {
        maxZoom: 18,
        minZoom: 5
    }),
    imgmR = L.tileLayer.chinaProvider('TianDiTu.Satellite.Map', {
        maxZoom: 18,
        minZoom: 5
    }),
    imgaR = L.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion', {
        maxZoom: 18,
        minZoom: 5
    });

var normalmR = L.layerGroup([normalmR, normalaR]),
    imageR = L.layerGroup([imgmR, imgaR]);



var lon = 113.4305016666667;
var lat = 23.11054166666667;
var LMap = L.map("LMap", {
    center: [lat, lon],
    // center: [ 46.7728, 24.6408],
    zoom: 13,
    layers: [normal],
    zoomControl: true,
    attributionControl: false,
    fadeAnimation: false
});

var RMap = L.map("RMap", {
    center: [lat, lon],
    // center: [ 46.7728, 24.6408],
    zoom: 13,
    layers: [normalmR],
    zoomControl: true,
    attributionControl: false,
    fadeAnimation: false
});
var maps = [LMap, RMap];

function maplink(e) {
    var _this = this;
    maps.map(function (t) {
        t.setView(_this.getCenter(), _this.getZoom())
    })
}
//绑定  
maps.map(function (t) {
    t.on({ drag: maplink, zoom: maplink })
})

//热力图
function hotmap(tempmap,data) {
    var heatmapLayer=null;
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
    tempmap.addLayer(heatmapLayer);
    // RMap.addLayer(heatmapLayer);
    heatmapLayer.setData(testData);
    return heatmapLayer;
}

function getZhJson() {
    $.get('../../../data/zh.json', function (data) {
        hotmap(RMap,data);
        hotmap(LMap,data);
    }, 'json')
}
getZhJson();