// // src/components/Contact.js
// import React, { useState } from 'react';
// import Swal from 'sweetalert2';

// function Contact() {
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');
//   const [contacts, setContacts] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newContact = { name, message };
//     setContacts([...contacts, newContact]);
//     setName('');
//     setMessage('');
//     Swal.fire('Thank you!', 'Your message has been submitted', 'success');
//   };

//   return (
//     <div id="contact" className="text-center">
//       <h2>Contact</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         />
//         <button type="submit" className="btn btn-primary">Send</button>
//       </form>

//       <h3>Messages</h3>
//       <ul>
//         {contacts.map((contact, index) => (
//           <li key={index}>{contact.name}: {contact.message}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Contact;


// src/components/Contact.js




// import React, { useState } from 'react';
// import Swal from 'sweetalert2';
// import './Contact.css';

// function Contact() {
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');
//   const [contacts, setContacts] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newContact = { name, message };
//     setContacts([...contacts, newContact]);
//     setName('');
//     setMessage('');
//     Swal.fire('Thank you!', 'Your message has been submitted', 'success');
//   };

//   return (
//     <div id="contact" className="contact-section text-center">
//       <h2>Contact</h2>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         />
//         <button type="submit" className="btn btn-primary">Send</button>
//       </form>
//     </div>
    
//   )
  
// }




// export default Contact;



// import React, { useState } from 'react';
// import Swal from 'sweetalert2';
// import './Contact.css';

// function Contact() {
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');
//   const [contacts, setContacts] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name && message) {
//       const newContact = { name, message };
//       setContacts([...contacts, newContact]);
//       setName('');
//       setMessage('');
//       Swal.fire('Thank you!', 'Your message has been submitted', 'success');
//     } else {
//       Swal.fire('Oops!', 'Please fill in both fields', 'error');
//     }
//   };

//   return (
//     <div id="contact" className="contact-section">
//       <h2>Contact</h2>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         />
//         <button type="submit" className="btn btn-primary">Send</button>
//       </form>

//       {/* WhatsApp Button */}
//       <div className="whatsapp-container">
//         <a
//           href="https://wa.me/6281358983847"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="whatsapp-link"
//         >
//           <i className="fab fa-whatsapp whatsapp-icon"></i> Chat with me on WhatsApp
//         </a>
//       </div>

//       {/* Display submitted messages (Optional) */}
//       <div className="submitted-contacts">
//         <h3>Messages</h3>
//         <ul>
//           {contacts.map((contact, index) => (
//             <li key={index}>
//               <strong>{contact.name}</strong>: {contact.message}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Contact;



// import React, { useState } from 'react';
// import Swal from 'sweetalert2';
// import './Contact.css';

// function Contact() {
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');
//   const [contacts, setContacts] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name && message) {
//       const newContact = { name, message };
//       setContacts([newContact, ...contacts]); // Menambahkan kontak baru ke atas daftar
//       setName('');
//       setMessage('');
//       Swal.fire('Thank you!', 'Your message has been submitted', 'success');
//     } else {
//       Swal.fire('Oops!', 'Please fill in both fields', 'error');
//     }
//   };

//   return (
//     <div id="contact" className="contact-section">
//       <h2>Contact</h2>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         />
//         <button type="submit" className="btn btn-primary">Send</button>
//       </form>

//       {/* Display the messages entered */}
//       <div className="submitted-contacts">
//         {contacts.length > 0 && (
//           <div className="contact-messages">
//             <h3>Messages Sent:</h3>
//             <ul>
//               {contacts.map((contact, index) => (
//                 <li key={index}>
//                   <strong>{contact.name}</strong>: {contact.message}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* WhatsApp Button */}
//       <div className="whatsapp-container">
//         <a
//           href="https://wa.me/6281358983847"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="whatsapp-link"
//         >
//           <i className="fab fa-whatsapp whatsapp-icon"></i> Chat with me on WhatsApp
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Contact;


// import React, { useState } from 'react';
// import Swal from 'sweetalert2';
// import './Contact.css';

// function Contact() {
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');
//   const [contacts, setContacts] = useState([]);

//   // Fungsi untuk menghapus pesan
//   const handleDelete = (index) => {
//     const updatedContacts = contacts.filter((contact, i) => i !== index);
//     setContacts(updatedContacts);
//     Swal.fire('Deleted!', 'Your message has been deleted.', 'success');
//   };

//   // Fungsi untuk menangani pengiriman form
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name && message) {
//       const newContact = { name, message };
//       setContacts([newContact, ...contacts]); // Menambahkan pesan baru ke atas daftar
//       setName('');
//       setMessage('');
//       Swal.fire('Thank you!', 'Your message has been submitted', 'success');
//     } else {
//       Swal.fire('Oops!', 'Please fill in both fields', 'error');
//     }
//   };

//   return (
//     <div id="contact" className="contact-section">
//       <h2>Contact</h2>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         />
//         <button type="submit" className="btn btn-primary">Send</button>
//       </form>

//       {/* Display the messages entered */}
//       <div className="submitted-contacts">
//         {contacts.length > 0 && (
//           <div className="contact-messages">
//             <h3>Messages Sent:</h3>
//             <ul>
//               {contacts.map((contact, index) => (
//                 <li key={index}>
//                   <strong>{contact.name}</strong>: {contact.message}
//                   {/* Tombol hapus */}
//                   <button
//                     onClick={() => handleDelete(index)}
//                     className="delete-btn"
//                   >
//                     <i className="fas fa-trash"></i>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* WhatsApp Button */}
//       <div className="whatsapp-container">
//         <a
//           href="https://wa.me/6281358983847"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="whatsapp-link"
//         >
//           <i className="fab fa-whatsapp whatsapp-icon"></i> Chat with me on WhatsApp
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Contact;

// import React, { useState } from 'react';
// import Swal from 'sweetalert2';
// import './Contact.css';

// function Contact() {
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');
//   const [contacts, setContacts] = useState([]);

//   // // Fungsi untuk menghapus pesan
//   // const handleDelete = (index) => {
//   //   // Filter kontak untuk menghapus pesan yang sesuai dengan index yang dipilih
//   //   const updatedContacts = contacts.filter((contact, i) => i !== index);
//   //   setContacts(updatedContacts); // Update state dengan data baru
//   //   Swal.fire('Deleted!', 'Your message has been deleted.', 'success');
//   // };

//   const handleDelete = (index) => {
//     console.log("Deleting item at index:", index); // Debug log
//     const updatedContacts = contacts.filter((contact, i) => i !== index);
//     setContacts(updatedContacts);
//     Swal.fire('Deleted!', 'Your message has been deleted.', 'success');
//   };
  

//   // Fungsi untuk menangani pengiriman form
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name && message) {
//       const newContact = { name, message };
//       setContacts([newContact, ...contacts]); // Menambahkan pesan baru ke atas daftar
//       setName('');
//       setMessage('');
//       Swal.fire('Thank you!', 'Your message has been submitted', 'success');
//     } else {
//       Swal.fire('Oops!', 'Please fill in both fields', 'error');
//     }
//   };

//   return (
//     <div id="contact" className="contact-section">
//       <h2>Contact</h2>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         />
//         <button type="submit" className="btn btn-primary">Send</button>
//       </form>

//       {/* Display the messages entered */}
//       <div className="submitted-contacts">
//         {contacts.length > 0 && (
//           <div className="contact-messages">
//             <h3>Messages Sent:</h3>
//             <ul>
//               {contacts.map((contact, index) => (
//                 <li key={index}>
//                   <strong>{contact.name}</strong>: {contact.message}
//                   {/* Tombol hapus */}
//                   <button
//                     onClick={() => handleDelete(index)} // Menggunakan fungsi handleDelete dengan index
//                     className="delete-btn"
//                   >
//                     <i className="fas fa-trash"></i>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* WhatsApp Button */}
//       <div className="whatsapp-container">
//         <a
//           href="https://wa.me/6281358983847"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="whatsapp-link"
//         >
//           <i className="fab fa-whatsapp whatsapp-icon"></i> Chat with me on WhatsApp
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Contact;


// import React, { useState } from 'react';
// import Swal from 'sweetalert2';
// import './Contact.css';

// function Contact() {
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');
//   const [contacts, setContacts] = useState([]);

//   // Fungsi untuk menghapus pesan
//   const handleDelete = (index) => {
//     const updatedContacts = contacts.filter((contact, i) => i !== index);
//     setContacts(updatedContacts); // Update state dengan data baru
//     Swal.fire('Deleted!', 'Your message has been deleted.', 'success');
//   };

//   // Fungsi untuk menangani pengiriman form
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name && message) {
//       const newContact = { name, message };
//       setContacts([newContact, ...contacts]); // Menambahkan pesan baru ke atas daftar
//       setName('');
//       setMessage('');
//       Swal.fire('Thank you!', 'Your message has been submitted', 'success');
//     } else {
//       Swal.fire('Oops!', 'Please fill in both fields', 'error');
//     }
//   };

//   return (
//     <div id="contact" className="contact-section">
//       <h2>Contact</h2>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         />
//         <button type="submit" className="btn btn-primary">Send</button>
//       </form>

//       {/* Display the messages entered */}
//       <div className="submitted-contacts">
//         {contacts.length > 0 && (
//           <div className="contact-messages">
//             <h3>Messages Sent:</h3>
//             <ul>
//               {contacts.map((contact, index) => (
//                 <li key={index} className="message-item">
//                   <strong>{contact.name}</strong>: {contact.message}
//                   {/* Tombol hapus di sebelah pesan */}
//                   <button
//                     onClick={() => handleDelete(index)}
//                     className="delete-btn"
//                   >
//                     <i className="fas fa-trash"></i>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* WhatsApp Button */}
//       <div className="whatsapp-container">
//         <a
//           href="https://wa.me/6281358983847"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="whatsapp-link"
//         >
//           <i className="fab fa-whatsapp whatsapp-icon"></i> Chat with me on WhatsApp
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Contact;


import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { jsPDF } from 'jspdf'; // Import jsPDF
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [contacts, setContacts] = useState([]);

  // Data Dummy untuk Home, About, Projects, Experiences
  const homeData = {
    name: "Fuad Fadhlil 'Azhiim",
    description: "I am a Full Stack Developer with experience in creating websites, UI/UX design, and more."
  };

  const aboutData = {
    personalInfo: {
      name: "Fuad Fadhlil 'Azhiim",
      email: "fuadpoenya77@gmail.com.com",
      phone: "081358983847",
      address: "Sleman, DIY"
    },
    aboutMe: "a web developer who focuses on user interface design and user experience, besides that I am also a fullstack developer who is currently focusing on the front end. besides all that I am also a person who has a high enthusiasm for technology, especially in computer hardware and software technology."
  };

  const projectsData = [
    { title: "Project A", description: "A web app for managing tasks." },
    { title: "Project B", description: "A mobile app for tracking fitness goals." }
  ];

  const experiencesData = [
    { jobTitle: "Software Developer", company: "XYZ Corp", duration: "2021 - Present" },
    { jobTitle: "Front-end Developer", company: "ABC Ltd", duration: "2019 - 2021" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { name, message };
    setContacts([...contacts, newContact]);
    setName('');
    setMessage('');
    Swal.fire('Thank you!', 'Your message has been submitted', 'success');
  };

  const handleDelete = (index) => {
    const updatedContacts = contacts.filter((contact, i) => i !== index);
    setContacts(updatedContacts); // Update state with new data
    Swal.fire('Deleted!', 'Your message has been deleted.', 'success');
  };

  // Fungsi untuk mengunduh CV dalam format PDF
  const downloadCV = () => {
    const doc = new jsPDF();

    // Menambahkan judul CV
    doc.setFontSize(18);
    doc.text("Curriculum Vitae", 14, 20);

    // Menambahkan Data Home
    doc.setFontSize(14);
    doc.text(`Name: ${homeData.name}`, 14, 30);
    doc.text(`Description: ${homeData.description}`, 14, 40);

    // Menambahkan Data About
    doc.setFontSize(14);
    doc.text("About Me:", 14, 60);
    doc.setFontSize(12);
    doc.text(aboutData.aboutMe, 14, 70);

    doc.setFontSize(14);
    doc.text("Personal Information:", 14, 90);
    doc.setFontSize(12);
    doc.text(`Name: ${aboutData.personalInfo.name}`, 14, 100);
    doc.text(`Email: ${aboutData.personalInfo.email}`, 14, 110);
    doc.text(`Phone: ${aboutData.personalInfo.phone}`, 14, 120);
    doc.text(`Address: ${aboutData.personalInfo.address}`, 14, 130);

    // Menambahkan Data Projects
    doc.setFontSize(14);
    doc.text("Projects:", 14, 150);
    doc.setFontSize(12);
    projectsData.forEach((project, index) => {
      doc.text(`${project.title}: ${project.description}`, 14, 160 + (index * 10));
    });

    // Menambahkan Data Experiences
    doc.setFontSize(14);
    doc.text("Work Experience:", 14, 180 + (projectsData.length * 10));
    doc.setFontSize(12);
    experiencesData.forEach((exp, index) => {
      doc.text(`${exp.jobTitle} - ${exp.company} (${exp.duration})`, 14, 190 + (index * 10) + (projectsData.length * 10));
    });

    // Menambahkan Data Contacts (Pesan yang dikirim)
    doc.setFontSize(14);
    doc.text("Messages Sent:", 14, 210 + (experiencesData.length * 10) + (projectsData.length * 10));
    contacts.forEach((contact, index) => {
      doc.text(`${contact.name}: ${contact.message}`, 14, 220 + (index * 10) + (experiencesData.length * 10) + (projectsData.length * 10));
    });

    // Mengunduh file PDF
    doc.save('CV_Fuad Fadhlil Azhiim.pdf'); // Ganti dengan nama CV Anda
  };

  return (
    <div id="contact" className="contact-section">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">Send</button>
      </form>

      {/* Display the messages entered */}
      <div className="submitted-contacts">
        {contacts.length > 0 && (
          <div className="contact-messages">
            <h3>Messages Sent:</h3>
            <ul>
              {contacts.map((contact, index) => (
                <li key={index} className="message-item">
                  <strong>{contact.name}</strong>: {contact.message}
                  <button
                    onClick={() => handleDelete(index)}
                    className="delete-btn"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Tombol Unduh CV */}
      <button onClick={downloadCV} className="btn btn-success">
        Download CV (PDF)
      </button>

      {/* WhatsApp Button */}
      <div className="whatsapp-container">
        <a
          href="https://wa.me/6281358983847"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <i className="fab fa-whatsapp whatsapp-icon"></i> Chat with me on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default Contact;
