import { Container } from "@mui/system";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export const getStaticPaths = async () => {
    const res = await fetch('https://dummyjson.com/products',
    {
        headers: {
            ContentType: 'application/json'
        }
    })
    const data = await res.json()
    const paths = (data.products).map((post) => {
        return {
            params: { id: post.id.toString() }
        }
    })

    return {
        paths,
        fallback : false
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.id
    const resPost = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await resPost.json()

    return {
        props : {
            data
        }
    }
}

const BlogPage = ({data}) => {
    return (
        <Container sx={{mt: 10}}>{data.title}</Container>
    );
}
 
export default BlogPage;