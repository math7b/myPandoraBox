import React from "react";
import { useHistory } from "react-router-dom";

export default function Slash() {
    const history = useHistory();
    history.push('logar');
    return (
        <b>Hello</b>
    );
}