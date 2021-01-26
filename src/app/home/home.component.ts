import { AfterViewChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  registerForm: FormGroup;
  submited = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
    });
  }

  get firstNameIsValid() {
    return this.registerForm.get('firstName')?.hasError('required');
  }

  get lastNameIsValid() {
    return this.registerForm.get('lastName')?.hasError('required');
  }

  ngOnInit(): void {
    console.log('clase home inició');
  }

  submit(){
    (!this.registerForm.invalid) && (this.submited = true);
  };
}
