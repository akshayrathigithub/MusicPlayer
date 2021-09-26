export class Utility {
  //   static deepClone(
  //     object: Record<string, any>,
  //     hash = new WeakMap()
  //   ): Record<string, any> {
  //     if (Object(object) !== object) return object; // primitives
  //     if (hash.has(object)) return hash.get(object); // cyclic reference
  //     console.log(object, object.constructor, 'obj');
  //     const result =
  //       object instanceof Set
  //         ? new Set(object) // See note about this!
  //         : object instanceof Map
  //         ? new Map(
  //             Array.from(object, ([key, val]) => [
  //               key,
  //               Utility.deepClone(val, hash),
  //             ])
  //           )
  //         : object instanceof Date
  //         ? new Date(object)
  //         : object instanceof RegExp
  //         ? new RegExp(object.source, object.flags)
  //         : // ... add here any specific treatment for other classes ...
  //         // and finally a catch-all:
  //         object.constructor
  //         ? Object.create(HTMLElement.prototype, {})
  //         : Object.create(null);
  //     hash.set(object, result);
  //     return Object.assign(
  //       result,
  //       ...Object.keys(object).map((key) => ({
  //         [key]: Utility.deepClone(object[key], hash),
  //       }))
  //     );
  //   }
}
