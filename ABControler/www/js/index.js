(function ($) {

  document.addEventListener("deviceready", onDeviceReady, false);
  //
  //
  function onDeviceReady() {
    document.addEventListener("pause", onPause, false);
		document.addEventListener("resume", onResume, false);

    cordova.plugins.BluetoothStatus.initPlugin();
    // cordova.plugins.BluetoothStatus.promptForBT();
    cordova.plugins.BluetoothStatus.enableBT();

    var tmpl = $.templates(' <li><a class="connectBT" href="{{:id}}">{{:name}} | {{:id}}</a></li> ');
    window.addEventListener('BluetoothStatus.enabled', function() {
      bluetoothSerial.list(function(devices) {
        var html= tmpl.render(devices);
        $('#ulBtList').html(html);
      });
    });
    $(document).on('touchstart','.connectBT',function(){
        event.preventDefault();
        var bladr = $(this).attr('href');

        bluetoothSerial.connect(bladr, function () {
          $('#btControl').load("temp.html");
          $('#btList').hide();
			}, function () {
				alert("Pripojenie zlyhalo");
				window.location.reload(true);
				var bladr="";

			});
    })


    $(document).on('touchstart', '#forward', function() {
  		bluetoothSerial.write("f", function(){}, function(){});
	  });

    $(document).on('touchstart', '#left', function() {
  		bluetoothSerial.write("l", function(){}, function(){});
	  });

    $(document).on('touchstart', '#right', function() {
  		bluetoothSerial.write("r", function(){}, function(){});
	  });

    $(document).on('touchstart', '#acw', function() {
  		bluetoothSerial.write("e", function(){}, function(){});
	  });

    $(document).on('touchstart', '#backward', function() {
      bluetoothSerial.write("b", function(){}, function(){});
    });

    $(document).on('touchstart', '#cw', function() {
  		bluetoothSerial.write("q", function(){}, function(){});
	  });

    $(document).on('touchend', '.btn', function() {
  		bluetoothSerial.write("s", function(){}, function(){});
	  });

    $(document).on('touchend', '#disconnect', function() {
      bluetoothSerial.disconnect(function () {
        $('#btControl').html("");
        $('#btList').hide();
        alert('Úspešne ste sa odpojili');
        window.location.reload(true);

      }, function () {
        //code
      });

	  });
  }

  function onPause(){
  // code
  };

  function onResume(){
    //code
  };

})(jQuery);
