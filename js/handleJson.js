$(function() {
    $weekday_tbody_list = [
        $("#monbgm tbody"),
        $("#tuebgm tbody"),
        $("#wedbgm tbody"),
        $("#thubgm tbody"),
        $("#fribgm tbody"),
        $("#satbgm tbody"),
        $("#sunbgm tbody"),
        $("#for-other"),
    ];
    function getLinkLength(linkList){
    	var num=0;
    	for(var i in linkList){
    		num++;
    	}
    	return num;
    }
    $.each(datasource.bgm1504, function(index, obj) {
    	var $target;
        if (obj.weekday) {
        	$target=$weekday_tbody_list[obj.weekday];
        }
        else{
        	$target=$weekday_tbody_list[7];
        }
        var linkListNum=getLinkLength(obj.linklist),
            init=0,
            linkHTML='';

        function linkName(link) {
            switch (link) {
                case 'iqiyi':
                    return '爱奇艺';
                case 'bili':
                    return 'Bilibili';
                case 'letv':
                    return '乐视';
                case 'matong':
                    return '芒果TV';
                case 'pptv':
                    return 'PPTV';
                case 'tx':
                    return '腾讯';
                case 'tudou':
                    return '土豆';
                case 'youku':
                    return '优酷';
            }
        }
        
        for(var link in obj.linklist){
        	linkHTML+='<a href="'+obj.linklist[link]+'" target="_blank">';
        	linkHTML+='<span class="badge badge-'+link+'">'+linkName(link)+'</span>';
        	linkHTML+='</a>';
        	if(init<linkListNum-1){
        		linkHTML+='&nbsp;<span class="divide">|</span> &nbsp;';
        	}else{

        	}
        	init++;
        }
        $target.append('<tr class="uk-table-middle">'
			+'<td class="uk-width-3-6" id="'+obj.bgmID+'"><a href="'+obj.bgmInfoID+'" data-uk-modal>'+obj.titleCHN+'<br><i class="uk-text-muted">'+obj.titleJPN+'</i></a></td>'
			+'<td class="uk-width-1-6">'+obj.episodeThisWeek+' <span class="uk-text-muted">/ '+obj.episodeTotal+'</span></td>'
			+'<td class="uk-width-2-6">'
				+linkHTML
			+'</td>'
		+'</tr>');
    });
});
