import React, { useState } from 'react'
import styles from '../../components/LicensingStarting/LicensingStarting.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FaChevronRight } from 'react-icons/fa6';

const ChoosingKeywords = () => {
    const [menuhelp, sethelpmenu] = useState(false);
    const helpmenu = () => {
        sethelpmenu(!menuhelp);
    };

    return (
        <div>
            <Header />
            <div className={styles.LicensingStarting}>
                <div className={styles.LicensingStartingContainer}>
                    <div className={styles.LicensingStartingContainerTop}>
                        <h2>500px Licensing: Get Started</h2>
                        <p>Easily license your photos for stock usage through 500px. It's quick to setup and completely optional for all membership levels.</p>
                    </div>
                    <li style={{ listStyle: "none" }}><a onClick={helpmenu} className={styles.TableContents}>Table of Contents
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M4.57926 7.03499C4.57933 6.73524 4.75993 6.46502 5.03687 6.35032C5.31381 6.23562 5.63258 6.299 5.84457 6.51093L11.2505 11.9168L16.6564 6.51093C16.9472 6.23002 17.4096 6.23404 17.6955 6.51996C17.9814 6.80589 17.9854 7.26821 17.7045 7.55906L11.7745 13.489C11.4851 13.7784 11.0159 13.7784 10.7264 13.489L4.79645 7.55906C4.65743 7.42008 4.57931 7.23157 4.57926 7.03499Z"
                                fill="#6D7378"></path>
                        </svg></a>
                        {menuhelp && (
                            <ul className={styles.licensingg}>
                                <a href="/licensing/licensing">Stock photo licensing</a>
                                <a href="/licensing/contribute">Become a contributor</a>
                                <a href="/licensing/requirements">Submission requirements</a>
                                <a href="/licensing/releases">Releases</a>
                                <a style={{ borderLeft: "3px solid #2986F7", fontWeight: "bold", backgroundColor: "#F7F8FA" }} href="/licensing/keywording#">Choosing keywords</a>
                                <a href="/licensing/content">Content types</a>
                                <a href="/licensing/distribution">Distribution</a>

                            </ul>
                        )}
                    </li>
                    <div className={styles.LicensingStartingContainerBottom}>
                        <div className={styles.LicensingBottomNavbar}>
                            <a href="/licensing/licensing">Stock photo licensing</a>
                            <a href="/licensing/contribute">Become a contributor</a>
                            <a href="/licensing/requirements">Submission requirements</a>
                            <a href="/licensing/releases">Releases</a>
                            <a style={{ borderLeft: "3px solid #2986F7", fontWeight: "bold", backgroundColor: "#F7F8FA" }} href="/licensing/keywording#">Choosing keywords</a>
                            <a href="/licensing/content">Content types</a>
                            <a href="/licensing/distribution">Distribution</a>
                        </div>
                        <div className={styles.LicensingBottomDesk}>
                            <div className={styles.LicensingBottomDesk} id='#become-a-contributor'>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h2>Keywording Guidelines</h2>
                                    <p>Adding keywords to your photos help people search for and find your work. Here are some ideas to help you write the best keywords.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>Keywording</h3>
                                    <p>Why are keywords so important? Simple, better keywords equal discoverability. You exponentially increase the chances of your image being found and selling when you add relevant keywords. That’s why we encourage you to add at least 5 applicable keywords. This simple task will maximize your photos' discoverability and provide your work with the exposure it deserves. Keep in mind, we ask that you use English keywords whenever possible.</p>
                                    <p>Here are a few tips to get you started!</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <li style={{ listStyleType: "none" }}>1. <span style={{ fontWeight: "bold" }}>Stick to the facts</span>
                                        <p>Outline the most obvious attributes and use words that accurately describe who, what, when, where, and why. Describe what you see. Your keywords should truthfully represent what’s going on in the image.</p>
                                    </li>
                                    <li style={{ listStyleType: "none" }}>2. <span style={{ fontWeight: "bold" }}>Use conceptual keywords</span>
                                        <p>Once you’ve covered the basics, consider any concepts reflected in your photo. Concepts convey an idea or a feeling, although they must be evident to everyone viewing the photo. Avoid ambiguous or abstract concepts.</p>
                                    </li>
                                    <li style={{ listStyleType: "none" }}>3. <span style={{ fontWeight: "bold" }}>Think like a buyer</span>
                                        <p>Buyers generally search by subject matter or themes. They search for broad subjects, as well as more specific ones. So be sure to include a range of words to describe the content in your photo..</p>
                                    </li>
                                    <li style={{ listStyleType: "none" }}>4. <span style={{ fontWeight: "bold" }}>No spamming please!</span>
                                        <p>There is no benefit in tagging your photos with words or information that have no relevance to the subject matter. Doing this will only clutter search results with unsuitable images, which is a frustrating experience for buyers. For example, a photo of the Eiffel Tower should not be keyworded with “New York” or “London”. Please also avoid tagging your photos with camera gear, lens model, etc.</p>
                                    </li>



                                    <h3>Photos without people</h3>
                                    <p>If your photo doesn’t have people in it, here are some suggestions to describe your photo.</p>
                                    <h4>Composition & Style</h4>
                                    <li>Layout – Color background, Copy space, Cropped, Cut-out, White background</li>
                                    <li>Viewpoint – Aerial, Close-up, From above, From behind, From below, Looking up, Looking down</li>
                                    <li>Format - Vertical, Horizontal, Square, Panoramic</li>
                                    <li>Style – Blurred, Faded, Filtered, Silhouette, High contrast, Digital</li>
                                    <h4>Location & Time</h4>
                                    <li>Where - continent, country, region, city, place (applies more to outdoor and location images with or without people e.g. Europe, France, Paris, Montmartre)</li>
                                    <li>Add context - Indoors, Outdoors, Interior, Exterior, Studio shot</li>
                                    <li>Time of day - Morning, Night, Twilight, Sunset, Sunrise, Golden Hour</li>
                                    <h4>Animal & Nature</h4>
                                    <p>(must be the main focus of the photo)</p>
                                    <li>Common name of insect or flower - Insect, Caterpillar, Butterfly</li>
                                    <li>Scientific name of insect or flower - Monarch, Danaus plexippus </li>
                                    <li>Name of animal and/or breed - “Dog, Golden Lab, Labrador Retriever”</li>
                                    <li>Describe the colour or pattern - e.g. “Zebra, Stripes” or “Red, Rose”</li>
                                    <h4>Food & Drink</h4>
                                    <li>Type of meal - Breakfast, Lunch, Dinner, Dessert, Snack, Drink, Beverage</li>
                                    <li>Food group - Fruit, Vegetable, Protein, Junk food</li>
                                    <li>Get more specific - Apple, Celery, Steak, Cheeseburger, Coffee, Cappuccino</li>
                                    <li>Add concepts (sparingly) - Healthy, Organic, Raw, Sweet, Sweet tooth, Decadent</li>
                                    <h4>Concepts & Still Life</h4>
                                    <li>Thoughts, feelings, emotions and ideas (go light – use 3-4 concepts at most) - Happiness, Togetherness, Bonding, Connected</li>
                                    <li>Describe size of the object - Big, Large, Small, Miniature</li>
                                    <h3>Photos with people</h3>
                                    <p>If your photo does have people in it, take a quick look at these keyword suggestions:</p>
                                    <li><span style={{ fontWeight: "bold" }}>Age Range</span>
                                        <p>40-44 years, 70s adult, Baby, Toddler, Teenager</p>
                                    </li>
                                    <li><span style={{ fontWeight: "bold" }}>Combine age and gender</span>
                                        <p>Baby boy, Senior woman</p>
                                    </li>
                                    <li><span style={{ fontWeight: "bold" }}>Ethnicity</span>
                                        <p>Chinese ethnicity or Asian ethnicity (be as specific as possible, but broader is acceptable)</p>
                                    </li>
                                    <li><span style={{ fontWeight: "bold" }}>Total number of people depicted</span>
                                        <p>3 people, Large group, Nobody</p>
                                    </li>
                                    <li><span style={{ fontWeight: "bold" }}>Portrait</span>
                                        <p>Portrait, Pose, Full-length, Head and shoulders, etc,.</p>
                                    </li>
                                    <li><span style={{ fontWeight: "bold" }}>Eye contact</span>
                                        <p>Use ‘Looking at camera’ or ‘Looking away from camera’ when people are the focus of the photo</p>
                                    </li>
                                    <li><span style={{ fontWeight: "bold" }}>Roles</span>
                                        <p>Mother Parent, Grandmother, Grandparent, Family, Couple, Kids, Painter, Hiker, Skiier</p>
                                    </li>
                                    <li><span style={{ fontWeight: "bold" }}>Actions</span>
                                        <p>Painting, Hiking, Swimming, Jogging, Jumping, Working</p>
                                    </li>
                                    <li><span style={{ fontWeight: "bold" }}>Events or holidays</span>
                                        <p>Meeting, Wedding, Christmas, Birthday, Party</p>
                                    </li>
                                    <p>For more information and examples check out this helpful article, or this article on titling your images.</p>
                                </div>
                                <a style={{ width: "100%", textAlign: "end", paddingTop: "30px", color: '#2995F9', textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "end", gap: "10px" }} href="/licensing/content">Content types<FaChevronRight /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default ChoosingKeywords
