import { CommonModule } from '@angular/common';
import { Injectable, afterNextRender } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  host: string='https://localhost:7031/'
  constructor() { }
  
  async GetItem() {
      const dataRes = await fetch(this.host+'ShoppingList/get-list');
      const data = await dataRes.json() ?? [];
      console.log(data);
  }

  async AddItem() {
    try{
        const dataRes = await fetch(this.host+'ShoppingList/add-item', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            summary: "My post title",
            qta: 0
            })
        });
        const data = await dataRes.json();
        console.log(data);
        } catch(error) {
            console.log(error)
        }  
  }

  async DeleteItem() {
      const dataRes = await fetch(this.host+'ShoppingList/delete-item?Id=8446d8d4-10a1-43a5-a8d9-55de6e509e52');
      const data = await dataRes.json() ?? [];
      console.log(data);
  }

  async UpdateItem() {
    try{
        const dataRes = await fetch(this.host+'ShoppingList/update-item?Id=8446d8d4-10a1-43a5-a8d9-55de6e509e52', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            summary: "My post title",
            qta: 0
            })
        });
        const data = await dataRes.json();
        console.log(data);
        } catch(error) {
            console.log(error)
        }  
  }
}

