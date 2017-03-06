console.log('Working...');

$(window).on('resize', function() {
    $windowWidth = $(this).width();
 
    console.log($windowWidth);
});