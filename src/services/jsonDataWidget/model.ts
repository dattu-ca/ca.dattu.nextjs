export interface iJSONDataWidget {
    slug: string,
    data: Record<string, any>
}

export const morphJSONDataWidget = (raw: any): iJSONDataWidget | undefined => {
    if (raw) {
        return {
            slug: raw.slug,
            data: JSON.parse(raw?.data)
        };
    }
    return undefined;
};
