import renderToDom from '../helpers/renderToDom';

const initialScreen = () => {
  const screenLoad = `<div class="jumbotron text-center">
                      <h1 class="display-4">Welcome to Hoggy Hoggy Warts!</h1>
                      <p class="lead">
                        Stupefy alohomora totalus orchideous inflamarae locomotor momentum
                        serpensortia totalus. Patronum kedavra legilimens petrificus expecto
                        banishing expecto patronum arania mobilicorpus petrificus.
                      </p>
                      <hr class="my-4" />
                      <p>
                        Ennervate serpensortia deletrius evanesco imperio funnunculus
                        impedimenta.
                      </p>
                      <div id="button-div">
                        <button id="start-sorting" class="btn btn-primary btn-lg">
                          Let's Start Sorting
                        </button>
                      </div>
                      <div id="sorting-form" class="sorting-form"></div>
                    </div>
                    <div class="cards d-flex p-4">
                      <div class="new-student-cards">
                        <center><h4>First Year's</h4></center>
                        <div
                          id="first-years-card-display"
                          class="d-flex flex-wrap justify-content-center"
                        ></div>
                      </div>

                      <div class="moldy-voldy-cards">
                        <center><h4>He Who Must Not Be Named's Army</h4></center>
                        <div
                          id="voldermorts-army"
                          class="d-flex flex-wrap justify-content-center voldermorts-army mb-5"
                        >
                          No Death Eaters...yet!
                        </div>
                      </div>
                    </div>`;
  renderToDom('body', screenLoad);
};

export default initialScreen;
