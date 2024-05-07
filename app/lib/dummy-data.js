/**
 * Returns all orgs to be sorted alphabetically and displayed on /organizations
 * @returns {Array} Array of orgs
 */
export async function fetchAllOrgs() {
  setTimeout(() => {
    console.log('all orgs fetched');
  }, 1000);
  return [
    {
      id: 1,
      name: 'Branford Rotary Club',
      yearFounded: 1928,
      category: 'service',
      contactInfo: {
        firstName: 'Ellen',
        lastName: 'Carucci',
        email: 'example@branfordrotary.org',
        phone: null,
        website: 'branfordrotary.org',
        facebook: 'Branford Rotary Club',
        instagram: 'branfordrotary',
        linkedIn: null,
      },
      about:
        'The Branford Rotary Club is a group of volunteers of all ages and from all walks of life who give their time and effort to improve life in Branford, across the shoreline, and around the world. The Club raises more than $100,000 annually to benefit food pantries and veterans, families in need, seniors, students, and more through the annual BRAFFLE Restaurant Raffle, the Branford Festival Food & Book Tent, the Thanksgiving Road Race, the annual Golf Classic, and our generous local businesses that serve as Rotary Partners. Rotary is an active, hands-on club, taking part in numerous community projects.',
      logo: '(logo)',
    },
    {
      id: 2,
      name: 'Branford Microfund',
      yearFounded: 2019,
      category: 'finances',
      contactInfo: {
        firstName: 'Mina',
        lastName: 'West',
        email: 'info@branfordmicrofund.org',
        phone: null,
        website: 'branfordmicrofund.org',
        facebook: 'Branford Microfund',
        instagram: 'branfordmicrofund',
        linkedIn: null,
      },
      about:
        'The Branford Microfund is a non-profit organization offering interest free loans to individuals and families from Branford who encounter unexpected financial obstacles, but cannot afford or obtain a commercial loan. Our philosophy is to "pay it forward" – when a loan recipient repays a loan, the money becomes available to help another person in need. Potential applicants must be eighteen years of age and demonstrate the ability to repay their loan. Our loan limit is $3,000 and all loans must be repaid within 30 months via a signed promissory note. Repayment of loans allows the Fund to recycle its donations and help other community members. The loan can be applied for quickly on line as well as in person. Our loan committee invests significant time and effort into assisting qualified applicants move forward.',
      logo: '(logo)',
    },
  ];
}

/**
 * Returns specific org whose profile will be displayed on /organizations/[id]
 * @param {num} orgId
 * @returns {Object} Organization's profile info
 */
export async function fetchOrgProfileById(orgId) {
  setTimeout(() => {
    console.log('profile fetched for orgId:', orgId);
  }, 1000);
  return {
    orgId,
    name: 'Branford Microfund',
    yearFounded: 2019,
    category: 'finances',
    contactInfo: {
      firstName: 'Mina',
      lastName: 'West',
      email: 'info@branfordmicrofund.org',
      phone: null,
      website: 'branfordmicrofund.org',
      facebook: 'Branford Microfund',
      instagram: ' branfordmicrofund',
      linkedIn: null,
    },
    about:
      'The Branford Microfund is a non-profit organization offering interest free loans to individuals and families from Branford who encounter unexpected financial obstacles, but cannot afford or obtain a commercial loan. Our philosophy is to "pay it forward" – when a loan recipient repays a loan, the money becomes available to help another person in need. Potential applicants must be eighteen years of age and demonstrate the ability to repay their loan. Our loan limit is $3,000 and all loans must be repaid within 30 months via a signed promissory note. Repayment of loans allows the Fund to recycle its donations and help other community members. The loan can be applied for quickly on line as well as in person. Our loan committee invests significant time and effort into assisting qualified applicants move forward.',
    logo: '(logo)',
  };
}

/**
 * Returns an org's open roles to be displayed in its profile on /organizations/[id]
 * @param {num} orgId
 * @returns {Array} All roles posted by that org
 */
export async function fetchRolesByOrg(orgId) {
  setTimeout(() => {
    console.log('roles fetched for orgId:', orgId);
  }, 1000);
  return [
    {
      orgId,
      roleId: 1,
      categories: 'finances',
      date_posted: '(formatted date)',
      location: 'remote',
      title: 'Fundraising',
      description:
        'We have a pressing need for volunteers with development and fundraising expertise. While we have adequate funding at the moment, we could greatly benefit from help in development for the future of BMF to expand and develop.',
    },
    {
      orgId,
      roleId: 2,
      categories: 'finances, tech',
      date_posted: '(formatted date)',
      location: 'remote',
      title: 'Social Media / Technology',
      description:
        'We need immediate help with managing our social media and website. Anyone with technology skills, or just a familiarity with maintaining an FB/Instagram account would be a great asset here.',
    },
    {
      orgId,
      roleId: 3,
      categories: 'finances, service',
      date_posted: '(formatted date)',
      location: 'remote',
      title: 'Governance',
      description:
        'We could immediately benefit from individuals with a background in non-profit boards, maintaining the processes that facilitate their smooth running, with attention to short- and long-term perspectives.',
    },
    {
      orgId,
      roleId: 4,
      categories: 'finances',
      date_posted: '(formatted date)',
      location: 'remote',
      title: 'Loan Review',
      description:
        'We could always use extra members who have a lending background who are willing to commit to helping this essential committee.',
    },
  ];
}

/**
 * Returns all events to be displayed on /calendar
 * @returns {Array} Array of events
 */
export async function fetchAllEvents() {
  setTimeout(() => {
    console.log('all events fetched');
  }, 1000);
  return [
    {
      orgId: 1,
      eventId: 1,
      categories: 'environment',
      date_posted: '(formatted date/time)',
      startDateTime: '(formatted date/time)',
      endDateTime: '(formatted date/time)',
      location: '123 Example Rd., Branford CT 06405',
      title: 'Tree Planting',
      description: 'Our town needs more trees. Help us plant them.',
    },
    {
      orgId: 1,
      eventId: 2,
      categories: 'animals',
      date_posted: '(formatted date/time)',
      startDateTime: '(formatted date/time)',
      endDateTime: '(formatted date/time)',
      location: '123 Example Rd., Branford CT 06405',
      title: 'Adoption Drive',
      description: 'Lots of puppies need homes.',
    },
    {
      orgId: 2,
      eventId: 3,
      categories: 'food',
      date_posted: '(formatted date/time)',
      startDateTime: '(formatted date/time)',
      endDateTime: '(formatted date/time)',
      location: '123 Example Rd., Branford CT 06405',
      title: 'Serve Food',
      description: 'Serve food at the soup kitchen.',
    },
  ];
}

/**
 * Returns an org's upcoming events to be displayed in its profile on /organizations/[id]
 * @param {num} orgId
 * @returns {Array} Array of upcoming events posted by that org
 */
export async function fetchEventsByOrg(orgId) {
  setTimeout(() => {
    console.log('events fetched for orgId:', orgId);
  }, 1000);
  return [
    {
      orgId,
      eventId: 1,
      categories: 'environment',
      date_posted: '(formatted date/time)',
      startDateTime: '(formatted date/time)',
      endDateTime: '(formatted date/time)',
      location: '123 Example Rd., Branford CT 06405',
      title: 'Tree Planting',
      description: 'Our town needs more trees. Help us plant them.',
    },
    {
      orgId,
      eventId: 2,
      categories: 'animals',
      date_posted: '(formatted date/time)',
      startDateTime: '(formatted date/time)',
      endDateTime: '(formatted date/time)',
      location: '123 Example Rd., Branford CT 06405',
      title: 'Adoption Drive',
      description: 'Lots of puppies need homes.',
    },
  ];
}

/* --- WIP --- */
// export async function fetchRolesByKeyword(query) {}
// export async function fetchEventsByKeyword(query) {}
// export async function fetchOrgsByKeyword(query) {}
// export async function fetchOrgsByCategory(query) {}
