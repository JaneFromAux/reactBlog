import { Link } from "react-router-dom";

const BlogItems = (props) => {
    return (
        <div className="itemCard">
            <img src={props.img_url} alt="" />
            <h2>{props.title}</h2>
            <Link to={`/item/${props.id}`} state={props.data}>Read more</Link>
        </div>
    );
}

export default BlogItems;