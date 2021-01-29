"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extend = void 0;
function extend(...args) {
    const newObj = {};
    for (const obj of args) {
        for (const key in obj) {
            //copy all the fields
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
exports.extend = extend;
;
//# sourceMappingURL=index.js.map