import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Input from './input_nilai';

function AspekPenilaian() {
  const totalMahasiswa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const totalAspek = [1,2,3,4];

  const [aspekPenilaian, setAspekPenilaian] = useState({
    aspek_penilaian_1: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0,}, 
    aspek_penilaian_2: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0,}, 
    aspek_penilaian_3: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0,}, 
    aspek_penilaian_4: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0,}, 
  });
  
  const [showResult, setShowResult] = useState(false);
  
  const updateData = (mhs, idxPenilaian, value) => {
    setShowResult(false);
    let result = {...aspekPenilaian};
    let idxAspek = 'aspek_penilaian_'+idxPenilaian;
    result[idxAspek][mhs] = parseInt(value);
    setAspekPenilaian(result);
  }

  const submitData = () => {
    setShowResult(true);
  }

  return (
    <div>
    <h1>Test React</h1>
      <ul>
        <Grid container spacing={1}>
          <Grid item xs={5}></Grid>
          <Grid item xs={1}>
            Aspek Penilaian 1
          </Grid>
          <Grid item xs={1}>
            Aspek Penilaian 2
          </Grid>
          <Grid item xs={1}>
            Aspek Penilaian 3
          </Grid>
          <Grid item xs={1}>
            Aspek Penilaian 4
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        {totalMahasiswa.map((idxMahasiswa, key) => (
          <Input key={key} idxMahasiswa={idxMahasiswa} rangeNilai={totalMahasiswa} totalAspek={totalAspek} receivedProps={(mhs, idxPenilaian, value) => updateData(mhs, idxPenilaian, value)} />
        ))}
      </ul>
      <button style={{backgroundColor: 'black', color: 'white', borderRadius: '0%', fontSize: '16px'}} onClick={submitData}>Simpan</button>
      {showResult && 
      <div style={{padding: '0%'}}>
        <div><pre>{JSON.stringify(aspekPenilaian, null, 2)}</pre></div>
      </div>
      }
    </div>
  );
}
export default AspekPenilaian;