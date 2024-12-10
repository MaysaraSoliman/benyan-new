"use client";
import React, { useState } from "react";
import { StyledShopDrawerMenu } from "./ShopDrawerMenu.styled";
import { Button, Drawer, Radio, Divider, Collapse } from "antd";

const { Panel } = Collapse;

const categories = [
  { label: "Pearl Jewellery", value: "Pearl Jewellery" },
  { label: "Diamond Jewellery", value: "Diamond Jewellery" },
  { label: "Gold Jewellery", value: "Gold Jewellery" },
  { label: "Silver Jewellery", value: "Silver Jewellery" },
  { label: "Platinum Jewellery", value: "Platinum Jewellery" },
];

interface ShopDrawerMenuProps {
  onFilterChange: (filters: { category?: string; sort?: string }) => void;
}

const ShopDrawerMenu: React.FC<ShopDrawerMenuProps> = ({ onFilterChange }) => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const [sortOption, setSortOption] = useState<string | undefined>();

  const showDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const handleCategoryChange = (e: any) => {
    const categoryValue = e.target.value;
    setSelectedCategory(categoryValue);
    onFilterChange({ category: categoryValue, sort: sortOption });
  };

  const handleSortChange = (e: any) => {
    const sortValue = e.target.value;
    setSortOption(sortValue);
    onFilterChange({ category: selectedCategory, sort: sortValue });
  };

  const clearFilters = () => {
    setSelectedCategory(undefined);
    setSortOption(undefined);
    onFilterChange({ category: undefined, sort: undefined });
  };

  return (
    <StyledShopDrawerMenu className="shop-drawer-menu">
      <Button className="menu-btn" type="primary" onClick={showDrawer}>
        Filters & Sorting
      </Button>
      <Drawer
        className="shop-drawer"
        title="Filters & Sorting"
        onClose={closeDrawer}
        open={open}
      >
        <Collapse>
          {/* Category Filter */}
          <Panel header="Filter by Category" key="1">
            <Radio.Group
              onChange={handleCategoryChange}
              value={selectedCategory}
              style={{ display: "flex", flexDirection: "column" }}
            >
              {categories.map((category) => (
                <Radio key={category.value} value={category.value}>
                  {category.label}
                </Radio>
              ))}
            </Radio.Group>
          </Panel>

          <Divider className="divider" />

          {/* Sort by Price */}
          <Panel header="Sort by Price" key="2">
            <Radio.Group
              onChange={handleSortChange}
              value={sortOption}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Radio value="priceLowToHigh">Low to High</Radio>
              <Radio value="priceHighToLow">High to Low</Radio>
            </Radio.Group>
          </Panel>
        </Collapse>
        {/* Clear All Filters Button */}
        <Button
          className="clear-filters-btn"
          type="default"
          onClick={clearFilters}
          style={{ width: "100%", marginTop: 16 }}
        >
          Clear All Filters
        </Button>
      </Drawer>
    </StyledShopDrawerMenu>
  );
};

export default ShopDrawerMenu;

// "use client";
// import React, { useState } from "react";
// import { StyledShopDrawerMenu } from "./ShopDrawerMenu.styled";
// import { Button, Drawer, Radio, Divider } from "antd";

// const categories = [
//   { label: "Pearl Jewellery", value: "Pearl Jewellery" },
//   { label: "Diamond Jewellery", value: "Diamond Jewellery" },
//   { label: "Gold Jewellery", value: "Gold Jewellery" },
//   { label: "Silver Jewellery", value: "Silver Jewellery" },
//   { label: "Platinum Jewellery", value: "Platinum Jewellery" },
// ];

// interface ShopDrawerMenuProps {
//   onFilterChange: (filters: { category?: string; sort?: string }) => void;
// }

// const ShopDrawerMenu: React.FC<ShopDrawerMenuProps> = ({ onFilterChange }) => {
//   const [open, setOpen] = useState(false);
//   const [childDrawerOpen, setChildDrawerOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<
//     string | undefined
//   >();
//   const [sortOption, setSortOption] = useState<string | undefined>();

//   const showDrawer = () => setOpen(true);
//   const closeDrawer = () => setOpen(false);

//   const showChildDrawer = () => setChildDrawerOpen(true);
//   const closeChildDrawer = () => setChildDrawerOpen(false);

//   const handleCategoryChange = (e: any) => {
//     const categoryValue = e.target.value;
//     setSelectedCategory(categoryValue);
//     onFilterChange({ category: categoryValue, sort: sortOption });
//   };

//   const handleSortChange = (e: any) => {
//     const sortValue = e.target.value;
//     setSortOption(sortValue);
//     onFilterChange({ category: selectedCategory, sort: sortValue });
//   };

//   return (
//     <StyledShopDrawerMenu className="shop-drawer-menu">
//       <Button className="menu-btn" type="primary" onClick={showDrawer}>
//         Filters & Sorting
//       </Button>
//       <Drawer title="Filters & Sorting" onClose={closeDrawer} open={open}>
//         <div>
//           <h4>Filter Options</h4>
//           <Button type="default" block onClick={showChildDrawer}>
//             Select Category & Sorting
//           </Button>
//         </div>
//         <Drawer
//           title="Category & Sorting"
//           width={320}
//           onClose={closeChildDrawer}
//           open={childDrawerOpen}
//         >
//           {/* Category Filter */}
//           <div>
//             <h4>Filter by Category</h4>
//             <Radio.Group
//               onChange={handleCategoryChange}
//               value={selectedCategory}
//             >
//               {categories.map((category) => (
//                 <Radio key={category.value} value={category.value}>
//                   {category.label}
//                 </Radio>
//               ))}
//             </Radio.Group>
//           </div>

//           <Divider />

//           {/* Sort by Price */}
//           <div>
//             <h4>Sort by Price</h4>
//             <Radio.Group onChange={handleSortChange} value={sortOption}>
//               <Radio value="priceLowToHigh">Low to High</Radio>
//               <Radio value="priceHighToLow">High to Low</Radio>
//             </Radio.Group>
//           </div>
//         </Drawer>
//       </Drawer>
//     </StyledShopDrawerMenu>
//   );
// };

// export default ShopDrawerMenu;

// "use client";
// import React, { useState } from "react";
// import { StyledShopDrawerMenu } from "./ShopDrawerMenu.styled";
// import { Button, Drawer, Select, Radio, Divider } from "antd";

// const { Option } = Select;

// const categories = [
//   { label: "Pearl Jewellery", value: "Pearl Jewellery" },
//   { label: "Diamond Jewellery", value: "Diamond Jewellery" },
//   { label: "Gold Jewellery", value: "Gold Jewellery" },
//   { label: "Silver Jewellery", value: "Silver Jewellery" },
// ];

// interface ShopDrawerMenuProps {
//   onFilterChange: (filters: { category?: string; sort?: string }) => void;
// }

// const ShopDrawerMenu: React.FC<ShopDrawerMenuProps> = ({ onFilterChange }) => {
//   const [open, setOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<
//     string | undefined
//   >();
//   const [sortOption, setSortOption] = useState<string | undefined>();
//   console.log("categories =>", categories);

//   const showDrawer = () => {
//     setOpen(true);
//   };

//   const onClose = () => {
//     setOpen(false);
//   };

//   // Handle category change
//   const handleCategoryChange = (value: string | undefined) => {
//     setSelectedCategory(value);
//     onFilterChange({ category: value, sort: sortOption });
//   };

//   // Handle sort change
//   const handleSortChange = (e: any) => {
//     const sortValue = e.target.value;
//     setSortOption(sortValue);
//     onFilterChange({ category: selectedCategory, sort: sortValue });
//   };

//   return (
//     <StyledShopDrawerMenu className="shop-drawer-menu">
//       <Button className="menu-btn" type="primary" onClick={showDrawer}>
//         Filters & Sorting
//       </Button>
//       <Drawer title="Filters & Sorting" onClose={onClose} open={open}>
//         {/* Category Filter */}
//         <div>
//           <h4>Filter by Category</h4>
//           <Select
//             placeholder="Select Category"
//             style={{ width: "100%" }}
//             onChange={handleCategoryChange}
//             allowClear
//           >
//             {categories.map((category) => (
//               <Option key={category.value} value={category.value}>
//                 {category.label}
//               </Option>
//             ))}
//           </Select>
//         </div>

//         <Divider />

//         {/* Sort by Price */}
//         <div>
//           <h4>Sort by Price</h4>
//           <Radio.Group onChange={handleSortChange} value={sortOption}>
//             <Radio value="priceLowToHigh">Low to High</Radio>
//             <Radio value="priceHighToLow">High to Low</Radio>
//           </Radio.Group>
//         </div>
//       </Drawer>
//     </StyledShopDrawerMenu>
//   );
// };

// export default ShopDrawerMenu;

//****** */

// "use client";
// import React, { useState } from "react";
// import { StyledShopDrawerMenu } from "./ShopDrawerMenu.styled";
// import { Button, Drawer, Select, Radio, Divider } from "antd";

// const { Option } = Select;

// const categories = [
//   { label: "Pearl Jewellery", value: "Pearl Jewellery" },
//   { label: "Diamond Jewellery", value: "Diamond Jewellery" },
//   { label: "Gold Jewellery", value: "Gold Jewellery" },
//   { label: "Silver Jewellery", value: "Silver Jewellery" },
// ];

// interface ShopDrawerMenuProps {
//   onFilterChange: (filters: { category?: string; sort?: string }) => void;
// }

// const ShopDrawerMenu: React.FC<ShopDrawerMenuProps> = ({ onFilterChange }) => {
//   const [open, setOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<
//     string | undefined
//   >();
//   const [sortOption, setSortOption] = useState<string | undefined>();

//   const showDrawer = () => {
//     setOpen(true);
//   };

//   const onClose = () => {
//     setOpen(false);
//   };

//   // Handle category change
//   const handleCategoryChange = (value: string) => {
//     setSelectedCategory(value);
//     onFilterChange({ category: value, sort: sortOption });
//   };

//   // Handle sort change
//   const handleSortChange = (e: any) => {
//     const sortValue = e.target.value;
//     setSortOption(sortValue);
//     onFilterChange({ category: selectedCategory, sort: sortValue });
//   };

//   return (
//     <StyledShopDrawerMenu className="shop-drawer-menu">
//       <Button className="menu-btn" type="primary" onClick={showDrawer}>
//         Filters & Sorting
//       </Button>
//       <Drawer title="Filters & Sorting" onClose={onClose} open={open}>
//         {/* Category Filter */}
//         <div>
//           <h4>Filter by Category</h4>
//           <Select
//             placeholder="Select Category"
//             style={{ width: "100%" }}
//             onChange={handleCategoryChange}
//             allowClear
//           >
//             <Option value="gold">Gold</Option>
//             <Option value="silver">Silver</Option>
//             <Option value="platinum">Platinum</Option>
//           </Select>
//         </div>

//         <Divider />

//         {/* Sort by Price */}
//         <div>
//           <h4>Sort by Price</h4>
//           <Radio.Group onChange={handleSortChange} value={sortOption}>
//             <Radio value="priceLowToHigh">Low to High</Radio>
//             <Radio value="priceHighToLow">High to Low</Radio>
//           </Radio.Group>
//         </div>
//       </Drawer>
//     </StyledShopDrawerMenu>
//   );
// };

// export default ShopDrawerMenu;

// "use client";
// import React, { useState } from "react";
// import { StyledShopDrawerMenu } from "./ShopDrawerMenu.styled";
// import { Button, Drawer } from "antd";

// const ShopDrawerMenu = () => {
//   const [open, setOpen] = useState(false);

//   const showDrawer = () => {
//     setOpen(true);
//   };

//   const onClose = () => {
//     setOpen(false);
//   };
//   return (
//     <StyledShopDrawerMenu className="shop-drawer-menu">
//       <Button className="menu-btn" type="primary" onClick={showDrawer}>
//         Filters & Sorting
//       </Button>
//       <Drawer title="Basic Drawer" onClose={onClose} open={open}>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Drawer>
//     </StyledShopDrawerMenu>
//   );
// };

// export default ShopDrawerMenu;
