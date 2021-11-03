import React from 'react';
import "../css/style.min.css";

const LeftBar = () => {
    return (
        <>
        {/* <!-- ============================================================== -->
      <!-- Left Sidebar - style you can find in sidebar.scss  -->
      <!-- ============================================================== --> */}
      <aside className="left-sidebar" data-sidebarbg="skin6">
        {/* <!-- Sidebar scroll--> */}
        <div className="scroll-sidebar">
          {/* <!-- Sidebar navigation--> */}
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              {/* <!-- User Profile--> */}
              <li className="sidebar-item pt-2">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="dashboard.html"
                  aria-expanded="false"
                >
                  <i className="far fa-clock" aria-hidden="true"></i>
                  <span className="hide-menu">Dashboard</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="profile.html"
                  aria-expanded="false"
                >
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span className="hide-menu">Profile</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="All-Exercises.html"
                  aria-expanded="false"
                >
                  <i className="fa fa-table" aria-hidden="true"></i>
                  <span className="hide-menu">All Exercises</span>
                </a>
              </li>

              <li className="sidebar-item">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="AddNewActivity.html"
                  aria-expanded="false"
                >
                  <i className="fas fa-plus" aria-hidden="true"></i>
                  <span className="hide-menu">Add New Activity</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="EditActivity.html"
                  aria-expanded="false"
                >
                  <i className="fas fa-edit" aria-hidden="true"></i>
                  <span className="hide-menu">Edit Activity</span>
                </a>
              </li>

              <li className="text-center p-20 logout-btn">
                <a
                  href="https://www.wrappixel.com/templates/ampleadmin/"
                  className="btn d-grid btn-danger text-white"
                  target="_blank"
                >
                  Logout</a
                >
              </li>
            </ul>
          </nav>
          {/* <!-- End Sidebar navigation --> */}
        </div>
        {/* <!-- End Sidebar scroll--> */}
      </aside>
      {/* <!-- ============================================================== -->
      <!-- End Left Sidebar - style you can find in sidebar.scss  -->
      <!-- ============================================================== --> */}
        </>
    )
}
export default LeftBar;
