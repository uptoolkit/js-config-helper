export interface defaultOptions {
    [key: string]: unknown
}

export type ValueOf<T> = T[keyof T];

export class Config<OptionsType = defaultOptions> {

    private readonly options: object | OptionsType;

    constructor(options: object | OptionsType) {
        this.options = options;
    }

    get<T = any>(key: string, def?: any): unknown | T | ValueOf<OptionsType> {
        const keys = key.split('.');

        let source = this.options;

        keys.forEach((k) => {
            if (source) {
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

    has(key: string): boolean {

        const keys = key.split('.');

        let source = this.options;

        keys.forEach((k) => {
            if (source) {
                source = source[k];
            }
        });

        return !!source;
    }

    set<T = any>(key: string, value: any): T | unknown | ValueOf<OptionsType> {
        const keys = key.split('.');
        let source = this.options;

        keys.forEach((k) => {
            if (source) {
                source = source[k];
            }
        });

        if (source) {
            source = value;
        }

        return source;
    }

    all<T = OptionsType>(): object | unknown | T {
        return this.options;
    }
}
