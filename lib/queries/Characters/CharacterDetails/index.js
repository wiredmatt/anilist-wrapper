"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHARACTER_DETAILS = void 0;
function CHARACTER_DETAILS(id) {
    return {
        query: `
        query ($id: Int) {
            Character(id: $id) {
              description
            }
          }
          
        `,
        variables: {
            id,
        },
    };
}
exports.CHARACTER_DETAILS = CHARACTER_DETAILS;
//# sourceMappingURL=index.js.map