$(document).ready(function () {
    /*ALERT-DISMISS*/
    $(".alertDismiss .close").click(function () {
        $(this).closest(".alertDismiss").fadeOut();
    });
    /*ALERT-DISMISS*/

    /*TOAST*/
    $(".showToast1").click(function () {
        var autoHide = $(".toastJs1").data('autohide');
        if (autoHide === true || autoHide === undefined) {
            $(".toastJs1").addClass("show");
            setTimeout(() => {
                $(".toastJs1").removeClass("show");
            }, 3000);
        } else if (autoHide === false) {
            $(".toastJs1").addClass("show");
        }
    });

    $(".showToast2").click(function () {
        var autoHide = $(".toastJs2").data('autohide');
        if (autoHide === true || autoHide === undefined) {
            $(".toastJs2").addClass("show");
            setTimeout(() => {
                $(".toastJs2").removeClass("show");
            }, 3000);
        } else if (autoHide === false) {
            $(".toastJs2").addClass("show");
        }
    });
    $(".toast .close").click(function () {
        $(this).closest(".toast").removeClass("show");
    });
    /*TOAST*/

    /*DROPDOWN*/
    $(".dropdown.click .ddTrigger").click(function () {
        if ($(this).closest(".dropdown").hasClass("right")) {
            var width = $(this).closest(".dropdown").width();
            var val = 'translate3d(' + width + 'px, 0px, 0px)';
            console.log('width: ' + width);
            console.log('val: ' + val);
            $(this).siblings(".ddmenu").css({
                'will-change': 'transform',
                'transform': val + 'translateZ(0)',
                'left': '0px',
                'top': '0px'
            });
            $(this).siblings(".ddmenu").toggle();
        } else {
            $(this).siblings(".ddmenu").toggle();
        }
    });
    /*DROPDOWN*/

    /*COLLAPSE*/
    $(".collapseTrigger").click(function () {
        var targetId = $(this).data("target");
        $(targetId).slideToggle();
    });
    /*COLLAPSE*/

    /*ACCORDION*/
    $(".accordionTrigger").click(function () {
        if ($(this).closest(".accordionGroup").hasClass("collapse")) {
            $(this).siblings(".accordionBody").slideToggle();
            $(this).closest(".accordion").siblings(".accordion").children(".accordionBody").slideUp();
        } else {
            $(this).siblings(".accordionBody").slideToggle();
        }
    });
    /*ACCORDION*/

    /*MODAL*/
    $(".modaltrigger").click(function () {
        var targetId = $(this).data("target");
        if ($(targetId).hasClass("fullScreen")) {
            $('body').addClass('noScroll');
        }
        $(targetId).fadeIn();
        $(targetId).toggleClass("mbOpen");
    });
    $(".modal [data-close='modal']").click(function () {
        if ($(this).closest(".modal").hasClass("fullScreen")) {
            $('body').removeClass('noScroll');
        }
        $(this).closest(".modal").removeClass("mbOpen");
        $(this).closest(".modal").fadeOut();
    });
    /*MODAL*/

    /*COPY-CLIPBOARD*/
    // $(".copyClipboard").click(function () {

    //     // console.log($(this).closest(".snippet").data("clipboard"));
    //     // var Text = $(this).closest(".snippet").data("clipboard");

    //     // var Text = $(this).closest(".snippet").find("code").html();
    //     // $(this).closest(".snippet").find("code").clone().appendTo(".DemoCode");
    //     // console.log(Text);

    //     var aux = document.createElement("input");

    //     // var ipValue = document.getElementById("snippet").innerHTML;
    //     var ipValue = $(this).closest(".snippet").find("code").html();
    //     ipValue.toString();
    //     ipValue = ipValue.replace(/&lt;/g, '<');
    //     ipValue = ipValue.replace(/&gt;/g, '>');
    //     ipValue = ipValue.replace(/ /g, '\xa0');

    //     aux.setAttribute("value", ipValue);

    //     // Append the aux input to the body
    //     document.body.appendChild(aux);

    //     // Highlight the content
    //     aux.select();

    //     // Execute the copy command
    //     document.execCommand("copy");

    //     // Remove the input from the body
    //     document.body.removeChild(aux);
    // });
    var copyCode = '';
    $(".copyClipboard").click(function () {
        copyCode = $(this).closest(".snippet").find("code.hide").get(0);
        console.log('B: ' + copyCode);
        console.log('Block: ' + copyCode.innerHTML);
    });
    new Clipboard('.copyClipboard', {
        text: function () {
            var res = copyCode.innerHTML;
            res = res.replace(/&lt;/g, '<');
            res = res.replace(/&gt;/g, '>');
            // res = res.replace(/<span class="bracket">/g, '');
            // res = res.replace(/<span class="bracket"><</span > <span class="tag"></span> / g, '');
            return res;
        }
    });
    /*COPY-CLIPBOARD*/

});
