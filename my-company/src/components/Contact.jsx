import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setMessageSent(false), 3000);
  };

  const styles = {
    container: { padding: '20px', backgroundColor: '#e8f5e9' },
    title: { fontSize: '2em', color: '#43a047' },
    input: { display: 'block', width: '100%', margin: '10px 0', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' },
    button: { padding: '10px 20px', backgroundColor: '#43a047', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' },
    successMessage: { color: '#2e7d32', marginTop: '10px' },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
      {messageSent && (
        <p style={styles.successMessage}>Thank you for your message. We will get back to you soon!</p>
      )}
    </div>
  );
}

export default Contact;
