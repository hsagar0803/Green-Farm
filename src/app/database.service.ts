import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private afd :AngularFireDatabase , private auth:AngularFireAuth) { }

  saveDataWithTitle(title:string ){
   const key= this.afd.database.ref('Todo').push().key ||"";
   this.afd.database.ref('Todo').child(key).update({title: title , todoId: key,});
  }

  fetchTodo(){
    return new Promise ((resolve, reject) =>{
      let todoArray:any = []; 
       this.afd.database.ref('Todo').get().then(snapshot => {
          if(snapshot.exists()){
            snapshot.forEach(doc => {
              todoArray.push(doc.val());
              //console.log(doc.val());
            });
            resolve(todoArray);
          }
       }).catch(error => {
         reject(error);
       });
      
    })
  }
editTodoWith(todoId: string , newValue:string) {
this.afd.database.ref('Todo').child(todoId).update({title: newValue})
}
  
deleteTodoWith(todoId:string){
 this.afd.database.ref('Todo').child(todoId).remove();
}

saveWithRagister(u_name:string , u_phone:string ,email:string,passward:string,c_password:string){
  const key= this.afd.database.ref('UserDetail').push().key;
   this.afd.database.ref('UserDetail').child('key').update({u_name:u_name, u_phone:u_phone, email:email, passward:passward, c_password:c_password});
    this.auth.createUserWithEmailAndPassword(email, passward).then(result =>{
      alert('Registration Complete');
    }).catch(error=>{
      alert("error");
    });
  }

saveProductDataWithInfo(inputTitle:string,inputPrice:string,inputQty:string,inputDes:string,Category:string){
  const key= this.afd.database.ref('AddProductData').push().key ||"";
  this.afd.database.ref('AddProductData').child(key).update({inputTitle:inputTitle,inputPrice:inputPrice,inputQty:inputQty,inputDes:inputDes,Category:Category}); 
}

signWithFirebase( email:string, password:string) {
   this.auth.signInWithEmailAndPassword(email,password).then(result=>{
    alert('user is signed in.');
   }).catch(error =>{
     alert(error);
   });
   
}
saveToCartWithPData(c_title:string,c_price:string,c_quantity:string,c_total:string){
  const key= this.afd.database.ref('CartData').push().key ||"";
  this.afd.database.ref('CartData').child(key).update({c_title:c_title,c_price:c_price,c_quantity:c_quantity,c_total:c_total });
}

fetchWithProductData(){

  return new Promise ((resolve, reject) =>{
    let todoArray:any = []; 
     this.afd.database.ref('AddProductData').get().then(snapshot => {
        if(snapshot.exists()){
          snapshot.forEach(doc => {
            todoArray.push(doc.val());
            //console.log(doc.val());
          });
          resolve(todoArray);
        }
     }).catch(error => {
       reject(error);
     });
    
  })

}




}


 