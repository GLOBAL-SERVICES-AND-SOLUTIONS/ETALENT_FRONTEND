import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Experience = ({ openExperienceDialog,
   isEditClick
   }) => {
  return (
    <Widget styleName="jr-card-profile" >
      <div className="mb-3">
        <div className="cardHeaderAndAddButton" >
          <div>
            <h3 className="card-title mb-2 mb-md-3">Experience</h3>
          </div>
          <div>
            <Fab onClick={openExperienceDialog} size="small" color="primary" aria-label="add" className='profileAddEditButton'>
              <AddIcon />
            </Fab>
          </div>
        </div>
        <hr />
        <br />
        <div className="row profileSectionEditAndDelete">
          <div className="row">
            <h5>Seven software development ltd.</h5>
          </div>

          {isEditClick &&
            <div>
              <Fab  size="small" color="primary" aria-label="delete">
                <DeleteIcon />
              </Fab>
              <Fab onClick={openExperienceDialog} size="small" color="primary" aria-label="edit">
                <EditIcon />
              </Fab>
            </div>
          }

        </div>
        <div>
          <ul>
            <li>
              Software Engineer or title<br />
              time period<br />
              Pakistan
            </li>
            <li>
              Test Ui Automation<br />
              time period<br />
              Pakistan
            </li>
          </ul>
        </div>
        </div>
    </Widget>
  )
}


export default Experience;
