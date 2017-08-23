function refresh(page=1,pagenumber=20){
    
    let $tbody = $('#newstable tbody');
    $.ajax({
        url: '/admin/refresh',
        dataType: 'json',
        data: {
            page,
            pagenumber
        },
        type: 'GET',
        success: function(data){
            let str = '';
            data.forEach(function(element) {
                str += `<tr>
                        <td>${element.newsid}</td>
                        <td>${element.newstitle}</td>
                        <td>${element.newsimg}</td>
                        <td>${element.newstype}</td>
                        <td>
                        <button class="btn btn-primary btn-xs">编辑</button>
                        <button class="btn btn-danger btn-xs">删除</button>
                        </td>
                        </tr>`;
            });
            $tbody.html(str);
        }
    });
}

$(function(){

    let $tbody = $('#newstable tbody');
    let page; // 页数
    let pagenumber; //总页数

    // 刷新获取news
    refresh();

    // 点击页数获取news
    $('#page').on('click','.pagenumber',function(){
        let page = $(this).text();
        refresh(page);
    });

    // 提交新闻
    $('#submitbtn').click(function(){
        let newstitle = $('#newstitle').val();
        let newstime = $('#newstime').val();
        let newsimg = $('#newsimg').val();
        let newstype = $('#newstype').val();

        $.ajax({
            url: 'admin/insert',
            data: {
                newstitle,
                newstime,
                newsimg,
                newstype
            },
            type: 'POST',
            success: (data)=>{
                if(data){
                    refresh();
                    console.log('insert success');
                }else{
                    console.log('insert error');
                }
            }
        });
    });

    // “编辑”按钮是动态加载出来的,因此用事件委托
    let newsid;

    $tbody.on('click','.btn-primary',function(){
        $('#updateModel').fadeIn();
        newsid = $(this).parent().parent().find('td')[0].innerHTML;
        let newstitle = $(this).parent().parent().find('td')[1].innerHTML;
        let newsimg = $(this).parent().parent().find('td')[2].innerHTML;
        let newstype = $(this).parent().parent().find('td')[3].innerHTML;
        $('#unewstitle').val(newstitle);
        $('#unewsimg').val(newsimg);
        $('#unewstype').val(newstype);
    });

    $('#confirmupdate').click(function(){
        $('#updateModel').fadeOut();

        let newstitle = $('#unewstitle').val();
        let newstime = $('#unewstime').val();
        let newsimg = $('#unewsimg').val();
        let newstype = $('#unewstype').val();

        $.ajax({
            url: '/admin/update',
            data: {
                newsid,
                newstitle,
                newstime,
                newsimg,
                newstype
            },
            type: 'POST',
            success: (data) => {
                if(data){
                    refresh();
                    console.log('update success');
                }else{
                    console.log('update error');
                }
            }
        });
    });

    $('.close').click(function(){
        $('#updateModel').fadeOut();
        $('#deleteModel').fadeOut();
    });

    $('.btn-default').click(function(){
        $('#deleteModel').fadeOut();
        $('#updateModel').fadeOut();
    });

    // “删除”按钮是动态加载出来的,因此用事件委托
    $tbody.on('click','.btn-danger',function(){
        $('#deleteModel').fadeIn();
        newsid = $(this).parent().parent().find('td')[0].innerHTML;
    });

    $('#confirmdelete').click(function(){
        $('#deleteModel').fadeOut();
        $.ajax({
            url: '/admin/delete',
            data: {
                newsid
            },
            type: 'GET',
            success: (data) => {
                if(data){
                    refresh();
                    console.log('delete success');
                }else{
                    console.log('delete error');
                }
            }
        });
    });

});
