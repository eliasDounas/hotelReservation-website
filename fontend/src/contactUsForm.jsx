import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [failedLogin, setFailedLogin] = useState(false );
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:3001/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
    
        if (response.ok) {
            navigate('/');
        } else {
            setFailedLogin('true');
            return;
        } 
    } catch (error) {
        console.error('Error during message req');
      }
  
  };

  return (
    <div className="md:w-1/2 mx-auto my-36 p-6 border border-gray-400 rounded-md shadow-right-bottom">
        <h1 className="text-3xl mb-3 text-center font-medium">Get in touch</h1>
        <hr className='bg-gray-200 h-0.5 mb-4 mx-4'></hr>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            {failedLogin && <div className="bg-red-100 rounded-md mx-32 text-red-500 font-medium text-center border-red-900 border p-3 mb-6">Failed to send your email, please try again.</div>}
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 p-2 block w-full rounded-md ring-indigo-500 border-indigo-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-700">Email Body</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-2 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            rows="4"
            placeholder="Your Message"
            required
          />
        </div>
        <div className='text-end'>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-md text-end font-medium rounded-full text-white bg-blue-950 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
          >
            Submit
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
