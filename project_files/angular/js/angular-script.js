var server_location = "http://localhost:3000/";

// Application module
var crudApp = angular.module('crudApp', ['angular.gravatar',
                                         'angular.md5',
                                         'infinite-scroll']);


crudApp.controller("DemoController", function($scope, Postit) {
    $scope.postit = new Postit();
});


// Postit constructor function to encapsulate HTTP and pagination logic
crudApp.factory('Postit', function($http) {
    var Postit = function() {
        this.items = [];
        this.busy = false;
        this.after = '';
        this.page=1;
    };

    Postit.prototype.nextPage = function() {
        if (this.busy)return;
        this.busy = true;

        $http.get(server_location+'blobs?page='+this.page).success(function (data) {


            var items = $.map(data, function(value, index) {
                return [value];
            });

            for (var i = 0; i < items.length; i++) {
                this.items.push(items[i]);
            }
            this.busy = false;
            this.page += 1;
        }.bind(this));
    };

    return Postit;

});

crudApp.controller("DbController", ['$scope', '$http', '$window' , function ($scope, $http, $window, Postit) {

    function invokeData(){
        //TODO: Not best practice to reload all the page from the UX point of view but we
        // earn some benefit from release memory , free-mem :)
        $window.location.reload();
    }

    $scope.insertInfo = function (info) {

        $http.post(server_location+'blobs/',
            {
                "msg": info.msg,
                "email": info.email
            }).success(function (data) {
                    info.msg = "Insert your message here";
                    info.email = "youremail@com";
                    invokeData();
            });
    }

    $scope.currentUser = {};

}]);





