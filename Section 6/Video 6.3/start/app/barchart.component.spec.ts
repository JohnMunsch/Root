import { async, inject, beforeEachProviders, ComponentFixture, TestComponentBuilder } from '@angular/core/testing';

import { BarchartComponent } from "./barchart.component";

describe('Barchart', () => {
  beforeEachProviders(() => [BarchartComponent, TestComponentBuilder]);

  it('will inject a component', inject([BarchartComponent],
      (barchart) => expect(barchart).not.toBeUndefined()));

  it('will look the same before and after rendering if no data was passed in', async(inject([TestComponentBuilder], (tcb) => {
    tcb.createAsync(BarchartComponent).then((fixture: ComponentFixture<BarchartComponent>) => {
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.innerHTML).toEqual('<svg class="chart" width="420" height="0"></svg>');

      fixture.componentInstance.ngOnInit();

      fixture.detectChanges();
      compiled = fixture.debugElement.nativeElement;
      expect(compiled.innerHTML).toEqual('<svg class="chart" width="420" height="0"></svg>');
    });
  })));

  it('Barchart will add svg elements if some data is available', async(inject([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(BarchartComponent).then((fixture) => {
      fixture.detectChanges();
      let compiled = fixture.elementRef.nativeElement;
      expect(compiled.innerHTML).toEqual('<svg class="chart" width="420" height="0"></svg>');

      fixture.componentInstance.data = [19, 44];
      fixture.componentInstance.ngOnInit();

      fixture.detectChanges();
      compiled = fixture.elementRef.nativeElement;
      let graph = compiled.innerHTML;

      // With two data points, we should have created two graphic elements and
      // two text elements within the generated SVG for the graph. That's
      // something we can check against the SVG without worrying it will break
      // easily like a string comparison against the exact text (which could be
      // highly dependent upon D3.js version).
      expect((graph.match(/<g/g) || []).length).toBe(2);
      expect((graph.match(/<text/g) || []).length).toBe(2);
    });
  })));
});
