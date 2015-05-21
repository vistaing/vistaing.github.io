$.getJSON('json/1504.json',function(data){
//    for (i=0;i<=6;i=i+1){
//        if (data.bgm1504[0].weekday=1) {
//        $('#broadcast').append('<p>titleCHN:'+data.bgm1504[i].titleCHN+'</p>');}
    for (var i in bgm1504){
        var week=i.week;
        $("div.week"+week).append();}
    }
});