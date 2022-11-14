type tLinkTarget = "_blank" | "_self"

interface iLink {
    href: string;
    label: string;
    visible: boolean;
    sequence?: number;
    target: tLinkTarget;
}

export type {
    iLink,
    tLinkTarget
};