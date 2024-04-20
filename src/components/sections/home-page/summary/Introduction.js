import AnimatedText from './AnimatedText';
import ExperienceDuration from './ExperienceDuration';

export default function Introduction() {
    return (
    <div>
        <div style={{ display: 'grid', placeItems: 'center', width: '100%' }}>
            <AnimatedText text='I am Bhogendra Kamble.'/>
        </div>
        <p>I am a Full Stack Developer with experience of <ExperienceDuration/>.</p>
        <p>Experienced Full Stack Developer proficient in MERN stack (MongoDB, Express.js, React.js, Node.js). Seeking dynamic role in tech company to apply expertise in building scalable web apps. Committed to staying current with latest technologies for delivering top-notch solutions.</p>
    </div>
    );
}