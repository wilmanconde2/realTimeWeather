const dateTime = () => {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = String(now.getFullYear()).slice(-2);

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
};

const Footer = () => {
  return (
    <>
      <div className='footer-fixed'>
        <span>{dateTime()} | WC2 | willconde2@hotmail.com</span>
      </div>
    </>
  );
};

export default Footer;
