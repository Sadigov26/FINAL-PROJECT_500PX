import React, { useState } from 'react';
import styles from './Header.module.scss';
import Modal from '../Modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);


  return (
    <div>
      <header>
        <div className={styles.containerHeader}>
          <div className={styles.containerHeaderLeft}>
            <div className={styles.containerHeaderLogo}>
              <div className={styles.title}>
                <a href="/"> <svg class='logo' id="logo_svg" data-name="Logo SVG" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 80 20">
                  <title>500px</title>

                  <path
                    d="M24.83,0a10,10,0,1,0,10,10h0A10.09,10.09,0,0,0,24.83,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.9,7.9,0,0,1,24.83,17.9ZM46.32,0a10,10,0,1,0,10,10h0A10,10,0,0,0,46.32,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.77,7.77,0,0,1,46.32,17.9ZM7.63,6a6.74,6.74,0,0,0-5.3,1.4V2.1h9c0.3,0,.5-0.1.5-1s-0.4-.9-0.6-0.9H1.33a0.9,0.9,0,0,0-.9.9V9.9c0,0.5.3,0.6,0.8,0.7a0.76,0.76,0,0,0,.9-0.2h0a5.69,5.69,0,0,1,5-2.4,5.2,5.2,0,0,1,4.5,4.4A5.06,5.06,0,0,1,7.23,18H6.63a5.1,5.1,0,0,1-4.7-3.3c-0.1-.3-0.3-0.5-1.1-0.2s-0.9.5-.8,0.8a7.09,7.09,0,0,0,9,4.2,7.09,7.09,0,0,0,4.2-9A7,7,0,0,0,7.63,6ZM63.12,0.1a5.42,5.42,0,0,0-4.8,5.4v8.9c0,0.5.4,0.6,1,.6s1-.1,1-0.6V5.5a3.36,3.36,0,0,1,2.9-3.4,3.29,3.29,0,0,1,2.5.8,3.19,3.19,0,0,1,1.1,2.4,4,4,0,0,1-.7,1.9,3.15,3.15,0,0,1-2.8,1.3h0c-0.4,0-.7,0-0.8.9,0,0.6,0,.9.5,1a4.92,4.92,0,0,0,2.9-.6,5.37,5.37,0,0,0,2.9-4.2A5.18,5.18,0,0,0,64,0,2.77,2.77,0,0,1,63.12.1Zm13.1,5.2,3.6-3.6c0.1-.1.4-0.4-0.2-1.1a1,1,0,0,0-.7-0.4h0a0.52,0.52,0,0,0-.4.2L74.92,4l-3.6-3.7c-0.3-.3-0.6-0.2-1.1.2s-0.5.8-.2,1.1l3.6,3.6L70,8.9h0a0.76,0.76,0,0,0-.2.4,0.84,0.84,0,0,0,.4.7,1.61,1.61,0,0,0,.7.4h0a1.06,1.06,0,0,0,.5-0.2L75,6.6l3.6,3.6a0.52,0.52,0,0,0,.4.2h0a1,1,0,0,0,.7-0.4c0.3-.4.4-0.8,0.1-1Z"
                    transform="translate(0)"></path>
                </svg></a>
              </div>
            </div>
            <div className={styles.containerHeaderNavbar}>
              <ul>
                <li><a href="#">Discover</a></li>
                <li><a onClick={toggleMenu} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>Licensing
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M4.57926 7.03499C4.57933 6.73524 4.75993 6.46502 5.03687 6.35032C5.31381 6.23562 5.63258 6.299 5.84457 6.51093L11.2505 11.9168L16.6564 6.51093C16.9472 6.23002 17.4096 6.23404 17.6955 6.51996C17.9814 6.80589 17.9854 7.26821 17.7045 7.55906L11.7745 13.489C11.4851 13.7784 11.0159 13.7784 10.7264 13.489L4.79645 7.55906C4.65743 7.42008 4.57931 7.23157 4.57926 7.03499Z"
                      fill="#6D7378"></path>
                  </svg></a>
                  {isMenuOpen && (
                    <ul className={styles.licensing}>
                      <li><a href="/licensing">About Liscensing</a></li>
                      <li><a href="/licensing/licensing">Stock photo licensing</a></li>
                      <li><a href="/licensing/contribute">Become a contributor</a></li>
                      <li><a href="/licensing/requirements">Submission requirements</a></li>
                      <li><a href="/licensing/content">Content types</a></li>
                      <li><a href="/licensing/distribution">Content distribute</a></li>
                      <li><a href="/grants">Commercial Grants</a></li>
                    </ul>
                  )}
                </li>
                <li><a href="/upgrade" >Memberships</a></li>
                <li><a href="/quests">Quests</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="/awards_winners_2023">Award Winners</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.containerHeaderRight}>
            <div className={styles.containerHeaderSearch}>
              <input type="text" placeholder='Search powered by AI' name="" id="" />
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: "23px" }} />
              <div onClick={openModal} className={styles.new}>
                <svg width="33" height="16" viewBox="0 0 26 15">
                  <path
                    d="M8.31152 11H6.20605L2.09082 3.84277V11H0.128906V0.923828H2.33691L6.34961 7.95801V0.923828H8.31152V11ZM16.501 8.8125C16.4508 9.25456 16.2207 9.70345 15.8105 10.1592C15.1725 10.8838 14.2793 11.2461 13.1309 11.2461C12.1829 11.2461 11.3467 10.9408 10.6221 10.3301C9.89746 9.7194 9.53516 8.72591 9.53516 7.34961C9.53516 6.0599 9.861 5.07096 10.5127 4.38281C11.1689 3.69466 12.0189 3.35059 13.0625 3.35059C13.6823 3.35059 14.2406 3.4668 14.7373 3.69922C15.234 3.93164 15.6442 4.2985 15.9678 4.7998C16.2594 5.24186 16.4486 5.75456 16.5352 6.33789C16.5853 6.67969 16.6058 7.17188 16.5967 7.81445H11.4971C11.5244 8.56185 11.7591 9.08594 12.2012 9.38672C12.4701 9.57357 12.7936 9.66699 13.1719 9.66699C13.5729 9.66699 13.8988 9.55306 14.1494 9.3252C14.2861 9.20215 14.4069 9.03125 14.5117 8.8125H16.501ZM14.5732 6.5293C14.5413 6.01432 14.3841 5.62467 14.1016 5.36035C13.8236 5.09147 13.4772 4.95703 13.0625 4.95703C12.6113 4.95703 12.2604 5.09831 12.0098 5.38086C11.7637 5.66341 11.6087 6.04622 11.5449 6.5293H14.5732ZM23.5693 11L22.4004 5.57227L21.2178 11H19.1943L17.1025 3.54883H19.1943L20.3564 8.89453L21.4297 3.54883H23.4053L24.54 8.91504L25.7021 3.54883H27.7324L25.5723 11H23.5693Z"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient id="paint0_linear" x1="38" y1="-4" x2="-2.17675" y2="8.05407" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6DFF8D"></stop>
                      <stop offset="0.5" stopColor="#FFF972"></stop>
                      <stop offset="1" stopColor="#58EBFF"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <Modal isOpen={isModalOpen} onClose={closeModal} />
            </div>
            <div className={styles.containerHeaderUser}>
              <button style={{ border: "none" }}>Log in</button>
              <button>Sign up</button>
            </div>
          </div>

        </div>
      </header>
    </div>
  )
}

export default Header
