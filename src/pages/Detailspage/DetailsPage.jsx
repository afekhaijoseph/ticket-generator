import React, { useState, useEffect } from 'react';
import PageWrapper from '../../components/Pagewrapper/PageWrapper';
import styles from './detailspage.module.css';
import Divider from '../../components/Divider/Divider';
import { useNavigate } from 'react-router-dom';
import cloudIcon from '../../assets/images/cloudicon.png'

const DetailsPage = () => {
  const [selectedImage, setSelectedImage] = useState('')
  const [imgUrl, setImgUrl] = useState(sessionStorage.getItem('imgUrl') || '');
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [request, setRequest] = useState(localStorage.getItem('request') || '');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [newUpload, setNewUpload] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (newUpload) setNewUpload(false);
  }, [newUpload]);

  useEffect(() => {
    sessionStorage.setItem('imgUrl', imgUrl);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('request', request);
  }, [imgUrl, name, email, request]);

  const handleImageChange = async (e) => {
    if (e.target.files[0]) {
      setLoading(true);
      const file = e.target.files[0];
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'ticketcloud');
      data.append('cloud_name', 'dbctd4duc');

      try {
        const res = await fetch('https://api.cloudinary.com/v1_1/dbctd4duc/image/upload', {
          method: 'POST',
          body: data,
        });
        const uploadedImageUrl = await res.json();
        setLoading(false);
        if (uploadedImageUrl.secure_url) {
          setImgUrl(uploadedImageUrl.secure_url);
          setSelectedImage(file ? URL.createObjectURL(file) : undefined)
          setNewUpload(true);
        } else {
          setErrors({ ...errors, imgUrl: 'Image upload failed' });
        }
      } catch (error) {
        setLoading(false);
        setErrors({ ...errors, imgUrl: 'Image upload failed' });
      }
    }
  };

  const validate = () => {
    const errors = {};
    if (!imgUrl) errors.imgUrl = 'Please upload a picture';
    if (!name.trim()) errors.name = 'Please include your name';
    if (!email.trim()) errors.email = 'Please include your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (!Object.keys(validationErrors).length) navigate('/ticket');
  };

  return (
    <PageWrapper>
      <form onSubmit={handleSubmit}>
        <div className={styles.profilepicinput}>
          <p className={styles.newphotolabel}>Upload Profile Photo</p>
          <div className={styles.photoinputcontainer}>
            <input type="file" id="photo" className={styles.photoinput} onChange={handleImageChange} />
            <label htmlFor="photo" className={styles.photoinputlabel}>
              {
              selectedImage ?
               <img src={selectedImage} className={styles.preview}/>:
              <div>
                <div className={styles.cloud }>
                   <img src={cloudIcon} alt="upload icon" />
                </div>
                
                <p>Drag & drop, or click to upload</p>
              </div>
                }
              
              
              </label>
          </div>
          {loading && <p className={styles.spinner}>Uploading...</p>}
          {errors.imgUrl && <p style={{ color: 'red' }}>{errors.imgUrl}</p>}
  
          {newUpload && !loading && <p style={{ color: 'green' }}>Image uploaded successfully!</p>}
        </div>
        <Divider />
        <div className={styles.otherinput}>
          <label htmlFor="name">Enter your name</label>
          <input type="text" id="name" className={styles.nameinput} value={name} onChange={e => setName(e.target.value)} />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          <label htmlFor="email">Enter your email*</label>
          <input type="email" id="email" className={styles.emailinput} value={email} onChange={e => setEmail(e.target.value)} />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          <label htmlFor="request">Special Request</label>
          <textarea id="request" className={styles.requestinput} value={request} onChange={e => setRequest(e.target.value)} />
        </div>
        <div className={styles.buttons}>
          <button type="button" onClick={() => navigate(-1)}>Back</button>
          <button type="submit">Get my ticket</button>
        </div>
      </form>
    </PageWrapper>
  );
};

export default DetailsPage;
