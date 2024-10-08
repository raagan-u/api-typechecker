import { ExpectedType, ValidationSchema } from "../types/ValidationSchema";

function validateType(expectedType: ExpectedType, value: any): boolean {
	switch (expectedType) {
	  case 'string':
		return typeof value === 'string';
	  case 'number':
		return typeof value === 'number';
	  case 'boolean':
		return typeof value === 'boolean';
	  case 'object':
		return typeof value === 'object' && !Array.isArray(value) && value !== null;
	  default:
		return false;
	}
  }
  
  // Recursive type-checking function
  export function typeChecker(request: any, schema: ValidationSchema): boolean {
	for (const key in schema) {
	  const expectedType = schema[key];
  
	  // Check if the key exists in the request
	  if (!(key in request)) {
		console.error(`Missing key: ${key}`);
		return false;
	  }
  
	  // If expectedType is a string (primitive type), validate it
	  if (typeof expectedType === 'string') {
		if (!validateType(expectedType, request[key])) {
		  console.error(`Type mismatch for key: ${key}. Expected: ${expectedType}, but got: ${typeof request[key]}`);
		  return false;
		}
	  } 
	  // If expectedType is an object, recurse for nested validation
	  else if (typeof expectedType === 'object') {
		if (!typeChecker(request[key], expectedType as ValidationSchema)) {
		  return false;
		}
	  }
	}
  
	return true;
  }
  