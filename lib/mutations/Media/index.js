"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_ENTRY = exports.UPDATE_ENTRY = void 0;
/** If the anime doesn't exist in any of the user's lists, parameter entryId is not
 * needed, otherwise, if the anime exists, the parameter entryId is necesary,
 * if it's not provided the request will return an error.
 *
 * Returns: id of the entry.
 */
function UPDATE_ENTRY(Args) {
    return {
        query: `   
    mutation ($entryId: Int, $mediaId: Int, $status: MediaListStatus, $score: Float, $progress: Int, $startedAt: FuzzyDateInput, $completedAt: FuzzyDateInput) {
      SaveMediaListEntry(id: $entryId, mediaId: $mediaId, status: $status, score: $score, progress: $progress, startedAt:$startedAt,completedAt:$completedAt) {
        id
      }
    }    
        `,
        variables: {
            mediaId: Args.mediaId,
            status: Args.status,
            score: Args.score,
            progress: Args.progress,
            entryId: Args.id,
            startedAt: Args.startedAt,
            completedAt: Args.completedAt,
        },
    };
}
exports.UPDATE_ENTRY = UPDATE_ENTRY;
/**
 * Returns: a boolean, if true, the entry was successfully deleted.
 */
function DELETE_ENTRY(entryId) {
    return {
        query: `   
    mutation($id: Int){
      DeleteMediaListEntry(id:$id){
        deleted
      }
    }
        `,
        variables: {
            id: entryId,
        },
    };
}
exports.DELETE_ENTRY = DELETE_ENTRY;
//# sourceMappingURL=index.js.map