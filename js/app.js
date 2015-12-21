$( document ).ready( function(){

  app.current_scene = {}
  app.current_scene.group = '';

  app.synth_01 = new Tone.PolySynth(6, Tone.MonoSynth).toMaster();
  app.synth_02 = new Tone.PolySynth(6, Tone.MonoSynth).toMaster();
  app.synth_03 = new Tone.PolySynth(6, Tone.MonoSynth).toMaster();
  app.synth_04 = new Tone.PolySynth(6, Tone.MonoSynth).toMaster();

  app.audio = new App.Audio({
    hello: 'world',
    synth_01: app.synth_01,
    synth_02: app.synth_02,
    synth_03: app.synth_03,
    synth_04: app.synth_04    
  });

});
