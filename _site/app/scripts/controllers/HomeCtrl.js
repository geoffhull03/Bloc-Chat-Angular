(function() {
    function HomeCtrl(Room, Message, $cookies) {
       
        this.rooms = Room.all;
        
        this.roomName = null;
        
        this.currentRoom = null;
        
        this.messages = null;
        
        this.user = $cookies.get('blocChatCurrentUser');
        console.log(this.user);
        
        this.selectRoom = function(room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
        }
        
        this.addRoom = function() {
            Room.add(this.roomName);
        }  
        
        
        this.setCurrentRoom = function(room){
            this.messages = Message.getByRoomId(this.currentRoom.$id);
        }
        
        this.sendMessage = function () {
            this.newMessage.roomId = this.currentRoom.$id;
            this.newMessage.username = this.user;
            this.newMessage.time = firebase.database.ServerValue.TIMESTAMP;
            Message.send(this.newMessage);
            this.newMessage = '';
        };
            
     }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);
})();