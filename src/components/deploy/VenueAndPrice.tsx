import { Venue } from '../../utils/type';
import Dropdown from '../common/Dropdown';
import Label from '../common/Label';
import styles from '../styles/VenueAndPrice.module.css';

interface VenueAndPriceProps {
  selectedVenue: string;
  setSelectedVenue: React.Dispatch<React.SetStateAction<string>>;
  venues: Venue[];
  price: Map<string, string>;
  setPrice: React.Dispatch<React.SetStateAction<Map<string, string>>>;
}

export default function VenueAndPrice({
  selectedVenue,
  setSelectedVenue,
  venues,
  price,
  setPrice,
}: VenueAndPriceProps) {
  return (
    <>
      <Label name="공연 장소">
        <Dropdown
          options={venues.map(({ name }) => name)}
          selectedOption={selectedVenue}
          setSelectedOption={setSelectedVenue}
        />
      </Label>
      {selectedVenue !== '' && (
        <div>
          <div className={styles.priceLabel}>구역 별 가격</div>
          <div className={styles.priceContainer}>
            <img
              className={styles.venueImage}
              src={venues.find((v) => v.name === selectedVenue)?.backgroundImage}
              alt="공연장 좌석 배치도"
            />
            <div className={styles.venuePrice}>
              {venues.find((v) => v.name === selectedVenue)
                ?.sections
                .map(({ sectionName }) => (
                  <Label
                    name={`${sectionName} 구역`}
                    unit="원"
                    key={sectionName}
                  >
                    <input
                      className={styles.input}
                      type="text"
                      name={`${sectionName} 구역`}
                      id={`${sectionName} 구역`}
                      value={price.get(sectionName) || ''}
                      onChange={(e) => {
                        if (/^[0-9]*$/g.test(e.target.value)) {
                          setPrice((prev) => {
                            const newMap = new Map(prev);
                            newMap.set(sectionName, e.target.value);
                            return newMap;
                          });
                        }
                      }}
                    />
                  </Label>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
