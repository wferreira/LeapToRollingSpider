var Cylon = require('cylon');

Cylon.robot({
  connections: {
    leapmotion: { adaptor: 'leapmotion' },
    drone: { name: 'rolling-spider', adaptor: 'rolling-spider' }
  },

  devices: {
    leapmotion: { driver: 'leapmotion', connection: 'leapmotion' },
    drone: {name: 'rolling-spider', driver: 'rolling-spider'}
  },

  work: function(my) {
    my.drone.wheelOn();

        my.drone.flatTrim();

        my.drone.takeOff();

        after(2500, function () {

            my.drone.land();

            after(1500, function () {

                Cylon.halt();

            });

        });
  }
}).start();