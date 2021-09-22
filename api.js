const Url = 'https://hacker-news.firebaseio.com/v0/';

$('.btn').click(function(){
    $.getJSON(Url, function(res){
        console.log(res)
    })
})