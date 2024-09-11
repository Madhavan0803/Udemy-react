import img1 from "../assets/images/img1.png"

function ImageSection() {
    return (
      <div className="img1">
        <img src={img1} alt="sale" />
        <div className="sale-image__offer">
          <h2>Udemy Flash Sale! 24 hours to save</h2>
          <p>Get the top courses for 499. Just one day to save but a lifetime to learn.</p>
        </div>
      </div>
    );
  }

  export default ImageSection