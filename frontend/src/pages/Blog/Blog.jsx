import React from 'react'
import Header from '../../components/Header/Header'
import BlogHero from '../../components/BlogHero/BlogHero'
import BlogPosts from '../../components/BlogPosts/BlogPosts'
import Footer from '../../components/Footer/Footer'

const Blog = () => {
    return (
        <div>
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
