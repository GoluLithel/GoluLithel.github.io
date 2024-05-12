export default function handleWhatsAppPing() {
  const phoneNumber = '+918600258253';
  const message = 'Hi Bhogendra,\n\nWe have a job opening for *[ABC JOB Profile]* at *[Company XYZ limited]*. We\'re interested and would like to connect further.\n\nThank you,\n*[Your Name]*';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};
