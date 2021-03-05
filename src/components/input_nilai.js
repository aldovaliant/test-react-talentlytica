import React from 'react'
import './input_nilai.css';
import { FaUserCircle } from 'react-icons/fa';

const InputNilai = (props) => {

  const divStyle = {
    border: '1px',
    borderStyle: 'solid',
    marginBottom: '1%',
    padding: '1%',
    marginLeft: '20%',
    marginRight: '20%'
  }

  const divSelect = {
    width: '12%',
    marginRight: '2%',
    marginLeft: '1%'
  }

  const getValue = (e, idxPenilaian) => {
    let mhs = "mahasiswa_" + props.idxMahasiswa;
    props.receivedProps(mhs, idxPenilaian, e.target.value);
  }

  return (
    <div style={divStyle}>
      <label style={{ marginRight: "16%" }}>
        <FaUserCircle color="gray" /> Mahasiswa {props.idxMahasiswa}
      </label>
      {props.totalAspek.map((idxAspek, key1) => (
        <select key={key1} style={divSelect} onChange={(e) => getValue(e, idxAspek)}>
          {props.rangeNilai.map((idx, key2) => (
            <option key={key2} value={idx}>{idx}</option>
          ))})
        </select>
      ))}
    </div>
  )
}

export default InputNilai;