import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { customFormGroup } from '../models/interfaces';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss'
})
export class FormGroupComponent implements OnInit {
  @Input() customFormGroup!: customFormGroup;
  formGroup!: FormGroup;
  @Output() createdLocation = new EventEmitter<FormGroup>();

  formValues!:any

  ngOnInit(){
    this.formGroup = new FormGroup({
      name: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      availableUnits: new FormControl(''),
      wifi: new FormControl(''),
      laundry: new FormControl('')
    })
  }


  create($event: Event){
    this.formValues = this.formGroup.value
    this.createdLocation.emit(this.formValues);
  }
}
