import React from 'react';

const Data = ({ penggunas }) => {
  return (
    <div>
      <h2>Data Pengguna</h2>
      {penggunas.map(pengguna => (
        <div key={pengguna.id}>
          <p>Nama: {pengguna.name}</p>
          <p>Email: {pengguna.email}</p>
          <p>Password: {pengguna.password}</p>
          <p>No HP: {pengguna.phone}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Data;
