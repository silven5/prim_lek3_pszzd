import { Component } from '@angular/core';
import { Figure2D } from './Class/Figure2d';
import { Triangle } from './Class/Triangle';

@Component({
  selector: 'app-example2',
  standalone: true,
  imports: [],
  templateUrl: './example2.component.html',
  styleUrl: './example2.component.css',
})
export class Example2Component {
  figure2d!: Figure2D;
  triangle!: Triangle;
  fig: string = '';
  tr: string = '';
  initFigures(w: string, h: string, type: string) {
    try {
      let W = parseFloat(w);
      let H = parseFloat(h);
      if (W > 0 && H > 0) {
        this.figure2d = new Figure2D(W, H);
        this.triangle = new Triangle(W, H, type);
        this.fig = this.figure2d.show_w_h();
        this.tr = this.triangle.show_w_h();
      }
    } catch {
      throw 'Помилка вхідних даних';
    }
  }
}
