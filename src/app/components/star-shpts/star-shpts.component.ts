
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { StarShip } from './starship';


import { StarShipService } from './star-ship.service';


@Component({
  selector: 'app-star-shpts',
  templateUrl: './star-shpts.component.html',
  styleUrls: ['./star-shpts.component.scss'],
  providers: [FormBuilder, StarShipService]
})
export class StarShptsComponent implements OnInit {

  starShip: StarShip;

  starShipForm: FormGroup;

  starShipList: StarShip[];

  constructor(
    private formBuilder: FormBuilder,
    private service: StarShipService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.starShip = {
      id: 0,
      vesselName: '',
      vesselClass: '',
      imageUrl: '',
      warpSpeed: ''
    };

    this.service.getStarShipsFromServer().subscribe(response => this.starShipList = response);
  }

  onSubmit(): void {
    if (this.starShipForm.valid) {
      // guardar
      this.service.newStarShip(this.starShipForm.value).subscribe(Response => {
        this.FillForm();
      });
    }
    // if (this.userForm.valid) {
    //  this.confirmationService.confirm({
    //    icon: 'pi pi-exclamation-trianglxe',
    //    accept: () => {
    //      this.userDetailService.Update(this);
    //    },
    //    reject: () => { }
    //  });
    // }
  }

  onReset(): void {
    this.FillForm();
  }

  createForm(): void {
    this.starShipForm = this.formBuilder.group({
      vesselName: ['', [Validators.required, Validators.maxLength(100)]],
      vesselClass: ['', [Validators.required, Validators.maxLength(100)]],
      imageUrl: ['', [Validators.required]],
      warpSpeed: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  private FillForm(): void {
    this.starShipForm.setValue({
      vesselName: this.starShip.vesselName,
      vesselClass: this.starShip.vesselClass,
      imageUrl: this.starShip.imageUrl,
      warpSpeed: this.starShip.warpSpeed,
    });
  }

}
