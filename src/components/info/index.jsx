import React from "react";
import { useContext } from "react";
import { dataType } from "../../App";
import { branchExtractor } from "../../services/branchExtractor";

function Info({ data, type, iaf, jaf }) {
  const [contextDataType, setContextDataType] = useContext(dataType);
  console.log(contextDataType);
  console.log(data);
  let details = [];
  if (data.data && contextDataType == "IAF") {
    if (!data.data["Eligibility Criteria"]["B.Tech"])
      data.data["Eligibility Criteria"]["B.Tech"] = {};
    if (!data.data["Eligibility Criteria"]["IDD (B.Tech + M.Tech) 5 year"])
      data.data["Eligibility Criteria"]["IDD (B.Tech + M.Tech) 5 year"] = {};
    if (!data.data["Eligibility Criteria"]["M.Tech./ M.Pharma./ M.Sc 2 year"])
      data.data["Eligibility Criteria"]["M.Tech./ M.Pharma./ M.Sc 2 year"] = {};
    if (!data.data["Discipline Program and Specialization Details"])
      data.data["Discipline Program and Specialization Details"] = {};
    details = [
      {
        heading: "Name",
        value: data.data["Name of the company"],
      },
      {
        heading: "Company Category",
        value: data.data["Category"].toString(),
      },
      {
        heading: "Job Description",
        value: data.data["Job Description"],
      },
      {
        heading: "Location",
        value: data.data["Postal Address"],
      },
      {
        heading: "Eligibility Criteria",
        valueArray: [
          {
            heading: "BTech",
            valueArray: [
              {
                heading: "CGPA: ",
                value:
                  data.data["Eligibility Criteria"]["B.Tech"]["CGPA (on 10)"],
              },
              {
                heading: "X %: ",
                value: data.data["Eligibility Criteria"]["B.Tech"]["X %"],
              },
              {
                heading: "XII %: ",
                value: data.data["Eligibility Criteria"]["B.Tech"]["X %"],
              },
            ],
          },
          {
            heading: "IDD",
            valueArray: [
              {
                heading: "CGPA: ",
                value:
                  data.data["Eligibility Criteria"][
                    "IDD (B.Tech + M.Tech) 5 year"
                  ]["CGPA (on 10)"],
              },
              {
                heading: "X %: ",
                value:
                  data.data["Eligibility Criteria"][
                    "IDD (B.Tech + M.Tech) 5 year"
                  ]["X %"],
              },
              {
                heading: "XII %: ",
                value:
                  data.data["Eligibility Criteria"][
                    "IDD (B.Tech + M.Tech) 5 year"
                  ]["X %"],
              },
            ],
          },
          {
            heading: "M.Tech",
            valueArray: [
              {
                heading: "CGPA: ",
                value:
                  data.data["Eligibility Criteria"][
                    "M.Tech./ M.Pharma./ M.Sc 2 year"
                  ]["CGPA (on 10)"],
              },
              {
                heading: "X %: ",
                value:
                  data.data["Eligibility Criteria"][
                    "M.Tech./ M.Pharma./ M.Sc 2 year"
                  ]["X %"],
              },
              {
                heading: "XII %: ",
                value:
                  data.data["Eligibility Criteria"][
                    "M.Tech./ M.Pharma./ M.Sc 2 year"
                  ]["X %"],
              },
            ],
          },
        ],
      },
      {
        heading: "Internship Profile",
        valueArray: [
          {
            heading: "BTech",
            valueArray: [
              {
                heading: "Incentives/ Perks/ Bonus: ",
                value:
                  data.data["Internship Profile"]["B.Tech. 4 yr"][
                    "Incentives/ Perks/ Bonus"
                  ],
              },
              {
                heading: "Offered stipend Per Month: ",
                value:
                  data.data["Internship Profile"]["B.Tech. 4 yr"][
                    "Offered stipend Per Month"
                  ],
              },
              {
                heading: "Relocation Compensation: ",
                value:
                  data.data["Internship Profile"]["B.Tech. 4 yr"][
                    "Relocation Compensation"
                  ],
              },
              {
                heading: "Total Internship Duration: ",
                value:
                  data.data["Internship Profile"]["B.Tech. 4 yr"][
                    "Total Internship Duration"
                  ],
              },
            ],
          },
          {
            heading: "IDD",
            valueArray: [
              {
                heading: "Incentives/ Perks/ Bonus: ",
                value:
                  data.data["Internship Profile"][
                    "IDD(B.Tech. + M.Tech.) 5 yr."
                  ]["Incentives/ Perks/ Bonus"],
              },
              {
                heading: "Offered stipend Per Month: ",
                value:
                  data.data["Internship Profile"][
                    "IDD(B.Tech. + M.Tech.) 5 yr."
                  ]["Offered stipend Per Month"],
              },
              {
                heading: "Relocation Compensation: ",
                value:
                  data.data["Internship Profile"][
                    "IDD(B.Tech. + M.Tech.) 5 yr."
                  ]["Relocation Compensation"],
              },
              {
                heading: "Total Internship Duration: ",
                value:
                  data.data["Internship Profile"][
                    "IDD(B.Tech. + M.Tech.) 5 yr."
                  ]["Total Internship Duration"],
              },
            ],
          },
          {
            heading: "MSc",
            valueArray: [
              {
                heading: "Incentives/ Perks/ Bonus: ",
                value:
                  data.data["Internship Profile"]["M.Sc."][
                    "Incentives/ Perks/ Bonus"
                  ],
              },
              {
                heading: "Offered stipend Per Month: ",
                value:
                  data.data["Internship Profile"]["M.Sc."][
                    "Offered stipend Per Month"
                  ],
              },
              {
                heading: "Relocation Compensation: ",
                value:
                  data.data["Internship Profile"]["M.Sc."][
                    "Relocation Compensation"
                  ],
              },
              {
                heading: "Total Internship Duration: ",
                value:
                  data.data["Internship Profile"]["M.Sc."][
                    "Total Internship Duration"
                  ],
              },
            ],
          },
          {
            heading: "MTech",
            valueArray: [
              {
                heading: "Incentives/ Perks/ Bonus: ",
                value:
                  data.data["Internship Profile"]["M.Tech./M.Pharma. 2 yr."][
                    "Incentives/ Perks/ Bonus"
                  ],
              },
              {
                heading: "Offered stipend Per Month: ",
                value:
                  data.data["Internship Profile"]["M.Tech./M.Pharma. 2 yr."][
                    "Offered stipend Per Month"
                  ],
              },
              {
                heading: "Relocation Compensation: ",
                value:
                  data.data["Internship Profile"]["M.Tech./M.Pharma. 2 yr."][
                    "Relocation Compensation"
                  ],
              },
              {
                heading: "Total Internship Duration: ",
                value:
                  data.data["Internship Profile"]["M.Tech./M.Pharma. 2 yr."][
                    "Total Internship Duration"
                  ],
              },
            ],
          },
        ],
      },
      {
        heading: "Branches Eligible",
        valueArray: [
          {
            heading: "B.Tech",
            value: branchExtractor(
              data.data["Discipline Program and Specialization Details"][
                "B.Tech 3rd Year"
              ]
            ),
          },
          {
            heading: "IDD",
            value: branchExtractor(
              data.data["Discipline Program and Specialization Details"][
                "IDD 3rd Year"
              ]
            ),
          },
          {
            heading: "M.Tech",
            value: branchExtractor(
              data.data["Discipline Program and Specialization Details"][
                "M.Tech/ M.Pharma / M.Sc"
              ]
            ),
          },
        ],
      },
    ];
  }

  if (data.data && contextDataType == "JAF") {
    if (!data.data["Eligibility Criteria"]["B.Tech"])
      data.data["Eligibility Criteria"]["B.Tech"] = {};
    if (!data.data["Eligibility Criteria"]["IDD (B.Tech + M.Tech) 5 year"])
      data.data["Eligibility Criteria"]["IDD (B.Tech + M.Tech) 5 year"] = {};
    if (!data.data["Eligibility Criteria"]["M.Tech./ M.Pharma./ M.Sc 2 year"])
      data.data["Eligibility Criteria"]["M.Tech./ M.Pharma./ M.Sc 2 year"] = {};
    if (!data.data["Discipline Program and Specialization Details"])
      data.data["Discipline Program and Specialization Details"] = {};
    details = [
      {
        heading: "Name",
        value: data.data["Name of the company"],
      },
      {
        heading: "Company Category",
        value: data.data["Category"].toString(),
      },
      {
        heading: "Job Description",
        value: data.data["Job Description"],
      },
      {
        heading: "Location",
        value: data.data["Postal Address"],
      },
      {
        heading: "Eligibility Criteria",
        valueArray: [
          {
            heading: "BTech",
            valueArray: [
              {
                heading: "CGPA: ",
                value:
                  data.data["Eligibility Criteria"]["B.Tech"]["CGPA (on 10)"],
              },
              {
                heading: "X %: ",
                value: data.data["Eligibility Criteria"]["B.Tech"]["X %"],
              },
              {
                heading: "XII %: ",
                value: data.data["Eligibility Criteria"]["B.Tech"]["X %"],
              },
            ],
          },
          {
            heading: "IDD",
            valueArray: [
              {
                heading: "CGPA: ",
                value:
                  data.data["Eligibility Criteria"][
                    "IDD (B.Tech + M.Tech) 5 year"
                  ]["CGPA (on 10)"],
              },
              {
                heading: "X %: ",
                value:
                  data.data["Eligibility Criteria"][
                    "IDD (B.Tech + M.Tech) 5 year"
                  ]["X %"],
              },
              {
                heading: "XII %: ",
                value:
                  data.data["Eligibility Criteria"][
                    "IDD (B.Tech + M.Tech) 5 year"
                  ]["X %"],
              },
            ],
          },
          {
            heading: "M.Tech",
            valueArray: [
              {
                heading: "CGPA: ",
                value:
                  data.data["Eligibility Criteria"][
                    "M.Tech./ M.Pharma./ M.Sc 2 year"
                  ]["CGPA (on 10)"],
              },
              {
                heading: "X %: ",
                value:
                  data.data["Eligibility Criteria"][
                    "M.Tech./ M.Pharma./ M.Sc 2 year"
                  ]["X %"],
              },
              {
                heading: "XII %: ",
                value:
                  data.data["Eligibility Criteria"][
                    "M.Tech./ M.Pharma./ M.Sc 2 year"
                  ]["X %"],
              },
            ],
          },
        ],
      },
      {
        heading: "Components of CTC",
        valueArray: [
          {
            heading: "1st Year CTC",
            value: data.data["Components of CTC"]["1st Year CTC"],
          },
          {
            heading: "Fixed Salary",
            value: data.data["Components of CTC"]["Fixed Salary"],
          },
          {
            heading: "Total CTC",
            value: data.data["Components of CTC"]["Total CTC"],
          },
        ],
      },
      {
        heading: "Branches Eligible",
        valueArray: [
          {
            heading: "B.Tech",
            value: branchExtractor(
              data.data["Discipline Program and Specialization Details"][
                "B.Tech 4th Year"
              ]
            ),
          },
          {
            heading: "IDD",
            value: branchExtractor(
              data.data["Discipline Program and Specialization Details"][
                "IDD (B.Tech + M.Tech) 5 year"
              ]
            ),
          },
          {
            heading: "M.Tech",
            value: branchExtractor(
              data.data["Discipline Program and Specialization Details"][
                "M.Tech./ M.Pharma./ M.Sc 2 year"
              ]
            ),
          },
        ],
      },
    ];
  }
  return (
    <React.Fragment>
      {data && data.data ? (
        <div style={{ padding: "20px", width: "100%" }}>
          {contextDataType == "IAF" && (
            <h3
              style={{
                padding: "10px",
                borderRadius: "10px",
                color: "white",
                backgroundColor: "green",
                marginBottom: "15px",
              }}
            >
              Internship Application
            </h3>
          )}
          {contextDataType == "JAF" && (
            <h3
              style={{
                padding: "10px",
                borderRadius: "10px",
                color: "white",
                backgroundColor: "orange",
                marginBottom: "15px",
              }}
            >
              Job Application
            </h3>
          )}
          {details.map((detail, index) => {
            return (
              <div key={`detail_${index}`}>
                {detail.value && (
                  <>
                    <h5 style={{ fontWeight: "800" }}>{detail.heading}</h5>
                    <p>{detail.value}</p>
                  </>
                )}
                {detail.valueArray && (
                  <div style={{ marginBottom: "15px" }}>
                    <h5 style={{ fontWeight: "800" }}> {detail.heading}</h5>
                    {detail.valueArray.map((subDetail, index) => {
                      return (
                        <div key={`subDetail_${index}`}>
                          {subDetail.value && (
                            <>
                              <h6 style={{ margin: "0px" }}>
                                <b>{subDetail.heading}</b>
                              </h6>
                              <p>{subDetail.value}</p>
                            </>
                          )}
                          {subDetail.valueArray && (
                            <div style={{ marginBottom: "5px" }}>
                              <p style={{ fontSize: "15px", margin: "0px" }}>
                                <b>
                                  <u>{subDetail.heading}</u>
                                </b>
                              </p>
                              {subDetail.valueArray.map(
                                (subSubHeading, index) => {
                                  return (
                                    <div
                                      key={`subSubHeading_${index}`}
                                      style={{ display: "flex" }}
                                    >
                                      <p
                                        style={{
                                          margin: "0px",
                                          marginRight: "5px",
                                        }}
                                      >
                                        <b>{subSubHeading.heading}</b>
                                      </p>
                                      <p style={{ margin: "0px" }}>
                                        {subSubHeading.value}
                                      </p>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <h3 style={{ width: "100%", color: "grey" }}>
            Click on IAF/JAF to view details
          </h3>
        </div>
      )}
    </React.Fragment>
  );
}

export default Info;
