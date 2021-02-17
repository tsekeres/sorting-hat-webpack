import renderToDom from '../helpers/renderToDom';
import { addStudentToArray } from '../helpers/data/studentData';

const showForm = () => {
  document.querySelector('#button-div').innerHTML = '';
  const content = `<div class="card m-3 justify-content-center">
                        <div class="card-body text-center">  
                            <h4>
                                Enter First Year's Name
                            </h4>
                            <div id="error-message"></div>
                            <div class="d-flex col-md-6 offset-md-3">
                                <label for="inlineFormInput">Student: </label>
                                <input type="text" class="form-control mx-3" id="student-name" placeholder="Luna Lovegood" required>
                               <button id="sort" class="btn btn-primary mb-2">Sort!</button>
                            </div>
                        </div>
                    </div>`;
  renderToDom('#sorting-form', content);
  document
    .querySelector('#student-name')
    .addEventListener('keyup', addStudentToArray); // this could have easily been accomplished by using a form tag instead of using separate form elements as form submits on enter key press also
};

export default showForm;
