import { LiFiWidgetNext } from './lifi'


export default function Home() {
  return (
    <div className="wrapped">
      <header className="site-header">
        <div className="navbar navbar-expand-lg is-transparent" id="mainnav">
          <nav className="container">
            <div className="navbar-brand">
              <a href="https://harecrypta.com/">
                <img className="logo" src="https://harecrypta.com/wp-content/uploads/2022/09/logo-footer-1.png" alt="harecrypta.com" />
              </a>
            </div>
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-icon">
                <span className="ti ti-align-justify"></span>
              </span>
            </button>
            <div className="navbar-collapse justify-content-end">
              <ul className="navbar-nav menu-top">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-541"><a href="/cryptoactivies/testnets/" className="nav-link">Активности</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2396"><a href="https://harecrypta.com/konsalting/" className="nav-link">Консалтинг</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-822"><a href="https://harecrypta.com/news-harecrypta/" className="nav-link">Новости</a></li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-has-children menu-item-1507 active"><a href="/" aria-current="page" className="nav-link">HareCrypta</a>
                  <ul className="sub-menu">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1823"><a href="https://harecrypta.com/ama/" className="nav-link">AMA HareCrypta</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2249"><a href="https://harecrypta.com/pitchday/" className="nav-link">Pitch Day</a></li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1920"><a href="https://harecrypta.com/category/statya/" className="nav-link">Статьи HareCrypta</a></li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2018"><a href="https://harecrypta.com/category/stati-po-makroekonomika/" className="nav-link">Макроэкономика</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2835"><a href="https://harecrypta.com/crypto-academy/" className="nav-link">Криптоакадемия</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1503"><a href="https://harecrypta.com/haremerch/" className="nav-link">Merch</a></li>
                  </ul>
                  <span><i className="fa fa-angle-down"></i></span></li>
              </ul>
              <ul className="navbar-nav navbar-btns">
                <li className="nav-item"><a className="nav-link btn btn-sm btn-outline menu-link" href="https://harecrypta.com/harma/">NFT Harma</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <sectione className="section-pad-md section-bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="widghet-hc"><LiFiWidgetNext /></div>
              </div>
            </div>
          </div>
        </sectione>
      <div className="section footer-section footer-particle section-pad-sm section-bg-dark ">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 res-m-bttm">
              <div id="block-4" className="widget footer-widget widget_block widget_media_image">
                <figure className="wp-block-image size-full"><img loading="lazy" width="287" height="82" src="https://harecrypta.com/wp-content/uploads/2022/09/logo-footer-1.png" alt="" className="wp-image-1344" /></figure>
              </div>
              <div id="block-6" className="widget footer-widget widget_block widget_text">
                <p>Вы еще не с нами в соцсетях? Горячие минты и свежие инсайты тут! Следите за нами в соц. сетях!</p>
              </div>
              <div id="block-3" className="widget footer-widget widget_block">
                <ul className="wp-container-1 wp-block-social-links">
                  <li className="wp-social-link wp-social-link-telegram wp-block-social-link"><a href="https://t.me/harecrypta_chat" rel="noopener nofollow" target="_blank" className="wp-block-social-link-anchor"><svg width="24" height="24" viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M28.9700376,63.3244248 C47.6273373,55.1957357 60.0684594,49.8368063 66.2934036,47.2476366 C84.0668845,39.855031 87.7600616,38.5708563 90.1672227,38.528 C90.6966555,38.5191258 91.8804274,38.6503351 92.6472251,39.2725385 C93.294694,39.7979149 93.4728387,40.5076237 93.5580865,41.0057381 C93.6433345,41.5038525 93.7494885,42.63857 93.6651041,43.5252052 C92.7019529,53.6451182 88.5344133,78.2034783 86.4142057,89.5379542 C85.5170662,94.3339958 83.750571,95.9420841 82.0403991,96.0994568 C78.3237996,96.4414641 75.5015827,93.6432685 71.9018743,91.2836143 C66.2690414,87.5912212 63.0868492,85.2926952 57.6192095,81.6896017 C51.3004058,77.5256038 55.3966232,75.2369981 58.9976911,71.4967761 C59.9401076,70.5179421 76.3155302,55.6232293 76.6324771,54.2720454 C76.6721165,54.1030573 76.7089039,53.4731496 76.3346867,53.1405352 C75.9604695,52.8079208 75.4081573,52.921662 75.0095933,53.0121213 C74.444641,53.1403447 65.4461175,59.0880351 48.0140228,70.8551922 C45.4598218,72.6091037 43.1463059,73.4636682 41.0734751,73.4188859 C38.7883453,73.3695169 34.3926725,72.1268388 31.1249416,71.0646282 C27.1169366,69.7617838 23.931454,69.0729605 24.208838,66.8603276 C24.3533167,65.7078514 25.9403832,64.5292172 28.9700376,63.3244248 Z"></path></svg><span className="wp-block-social-link-label screen-reader-text">Telegram</span></a></li>
                  <li className="wp-social-link wp-social-link-twitter wp-block-social-link"><a href="https://twitter.com/harecrypta" rel="noopener nofollow" target="_blank" className="wp-block-social-link-anchor"><svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"></path></svg><span className="wp-block-social-link-label screen-reader-text">Twitter</span></a></li>
                  <li className="wp-social-link wp-social-link-youtube wp-block-social-link"><a href="https://www.youtube.com/c/HareCrypta" rel="noopener nofollow" target="_blank" className="wp-block-social-link-anchor"><svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M21.8,8.001c0,0-0.195-1.378-0.795-1.985c-0.76-0.797-1.613-0.801-2.004-0.847c-2.799-0.202-6.997-0.202-6.997-0.202 h-0.009c0,0-4.198,0-6.997,0.202C4.608,5.216,3.756,5.22,2.995,6.016C2.395,6.623,2.2,8.001,2.2,8.001S2,9.62,2,11.238v1.517 c0,1.618,0.2,3.237,0.2,3.237s0.195,1.378,0.795,1.985c0.761,0.797,1.76,0.771,2.205,0.855c1.6,0.153,6.8,0.201,6.8,0.201 s4.203-0.006,7.001-0.209c0.391-0.047,1.243-0.051,2.004-0.847c0.6-0.607,0.795-1.985,0.795-1.985s0.2-1.618,0.2-3.237v-1.517 C22,9.62,21.8,8.001,21.8,8.001z M9.935,14.594l-0.001-5.62l5.404,2.82L9.935,14.594z"></path></svg><span className="wp-block-social-link-label screen-reader-text">YouTube</span></a></li>
                  <li className="wp-social-link wp-social-link-instagram wp-block-social-link"><a href="https://www.instagram.com/harecrypta_fun/" rel="noopener nofollow" target="_blank" className="wp-block-social-link-anchor"><svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"></path></svg><span className="wp-block-social-link-label screen-reader-text">Instagram</span></a></li>
                  <li className="wp-social-link wp-social-link-fivehundredpx wp-block-social-link"><a href="https://discord.gg/harecrypta" rel="noopener nofollow" target="_blank" className="wp-block-social-link-anchor"><svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M6.94026,15.1412c.00437.01213.108.29862.168.44064a6.55008,6.55008,0,1,0,6.03191-9.09557,6.68654,6.68654,0,0,0-2.58357.51467A8.53914,8.53914,0,0,0,8.21268,8.61344L8.209,8.61725V3.22948l9.0504-.00008c.32934-.0036.32934-.46353.32934-.61466s0-.61091-.33035-.61467L7.47248,2a.43.43,0,0,0-.43131.42692v7.58355c0,.24466.30476.42131.58793.4819.553.11812.68074-.05864.81617-.2457l.018-.02481A10.52673,10.52673,0,0,1,9.32258,9.258a5.35268,5.35268,0,1,1,7.58985,7.54976,5.417,5.417,0,0,1-3.80867,1.56365,5.17483,5.17483,0,0,1-2.69822-.74478l.00342-4.61111a2.79372,2.79372,0,0,1,.71372-1.78792,2.61611,2.61611,0,0,1,1.98282-.89477,2.75683,2.75683,0,0,1,1.95525.79477,2.66867,2.66867,0,0,1,.79656,1.909,2.724,2.724,0,0,1-2.75849,2.748,4.94651,4.94651,0,0,1-.86254-.13719c-.31234-.093-.44519.34058-.48892.48349-.16811.54966.08453.65862.13687.67489a3.75751,3.75751,0,0,0,1.25234.18375,3.94634,3.94634,0,1,0-2.82444-6.742,3.67478,3.67478,0,0,0-1.13028,2.584l-.00041.02323c-.0035.11667-.00579,2.881-.00644,3.78811l-.00407-.00451a6.18521,6.18521,0,0,1-1.0851-1.86092c-.10544-.27856-.34358-.22925-.66857-.12917-.14192.04372-.57386.17677-.47833.489Zm4.65165-1.08338a.51346.51346,0,0,0,.19513.31818l.02276.022a.52945.52945,0,0,0,.3517.18416.24242.24242,0,0,0,.16577-.0611c.05473-.05082.67382-.67812.73287-.738l.69041.68819a.28978.28978,0,0,0,.21437.11032.53239.53239,0,0,0,.35708-.19486c.29792-.30419.14885-.46821.07676-.54751l-.69954-.69975.72952-.73469c.16-.17311.01874-.35708-.12218-.498-.20461-.20461-.402-.25742-.52855-.14083l-.7254.72665-.73354-.73375a.20128.20128,0,0,0-.14179-.05695.54135.54135,0,0,0-.34379.19648c-.22561.22555-.274.38149-.15656.5059l.73374.7315-.72942.73072A.26589.26589,0,0,0,11.59191,14.05782Zm1.59866-9.915A8.86081,8.86081,0,0,0,9.854,4.776a.26169.26169,0,0,0-.16938.22759.92978.92978,0,0,0,.08619.42094c.05682.14524.20779.531.50006.41955a8.40969,8.40969,0,0,1,2.91968-.55484,7.87875,7.87875,0,0,1,3.086.62286,8.61817,8.61817,0,0,1,2.30562,1.49315.2781.2781,0,0,0,.18318.07586c.15529,0,.30425-.15253.43167-.29551.21268-.23861.35873-.4369.1492-.63538a8.50425,8.50425,0,0,0-2.62312-1.694A9.0177,9.0177,0,0,0,13.19058,4.14283ZM19.50945,18.6236h0a.93171.93171,0,0,0-.36642-.25406.26589.26589,0,0,0-.27613.06613l-.06943.06929A7.90606,7.90606,0,0,1,7.60639,18.505a7.57284,7.57284,0,0,1-1.696-2.51537,8.58715,8.58715,0,0,1-.5147-1.77754l-.00871-.04864c-.04939-.25873-.28755-.27684-.62981-.22448-.14234.02178-.5755.088-.53426.39969l.001.00712a9.08807,9.08807,0,0,0,15.406,4.99094c.00193-.00192.04753-.04718.0725-.07436C19.79425,19.16234,19.87422,18.98728,19.50945,18.6236Z"></path></svg><span className="wp-block-social-link-label screen-reader-text">500px</span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 res-m-bttm">
              <div id="nav_menu-10" className="widget footer-widget widget_nav_menu">
                <h6 className="widget-title">Навигация</h6>
                <div className="menu-futer-menyu-2-container">
                  <ul id="menu-futer-menyu-2" className="menu">
                    <li id="menu-item-2806" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-395 current_page_item menu-item-2806"><a href="https://harecrypta.com/" aria-current="page">Главная</a></li>
                    <li id="menu-item-2813" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2813"><a href="https://harecrypta.com/konsalting/">Консалтинг</a></li>
                    <li id="menu-item-2807" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2807"><a href="https://harecrypta.com/news-harecrypta/">Новости HareCrypta</a></li>
                    <li id="menu-item-2808" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2808"><a href="https://harecrypta.com/ama/">AMA HareCrypta</a></li>
                    <li id="menu-item-2810" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2810"><a href="https://harecrypta.com/harma/">Harma</a></li>
                    <li id="menu-item-2809" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2809"><a href="https://harecrypta.com/haremerch/">HareMerch</a></li>
                    <li id="menu-item-2802" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2802"><a href="https://harecrypta.com/crypto-academy/">Криптоакадемия</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 res-m-bttm">
              <div id="nav_menu-3" className="widget footer-widget widget_nav_menu">
                <h6 className="widget-title">Важное HareCrypta</h6>
                <div className="menu-futer-menyu-container">
                  <ul id="menu-futer-menyu" className="menu">
                    <li id="menu-item-2798" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2798"><a href="https://harecrypta.com/category/statya/">Статья HareCrypta</a></li>
                    <li id="menu-item-2795" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2795"><a href="https://harecrypta.com/category/vyzhimki/">Выжимки HareCrypta</a></li>
                    <li id="menu-item-2796" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2796"><a href="https://harecrypta.com/category/makroekonomika/">Макроэкономика</a></li>
                    <li id="menu-item-2797" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2797"><a href="https://harecrypta.com/category/letopis-harma/">Летопись Harma</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 res-m-bttm">
              <div id="nav_menu-4" className="widget footer-widget widget_nav_menu">
                <h6 className="widget-title">Информация</h6>
                <div className="menu-informacziya-container">
                  <ul id="menu-informacziya" className="menu">
                    <li id="menu-item-1170" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1170"><a href="https://harecrypta.com/category/statya/">Статьи HareCrypta</a></li>
                    <li id="menu-item-1168" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1168"><a href="https://harecrypta.com" aria-current="page">GitBook про NFT (coming soon)</a></li>
                    <li id="menu-item-1315" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1315"><a href="https://harecrypta.com/" aria-current="page">Инструменты (coming soon)</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
