Oath
====

## Example

Node.js\Express server:

``` javascript
app.get('/', function (req, res) {
    var oath = new Oath(http, req.originalUrl);
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve('PROMISE RESOLVED!');
        }, 6000);
    });
    oath.send(promise);
    console.log('Client connected')
    res.render('index', { title: 'Oath Example' });
});
```
Angular Client:

``` javascript
.controller('example', ['OathService', function (OathService) {
        var promises = OathService.fetchPromises();
        promises[0].then(function(res) {
            console.log('Promise resolved: ');
            console.log(res);
        })
    }]);
```





## Installation


## Usage


  
  


## Tests

  `npm test`

## Contributing

