import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'testserver';
  username = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  showSecret = false;
  log = [];

  constructor() {
    setTimeout(() => { this.allowNewServer = true;}, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){

    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;

  }

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1)
    this.log.push(new Date());
  }
  onUpdateServerName(event:Event){

    this.serverName = (<HTMLInputElement>event.target).value;

  }

  onReset(){
    this.username = '';
  }

}
