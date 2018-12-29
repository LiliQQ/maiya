var Server="http://47.99.180.218:8001/"
/** 配置信息 **/
const Config = {
	Server,
	/** 服务器地址 */
	//ServerUrl: "https://dsn.apizza.net/mock/a52a76ad7d3ba8b443a7a4ff3b754dc1/",
	ServerUrl: Server+"api/",
	//ServerUrl: "http://112.14.56.44:8200/api/",
	/** 文件上传地址 */
	FileServerUrl: Server+"api/AppCommon/PostFiles",
	//FileServerUrl:"http://112.14.56.44:8200/api/AppCommon/PostFiles"
}
/** 字符串转换为时间戳 */
function getDateTimeStamp(dateStr) {
	return Date.parse(dateStr.replace(/-/gi, "/"));
}
// 更改图片大小
String.prototype.ChangeImg = function(w,h) {
	// console.log(this);
	return Tool.ChangeImg(this,w,h);
}
// 更改图片大小
String.prototype.ChangeImgR = function(w,h) {
	var arr=this.split('.');
	if(arr.length<=3)
		return this;
	var extension=arr[arr.length-3];
	if(!["PNG","JPG","JPEG"].includes(extension.toUpperCase()))
		return this;
	var str="";
	for (var i=0;i<arr.length-3;i++) {
		str+=arr[i]+".";
	}
	return str.substring(0,str.length-1);
}
async function Net(url, data, method) {
	var token=uni.getStorageSync('Token');
	
	url=Config.ServerUrl + url;
	/** 开发环境中使用 */
	var res = await uni.request({
		url ,
		header:{
			token
		},
		method,
		data
	})
	if(res[1].statusCode==401){
		Tool.Out();
		console.log(JSON.stringify(res))
		return ;
	}
	//console.log(JSON.stringify(res)) 
	return res[1].data;

}
/** 工具方法 */
const Tool = {
	ChangeImg:(url,w,h)=>{
		
		if(url==undefined||url=="")
			return "http://iph.href.lu/"+w+"x"+h+"?text=芒果";
		var arr=url.split('.');
		if(arr.length==1){
			return url;
		}
		var extension=arr[arr.length-1];
		if(["PNG","JPG","JPEG"].includes(extension.toUpperCase())){
			return `${url}.${w}x${h}.${extension}`;
		}
		return url;
	},
	Out:()=>{
		uni.removeStorageSync('Token');
		uni.reLaunch({
			url:'../Login/Login'
		});
	},
	Toast: (title) => {
		uni.showToast({
			title,
			icon: "none"
		});
	},
	UploadFile:async filePath=>{
	   var res=await uni.uploadFile({
            url: Config.FileServerUrl, 
            filePath,
            name: 'ImgFile',
        });
		if(res.length==1){
			Tool.Toast(res[0].errMsg);
			return ;
		}
		return JSON.parse(res[1].data);
	},
	/** POST请求 */
	Post: async (url, data) => {
			var res = await Net(url, data, "POST");

			return res;

		},
		/** Get请求 */
		Get: async (url, data) => {
				if (data == undefined)
					data = {};
				var res = await Net(url, data, "GET");
				return res;
			},
			/** 将返回的时间戳与当前时间戳进行比较，转换成几秒前、几分钟前、几小时前、几天前的形式 */
			GetDateDiff: (dateStr) => {
				if (dateStr == undefined)
					return "";
				var publishTime = getDateTimeStamp(dateStr) / 1000,
					d_seconds,
					d_minutes,
					d_hours,
					d_days,
					timeNow = parseInt(new Date().getTime() / 1000),
					d,

					date = new Date(publishTime * 1000),
					Y = date.getFullYear(),
					M = date.getMonth() + 1,
					D = date.getDate(),
					H = date.getHours(),
					m = date.getMinutes(),
					s = date.getSeconds();
				//小于10的在前面补0
				if (M < 10) {
					M = '0' + M;
				}
				if (D < 10) {
					D = '0' + D;
				}
				if (H < 10) {
					H = '0' + H;
				}
				if (m < 10) {
					m = '0' + m;
				}
				if (s < 10) {
					s = '0' + s;
				}

				d = timeNow - publishTime;
				d_days = parseInt(d / 86400);
				d_hours = parseInt(d / 3600);
				d_minutes = parseInt(d / 60);
				d_seconds = parseInt(d);

				if (d_days > 0 && d_days < 3) {
					return d_days + '天前';
				} else if (d_days <= 0 && d_hours > 0) {
					return d_hours + '小时前';
				} else if (d_hours <= 0 && d_minutes > 0) {
					return d_minutes + '分钟前';
				} else if (d_seconds < 60) {
					if (d_seconds <= 0) {
						return '刚刚发表';
					} else {
						return d_seconds + '秒前';
					}
				} else if (d_days >= 3 && d_days < 30) {
					return M + '-' + D + ' ' + H + ':' + m;
				} else if (d_days >= 30) {
					return Y + '-' + M + '-' + D + ' ' + H + ':' + m;
				}
			}
}

export default {
	Config,
	Tool
}
