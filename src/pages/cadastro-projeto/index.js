// login.js

//import { useState } from 'react';
import { useRouter } from 'next/router';
import {useReducer} from 'react';
import {useMutation,useQueryClient} from 'react-query'
import {addProject,getProjects} from '@app/lib/helpers'
//import 'login.css';
const formReducer = (state,event) =>{
  return{
    ...state,
    [event.target.name] : event.target.value
  }
}

const LoginPage = ({children}) => {
  const router = useRouter();
  const [formData,setFormData] = useReducer(formReducer,{})
  //const query = useQueryClient()

  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    if(Object.keys(formData).length==0)return console.log("No formData")
    let {title,slug,description} = formData
    const model = {
      title:title,
      slug:slug,
      description:description
    }
    addProject(formData)
   
  };

  
  return (
    <div>
      <h1>Cadastro Projeto</h1>
      <form onSubmit={handleSubmit} method='post' /*action="/api/posts"*/>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            onChange={setFormData}
          />
        </div>
        <div>
          <label>Slug:</label>
          <input
            type="text"
            name="slug"
            onChange={setFormData}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            onChange={setFormData}
          />
        </div>
     
        <input type="submit" value="confirmar"/>
      </form>
    </div>
  );
};

export default LoginPage;
