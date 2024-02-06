export class Figure2D {
  w: number = 0;
  h: number = 0;
  constructor(w: number, h: number) {
    this.w = w;
    this.h = h;
  }
  show_w_h(): string {
    return 'Ширина = ' + this.w + ' Висота= ' + this.h;
  }
}
