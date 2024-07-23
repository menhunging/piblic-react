import { LegacyRef, useState } from "react";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange, Range, RangeKeyDict } from "react-date-range";

import Button from "src/components/ui/Buttons/Button";

import styles from "./Filter.module.scss";
import { format } from "date-fns";
import useClickOutside from "src/hooks/useClickOutside";

interface IPropsFilter {
  state?: string;
  nodeRef?: LegacyRef<HTMLDivElement>;
  closeFilter: () => void;
}

const Filter = ({ state, closeFilter, nodeRef }: IPropsFilter) => {
  const [dateRange, setDateRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [isOpenDateRange, setIsOpenDateRange] = useState(false);
  const outsideAlerterRef = useClickOutside(() => setIsOpenDateRange(false));

  const handleDateRange = (rangesByKey: RangeKeyDict) => {
    // console.log(rangesByKey.selection);
    setDateRange([rangesByKey.selection]);
  };

  const clearDateRange = () => {
    console.log(dateRange);

    setDateRange([
      {
        startDate: undefined,
        endDate: undefined,
        key: "selection",
      },
    ]);
  };

  const formatedDate = (date: Date) => {
    return format(date, "dd MMM yyyy");
  };

  return (
    <div
      className={`${styles.filter} ${state ? state : ""}`}
      ref={nodeRef ? nodeRef : null}
    >
      <div className={styles.filter__head}>
        <span className={styles.filter__caption}>Filter</span>
        <span
          className={`${styles.filter__close} svgCloseDarkIcon`}
          onClick={closeFilter}
        ></span>
      </div>
      <div className={styles.filter__row}>
        <div className={styles.filter__col}>
          <span className={styles.filter__title}>Status:</span>
          <div className={styles.filter__list}>
            <div className={`${styles.checkBlock} checkBlock`}>
              <input type="checkbox" name="status" id="statusAll" />
              <label htmlFor="statusAll">All</label>
            </div>
            <div className={`${styles.checkBlock} checkBlock`}>
              <input type="checkbox" name="status" id="statusActive" />
              <label htmlFor="statusActive">Active</label>
            </div>
            <div className={`${styles.checkBlock} checkBlock`}>
              <input type="checkbox" name="status" id="statusVerification" />
              <label htmlFor="statusVerification">Under verification</label>
            </div>
            <div className={`${styles.checkBlock} checkBlock`}>
              <input type="checkbox" name="status" id="statusNeeded" />
              <label htmlFor="statusNeeded">
                Additional information needed
              </label>
            </div>
            <div className={`${styles.checkBlock} checkBlock`}>
              <input type="checkbox" name="status" id="statusRejected" />
              <label htmlFor="statusRejected">Rejected</label>
            </div>
            <div className={`${styles.checkBlock} checkBlock`}>
              <input type="checkbox" name="status" id="statusClosed" />
              <label htmlFor="statusClosed">Closed</label>
            </div>
          </div>
        </div>

        <div className={`${styles.filter__col} ${styles.filter__col_category}`}>
          <span className={styles.filter__title}>Request Category:</span>
          <div className={styles.filter__list}>
            <div className={`${styles.checkBlock} checkBlock`}>
              <input type="checkbox" name="cat" id="catServices" />
              <label htmlFor="catServices">Services</label>
            </div>
            <div className={`${styles.checkBlock} checkBlock`}>
              <input type="checkbox" name="cat" id="catConsultation" />
              <label htmlFor="catConsultation">Consultation </label>
            </div>
            <div className={`${styles.checkBlock} checkBlock`}>
              <input type="checkbox" name="cat" id="catFurniture" />
              <label htmlFor="catFurniture">Furniture</label>
            </div>
            <div className={`${styles.checkBlock} checkBlock`}>
              <input type="checkbox" name="cat" id="catServicesGoods" />
              <label htmlFor="catServicesGoods">Services + Goods</label>
            </div>
            <div className={`${styles.checkBlock} checkBlock`}>
              <input type="checkbox" name="cat" id="catSupplies" />
              <label htmlFor="catSupplies">Office Supplies</label>
            </div>
            <div className={`${styles.checkBlock} checkBlock`}>
              <input type="checkbox" name="cat" id="catOther" />
              <label htmlFor="catOther">Other</label>
            </div>
            <div
              className={`${styles.checkBlock} ${styles.checkBlock_full} checkBlock`}
            >
              <input type="checkbox" name="cat" id="catTestingEquipment" />
              <label htmlFor="catTestingEquipment">Testing Equipment</label>
            </div>
            <div
              className={`${styles.checkBlock} ${styles.checkBlock_full} checkBlock`}
            >
              <input type="checkbox" name="cat" id="catRentalEquipment" />
              <label htmlFor="catRentalEquipment">Rental of equipment</label>
            </div>
          </div>
        </div>

        <div className={`${styles.filter__col} ${styles.filter__col_date}`}>
          <span className={styles.filter__title}>Date:</span>
          <div className={styles.filter__list}>
            <div className={`${styles.checkBlock} radioBlock`}>
              <input type="radio" name="date" id="day7" />
              <label htmlFor="day7">Last 7 days</label>
            </div>
            <div className={`${styles.checkBlock} radioBlock`}>
              <input type="radio" name="date" id="day1" />
              <label htmlFor="day1">Last 1 month</label>
            </div>
            <div className={`${styles.checkBlock} radioBlock`}>
              <input type="radio" name="date" id="day3" />
              <label htmlFor="day3">Last 3 month</label>
            </div>
            <div className={`${styles.checkBlock} radioBlock`}>
              <input type="radio" name="date" id="period" />
              <label
                htmlFor="period"
                onClick={() => {
                  setIsOpenDateRange(true);
                }}
              >
                Select period
                <span className="radioBlock__icon svgCalendarIcon"></span>
              </label>

              {dateRange[0].startDate !== undefined &&
                dateRange[0].endDate !== undefined && (
                  <span className="radioBlock__time">
                    {` ${formatedDate(dateRange[0].startDate)} - ${formatedDate(
                      dateRange[0].endDate
                    )}`}
                    <span
                      className="radioBlock__icon svgCloseDarkIcon"
                      onClick={clearDateRange}
                    ></span>
                  </span>
                )}

              {isOpenDateRange && (
                <div className="dateRange" ref={outsideAlerterRef}>
                  <DateRange
                    // showPreview={false}
                    showDateDisplay={
                      dateRange[0].startDate !== undefined ? true : false
                    }
                    showMonthAndYearPickers={false}
                    editableDateInputs={false}
                    moveRangeOnFirstSelection={false}
                    retainEndDateOnFirstSelection={false}
                    ranges={dateRange}
                    onChange={handleDateRange}
                    rangeColors={["rgba(0, 160, 104, 1)"]}
                    dateDisplayFormat={"dd MMM yyyy"}
                  />

                  <div className="dateRange__controls">
                    {dateRange[0].startDate !== undefined && (
                      <span
                        className="dateRange__icon svgCloseDarkIcon"
                        onClick={clearDateRange}
                      ></span>
                    )}

                    <span
                      className="linkBack"
                      onClick={() => {
                        setIsOpenDateRange(false);
                      }}
                    >
                      Continue
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.filter__col}>
          <span className={styles.filter__title}>Sort by:</span>
          <div className={styles.filter__list}>
            <div className={`${styles.checkBlock} radioBlock`}>
              <input type="radio" name="sort" id="sortNew" />
              <label htmlFor="sortNew">Show new ones first</label>
            </div>
            <div className={`${styles.checkBlock} radioBlock`}>
              <input type="radio" name="sort" id="sortOld" />
              <label htmlFor="sortOld">Show old ones first</label>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.filter__controls}>
        <Button theme="dark" type="submit" className={styles.btn}>
          Apply filter
        </Button>

        <span className={styles.filter__clear}>Clean the filter</span>
      </div>
    </div>
  );
};

export default Filter;
