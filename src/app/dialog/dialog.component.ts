import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductApiService } from '../services/product-api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  freshnessList = ["Brand New","Second Hand","Refurbished"];
  productForm !: FormGroup;
  actionBtn:string = "Save";

  constructor(private formBuilder:FormBuilder, private productApi:ProductApiService, @Inject(MAT_DIALOG_DATA) public editData:any, private dialogRef:MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productCategory: ['', Validators.required],
      date: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['', Validators.required],
    });

    if(this.editData) {
      this.actionBtn = "Update";
      this.productForm.controls['productName'].setValue(this.editData.productName);
      this.productForm.controls['productCategory'].setValue(this.editData.productCategory);
      this.productForm.controls['date'].setValue(this.editData.date);
      this.productForm.controls['freshness'].setValue(this.editData.freshness);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['comment'].setValue(this.editData.comment);
    }
  }
  

  submitProductForm() {
    if(!this.editData) {
      if(this.productForm.valid) {
        this.productApi.postProduct(this.productForm.value).subscribe({
          next:(res)=>{
            // alert("Product Added Successfuly");
            this.productForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("Sumthing Went Wrong!");
          }
        })
      }
    } else {
      this.updateProduct();
    }
  }

  updateProduct() {
    this.productApi.putProduct(this.productForm.value, this.editData.id).subscribe({
      next:()=> {
        console.warn("Success");
        this.productForm.reset();
        this.dialogRef.close("update");
      },
      error:()=> {
        console.warn("Wrong");
      }
    })
  }

}
