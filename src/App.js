import React, { Component } from "react";
import  MapContainer  from "./Map";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  ReactiveBase,
  ResultList,
  MultiList,
  RatingsFilter,
  SelectedFilters,
  MultiDataList,
  DataSearch,
  RangeSlider
} from "@appbaseio/reactivesearch";

import { ReactiveMap } from "@appbaseio/reactivemaps";
import "./App.css";

// Importing Images
import americanFood from "./Images/americanFood.jpg";
import barFood from "./Images/barFood.jpeg";
import breakfast from "./Images/breakfast.jpeg";
import desserts from "./Images/desserts.jpeg";
import sandwich from "./Images/sandwich.jpeg";

import "bootstrap/dist/css/bootstrap.min.css";

import AddBiz from "./components/add-biz.component";
import EditBiz from "./components/edit-biz.component";
import BizList from "./components/biz-list.component";

class App extends Component {
  
  onData(resturant) {
    const image =
      resturant.cuisine === "Bar Food"
        ? barFood
        : resturant.cuisine === "Desserts"
        ? desserts
        : resturant.cuisine === "Breakfast"
        ? breakfast
        : resturant.cuisine === "American"
        ? americanFood
        : sandwich;

    const stars = [];
    const { rating, currency, address, cuisine } = resturant;
    for (let x = 0; x < rating; x++) {
      stars.push(
        <span key={x}>
          <i className="fa fa-star" />
        </span>
      );
    }

    const result = {
      image: image,
      title: resturant.name,
      description: (
        <div>
          <p>{address}</p>
          <span className="tag">{currency}</span>
          <span className="tag">{cuisine}</span>
          <div>Avg. Customer Reviews : {stars}</div>
        </div>
      )
    };
    return result;
  }

  componentDidMount(){
    const embedcode = `<script>
          (function() {
            var cx = '009696093307156488668:8us5tiyr6zs';
            var gcse = document.createElement('script');
            gcse.type = 'text/javascript';
            gcse.async = true;
            gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(gcse, s);
          })();
        </script>
        <gcse:search></gcse:search>`
        // eslint-disable-next-line no-undef
      $('#gsearch').html(embedcode)
      }

  onPopoverClick(marker) {
    return (
      <div
        className="row"
        style={{ margin: "0", maxWidth: "300px", paddingTop: 10 }}
      >
        <div className="col s12">
          <div>
            <strong>{marker.name}</strong>
          </div>
          <p style={{ margin: "5px 0", lineHeight: "18px" }}>
            {marker.address}
          </p>
        </div>
      </div>
    );
  }

  render() {
    return (

      // We need something like this For a nav bar
      // <Router>
      //   <div className="container">
      //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //       <Link to="/" className="navbar-brand">CORAL-C</Link>
      //       <div className="collpase navbar-collapse">
      //         <ul className="navbar-nav mr-auto">
      //           <li className="navbar-item">
      //             <Link to="/" className="nav-link">Local Resources</Link>
      //           </li>
      //           <li className="navbar-item">
      //             <Link to="/create" className="nav-link"> Todo</Link>
      //           </li>
      //         </ul>
      //       </div>
      //     </nav>
      //     <br/>
      //     <Route path="/" exact component={AddBiz} />
      //     <Route path="/edit/:id" component={EditBiz} />
      //     <Route path="/add" component={BizList} />
      //   </div>
      // </Router>
      <div className="container-fluid">
        <ReactiveBase
          app="yelp-app"
          credentials="hkXdk3vcA:a32683f3-c8ad-45db-8c86-2ac2c0f45e0c"
          type="yelp-app"
        >
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              CORAL-C
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="col-lg-7 dataSearch">
              
              </div>
              <div className="links">
                <a
                  target="_blank"
                  href="https://github.com/ycortes94/Final-Project"
                  className="btn link"
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </a>
                <a
                  target="_blank"
                  href="https://opensource.appbase.io/reactive-manual/"
                  className="btn link"
                >
                  <i className="fa fa-book" aria-hidden="true" /> Documentation
                </a>
              </div>
            </div>
          </nav>

          <div className="row">
            <div className="col-8 col-lg-3 col-md-3 col-sm-4 scroll">

              <div className="box">
                <MultiList
                  dataField="cuisine.keyword"
                  title="Cuisine Options"
                  componentId="cuisineReactor"
                  placeholder="Filter Cuisine"
                  showFilter={true}
                  filterLabel="Cuisine Options"
                  react={{
                    and: [
                      "ratingsReactor",
                      "currencyReactor",
                      "deliveringNowReactor",
                      "tableBookinReactor",
                      "musicReactor",
                      "bookingReactor",
                      "nameReactor",
                      "RangeSliderSensor"
                    ]
                  }}
                />
              </div>


              <div className="box">
                <RatingsFilter
                  componentId="ratingsReactor"
                  dataField="rating"
                  title="Avg. Customer Reviews"
                  data={[
                    { start: 4, end: 5, label: "> 4 stars" },
                    { start: 3, end: 5, label: "> 3 stars" },
                    { start: 2, end: 5, label: "> 2 stars" },
                    { start: 1, end: 5, label: "> 1 stars" }
                  ]}
                  showFilter={true}
                  filterLabel="Avg. Customer Reviews"
                  react={{
                    and: [""]
                  }}
                />
              </div>

              <div className="box">
                <MultiDataList
                  dataField="delivering_now"
                  componentId="deliveringNowReactor"
                  title="Refine By"
                  showSearch={false}
                  data={[
                    {
                      label: "Delivering Now",
                      value: true
                    }
                  ]}
                />

                <MultiDataList
                  dataField="has_table_booking"
                  componentId="tableBookinReactor"
                  showSearch={false}
                  data={[
                    {
                      label: "Has Table Bookings",
                      value: true
                    }
                  ]}
                />
                <MultiDataList
                  dataField="online_delivery"
                  componentId="deliveryReactor"
                  showSearch={false}
                  data={[
                    {
                      label: "Online Delivery",
                      value: true
                    }
                  ]}
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6 col-sm-8 scroll marginBottom">
            {
              <div id ='gsearch'></div>
            }
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
            <MapContainer />;
            </div>
          </div>
        </ReactiveBase>
      </div>
    );
  }
}

export default App;
