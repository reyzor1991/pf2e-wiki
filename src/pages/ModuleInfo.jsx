import React, {useState} from 'react'
import {data} from "../../data.js";
import {useParams} from "react-router-dom";
import Header from "../components/Header.jsx";
import parse from 'html-react-parser';

const ModuleInfo = () => {
    let params = useParams()
    const [modules] = useState(data)
    let moduleInfo = modules.find(m => m.id === Number(params.id));

    return (
        <div>
            <Header title={moduleInfo?.title || "Unknown Module"}/>
            <div>
                {parse(moduleInfo?.html || "Info about module is missed")}
            </div>
        </div>
    );
}

export default ModuleInfo