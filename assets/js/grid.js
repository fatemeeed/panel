$(document).ready(function(){


    function RemoveAllSidebarToggleClass(){

        $('#sidebar-toggle-show').removeClass('d-md-none');
        $('#sidebar-toggle-show').removeClass('d-none');
        $('#sidebar-toggle-show').removeClass('d-inline');
        $('#sidebar-toggle-hide').removeClass('d-none');
        $('#sidebar-toggle-hide').removeClass('d-md-inline');
        
    }

    $('#sidebar-toggle-hide').click(function(){

        $('#sidebar').fadeOut(300);
        $('#main-body').animate({width:"100%"},300);

        setTimeout(function(){

            RemoveAllSidebarToggleClass();
            $('#sidebar-toggle-hide').addClass('d-none');
            $('#sidebar-toggle.show').removeClass('d-none');


        },300);

    });

    $('#sidebar-toggle-show').click(function(){

        $('#sidebar').fadeIn(300);

        RemoveAllSidebarToggleClass();
        $('#sidebar-toggle-hide').removeClass('d-none');
        $('#sidebar-toggle-show').addClass('d-none');
        


    });

    $('#menu-toggle').click(function(){

        $('#body-header').toggle(300);

    });

    $('#header-notification-toggle').click(function(){

        setTimeout(function(){

            $('#header-notification').removeClass('d-none');

        },200);

        $('#header-notification').fadeToggle();
        

    });

    $('#header-profile-toggle').click(function(){

        setTimeout(function(){

            $('#header-profile').removeClass('d-none');

        },200);

        
        $('#header-profile').fadeToggle();

    });


    $('.sidebar-group-link').click(function(){


    
        $('.sidebar-group-link').removeClass('sidebar-group-link-active');
        $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-down');
        $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-left');

        $(this).addClass('sidebar-group-link-active');
        $(this).children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-left');
        $(this).children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-down');
        
        
    });

    

    
    // $('.sidebar-group-link.sidebar-group-link-active').click(function(){

       
    //     alert('hi');

    //     $('.sidebar-group-link').removeClass('sidebar-group-link-active');
    //     $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-down');
    //     $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-left');
        
    // });




   

   



    

})