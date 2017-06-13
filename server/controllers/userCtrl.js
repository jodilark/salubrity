// ===============  DATABASE REQUESTS
// ...............  get a list of all state names from the database
exports.getStatesList = function (req, res){
    req.app.get('db').getStateNamesList().then(function (response){
    res.send(response)
    })
}