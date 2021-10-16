export default class Config {
    private readonly options;
    constructor(options: object);
    get(key: string, def?: any): object;
    has(key: string): boolean;
    set(key: string, value: any): object;
    all(): object;
}
