import React from "react";
import PropTypes from "prop-types";
import { useQualities } from "../../../hooks/useQualities";
import Quality from "./quality";

const QualitiesList = ({ qualities }) => {
    const { isLoading, getQuality } = useQualities();
    if (!isLoading) {
        return qualities.map((qual) => {
            const data = getQuality(qual);
            return <Quality key={data._id} {...data} />;
        });
    } else {
        return "loading...";
    }
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
