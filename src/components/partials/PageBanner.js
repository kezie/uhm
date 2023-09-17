const PageBanner = ({ pageTitle, pageName, PageImage }) => {
  return (
    <section
      className="page-banner bg_cover p-r z-1"
      style={{ backgroundImage: `url(assets/images/bg/${PageImage})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="page-banner-content text-center">
              <h1 className="page-title">{pageTitle ? pageTitle : pageName}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
