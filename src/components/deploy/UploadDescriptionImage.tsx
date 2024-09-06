import { useState } from 'react';
import { validImageSize, validImageType } from '../../utils/image';
import styles from '../styles/UploadDescriptionImage.module.css';

interface UploadDescriptionImageProps {
  setImage: React.Dispatch<React.SetStateAction<Blob[]>>;
}

export default function UploadDescriptionImage({ setImage }: UploadDescriptionImageProps) {
  const [imageURL, setImageURL] = useState<string[]>([]);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    let typeFlag = false;
    let sizeFlag = false;

    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      for (let i = 0; i < fileList.length; i += 1) {
        if (!validImageType(fileList[i].type)) {
          typeFlag = true;
          continue;
        }

        if (!validImageSize(fileList[i].size)) {
          sizeFlag = true;
          continue;
        }

        const url = URL.createObjectURL(fileList[i]);

        setImage((prev) => [...prev, fileList[i]]);
        setImageURL((prev) => [...prev, url]);
      }

      if (typeFlag) {
        alert('유효한 이미지 파일이 아닙니다.');
      }

      if (sizeFlag) {
        alert('이미지 크기는 5MB 이하여야 합니다.');
      }
    }
  };

  const handleRemoveImage = (index: number) => {
    setImage((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    setImageURL((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
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
          accept="image/jpeg, image/png, image/webp"
          multiple
        />
      </label>
      {imageURL.length > 0 && (
        <ul className={styles.imageList}>
          {imageURL.map((img, index) => (
            <li
              key={img}
              className={styles.imageContainer}
            >
              <img
                src={img}
                alt={`이미지 미리보기 ${index}`}
                className={styles.image}
              />
              <button
                type="button"
                onClick={() => handleRemoveImage(index)}
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
