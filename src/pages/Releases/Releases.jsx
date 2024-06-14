import React from 'react'
import styles from '../../components/LicensingStarting/LicensingStarting.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FaChevronRight } from 'react-icons/fa6';

const Releases = () => {
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
                            <a style={{ borderLeft: "3px solid #2986F7", fontWeight: "bold", backgroundColor: "#F7F8FA" }} href="/licensing/releases#">Releases</a>
                            <a href="/licensing/keywording">Choosing keywords</a>
                            <a href="/licensing/content">Content types</a>
                            <a href="/licensing/distribution">Distribution</a>
                        </div>
                        <div className={styles.LicensingBottomDesk}>
                            <div className={styles.LicensingBottomDesk} id='#become-a-contributor'>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h1>Understanding model and property releases</h1>
                                    <p>What they are and when you need them</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>What is a model release?</h3>
                                    <p>In the photography industry, a <a href="https://static.500px.net/docs/ModelReleaseForm.pdf" target='blank'>model release</a> is a binding legal agreement between a photographer and their model or any potentially recognizable human subjects. This agreement ensures that everyone is aware, feels compensated, and has consented to commercial usage of their likeness. There are multiple versions and formats of model releases, but all of them must share four main statements to cover commercial licensing:</p>
                                    <li>The model authorizes the photo to be published by the photographer and his/her assigns</li>
                                    <li>The model authorizes that the image can be used commercially for use in advertising, or editorial purposes</li>
                                    <li>The model agrees that all rights, including copyright, belong to the photographer and his/her assigns</li>
                                    <li>The model agrees to release the photographer and assigns from any future claims of compensation or any other reason</li>
                                    <li>It is made clear that the model will not be further compensated beyond what is agreed on at the time of the shoot and no longer has any rights to the photos</li>
                                    <p>To be acceptable and legally relevant, the release must contain information about the photographer and the model, including mailing address and contact information (such as email and/or phone number, and home address) and must be signed by both parties. Additionally, not only the photographer, but “their assigns,” or similar, must be mentioned in order for the photographer to license their content through agencies, vendors, and distributors.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>When do I really need one?</h3>
                                    <p>If there is a recognizable person in your photo and you want to make it available for Creative (Commercial) licensing, you ALWAYS need a <a href="https://static.500px.net/docs/ModelReleaseForm.pdf" target='blank'> model release.</a> Without one you could be liable and face serious legal issues brought by your models for improper use of their likeness. For a model, commercial licensing means that their depiction will be used to sell and promote something (often, not knowing for what or how). To protect the model, additional considerations in our partner’s end user license agreements and the 500px standard model release, limit the usage and restrict how the image can be used (i.e. never in a defamatory way, in pornography, or other offensive materials).</p>
                                    <p>The general questions you have to ask yourself in order to determine whether you need a <a href="https://static.500px.net/docs/ModelReleaseForm.pdf" target='blank'> model release.</a> are:</p>
                                    <li>Would I be able to identify myself if that was me?</li>
                                    <li>Is the person the main focus of the image?</li>
                                    <li>Even if the person in the photos is not the main focus of the composition, could it be cropped to single anyone out?</li>
                                    <p>You may think that a “recognizable person” means a full frontal, straight on, and clearly visible person. However, that is not always the case. Sometimes a person can be recognizable by other factors like context, location, the people they are with, clothing, or tattoos. Besides profiting on likeness, in some jurisdictions liability could also include violating someone’s perceived privacy for commercial gain. Let’s clarify some of those cases.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>Silhouettes</h3>
                                    <p>If the person in the image is the main focus or if his/her distinctive features can be identified from the silhouette, you need a model release. If the person is small and there is no context or details that can make it recognizable, you don’t need one.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>Review Notifications and Rejection Reasons</h3>
                                    <p>You can check the status of your submissions in the Licensing Managerand review the Submission status folders in the left-hand sidebar for more details. The definitions of the Submission status folders are as follows:</p>
                                    <img src="https://500px.com/staticV2/media/silhouette_1.bb90df0a.jpg" alt="" />
                                    <p><span style={{ fontWeight: "bold" }}>Model release needed.</span> The model’s features are very visible and recognizable.</p>
                                    <img src="https://500px.com/staticV2/media/silhouette_2.279c589e.jpg" alt="" />
                                    <p><span style={{ fontWeight: "bold" }}>No model release needed.</span>There is no detail or factor that can make these people recognizable and their features are not visible.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>Body parts and tattoos</h3>
                                    <p>Normally you don’t need a model release for detailed shots of body parts, like hands or feet. Though in some cases, a person may be able to identify themselves due to tattoos or birthmarks, in which case a model release is required.</p>
                                    <img src="https://500px.com/staticV2/media/hands.f08e6171.jpg" alt="" />
                                    <p><span style={{ fontWeight: "bold" }}>No model release needed.</span>Low-risk since the focus is on the sparklers and not on the people.</p>
                                    <img src="https://500px.com/staticV2/media/tattoos.e21dd9f0.jpg" alt="" />
                                    <p><span style={{ fontWeight: "bold" }}>Model release needed.</span> The tattoo makes this person highly recognizable even if her face is not visible.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>Location and context</h3>
                                    <p>Even if the model’s face is not clearly visible there may be contextual factors that could make him/her identifiable. Factors like unique outfits or clothes, locations, and photo shoot setting.</p>
                                    <img src="https://500px.com/staticV2/media/location_1.50a2e8f9.jpg" alt="" />
                                    <p><span style={{ fontWeight: "bold" }}>Model release needed.</span> The tattoo makes this person highly recognizable even if her face is not visible.</p>
                                    <img src="https://500px.com/staticV2/media/location_2.07c67d3f.jpg" alt="" />
                                    <p><span style={{ fontWeight: "bold" }}>Model release needed.</span> There are no recognizable or unique details visible. Even if the main focus of the image is the person there is not enough context to make them recognizable.</p>
                                    <p>There are some cases where you want to make sure you have a model release no matter what. Subjects like minors or nudes are considered sensitive matter and they always require more caution. If the model of your photo shoot is a minor, you need a model release signed by a parent or guardian.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>Working with Property Releases</h3>
                                    <p>Just as people are recognizable so are private locations and property. Like a model release, a <a href="https://static.500px.net/docs/PropertyReleaseForm.pdf" target='blank'> property release</a> is a binding legal agreement between a photographer and the owner or authorized representative of a potentially recognizable private property. For photos taken on private property, or on public property where a distinctive private property is featured, obtaining a signed release will ensure all parties approve of the property being featured in photos intended for commercial purposes. Here are some examples:</p>
                                    <li>Private home, interior and exterior</li>
                                    <li>Museums and galleries</li>
                                    <li>Amusement parks</li>
                                    <li>Some National Parks</li>
                                    <p>For the latter three, we recommend you look online for their photography rules before you visit e.g. Uluru-Kata Tjuta National Park in Australia (Ayers Rock) has their photography restrictions posted on their official website here. Photography guidelines are often posted in the ‘Media’ or ‘Filming’ section of a website.</p>
                                    <p><a href="https://static.500px.net/docs/PropertyReleaseForm.pdf" target='blank'>Property Releases</a> may also required if a product or work of art is featured in the photo, even public art is protected by copyright law. Here are some other examples to keep in mind:</p>
                                    <li>Graffiti, street art, murals</li>
                                    <li>Modern statues</li>
                                    <li>Sheet music</li>
                                    <li>Book or magazine covers</li>
                                    <li>Recognizable or uniquely identifiable animals (show dogs, race horses, or other unique pets)</li>
                                    <li>Tattoos</li>
                                    <li>Photographs</li>
                                    <p>The general questions you have to ask yourself in order to determine whether you need a <a href="https://static.500px.net/docs/PropertyReleaseForm.pdf"> property release</a> are:</p>
                                    <li>Would I recognize the property or artwork if it belonged to me?</li>
                                    <li>Is the property the main focus of the image or just a small part?</li>
                                    <li>Even if the property in the photos is not the main focus of the composition, could it be cropped in a way that features the property?</li>
                                    <p>As a contributor, it is your responsibility to know when a release is required. To avoid having your photos declined for licensing <span style={{ fontWeight: "bold" }}>we strongly recommend</span> you research your potential locations online ahead of time to find out if there are any photography restrictions in place. If you’re unsure, you can always check with us ahead of time. Many properties and locations post their photography guidelines on their official website, on signs throughout the property, or on admission tickets e.g. concert tickets will often say “no photography allowed”. It doesn’t hurt to check ahead of time so that you’re prepared in case there are restrictions.</p>
                                    <p>For more information about specific property and legal restrictions please check out our distribution partner’s resource, the <a href="http://wiki.gettyimages.com/" target='blank'>Getty Images Wiki page</a>, a common resource of knowledge about Intellectual Property (including trademark, copyright, etc.), privacy and private property rights that you need to be aware of any time you are creating or submitting content. You can also review <a href="https://iso.500px.com/understanding-the-differences-between-commercial-editorial-photography/" target='blank'> this article</a> on Creative (Commercial) and Editorial photography for further details.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>This sounds like a lot of work</h3>
                                    <p>At first it does, and when you’re not used to working with releases it may seem restrictive. However, besides being one of the largest legal risks of working as a commercial photographer, having the piece of mind that your models and location owners are all consenting is well worth the effort.</p>
                                    <p>After having your first few releases signed, you’ll notice how easy it is, how quickly it can be done, and when and how best to approach your models and subjects. Speak with any professional commercial photographer and they’ll tell you it’s a necessary and painless process once you’ve become proficient at it.</p>
                                    <p>You can download a model release or property release below:</p>
                                    <a href="https://static.500px.net/docs/ModelReleaseForm.pdf" target='blank'>Model Release</a>
                                    <a href="https://static.500px.net/docs/PropertyReleaseForm.pdf" target='blank'>Property Release</a>
                                    <p>Thanks to technological advances, you can even use a mobile app to legally collect and store your model releases. Also, if you need releases in another language we recommend our distribution partner resource - <a href="https://contributors.gettyimages.com/article.aspx?article_id=3069#1" target='blank'>Getty Images Releases in 23 different languages</a>, or the <a href="https://applicationgap.com/apps/easyrelease/" target='blank'> Easy Release</a> app.</p>
                                    <i style={{fontWeight:"bold"}}>Note: This article should serve as a general guideline. Some jurisdictions have special laws regarding privacy, language issues on legal contracts, or other special considerations. Please ensure that your model releases comply with your local laws.</i>
                                </div>
                                <a style={{ width: "100%", textAlign: "end", paddingTop: "30px", color: '#2995F9', textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "end", gap: "10px" }} href="/licensing/keywording">Choosing keywords<FaChevronRight /></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Releases
