import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedPermit } from "../redux/actions/permitActions";

const PermitDetails = () => {
    const permit = useSelector((state) => state.permit);
    const { permitId } = useParams();
    const dispatch = useDispatch();

    console.log(permit);

    const fetchPermitDetail = async () => {
        const response = await axios
            .get(`https://data.cityofchicago.org/resource/ydr8-5enu.json?id=${permitId}`)
            .catch((err) => {
            console.log("Err", err);
        });
        dispatch(selectedPermit(response.data));
    };

    useEffect(() => {
        if(permitId && permitId !== "") fetchPermitDetail();
    }, [permitId]);

    return (
        <div>
            <div>
                <p>
                    <span>id: {}</span> &emsp; <span>permit type: {}</span> &emsp; <span>street name: {}</span>
                </p>
            </div>
        </div>
    )
}

export default PermitDetails;



