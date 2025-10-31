export const treatments = [
  { id: 1, title: 'Ear Infection' },
  { id: 2, title: 'Ear Injury' },
  { id: 3, title: 'Hearing Loss' },
  { id: 4, title: 'Tinnitus (Ringing in the Ears)' },
  { id: 5, title: 'Dizziness & Vertigo' },
  { id: 6, title: 'Sinusitis (Sinus Infection)' },
  { id: 7, title: 'Allergy Rhinitis' },
  { id: 8, title: 'Nasal Fractures' },
  { id: 9, title: 'Nose Bleeding' },
  { id: 10, title: 'Nasal Polyps' },
  { id: 11, title: 'Tonsillitis' },
  { id: 12, title: 'Throat Cancer' },
  { id: 13, title: 'Voice Disorders' },
  { id: 14, title: 'Swallowing Disorders' },
  { id: 15, title: 'Sore Throat (Pharyngitis)' },
  { id: 16, title: 'Head and Neck Cancer' },
  { id: 17, title: 'Thyroid Disorders' },
];

export const surgeryList = [
  {
    id: 1,
    url: '#',
    src: '/img/surgery/sinus-surgery-icon.webp',
    title: 'Sinus Surgery',
    description: 'Advanced procedure for chronic sinusitis and nasal issues.',
  },
  {
    id: 2,
    url: '#',
    src: '/img/surgery/mastoid-surgery-icon.webp',
    title: 'Mastoid Surgery',
    description: 'Treatment of middle ear infections and cholesteatoma.',
  },
  {
    id: 3,
    url: '#',
    src: '/img/surgery/thyroid-surgery-icon.webp',
    title: 'Thyroid Surgery',
    description: 'Surgical removal or biopsy of thyroid gland.',
  },
  {
    id: 4,
    url: '#',
    src: '/img/surgery/tonsillectomy-surgery-icon.webp',
    title: 'Tonsillectomy Surgery',
    description: 'Removal of infected or enlarged tonsils.',
  },
  {
    id: 5,
    url: '#',
    src: '/img/surgery/microlaryngeal-surgery-icon.webp',
    title: 'Microlaryngeal Surgery',
    description: 'Microscopic surgery on vocal cords and larynx.',
  },
  {
    id: 6,
    url: '#',
    src: '/img/surgery/skull-surgery-icon.webp',
    title: 'Skull Base Surgery',
    description: 'Complex procedure for tumors near the skull base.',
  },
];

export const aboutUs = [
  { id: 1, title: 'Dr. Jack Smith', url: '#' },
  { id: 2, title: 'Gallery', url: '#' },
];

export const aboutUsFooter = [
  { id: 1, title: 'Home' },
  { id: 2, title: 'About Us' },
  { id: 3, title: 'Surgeries' },
  { id: 4, title: 'Treatments' },
  { id: 5, title: 'Dr Jack Smith' },
  { id: 6, title: 'Gallery' },
  { id: 7, title: 'Contact Us' },
  { id: 8, title: 'Book Appointment' },
  { id: 9, title: 'Privacy Policy' },
];

export const treatmentsFooter = [
  { id: 1, title: 'Hearing Loss' },
  { id: 2, title: 'Ear Infection' },
  { id: 3, title: 'Dizziness & Vertigo' },
  { id: 4, title: 'Allergy Rhinitis' },
  { id: 5, title: 'Swallowing Disorders' },
];

export const surgery = [
  {
    id: 1,
    title: 'Ear Surgery',
    children: [
      { id: '1-1', title: 'Tympanoplasty Surgery' },
      { id: '1-2', title: 'Mastoid Surgery' },
      { id: '1-3', title: 'Stapes Surgery' },
      { id: '1-4', title: 'Myringotomy Surgery' },
    ],
  },
  {
    id: 2,
    title: 'Nose Surgery',
    children: [
      { id: '2-1', title: 'Adenoidectomy Surgery' },
      { id: '2-2', title: 'Septoplasty Surgery' },
      { id: '2-3', title: 'Sinus Surgery' },
      { id: '2-4', title: 'Skull Base Surgery' },
      { id: '2-5', title: 'Pituitary Surgery' },
      { id: '2-6', title: 'Endonasal Dacryocystorhinostomy Surgery' },
    ],
  },
  {
    id: 3,
    title: 'Throat Surgery',
    children: [
      { id: '3-1', title: 'Tonsillectomy Surgery' },
      { id: '3-2', title: 'Thyroid Surgery' },
      { id: '3-3', title: 'Parotid Surgery' },
      { id: '3-4', title: 'Microlaryngeal Surgery' },
      { id: '3-5', title: 'Bronchoscopy Surgery' },
      { id: '3-6', title: 'Direct Laryngoscopy & Biopsy Surgery' },
    ],
  },
  {
    id: 4,
    title: 'Head & Neck Surgery',
    children: [], // keeps structure consistent
  },
];
