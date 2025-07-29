import React, { useEffect, useRef, useState } from 'react';

const ProfilePictureCropper = () => {
  const canvasRef = useRef(null);
  const fabricRef = useRef(null);
  const imageRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.skypack.dev/fabric';
    script.onload = () => {
      const fabric = window.fabric;
      fabricRef.current = fabric;

      const canvas = new fabric.Canvas('canvas', {
        width: 500,
        height: 400,
      });
      canvasRef.current = canvas;
    };
    document.body.appendChild(script);

    return () => {
      if (canvasRef.current) {
        canvasRef.current.dispose();
      }
    };
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImageFile(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataURL = e.target.result;
      const fabric = fabricRef.current;
      const canvas = canvasRef.current;

      fabric.Image.fromURL(dataURL, (img) => {
        img.set({
          left: 50,
          top: 50,
          angle: 0,
          scaleX: 1,
          scaleY: 1,
        });

        canvas.clear();
        canvas.add(img);
        canvas.setActiveObject(img);
        imageRef.current = img;
      });
    };
    reader.readAsDataURL(file);
  };

  const rotateImage = () => {
    const canvas = canvasRef.current;
    const img = imageRef.current;
    if (img) {
      img.rotate((img.angle || 0) + 45);
      canvas.renderAll();
    }
  };

  const applyGrayscale = () => {
    const canvas = canvasRef.current;
    const img = imageRef.current;
    const fabric = fabricRef.current;

    if (img && fabric) {
      img.filters = [new fabric.Image.filters.Grayscale()];
      img.applyFilters();
      canvas.renderAll();
    }
  };

  const cropImage = () => {
    const canvas = canvasRef.current;
    const img = imageRef.current;

    if (img) {
      const cropped = new fabric.Image(img.getElement(), {
        left: 0,
        top: 0,
        cropX: 50,
        cropY: 50,
        width: 200,
        height: 200,
        scaleX: 1,
        scaleY: 1,
      });

      canvas.clear();
      canvas.add(cropped);
      canvas.setActiveObject(cropped);
      imageRef.current = cropped;
      canvas.renderAll();
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Profile Picture Uploader & Editor</h2>

      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <div style={{ margin: '20px auto', maxWidth: '500px' }}>
        <canvas id="canvas" style={{ border: '1px solid #ccc' }} />
      </div>

      <div style={{ marginTop: '10px' }}>
        <button onClick={rotateImage}>Rotate</button>
        <button onClick={applyGrayscale} style={{ marginLeft: '10px' }}>Grayscale</button>
        <button onClick={cropImage} style={{ marginLeft: '10px' }}>Crop</button>
      </div>
    </div>
  );
};

export default ProfilePictureCropper;
