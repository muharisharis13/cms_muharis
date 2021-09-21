import moment from 'moment'
import React from 'react'
import { Table } from 'react-bootstrap'
import { Search } from '../../Component/search/Search'

const data = [
  {
    date: new Date(),
    kode_produk: "Tshirt01",
    nama: "Baju",
    qty: 20,
    unit: "buah",
    harga_masuk: 25000
  }
]

export const BarangMasuk = () => {
  return (
    <div className="container-fluid">
      <h1 className="mb-3">Daftar Barang Masuk</h1>

      <div className="row">
        <div className="col-md-4 col-sm-12">
          <Search />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 col-sm-12">
          <Table responsive hover bordered size="sm" striped>
            <thead>
              <tr className="text-center">
                <th>Tanggal Masuk</th>
                <th>Kode Barang</th>
                <th>Nama</th>
                <th>Qty</th>
                <th>Unit</th>
                <th>Harga Masuk</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{moment(item.date).format('DD, dddd MMMM YYYY')}</td>
                    <td>{item.kode_produk}</td>
                    <td>{item.nama}</td>
                    <td>{item.qty}</td>
                    <td>{item.unit}</td>
                    <td>{item.harga_masuk}</td>
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
