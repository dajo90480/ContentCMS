import { useState, useEffect } from "react";
import { createClient } from 'contentful';


const client = createClient({
    space: 'xjufq0v2o6p3',
    environment: 'master',
    accessToken: import.meta.env.VITE_API_KEY,
})
export const useFetchProjects = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const getData = async () => {
        try {
            const response = await client.getEntries({ content_type: 'projects' });

            const projects = response.items.map((item) => {
                const { title, image, url } = item.fields
                const id = item.sys.id
                const img = image?.fields?.file?.url
                return { title, img, url, id }

            })

            setProjects(projects)
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return { loading, projects }

}