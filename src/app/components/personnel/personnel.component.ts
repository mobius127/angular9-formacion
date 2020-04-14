import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { MessageService } from 'primeng/api';

import { PersonnelService } from './personnel.service';

import { Persona } from './persona';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss'],
  providers: [PersonnelService]
})
export class PersonnelComponent implements OnInit {

  persona: Persona;

  personaList: Persona[];

  constructor(
    private service: PersonnelService,
    private msgService: MessageService,
    private translate: TranslateService) { }

  ngOnInit(): void {
    this.initializePersona();
    this.getPersonas();
  }

  saveNewPersona(): void {
    this.service.newPersona(this.persona).subscribe(Response => {

      this.msgService.add({severity: 'success', summary: 'Service Message', detail: 'Via MessageService'});
      this.getPersonas();
      this.initializePersona();
    });
  }
  getPersonas() {
    this.service.getPersonasFromServer().subscribe(response => this.personaList = response);
  }

  clear(): void {
    this.initializePersona();
  }

  private initializePersona() {
    this.persona = {
      id: 0,
      fullName: '',
      grade: '',
      imageUrl: ''
    };
  }

}
