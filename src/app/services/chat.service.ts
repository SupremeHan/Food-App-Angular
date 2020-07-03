import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { BehaviorSubject } from 'rxjs';

export class Message {
  constructor(public content: string, public sentBy: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly token = environment.dialogFlow.angularBot;
  readonly client = new ApiAiClient({accessToken: this.token});

  conversation =  new BehaviorSubject<Message[]>([]);

  constructor() { }

  update(msg: Message) {
    this.conversation.next([msg]);
  }

  getConversation() {
    return this.conversation.asObservable();
  }

 // Sends and receives messages via DialogFlow
 converse(msg: string) {
  const userMessage = new Message(msg, "user");
  this.update(userMessage);
  

  return this.client.textRequest(msg).then(res => {
    console.log(res);
    const speech = res.result.fulfillment.speech;
    const botMessage = new Message(speech, "bot");
    this.update(botMessage);
    
  });
 }
}
