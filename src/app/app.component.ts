import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ProductApiService } from './services/product-api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular 13 CRUD with Angular Material UI | json-server | Angular Reactive Form';
  
  displayedColumns: string[] = ['id', 'productName', 'productCategory', 'date', 'freshness', 'price', 'comment', 'actions'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;


  constructor(private dialog:MatDialog, private productApi:ProductApiService) {}
  openDialog() {
    this.dialog.open(DialogComponent, {
      maxWidth: '400px',
    }).afterClosed().subscribe(val=>{
      if(val === "save") {
        this.getAllProducts();
      }
    });
  }

  getAllProducts() {
    this.productApi.getProduct().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:()=> {
        console.info("kuch to gadbad huyi hai.");
      }
    })
  }

  editProduct(row:any) {
    this.dialog.open(DialogComponent, {
      maxWidth: '400px',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val === "update") {
        this.getAllProducts();
      }
    })
  }

  deleteProduct(id:number) {
    if(confirm("Are you sure?") == true) {
      this.productApi.deleteProduct(id).subscribe({
        next:(res)=>{
          console.info("Deleted Successfully");
          this.getAllProducts();
        },
        error:()=>{
          console.warn("Somthing Went Wrong!");
        }
      })
    } else {
      console.warn("Somthing Went Wrong!");
    }
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.getAllProducts();
  }
}
