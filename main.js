SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
  SC.stream('/tracks/285112818',function(sound){
    $('#eng1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#eeng1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/190490447',function(sound){
    $('#eng2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#eeng2').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/284327931',function(sound){
    $('#eng3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#eeng3').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
  SC.stream('/tracks/476606349',function(sound){
      $('#j1').click(function(e) {
             e.preventDefault();
             sound.start();
           });
      $('#ej1').click(function(e) {
             e.preventDefault();
             sound.stop();
          });
    });
    SC.stream('/tracks/85728261',function(sound){
        $('#j2').click(function(e) {
               e.preventDefault();
               sound.start();
             });
        $('#ej2').click(function(e) {
               e.preventDefault();
               sound.stop();
            });
      });
      SC.stream('/tracks/73163098',function(sound){
          $('#j3').click(function(e) {
                 e.preventDefault();
                 sound.start();
               });
          $('#ej3').click(function(e) {
                 e.preventDefault();
                 sound.stop();
              });
        });
        SC.stream('/tracks/225338868',function(sound){
            $('#tamil1').click(function(e) {
                   e.preventDefault();
                   sound.start();
                 });
            $('#etamil1').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                });
          });
          SC.stream('/tracks/174956198',function(sound){
              $('#tamil2').click(function(e) {
                     e.preventDefault();
                     sound.start();
                   });
              $('#etamil2').click(function(e) {
                     e.preventDefault();
                     sound.stop();
                  });
            });
            SC.stream('/tracks/161371888',function(sound){
                $('#tamil3').click(function(e) {
                       e.preventDefault();
                       sound.start();
                     });
                $('#etamil3').click(function(e) {
                       e.preventDefault();
                       sound.stop();
                    });
              });


});
