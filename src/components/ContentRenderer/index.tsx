import {Document} from "@contentful/rich-text-types";


interface iProps {
    content: Document;
}

const ContentRenderer = ({content}: iProps) => {
    return <div>
        <pre>{JSON.stringify(content, null, 2)}</pre>
    </div>;
};

export default ContentRenderer;