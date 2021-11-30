import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coleiras-pet',
  templateUrl: './coleiras-pet.component.html',
  styleUrls: ['./coleiras-pet.component.scss']
})
export class ColeirasPetComponent implements OnInit {
 coleirasPet = [
  {nome: 'coleira modelo azul',
  tamanho: 'maleavel',
  valor: 'R$ 60,00 ',
  imagem: 'assets/coleirasPet/.coleiraAzul',
  },
  {nome: '',
    tamanho: '',
    valor: 'R$ ',
    imagem: 'assets/coleirasPet/.',
    },
    {nome: '',
    tamanho: '',
    valor: 'R$ ',
    imagem: 'assets/coleirasPet/.',
    },



 ]
  constructor() { }

  ngOnInit(): void {
  }

}
