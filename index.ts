export class Config {

  private readonly options: object;

  constructor(options:object) {
    this.options = options;
  }

  get(key:string, def?:any):any {
    const keys = key.split('.');

    let source = this.options;

    keys.forEach((k) => {
      if (source) {
        // @ts-ignore
        source = source[k];
      }
    });

    if (!source && def) {
      if (typeof def === 'function') {
        source = def();
      } else {
        source = def;
      }
    }

    return source;
  }

  has(key:string):boolean {

    const keys = key.split('.');

    let source = this.options;

    keys.forEach((k) => {
      if (source) {
        // @ts-ignore
        source = source[k];
      }
    });

    return !!source;
  }

  set(key:string, value:any):any {
    const keys = key.split('.');
    let source = this.options;

    keys.forEach((k) => {
      if (source) {
        // @ts-ignore
        source = source[k];
      }
    });

    if (source) {
      source = value;
    }

    return source;
  }

  all():any {
    return this.options;
  }
}