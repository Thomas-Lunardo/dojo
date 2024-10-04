import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
description: string = 'Ce site a pour but de vous aider à l\'obtension de votre 1er dan. L\'UV technique est une épreuve qui couvre énorméement de technique. Ici vous pourrez retrouver les différentes techniques ainsi qu\'un quiz qui vous préparera au question du jury et plein d\autre choses. Enjoy !';
}
