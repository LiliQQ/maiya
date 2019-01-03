<template>
	<view>
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
		        <swiper-item v-for="item in imageList" :key="item">
		            <image :src="item" class="img-width" />
		        </swiper-item>
		</swiper>
		<view class="inforBox">
			<view class="infor_title">雅鹿·自由自在 四件套纯棉家纺 床上用品床单被套枕套全棉斜纹套件 1.5米/1.8米床</view>
			<view class="infor_price"><text>￥80</text><text class="gray_price">￥90</text></view>
			<view class="infor_freight"><text>运费：免运费</text><text class="sale">月销：15笔</text></view>
		</view>
		<view class="product_infor">产品详情</view>
		<view class="product_img">
			<image src="../../static/image/banner01.jpg"></image>
			<image src="../../static/image/banner01.jpg"></image>
		</view>
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
				 duration: 1000
			};
		}
	}
</script>

<style>
	page{
		background: #fff;
	}
 .img-width{width: 100%;height: 480upx;}
 swiper{
	 height: 480upx;
 }
 .inforBox{
	color: rgba(80, 80, 80, 1);
	background-color: rgba(229, 229, 229, 1);
	font-size: 28upx;
	padding:20upx 3%;
 }
 .inforBox .infor_title{
	 color: rgba(0, 0, 0, 1);
	font-size: 30upx;
 }
 .inforBox .infor_price{
	 color: rgba(212, 48, 48, 1);
	font-size: 50upx;
	margin: 6upx 0;
 }
  .inforBox .infor_price .gray_price{
	 color: rgba(166, 166, 166, 1);
	font-size: 30upx;
	margin-left: 18upx;
 }
  .inforBox .infor_freight{
	 color: rgba(166, 166, 166, 1);
	font-size: 28upx;
 }
 .inforBox .infor_freight .sale{
	 margin-left: 100upx;
	 color: rgba(166, 166, 166, 1);
	font-size: 28upx;
 }
 .product_infor{
	 color: rgba(227, 60, 100, 1);
	font-size: 30upx;
	text-align: center;
	line-height: 60upx;
 }
 .product_img image{
	 width: 100%;
	 display: block;
 }
</style>
