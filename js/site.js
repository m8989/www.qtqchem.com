//// 触摸滑动功能
//$("#carouselExampleControls").on("touchstart", function (event) {
//    var xClick = event.originalEvent.touches[0].pageX;
//    $(this).one("touchmove", function (event) {
//        var xMove = event.originalEvent.touches[0].pageX;
//        if (Math.floor(xClick - xMove) > 5) {
//            $(this).carousel('next');
//        } else if (Math.floor(xClick - xMove) < -5) {
//            $(this).carousel('prev');
//        }
//    });
//    $("#carouselExampleControls").on("touchend", function () {
//        $(this).off("touchmove");
//    });
//});

//// 左右翻动功能
//$('.carousel').carousel({
//    interval: 5000, // 自动轮播间隔时间
//    pause: false // 鼠标悬停时停止自动轮播
//});