import React from 'react'
import Header from '../../components/Header/Header'
import BlogHero from '../../components/BlogHero/BlogHero'
import BlogPosts from '../../components/BlogPosts/BlogPosts'
import Footer from '../../components/Footer/Footer'

const Blog = () => {
    return (
        <div style={{ width: "100%", gap: "90px", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <div>
                <BlogHero />
                <BlogPosts />
            </div>
            <Footer/>
        </div>
    )
}

export default Blog
