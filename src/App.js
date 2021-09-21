import React from 'react';
import { Navbar } from './Component/Navbar';
import { Route, Redirect } from 'react-router-dom'
import { Barang } from './pages/Barang';
import { BarangMasuk } from './pages/BarangMasuk';
import { BarangKeluar } from './pages/BarangKeluar';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <div>
      <Navbar />

      <section>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/barang" component={Barang} />
        <Route path="/barangmasuk" component={BarangMasuk} />
        <Route path="/barangkeluar" component={BarangKeluar} />
      </section>
    </div>
  );
}

export default App;
