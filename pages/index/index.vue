<template>
	<view class="content">
		<view style="height: 40rpx;"></view>
		<view class="body">
			<view class="text-area" style="margin-top: 30rpx;">
				<text class="title" style="color: #333333;">选择图片</text>
			</view>	
			<view class="text-area" >
			    <text class="title" style="font-size: 30rpx;">请上传png、jpg或jpeg文件</text>
			</view>
			<image v-if="flag" class="logo" style="margin-bottom: 30rpx;" src="../../static/upload.png" @tap="uploadImg"></image>
			<image v-if="!flag" class="logo" style="margin-bottom: 30rpx;" src="../../static/upload.png" ></image>
		</view>
		<view v-if="imgArr.length>0" class="content" style="margin-top: 30rpx;">
			<view class="content">
				<template v-for="(item,index) in imgArr" class="pair">
					<!-- <image :src="imgArr[imgArr.length-index-1]"></image>
					<view class="text-area">
						<text class="title">原图</text>
					</view>	 -->
					<image :src="imgSrc[imgArr.length-index-1]" @click="dianji(imgSrc[imgArr.length-index-1])"></image>
					<view class="text-area">
						<text class="title">检测结果</text>
					</view>	
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgArr:[],
				imgSrc:[],
				flag:true,
			}
		},
		onLoad() {
		},
		methods: {
			uploadImg(){
				const that = this
				uni.chooseImage({
					count: 1, // 最多可以选择的图片张数，默认9
					sizeType: ['original', 'compressed'], //original 原图，compressed 压缩图，默认二者都有
					sourceType: ['album', 'camera'], //album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项
					success: function(res) {
						uni.showLoading({
							title:'处理中...'
						})
						that.flag=false;
						that.imgArr.push(res.tempFilePaths[0]);
						that.imgSrc.push(res.tempFilePaths[0]);
						that.uploadImgFile(res.tempFilePaths[0],that)
					}
				});
			},
			uploadImgFile(filePath,that){
				var _this = this
				uni.uploadFile({
					url: 'http://82.157.174.105:8002/upload_image',
					filePath: filePath,
					name: 'file',
					formData: {
						file: filePath
					},
					success: response => {
						let res = JSON.parse(response.data);
						if (res.code == 200) {
							console.log('请求成功_______________', res);
							console.log(res.image_url);
							that.downloadImg(res.image_url,that);
						}
					},
					fail: err => {
						uni.hideLoading()
						console.log('请求失败_______________', err);
						that.flag=true;
					}
				});
			},
			downloadImg(id,that) {
				uni.downloadFile({
					url: id,
					success: res => {
						if (res.statusCode === 200) {
							console.log('下载成功');
							that.imgSrc.pop();
							that.imgSrc.push(res.tempFilePath);
							uni.hideLoading()
							that.flag=true;
						}
					},
					fail: err => {
						uni.hideLoading()
						console.log('请求失败_______________', err);
						that.flag=true;
					}
				});
			},
			dianji(url){
				wx.previewImage({
									urls: [url], //需要预览的图片http链接列表，多张的时候，url直接写在后面就行了
									current: '', // 当前显示图片的http链接，默认是第一个
									success: function(res) {},
									fail: function(res) {},
									complete: function(res) {},
								})
			}
		}
	}
</script>


<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.body{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 90%;
		background-color: #f6f6f6;
	}
	
	.pair{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 90%;
		background-color: #b3b3b3;
	}

	.logo {
		height: 150rpx;
		width: 150rpx;
		margin-top: 10rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 5rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
