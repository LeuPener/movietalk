$(function () {

  /**nav */
    $( 'ul.nav_site li' ).hover(function(){
        $( '.boult' , this ).css('border-color','#ff5a00 transparent transparent transparent');
        $( 'ul.nav_sild',this ).stop().slideDown();
        $( 'ul.nav_sild' , this ).slideDown();
        $( 'span',this ).stop().css('height','5px');
        $( 'span',this ).animate({
            left:'0',
            width:'100%',
            right:'0'
        },200);

    },function(){
        $( '.boult' , this).css('border-color','transparent transparent #ff5a00 transparent');
        $( 'ul.nav_sild' , this ).stop().slideUp();
        $( 'span',this ).stop().animate({
            left:'50%',
            width:'0'
        },200);
    });

// tab切换
    var $li = $('#tab li');
    var $ul = $('#content ul');

    $li.mouseover(function(){
        var $this = $(this);
        var $t = $this.index();
        $li.removeClass();
        $this.addClass('current');
        $ul.css('display','none');
        $ul.eq($t).css('display','block');
    })




});










