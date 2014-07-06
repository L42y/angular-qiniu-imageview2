angular.module('l42y.qiniu.imageview2', [
]).directive('qiniuImageview2', ['$window', function (
  $window
) {
  var pixelRatio = $window.getDevicePixelRatio().toFixed();

  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
      var mode = $attrs.qiniuImageview2Mode;
      var format = $attrs.qiniuImageview2Format;
      var quality = $attrs.qiniuImageview2Quality;
      var interlace = $attrs.qiniuImageview2Interlace;

      var formatStr = format ? '/format/' + format : '';
      var qualityStr = quality ? '/quality/' + quality : '';
      var interlaceStr = interlace ? '/interlace/1' : '';

      $attrs.$observe('qiniuImageview2', function (src) {
        if (src.length) {
          var imageSrc = src + '?imageView2/' + mode +
                '/w/' + $attrs.width * pixelRatio +
                '/h/' + $attrs.height * pixelRatio +
                qualityStr + formatStr + interlaceStr;

          $attrs.$set('src', imageSrc);
        }
      });
    }
  };
}]);
