
function Services() {
  const styles = {
    container: { padding: '20px', backgroundColor: '#fff8e1' },
    title: { fontSize: '2em', color: '#ffa726' },
    list: { listStyleType: 'circle', color: '#333', marginLeft: '20px' },
    listItem: { marginBottom: '10px' },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Our Services</h1>
      <ul style={styles.list}>
        <li style={styles.listItem}>Technology Consulting</li>
        <li style={styles.listItem}>Market Analysis</li>
        <li style={styles.listItem}>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;
