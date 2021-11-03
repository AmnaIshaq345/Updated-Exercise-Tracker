import React from 'react';
import "../css/style.min.css";

function CrudOperation() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="white-box">
                            <h3 className="box-title">Basic Table</h3>
                            <button
                                type="button"
                                className="btn btn-danger position-relative text-white my-auto"
                            >
                                Pending
                                <span
                                    className="
                      position-absolute
                      top-0
                      start-100
                      translate-middle
                      badge
                      rounded-pill
                      bg-primary
                    "
                                >
                                    3
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>

                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th className="border-top-0">#</th>
                                            <th className="border-top-0">Activity Name</th>
                                            <th className="border-top-0">Description</th>
                                            <th className="border-top-0">Activity Type</th>
                                            <th className="border-top-0">Durtion in Mints.</th>
                                            <th className="border-top-0">Date</th>

                                            <th className="border-top-0">CRUD Operations</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Haris</td>
                                            <td>Outdoor activity</td>
                                            <td>Swim</td>
                                            <td>5</td>
                                            <td>10-07-2021</td>
                                            <td>
                                                <a
                                                    className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                                                    href="basic-table.html"
                                                    aria-expanded="false"
                                                >
                                                    <i className="fas fa-trash" aria-hidden="true"></i>
                                                </a>
                                                <a
                                                    className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                                                    href="EditActivity.html"
                                                    aria-expanded="false"
                                                >
                                                    <i className="fas fa-edit" aria-hidden="true"></i>
                                                </a>
                                                <a
                                                    className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                                                    href="basic-table.html"
                                                    aria-expanded="false"
                                                >
                                                    <i
                                                        className="fas fa-check-square"
                                                        aria-hidden="true"
                                                    ></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Ahmed</td>
                                            <td>Outdoor activity</td>
                                            <td>Hike</td>
                                            <td>10</td>
                                            <td>10-07-2021</td>
                                            <td>
                                                <a
                                                    className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                                                    href="basic-table.html"
                                                    aria-expanded="false"
                                                >
                                                    <i className="fas fa-trash" aria-hidden="true"></i>
                                                </a>
                                                <a
                                                    className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                                                    href="EditActivity.html"
                                                    aria-expanded="false"
                                                >
                                                    <i className="fas fa-edit" aria-hidden="true"></i>
                                                </a>
                                                <a
                                                    className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                                                    href="basic-table.html"
                                                    aria-expanded="false"
                                                >
                                                    <i
                                                        className="fas fa-check-square"
                                                        aria-hidden="true"
                                                    ></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Tuseef</td>
                                            <td>Outdoor activity</td>
                                            <td>Walk</td>
                                            <td>25</td>
                                            <td>10-07-2021</td>
                                            <td>
                                                <a
                                                    className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                                                    href="basic-table.html"
                                                    aria-expanded="false"
                                                >
                                                    <i className="fas fa-trash" aria-hidden="true"></i>
                                                </a>
                                                <a
                                                    className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                                                    href="EditActivity.html"
                                                    aria-expanded="false"
                                                >
                                                    <i className="fas fa-edit" aria-hidden="true"></i>
                                                </a>
                                                <a
                                                    className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                                                    href="basic-table.html"
                                                    aria-expanded="false"
                                                >
                                                    <i
                                                        className="fas fa-check-square"
                                                        aria-hidden="true"
                                                    ></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Raza</td>
                                            <td>Outdoor activity</td>
                                            <td>Bicycle Ride</td>
                                            <td>10</td>
                                            <td>10-07-2021</td>
                                            <td>
                                                <a
                                                    className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                                                    href="basic-table.html"
                                                    aria-expanded="false"
                                                >
                                                    <i className="fas fa-trash" aria-hidden="true"></i>
                                                </a>
                                                <a
                                                    className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                                                    href="EditActivity.html"
                                                    aria-expanded="false"
                                                >
                                                    <i className="fas fa-edit" aria-hidden="true"></i>
                                                </a>
                                                <a
                                                    className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                                                    href="basic-table.html"
                                                    aria-expanded="false"
                                                >
                                                    <i
                                                        className="fas fa-check-square"
                                                        aria-hidden="true"
                                                    ></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Amna</td>
                                            <td>Outdoor activity</td>
                                            <td>Swim</td>
                                            <td>5</td>
                                            <td>10-07-2021</td>
                                            <td>
                                                <a
                                                    className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                                                    href="basic-table.html"
                                                    aria-expanded="false"
                                                >
                                                    <i className="fas fa-trash" aria-hidden="true"></i>
                                                </a>
                                                <a
                                                    className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                                                    href="EditActivity.html"
                                                    aria-expanded="false"
                                                >
                                                    <i className="fas fa-edit" aria-hidden="true"></i>
                                                </a>
                                                <a
                                                    className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                                                    href="basic-table.html"
                                                    aria-expanded="false"
                                                >
                                                    <i
                                                        className="fas fa-check-square"
                                                        aria-hidden="true"
                                                    ></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Ali</td>
                                            <td>Outdoor activity</td>
                                            <td>Run</td>
                                            <td>30</td>
                                            <td>10-07-2021</td>
                                            <td>
                                                <a
                                                    className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                                                    href="basic-table.html"
                                                    aria-expanded="false"
                                                >
                                                    <i className="fas fa-trash" aria-hidden="true"></i>
                                                </a>
                                                <a
                                                    className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                                                    href="EditActivity.html"
                                                    aria-expanded="false"
                                                >
                                                    <i className="fas fa-edit" aria-hidden="true"></i>
                                                </a>
                                                <a
                                                    className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                                                    href="basic-table.html"
                                                    aria-expanded="false"
                                                >
                                                    <i
                                                        className="fas fa-check-square"
                                                        aria-hidden="true"
                                                    ></i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CrudOperation;
