import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import { selectFilteredContacts } from "../../redux/filterSlice";

export const Filter = () => {
  const filter = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Find contacts"
        variant="outlined"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};
