// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}

// // 复制提醒
// document.addEventListener("copy", function () {
//   debounce(function () {
//       new Vue({
//           data: function () {
//               this.$notify({
//                   title: "哎嘿！复制成功🍬",
//                   message: "若要转载最好保留原文链接哦，给你一个大大的赞！",
//                   position: 'top-left',
//                   offset: 50,
//                   showClose: true,
//                   type: "success",
//                   duration: 5000
//               });
//           }
//       })
//   }, 300);
// })


//   new Vue({
//     data: function () {
//         this.$notify({
//             title: "你已被发现😜",
//             message: "小伙子，扒源记住要遵循GPL协议！",
//             position: 'top-left',
//             offset: 50,
//             showClose: true,
//             type: "warning",
//             duration: 5000
//         });
//     }
// })



// 发现有时会和当前页面重复，加一个判断
function randomPost() {
    fetch('/baidusitemap.xml').then(res => res.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml")).then(data => {
        let ls = data.querySelectorAll('url loc');
        while (true) {
            let url = ls[Math.floor(Math.random() * ls.length)].innerHTML;
            if (location.href == url) continue;
            location.href = url;
            return;
        }
    })
}
// 阅读文章时看了一遍写的代码，发现加个数组和一个遍历完全没必要，改成下面这个即可。
// function randomPost() {
//     fetch('/baidusitemap.xml').then(res => res.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml")).then(data => {
//         let ls = data.querySelectorAll('url loc');
//         location.href = ls[Math.floor(Math.random() * ls.length)].innerHTML
//     })
// }
// 旧代码
// function randomPost() {
    // fetch('/baidusitemap.xml').then(res => res.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml")).then(data => {
    //     let ls = data.querySelectorAll('url loc');
    //     let list = [];
    //     ls.forEach(i => list.push(i.innerHTML))
    //     location.href = list[Math.floor(Math.random() * ls.length)]
    // })
// }



