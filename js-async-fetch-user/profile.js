const container = document.querySelector('#user-data')

// Create Profile
function createPersonalInfo(data) {
  const personalInfo = document.createElement('div')
  personalInfo.innerHTML = `
    <h2>Name: ${data.name || 'Unbekannt'}</h2>
    <p>Id: ${data.id}</p>
    <p>Username: ${data.username}</p>
    <p>Website: ${data.website}</p>
    <p>Email: ${data.email}</p>
    <p>Phone: ${data.phone}</p>
  `
  container.appendChild(personalInfo)
}

function createCompanyInfo(company) {
  const companyInfo = document.createElement('div')
  companyInfo.innerHTML = `
    <h2>Company: ${company?.name || 'Keine Angabe'}</h2>
    <p>Catch Phrase: ${company?.catchPhrase || '-'}</p>
    <p>BS: ${company?.bs || '-'}</p>
  `
  container.appendChild(companyInfo)
}

function createAddressInfo(address) {
  const addressInfo = document.createElement('div')
  addressInfo.innerHTML = `
    <h2>Address:</h2>
    <p>Street: ${address.street}</p>
    <p>Suite: ${address.suite}</p>
    <p>City: ${address.city}</p>
    <p>Zipcode: ${address.zipcode}</p>
    <p>Geo: ${address?.geo?.lat}, ${address?.geo?.lng}</p>
  `
  container.appendChild(addressInfo)
}

// Render Profile
export function renderProfile(data) {
  createPersonalInfo(data)
  createCompanyInfo(data.company)
  createAddressInfo(data.address)
}

// Error Message
export function renderError(message) {
  container.innerHTML = `<p style="color: red;">${message}</p>`
}
