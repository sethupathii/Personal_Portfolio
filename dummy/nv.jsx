// import React, { useState } from 'react'
// import navbar from "./Navbar.module.css"

// import { getImageUrl } from '../../utils'
// import { Helmet } from 'react-helmet'

// const Navbar = () => {

//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <nav className={navbar.navbar}>
//             <a href='/' className={navbar.title}>Portfolio</a>
//             <div className={navbar.menu}>
//                 <img className={navbar.menuBtn} src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} alt='menuBtn' onClick={() => setMenuOpen(!menuOpen)} />
//                 <ul className={`${navbar.menuItems} ${menuOpen && navbar.menuOpen}`} onClick={() => setMenuOpen(false)}>
//                     <li>
//                         <a href='#about'>About</a>
//                     </li>
//                     <li>
//                         <a href='#experience'>Skills</a>
//                     </li>
//                     <li>
//                         <a href='#projects'>Projects</a>
//                     </li>
//                     <li>
//                         <a href='#contact'>contact</a>
//                     </li>
//                 </ul>
//                 {/* <h1>ul</h1> */}
//             </div>
//         </nav>

//     )
// }

// export default Navbar