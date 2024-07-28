// Import React Packages
import { useState } from 'react'

// Import local components
import Checkbox from '../components/common/Checkbox';


export default function GenderCheckBox() {
  const [selectedGenders, setSelectedGenders] = useState("");

  const handleGenderChange = (newSelectedGenders) => {
    setSelectedGenders(newSelectedGenders);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Genders:', selectedGenders);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      handleGenderChange(name);
    } else {
      handleGenderChange("");
    }
  };

  return (
    <div className="text-blue-500 flex-1 flex flex-col">
      <p className={`${selectedGenders? "text-green-400" : ""} text-lg`}>Gender</p>

      <section className="flex gap-5 whitespace-nowrap">
        <Checkbox
          name="Male"
          checked={selectedGenders.includes('Male')}
          onChange={handleCheckboxChange}
          color="green-400"
          className="flex-1"
        />
        <Checkbox
          name="Female"
          checked={selectedGenders.includes('Female')}
          onChange={handleCheckboxChange}
          color="green-400"
          className="flex-1"
        />
        <Checkbox
          name="Other"
          checked={selectedGenders.includes('Other')}
          onChange={handleCheckboxChange}
          color="green-400"
          className="flex-1"
        />
      </section>
    </div>
  );
}