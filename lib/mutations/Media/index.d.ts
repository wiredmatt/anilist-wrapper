import { MutationSaveMediaListEntryArgs } from "../../types";
/** If the anime doesn't exist in any of the user's lists, parameter entryId is not
 * needed, otherwise, if the anime exists, the parameter entryId is necesary,
 * if it's not provided the request will return an error.
 *
 * Returns: id of the entry.
 */
export declare function UPDATE_ENTRY(Args: MutationSaveMediaListEntryArgs): {
    query: string;
    variables: {
        mediaId: import("../../types").Maybe<number>;
        status: import("../../types").Maybe<import("../../types").MediaListStatus>;
        score: number | null | undefined;
        progress: number | null | undefined;
        entryId: number | null | undefined;
        startedAt: import("../../types").FuzzyDateInput | null | undefined;
        completedAt: import("../../types").FuzzyDateInput | null | undefined;
    };
};
/**
 * Returns: a boolean, if true, the entry was successfully deleted.
 */
export declare function DELETE_ENTRY(entryId: number): {
    query: string;
    variables: {
        id: number;
    };
};
//# sourceMappingURL=index.d.ts.map