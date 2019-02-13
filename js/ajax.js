var id;
var close;
var load = true;
var popup = false;
function closeForm() {
    jQuery('.close').trigger('click');
    load = false;
    popup = true;
}

jQuery('.form').on('submit',function (event) {
    event.preventDefault();
    id = jQuery(this).children('.btn_form').data('id');
    close = !!(jQuery(this).children('.btn_form').data('close'));
    checkbox = id;

    if (jQuery(checkbox+' '+'.form_chek').prop('checked')){
        if (close){
            closeForm();
        } else {
            load = true;
            popup = false;
        }
        runAjax();
    }
    else {
        agre.render(id);
        jQuery('#agre_ok').addClass('preSubmit');
        jQuery('.preSubmit').on('click', function () {
            jQuery(this).removeClass('preSubmit');
            jQuery(checkbox+' '+'.form_chek').prop('checked', true);
            if(close)closeForm();
            runAjax();
        })
    }
});

function runAjax () {
    if (load) jQuery('.load').css('display', 'flex');
    var form_data = jQuery(id + '_form').serialize();

    jQuery.ajax({
        type: "POST",
        url: "../send.php",
        data: form_data,
        dataType: 'json',
        error: function () {
            popup = false;
            jQuery('#mess').html('Что то пошло не так, попробуйте повторить позже');
            jQuery('#mess_block').css('display', 'flex');
            jQuery('.page').addClass('panel-open').css('overflow', 'hidden')
        },
        success: function (data) {
            jQuery('.load').hide();
            if (data.res){
                jQuery(id+'_form .clear').val('');
                popup = false;
            }else if (close) {
                jQuery('.callBack').trigger('click');
            }
            jQuery('#mess').html(data.mess);
            jQuery('#mess_block').css('display', 'flex');
            jQuery('.page').addClass('panel-open').css('overflow', 'hidden')
        }
    })
}

jQuery('#ok').click(function () {
    jQuery('#mess_block').css('display', 'none');
    if (!popup)jQuery('.page').removeClass('panel-open').css('overflow', 'auto')
});