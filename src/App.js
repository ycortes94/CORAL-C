import React, { Component } from "react";
import  MapContainer  from "./Map";
import {
  ReactiveBase,
  ResultList,
  MultiList,
  SelectedFilters,
  DataSearch,
} from "@appbaseio/reactivesearch";
import "./App.css";

// Importing Images
import education from "./Images/Education.jpeg"
import financial from "./Images/Financial.jpeg";
import food from "./Images/Food.jpeg";
import healthcare from "./Images/Healthcare.jpg";
import shelter from "./Images/Shelter.png";
import welfare from "./Images/Welfare.jpeg";
import child from "./Images/Child.jpg";

//Default Image
import sandwich from "./Images/sandwich.jpeg";


import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  
  onData(resource) {
    const image =
      resource.biz_type === "Food"
      ? food
      : resource.biz_type === "Education"
      ? education
      : resource.biz_type === "Financial"
      ? financial
      : resource.biz_type === "Health"
      ? healthcare
      : resource.biz_type === "Shelter"
      ? shelter
      : resource.biz_type === "Welfare"
      ? welfare
      : resource.biz_type === "Child"
      ? child
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
        </div>
      )
    };
    return result;
  }

  onPopoverClick(marker) {
    return (
      <div
        className="row"
        style={{ margin: "0", maxWidth: "300px", paddingTop: 10 }}
      >
        <div className="col s12">
          <div>
            <strong>{marker.biz_name}</strong>
          </div>
          <p style={{ margin: "5px 0", lineHeight: "18px" }}>
            {marker.biz_address}
          </p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <ReactiveBase
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
                  dataField="biz_name"
                  searchInputId="NameSearch"
                  iconPosition="right"
                />
              </div>

              <div className="links">
                <a
                  href="https://github.com/ycortes94/Final-Project"
                  className="btn link"
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </a>
                <a
                  href="#"
                  className="btn link"
                >
                  <i className="fa fa-book" aria-hidden="true" /> Add a Business
                </a>
              </div>
            </div>
          </nav>

          <div className="row">
            
            <div className="col-sm-1 scroll">
              <div className="box">
                <MultiList
                  dataField="biz_type" 
                  title="Resource Options"
                  componentId="ResourceReactor"
                  placeholder="Filter Resource"
                  showFilter={true}
                  filterLabel="Resource Options"
                />
              </div>

            </div>
            <div className="col-sm-5">
              <SelectedFilters/>
              <ResultList
                componentId="queryResult"
                dataField="biz_name"
                from={0}
                size={15}
                onData={this.onData}
                pagination={true}
                react={{
                  and: [
                    "ResourceReactor",
                    "tableBookinReactor",
                    "nameReactor",
                    "RangeSliderSensor"
                  ]
                }}
              />
            </div>

            <div className="col-lg-6 col-md-3 col-sm-6">
             <MapContainer></MapContainer>
            </div>
          </div>
        </ReactiveBase>
      </div>
    );
  }
}

export default App;