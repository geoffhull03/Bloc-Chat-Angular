(function() {
    function BlocChatCookies($cookies) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
           console.log("There is no username");
           this.username = false;
        } else {
            console.log("hello");
            this.username = true;
        }
    }
    
    angular 
        .module('blocChat')
        .run(['$cookies', BlocChatCookies]);
})();