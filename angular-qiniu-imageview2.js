angular.module('l42y.qiniu.imageview2', [
  'l42y.qiniu.image'
]).directive('qiniuImageview2', ['$window', function (
  $window
) {
  var pixelRatio = $window.getDevicePixelRatio().toFixed();

  return {
    require: '^qiniuImage',
    restrict: 'A',
    link: function ($scope, $element, $attrs, qiniu) {
      var mode = $attrs.qiniuImageview2Mode;
      var format = $attrs.qiniuImageview2Format;
      var quality = $attrs.qiniuImageview2Quality;
      var interlace = $attrs.qiniuImageview2Interlace;

      var formatStr = format ? '/format/' + format : '';
      var qualityStr = quality ? '/quality/' + quality : '';
      var interlaceStr = interlace ? '/interlace/1' : '';

      var fop = 'imageView2/' + mode +
            '/w/' + $attrs.width * pixelRatio +
            '/h/' + $attrs.height * pixelRatio +
            qualityStr + formatStr + interlaceStr;
      qiniu.fops.push(fop);
    }
  };
}]);
