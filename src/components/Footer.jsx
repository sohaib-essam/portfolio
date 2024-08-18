import { CONTACT } from "../constants";
const Footer = () => {
  return (
    <section className="pb-20">
      <h2 className="my-10 text-center text-4xl">
        Contatct <span className="text-[#21D498]">Me</span>
      </h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#">{CONTACT.email}</a>
      </div>
    </section>
  );
};

export default Footer;
