let plus='./assets/images/icon-plus.svg';
let minus='./assets/images/icon-minus.svg';

$('.question').on('click',function(){
    let questionId=$(this).attr('id');
    let icon=$(this).find('img');
    let iconStatus=icon.attr('src');
    if(iconStatus===plus){
        icon.attr('src',minus);
        $('.answer'+questionId).show();
        $(this).css('margin-bottom','15px');
    }else{
        icon.attr('src',plus);
        $('.answer'+questionId).hide();
        $(this).css('margin-bottom','50px');
    }
});

