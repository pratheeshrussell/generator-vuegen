export class AppUtils{
    // standalone support functions
    static deepCopy(obj: any): any {
        if (typeof obj !== 'object' || obj === null) {
          return obj;
        }
      
        const isArray = Array.isArray(obj);
        const copy = isArray ? [] : {};
      
        const stack: { source: any; target: any }[] = [{ source: obj, target: copy }];
      
        while (stack.length) {
          const { source, target } = stack.pop();
      
          Object.keys(source).forEach((key) => {
            const value = source[key];
      
            if (typeof value === 'object' && value !== null) {
              const isArray = Array.isArray(value);
              const copyValue = isArray ? [] : {};
      
              target[key] = copyValue;
      
              stack.push({ source: value, target: copyValue });
            } else {
              target[key] = value;
            }
          });
        }
        return copy;
      }
      
}