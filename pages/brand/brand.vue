<template>
	<view>
		<view class="hear_search">
			<view class="brand_view">
			</view>
			<view class="input_view">
				<view class="input_box">
					<text class="search-icon">&#xe633;</text>
					<input placeholder="搜索品牌/商品/关键字" />
				</view>

			</view>
			<view class="customer_view">
				<text class="customer-icon">&#xe60d;</text>
				<view>客服</view>
			</view>
		</view>
		<view class="categoryBox">
			<view class="categoryInfor">
				<text class="categoryTitle">女装</text>
				<navigator class="more" url="../../product/productlist/productlist">
					<text class="more_t">更多</text>
					<text class="gopageIcon">&#xe731;</text>
				</navigator>
			</view>
			<view class="list_box">
				<view class="list_img">
					<image src='../../static/image/goodsimg.png' class="shop_img"></image>
					<view class="mask"></view>
					<view class="ab_mask">
						<view class="line"></view>
						<view class="shop_Name">特卖旗舰店</view>
					</view>
				</view>
				<view class="list_img">
					<image src='../../static/image/goodsimg.png' class="shop_img"></image>
					<view class="mask"></view>
					<view class="ab_mask">
						<view class="line"></view>
						<view class="shop_Name">特卖旗舰店</view>
					</view>
				</view>
				<view class="list_img">
					<image src='../../static/image/goodsimg.png' class="shop_img"></image>
					<view class="mask"></view>
					<view class="ab_mask">
						<view class="line"></view>
						<view class="shop_Name">特卖旗舰店</view>
					</view>
				</view>
				<view class="list_img">
					<image src='../../static/image/goodsimg.png' class="shop_img"></image>
					<view class="mask"></view>
					<view class="ab_mask">
						<view class="line"></view>
						<view class="shop_Name">特卖旗舰店</view>
					</view>
				</view>
			</view>
		</view>
		<view class="categoryBox">
			<view class="categoryInfor">
				<text class="categoryTitle">女装</text>
				<navigator class="more" url="../../product/productlist/productlist">
					<text class="more_t">更多</text>
					<text class="gopageIcon">&#xe731;</text>
				</navigator>
			</view>
			<view class="list_box">
				<view class="list_img">
					<image src='../../static/image/goodsimg.png' class="shop_img"></image>
					<view class="mask"></view>
					<view class="ab_mask">
						<view class="line"></view>
						<view class="shop_Name">特卖旗舰店</view>
					</view>
				</view>
				<view class="list_img">
					<image src='../../static/image/goodsimg.png' class="shop_img"></image>
					<view class="mask"></view>
					<view class="ab_mask">
						<view class="line"></view>
						<view class="shop_Name">特卖旗舰店</view>
					</view>
				</view>
				<view class="list_img">
					<image src='../../static/image/goodsimg.png' class="shop_img"></image>
					<view class="mask"></view>
					<view class="ab_mask">
						<view class="line"></view>
						<view class="shop_Name">特卖旗舰店</view>
					</view>
				</view>
				<view class="list_img">
					<image src='../../static/image/goodsimg.png' class="shop_img"></image>
					<view class="mask"></view>
					<view class="ab_mask">
						<view class="line"></view>
						<view class="shop_Name">特卖旗舰店</view>
					</view>
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
		}
	}
</script>

<style>
	.hear_search {
		display: flex;
		background: #fff;
		align-items: center;
		height: 104upx;
	}

	.hear_search .brand_img {
		width: 40upx;
		height: 40upx;
	}

	.hear_search .brand_view {
		-webkit-flex: 1;
		flex: 1;
		text-align: center;
	}

	.hear_search .input_view {
		-webkit-flex: 6;
		flex: 6;

	}

	.hear_search .input_box {
		width: 80%;
		height: 70upx;
		background-color: rgba(243, 243, 243, 1);
		border-radius: 19px;
		font-size: 24upx;
		padding-left: 80upx;
		position: relative;
		line-height: 70upx;
		margin: 0 auto
	}

	.hear_search .input_box input {
		height: 70upx;
		line-height: 70upx;
	}

	.hear_search .customer_view {
		-webkit-flex: 1;
		flex: 1;
		text-align: center;
	}

	.hear_search .customer_view view {
		color: rgba(128, 128, 128, 1);
		font-size: 24upx;
	}

	.hear_search .brand_t {
		font-size: 24upx;
		color: rgba(128, 128, 128, 1);
		text-align: center;
		margin-top: -4rpx;
	}

	@font-face {
		font-family: 'iconfont';
		src: url('https://at.alicdn.com/t/font_408453_2v1ntguefwa.ttf') format('truetype');
	}

	.hear_search .customer-icon {
		font-family: iconfont;
		font-size: 40upx;
		color: rgba(128, 128, 128, 1);
	}

	.hear_search .search-icon {
		font-family: iconfont;
		font-size: 40upx;
		position: absolute;
		top: 0;
		left: 20upx;
	}

	.categoryBox {
		background: #fff;
		padding: 0 3%;
	}

	.categoryBox .categoryInfor {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 60upx;
	}

	.categoryBox .categoryTitle {
		color: #333;
		font-size: 28upx;
	}

	.categoryBox .categoryInfor .more {
		display: flex;
		align-items: center;
		color: #666;
		font-size: 24upx;
	}

	.categoryBox .categoryInfor .more .gopageIcon {
		font-family: iconfont;
		font-size: 40upx;
	}

	.categoryBox .categoryInfor .more .more_t {
		margin-right: -8upx;
		font-size: 24upx;
	}

	.list_img {
		position: relative;
		float: left;
		margin: 4upx auto;
		width: 32.33%;
		margin-right: 1%;
	}

	.list_img .shop_img {
		width: 100%;
		height: 200upx;
		display: block;
	}

	.list_img .mask {
		width: 100%;
		height: 200upx;
		background: rgba(0, 0, 0, 0.3);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
	}

	.list_img .ab_mask {
		position: absolute;
		top: 0;
		left: 0;
		width: 200upx;
		height: 200upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 11;
	}

	.list_img .ab_mask .line {
		width: 60upx;
		height: 2upx;
		background: #fff;
		margin: 0 auto;
	}

	.list_img .ab_mask .shop_Name {
		color: #fff;
		font-size: 28upx;
		text-align: center;
		margin: 10upx 0;
	}

	.list_box {
		overflow: hidden;
		padding: 10upx 0 20upx 1%
	}
</style>
