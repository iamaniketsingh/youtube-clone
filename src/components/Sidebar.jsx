import React from 'react';
import { categories } from '../utils/constants';
import { Stack } from '@mui/material';



const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category, idx) => (
        <button
          className="btn"
          onClick={() => setSelectedCategory(category.name)}
          key={idx}
          style={{
            color: "white",
            backgroundColor: selectedCategory === category.name && "#FC1503",
            display: "flex",
            alignItems: "center",
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
        >
          <category.icon
            style={{
              margin: "10px",
              color: selectedCategory === category.name ? "white" : "#FC1503",
            }}
          />

          <span
            style={{
              opacity: "0.9",
              fontSize: "16px",
              fontFamily: 'Rubik", system-ui;', // Google Font, you need to include it in your project
              fontWeight: "500", // Medium weight
              lineHeight: "1.5", // Spacing between lines
              letterSpacing: "0.5px", // Slightly increased letter spacing
              textTransform: "capitalize", // Capitalizes the first letter of each word
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
