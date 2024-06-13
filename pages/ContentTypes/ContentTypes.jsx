import React from 'react'
import ctone from '../../about/creative_1.b86d506d.jpg'
import cttwo from '../../about/editorial_1.701cf4cc.jpg'
import ctthree from '../../about/creative_2.bc9ceb25.jpg'
import ctfour from '../../about/editorial_2.fb4151c4.jpg'
import styles from '../../components/LicensingStarting/LicensingStarting.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ContentTypes = () => {
    return (
        <div style={{ width: "100%", gap: "100px", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <div className={styles.LicensingStarting}>
                <div className={styles.LicensingStartingContainer}>
                    <div className={styles.LicensingStartingContainerTop}>
                        <h1>500px Licensing: Get Started</h1>
                        <p>Easily license your photos for stock usage through 500px. It's quick to setup and completely optional for all membership levels.</p>
                    </div>
                    <div className={styles.LicensingStartingContainerBottom}>
                        <div className={styles.LicensingBottomNavbar}>
                            <a href="/licensing/licensing">Stock photo licensing</a>
                            <a href="/licensing/contribute">Become a contributor</a>
                            <a href="/licensing/requirements">Submission requirements</a>
                            <a href="/licensing/releases">Releases</a>
                            <a href="/licensing/keywording">Choosing keywords</a>
                            <a style={{ borderLeft: "3px solid #2986F7", fontWeight: "bold", backgroundColor: "#F7F8FA" }} href="/licensing/content#">Content types</a>
                            <a href="/licensing/distribution">Distribution</a>
                        </div>
                        <div className={styles.LicensingBottomDesk}>
                            <div className={styles.LicensingBottomDesk} id='#become-a-contributor'>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h1>Licensing content types</h1>
                                    <p>Creative (Commercial) or Editorial. Knowing the difference and understanding what type of content is considered safe for commercial use versus what is restricted to editorial use only, will help make the submission process more smooth.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>What’s a ‘Creative’ image?</h3>
                                    <p>Creative or Commercial images tend to communicate aspirational concepts or ideas making them ideal for advertising a variety of products and services worldwide. Because of their broad use as a promotional tool, a signed model release is required for any recognizable individual shown in creative photos (even self portraits!). Clients need assurance that everyone in the photo has given their consent to be featured, especially when they are the primary focus of the image.</p>
                                    <p>The same applies to private property/locations, and buildings or properties protected by intellectual property (IP) laws. For the same reason all logos and branding should be avoided whenever possible, or otherwise retouched out of the photo entirely.</p>
                                    <p>Examples of Creative use include:</p>
                                    <li>Advertising in print and digital media campaigns</li>
                                    <li>Marketing and promotional materials</li>
                                    <li>Corporate presentations and brochures</li>
                                    <li>Commercial websites</li>
                                    <li>Product packaging</li>
                                    <li>Film and television</li>
                                    <li>Books and book covers</li>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>What’s an ‘Editorial’ image?</h3>
                                    <p>Editorial images document real-life issues, current events, and stories of human interest across the globe in a truthful manner. They are used as an effective way to strengthen newspaper and magazine articles, blog posts, and other written commentaries by lending visual context to a story.</p>
                                    <p>Since the vast majority of people and places depicted in Editorial images are not released, they are not suitable for promotional use of any kind—they can be used in a journalistic or informative way only. For this reason, a great deal of street and travel photography is considered editorial only.</p>
                                    <p>Please keep in mind that unreleased photos aren't automatically considered editorial, they must convey enough context to support a newsworthy or topical theme.</p>
                                    <p>Examples of editorial use include:</p>
                                    <li>Newspaper and magazine articless</li>
                                    <li>Editorial features</li>
                                    <li>Blog or website (for descriptive purposes)</li>
                                    <li>News broadcasts</li>
                                    <li>Documentaries</li>
                                    <li>Textbooks</li>
                                    <li>Essays and journals</li>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>Image Reviews</h3>
                                    <p>Image review times will vary depending on the volume of content we receive. Reviews generally take a week or less but may take longer at times.</p>
                                    <p>All photos submitted for licensing are reviewed by an inspector to ensure each photo is suitable for licensing. Before your first submission we recommend familiarizing yourself with our Quality and technical requirements so your photos have the best chance of being accepted. Here are a few of the things we look for when considering a photo for the 500px collection</p>
                                    <li>Technical quality and execution</li>
                                    <li>Uniqueness / originality</li>
                                    <li>Overall visual aesthetic</li>
                                    <li>Production value</li>
                                    <li>Commercial viability</li>
                                    <p>These factors are not mutually exclusive - they are subjective - which is why we’re relying on our team of highly qualified inspectors to carefully consider each submission. Curations are not permanent and are subject to change based on seasonality, aesthetic trends, multiple reviews and audits.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>Are there any exceptions in licensing?</h3>
                                    <p>Ticketed Events & Locations: taking photos of an event or inside a location that charges an admission fee will almost always require permission, even for editorial use, due to the intellectual property they protect. Many of these events and locations are restricted to accredited members of the press so it’s essential that a press pass, property release, permit, or contract issued and/or signed by an authorized representative of the organization is uploaded with your submission.</p>
                                    <p>Examples of ticketed locations and events:</p>
                                    <li>Museums</li>
                                    <li>Art Galleries</li>
                                    <li>Galleries</li>
                                    <li>Pro Sporting matches</li>
                                    <li>Theatre Performances</li>
                                    <li>Concerts and Music Festivals</li>
                                    <li>Conventions</li>
                                    <li>Trade Shows</li>
                                    <p>The most important thing to remember is that it’s all about context and how an image can be used. If you’re still unsure, take a look at these examples of Creative (Commercial) and Editorial versions of the same subject.</p>
                                    <span style={{ fontWeight: "bold" }}>Example #1</span>
                                    <img src={ctone} alt="" />
                                    <span style={{ fontWeight: "bold" }}>Creative</span>
                                    <li>Signed model release</li>
                                    <li>Staged portrait</li>
                                    <li>Commercial concept</li>
                                    <img src={cttwo} alt="" />
                                    <span style={{ fontWeight: "bold" }}>Editorial</span>
                                    <li>People are NOT released</li>
                                    <li>Candid and spontaneous moment</li>
                                    <li>Iconic and cultural event</li>
                                    <img src={ctthree} alt="" />
                                    <span style={{ fontWeight: "bold" }}>Creative</span>
                                    <li>All models have given consent and signed a release</li>
                                    <li>Logos have been avoided</li>
                                    <li>Positive business concept</li>
                                    <img src={ctfour} alt="" />
                                    <span style={{ fontWeight: "bold" }}>Editorial</span>
                                    <li>No model releases</li>
                                    <li>Apple logo is still visible</li>
                                    <li>Relevant subject matter: Technology, Communication</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default ContentTypes
