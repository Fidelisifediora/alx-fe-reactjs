function Home() {
  const styles = {
    container: { padding: '20px', textAlign: 'center', backgroundColor: '#f9f9f9' },
    title: { fontSize: '2em', color: '#333' },
    description: { fontSize: '1.2em', color: '#555' },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Our Company</h1>
      <p style={styles.description}>
        We are dedicated to delivering excellence in all our services.
      </p>
    </div>
  );
}

export default Home;
