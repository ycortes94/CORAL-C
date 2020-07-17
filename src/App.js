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

// import AddBiz from "./components/add-biz.component";
// import EditBiz from "./components/edit-biz.component";
// import BizList from "./components/biz-list.component";

class App extends Component {
  
  onData(resource) {
    const image =
      resource.cuisine === "Bar Food"
        ? barFood
        : resource.cuisine === "Desserts"
        ? desserts
        : resource.cuisine === "Breakfast"
        ? breakfast
        : resource.cuisine === "American"
        ? americanFood
        : sandwich;

    
    const { biz_address, biz_type, biz_description } = resource;

    const result = {
      image: image,
      title: resource.biz_name,
      description: (
        <div>
          <p>{biz_address}</p>
          <span className="tag">{biz_description}</span>
          <span className="tag">{biz_type}</span>
          {/* <div>Avg. Customer Reviews : {stars}</div> */}
        </div>
      )
    };
    return result;
  }

  componentDidMount(){
    
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
          // app="yelp-app"
          // credentials="hkXdk3vcA:a32683f3-c8ad-45db-8c86-2ac2c0f45e0c"
          // type="yelp-app"
          app="coral-c"
          credentials="ckohWJyxP:f76e9723-65e7-492d-91c1-cb2e63d83897"
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
                <DataSearch
                  componentId="nameReactor"
                  placeholder="Search for Resources"
                  dataField="name"
                  searchInputId="NameSearch"
                  iconPosition="right"
                />
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
                  dataField="biz_type"
                  title="Resource Options"
                  componentId="cuisineReactor"
                  placeholder="Filter Resource"
                  showFilter={true}
                  filterLabel="Resource Options"
                  // react={{
                  //   and: [
                  //     "ratingsReactor",
                  //     "currencyReactor",
                  //     "deliveringNowReactor",
                  //     "tableBookinReactor",
                  //     "musicReactor",
                  //     "bookingReactor",
                  //     "nameReactor",
                  //     "RangeSliderSensor"
                  //   ]
                  // }}
                />
              </div>

            </div>
            <div className="col-12 col-lg-6 col-md-6 col-sm-8 scroll marginBottom">
              <SelectedFilters />
              <ResultList
                componentId="queryResult"
                dataField="biz_name"
                from={0}
                size={15}
                onData={this.onData}
                pagination={true}
                react={{
                  and: [
                    "currencyReactor",
                    "ratingsReactor",
                    "cuisineReactor",
                    "deliveringNowReactor",
                    "bookingReactor",
                    "deliveryReactor",
                    "tableBookinReactor",
                    "nameReactor",
                    "RangeSliderSensor"
                  ]
                }}
              />
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
