import React, { useState } from "react";
import { TbMathSymbols } from "react-icons/tb";
import { LuMapPin } from "react-icons/lu";
import { TbMessageLanguage } from "react-icons/tb";
import { LuScrollText } from "react-icons/lu";
import { TiDocumentText } from "react-icons/ti";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdCloudUpload } from "react-icons/md";
import '../styles/ClaimForm.css';
const ClaimForm = () => {
  const [contractValue, setContractValue] = useState("");
  const [claimValue, setClaimValue] = useState("");
  const [place, setPlace] = useState("");
  const [language, setLanguage] = useState("");
  const [proceedingsPlaceAgreement, setProceedingsPlaceAgreement] = useState(false);
  const [languageAgreement, setLanguageAgreement] = useState(false);

  const [uploadedFiles, setUploadedFiles] = useState({
    contract: null,
    arbitration: null,
    statement: null,
    additionalDocs: [null],
  });
  const handleFileUpload = (e, type, index = null) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size <= 2 * 1024 * 1024 && file.type === "application/pdf") {
        setUploadedFiles((prevFiles) => {
          if (type === "additionalDocs") {
            const updatedDocs = [...prevFiles.additionalDocs];
            updatedDocs[index] = file;
            return { ...prevFiles, additionalDocs: updatedDocs };
          } else {
            return { ...prevFiles, [type]: file };
          }
        });
      } else {
        alert("Please upload a valid PDF file under 2MB.");
      }
    }
  };

  const addAdditionalDoc = () => {
    setUploadedFiles((prevFiles) => {
      if (prevFiles.additionalDocs.length < 2) {
        return {
          ...prevFiles,
          additionalDocs: [...prevFiles.additionalDocs, null],
        };
      }
      return prevFiles; // No change if max documents already added
    });
  };


  return (
    <div className="claim-form">

      <div className="progress-bar-container">
        <div className="step-container">
          <div className="step completed" id="step-completed">
            <div className="step-text"><span className="step-text-no">01</span> Preliminary</div>
            <div className="circle">
              <span className="checkmark">✔</span>
            </div>
          </div>
          <div className="line completed"></div>
        </div>


        <div className="step-container">
          <div className="step completed">
            <div className="step-text"><span className="step-text-no">02</span> Your Details</div>
            <div className="circle">
              <span className="checkmark">✔</span>
            </div>
          </div>
          <div className="line completed"></div>
        </div>
        <div className="step-container">
          <div className="step completed">
            <div className="step-text"><span className="step-text-no">03</span> KYC</div>
            <div className="circle">
              <span className="checkmark">✔</span>
            </div>
          </div>
          <div className="line dotted"></div>
        </div>

        <div className="step-container">
          <div className="step active">
            <div className="step-text"><span className="step-text-no">04</span> Parties</div>
            <div className="circle"></div>
            <div className="step-subtitle">(Approx 5 Min)</div>
          </div>
          <div className="line"></div>
        </div>

        <div className="step-container">
          <div className="step">
            <div className="step-text-nos"><span className="step-text-no">05</span> Claim</div>
            <div className="circle"></div>
            <div className="step-subtitle">(Approx 5 Min)</div>
          </div>
          <div className="line"></div>
        </div>

        <div className="step-container">
          <div className="step">
            <div className="step-text-nos"><span className="step-text-no">06</span> Review</div>
            <div className="circle"></div>
            <div className="step-subtitle">(Approx 5 Min)</div>
          </div>
          <div className="line"></div>
        </div>
        <div className="step-container">
          <div className="step">
            <div className="step-text-nos"><span className="step-text-no">07</span>Payment</div>
            <div className="circle"></div>
            <div className="step-subtitle">(Approx 5 Min)</div>
          </div>
        </div>
      </div>
      <div className="div1">
        <h2>File your Claim. <span style={{ color: "#d3d3d3", fontSize: 14 }}>(Approx 5 Minutes)</span></h2>

      </div>

      {/* Form Grid */}
      <div className="form-grid">
        {/* Claim Value Section */}

        <div className="form-section">
          <div className="form-icon">
            <TbMathSymbols className="form-icon" />
          </div>
          <div className="form-content">
            <div className="form-section-header">
              <h3>Claim Value</h3>
            </div>

            <div className="input-group">
              <label>Contract Value</label>
              <input
                type="number"
                className="currency-input"
                value={contractValue}
                onChange={(e) => setContractValue(e.target.value)}
                placeholder="10,000"
              />
              <select className="currency-dropdown">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="INR">INR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            <div className="input-group">
              <label>Claim Value</label>
              <input
                type="number"
                className="currency-input"
                value={claimValue}
                onChange={(e) => setClaimValue(e.target.value)}
                placeholder="15,000"
              />
              <select className="currency-dropdown">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="INR">INR</option>
                <option value="GBP">GBP</option>
              </select>
              <br />
              <small style={{}}>150% of Contract Value</small>
            </div>
          </div>
        </div>

        {/* Place Section */}
        <div className="form-section">
          <div className="form-icon">
            <LuMapPin className="form-icon" />
          </div>
          <div className="form-content">
            <div className="form-header">
              <h3>Place</h3></div>
            <div className="radio-group">
              <input
                type="text"
                className="place-input"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="Select the Place for proceedings"
              />

              <p>Is the place for the proceedings the one mentioned in the agreement?</p>
              <label>
                <input
                  type="radio"
                  className="radio-button"
                  checked={proceedingsPlaceAgreement}
                  onChange={() => setProceedingsPlaceAgreement(true)}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  className="radio-button"
                  checked={!proceedingsPlaceAgreement}
                  onChange={() => setProceedingsPlaceAgreement(false)}
                />
                No
              </label>
            </div>
          </div>
        </div>

        {/* Language Section */}
        <div className="form-section">
          <div className="form-icon">
            <TbMessageLanguage className="form-icon" />
          </div>
          <div className="form-content">
            <h3>Language</h3>
            <div className="radio-group">
              <input
                type="text"
                className="place-input"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                placeholder="Select the language for proceedings"
              />

              <p>Is the language for the proceedings the one mentioned in the agreement?</p>
              <label>
                <input
                  type="radio"
                  className="radio-button"
                  checked={languageAgreement}
                  onChange={() => setLanguageAgreement(true)}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  className="radio-button"
                  checked={!languageAgreement}
                  onChange={() => setLanguageAgreement(false)}
                />
                No
              </label>
            </div>
          </div>
        </div>

        {/* Statement Section */}
        <div className="form-section">
          <div className="form-icon">
            <LuScrollText className="form-icon" />
          </div>
          <div className="form-content">
            <h3>Statement</h3>
            <div className="statement-container">
              <div className="statement-box">
                <p>Write your Statement Here</p>
                <span>or</span>
                <label htmlFor="statement-upload" className="upload-btn">
                  <span className="upload-icon">
                    <MdCloudUpload className="cloud-icon" />
                  </span>{" "}
                  Upload a PDF
                </label>
                <input
                  id="statement-upload"
                  type="file"
                  accept=".pdf"
                  style={{ display: "none" }}
                  onChange={(e) => handleFileUpload(e, "statement")}
                />
                {uploadedFiles.statement && (
                  <p className="file-info">
                    Uploaded: {uploadedFiles.statement.name}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Agreement under Disputes Section */}
        <div className="form-section">
          <div className="form-icon">
            <TiDocumentText className="form-icon" />
          </div>
          <div className="form-content">
            <h3>Agreement under Disputes</h3>
            <div className="upload-cards-container">
              <div className="upload-card">
                <label htmlFor="contract-upload">
                  <MdCloudUpload className="form-icon" />
                  <p className="upload-title">Upload the Contract</p>
                  <p className="upload-subtitle">Max 2MB, PDF</p>
                </label>
                <input
                  id="contract-upload"
                  type="file"
                  accept=".pdf"
                  style={{ display: "none" }}
                  onChange={(e) => handleFileUpload(e, "contract")}
                />
                {uploadedFiles.contract && (
                  <p className="file-info">
                    Uploaded: {uploadedFiles.contract.name}
                  </p>
                )}
              </div>
              <div className="upload-card">
                <label htmlFor="arbitration-upload">
                  <MdCloudUpload className="form-icon" />
                  <p className="upload-title">Arbitration Agreement</p>
                  <p className="upload-subtitle">Max 2MB, PDF</p>
                </label>
                <input
                  id="arbitration-upload"
                  type="file"
                  accept=".pdf"
                  style={{ display: "none" }}
                  onChange={(e) => handleFileUpload(e, "arbitration")}
                />
                {uploadedFiles.arbitration && (
                  <p className="file-info">
                    Uploaded: {uploadedFiles.arbitration.name}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Additional Documentation Section */}
        <div className="form-section">
          <div className="form-icon">
            <HiOutlineClipboardDocumentList className="form-icon" />
          </div>
          <div className="form-content">
            <h3>Additional Documentation</h3>
            <div className="upload-cards-container">
              {uploadedFiles.additionalDocs.map((doc, index) => (
                <div className="upload-card-2" key={index}>
                  <label htmlFor={`additional-doc-${index}`}>
                    <MdCloudUpload className="form-icon" />
                    <p className="upload-title">Upload Document {index + 1}</p>
                    <p className="upload-subtitle">Max 2MB, PDF</p>
                  </label>
                  <input
                    id={`additional-doc-${index}`}
                    type="file"
                    accept=".pdf"
                    style={{ display: "none" }}
                    onChange={(e) => handleFileUpload(e, "additionalDocs", index)}
                  />
                  {doc && (
                    <p className="file-info">Uploaded: {doc.name}</p>
                  )}
                </div>
              ))}
              <button className="add-more" onClick={addAdditionalDoc}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ClaimForm;
