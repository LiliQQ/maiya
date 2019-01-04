<template>
	<view>
		<view class="topBg">
                  <image src="../../static/image/goodsimg.png" class="memberLogo"></image>
				  <view class="memberName">小球球</view>
				  <view class="memberLevel">级别：嘻嘻团长</view>
				   <view class="news_num">8</view>
				   <navigator class="news_icon">&#xe6f5;</navigator>
				   <navigator class="service_icon" url="../../homepage/servicelist/servicelist">&#xe60d;</navigator>
				   <navigator class="set_icon" url="../../homepage/myset/myset">&#xe69d;</navigator>
		</view>
		<view class="my-order">
			<view class="order-m">
				<text class="order_title">我的订单</text>
				<navigator class="more-r" url="../../homepage/myorder/myorder">
					<text class="small-f" >查看全部</text>
					<text class="gopageIcon">&#xe731;</text>
				</navigator>
			</view>
			<view class="order-list">
				<navigator class="list-item">
					<text class="icon-size">&#xe657;</text>
					<view class="item-name">待付款</view>
				</navigator>
				<navigator class="list-item">
					<text class="icon-size">&#xe61b;</text>
					<view class="item-name">待发货</view>
				</navigator>
				<navigator class="list-item">
					<text class="icon-size">&#xe6c1;</text>
					<view class="item-name">待收货</view>
				</navigator>
				<navigator class="list-item">
					<text class="icon-size">&#xe630;</text>
					<view class="item-name">已取消</view>
				</navigator>
				<navigator class="list-item">
					<text class="icon-size">&#xe610;</text>
					<view class="item-name">退款/售后</view>
				</navigator>
			</view>
		</view>
		<view class="my-order">
			<view class="order-m">
				<text class="order_title">我的业绩</text>
				<navigator class="more-r" url="../../homepage/myorder/myorder">
					<text class="small-f">查看全部</text>
					<text class="gopageIcon">&#xe731;</text>
				</navigator>
			</view>
			<view class="moneyBox padding_Top">
				<view class="moneyList">
					<text>0.00</text>
					<view>今日销售额(元)</view>
				</view>
				<view class="moneyList">
					<text>0.00</text>
					<view>本月销售额(元)</view>
				</view>
				<view class="moneyList">
					<text>0.00</text>
					<view>上月销售额(元)</view>
				</view>
			</view>
			<view class="moneyBox">
				<view class="moneyList">
					<text>0.00</text>
					<view>今日预估收入(元)</view>
				</view>
				<view class="moneyList">
					<text>0.00</text>
					<view>本月预估收入(元)</view>
				</view>
				<view class="moneyList">
					<text>0.00</text>
					<view>上月实际收入(元)</view>
				</view>
			</view>
			<view class="moneyBox padding_Bottom">
				<view class="moneyList">
					<text>0.00</text>
					<view>累计业绩收入(元)</view>
				</view>
				<view class="moneyList">
					<text>0.00</text>
					<view>可提现余额(元)</view>
				</view>
				<view class="moneyList">
					<text>0.00</text>
					<view>待提现金额(元)</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		created(){
			uni.login({
			  provider: 'weixin',
			  success: function (loginRes) {
				console.log(loginRes.authResult);
			  }
			})
		}
	}
</script>

<style>

		.topBg {
		height: 240upx;
		background: rgba(208, 61, 211, 1);
		width: 100%;
		padding-top:50upx;
		position:relative
	}
	
.topBg .memberLogo{
	display: block;
	width: 120upx;
	height: 120upx;
	border: 5upx solid  #fff;
	border-radius: 100%;
	margin:0 auto
	
}
.topBg  .memberName{
	color:#fff;
	font-size:32upx;
	text-align: center;
	margin:12upx 0;
}
.topBg .memberLevel{
	width: 220upx;
	height: 38upx;
	line-height: 38upx;
	color: rgba(255, 255, 255, 1);
	background-color: rgba(121, 72, 234, 1);
	border-radius: 18upx;
	font-size:24upx;
	margin:0 auto;
	text-align: center;
}
.topBg .news_icon{
	font-family: iconfont;
	font-size: 44upx;
	position: absolute;
	top:110upx;
	right:3%;
	color: #fff;
}
.topBg .news_num{
	position: absolute;
	top:90upx;
	right:3%;
	width: 28upx;
	height: 28upx;
	line-height: 28upx;
	text-align: center;
	font-size:24upx;
	box-shadow: rgba(172, 51, 193, 1) solid 1px;
	border-radius: 50%;
    color: rgba(172, 51, 193, 1);
	background: #fff;
}
.topBg .service_icon{
	font-family: iconfont;
	font-size: 44upx;
	position: absolute;
	top:160upx;
	right:3%;
	color: #fff;
}
	.gopageIcon {
		font-family: iconfont;
		font-size: 40upx;
	}

	.icon-size {
		font-family: iconfont;
		font-size: 40upx;
		color: #ac33c1
	}

.set_icon{
	font-family: iconfont;
	font-size: 40upx;
	color:#fff;
	position: absolute;
	top:40upx;
	right:3%;
}
	.my-order {
		margin-top: 20rpx;
		background: #fff;
		overflow: hidden;
		clear: both;
		width: 95%;
		margin: 20upx auto;
		border-radius: 16upx;
	}
.order_title{
	font-size:28upx;
	font-weight: bold;
}
	.order-m {
		height: 80upx;
		padding: 0 30upx;
		color: #333;
		font-size: 28upx;
		position: relative;
		border-bottom: 1px solid #f0f0f0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.order-m .more-r {
		color: #666;
		display: flex;
		align-items: center
	}

	.order-m .more-r .small-f {
		font-size: 24upx;
		margin-right: -8upx;
	}

	.order-m .more-r .icon-icon {
		margin-top: -12upx;
		display: block;
	}

	.order-list {
		display: flex;
		align-items: center;
		width: 100%;
		height: 150upx;
	}

	.order-list .list-item {
		width: 20%;
		font-size: 24upx;
		color: #333;
		text-align: center;
		color: #999
	}
	.moneyBox{
		background: #fff;
		width: 100%;
		height: 100upx;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.moneyBox .moneyList{
		text-align: center;
		font-size:28upx;
		color:#505050
	}
	.moneyBox .moneyList view{
		font-size:24upx;
		color:#808080;
	}
	.padding_Top{
		padding-top:10upx
	}
	.padding_Bottom{
		padding-bottom:20upx
	}
</style>
