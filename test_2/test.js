<!DOCTYPE html>
<html style="height: 100%">

	<head>
		<meta charset="utf-8">
	</head>

	<body style="height: 100%; margin: 0">
		<!--地图容器-->
		<div id="container" style="height: 100%"></div>
		<style type="text/css">
			.anchorBL {
				display: none;
				/*去掉百度地图左下角的log显示*/
			}
		</style>
		<script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/jquery/jquery.js"></script>
		<script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/echarts/echarts-all-3.js"></script>
		<script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/echarts/map/js/china.js"></script>
		<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=U1YCvtrqNiTGdD3p8quHqHKKGpVw2cxH"></script>
		<script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/echarts/extension/bmap.min.js"></script>
		<script src="mapstyle.js" type="text/javascript" charset="utf-8"></script>
		<!--setOption(option)函数可以被多次调用，最终的效果就是会把多次的设置合并起来展示-->
		<script type="text/javascript">
			var dom = document.getElementById("container");
			var myChart = echarts.init(dom);
			var app = {};
			app.title = '奥体中心 - 交通拥堵疏散仿真';
			// 加载 bmap组件   //这个其实就是百度地图二次开发中的BMap对象，后面的都是BMap的属性
			var busLines = null; //busLines最终是一个数组类型，元素为类数组类型，每个元素都代表了一条公交线路
			var hStep = 0;
			$.ajax({
				type: 'get',
				url: 'all_buslines_gps_chongqing.json',
				async: false,
				success: function(data) {
					hStep = 300 / (data.length - 1);
					//concat方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
					//map()方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
					//map()方法按照原始数组元素顺序依次处理元素。 
					//map()不会改变原始数组。map的参数可以为函数名（此时不能带参数），也可以将匿名函数（必须带参数）直接作为参数。
					//比如a.map(f)，a的元素依次赋给了f函数的第一个参数，该元素在a中的索引（从0开始）依次赋给了f函数的第二个参数。
					busLines = [].concat.apply([], data.map(function(busLine, idx) {
						var prevPt;
						var points = [];
						for(var i = 0; i < busLine.length; i += 2) {
							var pt = [busLine[i], busLine[i + 1]];
							points.push([pt[0], pt[1]]);
						}
						return {
							coords: points,
							lineStyle: { //单个数据（单条线）的样式设置
								normal: { //一定要有normal，但官方说明书上漏掉了这个属性
									color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * idx)),
									width: 2
								}
							}
						};
					}));
				},
				error: function(e) {
					alert('获取json文件失败！');
				}
			});

			//设置echarts配置项
			var options = {};
			options.bmap = bmap;

			//线路样例
			var linesSample = {
				type: 'lines',
				coordinateSystem: 'bmap', //使用百度地图坐标系
				polyline: true, //如果该配置项为 true，则可以在 data.coords 中设置多于 2 个的顶点用来绘制多段线，在绘制路线轨迹的时候比较有用
				silent: true, //图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
				lineStyle: {
					normal: {
						//
					}
				},
				//启用渐进式渲染的图形数量阈值，在单个系列的图形数量超过该阈值时启用渐进式渲染。默认为3000
				progressiveThreshold: 500,
				//渐进式渲染时每一帧绘制图形数量，设为 0 时不启用渐进式渲染，支持每个系列单独配默认为400
				progressive: 200
			};
			//线路样例
			var linesSample_1 = {
				type: 'lines',
				coordinateSystem: 'bmap', //使用百度地图坐标系
				polyline: true, //如果该配置项为 true，则可以在 data.coords 中设置多于 2 个的顶点用来绘制多段线，在绘制路线轨迹的时候比较有用
				silent: true, //图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
				lineStyle: {
					normal: {
						//
					}
				},
				//启用渐进式渲染的图形数量阈值，在单个系列的图形数量超过该阈值时启用渐进式渲染。默认为3000
				progressiveThreshold: 500,
				//渐进式渲染时每一帧绘制图形数量，设为 0 时不启用渐进式渲染，支持每个系列单独配默认为400
				progressive: 200
			};
			//线路样例
			var linesSample_2 = {
				type: 'lines',
				coordinateSystem: 'bmap', //使用百度地图坐标系
				polyline: true, //如果该配置项为 true，则可以在 data.coords 中设置多于 2 个的顶点用来绘制多段线，在绘制路线轨迹的时候比较有用
				silent: true, //图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
				lineStyle: {
					normal: {
						//
					}
				},
				//启用渐进式渲染的图形数量阈值，在单个系列的图形数量超过该阈值时启用渐进式渲染。默认为3000
				progressiveThreshold: 500,
				//渐进式渲染时每一帧绘制图形数量，设为 0 时不启用渐进式渲染，支持每个系列单独配默认为400
				progressive: 200
			};
			//线路动点样例
			var animationPointsSample = {
				type: 'lines',
				coordinateSystem: 'bmap',
				polyline: true,
				effect: {
					show: true, //是否显示特效标记
					color: 'green', //特效标记颜色
					trailLength: 0.0, //特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长。
					symbolSize: 10 //特效标记大小
				}
			};
			//线路动点样例
			var animationPointsSample_1 = {
				type: 'lines',
				coordinateSystem: 'bmap',
				polyline: true,
				effect: {
					show: true, //是否显示特效标记
					color: 'green', //特效标记颜色
					delay: 6,
					constantSpeed: 20,
					trailLength: 0.0, //特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长。
					symbolSize: 10 //特效标记大小
				}
			};
			//线路动点样例
			var animationPointsSample_2 = {
				type: 'lines',
				coordinateSystem: 'bmap',
				polyline: true,
				effect: {
					show: true, //是否显示特效标记
					color: 'yellow', //特效标记颜色
					delay: 5000, //注意：单位为ms
					constantSpeed: 20,
					trailLength: 0.0, //特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长。
					symbolSize: 10 //特效标记大小
				}
			};
			//线路动点样例
			var animationPointsSample_3 = {
				type: 'lines',
				coordinateSystem: 'bmap',
				polyline: true,
				effect: {
					show: true, //是否显示特效标记
					color: 'red', //特效标记颜色
					constantSpeed: 60,
					trailLength: 0.0, //特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长。
					symbolSize: 10 //特效标记大小
				},
				zlevel: 2
			};

			var series = [];
			linesSample_1.data = [busLines[0]];
			series.push(linesSample_1);
			linesSample_2.data = [busLines[1]];
			series.push(linesSample_2);
			animationPointsSample_1.data = [busLines[0]];
			series.push(animationPointsSample_1);
			animationPointsSample_2.data = [busLines[1]];
			series.push(animationPointsSample_2);
			animationPointsSample_3.data = [busLines[1]];
			series.push(animationPointsSample_3);
			options.series = series;
			myChart.setOption(options);
		</script>
	</body>

</html>
