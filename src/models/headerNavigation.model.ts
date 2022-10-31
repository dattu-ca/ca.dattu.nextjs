interface iLink {
    href: string;
    label: string;
    visible: boolean;
}

interface iLogo {
    alt: string;
}

interface iSearch {
    placeholder?: string;
    ariaLabel?: string;
}


interface iHeaderNavigation {
    logo: iLogo;
    links: Array<iLink>;
    search?: iSearch;
}

export type {
    iHeaderNavigation
};