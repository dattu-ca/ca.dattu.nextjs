// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IContentWidgetFields {
  /** Friendly Name */
  friendlyName?: string | undefined;

  /** Slug */
  slug?: string | undefined;

  /** Title */
  title?: string | undefined;

  /** Content */
  content?: Document | undefined;
}

/** This is the widget with a collection of actual content */

export interface IContentWidget extends Entry<IContentWidgetFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "contentWidget";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ICoverFields {
  /** Friendly Name */
  friendlyName?: string | undefined;

  /** Title */
  title?: string | undefined;

  /** Slug */
  slug: string;

  /** Content */
  content?: Document | undefined;
}

/** This content model is a collection of widgets.
This will be queried by external applications. */

export interface ICover extends Entry<ICoverFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "cover";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IExperienceWidgetFields {
  /** Friendly Name */
  friendlyName: string;

  /** Slug */
  slug?: string | undefined;

  /** Title */
  title?: string | undefined;

  /** Experiences List */
  experiencesList?: string[] | undefined;
}

/** This is the experience widget.
It has a title, and a comma separate list of values. */

export interface IExperienceWidget extends Entry<IExperienceWidgetFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "experienceWidget";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IJsonDataWidgetFields {
  /** Friendly Name */
  friendlyName?: string | undefined;

  /** Slug */
  slug?: string | undefined;

  /** Name */
  name: string;

  /** Data */
  data?: string | undefined;
}

/** JSON Object */

export interface IJsonDataWidget extends Entry<IJsonDataWidgetFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "jsonDataWidget";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface INavigationWidgetFields {
  /** Friendly Name */
  friendlyName?: string | undefined;

  /** Slug */
  slug?: string | undefined;

  /** Name */
  name: string;

  /** Links */
  links?: string | undefined;
}

/** The list of navigation links. */

export interface INavigationWidget extends Entry<INavigationWidgetFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "navigationWidget";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageFields {
  /** Friendly Name */
  friendlyName?: string | undefined;

  /** Pretitle */
  pretitle?: string | undefined;

  /** Title */
  title: string;

  /** Slug */
  slug?: string | undefined;

  /** Subtitle */
  subtitle?: string | undefined;

  /** Banners */
  banners?: Asset[] | undefined;

  /** BannerContent */
  bannerContent?: Document | undefined;

  /** Content */
  content?: Document | undefined;

  /** Meta Title */
  metaTitle?: string | undefined;

  /** Meta Description */
  metaDescription?: string | undefined;
}

/** Static Pages */

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "page";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IYouTubeWidgetFields {
  /** Friendly Name */
  friendlyName?: string | undefined;

  /** Slug */
  slug?: string | undefined;

  /** Youtube Link */
  link?: string | undefined;

  /** Name */
  name?: string | undefined;

  /** Description */
  description?: Document | undefined;
}

/** Contains YouTube video data */

export interface IYouTubeWidget extends Entry<IYouTubeWidgetFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "youTubeWidget";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "contentWidget"
  | "cover"
  | "experienceWidget"
  | "jsonDataWidget"
  | "navigationWidget"
  | "page"
  | "youTubeWidget";

export type IEntry =
  | IContentWidget
  | ICover
  | IExperienceWidget
  | IJsonDataWidget
  | INavigationWidget
  | IPage
  | IYouTubeWidget;

export type LOCALE_CODE = "en-CA";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-CA";
