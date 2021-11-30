import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casinha-pet',
  templateUrl: './casinha-pet.component.html',
  styleUrls: ['./casinha-pet.component.scss']
})
export class CasinhaPetComponent implements OnInit {
  casinhaPet = [
    
    {nome: 'casinha sofisticada dois andares',
    tamanho: 'Grandao',
    valor: 'R$ 100,00',
    imagem: 'assets/casinhaPet/casinhaDoisAndares.',
    },
    
    
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
