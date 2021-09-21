import React, { useEffect, useState } from 'react'
import { CardDashboard } from './card.dashboard'
import { ChartGAP, ChartLine } from './chart.dashboard'
import { ModalStockDashboard } from './modalStock.dashboard'

const data = [
  {
    img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    kode_produk: "Tshirt01",
    nama: "Baju",
    qty: 44,
    unit: "buah",
    harga_pokok: 20000,
    harga_jual: 25000
  },

  {
    img: "https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    kode_produk: "Tshirt01",
    nama: "Baju",
    qty: 44,
    unit: "buah",
    harga_pokok: 20000,
    harga_jual: 25000
  },

]

export const Dashboard = () => {
  const [modal, setModal] = useState({
    stockAlert: false
  })
  const data1 = data.filter(id => id.qty < 20)

  useEffect(() => {

    if (data1.length > 0) {
      setModal({ ...modal, stockAlert: true })
    }

  }, [])
  return (
    <div className="container-fluid">
      <ModalStockDashboard data={data1} show={modal.stockAlert} onHide={() => setModal({ ...modal, stockAlert: false })} />
      <h1>Dashboard</h1>
      <div className="row mt-5  mb-5 justify-content-center align-items-center">
        <div className="col-md-6 col-lg-3 col-sm-6">
          <CardDashboard BgColor="#29A0B1" title="Total Product" />
        </div>
        <div className="col-md-6 col-lg-3 col-sm-6">
          <CardDashboard BgColor="#167D7F" title="Penjualan / Bulan" />
        </div>
        <div className="col-md-6 col-lg-3 col-sm-6">
          <CardDashboard BgColor="#638C80" title="Pembelian / Bulan" />
        </div>
        {/* <div className="col-md-3 col-sm-6">
          <CardDashboard BgColor="#2E765E" />
        </div> */}
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-12">
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-6 col-sm-12">
          <h4>Barang Masuk</h4>
          <ChartLine type="masuk" label="Barang Masuk" />
        </div>
        <div className="col-md-6 col-sm-12">
          <h4>Barang Keluar</h4>
          <ChartLine type="keluar" label="Barang Keluar" />
        </div>
      </div>


    </div>
  )
}
