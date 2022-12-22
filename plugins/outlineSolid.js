const plugin = require("tailwindcss/plugin");

const outlineSolid = plugin(function ({ addUtilities }) {
  addUtilities({
    ".outline-solid": {
      "outline-style": "solid",
    },
  });
});

module.exports = outlineSolid;
