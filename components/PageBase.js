
export default {
		/* 下拉刷新事件 */
		onPullDownRefresh() {
			this.InitParameters();
			this.LoadData().then(()=>{
				uni.stopPullDownRefresh();
			});  
		},
		/* 滑动到底部事件 */
		onReachBottom(){
			if(this.Parameters.PageIndex*this.Parameters.PageRow>=this.Total)
				return;
			this.Parameters.PageIndex++;
			this.LoadData()
		},
		data(){
			return {
				Url:"",
				Total:0,
				Parameters:{
					PageIndex:1,
					PageRow:10
				},
				List:[]
			}
		},
		methods: {
			/* 加载数据 */
			async LoadData(){
				var str="加载中";
				if(this.Parameters.PageIndex>1)
					str="加载更多";
				uni.showLoading({
					title: str
				});
				var res=await this.GLOBAL.Tool.Get(this.Url,this.Parameters);
				this.Total=res.Total;
				this.List=this.List.concat(res.Content);
				uni.hideLoading();
			},
			InitParameters(){
				this.List=[];
				this.Parameters.PageIndex=1;
			},
		}
}
