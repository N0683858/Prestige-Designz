$(window).on("load", function() {
    "use strict";

    /*=================== Sticky Header ===================*/
    $(window).on("scroll",function(){
        var scroll = $(window).scrollTop();
        var hstick = $("header");
        if (scroll > 20){
            hstick.addClass("sticky");
        } else{
            hstick.removeClass("sticky");
        }

    });


    /*=================== Dropdown Class ===================*/
    $("nav ul ul ul").parent().addClass('has-dropdown');


    /*=================== Megamenu ===================*/
    if($('body').find('.megamenu')){
	    $(".megamenu").parent().addClass('has-megamenu');
	}

    /*================== Octa Sidemenu Dropdown =====================*/
    $(".sidemenu ul ul").parent().addClass("menu-item-has-children");
    $(".sidemenu ul li.menu-item-has-children > a").on("click", function() {
        $(this).parent().toggleClass("active").siblings().removeClass("active");
        $(this).next("ul").slideToggle();
        $(this).parent().siblings().find("ul").slideUp();
        return false;
    });    
    

    /*=================== Shelter Search  ===================*/
    $(".shelter-search a").on("click",function(){
        $(this).parent().addClass('active');
        return false;
    });
    $('html').on("click",function(){
        $(".shelter-search").removeClass('active');
    });
    $(".shelter-search").on("click",function(e){
        e.stopPropagation();
    });



    /*=================== Full Height ===================*/
    function fullHeight(){
        var full_height = $(window).height();
        $(".full-height").css({"height":full_height});
    }
    fullHeight();






    /*=================== Window Resize ===================*/
    $(window).on('resize',function(){
        fullHeight();
    })



    /*=================== Sidemenu Functions ===================*/
    $(".responsive-menu-btn, .fullmenu-btn").on('click',function(){
        $('body').addClass('menu-opened');
        return false;
    });
    $("html, .menu-btn.close").on('click',function(){
        $('body').removeClass('menu-opened');
    });
    $('.responsive-menu-btn, .sideheader, .fullmenu-btn').on('click',function(e){
        e.stopPropagation();
    })



    /*=================== Accordion ===================*/
    $(".toggle").each(function(){
        $(this).find('.content').hide();
        $(this).find('h2:first').addClass('active').next().slideDown(500).parent().addClass("activate");
        $('h2', this).on("click",function(){
            if ($(this).next().is(':hidden')){
                $(this).parent().parent().find("h2").removeClass('active').next().slideUp(500).parent().removeClass("activate");
                $(this).toggleClass('active').next().slideDown(500).parent().toggleClass("activate");
            }
        });
    });   


    /* =============== Ajax Contact Form ===================== */
    $('#contactform').submit(function(){
        var action = $(this).attr('action');
        $("#message").slideUp(750,function() {
        $('#message').hide();
            $('#submit')
            .after('<img src="images/ajax-loader.gif" class="loader" />')
            .attr('disabled','disabled');
        $.post(action, {
            name: $('#name').val(),
            email: $('#email').val(),
            comments: $('#comments').val(),
            verify: $('#verify').val()
        },
            function(data){
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown('slow');
                $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
                $('#submit').removeAttr('disabled');
                if(data.match('success') != null) $('#contactform').slideUp('slow');

            }
        );
        });
        return false;
    });



    /* =============== Donation Popup Money Selection ===================== */
    $(".donation-figures li a").on("click",function(){
        $(this).parent().siblings().find('a').removeClass("active");
        $(this).addClass("active");
        var amount_val = $(this).html();
        $(".donation-amount textarea").val(amount_val);    
        return false;
    });



    /*=================== Sticky Header ===================*/
    if($('header').hasClass('stick')){
        $('header').after('<div class="header-height"></div>');
        $('.header-height').css({'height':$('header').height()})
    }
    if($('header').hasClass('transparent')){
        $('.header-height').css({'height':'0'})
    }


    $(window).on("scroll",function(){
        var scroll = $(window).scrollTop();
        var hstick = $("header");
        if (scroll > 20){
            hstick.addClass("sticky");
        } else{
            hstick.removeClass("sticky");
        }

    });



    /* =============== Popup ===================== */
    $(".open-popup").on("click",function(){
        $(".popup").addClass("active");
        return false;
    });

    $(".close-popup").on("click",function(){
        $(".popup").removeClass("active");
        return false;
    });
});

