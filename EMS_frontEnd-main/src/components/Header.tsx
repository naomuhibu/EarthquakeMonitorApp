// Not being used currently
const Header = () => {
  return (
    <>
      {/* Header Buttons */}
      <div className="col-12 col-md-9 offset-md-8 pl-md-0 d-flex justify-content-start">
        <div className="header p-2">
          <button type="button" className="btn btn-light py-1 px-3 me-3">
            Report
          </button>
          <button type="button" className="btn btn-light py-1 px-3 ms-3">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
