var vm = {};
var chat1={};
var chat2={};
var chat3={};
var chat4={};
var chat5={};
var chat6={};

$(function () {
	datainit();
})



function datainit() {
	//初始化数据
	localDataInit();
	//问题个数排名
	problemsInit();
	//企业TVOC峰值浓度排名
	companyTVOCInit();
	//重点行业占比
	industryInit();
	//走航进度统计
	zhProcessInit();
	//整改进度统计
	correctProcessInit();
	//整改进度统计
	// chat6Init();
}
function localDataInit() {
	var scn_data = {
		alarm: { alarm: 10, fault: 10 },
		dtu: { on: 150, off: 150 },
		plc: { on: 10, off: 10 },
		industy: { v1: 10, v2: 11, v3: 12, v3: 14, v4: 15, v5: 17, v6: 18 },
		online: { v1: 10, v2: 11, v3: 12, v3: 14, v4: 15, v5: 17, v6: 18 },
		almMsg: [{ msg: "2017年5月4日市A区12#机器气压过高报警" },
		{ msg: "上海市A区12#机器气压过高报警" },
		{ msg: "江苏省12#机器气压过高报警" },
		{ msg: "河南省郑州市B区12#机器气压过高报警" },
		{ msg: "河南省郑州市B区12#机器气压过高报警" },
		{ msg: "河南省郑州市B区12#机器气压过高报警" },
		{ msg: "河南省郑州市B区12#机器气压过高报警" }
		],
		msgCnt: [{ msg: 100, alm: 20 },
		{ msg: 200, alm: 40 },
		{ msg: 300, alm: 50 },
		{ msg: 400, alm: 35 },
		{ msg: 400, alm: 40 },
		{ msg: 400, alm: 11 },
		{ msg: 400, alm: 66 },
		{ msg: 100, alm: 77 },
		{ msg: 200, alm: 88 },
		{ msg: 300, alm: 22 },
		{ msg: 400, alm: 99 },
		{ msg: 400, alm: 100 },
		{ msg: 400, alm: 111 },
		{ msg: 400, alm: 222 },
		{ msg: 100, alm: 333 },
		{ msg: 200, alm: 11 },
		{ msg: 300, alm: 33 },
		{ msg: 400, alm: 55 },
		{ msg: 400, alm: 77 },
		{ msg: 400, alm: 90 }
		],
		map: [{ area: "山东", cnt: 20 },
		{ area: "浙江", cnt: 40 },
		{ area: "江苏", cnt: 50 },
		{ area: "辽宁", cnt: 50 }
		],
		workplan: [
			{ "categories": "计划名称" },
			{ "categories": "开始时间" },
			{ "categories": "结束时间" }
		],
		factory: [
			{ "company": "宝钢", "dtuCnt": 200, "plcCnt": 400, "dataCnt": 5000, "alarm": "无" },
			{ "company": "造纸厂", "dtuCnt": 3000, "plcCnt": 2000, "dataCnt": 1000, "alarm": "无" },
			{ "company": "锅炉厂", "dtuCnt": 1500, "plcCnt": 1000, "dataCnt": 500, "alarm": "无" },
			{ "company": "锅炉二厂", "dtuCnt": 1500, "plcCnt": 300, "dataCnt": 1200, "alarm": "温度上限报警>120" },
			{ "company": "锅炉三厂", "dtuCnt": 1000, "plcCnt": 800, "dataCnt": 200, "alarm": "无" },
			{ "company": "锅炉三厂", "dtuCnt": 1000, "plcCnt": 800, "dataCnt": 200, "alarm": "无" },
			{ "company": "锅炉三厂", "dtuCnt": 1000, "plcCnt": 800, "dataCnt": 200, "alarm": "无" },
			{ "company": "锅炉三厂", "dtuCnt": 1000, "plcCnt": 800, "dataCnt": 200, "alarm": "无" },
			{ "company": "锅炉三厂", "dtuCnt": 1000, "plcCnt": 800, "dataCnt": 200, "alarm": "无" },
			{ "company": "锅炉三厂", "dtuCnt": 1000, "plcCnt": 800, "dataCnt": 200, "alarm": "无" }]
	};
	vm = new Vue({
		el: '#content',
		data: scn_data,
		methods: {
			details: function () {

			}
		}
	})
}
function problemsInit() {
	var dom = document.getElementById("top_five_abnormal");
	chat1 = echarts.init(dom);
	option = {
		color: ['#3398DB'],
		tooltip: {
			trigger: 'axis',
			axisPointer: {            // 坐标轴指示器，坐标轴触发有效
				type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [
			{
				splitLine:{show: false},//去除网格线
				type: 'category',
				data: ['洛阳轴承技术', '洛阳天浩泰轨道装备制造', '益博摩配', '中集凌宇汽车公司', '河北宝力工程装备股份', '衡水中铁建工程橡制有限责任公司'],
				axisTick: {
					alignWithLabel: true
				},
				axisLabel: {
					textStyle: {
						color: '#999'
					}
				}
			}
		],
		yAxis: [
			{
				splitLine:{show: false},//去除网格线
				type: 'value',
				axisLabel: {
					textStyle: {
						color: '#999'
					}
				}
			}
		],
		series: [
			{
				name: '直接访问',
				type: 'bar',
				barWidth: '60%',
				data: [10, 52, 200, 334, 390, 330]
			}
		]
	}
	chat1.setOption(option, true);
}

function companyTVOCInit() {
	var dom = document.getElementById("container2");
	chat2 = echarts.init(dom);
	option = {
		color: ['#3398DB'],
		tooltip: {
			trigger: 'axis',
			axisPointer: {            // 坐标轴指示器，坐标轴触发有效
				type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		yAxis: [
			{
				splitLine:{show: false},//去除网格线
				type: 'category',
				data: ['洛阳轴承技术', '洛阳天浩泰轨道装备制造', '益博摩配', '中集凌宇汽车公司', '河北宝力工程装备股份', '衡水中铁建工程橡制有限责任公司'],
				axisTick: {
					alignWithLabel: true
				},
				axisLabel: {
					textStyle: {
						color: '#999'
					}
				}
			}
		],
		xAxis: [
			{
				splitLine:{show: false},//去除网格线
				type: 'value',
				axisLabel: {
					textStyle: {
						color: '#999'
					}
				}
			}
		],
		series: [
			{
				name: '直接访问',
				type: 'bar',
				barWidth: '60%',
				data: [10, 52, 200, 334, 390, 330]
			}
		]
	}
	chat2.setOption(option, true);
}

function industryInit() {
	var dom = document.getElementById("top_five_abnormal_rate");
	chat3 = echarts.init(dom);
	option = {
		// title : {
		// 	text: '某站点用户访问来源',
		// 	subtext: '纯属虚构',
		// 	x:'center'
		// },
		color:['#99CCCC','#CCFFCC','#FFFFFF','#006699','#99CCFF'],
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
			textStyle:{//图例文字的样式
				color:'#ccc',
				fontSize:16
			}
		},
		series : [
			{
				name: '访问来源',
				type: 'pie',
				radius : '55%',
				center: ['50%', '60%'],
				data:[
					{value:335, name:'直接访问'},
					{value:310, name:'邮件营销'},
					{value:234, name:'联盟广告'},
					{value:135, name:'视频广告'},
					{value:1548, name:'搜索引擎'}
				],
				itemStyle: {
					emphasis: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		]
	};
	chat3.setOption(option);
}

function zhProcessInit() {
	var dom = document.getElementById("right_chat1");
	chat4 = echarts.init(dom);
	option = {
		// title: {
		// 	text: '基础雷达图'
		// },
		color:['#99CCCC','#CCFFCC'],
		tooltip: {},
		legend: {
			left: 'left',
			orient: 'vertical',
			data: ['预算分配', '实际开销'],
			textStyle:{//图例文字的样式
				color:'#ccc',
				fontSize:16
			}
		},
		radar: {
			// shape: 'circle',
			name: {
				textStyle: {
					color: '#FFFFCC',
					// backgroundColor: '#FFFFCC',
					borderRadius: 3,
					padding: [3, 5]
			   }
			},
			indicator: [
			   { name: '销售', max: 6500},
			   { name: '管理', max: 16000},
			   { name: '信息技术', max: 30000},
			   { name: '客服', max: 38000},
			   { name: '研发', max: 52000},
			   { name: '市场', max: 25000}
			]
		},
		series: [{
			name: '预算 vs 开销（Budget vs spending）',
			type: 'radar',
			// areaStyle: {normal: {}},
			data : [
				{
					value : [4300, 10000, 28000, 35000, 50000, 19000],
					name : '预算分配'
				},
				 {
					value : [5000, 14000, 28000, 31000, 42000, 21000],
					name : '实际开销'
				}
			]
		}]
	};
	chat4.setOption(option);
}
function correctProcessInit() {

}

//窗口大小发生变化
window.addEventListener("resize", () => { 
	this.chat1.resize();  
    this.chat2.resize();  
	this.chat3.resize();
	this.chat4.resize();
});

