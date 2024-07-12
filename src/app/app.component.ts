import { Component, OnInit } from '@angular/core';
import { faFacebook, faLinkedin, faInstagram, faTwitter, faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { CartService } from './cart/cart.service';
import { initializeApp } from "firebase/app";
import { AuthService } from './auth/auth.service';
// import { firebaseConfig } from './firebase.config';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements OnInit{
  title = 'EcommerceProject';

  constructor(private cartService: CartService,
    private authService: AuthService){

  }
  faFacebook = faFacebook;
  faPhone = faPhone;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faSearchengin = faSearchengin;
  faCartPlus = faCartPlus;

  getCart(){
    return this.cartService.get();
    
  }

  ngOnInit(): void {
    // initializeApp(firebaseConfig);
    initializeApp();
  }
  isAuthenticated(){
    return this.authService.isAuthenticated;
  }
  logout(){
    this.authService.logout();
  }
}
