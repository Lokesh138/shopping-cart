function getCategories() {
  const categories = [
    { key: "all", display: "All"},
    { key: "electronics", display: "Electronics" },
    { key: "books", display: "Books" },
    { key: "music", display: "Music" },
  ];
  return categories;
}
function getProducts(category) {
  const products = [
    {
      key: "headphones",
      display: "Head Phones",
      category: "electronics",
      svg: (
        <svg
          width="72"
          height="63"
          viewBox="0 0 72 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.9502 0.412354C16.0468 0.412354 0.978527 16.9776 0.343872 36.0187V50.4837C0.343872 52.3336 1.83906 53.8218 3.55679 53.8218C5.27451 53.8218 7.02006 52.3336 7.02006 50.4837V36.0187C7.02006 20.0654 20.0025 7.11636 35.9502 7.11636C51.9035 7.11636 64.8803 20.0654 64.8803 36.0187V50.4837C64.8803 52.3336 66.3686 53.8218 68.2184 53.8218C70.0683 53.8218 71.5565 52.3336 71.5565 50.4837V35.8935C70.9167 16.9776 55.8536 0.412354 35.9502 0.412354ZM22.5978 36.0187H20.3724C15.4571 36.0187 11.4708 40.0105 11.4708 44.9383V53.8051C11.4708 58.7316 15.4626 62.7234 20.3724 62.7234H22.5978C25.0541 62.7234 27.0486 60.7289 27.0486 58.2657V40.4764C27.0486 38.0076 25.0597 36.0187 22.5978 36.0187ZM51.528 36.0187H49.3026C46.8463 36.0187 44.8518 38.0104 44.8518 40.475V58.2643C44.8518 60.7261 46.8463 62.722 49.3026 62.722L51.528 62.7234C56.4433 62.7234 60.4295 58.7316 60.4295 53.8037V44.9369C60.4295 40.0105 56.4377 36.0187 51.528 36.0187Z"
            fill="black"
          />
        </svg>
      ),
    },
    {
      key: "laptops",
      display: "Laptops",
      category: "electronics",
      svg: (
        <svg
          width="80"
          height="61"
          viewBox="0 0 80 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.2139 0.895935C11.2465 0.895935 9.3597 1.67747 7.96856 3.06861C6.57741 4.45975 5.79588 6.34655 5.79588 8.31392V50.3492H75.0304V8.31392C75.0304 6.34655 74.2489 4.45975 72.8577 3.06861C71.4666 1.67747 69.5798 0.895935 67.6124 0.895935H13.2139ZM0.850555 52.8218H79.9757C79.9757 54.7892 79.1942 56.676 77.803 58.0671C76.4119 59.4583 74.5251 60.2398 72.5577 60.2398H8.26854C6.30117 60.2398 4.41437 59.4583 3.02323 58.0671C1.63209 56.676 0.850555 54.7892 0.850555 52.8218H0.850555Z"
            fill="black"
          />
        </svg>
      ),
    },
    {
      key: "tablets",
      display: "Tablets",
      category: "electronics",
      svg: (
        <svg
          width="47"
          height="64"
          viewBox="0 0 47 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.0149536 8.69574C0.0149536 6.63 0.835565 4.64887 2.29626 3.18817C3.75696 1.72747 5.7381 0.90686 7.80384 0.90686L38.9594 0.90686C41.0251 0.90686 43.0062 1.72747 44.4669 3.18817C45.9276 4.64887 46.7482 6.63 46.7482 8.69574V55.429C46.7482 57.4948 45.9276 59.4759 44.4669 60.9366C43.0062 62.3973 41.0251 63.2179 38.9594 63.2179H7.80384C5.7381 63.2179 3.75696 62.3973 2.29626 60.9366C0.835565 59.4759 0.0149536 57.4948 0.0149536 55.429V8.69574ZM27.276 51.5346C27.276 50.5017 26.8657 49.5112 26.1354 48.7808C25.405 48.0505 24.4145 47.6402 23.3816 47.6402C22.3487 47.6402 21.3582 48.0505 20.6278 48.7808C19.8975 49.5112 19.4872 50.5017 19.4872 51.5346C19.4872 52.5675 19.8975 53.558 20.6278 54.2884C21.3582 55.0187 22.3487 55.429 23.3816 55.429C24.4145 55.429 25.405 55.0187 26.1354 54.2884C26.8657 53.558 27.276 52.5675 27.276 51.5346Z"
            fill="black"
          />
        </svg>
      ),
    },
    {
      key: "printers",
      display: "Printers",
      category: "electronics",
      svg: (
        <svg
          width="61"
          height="58"
          viewBox="0 0 61 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M45.9762 0.696559C45.9762 0.382067 45.7189 0.124756 45.4044 0.124756H15.0988C14.7843 0.124756 14.527 0.382067 14.527 0.696559V11.2749H45.9762V0.696559ZM54.5532 15.8493H5.94996C2.79075 15.8493 0.231934 18.4082 0.231934 21.5674V45.0113C0.231934 46.2764 1.25403 47.2985 2.51915 47.2985H14.527V56.7332C14.527 57.0477 14.7843 57.305 15.0988 57.305H45.4044C45.7189 57.305 45.9762 57.0477 45.9762 56.7332V47.2985H57.984C59.2491 47.2985 60.2712 46.2764 60.2712 45.0113V21.5674C60.2712 18.4082 57.7124 15.8493 54.5532 15.8493ZM41.1158 52.4447H19.3873V32.7175H41.1158V52.4447ZM52.8378 26.7136C52.8378 27.0281 52.5805 27.2854 52.266 27.2854H49.407C49.0925 27.2854 48.8352 27.0281 48.8352 26.7136V23.8546C48.8352 23.5401 49.0925 23.2828 49.407 23.2828H52.266C52.5805 23.2828 52.8378 23.5401 52.8378 23.8546V26.7136Z"
            fill="black"
          />
        </svg>
      ),
    },
    {
      key: "smartwatches",
      display: "Smart Watches",
      category: "electronics",
      svg: (
        <svg
          width="38"
          height="60"
          viewBox="0 0 38 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-13.7217 -1.65812H49.5784V61.642H-13.7217V-1.65812Z"
            fill="black"
          />
        </svg>
      ),
    },
    {
      key: "monitors",
      display: "Monitors",
      category: "electronics",
      svg: (
        <svg
          width="61"
          height="55"
          viewBox="0 0 61 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M51.4765 0.436504H9.64736C7.27012 0.436504 4.99024 1.38086 3.30928 3.06182C1.62832 4.74279 0.68396 7.02266 0.68396 9.3999V24.3389H60.4399V9.3999C60.4399 7.02266 59.4956 4.74279 57.8146 3.06182C56.1337 1.38086 53.8538 0.436504 51.4765 0.436504ZM0.68396 33.3023C0.68396 35.6795 1.62832 37.9594 3.30928 39.6404C4.99024 41.3213 7.27012 42.2657 9.64736 42.2657H27.5742V48.2413H15.623C14.8305 48.2413 14.0706 48.5561 13.5103 49.1164C12.9499 49.6767 12.6352 50.4367 12.6352 51.2291C12.6352 52.0215 12.9499 52.7815 13.5103 53.3418C14.0706 53.9021 14.8305 54.2169 15.623 54.2169H45.5009C46.2934 54.2169 47.0533 53.9021 47.6136 53.3418C48.174 52.7815 48.4887 52.0215 48.4887 51.2291C48.4887 50.4367 48.174 49.6767 47.6136 49.1164C47.0533 48.5561 46.2934 48.2413 45.5009 48.2413H33.5498V42.2657H51.4765C53.8538 42.2657 56.1337 41.3213 57.8146 39.6404C59.4956 37.9594 60.4399 35.6795 60.4399 33.3023V30.3145H0.68396V33.3023Z"
            fill="black"
          />
        </svg>
      ),
    },
    {
      key: "halfgirlfried",
      display: "Half Girl Friend",
      category: "books",
      svg: (
        <svg
          width="80"
          height="61"
          viewBox="0 0 80 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.2139 0.895935C11.2465 0.895935 9.3597 1.67747 7.96856 3.06861C6.57741 4.45975 5.79588 6.34655 5.79588 8.31392V50.3492H75.0304V8.31392C75.0304 6.34655 74.2489 4.45975 72.8577 3.06861C71.4666 1.67747 69.5798 0.895935 67.6124 0.895935H13.2139ZM0.850555 52.8218H79.9757C79.9757 54.7892 79.1942 56.676 77.803 58.0671C76.4119 59.4583 74.5251 60.2398 72.5577 60.2398H8.26854C6.30117 60.2398 4.41437 59.4583 3.02323 58.0671C1.63209 56.676 0.850555 54.7892 0.850555 52.8218H0.850555Z"
            fill="black"
          />
        </svg>
      ),
    },
    {
      key: "2002",
      display: "2002 by Annie Marie",
      category: "music",
      svg: (
        <svg
          width="80"
          height="61"
          viewBox="0 0 80 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.2139 0.895935C11.2465 0.895935 9.3597 1.67747 7.96856 3.06861C6.57741 4.45975 5.79588 6.34655 5.79588 8.31392V50.3492H75.0304V8.31392C75.0304 6.34655 74.2489 4.45975 72.8577 3.06861C71.4666 1.67747 69.5798 0.895935 67.6124 0.895935H13.2139ZM0.850555 52.8218H79.9757C79.9757 54.7892 79.1942 56.676 77.803 58.0671C76.4119 59.4583 74.5251 60.2398 72.5577 60.2398H8.26854C6.30117 60.2398 4.41437 59.4583 3.02323 58.0671C1.63209 56.676 0.850555 54.7892 0.850555 52.8218H0.850555Z"
            fill="black"
          />
        </svg>
      ),
    },
  ];
  if (category === "all") {
    return products;
  }
  return products.filter((product) => product.category === category);
}
export { getCategories, getProducts };
