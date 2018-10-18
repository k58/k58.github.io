var defH=1000,	// contentsの横幅
    zoom;	// contentsの拡大率

// ########## ▼ ロード時に1度だけ実行（？） ▼ ##########

$(function(){
  zoom   =$(window).height()/defH; // browzerの横幅÷contentsの横幅
  $(".base").css("width",$(window).width()/zoom); // 縦幅



///// タブの切替 | よく使うjQueryベースのスクリプト
///// http://www.finefinefine.jp/web/kiji422/
/////
  $("#tab li").click(
// ********** ▼ クリック時に実行 ▼ **********
    function(){
      var num = $("#tab li").index(this);
      $(".content_wrap").addClass('disnon');
      $(".content_wrap").eq(num).removeClass('disnon');
      $("#tab li").removeClass('select');
      $(this).addClass('select')
    }
// ********** ▲ クリック時に実行 ▲ **********
  );
});

// ########## ▲ ロード時に1度だけ実行（？） ▲ ##########





///// 続：Androidブラウザでviewportのwidth指定 - to-R
///// http://blog.webcreativepark.net/2012/01/06-110622.html
/////
$(window).bind("resize",
// ********** ▼ Windowのリサイズ時に実行 ▼ **********
function(){
  zoom   =$(window).height()/defH; // browzerの横幅÷contentsの横幅
  $(".base").css("width",$(window).width()/zoom); // 縦幅
  $("html").css("zoom",zoom); // Window幅にあわせて拡大縮小
}
// ********** ▲ Windowのリサイズ時に実行 ▲ **********
).trigger("resize");

