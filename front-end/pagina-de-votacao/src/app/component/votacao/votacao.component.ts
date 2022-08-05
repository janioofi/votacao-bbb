import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Participante } from 'src/app/model/participante';

@Component({
  selector: 'app-votacao',
  templateUrl: './votacao.component.html',
  styleUrls: ['./votacao.component.css']
})
export class VotacaoComponent implements OnInit {

  participantes: Participante[] | undefined;

  constructor() { }

  ngOnInit(): void {
      this.getParticipantes();
  }

  getParticipantes(){
    this.participantes = [
      {id:"1", nome:"Janio"},
      {id:"2", nome:"Augusto"},
      {id:"3", nome:"Arthur"},
      {id:"4", nome:"Juan"},
      {id:"5", nome:"Robert"}
    ]
  }

}
