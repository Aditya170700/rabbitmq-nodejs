import {connect} from "amqplib";

const connection = await connect("amqp://guest:guest@localhost:5672/");
const channel = await connection.createChannel();

// TODO Producer
for (let i = 0; i < 1000000; i++) {
    channel.publish("notification", "sms", Buffer.from(`sms ${i}`), {
        headers: {
            'key': 'value'
        }
    });
}

await channel.close();
await connection.close();
