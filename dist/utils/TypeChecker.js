function validateType(expectedType, value) {
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
export function typeChecker(request, schema) {
    for (var key in schema) {
        var expectedType = schema[key];
        // Check if the key exists in the request
        if (!(key in request)) {
            console.error("Missing key: ".concat(key));
            return false;
        }
        // If expectedType is a string (primitive type), validate it
        if (typeof expectedType === 'string') {
            if (!validateType(expectedType, request[key])) {
                console.error("Type mismatch for key: ".concat(key, ". Expected: ").concat(expectedType, ", but got: ").concat(typeof request[key]));
                return false;
            }
        }
        // If expectedType is an object, recurse for nested validation
        else if (typeof expectedType === 'object') {
            if (!typeChecker(request[key], expectedType)) {
                return false;
            }
        }
    }
    return true;
}
//# sourceMappingURL=TypeChecker.js.map