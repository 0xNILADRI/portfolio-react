function FooterIcons({ key, href, classname, sourceImage, altText }) {
  return (
    <a href={href} key={key}>
      <img className={classname} src={sourceImage} alt={altText} />
    </a>
  );
}
export default FooterIcons;
