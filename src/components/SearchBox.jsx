import { useId } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useSelector, useDispatch } from 'react-redux'
import { changeFilters, selectNameFilter } from '../redux/filtersSlice'
import css from './SearchBox.module.css'

export default function SearchBox() {

  const id = useId();
  const dispatch = useDispatch();
  const filters = useSelector(selectNameFilter);

  const debounced = useDebouncedCallback(
    (value) => dispatch(changeFilters(value)),
    250
  );

  return (
    <div className={css.wrapper}>
      <label htmlFor={id}>
        <b>Find contact by name</b>
      </label>
      <input
        type="text"
        id={id}
        defaultValue={filters}
        onChange={(e) => debounced(e.target.value)}
      />
    </div>
  );
}

