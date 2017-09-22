( function( $ ) {

	$( '.NavAccordion' ).on( 'click', '.NavAccordion_Toggle', function() {
		$( this ).closest( '.NavAccordion_Item' ).toggleClass( 'NavAccordion_Item-Open' );
		return false;
	} );

} )( jQuery );