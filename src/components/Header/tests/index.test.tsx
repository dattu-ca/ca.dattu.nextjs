import {render, screen, cleanup, fireEvent} from "@testing-library/react";

import "@testing-library/jest-dom";
import "~src/utils/tests/createMatchMedia";
import {createMatchMedia} from "~src/utils/tests/createMatchMedia";
import {headerNavigationMock} from "~src/services/mock/headerNavigation.mock";

import HeaderComponent from "../";


describe("HeaderComponent", () => {
    describe("Desktop", () => {
        beforeAll(() => {
            // TODO: Make this work in "~src/utils/tests/createMatchMedia"
            // @ts-ignore
            window.matchMedia = createMatchMedia(window.innerWidth);
        });
        afterAll(() => {
            cleanup();
        });
        it("renders the logo", () => {
            render(<HeaderComponent headerNavigation={headerNavigationMock.get}/>);
            expect(screen.getByAltText("dattu.ca logo")).toBeInTheDocument();
        });
        it("renders the links", () => {
            render(<HeaderComponent headerNavigation={headerNavigationMock.get}/>);
            expect(screen.getByRole("link", {
                name: /Home/i
            })).toBeInTheDocument();
            expect(screen.getByRole("link", {
                name: /About/i
            })).toBeInTheDocument();
        });
        it("renders the search box", () => {
            render(<HeaderComponent headerNavigation={headerNavigationMock.get}/>);
            const input = screen.getByPlaceholderText("Search...");
            expect(input).toBeInTheDocument();
        });
    });
    describe("Mobile", () => {
        beforeAll(() => {
            // TODO: Make this work in "~src/utils/tests/createMatchMedia"
            // @ts-ignore
            window.matchMedia = createMatchMedia(300);
        });
        afterAll(() => {
            cleanup();
        });
        it("renders the logo", () => {
            render(<HeaderComponent headerNavigation={headerNavigationMock.get}/>);
            expect(screen.getByAltText("dattu.ca logo")).toBeInTheDocument();
        });

        it("renders the links ONLY on menu-appbar click", () => {
            render(<HeaderComponent headerNavigation={headerNavigationMock.get}/>);
            expect(screen.queryByRole("link", {
                name: /Home/i
            })).not.toBeInTheDocument();
            expect(screen.queryByRole("link", {
                name: /About/i
            })).not.toBeInTheDocument();

            const button = screen.getByTestId("btn-open-navigation");
            expect(button).toBeInTheDocument();

            fireEvent(button, new MouseEvent("click", {
                bubbles: true,
                cancelable: true
            }));

            expect(screen.getByRole("link", {
                name: /Home/i
            })).toBeInTheDocument();
            expect(screen.getByRole("link", {
                name: /Home/i
            })).toBeVisible();
            expect(screen.getByRole("link", {
                name: /About/i
            })).toBeInTheDocument();
        });

        it("renders the search box", () => {
            render(<HeaderComponent headerNavigation={headerNavigationMock.get}/>);
            const input = screen.getByPlaceholderText("Search...");
            expect(input).toBeInTheDocument();
        });
    });
});