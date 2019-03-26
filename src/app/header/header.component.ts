import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { ArticlesComponent } from '../articles/articles.component';
import { ArticlesService } from '../../articles.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyword = '';
  isHighLight = false;
  fontSize = 24;

  @Output() keywordchange = new EventEmitter();

  constructor(private service: ArticlesService) { }

  ngOnInit() {
  }

  doClick(e: MouseEvent) {
    console.log(e);

    this.isHighLight = !this.isHighLight;
    console.log(this.isHighLight);

    ++this.fontSize;

    this.keywordchange.emit(this.keyword);

    this.service.doFilter(this.keyword);
  }
}
