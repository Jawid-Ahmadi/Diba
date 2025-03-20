import { useState } from "react";
import p from "../assets/p12 small.png";
import "../components/styles/product_card.css";
import { FaLayerGroup, FaSort, FaFilter, FaCircle, FaLeaf } from "react-icons/fa6";
function ShopPage() {
  const [category, setCategory] = useState(false);
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false);

  const cards = [
    {
      id: 0,
      natural: true,
      main_color: '#51a5f3',
      p_name: "White Cream",
      p_price: "$99.3",
      p_type: "Body Care",
      p_color: [
        { id: 1, color: "yellow" },
        { id: 2, color: "blue" },
      ],
    },
    {
      id: 1,
      natural: false,
      main_color: '#51a5f3',
      p_name: "Black Cream",
      p_price: "$30.3",
      p_type: "Body Care",
      p_color: [
        { id: 1, color: "red" },
        { id: 2, color: "blue" },
      ],
    },
    {
      id: 2,
      natural: true,
      main_color: '#51a5f3',
      p_name: "White Cream",
      p_price: "$99.3",
      p_type: "Body Care",
      p_color: [],
    },
    {
      id: 3,
      natural: false,
      main_color: '#51a5f3',
      p_name: "Sun Cream",
      p_price: "$30.3",
      p_type: "Body Care",
      p_color: [
        { id: 1, color: "purple" },
        { id: 2, color: "pink" },
      ],
    },
    
  ];

  const DEFAULT_COLOR = '#51a5f3';

  const [selectedColors, setSelectedColors] = useState(
    cards.reduce((acc, card) => {
      // If the card has p_color, use the first color; otherwise, use the default color
      acc[card.id] = card.p_color.length > 0 ? card.p_color[0].color : DEFAULT_COLOR;
      return acc;
    }, {})
  );

  // Function to handle color selection
  const handleColorChange = (cardId, color) => {
    setSelectedColors((prevState) => ({
      ...prevState,
      [cardId]: color, // Update the selected color for the specific card
    }));
  };

  const toggler = (e) => {
    const btn = e.currentTarget.getAttribute("name");
    if (btn == "Category") {
      setFilter(false);
      setSort(false);
      setCategory(!category);
    } else if (btn == "Filter") {
      setCategory(false);
      setSort(false);
      setFilter(!filter);
    } else if (btn == "Sort") {
      setFilter(false);
      setCategory(false);
      setSort(!sort);
    }
  };
  return (
    <>
      <div className="sticky inline-block top-[45%] left-0 ml-5 z-3 h-40">
        <div className="relative">
          <button
            onClickCapture={toggler}
            name="Category"
            className="z-2 block m-auto cursor-pointer bg-red-1 p-3 text-xl text-white mb-2 rounded-xl hover:p-4 transition-all"
          >
            <FaLayerGroup className="z-1" />
          </button>
          {category ? (
            <>
              <div
                id="anim"
                className="absolute z-2 -top-26 left-20 text-white rounded-lg bg-primary w-fit overflow-hidden whitespace-nowrap"
              >
                <h1 className="text-center mb-2 bg-red-1 p-2 text-lg font-bold">
                  Categories
                </h1>
                <div className="p-3">
                  <div className="mb-5">
                    <input type="checkbox" id="SkinCare" />
                    <label className="ml-2 cursor-pointer" htmlFor="SkinCare">
                      Skin Care
                    </label>
                  </div>

                  <div className="mb-5">
                    <input type="checkbox" id="HairCare" />
                    <label className="ml-2 cursor-pointer" htmlFor="HairCare">
                      Hair Care
                    </label>
                  </div>

                  <div className="mb-5">
                    <input type="checkbox" id="bodyCare" />
                    <label className="ml-2 cursor-pointer" htmlFor="bodyCare">
                      Body Care
                    </label>
                  </div>

                  <div className="mb-5">
                    <input type="checkbox" id="makeup" />
                    <label className="ml-2 cursor-pointer" htmlFor="makeup">
                      Makeup
                    </label>
                  </div>

                  <div>
                    <input type="checkbox" id="bath" />
                    <label className="ml-2 cursor-pointer" htmlFor="bath">
                      Bath
                    </label>
                  </div>
                </div>
              </div>
              <span
                id="anim2"
                className="absolute z-1 w-6 h-6 bg-primary rotate-45 left-18 top-3 rounded"
              ></span>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="relative">
          <button
            onClickCapture={toggler}
            name="Sort"
            className="block m-auto cursor-pointer bg-red-1 p-3 text-xl text-white mb-2 rounded-xl hover:p-4 transition-all"
          >
            <FaSort />
          </button>
          {sort ? (
            <>
              <div
                id="anim"
                className="absolute -top-32 left-20 text-white rounded-lg bg-primary w-[300px] overflow-hidden z-2 whitespace-nowrap"
              >
                <h1 className="text-center mb-2 bg-red-1 p-2 text-lg font-bold">
                  Sort
                </h1>

                <div className="grid grid-cols-2 p-2">
                  <div className="mb-5">
                    <label className="block" htmlFor="">
                      By Popularity
                    </label>
                    <select className="outline-0 px-2 py-1 border mt-2 rounded">
                      <option value="Default">Default</option>
                      <option value="Default">Most Papular</option>
                      <option value="Default">Trending</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label className="block" htmlFor="">
                      By Price
                    </label>
                    <select className="outline-0 px-2 py-1 border mt-2 rounded">
                      <option value="Default">Default</option>
                      <option value="Default">Low to High</option>
                      <option value="Default">High to Low </option>
                      <option value="Default">Range </option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label className="block" htmlFor="">
                      Rating & Review
                    </label>
                    <select className="outline-0 px-2 py-1 border mt-2 rounded">
                      <option value="Default">Default</option>
                      <option value="Default">Top Rated</option>
                      <option value="Default">Most Reviewd</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label className="block" htmlFor="">
                      New Arrival
                    </label>
                    <select className="outline-0 px-2 py-1 border mt-2 rounded">
                      <option value="Default">Default</option>
                      <option value="Default">Newest First</option>
                      <option value="Default">Oldest First</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label className="block" htmlFor="">
                      Discount & Deals
                    </label>
                    <select className="outline-0 px-2 py-1 border mt-2 rounded">
                      <option value="Default">Default</option>
                      <option value="Default">Best Discounts</option>
                      <option value="Default">On Sale</option>
                    </select>
                  </div>

                  <div className="mb-5 ml-4">
                    <label className="block" htmlFor="">
                      Alphabet
                    </label>
                    <select className="outline-0 px-2 py-1 border mt-2 rounded">
                      <option value="Default">Default</option>
                      <option value="Default">A-Z</option>
                      <option value="Default">Z-A</option>
                    </select>
                  </div>
                </div>
              </div>
              <span
                id="anim2"
                className="absolute z-1 w-6 h-6 bg-primary rotate-45 left-18 top-2 rounded"
              ></span>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="relative">
          <button
            onClickCapture={toggler}
            name="Filter"
            className="block m-auto cursor-pointer bg-red-1 p-3 text-xl text-white mb-2 rounded-xl hover:p-4 transition-all"
          >
            <FaFilter />
          </button>
          {filter ? (
            <>
              <div
                id="anim"
                className="absolute -top-30 left-20 text-white rounded-lg bg-primary w-fit overflow-hidden z-2 whitespace-nowrap"
              >
                <h1 className="text-center mb-2 bg-red-1 p-2 font-bold text-lg">
                  Filter
                </h1>

                <div className="p-3">
                  <div className="mb-5">
                    <label className="block" htmlFor="">
                      By Type
                    </label>
                    <select className="outline-0 px-2 py-1 border mt-2 rounded">
                      <option value="Default">Default</option>
                      <option value="Default">Skin Care</option>
                      <option value="Default">Hair Care</option>
                      <option value="Default">Body Care</option>
                      <option value="Default">Makeup</option>
                      <option value="Default">Bath</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label className="block" htmlFor="">
                      By Color
                    </label>
                    <select className="outline-0 px-2 py-1 border mt-2 rounded">
                      <option value="Default">Default</option>
                      <option className="text-red-1" value="Default">
                        Red{" "}
                      </option>
                      <option className="text-blue-400" value="Default">
                        Blue{" "}
                      </option>
                      <option className="text-green-400" value="Default">
                        Green{" "}
                      </option>
                      <option className="text-gray-400" value="Default">
                        Gray{" "}
                      </option>
                      <option className="text-yellow-400" value="Default">
                        Yellow{" "}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block" htmlFor="">
                      By Price
                    </label>
                    <select className="outline-0 px-2 py-1 border mt-2 rounded">
                      <option value="Default">Default</option>
                      <option value="Default">1-10</option>
                      <option value="Default">10-50 </option>
                      <option value="Default">50-100 </option>
                      <option value="Default">Over 100 </option>
                    </select>
                  </div>
                </div>
              </div>
              <span
                id="anim2"
                className="absolute z-1 w-6 h-6 bg-primary rotate-45 left-18 top-2 rounded"
              ></span>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <section className=" font-poppins -mt-30">
        <h1 className="font-bold text-5xl text-center mb-10">Shop</h1>
        <div id="cards_grid" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-7 m-auto ">
        {cards.map((card) => (
        <div
          key={card.id}
          id="card"
          style={{ '--color': selectedColors[card.id] }} // Dynamically set the CSS variable
        >
          {
            card.natural ? <FaLeaf className="absolute top-4 left-4 text-green-400 text-xl" title="Natural"/> : <></>
          }
          
          <img src={p} alt="" />
          <div id="content">
            <h1 id="header">{card.p_name}</h1>
            <span id="price">{card.p_price}</span>

            <div id="details">
              <div id="type">
                <span>{card.p_type}</span>
              </div>

              {card.p_color.length !== 0 && (
                <div id="color">
                  <span>Color:</span>
                  <div id="colors">
                    {card.p_color.map((c) => (
                      <FaCircle
                        key={c.id}
                        id="sub_color"
                        onClick={() => handleColorChange(card.id, c.color)}
                        style={{
                          color: c.color,
                          cursor: 'pointer',
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <button id="buy_btn">Details & Buy</button>
            </div>
          </div>
        </div>
      ))}
        </div>
      </section>
    </>
  );
}

export default ShopPage;
