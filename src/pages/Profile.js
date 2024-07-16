import React from 'react';

const Profile = () => {
  const user = { name: 'John Doe', email: 'john@example.com' }; // Simulación de datos de usuario

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
