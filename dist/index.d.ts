export type ExpectedType = 'string' | 'number' | 'boolean' | 'object';
export interface ValidationSchema {
    [key: string]: ExpectedType | ValidationSchema;
}
export declare function typeChecker(request: any, schema: ValidationSchema): boolean;
