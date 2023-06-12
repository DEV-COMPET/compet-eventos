import {getProjects} from '@app/lib/helpers'
import connection from '@app/database/index'
import {useQuery} from 'react-query'
import {useState} from 'react'
import Header from '@app/components/Header'
import PostCard from '@/app/components/ProjectCard'

export default function AllProjects({data}){
    
    return(<div>
        <div>
            <Header/>
            <h2>Projects:</h2>
            {
                data.map((projects,i) =>(
                  <div key={i}>
                        <h2>{projects.title}</h2>
                        <p>{projects.description}</p>
                        <img src={projects.image} alt='imagem-projeto'/>
                    </div>
                )
                  
                  /*<PostCard
                     key = {i}
                     title = {projects.title}
                     cover = {projects.cover}
                     body = {projects.body}/>*/
                    
                )
            }
        </div>
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
