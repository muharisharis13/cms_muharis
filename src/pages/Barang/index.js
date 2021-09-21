import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Button } from '../../Component/Button'
import { Search } from '../../Component/search/Search'
import { ModalAddBarang } from './modalAdd.barang'
import { Img } from './style.barang'


const data = [
  {
    img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    kode_produk: "Tshirt01",
    nama: "Baju",
    qty: 4,
    unit: "buah",
    harga_pokok: 20000,
    harga_jual: 25000
  },

  {
    img: "https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    kode_produk: "Tshirt01",
    nama: "Baju",
    qty: 4,
    unit: "buah",
    harga_pokok: 20000,
    harga_jual: 25000
  },

]


export const Barang = () => {
  const [modal, setModal] = useState({
    add: false
  })

  return (
    <div className="container-fluid">
      <h1>Daftar Produk</h1>


      <div className="row">
        <div className="col-md-4 col-sm-12">
          <Search />
        </div>
        <div className="col-md-4 col-sm-12">
          <ModalAddBarang show={modal.add} onHide={() => setModal({ ...modal, add: false })} />
          <Button onClick={() => setModal({ ...modal, add: true })}>Add New Produk</Button>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-12 col-sm-12">
          <Table responsive hover bordered size="sm" striped>
            <thead>
              <tr className="text-center">
                <th>Gambar</th>
                <th>Kode Produk</th>
                <th>Nama</th>
                <th>Qty</th>
                <th>Unit</th>
                <th>Harga Pokok</th>
                <th>Harga Jual</th>
              </tr>
            </thead>
            <tbody className="text-center align-items-center justify-content-center">
              {
                data.map((item, index) => (
                  <tr key={index}>
                    <td><Img alt="img" src={item.img} /></td>
                    <td >{item.kode_produk}</td>
                    <td>{item.nama}</td>
                    <td>{item.qty}</td>
                    <td>{item.unit}</td>
                    <td>{item.harga_pokok}</td>
                    <td>{item.harga_jual}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </div>
      </div>

    </div>
  )
}
