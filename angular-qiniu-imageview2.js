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
      var formatString = format ? '/format/' + format : '';
      var quality = $attrs.qiniuImageview2Quality;
      var qualityString = quality ? '/quality/' + quality : '';

      $attrs.$observe('qiniuImageview2', function (src) {
        if (src.length) {
          var imageSrc = src + '?imageView2/' + mode +
                '/w/' + $attrs.width * pixelRatio +
                '/h/' + $attrs.height * pixelRatio +
                qualityString + formatString;

          $attrs.$set('src', imageSrc);
        }
      });
    }
  };
}]);
