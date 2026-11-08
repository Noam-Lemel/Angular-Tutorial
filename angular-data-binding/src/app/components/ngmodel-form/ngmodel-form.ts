import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngmodel-form',
  imports: [FormsModule],
  templateUrl: './ngmodel-form.html',
  styleUrl: './ngmodel-form.css',
})
export class NgmodelForm {
  userName:string='';
  Password:string='';

  onSubmit(form){
    console.log(form.value);
    console.log("username: ",this.userName,' password: ',this.Password);
  }
}
