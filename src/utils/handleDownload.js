import resumeLink from '../assets/resume/resume.pdf';

export default function handleDownload() {
  const anchor = document.createElement('a');
  anchor.href = resumeLink;
  anchor.download = 'Resume_BhogendraKamble.pdf';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}