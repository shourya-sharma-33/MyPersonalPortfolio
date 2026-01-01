import React, { useEffect } from "react";
import useStore from "../store.js";
import LockedContentOverlay from "./LockedContentOverlay";

const ClientsComponent = () => {
    const { clients, loading, error, fetchClients } = useStore();

    useEffect(() => {
        if (clients.length === 0) {
            fetchClients();
        }
    }, [clients.length, fetchClients]);

    if (loading) {
        return (
            <LockedContentOverlay>
                <section className="clients">
                    <h3 className="h3 clients-title">Clients</h3>
                    <div className="loading">Loading clients...</div>
                </section>
            </LockedContentOverlay>
        );
    }

    if (error) {
        return (
            <LockedContentOverlay>
                <section className="clients">
                    <h3 className="h3 clients-title">Clients</h3>
                    <div className="error">Error loading clients: {error}</div>
                </section>
            </LockedContentOverlay>
        );
    }

    return (
        <LockedContentOverlay>
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
        </LockedContentOverlay>
    );
};

export default ClientsComponent;
