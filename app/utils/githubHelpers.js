var axios = require('axios');

var id = "3c68a84192d553c4232f";
var sec = "37a0c28d230df1ee3c130dc06b5941a7afdd9264";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + param);
}

var helpers = {
    getPlayersInfo: function (players) {
        return axios.all(players.map(function (username) {
            return getUserInfo(username)
        }))
        .then(function (info) {
            return info.map(function(user){
                return user.data;
            })
        })
        .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
    }
}

module.exports = helpers;