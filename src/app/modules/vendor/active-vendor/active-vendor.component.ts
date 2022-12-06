import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})

export class ActiveVendorComponent implements OnInit {

 // adduserform : FormGroup;
  adduserform = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    bio: new FormControl('',Validators.required),
    domain: new FormControl('',Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
 
  }

  val!:any;
  onsubmit(){
    console.log("Submitted");
    console.log(this.adduserform.value);
    this.val=this.adduserform.value;
  }

}
