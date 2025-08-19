import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectRequestStatus } from '../entities/request/slice';

export const useRequest = (thunk, params) => {
    const [request, setRequest] = useState(null);
    const requestStatus = useSelector((state) => 
        selectRequestStatus(state, request?.requestId)
    );

    const dispatch = useDispatch();

    useEffect(() => {
        const request = dispatch(thunk(params));
        setRequest(request);

        return () => {
            setRequest(null);
            request.abort();
        };
    }, [dispatch, params, thunk]);

    return requestStatus;
}