import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedPermit } from "../redux/actions/permitActions";

import './index.css';

const PermitDetails = () => {
    const permit = useSelector((state) => state.permit);
    const {
        id,
        permit_,
        permit_type,
        review_type,
        application_start_date,
        issue_date,
        processing_time,
        street_number,
        street_name,
        total_fee,
        reported_cost,
        work_description,
    } = permit;
    const { permitId } = useParams();
    const dispatch = useDispatch();

    console.log(permit);

    const fetchPermitDetail = async () => {
        const response = await axios
            .get(`https://data.cityofchicago.org/resource/ydr8-5enu.json?id=${permitId}`)
            .catch((err) => {
            console.log("Err", err);
        });
        console.log(response.data[0]);
        dispatch(selectedPermit(response.data[0]));
    };

    useEffect(() => {
        if(permitId && permitId !== "") fetchPermitDetail();
    }, [permitId]);

    return (
        
            <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned">
                    <p>
                        <span>id: </span> &emsp; {id}<br />
                    </p>
                    <p>
                        <span>Permit: </span> &emsp; {permit_}<br />
                    </p>
                    <p>
                        <span>Permit Type: </span> &emsp; {permit_type}<br />
                    </p>
                    <p>
                        <span>Review Type: </span> &emsp; {review_type}<br />
                    </p>
                    <p>
                        <span>Application start date: </span> &emsp; {application_start_date}<br />
                    </p>
                    <p>
                        <span>Date Issued: </span> &emsp; {issue_date}<br />
                    </p>
                    <p>
                        <span>Processing Time: </span> &emsp; {processing_time}<br />
                    </p>
                    <p>
                        <span>Address: </span> &emsp; {street_number}&emsp;{street_name}<br />
                    </p>
                    <p>
                        <span>Total Fees paid: </span> &emsp; ${total_fee}<br />
                    </p>
                    <p>
                        <span>Project Cost: </span> &emsp; {reported_cost}<br />
                    </p>
                    <p>
                        <span>Work Description: </span> &emsp; {work_description}<br />
                    </p>
                </div>
            </div>
    );
}

export default PermitDetails;



