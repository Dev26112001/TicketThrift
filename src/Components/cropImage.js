// cropImage.js
export const getCroppedImg = (imageSrc, crop, resize = { width: crop.width, height: crop.height }, fileName = 'cropped-image.jpg') => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        // Create an off-screen canvas for the resized image
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
  
        // Set canvas dimensions to the resized image dimensions
        canvas.width = resize.width;
        canvas.height = resize.height;
  
        // Draw the image with the new size on the canvas
        ctx.drawImage(
          image,
          crop.x, crop.y, crop.width, crop.height, // source x, y, width, height (cropped area)
          0, 0, resize.width, resize.height // destination x, y, width, height (new size)
        );
  
        // Convert the canvas to a blob
        canvas.toBlob((blob) => {
          if (!blob) {
            console.error('Canvas is empty');
            return reject(new Error('Canvas is empty'));
          }
          blob.name = fileName;
          // Create a URL for the image blob
          const fileUrl = window.URL.createObjectURL(blob);
          resolve(fileUrl); // Resolve with the URL of the blob
        }, 'image/jpeg');
      };
      image.onerror = () => {
        reject(new Error('Failed to load the image'));
      };
    });
  };
  