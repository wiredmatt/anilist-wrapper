"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModActionType = exports.RevisionHistoryAction = exports.SubmissionSort = exports.SubmissionStatus = exports.SiteTrendSort = exports.LikeableType = exports.ThreadCommentSort = exports.ThreadSort = exports.ActivitySort = exports.ActivityType = exports.AiringSort = exports.MediaListSort = exports.UserStatisticsSort = exports.MediaRelation = exports.RecommendationRating = exports.RecommendationSort = exports.ReviewRating = exports.ReviewSort = exports.MediaListStatus = exports.MediaRankType = exports.MediaTrendSort = exports.StudioSort = exports.StaffSort = exports.StaffLanguage = exports.MediaSort = exports.CharacterRole = exports.CharacterSort = exports.MediaSource = exports.MediaSeason = exports.MediaStatus = exports.MediaFormat = exports.MediaType = exports.ScoreFormat = exports.NotificationType = exports.UserTitleLanguage = exports.UserSort = void 0;
/** User sort enums */
var UserSort;
(function (UserSort) {
    UserSort["Id"] = "ID";
    UserSort["IdDesc"] = "ID_DESC";
    UserSort["Username"] = "USERNAME";
    UserSort["UsernameDesc"] = "USERNAME_DESC";
    UserSort["WatchedTime"] = "WATCHED_TIME";
    UserSort["WatchedTimeDesc"] = "WATCHED_TIME_DESC";
    UserSort["ChaptersRead"] = "CHAPTERS_READ";
    UserSort["ChaptersReadDesc"] = "CHAPTERS_READ_DESC";
    UserSort["SearchMatch"] = "SEARCH_MATCH";
})(UserSort = exports.UserSort || (exports.UserSort = {}));
/** The language the user wants to see media titles in */
var UserTitleLanguage;
(function (UserTitleLanguage) {
    /** The romanization of the native language title */
    UserTitleLanguage["Romaji"] = "ROMAJI";
    /** The official english title */
    UserTitleLanguage["English"] = "ENGLISH";
    /** Official title in it's native language */
    UserTitleLanguage["Native"] = "NATIVE";
    /** The romanization of the native language title, stylised by media creator */
    UserTitleLanguage["RomajiStylised"] = "ROMAJI_STYLISED";
    /** The official english title, stylised by media creator */
    UserTitleLanguage["EnglishStylised"] = "ENGLISH_STYLISED";
    /** Official title in it's native language, stylised by media creator */
    UserTitleLanguage["NativeStylised"] = "NATIVE_STYLISED";
})(UserTitleLanguage = exports.UserTitleLanguage || (exports.UserTitleLanguage = {}));
/** Notification type enum */
var NotificationType;
(function (NotificationType) {
    /** A user has sent you message */
    NotificationType["ActivityMessage"] = "ACTIVITY_MESSAGE";
    /** A user has replied to your activity */
    NotificationType["ActivityReply"] = "ACTIVITY_REPLY";
    /** A user has followed you */
    NotificationType["Following"] = "FOLLOWING";
    /** A user has mentioned you in their activity */
    NotificationType["ActivityMention"] = "ACTIVITY_MENTION";
    /** A user has mentioned you in a forum comment */
    NotificationType["ThreadCommentMention"] = "THREAD_COMMENT_MENTION";
    /** A user has commented in one of your subscribed forum threads */
    NotificationType["ThreadSubscribed"] = "THREAD_SUBSCRIBED";
    /** A user has replied to your forum comment */
    NotificationType["ThreadCommentReply"] = "THREAD_COMMENT_REPLY";
    /** An anime you are currently watching has aired */
    NotificationType["Airing"] = "AIRING";
    /** A user has liked your activity */
    NotificationType["ActivityLike"] = "ACTIVITY_LIKE";
    /** A user has liked your activity reply */
    NotificationType["ActivityReplyLike"] = "ACTIVITY_REPLY_LIKE";
    /** A user has liked your forum thread */
    NotificationType["ThreadLike"] = "THREAD_LIKE";
    /** A user has liked your forum comment */
    NotificationType["ThreadCommentLike"] = "THREAD_COMMENT_LIKE";
    /** A user has replied to activity you have also replied to */
    NotificationType["ActivityReplySubscribed"] = "ACTIVITY_REPLY_SUBSCRIBED";
    /** A new anime or manga has been added to the site where its related media is on the user's list */
    NotificationType["RelatedMediaAddition"] = "RELATED_MEDIA_ADDITION";
})(NotificationType = exports.NotificationType || (exports.NotificationType = {}));
/** Media list scoring type */
var ScoreFormat;
(function (ScoreFormat) {
    /** An integer from 0-100 */
    ScoreFormat["Point_100"] = "POINT_100";
    /** A float from 0-10 with 1 decimal place */
    ScoreFormat["Point_10Decimal"] = "POINT_10_DECIMAL";
    /** An integer from 0-10 */
    ScoreFormat["Point_10"] = "POINT_10";
    /** An integer from 0-5. Should be represented in Stars */
    ScoreFormat["Point_5"] = "POINT_5";
    /** An integer from 0-3. Should be represented in Smileys. 0 => No Score, 1 => :(, 2 => :|, 3 => :) */
    ScoreFormat["Point_3"] = "POINT_3";
})(ScoreFormat = exports.ScoreFormat || (exports.ScoreFormat = {}));
/** Media type enum, anime or manga. */
var MediaType;
(function (MediaType) {
    /** Japanese Anime */
    MediaType["Anime"] = "ANIME";
    /** Asian comic */
    MediaType["Manga"] = "MANGA";
})(MediaType = exports.MediaType || (exports.MediaType = {}));
/** The format the media was released in */
var MediaFormat;
(function (MediaFormat) {
    /** Anime broadcast on television */
    MediaFormat["Tv"] = "TV";
    /** Anime which are under 15 minutes in length and broadcast on television */
    MediaFormat["TvShort"] = "TV_SHORT";
    /** Anime movies with a theatrical release */
    MediaFormat["Movie"] = "MOVIE";
    /** Special episodes that have been included in DVD/Blu-ray releases, picture dramas, pilots, etc */
    MediaFormat["Special"] = "SPECIAL";
    /** (Original Video Animation) Anime that have been released directly on DVD/Blu-ray without originally going through a theatrical release or television broadcast */
    MediaFormat["Ova"] = "OVA";
    /** (Original Net Animation) Anime that have been originally released online or are only available through streaming services. */
    MediaFormat["Ona"] = "ONA";
    /** Short anime released as a music video */
    MediaFormat["Music"] = "MUSIC";
    /** Professionally published manga with more than one chapter */
    MediaFormat["Manga"] = "MANGA";
    /** Written books released as a series of light novels */
    MediaFormat["Novel"] = "NOVEL";
    /** Manga with just one chapter */
    MediaFormat["OneShot"] = "ONE_SHOT";
})(MediaFormat = exports.MediaFormat || (exports.MediaFormat = {}));
/** The current releasing status of the media */
var MediaStatus;
(function (MediaStatus) {
    /** Has completed and is no longer being released */
    MediaStatus["Finished"] = "FINISHED";
    /** Currently releasing */
    MediaStatus["Releasing"] = "RELEASING";
    /** To be released at a later date */
    MediaStatus["NotYetReleased"] = "NOT_YET_RELEASED";
    /** Ended before the work could be finished */
    MediaStatus["Cancelled"] = "CANCELLED";
    /** Version 2 only. Is currently paused from releasing and will resume at a later date */
    MediaStatus["Hiatus"] = "HIATUS";
})(MediaStatus = exports.MediaStatus || (exports.MediaStatus = {}));
var MediaSeason;
(function (MediaSeason) {
    /** Months December to February */
    MediaSeason["Winter"] = "WINTER";
    /** Months March to May */
    MediaSeason["Spring"] = "SPRING";
    /** Months June to August */
    MediaSeason["Summer"] = "SUMMER";
    /** Months September to November */
    MediaSeason["Fall"] = "FALL";
})(MediaSeason = exports.MediaSeason || (exports.MediaSeason = {}));
/** Source type the media was adapted from */
var MediaSource;
(function (MediaSource) {
    /** An original production not based of another work */
    MediaSource["Original"] = "ORIGINAL";
    /** Asian comic book */
    MediaSource["Manga"] = "MANGA";
    /** Written work published in volumes */
    MediaSource["LightNovel"] = "LIGHT_NOVEL";
    /** Video game driven primary by text and narrative */
    MediaSource["VisualNovel"] = "VISUAL_NOVEL";
    /** Video game */
    MediaSource["VideoGame"] = "VIDEO_GAME";
    /** Other */
    MediaSource["Other"] = "OTHER";
    /** Version 2 only. Written works not published in volumes */
    MediaSource["Novel"] = "NOVEL";
    /** Version 2 only. Self-published works */
    MediaSource["Doujinshi"] = "DOUJINSHI";
    /** Version 2 only. Japanese Anime */
    MediaSource["Anime"] = "ANIME";
})(MediaSource = exports.MediaSource || (exports.MediaSource = {}));
/** Character sort enums */
var CharacterSort;
(function (CharacterSort) {
    CharacterSort["Id"] = "ID";
    CharacterSort["IdDesc"] = "ID_DESC";
    CharacterSort["Role"] = "ROLE";
    CharacterSort["RoleDesc"] = "ROLE_DESC";
    CharacterSort["SearchMatch"] = "SEARCH_MATCH";
    CharacterSort["Favourites"] = "FAVOURITES";
    CharacterSort["FavouritesDesc"] = "FAVOURITES_DESC";
})(CharacterSort = exports.CharacterSort || (exports.CharacterSort = {}));
/** The role the character plays in the media */
var CharacterRole;
(function (CharacterRole) {
    /** A primary character role in the media */
    CharacterRole["Main"] = "MAIN";
    /** A supporting character role in the media */
    CharacterRole["Supporting"] = "SUPPORTING";
    /** A background character in the media */
    CharacterRole["Background"] = "BACKGROUND";
})(CharacterRole = exports.CharacterRole || (exports.CharacterRole = {}));
/** Media sort enums */
var MediaSort;
(function (MediaSort) {
    MediaSort["Id"] = "ID";
    MediaSort["IdDesc"] = "ID_DESC";
    MediaSort["TitleRomaji"] = "TITLE_ROMAJI";
    MediaSort["TitleRomajiDesc"] = "TITLE_ROMAJI_DESC";
    MediaSort["TitleEnglish"] = "TITLE_ENGLISH";
    MediaSort["TitleEnglishDesc"] = "TITLE_ENGLISH_DESC";
    MediaSort["TitleNative"] = "TITLE_NATIVE";
    MediaSort["TitleNativeDesc"] = "TITLE_NATIVE_DESC";
    MediaSort["Type"] = "TYPE";
    MediaSort["TypeDesc"] = "TYPE_DESC";
    MediaSort["Format"] = "FORMAT";
    MediaSort["FormatDesc"] = "FORMAT_DESC";
    MediaSort["StartDate"] = "START_DATE";
    MediaSort["StartDateDesc"] = "START_DATE_DESC";
    MediaSort["EndDate"] = "END_DATE";
    MediaSort["EndDateDesc"] = "END_DATE_DESC";
    MediaSort["Score"] = "SCORE";
    MediaSort["ScoreDesc"] = "SCORE_DESC";
    MediaSort["Popularity"] = "POPULARITY";
    MediaSort["PopularityDesc"] = "POPULARITY_DESC";
    MediaSort["Trending"] = "TRENDING";
    MediaSort["TrendingDesc"] = "TRENDING_DESC";
    MediaSort["Episodes"] = "EPISODES";
    MediaSort["EpisodesDesc"] = "EPISODES_DESC";
    MediaSort["Duration"] = "DURATION";
    MediaSort["DurationDesc"] = "DURATION_DESC";
    MediaSort["Status"] = "STATUS";
    MediaSort["StatusDesc"] = "STATUS_DESC";
    MediaSort["Chapters"] = "CHAPTERS";
    MediaSort["ChaptersDesc"] = "CHAPTERS_DESC";
    MediaSort["Volumes"] = "VOLUMES";
    MediaSort["VolumesDesc"] = "VOLUMES_DESC";
    MediaSort["UpdatedAt"] = "UPDATED_AT";
    MediaSort["UpdatedAtDesc"] = "UPDATED_AT_DESC";
    MediaSort["SearchMatch"] = "SEARCH_MATCH";
    MediaSort["Favourites"] = "FAVOURITES";
    MediaSort["FavouritesDesc"] = "FAVOURITES_DESC";
})(MediaSort = exports.MediaSort || (exports.MediaSort = {}));
/** The primary language of the voice actor */
var StaffLanguage;
(function (StaffLanguage) {
    /** Japanese */
    StaffLanguage["Japanese"] = "JAPANESE";
    /** English */
    StaffLanguage["English"] = "ENGLISH";
    /** Korean */
    StaffLanguage["Korean"] = "KOREAN";
    /** Italian */
    StaffLanguage["Italian"] = "ITALIAN";
    /** Spanish */
    StaffLanguage["Spanish"] = "SPANISH";
    /** Portuguese */
    StaffLanguage["Portuguese"] = "PORTUGUESE";
    /** French */
    StaffLanguage["French"] = "FRENCH";
    /** German */
    StaffLanguage["German"] = "GERMAN";
    /** Hebrew */
    StaffLanguage["Hebrew"] = "HEBREW";
    /** Hungarian */
    StaffLanguage["Hungarian"] = "HUNGARIAN";
})(StaffLanguage = exports.StaffLanguage || (exports.StaffLanguage = {}));
/** Staff sort enums */
var StaffSort;
(function (StaffSort) {
    StaffSort["Id"] = "ID";
    StaffSort["IdDesc"] = "ID_DESC";
    StaffSort["Role"] = "ROLE";
    StaffSort["RoleDesc"] = "ROLE_DESC";
    StaffSort["Language"] = "LANGUAGE";
    StaffSort["LanguageDesc"] = "LANGUAGE_DESC";
    StaffSort["SearchMatch"] = "SEARCH_MATCH";
    StaffSort["Favourites"] = "FAVOURITES";
    StaffSort["FavouritesDesc"] = "FAVOURITES_DESC";
})(StaffSort = exports.StaffSort || (exports.StaffSort = {}));
/** Studio sort enums */
var StudioSort;
(function (StudioSort) {
    StudioSort["Id"] = "ID";
    StudioSort["IdDesc"] = "ID_DESC";
    StudioSort["Name"] = "NAME";
    StudioSort["NameDesc"] = "NAME_DESC";
    StudioSort["SearchMatch"] = "SEARCH_MATCH";
    StudioSort["Favourites"] = "FAVOURITES";
    StudioSort["FavouritesDesc"] = "FAVOURITES_DESC";
})(StudioSort = exports.StudioSort || (exports.StudioSort = {}));
/** Media trend sort enums */
var MediaTrendSort;
(function (MediaTrendSort) {
    MediaTrendSort["Id"] = "ID";
    MediaTrendSort["IdDesc"] = "ID_DESC";
    MediaTrendSort["MediaId"] = "MEDIA_ID";
    MediaTrendSort["MediaIdDesc"] = "MEDIA_ID_DESC";
    MediaTrendSort["Date"] = "DATE";
    MediaTrendSort["DateDesc"] = "DATE_DESC";
    MediaTrendSort["Score"] = "SCORE";
    MediaTrendSort["ScoreDesc"] = "SCORE_DESC";
    MediaTrendSort["Popularity"] = "POPULARITY";
    MediaTrendSort["PopularityDesc"] = "POPULARITY_DESC";
    MediaTrendSort["Trending"] = "TRENDING";
    MediaTrendSort["TrendingDesc"] = "TRENDING_DESC";
    MediaTrendSort["Episode"] = "EPISODE";
    MediaTrendSort["EpisodeDesc"] = "EPISODE_DESC";
})(MediaTrendSort = exports.MediaTrendSort || (exports.MediaTrendSort = {}));
/** The type of ranking */
var MediaRankType;
(function (MediaRankType) {
    /** Ranking is based on the media's ratings/score */
    MediaRankType["Rated"] = "RATED";
    /** Ranking is based on the media's popularity */
    MediaRankType["Popular"] = "POPULAR";
})(MediaRankType = exports.MediaRankType || (exports.MediaRankType = {}));
/** Media list watching/reading status enum. */
var MediaListStatus;
(function (MediaListStatus) {
    /** Currently watching/reading */
    MediaListStatus["Current"] = "CURRENT";
    /** Planning to watch/read */
    MediaListStatus["Planning"] = "PLANNING";
    /** Finished watching/reading */
    MediaListStatus["Completed"] = "COMPLETED";
    /** Stopped watching/reading before completing */
    MediaListStatus["Dropped"] = "DROPPED";
    /** Paused watching/reading */
    MediaListStatus["Paused"] = "PAUSED";
    /** Re-watching/reading */
    MediaListStatus["Repeating"] = "REPEATING";
})(MediaListStatus = exports.MediaListStatus || (exports.MediaListStatus = {}));
/** Review sort enums */
var ReviewSort;
(function (ReviewSort) {
    ReviewSort["Id"] = "ID";
    ReviewSort["IdDesc"] = "ID_DESC";
    ReviewSort["Score"] = "SCORE";
    ReviewSort["ScoreDesc"] = "SCORE_DESC";
    ReviewSort["Rating"] = "RATING";
    ReviewSort["RatingDesc"] = "RATING_DESC";
    ReviewSort["CreatedAt"] = "CREATED_AT";
    ReviewSort["CreatedAtDesc"] = "CREATED_AT_DESC";
    ReviewSort["UpdatedAt"] = "UPDATED_AT";
    ReviewSort["UpdatedAtDesc"] = "UPDATED_AT_DESC";
})(ReviewSort = exports.ReviewSort || (exports.ReviewSort = {}));
/** Review rating enums */
var ReviewRating;
(function (ReviewRating) {
    ReviewRating["NoVote"] = "NO_VOTE";
    ReviewRating["UpVote"] = "UP_VOTE";
    ReviewRating["DownVote"] = "DOWN_VOTE";
})(ReviewRating = exports.ReviewRating || (exports.ReviewRating = {}));
/** Recommendation sort enums */
var RecommendationSort;
(function (RecommendationSort) {
    RecommendationSort["Id"] = "ID";
    RecommendationSort["IdDesc"] = "ID_DESC";
    RecommendationSort["Rating"] = "RATING";
    RecommendationSort["RatingDesc"] = "RATING_DESC";
})(RecommendationSort = exports.RecommendationSort || (exports.RecommendationSort = {}));
/** Recommendation rating enums */
var RecommendationRating;
(function (RecommendationRating) {
    RecommendationRating["NoRating"] = "NO_RATING";
    RecommendationRating["RateUp"] = "RATE_UP";
    RecommendationRating["RateDown"] = "RATE_DOWN";
})(RecommendationRating = exports.RecommendationRating || (exports.RecommendationRating = {}));
/** Type of relation media has to its parent. */
var MediaRelation;
(function (MediaRelation) {
    /** An adaption of this media into a different format */
    MediaRelation["Adaptation"] = "ADAPTATION";
    /** Released before the relation */
    MediaRelation["Prequel"] = "PREQUEL";
    /** Released after the relation */
    MediaRelation["Sequel"] = "SEQUEL";
    /** The media a side story is from */
    MediaRelation["Parent"] = "PARENT";
    /** A side story of the parent media */
    MediaRelation["SideStory"] = "SIDE_STORY";
    /** Shares at least 1 character */
    MediaRelation["Character"] = "CHARACTER";
    /** A shortened and summarized version */
    MediaRelation["Summary"] = "SUMMARY";
    /** An alternative version of the same media */
    MediaRelation["Alternative"] = "ALTERNATIVE";
    /** An alternative version of the media with a different primary focus */
    MediaRelation["SpinOff"] = "SPIN_OFF";
    /** Other */
    MediaRelation["Other"] = "OTHER";
    /** Version 2 only. The source material the media was adapted from */
    MediaRelation["Source"] = "SOURCE";
    /** Version 2 only. */
    MediaRelation["Compilation"] = "COMPILATION";
    /** Version 2 only. */
    MediaRelation["Contains"] = "CONTAINS";
})(MediaRelation = exports.MediaRelation || (exports.MediaRelation = {}));
/** User statistics sort enum */
var UserStatisticsSort;
(function (UserStatisticsSort) {
    UserStatisticsSort["Id"] = "ID";
    UserStatisticsSort["IdDesc"] = "ID_DESC";
    UserStatisticsSort["Count"] = "COUNT";
    UserStatisticsSort["CountDesc"] = "COUNT_DESC";
    UserStatisticsSort["Progress"] = "PROGRESS";
    UserStatisticsSort["ProgressDesc"] = "PROGRESS_DESC";
    UserStatisticsSort["MeanScore"] = "MEAN_SCORE";
    UserStatisticsSort["MeanScoreDesc"] = "MEAN_SCORE_DESC";
})(UserStatisticsSort = exports.UserStatisticsSort || (exports.UserStatisticsSort = {}));
/** Media list sort enums */
var MediaListSort;
(function (MediaListSort) {
    MediaListSort["MediaId"] = "MEDIA_ID";
    MediaListSort["MediaIdDesc"] = "MEDIA_ID_DESC";
    MediaListSort["Score"] = "SCORE";
    MediaListSort["ScoreDesc"] = "SCORE_DESC";
    MediaListSort["Status"] = "STATUS";
    MediaListSort["StatusDesc"] = "STATUS_DESC";
    MediaListSort["Progress"] = "PROGRESS";
    MediaListSort["ProgressDesc"] = "PROGRESS_DESC";
    MediaListSort["ProgressVolumes"] = "PROGRESS_VOLUMES";
    MediaListSort["ProgressVolumesDesc"] = "PROGRESS_VOLUMES_DESC";
    MediaListSort["Repeat"] = "REPEAT";
    MediaListSort["RepeatDesc"] = "REPEAT_DESC";
    MediaListSort["Priority"] = "PRIORITY";
    MediaListSort["PriorityDesc"] = "PRIORITY_DESC";
    MediaListSort["StartedOn"] = "STARTED_ON";
    MediaListSort["StartedOnDesc"] = "STARTED_ON_DESC";
    MediaListSort["FinishedOn"] = "FINISHED_ON";
    MediaListSort["FinishedOnDesc"] = "FINISHED_ON_DESC";
    MediaListSort["AddedTime"] = "ADDED_TIME";
    MediaListSort["AddedTimeDesc"] = "ADDED_TIME_DESC";
    MediaListSort["UpdatedTime"] = "UPDATED_TIME";
    MediaListSort["UpdatedTimeDesc"] = "UPDATED_TIME_DESC";
    MediaListSort["MediaTitleRomaji"] = "MEDIA_TITLE_ROMAJI";
    MediaListSort["MediaTitleRomajiDesc"] = "MEDIA_TITLE_ROMAJI_DESC";
    MediaListSort["MediaTitleEnglish"] = "MEDIA_TITLE_ENGLISH";
    MediaListSort["MediaTitleEnglishDesc"] = "MEDIA_TITLE_ENGLISH_DESC";
    MediaListSort["MediaTitleNative"] = "MEDIA_TITLE_NATIVE";
    MediaListSort["MediaTitleNativeDesc"] = "MEDIA_TITLE_NATIVE_DESC";
    MediaListSort["MediaPopularity"] = "MEDIA_POPULARITY";
    MediaListSort["MediaPopularityDesc"] = "MEDIA_POPULARITY_DESC";
})(MediaListSort = exports.MediaListSort || (exports.MediaListSort = {}));
/** Airing schedule sort enums */
var AiringSort;
(function (AiringSort) {
    AiringSort["Id"] = "ID";
    AiringSort["IdDesc"] = "ID_DESC";
    AiringSort["MediaId"] = "MEDIA_ID";
    AiringSort["MediaIdDesc"] = "MEDIA_ID_DESC";
    AiringSort["Time"] = "TIME";
    AiringSort["TimeDesc"] = "TIME_DESC";
    AiringSort["Episode"] = "EPISODE";
    AiringSort["EpisodeDesc"] = "EPISODE_DESC";
})(AiringSort = exports.AiringSort || (exports.AiringSort = {}));
/** Activity type enum. */
var ActivityType;
(function (ActivityType) {
    /** A text activity */
    ActivityType["Text"] = "TEXT";
    /** A anime list update activity */
    ActivityType["AnimeList"] = "ANIME_LIST";
    /** A manga list update activity */
    ActivityType["MangaList"] = "MANGA_LIST";
    /** A text message activity sent to another user */
    ActivityType["Message"] = "MESSAGE";
    /** Anime & Manga list update, only used in query arguments */
    ActivityType["MediaList"] = "MEDIA_LIST";
})(ActivityType = exports.ActivityType || (exports.ActivityType = {}));
/** Activity sort enums */
var ActivitySort;
(function (ActivitySort) {
    ActivitySort["Id"] = "ID";
    ActivitySort["IdDesc"] = "ID_DESC";
})(ActivitySort = exports.ActivitySort || (exports.ActivitySort = {}));
/** Thread sort enums */
var ThreadSort;
(function (ThreadSort) {
    ThreadSort["Id"] = "ID";
    ThreadSort["IdDesc"] = "ID_DESC";
    ThreadSort["Title"] = "TITLE";
    ThreadSort["TitleDesc"] = "TITLE_DESC";
    ThreadSort["CreatedAt"] = "CREATED_AT";
    ThreadSort["CreatedAtDesc"] = "CREATED_AT_DESC";
    ThreadSort["UpdatedAt"] = "UPDATED_AT";
    ThreadSort["UpdatedAtDesc"] = "UPDATED_AT_DESC";
    ThreadSort["RepliedAt"] = "REPLIED_AT";
    ThreadSort["RepliedAtDesc"] = "REPLIED_AT_DESC";
    ThreadSort["ReplyCount"] = "REPLY_COUNT";
    ThreadSort["ReplyCountDesc"] = "REPLY_COUNT_DESC";
    ThreadSort["ViewCount"] = "VIEW_COUNT";
    ThreadSort["ViewCountDesc"] = "VIEW_COUNT_DESC";
    ThreadSort["IsSticky"] = "IS_STICKY";
    ThreadSort["SearchMatch"] = "SEARCH_MATCH";
})(ThreadSort = exports.ThreadSort || (exports.ThreadSort = {}));
/** Thread comments sort enums */
var ThreadCommentSort;
(function (ThreadCommentSort) {
    ThreadCommentSort["Id"] = "ID";
    ThreadCommentSort["IdDesc"] = "ID_DESC";
})(ThreadCommentSort = exports.ThreadCommentSort || (exports.ThreadCommentSort = {}));
/** Types that can be liked */
var LikeableType;
(function (LikeableType) {
    LikeableType["Thread"] = "THREAD";
    LikeableType["ThreadComment"] = "THREAD_COMMENT";
    LikeableType["Activity"] = "ACTIVITY";
    LikeableType["ActivityReply"] = "ACTIVITY_REPLY";
})(LikeableType = exports.LikeableType || (exports.LikeableType = {}));
/** Site trend sort enums */
var SiteTrendSort;
(function (SiteTrendSort) {
    SiteTrendSort["Date"] = "DATE";
    SiteTrendSort["DateDesc"] = "DATE_DESC";
    SiteTrendSort["Count"] = "COUNT";
    SiteTrendSort["CountDesc"] = "COUNT_DESC";
    SiteTrendSort["Change"] = "CHANGE";
    SiteTrendSort["ChangeDesc"] = "CHANGE_DESC";
})(SiteTrendSort = exports.SiteTrendSort || (exports.SiteTrendSort = {}));
/** Submission status */
var SubmissionStatus;
(function (SubmissionStatus) {
    SubmissionStatus["Pending"] = "PENDING";
    SubmissionStatus["Rejected"] = "REJECTED";
    SubmissionStatus["PartiallyAccepted"] = "PARTIALLY_ACCEPTED";
    SubmissionStatus["Accepted"] = "ACCEPTED";
})(SubmissionStatus = exports.SubmissionStatus || (exports.SubmissionStatus = {}));
/** Submission sort enums */
var SubmissionSort;
(function (SubmissionSort) {
    SubmissionSort["Id"] = "ID";
    SubmissionSort["IdDesc"] = "ID_DESC";
})(SubmissionSort = exports.SubmissionSort || (exports.SubmissionSort = {}));
/** Revision history actions */
var RevisionHistoryAction;
(function (RevisionHistoryAction) {
    RevisionHistoryAction["Create"] = "CREATE";
    RevisionHistoryAction["Edit"] = "EDIT";
})(RevisionHistoryAction = exports.RevisionHistoryAction || (exports.RevisionHistoryAction = {}));
var ModActionType;
(function (ModActionType) {
    ModActionType["Note"] = "NOTE";
    ModActionType["Ban"] = "BAN";
    ModActionType["Delete"] = "DELETE";
    ModActionType["Edit"] = "EDIT";
    ModActionType["Expire"] = "EXPIRE";
    ModActionType["Report"] = "REPORT";
    ModActionType["Reset"] = "RESET";
    ModActionType["Anon"] = "ANON";
})(ModActionType = exports.ModActionType || (exports.ModActionType = {}));
//# sourceMappingURL=index.js.map