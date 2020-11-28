var $btn = document.getElementById('show-menu');
var $nav = document.getElementById('nav');
var $body = document.getElementById('body');

$btn.addEventListener('click', function() {
    $nav.classList.toggle('active');
    if ( ($nav).classList.contains("active") ){
        $body.classList.add('body-overflow');
    
    } else {
        $body.classList.remove('body-overflow');
    };
   
});



