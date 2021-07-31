const amqplib = require('amqplib');


const getData = async () => {

	try{

		for (var i = 0; i < 5; i++) {
		    const q = 'channel1'
		    const conn = await amqplib.connect("amqp://localhost");
		    const ch = conn.createChannel();
		    await (await ch).assertQueue(q);
		    await (await ch).consume(q, async (msg) => {
		        if (msg !== null) {
		            const qm = JSON.parse(msg.content.toString());
		            console.log(qm);
		        }else{
		        	throw new Error("Message null")
		        }
		    }, {
		        noAck: true
		    })
		}

	}catch(error){
		console.log(error)
	}
}



(async () => {
    await getData();
})()
