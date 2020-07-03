import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../../services/chat.service';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;
  obicnePoruke: Message[];

  constructor(private chat: ChatService) {}

  ngOnInit() {
    
    this.chat.getConversation().pipe( scan( (acc, val) => acc.concat(val))).subscribe( data => this.obicnePoruke = data);
  }

  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = "";
  }

}