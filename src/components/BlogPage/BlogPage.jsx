import { useTranslation } from "react-i18next";
import "./BlogPage.scss";
import Navbar from "../Navbar";
import Footer from "../Footer";

function BlogPage() {
  const { t } = useTranslation();

  return (
    <>

    <div className="bg-[#1e1e20]">
      <Navbar/>
      <div className="Blog-Page-Parent max-w-[1200px] mx-auto">
        <div className="BlogPage-First-elem">
          <h1 className="BlogPage-Title-elem">
            {t("blog")}
            <span>{t("blog")}</span>
          </h1>
        </div>
        <div className="Blog-Page-Categoriy">
          <div className="">

            <div className="Categoriy-Parent">
              <span className="categoriy-icons">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  color="white"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.8571 0H15.7143C13.9786 0 12.5714 1.40721 12.5714 3.14286V6.28571C12.5714 8.02136 13.9786 9.42857 15.7143 9.42857H18.8571C20.5928 9.42857 22 8.02136 22 6.28571V3.14286C22 1.40721 20.5928 0 18.8571 0ZM18.8571 12.5714H15.7143C13.9786 12.5714 12.5714 13.9786 12.5714 15.7143V18.8571C12.5714 20.5928 13.9786 22 15.7143 22H18.8571C20.5928 22 22 20.5928 22 18.8571V15.7143C22 13.9786 20.5928 12.5714 18.8571 12.5714ZM6.28571 12.5714H3.14286C1.40721 12.5714 0 13.9786 0 15.7143V18.8571C0 20.5928 1.40721 22 3.14286 22H6.28571C8.02136 22 9.42857 20.5928 9.42857 18.8571V15.7143C9.42857 13.9786 8.02136 12.5714 6.28571 12.5714ZM6.28571 0H3.14286C1.40721 0 0 1.40721 0 3.14286V6.28571C0 8.02136 1.40721 9.42857 3.14286 9.42857H6.28571C8.02136 9.42857 9.42857 8.02136 9.42857 6.28571V3.14286C9.42857 1.40721 8.02136 0 6.28571 0Z"
                    fill="#979798"
                  ></path>
                </svg>
              </span>
              <div className="categoriy-wrap">
                <span className="categoriy-title">Holiday</span>
                <span className="categoriy-title">Advice</span>
                <span className="categoriy-title">
                  About programming languages
                </span>
                <span className="categoriy-title">Articles</span>
                <span className="categoriy-title">News</span>
                <span className="categoriy-title">From our project</span>
                <span className="categoriy-title">Our team members</span>
                <span className="categoriy-title">About us</span>
                <span className="categoriy-title">Holiday</span>
                <span className="categoriy-title">Holiday</span>
              </div>
            </div>

            <div className="search-page">
              <div className="search-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="#515151"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M20.9999 20.9999L16.6499 16.6499"
                    stroke="#515151"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <input type="search" name="" id="" />
            </div>

            <div className="Blog-Post-Parent">

              <a href="#1">
                <div className="Blog-Post-Child-First">
                  <div className="Blog-Post-Left-Img-Blog">
                    <div className="Img-Parent">
                      <div className="img-post">
                        <img
                          src="https://uic.group/media/cache/38/89/3889da51d22ef8e77caae15bdb47f3dc.jpg
                        
                        "
                          alt=""
                        />
                      </div>
                      <div className="Post-title-text">
                        <article className="post-blog-text-title">
                          <span>
                            The UIC Group team at the Zaamin Ultra Marathon
                          </span>
                          <p>
                            Our team has been actively participating in all
                            marathons until now, these marathons not only raise
                            the team`s family spirit, but also contribute to
                          </p>
                          <hr className="hrStyle" />
                          <div className="icon-Blogs">
                            <div className="kalendar-Block">
                              <article className="icon-k">
                                <svg height="0.8em" viewBox="0 0 448 512">
                                  <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                                </svg>
                              </article>
                              <span>20.06.2023</span>
                            </div>
                            <div className="hide-Block">
                              <article className="icon-h">
                                <svg height="0.8em" viewBox="0 0 576 512">
                                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                                </svg>
                              </article>
                              <span>212</span>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a href="#1">
                <div className="Blog-Post-Child-First">
                  <div className="Blog-Post-Left-Img-Blog">
                    <div className="Img-Parent">
                      <div className="img-post">
                        <img
                          src="https://uic.group/media/cache/79/a4/79a4ba21ccffb1486aa0afa3df153dae.jpg"
                          alt=""
                        />
                      </div>
                      <div className="Post-title-text">
                        <article className="post-blog-text-title">
                          <span>
                            A special master class on project management at UIC
                            Group!
                          </span>
                          <p>
                            Iskandar Yusupov, an expert with 18 years of
                            experience in project management, founder of the
                            Sello brand, holder of PMI, PMP certificates
                          </p>
                          <hr className="hrStyle" />
                          <div className="icon-Blogs">
                            <div className="kalendar-Block">
                              <article className="icon-k">
                                <svg height="0.8em" viewBox="0 0 448 512">
                                  <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                                </svg>
                              </article>
                              <span>07.05.2023</span>
                            </div>
                            <div className="hide-Block">
                              <article className="icon-h">
                                <svg height="0.8em" viewBox="0 0 576 512">
                                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                                </svg>
                              </article>
                              <span>212</span>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a href="#1">
                <div className="Blog-Post-Child-First">
                  <div className="Blog-Post-Left-Img-Blog">
                    <div className="Img-Parent">
                      <div className="img-post">
                        <img
                          src="https://uic.group/media/cache/6a/9d/6a9d84021707ef44e6fe7f30d31c9b25.jpg"
                          alt=""
                        />
                      </div>
                      <div className="Post-title-text">
                        <article className="post-blog-text-title">
                          <span>
                            UIC Group Technical Director shared his experience
                            at PDP University!
                          </span>
                          <p>
                            UIC Group Technical Director, Android and Java
                            development, Backend &amp; Frontend, SysAdmin and
                            DevOps, Amon Olimov (t.me/amonolimov), who has
                          </p>
                          <hr className="hrStyle" />
                          <div className="icon-Blogs">
                            <div className="kalendar-Block">
                              <article className="icon-k">
                                <svg height="0.8em" viewBox="0 0 448 512">
                                  <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                                </svg>
                              </article>
                              <span>20.06.2023</span>
                            </div>
                            <div className="hide-Block">
                              <article className="icon-h">
                                <svg height="0.8em" viewBox="0 0 576 512">
                                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                                </svg>
                              </article>
                              <span>212</span>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a href="#1">
                <div className="Blog-Post-Child-First">
                  <div className="Blog-Post-Left-Img-Blog">
                    <div className="Img-Parent">
                      <div className="img-post">
                        <img
                          src="https://uic.group/media/cache/07/6b/076b8bf9bc63b8b5ae945add9f1ba07c.jpg"
                          alt=""
                        />
                      </div>
                      <div className="Post-title-text">
                        <article className="post-blog-text-title">
                          <span>
                            We offer ready-made solutions for FinTex
                            applications!
                          </span>
                          <p>
                            The use of various applications for financial
                            services and money transfers has become increasingly
                            popular in recent years. We offer ready-made
                            solutions for
                          </p>
                          <hr className="hrStyle" />
                          <div className="icon-Blogs">
                            <div className="kalendar-Block">
                              <article className="icon-k">
                                <svg height="0.8em" viewBox="0 0 448 512">
                                  <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                                </svg>
                              </article>
                              <span>20.06.2023</span>
                            </div>
                            <div className="hide-Block">
                              <article className="icon-h">
                                <svg height="0.8em" viewBox="0 0 576 512">
                                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                                </svg>
                              </article>
                              <span>212</span>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a href="#1">
                <div className="Blog-Post-Child-First">
                  <div className="Blog-Post-Left-Img-Blog">
                    <div className="Img-Parent">
                      <div className="img-post">
                        <img
                          src="https://uic.group/media/cache/37/d4/37d4647f451ecf11487e68a188b2509f.jpg"
                          alt=""
                        />
                      </div>
                      <div className="Post-title-text">
                        <article className="post-blog-text-title">
                          <span>
                            UIC Group Technical Director shared his experience
                            at PDP University!
                          </span>
                          <p>
                            UIC Group Technical Director, Android and Java
                            development, Backend &amp; Frontend, SysAdmin and
                            DevOps, Amon Olimov (t.me/amonolimov), who has
                          </p>
                          <hr className="hrStyle" />
                          <div className="icon-Blogs">
                            <div className="kalendar-Block">
                              <article className="icon-k">
                                <svg height="0.8em" viewBox="0 0 448 512">
                                  <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                                </svg>
                              </article>
                              <span>02.05.2023</span>
                            </div>
                            <div className="hide-Block">
                              <article className="icon-h">
                                <svg height="0.8em" viewBox="0 0 576 512">
                                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                                </svg>
                              </article>
                              <span>126</span>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a href="#1">
                <div className="Blog-Post-Child-First">
                  <div className="Blog-Post-Left-Img-Blog">
                    <div className="Img-Parent">
                      <div className="img-post">
                        <img
                          src="https://uic.group/media/cache/51/c8/51c8a43b573a016d0a8418575037882b.jpg"
                          alt=""
                        />
                      </div>
                      <div className="Post-title-text">
                        <article className="post-blog-text-title">
                          <span>
                            We offer ready-made solutions for FinTex
                            applications!
                          </span>
                          <p>
                            Our team has been actively participating in all
                            marathons until now, these marathons not only raise
                            the team`s family spirit, but also contribute to
                          </p>
                          <hr className="hrStyle" />
                          <div className="icon-Blogs">
                            <div className="kalendar-Block">
                              <article className="icon-k">
                                <svg height="0.8em" viewBox="0 0 448 512">
                                  <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                                </svg>
                              </article>
                              <span>20.06.2023</span>
                            </div>
                            <div className="hide-Block">
                              <article className="icon-h">
                                <svg height="0.8em" viewBox="0 0 576 512">
                                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                                </svg>
                              </article>
                              <span>212</span>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a href="#1">
                <div className="Blog-Post-Child-First">
                  <div className="Blog-Post-Left-Img-Blog">
                    <div className="Img-Parent">
                      <div className="img-post">
                        <img
                          src="https://uic.group/media/cache/69/82/69822fb9315f34954a432f7d0e26c8b8.jpg"
                          alt=""
                        />
                      </div>
                      <div className="Post-title-text">
                        <article className="post-blog-text-title">
                          <span>`UIC Group` in Business Quiz 2023</span>
                          <p>
                            Business Quiz - is the largest entertainment
                            business event and intellectual competition in
                            Uzbekistan, which brings together hundreds of
                            leaders and top
                          </p>
                          <hr className="hrStyle" />
                          <div className="icon-Blogs">
                            <div className="kalendar-Block">
                              <article className="icon-k">
                                <svg height="0.8em" viewBox="0 0 448 512">
                                  <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                                </svg>
                              </article>
                              <span>18.04.2023</span>
                            </div>
                            <div className="hide-Block">
                              <article className="icon-h">
                                <svg height="0.8em" viewBox="0 0 576 512">
                                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                                </svg>
                              </article>
                              <span>24</span>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a href="#1">
                <div className="Blog-Post-Child-First">
                  <div className="Blog-Post-Left-Img-Blog">
                    <div className="Img-Parent">
                      <div className="img-post">
                        <img
                          src="https://uic.group/media/cache/1b/a3/1ba3bd2ed8692c5a6b4793c9664284da.jpg"
                          alt=""
                        />
                      </div>
                      <div className="Post-title-text">
                        <article className="post-blog-text-title">
                          <span>
                            Opportunity for an internship at the UIC Group in
                            the direction of Project Manager
                          </span>
                          <p>
                            Primary requirements: Good knowledge of English and
                            Russian; At least one year of experience with a real
                            IT project; Have basic knowledge in the fiel
                          </p>
                          <hr className="hrStyle" />
                          <div className="icon-Blogs">
                            <div className="kalendar-Block">
                              <article className="icon-k">
                                <svg height="0.8em" viewBox="0 0 448 512">
                                  <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                                </svg>
                              </article>
                              <span>31.01.2023</span>
                            </div>
                            <div className="hide-Block">
                              <article className="icon-h">
                                <svg height="0.8em" viewBox="0 0 576 512">
                                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                                </svg>
                              </article>
                              <span>2145</span>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a href="#1">
                <div className="Blog-Post-Child-First">
                  <div className="Blog-Post-Left-Img-Blog">
                    <div className="Img-Parent">
                      <div className="img-post">
                        <img
                          src="https://uic.group/media/cache/32/52/3252cb32c223e7b7426056c374a6cba4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="Post-title-text">
                        <article className="post-blog-text-title">
                          <span>
                            "UIC Clan" team in "CAD CORPORATE CUP 2" competition
                          </span>
                          <p>
                            "UIC Clan" team of UIC Group took part in "Cad
                            Corporate Cup 2" competition. The tournament was
                            organized on January 22 among all CS:GO companies
                          </p>
                          <hr className="hrStyle" />
                          <div className="icon-Blogs">
                            <div className="kalendar-Block">
                              <article className="icon-k">
                                <svg height="0.8em" viewBox="0 0 448 512">
                                  <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                                </svg>
                              </article>
                              <span>23.01.2023</span>
                            </div>
                            <div className="hide-Block">
                              <article className="icon-h">
                                <svg height="0.8em" viewBox="0 0 576 512">
                                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                                </svg>
                              </article>
                              <span>44</span>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a href="#1">
                <div className="Blog-Post-Child-First">
                  <div className="Blog-Post-Left-Img-Blog">
                    <div className="Img-Parent">
                      <div className="img-post">
                        <img
                          src="https://uic.group/media/cache/78/07/780768d59cce1101ef7b06256ffc3d23.jpg"
                          alt=""
                        />
                      </div>
                      <div className="Post-title-text">
                        <article className="post-blog-text-title">
                          <span>
                            A representative of UIC Group took part in the
                            finals of the NEERC
                          </span>
                          <p>
                            The programming competition was held on December 6-7
                            in Almaty, Kazakhstan. In particular, Jalolov
                            Ibrahim's team took a proud 3rd place in the
                            semi-fin
                          </p>
                          <hr className="hrStyle" />
                          <div className="icon-Blogs">
                            <div className="kalendar-Block">
                              <article className="icon-k">
                                <svg height="0.8em" viewBox="0 0 448 512">
                                  <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                                </svg>
                              </article>
                              <span>20.06.2023</span>
                            </div>
                            <div className="hide-Block">
                              <article className="icon-h">
                                <svg height="0.8em" viewBox="0 0 576 512">
                                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                                </svg>
                              </article>
                              <span>212</span>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div> </>
  );
}

export default BlogPage;
