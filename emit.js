var amqp = require('amqplib/callback_api');


  amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function(error1, channel) {
      if (error1) {
        throw error1;
      }
      var exchange = 'logs';
          console.log(Date.now())
      for (var i = 0; i < 10000; i++) {

      var msg = i.toString();

      channel.assertExchange(exchange, 'fanout', {
        durable: false
      });
      channel.publish(exchange, '', Buffer.from(msg));
      // console.log(" [x] Sent %s", msg);

    }
          console.log(Date.now())

    });

    // setTimeout(function() {
    //   connection.close();
    //   process.exit(0);
    // }, 500);
  });
