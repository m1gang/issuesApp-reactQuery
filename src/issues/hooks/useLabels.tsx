import { useQuery } from '@tanstack/react-query'
import { getLabels } from '../actions'

export const useLabels = () => {
    return useQuery({
        queryKey: ['labels'],
        queryFn: getLabels,
        staleTime: 1000 * 60 * 60, // 1 hora en la que se va considerar fresco, es decir, no volvera a hacer fetch
    })

}
