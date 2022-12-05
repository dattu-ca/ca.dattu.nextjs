export interface iLinks {
    id: string;
    sequence: number;
    url: string;
    label: string;
    target: string;
    visible: boolean;
}

export interface iNavigationWidget {
    slug: string,
    links: iLinks[]
}

export const morphNavigationWidget = (raw: any): iNavigationWidget | undefined => {
    if (raw) {
        const linksJson = JSON.parse(raw.links);
        const links: iLinks[] = Array.isArray(linksJson) ? linksJson.map((link, index) => ({
            id: link.id,
            sequence: link.sequence || index,
            url: link.url,
            label: link.label,
            target: link.target || "_self",
            visible: link.visible
        })) : [];
        return {
            slug: raw.slug,
            links: links
        };
    }
    return undefined;
};
