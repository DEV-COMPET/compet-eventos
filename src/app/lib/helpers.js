
export async function getProjects(){
    const response = await fetch('http://localhost:3000/api/posts')
    const json = await response.json()
    return json
}
export async function addProject(formData){
    try{
        const Options ={
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(formData)
        }
        const response = await fetch('http://localhost:3000/api/posts',Options)
        console.log(response.json())
        
    }catch(error){
        return error;
    };
} 