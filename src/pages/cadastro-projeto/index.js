// login.js

//import { useState } from 'react';
import { useRouter } from 'next/router';
import {useReducer} from 'react';
import '@app/page.module.css'
import {useMutation,useQueryClient} from 'react-query'
import {addProject,getProjects} from '@app/lib/helpers'
import Header from '@app/components/Header'

const formReducer = (state,event) =>{
  return{
    ...state,
    [event.target.name] : event.target.value
  }
}

const LoginPage = ({children}) => {
  const router = useRouter();
  const [formData,setFormData] = useReducer(formReducer,{})
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = e.target.image.files[0]
    console.log('arquivo',file)
    const base64 = await convertToBase64(file)
    console.log('base64',base64)
    formData.image = base64
    console.log(formData)
    if(Object.keys(formData).length==0)return console.log("No formData")
    //let {title,slug,description} = formData
    
    addProject(formData)
   
  };

  
  return (
    <div>
      <Header/>
      <h1>Cadastro Projeto</h1>
      <form className='form-input' onSubmit={handleSubmit} method='post' >
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
            name="author"
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
        <div>
          <label>Imagem de apresentação:</label>
          <input
            type="file"
            name="image"
            id="image-data"
            accept='.jpg,.jpeg,.png'
            onChange={setFormData}
          />
        </div>
     
        <input type="submit" value="confirmar"/>
      </form>
    </div>
  );
};

export default LoginPage;

function convertToBase64(file){
  return new Promise((resolve,reject)=>{
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () =>{
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) =>{
      reject(error)
    }
  })
}
