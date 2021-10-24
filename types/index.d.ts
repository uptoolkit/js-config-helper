export declare class Config {
    private readonly options;
    constructor(options: object);
    get(key: string, def?: any): any;
    has(key: string): boolean;
    set(key: string, value: any): any;
    all(): any;
}
