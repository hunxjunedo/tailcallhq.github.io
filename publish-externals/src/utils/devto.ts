import axios from "axios";
import { DEVTO_API_KEY } from "./constants";
import { addBaseUrlToImages } from "./markdown";

const devtoPostHandler = async (frontMatter: any, content: any) => {
    const processedMd = addBaseUrlToImages(content)
    const { title, cover_image, canonical_url, description } = frontMatter

    //first check if the post exists on dev.to
    const postExistsOnDevto = await findOnDevto(title);
    if (postExistsOnDevto) {
        console.log('post exists on dev.to, updating it ⏳ ');
        //notice that the public parameter hasn't been specified / is false. this is to make sure even a published article becomes un-published when edited thru github
        await updatePostOnDevto(postExistsOnDevto.id, {
            title,
            body_markdown: processedMd,
            main_image: cover_image,
            canonical_url: canonical_url || null,
            description: description,
            tags: description,

        })
    } else {

        console.log('post does not exist on dev.to, creating new ⏳')

        await publishPostOnDevto({
            title,
            body_markdown: processedMd,
            main_image: cover_image,
            canonical_url: canonical_url || null,
            description: description,
            tags: description,
        })

    }
}
const devtoApiVars = {
    headers: {
        "api-key": DEVTO_API_KEY
    }
}

const findOnDevto = async (titleToSearch: string) => {

    try {
        let page = 1;
        let per_page = 50;
        let found: boolean | any;
        found = false
        while (true && !found) {
            const response = await axios.get(`https://dev.to/api/articles/me/all?page=${page}&per_page=${per_page}`, devtoApiVars)
            const articles = response.data
            if (!articles || articles.length === 0) {
                //stop right here if no (more) articles
                break;
            }
            found = articles.find(({ title }: { title: string }) => (title === titleToSearch)) || false
            //move to next page if not found
            page++

        }
        return found
    } catch {
        throw new Error('error, could not check for existing articles on dev.to ❌ ')
    }
}

const publishPostOnDevto = async (article: any) => {
    try {
        await axios.post('https://dev.to/api/articles', { article }, devtoApiVars)
        console.log('published new post on dev.to ✅ ')
    } catch {
        throw new Error('error: could not publish new article on dev.to ❌ ')
    }
}

const updatePostOnDevto = async (id: number, article: any) => {
    try {
        await axios.put(`https://dev.to/api/articles/${id}`, { article }, devtoApiVars)
        console.log('edited the post on dev.to ✅ ')
    } catch {
        throw new Error('error: could not edit the article on dev.to ❌ ')
    }
}

export { devtoPostHandler }