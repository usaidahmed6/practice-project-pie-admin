import React, { useEffect, useState } from 'react'
import Navebar from '../navebar';
import './adminHome.css';
import {
  getDocs, BiscuitsRef, deleteDoc, doc, db, onSnapshot, collection,
  CakesRef, BrowniesRef, CookiesRef, EventSpecialRef, FrozenProductRef,
  SeasonalProductRef, BreadsCroissantRef
} from '../../firebase';
const AdminHome = () => {

  const [loading, setLoading] = useState(false);
  const [BiscuitsItem, setBiscuitsItem] = useState([false]);
  const [CakesItem, setCakesItem] = useState([false]);
  const [CookiesItem, setCookiesItem] = useState([false]);
  const [BrowniesItem, setBrowniesItem] = useState([false]);
  const [EventSpecial, setEventSpecial] = useState([false]);
  const [FrozenProduct, setFrozenProduct] = useState([false]);
  const [SeasonalProduct, setSeasonalProduct] = useState([false]);
  const [BreadsCroissant, setBreadsCroissant] = useState([false]);


  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)

    }, 1500)

    onSnapshot(
      collection(db, "Biscuits"),
      (snapshot) => {
        getCategory();
      },

      (error) => {
        alert(error);
      }
    );

    onSnapshot(
      collection(db, "Cakes"),
      (snapshot) => {
        getCategory()
      },

      (error) => {
        alert(error);
      }
    );

    onSnapshot(
      collection(db, "Cookies"),
      (snapshot) => {
        getCategory()
      },

      (error) => {
        alert(error);
      }
    );

    onSnapshot(
      collection(db, "Brownies"),
      (snapshot) => {
        getCategory()
      },

      (error) => {
        alert(error);
      }
    );

    onSnapshot(
      collection(db, "EventSpecial"),
      (snapshot) => {
        getCategory()
      },

      (error) => {
        alert(error);
      }
    );

    onSnapshot(
      collection(db, "FrozenProduct"),
      (snapshot) => {
        getCategory()
      },

      (error) => {
        alert(error);
      }
    );

    onSnapshot(
      collection(db, "SeasonalProduct"),
      (snapshot) => {
        getCategory()
      },

      (error) => {
        alert(error);
      }
    );

    onSnapshot(
      collection(db, "BreadsCroissant"),
      (snapshot) => {
        getCategory()
      },

      (error) => {
        alert(error);
      }
    );


  }, [])

  // get itmes ***********************************************

  const getCategory = async () => {
    setLoading(true)
    const querySnapshotBiscuits = await getDocs(BiscuitsRef);
    const querySnapshotCakes = await getDocs(CakesRef);
    const querySnapshotCookies = await getDocs(CookiesRef);
    const querySnapshotBrownies = await getDocs(BrowniesRef);
    const querySnapshotEventSpecial = await getDocs(EventSpecialRef);
    const querySnapshotFrozenProduct = await getDocs(FrozenProductRef);
    const querySnapshotSeasonalProduct = await getDocs(SeasonalProductRef);
    const querySnapshotBreadsCroissant = await getDocs(BreadsCroissantRef);
    let itemBiscuits = [];
    let CakesItems = [];
    let CookiesItems = [];
    let BrowniesItems = [];
    let EventSpecials = [];
    let FrozenProducts = [];
    let SeasonalProducts = [];
    let BreadsCroissants = [];

    querySnapshotBiscuits.forEach((doc) => {
      // console.log(doc.id, " Biscuits waley hey => ", doc.data());
      itemBiscuits.push({ id: doc.id, ...doc.data() });
    });
    querySnapshotCakes.forEach((doc) => {
      // console.log(doc.id, " Cakes waley hey => ", doc.data());
      CakesItems.push({ id: doc.id, ...doc.data() });
    });
    querySnapshotCookies.forEach((doc) => {
      // console.log(doc.id, " Cookies waley hey => ", doc.data());
      CookiesItems.push({ id: doc.id, ...doc.data() });
    });
    querySnapshotBrownies.forEach((doc) => {
      // console.log(doc.id, " Cakes BrowniesItems hey => ", doc.data());
      BrowniesItems.push({ id: doc.id, ...doc.data() });
    });
    querySnapshotEventSpecial.forEach((doc) => {
      // console.log(doc.id, " Cakes EventSpecials hey => ", doc.data());
      EventSpecials.push({ id: doc.id, ...doc.data() });
    });
    querySnapshotFrozenProduct.forEach((doc) => {
      // console.log(doc.id, " Cakes FrozenProducts hey => ", doc.data());
      FrozenProducts.push({ id: doc.id, ...doc.data() });
    });
    querySnapshotSeasonalProduct.forEach((doc) => {
      // console.log(doc.id, " Cakes SeasonalProducts hey => ", doc.data());
      SeasonalProducts.push({ id: doc.id, ...doc.data() });
    });
    querySnapshotBreadsCroissant.forEach((doc) => {
      console.log(doc.id, " Cakes BreadsCroissants hey => ", doc.data());
      BreadsCroissants.push({ id: doc.id, ...doc.data() });
    });


    setCakesItem(CakesItems);
    setBiscuitsItem(itemBiscuits);
    setCookiesItem(CookiesItems);
    setBrowniesItem(BrowniesItems);
    setEventSpecial(EventSpecials);
    setFrozenProduct(FrozenProducts);
    setSeasonalProduct(SeasonalProducts);
    setBreadsCroissant(BreadsCroissants)

    setTimeout(() => {
      setLoading(false)

    }, 1500)
  };


  // deleted all collections *********************
  const deleteDocument = async (id) => {
    await deleteDoc(doc(db, "Biscuits", id));
    await deleteDoc(doc(db, "Cakes", id));
    await deleteDoc(doc(db, "Cookies", id));
    await deleteDoc(doc(db, "Brownies", id));
    await deleteDoc(doc(db, "EventSpecial", id));
    await deleteDoc(doc(db, "FrozenProduct", id));
    await deleteDoc(doc(db, "SeasonalProduct", id));
    await deleteDoc(doc(db, "BreadsCroissant", id))
  };


  return (
    <>
    

      <Navebar>
    
        {
          loading ?
            <div className='loader-container'>
              < div className="spinner-border">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div >

            :
            <div className='card-container'>

              {BiscuitsItem.map((data, index) => {
                return (
                  <div className="card" key={index}>
                    <img src={data.image} className="card-img-top image-Card" />
                    <div className="card-body">
                      <h5 className="card-title">{data.name}</h5>
                      <p className="card-text"> {data.description} </p>
                      <span className="btn-sm btn btn-danger btn-delete" onClick={() => deleteDocument(data.id)}>Delete</span>
                    </div>
                  </div>
                );
              })}

              {CakesItem.map((data, index) => {
                return (
                  <div className="card" key={index}>
                    <img src={data.image} className="card-img-top image-Card" />
                    <div className="card-body">
                      <h5 className="card-title">{data.name}</h5>
                      <p className="card-text"> {data.description} </p>
                      <span className="btn-sm btn btn-danger btn-delete" onClick={() => deleteDocument(data.id)}>Delete</span>
                    </div>
                  </div>
                );
              })}
              {CookiesItem.map((data, index) => {
                return (
                  <div className="card" key={index}>
                    <img src={data.image} className="card-img-top image-Card" />
                    <div className="card-body">
                      <h5 className="card-title">{data.name}</h5>
                      <p className="card-text"> {data.description} </p>
                      <span className="btn-sm btn btn-danger btn-delete" onClick={() => deleteDocument(data.id)}>Delete</span>
                    </div>
                  </div>
                );
              })}

              {BrowniesItem.map((data, index) => {
                return (
                  <div className="card" key={index}>
                    <img src={data.image} className="card-img-top image-Card" />
                    <div className="card-body">
                      <h5 className="card-title">{data.name}</h5>
                      <p className="card-text"> {data.description} </p>
                      <span className="btn-sm btn btn-danger btn-delete" onClick={() => deleteDocument(data.id)}>Delete</span>
                    </div>
                  </div>
                );
              })}

              {EventSpecial.map((data, index) => {
                return (
                  <div className="card" key={index}>
                    <img src={data.image} className="card-img-top image-Card" />
                    <div className="card-body">
                      <h5 className="card-title">{data.name}</h5>
                      <p className="card-text"> {data.description} </p>
                      <span className="btn-sm btn btn-danger btn-delete" onClick={() => deleteDocument(data.id)}>Delete</span>
                    </div>
                  </div>
                );
              })}

              {FrozenProduct.map((data, index) => {
                return (
                  <div className="card" key={index}>
                    <img src={data.image} className="card-img-top image-Card" />
                    <div className="card-body">
                      <h5 className="card-title">{data.name}</h5>
                      <p className="card-text"> {data.description} </p>
                      <span className="btn-sm btn btn-danger btn-delete" onClick={() => deleteDocument(data.id)}>Delete</span>
                    </div>
                  </div>
                );
              })}

              {SeasonalProduct.map((data, index) => {
                return (
                  <div className="card" key={index}>
                    <img src={data.image} className="card-img-top image-Card" />
                    <div className="card-body">
                      <h5 className="card-title">{data.name}</h5>
                      <p className="card-text"> {data.description} </p>
                      <span className="btn-sm btn btn-danger btn-delete" onClick={() => deleteDocument(data.id)}>Delete</span>
                    </div>
                  </div>
                );
              })}

              {BreadsCroissant.map((data, index) => {
                return (
                  <div className="card" key={index}>
                    <img src={data.image} className="card-img-top image-Card" />
                    <div className="card-body">
                      <h5 className="card-title">{data.name}</h5>
                      <p className="card-text"> {data.description} </p>
                      <span className="btn-sm btn btn-danger btn-delete" onClick={() => deleteDocument(data.id)}>Delete</span>
                    </div>
                  </div>
                );
              })}
            </div>
        }
      </Navebar >
    </>
  )
}

export default AdminHome
