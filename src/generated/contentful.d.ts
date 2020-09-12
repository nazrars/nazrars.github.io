export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly asset?: Maybe<Asset>;
  readonly assetCollection?: Maybe<AssetCollection>;
  readonly resume?: Maybe<Resume>;
  readonly resumeCollection?: Maybe<ResumeCollection>;
  readonly background?: Maybe<Background>;
  readonly backgroundCollection?: Maybe<BackgroundCollection>;
  readonly block?: Maybe<Block>;
  readonly blockCollection?: Maybe<BlockCollection>;
  readonly employment?: Maybe<Employment>;
  readonly employmentCollection?: Maybe<EmploymentCollection>;
  readonly education?: Maybe<Education>;
  readonly educationCollection?: Maybe<EducationCollection>;
  readonly person?: Maybe<Person>;
  readonly personCollection?: Maybe<PersonCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryAssetCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<AssetFilter>;
  order?: Maybe<ReadonlyArray<Maybe<AssetOrder>>>;
};


export type QueryResumeArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryResumeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ResumeFilter>;
  order?: Maybe<ReadonlyArray<Maybe<ResumeOrder>>>;
};


export type QueryBackgroundArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryBackgroundCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<BackgroundFilter>;
  order?: Maybe<ReadonlyArray<Maybe<BackgroundOrder>>>;
};


export type QueryBlockArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryBlockCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<BlockFilter>;
  order?: Maybe<ReadonlyArray<Maybe<BlockOrder>>>;
};


export type QueryEmploymentArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryEmploymentCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<EmploymentFilter>;
  order?: Maybe<ReadonlyArray<Maybe<EmploymentOrder>>>;
};


export type QueryEducationArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryEducationCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<EducationFilter>;
  order?: Maybe<ReadonlyArray<Maybe<EducationOrder>>>;
};


export type QueryPersonArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPersonCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PersonFilter>;
  order?: Maybe<ReadonlyArray<Maybe<PersonOrder>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  readonly __typename?: 'Asset';
  readonly sys: Sys;
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly contentType?: Maybe<Scalars['String']>;
  readonly fileName?: Maybe<Scalars['String']>;
  readonly size?: Maybe<Scalars['Int']>;
  readonly url?: Maybe<Scalars['String']>;
  readonly width?: Maybe<Scalars['Int']>;
  readonly height?: Maybe<Scalars['Int']>;
  readonly linkedFrom?: Maybe<AssetLinkingCollections>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: Maybe<ImageTransformOptions>;
};

export type Sys = {
  readonly __typename?: 'Sys';
  readonly id: Scalars['String'];
  readonly spaceId: Scalars['String'];
  readonly environmentId: Scalars['String'];
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  readonly firstPublishedAt?: Maybe<Scalars['DateTime']>;
  readonly publishedVersion?: Maybe<Scalars['Int']>;
};


export type ImageTransformOptions = {
  /** Desired width in pixels. Defaults to the original image width. */
  readonly width?: Maybe<Scalars['Dimension']>;
  /** Desired height in pixels. Defaults to the original image height. */
  readonly height?: Maybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  readonly quality?: Maybe<Scalars['Quality']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  readonly cornerRadius?: Maybe<Scalars['Int']>;
  /** Desired resize strategy. Defaults to `FIT`. */
  readonly resizeStrategy?: Maybe<ImageResizeStrategy>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  readonly resizeFocus?: Maybe<ImageResizeFocus>;
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  readonly backgroundColor?: Maybe<Scalars['HexColor']>;
  /** Desired image format. Defaults to the original image format. */
  readonly format?: Maybe<ImageFormat>;
};



export enum ImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES'
}


export enum ImageFormat {
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export type AssetLinkingCollections = {
  readonly __typename?: 'AssetLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type EntryCollection = {
  readonly __typename?: 'EntryCollection';
  readonly total: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly limit: Scalars['Int'];
  readonly items: ReadonlyArray<Maybe<Entry>>;
};

export type Entry = {
  readonly sys: Sys;
};

export type AssetFilter = {
  readonly sys?: Maybe<SysFilter>;
  readonly title_exists?: Maybe<Scalars['Boolean']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly title_not?: Maybe<Scalars['String']>;
  readonly title_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly title_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly title_contains?: Maybe<Scalars['String']>;
  readonly title_not_contains?: Maybe<Scalars['String']>;
  readonly description_exists?: Maybe<Scalars['Boolean']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly description_not?: Maybe<Scalars['String']>;
  readonly description_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly description_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly description_contains?: Maybe<Scalars['String']>;
  readonly description_not_contains?: Maybe<Scalars['String']>;
  readonly url_exists?: Maybe<Scalars['Boolean']>;
  readonly url?: Maybe<Scalars['String']>;
  readonly url_not?: Maybe<Scalars['String']>;
  readonly url_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly url_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly url_contains?: Maybe<Scalars['String']>;
  readonly url_not_contains?: Maybe<Scalars['String']>;
  readonly size_exists?: Maybe<Scalars['Boolean']>;
  readonly size?: Maybe<Scalars['Int']>;
  readonly size_not?: Maybe<Scalars['Int']>;
  readonly size_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly size_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly size_gt?: Maybe<Scalars['Int']>;
  readonly size_gte?: Maybe<Scalars['Int']>;
  readonly size_lt?: Maybe<Scalars['Int']>;
  readonly size_lte?: Maybe<Scalars['Int']>;
  readonly contentType_exists?: Maybe<Scalars['Boolean']>;
  readonly contentType?: Maybe<Scalars['String']>;
  readonly contentType_not?: Maybe<Scalars['String']>;
  readonly contentType_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly contentType_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly contentType_contains?: Maybe<Scalars['String']>;
  readonly contentType_not_contains?: Maybe<Scalars['String']>;
  readonly fileName_exists?: Maybe<Scalars['Boolean']>;
  readonly fileName?: Maybe<Scalars['String']>;
  readonly fileName_not?: Maybe<Scalars['String']>;
  readonly fileName_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly fileName_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly fileName_contains?: Maybe<Scalars['String']>;
  readonly fileName_not_contains?: Maybe<Scalars['String']>;
  readonly width_exists?: Maybe<Scalars['Boolean']>;
  readonly width?: Maybe<Scalars['Int']>;
  readonly width_not?: Maybe<Scalars['Int']>;
  readonly width_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly width_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly width_gt?: Maybe<Scalars['Int']>;
  readonly width_gte?: Maybe<Scalars['Int']>;
  readonly width_lt?: Maybe<Scalars['Int']>;
  readonly width_lte?: Maybe<Scalars['Int']>;
  readonly height_exists?: Maybe<Scalars['Boolean']>;
  readonly height?: Maybe<Scalars['Int']>;
  readonly height_not?: Maybe<Scalars['Int']>;
  readonly height_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly height_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly height_gt?: Maybe<Scalars['Int']>;
  readonly height_gte?: Maybe<Scalars['Int']>;
  readonly height_lt?: Maybe<Scalars['Int']>;
  readonly height_lte?: Maybe<Scalars['Int']>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<AssetFilter>>>;
  readonly AND?: Maybe<ReadonlyArray<Maybe<AssetFilter>>>;
};

export type SysFilter = {
  readonly id_exists?: Maybe<Scalars['Boolean']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly id_not?: Maybe<Scalars['String']>;
  readonly id_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly id_contains?: Maybe<Scalars['String']>;
  readonly id_not_contains?: Maybe<Scalars['String']>;
  readonly publishedAt_exists?: Maybe<Scalars['Boolean']>;
  readonly publishedAt?: Maybe<Scalars['String']>;
  readonly publishedAt_not?: Maybe<Scalars['String']>;
  readonly publishedAt_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly publishedAt_contains?: Maybe<Scalars['String']>;
  readonly publishedAt_not_contains?: Maybe<Scalars['String']>;
  readonly firstPublishedAt_exists?: Maybe<Scalars['Boolean']>;
  readonly firstPublishedAt?: Maybe<Scalars['String']>;
  readonly firstPublishedAt_not?: Maybe<Scalars['String']>;
  readonly firstPublishedAt_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly firstPublishedAt_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly firstPublishedAt_contains?: Maybe<Scalars['String']>;
  readonly firstPublishedAt_not_contains?: Maybe<Scalars['String']>;
  readonly publishedVersion_exists?: Maybe<Scalars['Boolean']>;
  readonly publishedVersion?: Maybe<Scalars['String']>;
  readonly publishedVersion_not?: Maybe<Scalars['String']>;
  readonly publishedVersion_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly publishedVersion_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly publishedVersion_contains?: Maybe<Scalars['String']>;
  readonly publishedVersion_not_contains?: Maybe<Scalars['String']>;
};

export enum AssetOrder {
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AssetCollection = {
  readonly __typename?: 'AssetCollection';
  readonly total: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly limit: Scalars['Int'];
  readonly items: ReadonlyArray<Maybe<Asset>>;
};

/** [See type definition](https://app.contentful.com/spaces/y5q3314w81ij/content_types/resume) */
export type Resume = Entry & {
  readonly __typename?: 'Resume';
  readonly sys: Sys;
  readonly linkedFrom?: Maybe<ResumeLinkingCollections>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly person?: Maybe<Person>;
  readonly blocksCollection?: Maybe<ResumeBlocksCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/y5q3314w81ij/content_types/resume) */
export type ResumePersonArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/y5q3314w81ij/content_types/resume) */
export type ResumeBlocksCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ResumeLinkingCollections = {
  readonly __typename?: 'ResumeLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
};


export type ResumeLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/y5q3314w81ij/content_types/person) */
export type Person = Entry & {
  readonly __typename?: 'Person';
  readonly sys: Sys;
  readonly linkedFrom?: Maybe<PersonLinkingCollections>;
  readonly name?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly location?: Maybe<Scalars['String']>;
  readonly summary?: Maybe<Scalars['String']>;
  readonly socialMedia?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type PersonLinkingCollections = {
  readonly __typename?: 'PersonLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
  readonly resumeCollection?: Maybe<ResumeCollection>;
  readonly backgroundCollection?: Maybe<BackgroundCollection>;
  readonly employmentCollection?: Maybe<EmploymentCollection>;
  readonly educationCollection?: Maybe<EducationCollection>;
};


export type PersonLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type PersonLinkingCollectionsResumeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type PersonLinkingCollectionsBackgroundCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type PersonLinkingCollectionsEmploymentCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type PersonLinkingCollectionsEducationCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ResumeCollection = {
  readonly __typename?: 'ResumeCollection';
  readonly total: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly limit: Scalars['Int'];
  readonly items: ReadonlyArray<Maybe<Resume>>;
};

export type BackgroundCollection = {
  readonly __typename?: 'BackgroundCollection';
  readonly total: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly limit: Scalars['Int'];
  readonly items: ReadonlyArray<Maybe<Background>>;
};

/** [See type definition](https://app.contentful.com/spaces/y5q3314w81ij/content_types/background) */
export type Background = Entry & {
  readonly __typename?: 'Background';
  readonly sys: Sys;
  readonly linkedFrom?: Maybe<BackgroundLinkingCollections>;
  readonly person?: Maybe<Person>;
  readonly parentName?: Maybe<Scalars['String']>;
  readonly parentUrl?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly location?: Maybe<Scalars['String']>;
  readonly startDate?: Maybe<Scalars['DateTime']>;
  readonly endDate?: Maybe<Scalars['DateTime']>;
};


/** [See type definition](https://app.contentful.com/spaces/y5q3314w81ij/content_types/background) */
export type BackgroundPersonArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type BackgroundLinkingCollections = {
  readonly __typename?: 'BackgroundLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
};


export type BackgroundLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type EmploymentCollection = {
  readonly __typename?: 'EmploymentCollection';
  readonly total: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly limit: Scalars['Int'];
  readonly items: ReadonlyArray<Maybe<Employment>>;
};

/** [See type definition](https://app.contentful.com/spaces/y5q3314w81ij/content_types/employment) */
export type Employment = Entry & {
  readonly __typename?: 'Employment';
  readonly sys: Sys;
  readonly linkedFrom?: Maybe<EmploymentLinkingCollections>;
  readonly person?: Maybe<Person>;
  readonly companyName?: Maybe<Scalars['String']>;
  readonly companyUrl?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly location?: Maybe<Scalars['String']>;
  readonly startDate?: Maybe<Scalars['DateTime']>;
  readonly endDate?: Maybe<Scalars['DateTime']>;
};


/** [See type definition](https://app.contentful.com/spaces/y5q3314w81ij/content_types/employment) */
export type EmploymentPersonArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type EmploymentLinkingCollections = {
  readonly __typename?: 'EmploymentLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
};


export type EmploymentLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type EducationCollection = {
  readonly __typename?: 'EducationCollection';
  readonly total: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly limit: Scalars['Int'];
  readonly items: ReadonlyArray<Maybe<Education>>;
};

/** [See type definition](https://app.contentful.com/spaces/y5q3314w81ij/content_types/education) */
export type Education = Entry & {
  readonly __typename?: 'Education';
  readonly sys: Sys;
  readonly linkedFrom?: Maybe<EducationLinkingCollections>;
  readonly person?: Maybe<Person>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly schoolName?: Maybe<Scalars['String']>;
  readonly schoolUrl?: Maybe<Scalars['String']>;
  readonly program?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly location?: Maybe<Scalars['String']>;
  readonly startDate?: Maybe<Scalars['DateTime']>;
  readonly endDate?: Maybe<Scalars['DateTime']>;
};


/** [See type definition](https://app.contentful.com/spaces/y5q3314w81ij/content_types/education) */
export type EducationPersonArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type EducationLinkingCollections = {
  readonly __typename?: 'EducationLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
};


export type EducationLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ResumeBlocksCollection = {
  readonly __typename?: 'ResumeBlocksCollection';
  readonly total: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly limit: Scalars['Int'];
  readonly items: ReadonlyArray<Maybe<Block>>;
};

/** [See type definition](https://app.contentful.com/spaces/y5q3314w81ij/content_types/block) */
export type Block = Entry & {
  readonly __typename?: 'Block';
  readonly sys: Sys;
  readonly linkedFrom?: Maybe<BlockLinkingCollections>;
  readonly title?: Maybe<Scalars['String']>;
  readonly content?: Maybe<BlockContent>;
};

export type BlockLinkingCollections = {
  readonly __typename?: 'BlockLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
  readonly resumeCollection?: Maybe<ResumeCollection>;
};


export type BlockLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type BlockLinkingCollectionsResumeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type BlockContent = {
  readonly __typename?: 'BlockContent';
  readonly json: Scalars['JSON'];
  readonly links: BlockContentLinks;
};


export type BlockContentLinks = {
  readonly __typename?: 'BlockContentLinks';
  readonly entries: BlockContentEntries;
  readonly assets: BlockContentAssets;
};

export type BlockContentEntries = {
  readonly __typename?: 'BlockContentEntries';
  readonly inline: ReadonlyArray<Maybe<Entry>>;
  readonly hyperlink: ReadonlyArray<Maybe<Entry>>;
  readonly block: ReadonlyArray<Maybe<Entry>>;
};

export type BlockContentAssets = {
  readonly __typename?: 'BlockContentAssets';
  readonly hyperlink: ReadonlyArray<Maybe<Asset>>;
  readonly block: ReadonlyArray<Maybe<Asset>>;
};

export type ResumeFilter = {
  readonly person?: Maybe<CfPersonNestedFilter>;
  readonly sys?: Maybe<SysFilter>;
  readonly slug_exists?: Maybe<Scalars['Boolean']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly slug_not?: Maybe<Scalars['String']>;
  readonly slug_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly slug_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly slug_contains?: Maybe<Scalars['String']>;
  readonly slug_not_contains?: Maybe<Scalars['String']>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<ResumeFilter>>>;
  readonly AND?: Maybe<ReadonlyArray<Maybe<ResumeFilter>>>;
};

export type CfPersonNestedFilter = {
  readonly sys?: Maybe<SysFilter>;
  readonly name_exists?: Maybe<Scalars['Boolean']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly name_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly email_exists?: Maybe<Scalars['Boolean']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly email_not?: Maybe<Scalars['String']>;
  readonly email_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly email_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly email_contains?: Maybe<Scalars['String']>;
  readonly email_not_contains?: Maybe<Scalars['String']>;
  readonly location_exists?: Maybe<Scalars['Boolean']>;
  readonly location?: Maybe<Scalars['String']>;
  readonly location_not?: Maybe<Scalars['String']>;
  readonly location_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly location_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly location_contains?: Maybe<Scalars['String']>;
  readonly location_not_contains?: Maybe<Scalars['String']>;
  readonly summary_exists?: Maybe<Scalars['Boolean']>;
  readonly summary?: Maybe<Scalars['String']>;
  readonly summary_not?: Maybe<Scalars['String']>;
  readonly summary_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly summary_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly summary_contains?: Maybe<Scalars['String']>;
  readonly summary_not_contains?: Maybe<Scalars['String']>;
  readonly socialMedia_contains_all?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly socialMedia_contains_some?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly socialMedia_contains_none?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<CfPersonNestedFilter>>>;
  readonly AND?: Maybe<ReadonlyArray<Maybe<CfPersonNestedFilter>>>;
};

export enum ResumeOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type BackgroundFilter = {
  readonly person?: Maybe<CfPersonNestedFilter>;
  readonly sys?: Maybe<SysFilter>;
  readonly parentName_exists?: Maybe<Scalars['Boolean']>;
  readonly parentName?: Maybe<Scalars['String']>;
  readonly parentName_not?: Maybe<Scalars['String']>;
  readonly parentName_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly parentName_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly parentName_contains?: Maybe<Scalars['String']>;
  readonly parentName_not_contains?: Maybe<Scalars['String']>;
  readonly parentUrl_exists?: Maybe<Scalars['Boolean']>;
  readonly parentUrl?: Maybe<Scalars['String']>;
  readonly parentUrl_not?: Maybe<Scalars['String']>;
  readonly parentUrl_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly parentUrl_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly parentUrl_contains?: Maybe<Scalars['String']>;
  readonly parentUrl_not_contains?: Maybe<Scalars['String']>;
  readonly title_exists?: Maybe<Scalars['Boolean']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly title_not?: Maybe<Scalars['String']>;
  readonly title_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly title_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly title_contains?: Maybe<Scalars['String']>;
  readonly title_not_contains?: Maybe<Scalars['String']>;
  readonly description_exists?: Maybe<Scalars['Boolean']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly description_not?: Maybe<Scalars['String']>;
  readonly description_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly description_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly description_contains?: Maybe<Scalars['String']>;
  readonly description_not_contains?: Maybe<Scalars['String']>;
  readonly location_exists?: Maybe<Scalars['Boolean']>;
  readonly location?: Maybe<Scalars['String']>;
  readonly location_not?: Maybe<Scalars['String']>;
  readonly location_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly location_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly location_contains?: Maybe<Scalars['String']>;
  readonly location_not_contains?: Maybe<Scalars['String']>;
  readonly startDate_exists?: Maybe<Scalars['Boolean']>;
  readonly startDate?: Maybe<Scalars['DateTime']>;
  readonly startDate_not?: Maybe<Scalars['DateTime']>;
  readonly startDate_in?: Maybe<ReadonlyArray<Maybe<Scalars['DateTime']>>>;
  readonly startDate_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['DateTime']>>>;
  readonly startDate_gt?: Maybe<Scalars['DateTime']>;
  readonly startDate_gte?: Maybe<Scalars['DateTime']>;
  readonly startDate_lt?: Maybe<Scalars['DateTime']>;
  readonly startDate_lte?: Maybe<Scalars['DateTime']>;
  readonly endDate_exists?: Maybe<Scalars['Boolean']>;
  readonly endDate?: Maybe<Scalars['DateTime']>;
  readonly endDate_not?: Maybe<Scalars['DateTime']>;
  readonly endDate_in?: Maybe<ReadonlyArray<Maybe<Scalars['DateTime']>>>;
  readonly endDate_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['DateTime']>>>;
  readonly endDate_gt?: Maybe<Scalars['DateTime']>;
  readonly endDate_gte?: Maybe<Scalars['DateTime']>;
  readonly endDate_lt?: Maybe<Scalars['DateTime']>;
  readonly endDate_lte?: Maybe<Scalars['DateTime']>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<BackgroundFilter>>>;
  readonly AND?: Maybe<ReadonlyArray<Maybe<BackgroundFilter>>>;
};

export enum BackgroundOrder {
  ParentNameAsc = 'parentName_ASC',
  ParentNameDesc = 'parentName_DESC',
  ParentUrlAsc = 'parentUrl_ASC',
  ParentUrlDesc = 'parentUrl_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type BlockFilter = {
  readonly sys?: Maybe<SysFilter>;
  readonly title_exists?: Maybe<Scalars['Boolean']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly title_not?: Maybe<Scalars['String']>;
  readonly title_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly title_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly title_contains?: Maybe<Scalars['String']>;
  readonly title_not_contains?: Maybe<Scalars['String']>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<BlockFilter>>>;
  readonly AND?: Maybe<ReadonlyArray<Maybe<BlockFilter>>>;
};

export enum BlockOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type BlockCollection = {
  readonly __typename?: 'BlockCollection';
  readonly total: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly limit: Scalars['Int'];
  readonly items: ReadonlyArray<Maybe<Block>>;
};

export type EmploymentFilter = {
  readonly person?: Maybe<CfPersonNestedFilter>;
  readonly sys?: Maybe<SysFilter>;
  readonly companyName_exists?: Maybe<Scalars['Boolean']>;
  readonly companyName?: Maybe<Scalars['String']>;
  readonly companyName_not?: Maybe<Scalars['String']>;
  readonly companyName_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly companyName_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly companyName_contains?: Maybe<Scalars['String']>;
  readonly companyName_not_contains?: Maybe<Scalars['String']>;
  readonly companyUrl_exists?: Maybe<Scalars['Boolean']>;
  readonly companyUrl?: Maybe<Scalars['String']>;
  readonly companyUrl_not?: Maybe<Scalars['String']>;
  readonly companyUrl_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly companyUrl_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly companyUrl_contains?: Maybe<Scalars['String']>;
  readonly companyUrl_not_contains?: Maybe<Scalars['String']>;
  readonly title_exists?: Maybe<Scalars['Boolean']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly title_not?: Maybe<Scalars['String']>;
  readonly title_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly title_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly title_contains?: Maybe<Scalars['String']>;
  readonly title_not_contains?: Maybe<Scalars['String']>;
  readonly description_exists?: Maybe<Scalars['Boolean']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly description_not?: Maybe<Scalars['String']>;
  readonly description_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly description_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly description_contains?: Maybe<Scalars['String']>;
  readonly description_not_contains?: Maybe<Scalars['String']>;
  readonly location_exists?: Maybe<Scalars['Boolean']>;
  readonly location?: Maybe<Scalars['String']>;
  readonly location_not?: Maybe<Scalars['String']>;
  readonly location_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly location_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly location_contains?: Maybe<Scalars['String']>;
  readonly location_not_contains?: Maybe<Scalars['String']>;
  readonly startDate_exists?: Maybe<Scalars['Boolean']>;
  readonly startDate?: Maybe<Scalars['DateTime']>;
  readonly startDate_not?: Maybe<Scalars['DateTime']>;
  readonly startDate_in?: Maybe<ReadonlyArray<Maybe<Scalars['DateTime']>>>;
  readonly startDate_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['DateTime']>>>;
  readonly startDate_gt?: Maybe<Scalars['DateTime']>;
  readonly startDate_gte?: Maybe<Scalars['DateTime']>;
  readonly startDate_lt?: Maybe<Scalars['DateTime']>;
  readonly startDate_lte?: Maybe<Scalars['DateTime']>;
  readonly endDate_exists?: Maybe<Scalars['Boolean']>;
  readonly endDate?: Maybe<Scalars['DateTime']>;
  readonly endDate_not?: Maybe<Scalars['DateTime']>;
  readonly endDate_in?: Maybe<ReadonlyArray<Maybe<Scalars['DateTime']>>>;
  readonly endDate_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['DateTime']>>>;
  readonly endDate_gt?: Maybe<Scalars['DateTime']>;
  readonly endDate_gte?: Maybe<Scalars['DateTime']>;
  readonly endDate_lt?: Maybe<Scalars['DateTime']>;
  readonly endDate_lte?: Maybe<Scalars['DateTime']>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<EmploymentFilter>>>;
  readonly AND?: Maybe<ReadonlyArray<Maybe<EmploymentFilter>>>;
};

export enum EmploymentOrder {
  CompanyNameAsc = 'companyName_ASC',
  CompanyNameDesc = 'companyName_DESC',
  CompanyUrlAsc = 'companyUrl_ASC',
  CompanyUrlDesc = 'companyUrl_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type EducationFilter = {
  readonly person?: Maybe<CfPersonNestedFilter>;
  readonly sys?: Maybe<SysFilter>;
  readonly slug_exists?: Maybe<Scalars['Boolean']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly slug_not?: Maybe<Scalars['String']>;
  readonly slug_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly slug_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly slug_contains?: Maybe<Scalars['String']>;
  readonly slug_not_contains?: Maybe<Scalars['String']>;
  readonly schoolName_exists?: Maybe<Scalars['Boolean']>;
  readonly schoolName?: Maybe<Scalars['String']>;
  readonly schoolName_not?: Maybe<Scalars['String']>;
  readonly schoolName_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly schoolName_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly schoolName_contains?: Maybe<Scalars['String']>;
  readonly schoolName_not_contains?: Maybe<Scalars['String']>;
  readonly schoolUrl_exists?: Maybe<Scalars['Boolean']>;
  readonly schoolUrl?: Maybe<Scalars['String']>;
  readonly schoolUrl_not?: Maybe<Scalars['String']>;
  readonly schoolUrl_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly schoolUrl_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly schoolUrl_contains?: Maybe<Scalars['String']>;
  readonly schoolUrl_not_contains?: Maybe<Scalars['String']>;
  readonly program_exists?: Maybe<Scalars['Boolean']>;
  readonly program?: Maybe<Scalars['String']>;
  readonly program_not?: Maybe<Scalars['String']>;
  readonly program_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly program_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly program_contains?: Maybe<Scalars['String']>;
  readonly program_not_contains?: Maybe<Scalars['String']>;
  readonly description_exists?: Maybe<Scalars['Boolean']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly description_not?: Maybe<Scalars['String']>;
  readonly description_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly description_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly description_contains?: Maybe<Scalars['String']>;
  readonly description_not_contains?: Maybe<Scalars['String']>;
  readonly location_exists?: Maybe<Scalars['Boolean']>;
  readonly location?: Maybe<Scalars['String']>;
  readonly location_not?: Maybe<Scalars['String']>;
  readonly location_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly location_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly location_contains?: Maybe<Scalars['String']>;
  readonly location_not_contains?: Maybe<Scalars['String']>;
  readonly startDate_exists?: Maybe<Scalars['Boolean']>;
  readonly startDate?: Maybe<Scalars['DateTime']>;
  readonly startDate_not?: Maybe<Scalars['DateTime']>;
  readonly startDate_in?: Maybe<ReadonlyArray<Maybe<Scalars['DateTime']>>>;
  readonly startDate_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['DateTime']>>>;
  readonly startDate_gt?: Maybe<Scalars['DateTime']>;
  readonly startDate_gte?: Maybe<Scalars['DateTime']>;
  readonly startDate_lt?: Maybe<Scalars['DateTime']>;
  readonly startDate_lte?: Maybe<Scalars['DateTime']>;
  readonly endDate_exists?: Maybe<Scalars['Boolean']>;
  readonly endDate?: Maybe<Scalars['DateTime']>;
  readonly endDate_not?: Maybe<Scalars['DateTime']>;
  readonly endDate_in?: Maybe<ReadonlyArray<Maybe<Scalars['DateTime']>>>;
  readonly endDate_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['DateTime']>>>;
  readonly endDate_gt?: Maybe<Scalars['DateTime']>;
  readonly endDate_gte?: Maybe<Scalars['DateTime']>;
  readonly endDate_lt?: Maybe<Scalars['DateTime']>;
  readonly endDate_lte?: Maybe<Scalars['DateTime']>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<EducationFilter>>>;
  readonly AND?: Maybe<ReadonlyArray<Maybe<EducationFilter>>>;
};

export enum EducationOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SchoolNameAsc = 'schoolName_ASC',
  SchoolNameDesc = 'schoolName_DESC',
  SchoolUrlAsc = 'schoolUrl_ASC',
  SchoolUrlDesc = 'schoolUrl_DESC',
  ProgramAsc = 'program_ASC',
  ProgramDesc = 'program_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PersonFilter = {
  readonly sys?: Maybe<SysFilter>;
  readonly name_exists?: Maybe<Scalars['Boolean']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly name_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly email_exists?: Maybe<Scalars['Boolean']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly email_not?: Maybe<Scalars['String']>;
  readonly email_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly email_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly email_contains?: Maybe<Scalars['String']>;
  readonly email_not_contains?: Maybe<Scalars['String']>;
  readonly location_exists?: Maybe<Scalars['Boolean']>;
  readonly location?: Maybe<Scalars['String']>;
  readonly location_not?: Maybe<Scalars['String']>;
  readonly location_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly location_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly location_contains?: Maybe<Scalars['String']>;
  readonly location_not_contains?: Maybe<Scalars['String']>;
  readonly summary_exists?: Maybe<Scalars['Boolean']>;
  readonly summary?: Maybe<Scalars['String']>;
  readonly summary_not?: Maybe<Scalars['String']>;
  readonly summary_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly summary_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly summary_contains?: Maybe<Scalars['String']>;
  readonly summary_not_contains?: Maybe<Scalars['String']>;
  readonly socialMedia_contains_all?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly socialMedia_contains_some?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly socialMedia_contains_none?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<PersonFilter>>>;
  readonly AND?: Maybe<ReadonlyArray<Maybe<PersonFilter>>>;
};

export enum PersonOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PersonCollection = {
  readonly __typename?: 'PersonCollection';
  readonly total: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly limit: Scalars['Int'];
  readonly items: ReadonlyArray<Maybe<Person>>;
};

export type ResumeQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  person?: Maybe<Scalars['String']>;
}>;


export type ResumeQuery = (
  { readonly __typename?: 'Query' }
  & { readonly resumeCollection?: Maybe<(
    { readonly __typename?: 'ResumeCollection' }
    & { readonly items: ReadonlyArray<Maybe<(
      { readonly __typename?: 'Resume' }
      & { readonly sys: (
        { readonly __typename?: 'Sys' }
        & Pick<Sys, 'id'>
      ), readonly person?: Maybe<(
        { readonly __typename?: 'Person' }
        & Pick<Person, 'name' | 'email' | 'location' | 'summary' | 'socialMedia'>
      )>, readonly blocksCollection?: Maybe<(
        { readonly __typename?: 'ResumeBlocksCollection' }
        & { readonly items: ReadonlyArray<Maybe<(
          { readonly __typename?: 'Block' }
          & Pick<Block, 'title'>
          & { readonly content?: Maybe<(
            { readonly __typename?: 'BlockContent' }
            & Pick<BlockContent, 'json'>
            & { readonly links: (
              { readonly __typename?: 'BlockContentLinks' }
              & { readonly entries: (
                { readonly __typename?: 'BlockContentEntries' }
                & { readonly block: ReadonlyArray<Maybe<(
                  { readonly __typename?: 'Resume' }
                  & { type: 'Resume' }
                ) | (
                  { readonly __typename?: 'Person' }
                  & { type: 'Person' }
                ) | (
                  { readonly __typename?: 'Background' }
                  & { type: 'Background' }
                ) | (
                  { readonly __typename?: 'Employment' }
                  & Pick<Employment, 'companyName' | 'companyUrl' | 'title' | 'description' | 'location' | 'startDate' | 'endDate'>
                  & { type: 'Employment' }
                ) | (
                  { readonly __typename?: 'Education' }
                  & Pick<Education, 'schoolName' | 'schoolUrl' | 'program' | 'description' | 'location' | 'startDate' | 'endDate'>
                  & { type: 'Education' }
                ) | (
                  { readonly __typename?: 'Block' }
                  & { type: 'Block' }
                )>> }
              ) }
            ) }
          )> }
        )>> }
      )> }
    )>> }
  )> }
);


declare module '*/resume.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const Resume: DocumentNode;

  export default defaultDocument;
}
    

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "INTERFACE",
        "name": "Entry",
        "possibleTypes": [
          {
            "name": "Resume"
          },
          {
            "name": "Person"
          },
          {
            "name": "Background"
          },
          {
            "name": "Employment"
          },
          {
            "name": "Education"
          },
          {
            "name": "Block"
          }
        ]
      }
    ]
  }
};
      export default result;
    