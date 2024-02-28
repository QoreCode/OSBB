$('.vote-slider').slick();
$('.nine-flour-slider').slick();
$('.bad-pipe-slider').slick();
$('.out-pipe-fix-slider').slick();
$('.basement-slider').slick();

$('details summary').each(function(){
    $(this).nextAll().wrapAll('<div id="wrap"></div>');
});
$('details').attr('open','').find('#wrap').css('display','none');
$('details summary').click(function(e) {
    e.preventDefault();
    $(this).siblings('div#wrap').slideToggle(function(){
        $(this).parent('details').toggleClass('open');
    });
});