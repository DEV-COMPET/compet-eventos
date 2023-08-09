import { useRouter } from 'next/router';
import mongoose from 'mongoose';
import connectDB from "@app/database/index"
import styles from '@app/page.module.css'


export default function Projeto({data}){
    const router = useRouter();
    const {projName} = router.query;

    let projTitle = "";
    let projDescription = "";
    let projAuthor = "";
    let projImage = "";

    data.map((element) => {
       if(projName === element.title){
        projTitle = element.title
        projDescription = element.description
        projAuthor = element.author
        projImage = element.image
       }
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      const file = e.target.image.files[0]
      const base64 = await convertToBase64(file)
      formData.image = base64
      if(Object.keys(formData).length==0)return console.log("No formData")
      addProject(formData)
    };

    return(
      
      <div className={styles.center}>
        <form className={styles.form_input} onSubmit={handleSubmit} method='post' >
          <h3>Edição de projeto</h3>
          <div>
            <label>Titulo:</label>
            <input
              type="text"
              name="title"
              value={projTitle}
              onChange={""}
            />
          </div>
          <div>
            <label>Autor:</label>
            <input
              type="text"
              name="author"
              value={projAuthor}
              onChange={"setFormData"}
            />
          </div>
          
          <div>
            <label>Imagem de apresentação:</label>
            <input
              type="file"
              name="image"
              id="image-data"
            
              accept='.jpg,.jpeg,.png'
              onChange={"setFormData"}
            />
          </div>
          <div>
            
            <textarea rows="10" cols="50"
            type="text"
            name="description"
          
            onChange={"setFormData"}
            >{projDescription}
            </textarea>
          </div>
      
          <input type="submit" value="confirmar"/>
        </form>
      </div>
        
    )
}

export async function getServerSideProps(context) {
  let res = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await res.json();

  return {
    props: { data },
  };
}

  