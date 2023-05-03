import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import "./App.css"
export default function Dropdown() {
  return (
    <div className="Sara">
    <Autocomplete
      disablePortal
      id="student-input"
      options={Characters}
      sx={{ width: 300 }}
      renderInput={(Satya) => (
        <TextField
          {...Satya}
          label="Characters"
          InputProps={{
            ...Satya.InputProps,
            startAdornment: (
              <>
                <SearchIcon color="disabled" sx={{ mr: 1 }} />
                {Satya.InputProps.startAdornment}
              </>
            )
          }}
        />
      )}
    />
    </div>
  );
}

const Characters = [
  { label: "Kali Charan" },
  { label: "Jatha Lal" },
  { label: "Tatya Tope" },
  { label: "Pikkachu" },
  { label: "Chala Jata hu me" },
  { label: "Taraak Mehta" },
  { label: "Munna Bhai" },
  { label: "Karn" },
  { label: "MahaBhart" },
  { label: "Krishna" },
  { label: "Urfi Javed" },
  { label: "Jagdish Bhagat" },
  { label: "Bhuvan Bham" },
  { label: "Gangajal" },
  { label: "Elon Mask" },
  { label: "Lalu Yadav" },
];