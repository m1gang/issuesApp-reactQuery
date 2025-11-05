import { useQuery } from '@tanstack/react-query'
import { getLabels } from '../actions'
import { GithubLabel } from '../types'

export const useLabels = () => {
    return useQuery({
        queryKey: ['labels'],
        queryFn: getLabels,
        staleTime: 1000 * 60 * 60, // 1 hora en la que se va considerar fresco, es decir, no volvera a hacer fetch
        placeholderData: [
            {
                "id": 1109410193,
                "node_id": "MDU6TGFiZWwxMTA5NDEwMTkz",
                "url": "https://api.github.com/repos/facebook/react/labels/Component:%20Hooks",
                "name": "Component: Hooks",
                "color": "c2f27b",
                "default": false,
            } satisfies GithubLabel,
        ],
        // initialData: [
        //     {
        //         "id": 1109410193,
        //         "node_id": "MDU6TGFiZWwxMTA5NDEwMTkz",
        //         "url": "https://api.github.com/repos/facebook/react/labels/Component:%20Hooks",
        //         "name": "Component: Hooks",
        //         "color": "c2f27b",
        //         "default": false,
        //     } satisfies GithubLabel,
        // ]
    })

}
