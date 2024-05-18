import resumeFile from '../assets/resume/resume.pdf';
import profileIcon from '../assets/profile-photo.png';

export async function handleShareResume() {
  if (navigator.share) {
    const response = await fetch(resumeFile);
    if (!response.ok) {
      console.log('Error while fetching resume.');
    }
    const blob = await response.blob();
    const pdfFile = new File([blob], 'bhogendra_resume.pdf', { type: 'application/pdf' });

    await navigator.share({
      title: 'Bhogendra\'s Resume',
      text: 'Resume of Bhogendra',
      files: [pdfFile]
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing:', error));
  } else {
    console.log('Sharing not supported');
  }
}

export function handleShareLink() {
  if (navigator.share) {
    navigator.share({
      title: 'Bhogendra Kamble',
      text: 'Personal Portfolio of Bhogendra',
      url: 'https://golulithel.github.io/',
      icon: profileIcon,
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing:', error));
  } else {
    console.log('Sharing not supported');
  }
}