import Projects from './Projects-page/Projects';
import Certificates from './certificates-page/Certificates';
import Contacts from './contacts-page/Contacts';
import Education from './education-page/Education';
import Experience from './experience-page/Experience';
import Home from './home-page/Home';
import InvalidSection from './invalid-page/InvalidSection';
import PersonalProfile from './personal-profile-page/PersonalProfile';
import Skills from './skills-page/Skills';

export default function CurrentSection({ activePanel }) {
    switch (activePanel) {
        case 'Home':
            return (<Home />);
        case 'Experience':
            return (<Experience />);
        case 'Education':
            return (<Education />);
        case 'Skills':
            return (<Skills />);
        case 'Certificates':
            return (<Certificates />);
        case 'Projects':
            return (<Projects />);
        case 'Contacts':
            return (<Contacts />);
        case 'PersonalProfile':
            return (<PersonalProfile />);
        default:
            return (<InvalidSection />)
    }
}