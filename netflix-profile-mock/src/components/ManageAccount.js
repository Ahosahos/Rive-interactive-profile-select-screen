import React, { useEffect, useState } from "react";

export default function ManageAccount () {
    const [ripplin, setRipplin] = useState(false);

    const onClick = () => {
        setRipplin(true);
    }

    useEffect(() => {
        const timeoutRipplin = () => setTimeout(() => setRipplin(false), 500);

        if (ripplin) {
            timeoutRipplin();
        }
        return () => {
            clearTimeout(timeoutRipplin)
        }
    }, [ripplin]);

    return(
        <button className="custom-ripple" type="button" onClick={onClick}>
            <span className={ripplin? "ripple_wave": ""}></span>
            Manage Profiles
        </button>
    )
}