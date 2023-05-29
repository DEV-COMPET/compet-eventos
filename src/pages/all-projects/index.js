import {getProjects} from '@app/lib/helpers'
import {useQuery} from 'react-query'

export default function AllProjects(){
    const {isloading,isError,data,error} = useQuery('projects',getProjects)
    return(<div>
        <div>
            {
                data
            }
        </div>
    </div>
    )
}