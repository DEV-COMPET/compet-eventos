import React from "react";

export default function PostCard(props){
    const titlePost = props.title;
    const coverPost = props.cover;
    const bodyPost = props.body;
    //quando o estado é passado para os componenentes, isso é feito através de props
    return (
        <div  className="postcards">
                        <img src ={coverPost} alt={titlePost}/>
                        <div className = "post_content">
                            <h2>{titlePost}</h2>
                            <p>{bodyPost}</p>
                </div>
        </div>
    )
}

