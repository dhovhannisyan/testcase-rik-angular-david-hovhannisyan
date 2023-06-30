import { Component, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { LayoutService } from 'src/app/services/layout.service';
import { CustomValidators } from 'src/app/helpers/custom-validators';
import { USER_STATUS, User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  USER_STATUS = USER_STATUS;

  constructor(private fb: FormBuilder, 
              private layoutService: LayoutService,
              private userService: UserService) {}

  ngOnInit() {
    this.initForm();
    // this.form.valueChanges.subscribe(val => {
    //   console.log(val);
    // })
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', CustomValidators.onlyLetters],
      email: ['', [Validators.email]],
      phone: ['', CustomValidators.phone],
      create_at: [null, CustomValidators.date],
      update_at: [null, CustomValidators.date],
      is_admin: [null, CustomValidators.boolean],
      status: [null, CustomValidators.status],
    });
  }

  resetField(fieldName: string) {
    this.form.get(fieldName).patchValue('');
  }

  resetForm() {
    this.form.reset();
    this.userService.filterApply(this.form.value);
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.userService.filterApply(this.form.value);
    }
  }

  onCloseFilter() {    
    this.layoutService.onCloseFilper();
  }

}
