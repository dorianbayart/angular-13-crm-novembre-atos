import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss'],
})
export class FormClientComponent implements OnInit {
  @Input() init!: Client;
  @Output() submitCustom = new EventEmitter<Client>();

  states = StateClient;
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      totalCaHt: [this.init.totalCaHt],
      tva: [this.init.tva],
      state: [this.init.state],
      name: [this.init.name, [Validators.required, Validators.minLength(2)]],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }

  onSubmit(): void {
    this.submitCustom.emit(this.form.value);
  }
}
