export async function handleShareResume() {
  if (navigator.share) {
    const response = await fetch('../../resources/resume/resume.pdf');
    const blob = await response.blob();
    const pdfFile = new File([blob], 'bhogendra_resume.PDF', { type: 'application/pdf' });

    navigator.share({
      title: 'Bhogendra\'s Resume',
      text: 'Resume of Bhogendra',
      url: 'https://golulithel.github.io/',
      files: [pdfFile]
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing:', error));
  } else {
    console.log('Sharing not supported');
  }
}

export async function handleShareLink() {
  if (navigator.share) {
    navigator.share({
      title: 'Bhogendra Kamble',
      text: 'Personal Portfolio of Bhogendra',
      url: 'https://golulithel.github.io/',
      icon: '../../resources/profile-photo.png',
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing:', error));
  } else {
    console.log('Sharing not supported');
  }
}