import "./input.css";

const Footer = () => {
  return (
    <div className="ml-32 mt-10 flex">
      <div className="">
        <h1 className="mb-9  ml-16 font-semibold">NEWSLETTER</h1>
        <div className="ml-16 flex ">
          <div className="input-group">
            <div className="">
            <input className="input" type="text" required />
            <label htmlFor="Email" className="label">
              *Email
            </label>

            </div>
            <div className="poter">
              <h1 className="h1">OUR BOUTIQUES</h1>
              <p className="p1">Christian Dior Courture Boutiques</p>
              <p className="p2">Parfums Chirstian Dior Boutiques</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-footer">
        <div className="poter2">
          <h1>CLIENT SERVICES</h1>
          <p className="contact">Contact</p>
          <p>Delivery and returns</p>
          <p className="faq">FAQ</p>
        </div>
        <div className="poter3">
          <h1>THE HOUSE OF DIOR</h1>
          <p className="w">Legal Terms</p>
          <p className="w">Privacy notice</p>
          <p>Cookie management</p>
          <p>Ethics & Compilance</p>
          <p className="w">follow Us</p>
          <p className="w">careers</p>
          <p className="w">Sitemap</p>
        </div>
        <div className="poter4">
          <h1>COUNTRY / REGION</h1>
          <p className="mb-10">Indonesia</p>
          <h1>LANGUAGES</h1>
          <p>English</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
