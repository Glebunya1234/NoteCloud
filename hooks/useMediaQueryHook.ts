import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const useMediaQueryHook = (query: string, defaultState:boolean): boolean => {
    const matches = useMediaQuery({ query });
    const [shouldRender, setShouldRender] = useState(defaultState);

    useEffect(() => {
        setShouldRender(matches);
    }, [matches]);

    return shouldRender;
};

export default useMediaQueryHook;