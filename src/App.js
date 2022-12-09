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
  const selectedCategories = categories && categorylist.filter(c => categories.includes(c.key))
  const [rule, setRule] = useState(true)
  const [rules, setRules] = useState([
    {key: 1 , value: '1. Kuralı Kabul Ediyorum', checked: false},
    {key: 2 , value: '2. Kuralı Kabul Ediyorum', checked: false},
    {key: 3 , value: '3. Kuralı Kabul Ediyorum', checked: true},
  ])
  const checkRule = (key, checked) => {
    setRules(rules => rules.map(rule => {
      if (key == rule.key) {
        rule.checked = checked
      }
      return rule
    }))
  }
  const enabled = rules.every(rule => rule.checked)
  const [level,setLevel] = useState('jr_developer')
  const levels = [
    {key: 'beginner', value: 'Baslangıç'},
    {key: 'jr_developer', value: 'Jr. Developer'},
    {key: 'sr_developer', value: 'Sr. Developer'},
  ]
  const selectedLevel = levels.find(g => g.key == level)

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
      <pre>{JSON.stringify(selectedCategories, null, 2)}</pre>
      <br></br>
      <label>
          <input type="checkbox" checked={rule} onChange={e => setRule(e.target.checked)}></input>
          Kuralları Kabul Ediyorum
      </label>
      <br></br>
      {rules.map(rule => (
        <label key={rule.key}>
          <input type="checkbox" checked={rule.checked} onChange={e => checkRule(rule.key, e.target.checked)}></input>
          {rule.value}
        </label>
      ))}
      <br></br>
      <pre>{JSON.stringify(rules, null, 2)}</pre>
      <br></br>
      {levels.map((levell, index) => (
        <label key={index}>
          <input type="radio" value={levell.key} checked={levell.key == level} onChange={e => setLevel(e.target.value)}></input>
          {levell.value}
        </label>
      ))}
      <br></br>
      {JSON.stringify(selectedLevel)}
      <br></br>
      <button disabled={!enabled}>Devam Et</button>
    </>
  );
}

export default App;