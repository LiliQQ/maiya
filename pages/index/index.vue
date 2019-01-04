<template>
	<view>
		<view class="hear_search">
			<navigator class="brand_view" open-type="switchTab" url="../brand/brand">
				<image src='../../static/image/bar02AA.png' class="brand_img"></image>
				<view class="brand_t">品牌</view>
			</navigator>
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
		<view class="page-section">
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :indicator-color="indicatorcolor" :indicator-active-color="activecolor">
                <swiper-item v-for="item in imageList" :key="item">
                    <image :src="item" class="img-width" />
                </swiper-item>
        </swiper>
		</view>
		<view class="Category">
			<view class="CategoryList">
				<view class="red_color">全部</view>
				<view class="Guess_like">猜你喜欢</view>
				<view class="right_line"></view>
			</view>
			<view class="CategoryList">
				<view class="three_color">直播</view>
				<view class="gray_color_g">网红推荐</view>
				<view class="right_line"></view>
				<view class="Num_box">88</view>
			</view>
			<view class="CategoryList">
				<view class="three_color">爆款</view>
				<view class="gray_color_g">精品好货</view>
				<view class="right_line"></view>
				<view class="Num_box">8</view>
			</view>
			<view class="CategoryList">
				<view class="three_color">预告</view>
				<view class="gray_color_g">新品发布</view>
			</view>	
		</view>
		<view class="upData">新特卖●每天早10晚8点上新</view>
		<navigator class="productbox" url="../../product/productlist/productlist" hover-class="none">
			 <image src='../../static/image/img01.png' class="bannerImg"></image>
			 <view class="productInfor">
				 <view class="productTitle">1.5折起 富安娜艺术花卉专场</view>
				 <view class="leaveTime">剩2天</view>
			 </view>
		</navigator>
		<navigator class="productbox" url="../../product/productlist/productlist" hover-class="none">
			 <image src='../../static/image/img01.png' class="bannerImg"></image>
			 <view class="productInfor">
				 <view class="productTitle">1.5折起 富安娜艺术花卉专场</view>
				 <view class="leaveTime">剩2天</view>
			 </view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 imageList: ['http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/27012/34/2306/149302/5c1b6e1aE8d2a6ff1/dccc766d10a02c4b.jpg!cr_1125x549_0_72!q70.jpg.dpg','http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/27013/5/3124/148311/5c243d1aE0801b88f/b615f5cdce219744.jpg!cr_1125x549_0_72!q70.jpg.dpg'],
				   indicatorDots: true,
					autoplay: true,
					interval: 5000,
					duration: 1000,
					indicatorcolor:'#fff',
					activecolor:'#333'
			}
		},
		onLoad() {

		},
		methods: {
			changeIndicatorDots: function(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay: function(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange: function(e) {
				this.interval = e.detail.value
			},
			durationChange: function(e) {
				this.duration = e.detail.value
			}
		}
	}
</script>

<style>
	page{
		background: #f4f3f9;
	}
	swiper{
		height: 320rpx;
	}
	.hear_search {
		display: flex;
		background: #fff;
		align-items: center;
		height: 104upx;
		padding-bottom: 10upx;
	}
	.hear_search .brand_img {
		width: 35upx;
		height: 35upx;
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
	.page-section .img-width{width: 100%;height: 320upx;}
	.Category{
		display: flex;
		align-items: center;
		padding:26upx 10upx 5upx 10upx;
		background: #fff;
	}
	.Category .CategoryList{
		width: 22%;
		text-align: center;
		margin-bottom:20upx;
		position: relative;
	}
	.Category .CategoryList .right_line{
		position: absolute;
		top:10upx;
		right:0;
		width: 2upx;
		height: 56upx;
		background:rgba(153, 153, 153, 1) ;
	}
	.Category .CategoryList .Num_box{
		position: absolute;
		top:-10upx;
		right:30upx;
		width: 34upx;
		height: 34upx;
		border-radius: 50%;
		background-color: rgba(255, 87, 51, 1);
		color:#fff;
		font-size:22upx;
		line-height: 34upx;
	}
	.red_color{
		color: rgba(255, 87, 51, 1);
	   font-size: 24upx;
	}
	.three_color{
		color: rgba(56, 56, 56, 1);
		font-size: 24upx;
	}
	.gray_color_g{
		color: rgba(166, 166, 166, 1);
        font-size: 24upx;
		margin-top: 4upx;
	}
	.Category .CategoryList .Guess_like{
        width:130upx;
		height: 38upx;
		color: rgba(255, 255, 255, 1);
		background-color: rgba(255, 87, 51, 1);
		border-radius: 24upx;
		font-size: 24upx;
		line-height: 38upx;
		text-align: center;
		margin:6upx auto 0 auto;
	}
	.upData{
		color:#333;
		font-size:28upx;
		text-align: center;
		padding-bottom:20upx;
		background: #fff;
	}
	.bannerImg{
		width:100%;
		height: 353upx;
		display: block;
	}
	.productbox{
		background: #fff;
		margin-bottom:20upx;
	}
	.productbox .productInfor{
		height:90upx;
		padding:0 5%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.productbox .productInfor .productTitle{
		font-size:30upx;
		color:#333
	}
	.productbox .productInfor .leaveTime{
		font-size:24upx;
		color:#999
	}
</style>
