var endpoint = '//quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?';
var author;
var text;
$(document).ready(function(){
  generateQuote();
});
$("#gen_quote").on("click",function(){
 generateQuote();
});

function generateQuote(){
  $.getJSON(endpoint,function(response){
  $(".quote-box p").html(response[0].content);
  $(".author").html(" - " + response[0].title);
  text = response[0].content;
  author = response[0].title;
});
}
 $("#re_tweet").on("click",function(){
   console.log(author);
    $("a").attr("href","https://twitter.com/intent/tweet?text="+ $(text).text().substring(0,130) + " - " + author);
  });