// ===============  DATABASE REQUESTS
// ...............  get a list of all state names from the database
exports.getStatesList = function (req, res) {
    req.app.get('db').getStateNamesList().then(function (response) {
        res.send(response)
    })
}
// ...............  adds a new user to the database
exports.createNewUser = function (req, res) {
    console.log(req.body)
    var userBody = [
        req.body.firstName
        , req.body.lastName
        , req.body.email
        , req.body.state_id
    ]
    req.app.get('db').createUser(userBody).then(function (response) {
        res.status(200).send(`User has been created successfully`)
    })
}
// ...............  gets a list of all users
exports.getAllUsers = function (req, res) {
    req.app.get('db').getAllUsers().then(function (resp) {
        res.send(resp)
    })
}
// deletes all users
exports.deleteAllUsers = function (req, res){
    req.app.get('db').deleteAllTheUsers().then(function (resp) {
        res.send(`all users have been deleted ${resp}`)
    })    
}