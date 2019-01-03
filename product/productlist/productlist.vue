<template>
	<view>
		<view class="page-section">
	         <image src="../../static/image/banner01.jpg" class="img-width"></image> 
			<view class="share_view">
				<text class="icon_size col_margin">&#xe689;</text>
				<text class="icon_size">&#xe63f;</text>
			</view>
			<view class="tiem_view">
				<text>开始：2018/11/15</text>
				<text>结束：2018/11/15</text>
				<text>下单后48小时发货</text>
			</view>
		</view>
		<view class="product_panel">
			<view class="title">富安娜蚕丝被货号123456789123456789</view>
			<view class="item_box">
				<image src="../../static/image/product.jpg" class="pro_width"></image>
				<view>
					<view class="mai_price">麦芽价：￥179</view>
					<view class="jianyi_price">建议零售价：￥199</view>
					<view class="describe">富安娜福安男负案按</view>
				</view>
			</view>
			<view class="spec_box">
				<view>1.2米床</view>
				<view>1.5米床</view>
				<view>1.8米床</view>
				<view>2.0米床</view>
			</view>
			<view class="shopping">
				<view class="share_view" @click="showBottomPopup">分享</view>
				<view class="shopcart">加入购物车</view>
			</view>
		</view>
		<uni-popup :show="showPopupBottom" :type="popType" v-on:hidePopup="hidePopup" :heightBottom="180">
			<view class="bottom_panel">
				<view class="left_view">
					<view class="price01">转发价格</view>
					<view class="price02">麦芽价：￥179</view>
					<view class="price03">
						<text>加价:</text>
						<input placeholder="请输入加价的金额" />
						<text>元</text>
					</view>
					<view class="price04">加价后零售价：<text>199</text>元</view>
				</view>
				<view class="right_view">
					<radio-group @change="radioChange" class="margin_m">
						<label class="uni-radio" v-for="(item, index) in items" :key="item.value">
							<view>
								<radio :value="item.value" :checked="index === current" />
							</view>
							<view>{{item.name}}</view>
						</label>
					</radio-group>
					<view class="liji">立即转发</view>
				</view>


			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '../../components/uni-popup.vue';
	export default {
		data() {
			return {
				imageList: [
					'http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/27012/34/2306/149302/5c1b6e1aE8d2a6ff1/dccc766d10a02c4b.jpg!cr_1125x549_0_72!q70.jpg.dpg',
					'http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/27013/5/3124/148311/5c243d1aE0801b88f/b615f5cdce219744.jpg!cr_1125x549_0_72!q70.jpg.dpg'
				],
				indicatorDots: true,
				autoplay: true,
				interval: 5000,
				duration: 1000,
				popType: 'bottom',
				msg: 'hhaha',
				showPopupBottom: false,
				items: [{
						value: '1',
						name: '图片转发'
					},
					{
						value: '2',
						name: '小程序转发',
						checked: 'true'
					}
				],
				current: 0
			};
		},
		methods: {
			textChange(evt) {
				this.textValue = evt.detail.value;
			},
			showBottomPopup() {
				this.showPopupBottom = true;
			},
			hidePopup: function() {
				this.showPopupBottom = false;
			},
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			}
		},
		components: {
			uniPopup
		}
	}
</script>

<style>
	.page-section {
		position: relative;
	}

	.page-section .img-width {
		width: 100%;
		height: 330upx;
	}

	.page-section .share_view {
		position: absolute;
		top: 10upx;
		right: 5%;
	}
.page-section  .tiem_view{
	position: absolute;
	bottom:26upx;
	left: 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	color:#fff;
	font-size:24upx;
}
	.page-section .icon_size {
		color: #fff;
		font-size: 40upx;
		font-family: iconfont;
	}

	.page-section .col_margin {
		margin-right: 14upx;
	}

	.product_panel {
		width: 95%;
		margin: 20upx auto;
		background: #fff;
		border-radius: 16upx;
		padding: 0 2%
	}

	.product_panel .title {
		color: rgba(80, 80, 80, 1);
		font-size: 30upx;
		padding: 30upx 0 20upx 0
	}

	.product_panel .item_box {
		display: flex;
	}

	.product_panel .item_box .pro_width {
		width: 400upx;
		height: 480upx;
	}

	.product_panel .item_box .mai_price {
		color: rgba(80, 80, 80, 1);
		font-size: 28upx;
		padding-left: 6upx;
	}

	.product_panel .item_box .jianyi_price {
		width: 232upx;
		height: 44upx;
		color: rgba(255, 255, 255, 1);
		background-color: rgba(255, 87, 51, 1);
		border-radius: 24upx;
		font-size: 24upx;
		line-height: 44upx;
		text-align: center;
		margin: 15upx 0 15upx 6upx;
	}

	.product_panel .item_box .describe {
		color: rgba(128, 128, 128, 1);
		font-size: 24upx;
		padding-left: 6upx;
	}

	.spec_box {
		width: 98%;
		background-color: rgba(229, 229, 229, 1);
		border-radius: 16upx;
		overflow: hidden;
		margin: 18upx auto 0 auto;
		padding: 0 8upx
	}

	.spec_box view {
		display: inline-block;
		padding: 6upx 16upx;
		color: rgba(255, 87, 51, 1);
		background-color: rgba(255, 255, 255, 1);
		border: 2upx solid rgba(255, 87, 51, 1);
		border-radius: 16px;
		font-size: 12px;
		line-height: 150%;
		margin: 16upx 8upx;
	}

	.shopping {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		height: 100upx;
	}

	.shopping .share_view {
		width: 140upx;
		height: 58upx;
		color: rgba(172, 51, 193, 1);
		border: rgba(172, 51, 193, 1) solid 2upx;
		border-radius: 32upx;
		font-size: 24upx;
		line-height: 58upx;
		text-align: center;
		margin-right: 10upx;
	}

	.shopping .shopcart {
		width: 220upx;
		height: 58upx;
		color: rgba(255, 255, 255, 1);
		background-color: rgba(172, 51, 193, 1);
		border-radius: 32upx;
		font-size: 24upx;
		line-height: 58upx;
		text-align: center;
		border: rgba(172, 51, 193, 1) solid 2upx;
	}

	.bottom_panel {
		position: relative;
		height: 400upx;
	}

	.bottom_panel .left_view {
		width: 65%;
		position: absolute;
		top: 20upx;
		left: 0;
		font-size: 28upx;
		color: rgba(80, 80, 80, 1);
		text-align: left;
		padding-left: 3%;
		line-height: 50upx;
	}

	.bottom_panel .right_view {
		width: 35%;
		position: absolute;
		top: 30upx;
		right: 0;
		text-align: left;
		font-size: 28upx;
		color: rgba(80, 80, 80, 1);
	}

	.bottom_panel .left_view .price01 {
		font-size: 30upx;
		color: rgba(56, 56, 56, 1);
		font-weight: bold;
	}

	.bottom_panel .left_view .price02 {
		margin: 10upx 0
	}

	.bottom_panel .left_view .price03 {
		display: flex;
		align-items: center;
		margin-bottom: 10upx;
		;
	}

	.bottom_panel .left_view .price03 input {
		display: inline-block;
		border: 2px solid #f0f0f0;
		border-radius: 10upx;
		color: rgba(51, 51, 51, 1);
		padding: 0 10upx;
		margin: 0 5upx;
	}

	.bottom_panel .uni-radio {
		display: flex;
		align-items: center;
		margin-bottom: 30upx;
	}

	.bottom_panel .right_view .liji {
		width: 220upx;
		height: 60upx;
		color: rgba(255, 255, 255, 1);
		background-color: rgba(255, 87, 51, 1);
		border-radius: 30upx;
		font-size: 30upx;
		line-height: 60upx;
		text-align: center;
		font-weight: bold;
	}

	.bottom_panel .right_view .margin_m {
		margin-bottom: 58upx;
	}
</style>
