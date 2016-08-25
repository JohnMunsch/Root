import { Component, Input, ViewEncapsulation } from '@angular/core';
declare var d3: any;

@Component({
    selector: 'barchart',
    template: '<svg class="chart"></svg>',
    styles: [
      `.chart rect {
         fill: steelblue;
       }

       .chart text {
         fill: white;
         font: 10px sans-serif;
         text-anchor: end;
       }`
    ],
    encapsulation: ViewEncapsulation.None
})
export class BarchartComponent {
  @Input() data = [];

  width = 420;
  barHeight = 20;

  constructor() {
  }

  ngOnInit() {
    var x = d3.scaleLinear()
        .domain([0, d3.max(this.data)])
        .range([0, this.width]);

    var chart = d3.select(".chart")
        .attr("width", this.width)
        .attr("height", this.barHeight * this.data.length);

    var bar = chart.selectAll("g")
        .data(this.data)
        .enter().append("g")
        .attr("transform", (d, i) => { return "translate(0," + i * this.barHeight + ")"; });

    bar.append("rect")
        .attr("width", x)
        .attr("height", this.barHeight - 1);

    bar.append("text")
        .attr("x", function(d) { return x(d) - 3; })
        .attr("y", this.barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d; });
  }
}
