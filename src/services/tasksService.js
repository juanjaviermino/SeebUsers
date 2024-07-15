import api from '../axios/api.js'; 
import useSWR from 'swr';
import { useSelector } from 'react-redux';

const fetcher = url => api.get(url).then(res => res.data);

function useTasks() {
    const user = useSelector((state) => state.login.user);
    const id = user ? user.user_id : null;

    const swrOptions = {
        revalidateOnFocus: true
    };

    const { data, error, isLoading, isValidating, mutate } = useSWR(
        id ? `/api/tasks/${id}` : null,
        fetcher,
        swrOptions
    );

    return { 
        data, 
        error,
        isLoading: !data && !error,
        isValidating,
        mutate
    };
}

export default useTasks;
