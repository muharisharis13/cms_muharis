import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import styled from 'styled-components'
import { Button } from '../../Component/Button'
import { CSecondary } from '../../Component/utl'

export const ModalAddBarang = ({ show = true, onHide }) => {
  const [image, setImage] = useState()
  const [data, setData] = useState({
    kode_produk: "",
    nama_produk: "",
    qty: "",
    unit: "",
    harga_pokok: "",
    harga_jual: ""
  })
  const reader = new FileReader();

  const onChangeImage = (e) => {
    reader.onload = () => {
      setImage(reader.result)
    }
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])

    }

  }

  const onChangeValue = (e) => {
    setData({ ...data, [e.target.id]: e.target.value })
  }

  const btnSimpan = () => {

  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Body>
        <h4>Add New Produk</h4>
        <div className="container mt-5">
          <div className="row mb-3">
            <div className="col-md-12 col-sm-12">
              {/* <div className="mb-3 align-items-center justify-content-center text-center">
                <LabelImage htmlFor="img"><FaPlus /></LabelImage>
                <input accept="image/*" id="img" type="file" className="form-control" style={{ display: "none" }} onChange={onChangeImage} />
                <Image src={image} alt="Image" />
              </div> */}
              <div className="mb-3">
                <label htmlFor="kode_produk">Kode Produk</label>
                <Input id="kode_produk" type="text" className="form-control" placeholder="Kode produk" value={data.kode_produk} onChange={e => onChangeValue(e)} />
              </div>
              <div className="mb-3">
                <label htmlFor="nama_produk">Nama Produk</label>
                <Input id="nama_produk" type="text" className="form-control" placeholder="Nama produk" value={data.nama_produk} onChange={e => onChangeValue(e)} />
              </div>
              <div className="mb-3">
                <label htmlFor="qty">Qty Produk</label>
                <Input id="qty" type="text" className="form-control" placeholder="Qty produk" value={data.qty} onChange={e => onChangeValue(e)} />
              </div>
              <div className="mb-3">
                <label htmlFor="unit">Satuan Produk</label>
                <Input id="unit" type="text" className="form-control" placeholder="Satuan produk" value={data.unit} onChange={e => onChangeValue(e)} />
              </div>
              <div className="mb-3">
                <label htmlFor="harga_pokok">Harga Modal</label>
                <Input id="harga_pokok" type="text" className="form-control" placeholder="Harga Modal" value={data.harga_pokok} onChange={e => onChangeValue(e)} />
              </div>
              <div className="mb-3">
                <label htmlFor="harga_jual">Harga Jual</label>
                <Input id="harga_jual" type="text" className="form-control" placeholder="Harga Jual" value={data.harga_jual} onChange={e => onChangeValue(e)} />
              </div>
            </div>
          </div>

          <div className="row mb-5 justify-content-center align-items-center">
            <Button>Simpan</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

const Image = styled.img`
width: 150px;
height: 150px;
object-fit: contain;
`

const LabelImage = styled.label`
border:1px solid #cccccc;
display: flex;
width: 100%;
padding:10px 0px;
border-radius: 5px;
align-items: center;
justify-content: center;
color:#000;
cursor:pointer;
`


const Input = styled.input`
&:focus {
  border-color: ${CSecondary};
}
`
