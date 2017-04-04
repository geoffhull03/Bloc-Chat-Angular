(function() {
    function SetUserCtrl($cookies, $location) {
    
    this.userName = null;
    
    this.setUserName = function(userName) {
        $cookies.put('blocChatCurrentUser', this.userName)
        $location.path('/');
       
        }
    }
    
    angular
        .module('blocChat')
        .controller('SetUserCtrl', ['$cookies', '$location', SetUserCtrl])
})();