import { NgFor, NgIf } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopping-list';
  list: Array<ShoppingItem> = [];

  inputText = "";
  inputError1 = false;
  inputError2 = false;

  constructor(private data: DataService){}

  addItem(item: string) {;
    if(item==null || item=="")
    {
      this.inputError1 = true;
      return;
    }
    this.inputError1 = false;
    let newElement = new ShoppingItem();
    newElement.label = item;
    this.list.push(newElement);
    this.inputText = "";
    /*if(this.inputText==item){
      this.inputError2 = true;
      return;
    }
    this.inputError2 = false;*/
  }

  deleteItem(item: ShoppingItem) {
    let idx = this.list.indexOf(item);
    if (idx >= 0)
    this.list.splice(idx,1);
    console.log('cancellare', item);
  }

  updateItem(item: ShoppingItem) {
    //this.list.push(item);           
    this.inputText = "";
  }
  
  getItem(){
    this.data.AddItem()
  }
}

export class ShoppingItem
{
  label: string = "";
  quantity: number = 0;
  bought: boolean = false;
}

