import React from 'react'
import styles from './BlogPosts.module.scss'

const BlogPosts = () => {
    return (
        <div>
            <div className={styles.BlogPosts}>
                <div className={styles.BlogPostsContainer}>
                    <div className={styles.BlogPostsContainerTitle}>
                        <h3>Top Posts</h3>
                    </div>
                    <div className={styles.BlogPostsContainerPost}>
                        <div className={styles.BlogPostsContainerPostLeft}>
                            <img src="https://iso.500px.com/wp-content/uploads/2020/03/Solar-eclipse-By-Romuald-H%C3%A9rouart-1500x1000.jpg" alt="" />
                        </div>
                        <div className={styles.BlogPostsContainerPostRight}>
                            <h3>Solar eclipse photography | The essential guide for photographers</h3>
                            <h2>by <a href="">Feature Shoot</a> in <a href="">500px Blog</a> • 2 months ago</h2>
                            <p>A solar eclipse happens when the moon moves between the Earth and the sun—here are our top tips for photographing solar eclipses.</p>
                            <button>Keep reading</button>
                        </div>
                    </div>
                    <div className={styles.BlogPostsContainerPost}>
                        <div className={styles.BlogPostsContainerPostLeft}>
                            <img src="https://iso.500px.com/wp-content/uploads/2024/03/Blog-post-hero-winners-3-1500x1000.jpg" alt="" />
                        </div>
                        <div className={styles.BlogPostsContainerPostRight}>
                            <h3>Unleashing creativity: Exploring the Godox BFP and X3 Trigger</h3>
                            <h2>by <a href="">Feature Shoot</a> in <a href="">500px Blog</a> • 3 months ago</h2>
                            <p>500px tests the Godox BFP Flash Projection Attachment and the X3 TTL Wireless Flash Trigger to determine how these tools can enhance your photoshoots.</p>
                            <button>Keep reading</button>
                        </div>
                    </div> <div className={styles.BlogPostsContainerPost}>
                        <div className={styles.BlogPostsContainerPostLeft}>
                            <img src="https://iso.500px.com/wp-content/uploads/2020/03/Menstrual-Equity-By-Brianna-R-1500x1000.jpeg" alt="" />
                        </div>
                        <div className={styles.BlogPostsContainerPostRight}>
                            <h3>100 Women on 500px you need to follow</h3>
                            <h2>by <a href="">Feature Shoot</a> in <a href="">500px Blog</a> • 3 months ago</h2>
                            <p>We are excited to feature 100 500px female photographers from around the world—from India to China, Canada to the United States, their work is incredible.</p>
                            <button>Keep reading</button>
                        </div>
                    </div>
                    <div className={styles.BlogPostsContainerPost}>
                        <div className={styles.BlogPostsContainerPostLeft}>
                            <img src="https://iso.500px.com/wp-content/uploads/2022/05/Zebra-Drinking-at-Night-By-Will-Burrard-Lucas-2-1500x1000.jpeg" alt="" />
                        </div>
                        <div className={styles.BlogPostsContainerPostRight}>
                            <h3>How to ensure you’re practicing ethical wildlife photography</h3>
                            <h2>by <a href="">Feature Shoot</a> in <a href="">500px Blog</a> • 3 months ago</h2>
                            <p>The photography community has spoken out about the importance of developing ethical practices that won't cause harm to animals and their environments.</p>
                            <button>Keep reading</button>
                        </div>
                    </div>
                    <div className={styles.BlogPostsContainerPost}>
                        <div className={styles.BlogPostsContainerPostLeft}>
                            <img src="https://iso.500px.com/wp-content/uploads/2024/02/Blog-post-hero-winners-2-1500x1000.jpg" alt="" />
                        </div>
                        <div className={styles.BlogPostsContainerPostRight}>
                            <h3>The winners & finalists of the 500px Global Photography Awards revealed!</h3>
                            <h2>by <a href="">Feature Shoot</a> in <a href="">500px Blog</a> • 3 months ago</h2>
                            <p>We're thrilled to unveil the exceptional winners and finalists of the 2023 edition of the 500px Global Photography Awards.</p>
                            <button>Keep reading</button>
                        </div>
                    </div>
                    <div className={styles.BlogPostsContainerTitle}>
                        <h3>Latest Posts</h3>
                    </div>
                    <div className={styles.lastestPostCont}>
                        <div className={styles.lastestPost}>
                            <img src="https://iso.500px.com/wp-content/uploads/2023/08/Blog-post-hero-3-1500x1000.jpg" alt="" />
                            <h6>Unveiling 500px Icons: A Decade of Visual Stories and Creative Expression</h6>
                            <span>500px Blog • 10 months ago</span>
                        </div>
                        <div className={styles.lastestPost}>
                            <img src="https://iso.500px.com/wp-content/uploads/2023/08/Blog-post-hero-1-1500x1000.jpg" alt="" />
                            <h6>Announcing the ultimate photography retreat in France with Alex Strohl—Beyond Borders contest</h6>
                            <span>500px Blog • 10 months ago</span>
                        </div>
                        <div className={styles.lastestPost}>
                            <img src="https://iso.500px.com/wp-content/uploads/2021/09/The-star-road-By-David-Rojas-2-1500x1000.jpg" alt="" />
                            <h6>Seven camping and hiking tips for landscape photographers</h6>
                            <span>500px Blog • 2 months ago</span>
                        </div>
                        <div className={styles.lastestPost}>
                            <img src="https://iso.500px.com/wp-content/uploads/2024/03/Frame-4-1-1500x1000.png" alt="" />
                            <h6>Capturing Imagination: The 2024 OPPO imagine IF Photography Awards</h6>
                            <span>500px Blog • 4 months ago</span>
                        </div>
                        <div className={styles.lastestPost}>
                            <img src="https://iso.500px.com/wp-content/uploads/2023/12/Blog-post-hero-1500x1000.jpg" alt="" />
                            <h6>Let’s get festive this Questmas!</h6>
                            <span>500px Blog • 7 months ago</span>
                        </div>
                        <div className={styles.lastestPost}>
                            <img src="https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg" alt="" />
                            <h6>8 Post Processing Tips for Creating Beautiful Landscape Photos</h6>
                            <span>500px Blog • 8 months ago</span>
                        </div>
                        <div className={styles.lastestPost}>
                            <img src="https://iso.500px.com/wp-content/uploads/2023/07/Portrait-of-woman-hiker-climbing-rock-and-looking-away.-Young-female-hiking-mountain.-By-Artem-Varnitsin-2-1500x1000.jpeg" alt="" />
                            <h6>June’s 10 standout Licensing photos</h6>
                            <span>500px Blog • 11 months ago</span>
                        </div>
                        <div className={styles.lastestPost}>
                            <img src="https://iso.500px.com/wp-content/uploads/2023/06/stock-photo-be-yourself-concept-with-metallic-balloon-dogs-on-blue-background-1069241524-1500x1000.jpg" alt="" />
                            <h6>3 Ways to Handle Imposter Syndrome as a Photographer</h6>
                            <span>500px Blog • 12 months ago</span>
                        </div>
                        <div className={styles.lastestPost}>
                            <img src="https://iso.500px.com/wp-content/uploads/2023/04/ii-By-Nina-Papiorek-2-1500x1000.jpeg" alt="" />
                            <h6>11 tips for better black and white street photography</h6>
                            <span>500px Blog • 1 months ago</span>
                        </div>
                        <div className={styles.lastestPost}>
                            <img src="https://iso.500px.com/wp-content/uploads/2023/04/Kebun-Bawang-Shallot-Plantation-By-Teh-Han-Lin-2-1500x1000.jpeg" alt="" />
                            <h6>A guide to creating abstract photography that sells</h6>
                            <span>500px Blog • 10 months ago</span>
                        </div>
                        <div className={styles.lastestPost}>
                            <img src="https://iso.500px.com/wp-content/uploads/2023/02/Blue-and-Beautiful-By-Rakesh-Baro-2-1500x1000.jpeg" alt="" />
                            <h6>Shotkit shares essential gear for landscape photography</h6>
                            <span>500px Blog • 10 months ago</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BlogPosts
