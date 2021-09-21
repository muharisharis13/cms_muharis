import { Modal, Table } from 'react-bootstrap'
import React from 'react'
import { Img } from '../Barang/style.barang'

export const ModalStockDashboard = ({ show = true, onHide, data = [] }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <div className="container-fluid">
        <h3>Stok Menipis</h3>
        <Table responsive bordered size="sm" className="mt-5 mb-4">
          <thead>
            <tr>
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
    </Modal>
  )
}
