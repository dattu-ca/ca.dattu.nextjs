import {GetStaticProps} from "next";
import {
    Box,
    Chip,
    Container,
    Grid, Link,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {fetchSiteData} from "~src/services";
import BannerComponent from "~src/components/Banner";


const ProgrammerPage = () => {
    return (
        <Box component="main">
            <BannerComponent pretitle="HELLO WORLD!!!"
                             title={"I am a Web Developer"}
                             bannerBg="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80">
                <Typography variant="subtitle1" component="p">
                    I am a passionate and hard working web developer with 15+ years of experience.
                    <br />
                    I am a front-end focused full-stack developer.
                    <br />
                    I specalize in <code>React/JavaScript</code>, <code>HTML</code> and <code>CSS</code>.
                </Typography>
                <br />
                <br />
                <Typography variant="h6" component="p">
                    And... I am up for any challenge! So, bring me your problems.
                </Typography>
            </BannerComponent>
            <Box pb={5} />
            <Container maxWidth="lg" component="section">
                <Typography variant="h3" component="h3">Experience:</Typography>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h5" component="h4"
                                            sx={{whiteSpace: ["break-spaces", "break-spaces", "nowrap", "nowrap"]}}>
                                    Front-End Development
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Grid container spacing={1}>
                                    {
                                        [
                                            "HTML (4/5)", "CSS (2/3)",
                                            "JavaScript/JQuery", "Typescript", "Lodash", "RxJs",
                                            "React", "React-Redux", "Redux-Saga", "Axios",
                                            "React Testing", "Jest/Enzyme", "Lerna", "Storbybook", "GraphQL", "NextJs",
                                            "Contentful headless CMS",
                                            "SASS", "Less", "Stylus",
                                            "Bootstrap", "Angular Material", "Material-UI",
                                            "AngularJS", "Angular (2/4/6/7/8)", "NgRx", "Kendo UI"
                                        ]
                                            .map(label => <Grid item key={label}><Chip label={label}
                                                                                       variant="outlined" /></Grid>)
                                    }
                                </Grid>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h5" component="h4"
                                            sx={{whiteSpace: ["break-spaces", "break-spaces", "nowrap", "nowrap"]}}>
                                    Back-End Development
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Grid container spacing={1}>
                                    {
                                        [
                                            "C# .Net", "C# Script", "VB", "Classic ASP",
                                            "Node.js", "Express.js", "GraphQL",
                                            "Azure Functions", "Azure Service Bus", "Azure Event Grids", "Azure Apps",
                                            "Blob Storage", "Media Storage", "Elastic Pool", "Azure SQL", "Rabbit MQ",
                                            "Firebase"
                                        ]
                                            .map(label => <Grid item key={label}><Chip label={label}
                                                                                       variant="outlined" /></Grid>)
                                    }
                                </Grid>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h5" component="h4"
                                            sx={{whiteSpace: ["break-spaces", "break-spaces", "nowrap", "nowrap"]}}>
                                    Database Development
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Grid container spacing={1}>
                                    {
                                        [
                                            "MSSQL", "MySQL", "MongoDB",
                                            "Oracle", "Cognos", "Redis Cache",
                                            "Database architecting, scripting, and reports"
                                        ]
                                            .map(label => <Grid item key={label}><Chip label={label}
                                                                                       variant="outlined" /></Grid>)
                                    }
                                </Grid>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h5" component="h4"
                                            sx={{whiteSpace: ["break-spaces", "break-spaces", "nowrap", "nowrap"]}}>
                                    Workflow & Delivery
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Grid container spacing={1}>
                                    {
                                        [
                                            "Agile",
                                            "Web app Architect",
                                            "MVC, Web services, Web API",
                                            "oAuth2", "JWT", "OpenID",
                                            "Desktop first and Mobile first development",
                                            "Single page web app", "Multiple pages web app",
                                            "UX and Usability Testing",
                                            "SEO",
                                            "Standards Compliant", "W3C Compliant", "WCAG 2.0 Compliant",
                                            "Cross-browser, cross-platform, and cross-device compatibility",
                                            "OWASP Security principles",
                                            "Visual Studio Project Template",
                                            "React Libraries"
                                        ]
                                            .map(label => <Grid item key={label}><Chip label={label}
                                                                                       variant="outlined" /></Grid>)
                                    }
                                </Grid>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h5" component="h4"
                                            sx={{whiteSpace: ["break-spaces", "break-spaces", "nowrap", "nowrap"]}}>
                                    Apps & Tools
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Grid container spacing={1}>
                                    {
                                        [
                                            "NPM", "Bower", "Grunt", "Gulp", "Webpack", "Babel",
                                            "Git", "Team Foundation", "SVN", "Vault Professional",
                                            "Azure Portal", "Application Insights",
                                            "JIRA, Basecamp", "Jenkins", "Bitbucket",
                                            "Adobe Suite (PhotoShop, Illustrator, InDesign)", "Paint .Net", "GIMP2"
                                        ]
                                            .map(label => <Grid item key={label}><Chip label={label}
                                                                                       variant="outlined" /></Grid>)
                                    }
                                </Grid>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Container>
            <Box pb={5} />
            <Container maxWidth="lg" component="section">
                <Typography variant="h3" component="h3">Employment:</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h5" component="h4" sx={{whiteSpace: "nowrap"}}>
                                    Senior Developer
                                </Typography>
                                <Typography variant="h5" component="h5" sx={{whiteSpace: "nowrap"}}>
                                    <Link component="a"
                                          href="https://kevgroup.com/"
                                          target="_blank">
                                        KEV Group
                                    </Link>
                                </Typography>
                            </TableCell>
                            <TableCell align="right" valign="bottom" sx={{verticalAlign: "bottom"}}>
                                <Typography variant="subtitle1" component="h5" sx={{whiteSpace: "nowrap"}}>
                                    Apr. 2022 - Present
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={2}>
                                <ul>
                                    <li>KEV Group’s main product is www.schoolcashonline.com, and
                                        other
                                        applications
                                        complementing it.
                                    </li>
                                    <li>Lead developer for the KEV Group’s React library project
                                        <ul>
                                            <li>Develop several libraries as Lerna packages and
                                                publishing them as
                                                Azure
                                                artifacts.
                                            </li>
                                            <li>Write extensive documentation for each library as
                                                stories with
                                                Storybook.js.
                                            </li>
                                            <li>Coordinate with various teams and their business
                                                owners and
                                                create/assign
                                                tasks.
                                            </li>
                                            <li>Work with the various development teams and the
                                                design team to
                                                ensure
                                                that
                                                we cover all current and foreseeable scenarios.
                                            </li>
                                            <li>Technology: HTML5, SASS, React, Material-UI, Lerna,
                                                Storybook.js,
                                                Webpack/Rollup, Babel, React-testing, Jest, Enzyme
                                            </li>
                                        </ul>
                                    </li>
                                    <li>Lead front end developer for a new KEV Forms web app.
                                        <ul>
                                            <li>This application will be used for creating forms; an
                                                in-house
                                                replacement for
                                                formstack.com.
                                            </li>
                                            <li>Coordinated with the product manager and
                                                created/assigned
                                                tasks.
                                            </li>
                                            <li>Review pull requests and create release code for
                                                deployment to
                                                various
                                                environments.
                                            </li>
                                            <li>Implemented drag and drop to add and re-order form
                                                fields and
                                                sections.
                                            </li>
                                            <li>Provided a form preview, with options to view it as
                                                seen on
                                                different
                                                screen
                                                sizes.
                                            </li>
                                            <li>Connected with various API endpoints to aggregate
                                                related
                                                data.
                                            </li>
                                            <li>Collaborated with the UI/UX designer to ensure the
                                                new brand
                                                identity
                                                and UX
                                                consistency.
                                            </li>
                                            <li>Created a Node server for validating the forms
                                                submission
                                                data.
                                            </li>
                                            <li>Technology: HTML5, SASS, React, React-Redux,
                                                Material-UI, Node,
                                                React
                                                beautiful
                                                drag-and-drop, Axios, C# .Net/.Net Core, MSSQL,
                                                Mongo, Webpack,
                                                Babel.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Lead front end developer for a new KEV Group’s Catalog web app.
                                        <ul>
                                            <li>Coordinated with the product manager and
                                                created/assigned
                                                tasks.
                                            </li>
                                            <li>Review pull requests and create release code for
                                                deployment to
                                                various
                                                environments.
                                            </li>
                                            <li>Created a setup code for adding new features and
                                                widgets easily
                                                and
                                                efficiently.
                                            </li>
                                            <li>Collaborated with the UI/UX designer to ensure the
                                                new brand
                                                identity
                                                and UX
                                                consistency.
                                            </li>
                                            <li>Technology: HTML5, SASS, React, React-Redux,
                                                Material-UI, React
                                                beautiful
                                                drag-and-drop, Axios, C# .Net/.Net Core, MSSQL,
                                                Mongo, Webpack,
                                                Babel.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>Refactored the user interface and user experience for the
                                        KEV Group’s
                                        Collections
                                        web app.
                                        <ul>
                                            <li>This application will be used by district school
                                                board personnel
                                                to
                                                school
                                                personnel to create new products so that students
                                                (and their
                                                parents)
                                                can pay for
                                                school related items and activities online.
                                            </li>
                                            <li>Overhauled the user interface of an almost finished
                                                application,
                                                to
                                                ensure a
                                                consistent UX.
                                            </li>
                                            <li>Collaborated with the UI/UX designer to ensure the
                                                new brand
                                                identity
                                                and UX
                                                consistency.
                                            </li>
                                            <li>Technology: HTML5, SASS, React, React-Redux,
                                                Material-UI,
                                                material-data-tables,
                                                Webpack, Babel.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>Involved in all the React projects, added tests/test-configs
                                        with
                                        React-testing,
                                        Jest and Enzyme.
                                    </li>
                                    <li>Coordinate with the Architect to improve the UI/API flow,
                                        and occasionally
                                        help
                                        with the backend/database architecture.
                                    </li>
                                    <li>Mentored junior developers and helped onboarding
                                        remotely.
                                    </li>
                                    <li>Proven track record of being the last line of defense when
                                        facing
                                        seemingly
                                        unsolvable challenges with React/JavaScript and CSS/HTML in
                                        the company.
                                    </li>
                                </ul>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Container>
            <Box mb={5} />

        </Box>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const data = await fetchSiteData();
    return {
        props: {
            siteData: data
        }
    };
};

export default ProgrammerPage;
