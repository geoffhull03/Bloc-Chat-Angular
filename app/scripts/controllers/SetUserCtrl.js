(function() {
    function SetUserCtrl($scope, $location, $cookies) {
    
    //The form to enter a room name should be up.     
    this.showChatRooms = false;
    
    this.setUsername = function() {
        $cookies.put('blocChatCurrentUser',//value --> The User Name)
        //the chat rooms will show when submit is clicked and a username is present
        this.showChatRooms = true;
       
        }
    }
}
    angular
        .module('blocChat')
        .controller('SetUserCtrl', ['$scope','$location', '$cookies', SetUserCtrl])
})();