import React, { useState, useEffect } from 'react';
import PageWrapper from '../../components/Pagewrapper/PageWrapper';
import styles from './detailspage.module.css';
import Divider from '../../components/Divider/Divider';
import { useNavigate } from 'react-router-dom';

const DetailsPage = () => {
  const [imgUrl, setImgUrl] = useState(localStorage.getItem('imgUrl') || '');
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [request, setRequest] = useState(localStorage.getItem('request') || '');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (imgUrl) {
      console.log("Image uploaded successfully!");
    }
  }, [imgUrl]);

  useEffect(() => {
    localStorage.setItem('imgUrl', imgUrl);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('request', request);
  }, [imgUrl, name, email, request]); // Auto-save to localStorage

  const handleImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      setLoading(true);
      const file = e.target.files[0];
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'ticketcloud');
      data.append('cloud_name', 'dbctd4duc');

      const res = await fetch('https://api.cloudinary.com/v1_1/dbctd4duc/image/upload', {
        method: 'POST',
        body: data,
      });
      const uploadedImageUrl = await res.json();
      setLoading(false);

      if (uploadedImageUrl.secure_url) {
        setImgUrl(uploadedImageUrl.secure_url);
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, imgUrl: 'Image upload failed' }));
      }
    }
  };

  const validate = () => {
    const errors = {};
    if (!imgUrl) {
      errors.imgUrl = 'Please upload a picture';
    }
    if (!name.trim()) {
      errors.name = 'Please include your name';
    }
    if (!email.trim()) {
      errors.email = 'Please include your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate('/ticket');
    }
  };

  return (
    <PageWrapper>
      <form onSubmit={handleSubmit}>
        <div className={styles.profilepicinput}>
          <p>Upload Profile Photo</p>
          <div className={styles.photoinputcontainer}>
            <input type="file" name="photo" id="photo" className={styles.photoinput} onChange={handleImageChange} />
            <label htmlFor="photo" className={styles.photoinputlabel}>Drag & drop, or click to upload</label>
          </div>
          {loading && <p className={styles.spinner}>Uploading...</p>}
          {errors.imgUrl && <p style={{ color: 'red' }}>{errors.imgUrl}</p>}
        </div>

        <Divider />

        <div className={styles.otherinput}>
        <div>
          <label htmlFor="name" className={styles.nameinputlabel}>Enter your name</label>
          <input type="text" name="name" id="name" className={styles.nameinput} onChange={e => setName(e.target.value)} value={name} />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="e-mail">Enter your email*</label>
          <input type="email" id="e-mail" name="e-mail" className={styles.emailinput} onChange={e => setEmail(e.target.value)} value={email} />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="request">Special Request</label>
          <textarea id="request" name="request" rows="3" className={styles.requestinput} onChange={e => setRequest(e.target.value)} value={request}></textarea>
        </div>
        
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
