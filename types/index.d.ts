export interface defaultOptions {
    [key: string]: unknown;
}
export declare type ValueOf<T> = T[keyof T];
export declare class Config<OptionsType = defaultOptions> {
    private readonly options;
    constructor(options: object | OptionsType);
    get<T = any>(key: string, def?: any): unknown | T | ValueOf<OptionsType>;
    has(key: string): boolean;
    set<T = any>(key: string, value: any): T | unknown | ValueOf<OptionsType>;
    all<T = OptionsType>(): object | unknown | T;
}
