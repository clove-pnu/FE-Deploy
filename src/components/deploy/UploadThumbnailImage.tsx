import { useState } from 'react';
import { validImageSize, validImageType } from '../../utils/image';
import styles from '../styles/UploadThumbnailImage.module.css';

interface UploadThumbnailImageProps {
  setImage: React.Dispatch<React.SetStateAction<Blob>>;
}

export default function UploadThumbnailImage({ setImage }: UploadThumbnailImageProps) {
  const [imageURL, setImageURL] = useState<string>(null);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      if (!validImageType(fileList[0].type)) {
        alert('유효한 이미지 파일이 아닙니다.');
        return;
      }

      if (!validImageSize(fileList[0].size)) {
        alert('이미지 크기는 5MB 이하여야 합니다.');
        return;
      }

      const url = URL.createObjectURL(fileList[0]);

      setImage(fileList[0]);
      setImageURL(url);
    }
  };

  return (
    <div className={styles.container}>
      {imageURL && (
      <img
        src={imageURL}
        alt="썸네일 이미지 미리보기"
        className={styles.thumbnail}
      />
      )}
      <label
        htmlFor="thumbnailInput"
        className={styles.inputLabel}
      >
        공연 썸네일 이미지 첨부하기
        <input
          type="file"
          name="썸네일 이미지 첨부"
          id="thumbnailInput"
          onChange={handleUploadImage}
          className={styles.input}
          accept="image/jpeg, image/png, image/webp, image/gif"
        />
      </label>
    </div>
  );
}
