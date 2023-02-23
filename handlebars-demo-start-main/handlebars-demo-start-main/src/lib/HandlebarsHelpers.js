/**
 * A module with custom block helpers
 */

import Handlebars from "handlebars"; // import the handlebars library

export default {
  em: (options) => `<em>${options.fn()}</em>`,

  bold: (options) => `<strong>${options.fn({ firstname: "Tim" })}</strong>`,

  link: (text, url, target) =>
    `<a href="${url}" target="${target}">${text}</a>`,

  button: (use, options) => {
    const validUse = ["primary", "secondary", "success", "danger", "warning"];

    if (validUse.includes(use)) {
      return `<button class="${use}" type="button">${options.fn()}</button>`;
    } else {
      return `<button type="button">${options.fn()}</button>`;
    }
  },

  sum: (a, b) => a + b,

  customIf: (condition, options) => {
    if (condition) {
      return options.fn();
    } else {
      return options.inverse();
    }
  },

  isEq: (a, b) => {
    return a === b;
  },

  isNotEq: (a, b) => {
    return a !== b;
  },

  customEach: (list, options) => {
    const renderedHtml = [];
    for (const item of list) {
      return renderedHtml.push(options.fn(item));
    }
    return renderedHtml.join("");
  },
};
