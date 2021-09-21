import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import './index.css';

const PermitComponent = () => {
    const permits = useSelector((state) => state.allPermits.permits);
    const renderList = permits.map((permit) => {
        const { id, permit_type, street_name } = permit;
        return (
            <div className="ui cards" key={id}>
                <Link to={`/permit/${id}`}>
                    <div className="ui red fluid card">
                        <div className="content">
                            <div className="header"><span>id: {id}</span> &emsp; <span>permit type: {permit_type}</span> &emsp; <span>street name: {street_name}</span></div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    return <>{renderList}</>;
}

export default PermitComponent;

