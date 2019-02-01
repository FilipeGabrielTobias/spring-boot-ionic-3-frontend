import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/categoria.service';
import { CategoriaDTO } from '../../models/categoria.dto';
import { IMAGES_CONFIG } from '../../config/images.config';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  items : CategoriaDTO[];
  images : string = IMAGES_CONFIG.images;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public categoriaService: CategoriaService) {
  }

  ionViewDidLoad(){
    this.categoriaService.findAll()
      .subscribe(response => {
        this.items = response;
      },
      error => {});
  }

  showProdutos(categoriaId: string) {
    this.navCtrl.push('ProdutosPage', {categoriaId: categoriaId});
  }
}
