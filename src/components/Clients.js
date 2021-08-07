import React from 'react'
import { clientData } from '../store/db'

function Clients() {
    const ClientList = () => {
        return(
            <>{
            clientData.map((client,key) => {
                return(
                <div className="col-md-2">
                <img src={client} alt="" />
            </div>
                );
            })}
            </>
        )
    }
    return (
        <>
        <section id="clients">
            <div className="container">
                <div className="row wow fadeInUp">
                    <ClientList />
                </div>
            </div>
        </section>
            
        </>
    )
}

export default Clients
