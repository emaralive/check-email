/**
 * Show/Hide individual add-on license key input.
 */
( function( $ ) {
	$( document ).ready( function() {
            $(".checkemail-hide").hide();
            var widget = $("#check-email-enable-widget").parent().parent();
            if (!$('#check-email-enable-logs').is(":checked")) {
                widget.hide();
            }
            
            $("#checkemail_autoheaders,#checkemail_customheaders").bind("change", function(){
                    if ($("#checkemail_autoheaders").is(":checked")){
                            $("#customheaders").hide();
                            $("#autoheaders").show();
                    }
                    if ($("#checkemail_customheaders").is(":checked")){
                            $("#autoheaders").hide();
                            $("#customheaders").show();
                    }
            });
            $('#check-email-enable-logs').on('click', function() {
                if ($(this).is(":checked")) {
                    widget.show();
                } else {
                    widget.hide();
                }
            });
	} );
} )(jQuery);
