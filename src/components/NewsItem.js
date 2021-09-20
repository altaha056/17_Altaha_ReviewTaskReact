import moment from "moment";

const NewsItem = ({
  author,
  content,
  description,
  image,
  publishedAt,
  source,
  title,
}) => {
  const newContent = content
    ? content.replace(/\[.*?\]/g, "").replace("…", "")
    : content;
  return (
    <>
      <div className="col m-4">
        <div className="card w-100">
          <img src={image} className="card-img-top " />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="fw-light">
              {description} {newContent}
            </p>
            <p>{author}</p>
            <a
              href={source}
              className="btn btn-outline-light py-2 px-4"
              target="_blank"
            >
              Baca Selengkapnya
            </a>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              {moment(publishedAt).format("LL")}
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
