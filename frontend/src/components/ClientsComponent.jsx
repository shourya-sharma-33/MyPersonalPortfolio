import React from "react";
import { IonIcon } from "@ionic/react";
import { lockClosed } from "ionicons/icons";
import clients from "../data/clients/clients";

const ClientsComponent = () => {
    return (
        <div className="locked-content">
            <section className="clients">
                <h3 className="h3 clients-title">Clients</h3>

                <ul className="clients-list has-scrollbar">
                    {clients.map((client, index) => (
                        <li className="clients-item" key={index}>
                            <a href={client.link}>
                                <img src={client.img} alt={`client logo ${index + 1}`} />
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            <div className="locked-content-overlay">
                <IonIcon icon={lockClosed} className="text-9xl text-white" />
            </div>
        </div>
    );
};

export default ClientsComponent;
