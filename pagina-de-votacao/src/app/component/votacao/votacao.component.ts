import { RestService } from './../../service/RestService';
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

  constructor(private restService : RestService) {

   }

  ngOnInit(): void {
      this.getParticipantes();
  }

  getParticipantes(){
    this.restService.getData('/participantes/todos').subscribe((participantes) => {
        this.participantes = participantes;
    }) ;
  }

}
