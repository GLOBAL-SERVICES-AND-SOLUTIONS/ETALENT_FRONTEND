import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Certification = ({ openCertificationDialog, isEditClick }) => {
  return (
    <Widget styleName="jr-card-profile">
      <div className="mb-3">
        <div className="cardHeaderAndAddButton">
          <div>
            <h3 className="card-title mb-2 mb-md-3">Certifications and Trainings</h3>
          </div>
          <div>
            <Fab size="small" color="primary" aria-label="add" onClick={openCertificationDialog} className='profileAddEditButton'>
              <AddIcon />
            </Fab>
          </div>
        </div>
        <hr />
        <div className="row profileSectionEditAndDelete">
          <div>
            <h4>PMP (Project Management)</h4>
          </div>
          <div>
            {isEditClick &&
              <div>
                <Fab size="small" color="primary" aria-label="delete">
                  <DeleteIcon />
                </Fab>
                <Fab size="small" color="primary" onClick={openCertificationDialog} aria-label="edit">
                  <EditIcon />
                </Fab>
              </div>}
          </div>
        </div>
        <div>
          <ul>
            <li>
              Certification Date : 08/2018<br />
              Expiry Date : 08/2019<br />
              Authority : PMI
            </li>
          </ul>
        </div>
      </div>


    </Widget>
  )
}


export default Certification;
