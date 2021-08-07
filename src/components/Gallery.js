import React from 'react'
import { galleryImages } from '../store/db'
function Gallery() {
    const GalleryList = () =>{
        return(
            <>{
            galleryImages.map((image,key) => {
                return(
                    <div key={key} className="col-lg-4 col-md-6">
                        <div className="gallery-item wow fadeInUp">
                        <a href={image} className="gallery-popup">
                            <img src={image} alt=""/>
                        </a>
                        </div>
                    </div>
                )
            })}
            </>
        )
    }
    return (
        <>
        <section id="gallery">
            <div className="container-fluid">
                <div className="section-header">
                <h3 className="section-title">Gallery</h3>
                <span className="section-divider"></span>
                <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
                <div className="row no-gutters">
                    <GalleryList />
                </div>
            </div>
        </section>
        </>
    )
}

export default Gallery
