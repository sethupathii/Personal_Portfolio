// import React from 'react';
// import navbar from './Navbar.module.css';
// import { getImageUrl } from '../../utils';
// import { Helmet } from 'react-helmet';

// const Navbar = () => {
//   const handleTitleChange = (title) => {
//     document.title = `S - ${title}`;
//   };

//   return (
//     <nav className={navbar.navbar}>
//       <a href='/' className={navbar.title}>
//         Portfolio
//       </a>
//       <div className={navbar.menu}>
//         <img
//           className={navbar.menuBtn}
//           src={getImageUrl('nav/menuIcon.png')}
//           alt='menuBtn'
//           onClick={() => {}}
//         />
//         <ul className={`${navbar.menuItems}`}>
//           <li>
//             <a href='#about' onClick={() => handleTitleChange('About')}>
//               About
//             </a>
//           </li>
//           <li>
//             <a href='#experience' onClick={() => handleTitleChange('Skills')}>
//               Skills
//             </a>
//           </li>
//           <li>
//             <a href='#projects' onClick={() => handleTitleChange('Projects')}>
//               Projects
//             </a>
//           </li>
//           <li>
//             <a href='#contact' onClick={() => handleTitleChange('Contact')}>
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;









import React from 'react';
import navbar from './Navbar.module.css';
import { getImageUrl } from '../../utils';
import { Helmet } from 'react-helmet';

const Navbar = () => {
    const handleTitleChange = (title, metaImg) => {
        document.title = `S - ${title}`;

        // Update OG image meta tag
        const ogImageTag = document.querySelector('meta[property="og:image"]');
        if (ogImageTag) {
            ogImageTag.setAttribute('content', metaImg);
        } else {
            // If the OG image meta tag doesn't exist, create it
            const newOgImageTag = document.createElement('meta');
            newOgImageTag.setAttribute('property', 'og:image');
            newOgImageTag.setAttribute('content', metaImg);
            document.head.appendChild(newOgImageTag);
        }
    };

    return (
        <nav className={navbar.navbar}>
            <Helmet>
                {/* Define the default OG image */}
                <meta property="og:site_name" content="Sethu Portfolio About page" />
                <meta property="og:title" content="Sethu" />
                <meta property="og:description" content="About sethu" />
                <meta property="og:image" content="https://albion-backend.s3.ap-south-1.amazonaws.com/properties/1b8fe7e708e2f24168dcc5dfbe71e638.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="og:image:width" content="300" />
                <meta property="og:image:height" content="300" />
                <meta property="og:url" content="https://main--bucolic-crisp-4bfe2d.netlify.app/#about" />
            </Helmet>
            <a href='/' className={navbar.title}>
                Portfolio
            </a>
            <div className={navbar.menu}>
                <img
                    className={navbar.menuBtn}
                    src={getImageUrl('nav/menuIcon.png')}
                    alt='menuBtn'
                    onClick={() => { }}
                />
                <ul className={`${navbar.menuItems}`}>
                    <li>
                        <a href='#about' onClick={() => handleTitleChange('About', 'https://albion-backend.s3.ap-south-1.amazonaws.com/properties/1b8fe7e708e2f24168dcc5dfbe71e638.jpg')}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href='#experience' onClick={() => handleTitleChange('Skills', 'https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg')}>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href='#projects' onClick={() => handleTitleChange('Projects', 'https://albion-backend.s3.ap-south-1.amazonaws.com/properties/1b8fe7e708e2f24168dcc5dfbe71e638.jpg')}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href='#contact' onClick={() => handleTitleChange('Contact', 'https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg')}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
