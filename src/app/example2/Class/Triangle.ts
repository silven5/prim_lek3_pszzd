import { Figure2D } from './Figure2d';
export class Triangle extends Figure2D {
  type: string = 'довільний';
  constructor(w: number, h: number, type: string) {
    super(w, h);
    this.type = type;
  }
  S(): number {
    return (this.w * this.h) / 2.0;
  }
  override show_w_h(): string {
    return super.show_w_h() + 'Площа ' + this.S() + ' Тип  = ' + this.type;
  }
}
