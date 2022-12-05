import {Options} from "@contentful/rich-text-react-renderer";
import React, {ReactNode} from "react";
import {Block, BLOCKS, Inline, MARKS} from "@contentful/rich-text-types";
import {Box, Table, TableBody, TableCell, TableRow, Typography} from "@mui/material";


export const renderOptions: Options = {
    renderText: text => {
        return text.split("\n").reduce((children: ReactNode[], textSegment: string, index: number) => {
            return [...children, index > 0 && <br key={index} />, textSegment];
        }, []);
    },
    renderMark: {
        [MARKS.BOLD]: (text) => {
            return <strong>{text}</strong>;
        },
        [MARKS.ITALIC]: (text) => {
            return <em>{text}</em>;
        },
        [MARKS.UNDERLINE]: (text) => {
            return <u>{text}</u>;
        },
        [MARKS.CODE]: (text) => {
            return <code>{text}</code>;
        }
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => {
            const arr = React.Children.toArray(children);
            if (String(arr[0]).trim() === "") {
                return <Box mb={2} />;
            }
            return <Typography>{arr}</Typography>;
        },
        [BLOCKS.HEADING_1]: (node: Block | Inline, children: ReactNode) => <Typography variant="h1"
                                                                                       component="h1">{children}</Typography>,
        [BLOCKS.HEADING_2]: (node: Block | Inline, children: ReactNode) => <Typography variant="h2"
                                                                                       component="h2">{children}</Typography>,
        [BLOCKS.HEADING_3]: (node: Block | Inline, children: ReactNode) => <Typography variant="h3"
                                                                                       component="h3">{children}</Typography>,
        [BLOCKS.HEADING_4]: (node: Block | Inline, children: ReactNode) => <Typography variant="h4"
                                                                                       component="h4">{children}</Typography>,
        [BLOCKS.HEADING_5]: (node: Block | Inline, children: ReactNode) => <Typography variant="h5"
                                                                                       component="h5">{children}</Typography>,
        [BLOCKS.HEADING_6]: (node: Block | Inline, children: ReactNode) => <Typography variant="h6"
                                                                                       component="h6">{children}</Typography>,
        [BLOCKS.TABLE]: (node: Block | Inline, children: ReactNode) => <Table><TableBody>{children}</TableBody></Table>,
        [BLOCKS.TABLE_ROW]: (node: Block | Inline, children: ReactNode) => <TableRow>{children}</TableRow>,
        [BLOCKS.TABLE_CELL]: (node: Block | Inline, children: ReactNode) => <TableCell>{children}</TableCell>,
        [BLOCKS.TABLE_HEADER_CELL]: (node: Block | Inline, children: ReactNode) =>
            <TableCell component="th"><strong>{children}</strong></TableCell>
    }
};