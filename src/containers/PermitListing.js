import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setPermits } from "../redux/actions/permitActions";
import PermitComponent from "./PermitComponent";

const PermitListing = () => {
    const dispatch = useDispatch();    
    useEffect(() => {
        let newRes = [];
        const fetchPermits = async () => {
            const response = await axios.get("https://data.cityofchicago.org/resource/ydr8-5enu.json").catch((err) => {
                console.log("Err", err);
            });
            // console.log(response.data);
            
            for (let i = 0; i < 10; i++) {
                newRes.push(response.data[i]);
            }
            dispatch(setPermits(newRes));
        }

        fetchPermits();
    }, []);

    return (
        <div className="ui grid container">
            <PermitComponent />
        </div>
    )
}

export default PermitListing;