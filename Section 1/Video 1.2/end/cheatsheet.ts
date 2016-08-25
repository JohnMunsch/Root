@Component {
  selector: ‘html-selector’,
  directives: [ FirstDirective, SecondDirective ],
      pipes: [ MoneyFormatter, DateFormatter ],
    providers: [ ExampleService ],

    template: `
    <div class="firstDiv">some html here</div>
    feel free to include {{ mustache }}
    <first-directive>
      <second-directive></second-directive>
    </first-directive>
  `,
    styles: [ '.firstDiv { background-color: yellow; }' ]
}
class ClassName {
  @Input() mustache: string;
  @Output() onAction = new EventEmitter();

  constructor(exampleService: ExampleService) {
  }

  method() {
  }
}
