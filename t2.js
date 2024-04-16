function fadeIn(){
    var text = $('.content').text().replace(/^\s+|\s+$/g,'');
    var length = text.length;
    var i = 0;
    var txt;
    var html = [];
    var sp = 4;
    for(;i<length;i+=sp) {
        txt = text.substring(i,i+sp);
        html.push('<span class="c animated">' + txt + '</span>');
    }
    $('.content').removeClass('c').html(html.join(''));

    for(i = 0,length = html.length;i<length;i++) {
        !function(i){
            setTimeout(function(){
                $('.content').find('.animated').eq(i).addClass('fadeIn');
            },i*400);
        }(i);
    }
};

var iframe = document.querySelector('iframe');

// Đợi cho iframe tải hoàn tất
iframe.onload = function() {
    // Lấy trình phát âm nhạc bên trong iframe
    var soundCloudPlayer = iframe.contentWindow;

    // Nghe sự kiện kết thúc của bài hát
    soundCloudPlayer.addEventListener('finish', function() {
        // Sau khi bài hát kết thúc, chạy lại bài hát
        soundCloudPlayer.api_play();
    });
};

document.querySelector(".content").onclick=()=>{
    document.querySelector("#heart").hidden=false
    document.querySelector("body").style.backgroundColor="#F9B9A5"
    document.querySelector("#heart").hidden=false
    fadeIn()
}