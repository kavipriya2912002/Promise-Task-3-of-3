const container = document.getElementsByClassName("container")[0];

function countryDetails() {
  const url = "http://universities.hipolabs.com/search?country=United+Kingdom";

  //!Fetch and Promise
  fetch(url)
    .then((data) => data.json())
    .then((countries) => {
      

      //! forEach loop is used to map data
      countries.forEach((countrys) => {
        const division = document.createElement("div");
        division.setAttribute("class", "row");
        division.innerHTML = `<div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                      <div class="card h-100">
                                          <div class="card-header">UK Universities Information </div>
                                          
                                          <div class="card-body">
                                              <div class="card-text">Country Name: ${countrys.country}</div> <br />
                                              <div class="card-text">University Name: ${countrys.name}</div> <br />
                                              <div class="card-text">Alpha code: ${countrys.alpha_two_code}</div> <br />
                                              <div class="card-text">Web Page Reference:<a href='${countrys.web_pages}'>View Web page</a> </div> <br />
                                              <div class="card-text">Domains: ${countrys.domains}</div> <br />
                                       
                                          </div>
                                      </div>
                                  </div>
                                  <br /> 
                                  <br />`;
        container.appendChild(division);
      });
    })
    .catch((error) => console.log(error));
}

//!Function call
countryDetails();



