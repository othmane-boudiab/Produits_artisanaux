
// *******login*************
function showPassword() {
    
    var key_attr = $('#key').attr('type');
    
    if(key_attr != 'text') {
        
        $('.checkbox').addClass('show');
        $('#key').attr('type', 'text');
        
    } else {
        
        $('.checkbox').removeClass('show');
        $('#key').attr('type', 'password');
        
    }
    
}

// ********dashboard***************
$(document).ready(()=>{

$('#open-sidebar').click(()=>{
    
    // add class active on #sidebar
    $('#sidebar').addClass('active');
    
    // show sidebar overlay
    $('#sidebar-overlay').removeClass('d-none');
    
    });


    $('#sidebar-overlay').click(function(){
    
    // add class active on #sidebar
    $('#sidebar').removeClass('active');
    
    // show sidebar overlay
    $(this).addClass('d-none');
    
    });

});