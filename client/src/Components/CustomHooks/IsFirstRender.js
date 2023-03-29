import { useEffect, useRef } from "react";

const IsFirstRender = () => {
    let isFirstRender = useRef(false);

    useEffect(() => {
        isFirstRender.current = true;
    }, []);

    return isFirstRender;
}

export default IsFirstRender;