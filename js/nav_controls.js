$( document ).ready( function(){

    /* Nav Event Handler*/
    $('nav a').on('click', {'foo':'bar'} , function( event ) {
      console.log( $( this ).hasClass('active_link') );
      if ( $( this ).hasClass('active_link')  ) {
        console.log( 'link is active' );
      } else {
        $('*').removeClass('active_link');
        $(this).addClass('active_link');
        switch ( $(this).attr('id') ) {

          case 'welcome_nav_link':
            console.log('welcome nav link');
            $('body').removeClass();
            $('#app').empty();
            $('#app').removeClass();
            $('#app').addClass('welcome_scene');
            $('#title').html('<h2 class="animated fadeIn">mouse event audio</h2>');
            app.current_scene.group = 'welcome';
            console.log( app.current_scene.group );
            var welcome_scene_template_source = $( '#welcome-scene-template' ).html();
            var welcome_scene_template = Handlebars.compile( welcome_scene_template_source );
            $('#app').append( welcome_scene_template );
            app.audio.welcome_scene();
            break;

          case 'sea_nav_link':
            console.log('sea nav link');
            $('body').removeClass();
            $('#app').empty();
            $('#app').removeClass();
            $('#app').addClass('sea_scene');
            $('#title').html('<h2 class="animated fadeIn">touch the sea</h2>');
            app.current_scene.group = 'sea';
            console.log( app.current_scene.group );
            app.audio.sea_scene();
            break;

          case 'sun_nav_link':
            console.log('sun nav link');
            $('body').removeClass();
            $('#title').html('<h2 class="animated fadeIn">touch the sun</h2>');
            $('body').attr('class','sun-bg');
            console.log( app.current_scene.group );
            console.log( app.current_scene.group === 'thick_lines' );
            //Check if the current scene is in the same group as this selected one
            if ( app.current_scene.group === 'thick_lines' ) {
              $('#app').removeClass();
              $('#app').addClass('sun_scene');
              app.audio.sun_scene();
            } else {
              app.current_scene.group = 'thick_lines';
              $('#app').empty();
              $('#app').removeClass();
              $('#app').addClass('sun_scene');
              var circles_and_triangles_source = $( '#circles-and-triangles-template' ).html();
              var circles_and_triangles_template = Handlebars.compile( circles_and_triangles_source );
              $('#app').append( circles_and_triangles_template );
              app.audio.sun_scene();
            }
            break;

          case 'sky_nav_link':
            console.log('sky nav link');
            $('body').removeClass();
            $('#title').html('<h2 class="animated fadeIn">touch the sky</h2>');
            $('body').attr('class','sky-bg');
            console.log( app.current_scene.group );
            console.log( app.current_scene.group === 'thick_lines' );
            //Check if the current scene is in the same group as this selected one
            if ( app.current_scene.group === 'thick_lines' ) {
              console.log("%cHello","font-size: 4em; color: green;");
              $('#app').removeClass();
              $('#app').addClass('sky_scene');
              app.audio.sky_scene();
            } else {
              console.log("%cGoodbye","font-size: 4em; color: yellow;");
              app.current_scene.group = 'thick_lines';
              $('#app').empty();
              $('#app').removeClass();
              $('#app').addClass('sky_scene');
              var circles_and_triangles_source = $( '#circles-and-triangles-template' ).html();
              var circles_and_triangles_template = Handlebars.compile( circles_and_triangles_source );
              $('#app').append( circles_and_triangles_template );
              app.audio.sky_scene();
            }
            break;

          case 'night_nav_link':
            console.log( '%cnight nav link','font-size: 3em; color: #555;' );
            // console.log( this );
            // console.log( app );
            // console.log( app.current_scene );
            // console.log( app.current_scene.group );
            // console.log( 'thick_lines' );
            // console.log( app.current_scene.group === 'thick_lines' );
            $('body').removeClass();
            $('#title').html('<h2 class="animated fadeIn">touch the night</h2>');
            $('body').attr('class','night-bg');
            //Check if the current scene is in the same group as this selected one
            if ( app.current_scene.group === 'thick_lines' ) {
              $('#app').removeClass();
              $('#app').addClass('night_scene');
              app.audio.night_scene();
            } else {
              app.current_scene.group = 'thick_lines';
              $('#app').empty();
              $('#app').removeClass();
              $('#app').addClass('night_scene');
              var circles_and_triangles_source = $( '#circles-and-triangles-template' ).html();
              var circles_and_triangles_template = Handlebars.compile( circles_and_triangles_source );
              $('#app').append( circles_and_triangles_template );
              app.audio.night_scene();
            }
            break;

          case 'suns_nav_link':
          console.log('%csuns nav link','font-size: 3em; color: #555;');
          // console.log( this );
          // console.log( app );
          // console.log( app.current_scene );
          // console.log( app.current_scene.group );
          // console.log( 'thick_lines' );
          // console.log( app.current_scene.group === 'thick_lines' );
            $('body').removeClass();
            $('#title').html('<h2 class="animated fadeIn">touch the sun</h2>');
            $('body').attr('class','suns-bg');
            console.log( app.current_scene.group );
            console.log( app.current_scene.group === 'thick_lines' );
            //Check if the current scene is in the same group as this selected one
            if ( app.current_scene.group === 'thick_lines' ) {
              $('#app').removeClass();
              $('#app').addClass('suns_scene');
              app.audio.suns_scene();
            } else {
              app.current_scene.group = 'thick_lines';
              $('#app').empty();
              $('#app').removeClass();
              $('#app').addClass('suns_scene');
              var circles_and_triangles_source = $( '#circles-and-triangles-template' ).html();
              var circles_and_triangles_template = Handlebars.compile( circles_and_triangles_source );
              $('#app').append( circles_and_triangles_template );
              app.audio.suns_scene();
            }
            break;
          default:
            console.log( 'default' );
        }
      }
    });
    /* End of Nav Event Handler*/


    $( '#welcome_nav_link' ).click();


    var  remove_modal_helper = function() {
      $('.modal').removeClass('reveal_modal');
      $('.black_thing').removeClass('reveal_black_thing');
      $( '.modal_link' ).removeClass('big_question_mark');
    };

    $('.modal_link').click(function(){
      $('.modal').addClass('reveal_modal');
      $('.black_thing').addClass('reveal_black_thing');
      $( this ).addClass('big_question_mark');
    });

    $('.modal_link').focusout(function(){

    });

    $('.black_thing').on( 'click', remove_modal_helper );
    $('#modal_cancel_button').on('click', remove_modal_helper );
    








});
