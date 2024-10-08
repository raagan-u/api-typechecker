export type ExpectedType = 'string' | 'number' | 'boolean' | 'object';

export interface ValidationSchema {
	[key:string]: ExpectedType | ValidationSchema;
}
