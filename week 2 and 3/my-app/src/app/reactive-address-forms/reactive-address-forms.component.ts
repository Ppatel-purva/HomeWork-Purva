import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-address-forms',
  templateUrl: './reactive-address-forms.component.html',
  styleUrls: ['./reactive-address-forms.component.css']
})
export class ReactiveAddressFormsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  myForm: any;
  ngOnInit(): void {
    this.myForm=this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      age:['',[Validators.required,Validators.pattern(/^[0-9]+$/)]],
      MobileNumber:['',Validators.required],
      adress:['',Validators.required],
      city:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.maxLength(8)]],
      from:['',Validators.required],
      to:['',Validators.required]
    });
  }
  
onSubmit(form: FormGroup) {
  console.log('firstname :',form.value.firstname);
  console.log('lastname : ',form.value.lastname);
  console.log('age : ',form.value.age);
  console.log('MobileNumber : ',form.value.MobileNumber);
  console.log('adress : ',form.value.adress);
  console.log('city : ',form.value.city);
  console.log('email : ',form.value.email);
  console.log('password :  ',form.value.password);
  console.log('from : ',form.value.from);
  console.log('to : ',form.value.to);
  let from = new Date(form.value.from).getTime();
  let to = new Date(form.value.to).getTime();
  let days = (to - from) / (1000 * 3600 * 24);
  let price = 1000;
  console.log("Total amount for booking is " + (price) * days + " for " + days + " days.");
  }
  
}
