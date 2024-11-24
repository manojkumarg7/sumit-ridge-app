import React from "react";
import Table from "react-bootstrap/Table";
import "./hometableStyle.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import DataTable from "datatables.net-dt";
const HomeTable = ({ data, handledeletefunction }) => {
  let table = new DataTable("#myTable");

  return (
    <div>
      <div className="page-title">
        <h4 className="fw-semibold text-left my-3">Home</h4>
      </div>
      <section>
        <div className="table-container">
          <Link to={"/new"}>
            <Button
              variant="light"
              className="border border-danger text-danger d-flex gap-3 align-items-center ms-auto mb-4 me-3"
            >
              <FaPlus />
              Add New Animal
            </Button>
          </Link>
          <div className="table-responsive">
            <Table striped bordered hover>
              <thead className="custom-table-header">
                <tr className="table-head-row">
                  <th>DogId</th>
                  <th>Sex</th>
                  <th>DOB</th>
                  <th>Birth Weight</th>
                  <th>Color</th>
                  <th>Date Accquired</th>
                  <th>Bowl</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data && data.length > 0 ? (
                  data.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td>{value.dogid || "Manoj"}</td>
                        <td>{value.sex || "Male"}</td>
                        <td>{value.dob || "dob"}</td>
                        <td>{value.birthWeight || "escape"}</td>
                        <td>{value.color}</td>
                        <td>{value.dateAccquired} </td>
                        <td> {value.bowl}</td>
                        <td>
                          <GoDotFill
                            style={{
                              color:
                                value.status === "Active" ? "green" : "red",
                            }}
                          />
                          {value.status}
                        </td>
                        <td>
                          <div className="d-flex gap-2 align-items-center">
                            <Link to={`/edit/${value.id}`}>
                              <BiEdit className="home-page-actions-icons mt-1 text-primary" />
                            </Link>
                            <RiDeleteBin6Line
                              className="home-page-actions-icons mt-1 text-danger"
                              onClick={() => handledeletefunction(value.id)}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="10" className="text-center">
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeTable;
