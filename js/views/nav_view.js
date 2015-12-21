App.Views.NavView = Backbone.View.extend({

  tagName: "div",

  className: "backbone_view",

  id: "backbone_nav_view",

  events: {
      'click' : 'app_main_view_swap'
  },

  app_main_view_swap: function( event ){
    event.preventDefault();
    console.log('app_main_view_swap');
    $('*').removeClass('active_link');
    console.log( event );
    
    /*
    $(this).addClass('active_link');
      switch ( $(this).attr('id') ) {
        case 'welcome_nav_link':
          console.log('welcome nav link');
          $('#title').html('<h2 class="animated fadeIn">hello</h2>');
          break;
        case 'sea_nav_link':
          console.log('sea nav link');
          $('#title').html('<h2 class="animated fadeIn">touch the sea</h2>');
          break;
        case 'sun_nav_link':
          console.log('sun nav link');
          $('#title').html('<h2 class="animated fadeIn">touch the sun</h2>');
          break;
        case 'sky_nav_link':
          console.log('sky nav link');
          $('#title').html('<h2 class="animated fadeIn">touch the sky</h2>');
          break;
        case 'night_nav_link':
          console.log('night nav link');
          $('#title').html('<h2 class="animated fadeIn">touch the night</h2>');
          break;
         case 'suns_nav_link':
          console.log('night nav link');
          $('#title').html('<h2 class="animated fadeIn">touch the suns</h2>');
          break;
        default:
          console.log( 'default' );
      }
      */

  } ,

  initialize: function( opts ) {
    this.render();
  },

  render: function() {
    console.log("render nav view");
    var source = $('#nav-template').html();
    var template = Handlebars.compile(source);
    this.$el.append(template);
  }

});
