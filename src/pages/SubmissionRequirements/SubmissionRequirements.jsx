import React, { useState } from 'react'
import styles from '../../components/LicensingStarting/LicensingStarting.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import srone from '../../about/dust.ad8064a8.jpg';
import srtwo from '../../about/hdr_bad_1.92f7751d.jpg';
import srothree from '../../about/hdr_bad_2.40faadeb.jpg';
import srofour from '../../about/filter_bad.061a5445.jpg';
import srofive from '../../about/hdr_good.979a2bbd.jpg';
import srosix from '../../about/chromatic.341a2d15.jpg';
import sroseven from '../../about/posterization.9b6146a6.jpg';
import sroeight from '../../about/banding.dd3e0964.jpg';
import sronine from '../../about/noise_1.30415820.jpg';
import sroten from '../../about/noise_2.12a210e6.jpg';
import sroeleven from '../../about/noise_3.2e5fe071.jpg';
import srotwelve from '../../about/noise_4.d52a49cd.jpg';
import srothirteen from '../../about/sharpening_1.087bfb67.jpg';
import srofourteen from '../../about/sharpening_2.49392eab.jpg';
import srofifteen from '../../about/before.0ba3c5f1.jpg';
import { FaChevronRight } from 'react-icons/fa6';

const SubmissionRequirements = () => {
    const [menuhelp, sethelpmenu] = useState(false);
    const helpmenu = () => {
        sethelpmenu(!menuhelp);
    };
    return (
        <div style={{ width: "100%", gap: "100px", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <div className={styles.LicensingStarting}>
                <div className={styles.LicensingStartingContainer}>
                    <div className={styles.LicensingStartingContainerTop}>
                        <h2>500px Licensing: Get Started</h2>
                        <p>Easily license your photos for stock usage through 500px. It's quick to setup and completely optional for all membership levels.</p>
                    </div>.
                    <li style={{ listStyle: "none" }}><a onClick={helpmenu} className={styles.TableContents}>Table of Content
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M4.57926 7.03499C4.57933 6.73524 4.75993 6.46502 5.03687 6.35032C5.31381 6.23562 5.63258 6.299 5.84457 6.51093L11.2505 11.9168L16.6564 6.51093C16.9472 6.23002 17.4096 6.23404 17.6955 6.51996C17.9814 6.80589 17.9854 7.26821 17.7045 7.55906L11.7745 13.489C11.4851 13.7784 11.0159 13.7784 10.7264 13.489L4.79645 7.55906C4.65743 7.42008 4.57931 7.23157 4.57926 7.03499Z"
                                fill="#6D7378"></path>
                        </svg></a>
                        {menuhelp && (
                            <ul className={styles.licensingg}>
                                <a href="/licensing/licensing">Stock photo licensing</a>
                                <a href="/licensing/contribute">Become a contributor</a>
                                <a style={{ borderLeft: "3px solid #2986F7", fontWeight: "bold", backgroundColor: "#F7F8FA" }} href="/licensing/requirements#">Submission requirements</a>
                                <a href="/licensing/releases">Releases</a>
                                <a href="/licensing/keywording">Choosing keywords</a>
                                <a href="/licensing/content">Content types</a>
                                <a href="/licensing/distribution">Distribution</a>

                            </ul>
                        )}
                    </li>
                    <div className={styles.LicensingStartingContainerBottom}>
                        <div className={styles.LicensingBottomNavbar}>
                            <a href="/licensing/licensing">Stock photo licensing</a>
                            <a href="/licensing/contribute">Become a contributor</a>
                            <a style={{ borderLeft: "3px solid #2986F7", fontWeight: "bold", backgroundColor: "#F7F8FA" }} href="/licensing/requirements#">Submission requirements</a>
                            <a href="/licensing/releases">Releases</a>
                            <a href="/licensing/keywording">Choosing keywords</a>
                            <a href="/licensing/content">Content types</a>
                            <a href="/licensing/distribution">Distribution</a>
                        </div>
                        <div className={styles.LicensingBottomDesk}>
                            <div className={styles.LicensingBottomDesk} id='#become-a-contributor'>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h2>Quality and technical requirements</h2>
                                    <p>What it takes for photos to be considered for our collection.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>Technical requirements</h3>
                                    <p>Our inspectors review each file to check for basic technical and quality requirements. Please review the requirements below before uploading and submitting your files for licensing. This will avoid unnecessary Changes required or Declined notices.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>File size and color mode</h3>
                                    <p>We require JPEG files with a minimum 3MP file size.</p>
                                    <p>Images must be saved in RGB color mode.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>Watermarks, trademarks and copyright</h3>
                                    <p>High resolution images must not contain watermarks, signatures, or photo borders. These elements must be removed, along with any other creative/personalized text before submitting your photo. Clients cannot use high resolution photos that contain watermarks.</p>
                                    <p>To avoid trademark infringement and to allow your images to be licensed for Creative (Commercial) use, prominent logos, branding, and company or product names must be removed. Not only is this a legal requirement but it also allows your images to be licensed to a wider variety of buyers. Branding includes registration numbers on boats, trains and vehicles.</p>
                                    <p>If you have recognizable artwork in your photo we require a <a href="https://static.500px.net/docs/PropertyReleaseForm.pdf" target='blank'>Property Release</a> signed by the creator/copyright owner of the work. Examples of this are drawings, paintings and photographs that are visible within your image.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>Quality requirements</h3>
                                    <p>Here are some items to keep in mind before submitting your photos.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>Retouching</h3>
                                    <p>A new French law was recently passed which obligates clients using Creative (Commercial) images in France to disclose whether the body shape of a model has been retouched to make them look thinner or larger. As of October 1st, 2017 we have updated our submission guidelines to require that Contributors submitting Creative (Commercial) images do not submit to us any images depicting models whose body shapes have been retouched to make them look thinner or larger. Similar to other licensing platforms in the industry, we will not accept images that have been manipulated in this way.</p>
                                    <p>Some basic retouching is important before submitting your image for licensing i.e. removal of facial blemishes, stray hairs, chipped nail polish or dirt under fingernails, etc. Simple retouching can make your image more appealing to buyers.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>Viewing your image</h3>
                                    <p>Always view your image at 100% zoom. At 100%, quality can be assessed more easily as technical problems are more obvious and easy to detect.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>The importance of your histogram</h3>
                                    <p>Check your highlights and shadows. If they are too dark or too light, consider reprocessing your files. Be mindful of exposure and contrast. You want to avoid any extreme ranges. In the example levels slider above, the photographer has pinched the shadows and highlights by 5. Your camera’s histogram shows you the tonal range from shadows to highlights. A histogram will show if the image is being under or overexposed. The darkest tone is 0 and the brightest is 255. While processing out your file, a general guideline is to not have your shadows go below 5. Only specular highlights or a light source should have a maximum reading of 253. You can make these adjustments in post-processing using curves or levels adjustments.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>Dust on the sensor</h3>
                                    <p>Sensor dust shows up on your image and should be retouched out before submitting. A client would prefer to buy a file where they don’t have to spend time retouching something as basic, but noticeable, as dust.</p>
                                    <img src={srone} alt="" />
                                    <p>To avoid this scenario, be careful when changing your lenses. Always be aware of your environment and avoid wind, dirt and dust.</p>
                                    <p>Mirror dust is visible when you look through your viewfinder, but sensor dust shows up in your image file. Be extremely careful if you clean the sensor yourself - better yet, get a professional to do it for you! If you do find your files have dust, please spend the time cleaning them up.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h1>Creative filters and HDR</h1>
                                    <p>HDR or High Dynamic Range must be used with caution. HDR can cause a ghosting effect, noise, extreme colour saturation, and can make the overall image too soft. Be especially careful using HDR when there are people present as skin tones often become too saturated or discoloured.</p>
                                    <p>Below are some extreme examples of technical issues seen with HDR filtering when viewed at 100% zoom (magnification)</p>
                                    <img src={srtwo} alt="" />
                                    <img src={srothree} alt="" />
                                    <p>Filters can produce fun and interesting effects, but be careful not to make the image more about the filter than the subject matter itself. Don’t limit the sales potential of your photo by overusing filters.</p>
                                    <img src={srofour} alt="" />
                                    <p>Here is a great example of HDR done well. Beautiful tones, no loss of detail, and the right amount of sharpening.</p>
                                    <img src={srofive} alt="" />
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>Chromatic aberration</h3>
                                    <p>Chromatic aberration or colour fringing is a line of colour which occurs between a light and dark area of an image. This fringing will show up when the image is printed. You can prevent this by stopping down your lens (use a high f-stop), avoid using a zoom lens at its maximum length, and use a high quality lens. You should remove fringing before submitting your file. Additionally, software such as Lightroom now has powerful anti-fringing algorithms that can help remove fringing.</p>
                                    <img src={srosix} alt="" />
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>Banding and posterization</h3>
                                    <p>Why shoot RAW files? By shooting RAW you are starting with the highest quality your camera allows at the highest bit depth. It gives you a smoother tonal range which helps prevent banding and posterization. Posterization is when there is a lack of tonal range. Be mindful of posterization when processing your files. Watch for excessive saturation and your highlight settings.</p>
                                    <img src={sroseven} alt="" />
                                    <p>Banding is sometimes hard to avoid so be careful with your file adjustments because they might exaggerate the effect. Be careful when adding noise to fix banding.</p>
                                    <img src={sroeight} alt="" />

                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>Digital noise and compression</h3>
                                    <p>Excessive noise greatly reduces photo quality and saleability. Limiting noise in your images is another reason to shoot RAW.</p>
                                    <p>Use a low ISO and avoid low light situations. Underexposing your image may introduce more noise in the shadows. Do not add unnecessary noise to cover up problems. It is much easier to reprocess your file so the problem can be corrected.</p>
                                    <img src={sronine} alt="" />
                                    <p>Sharpening your file will also sharpen noise. Be careful to lookout for this when you are sharpening your images.</p>
                                    <img src={sroten} alt="" />
                                    <p>Watch for noise when shooting in low light situations. Shoot RAW if possible. There is software available that is made specially for reducing noise.</p>
                                    <img src={sroeleven} alt="" />
                                    <p>Be careful when blurring or adding selective noise. You want the overall grain of the image to be uniform</p>
                                    <img src={srotwelve} alt="" />
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>Over sharpening</h3>
                                    <p>Sharpening is essential with digital photography but one must be careful with the amount applied. Over-sharpening can cause a haloing effect. You want to avoid “crispy” edges, especially noticeable in trees and any other high contrast areas.</p>
                                    <img src={srothirteen} alt="" />
                                    <img src={srofourteen} alt="" />
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>Before and after</h3>
                                    <p>A 500px inspector flagged this file for technical problems. This may have been caused when the file was processed and over-sharpened. Unnecessary noise was created in the sky and the highlights, as seen in the waves. This image was pushed too far, creating overblown highlights and loss of detail. The photographer responded by doing a fantastic job in correcting the issues.</p>
                                    <img src={srofifteen} alt="" />
                                    <img src={srofifteen} alt="" />
                                    <p>The 500px Creative Content Team is dedicated to helping you pull out that perfect image we believe is in everyone. We’re photographers too, and we strive to create a supportive and rewarding community experience for all our users - buyers and creators alike.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>Checklist</h3>
                                    <li>Files are saved as JPEGs in RGB colour</li>
                                    <li>High resolution photos are 3MP or higher in size</li>
                                    <li>No watermarks, borders or personalized text</li>
                                    <li>Visible logos and branding are removed</li>
                                    <li>No excessive sharpening, noise, visible dust, color banding, posterization</li>
                                </div>
                                <a style={{ width: "100%", textAlign: "end", paddingTop: "30px", color: '#2995F9', textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "end", gap: "10px" }} href="/licensing/releases#">Releases <FaChevronRight /></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default SubmissionRequirements
