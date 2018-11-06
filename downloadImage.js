export default function downloadImage(url) {
  wx.getImageInfo({
    src: url,
    success({ path }) {
      wx.saveImageToPhotosAlbum({
        filePath: path,
        success(res) {
          wx.showToast({ title: '已保存到相册！', icon: 'none' });
        },
        fail() {
          wx.showToast({ title: '保存失败，请重试！', icon: 'none' });
        }
      });
    }
  });
}
