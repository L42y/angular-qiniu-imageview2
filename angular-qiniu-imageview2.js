angular.module('l42y.qiniu.imageview2', [
  'l42y.webp',
  'l42y.qiniu.image'
]).directive('qiniuImageview2', ['$window', 'WebP', function (
  $window,
  WebP
) {
  var identifier = 'imageView2';
  var pixelRatio = $window.getDevicePixelRatio().toFixed();

  return {
    require: '^qiniuImage',
    restrict: 'A',
    link: function ($scope, $element, $attrs, qiniu) {
      var mode = $attrs.qiniuImageview2Mode;
      var format = $attrs.qiniuImageview2Format;
      var quality = $attrs.qiniuImageview2Quality;
      var interlace = $attrs.qiniuImageview2Interlace;

      var qualityStr = quality ? '/quality/' + quality : '';
      var interlaceStr = angular.isDefined(interlace) ? '/interlace/1' : '';

      var fop = identifier + '/' + mode +
            '/w/' + $attrs.width * pixelRatio +
            '/h/' + $attrs.height * pixelRatio +
            qualityStr + interlaceStr;

      var formats = format ? format.split(',') : [];
      if ('webp' === formats[0]) {
        WebP.detect().then(function (isSupported) {
          if (isSupported) {
            pushFormat(formats[0]);
          } else {
            pushFormat(formats[1]);
          }
        });
      } else {
        pushFormat(formats[0]);
      }

      function pushFormat (format) {
        var formatStr = format ? '/format/' + format : '';
        fop += formatStr;
        qiniu.fops[identifier] = fop;

        return fop;
      }
    }
  };
}]);
