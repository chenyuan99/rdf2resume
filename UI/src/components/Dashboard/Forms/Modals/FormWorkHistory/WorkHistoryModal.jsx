import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Row, Col, Button } from "react-bootstrap";
import { Combobox } from "react-widgets";
import Swal from "sweetalert2";
import CustomTextarea from "../../../../core/CustomTextarea";
import CustomInput from "../../../../core/CustomInput";
import CustomCheckbox from "../../../../core/CustomCheckbox";
import { createWorkHistory, updateWorkHistory, updateCVLastUpdate } from "../../../../../actions";
import {
  fetchCVJobTypes,
  fetchCVCareerLevels,
  fetchCountries,
  fetchCompanySizes,
  fetchMainPropertiess,
  fetchAllIndustryTypess,
  updateLanguage
} from "../../../../../actions/utilityActions";
import {
  retrieveCountryValues,
  retrieveMainProperties,
  retrieveBaseProperties
} from "../../../../../utilities/utilityQueries";
import {
  cancelLabel,
  resetLabel,
  saveLabel,
  updateLabel,
  startDate,
  endDate,
  workAddTitle,
  workUpdateTitle,
  successTitle
} from "../../../../../translations/translations";
import { ListItem, languages } from "../../../../core/LanguageToggle";

class WorkHistoryModal extends Component {
  state = {
    language: '',
    workHistory: {
      "@type": "my0:WorkHistory",
      "my0:startDate": "",
      "my0:endDate": "",
      "my0:jobTitle": [{
        "@value": "",
        "@language": "en"
      },
      {
        "@value": "",
        "@language": "it"
      },
      {
        "@value": "",
        "@language": "fr"
      },
      {
        "@value": "",
        "@language": "de"
      },
      {
        "@value": "",
        "@language": "sq"
      },
      ],
      "my0:jobDescription": [{
        "@value": "",
        "@language": "en"
      },
      {
        "@value": "",
        "@language": "it"
      },
      {
        "@value": "",
        "@language": "fr"
      },
      {
        "@value": "",
        "@language": "de"
      },
      {
        "@value": "",
        "@language": "sq"
      },
      ],
      "my0:careerLevel": "",
      "my0:jobType": "",
      "my0:isCurrent": false,
      "my0:employedIn": {
        "@type": "my0:Company",
        "my0:orgName": "",
        "my0:orgAddress": {
          "@type": "Address",
          "my0:city": [{
            "@value": "",
            "@language": "en"
          },
          {
            "@value": "",
            "@language": "it"
          },
          {
            "@value": "",
            "@language": "fr"
          },
          {
            "@value": "",
            "@language": "de"
          },
          {
            "@value": "",
            "@language": "sq"
          },
          ],
          "my0:country": "",
          "my0:street": [{
            "@value": "",
            "@language": "en"
          },
          {
            "@value": "",
            "@language": "it"
          },
          {
            "@value": "",
            "@language": "fr"
          },
          {
            "@value": "",
            "@language": "de"
          },
          {
            "@value": "",
            "@language": "sq"
          },
          ],
          "my0:postalCode": ""
        },
        "my0:orgDescription": [{
          "@value": "",
          "@language": "en"
        },
        {
          "@value": "",
          "@language": "it"
        },
        {
          "@value": "",
          "@language": "fr"
        },
        {
          "@value": "",
          "@language": "de"
        },
        {
          "@value": "",
          "@language": "sq"
        },
        ],
        "my0:orgWebsite": "",
        "my0:orgField": ""
      }
    }
  };

  componentDidMount() {
    this.props.fetchCVCareerLevels();
    this.props.fetchCVJobTypes();
    this.props.fetchCompanySizes();
    this.props.fetchCountries();
    this.props.fetchAllIndustryTypess();
    this.props.fetchMainPropertiess("my0:WorkHistory");
    this.props.fetchMainPropertiess("my0:Organization");
    this.props.fetchMainPropertiess("my0:Address");
    this.setInitialValues();
    this.setState({
      language: this.props.language
    })
  }

  setInitialValues = () => {
    if (this.props.id !== null && this.props.isUpdate === true) {
      let inputRef = this.props.initialValues;
      let workHistory = { ...this.state.workHistories };
      workHistory["@type"] = "my0:WorkHistory";
      workHistory["my0:startDate"] = inputRef["my0:startDate"];
      workHistory["my0:endDate"] = inputRef["my0:endDate"];
      workHistory["my0:jobTitle"] = inputRef["my0:jobTitle"];
      workHistory["my0:jobDescription"] = inputRef["my0:jobDescription"];
      workHistory["my0:jobType"] = inputRef["my0:jobType"];
      workHistory["my0:careerLevel"] = inputRef["my0:careerLevel"];
      workHistory["my0:isCurrent"] = inputRef["my0:isCurrent"];
      workHistory["my0:employedIn"] = inputRef["my0:employedIn"];
      this.setState({
        workHistory
      });
    }
  };

  clearForm = () => {
    if (!this.props.isUpdate) {
      this.setState({
        workHistory: {
          "@type": "my0:WorkHistory",
          "my0:startDate": "",
          "my0:endDate": "",
          "my0:jobTitle": [{
            "@value": "",
            "@language": "en"
          },
          {
            "@value": "",
            "@language": "it"
          },
          {
            "@value": "",
            "@language": "fr"
          },
          {
            "@value": "",
            "@language": "de"
          },
          {
            "@value": "",
            "@language": "sq"
          },
          ],
          "my0:jobDescription": [{
            "@value": "",
            "@language": "en"
          },
          {
            "@value": "",
            "@language": "it"
          },
          {
            "@value": "",
            "@language": "fr"
          },
          {
            "@value": "",
            "@language": "de"
          },
          {
            "@value": "",
            "@language": "sq"
          },
          ],
          "my0:careerLevel": "",
          "my0:jobType": "",
          "my0:isCurrent": false,
          "my0:employedIn": {
            "@type": "my0:Company",
            "my0:orgName": "",
            "my0:orgAddress": {
              "@type": "Address",
              "my0:city": [{
                "@value": "",
                "@language": "en"
              },
              {
                "@value": "",
                "@language": "it"
              },
              {
                "@value": "",
                "@language": "fr"
              },
              {
                "@value": "",
                "@language": "de"
              },
              {
                "@value": "",
                "@language": "sq"
              },
              ],
              "my0:country": "",
              "my0:street": [{
                "@value": "",
                "@language": "en"
              },
              {
                "@value": "",
                "@language": "it"
              },
              {
                "@value": "",
                "@language": "fr"
              },
              {
                "@value": "",
                "@language": "de"
              },
              {
                "@value": "",
                "@language": "sq"
              },
              ],
              "my0:postalCode": ""
            },
            "my0:orgDescription": [{
              "@value": "",
              "@language": "en"
            },
            {
              "@value": "",
              "@language": "it"
            },
            {
              "@value": "",
              "@language": "fr"
            },
            {
              "@value": "",
              "@language": "de"
            },
            {
              "@value": "",
              "@language": "sq"
            },
            ],
            "my0:orgWebsite": "",
            "my0:companyIndustry": ""
          }
        }
      });
    } else {
      this.setInitialValues();
    }
  };

  handleCheckboxChange = e => {
    let workHistory = { ...this.state.workHistory };
    workHistory[e.target.id] = e.target.checked;
    this.setState({
      workHistory
    });
  };

  replaceLanguageValue(data, language, value) {
    let length = data.length;
    for (let i = 0; i < length; i++) {
      if (data[i]["@language"] === language) {
        data[i]["@value"] = value;
        break;
      }
    }
    return data;
  }

  findTranslatedValue(data, lang) {
    let length = data.length;
    for (let i = 0; i < length; i++) {
      if (data[i]["@language"] === lang) {
        return data[i]["@value"];
      }
    }
  }

  handleInputChange = (e, lang) => {
    let obj = { ...this.state.workHistory };
    let label = e.target.id;
    if (label === "my0:startDate") {
      if (
        e.target.value >
        new Date()
          .toJSON()
          .slice(0, 10)
          .replace(/-/g, "-")
      ) {
        Swal.fire({
          title: "Warning!",
          text: startDate[this.props.language],
          type: "warning",
          confirmButtonColor: "#4bb3cc",
          heightAuto: false,
          confirmButtonText: "Okay"
        });
        return;
      }
    }
    if (label === "my0:endDate") {
      if (e.target.value < this.state.workHistory["my0:startDate"]) {
        Swal.fire({
          title: "Warning!",
          text: endDate[this.props.language],
          type: "warning",
          confirmButtonColor: "#4bb3cc",
          heightAuto: false,
          confirmButtonText: "Okay"
        });
        return;
      }
    }
    if (e.target.name === "org") {
      if (lang) {
        obj["my0:employedIn"][label] = this.replaceLanguageValue(obj["my0:employedIn"][label], lang, e.target.value);
      } else {
        obj["my0:employedIn"][label] = e.target.value;
      }
    } else if (e.target.name === "address") {
      if (lang) {
        obj["my0:employedIn"]["my0:orgAddress"][label] = this.replaceLanguageValue(obj["my0:employedIn"]["my0:orgAddress"][label], lang, e.target.value);
      } else {
        obj["my0:employedIn"]["my0:orgAddress"][label] = e.target.value;
      }
    } else {
      if (lang) {
        obj[label] = this.replaceLanguageValue(obj[label], lang, e.target.value);
      } else {
        obj[label] = e.target.value;
      }
    }
    this.setState({
      workHistory: obj
    });
  };

  handleSelectChange = (value, id, name) => {
    let obj = { ...this.state.workHistory };
    let label = id;
    if (name === "org") {
      obj["my0:employedIn"][label] = value["@type"];
    } else if (name === "address") {
      obj["my0:employedIn"]["my0:orgAddress"][label] = value["@type"];
    } else {
      obj[label] = value["@type"];
    }
    this.setState({
      workHistory: obj
    });
  };

  handleSave = e => {
    e.preventDefault();
    this.props.createWorkHistory(this.state.workHistory);
    this.props.updateCVLastUpdate();
    this.props.onHide();
    Swal.fire({
      title: successTitle[this.props.language],
      type: "success",
      confirmButtonColor: "#4bb3cc",
      heightAuto: false,
      confirmButtonText: "Okay"
    });
  };

  handleUpdate = e => {
    e.preventDefault();
    this.props.updateWorkHistory({
      object: this.state.workHistory,
      index: this.props.id
    });
    this.props.updateCVLastUpdate();
    this.props.onHide();
    Swal.fire({
      title: successTitle[this.props.language],
      type: "success",
      confirmButtonColor: "#4bb3cc",
      heightAuto: false,
      confirmButtonText: "Okay"
    });
  };

  handleRenderingSubmitButton = lang => {
    let isDisabled =
      this.state.workHistory["my0:startDate"] === "" ||
      this.state.workHistory["my0:employedIn"]["my0:orgName"] === "" ||
      this.state.workHistory["my0:jobTitle"] === "";
    if (!this.props.isUpdate) {
      return (
        <Button
          disabled={isDisabled}
          type="submit"
          variant="primary"
          onClick={this.handleSave}
        >
          {saveLabel[lang]}
        </Button>
      );
    } else {
      return (
        <Button
          disabled={isDisabled}
          type="submit"
          variant="primary"
          onClick={this.handleUpdate}
        >
          {updateLabel[lang]}
        </Button>
      );
    }
  };

  findInArray(data, name) {
    let length = data.length;
    for (let i = 0; i < length; i++) {
      if (data[i]["@type"].indexOf(name) >= 0) {
        return i;
      }
    }
  }

  renderLabel(translated, name, lang) {
    let index = this.findInArray(translated, name);
    if (
      translated[index] === undefined ||
      translated[index][lang] === undefined
    ) {
      return name;
    } else {
      return translated[index][lang];
    }
  }

  render() {
    let {
      "my0:startDate": startDate,
      "my0:endDate": endDate,
      "my0:jobTitle": jobTitle,
      "my0:jobType": jobType,
      "my0:careerLevel": careerLevel,
      "my0:jobDescription": jobDescription,
      "my0:isCurrent": isCurrent,
      "my0:employedIn": employedIn
    } = this.state.workHistory;

    let {
      "my0:orgName": orgName,
      "my0:orgField": orgField,
      "my0:orgWebsite": orgWebsite,
      "my0:orgDescription": orgDescription,
      "my0:orgAddress": address
    } = employedIn;

    let { onHide } = this.props;

    let lang = this.state.language

    let changeLanguage = (value) => this.setState({ language: value });

    let {
      translatedProps,
      translatedPropsOrg,
      translatedPropsAddr
    } = this.props;

    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        className="reference-modal"
        centered
      >
        <form>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <Row>
                <Col md={9}>
                  {this.props.isUpdate
                    ? workUpdateTitle[lang]
                    : workAddTitle[lang]}
                </Col>
                <Col md={2}>
                  <CustomCheckbox
                    id="my0:isCurrent"
                    type="checkbox"
                    label={this.renderLabel(translatedProps, "isCurrent", lang)}
                    checked={isCurrent}
                    handleChange={this.handleCheckboxChange}
                  />
                </Col>
                <Col md={1} />
              </Row>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row style={{ alignItems: "flex-start" }}>
              <Col md={6} style={{ paddingRight: "25px" }}>
                <Row
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    display: "flex",
                    marginLeft: "0px"
                  }}
                >
                  <CustomInput
                    id="my0:startDate"
                    name="workHistory"
                    label={
                      this.renderLabel(translatedProps, "startDate", lang) +
                      " *"
                    }
                    type="date"
                    value={startDate}
                    handleChange={this.handleInputChange}
                  />
                </Row>
                <Row
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    display: "flex",
                    marginLeft: "0px",
                    marginTop: "10px"
                  }}
                >
                  <CustomInput
                    id="my0:endDate"
                    label={this.renderLabel(translatedProps, "endDate", lang)}
                    name="workHistory"
                    type="date"
                    value={endDate}
                    handleChange={this.handleInputChange}
                  />
                </Row>
                <Row
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    display: "flex",
                    marginLeft: "0px"
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <CustomInput
                      id="my0:orgName"
                      name="org"
                      label={
                        this.renderLabel(
                          translatedPropsOrg,
                          "orgName",
                          lang
                        ) + " *"
                      }
                      type="text"
                      value={orgName}
                      handleChange={this.handleInputChange}
                    />
                  </div>
                  <div style={{ width: "100%" }}>
                    <CustomInput
                      id="my0:orgWebsite"
                      name="org"
                      label={this.renderLabel(
                        translatedPropsOrg,
                        "orgWebsite",
                        lang
                      )}
                      type="text"
                      value={orgWebsite}
                      handleChange={this.handleInputChange}
                    />
                  </div>
                  <Row>
                    <Col sm={6}>
                      <CustomInput
                        id="my0:postalCode"
                        label={this.renderLabel(
                          translatedPropsAddr,
                          "postalCode",
                          lang
                        )}
                        name="address"
                        value={address["my0:postalCode"]}
                        handleChange={this.handleInputChange}
                      />
                    </Col>
                    <Col sm={6}>
                      <CustomInput
                        id="my0:city"
                        name="address"
                        label={this.renderLabel(
                          translatedPropsAddr,
                          "city",
                          lang
                        )}
                        value={this.findTranslatedValue(address["my0:city"], lang)}
                        handleChange={(e) => this.handleInputChange(e, lang)}
                      />
                    </Col>
                  </Row>
                  <Row
                    style={{
                      width: "100%",
                      justifyContent: "left",
                      marginLeft: "0px",
                      marginBottom: "8px",
                      marginTop: "5px"
                    }}
                  >
                    <label className="label-rw">
                      {this.renderLabel(translatedPropsAddr, "country", lang)}
                    </label>
                    <Combobox
                      name="my0:country"
                      placeholder={this.renderLabel(
                        translatedPropsAddr,
                        "country",
                        lang
                      )}
                      data={this.props.countries}
                      textField={lang}
                      valueField="@type"
                      value={address["my0:country"]}
                      caseSensitive={false}
                      minLength={3}
                      filter="contains"
                      onChange={value =>
                        this.handleSelectChange(value, "my0:country", "address")
                      }
                    />
                  </Row>
                  <Row
                    style={{
                      width: "100%",
                      justifyContent: "left",
                      marginLeft: "0px",
                      marginBottom: "8px"
                    }}
                  >
                    <label className="label-rw">
                      {this.renderLabel(
                        translatedPropsOrg,
                        "orgField",
                        lang
                      )}
                    </label>
                    <Combobox
                      name="my0:orgField"
                      placeholder={this.renderLabel(
                        translatedPropsOrg,
                        "orgField",
                        lang
                      )}
                      data={this.props.industries}
                      value={orgField}
                      textField={lang}
                      valueField="@type"
                      caseSensitive={false}
                      minLength={3}
                      filter="contains"
                      onChange={value =>
                        this.handleSelectChange(
                          value,
                          "my0:orgField",
                          "org"
                        )
                      }
                    />
                  </Row>
                  <div style={{ width: "100%" }}>
                    <CustomTextarea
                      id="my0:orgDescription"
                      name="org"
                      label={this.renderLabel(
                        translatedPropsOrg,
                        "orgDescription",
                        lang
                      )}
                      value={this.findTranslatedValue(orgDescription, lang)}
                      handleChange={(e) => this.handleInputChange(e, lang)}
                    />
                  </div>
                </Row>
              </Col>
              <Col md={6}>
                <CustomInput
                  id="my0:jobTitle"
                  name="workHistory"
                  label={
                    this.renderLabel(translatedProps, "jobTitle", lang) + " *"
                  }
                  type="text"
                  value={this.findTranslatedValue(jobTitle, lang)}
                  handleChange={(e) => this.handleInputChange(e, lang)}
                />
                <Row
                  style={{
                    width: "100%",
                    justifyContent: "left",
                    marginLeft: "0px",
                    marginBottom: "8px",
                    marginTop: "5px"
                  }}
                >
                  <label className="label-rw">
                    {this.renderLabel(translatedProps, "jobType", lang)}
                  </label>
                  <Combobox
                    name="my0:jobType"
                    placeholder={this.renderLabel(
                      translatedProps,
                      "jobType",
                      lang
                    )}
                    data={this.props.jobtypes}
                    textField={lang}
                    valueField="@type"
                    value={jobType}
                    caseSensitive={false}
                    minLength={3}
                    filter="contains"
                    onChange={value =>
                      this.handleSelectChange(
                        value,
                        "my0:jobType",
                        "workHistory"
                      )
                    }
                  />
                </Row>
                <Row
                  style={{
                    width: "100%",
                    justifyContent: "left",
                    marginLeft: "0px",
                    marginBottom: "8px"
                  }}
                >
                  <label className="label-rw">
                    {this.renderLabel(translatedProps, "careerLevel", lang)}
                  </label>
                  <Combobox
                    name="my0:careerLevel"
                    placeholder={this.renderLabel(
                      translatedProps,
                      "careerLevel",
                      lang
                    )}
                    data={this.props.careerlevels}
                    textField={lang}
                    valueField="@type"
                    value={careerLevel}
                    caseSensitive={false}
                    minLength={3}
                    filter="contains"
                    onChange={value =>
                      this.handleSelectChange(
                        value,
                        "my0:careerLevel",
                        "workHistory"
                      )
                    }
                  />
                </Row>
                <CustomTextarea
                  id="my0:jobDescription"
                  name="workHistory"
                  label={this.renderLabel(
                    translatedProps,
                    "jobDescription",
                    lang
                  )}
                  value={this.findTranslatedValue(jobDescription, lang)}
                  handleChange={(e) => this.handleInputChange(e, lang)}
                />
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Combobox onChange={changeLanguage} value={lang} defaultValue={"en"} containerClassName="languagebox" data={languages} itemComponent={ListItem} />
            {this.handleRenderingSubmitButton(lang)}
            <Button className="btn-reset" onClick={this.clearForm}>
              {resetLabel[lang]}
            </Button>
            <Button variant="danger" onClick={onHide}>
              {cancelLabel[lang]}
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}

const mapstateToProps = (state, ownProps) => {
  return {
    language: state.utility.language,
    industries: retrieveBaseProperties(state.utility.industries),
    translatedPropsOrg: retrieveMainProperties(
      state.utility["my0:Organization"]
    ),
    translatedPropsAddr: retrieveMainProperties(state.utility["my0:Address"]),
    translatedProps: retrieveMainProperties(state.utility["my0:WorkHistory"]),
    initialValues: state.cv["my0:hasWorkHistory"][ownProps.id],
    countries: retrieveCountryValues(state.utility.countryValues),
    jobtypes: retrieveBaseProperties(state.utility.jobTypeValues),
    careerlevels: retrieveBaseProperties(state.utility.careerLevelValues),
    companysizes: retrieveBaseProperties(state.utility.companySizeValues)
  };
};

export default connect(
  mapstateToProps,
  {
    createWorkHistory,
    updateWorkHistory,
    fetchCVJobTypes,
    fetchCVCareerLevels,
    fetchCountries,
    fetchCompanySizes,
    fetchAllIndustryTypess,
    fetchMainPropertiess,
    updateCVLastUpdate,
    updateLanguage
  }
)(WorkHistoryModal);
