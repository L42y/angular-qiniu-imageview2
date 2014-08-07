# [angular](http://angularjs.org)-[qiniu](http://www.qiniu.com)-[imageview2](http://developer.qiniu.com/docs/v6/api/reference/fop/image/imageview2.html)

AngularJS component for preprocessing image URL from qiniu.com(七牛云存储)

## Installation

1. `bower install --save L42y/angular-qiniu-imageview2`

2. including script file provided by dependency [angular-qiniu-image](https://github.com/L42y/angular-qiniu-image) into your application

3. including `angular-qiniu-imageview2.js` script file provided by this component into your application

4. adding `l42y.qiniu.image` and `l42y.qiniu.imageview2` as a module dependency to your application

## Usage

```html
<img width="200"
     height="400"
     qiniu-image="{{ object.image.url }}"
     qiniu-imageview2
     qiniu-imageview2-mode="1"
     qiniu-imageview2-format="webp"
     qiniu-imageview2-quality="100">
```

## License

[WTFPL](http://wtfpl.org)
