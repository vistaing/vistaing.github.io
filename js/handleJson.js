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

        for(var link in obj.linklist){
        	linkHTML+='<a href="'+obj.linklist[link]+'" target="_blank">';
        	linkHTML+='<span class="badge badge-'+link+'">'+link+'</span>';
        	linkHTML+='</a>';
        	if(init<linkListNum-1){
        		linkHTML+='&nbsp;<span class="divide">|</span> &nbsp;';
        	}else{

        	}
        	init++;
        }
        $target.append('<tr class="uk-table-middle">'
			+'<td class="uk-width-3-6" id="bgm0101"><a href="#0101" data-uk-modal>'+obj.titleCHN+'<br><i class="uk-text-muted">'+obj.titleJPN+'</i></a></td>'
			+'<td class="uk-width-1-6">'+obj.episodeThisWeek+' <span class="uk-text-muted">/ '+obj.episodeTotal+'</span></td>'
			+'<td class="uk-width-2-6">'
				+linkHTML
			+'</td>'
		+'</tr>');
    });
});
