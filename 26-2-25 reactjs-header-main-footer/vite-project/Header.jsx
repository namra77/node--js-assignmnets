// Header.js
import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1>Welcome to My Website</h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  },
};

export default Header;