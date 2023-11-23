// 复制提醒
document.addEventListener("copy", function () {
    debounce(function () {
      new Vue({
        data: function () {
          this.$notify({
            title: "复制成功",
            message: "😝加油😝",
            position: 'top-left',
            offset: 50,
            showClose: true,
            type: "success",
            duration: 5000
          });
        }
      })
    }, 300);
  })
  
  new Vue({
    data: function () {
        this.$notify({
            title: "你已被发现😜",
            message: "小伙子，扒源记住要遵循GPL协议！",
            position: 'top-left',
            offset: 50,
            showClose: true,
            type: "warning",
            duration: 5000
        });
    }
})
