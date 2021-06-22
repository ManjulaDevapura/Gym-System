import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import $ from "jquery";

const Table = lazy(() => import("./Member_Instructor_Table"));

class User_Member extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
     

    };
  }

  componentDidMount() {
    $('[data-toggle="modal"]').hover(function () {
      $('[data-toggle="modal"]').tooltip();
    });

    $(function () {
      $('[data-toggle="modal"]').tooltip();
    });
  }

  render() {
    return (
      <Translation>
        {(t, { i18n }) => (
          <div>
            <div className="basicdata">
              <div className="card mb3">
                <div className="card-header">
                
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <Suspense fallback={<div>Loading....</div>}>
                      <Table />
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        )}
      </Translation>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.rLogin.isLoggedIn,
    token: state.rLogin.token,
    type_Id: state.rLogin.type_Id,

    name: state.rLogin.name,
    id: state.rLogin.id,

    tbl_State: state.r_Members.state,
    instructors_data: state.r_Users.user_data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
   
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User_Member);
