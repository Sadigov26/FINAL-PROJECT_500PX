import React from 'react'
import styles from './Looking.module.scss'
import playmarket from '../../about/image.png'
import appstore from '../../about/image copy.png'
import apps from '../../about/devices_desktop@2x.b629f971.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'

const Looking = () => {
    const navigation = useNavigate()

    return (
        <div>
            <div className={styles.looking}>
                <div className={styles.signUpHome}>
                    <p>Get inspired with incredible photos from diverse styles and genres around the world. We're not guided by fads—just great photography.</p>
                    <button onClick={() => navigation("/signup")}>Sign up</button>
                </div>
                <div className={styles.lookingContainer}>
                    <div className={styles.inspiration}>
                        <div className={styles.inspirationDesc}>
                            <div className={styles.inspirationLeft}>
                                <h3>Looking for inspiration?</h3>
                                <p>Get started by customizing your content feed and uncover endless inspiration.</p>
                            </div>
                            <div className={styles.inspirationRight}>
                                <button>Get your recommendations <FontAwesomeIcon icon={faAngleRight} /></button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.whatMakesUsDifferent}>
                        <div className={styles.whatMakesUsDifferentTop}>
                            <h1>What makes us different</h1>
                        </div>
                        <div className={styles.whatMakesUsDifferentBottom}>
                            <div className={styles.whatMakesUsDifferentBottomCard}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0__vaGDZUwo)">
                                        <path
                                            d="M23.8001 1.80001C23.7001 1.60001 23.5001 1.40001 23.3001 1.30001C21.0001 0.700013 18.6001 1.30001 17.0001 3.00001C15.4001 4.60001 14.8001 7.00001 15.3001 9.20001V18.6C15.3001 19 15.6001 19.3 16.0001 19.3C16.4001 19.3 16.7001 19 16.7001 18.6V9.90001C17.0001 9.90001 17.2001 10 17.5001 10C19.2001 10 20.9001 9.30001 22.1001 8.10001C23.7001 6.40001 24.4001 4.00001 23.8001 1.80001ZM21.1001 7.10001C20.1001 8.10001 18.8001 8.60001 17.5001 8.60001L20.5001 5.60001C20.8001 5.30001 20.8001 4.90001 20.5001 4.60001C20.2001 4.30001 19.8001 4.30001 19.5001 4.60001L16.5001 7.60001C16.5001 6.30001 17.0001 5.00001 18.0001 4.00001C19.2001 2.80001 20.9001 2.30001 22.5001 2.60001C22.8001 4.20001 22.3001 5.90001 21.1001 7.10001Z"
                                            fill="#222222"></path>
                                        <path
                                            d="M10.0001 2.7C7.60006 0.399999 4.10006 -0.500001 0.80006 0.299999C0.60006 0.399999 0.40006 0.599999 0.30006 0.799999C-0.49994 4.1 0.40006 7.6 2.70006 10C4.50006 11.8 6.90006 12.7 9.40006 12.7C9.90006 12.7 10.4001 12.6 11.0001 12.6V23.3C11.0001 23.7 11.3001 24 11.7001 24C12.1001 24 12.4001 23.7 12.4001 23.3V11.8C13.2001 8.5 12.3001 5.1 10.0001 2.7ZM3.70006 9C1.80006 7 1.00006 4.3 1.60006 1.6C4.30006 0.999999 7.00006 1.8 9.00006 3.7C10.7001 5.4 11.5001 7.8 11.3001 10.2L6.30006 5.5C6.00006 5.2 5.60006 5.2 5.30006 5.5C5.00006 5.8 5.00006 6.3 5.30006 6.5L10.2001 11.2C7.80006 11.5 5.50006 10.7 3.70006 9Z"
                                            fill="#222222"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0__vaGDZUwo">
                                            <rect width="24" height="24" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h3>Grow as a photographer</h3>
                                <p>Get immediate exposure with your first upload. Our Pulse algorithm surfaces new photographs and
                                    photographers, ensuring your photos are seen by the community so you receive valuable feedback on
                                    day one.</p>
                            </div>
                            <div className={styles.whatMakesUsDifferentBottomCard}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_15900:42041__pWKCATWS" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"
                                    >
                                        <path d="M0 6.10352e-05H24V24.0001H0V6.10352e-05Z" fill="white"></path>
                                    </mask>
                                    <g mask="url(#mask0_15900:42041__pWKCATWS)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M5.16056 22.3225L1.68357 18.8576L2.77004 17.7749L4.24982 19.2481C4.3851 19.3843 4.56362 19.4524 4.74215 19.4524C4.92067 19.4524 5.09919 19.3843 5.23587 19.2481C5.50784 18.9771 5.50784 18.5365 5.23587 18.2655L3.75609 16.7922L4.74215 15.8082L5.23587 16.3002C5.37116 16.4364 5.54968 16.5031 5.7282 16.5031C5.90672 16.5031 6.08524 16.4364 6.22192 16.3002C6.49389 16.0292 6.49389 15.5886 6.22192 15.3176L5.7282 14.8256L6.71425 13.8429L7.20937 14.3349C7.34466 14.4712 7.52318 14.5379 7.7017 14.5379C7.88022 14.5379 8.05874 14.4712 8.19542 14.3349C8.46739 14.0639 8.46739 13.6233 8.19542 13.3523L7.7003 12.8603L7.99877 12.5643L11.4758 16.0292L5.16056 22.3225ZM6.06153 6.7032L18.0629 18.6602L17.0755 19.6428L5.07548 7.68584L6.06153 6.7032ZM2.29305 1.96516C2.69891 1.56071 3.23169 1.35917 3.76307 1.35917C4.29584 1.35917 4.82862 1.56071 5.23447 1.96516L7.04061 3.76225L4.09919 6.69347L2.29305 4.89499C1.48273 4.08609 1.48273 2.77267 2.29305 1.96516ZM18.5497 2.04994L22.0267 5.51348L16.406 11.116L13.8746 8.59203C13.9611 8.55728 14.042 8.50725 14.1117 8.43775C14.3837 8.16534 14.3837 7.72614 14.1117 7.45512L13.618 6.96311L14.6041 5.98047L15.0978 6.47249C15.2345 6.6073 15.413 6.67541 15.5915 6.67541C15.7686 6.67541 15.9472 6.6073 16.0838 6.47249C16.3558 6.20007 16.3558 5.76088 16.0838 5.48985L15.5915 4.99784L16.5776 4.01521L18.056 5.48985C18.1926 5.62467 18.3712 5.69277 18.5497 5.69277C18.7282 5.69277 18.9053 5.62467 19.042 5.48985C19.314 5.21744 19.314 4.77824 19.042 4.50722L17.5636 3.03257L18.5497 2.04994ZM19.5399 19.1536C19.5413 19.1522 19.5427 19.1522 19.5427 19.1522C19.5427 19.1522 19.5441 19.1508 19.5441 19.1494L20.7421 17.9555L21.4395 19.8527L20.2442 21.0424L18.3405 20.3475L19.5399 19.1536ZM11.4493 8.14032C11.4507 8.14032 11.4507 8.14171 11.4507 8.14171H11.452L15.9123 12.5865C15.9123 12.5879 15.9123 12.5879 15.9137 12.5893C15.9151 12.5907 15.9151 12.5907 15.9165 12.5907L20.035 16.6949L19.049 17.6776L7.04898 5.72057L8.03503 4.73793L11.4493 8.14032ZM23.9583 22.6616L21.6766 16.4559C21.6752 16.4517 21.671 16.4489 21.6682 16.4448C21.6348 16.3558 21.5832 16.2724 21.5148 16.2043L17.3935 12.0987L23.505 6.00549C23.6361 5.87484 23.7101 5.69833 23.7101 5.51348C23.7101 5.32863 23.6361 5.15211 23.505 5.02286L19.042 0.576681C18.77 0.304268 18.3279 0.304268 18.056 0.576681L11.943 6.66707L8.52736 3.26329C8.51202 3.24939 8.49389 3.24383 8.47855 3.23132L6.22053 0.982521C4.90672 -0.326731 2.62081 -0.328121 1.307 0.982521C-0.0458595 2.33069 -0.0458595 4.52668 1.307 5.87762L3.55944 8.11947C3.57339 8.13893 3.58036 8.16117 3.5971 8.17646L7.01272 11.5802L0.203792 18.3656C-0.0681747 18.638 -0.0681747 19.0772 0.203792 19.3482L4.66683 23.7971C4.80351 23.932 4.98203 24.0001 5.16056 24.0001C5.33908 24.0001 5.5176 23.932 5.65428 23.7971L12.4618 17.0118L16.5818 21.1175C16.6543 21.1898 16.738 21.2398 16.8258 21.2718C16.83 21.2745 16.8314 21.2773 16.8356 21.2787L23.0629 23.5539C23.141 23.5817 23.2219 23.5956 23.3028 23.5956C23.4841 23.5956 23.6626 23.5247 23.7951 23.3927C23.9876 23.2009 24.0504 22.916 23.9583 22.6616Z"
                                            fill="#222222"></path>
                                    </g>
                                </svg>
                                <h3>Build your career</h3>
                                <p>Market yourself as a professional photographer. Show that you’re available for hire on your Profile
                                    and get discovered in Search results, showcase your articles, presents, videos, and more with
                                    Resources, and create a Portfolio website to showcase your work.</p>
                            </div>
                            <div className={styles.whatMakesUsDifferentBottomCard}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M23.3 22.6H21.2V4.9C21.2 4.5 20.9 4.2 20.5 4.2C20.1 4.2 19.8 4.5 19.8 4.9V22.5H18.4V9.2C18.4 8.8 18.1 8.5 17.7 8.5C17.3 8.5 17 8.8 17 9.2V22.6H15.6V13.4C15.6 13 15.3 12.7 14.9 12.7C14.5 12.7 14.2 13 14.2 13.4V22.6H12.8V12C12.8 11.6 12.5 11.3 12.1 11.3C11.7 11.3 11.4 11.6 11.4 12V22.6H9.9V16.2C9.9 15.8 9.6 15.5 9.2 15.5C8.8 15.5 8.5 15.8 8.5 16.2V22.6H7.1V17.7C7.1 17.3 6.8 17 6.4 17C6 17 5.7 17.3 5.7 17.7V22.6H4.2V14.8C4.2 14.4 3.9 14.1 3.5 14.1C3.1 14.1 2.8 14.4 2.8 14.8V22.6H1.4V0.7C1.4 0.3 1.1 0 0.7 0C0.3 0 0 0.3 0 0.7V23.3C0 23.7 0.3 24 0.7 24H23.3C23.7 24 24 23.7 24 23.3C24 22.9 23.7 22.6 23.3 22.6Z"
                                        fill="#222222"></path>
                                </svg>
                                <h3>See how you `re performing</h3>
                                <p>With Statistics and Pulse you get valuable insights into how your photos are performing and how you
                                    rank in comparison to other photographers in the community.</p>
                            </div>
                            <div className={styles.whatMakesUsDifferentBottomCard}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M24 6.77647C24 5.64706 23.0118 4.65882 21.8824 4.65882C20.7529 4.65882 19.7647 5.64706 19.7647 6.77647C19.7647 7.48235 20.1882 8.18824 20.6118 8.47059L17.0824 12.5647L12.9882 3.95294C13.6941 3.67059 14.1176 2.96471 14.1176 2.11765C14.1176 0.988235 13.1294 0 12 0C10.8706 0 9.88235 0.988235 9.88235 2.11765C9.88235 2.96471 10.3059 3.67059 11.0118 3.95294L6.91765 12.5647L3.38824 8.61176C3.81176 8.18824 4.23529 7.48235 4.23529 6.77647C4.23529 5.64706 3.24706 4.65882 2.11765 4.65882C0.988235 4.65882 0 5.64706 0 6.77647C0 7.76471 0.705882 8.61176 1.55294 8.75294L3.95294 19.7647H3.52941C3.10588 19.7647 2.82353 20.0471 2.82353 20.4706V23.2941C2.82353 23.7176 3.10588 24 3.52941 24H20.4706C20.8941 24 21.1765 23.7176 21.1765 23.2941V20.4706C21.1765 20.0471 20.8941 19.7647 20.4706 19.7647H20.0471L22.4471 8.89412C23.2941 8.61176 24 7.76471 24 6.77647ZM21.8824 6.07059C22.3059 6.07059 22.5882 6.35294 22.5882 6.77647C22.5882 7.2 22.3059 7.48235 21.8824 7.48235C21.4588 7.48235 21.1765 7.2 21.1765 6.77647C21.1765 6.35294 21.4588 6.07059 21.8824 6.07059ZM12 1.41176C12.4235 1.41176 12.7059 1.69412 12.7059 2.11765C12.7059 2.54118 12.4235 2.82353 12 2.82353C11.5765 2.82353 11.2941 2.54118 11.2941 2.11765C11.2941 1.69412 11.5765 1.41176 12 1.41176ZM2.11765 6.07059C2.54118 6.07059 2.82353 6.49412 2.82353 6.77647C2.82353 7.05882 2.54118 7.48235 2.11765 7.48235C1.69412 7.48235 1.41176 7.2 1.41176 6.77647C1.41176 6.35294 1.69412 6.07059 2.11765 6.07059ZM19.7647 22.5882H4.23529V21.1765H4.8H19.2H19.7647V22.5882ZM18.6353 19.7647H5.36471L3.38824 10.7294L6.49412 14.2588C6.63529 14.4 6.91765 14.5412 7.05882 14.5412C7.34118 14.5412 7.48235 14.4 7.62353 14.1176L11.8588 5.08235L16.0941 14.1176C16.2353 14.4 16.3765 14.5412 16.6588 14.5412C16.9412 14.5412 17.0824 14.5412 17.2235 14.2588L20.3294 10.7294L18.6353 19.7647Z"
                                        fill="#222222"></path>
                                    <path
                                        d="M12 12.7059C10.8706 12.7059 9.88232 13.6941 9.88232 14.8235C9.88232 15.9529 10.8706 16.9412 12 16.9412C13.1294 16.9412 14.1176 15.9529 14.1176 14.8235C14.1176 13.6941 13.1294 12.7059 12 12.7059ZM12 15.5294C11.5764 15.5294 11.2941 15.247 11.2941 14.8235C11.2941 14.4 11.5764 14.1176 12 14.1176C12.4235 14.1176 12.7059 14.4 12.7059 14.8235C12.7059 15.247 12.4235 15.5294 12 15.5294Z"
                                        fill="#222222"></path>
                                </svg>
                                <h3>Sell your work</h3>
                                <p>Earn one of the highest royalty rates in the industry when you distribute your photography through
                                    500px to a global marketplace, where buyers can view and purchase your work for commercial usage.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className={styles.getTheApp}>
                        <div className={styles.getTheAppLeft}>
                            <div className={styles.getTheAppLeftDesk}>
                                <h1>Get the app</h1>
                                <p>Join our community of over 16 million like-minded photographers. Download the 500px app for Android and iOS today!</p>
                            </div>
                            <div className={styles.getTheAppStore}>
                                <a href="https://apps.apple.com/us/app/500px-photo-sharing-community/id471965292"><img src={appstore} alt="" /></a>
                                <a href="https://play.google.com/store/apps/details?id=com.fivehundredpx.viewer"><img src={playmarket} alt="" /></a>
                            </div>
                        </div>
                        <div className={styles.getTheAppRight}>
                            <img src={apps} alt="" />
                        </div>
                    </div>
                </div>
                <img className={styles.yellowBottom} src="https://500px.com/staticV2/media/yellow_swirl_desktop.bd04ab3a.svg" alt="" />
            </div>
        </div>
    )
}

export default Looking
