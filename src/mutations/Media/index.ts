import { MutationSaveMediaListEntryArgs } from "../../types";

/** If the anime doesn't exist in any of the user's lists, parameter entryId is not
 * needed, otherwise, if the anime exists, the parameter entryId is necesary, 
 * if it's not provided the request will return an error.
 * 
 * Returns: id of the entry.
 */
export function UPDATE_ENTRY(
  Args: MutationSaveMediaListEntryArgs
) {
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

/**
 * Returns: a boolean, if true, the entry was successfully deleted.
 */
export function DELETE_ENTRY(
  entryId: number
) {
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
