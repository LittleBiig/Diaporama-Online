package fr.cpe.rest.impl;

import javax.ejb.EJB;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import ejb.MessageReceiverSyncLocal;
import ejb.MessageSenderLocal;
import fr.cpe.model.UserModel;
import fr.cpe.rest.IWatcherAuth;




public class WatcherAuth implements IWatcherAuth {
	
	@EJB
	MessageReceiverSyncLocal receiver;
	
	@EJB
	MessageSenderLocal sender;
	
	@Override
	public String doPost(String jsonString) {
		
		JSONObject json = null;
		JSONParser parser = new JSONParser();
		Boolean bool = true;
		
		
		try {
			json = (JSONObject) parser.parse(jsonString);
			System.out.println("json object: "+json);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		UserModel user = new UserModel();
		
		user.setLogin((String)json.get("login"));
		user.setPassword((String)json.get("pwd"));
		
		System.out.println("login:"+user.getLogin()+", pwd:"+user.getPassword());
		
		sender.sendMessage(user);
		
		UserModel userAnswer = (UserModel)receiver.receiveMessage();
		
		
		if(userAnswer.getRole()==null){
			bool = false;
		}
		
		String returnValue = "{login : " + user.getLogin()+ ",validAuth :" + bool + ",role :" + userAnswer.getRole() + "}";
		return returnValue;
	}
	
}