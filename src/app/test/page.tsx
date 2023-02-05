"use client"
import {useCurrentUser} from "@/hooks/auth/useCurrentUser";
import {categoriesService} from "@/services";

const TestPage = () => {
    const { user: currentUser } = useCurrentUser();

    const loadData = async () => {
        try {
            const response =  await categoriesService.loadData()
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }

    if (currentUser) {
        return <div> <button onClick={() => loadData()} >Load data</button> </div>
    }
    return <div>Test page</div>
}

export default TestPage;