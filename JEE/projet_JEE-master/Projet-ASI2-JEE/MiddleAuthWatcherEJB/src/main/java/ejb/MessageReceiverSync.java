package ejb;

import javax.annotation.Resource;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.jms.JMSConsumer;
import javax.jms.JMSContext;
import javax.jms.Message;
import javax.jms.ObjectMessage;
import javax.jms.Queue;

import fr.cpe.model.UserModel;


@Stateless
@LocalBean
public class MessageReceiverSync implements MessageReceiverSyncLocal {
	
	@Inject
	JMSContext context;
	
	@Resource(mappedName = "java:/jms/queue/watcherqueue")
	Queue queue;
	
	public UserModel receiveMessage() {

		JMSConsumer consumer = context.createConsumer(queue);
		Message message = consumer.receive(1000);

		UserModel user = null;
		if (message instanceof ObjectMessage) {
			user = (UserModel)message;
		}
		return user;
	}
}