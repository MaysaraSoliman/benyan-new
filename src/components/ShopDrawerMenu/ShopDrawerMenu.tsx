"use client";

import React, { useState } from "react";
import { StyledShopDrawerMenu } from "./ShopDrawerMenu.styled";
import { Button, Drawer, Radio, Collapse, Slider } from "antd";

// const { Panel } = Collapse;

const categories = [
  { label: "Pearl Jewellery", value: "Pearl Jewellery" },
  { label: "Diamond Jewellery", value: "Diamond Jewellery" },
  { label: "Gold Jewellery", value: "Gold Jewellery" },
  { label: "Silver Jewellery", value: "Silver Jewellery" },
  { label: "Platinum Jewellery", value: "Platinum Jewellery" },
];
const materials = [
  { label: "Rings", value: "Ring" },
  { label: "Necklaces", value: "Necklace" },
  { label: "Earings", value: "Earing" },
  { label: "Bracelets", value: "Bracelet" },
];

interface ShopDrawerMenuProps {
  onFilterChange: (filters: {
    category?: string;
    material?: string;
    sort?: string;
    priceRange?: [number, number];
  }) => void;
}

const ShopDrawerMenu: React.FC<ShopDrawerMenuProps> = ({ onFilterChange }) => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const [selectedMaterial, setSelectedMaterial] = useState<
    string | undefined
  >();
  const [sortOption, setSortOption] = useState<string | undefined>();
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);

  const showDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const handleCategoryChange = (e: any) => {
    const categoryValue = e.target.value;
    setSelectedCategory(categoryValue);
    onFilterChange({
      category: categoryValue,
      material: selectedMaterial,
      sort: sortOption,
      priceRange,
    });
  };

  const handleMaterialChange = (e: any) => {
    const materialValue = e.target.value;
    setSelectedMaterial(materialValue);
    onFilterChange({
      category: selectedCategory,
      material: materialValue,
      sort: sortOption,
      priceRange,
    });
  };

  const handleSortChange = (e: any) => {
    const sortValue = e.target.value;
    setSortOption(sortValue);
    onFilterChange({
      category: selectedCategory,
      material: selectedMaterial,
      sort: sortValue,
      priceRange,
    });
  };

  const handlePriceRangeChange = (value: [number, number]) => {
    setPriceRange(value);
    onFilterChange({
      category: selectedCategory,
      material: selectedMaterial,
      sort: sortOption,
      priceRange: value,
    });
  };

  const clearFilters = () => {
    setSelectedCategory(undefined);
    setSelectedMaterial(undefined);
    setSortOption(undefined);
    setPriceRange([0, 100000]);
    onFilterChange({
      category: undefined,
      sort: undefined,
      priceRange: undefined,
    });
  };

  const panels = [
    {
      key: "category",
      label: "Filter by Category",
      children: (
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
      ),
    },
    {
      key: "material",
      label: "Filter by Material",
      children: (
        <Radio.Group
          onChange={handleMaterialChange}
          value={selectedMaterial}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {materials.map((material) => (
            <Radio key={material.value} value={material.value}>
              {material.label}
            </Radio>
          ))}
        </Radio.Group>
      ),
    },
    {
      key: "price",
      label: "Sort by Price",
      children: (
        <Radio.Group
          onChange={handleSortChange}
          value={sortOption}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Radio value="priceLowToHigh">Low to High</Radio>
          <Radio value="priceHighToLow">High to Low</Radio>
        </Radio.Group>
      ),
    },
    {
      key: "price-range",
      label: "Filter by Price Range",
      children: (
        <>
          <div className="price-range">
            <span>Price range</span>
            <span>
              {" "}
              {priceRange[0]} SAR - {priceRange[1]} SAR
            </span>
          </div>
          <Slider
            range
            min={0}
            max={100000}
            value={priceRange}
            onChange={(value) => {
              setPriceRange(value as [number, number]);
            }} // Update state while dragging
            onAfterChange={(value) =>
              handlePriceRangeChange(value as [number, number])
            }
            marks={{ 0: "0 SAR", 30000: "30000 SAR", 100000: "100000 SAR" }}
          />
        </>
        // <Slider
        //   range
        //   min={0}
        //   max={100000}
        //   value={priceRange}
        //   onChange={(value) => {
        //     setPriceRange(value as [number, number]);
        //   }}
        //   marks={{ 0: "$0", 30000: "$30000", 100000: "$100000" }}
        // />
      ),
    },
  ];

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
        {/* <Collapse defaultActiveKey={["category", "price", "price range"]}>
          <Panel header="Filter by Category" key="category">
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

          <Panel header="Sort by Price" key="price">
            <Radio.Group
              onChange={handleSortChange}
              value={sortOption}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Radio value="priceLowToHigh">Low to High</Radio>
              <Radio value="priceHighToLow">High to Low</Radio>
            </Radio.Group>
          </Panel>

          <Divider className="divider" />

          <Panel header="Filter by Price Range" key="price range">
            <p>price: {priceRange}</p>
            <Slider
              range
              min={0}
              max={100000}
              value={priceRange}
              onChange={(value) => {
                setPriceRange(value as [number, number]);
              }} // Update state while dragging
              // onAfterChange={(value) =>
              //   handlePriceRangeChange(value as [number, number])
              // }
              marks={{ 0: "$0", 30000: "$30000", 100000: "$100000" }}
            />
          </Panel>

          {/* <Panel header="Filter by Price Range" key="3">
            <Slider
              range
              min={0}
              max={100000}
              value={priceRange}
              onChange={(value) =>
                handlePriceRangeChange(value as [number, number])
              }
              marks={{ 0: "$0", 30000: "$30000", 100000: "$100000" }}
            />
          </Panel> 
        </Collapse> */}
        <Collapse
          // destroyInactivePanel
          // items={panels.map((panel) => ({
          //   key: panel.key,
          //   header: panel.label,
          //   children: panel.content,
          // }))}
          items={panels}
        />
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
// import { Button, Drawer, Radio, Divider, Collapse } from "antd";

// const { Panel } = Collapse;

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
//   const [selectedCategory, setSelectedCategory] = useState<
//     string | undefined
//   >();
//   const [sortOption, setSortOption] = useState<string | undefined>();

//   const showDrawer = () => setOpen(true);
//   const closeDrawer = () => setOpen(false);

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

//   const clearFilters = () => {
//     setSelectedCategory(undefined);
//     setSortOption(undefined);
//     onFilterChange({ category: undefined, sort: undefined });
//   };

//   return (
//     <StyledShopDrawerMenu className="shop-drawer-menu">
//       <Button className="menu-btn" type="primary" onClick={showDrawer}>
//         Filters & Sorting
//       </Button>
//       <Drawer
//         className="shop-drawer"
//         title="Filters & Sorting"
//         onClose={closeDrawer}
//         open={open}
//       >
//         <Collapse>
//           {/* Category Filter */}
//           <Panel header="Filter by Category" key="1">
//             <Radio.Group
//               onChange={handleCategoryChange}
//               value={selectedCategory}
//               style={{ display: "flex", flexDirection: "column" }}
//             >
//               {categories.map((category) => (
//                 <Radio key={category.value} value={category.value}>
//                   {category.label}
//                 </Radio>
//               ))}
//             </Radio.Group>
//           </Panel>

//           <Divider className="divider" />

//           {/* Sort by Price */}
//           <Panel header="Sort by Price" key="2">
//             <Radio.Group
//               onChange={handleSortChange}
//               value={sortOption}
//               style={{ display: "flex", flexDirection: "column" }}
//             >
//               <Radio value="priceLowToHigh">Low to High</Radio>
//               <Radio value="priceHighToLow">High to Low</Radio>
//             </Radio.Group>
//           </Panel>
//         </Collapse>
//         {/* Clear All Filters Button */}
//         <Button
//           className="clear-filters-btn"
//           type="default"
//           onClick={clearFilters}
//           style={{ width: "100%", marginTop: 16 }}
//         >
//           Clear All Filters
//         </Button>
//       </Drawer>
//     </StyledShopDrawerMenu>
//   );
// };

// export default ShopDrawerMenu;

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
