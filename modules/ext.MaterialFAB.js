/**
 * JavaScript for MaterialFAB Menu
 */
( function ( mw, $ ) {
    
    function loadMaterialFAB() {

		/*var menu = mw.template.get( "ext.MaterialFAB", "menu.mustache" );
		var randeredMenu = menu.render();
		*/
		//$("#page-content").append(randeredMenu);
		
		/*
		//kwiki material ux 
		$(".pagenameinput").on("focus", function( e ) {
			$('.createpage').addClass('active');
		});

		$(".pagenameinput").on("blur", function( e ) {
			$('.createpage').removeClass('active');
		});

		//reveal on hover
		$(".kwiki-mat").mouseover(function() {
			$("#kwiki-ux").addClass("activate");
		});
		$(".kwiki-mat").mouseleave(function() {
			$("#kwiki-ux").removeClass("activate");
		});

		// prevent null form
		$('.createpage').prop('disabled',true); 
		
		$('.pagenameinput').keyup(function(){ 
			$('.createpage').prop('disabled', this.value == "" ? true : false); 
		})
		
		if ( self !== top ) {
			$('body').addClass('iframed');
		}*/
    }
    
    $( function () {		
        loadMaterialFAB();		
    });

}( mediaWiki, jQuery ) );
