import React from 'react'
import styles from '../../components/LicensingStarting/LicensingStarting.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const BecomeAContributor = () => {
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
                            <a style={{ borderLeft: "3px solid #2986F7", fontWeight: "bold", backgroundColor: "#F7F8FA" }} href="/licensing/contribute#">Become a contributor</a>
                           <a href="/licensing/requirements">Submission requirements</a>
                            <a href="/licensing/releases">Releases</a>
                            <a href="/licensing/keywording">Choosing keywords</a>
                            <a href="/licensing/content">Content types</a>
                            <a href="/licensing/distribution">Distribution</a>
                        </div>
                        <div className={styles.LicensingBottomDesk}>
                            <div className={styles.LicensingBottomDesk} id='#become-a-contributor'>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h1>How to contribute your photos</h1>
                                    <p>Learn the ins and outs of how to submit your photos, the review process, and more.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>How do I submit my photos for commercial licensing?</h3>
                                    <p>To enable your photos for licensing, you must first agree to the terms of our <a href="https://static.500px.net/docs/contributor_licensing_agreement.pdf" target='blank'>Contributor Licensing Agreement.</a>  Photos must be uploaded and submitted to 500px pass a content inspection before they can be licensed. To upload your high resolution images, simply visit your Photo Manager or Licensing Manager, select the photo(s) you'd like to submit, and enable the Licensing option at the top of the right hand sidebar.</p>
                                    <p>Make sure to provide high-quality, relevant keywords so that your photos can be discovered on our partner platforms. Attach model releases for photos that have recognizable people, and be sure to check that your submissions do not contain borders or personalized watermarks. By submitting images for licensing you are accepting the terms laid out in the 500px <a href="https://static.500px.net/docs/contributor_licensing_agreement.pdf" target='blank'>Contributor Licensing Agreement.</a></p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>How do I re-submit content that was previously reviewed?</h3>
                                    <p>If you made changes to your submission, suggested by our inspector/reviewer, you are encouraged to re-submit photos that were rejected. You can review the suggested changes in the following way:</p>
                                    <li>Rejected photos will appear under the 'Changes Required' folder. Go to the Licensing Manager and under Submission status, click on the 'Changes required' folder in the left-hand sidebar. To review the necessary changes, click on a photo. The 'Changes Required' text in red in the right hand sidebar will provide details of the required changes, guiding you through the licensing errors.</li>
                                    <p>Once revisions have been made, click the “Submit” button at the bottom of the right-hand sidebar of the Licensing Manager.</p>
                                    <p>Photos that were originally approved but have since been removed by you or 500px will need to be re-submitted and reviewed like any other new submission. Photos that have been declined by our photo inspectors cannot be re-submitted.</p>
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
                                    <h3>Review Notifications and Rejection Reasons</h3>
                                    <p>You can check the status of your submissions in the Licensing Managerand review the Submission status folders in the left-hand sidebar for more details. The definitions of the Submission status folders are as follows:</p>
                                    <p><span style={{ fontWeight: "bold" }}>Not submitted:</span> Not submitted consists of photos that are available on your profile in various privacy states, but have not been submitted to 500px Licensing before. You’ll be able to select single or multiple photos from the Not submitted folder and submit them for Licensing directly in the Licensing Manager.</p>
                                    <p><span style={{ fontWeight: "bold" }}>Under review:</span>The Under review folder houses all of your photos that are pending review by our inspectors. Photos in the Under review folder cannot be edited or modified until our inspectors have reviewed the photo(s).</p>
                                    <p><span style={{ fontWeight: "bold" }}>Declined:</span> The Declined folder holds your photos that have been declined for Licensing. When a photo is clicked on, details are shown in the right side panel. At the top of the right side panel, under Reason for Decline, it will give a reason why the photo was not accepted. Photos deemed unsuitable for licensing are permanently rejected and may not be resubmitted. These are generally photos that cannot be fixed or do not meet buyer needs. The following outlines the most common reasons photos are declined:</p>
                                    <p><span style={{ fontWeight: "bold" }}>Changes required:</span>The Changes required folder is where you can see your photos that have been reviewed, but soft failed because they have an issue that needs to be fixed before it re-inspection or acceptance. Click on a photo and you will see information displayed about the changes required in the right side panel. At the top of the right side panel, under Changes required, it will provide a description of the issue that needs to be addressed.</p>
                                    <p>Here are the possible reasons for Changes required:</p>
                                    <li><span style={{ fontWeight: "bold" }}>Quality</span> <p>Potential reasons for a quality rejection are compression damage (visible pixels), digital noise, colour fringing, banding, visible retouching, outlines caused by over-sharpening, dust spots, focus, damage caused by filters such as HDR.</p></li>
                                    <li><span style={{ fontWeight: "bold" }}>Watermark or Photo Borders</span> <p>High resolution photos will not be accepted with watermarks, signatures, or photo borders</p></li>
                                    <li><span style={{ fontWeight: "bold" }}>Copyright</span> <p>If your photo contains any visible branding or logos on buildings, clothing, electronics, sporting equipment, store fronts, etc., it may be rejected or considered for editorial licensing instead. This includes names and registration numbers on boats, trains, vehicles, and animal tags (e.g. livestock or pet tags).</p></li>
                                    <li><span style={{ fontWeight: "bold" }}>Model or Property release required</span> <p>Recognizable people or private locations require a release to ensure all parties agree to the terms of commercial licensing.</p></li>
                                    <li><span style={{ fontWeight: "bold" }}>Permission required</span> <p>Ticketed events, museums, and other locations that charge admission may not be suitable for licensing without permission. We suggest asking a representative of the location about any commercial photography restrictions they have in place before taking photos intended for commercial licensing.</p></li>
                                    <p><span style={{ fontWeight: "bold" }}>Declined:</span> The Declined folder holds your photos that have been declined for Licensing. When a photo is clicked on, details are shown in the right side panel. At the top of the right side panel, under Reason for Decline, it will give a reason why the photo was not accepted. Photos deemed unsuitable for licensing are permanently rejected and may not be resubmitted. These are generally photos that cannot be fixed or do not meet buyer needs. The following outlines the most common reasons photos are declined:</p>

                                    <li>Content / subject is not commercially or editorially viable</li>
                                    <li>Image has poor composition/lacks visual impact</li>
                                    <li>Subject matter would not appeal to buyers</li>
                                    <li>Subject matter does not convey enough editorial or newsworthy context</li>
                                    <li>We already have too many similars in our collection</li>
                                    <li>Technical quality or production value is below our minimum standards when viewed at 100%</li>
                                    <li>Main subject is blurry or out of focus</li>
                                    <li>Image does not have a clear focal point</li>
                                    <li>Significant banding or digital compression</li>
                                    <li>Excessive noise or other technical problems that cannot be fixed</li>
                                    <li>Includes intellectual property that is ineligible for royalty-free licensing</li>
                                    <li>Some subjects are not suitable for licensing e.g. Disney theme parks, or museum and gallery interiors</li>
                                    <li>If you’re unsure, check the official website of the building or location for any photography restrictions they may have in place</li>
                                    <li>Subject matter does not convey enough editorial or newsworthy context</li>
                                    <li>Submission is a duplicate or too similar to a photo you have already submitted</li>
                                    <li>While we encourage variations or series of photos each individual image must offer a significant difference in lighting, composition, pose, facial expression, models or props, etc. Images that are nearly identical apart from a very slight difference may be considered too similar</li>
                                    <li>Subject matter may be considered unsuitable or offensive</li>
                                    <li>Graphic nudity</li>
                                    <li>Children without model releases - editorial content must have context to be considered for licensing</li>
                                    <li>Depictions of violence or cruelty</li>
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

export default BecomeAContributor
