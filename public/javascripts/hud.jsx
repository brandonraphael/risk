var Hud = React.createClass({
  render: function(){
    return (
            <div>
              <div className="row">
              <h3>{this.props.playerName}</h3>
              </div>
              <div className="row">
                <PlayerInfo/>
                <AttackerInfo/>
                <DefenderInfo/>
                <Actions/>
              </div>
            </div>
        );
      }
 });

var PlayerInfo = React.createClass({
  render: function(){
    return (
      <div className="col-md-4">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Player Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
             <td>Total Units</td>
             <td>4</td>
            </tr>
            <tr>
             <td>Territories Owned</td>
             <td>2</td>
            </tr>
            <tr>
             <td>Continents Owned</td>
             <td>1</td>
            </tr>
          </tbody>
        </table>
    </div>
    );
  }
});

var AttackerInfo = React.createClass({
  render: function(){
    return (
      <div className="col-md-3">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Attacker Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
             <td>Total Units</td>
             <td>4</td>
            </tr>
            <tr>
             <td>Territory attacking</td>
             <td>Scottsdale</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

var DefenderInfo = React.createClass({
  render: function(){
    return (
      <div className="col-md-3" >
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Defender Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
             <td>Total Units</td>
             <td>4</td>
            </tr>
            <tr>
             <td>Territory defending</td>
             <td>Scottdale</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

var Actions = React.createClass({
  render: function(){
    return (
      <div className="col-md-2">
        <div className="row">
          <div>
            <button className="btn btn-danger btn-block">Attack</button>
          </div>
        </div>
        <br/>
        <div className="row">
          <div>
            <button className="btn btn-default btn-block">Next Phase</button>
          </div>
        </div>
      </div>
    );
  }
});




ReactDOM.render(<Hud playerName="playerName1"/>, document.getElementById('hud-entry-point'));
