// Autoform hooks
AutoForm.hooks({
  insertResForm: { // Insert form
    before: {
      insert: function(doc) {
        if(Meteor.userId()){
          doc.userId = Meteor.userId();
        }
        return doc;
      }
    },
    onSuccess: function (operation, result, template) {
      FlashMessages.send("Successfully created");
      Router.go('/');
    }
  }
});

Template.New.events({
  // Speed test button
  "click .speed-test"() {
    $('#speed').attr('placeholder','Please wait...');
    SomApi.startTest();
  }
});

// Load speedof.me
Meteor.startup( () => {
  $.getScript('//speedof.me/api/api.js', function(){
    SomApi.account = "";   // API Key here
    SomApi.domainName = "";    // Domain here
    SomApi.config.uploadTestEnabled = false;
    SomApi.config.latencyTestEnabled = false;
    SomApi.config.sustainTime = 4;
    SomApi.onTestCompleted = onTestCompleted;
    SomApi.onProgress = onProgress;

    function onTestCompleted(testResult) {
      $('#speed').val(testResult.download);
    }

    function onProgress(progress) {
      $('div.progress').html(
        "<div class='determinate' style='width:" + progress.percentDone + "%'></div>"
      )
    }
  });
});
