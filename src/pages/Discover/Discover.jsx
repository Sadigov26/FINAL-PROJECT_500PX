import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Discover.module.scss'; // Import SCSS file
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Discover = () => {
    const categories = [
        { name: 'Landscapes', imageUrl: 'https://drscdn.500px.org/photo/1094746787/q%3D80_h%3D300/v2?sig=7994c0f72ebbadfc2f7b2280a4a02c2c3d69b001ae750b3588d63959e9968f42' },
        { name: 'Nature', imageUrl: 'https://drscdn.500px.org/photo/1094805783/q%3D80_h%3D300/v2?sig=45600ceed675eec3a7ce8b8bd48f6d05f34724b0d845664983e616bce28a52d8' },
        { name: 'Animals', imageUrl: 'https://drscdn.500px.org/photo/1095015254/q%3D80_h%3D300/v2?sig=b67bc912df45291831c13c188242f68717ed632bd507b9f733faca31161c7e3e' },
        { name: 'Black and White', imageUrl: 'https://drscdn.500px.org/photo/1094866556/q%3D80_h%3D300/v2?sig=207dec36b4203ca8509939f3360b7f78671994ea841f8fce132e444e3bdbb1e4' },
        { name: 'City and Architecture', imageUrl: 'https://drscdn.500px.org/photo/1094746917/q%3D80_h%3D300/v2?sig=bab4ac73647db47091a6c541ee5ed4fc5c2d83bbe18f8936316710f935ac9365' },
        { name: 'Macro', imageUrl: 'https://drscdn.500px.org/photo/1095013436/q%3D80_h%3D300/v2?sig=ad167d8d301682182cd5c85d116b2dc2738205d2ae6c50ac78bb164f117f435a' },
        { name: 'People', imageUrl: 'https://drscdn.500px.org/photo/1094811598/q%3D80_h%3D300/v2?sig=6b5873f87c2cdd84da3619602f33c710aab83820ef4e7cebd89e1475330b1901' },
        { name: 'Other', imageUrl: 'https://drscdn.500px.org/photo/1094947770/q%3D80_h%3D300/v2?sig=4f0e0cafadc3988fcc1df91b99f4738392e74e316af709866f6dbb4af9557582' },
        { name: 'Street', imageUrl: 'https://drscdn.500px.org/photo/1094954343/q%3D80_h%3D300/v2?sig=5467496e51a3bf0ed960edabf187a412a79c7ba02d7566049a8621b9c6af358f' },
        { name: 'Travel', imageUrl: 'https://drscdn.500px.org/photo/1094777883/q%3D80_h%3D300/v2?sig=aef407ac2d593dddcf8b510efdaa80f699faea127e0cc745929fc7603e7df906' },
        { name: 'Fashion', imageUrl: 'https://drscdn.500px.org/photo/1094816242/q%3D80_h%3D300/v2?sig=6951cbe81d2451633cafb83dc1ce46db7513601d574a2bf98f2c701cb522f964' },
        { name: 'Abstract', imageUrl: 'https://drscdn.500px.org/photo/1094799776/q%3D80_h%3D300/v2?sig=def34b7f1c8db124bb00891d0d6960ef19892261b1db5a9b145362314b3013cd' },
        { name: 'Night', imageUrl: 'https://drscdn.500px.org/photo/1094775720/q%3D80_h%3D300/v2?sig=ad17ceba38813ce6ed9ab11c5a9989fa10ef25c689453d31387f2c8268ad982e' },
        { name: 'Urban Exploration', imageUrl: 'https://drscdn.500px.org/photo/1094889286/q%3D80_h%3D300/v2?sig=f325df70ac6af4eb1cb6da830b6520b5bb8dbf22661d0a334664c353b1a3e344' },
        { name: 'Aerial', imageUrl: 'https://drscdn.500px.org/photo/1094947782/q%3D80_h%3D300/v2?sig=1fe0322856f1e93708eb136f6c3fe70087342ba179f9645de5a8a516dd93bf1c' },
        { name: 'Sport', imageUrl: 'https://drscdn.500px.org/photo/1095013720/q%3D80_h%3D300/v2?sig=1687d7feb03220f904b9fc2ecbdb7e027c9847dac3eb11ba7be2039b8d7e06d5' },
        { name: 'Stil Life', imageUrl: 'https://drscdn.500px.org/photo/1094877256/q%3D80_h%3D300/v2?sig=07221ec74194f1a816da65379c7ecee34d63a995af527a8664f3dea48b8944cf' },
        { name: 'Transportation', imageUrl: 'https://drscdn.500px.org/photo/1094882732/q%3D80_h%3D300/v2?sig=83123e58db9a77b969afa6ffb832e72aa28e687f9b7ec32af039480d4d923922' },
        { name: 'Food', imageUrl: 'https://drscdn.500px.org/photo/1094922371/q%3D80_h%3D300/v2?sig=fd67c322dfd0652bee3d004c3ba9ac8db30cb52852138faa1bbd48cfab67de92' },
        { name: 'Performing Arts', imageUrl: 'https://drscdn.500px.org/photo/1094751706/q%3D80_h%3D300/v2?sig=5c26f0cc3d9184499567167c1e38f01e5ac6a1e06c6e4f1c1b6f19d0a19928b1' },
        { name: 'Journalism', imageUrl: 'https://drscdn.500px.org/photo/1094750816/q%3D80_h%3D300/v2?sig=488ff88b791d0fd11dffe337c374623fadc320f1eb92fda660de9a7df47f05c3' },
        { name: 'Film', imageUrl: 'https://drscdn.500px.org/photo/1094748077/q%3D80_h%3D300/v2?sig=0b656267cc353ad441de1c4d8443afb2d921e8ea5a8e94fcf587e25e49a7e13e' },
        { name: 'Family', imageUrl: 'https://drscdn.500px.org/photo/1094840007/q%3D80_h%3D300/v2?sig=1ff07da5eb50036f78f6b06bcc25a4de80a5a0563a12d3008a70ed16445f4566' },
        { name: 'Celebrities', imageUrl: 'https://drscdn.500px.org/photo/1094722585/q%3D80_h%3D300/v2?sig=d89b12ea74fed9ed99af8df7b1d9bffb5bbc81e3dc638e15037ff2a8e0b2acae' },
        { name: 'Commercial', imageUrl: 'https://drscdn.500px.org/photo/1094927756/q%3D80_h%3D300/v2?sig=f1c5069e53a52dc1bd4447e9496897d308c3b5d3dfb1fad962aa5a260cbfbc0b' },
        { name: 'Wedding', imageUrl: 'https://drscdn.500px.org/photo/1094989251/q%3D80_h%3D300/v2?sig=6a8df3f6ccd6831db45913626573e3b815dc3b53c31e062dc6cf1e9435053ba2' },
        { name: 'Concert', imageUrl: 'https://drscdn.500px.org/photo/1094862734/q%3D80_h%3D300/v2?sig=b6517a2a9d5fd1aaf2233d19f99750e16e68deabb03d0ca78054b01a0e15df9a' },
        { name: 'Underwater', imageUrl: 'https://drscdn.500px.org/photo/1094885921/q%3D80_h%3D300/v2?sig=9b88c7ce6a3738bbf0c93927666bc8bc1c1dc6269f7db1b5789e8e4829773c8d' },
    ];

    return (
        <div className={styles.Discover}>
            <Header />
            <div className={styles.DiscoverContainer}>
                <div className={styles.DiscoverContainerTop}>
                    <h2>Select categories</h2>
                    <p>Customize your feed by choosing up to category that interest you the most</p>
                </div>
                <div className={styles.DiscoverContainerBottom}>
                    {categories.map((category, index) => (
                        <Link key={index} to={`/category/${category.name}`} className={styles.DiscoverCategoryItem}>
                            <img src={category.imageUrl} alt={category.name} />
                            <p>{category.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Discover;
