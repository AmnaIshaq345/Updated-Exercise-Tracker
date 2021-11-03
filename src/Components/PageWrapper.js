import React from 'react';
import "../css/style.min.css";

const PageWrapper = () => {
    return (
       <>
       {/* <!-- Page wrapper  -->
      <!-- ============================================================== --> */}
      <div className="page-wrapper">
        {/* <!-- ============================================================== -->
        <!-- Bread crumb and right sidebar toggle -->
        <!-- ============================================================== --> */}
        <div className="page-breadcrumb bg-white">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h4 className="page-title">Dashboard</h4>
            </div>
            <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
              <div className="d-md-flex">
                <ol className="breadcrumb ms-auto">
                  <li><a href="#" className="fw-normal">Dashboard</a></li>
                </ol>
              </div>
            </div>
          </div>
          {/* <!-- /.col-lg-12 --> */}
        </div>
        {/* <!-- ============================================================== -->
        <!-- End Bread crumb and right sidebar toggle -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Container fluid  -->
        <!-- ============================================================== --> */}
        <div className="container-fluid">
          {/* <!-- ============================================================== -->
          <!-- Three charts -->
          <!-- ============================================================== --> */}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-12">
              <div className="white-box analytics-info">
                <h3 className="box-title">Hours Workout Today</h3>
                <ul className="list-inline two-part d-flex align-items-center mb-0">
                  <li>
                    <div id="sparklinedash">
                      <canvas
                        width="67"
                        height="30"
                        style={{ display: "inline-block",
                          width: "67px",
                          height: "30px",
                          verticalAlign: "top"}}
                      ></canvas>
                    </div>
                  </li>
                  <li className="ms-auto">
                    <span className="counter text-success">2</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="white-box analytics-info">
                <h3 className="box-title">Workout Streak</h3>
                <ul className="list-inline two-part d-flex align-items-center mb-0">
                  <li>
                    <div id="sparklinedash2">
                      <canvas
                        width="67"
                        height="30"
                        style={{display: "inline-block",
                          width: "67px",
                          height: "30px",
                          verticalAlign: "top"}}
                      ></canvas>
                    </div>
                  </li>
                  <li className="ms-auto">
                    <span className="counter text-purple">7 Days</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="white-box analytics-info">
                <h3 className="box-title">Weekly Hours</h3>
                <ul className="list-inline two-part d-flex align-items-center mb-0">
                  <li>
                    <div id="sparklinedash3">
                      <canvas
                        width="67"
                        height="30"
                        style={{display: "inline-block",
                          width: "67px",
                          height: "30px",
                          verticalAlign: "top"}}
                      ></canvas>
                    </div>
                  </li>
                  <li className="ms-auto">
                    <span className="counter text-info">10</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- ============================================================== -->
          <!-- PRODUCTS YEARLY SALES -->
          <!-- ============================================================== -->

          <!-- ============================================================== -->
          <!-- RECENT SALES -->
          <!-- ============================================================== --> */}
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12">
              <div className="white-box">
                <div className="d-md-flex mb-3">
                  <h3 className="box-title mb-0">Exercise Data</h3>
                  <div className="col-md-3 col-sm-4 col-xs-6 ms-auto">
                    <select className="form-select shadow-none row border-top">
                      <option>March 2021</option>
                      <option>April 2021</option>
                      <option>May 2021</option>
                      <option>June 2021</option>
                      <option>July 2021</option>
                    </select>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table no-wrap">
                    <thead>
                      <tr>
                        <th className="border-top-0">#</th>
                        <th className="border-top-0">Activity Type</th>
                        <th className="border-top-0">Description</th>
                        <th className="border-top-0">Completed %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="txt-oflo">Walk</td>
                        <td>Outdoor Activity</td>
                        <td>
                          <div className="progress" style={{height: "30px"}}>
                            <div
                              className="progress-bar progress-bar-danger"
                              role="progressbar"
                              aria-valuenow="70"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{width: "70%"}}
                            ></div>
                          </div> 
                          <div className="progress" style={{height: "25px"}}>
                            <div
                              className="
                                progress-bar progress-bar-striped
                                bg-danger
                              "
                              role="progressbar"
                              style={{width: "75%"}}
                              aria-valuenow="100"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              75%
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ============================================================== -->
          <!-- Recent Comments -->
          <!-- ============================================================== --> */}
        </div>
        {/* <!-- ============================================================== -->
        <!-- End Container fluid  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- footer -->
        <!-- ============================================================== --> */}
        <footer className="footer text-center">2021 © Fitness Guru</footer>
        {/* <!-- ============================================================== -->
        <!-- End footer -->
        <!-- ============================================================== --> */}
      </div>
      {/* <!-- ============================================================== -->
      <!-- End Page wrapper  -->
      <!-- ============================================================== --> */}
       </>
    )
}
export default PageWrapper;