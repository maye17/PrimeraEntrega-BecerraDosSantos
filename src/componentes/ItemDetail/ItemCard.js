import React from "react";
import './ItemDetail.css'


const ItemDetail = ({data})=> {
    const prince_sign='$';
    return (
        <div>
             <section className="cards">
              <div className="cards__container">
                <article className="cards__container-banner">
                  <img src={data.image}/>
                  <h2>{data.name}</h2>
                  <p>{data.description}</p>
                  <p>{prince_sign} {data.price}</p>
                  <a href="./pages/servicios.html">Saber más</a>
                </article>
              </div>
            </section>
        </div>
    )
}

export default ItemDetail;