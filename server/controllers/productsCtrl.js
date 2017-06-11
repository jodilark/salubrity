//  =================   TEST JSON AND ENPOINT
var products = [
  {
    "id": 1
    , "name":"Fruity Pebbles"
    , "description": "fruity"
    , "price": 2.49
    , "imageurl": "www.dubdub.come"
  }
]

exports.getTestProducts = function (req, res){
  res.status(200).send(products)
}


//  =================   MASSIVE ENDPOINT EXAMPLES
exports.getProducts = function (req, res){
  req.app.get('db').readProducts().then(function (resp) {
    res.send(resp)
  })  
}

exports.getProductByID = function (req, res){
  var pid = req.params.id
  req.app.get('db').readProduct(pid).then(function (resp) {
    res.status(200).send(resp)
  })  
}

exports.createProduct = function (req, res) {
  var theProduct = [
    req.body.name
    , req.body.description
    , req.body.price
    , req.body.imageurl
  ]
  req.app.get('db').createProduct(theProduct).then(function (resp) {
    res.send(`Added it`)
  })
}

exports.updateProduct = function (req, res) {
  let theProduct = [
    req.params.id
    , req.body.description
  ]
  req.app.get('db').updateProduct(theProduct).then(function (resp) {
    res.send(`Updated`)
  })
}

exports.deleteProduct = function (req, res){
  var pid = req.params.id
  req.app.get('db').deleteProduct(pid).then(function (resp) {
    res.status(200).send(`Deleted product with id of ${pid}`)
  })  
}