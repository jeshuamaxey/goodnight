'use strict';

// angular.module('goodnightApp')
//   .directive('scanner', function () {
//     return {
//       templateUrl: 'app/directives/scanner/scanner.html',
//       restrict: 'EA',
//       link: function (scope, element, attrs) {
//       }
//     };
//   });


angular.module('goodnightApp')
  .directive('qrScanner', ['$timeout', function($timeout) {
    return {
      restrict: 'E',
      scope: {
        ngSuccess: '&ngSuccess',
        ngError: '&ngError',
        ngVideoError: '&ngVideoError'
      },
      link: function(scope, element, attrs) {

        console.log('this happened')
      
        window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
      
        var height = attrs.height || 300;
        var width = attrs.width || 250;
        var localMediaStream;
      
        var video = document.createElement('video');
        video.setAttribute('width', width);
        video.setAttribute('height', height);
        var canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'qr-canvas');
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        canvas.setAttribute('style', 'display:none;'); 
      
        angular.element(element).append(video);
        angular.element(element).append(canvas);
        var context = canvas.getContext('2d'); 
      
        var scan = function() {
          if (localMediaStream) {
            context.drawImage(video, 0, 0, 307,250);
            try {
              qrcode.decode();
            } catch(e) {
              scope.ngError({error: e});
            }
          }
          $timeout(scan, 500);
        }

        var successCallback = function(stream) {
          video.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
          localMediaStream = stream;

          video.play();
          $timeout(scan, 1000);
        }

        // Call the getUserMedia method with our callback functions
        if (navigator.getUserMedia) {
          navigator.getUserMedia({video: true}, successCallback, function(e) {
            scope.ngVideoError({error: e});
          });
        } else {
          scope.ngVideoError({error: 'Native web camera streaming (getUserMedia) not supported in this browser.'});
        }

        qrcode.callback = function(data) {
          scope.ngSuccess({data: data});
        };
      }
    }
  }]);