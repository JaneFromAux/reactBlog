import { useLocation, useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();// nutzt die variable aus dem Pfad /item/:id bzw item{props.id} -- 
    const location = useLocation();// nimmt den state, der auf dem Link (Pfad) übergeben wird
    const data = location.state;
    const dataFilter = data.filter((ele) => ele.id === id)[0];// ele steht bei filter() für jedes Objekt im Array -- filter() gibt immer ein Array zurück! -- mit [0] wird in diesem Fall das einzige Objekt wiedergeben 

    console.log(dataFilter);
    return (
        <div className="itemDetail">
            <img src={dataFilter.img_url} alt="" />
            <h2>{dataFilter.title}</h2>
            <h6>Geschrieben von : {dataFilter.author}, veröffentlicht am {dataFilter.published_date}</h6>
            <p>{dataFilter.description}</p>
        </div>
    );
}

export default BlogDetails;