angular.module('UserService', []).factory('User', ['$http', function($http) {
    return {
        // call all the users
        get : function() {
            return $http.get('/users');
        },
        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new user
        create: function(userData) {
            return $http.post('/users', userData);
        },
        // call to DELETE a user
        delete: function(id) {
            return $http.delete('/users/' + id);
        }
    }
}]);