import {getProjects} from '@app/lib/helpers'
import connection from '@app/database/index'
import {useQuery} from 'react-query'
import {useState} from 'react'
import Header from '@app/components/Header'
import PostCard from '@/app/components/ProjectCard'
import page from '@app/page.module.css'
import Link from 'next/link'


export default function AllProjects({data}){

  const handler = async (e)=>{
    e.preventDefault();
    console.log(e.target.editProject.value)
  }
  /*{`/editarProjeto/title=${projects.title}`}*/
    
    return(
  
        <div className={page.center}>
          
          <Header/>
            <h2>Projetos em Exibição</h2>
            {
                data.map((projects,i) =>(
                  <div className={page.container} key={i}>
                      <div>
                        <img src={projects.image} className={page.photos_content} alt='imagem-projeto'/>
                      </div>
                        <h2>{projects.title}</h2>
                        <p>{projects.description}</p>
                        <Link href={`/editarProjeto/${projects.title}`}>Editar</Link>
                        
                    </div>
                )
                    
                )
            }
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
