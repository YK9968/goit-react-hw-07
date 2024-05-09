import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectValueFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectValueFilter);

  return (
    <div className={css.containerSearcBox}>
      <p>Find contacts by name</p>
      <input
        value={value}
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
        type="text"
      />
    </div>
  );
}
