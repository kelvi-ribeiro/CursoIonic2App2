import { NgModule } from '@angular/core';
import { CaptalizePipe } from './captalize/captalize';
@NgModule({
	declarations: [CaptalizePipe],
	imports: [],
	exports: [CaptalizePipe]
})
export class PipesModule {}
