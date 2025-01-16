import React, { useState } from "react";
import logo from "../../../public/assets/images/logo.png";
import Link from "next/link";

function Drawer({ drawer, action, lang }) {
  const [itemSize, setSize] = useState("0px");
  const [item, setItem] = useState("home");
  const handler = (e, value) => {
    // e.preventDefault();
    const getItems = document.querySelectorAll(`#${value} li`).length;
    if (getItems > 0) {
      setSize(`${43 * getItems}px`);
      setItem(value);
    }
  };
  return (
    <>
      {lang ? (
        <>
          <div
            onClick={(e) => action(e)}
            className={`off_canvars_overlay ${drawer ? "active" : ""}`}
          ></div>
          <div className="offcanvas_menu">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div>
                    
                    <div className="offcanvas-brand text-center mb-40">
                      <img src={logo.src} alt="logo de myagentia" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            onClick={(e) => action(e)}
            className={`off_canvars_overlay ${drawer ? "active" : ""}`}
          ></div>
          <div className="offcanvas_menu">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div
                    className={`offcanvas_menu_wrapper ${
                      drawer ? "active" : ""
                    }`}
                  >
                    <div className="canvas_close">
                      <Link href="#" onClick={(e) => action(e)}>
                        <i className="fa fa-times"></i>
                      </Link>
                    </div>
                    <div className="offcanvas-brand text-center mb-40">
                      <img src={logo.src} alt="" />
                    </div>
                    <div id="menu" className="text-left ">
                      <ul className="offcanvas_main_menu">
                        <li
                          onClick={(e) => handler(e, "home")}
                          id="home"
                          className="menu-item-has-children active"
                        >
                          <span className="menu-expand">
                            <i className="fa fa-angle-down"></i>
                          </span>
                          <Link href="#">Home</Link>
                          <ul
                            className="sub-menu"
                            style={{
                              height: item === "home" ? itemSize : "0px",
                            }}
                          >
                            <li>
                              <Link href="/">Home 1</Link>
                            </li>
                            <li>
                              <Link href="/home-two">Home 2</Link>
                            </li>
                            <li>
                              <Link href="/home-three">Home 3</Link>
                            </li>
                            <li>
                              <Link href="/home-four">Home 4</Link>
                            </li>
                            <li>
                              <Link href="/home-five">Home 5</Link>
                            </li>
                            <li>
                              <Link href="/home-six">Home 6</Link>
                            </li>
                            <li>
                              <Link href="/home-seven">Home 7</Link>
                            </li>
                            <li>
                              <Link href="/home-eight">Home 8</Link>
                            </li>
                            <li>
                              <Link href="/home-dark">Home Dark</Link>
                            </li>
                            <li>
                              <Link href="/home-rtl">Home Rtl</Link>
                            </li>
                          </ul>
                        </li>
                        <li
                          onClick={(e) => handler(e, "service")}
                          id="service"
                          className="menu-item-has-children active"
                        >
                          <Link href="/service">Service</Link>
                        </li>
                        <li
                          onClick={(e) => handler(e, "pages")}
                          id="pages"
                          className="menu-item-has-children active"
                        >
                          <span className="menu-expand">
                            <i className="fa fa-angle-down"></i>
                          </span>
                          <Link href="#">Pages</Link>
                          <ul
                            className="sub-menu"
                            style={{
                              height: item === "pages" ? itemSize : "0px",
                            }}
                          >
                            <li>
                              <Link href="/about-us">About</Link>
                            </li>
                            <li>
                              <Link href="/about-us-another">About 2</Link>
                            </li>
                            <li>
                              <Link href="/404">Error</Link>
                            </li>
                            <li>
                              <Link href="/shops">Shops</Link>
                            </li>
                            <li>
                              <Link href="/shops/shop-details">
                                Shop details
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li
                          onClick={(e) => handler(e, "news")}
                          id="news"
                          className="menu-item-has-children active"
                        >
                          <span className="menu-expand">
                            <i className="fa fa-angle-down"></i>
                          </span>
                          <Link href="#">News</Link>
                          <ul
                            className="sub-menu"
                            style={{
                              height: item === "news" ? itemSize : "0px",
                            }}
                          >
                            <li>
                              <Link href="/news">News Page</Link>
                            </li>
                            <li>
                              <Link href="/news/single-news">Single News</Link>
                            </li>
                          </ul>
                        </li>
                        <li
                          onClick={(e) => handler(e, "contact")}
                          id="contact"
                          className="menu-item-has-children active"
                        >
                          <Link href="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="offcanvas-social">
                      <ul className="text-center">
                        <li>
                          <Link href="$">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="$">
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="$">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="$">
                            <i className="fab fa-dribbble"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="footer-widget-info">
                      <ul>
                        <li>
                          <Link href="#">
                            <i className="fal fa-envelope"></i>{" "}
                            support@appie.com
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fal fa-phone"></i> +(642) 342 762 44
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fal fa-map-marker-alt"></i> 442 Belle
                            Terre St Floor 7, San Francisco, AV 4206
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Drawer;
