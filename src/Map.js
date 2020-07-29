import React from 'react';
import { ReactiveBase, SelectedFilters } from '@appbaseio/reactivesearch';
import { ReactiveMap  } from '@appbaseio/reactivemaps';
import { GoogleApiWrapper } from 'google-maps-react';
import './App.css';

class MapContainer extends React.Component {
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
			<ReactiveBase
				app="coral-c"
        credentials="ckohWJyxP:f76e9723-65e7-492d-91c1-cb2e63d83897"
				mapKey="AIzaSyBQdVcKCe0q_vOBDUvJYpzwGpt_d_uTj4Q"
			>
				<div className="row">
					<div className="col">
						<SelectedFilters/>
              <ReactiveMap
                dataField="position"
                componentId="maps"
                defaultZoom={12}
                defaultCenter={{ lat: 37.3347, lng: -121.8815 }}
                historicalData={true}
                setMarkerCluster={true}
                showMapStyles={false}
                showSearchAsMove={false}
                defaultMapStyle="Standard"
                onPopoverClick={this.onPopoverClick}
                autoCenter={true}
                size={100}
                react={{
                  and: [
                    "places",
                    "resourceReactor",
                    "nameReactor",
                    "queryResult"
                  ]
                }}
                renderData={this.renderData}
              />
					</div>
				</div>
			</ReactiveBase>
		);
	}
}

export default GoogleApiWrapper({
        apiKey: 'AIzaSyB6nvrLCTEpzIfVuMpTUi3HJAI4C9NO5oU'
      })(MapContainer);


