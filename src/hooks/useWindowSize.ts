import {useState, useEffect} from "react";

export interface iSize {
    width: number | undefined;
    height: number | undefined;
}

export function useWindowSize(): iSize {
    const [windowSize, setWindowSize] = useState<iSize>({
        width: undefined,
        height: undefined
    });
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener("resize", handleResize);

        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}