import classes from "./Header.module.scss";
import logo from "./logo.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["logo-box"]}>
        <img src={logo} alt="logo" className={classes.logo} />
      </div>
      <div className={classes["text-box"]}>
        <h1 className={classes["heading-primary"]}>
          <span className={classes["heading-primary-main"]}>
            <span>M&G</span> Stationery
          </span>
          <span className={classes["heading-primary-sub"]}>Let ideas fly!</span>
        </h1>

        <a href="#product" className={`btn btn-white ${classes["btn-header"]}`}>
          Discover Our Products
        </a>
      </div>
    </header>
  );
};

export default Header;
