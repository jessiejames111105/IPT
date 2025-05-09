function updateFormFields() {
    const certType = document.getElementById("certificateType").value;
    const dynamicFields = document.getElementById("dynamicFields");
    let html = "";
  
    switch (certType) {
      case "Residency":
        html = `
          <div class="form-field">
            <label>Years of Residency:</label>
            <input type="text" id="years" value="10" oninput="updatePreview()">
          </div>
          <div class="form-field">
            <label>Purpose:</label>
            <input type="text" id="purpose" value="Employment Requirement" oninput="updatePreview()">
          </div>`;
        break;
      case "Indigency":
        html = `
          <div class="form-field">
            <label>Reason for Indigency:</label>
            <input type="text" id="reason" value="Medical Assistance" oninput="updatePreview()">
          </div>
          <div class="form-field">
            <label>Supporting Agency:</label>
            <input type="text" id="agency" value="DSWD" oninput="updatePreview()">
          </div>`;
        break;
      case "OJT":
        html = `
          <div class="form-field">
            <label>School Name:</label>
            <input type="text" id="school" value="XYZ College" oninput="updatePreview()">
          </div>
          <div class="form-field">
            <label>Company Assigned:</label>
            <input type="text" id="company" value="ABC Corporation" oninput="updatePreview()">
          </div>`;
        break;
      case "BarangayClearance":
        html = `
          <div class="form-field">
            <label>Purpose of Clearance:</label>
            <input type="text" id="clearancePurpose" value="Local Employment" oninput="updatePreview()">
          </div>`;
        break;
      case "SoloParent":
        html = `
          <div class="form-field">
            <label>Number of Children:</label>
            <input type="number" id="childrenCount" value="2" min="1" max="50" oninput="updatePreview()">
          </div>
          <div class="form-field">
            <label>Reason:</label>
            <input type="text" id="soloReason" value="Support Grant" oninput="updatePreview()">
          </div>`;
        break;
      case "GoodMoral":
        html = `
          <div class="form-field">
            <label>Institution Requiring Certificate:</label>
            <input type="text" id="institution" value="XYZ University" oninput="updatePreview()">
          </div>`;
        break;
      default:
        html = "";
    }
  
    dynamicFields.innerHTML = html;
  }
  
  function updatePreview() {
    const certType = document.getElementById("certificateType").value;
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
  
    // ✅ Update certificate title
    const certTitle = certType
      .replace(/([A-Z])/g, ' $1') // Add space before capital letters
      .trim()                     // Remove any leading/trailing space
      .toUpperCase();             // Make it uppercase
  
    document.getElementById("certTitle").innerText = `${certTitle} CERTIFICATE`;
  
    let content = "TO WHOM IT MAY CONCERN:<br><br>";
  
    switch (certType) {
      case "Residency":
        const years = document.getElementById("years")?.value || "";
        const purpose = document.getElementById("purpose")?.value || "";
        content += `${name}, a resident of ${address}, has resided in the barangay for ${years} years. This certification is issued for the purpose of ${purpose}.`;
        break;
      case "Indigency":
        const reason = document.getElementById("reason")?.value || "";
        const agency = document.getElementById("agency")?.value || "";
        content += `${name}, a resident of ${address}, is classified as indigent. This certificate is issued for availing ${reason} from ${agency}.`;
        break;
      case "OJT":
        const school = document.getElementById("school")?.value || "";
        const company = document.getElementById("company")?.value || "";
        content += `${name}, of ${school}, is certified to undergo On-the-Job Training at ${company}.`;
        break;
      case "BarangayClearance":
        const clearancePurpose = document.getElementById("clearancePurpose")?.value || "";
        content += `This is to certify that ${name}, of ${address}, has been cleared of any derogatory record and is granted this clearance for the purpose of ${clearancePurpose}.`;
        break;
      case "SoloParent":
        const childrenCount = document.getElementById("childrenCount")?.value || "";
        const soloReason = document.getElementById("soloReason")?.value || "";
        content += `${name}, residing at ${address}, is recognized as a solo parent with ${childrenCount} child(ren). This certificate is issued for ${soloReason}.`;
        break;
      case "GoodMoral":
        const institution = document.getElementById("institution")?.value || "";
        content += `${name}, of ${address}, has maintained good moral character and this certificate is issued upon the request of ${institution}.`;
        break;
      default:
        content += `${name}, a resident of ${address}, is issued this certificate.`;
    }
  
    document.getElementById("certificateContent").innerHTML = content;
  }
  
  function openModal() {
    const modal = document.getElementById("certificateModal");
    const modalPreview = document.getElementById("modalCertPreview");
    modal.style.display = "block";
    modalPreview.innerHTML = document.getElementById("certPreview").innerHTML;
  }
  
  function closeModal() {
    const modal = document.getElementById("certificateModal");
    modal.style.display = "none";
  }
  
  // Initialize with default certificate type
  updateFormFields();
  updatePreview();
  