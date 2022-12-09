import { useMemo } from "react";
import { useState } from "react";

function App() {

  const [name, setName] = useState('Ali Rıza')
  const [description, setDescription] = useState('')
  const [gender, setGender] = useState('1')
  const genders = ['Erkek','Kadın']
  const selectedGender = useMemo(() => {
    return genders[gender]
  }, [gender])
  const [categories, setCategories] = useState([1,3])
  const categorylist = [
    {key : 1, value: 'Ali Rıza'},
    {key : 2, value: 'Yasemin'},
    {key : 3, value: 'Ayşegül'},
    {key : 4, value: 'Cevat'},
  ]

  return(
    <>
      <button onClick={() => setName('Yasemin')}>Adı Değiştir</button>
      <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
      <br></br>
      <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
      <br></br>
      <select value={gender} onChange={e => setGender(e.target.value)} >
        <option value="">Seçin</option>
        {genders.map((gender, index) => (
          <option value={index} key={index}>{gender}</option>
        ))}
      </select>
      <br></br>
      <button onClick={() => setCategories([2,3,4])}>Kategöri Seç</button>
      <select value={categories} multiple={true} onChange={e => setCategories([...e.target.selectedOptions].map(option => +option.value))} >
        {categorylist.map((category) => (
          <option value={category.key} key={category.key}>{category.value}</option>
        ))}
      </select>
      <br></br>
      <pre>{JSON.stringify(categories, null, 2)}</pre>
    </>
  );
}

export default App;