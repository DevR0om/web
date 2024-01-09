async function pageError(url: string): Promise<boolean> {
    try{
        const response = await fetch(url)
        return response.status === 404;
    }catch(err){
        return false
    }
}
export default pageError;