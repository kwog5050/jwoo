import React from 'react';
import { forwardRef, useRef } from 'react';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Banner from 'components/banner/Banner';
import About from 'components/about/About';
import Skill from 'components/skill/Skill';
import Project from 'components/project/Project';
import Contact from 'components/contact/Contact';

import 'assets/styles/font.css';
import 'assets/styles/common.css';

const App = () => {
	const bannerRef = useRef(null);
	const aboutRef = useRef(null);
	const skillRef = useRef(null);
	const projectRef = useRef(null);
	const contactRef = useRef(null);

	return (
		<>
			<Header
				bannerRef={bannerRef}
				aboutRef={aboutRef}
				skillRef={skillRef}
				projectRef={projectRef}
				contactRef={contactRef}
			></Header>
			<Banner ref={bannerRef}></Banner>
			<About ref={aboutRef}></About>
			<Skill ref={skillRef}></Skill>
			<Project ref={projectRef}></Project>
			<Contact ref={contactRef}></Contact>
			<Footer></Footer>
		</>
	);
};

export default App;
