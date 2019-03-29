$( document ).ready(function () {
    $( "li.even" ).css("list-style-type", "square");
    $( "li" ).eq( 6 ).height("30px");
    $( "li.odd" ).css("text-transform","uppercase");
    $( "#murcia" ).insertAfter( $( "#madrid" ));
});