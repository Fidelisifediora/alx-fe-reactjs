function About() {
  const styles = {
    container: { padding: '20px', backgroundColor: '#eef6ff' },
    title: { fontSize: '2em', color: '#1a73e8' },
    description: { fontSize: '1.2em', color: '#444' },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.description}>
        Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.
      </p>
    </div>
  );
}

export default About;
