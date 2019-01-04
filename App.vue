<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@font-face {
		font-family: 'iconfont';
		src: url('https://at.alicdn.com/t/font_408453_97gz57e555e.ttf') format('truetype');
	}
	page {
		background: #e5e5e5;
	}
	   .gopageIcon{
			font-family: iconfont;
			font-size: 40upx;
		}
	.gotoBox{
		background: #fff;
		margin-top:20upx;
	}
	.gotoBox .gotoList{
		height: 70upx;
		display: flex;
		align-items: center;
		border-bottom:2upx solid #f0f0f0;
		justify-content: space-between;
				padding:0 3%;
		
	}
	.gotoBox .gotoList .list_t{
		font-size:24upx;
		color:#333;
	}
	.gotoBox .gotoList .tel_n{
		color: rgba(128, 128, 128, 1);
	font-size: 24upx;
	}
</style>
