import Dropdown from '../common/Dropdown';
import Label from '../common/Label';
import styles from '../styles/VenueAndPrice.module.css';

interface VenueAndPriceProps {
  venue: string;
  setVenue: React.Dispatch<React.SetStateAction<string>>;
  venueSection: string[];
  price: Map<string, string>;
  setPrice: React.Dispatch<React.SetStateAction<Map<string, string>>>;
}

export default function VenueAndPrice({
  venue,
  setVenue,
  venueSection,
  price,
  setPrice,
}: VenueAndPriceProps) {
  return (
    <>
      <Label name="공연 장소">
        <Dropdown
          options={['장소 1', '장소 2', '장소 3']}
          selectedOption={venue}
          setSelectedOption={setVenue}
        />
      </Label>
      {venue !== '' && (
        <div>
          <div className={styles.priceLabel}>구역 별 가격</div>
          <div className={styles.priceContainer}>
            <div className={styles.venueImage} />
            <div className={styles.venuePrice}>
              {venueSection.map((section) => (
                <Label
                  name={`${section} 구역`}
                  unit="원"
                  key={section}
                >
                  <input
                    className={styles.input}
                    type="text"
                    name={`${section} 구역`}
                    id={`${section} 구역`}
                    value={price.get(section) || ''}
                    onChange={(e) => {
                      if (/^[0-9]*$/g.test(e.target.value)) {
                        setPrice((prev) => {
                          const newMap = new Map(prev);
                          newMap.set(section, e.target.value);
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
