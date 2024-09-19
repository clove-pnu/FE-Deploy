import { useState } from 'react';
import { validImageSize, validImageType } from '../../utils/image';
import styles from '../styles/UploadDescriptionImage.module.css';

interface UploadDescriptionImageProps {
  setImage: React.Dispatch<React.SetStateAction<Blob>>;
}

export default function UploadDescriptionImage({ setImage }: UploadDescriptionImageProps) {
  const [imageURL, setImageURL] = useState<string>(null);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (fileList && fileList.length > 0) {
      if (!validImageType(fileList[0].type)) {
        alert('유효한 이미지 파일이 아닙니다.');
      }

      if (!validImageSize(fileList[0].size)) {
        alert('이미지 크기는 5MB 이하여야 합니다.');
      }

      const url = URL.createObjectURL(fileList[0]);

      setImage(fileList[0]);
      setImageURL(url);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImageURL(null);
  };

  return (
    <div className={styles.container}>
      <label
        htmlFor="descriptionImageInput"
        className={styles.inputLabel}
      >
        공연 설명 이미지 첨부하기
        <input
          type="file"
          name="이미지 첨부"
          id="descriptionImageInput"
          onChange={handleUploadImage}
          className={styles.input}
          accept="image/jpeg, image/png, image/webp, image/gif"
        />
      </label>
      {imageURL
      && (
      <div className={styles.imageContainer}>
        <img
          src={imageURL}
          alt="공연 설명 이미지 미리보기"
          className={styles.image}
        />
        <button
          type="button"
          onClick={() => handleRemoveImage()}
          className={styles.deleteButton}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </button>
      </div>
      )}
    </div>
  );
}
