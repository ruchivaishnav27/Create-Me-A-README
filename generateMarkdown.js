// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = ''
   } else {
    yourLicense = "N/A"
  }
  return yourLicense;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license !== 'no license') {
      return 'Choose a license'
     } else {
        return '';
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'no license') {
    return `[License]` 
    {renderLicenseLink(license)}
      } else {
        return '';
    };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(license)}
  ${data.what}
  ${data.why}
  ${data.how}
  ${data.installation}
  ${data.usage}
  ${renderLicenseSection(license)}
  ${data.test}`;
};

module.exports = generateMarkdown;
