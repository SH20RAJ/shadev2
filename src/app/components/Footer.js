// components/Footer.js

const Footer = () => {
  return (
    <>
      {/* <footer className="bg-gray-800 text-white text-center py-4">
        <div className="container mx-auto">
          <p>&copy; 2024 Your Social Media Website. All rights reserved.</p>
        </div>
      </footer> */}

      <div dangerouslySetInnerHTML={{ __html: '<script src="/js/sidebar.js"></script>' }}></div>
    </>
  );
};

export default Footer;
