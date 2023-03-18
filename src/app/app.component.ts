import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sendMessageForm! : FormGroup;
  submitted = false;
  title = 'formvalidation';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    //validations
    this.sendMessageForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email : ['',[Validators.required,this.emailValidator]],
      subject : ['',Validators.required],
      message :['',Validators.required]
    })
  }
  
   emailValidator(control: AbstractControl): { [key: string]: boolean } | null 
   {
    const email = control.value;
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,}$/i;
    const valid = pattern.test(email);
  
    if (!valid) {
      return { 'invalidEmail': true };
    }
  
    const domain = email.substring(email.lastIndexOf('@') + 1);
    const validDomains = ['gmail.com', 'yahoo.in', 'outlook.com','hotmail.com']; // Add valid domain extensions here
  
    if (!validDomains.includes(domain)) {
      return { 'invalidDomain': true };
    }
  
    return null;
  }

  onSubmit() {
    this.submitted = true ;

    if (this.sendMessageForm.invalid)
     
    {
      
      return
    }
    alert("Success");

  }

}


