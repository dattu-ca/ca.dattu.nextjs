interface iLink {
    href: string;
    label: string;
    visible: boolean;
}
interface iHeaderNavigation {
    links: Array<iLink>
}

export type {
    iHeaderNavigation
}