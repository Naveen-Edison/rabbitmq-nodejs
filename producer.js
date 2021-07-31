const amqplib = require('amqplib');

const sendData = async () => {
	try{

		for (var i = 0; i < 1000000; i++) {
			let data = {
				message:"Hi ->"+i
			}
		    const q = 'channel1'
		    const conn = await amqplib.connect("amqp://localhost");
		    const ch = conn.createChannel();
		    await (await ch).assertQueue(q);
		    const qm = JSON.stringify(data);
		    (await ch).sendToQueue(q, Buffer.from(qm))
		}
	}catch(error){
		console.log(error)
	}
	

}



(async () => {
    await sendData();
})()

