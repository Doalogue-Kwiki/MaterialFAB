/**
 * JavaScript for MaterialFAB Menu
 */
( function ( mw, $ ) {
    
    function loadMaterialFAB() {
        var template = mw.template.get( "ext.MaterialFAB", "menu.html" );
        console.log( template.render() );
    }
    
    $( function () {
        loadMaterialFAB();
    });

}( mediaWiki, jQuery ) );
