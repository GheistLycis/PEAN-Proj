import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Moment } from "src/app/Moment"

@Component({
  selector: 'app-form-moments',
  templateUrl: './form-moments.component.html',
  styleUrls: ['./form-moments.component.scss']
})
export class FormMomentsComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Moment>()
  @Input() btnText: string = "Enviar"

  momentForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('')
    })
  }

  get title() {
    return this.momentForm.get('title')!
  }
  
  get description() {
    return this.momentForm.get('description')!
  }

  onFileDrop(event: any) {
    const file: File = event.target.files[0]
    
    this.momentForm.patchValue({ image: file })
  }

  submit() {
    if(this.momentForm.invalid) return
    
    this.onSubmit.emit(this.momentForm.value)
  }
}
