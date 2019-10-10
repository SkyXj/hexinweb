
var canvas = $('#mycanvas');//定义变量获取画布dom
var c = mycanvas.getContext('2d');//设置绘图环境2d
c.lineWidth = 4;//设置线宽
c.strokeStyle = "rgba(0,200,0, 0.7)";   //设置边颜色
c.fillStyle = "rgba(0,200,0, 0.7)";     //扇形
c.moveTo(130, 130);
c.arc(130, 130, 130, Math.PI * 1.25, Math.PI * 1.5, false);
c.moveTo(130, 130);
c.arc(130, 130, 130, Math.PI * 7 / 6, Math.PI * 1.5, false);
c.fill()
c.beginPath();
c.lineWidth = 3;
c.strokeStyle = "rgba(217, 242, 245, 0.5)";
var waitTime = 1;
var waitInterval = setInterval(() => {   // 让扇形转动
    waitTime++;
    $('#mycanvas').css("transform", "rotate(" + waitTime + "deg)");
}, 10)