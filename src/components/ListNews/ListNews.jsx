import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./ListNews.scss";

const News = () => {
  const { news, getNews } = useContext(GlobalContext);

  useEffect(() => {
    getNews();
  }, []);

  if(news.length <= 0){
    return <p>Cargando...</p>
  }

  return <div>{news.map(notice=>{
    return (
      <div key={notice.id} className="card">
      <div className="news">
          <span>{notice.title}</span>
          <p>{notice.description}</p>
      </div>
      </div>
    )
  })}</div>;
};

export default News;