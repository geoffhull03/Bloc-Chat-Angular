(function() {
    function HomeCtrl(Room, Message) {
       
        this.rooms = Room.all;
        
        this.roomName = null;
        
        this.currentRoom = null;
        
        this.selectRoom = function(room) {
            this.currentRoom = room;
        }
        
        this.addRoom = function() {
            Room.add(this.roomName);  
        }  
        
        this.setCurrentRoom = function(room){
            this.messages = Message.getByRoomId(this.currentRoom.$id);
        }
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();