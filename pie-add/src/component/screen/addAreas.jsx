import React, { useState } from 'react';
import { AreasNameRef, addDoc } from '../../firebase';
import './addAreas.css'

const AddAreas = () => {
    const [AraeName, setAraeName] = useState('');
    const addAreasForm = document.querySelector('.AddFormAreaNames')

    const handlevalue = (e) => {
        setAraeName(e.target.value)
    }

    const onFinsh = async (e) => {
        e.preventDefault();

        const objAreasName = {
            AreasName: AraeName,
            
        }
        if (AraeName) {
            await addDoc(AreasNameRef, objAreasName);

        }
        addAreasForm.reset()
    }
    return (
        <div className="main-div-location">
            <div className='mainDiv-Area'>
                <div className='location-Div-city'>
                    <div className="container">
                        <form className='AddFormAreaNames'>
                            <h2 className='AddAreaslable text-center'>
                                Arae Name
                            </h2>
                            <input type="text" placeholder='Add Area Name' className='Area-Name' onChange={handlevalue} />
                            <button onClick={onFinsh} className='btn w-100 btn-primary btn-Submit-AddAreasName'> Submit </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default AddAreas
