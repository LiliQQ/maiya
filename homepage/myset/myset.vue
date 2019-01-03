<template>
	<view>
		<view class="memberBg">
			<view class="item_center">
				<image src="../../static/image/goodsimg.png" class="memberLogo"></image>
				<view>
					<view class="name">小球球</view>
					<view class="account">账号：13989366603</view>
				</view>
			</view>
			<text class="gopageIcon">&#xe731;</text>
		</view>
		<view class="gotoBox">
			<navigator class="gotoList">
				<text class="list_t">账户安全</text>
				<text class="gopageIcon">&#xe731;</text>
			</navigator>
			<navigator class="gotoList">
				<text  class="list_t">客服电话</text>
				<view class="item_center">
					<text class="tel_n">0574-88133818</text>
					<text class="gopageIcon">&#xe731;</text>
				</view>
			</navigator>
			<navigator class="gotoList">
				<text class="list_t">问题反馈</text>
				<text class="gopageIcon">&#xe731;</text>
			</navigator>
			<navigator class="gotoList">
				<text  class="list_t">关于我们</text>
				<text class="gopageIcon">&#xe731;</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.memberBg{
	background: #fff;
	height: 150upx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding:0 5%;
}
 .item_center{
	display: flex;
	align-items: center;
}
.memberBg .memberLogo{
		display: block;
		width: 120upx;
		height: 120upx;
		border-radius: 100%;
	}
	.memberBg .item_center .name{
		color: rgba(0, 0, 0, 1);
	    font-size: 30upx;
		padding-left:20upx
	}
	.memberBg .item_center .account{
	color: rgba(128, 128, 128, 1);
	font-size: 24upx;
	padding-left:20upx
	}
   .gopageIcon{
		font-family: iconfont;
		font-size: 40upx;
	}
	
</style>
