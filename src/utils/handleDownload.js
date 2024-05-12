export default function handleDownload() {
  const anchor = document.createElement('a');
  anchor.href = '../resources/resume/resume.pdf';
  anchor.download = 'Resume_BhogendraKamble.pdf';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}