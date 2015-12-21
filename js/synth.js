console.log('hello');


//Audio Controller
App.Audio = (function(){

  function Controller(opts) {
    this.synth_01 = opts.synth_01;
    this.synth_02 = opts.synth_02;
    this.synth_03 = opts.synth_03;
    this.synth_04 = opts.synth_04;
  }

  //Setup audio welcome_scene Audio Controller
  Controller.prototype.welcome_scene = function() {
    console.log('audio controller welcome scene');

    //Set Synth Volumes
    this.synth_01.volume.value = -100;
    this.synth_02.volume.value = -100;
    this.synth_03.volume.value = -100;
    this.synth_04.volume.value = -35;

    //Set up timbre for synth 03
    this.synth_04.set({
      "detune": 0,
      "oscillator" : { "type": "sine" },
      "filter" : { "type": "lowpass" } ,
      "envelope" : { "attack" : 0.025 }
    });

    var self = this;
    var my_iterator = 1;
    var cursor_vector_mouseover_event_handler = function( event ){
      console.log( '%cmouseover cursor vector' , 'font-size: 3em; color: red;' );
      console.log( event.delegateTarget );
      console.log( $(event.delegateTarget) );



      if (my_iterator%2 === 1) {

        $( event.delegateTarget ).attr( 'class' , 'test_class' );

      } else {

        $( event.delegateTarget ).attr( 'class' , '' );
        
      }


      if ( my_iterator <= 8 ) {

        console.log(my_iterator);
        self.synth_04.triggerAttackRelease([ "D4", "F4", "A4", "E5" ], "8n");
        my_iterator++;

      } else if ( my_iterator <= 16 ) {

        console.log(my_iterator);
        self.synth_04.triggerAttackRelease([ "Bb3","Eb4", "F4", "Bb4" ,"D5"], "8n");
        my_iterator++;

      } else if ( my_iterator <= 24 ) {

        console.log(my_iterator);
        self.synth_04.triggerAttackRelease([ "E4", "A4", "B4", "D5" ], "8n");
        my_iterator++;

      } else if ( my_iterator < 32 ) {

        console.log(my_iterator);
        self.synth_04.triggerAttackRelease(["Eb4" ,"Ab4" , "Bb4" ,"D5"], "8n");
        my_iterator++;

      } else if ( my_iterator === 32 ) {
        console.log(my_iterator);
        self.synth_04.triggerAttackRelease(["Eb4" ,"Ab4" , "Bb4" ,"D5"], "4n");
        my_iterator = 1;
      } else {
        console.log('something is fishy');
      }

    }



    var cursor_vector_mouseout_event_handler = function( event ){
      console.log( '%cmouseout cursor vector' ,'font-size: 3em; color: red;');
      console.log( event.delegateTarget );
      $( event.delegateTarget ).attr( 'class' , '' );
    }

    $( 'svg#vector_cursor' ).off();
    $( 'svg#vector_cursor' ).on( 'mouseover' , 'path' , { 'foo': 'bar' }, cursor_vector_mouseover_event_handler);
    //$( 'svg#vector_cursor' ).on( 'mouseout' , 'path' , { 'foo': 'bar' }, cursor_vector_mouseout_event_handler);
    $( 'svg#vector_cursor' ).on( 'mouseover' , 'fill' , { 'foo': 'bar' }, cursor_vector_mouseover_event_handler);
    //$( 'svg#vector_cursor' ).on( 'mouseout' , 'fill' , { 'foo': 'bar' }, cursor_vector_mouseout_event_handler);
  } //End of welcome scene


  //Setup audio sun_scene Audio Controller
  Controller.prototype.sun_scene = function() {
    console.log('%caudio controller sun scene','font-size: 2em; color: blue;');

    //Set volume for two synths
    this.synth_01.volume.value = -38;
    this.synth_02.volume.value = -100;
    this.synth_03.volume.value = -100;
    this.synth_04.volume.value = -100;

    //Set up timbre for two synths
    this.synth_01.set({
      "detune": 200,
      "oscillator" : { "type": "sine" },
      "filter" : { "type": "lowpass" } ,
      "envelope" : { "attack" : 0.025 }
    });
    this.synth_02.set({
      "detune": -200,
      "oscillator" : { "type": "sine" },
      "filter" : { "type" : "lowpass" },
      "envelope" : { "attack" : 0.15 }
    });

    $('.container').off('mouseover');
    $('.circle').off('mouseout');
    $('.triangle').off('mouseout');

    $('.circle').on('mouseout', {'foo':'bar'} ,function(event) {
      console.log(event);
      $(event.delegateTarget).css('opacity','1.0');
    });

    $('.triangle').on('mouseout', {'foo':'bar'} ,function(event) {
      console.log(event);
      $(event.delegateTarget).css('opacity','1.0');
    });

    var self = this;

    function sun_scene_circle_handler( event ) {
      console.log("%c suns_scene_handler", "font-size: 1em; color: red;");
      $(event.currentTarget).css('opacity','0.3');
      var data_music = $(event.currentTarget).attr('data-music');
      console.log(data_music);
      switch(data_music) {
        case 'one':
          console.log('one');
          self.synth_01.triggerAttackRelease(["A4", "B4", "E5","D5"], "8n");
          break;
        case 'two':
          console.log('two');
          self.synth_01.triggerAttackRelease(["E3", "D4", "A4","B4"], "8n");
          break;
        case 'three':
          console.log('three');
          self.synth_01.triggerAttackRelease(["E3", "B4", "A4","E4"], "8n");
          break;
        case 'four':
          console.log('four');
          self.synth_01.triggerAttackRelease(["A5", "D4", "A4","B4"], "8n");
          break;
        case 'five':
          console.log('five');
          self.synth_01.triggerAttackRelease(["D5", "E5", "A4","B4"], "8n");
          break;
        default:
          console.log('default');
      }
    }

    $('.container').on('mouseover' , '.circle', {'foo':'bar'}, sun_scene_circle_handler );

  } //End of sun scene

  //Setup audio sea_scene Audio Controller
  Controller.prototype.sea_scene = function() {
    console.log('%caudio controller sun scene','font-size: 2em; color: blue;');

    //Set volume for two synths
    this.synth_01.volume.value = -100;
    this.synth_02.volume.value = -100;
    this.synth_03.volume.value = -32.5;
    this.synth_04.volume.value = -100;

    //Set up timbre for synth
    this.synth_03.set({
      "detune": 200,
      "oscillator" : { "type": "sine" },
      "filter" : { "type": "lowpass" } ,
      "envelope" : { "attack" : 0.7 }
    });

    var self = this;
    var play_sea_note = function(some_input) {
      var pitch = '';
      function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      var sampler = getRandomIntInclusive(1, 850);
      if ( Math.floor(some_input) > 0 ) {
        if ( Math.floor(some_input) === 1 && sampler === 6 ) {
          self.synth_03.triggerAttackRelease([ "A4" ], "8n");
          console.log( "whereas" );
        } else if ( Math.floor(some_input) === 2 && sampler === 8 ) {
          self.synth_03.triggerAttackRelease([ "A4" ], "4n");
          console.log( "therefore" );
        }  else if ( Math.floor(some_input) === 3 && sampler === 10 ) {
          self.synth_03.triggerAttackRelease([ "E4" ], "2n");
          console.log( "hencforth" );
        } else if (Math.floor(some_input) === 4 && sampler === 12 ) {
          self.synth_03.triggerAttackRelease([ "A4" ], "2n");
          console.log( "heretofor" );
        } else if (Math.floor(some_input) === 6 && sampler === 14 ) {
          self.synth_03.triggerAttackRelease([ "A4" ], "2n");
          console.log( "inasmuch" );
        } else if (Math.floor(some_input) === 4 && sampler === 16 ) {
          self.synth_03.triggerAttackRelease([ "E4" ], "2n");
          console.log( "word" );
        } else if (Math.floor(some_input) === 2 && sampler === 18 ) {
          self.synth_03.triggerAttackRelease([ "B4" ], "1n");
          console.log( "word" );
        } else if (Math.floor(some_input) === 4 && sampler === 20 ) {
          self.synth_03.triggerAttackRelease([ "G3" ], "1n");
          console.log( "hello world" );
        } else if (Math.floor(some_input) === 6 && sampler === 22 ) {
          self.synth_03.triggerAttackRelease([ "C3" ], "2n");
          console.log( "hello world" );
        }
      }
    }

    var set_up_ocean = function() {

      var win_width = $( window ).width();
      var win_height = $( window ).height();
      console.log( win_width );
      console.log( win_height );
      var width = win_width;
      var height = win_height;

      var nodes = d3.range(60).map(function() { return {radius: Math.random() * 12 - 4}; });
      var root = nodes[0];
      var color = d3.scale.category20c();

      root.radius = 0;
      root.fixed = true;

      var force = d3.layout.force()
          .gravity(0.00175)
          .charge(function(d, i) { return i ? 0 : -300; })
          .nodes(nodes)
          .size([width, height]);

      force.start();

      var svg = d3.select("#app").append("svg")
          .attr("width", width)
          .attr("height", height);

      svg.selectAll("circle")
          .data(nodes.slice(1))
          .enter().append("circle")
          .attr("r", function(d) { return d.radius; })
          .style("fill", function(d, i) { return color(i % 3); });

      force.on("tick", function(e) {
        var q = d3.geom.quadtree(nodes);
        var i = 0
        var n = nodes.length;

        while (++i < n) q.visit(collide(nodes[i]));

          svg.selectAll("circle")
              .attr("cx", function(d) { return d.x; })
              .attr("cy", function(d) { return d.y; });
      });

      svg.on("mousemove", function() {
        var p1 = d3.mouse(this);
        root.px = p1[0];
        root.py = p1[1];
        force.resume();
      });

      function collide(node) {
        //console.log("collide callback");
        play_sea_note(node.radius);
        var r = node.radius + 16,
            nx1 = node.x - r,
            nx2 = node.x + r,
            ny1 = node.y - r,
            ny2 = node.y + r;
        return function(quad, x1, y1, x2, y2) {
          if (quad.point && (quad.point !== node)) {
            var x = node.x - quad.point.x,
                y = node.y - quad.point.y,
                l = Math.sqrt(x * x + y * y),
                r = node.radius + quad.point.radius;
            if (l < r) {
              l = (l - r) / l * .5;
              node.x -= x *= l;
              node.y -= y *= l;
              quad.point.x += x;
              quad.point.y += y;
            }
          }
          return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
        };
      }
      $('svg').css('opacity',0.53);
    }

    set_up_ocean();
    /*
    $( window ).resize(function(){
      $("#app").empty();
      set_up_ocean();
    });
    */

  }//End of Sea Scene

  //Setup audio sky_scene Audio Controller
  Controller.prototype.sky_scene = function() {
    console.log('%caudio controller sky scene','font-size: 2em; color: blue;');

    //Set volume for two synths
    this.synth_01.volume.value = -34;
    this.synth_02.volume.value = -38;
    this.synth_03.volume.value = -100;
    this.synth_04.volume.value = -100;

    //Set up timbre for two synths
    this.synth_01.set({
      "detune": 200,
      "oscillator" : { "type": "sine" },
      "filter" : { "type" : "lowpass" },
      "envelope" : { "attack" : 0.7 }
    });
    this.synth_02.set({
      "detune": -200,
      "oscillator" : { "type": "sine" },
      "filter" : { "type" : "lowpass" },
      "envelope" : { "attack" : 0.15 }
    });

    $('.container').off('mouseover');
    $('.circle').off('mouseout');
    $('.triangle').off('mouseout');

    $('.circle').on('mouseout', {'foo':'bar'} ,function(event) {
      console.log(event);
      $(event.delegateTarget).css('opacity','1.0');
    });

    $('.triangle').on('mouseout', {'foo':'bar'} ,function(event) {
      console.log(event);
      $(event.delegateTarget).css('opacity','1.0');
    });

    var self = this;

    function sky_scene_circle_handler( event ) {
      console.log("%c suns_scene_handler", "font-size: 1em; color: red;");
      $(event.currentTarget).css('opacity','0.3');
      var data_music = $(event.currentTarget).attr('data-music');
      console.log(data_music);
      switch(data_music) {
        case 'one':
          console.log('one');
          self.synth_01.triggerAttackRelease(["E3", "G#3","C4" ,"E4" ], "1n");
          break;
        case 'two':
          console.log('two');
          self.synth_01.triggerAttackRelease([ "F#3", "Bb3","D4" ,"Ab4" ], "1n");
          break;
        case 'three':
          console.log('three');
          self.synth_01.triggerAttackRelease(["E3", "G#3","C4" ,"E4"], "1n");
          break;
        case 'four':
          console.log('four');
          self.synth_01.triggerAttackRelease(["F#3", "Bb3","D4" ,"Bb4"], "2n");
          break;
        case 'five':
          console.log('five');
          self.synth_01.triggerAttackRelease(["E3", "G#3","C4" ,"C5"], "1n");
          break;
        default:
          console.log('default');
      }
    }

    function sky_scene_triangle_handler( event ) {
      console.log("triangle mouseover");
      $(event.currentTarget).css('opacity','0.3');
      var data_music = $(event.currentTarget).attr('data-music');
      console.log(data_music);
      switch(data_music) {
        case 'six':
          console.log('six');
          self.synth_02.triggerAttackRelease(["F#3", "G#3","C4" ,"E4" ], "1n");
          break;
        case 'seven':
          console.log('seven');
          self.synth_02.triggerAttackRelease([ "G#3", "Bb3","D4" ,"G#4"], "1n");
          break;
        case 'eight':
          console.log('eight');
          self.synth_01.triggerAttackRelease(["E3", "F#3","Ab4" ,"Bb4"], "1n");
          break;
        case 'nine':
          console.log('nine');
          self.synth_02.triggerAttackRelease(["G#3", "Bb3","D4" ,"G#4"], "1n");
          break;
        case 'ten':
          console.log('ten');
          self.synth_02.triggerAttackRelease(["F#3", "G#3","Bb4","C5"], "1n");
          break;
        default:
          console.log('default');
      }
    }

    $('.container').on('mouseover' , '.circle', {'foo':'bar'}, sky_scene_circle_handler );
    $('.container').on('mouseover' , '.triangle', {'foo':'bar'}, sky_scene_triangle_handler );

  } //End of sky scene

  //Setup audio night_scene Audio Controller
  Controller.prototype.night_scene = function() {
    console.log('%caudio controller night scene', 'font-size: 2em; color: blue;');

    //Set volume for two synths
    this.synth_01.volume.value = -33;
    this.synth_02.volume.value = -33;
    this.synth_03.volume.value = -100;
    this.synth_04.volume.value = -100;

    //Set up timbre for two synths
    this.synth_01.set({
      "detune": 200,
      "oscillator" : { "type": "sine" },
      "filter" : { "type" : "lowpass" },
      "envelope" : { "attack" : 0.7 }
    });
    this.synth_02.set({
      "detune": -200,
      "oscillator" : { "type": "sine" },
      "filter" : { "type" : "lowpass" },
      "envelope" : { "attack" : 0.15 }
    });

    $('.container').off('mouseover');
    $('.circle').off('mouseout');
    $('.triangle').off('mouseout');

    $('.circle').on('mouseout', {'foo':'bar'} ,function(event) {
      console.log(event);
      $(event.delegateTarget).css('opacity','1.0');
    });

    $('.triangle').on('mouseout', {'foo':'bar'} ,function(event) {
      console.log(event);
      $(event.delegateTarget).css('opacity','1.0');
    });

    var self = this;

    function night_scene_circle_handler( event ) {
      console.log("%c suns_scene_handler", "font-size: 1em; color: red;");
      $(event.currentTarget).css('opacity','0.3');
      var data_music = $(event.currentTarget).attr('data-music');
      console.log(data_music);
      switch(data_music) {
        case 'one':
          console.log('one');
          self.synth_01.triggerAttackRelease(["E3", "Bb3","E4" ,"Bb4" ], "2n");
          break;
        case 'two':
          console.log('two');
          self.synth_01.triggerAttackRelease(["G3", "C#4","G4" ,"C#5" ], "2n");
          break;
        case 'three':
          console.log('three');
          self.synth_01.triggerAttackRelease(["E3", "Bb3","E4" ,"Bb4" ], "2n");
          break;
        case 'four':
          console.log('four');
          self.synth_01.triggerAttackRelease(["G3", "C#4","G4" ,"C#5" ], "2n");
          break;
        case 'five':
          console.log('five');
          self.synth_01.triggerAttackRelease(["E3", "Bb3","E4" ,"Bb4" ], "2n");
          break;
        default:
          console.log('default');
      }
    }

    function night_scene_triangle_handler( event ) {
      console.log("triangle mouseover");
      $(event.currentTarget).css('opacity','0.3');
      var data_music = $(event.currentTarget).attr('data-music');
      console.log(data_music);
      switch(data_music) {
        case 'six':
          console.log('six');
          self.synth_02.triggerAttackRelease(["E3", "Bb3","E4" ,"Bb4" ], "2n");
          break;
        case 'seven':
          console.log('seven');
          self.synth_02.triggerAttackRelease(["G3", "C#4","G4" ,"C#5" ], "2n");
          break;
        case 'eight':
          console.log('eight');
          self.synth_01.triggerAttackRelease(["E3", "Bb3","E4" ,"E4" ], "1n");
          break;
        case 'nine':
          console.log('nine');
          self.synth_02.triggerAttackRelease(["G3", "C#4","G4" ,"Bb5" ], "2n");
          break;
        case 'ten':
          console.log('ten');
          self.synth_02.triggerAttackRelease(["E3", "Bb3","E4" ,"G5" ], "1n");
          break;
        default:
          console.log('default');
      }
    }

    $('.container').on('mouseover' , '.circle', {'foo':'bar'}, night_scene_circle_handler );
    $('.container').on('mouseover' , '.triangle', {'foo':'bar'}, night_scene_triangle_handler );

  }
  //End of Night Scene

  //Setup audio suns_scene Audio Controller
  Controller.prototype.suns_scene = function() {
    console.log('audio controller suns scene');

    //Set volume for two synths
    this.synth_01.volume.value = -28;
    this.synth_02.volume.value = -28;
    this.synth_03.volume.value = -100;
    this.synth_04.volume.value = -100;

    //Set up timbre for two synths
    this.synth_01.set({
      "detune": -200,
      "oscillator" : { "type": "sine" },
      "filter" : { "type" : "lowpass" },
      "envelope" : { "attack" : 0.65 }
    });
    this.synth_02.set({
      "detune": -200,
      "oscillator" : { "type": "sine" },
      "filter" : { "type" : "lowpass" },
      "envelope" : { "attack" : 0.05 }
    });

    $('.container').off('mouseover');
    $('.circle').off('mouseout');
    $('.triangle').off('mouseout');

    $('.circle').on('mouseout', {'foo':'bar'} ,function(event) {
      console.log(event);
      $(event.delegateTarget).css('opacity','1.0');
    });

    $('.triangle').on('mouseout', {'foo':'bar'} ,function(event) {
      console.log(event);
      $(event.delegateTarget).css('opacity','1.0');
    });

    var self = this;
    function suns_scene_circle_handler( event ) {
      console.log("%c suns_scene_handler", "font-size: 1em; color: red;");

      $(event.currentTarget).css('opacity','0.3');
      var data_music = $(event.currentTarget).attr('data-music');
      console.log(data_music);
      switch(data_music) {
        case 'one':
          console.log('one');
          self.synth_01.triggerAttackRelease(["E2", "B2", "E3","B3"], "2n");
          break;
        case 'two':
          console.log('two');
          self.synth_01.triggerAttackRelease([ "E2", "B2", "E3","Bb4"], "1n");
          break;
        case 'three':
          console.log('three');
          self.synth_01.triggerAttackRelease(["E2", "B2", "E3","B3"], "2n");
          break;
        case 'four':
          console.log('four');
          self.synth_01.triggerAttackRelease(["E2", "B2", "E3","B4"], "1n");
          break;
        case 'five':
          console.log('five');
          self.synth_01.triggerAttackRelease(["E2", "B2", "E3","C#5"], "1n");
          break;
        default:
          console.log('default');
      }
    }

    function suns_scene_triangle_handler( event ) {
      console.log("triangle mouseover");
      $(event.currentTarget).css('opacity','0.3');
      var data_music = $(event.currentTarget).attr('data-music');
      console.log(data_music);
      switch(data_music) {
        case 'six':
          console.log('six');
          self.synth_02.triggerAttackRelease(["Eb2", "Bb2", "Eb3","Bb3"], "1n");
          break;
        case 'seven':
          console.log('seven');
          self.synth_02.triggerAttackRelease([ "Eb2", "Bb2", "Eb3","Bb4"], "2n");
          break;
        case 'eight':
          console.log('eight');
          self.synth_02.triggerAttackRelease(["Eb2", "Bb2", "Eb3","Bb3"], "2n");
          break;
        case 'nine':
          console.log('nine');
          self.synth_02.triggerAttackRelease(["Eb2", "Bb2", "Eb3","G4"], "2n");
          break;
        case 'ten':
          console.log('ten');
          self.synth_02.triggerAttackRelease(["Eb2", "Bb2", "Eb4","G4"], "1n");
          break;
        default:
          console.log('default');
      }
    }

    $('.container').on('mouseover' , '.circle', {'foo':'bar'}, suns_scene_circle_handler );
    $('.container').on('mouseover' , '.triangle', {'foo':'bar'}, suns_scene_triangle_handler );
  } //End of suns_scene set up

  return Controller;
})();
