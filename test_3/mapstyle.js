var bmap = {
	center: [106.512408, 29.531104], //奥体中心经纬度
	zoom: 17, //百度地图缩放
	roam: true, //是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
	mapStyle: { //百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
		'styleJson': [{
				'featureType': 'water', //特征类型，即地图元素的名称。这里对照着百度地图个性化编辑器为：水系
				'elementType': 'all', //该地图元素的属性
				'stylers': {
					'color': '#002344' //'#031628'
				}
			},
			{
				'featureType': 'land', //陆地
				'elementType': 'geometry', //元素类型指定为几何形状，对照着百度地图个性化编辑器，一目了然
				//英语要足够好，因为百度地图个性化编辑器上显示的是汉字，而其对应的JSON样式代码中为英文，且无注释。
				//http://lbsyun.baidu.com/customv2/editor/
				'stylers': {
					'color': '#000102'
				}
			},
			{
				'featureType': 'highway',
				'elementType': 'all',
				'stylers': {
					'visibility': 'off'
				}
			},
			{
				'featureType': 'arterial',
				'elementType': 'geometry.fill',
				'stylers': {
					'color': '#000000'
				}
			},
			{
				'featureType': 'arterial',
				'elementType': 'geometry.stroke',
				'stylers': {
					'color': '#0b3d51'
				}
			},
			{
				'featureType': 'local',
				'elementType': 'geometry',
				'stylers': {
					'color': '#000000'
				}
			},
			{
				'featureType': 'railway',
				'elementType': 'geometry.fill',
				'stylers': {
					'color': '#000000'
				}
			},
			{
				'featureType': 'railway',
				'elementType': 'geometry.stroke',
				'stylers': {
					'color': '#08304b'
				}
			},
			{
				'featureType': 'subway',
				'elementType': 'geometry',
				'stylers': {
					'lightness': -70
				}
			},
			{
				'featureType': 'building',
				'elementType': 'geometry.fill',
				'stylers': {
					'color': '#000000'
				}
			},
			{
				'featureType': 'all',
				'elementType': 'labels.text.fill',
				'stylers': {
					'color': '#857f7f'
				}
			},
			{
				'featureType': 'all',
				'elementType': 'labels.text.stroke',
				'stylers': {
					'color': '#000000'
				}
			},
			{
				'featureType': 'building',
				'elementType': 'geometry',
				'stylers': {
					'color': '#022338'
				}
			},
			{
				'featureType': 'green',
				'elementType': 'geometry',
				'stylers': {
					'color': '#062032'
				}
			},
			{
				'featureType': 'boundary',
				'elementType': 'all',
				'stylers': {
					'color': '#465b6c'
				}
			},
			{
				'featureType': 'manmade',
				'elementType': 'all',
				'stylers': {
					'color': '#022338'
				}
			},
			{
				'featureType': 'label',
				'elementType': 'all',
				'stylers': {
					'visibility': 'off'
				}
			}
		]
	}
};