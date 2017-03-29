(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all;
        //console.log(Room);
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();