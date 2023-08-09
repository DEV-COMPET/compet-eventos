// login.js

//import { useState } from 'react';
import { useRouter } from 'next/router';
import {useReducer} from 'react';
import '@app/page.module.css'
import {useMutation,useQueryClient} from 'react-query'
import {addProject,getProjects} from '@app/lib/helpers'
import Header from '@app/components/Header'
import styles from '@app/page.module.css'

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
    const base64 = await convertToBase64(file)
    formData.image = base64
    if(Object.keys(formData).length==0)return console.log("No formData")
    addProject(formData)
  };

  
  return (
    <div className={styles.center}>
      <Header/>
      
      <form className={styles.form_input} onSubmit={handleSubmit} method='post' >
        <h3>Cadastro Projeto</h3>
        <div>
          <label>Titulo:</label>
          <input
            type="text"
            name="title"
            onChange={setFormData}
          />
        </div>
        <div>
          <label>Autor:</label>
          <input
            type="text"
            name="author"
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
        <div>
          
          <textarea rows="10" cols="50"
          type="text"
          name="description"
          onChange={setFormData}
          >Digite a descrição do projeto
          </textarea>
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
