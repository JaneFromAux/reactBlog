import BlogItems from '../components/BlogItems';
import data from '../data';

const Blog = () => {
    return (<div className="itemContainer">
        {data.map((ele) =>
            <BlogItems
                key={ele.id}
                id={ele.id}
                img_url={ele.img_url}
                title={ele.title}
                data={data}
            />
        )}
    </div>);
}

export default Blog;