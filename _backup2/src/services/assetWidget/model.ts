export interface iAssetWidget {
    slug: string,
    name: string,
    description: string | null,
    asset: {
        url: string;
        fileName: string;
        description: string;
    }

}

export const morphAssetWidget = (raw: any): iAssetWidget | undefined => {
    if (raw) {
        return {
            slug: raw.slug,
            name: raw.name,
            description: raw.description,
            asset: {
                url: raw.asset.url,
                fileName: raw.asset.fileName,
                description: raw.asset.description
            }
        };
    }
    return undefined;
};
